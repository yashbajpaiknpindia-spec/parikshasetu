import { CheckCircle2, XCircle, Target, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A SAMPLE of the report a Prep Pass holder gets after a test: score, right/wrong
 * answers with explanations, topic-wise accuracy and the action plan. Shown to people
 * deciding on the Prep Pass. The numbers are illustrative and the card says so; the
 * question is a real one (ATR-2019, Q3) with its official answer.
 */
export function SampleAnalysis({ hi, className }: { hi: boolean; className?: string }) {
  const topics: { t: string; acc: number }[] = hi
    ? [{ t: "संधि", acc: 90 }, { t: "बाल विकास", acc: 82 }, { t: "करेंट अफ़ेयर्स", acc: 45 }, { t: "ज्यामिति", acc: 38 }]
    : [{ t: "संधि (Sandhi)", acc: 90 }, { t: "Child development", acc: 82 }, { t: "Current affairs", acc: 45 }, { t: "Geometry", acc: 38 }];
  const tone = (a: number) => (a >= 80 ? "bg-success" : a >= 50 ? "bg-saffron-400" : "bg-rose-400");

  return (
    <div className={cn("relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-ink-200", className)}>
      <div className="flex items-center justify-between gap-2 bg-ink-900 px-4 py-2.5 text-xs font-semibold text-white">
        <span>{hi ? "नमूना रिपोर्ट · Prep Pass पास के साथ हर टेस्ट के बाद" : "Sample report · after every test with the Prep Pass"}</span>
        <span className="rounded-full bg-saffron-400 px-2 py-0.5 text-[10px] font-bold uppercase text-ink-900">{hi ? "नमूना" : "Sample"}</span>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
        {/* score */}
        <div className="rounded-2xl bg-brand-700 p-4 text-center text-white">
          <p className="text-xs text-white/80">{hi ? "आपका स्कोर" : "Your score"}</p>
          <p className="text-4xl font-extrabold">214<span className="text-lg font-semibold text-white/70"> / 360</span></p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div className="rounded-lg bg-white/15 py-1.5">✅ 80<div className="text-white/70">{hi ? "सही" : "right"}</div></div>
            <div className="rounded-lg bg-white/15 py-1.5">❌ 26<div className="text-white/70">{hi ? "गलत" : "wrong"}</div></div>
            <div className="rounded-lg bg-white/15 py-1.5">⏭️ 14<div className="text-white/70">{hi ? "छोड़े" : "skipped"}</div></div>
          </div>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-sm font-semibold">
            <TrendingUp className="h-4 w-4" /> {hi ? "~78% से बेहतर" : "Better than ~78%"}
          </p>
        </div>

        {/* topic-wise */}
        <div className="rounded-2xl bg-ink-50 p-4">
          <p className="flex items-center gap-1.5 text-sm font-bold text-ink-900"><Target className="h-4 w-4 text-brand-600" /> {hi ? "टॉपिक-वार सटीकता" : "Topic-wise accuracy"}</p>
          <div className="mt-3 space-y-2.5">
            {topics.map((x) => (
              <div key={x.t}>
                <div className="flex justify-between text-xs font-medium text-ink-700"><span>{x.t}</span><span>{x.acc}%</span></div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-white ring-1 ring-ink-200"><div className={cn("h-full rounded-full", tone(x.acc))} style={{ width: `${x.acc}%` }} /></div>
              </div>
            ))}
          </div>
        </div>

        {/* right / wrong with explanation (a real PYQ) */}
        <div className="rounded-2xl border border-ink-200 p-4 sm:col-span-2">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">ATR-2019 · Q3 · {hi ? "पिछले वर्ष का प्रश्न" : "previous-year question"}</p>
          <p className="mt-1 text-sm font-semibold text-ink-900">&lsquo;सरस्वती&rsquo; पत्रिका के संपादक कौन थे?</p>
          <div className="mt-2 grid gap-1.5 text-sm sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-lg border border-danger bg-red-50 px-3 py-1.5 text-red-800"><XCircle className="h-4 w-4 shrink-0" /> भारतेन्दु हरिश्चंद्र <span className="ml-auto text-[11px] font-semibold">{hi ? "आपका उत्तर" : "your answer"}</span></div>
            <div className="flex items-center gap-2 rounded-lg border border-success bg-teal-50 px-3 py-1.5 text-teal-800"><CheckCircle2 className="h-4 w-4 shrink-0" /> महावीर प्रसाद द्विवेदी <span className="ml-auto text-[11px] font-semibold">{hi ? "सही" : "correct"}</span></div>
          </div>
          <p className="mt-2 rounded-lg bg-brand-50/70 p-2.5 text-xs text-ink-800">
            <b className="text-brand-700">{hi ? "क्यों" : "Why"}: </b>
            {hi ? "महावीर प्रसाद द्विवेदी ने 1903 से 1920 तक 'सरस्वती' का संपादन किया; इसी से हिंदी साहित्य का 'द्विवेदी युग' जुड़ा है।" : "Mahavir Prasad Dwivedi edited 'Saraswati' from 1903 to 1920, which is why that era of Hindi literature is called the Dwivedi Yug."}
          </p>
        </div>

        {/* action plan */}
        <div className="rounded-2xl bg-saffron-50 p-4 ring-1 ring-saffron-200 sm:col-span-2">
          <p className="flex items-center gap-1.5 text-sm font-bold text-saffron-900"><Sparkles className="h-4 w-4" /> {hi ? "आपकी कार्य-योजना" : "Your action plan"}</p>
          <p className="mt-1 text-sm text-ink-800">
            {hi
              ? "🎯 पहले ज्यामिति और करेंट अफ़ेयर्स: योजना के उसी दिन के सेट दें। ✅ संधि और बाल विकास मज़बूत हैं, बनाए रखें।"
              : "🎯 Start with Geometry and Current affairs: take those days' sets in the plan. ✅ Sandhi and Child development are strong, keep them up."}
          </p>
        </div>
      </div>
    </div>
  );
}
