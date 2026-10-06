import { Check, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { BuyPassButton, OfferPrice } from "@/components/pricing/PlanUnlock";
import { PASS_STATS, plusCount } from "@/lib/pass-stats";
import { siteConfig } from "@/lib/config";

type Bi = { en: string; hi: string };

/**
 * "What you get here that you usually don't elsewhere". The right-hand column describes
 * typical test-series apps in general, not any one company, and says "often"/"usually"
 * because features vary. Keep every Merit Marg claim true to the product.
 */
const ROWS: { f: Bi; us: Bi; them: Bi }[] = [
  {
    f: { en: "Price", hi: "कीमत" },
    us: { en: "one-time Prep Pass, lifetime access", hi: "एक बार का प्रेप पास, हमेशा के लिए" },
    them: { en: "Often a monthly or yearly subscription", hi: "अक्सर मासिक या सालाना सब्सक्रिप्शन" },
  },
  {
    f: { en: "What to study today", hi: "आज क्या पढ़ें" },
    us: { en: "A day-by-day plan up to exam day, one topic a day", hi: "परीक्षा के दिन तक रोज़ एक टॉपिक की योजना" },
    them: { en: "Usually a list of tests; you decide", hi: "आमतौर पर बस टेस्ट की सूची, तय आपको करना है" },
  },
  {
    f: { en: "Marking", hi: "अंकन" },
    us: { en: "Your exam's own rules: +3/−1, or BPSC's option E and −⅓ for blanks", hi: "आपकी परीक्षा के ही नियम: +3/−1, या BPSC का विकल्प E और खाली पर −⅓" },
    them: { en: "Often one generic marking scheme", hi: "अक्सर एक ही सामान्य अंकन" },
  },
  {
    f: { en: "Language", hi: "भाषा" },
    us: { en: "Hindi and English side by side on the same question", hi: "एक ही प्रश्न पर हिंदी और अंग्रेज़ी साथ-साथ" },
    them: { en: "Often one language at a time", hi: "अक्सर एक समय में एक ही भाषा" },
  },
  {
    f: { en: "After the test", hi: "टेस्ट के बाद" },
    us: { en: "Topic-wise analysis and your own action plan", hi: "टॉपिक-वार विश्लेषण और आपकी अपनी कार्य-योजना" },
    them: { en: "Usually a score and a rank", hi: "आमतौर पर स्कोर और रैंक" },
  },
  {
    f: { en: "Exams covered", hi: "कौन-सी परीक्षाएँ" },
    us: { en: "SUPER TET + BPSC TRE 4.0 (Classes 1–5 to 11–12), every subject, one pass", hi: "SUPER TET + BPSC TRE 4.0 (कक्षा 1–5 से 11–12), हर विषय, एक पास" },
    them: { en: "Often a separate pack for each exam", hi: "अक्सर हर परीक्षा का अलग पैक" },
  },
  {
    f: { en: "Try before you pay", hi: "पैसे देने से पहले आज़माएँ" },
    us: { en: "2 free mini mocks + 1 full mock, no sign-up", hi: "2 मुफ़्त मिनी मॉक + 1 पूरा मॉक, बिना साइन-अप" },
    them: { en: "Free tests often need sign-up first", hi: "मुफ़्त टेस्ट के लिए अक्सर पहले साइन-अप" },
  },
  {
    f: { en: "Help", hi: "मदद" },
    us: { en: `WhatsApp a real person: ${siteConfig.whatsappDisplay}`, hi: `WhatsApp पर सीधी बात: ${siteConfig.whatsappDisplay}` },
    them: { en: "Often email or ticket support", hi: "अक्सर ईमेल या टिकट से" },
  },
];

export function ValueTable({ hi, className }: { hi: boolean; className?: string }) {
  const tx = (b: Bi) => (hi ? b.hi : b.en);
  return (
    <section className={cn("mx-auto max-w-4xl", className)} aria-labelledby="why-merit-marg">
      <div className="text-center">
        <p className="font-hand text-xl text-teal-700">{hi ? "फ़र्क़ ख़ुद देखिए" : "See the difference"}</p>
        <h2 id="why-merit-marg" className="mt-1 text-2xl font-bold text-ink-900 sm:text-3xl">
          {hi ? "यहाँ जो मिलता है, वो अक्सर और कहीं नहीं" : "What you get here, and usually don't elsewhere"}
        </h2>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
        {/* header */}
        <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_minmax(0,1fr)] bg-ink-50 text-xs font-bold uppercase tracking-wide text-ink-600 sm:text-sm">
          <div className="p-3 sm:p-4" />
          <div className="bg-brand-600 p-3 text-white sm:p-4">
            <span className="inline-flex items-center gap-1"><Sparkles className="h-3.5 w-3.5" /> Merit Marg</span>
          </div>
          <div className="p-3 sm:p-4">{hi ? "आम टेस्ट-सीरीज़ ऐप" : "Typical test-series apps"}</div>
        </div>
        {ROWS.map((r, i) => (
          <div
            key={r.f.en}
            className={cn("grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_minmax(0,1fr)] border-t border-ink-100 text-sm", i % 2 === 1 && "bg-ink-50/40")}
          >
            <div className="p-3 font-semibold text-ink-800 sm:p-4">{tx(r.f)}</div>
            <div className="flex gap-2 bg-brand-50/70 p-3 font-medium text-ink-900 sm:p-4">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" strokeWidth={3} /> <span className="min-w-0">{tx(r.us)}</span>
            </div>
            <div className="flex gap-2 p-3 text-ink-500 sm:p-4">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" /> <span className="min-w-0">{tx(r.them)}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-ink-400">
        {hi
          ? "तुलना आम टेस्ट-सीरीज़ ऐप से है, किसी एक कंपनी से नहीं; हर ऐप की सुविधाएँ अलग हो सकती हैं।"
          : "Compared with typical test-series apps in general, not any one company; features vary from app to app."}
      </p>

      {/* CTA */}
      <div className="mx-auto mt-6 max-w-md rounded-2xl bg-[#0a1329] p-5 text-center text-white">
        <p className="text-sm text-white/80">
          {hi ? `${plusCount(PASS_STATS.totalTests)} टेस्ट और पूरी योजना` : `${plusCount(PASS_STATS.totalTests)} tests and the whole plan`}
        </p>
        <OfferPrice hi={hi} dark className="mt-1" />
        <BuyPassButton product="prep" hi={hi} size="lg" className="mt-4" fullWidth />
      </div>
    </section>
  );
}
