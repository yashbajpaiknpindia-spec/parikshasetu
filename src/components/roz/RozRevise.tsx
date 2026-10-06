"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, RotateCcw, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { localizedQuestion } from "@/lib/localize-question";
import { scriptOf } from "@/lib/script";
import { QuestionStem } from "@/components/mock/QuestionStem";
import { REVISE_GAPS, dueWrong, istDate, readWrong, writeWrong, type WrongItem } from "@/lib/roz";

/**
 * Spaced revision of Roz ka 10 mistakes, entirely in the browser (the questions were
 * saved with their answers after the result). Right → comes back after a longer gap
 * (1, 3, 7 days) and leaves after three right answers; wrong → back to the start.
 */
export function RozRevise({ hi }: { hi: boolean }) {
  const [items, setItems] = useState<WrongItem[] | null>(null);
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [right, setRight] = useState(0);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable after mount
  useEffect(() => { setItems(dueWrong()); }, []);

  if (items === null) return <div className="min-h-[50vh]" />;

  if (!items.length || i >= items.length) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
        <h1 className="mt-3 text-2xl font-extrabold text-ink-900">
          {items.length ? (hi ? `दोहराव पूरा: ${right}/${items.length} सही` : `Revision done: ${right}/${items.length} right`) : (hi ? "आज दोहराने को कुछ नहीं" : "Nothing to revise today")}
        </h1>
        <p className="mt-2 text-ink-600">{hi ? "गलत प्रश्न 1, 3 और 7 दिन बाद लौटते हैं, जब तक तीन बार सही न हो जाएँ।" : "Mistakes return after 1, 3 and 7 days, until you get them right three times."}</p>
        <Link href="/roz" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3 font-extrabold text-white">
          <Zap className="h-5 w-5" /> {hi ? "आज का 10 दें" : "Take today's 10"}
        </Link>
      </div>
    );
  }

  const it = items[i];
  const q = it.q;
  const rq = localizedQuestion(q, hi ? "hi" : "en");
  const answered = chosen !== null;

  const pick = (oi: number) => {
    if (answered) return;
    setChosen(oi);
    const ok = oi === q.correct;
    if (ok) setRight((r) => r + 1);
    const today = istDate();
    const all = readWrong();
    const next = all
      .map((w) => (w.q.id === q.id ? { ...w, at: today, ok: ok ? w.ok + 1 : 0 } : w))
      .filter((w) => w.ok < REVISE_GAPS.length);
    writeWrong(next);
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-6">
      <div className="flex items-center justify-between text-sm font-semibold text-ink-500">
        <span className="inline-flex items-center gap-1.5"><RotateCcw className="h-4 w-4" /> {hi ? "पुरानी गलतियाँ" : "Past mistakes"}</span>
        <span>{i + 1}/{items.length}</span>
      </div>
      <div className="mt-3 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink-200">
        <p className="text-xs text-ink-400">{hi ? `पहली बार गलत: ${it.at}` : `First missed: ${it.at}`}</p>
        <QuestionStem stem={rq.stem} altStem={rq.altStem} />
        <div className="mt-5 grid gap-2.5">
          {rq.options.map((opt, oi) => {
            const isC = oi === q.correct, mine = chosen === oi;
            return (
              <button key={oi} type="button" disabled={answered} onClick={() => pick(oi)}
                className={cn("flex min-h-14 items-start gap-3 rounded-2xl border-2 px-4 py-3 text-left",
                  !answered && "border-ink-200 hover:border-brand-400 hover:bg-brand-50",
                  answered && isC && "border-success bg-teal-50", answered && mine && !isC && "border-danger bg-red-50",
                  answered && !isC && !mine && "border-ink-100 text-ink-400")}>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-100 text-sm font-bold">
                  {answered && isC ? <CheckCircle2 className="h-4 w-4 text-success" /> : answered && mine ? <XCircle className="h-4 w-4 text-danger" /> : "ABCD"[oi]}
                </span>
                <span dir={scriptOf(opt).dir} className={scriptOf(opt).className}>{opt}</span>
              </button>
            );
          })}
        </div>
        {answered && rq.explanation && <p className="mt-4 rounded-2xl bg-ink-50 p-4 text-sm text-ink-700">{rq.explanation}</p>}
      </div>
      <button type="button" disabled={!answered} onClick={() => { setI(i + 1); setChosen(null); }}
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 font-extrabold text-white disabled:bg-ink-300">
        {hi ? "अगला" : "Next"} <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
