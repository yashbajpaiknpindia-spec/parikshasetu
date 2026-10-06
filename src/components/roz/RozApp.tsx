"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Loader2, Clock, CheckCircle2, XCircle, ArrowRight, Share2, Trophy, Zap, BookOpenCheck,
  ChevronDown, RotateCcw, Users, LogIn, SkipForward, X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Question } from "@/data/questions";
import { localizedQuestion } from "@/lib/localize-question";
import { scriptOf } from "@/lib/script";
import { QuestionStem } from "@/components/mock/QuestionStem";
import { Confetti } from "@/components/mock/Confetti";
import { EXAM_CHOICES, saveExamChoice, isExamChoice, type ExamChoice } from "@/lib/exam-choice";
import {
  ROZ_KINDS, addDays, addWrong, dueWrong, istDate, nextIstMidnight, nextSundayStart, readDays, streakOf, type RozKind,
} from "@/lib/roz";

type Bi = { en: string; hi: string };
type Subjects = Record<string, { key: string; en: string; hi: string }[]>;
interface Info { label: string; questions: number; minutes: number; marking: string; plus: number; minus: number }
interface Done { k: RozKind; d: string; p: string; w: string; score: number; max: number; correct: number; wrong: number; skipped: number; sec: number }
interface Board { rows: { name: string; score: number; sec: number; who: string }[]; total: number }
interface Rank { rank: number; total: number }

interface Props {
  hi: boolean;
  kind: RozKind;
  /** Is the Sunday Sprint open today (India time)? */
  sunday: boolean;
  serverNow: number;
  initialExam: ExamChoice | null;
  initialSubject?: string;
  subjects: Subjects;
  /** Logged in with name + mobile (challenge or an earlier "save my streak"). */
  user: { name: string } | null;
  /** Arrived from a friend's share link. */
  fromShare?: boolean;
  /** Start at once when the exam (and subject) are known: one tap from the home page. */
  autoStart?: boolean;
}

const SUBJECT_KEY = "mm_roz_subject";
const tokenKey = (k: RozKind, d: string, p: string) => `mm_roz_tok_${k}_${d}_${p}`;
const fmtMMSS = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
const fmtScore = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/0$/, ""));
const buzz = (ms: number | number[]) => { try { navigator.vibrate?.(ms); } catch {} };

/**
 * Roz ka 10 / Sunday Sprint, start to finish on one page:
 *   pick exam (once) → play (one question at a time, right/wrong at once) → result
 *   (real rank, streak, share, "save my streak", today's board, solutions, what's next).
 */
export function RozApp({ hi, kind, sunday, serverNow, initialExam, initialSubject, subjects, user, fromShare, autoStart }: Props) {
  const tx = (b: Bi) => (hi ? b.hi : b.en);
  const K = ROZ_KINDS[kind];
  const [skew] = useState(() => serverNow - Date.now());
  const [exam, setExam] = useState<ExamChoice | null>(initialExam);
  const [subject, setSubject] = useState<string>(initialSubject ?? "");
  const [phase, setPhase] = useState<"pick" | "loading" | "play" | "finishing" | "result">("pick");
  const [err, setErr] = useState("");

  // play state
  const [info, setInfo] = useState<Info | null>(null);
  const [date, setDate] = useState("");
  const [paperKey, setPaperKey] = useState("");
  const [qs, setQs] = useState<Question[]>([]);
  const [token, setToken] = useState("");
  const [endsAt, setEndsAt] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [solved, setSolved] = useState<Record<string, Question>>({});
  const [idx, setIdx] = useState(0);
  const [pending, setPending] = useState<number | null>(null);
  const [combo, setCombo] = useState(0);
  const [left, setLeft] = useState(0);

  // result state
  const [done, setDone] = useState<Done | null>(null);
  const [rank, setRank] = useState<Rank | null>(null);
  const [board, setBoard] = useState<Board>({ rows: [], total: 0 });
  const [me, setMe] = useState("");
  const [named, setNamed] = useState(!!user);
  const [days, setDays] = useState<string[]>([]);

  const needsSubject = !!exam && (subjects[exam]?.length ?? 0) > 0;
  const ready = !!exam && (!needsSubject || !!subject);

  // Remember the subject between days; pick up the saved exam on this device.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      if (!initialSubject) { const s = localStorage.getItem(SUBJECT_KEY); if (s) setSubject(s); }
      if (!initialExam) { const e = localStorage.getItem("ps_exam"); if (isExamChoice(e)) setExam(e); }
    } catch {}
    setDays(readDays());
  }, [initialExam, initialSubject]);
  /* eslint-enable react-hooks/set-state-in-effect */

  /* -------------------------------------------------------------- start */
  const start = useCallback(async () => {
    if (!exam) return;
    setErr(""); setPhase("loading");
    saveExamChoice(exam);
    try { if (subject) localStorage.setItem(SUBJECT_KEY, subject); } catch {}
    const p = subject && needsSubject ? `${exam}:${subject}` : exam;
    const d0 = istDate(Date.now() + skew);
    let saved: string | null = null;
    try { saved = localStorage.getItem(tokenKey(kind, d0, p)); } catch {}
    try {
      const r = await fetch("/api/roz/start", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind, exam, subject: needsSubject ? subject : undefined, token: saved }) });
      const j = await r.json();
      if (!r.ok || !j.ok) {
        setErr(j.error === "not_open" ? (hi ? "संडे स्प्रिंट केवल रविवार को खुलता है।" : "The Sunday Sprint opens on Sundays only.") : (hi ? "पेपर नहीं खुल पाया, फिर कोशिश करें।" : "Couldn't open the paper, please try again."));
        setPhase("pick"); return;
      }
      setInfo(j.info); setDate(j.date); setPaperKey(p);
      if (j.done) {
        setDone(j.done); setRank(j.rank); setBoard(j.board ?? { rows: [], total: 0 }); setMe(j.me ?? ""); setNamed(!!j.named);
        addDays([j.done.d]); setDays(readDays());
        setPhase("result"); return;
      }
      setQs(j.questions); setToken(j.token); setEndsAt(j.endsAt);
      setAnswers(j.answers ?? {}); setSolved(j.answered ?? {});
      const firstOpen = (j.questions as Question[]).findIndex((q) => !(q.id in (j.answers ?? {})));
      setIdx(firstOpen < 0 ? j.questions.length - 1 : firstOpen);
      setLeft(Math.max(0, Math.round((j.endsAt - (Date.now() + skew)) / 1000)));
      try { localStorage.setItem(tokenKey(kind, j.date, p), j.token); } catch {}
      setPhase("play");
    } catch {
      setErr(hi ? "इंटरनेट जाँचें और फिर कोशिश करें।" : "Check your internet and try again.");
      setPhase("pick");
    }
  }, [exam, subject, needsSubject, kind, hi, skew]);

  // One tap from the home page: start as soon as the exam (and subject, if any) are known.
  const autoDone = useRef(false);
  useEffect(() => {
    if (!autoStart || autoDone.current || !ready || phase !== "pick") return;
    if (kind === "sprint" && !sunday) return;
    autoDone.current = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- an intentional one-off start
    void start();
  }, [autoStart, ready, phase, kind, sunday, start]);

  /* -------------------------------------------------------------- answer */
  const q = qs[idx];
  const answeredHere = q ? q.id in answers : false;

  async function choose(choice: number | null) {
    if (!q || answeredHere || pending !== null) return;
    setPending(choice ?? -2);
    try {
      const r = await fetch("/api/roz/answer", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token, qid: q.id, choice }) });
      const j = await r.json();
      if (!r.ok || !j.ok) {
        if (j.error === "time") { void finish(); return; }
        setErr(hi ? "उत्तर नहीं भेज पाए, फिर टैप करें।" : "Couldn't send the answer, tap again."); return;
      }
      setErr("");
      setToken(j.token);
      try { localStorage.setItem(tokenKey(kind, date, paperKey), j.token); } catch {}
      setAnswers((a) => ({ ...a, [q.id]: j.choice }));
      setSolved((s) => ({ ...s, [q.id]: j.q }));
      if (j.choice === null) { setCombo(0); }
      else if (j.choice === j.q.correct) { setCombo((c) => c + 1); buzz(25); }
      else { setCombo(0); buzz([40, 60, 40]); }
    } catch {
      setErr(hi ? "इंटरनेट जाँचें, फिर टैप करें।" : "Check your internet, then tap again.");
    } finally {
      setPending(null);
    }
  }

  /* -------------------------------------------------------------- finish */
  const finishing = useRef(false);
  const finish = useCallback(async () => {
    if (finishing.current) return;
    finishing.current = true;
    setPhase("finishing");
    try {
      const r = await fetch("/api/roz/finish", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token, days: readDays() }) });
      const j = await r.json();
      if (!r.ok || !j.ok) throw new Error("finish");
      setDone(j.done); setRank(j.rank); setBoard(j.board ?? { rows: [], total: 0 }); setMe(j.me ?? ""); setNamed(!!j.named);
      setQs(j.questions); setAnswers(j.answers ?? {});
      setSolved(Object.fromEntries((j.questions as Question[]).map((x) => [x.id, x])));
      addDays([j.done.d, ...(j.days ?? [])]); setDays(readDays());
      // Mistakes come back for revision after 1, 3 and 7 days.
      const wrong = (j.questions as Question[]).filter((x) => { const a = j.answers?.[x.id]; return a !== null && a !== undefined && a !== x.correct; });
      addWrong(wrong.map((x) => ({ q: x, chose: j.answers[x.id] })), j.done.d);
      try { localStorage.removeItem(tokenKey(kind, date, paperKey)); } catch {}
      setPhase("result");
    } catch {
      finishing.current = false;
      setErr(hi ? "स्कोर जमा नहीं हो पाया। इंटरनेट जाँचकर फिर दबाएँ।" : "Couldn't submit. Check your internet and tap again.");
      setPhase("play");
    }
  }, [token, kind, date, paperKey, hi]);

  // Clock (to the server's deadline). At zero, submit.
  useEffect(() => {
    if (phase !== "play") return;
    const id = setInterval(() => {
      const s = Math.max(0, Math.round((endsAt - (Date.now() + skew)) / 1000));
      setLeft(s);
      if (s <= 0) { clearInterval(id); void finish(); }
    }, 1000);
    return () => clearInterval(id);
  }, [phase, endsAt, skew, finish]);

  const allAnswered = qs.length > 0 && qs.every((x) => x.id in answers);
  const next = () => {
    if (idx < qs.length - 1) { setIdx(idx + 1); window.scrollTo({ top: 0 }); }
    else void finish();
  };

  const streak = useMemo(() => streakOf(days, serverNow), [days, serverNow]);

  /* ================================================================ UI */

  if (phase === "pick" || phase === "loading") {
    return (
      <PickScreen
        hi={hi} kind={kind} sunday={sunday} serverNow={serverNow} exam={exam} setExam={(e) => { setExam(e); setSubject(""); }}
        subject={subject} setSubject={setSubject} subjects={subjects} ready={ready} loading={phase === "loading"}
        onStart={start} err={err} streak={streak.current} user={user} fromShare={fromShare}
      />
    );
  }

  if ((phase === "play" || phase === "finishing") && q) {
    const sq = solved[q.id];
    const chosen = answers[q.id];
    const rq = localizedQuestion(sq ?? q, hi ? "hi" : "en");
    const right = sq && chosen !== null && chosen !== undefined && chosen === sq.correct;
    const low = left <= 60;
    return (
      <div className="mx-auto min-h-[80vh] max-w-xl px-4 pb-28 pt-4">
        {/* Top bar: exit, progress, clock */}
        <div className="flex items-center gap-3">
          <Link href="/" aria-label={hi ? "बाहर निकलें" : "Exit"} className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-500 hover:bg-ink-100"><X className="h-5 w-5" /></Link>
          <div className="flex flex-1 gap-1" aria-label={hi ? `प्रश्न ${idx + 1} / ${qs.length}` : `Question ${idx + 1} of ${qs.length}`}>
            {qs.map((x, i) => {
              const a = answers[x.id]; const s = solved[x.id];
              const tone = !(x.id in answers) ? (i === idx ? "bg-brand-300" : "bg-ink-200") : a === null || a === undefined ? "bg-ink-400" : s && a === s.correct ? "bg-success" : "bg-danger";
              return <span key={x.id} className={cn("h-2 flex-1 rounded-full transition-colors", tone)} />;
            })}
          </div>
          <span className={cn("inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-sm font-bold tabular-nums", low ? "bg-red-100 text-danger" : "bg-ink-100 text-ink-700")}>
            <Clock className="h-4 w-4" /> {fmtMMSS(left)}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs font-semibold text-ink-500">
          <span>{tx(K.name)} · {hi ? `प्रश्न ${idx + 1}/${qs.length}` : `Q ${idx + 1}/${qs.length}`}</span>
          {combo >= 2 ? (
            <span className="animate-pop rounded-full bg-saffron-100 px-2.5 py-0.5 text-saffron-800">🔥 {hi ? `लगातार ${combo} सही!` : `${combo} in a row!`}</span>
          ) : (
            <span>{info?.marking}</span>
          )}
        </div>

        <div key={q.id} className={cn("mt-3 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink-200 animate-fade-up", sq && !right && chosen !== null && "animate-shake")}>
          <QuestionStem stem={rq.stem} altStem={rq.altStem} />
          <div className="mt-5 grid gap-2.5">
            {rq.options.map((opt, oi) => {
              const isCorrect = sq && oi === sq.correct;
              const isMine = chosen === oi;
              return (
                <button
                  key={oi}
                  type="button"
                  disabled={answeredHere || pending !== null || phase === "finishing"}
                  onClick={() => choose(oi)}
                  className={cn(
                    "flex min-h-14 w-full items-start gap-3 rounded-2xl border-2 px-4 py-3 text-left text-base transition-all active:scale-[0.98]",
                    !sq && "border-ink-200 bg-white hover:border-brand-400 hover:bg-brand-50",
                    pending === oi && "border-brand-500 bg-brand-50",
                    sq && isCorrect && "border-success bg-teal-50 text-teal-900",
                    sq && isMine && !isCorrect && "border-danger bg-red-50 text-red-900",
                    sq && !isCorrect && !isMine && "border-ink-100 text-ink-400",
                  )}
                >
                  <span className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-bold",
                    sq && isCorrect ? "bg-success text-white" : sq && isMine ? "bg-danger text-white" : "bg-ink-100 text-ink-600")}>
                    {sq && isCorrect ? <CheckCircle2 className="h-4 w-4" /> : sq && isMine ? <XCircle className="h-4 w-4" /> : "ABCD"[oi]}
                  </span>
                  <span className="flex-1">
                    <span dir={scriptOf(opt).dir} className={scriptOf(opt).className}>{opt}</span>
                    {rq.altOptions?.[oi] && rq.altOptions[oi] !== opt && (
                      <span dir={scriptOf(rq.altOptions[oi]).dir} className={cn("mt-0.5 block text-xs text-ink-400", scriptOf(rq.altOptions[oi]).className)}>
                        {rq.altOptions[oi]}
                      </span>
                    )}
                  </span>
                  {pending === oi && <Loader2 className="h-5 w-5 shrink-0 animate-spin text-brand-500" />}
                </button>
              );
            })}
          </div>

          {sq && (
            <div className={cn("mt-4 animate-pop rounded-2xl p-4", right ? "bg-teal-50" : chosen === null ? "bg-ink-50" : "bg-red-50")}>
              <p className={cn("font-extrabold", right ? "text-teal-800" : chosen === null ? "text-ink-700" : "text-red-800")}>
                {right
                  ? (hi ? `सही! +${fmtScore(info?.plus ?? 1)}` : `Correct! +${fmtScore(info?.plus ?? 1)}`)
                  : chosen === null
                    ? (hi ? "छोड़ा: 0 अंक" : "Skipped: 0 marks")
                    : (hi ? `गलत: ${fmtScore(info?.minus ?? 0)}` : `Wrong: ${fmtScore(info?.minus ?? 0)}`)}
              </p>
              {rq.explanation && (
                <p className="mt-1 text-sm leading-relaxed text-ink-700">
                  <span dir={scriptOf(rq.explanation).dir} className={scriptOf(rq.explanation).className}>{rq.explanation}</span>
                </p>
              )}
            </div>
          )}
        </div>

        {err && <p className="mt-3 text-center text-sm font-semibold text-danger">{err}</p>}

        {/* Bottom action bar */}
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink-200 bg-white/95 px-4 py-3 backdrop-blur" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
          <div className="mx-auto flex max-w-xl items-center gap-3">
            {!answeredHere ? (
              <button type="button" onClick={() => choose(null)} disabled={pending !== null} className="inline-flex items-center gap-1.5 rounded-xl px-3 py-3 text-sm font-semibold text-ink-500 hover:bg-ink-100">
                <SkipForward className="h-4 w-4" /> {hi ? "छोड़ें" : "Skip"}
              </button>
            ) : <span />}
            <button
              type="button"
              onClick={next}
              disabled={!answeredHere || phase === "finishing"}
              className={cn("ml-auto inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl px-6 text-base font-extrabold text-white shadow-md transition-colors sm:flex-none",
                answeredHere ? (idx === qs.length - 1 || allAnswered ? "bg-saffron-500 text-ink-900 hover:bg-saffron-400" : "bg-brand-600 hover:bg-brand-700") : "bg-ink-300")}
            >
              {phase === "finishing" ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
              {idx === qs.length - 1 ? (hi ? "नतीजा देखें" : "See my result") : (hi ? "अगला" : "Next")} <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "result" && done) {
    return (
      <ResultScreen
        hi={hi} kind={kind} done={done} rank={rank} board={board} me={me} info={info} streak={streak} days={days}
        named={named} qs={qs} answers={answers} solved={solved} serverNow={serverNow} skew={skew} sunday={sunday}
        onClaimed={(r) => { setNamed(true); if (r.days?.length) { addDays(r.days); setDays(readDays()); } if (r.rank) setRank(r.rank); if (r.me) setMe(r.me); }}
        exam={exam} subject={subject}
      />
    );
  }

  return <div className="grid min-h-[60vh] place-items-center"><Loader2 className="h-8 w-8 animate-spin text-brand-600" /></div>;
}

/* =================================================================== Pick */

function PickScreen(p: {
  hi: boolean; kind: RozKind; sunday: boolean; serverNow: number; exam: ExamChoice | null; setExam: (e: ExamChoice) => void;
  subject: string; setSubject: (s: string) => void; subjects: Subjects; ready: boolean; loading: boolean;
  onStart: () => void; err: string; streak: number; user: { name: string } | null; fromShare?: boolean;
}) {
  const { hi, kind } = p;
  const K = ROZ_KINDS[kind];
  const subs = p.exam ? p.subjects[p.exam] ?? [] : [];
  const sprintClosed = kind === "sprint" && !p.sunday;
  return (
    <div className="mx-auto max-w-xl px-4 py-8 sm:py-12">
      <div className="overflow-hidden rounded-3xl bg-[#0a1329] text-white shadow-xl">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron-400 px-3 py-1 text-xs font-extrabold uppercase text-ink-900">
              <Zap className="h-3.5 w-3.5" /> {hi ? "मुफ़्त · बिना साइन-अप" : "Free · no sign-up"}
            </span>
            {p.streak > 0 && <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold"><span className="animate-flame">🔥</span> {hi ? `${p.streak} दिन की स्ट्रीक` : `${p.streak}-day streak`}</span>}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{hi ? K.name.hi : K.name.en}</h1>
          <p className="mt-1 text-lg text-white/85">
            {hi ? `${K.questions} प्रश्न · ${K.minutes} मिनट · हर उत्तर पर तुरंत सही/गलत` : `${K.questions} questions · ${K.minutes} minutes · right or wrong after every tap`}
          </p>
          {p.fromShare && <p className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-sm">{hi ? "आपके दोस्त ने आज का पेपर दिया है। वही पेपर, वही समय: देखते हैं कौन आगे निकलता है! 🏁" : "Your friend took today's paper. Same paper, same clock: let's see who comes out ahead! 🏁"}</p>}
          <ul className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-white/80">
            <li className="rounded-xl bg-white/10 px-2 py-2.5"><b className="block text-base text-white">⚡</b>{hi ? "असली परीक्षा पैटर्न" : "Real exam pattern"}</li>
            <li className="rounded-xl bg-white/10 px-2 py-2.5"><b className="block text-base text-white">🏆</b>{hi ? "आज की असली रैंक" : "Today's real rank"}</li>
            <li className="rounded-xl bg-white/10 px-2 py-2.5"><b className="block text-base text-white">🔥</b>{hi ? "रोज़ की स्ट्रीक" : "Daily streak"}</li>
          </ul>
        </div>

        <div className="bg-white p-6 text-ink-900 sm:p-8">
          {sprintClosed ? (
            <SprintCountdown hi={hi} serverNow={p.serverNow} />
          ) : (
            <>
              <p className="text-sm font-bold text-ink-700">{hi ? "आपकी परीक्षा" : "Your exam"}</p>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {EXAM_CHOICES.map((e) => (
                  <button key={e.key} type="button" onClick={() => p.setExam(e.key)}
                    className={cn("rounded-2xl border-2 px-3 py-2.5 text-left text-sm font-semibold transition-colors",
                      p.exam === e.key ? "border-brand-600 bg-brand-50 text-brand-800" : "border-ink-200 hover:border-brand-300")}>
                    {hi ? e.title.hi : e.title.en}
                    <span className="block text-[11px] font-normal text-ink-500">{hi ? e.classes.hi : e.classes.en}</span>
                  </button>
                ))}
              </div>
              {subs.length > 0 && (
                <label className="mt-4 block text-sm font-bold text-ink-700">{hi ? "आपका विषय" : "Your subject"}
                  <select value={p.subject} onChange={(e) => p.setSubject(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-ink-300 bg-white px-3.5 py-2.5 text-base font-normal outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200">
                    <option value="">{hi ? "विषय चुनें" : "Choose your subject"}</option>
                    {subs.map((s) => <option key={s.key} value={s.key}>{hi ? s.hi : s.en}</option>)}
                  </select>
                </label>
              )}
              <button type="button" onClick={p.onStart} disabled={!p.ready || p.loading}
                className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 text-lg font-extrabold text-white shadow-md transition-colors hover:bg-brand-700 disabled:bg-ink-300">
                {p.loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Zap className="h-5 w-5" />}
                {hi ? `${K.minutes} मिनट का मॉक शुरू करें` : `Start the ${K.minutes}-minute mock`}
              </button>
              {p.err && <p className="mt-3 text-center text-sm font-semibold text-danger">{p.err}</p>}
              <p className="mt-3 text-center text-xs text-ink-500">
                {p.user
                  ? (hi ? `${p.user.name} के रूप में · आपकी स्ट्रीक सुरक्षित है` : `Playing as ${p.user.name} · your streak is saved`)
                  : (hi ? "कोई फ़ॉर्म नहीं। सीधे पहला प्रश्न। हर रात 12 बजे नया पेपर।" : "No form. Straight to question 1. A new paper every midnight.")}
              </p>
            </>
          )}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-ink-500">
        {hi ? "सभी प्रश्न मेरिट मार्ग के अभ्यास प्रश्न हैं, आधिकारिक पेपर नहीं।" : "All questions are Merit Marg practice questions, not official papers."}
      </p>
    </div>
  );
}

function useTicker(target: number, skew: number) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now() + skew);
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => { clearTimeout(first); clearInterval(id); };
  }, [skew]);
  if (now === null) return null;
  const s = Math.max(0, Math.floor((target - now) / 1000));
  return { s, d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), sec: s % 60 };
}

function SprintCountdown({ hi, serverNow }: { hi: boolean; serverNow: number }) {
  const [skew] = useState(() => serverNow - Date.now());
  const cd = useTicker(nextSundayStart(serverNow), skew);
  return (
    <div className="text-center">
      <p className="text-lg font-bold">{hi ? "अगला संडे स्प्रिंट खुलने में" : "The next Sunday Sprint opens in"}</p>
      <p className="mt-2 text-3xl font-extrabold tabular-nums text-brand-700">
        {cd ? `${cd.d}${hi ? "दि" : "d"} ${String(cd.h).padStart(2, "0")}:${String(cd.m).padStart(2, "0")}:${String(cd.sec).padStart(2, "0")}` : "--"}
      </p>
      <p className="mt-2 text-sm text-ink-600">{hi ? "30 प्रश्न · 30 मिनट · रविवार पूरे दिन खुला · असली रैंक" : "30 questions · 30 minutes · open all Sunday · real rank"}</p>
      <Link href="/roz" className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3 font-extrabold text-white">
        <Zap className="h-5 w-5" /> {hi ? "तब तक आज का 10 दें" : "Meanwhile, take today's 10"}
      </Link>
    </div>
  );
}

/* ================================================================= Result */

function ResultScreen(p: {
  hi: boolean; kind: RozKind; done: Done; rank: Rank | null; board: Board; me: string; info: Info | null;
  streak: { current: number; best: number; doneToday: boolean }; days: string[]; named: boolean;
  qs: Question[]; answers: Record<string, number | null>; solved: Record<string, Question>;
  serverNow: number; skew: number; sunday: boolean; exam: ExamChoice | null; subject: string;
  onClaimed: (r: { days?: string[]; rank?: Rank | null; me?: string }) => void;
}) {
  const { hi, kind, done, rank, board, streak } = p;
  const K = ROZ_KINDS[kind];
  const pct = done.max > 0 ? Math.max(0, Math.round((done.score / done.max) * 100)) : 0;
  const [showSol, setShowSol] = useState(false);
  const [due, setDue] = useState(0);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable after mount
  useEffect(() => { setDue(dueWrong().length); }, []);
  const cd = useTicker(nextIstMidnight(p.serverNow), p.skew);

  // Peak-end: always close on something true and encouraging.
  const headline = pct >= 80 ? (hi ? "शानदार! 🎉" : "Brilliant! 🎉") : pct >= 60 ? (hi ? "बहुत बढ़िया! 💪" : "Well done! 💪") : pct >= 30 ? (hi ? "अच्छी शुरुआत! 📈" : "Good start! 📈") : (hi ? "हर दिन बेहतर! 🌱" : "Better every day! 🌱");
  const top = rank && rank.total > 1 ? Math.max(1, Math.round((rank.rank / rank.total) * 100)) : null;

  const last7 = Array.from({ length: 7 }, (_, i) => istDate(p.serverNow - (6 - i) * 86400_000));
  const daySet = new Set(p.days);

  const share = async () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://meritmarg.com";
    const params = new URLSearchParams({ e: done.p.split(":")[0], ref: "share" });
    const sub = done.p.split(":")[1]; if (sub) params.set("s", sub);
    if (kind === "sprint") params.set("k", "sprint");
    const url = `${origin}/roz?${params}`;
    const label = p.info?.label ?? "";
    const r = rank ? (hi ? ` · आज की रैंक #${rank.rank}/${rank.total}` : ` · today's rank #${rank.rank} of ${rank.total}`) : "";
    const st = streak.current > 1 ? ` · 🔥 ${streak.current}` : "";
    const text = hi
      ? `मैंने आज का "${K.name.hi}" (${label}) दिया: ${done.correct}/${done.correct + done.wrong + done.skipped} सही${r}${st}\nक्या आप मुझसे आगे निकल सकते हैं? वही पेपर, ${K.minutes} मिनट, बिना साइन-अप 👇\n${url}`
      : `I took today's "${K.name.en}" (${label}): ${done.correct}/${done.correct + done.wrong + done.skipped} correct${r}${st}\nCan you beat me? Same paper, ${K.minutes} minutes, no sign-up 👇\n${url}`;
    try {
      if (navigator.share) { await navigator.share({ text }); return; }
    } catch { return; }
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-6 sm:py-10">
      {pct >= 60 && <Confetti pieces={80} />}

      {/* Score */}
      <div className={cn("relative overflow-hidden rounded-3xl p-6 text-center text-white shadow-xl", pct >= 60 ? "celebrate-gradient" : "bg-brand-700")}>
        <p className="text-sm font-semibold text-white/80">{hi ? K.name.hi : K.name.en} · {p.info?.label}</p>
        <p className="mt-2 text-2xl font-extrabold animate-pop">{headline}</p>
        <p className="mt-2 text-6xl font-extrabold animate-pop">
          {fmtScore(done.score)}<span className="text-2xl font-semibold text-white/70"> / {fmtScore(done.max)}</span>
        </p>
        <div className="mx-auto mt-4 grid max-w-xs grid-cols-3 gap-2 text-sm">
          <span className="rounded-xl bg-white/15 py-2">✅ {done.correct}</span>
          <span className="rounded-xl bg-white/15 py-2">❌ {done.wrong}</span>
          <span className="rounded-xl bg-white/15 py-2">⏭️ {done.skipped}</span>
        </div>
        <p className="mt-3 text-xs text-white/70">{hi ? `समय: ${fmtMMSS(done.sec)} · अंकन ${p.info?.marking ?? ""}` : `Time: ${fmtMMSS(done.sec)} · marking ${p.info?.marking ?? ""}`}</p>
      </div>

      {/* Rank + streak */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-ink-200">
          <Trophy className="mx-auto h-6 w-6 text-saffron-500" />
          {rank ? (
            <>
              <p className="mt-1 text-3xl font-extrabold text-ink-900">#{rank.rank}</p>
              <p className="text-xs text-ink-500">{hi ? `आज ${rank.total} में से` : `of ${rank.total} today`}</p>
              {top !== null && rank.total >= 10 && <p className="mt-1 text-xs font-bold text-teal-700">{hi ? `टॉप ${top}%` : `Top ${top}%`}</p>}
            </>
          ) : <p className="mt-2 text-sm text-ink-500">{hi ? "रैंक जल्द" : "Rank soon"}</p>}
        </div>
        <div className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-ink-200">
          <span className="animate-flame text-2xl">🔥</span>
          <p className="mt-0.5 text-3xl font-extrabold text-ink-900">{streak.current}</p>
          <p className="text-xs text-ink-500">{hi ? `दिन की स्ट्रीक · सर्वश्रेष्ठ ${streak.best}` : `day streak · best ${streak.best}`}</p>
          <div className="mt-2 flex justify-center gap-1">
            {last7.map((d) => <span key={d} title={d} className={cn("h-2.5 w-2.5 rounded-full", daySet.has(d) ? "bg-saffron-500" : "bg-ink-200")} />)}
          </div>
        </div>
      </div>

      {/* Share */}
      <button type="button" onClick={share} className="mt-4 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 text-lg font-extrabold text-white shadow-md hover:brightness-95">
        <Share2 className="h-5 w-5" /> {hi ? "दोस्तों को चुनौती दें (WhatsApp)" : "Challenge friends on WhatsApp"}
      </button>

      {/* Save streak (after the value, never before) */}
      {!p.named && <ClaimCard hi={hi} days={p.days} exam={p.exam} subject={p.subject} onClaimed={p.onClaimed} />}

      {/* Today's board */}
      <div className="mt-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-200">
        <p className="flex items-center gap-2 font-extrabold text-ink-900"><Users className="h-5 w-5 text-brand-600" /> {hi ? "आज का बोर्ड" : "Today's board"} <span className="text-xs font-normal text-ink-500">· {p.info?.label}</span></p>
        {board.rows.length ? (
          <ol className="mt-3 space-y-1.5">
            {board.rows.map((r, i) => (
              <li key={r.who} className={cn("flex items-center gap-3 rounded-xl px-3 py-2 text-sm", r.who === p.me ? "bg-saffron-100 font-bold" : i % 2 ? "bg-ink-50" : "")}>
                <span className="w-6 text-center font-bold text-ink-500">{i < 3 ? ["🥇", "🥈", "🥉"][i] : i + 1}</span>
                <span className="flex-1 truncate">{r.name}{r.who === p.me ? (hi ? " (आप)" : " (you)") : ""}</span>
                <span className="tabular-nums">{fmtScore(r.score)}</span>
                <span className="w-12 text-right text-xs tabular-nums text-ink-500">{fmtMMSS(r.sec)}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-2 text-sm text-ink-600">{hi ? "बोर्ड पर अभी कोई नाम नहीं। अपना नाम सेव करें और पहले बनें!" : "No names on the board yet. Save your name and be the first!"}</p>
        )}
        <p className="mt-2 text-xs text-ink-500">
          {(() => {
            const n = board.total || rank?.total || 1;
            return hi
              ? `आज इस पेपर को ${n} ${n === 1 ? "व्यक्ति ने" : "लोगों ने"} दिया। बोर्ड पर वही नाम दिखते हैं जिन्होंने नाम सेव किया।`
              : `${n} ${n === 1 ? "person" : "people"} took this paper today. The board lists only those who saved their name.`;
          })()}
        </p>
      </div>

      {/* Solutions (only right after playing; a reopened result has just the score) */}
      {p.qs.length > 0 && <div className="mt-4 rounded-2xl bg-white shadow-sm ring-1 ring-ink-200">
        <button type="button" onClick={() => setShowSol((s) => !s)} className="flex w-full items-center justify-between p-5 text-left font-extrabold text-ink-900" aria-expanded={showSol}>
          <span className="flex items-center gap-2"><BookOpenCheck className="h-5 w-5 text-teal-600" /> {hi ? "सभी प्रश्न व हल" : "All questions & solutions"}</span>
          <ChevronDown className={cn("h-5 w-5 transition-transform", showSol && "rotate-180")} />
        </button>
        {showSol && (
          <div className="space-y-4 border-t border-ink-100 p-5">
            {p.qs.map((q0, i) => {
              const q = p.solved[q0.id] ?? q0;
              const rq = localizedQuestion(q, hi ? "hi" : "en");
              const a = p.answers[q.id];
              return (
                <div key={q.id} className="border-b border-ink-100 pb-4 last:border-0">
                  <p className="text-xs font-semibold text-ink-400">Q{i + 1} · {a === null || a === undefined ? (hi ? "छोड़ा" : "skipped") : a === q.correct ? (hi ? "सही ✅" : "correct ✅") : (hi ? "गलत ❌" : "wrong ❌")}</p>
                  <QuestionStem stem={rq.stem} altStem={rq.altStem} size="sm" />
                  <p className="mt-1.5 text-sm"><b className="text-teal-700">{hi ? "उत्तर: " : "Answer: "}</b>{rq.options[q.correct]}</p>
                  {rq.explanation && <p className="mt-1 text-sm text-ink-600">{rq.explanation}</p>}
                </div>
              );
            })}
          </div>
        )}
      </div>}

      {/* What next: tomorrow, revision, Sunday, a longer mock */}
      <div className="mt-4 rounded-2xl bg-[#0a1329] p-5 text-white">
        <p className="text-sm text-white/70">{hi ? "अगला पेपर खुलने में" : "Tomorrow's paper opens in"}</p>
        <p className="text-3xl font-extrabold tabular-nums">{cd ? `${String(cd.h).padStart(2, "0")}:${String(cd.m).padStart(2, "0")}:${String(cd.sec).padStart(2, "0")}` : "--:--:--"}</p>
        <p className="mt-1 text-sm text-white/70">{hi ? "कल भी आइए और स्ट्रीक बढ़ाइए। गलत प्रश्न 1, 3 और 7 दिन बाद दोहराने को लौटेंगे।" : "Come back tomorrow to grow your streak. Your mistakes come back for revision after 1, 3 and 7 days."}</p>
        <div className="mt-4 grid gap-2">
          {due > 0 && (
            <Link href="/roz/revise" className="inline-flex items-center justify-between rounded-xl bg-saffron-400 px-4 py-3 font-bold text-ink-900">
              <span className="flex items-center gap-2"><RotateCcw className="h-4 w-4" /> {hi ? `${due} पुरानी गलतियाँ दोहराएँ` : `Revise ${due} past mistakes`}</span><ArrowRight className="h-4 w-4" />
            </Link>
          )}
          {kind === "roz" && p.sunday && (
            <Link href="/roz?k=sprint" className="inline-flex items-center justify-between rounded-xl bg-white px-4 py-3 font-bold text-ink-900">
              <span>🏁 {hi ? "आज संडे स्प्रिंट है: 30 प्रश्न, 30 मिनट" : "It's Sunday Sprint day: 30 questions, 30 minutes"}</span><ArrowRight className="h-4 w-4" />
            </Link>
          )}
          <Link href={p.exam ? `/mock-tests?exam=${p.exam}` : "/mock-tests"} className="inline-flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 font-semibold">
            <span>{hi ? "और अभ्यास: 20 प्रश्नों का फ़्री मिनी मॉक" : "More practice: a free 20-question mini mock"}</span><ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ClaimCard({ hi, days, exam, subject, onClaimed }: {
  hi: boolean; days: string[]; exam: ExamChoice | null; subject: string;
  onClaimed: (r: { days?: string[]; rank?: Rank | null; me?: string }) => void;
}) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(false);
  const [bad, setBad] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const field = "mt-1 w-full rounded-xl border border-ink-300 bg-white px-3.5 py-2.5 text-base outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr("");
    try {
      const r = await fetch("/api/roz/claim", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, mobile, consent, days, exam, subject }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) { onClaimed({ days: j.days, rank: j.ranks?.roz ?? j.ranks?.sprint ?? null, me: j.me }); return; }
      if (r.status === 422) setBad(j.fields ?? []);
      else setErr(hi ? "सेव नहीं हो पाया, फिर कोशिश करें।" : "Couldn't save, please try again.");
    } catch {
      setErr(hi ? "इंटरनेट जाँचें और फिर कोशिश करें।" : "Check your internet and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} noValidate className="mt-4 rounded-2xl border-2 border-saffron-300 bg-saffron-50 p-5">
      <p className="flex items-center gap-2 text-lg font-extrabold text-ink-900"><LogIn className="h-5 w-5 text-saffron-700" /> {hi ? "अपनी स्ट्रीक सेव करें" : "Save your streak"}</p>
      <p className="mt-1 text-sm text-ink-700">
        {hi ? "नाम आज के बोर्ड पर आएगा, स्ट्रीक किसी भी फ़ोन पर बनी रहेगी, और कल का पेपर WhatsApp पर याद दिलाएँगे। पासवर्ड नहीं, OTP नहीं।" : "Your name goes on today's board, your streak follows you to any phone, and we'll remind you of tomorrow's paper on WhatsApp. No password, no OTP."}
      </p>
      <label className="mt-3 block text-sm font-semibold">{hi ? "नाम" : "Name"}
        <input className={cn(field, bad.includes("name") && "border-danger")} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" maxLength={60} />
      </label>
      <label className="mt-3 block text-sm font-semibold">{hi ? "मोबाइल (WhatsApp)" : "Mobile (WhatsApp)"}
        <input className={cn(field, bad.includes("mobile") && "border-danger")} value={mobile} onChange={(e) => setMobile(e.target.value)} inputMode="numeric" autoComplete="tel-national" maxLength={14} placeholder="98XXXXXXXX" />
        {bad.includes("mobile") && <span className="text-xs text-danger">{hi ? "10 अंकों का सही मोबाइल नंबर" : "Enter a valid 10-digit mobile"}</span>}
      </label>
      <label className={cn("mt-3 flex items-start gap-2.5 text-sm text-ink-700", bad.includes("consent") && "text-danger")}>
        <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-brand-600" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
        <span>{hi ? "मेरिट मार्ग इस नंबर पर रोज़ के पेपर और परिणाम के लिए WhatsApp कर सकता है।" : "Merit Marg may WhatsApp me on this number about the daily paper and results."}</span>
      </label>
      <button type="submit" disabled={busy} className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-ink-900 px-6 font-extrabold text-white hover:bg-ink-800">
        {busy ? <Loader2 className="h-5 w-5 animate-spin" /> : <CheckCircle2 className="h-5 w-5" />} {hi ? "सेव करें और बोर्ड पर आएँ" : "Save & join the board"}
      </button>
      {err && <p className="mt-2 text-sm font-semibold text-danger">{err}</p>}
    </form>
  );
}
