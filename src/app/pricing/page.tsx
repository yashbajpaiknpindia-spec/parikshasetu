import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import { Check, X, Sparkles, Gift, ShieldCheck, IndianRupee, Infinity as InfinityIcon, Clock, Users, Lock } from "lucide-react";
import { Container, Badge, ButtonLink, Card } from "@/components/ui";
import { BuyPassButton, RestorePurchaseForm, MentorUpgrade, PassActiveNote, OfferPrice } from "@/components/pricing/PlanUnlock";
import { ValueTable } from "@/components/pricing/ValueTable";
import { SampleAnalysis } from "@/components/pricing/SampleAnalysis";
import { WhatsAppLink } from "@/components/site/WhatsAppHelp";
import { cn } from "@/lib/utils";
import { FREE_MINI_MOCKS, PREP_LIST_PRICE, OFFER_ENDS, MENTOR_PRICE, UPGRADE_PRICE } from "@/lib/pricing";
import { PYQ_PAPERS } from "@/data/pyq";
import { PASS_STATS, plusCount } from "@/lib/pass-stats";
import { paymentsLive } from "@/lib/plan-access";
import { siteConfig } from "@/lib/config";
import { getLang } from "@/lib/i18n-server";
import { getPricingSettings } from "@/lib/pricing-config";

export const dynamic = "force-dynamic";

export const metadata = pageSeo({
  title: "SUPER TET & BPSC TRE 4.0 Mock Test Pass Pricing",
  description: "Try 2 free mini mocks + 1 full mock, then unlock the full SUPER TET and BPSC TRE 4.0 library, day-by-day study plans and subject-wise practice with a one-time Prep Pass.",
  path: "/pricing",
  keywords: ["SUPER TET mock test price", "BPSC TRE 4.0 mock test price", "teacher exam test series", "teacher exam preparation", "SUPER TET test series", "BPSC teacher test series"],
  noIndex: false,
});

type Bi = { en: string; hi: string };
type Row = { f: Bi; free: boolean; note?: Bi };

const S = PASS_STATS;

/** The comparison. Two free mocks are the trial; the Prep Pass unlocks the full library. */
const rows: Row[] = [
  { f: { en: "2 free mini mocks + 1 full mock", hi: "2 मुफ़्त मिनी मॉक + 1 पूरा मॉक" }, free: true },
  { f: { en: "Score, percentile and answers with explanations", hi: "स्कोर, पर्सेंटाइल और व्याख्या सहित उत्तर" }, free: true },
  { f: { en: "Exam guides, job alerts and results", hi: "परीक्षा गाइड, नौकरी सूचनाएँ और परिणाम" }, free: true },
  { f: { en: `${S.fullMocks} full mock tests in the real pattern`, hi: `${S.fullMocks} पूर्ण मॉक टेस्ट, असली पैटर्न में` }, free: false },
  { f: { en: `${plusCount(S.sectionMocks)} section-wise mocks`, hi: `${plusCount(S.sectionMocks)} खंड-वार मॉक` }, free: false },
  { f: { en: "Day-by-day study plan up to exam day", hi: "परीक्षा के दिन तक दिन-प्रतिदिन योजना" }, free: false },
  { f: { en: `${plusCount(S.practiceSets)} Moderate and Tough topic sets`, hi: `${plusCount(S.practiceSets)} मध्यम व कठिन टॉपिक सेट` }, free: false },
  { f: { en: `${S.weekTests} week tests on each week's topics`, hi: `${S.weekTests} सप्ताह-टेस्ट, उसी सप्ताह के टॉपिक पर` }, free: false },
  { f: { en: "Topic-wise analysis after every test", hi: "हर टेस्ट के बाद टॉपिक-वार विश्लेषण" }, free: false },
  { f: { en: "Your personal action plan: what to study next", hi: "आपकी अपनी कार्य-योजना: आगे क्या पढ़ें" }, free: false },
  { f: { en: "SUPER TET and BPSC TRE 4.0 (1–5 to 11–12) in one pass", hi: "SUPER TET और BPSC TRE 4.0 (1–5 से 11–12), एक ही पास में" }, free: false },
  { f: { en: "Every new test we add, free for life", hi: "आगे जुड़ने वाले सभी टेस्ट, हमेशा मुफ़्त" }, free: false },
  { f: { en: `${PYQ_PAPERS.length} UP previous-year papers (SUPER TET, UPTET and JASE)`, hi: `${PYQ_PAPERS.length} UP पिछले वर्षों के प्रश्न-पत्र (SUPER TET, UPTET और JASE)` }, free: false },
];

const faqs: { q: Bi; a: Bi }[] = [
  {
    q: { en: "What do I get free?", hi: "मुफ़्त में क्या मिलता है?" },
    a: {
      en: "For your exam: 2 free mini mocks + 1 full mock. You see your score, percentile and every answer explained. Everything else needs the Prep Pass.",
      hi: "आपकी परीक्षा के लिए 2 मुफ़्त 20-प्रश्न मिनी मॉक और 1 मुफ़्त पूर्ण मॉक है। स्कोर, पर्सेंटाइल और हर उत्तर की व्याख्या भी मिलती है। बाकी सब के लिए प्रेप पास चाहिए।",
    },
  },
  {
    q: { en: "Is the Prep Pass really one time?", hi: "क्या प्रेप पास सच में एक ही बार है?" },
    a: {
      en: "Yes. It is a one-time payment with no subscription or renewal. Every full mock, every section-wise mock and the whole plan stay open, and new tests we add come free.",
      hi: "हाँ। यह एक बार का भुगतान है। कोई सब्सक्रिप्शन या नवीनीकरण नहीं। सभी पूर्ण मॉक, खंड-वार मॉक और पूरी योजना खुली रहती है, और नए टेस्ट भी मुफ़्त मिलते हैं।",
    },
  },
  {
    q: { en: "How do I pay?", hi: "भुगतान कैसे करें?" },
    a: {
      en: "Online only, through Razorpay's secure checkout: UPI, debit or credit card, or net banking. Your tests open the moment the payment goes through.",
      hi: "केवल ऑनलाइन, Razorpay के सुरक्षित चेकआउट से: UPI, डेबिट/क्रेडिट कार्ड या नेट बैंकिंग। भुगतान होते ही टेस्ट खुल जाते हैं।",
    },
  },
  {
    q: { en: "Does one pass cover UP and Bihar?", hi: "क्या एक पास में UP और बिहार दोनों हैं?" },
    a: {
      en: "Yes. SUPER TET and BPSC TRE 4.0 classes 1–5, 6–8, 9–10 and 11–12 (every subject we cover) are all in the same Prep Pass. Many aspirants sit both.",
      hi: "हाँ। SUPER TET और BPSC TRE 4.0 कक्षा 1–5, 6–8, 9–10 और 11–12 (हमारे सभी विषय), सब एक ही प्रेप पास में हैं। कई अभ्यर्थी दोनों परीक्षाएँ देते हैं।",
    },
  },
  {
    q: { en: `What about the ₹${MENTOR_PRICE} mentorship plan?`, hi: `₹${MENTOR_PRICE} मेंटरशिप प्लान का क्या?` },
    a: {
      en: `It's coming soon: 1-on-1 calls with teachers, mentors and selected candidates. Buy the Prep Pass now and you'll be able to add mentorship later for just ₹${UPGRADE_PRICE}.`,
      hi: `यह जल्द आ रहा है: शिक्षकों, मेंटर्स और चयनित अभ्यर्थियों से 1-on-1 कॉल। अभी प्रेप पास लें, बाद में मेंटरशिप सिर्फ़ ₹${UPGRADE_PRICE} में जुड़ जाएगी।`,
    },
  },
  {
    q: { en: "Do you guarantee selection?", hi: "क्या आप चयन की गारंटी देते हैं?" },
    a: {
      en: "No, and be careful of anyone who does. We give you honest, exam-matched practice. The result is yours to earn.",
      hi: "नहीं, और जो गारंटी दे उससे सावधान रहें। हम ईमानदार, परीक्षा जैसा अभ्यास देते हैं। परिणाम आपकी मेहनत का है।",
    },
  },
];

export default async function PricingPage() {
  const hi = (await getLang()) === "hi";
  const { prepPrice } = await getPricingSettings();
  const tx = (b: Bi) => (hi ? b.hi : b.en);
  const freeRows = rows.filter((r) => r.free);
  const lockedRows = rows.filter((r) => !r.free);

  return (
    <>
      <section className="hero-gradient">
        <Container className="py-12 text-center sm:py-16">
          <Badge tone="brand" className="mx-auto">
            <Sparkles className="h-3.5 w-3.5" /> {hi ? "सरल, ईमानदार कीमत" : "Simple, honest pricing"}
          </Badge>
          <h1 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
            {hi ? `2 मॉक मुफ़्त। बाकी सब, सिर्फ़ ₹${prepPrice} में।` : `2 mocks free. Everything else, just ₹${prepPrice}.`}
          </h1>
          <p className="mx-auto mt-3 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink-800 ring-1 ring-rose-200">
            {PREP_LIST_PRICE > prepPrice && <s className="text-ink-400 decoration-rose-500 decoration-2">₹{PREP_LIST_PRICE}</s>}
            <span>₹{prepPrice}</span>
            {PREP_LIST_PRICE > prepPrice && <span className="rounded-full bg-rose-600 px-2 py-0.5 text-[11px] font-bold uppercase text-white">{Math.round((1 - prepPrice / PREP_LIST_PRICE) * 100)}% {hi ? "छूट" : "off"}</span>}
            <span className="text-rose-700">{hi ? `ऑफ़र ${OFFER_ENDS.hi} तक` : `Offer ends ${OFFER_ENDS.en}`}</span>
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-600 sm:text-lg">
            {hi
              ? `कोचिंग की फ़ीस नहीं, सब्सक्रिप्शन नहीं। ${plusCount(S.totalTests)} टेस्ट और पूरी योजना, एक बार के ₹${prepPrice} में। यानी एक टेस्ट ₹1 से भी कम का।`
              : `No coaching fees, no subscription. ${plusCount(S.totalTests)} tests and the whole plan for a one-time ₹${prepPrice}. That's ${prepPrice / Math.max(1, S.totalTests) < 1 ? "less than ₹1 a test" : "one low-cost pass"}.`}
          </p>
          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-ink-700">
            <li className="inline-flex items-center gap-1.5"><IndianRupee className="h-4 w-4 text-brand-600" /> {hi ? "एक बार भुगतान" : "One-time payment"}</li>
            <li className="inline-flex items-center gap-1.5"><InfinityIcon className="h-4 w-4 text-brand-600" /> {hi ? "कोई नवीनीकरण नहीं" : "No renewals"}</li>
            <li className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand-600" /> {hi ? "हिंदी और अंग्रेज़ी में हर प्रश्न" : "Every question in Hindi and English"}</li>
          </ul>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <PassActiveNote hi={hi} className="mb-6" />
            <MentorUpgrade hi={hi} className="mb-6" />
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            {/* ---------------- Free: a taste, mostly crosses */}
            <Card className="flex flex-col">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-700">
                <Gift className="h-3.5 w-3.5" /> {hi ? "आज़माने के लिए" : "To try it out"}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-ink-900">{hi ? "मुफ़्त" : "Free"}</h2>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-ink-900">₹0</span>
              </div>
              <ButtonLink href="/mock-tests" variant="outline" className="mt-5">
                {hi ? "मुफ़्त मॉक दें" : "Take a free mock"}
              </ButtonLink>
              <ul className="mt-6 space-y-3">
                {freeRows.map((r) => (
                  <li key={r.f.en} className="flex gap-2.5 text-sm text-ink-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {tx(r.f)}
                  </li>
                ))}
                {lockedRows.map((r) => (
                  <li key={r.f.en} className="flex gap-2.5 text-sm text-ink-400">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <span className="line-through decoration-ink-300">{tx(r.f)}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* ---------------- Prep Pass: everything, all ticks */}
            <Card className="relative order-first flex flex-col ring-2 ring-brand-600 shadow-xl md:order-none md:-mt-3">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-saffron-400 px-3 py-1 text-xs font-bold text-ink-900">
                <Sparkles className="h-3.5 w-3.5" /> {hi ? "सबसे लोकप्रिय" : "Most popular"}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-ink-900">{hi ? "प्रेप पास" : "Prep Pass"}</h2>
              <OfferPrice hi={hi} size="lg" className="mt-2 justify-start" />
              <p className="mt-1 text-sm text-ink-500">{hi ? "एक बार · आजीवन" : "once · lifetime access"}</p>
              <p className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-lg bg-rose-50 px-2.5 py-1 text-sm font-semibold text-rose-700 ring-1 ring-rose-200">
                <Clock className="h-4 w-4" /> {hi ? `₹${prepPrice} का ऑफ़र ${OFFER_ENDS.hi} तक, फिर ₹${PREP_LIST_PRICE}` : `₹${prepPrice} offer ends ${OFFER_ENDS.en}, then ₹${PREP_LIST_PRICE}`}
              </p>
              <p className="mt-2 inline-flex w-fit rounded-lg bg-teal-50 px-2.5 py-1 text-sm font-semibold text-teal-800 ring-1 ring-teal-200">
                {hi ? `${plusCount(S.totalTests)} टेस्ट, बहुत कम लागत` : `${plusCount(S.totalTests)} tests, one low-cost pass`}
              </p>
              <BuyPassButton product="prep" hi={hi} size="lg" className="mt-5" fullWidth />
              <ul className="mt-6 space-y-3">
                {rows.map((r) => (
                  <li key={r.f.en} className={cn("flex gap-2.5 text-sm", r.free ? "text-ink-700" : "font-semibold text-ink-900")}>
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {tx(r.f)}
                  </li>
                ))}
              </ul>
              {paymentsLive && (
                <div className="mt-6 border-t border-ink-100 pt-4 text-center">
                  <RestorePurchaseForm hi={hi} />
                </div>
              )}
            </Card>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
                {hi ? "हर टेस्ट के बाद पूरा विश्लेषण" : "A full analysis after every test"}
              </h2>
              <p className="mt-2 text-ink-600">
                {hi
                  ? "हर प्रश्न पर सही/गलत और उसकी व्याख्या, टॉपिक-वार सटीकता और आगे क्या पढ़ना है इसकी कार्य-योजना — पिछले वर्षों के ऑनलाइन पेपर पर भी।"
                  : "Right/wrong on every question with its explanation, topic-wise accuracy and an action plan for what to study next — including online previous-year papers."}
              </p>
            </div>
            <SampleAnalysis hi={hi} />
          </div>

          <ValueTable hi={hi} className="mt-14" />

          {/* ---------------- Mentorship: announced, not on sale */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-3 rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-200 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex flex-wrap items-center gap-2 font-semibold text-ink-900">
                <Users className="h-4 w-4 text-teal-600" /> {hi ? `प्रेप + 1-on-1 मेंटरशिप · ₹${MENTOR_PRICE}` : `Prep + 1-on-1 mentorship · ₹${MENTOR_PRICE}`}
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-600 px-2 py-0.5 text-[11px] font-bold uppercase text-white">
                  <Clock className="h-3 w-3" /> {hi ? "जल्द" : "Coming soon"}
                </span>
              </p>
              <p className="mt-1 text-sm text-ink-600">
                {hi
                  ? `शिक्षकों, मेंटर्स और चयनित अभ्यर्थियों से कॉल। प्रेप पास वाले इसे सिर्फ़ ₹${UPGRADE_PRICE} में जोड़ पाएँगे।`
                  : `Calls with teachers, mentors and selected candidates. Prep Pass holders will add it for just ₹${UPGRADE_PRICE}.`}
              </p>
            </div>
            <ButtonLink href="/mentors" variant="outline" size="sm" className="shrink-0">
              {hi ? "क्या-क्या मिलेगा" : "What's included"}
            </ButtonLink>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold text-ink-900">{hi ? "सवाल-जवाब" : "Questions"}</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((f) => (
                <Card key={f.q.en}>
                  <h3 className="font-semibold text-ink-900">{tx(f.q)}</h3>
                  <p className="mt-1.5 text-sm text-ink-600">{tx(f.a)}</p>
                </Card>
              ))}
              <Card className="bg-[#e9f9ef] ring-1 ring-[#25d366]/40">
                <h3 className="font-semibold text-ink-900">{hi ? "मदद चाहिए?" : "Need help?"}</h3>
                <p className="mt-1.5 text-sm text-ink-600">
                  {hi ? "भुगतान, टेस्ट या किसी भी सवाल के लिए WhatsApp करें: " : "For payments, tests or anything else, WhatsApp us: "}
                  <WhatsAppLink text={hi ? "नमस्ते मेरिट मार्ग, मुझे मदद चाहिए:" : "Hi Merit Marg, I need help with:"} label={siteConfig.whatsappDisplay} />
                </p>
              </Card>
              <Card>
                <h3 className="font-semibold text-ink-900">{hi ? "क्या रिफ़ंड मिल सकता है?" : "Can I get a refund?"}</h3>
                <p className="mt-1.5 text-sm text-ink-600">
                  {hi ? "हमारी " : "See our "}
                  <Link href="/legal/refund" className="font-semibold text-brand-700 underline">{hi ? "रिफ़ंड नीति" : "refund policy"}</Link>
                  {hi ? ` देखें। मौजूदा ऑफ़र ${OFFER_ENDS.hi} तक है; कीमत admin settings के अनुसार बदल सकती है। ऑफ़र में खरीदा पास हमेशा चलेगा।` : `. The current offer ends ${OFFER_ENDS.en}; the pass price is controlled by the site plan settings. A pass bought while active keeps working for life.`}
                </p>
              </Card>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-md text-center">
            <OfferPrice hi={hi} className="mt-3" />
            <BuyPassButton product="prep" hi={hi} size="lg" className="mt-4" fullWidth />
          </div>
        </Container>
      </section>
    </>
  );
}
