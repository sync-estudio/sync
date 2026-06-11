import type { Lang } from "@i18n/ui";

type LegalSection = {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
};

export type LegalCopy = {
    metaTitle: string;
    metaDescription: string;
    title: string;
    updated: string;
    intro: string;
    sections: LegalSection[];
};

// NOTE: "SYNC Estudio" stands in for the formal legal name until the legal
// entity (or persona física) is confirmed — update both locales together.
export const privacy: Record<Lang, LegalCopy> = {
    es: {
        metaTitle: "Aviso de privacidad | SYNC Estudio",
        metaDescription:
            "Cómo SYNC Estudio recopila, usa y protege tus datos personales, y cómo ejercer tus derechos ARCO.",
        title: "Aviso de privacidad",
        updated: "Última actualización: 10 de junio de 2026",
        intro: "SYNC Estudio, con domicilio en Puebla, México, es responsable del tratamiento de los datos personales que nos compartes a través de este sitio. Este aviso explica qué datos recopilamos, para qué los usamos y cómo puedes ejercer tus derechos.",
        sections: [
            {
                heading: "Qué datos recopilamos",
                paragraphs: [
                    "Solo recopilamos los datos que tú nos proporcionas y los estrictamente necesarios para operar el sitio:",
                ],
                bullets: [
                    "Datos de contacto que envías por el formulario o al agendar una llamada: nombre, correo electrónico y, si decides incluirla, información sobre tu empresa y tu operación.",
                    "Datos de uso del sitio recopilados por herramientas de medición de terceros (por ejemplo, el píxel de Meta) mediante cookies o tecnologías similares.",
                ],
            },
            {
                heading: "Para qué los usamos",
                paragraphs: [
                    "Tratamos tus datos con estas finalidades:",
                ],
                bullets: [
                    "Responder a tu mensaje y dar seguimiento a tu solicitud.",
                    "Agendar y realizar la llamada de descubrimiento que solicites.",
                    "Preparar propuestas y, en su caso, formalizar una relación de servicios.",
                    "Medir el desempeño del sitio y de nuestras campañas.",
                ],
            },
            {
                heading: "Con quién se comparten",
                paragraphs: [
                    "No vendemos ni rentamos tus datos. Los compartimos únicamente con proveedores que necesitamos para operar — hospedaje del sitio, envío de correo, agenda de llamadas y medición — quienes los tratan conforme a sus propios avisos de privacidad y nuestras instrucciones.",
                ],
            },
            {
                heading: "Tus derechos (ARCO)",
                paragraphs: [
                    "Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, cancelación u oposición, así como revocar tu consentimiento, escribiendo a hola@synce.mx. Respondemos en un máximo de 20 días hábiles.",
                ],
            },
            {
                heading: "Cookies y tecnologías de medición",
                paragraphs: [
                    "Este sitio usa cookies y píxeles de terceros para medir visitas y conversiones. Puedes bloquearlas o eliminarlas desde la configuración de tu navegador sin que el sitio deje de funcionar.",
                ],
            },
            {
                heading: "Cambios a este aviso",
                paragraphs: [
                    "Cualquier cambio a este aviso se publicará en esta página con su fecha de actualización.",
                ],
            },
        ],
    },
    en: {
        metaTitle: "Privacy notice | SYNC Estudio",
        metaDescription:
            "How SYNC Estudio collects, uses and protects your personal data, and how to exercise your rights.",
        title: "Privacy notice",
        updated: "Last updated: June 10, 2026",
        intro: "SYNC Estudio, based in Puebla, Mexico, is responsible for the personal data you share with us through this site. This notice explains what we collect, what we use it for, and how to exercise your rights.",
        sections: [
            {
                heading: "What we collect",
                paragraphs: [
                    "We only collect what you provide and what is strictly needed to run the site:",
                ],
                bullets: [
                    "Contact data you send through the form or when booking a call: name, email and, if you choose to include it, information about your company and operation.",
                    "Site usage data collected by third-party measurement tools (for example, the Meta pixel) through cookies or similar technologies.",
                ],
            },
            {
                heading: "What we use it for",
                paragraphs: ["We process your data for these purposes:"],
                bullets: [
                    "Replying to your message and following up on your request.",
                    "Scheduling and holding the discovery call you request.",
                    "Preparing proposals and, where applicable, formalizing a service relationship.",
                    "Measuring site and campaign performance.",
                ],
            },
            {
                heading: "Who it is shared with",
                paragraphs: [
                    "We do not sell or rent your data. We share it only with providers we need to operate — site hosting, email delivery, call scheduling and measurement — who process it under their own privacy notices and our instructions.",
                ],
            },
            {
                heading: "Your rights",
                paragraphs: [
                    "You can exercise your rights of access, rectification, cancellation or objection (ARCO rights under Mexican law), and withdraw consent, at any time by writing to hola@synce.mx. We respond within 20 business days.",
                ],
            },
            {
                heading: "Cookies and measurement",
                paragraphs: [
                    "This site uses third-party cookies and pixels to measure visits and conversions. You can block or delete them in your browser settings and the site keeps working.",
                ],
            },
            {
                heading: "Changes to this notice",
                paragraphs: [
                    "Any change to this notice will be published on this page with its update date.",
                ],
            },
        ],
    },
};

export const dataPractices: Record<Lang, LegalCopy> = {
    es: {
        metaTitle: "Cómo cuidamos tu código y tus datos | SYNC Estudio",
        metaDescription:
            "Propiedad del código, acceso, confidencialidad y continuidad: las prácticas de SYNC Estudio con el código y los datos de sus clientes.",
        title: "Cómo cuidamos tu código y tus datos",
        updated: "Última actualización: 10 de junio de 2026",
        intro: "Trabajar con un estudio externo implica confiarle tu operación. Estas son las prácticas con las que respondemos a esa confianza — y a las que puedes apelar en cualquier momento del proyecto.",
        sections: [
            {
                heading: "El código es tuyo",
                paragraphs: [
                    "El repositorio, la documentación y la propiedad intelectual de lo que construimos para ti son tuyos desde el primer día. Tienes acceso al repositorio durante todo el proyecto, no solo al final, y si decides no continuar con nosotros, todo queda contigo: puedes seguir internamente o con otro proveedor.",
                ],
            },
            {
                heading: "Acceso mínimo y revocable",
                paragraphs: [
                    "Pedimos únicamente los accesos necesarios para el trabajo acordado, con credenciales individuales — nunca compartidas. Al cerrar el proyecto, o cuando lo pidas, los accesos se revocan y lo confirmamos por escrito.",
                ],
            },
            {
                heading: "Confidencialidad",
                paragraphs: [
                    "Firmamos acuerdos de confidencialidad cuando lo solicitas. La información de tu operación no se usa para otros clientes ni aparece en nuestro material público sin tu autorización expresa.",
                ],
            },
            {
                heading: "Datos reales, con cuidado",
                paragraphs: [
                    "Desarrollamos y probamos en ambientes separados de producción. Solo trabajamos con datos reales cuando es necesario y lo acordamos contigo antes.",
                ],
            },
            {
                heading: "Infraestructura a tu nombre",
                paragraphs: [
                    "Siempre que es posible, la infraestructura se contrata en tus cuentas, no en las nuestras: si mañana no estamos, tu sistema sigue siendo tuyo y sigue funcionando. Cuando hospedamos algo de nuestro lado, sabes exactamente dónde y puedes migrarlo cuando quieras.",
                ],
            },
            {
                heading: "Continuidad sin dependencia",
                paragraphs: [
                    "Entregamos documentación viva, versionada junto al código, para que tu equipo pueda operar y otro proveedor pueda continuar el trabajo si lo decides. La relación se sostiene porque sirve, no porque sea difícil salir.",
                ],
            },
            {
                heading: "¿Dudas?",
                paragraphs: [
                    "Si tu equipo legal o de TI necesita detalle adicional sobre cualquiera de estos puntos, escríbenos a hola@synce.mx y lo revisamos juntos.",
                ],
            },
        ],
    },
    en: {
        metaTitle: "How we handle your code and data | SYNC Estudio",
        metaDescription:
            "Code ownership, access, confidentiality and continuity: SYNC Estudio's practices with client code and data.",
        title: "How we handle your code and data",
        updated: "Last updated: June 10, 2026",
        intro: "Working with an outside studio means trusting it with your operation. These are the practices we answer that trust with — and you can hold us to them at any point in the project.",
        sections: [
            {
                heading: "The code is yours",
                paragraphs: [
                    "The repository, the documentation and the intellectual property of what we build for you are yours from day one. You have access to the repository throughout the project, not just at the end, and if you decide not to continue with us, everything stays with you: you can continue in-house or with another provider.",
                ],
            },
            {
                heading: "Minimal, revocable access",
                paragraphs: [
                    "We request only the access needed for the agreed work, with individual credentials — never shared ones. When the project closes, or whenever you ask, access is revoked and we confirm it in writing.",
                ],
            },
            {
                heading: "Confidentiality",
                paragraphs: [
                    "We sign NDAs on request. Information about your operation is not reused for other clients and does not appear in our public material without your express authorization.",
                ],
            },
            {
                heading: "Real data, handled with care",
                paragraphs: [
                    "We develop and test in environments separated from production. We only work with real data when necessary, and we agree on it with you first.",
                ],
            },
            {
                heading: "Infrastructure in your name",
                paragraphs: [
                    "Whenever possible, infrastructure is contracted under your accounts, not ours: if we are gone tomorrow, your system is still yours and still running. When we host something on our side, you know exactly where, and you can migrate it whenever you want.",
                ],
            },
            {
                heading: "Continuity without lock-in",
                paragraphs: [
                    "We deliver living documentation, versioned with the code, so your team can operate the system and another provider could continue the work if you so decide. The relationship holds because it is useful, not because leaving is hard.",
                ],
            },
            {
                heading: "Questions?",
                paragraphs: [
                    "If your legal or IT team needs more detail on any of these points, write to hola@synce.mx and we will go through it together.",
                ],
            },
        ],
    },
};
