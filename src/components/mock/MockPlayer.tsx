"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Clock, Flag, ChevronLeft, ChevronRight, CheckCircle2, XCircle,
  AlertTriangle, RotateCcw, ArrowRight, ListChecks, TrendingUp, Target, Sparkles, History, Lock,
} from "lucide-react";
import { Container, Button, ButtonLink, Badge, Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import { sectionLabels, type Question } from "@/data/questions";
import { scoreAttempt, estimatePercentile, categoryLabel, markLabel, OPTION_E, type MockTest, type ScoreResult } from "@/lib/mock-engine";
import { saveAttempt, getAttempts, getAttemptsForTest, type SavedAttempt } from "@/lib/attempts";
import { pushAttempt } from "@/lib/supabase/sync";
import { Confetti } from "@/components/mock/Confetti";
import { useLang } from "@/lib/i18n";
import { localizedQuestion } from "@/lib/localize-question";
import { usePassTier, PaywallCard, BuyPassButton } from "@/components/pricing/PlanUnlock";
import { PREP_PRICE } from "@/lib/pricing";
import { isFreeMock } from "@/lib/plan-access";

/** Free mocks are numbered per exam: "up-free-3" -> prefix "up-free-". */
const freePrefix = (id: string) => id.replace(/\d+$/, "");
const FREE_LIMIT = 2;

type Phase = "intro" | "running" | "result";
type Answers = Record<string, number | null>;

export function MockPlayer({ test, questions, locked }: { test: MockTest; questions: Question[]; locked: boolean }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [marked, setMarked] = useState<Record<string, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(test.durationMin * 60);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  // When a past attempt is reopened, we show its analysis (not a fresh test) and
  // suppress re-saving it. Starting a new test clears this and starts clean.
  const [viewingPrior, setViewingPrior] = useState(false);
  const [viewingAt, setViewingAt] = useState<string | null>(null);
  // Past attempts of THIS test, newest first, shown on the details page.
  const [history, setHistory] = useState<SavedAttempt[]>([]);
  const savedRef = useRef(false);
  const priorChecked = useRef(false);
  const { lang, t } = useLang();
  // Exactly two approved mocks are free. Everything else needs the ₹99 Prep Pass;
  // `locked` comes from the server, which withholds the questions until the pass verifies.
  const tier = usePassTier();
  const qTotal = questions.length || test.blueprint.reduce((a, p) => a + p.count, 0);
  // Legacy mini-mock IDs may exist in the content bank, but only the two approved full mocks are free.
  const isMini = /-free-/.test(test.id);
  // Free-mock progress for this exam (for the "x of 10 used" nudge).
  const [freeUsed, setFreeUsed] = useState(0);

  const q = questions[current];

  useEffect(() => {
    if (!isMini) return;
    const pre = freePrefix(test.id);
    setFreeUsed(new Set(getAttempts().filter((a) => a.testId.startsWith(pre)).map((a) => a.testId)).size);
  }, [test, phase]);

  const submit = useCallback(() => {
    setConfirmOpen(false);
    const res = scoreAttempt(test, questions, answers);
    setResult(res);
    setPhase("result");
    if (!savedRef.current) {
      savedRef.current = true;
      const attempt = {
        testId: test.id,
        testTitle: test.title,
        post: test.post,
        cycle: test.cycle,
        score: res.score,
        maxScore: res.maxScore,
        correct: res.correct,
        wrong: res.wrong,
        unattempted: res.unattempted,
        total: res.total,
        weakTopics: res.weakTopics,
        takenAt: new Date().toISOString(),
        answers,
      };
      saveAttempt(attempt);
      void pushAttempt(attempt); // cloud sync when Supabase is configured
      setHistory((h) => [attempt, ...h]);
      setViewingAt(attempt.takenAt);
    }
  }, [test, questions, answers]);

  // Reopen behaviour: load this test's past attempts. The details page then shows
  // the last attempt's score + "View full analysis" on top, alongside the test
  // details and a "Start new test" button, so nothing is lost and nothing restarts.
  useEffect(() => {
    if (priorChecked.current) return;
    priorChecked.current = true;
    setHistory(getAttemptsForTest(test.id));
  }, [test]);

  const clearRun = () => {
    setAnswers({});
    setMarked({});
    setCurrent(0);
    setSecondsLeft(test.durationMin * 60);
    setResult(null);
    savedRef.current = false;
    setViewingPrior(false);
    setViewingAt(null);
  };

  /** Back to the details page (with history + Start new test). */
  const reattempt = () => {
    clearRun();
    setPhase("intro");
  };

  const startNew = () => {
    clearRun();
    setPhase("running");
  };

  /** Open the full analysis of a saved attempt. */
  const viewAttempt = (a: SavedAttempt) => {
    if (!a.answers) return;
    savedRef.current = true; // already saved; don't duplicate
    setAnswers(a.answers);
    setResult(scoreAttempt(test, questions, a.answers));
    setViewingPrior(true);
    setViewingAt(a.takenAt);
    setPhase("result");
  };

  const fmtWhen = (iso: string) =>
    new Date(iso).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });

  // Timer
  useEffect(() => {
    if (phase !== "running") return;
    if (secondsLeft <= 0) {
      submit();
      return;
    }
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [phase, secondsLeft, submit]);

  // Scroll to top on every phase change (start, each question, and the RESULT
  // screen) and when moving between questions, fixes phones staying scrolled
  // down so the result/question appears off-screen.
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [phase, current]);

  const answeredCount = useMemo(
    () => Object.values(answers).filter((v) => v !== null && v !== undefined).length,
    [answers],
  );

  const mmss = `${String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:${String(
    secondsLeft % 60,
  ).padStart(2, "0")}`;

  /* ---------------------------------------------------------- Intro */
  if (phase === "intro") {
    const hiI = lang === "hi";
    const last = history[0];
    const lastPct = last && last.maxScore > 0 ? Math.max(0, Math.round((last.score / last.maxScore) * 100)) : 0;
    const best = history.length ? Math.max(...history.map((a) => a.score)) : 0;
    return (
      <Container className="py-14">
        <div className="mx-auto max-w-2xl">
          <Link href="/mock-tests" className="text-sm text-ink-500 hover:text-brand-700">
            ← {hiI ? "सभी मॉक टेस्ट" : "All mock tests"}
          </Link>

          {last && (
            <Card className="mt-4 border-brand-200 bg-brand-50/50">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-800">
                <History className="h-4 w-4" />
                {hiI ? "आप यह टेस्ट पहले दे चुके हैं" : "You've taken this test before"}
                <span className="font-normal text-ink-500">· {fmtWhen(last.takenAt)}</span>
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
                {[
                  { l: hiI ? "पिछला स्कोर" : "Last score", v: `${last.score}/${last.maxScore}` },
                  { l: hiI ? "प्रतिशत" : "Percent", v: `${lastPct}%` },
                  { l: hiI ? "सही / गलत" : "Right / wrong", v: `${last.correct} / ${last.wrong}` },
                  { l: hiI ? "सर्वश्रेष्ठ" : "Best score", v: String(best) },
                ].map((x) => (
                  <div key={x.l} className="rounded-xl bg-white py-3 ring-1 ring-brand-100">
                    <div className="text-lg font-bold text-ink-900">{x.v}</div>
                    <div className="text-xs text-ink-500">{x.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {last.answers && !locked ? (
                  <Button variant="outline" onClick={() => viewAttempt(last)}>
                    <ListChecks className="h-4 w-4" /> {hiI ? "पूरा विश्लेषण देखें" : "View full analysis"}
                  </Button>
                ) : (
                  <p className="self-center text-xs text-ink-500">
                    {hiI ? "इस पुराने प्रयास का विस्तृत विश्लेषण उपलब्ध नहीं है।" : "Detailed analysis isn't stored for this older attempt."}
                  </p>
                )}
                <Button onClick={startNew} disabled={locked}>
                  <RotateCcw className="h-4 w-4" /> {hiI ? "नया टेस्ट शुरू करें" : "Start new test"}
                </Button>
              </div>
            </Card>
          )}

          <Card className="mt-4">
            <div className="flex flex-wrap items-center gap-2">
              {test.category && (
                <Badge tone={categoryLabel[test.category].tone}>
                  {lang === "hi" ? categoryLabel[test.category].hi : categoryLabel[test.category].en}
                </Badge>
              )}
              <Badge tone="slate">{test.post}</Badge>
              <Badge tone={test.cycle === "2025-26" ? "amber" : "green"}>{test.cycle}</Badge>
              <Badge tone="brand">{test.tier}</Badge>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-ink-900">{test.title}</h1>
            <p className="mt-2 text-ink-600">{test.description}</p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { l: t("questionsWord"), v: String(qTotal) },
                { l: lang === "hi" ? "अवधि" : "Duration", v: `${test.durationMin} ${lang === "hi" ? "मिनट" : "min"}` },
                { l: lang === "hi" ? "अंकन" : "Marking", v: markLabel(test) },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-ink-50 py-4">
                  <div className="text-xl font-bold text-brand-700">{x.v}</div>
                  <div className="text-xs text-ink-500">{x.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-ink-200 p-4 text-sm text-ink-600">
              <p className="mb-2 font-semibold text-ink-800">{t("instructions")}</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>{t("timerNote")}</li>
                <li>{test.negativeMark ? t("negativeWarn") : t("noNegative")}</li>
                {test.optionE && (
                  <li className="font-medium text-ink-800">
                    {lang === "hi"
                      ? "BPSC की तरह हर प्रश्न में विकल्प E (प्रश्न का प्रयास नहीं) है। E चुनने पर 0 अंक; पर कोई भी विकल्प न भरने पर भी ⅓ अंक कटेगा।"
                      : "Like BPSC, every question has option E (not attempting). Choosing E scores 0, but leaving a question completely blank also loses ⅓ mark."}
                  </li>
                )}
                <li>{lang === "hi" ? "प्रश्न पैलेट से किसी भी प्रश्न पर जाएँ और समीक्षा हेतु चिह्नित करें।" : "Use the question palette to jump around and mark for review."}</li>
                <li>{lang === "hi" ? "जमा करने पर खंडवार स्कोर और कमज़ोर-क्षेत्र रिपोर्ट मिलेगी।" : "You get a part-wise score and weak-spot report on submission."}</li>
              </ul>
            </div>

            {locked ? (
              <PaywallCard hi={hiI} className="mt-6" />
            ) : (
              <Button className="mt-6 w-full" size="lg" onClick={startNew}>
                {last ? (hiI ? "नया टेस्ट शुरू करें" : "Start new test") : t("startTest")} <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            {isMini && (
              <p className="mt-3 text-center text-sm text-ink-600">
                {hiI
                  ? <>मुफ़्त मॉक: {Math.min(freeUsed, FREE_LIMIT)} / {FREE_LIMIT} दिए गए। इसके बाद सब कुछ <strong>₹{PREP_PRICE}</strong> में।</>
                  : <>Free mocks used: {Math.min(freeUsed, FREE_LIMIT)} of {FREE_LIMIT}. After that, everything is <strong>₹{PREP_PRICE}</strong>.</>}
              </p>
            )}
          </Card>

          {history.length > 1 && (
            <Card className="mt-4">
              <h2 className="flex items-center gap-2 text-base font-semibold text-ink-900">
                <History className="h-4 w-4 text-brand-600" /> {hiI ? "आपके सभी प्रयास" : "All your attempts"} ({history.length})
              </h2>
              <ul className="mt-3 divide-y divide-ink-100">
                {history.map((a, i) => {
                  const p = a.maxScore > 0 ? Math.max(0, Math.round((a.score / a.maxScore) * 100)) : 0;
                  return (
                    <li key={a.takenAt + i} className="flex items-center justify-between gap-3 py-2.5">
                      <div className="min-w-0 text-sm">
                        <span className="font-medium text-ink-900">
                          {hiI ? "प्रयास" : "Attempt"} {history.length - i}
                        </span>
                        <span className="text-ink-500"> · {fmtWhen(a.takenAt)}</span>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <Badge tone={p >= Math.round((test.cutoffPct ?? 0.6) * 100) ? "green" : "amber"}>
                          {a.score}/{a.maxScore}
                        </Badge>
                        {a.answers && !locked && (
                          <button
                            type="button"
                            onClick={() => viewAttempt(a)}
                            className="text-sm font-semibold text-brand-700 hover:underline"
                          >
                            {hiI ? "विश्लेषण" : "Analysis"} →
                          </button>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card>
          )}
        </div>
      </Container>
    );
  }

  /* --------------------------------------------------------- Result */
  if (phase === "result" && result) {
    const pct = result.maxScore > 0 ? Math.max(0, Math.round((result.score / result.maxScore) * 100)) : 0;
    const targetPct = Math.round((test.cutoffPct ?? 0.6) * 100);
    const passed = pct >= targetPct;
    const percentile = estimatePercentile(pct);
    // Personalised action plan from per-topic accuracy.
    const sortedTopics = [...result.perTopic].sort((a, b) => a.accuracy - b.accuracy);
    const strong = sortedTopics.filter((tp) => tp.attempted >= 1 && tp.accuracy >= 0.8);
    const focus = sortedTopics.filter((tp) => tp.attempted >= 1 && tp.accuracy < 0.5);
    const slips = sortedTopics.filter((tp) => tp.attempted >= 2 && tp.accuracy >= 0.5 && tp.accuracy < 0.8);
    const notCovered = sortedTopics.filter((tp) => tp.attempted < tp.total);
    const hi = lang === "hi";
    // Free mocks show the score, sections and answers; the deep analysis is the ₹99 hook.
    const analysisLocked = isFreeMock(test.id) && !tier;
    const freeLeft = Math.max(0, FREE_LIMIT - freeUsed);
    return (
      <Container className="py-12">
        {passed && !viewingPrior && <Confetti />}
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-brand-800">
              <History className="h-4 w-4" />
              {viewingPrior
                ? (hi ? "पिछले प्रयास का विश्लेषण" : "Analysis of a past attempt")
                : (hi ? "इस प्रयास का विश्लेषण" : "Analysis of this attempt")}
              {viewingAt && <span className="font-normal text-ink-500">· {fmtWhen(viewingAt)}</span>}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" onClick={reattempt}>
                <ChevronLeft className="h-4 w-4" /> {hi ? "टेस्ट विवरण" : "Test details"}
              </Button>
              <Button size="sm" onClick={startNew}>
                <RotateCcw className="h-4 w-4" /> {hi ? "नया टेस्ट" : "Start new test"}
              </Button>
            </div>
          </div>
          <div className={cn("relative overflow-hidden rounded-3xl p-8 text-center text-white", passed ? "celebrate-gradient" : "bg-brand-700")}>
            <div className="animate-pop">
              <div className="text-6xl leading-none">{passed ? "🎉" : "💪"}</div>
              <p className="mt-3 text-sm font-medium text-white/80">{t("yourScore")}</p>
              <p className="mt-1 text-6xl font-extrabold">
                {result.score}
                <span className="text-2xl font-semibold text-white/70"> / {result.maxScore}</span>
              </p>
              <p className="mt-2 text-white/90">{pct}% · {test.title}</p>
            </div>
            <div className="mx-auto mt-6 grid max-w-md grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white/15 py-3">
                <div className="text-xl font-bold text-white">✅ {result.correct}</div>
                <div className="text-xs text-white/80">{t("correct")}</div>
              </div>
              <div className="rounded-xl bg-white/15 py-3">
                <div className="text-xl font-bold text-white">❌ {result.wrong}</div>
                <div className="text-xs text-white/80">{t("wrong")}</div>
              </div>
              <div className="rounded-xl bg-white/15 py-3">
                <div className="text-xl font-bold text-white">⏭️ {result.unattempted}</div>
                <div className="text-xs text-white/80">
                  {test.blankPenalty
                    ? (hi ? `E: ${result.notAttempting} · खाली (−⅓): ${result.blankPenalised}` : `E: ${result.notAttempting} · blank (−⅓): ${result.blankPenalised}`)
                    : t("skipped")}
                </div>
              </div>
            </div>
          </div>

          {/* Cutoff assessment */}
          <div className={cn("mt-4 animate-pop rounded-2xl border p-4 text-center", passed ? "border-teal-200 bg-teal-50" : "border-saffron-200 bg-saffron-50")}>
            {passed ? (
              <p className="font-semibold text-teal-800">🎊 {t("crossed")} {targetPct}%! {t("keepMomentum")} 🥳</p>
            ) : (
              <p className="font-semibold text-saffron-800">💡 {Math.max(1, targetPct - pct)}% {t("shortOf")} {targetPct}% {t("target")} 💪</p>
            )}
            <div className="mx-auto mt-3 h-2.5 max-w-md overflow-hidden rounded-full bg-white ring-1 ring-ink-200">
              <div className={cn("h-full rounded-full transition-all", passed ? "bg-success" : "bg-saffron-400")} style={{ width: `${Math.min(100, pct)}%` }} />
            </div>
            <p className="mt-1.5 text-xs text-ink-500">{t("targetLine")} {targetPct}%: {t("targetNote")}</p>
          </div>

          {/* Percentile vs other test-takers */}
          <Card className="mt-4 border-brand-200 bg-gradient-to-br from-brand-50 to-white">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div>
                <p className="text-lg font-extrabold leading-snug text-brand-800 sm:text-xl">
                  {hi
                    ? `आपने लगभग ${percentile}% परीक्षार्थियों से बेहतर किया।`
                    : `You scored better than about ${percentile}% of test-takers.`}
                </p>
                <p className="mt-1 text-sm font-medium text-ink-700">
                  {100 - percentile > 0
                    ? (hi
                        ? `लगभग ${100 - percentile}% अभी आपसे आगे हैं: अगला लक्ष्य उनसे आगे निकलना है।`
                        : `About ${100 - percentile}% are still ahead of you. Your next target is to get past them.`)
                    : (hi ? "आप लगभग सबसे आगे हैं: यही गति बनाए रखें।" : "You're ahead of almost everyone. Keep this pace.")}
                </p>
                <p className="mt-0.5 text-xs text-ink-400">
                  {hi ? "अनुमानित तुलना (मॉडल आधारित)।" : "Estimated comparison (modelled)."}
                </p>
              </div>
            </div>
          </Card>

          {/* Exam-level mock → point to the plan that fixes what it found */}
          {test.id.startsWith("up-mock-") && (
            <Link
              href="/exams/up/plan"
              className="mt-4 flex flex-col gap-3 rounded-2xl bg-gradient-to-r from-brand-700 to-teal-700 p-5 text-white sm:flex-row sm:items-center sm:justify-between"
            >
              <span>
                <span className="block font-semibold">
                  {hi ? "कमज़ोर टॉपिक पक्के करने हैं?" : "Want these weak topics fixed?"}
                </span>
                <span className="mt-0.5 block text-sm text-brand-100">
                  {hi
                    ? "दिन-प्रतिदिन योजना में हर टॉपिक पर पहले आसान, फिर परीक्षा-स्तर का 50-प्रश्न सेट है, 3 दिसंबर तक।"
                    : "The day-by-day plan has an easier set, then an exam-level 50-question set, for every topic, all the way to 3 December."}
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-saffron-400 px-4 py-2 text-sm font-semibold text-ink-900">
                {hi ? "योजना खोलें" : "Open the plan"} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          )}

          {/* Per-topic analysis + personalised action plan (locked on free mocks) */}
          {analysisLocked ? (
            <Card className="relative mt-6 overflow-hidden">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
                <Target className="h-5 w-5 text-brand-600" /> {hi ? "टॉपिक-वार विश्लेषण और कार्य-योजना" : "Topic-wise analysis & action plan"}
              </h2>
              <div aria-hidden className="pointer-events-none mt-5 select-none space-y-4 blur-[5px]">
                {sortedTopics.slice(0, 6).map((tp) => (
                  <div key={tp.topic}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink-800">{tp.topic}</span>
                      <span className="font-medium text-ink-600">{tp.correct}/{tp.total}</span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full rounded-full bg-ink-100">
                      <div className="h-full rounded-full bg-saffron-400" style={{ width: `${Math.max(8, Math.round(tp.accuracy * 100))}%` }} />
                    </div>
                  </div>
                ))}
                <div className="h-24 rounded-2xl bg-brand-50" />
              </div>
              <div className="absolute inset-0 grid place-items-center bg-white/70 p-4">
                <div className="max-w-sm text-center">
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#0a1329] text-saffron-300">
                    <Lock className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-lg font-extrabold text-ink-900">
                    {hi ? "देखिए अंक ठीक कहाँ कटे" : "See exactly where you lost marks"}
                  </p>
                  <p className="mt-1 text-sm text-ink-600">
                    {hi
                      ? `हर टॉपिक की सटीकता और आपकी अपनी कार्य-योजना ₹${PREP_PRICE} प्रेप पास में, साथ में हर पूर्ण मॉक और पूरी योजना।`
                      : `Topic-by-topic accuracy and your own action plan come with the ₹${PREP_PRICE} Prep Pass, along with every full mock and the whole plan.`}
                  </p>
                  <BuyPassButton product="prep" hi={hi} className="mt-4" fullWidth />
                </div>
              </div>
            </Card>
          ) : (
          <Card className="mt-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
              <Target className="h-5 w-5 text-brand-600" /> {hi ? "टॉपिक-वार विश्लेषण" : "Topic-wise analysis"}
            </h2>
            <div className="mt-5 space-y-4">
              {sortedTopics.map((tp) => {
                const acc = Math.round(tp.accuracy * 100);
                const tone = tp.attempted === 0 ? "ink" : tp.accuracy >= 0.8 ? "green" : tp.accuracy < 0.5 ? "saffron" : "amber";
                return (
                  <div key={tp.topic}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink-800">{tp.topic}</span>
                      <span className="font-medium text-ink-600">
                        {tp.correct}/{tp.total} {hi ? "सही" : "correct"}
                        {tp.attempted > 0 && <> · {acc}%</>}
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-ink-100">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          tone === "green" && "bg-success",
                          tone === "amber" && "bg-saffron-400",
                          tone === "saffron" && "bg-rose-400",
                          tone === "ink" && "bg-ink-300",
                        )}
                        style={{ width: `${tp.attempted ? acc : 4}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5">
              <p className="flex items-center gap-2 text-base font-bold text-brand-800">
                <Sparkles className="h-5 w-5" /> {hi ? "आपकी व्यक्तिगत कार्य-योजना" : "Your personalised action plan"}
              </p>
              <div className="mt-4 space-y-4 text-sm text-ink-800">
                {strong.length > 0 && (
                  <div>
                    <p className="font-semibold text-teal-700">✅ {hi ? "मज़बूत पक्ष: इन्हें बनाए रखें" : "Strengths: keep them up"}</p>
                    <p className="mt-1 text-ink-700">{strong.map((tp) => tp.topic).join(", ")}</p>
                  </div>
                )}
                {slips.length > 0 && (
                  <div>
                    <p className="font-semibold text-amber-700">⚠️ {hi ? "छोटी-छोटी गलतियाँ: सावधानी से हल करें" : "Silly slips: solve these more carefully"}</p>
                    <p className="mt-1 text-ink-700">{slips.map((tp) => tp.topic).join(", ")}</p>
                  </div>
                )}
                {focus.length > 0 && (
                  <div>
                    <p className="font-semibold text-saffron-700">🎯 {hi ? "यहाँ मेहनत चाहिए: प्राथमिकता से पढ़ें" : "Work harder here: study on priority"}</p>
                    <p className="mt-1 text-ink-700">{focus.map((tp) => tp.topic).join(", ")}</p>
                  </div>
                )}
                {notCovered.length > 0 && (
                  <div>
                    <p className="font-semibold text-ink-700">📌 {hi ? "इन टॉपिक के छूटे प्रश्न भी दोहराएँ" : "Also revisit the questions you skipped in"}</p>
                    <p className="mt-1 text-ink-700">{notCovered.map((tp) => tp.topic).join(", ")}</p>
                  </div>
                )}
                <div className="rounded-xl bg-white p-3 text-ink-700 ring-1 ring-brand-100">
                  <p className="font-semibold text-ink-800">{hi ? "अगला कदम" : "Next step"}:</p>
                  <p className="mt-1">
                    {focus.length > 0
                      ? (hi
                          ? `पहले "${focus[0].topic}" के हल किए गए प्रश्नों की व्याख्या पढ़ें, फिर यही टेस्ट दोबारा दें और ${targetPct}% पार करने का लक्ष्य रखें।`
                          : `Start by reading the explanations for "${focus[0].topic}", then reattempt this test aiming to cross ${targetPct}%.`)
                      : (hi
                          ? `बढ़िया संतुलन! अब कठिन (Tough) सेट या पूरा मॉक देकर गति व सटीकता बढ़ाएँ।`
                          : `Well balanced! Now take the Tough set or a full mock to build speed and accuracy.`)}
                  </p>
                </div>
              </div>
            </div>
          </Card>
          )}

          {/* Section breakdown */}
          <Card className="mt-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
              <ListChecks className="h-5 w-5 text-brand-600" /> {t("partAccuracy")}
            </h2>
            <div className="mt-5 space-y-4">
              {result.perSection.map((s) => {
                const acc = Math.round(s.accuracy * 100);
                const weak = result.weakSections.includes(s.section);
                return (
                  <div key={s.section}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink-800">{s.label}</span>
                      <span className="text-ink-500">
                        {s.correct}/{s.total} correct
                        {s.attempted > 0 && <> · {acc}%</>}
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-ink-100">
                      <div
                        className={cn("h-full rounded-full", weak ? "bg-rose-400" : "bg-brand-500")}
                        style={{ width: `${s.attempted ? acc : 0}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {(result.weakSections.length > 0 || result.weakTopics.length > 0) && (
              <div className="mt-6 rounded-xl border border-saffron-200 bg-saffron-50 p-4">
                <p className="flex items-center gap-2 font-semibold text-saffron-800">
                  <AlertTriangle className="h-4 w-4" /> {t("focusHere")}
                </p>
                {result.weakTopics.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {result.weakTopics.map((t) => (
                      <span key={t} className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-saffron-800 ring-1 ring-saffron-200">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mt-3 text-sm text-saffron-800">
                  {lang === "hi" ? "इन कमज़ोर बिंदुओं पर दोबारा अभ्यास करें और अगली बार बेहतर करें।" : "Practise these weak spots again and improve next time."}
                </p>
              </div>
            )}
          </Card>

          {/* Free mock finished: the offer, while they're looking at their score */}
          {isFreeMock(test.id) && !tier && (
            <PaywallCard
              hi={hi}
              className="mt-6"
              title={!isMini
                ? (hi ? `पसंद आया? बाकी सब ₹${PREP_PRICE} में खोलें।` : `Liked it? Unlock everything else for ₹${PREP_PRICE}.`)
                : freeLeft === 0
                ? (hi ? `आपके 2 मुफ़्त मॉक पूरे हो गए। आगे की तैयारी ₹${PREP_PRICE} में।` : `That was your last free mock. Keep going for ₹${PREP_PRICE}.`)
                : (hi ? `${freeLeft} मुफ़्त मॉक बचे हैं। असली तैयारी के लिए सब कुछ खोलें।` : `${freeLeft} free mock${freeLeft === 1 ? "" : "s"} left. Ready for the real thing?`)}
            />
          )}

          {/* Review */}
          <Card className="mt-6">
            <h2 className="text-lg font-semibold text-ink-900">{t("reviewAnswers")}</h2>
            <div className="mt-4 space-y-5">
              {questions.map((question, i) => {
                const a = answers[question.id];
                const isCorrect = a === question.correct;
                const choseE = a === OPTION_E;
                const skipped = a === null || a === undefined || choseE;
                const rq = localizedQuestion(question, lang);
                return (
                  <div key={question.id} className="border-t border-ink-100 pt-4 first:border-0 first:pt-0">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5">
                        {skipped ? (
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-ink-100 text-[10px] font-bold text-ink-500">{choseE ? "E" : "–"}</span>
                        ) : isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-success" />
                        ) : (
                          <XCircle className="h-5 w-5 text-danger" />
                        )}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-ink-900">
                          <span className="text-ink-400">Q{i + 1}.</span> {rq.stem}
                        </p>
                        {rq.altStem && <p className="text-xs text-ink-400">{rq.altStem}</p>}
                        <div className="mt-2 grid gap-1.5 text-sm sm:grid-cols-2">
                          {rq.options.map((opt, oi) => (
                            <div
                              key={oi}
                              className={cn(
                                "rounded-lg border px-3 py-1.5",
                                oi === question.correct && "border-success bg-teal-50 text-teal-800",
                                oi === a && oi !== question.correct && "border-danger bg-red-50 text-red-800",
                                oi !== question.correct && oi !== a && "border-ink-200 text-ink-600",
                              )}
                            >
                              {opt}
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 rounded-lg border border-brand-100 bg-brand-50/60 p-3">
                          <p className="text-sm leading-relaxed text-ink-800">
                            <span className="font-bold text-brand-700">{t("why")}: </span>
                            {rq.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={startNew}>
              <RotateCcw className="h-4 w-4" /> {lang === "hi" ? "नया टेस्ट शुरू करें" : "Start new test"}
            </Button>
            <Button variant="outline" onClick={reattempt}>
              <ChevronLeft className="h-4 w-4" /> {lang === "hi" ? "टेस्ट विवरण व सभी प्रयास" : "Test details & all attempts"}
            </Button>
            <ButtonLink href="/mock-tests" variant="ghost">{t("moreTests")}</ButtonLink>
            <ButtonLink href="/dashboard" variant="ghost">{t("viewDashboard")}</ButtonLink>
          </div>
        </div>
      </Container>
    );
  }

  /* -------------------------------------------------------- Running */
  const status = (qid: string, idx: number) => {
    const isMarked = marked[qid];
    const isAnswered = answers[qid] !== null && answers[qid] !== undefined;
    if (idx === current) return "current";
    if (isMarked) return "marked";
    if (isAnswered) return "answered";
    return "todo";
  };

  const lq = localizedQuestion(q, lang);

  return (
    <Container className="py-6">
      {/* Top bar */}
      <div className="sticky top-16 z-30 -mx-4 mb-6 flex items-center justify-between gap-3 border-b border-ink-200 bg-white/90 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink-900">{test.title}</p>
          <p className="text-xs text-ink-500">{answeredCount} {t("of")} {questions.length} {t("answered")}</p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold tabular-nums",
              secondsLeft <= 60 ? "bg-red-50 text-danger" : "bg-brand-50 text-brand-700",
            )}
          >
            <Clock className="h-4 w-4" /> {mmss}
          </span>
          <Button size="sm" onClick={() => setConfirmOpen(true)}>{t("submit")}</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_260px]">
        {/* Question */}
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-brand-700">{t("question")} {current + 1}</span>
            <Badge tone="slate">{sectionLabels[q.section]}</Badge>
          </div>
          <p className="mt-3 text-lg font-medium leading-relaxed text-ink-900">{lq.stem}</p>
          {lq.altStem && <p className="mt-1 text-sm text-ink-500">{lq.altStem}</p>}

          <div className="mt-5 space-y-3">
            {lq.options.map((opt, oi) => {
              const selected = answers[q.id] === oi;
              return (
                <button
                  key={oi}
                  onClick={() =>
                    setAnswers((a) => ({ ...a, [q.id]: selected ? null : oi }))
                  }
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                    selected
                      ? "border-brand-500 bg-brand-50 text-ink-900"
                      : "border-ink-200 text-ink-700 hover:border-brand-300 hover:bg-ink-50",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-bold",
                      selected ? "border-brand-500 bg-brand-500 text-white" : "border-ink-300 text-ink-500",
                    )}
                  >
                    {String.fromCharCode(65 + oi)}
                  </span>
                  {opt}
                </button>
              );
            })}
            {test.optionE && (() => {
              const selected = answers[q.id] === OPTION_E;
              return (
                <button
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: selected ? null : OPTION_E }))}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border border-dashed px-4 py-3 text-left text-sm transition-colors",
                    selected ? "border-ink-500 bg-ink-100 text-ink-900" : "border-ink-300 text-ink-500 hover:bg-ink-50",
                  )}
                >
                  <span className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-bold", selected ? "border-ink-600 bg-ink-600 text-white" : "border-ink-300")}>E</span>
                  {lang === "hi" ? "प्रश्न का प्रयास नहीं (0 अंक)" : "Not attempting (0 marks)"}
                </button>
              );
            })()}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
            >
              <ChevronLeft className="h-4 w-4" /> {t("previous")}
            </Button>
            <Button
              variant={marked[q.id] ? "accent" : "ghost"}
              size="sm"
              onClick={() => setMarked((m) => ({ ...m, [q.id]: !m[q.id] }))}
            >
              <Flag className="h-4 w-4" /> {marked[q.id] ? t("marked") : t("markForReview")}
            </Button>
            {current < questions.length - 1 ? (
              <Button size="sm" onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}>
                {t("saveNext")} <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button size="sm" onClick={() => setConfirmOpen(true)}>
                {t("finishSubmit")} <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Palette */}
        <aside className="md:sticky md:top-32 md:self-start">
          <Card className="p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">{t("questionsWord")}</p>
            <div className="mt-3 grid grid-cols-6 gap-2 md:grid-cols-5">
              {questions.map((question, i) => {
                const st = status(question.id, i);
                return (
                  <button
                    key={question.id}
                    onClick={() => setCurrent(i)}
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-lg text-sm font-semibold transition-colors",
                      st === "current" && "bg-brand-600 text-white ring-2 ring-brand-300",
                      st === "answered" && "bg-teal-100 text-teal-800",
                      st === "marked" && "bg-saffron-100 text-saffron-800",
                      st === "todo" && "bg-ink-100 text-ink-500",
                    )}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <ul className="mt-4 space-y-1.5 text-xs text-ink-500">
              <li className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-teal-100" /> {t("answered")}</li>
              <li className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-saffron-100" /> {t("markForReview")}</li>
              <li className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-ink-100" /> {lang === "hi" ? "अनुत्तरित" : "Not answered"}</li>
            </ul>
          </Card>
        </aside>
      </div>

      {/* Submit confirmation */}
      {confirmOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-ink-900/50 p-4"
          onClick={() => setConfirmOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-ink-900">
              {lang === "hi" ? "टेस्ट जमा करें?" : "Submit the test?"}
            </h3>
            <p className="mt-2 text-sm text-ink-600">
              {lang === "hi"
                ? `आपने ${questions.length} में से ${answeredCount} प्रश्न हल किए हैं। जमा करने के बाद उत्तर नहीं बदले जा सकते।`
                : `You have answered ${answeredCount} of ${questions.length} questions. You cannot change answers after submitting.`}
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setConfirmOpen(false)}>
                {lang === "hi" ? "नहीं" : "No"}
              </Button>
              <Button onClick={submit}>
                {lang === "hi" ? "हाँ, जमा करें" : "Yes, submit"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
