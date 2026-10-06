import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { EXAM_CHOICES, type ExamChoice } from "@/lib/exam-choice";
import { isSundayIST } from "@/lib/roz";

/**
 * The first thing on the home page: today's 10-minute mock, one tap from question 1.
 * Each exam chip goes straight into the paper (?go=1 starts it; exams with subjects ask
 * for the subject first). No form, no account.
 */
export function RozHero({ hi, exam, now }: { hi: boolean; exam: ExamChoice | null; now: number }) {
  const sunday = isSundayIST(now);
  const mine = exam ? EXAM_CHOICES.find((e) => e.key === exam) : null;
  return (
    <section aria-label={hi ? "रोज़ का 10" : "Roz ka 10"} className="relative overflow-hidden bg-[#0a1329] text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-saffron-400/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-saffron-400 px-3 py-1 text-xs font-extrabold uppercase text-ink-900">
          <Zap className="h-3.5 w-3.5" /> {hi ? "आज का पेपर खुला है · मुफ़्त · बिना साइन-अप" : "Today's paper is open · free · no sign-up"}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-[1.1] sm:text-5xl">
          {hi ? (
            <>सिर्फ़ <span className="text-saffron-300">10 मिनट</span>।<br />10 प्रश्न। आज की असली रैंक।</>
          ) : (
            <>Just <span className="text-saffron-300">10 minutes</span>.<br />10 questions. Today&apos;s real rank.</>
          )}
        </h1>
        <p className="mt-3 max-w-xl text-base text-white/80 sm:text-lg">
          {hi
            ? "आपकी परीक्षा के असली पैटर्न में रोज़ का 10। हर उत्तर पर तुरंत सही/गलत और व्याख्या। रोज़ आइए, स्ट्रीक बढ़ाइए।"
            : "Roz ka 10 in your exam's real pattern. Right or wrong after every tap, with the explanation. Come back daily and grow your streak."}
        </p>

        {mine ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={`/roz?e=${mine.key}&go=1`} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-saffron-400 px-7 text-lg font-extrabold text-ink-900 shadow-lg hover:bg-saffron-300">
              <Zap className="h-5 w-5" /> {hi ? `आज का 10 शुरू करें · ${mine.title.hi}` : `Start today's 10 · ${mine.title.en}`}
            </Link>
            <Link href="/roz" className="text-sm font-semibold text-white/70 underline hover:text-white">{hi ? "परीक्षा बदलें" : "Change exam"}</Link>
          </div>
        ) : (
          <>
            <p className="mt-6 text-sm font-bold text-white/70">{hi ? "अपनी परीक्षा पर टैप करें, पहला प्रश्न तुरंत:" : "Tap your exam, question 1 opens at once:"}</p>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {EXAM_CHOICES.map((e) => (
                <Link key={e.key} href={`/roz?e=${e.key}&go=1`} className="rounded-2xl bg-white/10 px-3 py-3 text-sm font-bold ring-1 ring-white/15 transition-colors hover:bg-white/20">
                  {hi ? e.title.hi : e.title.en}
                  <span className="mt-0.5 block text-[11px] font-normal text-white/60">{hi ? e.classes.hi : e.classes.en}</span>
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/75">
          <span className="rounded-full bg-white/10 px-3 py-1.5">⚡ {hi ? "हर उत्तर पर तुरंत नतीजा" : "Instant result on every answer"}</span>
          <span className="rounded-full bg-white/10 px-3 py-1.5">🏆 {hi ? "उसी पेपर पर सबसे असली रैंक" : "Real rank on the same paper"}</span>
          <span className="rounded-full bg-white/10 px-3 py-1.5">🔥 {hi ? "रोज़ की स्ट्रीक" : "Daily streak"}</span>
          <span className="rounded-full bg-white/10 px-3 py-1.5">🔁 {hi ? "गलतियाँ दोहराने को लौटती हैं" : "Mistakes come back for revision"}</span>
        </div>

        <Link href="/roz?k=sprint" className="mt-6 flex items-center justify-between gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10">
          <span className="text-sm">
            <b className="text-saffron-300">🏁 {hi ? "संडे स्प्रिंट" : "Sunday Sprint"}</b>{" · "}
            {sunday
              ? (hi ? "आज खुला है: 30 प्रश्न, 30 मिनट, असली रैंक" : "open today: 30 questions, 30 minutes, real rank")
              : (hi ? "हर रविवार: 30 प्रश्न, 30 मिनट, असली रैंक" : "every Sunday: 30 questions, 30 minutes, real rank")}
          </span>
          <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
      </div>
    </section>
  );
}
