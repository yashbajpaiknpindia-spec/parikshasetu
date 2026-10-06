import { NextResponse } from "next/server";
import { ROZ_KINDS, nextIstMidnight } from "@/lib/roz";
import { addUserDays, boardRoz, doneCookie, rozPaper, saveRoz, scoreRoz, signRoz, verifyRoz, whoOf, type RozAttempt, type RozDone } from "@/lib/roz-server";
import { paperInfo, setCookie, splitPaper, whoami } from "@/lib/roz-api";

export const runtime = "nodejs";

/**
 * Finish today's attempt: { token, days? }. The SERVER scores it from the signed token and
 * times it from the signed start, saves it once, and returns the real rank among everyone
 * on the same paper today, the top of today's board and, for a logged-in person, their
 * streak days across phones.
 */
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const att = verifyRoz<RozAttempt>(b.token);
  if (!att) return NextResponse.json({ ok: false, error: "token" }, { status: 401 });
  const paper = rozPaper(att.k, att.d, att.p);
  const info = paperInfo(att.k, att.d, att.p);
  if (!paper || !info) return NextResponse.json({ ok: false, error: "paper" }, { status: 404 });

  const { user, dev } = await whoami();
  const who = whoOf(user?.mobile, dev) ?? att.w;
  const now = Date.now();
  const sec = Math.round((Math.min(now, att.at + ROZ_KINDS[att.k].minutes * 60_000) - att.at) / 1000);
  const r = scoreRoz(paper.test, paper.questions, att.a);
  const rank = await saveRoz(att.k, att.d, who, {
    name: user?.name ?? null, exam: splitPaper(att.p).exam, paper: att.p,
    score: r.score, max: r.max, correct: r.correct, wrong: r.wrong, skipped: r.skipped, sec,
    at: new Date(now).toISOString(), answers: att.a,
  }).catch(() => null);
  const board = await boardRoz(att.k, att.d, att.p).catch(() => ({ rows: [], total: 0 }));
  const days = user ? await addUserDays(user.mobile, user.name, [att.d]).catch(() => null) : null;

  const done: RozDone = { k: att.k, d: att.d, p: att.p, w: who, score: r.score, max: r.max, correct: r.correct, wrong: r.wrong, skipped: r.skipped, sec };
  const res = NextResponse.json({ ok: true, done, rank, board, days, info, questions: paper.questions, answers: att.a, named: !!user, me: who });
  setCookie(res, doneCookie(att.k), signRoz(done), Math.ceil((nextIstMidnight(now) - now) / 1000) + 3600);
  return res;
}
