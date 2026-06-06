import type { APIRoute } from "astro";
import { Resend } from "resend";
import { verifyFormToken } from "@shared/utils/form-token";

export const prerender = false;

const RESEND_API_KEY =
  process.env.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;

const COOLDOWN_COOKIE = "contact_sent";
const COOLDOWN_SECONDS = 600; // 10min guard

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  companyName?: string;
  jobTitle?: string;
  companySize?: string;
  phone?: string;
  website?: string; // honeypot
  formTs?: string;
  formSig?: string;
  locale?: string;
  idempotencyKey?: string;
}

type Lang = "es" | "en";

const EMAIL_COPY: Record<
  Lang,
  {
    notProvided: string;
    subject: (name: string) => string;
    contactInfo: string;
    name: string;
    email: string;
    phone: string;
    companyDetails: string;
    company: string;
    role: string;
    size: string;
    message: string;
  }
> = {
  es: {
    notProvided: "No proporcionado",
    subject: (name) => `Nuevo contacto de ${name}`,
    contactInfo: "Información del Contacto",
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    companyDetails: "Detalles de la Empresa",
    company: "Empresa",
    role: "Cargo",
    size: "Tamaño",
    message: "Mensaje",
  },
  en: {
    notProvided: "Not provided",
    subject: (name) => `New contact from ${name}`,
    contactInfo: "Contact Information",
    name: "Name",
    email: "Email",
    phone: "Phone",
    companyDetails: "Company Details",
    company: "Company",
    role: "Job title",
    size: "Size",
    message: "Message",
  },
};

const json = (body: unknown, status = 200, headers?: Record<string, string>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });

export const POST: APIRoute = async ({ request }) => {
  // 1. Cookie cooldown — already sent recently from this browser.
  const cookie = request.headers.get("cookie") ?? "";
  if (new RegExp(`(?:^|;\\s*)${COOLDOWN_COOKIE}=1`).test(cookie)) {
    return json({ success: false, error: "cooldown" }, 429);
  }

  // 2. Parse.
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ success: false, error: "Invalid JSON" }, 400);
  }

  // 3. Honeypot — bots fill the hidden field. Fake a success so they don't retry.
  if (payload.website && payload.website.trim() !== "") {
    return json({ success: true });
  }

  // 4. Time-trap — signed render timestamp, rejects instant/forged submits.
  const tokenCheck = verifyFormToken(
    Number(payload.formTs),
    payload.formSig ?? "",
    Date.now(),
  );
  if (!tokenCheck.ok) {
    return json({ success: false, error: "validation" }, 400);
  }

  const { name, email, message, companyName, jobTitle, companySize } = payload;
  if (!name || !email || !message) {
    return json({ success: false, error: "Missing required fields" }, 400);
  }

  if (!RESEND_API_KEY) {
    return json({ success: false, error: "email_not_configured" }, 500);
  }
  const resend = new Resend(RESEND_API_KEY);

  const lang: Lang = payload.locale === "en" ? "en" : "es";
  const c = EMAIL_COPY[lang];

  const phone = payload.phone?.trim() || c.notProvided;
  const company = companyName?.trim() || c.notProvided;
  const role = jobTitle?.trim() || c.notProvided;
  const size = companySize?.trim() || c.notProvided;
  const userMessage = message.trim();

  // 5. Idempotency — Resend dedupes the same key for 24h (double-click, retry, replay).
  const key = payload.idempotencyKey;
  const options =
    typeof key === "string" && key.length > 0 && key.length <= 256
      ? { idempotencyKey: key }
      : undefined;

  try {
    const { data, error } = await resend.emails.send(
      {
        from: "dotcom@synce.mx",
        to: ["yamil.yscapa@gmail.com", "hola@synce.mx"],
        subject: c.subject(name),
        html: `
        <h2>${c.contactInfo}</h2>
        <p><strong>${c.name}:</strong> ${name}</p>
        <p><strong>${c.email}:</strong> ${email}</p>
        <p><strong>${c.phone}:</strong> ${phone}</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 16px 0;">
        <h2>${c.companyDetails}</h2>
        <p><strong>${c.company}:</strong> ${company}</p>
        <p><strong>${c.role}:</strong> ${role}</p>
        <p><strong>${c.size}:</strong> ${size}</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 16px 0;">
        <h2>${c.message}</h2>
        <p>${userMessage}</p>
      `,
        text: `
${c.name}: ${name}
${c.email}: ${email}
${c.phone}: ${phone}

${c.company}: ${company}
${c.role}: ${role}
${c.size}: ${size}

${c.message}:
${userMessage}
      `,
      },
      options,
    );

    if (error) {
      return json({ success: false, error }, 400);
    }

    return json({ success: true, data }, 200, {
      "Set-Cookie": `${COOLDOWN_COOKIE}=1; Max-Age=${COOLDOWN_SECONDS}; Path=/; HttpOnly; SameSite=Strict; Secure`,
    });
  } catch (error) {
    const messageText = error instanceof Error ? error.message : "Unknown error";
    return json({ success: false, error: messageText }, 500);
  }
};
