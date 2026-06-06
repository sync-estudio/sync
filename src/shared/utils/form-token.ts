import { createHmac, timingSafeEqual } from "node:crypto";

// process.env = Railway runtime; import.meta.env = local .env via Vite.
const SECRET = process.env.FORM_SECRET ?? import.meta.env.FORM_SECRET ?? "";

const MIN_ELAPSED_MS = 3_000; // bots submit instantly — reject anything faster
const MAX_ELAPSED_MS = 60 * 60 * 1_000; // token good for 1h

/** HMAC-sign a render timestamp so the client can't forge the time-trap. */
export function signTimestamp(ts: number): string {
  return createHmac("sha256", SECRET).update(String(ts)).digest("hex");
}

type VerifyResult = { ok: true } | { ok: false; reason: string };

/** Verify a time-trap token: signature must match and elapsed time must be human. */
export function verifyFormToken(ts: number, sig: string, now: number): VerifyResult {
  if (!SECRET) return { ok: false, reason: "secret_unset" };
  if (!Number.isFinite(ts) || typeof sig !== "string" || sig.length === 0) {
    return { ok: false, reason: "malformed" };
  }

  const expected = Buffer.from(signTimestamp(ts), "hex");
  const actual = Buffer.from(sig, "hex");
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) {
    return { ok: false, reason: "bad_sig" };
  }

  const elapsed = now - ts;
  if (elapsed < MIN_ELAPSED_MS) return { ok: false, reason: "too_fast" };
  if (elapsed > MAX_ELAPSED_MS) return { ok: false, reason: "expired" };
  return { ok: true };
}
