import { NextResponse } from "next/server";
import { ROZ_KINDS } from "@/lib/roz";
import { rozPaper, signRoz, verifyRoz, type RozAttempt } from "@/lib/roz-server";

export const runtime = "nodejs";

const GRACE_MS = 30_000;

/**
 * Check one answer: { token, qid, choice } (choice null = skip). The answer is locked into
 * the signed token (a question can't be answered twice), and the question comes back with
 * its correct option and explanation, so the player can show right or wrong at once.
 */
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const att = verifyRoz<RozAttempt>(b.token);
  if (!att) return NextResponse.json({ ok: false, error: "token" }, { status: 401 });
  const paper = rozPaper(att.k, att.d, att.p);
  const q = paper?.questions.find((x) => x.id === b.qid);
  if (!paper || !q) return NextResponse.json({ ok: false, error: "question" }, { status: 404 });

  if (q.id in att.a) return NextResponse.json({ ok: true, token: b.token, q, choice: att.a[q.id] });
  if (Date.now() > att.at + ROZ_KINDS[att.k].minutes * 60_000 + GRACE_MS) {
    return NextResponse.json({ ok: false, error: "time" }, { status: 409 });
  }
  const c = b.choice;
  const choice = c === null ? null : Number.isInteger(c) && c >= 0 && c < q.options.length ? (c as number) : undefined;
  if (choice === undefined) return NextResponse.json({ ok: false, error: "choice" }, { status: 422 });

  const next: RozAttempt = { ...att, a: { ...att.a, [q.id]: choice } };
  return NextResponse.json({ ok: true, token: signRoz(next), q, choice });
}
