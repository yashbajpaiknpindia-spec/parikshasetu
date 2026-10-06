import crypto from "node:crypto";

/**
 * SERVER ONLY. Signed cookies for the Free Mock Challenge test room.
 *  - mm_ch        who is logged in: { name, mobile, exam }
 *  - mm_ch_s<n>   when this person started round n (server time), so the timer and the
 *                 "time taken" used for tie-breaks can't be faked in the browser
 *  - mm_ch_d<n>   round n submitted (one attempt per person per round)
 * Signed with the same JWT_SECRET used by the application's auth/session layer.
 */
export const CH_LOGIN = "mm_ch";
export const chStart = (n: number) => `mm_ch_s${n}`;
export const chDone = (n: number) => `mm_ch_d${n}`;
export const CH_MAX_AGE = 60 * 60 * 24 * 60;

const secret = () => process.env.JWT_SECRET ?? "";
const sig = (data: string) => crypto.createHmac("sha256", secret()).update(`challenge:${data}`).digest("base64url").slice(0, 32);
const safeEq = (a: string, b: string) => a.length === b.length && crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));

function sign(payload: object): string {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sig(body)}`;
}
function verify<T>(token: string | undefined | null): T | null {
  if (!token || !secret()) return null;
  const [body, s] = token.split(".");
  if (!body || !s || !safeEq(s, sig(body))) return null;
  try {
    return JSON.parse(Buffer.from(body, "base64url").toString()) as T;
  } catch {
    return null;
  }
}

export interface ChUser { name: string; mobile: string; exam: string; subject?: string; /** challenge paper key, e.g. "up-prt", "bihar-6-8:ms" */ paper?: string }
export const signUser = (u: ChUser) => sign(u);
export const verifyUser = (t?: string | null) => verify<ChUser>(t);

export interface ChStart { mobile: string; at: number }
export const signStart = (s: ChStart) => sign(s);
export const verifyStart = (t?: string | null) => verify<ChStart>(t);

export interface ChDone { mobile: string; score: number; max: number; at: number }
export const signDone = (d: ChDone) => sign(d);
export const verifyDone = (t?: string | null) => verify<ChDone>(t);

/** Unguessable, stable storage key for a mobile number (no raw numbers in paths). */
export const mobileKey = (mobile: string) =>
  crypto.createHmac("sha256", secret()).update(`challenge-mobile:${mobile}`).digest("hex").slice(0, 20);

/** Normalises "+91 98XXXXXXXX" / "098XXXXXXXX" to 10 digits; "" if invalid. */
export function cleanMobile(v: unknown): string {
  const m = String(v ?? "").replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(m) ? m : "";
}
