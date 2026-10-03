import crypto from "node:crypto";
import type { PassTier } from "@/lib/pricing";

/**
 * SERVER ONLY. Signed pass tokens.
 *
 * The pass lives in a signed cookie (`mm_pass=<tier>.<issuedAt>.<sig>`), set ONLY by
 * the server after Razorpay confirms a payment (api/razorpay/verify, api/pass/restore).
 * The page for a paid test only sends its questions when this cookie verifies, so the
 * lock can't be bypassed from the browser. The cookie is readable by page scripts only
 * so the UI can show "Pass active"; editing it just breaks the signature.
 *
 * Requires env PASS_SECRET (a long random string). Without it nothing can unlock.
 */
export const PASS_COOKIE = "mm_pass";
/** Browsers cap cookie lifetime at ~400 days; re-entering the code renews it. */
export const PASS_COOKIE_MAX_AGE = 60 * 60 * 24 * 400;

const secret = () => process.env.PASS_SECRET ?? "";

function hmac(data: string) {
  return crypto.createHmac("sha256", secret()).update(data).digest();
}

function safeEqual(a: string, b: string) {
  return a.length === b.length && crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

export function signPass(tier: PassTier): string {
  const body = `${tier}.${Date.now()}`;
  return `${body}.${hmac(`pass:${body}`).toString("base64url").slice(0, 32)}`;
}

export function verifyPass(token: string | undefined | null): PassTier | null {
  if (!token || !secret()) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [tier, at, sig] = parts;
  if (tier !== "prep" && tier !== "mentor") return null;
  const expected = hmac(`pass:${tier}.${at}`).toString("base64url").slice(0, 32);
  return safeEqual(sig, expected) ? tier : null;
}
