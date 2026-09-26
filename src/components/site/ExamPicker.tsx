"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CalendarClock, ClipboardCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { EXAM_CHOICES, readExamChoice, saveExamChoice, examMeta, type ExamChoice } from "@/lib/exam-choice";

/** The home-page hook: "Which exam are you preparing for?" → straight into that plan. */
export function ExamPicker({ hi }: { hi: boolean }) {
  const router = useRouter();
  const [saved, setSaved] = useState<ExamChoice | null>(null);
  const [now, setNow] = useState<number | null>(null);
  // Browser-only state (saved choice, today's date) read once after mount so the
  // server render and hydration match.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setSaved(readExamChoice());
    setNow(Date.now());
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const tx = (b: { en: string; hi: string }) => (hi ? b.hi : b.en);
  const daysLeft = (iso: string | null) =>
    iso && now !== null ? Math.max(0, Math.ceil((new Date(iso + "T00:00:00").getTime() - now) / 86400000)) : null;

  const go = (key: ExamChoice, href: string) => {
    saveExamChoice(key);
    router.push(href);
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      {saved && (
        <button
          type="button"
          onClick={() => go(saved, examMeta(saved).planHref)}
          className="mx-auto mb-5 flex w-full max-w-xl items-center justify-between gap-3 rounded-2xl bg-brand-700 px-5 py-3 text-left text-white shadow-md hover:bg-brand-800"
        >
          <span className="text-sm">
            <span className="block text-brand-100">{hi ? "फिर से स्वागत है" : "Welcome back"}</span>
            <span className="font-semibold">{hi ? `${tx(examMeta(saved).title)}: आज का टॉपिक खोलें` : `${tx(examMeta(saved).title)}: open today's topic`}</span>
          </span>
          <ArrowRight className="h-5 w-5 shrink-0" />
        </button>
      )}

      <p className="text-center text-xl font-bold text-ink-900 sm:text-2xl">
        {hi ? <>आप <span className="marker">किस परीक्षा</span> की तैयारी कर रहे हैं?</> : <>Which <span className="marker">exam</span> are you preparing for?</>}
      </p>
      <p className="mt-1 text-center text-sm text-ink-600">
        {hi ? "एक चुनें। हम बताएँगे आज क्या पढ़ना है।" : "Pick one. We'll tell you what to study today."}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {EXAM_CHOICES.map((e) => {
          const d = daysLeft(e.examDateISO);
          const mine = saved === e.key;
          return (
            <div
              key={e.key}
              className={cn(
                "group relative flex flex-col rounded-2xl border-2 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
                mine ? "border-brand-600" : "border-ink-200 hover:border-brand-400",
              )}
            >
              <button type="button" onClick={() => go(e.key, e.planHref)} className="text-left after:absolute after:inset-0 after:content-['']">
                <span className="flex items-center justify-between gap-2">
                  <span className="text-lg font-extrabold text-ink-900">{tx(e.title)}</span>
                  {mine && <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white">{hi ? "आपकी" : "Yours"}</span>}
                </span>
                <span className="mt-0.5 block text-xs text-ink-500">{tx(e.exam)}</span>
                <span className="mt-1 block text-sm font-medium text-ink-700">{tx(e.classes)}</span>
              </button>
              <span className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-teal-50 px-2 py-0.5 font-semibold text-teal-800 ring-1 ring-teal-200">{tx(e.posts)}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-saffron-50 px-2 py-0.5 font-semibold text-ink-800 ring-1 ring-saffron-200">
                  <CalendarClock className="h-3 w-3" />
                  {d !== null ? (hi ? `${d} दिन बाकी` : `${d} days left`) : tx(e.status)}
                </span>
              </span>
              <span className="relative z-10 mt-4 flex items-center justify-between gap-2 border-t border-ink-100 pt-3 text-sm">
                <span className="inline-flex items-center gap-1 font-semibold text-brand-700">
                  {hi ? "योजना शुरू करें" : "Start the plan"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
                <Link
                  href={e.mocksHref}
                  onClick={() => saveExamChoice(e.key)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-ink-600 hover:text-brand-700"
                >
                  <ClipboardCheck className="h-3.5 w-3.5" /> {hi ? "पूर्ण मॉक" : "Full mock"}
                </Link>
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-ink-500">
        <span className="inline-flex items-center gap-1"><Sparkles className="h-3.5 w-3.5 text-saffron-600" /> {hi ? "2 मॉक मुफ़्त · पूरी तैयारी ₹99" : "2 mocks free · full prep ₹99"}</span>
        <span>{hi ? "हर प्रश्न हिंदी + अंग्रेज़ी में" : "Every question in Hindi + English"}</span>
        <span>{hi ? "असली अंकन" : "Real exam marking"}</span>
        <Link href="/exams" className="font-semibold text-brand-700 hover:underline">{hi ? "दूसरे राज्य की परीक्षा? →" : "Another state's exam? →"}</Link>
      </p>
    </div>
  );
}
