import { NextResponse } from "next/server";
import { paperKey } from "@/lib/challenge-server";
import { isRozKind, istDate, kindOpen, ROZ_KINDS } from "@/lib/roz";
import { DEV_COOKIE, boardRoz, hideAnswer, newDeviceId, rankRoz, rozPaper, signRoz, verifyRoz, whoOf, rozReady, type RozAttempt } from "@/lib/roz-server";
import { paperInfo, readDone, setCookie, whoami } from "@/lib/roz-api";

export const runtime = "nodejs";

/**
 * Start (or resume) today's Roz ka 10 / Sunday Sprint: { kind, exam, subject?, token? }.
 * No login needed: a guest gets a device id cookie. Returns the paper WITHOUT answers and
 * a signed attempt token; answers already given (on resume) come back with solutions.
 * If this person already finished today's paper, returns that result instead.
 */
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const kind = b.kind;
  if (!isRozKind(kind)) return NextResponse.json({ ok: false, error: "kind" }, { status: 400 });
  if (!kindOpen(kind)) return NextResponse.json({ ok: false, error: "not_open" }, { status: 403 });
  if (!rozReady()) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  const p = paperKey({ exam: String(b.exam ?? ""), subject: typeof b.subject === "string" ? b.subject : undefined });
  if (!p) return NextResponse.json({ ok: false, error: "paper" }, { status: 422 });

  const d = istDate();
  const paper = rozPaper(kind, d, p);
  const info = paperInfo(kind, d, p);
  if (!paper || !info) return NextResponse.json({ ok: false, error: "paper" }, { status: 422 });

  const { jar, user, dev } = await whoami();
  const done = readDone(jar, kind);
  if (done && done.d === d && done.p === p) {
    const who = whoOf(user?.mobile, dev) ?? done.w;
    const [rank, board] = await Promise.all([
      rankRoz(kind, d, p, who, done.score, done.sec).catch(() => null),
      boardRoz(kind, d, p).catch(() => ({ rows: [], total: 0 })),
    ]);
    return NextResponse.json({ ok: true, done, rank, board, info, date: d, named: !!user, me: who });
  }

  const now = Date.now();
  const prev = verifyRoz<RozAttempt>(b.token);
  const resume = prev && prev.k === kind && prev.d === d && prev.p === p ? prev : null;
  const device = dev ?? newDeviceId();
  const att: RozAttempt = resume ?? { k: kind, d, p, w: whoOf(user?.mobile, device)!, at: now, a: {} };
  const endsAt = att.at + ROZ_KINDS[kind].minutes * 60_000;
  const answered = Object.fromEntries(paper.questions.filter((q) => q.id in att.a).map((q) => [q.id, q]));

  const res = NextResponse.json({
    ok: true, info, date: d, token: signRoz(att), endsAt, serverNow: now,
    questions: paper.questions.map(hideAnswer), answers: att.a, answered,
  });
  if (!dev) setCookie(res, DEV_COOKIE, device, 60 * 60 * 24 * 400);
  return res;
}
