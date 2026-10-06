import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { saveRegistration } from "@/lib/challenge-store";
import { CH_LOGIN, CH_MAX_AGE, cleanMobile, mobileKey, signUser } from "@/lib/challenge-token";
import { paperKey } from "@/lib/challenge-server";
import { istDate, nextIstMidnight, type RozKind } from "@/lib/roz";
import { addUserDays, claimRoz, doneCookie, rankRoz, signRoz, rozReady } from "@/lib/roz-server";
import { readDone, setCookie, splitPaper, whoami } from "@/lib/roz-api";

export const runtime = "nodejs";

/**
 * "Save my streak": { name, mobile, consent, offers?, days?, exam?, subject? }. Logs the
 * person in (the same name + mobile cookie as the challenge, no password), moves today's
 * guest attempts onto their number with their name (so they appear on the board), and
 * keeps their streak days on the server so it survives a new phone.
 */
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const name = String(b.name ?? "").replace(/\s+/g, " ").trim();
  const mobile = cleanMobile(b.mobile);
  const fields: string[] = [];
  if (name.length < 2 || name.length > 60) fields.push("name");
  if (!mobile) fields.push("mobile");
  if (b.consent !== true) fields.push("consent");
  if (fields.length) return NextResponse.json({ ok: false, error: "invalid", fields }, { status: 422 });
  if (!rozReady()) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });

  const { jar } = await whoami();
  const d = istDate();
  const me = mobileKey(mobile);
  const ranks: Partial<Record<RozKind, { rank: number; total: number } | null>> = {};
  const doneTokens: [RozKind, string][] = [];
  let lastPaper: string | null = null;
  const playedToday: string[] = [];

  for (const k of ["roz", "sprint"] as RozKind[]) {
    const done = readDone(jar, k);
    if (!done || done.d !== d) continue;
    lastPaper = done.p;
    playedToday.push(done.d);
    if (done.w.startsWith("g")) await claimRoz(k, d, done.p, done.w, me, name).catch(() => null);
    ranks[k] = await rankRoz(k, d, done.p, me, done.score, done.sec);
    doneTokens.push([k, signRoz({ ...done, w: me })]);
  }

  const chosen = paperKey({ exam: String(b.exam ?? ""), subject: typeof b.subject === "string" ? b.subject : undefined });
  const paper = lastPaper ?? chosen ?? "up-prt";
  const { exam, subject } = splitPaper(paper);
  const regNo = `MM-${crypto.createHash("sha256").update(`mm-challenge:${mobile}`).digest("hex").slice(0, 6).toUpperCase()}`;
  await saveRegistration({
    reg_no: regNo, name, mobile, exam, district: null, rounds: [],
    consent_updates: true, consent_offers: b.offers === true, source: "roz",
  }).catch(() => null);
  const days = await addUserDays(mobile, name, playedToday).catch(() => []);

  const res = NextResponse.json({ ok: true, days, ranks, me });
  const ttl = Math.ceil((nextIstMidnight() - Date.now()) / 1000) + 3600;
  for (const [k, tok] of doneTokens) setCookie(res, doneCookie(k), tok, ttl);
  res.cookies.set(CH_LOGIN, signUser({ name, mobile, exam, subject, paper }), {
    path: "/", maxAge: CH_MAX_AGE, sameSite: "lax", httpOnly: true, secure: process.env.NODE_ENV === "production",
  });
  return res;
}
