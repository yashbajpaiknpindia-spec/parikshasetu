import { cookies } from "next/headers";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { CHALLENGE, roundStatus } from "@/lib/challenge";
import { challengeTest, hideAnswers, roundPaper, userPaper } from "@/lib/challenge-server";
import { getSubmission } from "@/lib/challenge-store";
import { CH_LOGIN, CH_MAX_AGE, chDone, chStart, signStart, verifyDone, verifyStart, verifyUser } from "@/lib/challenge-token";

export const runtime = "nodejs";

/**
 * Start (or resume) a round: { round }. Only for a logged-in candidate, only while the
 * round is open for entry, only once. Records the server start time in a signed cookie
 * (kept on resume, so reloading never resets the clock) and returns the paper WITHOUT
 * answers or explanations, plus the moment the candidate's time runs out.
 */
export async function POST(req: Request) {
  const n = Number((await req.json().catch(() => ({}))).round);
  const round = CHALLENGE.rounds.find((r) => r.n === n);
  if (!round) return NextResponse.json({ ok: false, error: "no_round" }, { status: 404 });

  const jar = await cookies();
  const user = verifyUser(jar.get(CH_LOGIN)?.value);
  const paper = user ? userPaper(user) : null;
  if (!user || !paper) return NextResponse.json({ ok: false, error: "login" }, { status: 401 });

  const done = verifyDone(jar.get(chDone(n))?.value);
  if ((done && done.mobile === user.mobile) || (await getSubmission(n, user.mobile))) {
    return NextResponse.json({ ok: false, error: "done" }, { status: 409 });
  }

  const now = Date.now();
  const prev = verifyStart(jar.get(chStart(n))?.value);
  const resumed = prev && prev.mobile === user.mobile ? prev : null;
  const status = roundStatus(round, now);
  // New starts only while entry is open; a started candidate may always resume.
  if (!resumed && status !== "open") {
    return NextResponse.json({ ok: false, error: status === "closed" ? "closed" : "not_open", opensAt: round.opensAt }, { status: 403 });
  }
  const startedAt = resumed?.at ?? now;
  const test = challengeTest(n, paper);
  const endsAt = startedAt + test.durationMin * 60_000;

  const res = NextResponse.json({ ok: true, test, questions: hideAnswers(roundPaper(n, paper)), startedAt, endsAt, serverNow: now });
  if (!resumed && isDbConfigured) {
    await prisma.activityEvent.create({ data: { type: "challenge_started", meta: { mobile: user.mobile, exam: user.exam, paper, round: n } } }).catch(() => null);
  }
  if (!resumed) {
    res.cookies.set(chStart(n), signStart({ mobile: user.mobile, at: startedAt }), {
      path: "/", maxAge: CH_MAX_AGE, sameSite: "lax", httpOnly: true, secure: process.env.NODE_ENV === "production",
    });
  }
  return res;
}
