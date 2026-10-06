import Link from "next/link";
import { Gift, ArrowRight, Check, ClipboardCheck, Timer, Lock, FileText } from "lucide-react";
import { BuyPassButton, OfferPrice } from "@/components/pricing/PlanUnlock";
import { SampleAnalysis } from "@/components/pricing/SampleAnalysis";
import { getMockTest, upFreeMocks, questionCount as qCount } from "@/lib/mock-engine";
import { PREP_PRICE } from "@/lib/pricing";
import { getPricingSettings } from "@/lib/pricing-config";
import { PASS_STATS, plusCount } from "@/lib/pass-stats";
import { PYQ_PAPERS } from "@/data/pyq";
import { PYQ_TESTS } from "@/data/pyq-tests";

/**
 * Home page: 2 free 20-question mini mocks + 1 free full mock per exam, followed by
 * the current database-backed Prep Pass pitch.
 */
export async function TryFreeMocks({ hi }: { hi: boolean }) {
  const full = getMockTest("up-mock-l1-full-1");
  const free = [...upFreeMocks, ...(full ? [full] : [])];
  const s = PASS_STATS;
  let prepPrice = PREP_PRICE;
  try { prepPrice = (await getPricingSettings()).prepPrice; } catch { /* fallback to the published default */ }

  const perks = hi
    ? [
        `${s.fullMocks} पूर्ण मॉक, आसान से कठिन तक`,
        `पिछले वर्षों के असली प्रश्न-पत्र ऑनलाइन टेस्ट की तरह: हर प्रश्न सही/गलत और व्याख्या के साथ (${PYQ_TESTS.length} पेपर, और जुड़ रहे हैं)`,
        `${PYQ_PAPERS.length} पिछले प्रश्न-पत्र PDF में भी`,
        "हर टेस्ट के बाद पूरा विश्लेषण: टॉपिक-वार सटीकता और आपकी कार्य-योजना",
        `${plusCount(s.sectionMocks)} खंड-वार मॉक और परीक्षा तक की दिन-प्रतिदिन योजना`,
      ]
    : [
        `${s.fullMocks} full mocks, easy to tough`,
        `Real previous-year papers as online tests: every question marked right/wrong with the explanation (${PYQ_TESTS.length} papers, more coming)`,
        `${PYQ_PAPERS.length} previous-year papers as PDFs too`,
        "Full analysis after every test: topic-wise accuracy and your own action plan",
        `${plusCount(s.sectionMocks)} section-wise mocks and a day-by-day plan to exam day`,
      ];

  return (
    <section id="free-mocks" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            <Gift className="h-3.5 w-3.5" /> {hi ? "बिना साइन-अप, अभी शुरू करें" : "No sign-up, start now"}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">{hi ? "2 मुफ़्त मिनी मॉक + 1 पूरा मॉक आज़माइए" : "Try 2 free mini mocks + 1 full mock"}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-ink-600">{hi ? "2 मिनी मॉक (20-20 प्रश्न) + 1 पूरा पेपर, असली अंकन और हर उत्तर की व्याख्या।" : "Two 20-question mini mocks plus one full paper, with the real marking and every answer explained."}</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {free.map((t) => (
            <Link key={t.id} href={`/mock-tests/${t.id}`} className="card card-hover group flex flex-col border-teal-300 bg-gradient-to-b from-white to-teal-50/70 p-5">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-teal-600 px-2 py-0.5 text-[11px] font-bold uppercase text-white"><Gift className="h-3 w-3" /> {hi ? "मुफ़्त" : "Free"}</span>
              <h3 className="mt-3 text-lg font-bold text-ink-900">{t.title}</h3>
              <p className="mt-1 flex-1 text-sm text-ink-600">{hi ? "मुफ़्त पेपर में अभ्यास करें और हर उत्तर की व्याख्या देखें।" : "Practice with this free paper and review every answer explanation."}</p>
              <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3 text-xs text-ink-600"><span className="inline-flex items-center gap-3"><span className="inline-flex items-center gap-1"><ClipboardCheck className="h-3.5 w-3.5 text-brand-600" /> {qCount(t)} Q</span><span className="inline-flex items-center gap-1"><Timer className="h-3.5 w-3.5 text-brand-600" /> {t.durationMin} min</span></span><span className="inline-flex items-center gap-1 text-sm font-bold text-teal-700 group-hover:underline">{hi ? "शुरू करें" : "Start"} <ArrowRight className="h-4 w-4" /></span></div>
            </Link>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-ink-500">{hi ? "इन 3 मुफ़्त मॉक के बाद पूरा पुस्तकालय Prep Pass में खुलता है।" : "After these 3 free mocks, the complete library opens with the Prep Pass."}</p>

        <div className="mt-10 overflow-hidden rounded-3xl bg-[#0a1329] text-white shadow-2xl">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-3 py-1 text-xs font-extrabold uppercase tracking-wide"><Lock className="h-3.5 w-3.5" /> {hi ? "मुफ़्त मॉक तो बस शुरुआत है" : "The free mocks are just the start"}</p>
              <h3 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{hi ? <>पूरी तैयारी, सिर्फ़ <span className="text-saffron-300">₹{prepPrice}</span> में</> : <>Your whole preparation for <span className="text-saffron-300">₹{prepPrice}</span></>}</h3>
              <OfferPrice hi={hi} dark className="mt-3" />
              <ul className="mt-5 space-y-2.5">{perks.map((p) => <li key={p} className="flex gap-2.5 text-sm font-medium text-white/90 sm:text-base"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>{p}</li>)}</ul>
              <BuyPassButton product="prep" hi={hi} className="mt-6" fullWidth />
              <p className="mt-3 text-center text-sm text-white/70">{hi ? `एक बार भुगतान · ${plusCount(s.totalTests)} टेस्ट · एक टेस्ट ₹1 से भी कम` : `Pay once · ${plusCount(s.totalTests)} tests · less than ₹1 a test`}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm"><Link href="/pyq" className="inline-flex items-center gap-1 font-semibold text-saffron-300 hover:underline"><FileText className="h-4 w-4" /> {hi ? "पिछले प्रश्न-पत्र देखें" : "See previous-year papers"}</Link><Link href="/pricing" className="font-semibold text-saffron-300 hover:underline">{hi ? "पास में क्या-क्या है →" : "Everything in the pass →"}</Link></div>
            </div>
            <SampleAnalysis hi={hi} />
          </div>
        </div>
      </div>
    </section>
  );
}
