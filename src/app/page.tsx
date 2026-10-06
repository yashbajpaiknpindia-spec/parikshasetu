import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import {
  Compass, ClipboardCheck, Bell, BookOpen, ArrowRight,
  Target, TrendingUp, MapPin, Users, CalendarDays, PenLine,
} from "lucide-react";
import { ButtonLink, Container, Badge, Card } from "@/components/ui";
import { HandwrittenType } from "@/components/site/HandwrittenType";
import { ExamPicker } from "@/components/site/ExamPicker";
import { ValueTable } from "@/components/pricing/ValueTable";
import { exams } from "@/lib/exams/registry";
import { statusMeta as examStatus } from "@/lib/exams/types";
import { notifications } from "@/data/notifications";
import { getLang } from "@/lib/i18n-server";
import { RozHero } from "@/components/roz/RozHero";
import { getExamChoice } from "@/lib/exam-choice-server";
import { TryFreeMocks } from "@/components/site/TryFreeMocks";
import { SocialFollow } from "@/components/site/SocialFollow";
import { ChallengeRegister } from "@/components/challenge/ChallengeRegister";
import { CHALLENGE, currentTestRound, roundStatus } from "@/lib/challenge";

const featured = exams.filter((e) => e.slug !== "up").slice(0, 6);
const topOpenings = notifications.filter((n) => n.highlight && n.examSlug !== "up").slice(0, 4);
const serverTime = () => Date.now();

export const metadata = pageSeo({
  title: "SUPER TET & BPSC TRE 4.0 Preparation · Mock Tests & Study Plans",
  description: "Prepare for SUPER TET and BPSC TRE 4.0 with real-pattern mock tests, day-by-day study plans, topic practice, exam guidance, teacher recruitment updates and results.",
  path: "/",
  keywords: ["SUPER TET preparation", "BPSC TRE 4.0 preparation", "teacher exam mock tests", "teacher exam study plan", "UP teacher exam", "Bihar teacher exam"],
  noIndex: false,
});

export default async function HomePage() {
  const hi = (await getLang()) === "hi";
  const testRound = currentTestRound();
  const exam = await getExamChoice();
  return (
    <>
      {/* ------------------------------------------ Roz ka 10: one tap to question 1 */}
      <RozHero hi={hi} exam={exam} now={serverTime()} />

      {/* ------------------------------------------ Challenge test room (round day) */}
      {testRound && testRound.opensAt && roundStatus(testRound) !== "closed" && (
        <section className="border-b border-saffron-200 bg-saffron-50 py-8">
          <Container>
            <div className="mx-auto flex max-w-5xl flex-col items-start gap-5 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-saffron-200 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-3 py-1 text-xs font-extrabold uppercase text-white">
                  {hi ? "टेस्ट रूम" : "Test room"}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-ink-900 sm:text-3xl">
                  {hi ? `राउंड ${testRound.n} का पेपर: ${testRound.startTime}, ${testRound.label.hi}` : `Round ${testRound.n} paper: ${testRound.startTime}, ${testRound.label.en}`}
                </h2>
                <p className="mt-1 text-ink-600">
                  {hi
                    ? "नाम और मोबाइल से अभी लॉगिन कर लें। ठीक 4 बजे पेपर खुलेगा: आपकी परीक्षा (SUPER TET या BPSC TRE 4.0) का पूरा पेपर, असली पैटर्न में।"
                    : "Log in now with your name and mobile. The paper opens at 4 PM sharp: the full paper of your exam (SUPER TET or BPSC TRE 4.0), in the real pattern."}
                </p>
              </div>
              <Link href="/challenge/test" className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3.5 text-base font-extrabold text-white shadow-md hover:bg-brand-700">
                {hi ? "टेस्ट रूम में जाएँ" : "Go to the test room"} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden />
        <Container className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-hand text-ink-900">
              <HandwrittenType
                lines={
                  hi
                    ? ["प्रिय भावी शिक्षक,", "आपकी परीक्षा उतनी दूर नहीं, जितनी लगती है।"]
                    : ["Dear future teacher,", "your exam is closer than it looks."]
                }
                lineClassNames={[
                  "text-2xl text-teal-700 sm:text-3xl",
                  "mt-2 text-4xl font-bold leading-tight text-brand-800 sm:text-6xl",
                ]}
              />
            </h2>
            <p className="animate-fade-up delay-2 mx-auto mt-5 max-w-xl text-base text-ink-600 sm:text-lg">
              {hi ? (
                <>रोज़ एक टॉपिक पढ़िए, उसी का टेस्ट दीजिए। असली परीक्षा जैसे अंक, हर उत्तर की आसान व्याख्या।</>
              ) : (
                <>Study one topic a day, then take its test. Real exam marking, every answer explained simply.</>
              )}
            </p>
          </div>
          <div className="animate-fade-up delay-3">
            <ExamPicker hi={hi} />
          </div>
        </Container>
      </section>


      {/* ------------------------------ Challenge registration (on the home screen) */}
      {CHALLENGE.registrationOpen && (
        <section id="register" className="scroll-mt-20 bg-gradient-to-b from-saffron-50 to-white py-12 sm:py-16">
          <Container>
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="font-hand text-xl text-saffron-700">{hi ? "4 · 11 · 18 अक्टूबर" : "4 · 11 · 18 October"}</p>
                <h2 className="mt-1 text-3xl font-extrabold text-ink-900 sm:text-4xl">
                  {hi ? "फ़्री मॉक चैलेंज में अभी पंजीकरण करें" : "Register now for the Free Mock Challenge"}
                </h2>
                <p className="mt-3 text-ink-600">
                  {hi
                    ? "हर रविवार एक पूर्ण मॉक, असली पैटर्न में। हर राउंड के टॉप 1% को मेरिट मार्ग जीवन भर फ़्री। पंजीकरण मुफ़्त, बस 30 सेकंड।"
                    : "A full mock every Sunday in the real pattern. The top 1% of every round get Merit Marg free for life. Registration is free and takes 30 seconds."}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm font-medium text-ink-800">
                  <li>🏆 {hi ? "टॉप 1% = लाइफ़टाइम फ़्री एक्सेस" : "Top 1% = lifetime free access"}</li>
                  <li>📊 {hi ? "हर राउंड के बाद अपनी रैंक और हल" : "Your rank and solutions after every round"}</li>
                  <li>📲 {hi ? "मॉक की लिंक WhatsApp पर" : "Mock link on WhatsApp"}</li>
                </ul>
                <Link href="/challenge#rules" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">
                  {hi ? "पूरे नियम पढ़ें →" : "Read the full rules →"}
                </Link>
              </div>
              <ChallengeRegister hi={hi} source="home" />
            </div>
          </Container>
        </section>
      )}

      {/* ------------------------------ Try free mocks + the ₹99 pitch with a sample report */}
      <TryFreeMocks hi={hi} />

      {/* ------------------------------------------------- Follow us */}
      <section className="pb-14 sm:pb-16">
        <Container>
          <SocialFollow hi={hi} />
        </Container>
      </section>

      {/* ------------------------------------------------- Our story */}
      <section className="border-y border-teal-100 bg-teal-50/60 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="font-hand text-xl text-teal-700">{hi ? "हमने यह क्यों बनाया" : "Why we built this"}</p>
            <h2 className="mt-1 text-3xl font-bold text-ink-900 sm:text-4xl">
              {hi ? "उन्होंने बनाया, जिन्होंने ये परीक्षाएँ पास की हैं" : "Made by people who cleared these exams"}
            </h2>
          </div>
          <ol className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            <span aria-hidden className="absolute left-5 right-5 top-5 hidden border-t-2 border-dashed border-teal-300 md:block" />
            {[
              {
                t: hi ? "वे भी वहीं बैठे थे, जहाँ आप हैं" : "They sat where you sit",
                d: hi
                  ? "मेरिट मार्ग की शुरुआत उन लोगों ने की जिन्होंने खुद ये परीक्षाएँ पास की हैं। किताबों का ढेर, देर रात की पढ़ाई और वे प्रश्न जिनके बारे में किसी ने पहले नहीं बताया, उन्हें सब याद है।"
                  : "Merit Marg was started by people who cleared these exams themselves. They remember the pile of books, the late nights, and the questions nobody warned them about.",
              },
              {
                t: hi ? "उनके मार्गदर्शन में हमने खोजा" : "We dug in, with them guiding us",
                d: hi
                  ? "उनके साथ बैठकर हमने आधिकारिक सिलेबस, परीक्षा का पैटर्न और अंकन, और असल में पूछे जाने वाले प्रश्नों को टॉपिक-दर-टॉपिक खंगाला।"
                  : "Sitting with them, we went through the official syllabus, the exam pattern and marking, and the kind of questions that really get asked, one topic at a time.",
              },
              {
                t: hi ? "जो मिला, अब आपका है" : "What we found is now yours",
                d: hi
                  ? "क्या पूछा जाता है, क्या याद रखना है, और किस क्रम में पढ़ना है, सब यहाँ है। आपका समय खोजने में नहीं, अभ्यास में लगे।"
                  : "What gets asked, what is worth remembering, and the order to cover it in. It is all here, so your hours go into practice, not searching.",
              },
            ].map((s, i) => (
              <li key={s.t} className="relative">
                <span className={`relative grid h-10 w-10 place-items-center rounded-full font-display font-bold ring-4 ring-teal-50 ${["bg-brand-600 text-white", "bg-teal-600 text-white", "bg-saffron-400 text-ink-900"][i]}`}>
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{s.t}</h3>
                <p className="mt-2 text-ink-600">{s.d}</p>
              </li>
            ))}
          </ol>
          <Link href="/about" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">
            {hi ? "हमारी पूरी कहानी पढ़ें" : "Read our story"} <ArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      {/* ------------------------------------------- How a day works */}
      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="font-hand text-xl text-teal-700">{hi ? "एक दिन ऐसे चलता है" : "Here's what one day looks like"}</p>
            <h2 className="mt-1 text-3xl font-bold text-ink-900 sm:text-4xl">
              {hi ? "एक टॉपिक, दो टेस्ट" : "One topic, two tests"}
            </h2>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: CalendarDays, color: "bg-brand-600 text-white",
                t: hi ? "1. आज का टॉपिक खोलें" : "1. Open today's topic",
                d: hi ? "योजना बताती है आज क्या पढ़ना है, जैसे संधि या भिन्न। हर टॉपिक लिखित परीक्षा के 10 खंडों में से किसी एक का है।" : "The plan tells you what today is, say Sandhi or Fractions. Every topic belongs to one of the 10 sections of the written exam.",
              },
              {
                icon: ClipboardCheck, color: "bg-teal-600 text-white",
                t: hi ? "2. पहले मध्यम (Moderate) सेट" : "2. Do the Moderate set",
                d: hi ? "50 प्रश्न, घड़ी चालू। गलत उत्तर पर 1 अंक कटता है, इसलिए अंदाज़ा यहाँ भी महँगा पड़ता है।" : "50 questions, clock running. A wrong answer costs 1 mark, so guessing hurts here, same as in the hall.",
              },
              {
                icon: Target, color: "bg-saffron-400 text-ink-900",
                t: hi ? "3. 'क्यों' पढ़ें, फिर कठिन (Tough) सेट" : "3. Read the 'why', then the Tough set",
                d: hi ? "हर गलत प्रश्न के नीचे कारण लिखा है। उसे पढ़कर कठिन सेट दें। कमज़ोर टॉपिक डैशबोर्ड पर दिखते रहेंगे।" : "Every wrong answer has a short reason under it. Read those, then take the harder set. Weak topics stay on your dashboard until you fix them.",
              },
            ].map((s) => (
              <li key={s.t}>
                <Card className="h-full">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${s.color}`}><s.icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">{s.t}</h3>
                  <p className="mt-2 text-ink-600">{s.d}</p>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/exams/up/plan">
              {hi ? "SUPER TET योजना" : "SUPER TET plan"} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/exams/bihar-tre/plan" variant="outline">
              {hi ? "BPSC TRE 4.0 योजना" : "BPSC TRE 4.0 plan"} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ Practice engine */}
      <section className="bg-brand-900 py-20 text-white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-hand text-xl text-saffron-300">{hi ? "टेस्ट के बाद" : "After you submit"}</p>
              <h2 className="mt-1 text-3xl font-bold sm:text-4xl">
                {hi ? "सिर्फ़ स्कोर नहीं, यह भी कि अंक कहाँ गए" : "Not just a score. Where the marks went."}
              </h2>
              <p className="mt-5 text-lg text-brand-100">
                {hi
                  ? "टॉपिक-वार सही/गलत, कौन-सी गलतियाँ जल्दबाज़ी की थीं, और अगले दिन क्या दोहराना है। पुराना टेस्ट खोलें तो पिछला विश्लेषण वहीं मिलेगा, और नया प्रयास भी।"
                  : "You see right and wrong by topic, which mistakes were careless ones, and what to go over tomorrow. Reopen an old test and your last analysis is waiting, with a button to try again."}
              </p>
              <ButtonLink href="/mock-tests" variant="white" className="mt-7">
                {hi ? "एक टेस्ट देकर देखें" : "Try a test"} <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, t: hi ? "टॉपिक-वार" : "By topic", d: hi ? "किस टॉपिक में कितने सही" : "How many you got right in each topic" },
                { icon: PenLine, t: hi ? "'क्यों' सहित" : "With the why", d: hi ? "हर उत्तर का छोटा कारण" : "A short reason for every answer" },
                { icon: ClipboardCheck, t: "+3 / −1", d: hi ? "असली पेपर जैसा अंकन" : "Marked like the real paper" },
                { icon: TrendingUp, t: hi ? "इतिहास" : "History", d: hi ? "हर प्रयास सहेजा जाता है" : "Every attempt is saved" },
              ].map((s) => (
                <div key={s.t} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                  <s.icon className="h-6 w-6 text-teal-300" />
                  <h3 className="mt-3 font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-brand-100/90">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------- Why Merit Marg (vs typical apps) + ₹99 CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <ValueTable hi={hi} />
        </Container>
      </section>

      {/* ------------------------------------------- Other exams */}
      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Badge tone="brand"><Compass className="h-3.5 w-3.5" /> {hi ? "दूसरी परीक्षाएँ" : "Other exams"}</Badge>
              <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl">
                {hi ? "दूसरे राज्य की परीक्षा दे रहे हैं?" : "Sitting a different state's exam?"}
              </h2>
              <p className="mt-4 text-ink-600">
                {hi
                  ? "पात्रता, पैटर्न और पाठ्यक्रम यहाँ हैं। इनके मॉक टेस्ट अभी बन रहे हैं।"
                  : "Eligibility, pattern and syllabus are here. Mock tests for these are still being written."}
              </p>
            </div>
            <ButtonLink href="/exams" variant="outline">
              {hi ? "सभी परीक्षाएँ" : "All exams"} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => {
              const st = examStatus[e.status];
              return (
                <Link
                  key={e.slug}
                  href={e.hubHref}
                  className={`card card-hover flex flex-col p-6 ${e.priority ? "ring-2 ring-saffron-300" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">{e.shortName}</span>
                    <Badge tone={st.tone}>{e.statusLabel}</Badge>
                  </div>
                  <h3 className="mt-3 font-semibold text-ink-900">{e.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-500">
                    <MapPin className="h-3.5 w-3.5" /> {e.region}
                  </p>
                  <p className="mt-3 flex-1 text-sm text-ink-600">{e.summary}</p>
                  {e.vacancies && (
                    <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink-800">
                      <Users className="h-4 w-4 text-teal-600" /> {e.vacancies}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    {hi ? "गाइड खोलें" : "Open guide"} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------- Live openings */}
      <section className="bg-teal-50/60 py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Badge tone="green"><Bell className="h-3.5 w-3.5" /> {hi ? "भर्तियाँ" : "Openings"}</Badge>
              <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl">
                {hi ? "इस समय चल रही बड़ी भर्तियाँ" : "Big teacher drives running now"}
              </h2>
              <p className="mt-4 text-ink-600">
                {hi ? "हर सूचना के साथ आधिकारिक पोर्टल का लिंक है।" : "Each notice links to the official portal."}
              </p>
            </div>
            <ButtonLink href="/notifications" variant="outline">{hi ? "सभी सूचनाएँ" : "All notices"} <ArrowRight className="h-4 w-4" /></ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {topOpenings.map((n) => (
              <Card key={n.id} className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-semibold text-ink-900">{n.title}</p>
                  <p className="text-xs text-ink-500">{n.state} · {n.posts}</p>
                  {n.vacancies && <p className="mt-1 text-sm font-medium text-teal-700">{n.vacancies}</p>}
                </div>
                <Link href="/notifications" className="shrink-0 text-sm font-semibold text-brand-700">
                  {hi ? "देखें →" : "Details →"}
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ Final note */}
      <section className="py-20">
        <Container>
          <div className="relative mx-auto max-w-2xl rotate-[-0.6deg] rounded-2xl border border-saffron-200 bg-saffron-50 px-7 py-10 shadow-sm sm:px-12">
            <BookOpen className="h-8 w-8 text-teal-600" />
            <p className="mt-4 font-hand text-2xl leading-relaxed text-ink-800 sm:text-3xl">
              {hi
                ? "रोज़ एक टॉपिक, परीक्षा तक। बस इतना ही करना है।"
                : "One topic a day, every day, until the exam. That's the whole trick."}
            </p>
            <p className="mt-3 text-ink-600">
              {hi
                ? "खाता बनाने से आपके टेस्ट और कमज़ोर टॉपिक सहेजे रहते हैं। मुफ़्त है।"
                : "Make an account and your tests and weak topics stay saved. It's free."}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/exams/up/plan">{hi ? "SUPER TET: आज से शुरू करें" : "SUPER TET: start today"}</ButtonLink>
              <ButtonLink href="/exams/bihar-tre/plan" variant="accent">{hi ? "BPSC TRE 4.0: आज से शुरू करें" : "BPSC TRE 4.0: start today"}</ButtonLink>
              <ButtonLink href="/signup" variant="outline">{hi ? "मुफ़्त खाता बनाएँ" : "Create a free account"}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
