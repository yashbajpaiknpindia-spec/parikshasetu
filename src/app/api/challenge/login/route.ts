import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { CHALLENGE, currentTestRound, isExamKey } from "@/lib/challenge";
import { saveRegistration } from "@/lib/challenge-store";
import { CH_LOGIN, CH_MAX_AGE, cleanMobile, signUser } from "@/lib/challenge-token";
import { paperKey } from "@/lib/challenge-server";
import { prisma, isDbConfigured } from "@/lib/prisma";

export const runtime = "nodejs";

/**
 * Test-room login: { name, mobile, exam, consent }. Anyone with a valid Indian mobile can
 * log in (registration is open until the round, and people who registered on WhatsApp
 * aren't in any list), so logging in also registers them. Sets the signed mm_ch cookie.
 */
export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const name = String(b.name ?? "").replace(/\s+/g, " ").trim();
  const mobile = cleanMobile(b.mobile);
  const exam = isExamKey(b.exam) ? (b.exam as string) : CHALLENGE.exams[0].key;
  const fields: string[] = [];
  if (name.length < 2 || name.length > 60) fields.push("name");
  if (!mobile) fields.push("mobile");
  if (b.consent !== true) fields.push("consent");
  const subject = typeof b.subject === "string" ? b.subject : undefined;
  const paper = paperKey({ exam, subject });
  if (!paper) fields.push("subject");
  if (fields.length) return NextResponse.json({ ok: false, error: "invalid", fields }, { status: 422 });
  if (!process.env.PASS_SECRET) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });

  const round = currentTestRound();
  const regNo = `MM-${crypto.createHash("sha256").update(`mm-challenge:${mobile}`).digest("hex").slice(0, 6).toUpperCase()}`;
  // Best effort: the login must work even if no registration store is set up.
  await saveRegistration({
    reg_no: regNo, name, mobile, exam, subject: subject ?? null, district: null, rounds: round ? [round.n] : [],
    consent_updates: true, consent_offers: false, source: "test-room-login",
  }).catch(() => null);
  if (isDbConfigured) {
    await prisma.activityEvent.create({ data: { type: "challenge_login", meta: { mobile, exam, subject: subject ?? null, paper: paper!, round: round?.n ?? null } } }).catch(() => null);
  }

  const res = NextResponse.json({ ok: true, regNo });
  res.cookies.set(CH_LOGIN, signUser({ name, mobile, exam, subject, paper: paper! }), {
    path: "/", maxAge: CH_MAX_AGE, sameSite: "lax", httpOnly: true, secure: process.env.NODE_ENV === "production",
  });
  return res;
}

/** Log out (switch user on a shared phone). */
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(CH_LOGIN, "", { path: "/", maxAge: 0 });
  return res;
}
