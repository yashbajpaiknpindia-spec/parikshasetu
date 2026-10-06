import { cookies } from "next/headers";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { CHALLENGE } from "@/lib/challenge";
import { challengeTest, roundPaper, userPaper } from "@/lib/challenge-server";
import { rankOf, saveRankMarker, saveSubmission } from "@/lib/challenge-store";
import { CH_LOGIN, CH_MAX_AGE, chDone, chStart, signDone, verifyDone, verifyStart, verifyUser } from "@/lib/challenge-token";
import { scoreAttempt } from "@/lib/mock-engine";

export const runtime = "nodejs";

/** Grace after a candidate's time ends (slow networks, auto-submit at zero). */
const GRACE_MS = 3 * 60_000;

/**
 * Submit a round: { round, answers: { questionId: optionIndex | null } }. The SERVER
 * scores it against its own copy of the paper and measures time from the signed start
 * cookie, so neither score nor time can be edited in the browser. Returns the full
 * paper (answers + explanations) for the results screen.
 */
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const n = Number(b.round);
  if (!CHALLENGE.rounds.some((r) => r.n === n)) return NextResponse.json({ ok: false, error: "no_round" }, { status: 404 });

  const jar = await cookies();
  const user = verifyUser(jar.get(CH_LOGIN)?.value);
  const start = verifyStart(jar.get(chStart(n))?.value);
  const key = user ? userPaper(user) : null;
  if (!user || !key || !start || start.mobile !== user.mobile) return NextResponse.json({ ok: false, error: "not_started" }, { status: 401 });

  const paper = roundPaper(n, key);
  const test = challengeTest(n, key);
  const prevDone = verifyDone(jar.get(chDone(n))?.value);
  if (prevDone && prevDone.mobile === user.mobile) {
    return NextResponse.json({ ok: false, error: "done", questions: paper }, { status: 409 });
  }

  // Keep only answers to this paper's questions, as option indexes.
  const ids = new Set(paper.map((q) => q.id));
  const answers: Record<string, number | null> = {};
  for (const [k, v] of Object.entries((b.answers ?? {}) as Record<string, unknown>)) {
    // -1 is option E ("not attempting") on BPSC papers.
    if (ids.has(k) && (v === null || (Number.isInteger(v) && (v as number) >= (test.optionE ? -1 : 0) && (v as number) < 4))) answers[k] = v as number | null;
  }

  const now = Date.now();
  const endsAt = start.at + test.durationMin * 60_000;
  const res = scoreAttempt(test, paper, answers);
  const row = {
    round: n, name: user.name, mobile: user.mobile, exam: user.exam, paper: key,
    score: res.score, max: res.maxScore, correct: res.correct, wrong: res.wrong, unattempted: res.unattempted,
    startedAt: new Date(start.at).toISOString(), submittedAt: new Date(now).toISOString(),
    durationSec: Math.round((Math.min(now, endsAt) - start.at) / 1000), late: now > endsAt + GRACE_MS,
    answers,
  };
  const saved = await saveSubmission(row);
  if (saved === "dup") return NextResponse.json({ ok: false, error: "done", questions: paper }, { status: 409 });

  if (saved === "ok") await saveRankMarker(row).catch(() => null);
  const rank = saved === "ok" ? await rankOf(row).catch(() => null) : null;
  if (saved === "ok" && isDbConfigured) {
    await prisma.activityEvent.create({ data: { type: "challenge_submitted", meta: { mobile: user.mobile, exam: user.exam, paper: key, round: n, score: res.score, max: res.maxScore, late: row.late } } }).catch(() => null);
  }
  const out = NextResponse.json({ ok: true, saved: saved === "ok", questions: paper, score: res.score, max: res.maxScore, late: row.late, rank });
  out.cookies.set(chDone(n), signDone({ mobile: user.mobile, score: res.score, max: res.maxScore, at: now }), {
    path: "/", maxAge: CH_MAX_AGE, sameSite: "lax", httpOnly: true, secure: process.env.NODE_ENV === "production",
  });
  return out;
}
