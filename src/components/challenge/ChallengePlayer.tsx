"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AlertTriangle, Check, CheckCircle2, ChevronLeft, ChevronRight, Flag, ListChecks, RotateCcw, Timer, Trophy, X } from "lucide-react";
import { Container, Button, Badge, Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Question } from "@/data/questions";
import type { MockTest } from "@/lib/mock-engine";
import { scoreAttempt, markLabel } from "@/lib/mock-engine";
import { localizedQuestion } from "@/lib/localize-question";
import { useLang } from "@/lib/i18n";
import { PassageBlock } from "@/components/PassageBlock";

export interface ChallengePlayerProps {
  test: MockTest;
  questions: Question[];
  endsAt: number;
  skewMs: number;
  round: number;
  storageKey: string;
  onSubmit: (answers: Record<string, number | null>) => Promise<{
    questions: Question[];
    saved: boolean;
    score: number;
    max: number;
    late: boolean;
    rank?: { rank: number; total: number } | null;
  } | null>;
}

type Answers = Record<string, number | null>;

type SubmitResult = {
  questions: Question[];
  score: number;
  max: number;
  late: boolean;
  rank?: { rank: number; total: number } | null;
};

const safeParse = (v: string | null) => {
  if (!v) return null;
  try { return JSON.parse(v) as unknown; } catch { return null; }
};

export function ChallengePlayer({ test, questions, endsAt, skewMs, round, storageKey, onSubmit }: ChallengePlayerProps) {
  const { lang } = useLang();
  const hi = lang === "hi";
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [marked, setMarked] = useState<Record<string, boolean>>({});
  const restoredRef = useRef(false);
  const mountedRef = useRef(false);
  const [secondsLeft, setSecondsLeft] = useState(() => Math.max(0, Math.ceil((endsAt - (Date.now() + skewMs)) / 1000)));
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<SubmitResult | null>(null);
  const [submitError, setSubmitError] = useState("");
  const retryAt = useMemo(() => ({ value: 0 }), []);

  const q = questions[current];
  const total = questions.length;
  const answeredCount = useMemo(() => Object.values(answers).filter((v) => v !== null && v !== undefined).length, [answers]);
  const markedCount = useMemo(() => Object.values(marked).filter(Boolean).length, [marked]);
  const mmss = `${String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:${String(secondsLeft % 60).padStart(2, "0")}`;

  useEffect(() => {
    try {
      const raw = safeParse(localStorage.getItem(storageKey));
      if (raw && typeof raw === "object" && !Array.isArray(raw)) {
        const r = raw as { answers?: unknown; marked?: unknown; current?: unknown };
        if (r.answers && typeof r.answers === "object" && !Array.isArray(r.answers)) setAnswers(r.answers as Answers);
        if (r.marked && typeof r.marked === "object" && !Array.isArray(r.marked)) setMarked(r.marked as Record<string, boolean>);
        if (typeof r.current === "number" && Number.isInteger(r.current) && r.current >= 0 && r.current < questions.length) setCurrent(r.current);
      }
    } catch { /* storage can be unavailable */ }
    restoredRef.current = true;
  }, [questions.length, storageKey]);

  useEffect(() => {
    if (!restoredRef.current || !mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    try { localStorage.setItem(storageKey, JSON.stringify({ answers, marked, current })); } catch { /* ignore */ }
  }, [answers, marked, current, storageKey]);

  const submit = useCallback(async () => {
    if (submitting || submitted) return;
    const wait = Math.max(0, retryAt.value - Date.now());
    if (wait) {
      setSubmitError(hi ? "कृपया कुछ सेकंड बाद फिर जमा करें।" : "Please wait a few seconds before retrying.");
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const result = await onSubmit(answers);
      if (!result) throw new Error("submit_failed");
      setSubmitted({ questions: result.questions, score: result.score, max: result.max, late: result.late, rank: result.rank });
      try { localStorage.removeItem(storageKey); } catch { /* ignore */ }
    } catch {
      retryAt.value = Date.now() + 4000;
      setSubmitError(hi ? "जमा नहीं हो पाया। इंटरनेट जाँचकर 4 सेकंड बाद फिर जमा करें।" : "We couldn't submit your paper. Check your connection and retry after 4 seconds.");
    } finally {
      setSubmitting(false);
    }
  }, [answers, hi, onSubmit, storageKey, submitted, submitting]);

  useEffect(() => {
    if (submitted || submitting) return;
    if (secondsLeft <= 0) { void submit(); return; }
    const id = window.setInterval(() => {
      setSecondsLeft(Math.max(0, Math.ceil((endsAt - (Date.now() + skewMs)) / 1000)));
    }, 250);
    return () => window.clearInterval(id);
  }, [endsAt, secondsLeft, skewMs, submit, submitted, submitting]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [current, submitted]);

  const requestSubmit = useCallback(() => {
    if (submitting || submitted) return;
    const ok = window.confirm(hi ? "क्या आप टेस्ट जमा करना चाहते हैं? इसके बाद आपका एकमात्र प्रयास समाप्त हो जाएगा।" : "Submit the test now? This is your one allowed attempt and cannot be undone.");
    if (ok) void submit();
  }, [hi, submit, submitted, submitting]);

  const choose = (option: number) => {
    if (!q || submitted) return;
    setAnswers((prev) => ({ ...prev, [q.id]: option }));
  };

  const clear = () => {
    if (!q || submitted) return;
    setAnswers((prev) => ({ ...prev, [q.id]: null }));
  };

  const toggleMark = () => {
    if (!q || submitted) return;
    setMarked((prev) => ({ ...prev, [q.id]: !prev[q.id] }));
  };

  if (submitted) {
    const resultQs = submitted.questions;
    const result = scoreAttempt(test, resultQs, answers);
    const pct = submitted.max > 0 ? Math.max(0, Math.round((submitted.score / submitted.max) * 100)) : 0;
    return (
      <Container className="py-10 sm:py-14">
        <div className="mx-auto max-w-4xl space-y-5">
          <Card className="overflow-hidden p-0">
            <div className="bg-brand-900 p-7 text-center text-white sm:p-9">
              <CheckCircle2 className="mx-auto h-12 w-12 text-teal-300" />
              <p className="mt-3 text-sm font-semibold text-white/80">{hi ? `राउंड ${round} का परिणाम` : `Round ${round} result`}</p>
              <p className="mt-1 text-6xl font-extrabold tabular-nums">{submitted.score}<span className="text-2xl text-white/60"> / {submitted.max}</span></p>
              <p className="mt-2 text-white/85">{pct}% · {hi ? `${result.correct} सही · ${result.wrong} गलत · ${result.unattempted} छोड़े` : `${result.correct} right · ${result.wrong} wrong · ${result.unattempted} skipped`}</p>
              {submitted.late && <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-100"><AlertTriangle className="h-3.5 w-3.5" /> {hi ? "समय सीमा के बाद जमा हुआ" : "Submitted after the allowed time"}</p>}
              {submitted.rank && <p className="mt-3 text-lg font-extrabold text-saffron-300"><Trophy className="mr-1 inline h-5 w-5" /> {hi ? `रैंक ${submitted.rank.rank} / ${submitted.rank.total}` : `Rank ${submitted.rank.rank} / ${submitted.rank.total}`}</p>}
            </div>
            <div className="p-5 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-4">
                {[
                  [hi ? "सही" : "Correct", result.correct],
                  [hi ? "गलत" : "Wrong", result.wrong],
                  [hi ? "छोड़े" : "Skipped", result.unattempted],
                  [hi ? "मूल प्रश्न" : "Questions", result.total],
                ].map(([label, value]) => <div key={String(label)} className="rounded-xl bg-ink-50 p-3 text-center ring-1 ring-ink-100"><div className="text-xl font-extrabold text-ink-900">{value}</div><div className="text-xs text-ink-500">{label}</div></div>)}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/challenge" className="rounded-xl border border-ink-300 px-4 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-50">{hi ? "चैलेंज" : "Challenge"}</Link>
                <Link href="/mock-tests" className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">{hi ? "मॉक टेस्ट" : "Mock tests"}</Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-ink-900">{hi ? "हर प्रश्न की समीक्षा" : "Review every question"}</h2>
                <p className="mt-1 text-sm text-ink-500">{hi ? "सही उत्तर और व्याख्या देखें।" : "See the correct answer and explanation."}</p>
              </div>
              <Badge tone="brand">{markLabel(test)}</Badge>
            </div>
            <div className="mt-5 space-y-4">
              {resultQs.map((rq, i) => {
                const answer = answers[rq.id];
                const chosen = typeof answer === "number" ? answer : -1;
                const correct = rq.correct;
                const labels = test.optionE ? ["A", "B", "C", "D", "E"] : ["A", "B", "C", "D"];
                return (
                  <article key={rq.id} className="rounded-2xl border border-ink-200 p-4 sm:p-5">
                    <div className="flex gap-3">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-100 text-xs font-bold text-ink-700">{i + 1}</div>
                      <div className="min-w-0 flex-1">
                        <PassageBlock text={rq.passage} hi={hi} />
                        <p className="font-semibold leading-relaxed text-ink-900">{localizedQuestion(rq, lang).stem}</p>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {rq.options.map((op, oi) => {
                            const picked = chosen === oi;
                            const right = correct === oi;
                            return <div key={`${rq.id}-${oi}`} className={cn("rounded-xl border px-3 py-2 text-sm", right ? "border-teal-300 bg-teal-50" : picked ? "border-rose-300 bg-rose-50" : "border-ink-200") }><b className="mr-2">{labels[oi]}</b>{localizedQuestion(rq, lang).options[oi]}{right && <Check className="ml-2 inline h-4 w-4 text-teal-700" />}{picked && !right && <X className="ml-2 inline h-4 w-4 text-rose-700" />}</div>;
                          })}
                        </div>
                        <p className="mt-3 rounded-xl bg-brand-50 p-3 text-sm leading-relaxed text-ink-700"><b>{hi ? "व्याख्या:" : "Explanation:"}</b> {lang === "hi" ? (rq.explanationHi ?? rq.explanation) : rq.explanation}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Card>
        </div>
      </Container>
    );
  }

  if (!q) {
    return <Container className="py-14"><Card><p className="font-semibold text-rose-700">{hi ? "प्रश्न उपलब्ध नहीं हैं।" : "The challenge paper could not be loaded."}</p></Card></Container>;
  }

  const localized = localizedQuestion(q, lang);
  const selected = answers[q.id];
  const optionLabels = test.optionE ? ["A", "B", "C", "D", "E"] : ["A", "B", "C", "D"];
  const finalQuestion = current === total - 1;

  return (
    <Container className="py-4 sm:py-7">
      <div className="mx-auto max-w-6xl">
        <div className="sticky top-16 z-30 rounded-2xl border border-ink-200 bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur sm:px-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0"><p className="truncate text-sm font-bold text-ink-900">{test.title}</p><p className="text-xs text-ink-500">{hi ? `प्रश्न ${current + 1} / ${total}` : `Question ${current + 1} / ${total}`}</p></div>
            <div className={cn("inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-extrabold tabular-nums", secondsLeft <= 60 ? "bg-rose-50 text-rose-700" : "bg-ink-900 text-white")}><Timer className="h-4 w-4" /> {mmss}</div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
          <Card className="p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge tone="brand">{q.section}</Badge>
              <span className="text-xs font-semibold text-ink-500">{hi ? "अंक" : "Marks"}: {test.optionE ? "+1 / −⅓" : "+3 / −1"}</span>
            </div>
            <PassageBlock text={q.passage} hi={hi} />
            <h1 className="mt-4 text-lg font-bold leading-relaxed text-ink-900 sm:text-xl">{localized.stem}</h1>
            <div className="mt-5 space-y-2.5">
              {localized.options.map((option, i) => (
                <button key={`${q.id}-${i}`} type="button" onClick={() => choose(i)} className={cn("flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition sm:text-base", selected === i ? "border-brand-500 bg-brand-50 ring-2 ring-brand-100" : "border-ink-200 hover:border-brand-300 hover:bg-brand-50/40")}>
                  <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-extrabold", selected === i ? "border-brand-600 bg-brand-600 text-white" : "border-ink-300 text-ink-600")}>{optionLabels[i]}</span>
                  <span className="pt-1 text-ink-800">{option}</span>
                </button>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="outline" onClick={clear} disabled={selected === null || selected === undefined}><RotateCcw className="h-4 w-4" /> {hi ? "उत्तर हटाएँ" : "Clear"}</Button>
              <Button variant={marked[q.id] ? "primary" : "outline"} onClick={toggleMark}><Flag className="h-4 w-4" /> {marked[q.id] ? (hi ? "चिह्न हटाएँ" : "Unmark") : (hi ? "रिव्यू के लिए चिह्नित" : "Mark for review")}</Button>
            </div>

            <div className="mt-7 flex items-center justify-between gap-2">
              <Button variant="outline" onClick={() => setCurrent((v) => Math.max(0, v - 1))} disabled={current === 0}><ChevronLeft className="h-4 w-4" /> {hi ? "पिछला" : "Previous"}</Button>
              {!finalQuestion ? <Button onClick={() => setCurrent((v) => Math.min(total - 1, v + 1))}>{hi ? "अगला" : "Next"} <ChevronRight className="h-4 w-4" /></Button> : <Button onClick={requestSubmit} disabled={submitting}>{submitting ? (hi ? "जमा हो रहा है…" : "Submitting…") : (hi ? "टेस्ट जमा करें" : "Submit test")}</Button>}
            </div>
            {submitError && <p className="mt-3 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-700">{submitError}</p>}
          </Card>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Card className="p-4">
              <div className="flex items-center justify-between gap-2"><h2 className="font-bold text-ink-900">{hi ? "प्रश्न पैलेट" : "Question palette"}</h2><Badge tone="brand">{answeredCount}/{total}</Badge></div>
              <div className="mt-3 rounded-xl bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-800"><span>{hi ? "प्रयास किए" : "Attempted"}</span><span className="float-right tabular-nums">{answeredCount}/{total}</span></div>
              <div className="mt-2 rounded-xl bg-saffron-50 px-3 py-2 text-sm font-semibold text-saffron-800"><span>{hi ? "रिव्यू" : "For review"}</span><span className="float-right tabular-nums">{markedCount}</span></div>
              <div className="mt-4 grid grid-cols-5 gap-1.5">
                {questions.map((item, i) => {
                  const a = answers[item.id];
                  const isAnswered = a !== null && a !== undefined;
                  return <button key={item.id} type="button" onClick={() => setCurrent(i)} className={cn("relative aspect-square rounded-lg border text-xs font-bold", current === i ? "border-brand-600 bg-brand-600 text-white" : isAnswered ? "border-teal-300 bg-teal-50 text-teal-800" : "border-ink-200 bg-white text-ink-600", marked[item.id] && current !== i && "ring-2 ring-saffron-300")}>{i + 1}{marked[item.id] && <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-saffron-500" />}</button>;
                })}
              </div>
              <Button className="mt-4 w-full" onClick={() => setCurrent(questions.length - 1)} variant="outline"><ListChecks className="h-4 w-4" /> {hi ? "अंतिम प्रश्न" : "Go to last"}</Button>
              <button type="button" onClick={requestSubmit} disabled={submitting} className="mt-2 w-full rounded-xl bg-brand-900 px-3 py-2.5 text-sm font-bold text-white disabled:opacity-50">{submitting ? (hi ? "जमा हो रहा है…" : "Submitting…") : (hi ? "अभी जमा करें" : "Submit now")}</button>
            </Card>
          </aside>
        </div>
      </div>
    </Container>
  );
}
