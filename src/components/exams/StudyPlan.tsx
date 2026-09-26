"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  CalendarClock, CheckCircle2, Circle, PlayCircle, Lock, Trophy, Target, BookOpen, Sparkles, GraduationCap, ExternalLink,
} from "lucide-react";
import { Container, Badge, Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import { getAttempts } from "@/lib/attempts";
import { useLang } from "@/lib/i18n";
import { getAnyPlanTest, countTests, type PlanTrack, type TrackKey } from "@/lib/exams/tracks";
import type { PlanWeek } from "@/lib/exams/up-plan";
import type { BiharSubject } from "@/lib/exams/bihar-plan";
import { saveExamChoice } from "@/lib/exam-choice";
import { usePassTier, PaywallCard, PassActiveNote } from "@/components/pricing/PlanUnlock";
import { isPaidTest } from "@/lib/plan-access";
import { PREP_PRICE } from "@/lib/pricing";

const dfmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" });
const STUDIED_KEY = "ps_up_plan_studied"; // kept for existing users' progress

function weekRange(examISO: string, totalWeeks: number, n: number) {
  const exam = new Date(examISO + "T00:00:00");
  const end = new Date(exam);
  end.setDate(end.getDate() - (totalWeeks - n) * 7);
  const start = new Date(end);
  start.setDate(start.getDate() - 6);
  return `${dfmt.format(start)} – ${dfmt.format(end)}`;
}

export function StudyPlan({ tracks, defaultTrack }: { tracks: PlanTrack[]; defaultTrack: TrackKey }) {
  const { lang } = useLang();
  const hi = lang === "hi";
  const tx = (b: { en: string; hi: string }) => (hi ? b.hi : b.en);

  const [trackKey, setTrackKey] = useState<TrackKey>(defaultTrack);
  const [subject, setSubject] = useState<BiharSubject>("ms");
  const [takenIds, setTakenIds] = useState<Set<string>>(new Set());
  const [studied, setStudied] = useState<Set<string>>(new Set());
  const [now, setNow] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  // Deep links: ?track=bihar-6-8&subject=ss, plus saved progress. Read once after
  // mount (browser-only state), so the server render and hydration stay identical.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const t = p.get("track");
    if (t && tracks.some((x) => x.key === t)) setTrackKey(t as TrackKey);
    const s = p.get("subject");
    if (s && ["ms", "ss", "hindi", "english", "sanskrit"].includes(s)) setSubject(s as BiharSubject);
    try { setTakenIds(new Set(getAttempts().map((a) => a.testId))); } catch {}
    try {
      const raw = localStorage.getItem(STUDIED_KEY);
      if (raw) setStudied(new Set(JSON.parse(raw)));
    } catch {}
    setNow(Date.now());
    setReady(true);
  }, [tracks]);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Keep the URL shareable without reloading.
  useEffect(() => {
    if (!ready) return;
    const p = new URLSearchParams();
    if (trackKey !== defaultTrack) p.set("track", trackKey);
    if (trackKey === "bihar-6-8") p.set("subject", subject);
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [trackKey, subject, ready, defaultTrack]);

  // Switching track here also becomes the visitor's remembered exam.
  const pickTrack = (k: TrackKey) => { setTrackKey(k); saveExamChoice(k); };

  const track = tracks.find((t) => t.key === trackKey)!;
  const subj = track.subjects?.find((s) => s.key === subject) ?? track.subjects?.[0];
  const weeks: PlanWeek[] = useMemo(() => track.weeks ?? subj?.weeks ?? [], [track, subj]);
  const totalTests = useMemo(() => countTests(weeks), [weeks]);
  const prefix = trackKey === "up-prt" ? "l1" : trackKey === "bihar-1-5" ? "bh15" : `bh68${subject}`;

  const testsTaken = useMemo(() => {
    const ids = new Set<string>();
    for (const w of weeks) {
      for (const d of w.days) d.testIds.forEach((t) => takenIds.has(t) && ids.add(t));
      w.bigTestIds.forEach((t) => takenIds.has(t) && ids.add(t));
    }
    return ids.size;
  }, [weeks, takenIds]);
  const pct = totalTests ? Math.round((testsTaken / totalTests) * 100) : 0;
  const daysLeft = track.examDateISO && now !== null
    ? Math.max(0, Math.ceil((new Date(track.examDateISO + "T00:00:00").getTime() - now) / 86400000))
    : null;
  const studiedHere = [...studied].filter((k) => k.startsWith(prefix + "-")).length;

  const toggleStudied = (key: string) => {
    setStudied((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      try { localStorage.setItem(STUDIED_KEY, JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const tier = usePassTier();
  // The whole plan is in the ₹99 Prep Pass (the server enforces it on each test page).
  const planLocked = !tier;

  const tierLabel = (tier?: string) =>
    tier === "Moderate" || tier === "Beginner" ? (hi ? "मध्यम" : "Moderate")
      : tier === "Tough" || tier === "Proficient" ? (hi ? "कठिन" : "Tough")
      : tier ?? "Test";

  return (
    <Container className="py-10">
      {/* ---------------------------------------------- Choose exam & level */}
      <section aria-labelledby="choose-level">
        <h2 id="choose-level" className="text-lg font-bold text-ink-900">
          {hi ? "अपनी परीक्षा और स्तर चुनें" : "Choose your exam & level"}
        </h2>
        <p className="mt-1 text-sm text-ink-600">
          {hi
            ? "UP की तैयारी करने वाले ज़्यादातर अभ्यर्थी BPSC TRE 4.0 भी देते हैं। हर योजना उसी परीक्षा के आधिकारिक पाठ्यक्रम और अंकन पर बनी है।"
            : "Most UP aspirants also sit the BPSC TRE 4.0. Each plan follows that exam's official syllabus and marking."}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {tracks.map((t) => {
            const on = t.key === trackKey;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => pickTrack(t.key)}
                aria-pressed={on}
                className={cn(
                  "rounded-2xl border-2 p-4 text-left transition-colors",
                  on ? "border-brand-600 bg-brand-50" : "border-ink-200 bg-white hover:border-brand-300",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-ink-900">{tx(t.label)}</span>
                  <Badge tone={on ? "brand" : "slate"} className="px-2 py-0.5">{tx(t.classes)}</Badge>
                </div>
                <p className="mt-1 text-xs text-ink-500">{tx(t.exam)}</p>
                <p className="mt-2 flex flex-wrap gap-x-3 text-xs font-medium text-ink-700">
                  <span>{tx(t.posts)}</span><span>{t.markChip}</span>
                </p>
              </button>
            );
          })}
        </div>

        {track.subjects && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-ink-800">{hi ? "अपना विषय चुनें (भाग III, 80 प्रश्न)" : "Choose your subject (Part III, 80 Q)"}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {track.subjects.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setSubject(s.key)}
                  aria-pressed={s.key === subj?.key}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium",
                    s.key === subj?.key ? "border-teal-600 bg-teal-600 text-white" : "border-ink-300 text-ink-700 hover:border-teal-400",
                  )}
                >
                  {tx(s.label)} <span className="opacity-70">· {s.posts.toLocaleString("en-IN")}</span>
                </button>
              ))}
              <span className="rounded-full border border-dashed border-ink-300 px-3.5 py-1.5 text-sm text-ink-400">
                {hi ? "उर्दू · जल्द" : "Urdu · coming soon"}
              </span>
            </div>
          </div>
        )}
      </section>

      {/* ---------------------------------------------- Prep Pass access */}
      {tier === undefined ? null : planLocked ? (
        <PaywallCard
          hi={hi}
          className="mt-6"
          title={hi ? `पूरी दिन-प्रतिदिन योजना, ₹${PREP_PRICE} में खोलें` : `Unlock the whole day-by-day plan for ₹${PREP_PRICE}`}
        />
      ) : (
        <PassActiveNote hi={hi} className="mt-6" />
      )}

      {/* ---------------------------------------------- The paper */}
      <div className="mt-6 rounded-2xl border border-ink-200 bg-white p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-semibold text-ink-900">
            {tx(track.exam)} <span className="font-normal text-ink-500">· {tx(track.classes)}{subj ? ` · ${tx(subj.label)}` : ""}</span>
          </p>
          <Link href={track.guideHref} className="text-xs font-semibold text-brand-700 hover:underline">
            {hi ? "पूरा परीक्षा गाइड →" : "Full exam guide →"}
          </Link>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {[
            `${track.paper.totalQuestions} ${hi ? "प्रश्न" : "questions"}`,
            `${track.paper.totalMarks} ${hi ? "अंक" : "marks"}`,
            `${track.paper.durationMin} ${hi ? "मिनट" : "minutes"}`,
            track.markChip,
            track.paper.mode,
          ].map((x) => (
            <span key={x} className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-800 ring-1 ring-brand-100">{x}</span>
          ))}
        </div>
        <ul className="mt-4 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
          {track.paper.sections.map((sec, i) => (
            <li key={sec.name} className="flex items-baseline justify-between gap-3 border-b border-dashed border-ink-100 pb-1.5">
              <span className="text-ink-700"><span className="mr-1.5 text-xs text-ink-400">{i + 1}.</span>{sec.name}</span>
              <span className="shrink-0 font-semibold text-ink-900">{sec.questions} Q · {sec.marks}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ink-500">{tx(track.advertNote)}</p>
      </div>

      {/* ---------------------------------------------- Countdown + progress */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron-400 text-ink-900">
            <CalendarClock className="h-5 w-5" />
          </span>
          <div>
            <div className="text-2xl font-bold text-ink-900">
              {track.examDateISO ? `${daysLeft ?? "…"} ${hi ? "दिन" : "days"}` : (hi ? "तिथि शेष" : "Date TBA")}
            </div>
            <div className="text-xs text-ink-500">{tx(track.examDateLabel)}</div>
          </div>
        </Card>
        <Card className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
            <Trophy className="h-5 w-5" />
          </span>
          <div className="w-full">
            <div className="text-2xl font-bold text-ink-900">{testsTaken}<span className="text-base font-medium text-ink-400">/{totalTests} {hi ? "टेस्ट" : "tests"}</span></div>
            <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-ink-100">
              <div className="h-full rounded-full bg-brand-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </Card>
        <Card className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-600 text-white">
            <BookOpen className="h-5 w-5" />
          </span>
          <div>
            <div className="text-2xl font-bold text-ink-900">{studiedHere}</div>
            <div className="text-xs text-ink-500">{hi ? "विषय पढ़े चिह्नित" : "topics marked studied"}</div>
          </div>
        </Card>
      </div>

      {/* ---------------------------------------------- How to use each day */}
      <div className="mt-5 rounded-2xl border border-brand-100 bg-brand-50 p-5">
        <p className="font-semibold text-brand-900">{hi ? "हर दिन कैसे पढ़ें" : "How to use each day"}</p>
        <ol className="mt-2 grid gap-2 text-sm text-ink-700 sm:grid-cols-2">
          <li className="flex gap-2"><span className="font-bold text-brand-600">1.</span> {hi ? "उस दिन का विषय पाठ्यक्रम से पढ़ें व संक्षिप्त नोट्स बनाएँ।" : "Read the day's topic from the syllabus and make short notes."}</li>
          <li className="flex gap-2"><span className="font-bold text-brand-600">2.</span> {hi ? "पहले मध्यम सेट दें, फिर कठिन सेट। कोई आसान प्रश्न नहीं।" : "Take the Moderate set, then the Tough set. No easy questions."}</li>
          <li className="flex gap-2"><span className="font-bold text-brand-600">3.</span> {hi ? "हर गलत उत्तर की व्याख्या पढ़ें। हर प्रश्न हिंदी और अंग्रेज़ी दोनों में है।" : "Read the explanation for every wrong answer. Every question is in Hindi and English."}</li>
          <li className="flex gap-2"><span className="font-bold text-brand-600">4.</span> {tx(track.dailyTip)}</li>
        </ol>
      </div>

      {/* ---------------------------------------------- Weeks */}
      <div className="mt-8 space-y-6">
        {weeks.map((w) => (
          <Card key={w.n} className={cn(w.phase === "revision" && "ring-1 ring-saffron-200")}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white">{w.n}</span>
                  <h3 className="text-lg font-semibold text-ink-900">{w.title}</h3>
                  <Badge tone={w.phase === "revision" ? "saffron" : "slate"}>
                    {w.phase === "revision" ? (hi ? "पुनरावृत्ति" : "Revision") : (hi ? "सप्ताह " : "Week ") + w.n}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-ink-500">{w.focus}</p>
              </div>
              {track.examDateISO && (
                <span className="rounded-lg bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600">
                  {weekRange(track.examDateISO, weeks.length, w.n)}
                </span>
              )}
            </div>

            <div className="mt-5 space-y-2.5">
              {w.days.map((d, di) => {
                const key = `${prefix}-w${w.n}d${di + 1}`;
                const isStudied = studied.has(key);
                return (
                  <div key={key} className="rounded-xl border border-ink-200 p-3.5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-brand-600">
                            {w.phase === "revision" ? (hi ? "सत्र" : "Session") : (hi ? "दिन" : "Day")} {di + 1}
                          </span>
                          <button onClick={() => toggleStudied(key)} className="inline-flex items-center gap-1 text-xs text-ink-500 hover:text-brand-700">
                            {isStudied ? <CheckCircle2 className="h-4 w-4 text-success" /> : <Circle className="h-4 w-4" />}
                            {isStudied ? (hi ? "पढ़ लिया" : "Studied") : (hi ? "पढ़ा चिह्नित करें" : "Mark studied")}
                          </button>
                        </div>
                        <p className="mt-1 font-medium text-ink-900">{d.topic}</p>
                        <p className="text-sm text-ink-600">{d.detail}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {d.testIds.map((tid) => {
                          const tt = getAnyPlanTest(tid);
                          const label = tt?.category === "full" ? (hi ? "पूर्ण पेपर" : "Full paper") : tierLabel(tt?.tier);
                          return <TestButton key={tid} id={tid} label={label} taken={takenIds.has(tid)} big={tt?.category === "full"} locked={planLocked && isPaidTest(tt)} free={!isPaidTest(tt)} />;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {w.bigTestIds.length > 0 && (
              <div className="mt-4 rounded-xl bg-brand-50 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-brand-800">
                  <Target className="h-4 w-4" /> {hi ? "सप्ताह पूरा: 2 सप्ताह-टेस्ट दें (केवल इस सप्ताह के टॉपिक)" : "Week done: take the 2 week tests (only this week's topics)"}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {w.bigTestIds.map((tid, i) => (
                    <TestButton key={tid} id={tid} label={`${hi ? "सप्ताह-टेस्ट" : "Week test"} ${i + 1}`} taken={takenIds.has(tid)} big locked={planLocked} />
                  ))}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-brand-700 p-6 text-center text-white">
        <Sparkles className="mx-auto h-7 w-7 text-saffron-300" />
        <p className="mt-2 font-semibold">
          {hi ? `पूरी योजना और सभी पूर्ण व खंड-वार मॉक: ₹${PREP_PRICE}, एक बार। 10 मॉक मुफ़्त।` : `The full plan plus every full and section-wise mock: ₹${PREP_PRICE}, once. 10 mocks are free.`}
        </p>
        <p className="mt-1 text-sm text-brand-100">
          {hi
            ? `${tx(track.exam)} · ${track.paper.totalQuestions} प्रश्न · ${track.paper.totalMarks} अंक · ${track.markChip}. प्रश्न पिछले वर्षों के पैटर्न पर आधारित हैं, आधिकारिक प्रश्न-पत्र नहीं।`
            : `${tx(track.exam)} · ${track.paper.totalQuestions} Q · ${track.paper.totalMarks} marks · ${track.markChip}. Questions are modelled on previous papers, not official past papers.`}
        </p>
        <Link href={track.guideHref} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-saffron-300 hover:underline">
          <GraduationCap className="h-4 w-4" /> {hi ? "पात्रता, पैटर्न व आधिकारिक लिंक" : "Eligibility, pattern & official links"} <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Container>
  );
}

function TestButton({ id, label, taken, big, locked, free }: { id: string; label: string; taken: boolean; big?: boolean; locked?: boolean; free?: boolean }) {
  return (
    <Link
      href={`/mock-tests/${id}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
        big ? "bg-brand-600 text-white hover:bg-brand-700" : "border border-ink-300 text-ink-700 hover:bg-white",
        taken && !big && "border-success/40 bg-teal-50 text-teal-800",
      )}
    >
      {locked ? <Lock className="h-3.5 w-3.5" /> : taken ? <CheckCircle2 className="h-3.5 w-3.5" /> : <PlayCircle className="h-3.5 w-3.5" />}
      {label}
      {free && <span className="rounded bg-teal-600 px-1 py-px text-[10px] font-bold uppercase text-white">Free</span>}
    </Link>
  );
}
