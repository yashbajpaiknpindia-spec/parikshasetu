import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import { ClipboardCheck, ArrowRight, CalendarDays, Clock, Timer, Target, Trophy, Layers, Gift, Lock, FileText } from "lucide-react";
import { Container, Badge, ButtonLink, Callout } from "@/components/ui";
import { ExamTabs } from "@/components/mock/ExamTabs";
import { PYQ_TESTS } from "@/data/pyq-tests";
import { mockTests, categoryLabel, gradeLabel, isMockLive, markLabel, questionCount, type Grade, type MockTest } from "@/lib/mock-engine";
import { getAnyPlanTest, getTrack } from "@/lib/exams/tracks";
import {
  biharSectionMocks15, allBiharSectionMocks, biharFreeMocks15, biharFreeMocks68, BIHAR_SUBJECTS, PART_I_LANGS, withLangId, SS_COMBOS, withSsId,
  BIHAR_SENIOR, seniorSubject, biharSeniorFreeMocks, type BiharSubject, type PartILang, type SsCombo, type SeniorLevel,
} from "@/lib/exams/bihar-plan";
import { PassChip, PaywallUnlessPass, PassActiveNote } from "@/components/pricing/PlanUnlock";
import { FreeMockProgress, TakenTick } from "@/components/mock/FreeMockProgress";
import { PREP_LIST_PRICE, PREP_OFF_PCT } from "@/lib/pricing";
import { PASS_STATS, plusCount } from "@/lib/pass-stats";
import { examMeta, isExamChoice, type ExamChoice } from "@/lib/exam-choice";
import { getExamChoice } from "@/lib/exam-choice-server";
import { exams } from "@/lib/exams/registry";
import { getLang } from "@/lib/i18n-server";
import { getPricingSettings } from "@/lib/pricing-config";
import { isFreeMock } from "@/lib/plan-access";

export const metadata = pageSeo({
  title: "Mock Tests: SUPER TET & BPSC TRE 4.0",
  description: "Full mock tests and section-wise mocks in the real exam pattern: SUPER TET, UP Assistant Teacher (120 Q, +3/−1) and BPSC TRE 4.0 (classes 1–5, 6–8, 9–10 and 11–12, 150 Q, +1/−⅓ with option E). Moderate to tough.",
  path: "/mock-tests",
  keywords: ["SUPER TET mock test", "BPSC TRE 4.0 mock test", "teacher recruitment mock test", "SUPER TET practice test", "BPSC teacher practice test", "UP teacher previous year paper"],
  noIndex: false,
});

const GRADE_TONE: Record<Grade, "green" | "amber" | "saffron"> = { easy: "green", moderate: "amber", tough: "saffron" };
const qCount = (t: MockTest) => questionCount(t);
const retitle = (id: string, title: string, covers?: string): MockTest | null => {
  const t = getAnyPlanTest(id) ?? allBiharSectionMocks.find((x) => x.id === id);
  return t ? { ...t, title, covers: covers ?? t.covers } : null;
};
const upLive = mockTests.filter((t) => t.examSlug === "up" && isMockLive(t) && t.listed !== false);
const comingSoon = exams.filter((e) => e.slug !== "up" && e.slug !== "bihar-tre");

const seniorOf = (exam: ExamChoice): SeniorLevel | null => (exam === "bihar-9-10" ? "9-10" : exam === "bihar-11-12" ? "11-12" : null);

/** Full mocks (real pattern) + section-wise mocks for one exam. */
function papersFor(exam: ExamChoice, subject: string, lang: PartILang, ss: SsCombo) {
  // Papers with a Part I language block switch to the chosen language's version, and
  // Social Science papers to the chosen Section I/II combination.
  const S = (id: string) => (subject === "ss" ? withSsId(id, ss) : id);
  const L = (id: string) => withLangId(id, lang);
  if (exam === "up-prt") {
    // The 10 graded full papers: 1–2 easy, 3–5 moderate, 6–10 tough.
    const full = upLive.filter((t) => t.category === "full");
    const sections = upLive.filter((t) => !isFreeMock(t.id) && (t.category === "subject" || t.category === "mixed"));
    return { demos: upLive.filter((t) => isFreeMock(t.id)), full, sections };
  }
  if (exam === "bihar-1-5") {
    const full = [1, 2, 3, 4, 5].map((i) => retitle(L(`bh15-rev${i}`), `Full Paper 1: Mock ${i} (150 Q)`, "30 language (qualifying) + 120 General Studies · 150 minutes")).filter(Boolean) as MockTest[];
    const sections = biharSectionMocks15.map((t) => (t.id === "bh15-sec-lang" ? allBiharSectionMocks.find((x) => x.id === L(t.id)) ?? t : t));
    return { demos: biharFreeMocks15.filter((t) => isFreeMock(t.id)), full, sections };
  }
  const lv = seniorOf(exam);
  if (lv) {
    const s = seniorSubject(lv, subject)!;
    const pre = BIHAR_SENIOR[lv].prefix;
    const paperNo = lv === "9-10" ? 3 : 4;
    const full = [1, 2, 3, 4].map((i) => retitle(L(S(`${pre}${subject}-rev${i}`)), `Full Paper ${paperNo} · ${s.en}: Mock ${i} (150 Q)`, `30 language (qualifying) + 40 GS + 80 ${s.en} · 150 minutes`)).filter(Boolean) as MockTest[];
    const sections = [L("bh68-sec-lang"), "bh68-sec-gs", S(`${pre}-sec-${subject}`), S(`${pre}-sec-${subject}-2`), S(`${pre}-sec-${subject}-3`)]
      .map((id) => allBiharSectionMocks.find((x) => x.id === id)).filter(Boolean) as MockTest[];
    return { demos: biharSeniorFreeMocks(lv, subject).filter((t) => isFreeMock(t.id)), full, sections };
  }
  const s = BIHAR_SUBJECTS.find((x) => x.key === subject)!;
  const full = [1, 2, 3, 4].map((i) => retitle(L(S(`bh68${subject}-rev${i}`)), `Full Paper 2 · ${s.en}: Mock ${i} (150 Q)`, `30 language (qualifying) + 40 GS + 80 ${s.en} · 150 minutes`)).filter(Boolean) as MockTest[];
  const sections = [L("bh68-sec-lang"), "bh68-sec-gs", S(`bh68-sec-${subject}`), S(`bh68-sec-${subject}-2`), S(`bh68-sec-${subject}-3`)]
    .map((id) => allBiharSectionMocks.find((x) => x.id === id)).filter(Boolean) as MockTest[];
  return { demos: biharFreeMocks68(subject as BiharSubject).filter((t) => isFreeMock(t.id)), full, sections };
}

function MockCard({ t, hi, big }: { t: MockTest; hi: boolean; big?: boolean }) {
  return (
    <Link
      href={`/mock-tests/${t.id}`}
      className={`card card-hover group flex flex-col p-5 ${isFreeMock(t.id) ? "border-teal-300 bg-gradient-to-b from-white to-teal-50/70" : big ? "border-brand-200 bg-gradient-to-b from-white to-brand-50/60" : ""}`}
    >
      <div className="flex flex-wrap items-center gap-1.5">
        {isFreeMock(t.id) ? (
          <>
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-600 px-2 py-0.5 text-[11px] font-bold uppercase text-white">
              <Gift className="h-3 w-3" /> {hi ? "मुफ़्त" : "Free"}
            </span>
            <TakenTick id={t.id} hi={hi} />
          </>
        ) : (
          <PassChip hi={hi} />
        )}
        {t.category && (
          <Badge tone={categoryLabel[t.category].tone}>{hi ? categoryLabel[t.category].hi : categoryLabel[t.category].en}</Badge>
        )}
        {t.grade ? (
          <Badge tone={GRADE_TONE[t.grade]}><Target className="h-3 w-3" /> {hi ? gradeLabel[t.grade].hi : gradeLabel[t.grade].en}</Badge>
        ) : (
          <Badge tone="green"><Target className="h-3 w-3" /> {hi ? "मध्यम–कठिन" : "Moderate–tough"}</Badge>
        )}
      </div>
      <h3 className="mt-3 font-semibold leading-snug text-ink-900">{t.title}</h3>
      {t.covers && <p className="mt-1.5 flex-1 text-sm text-ink-600">{t.covers}</p>}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-ink-100 pt-3 text-xs text-ink-600">
        <span className="inline-flex items-center gap-3">
          <span className="inline-flex items-center gap-1"><ClipboardCheck className="h-3.5 w-3.5 text-brand-600" /> {qCount(t)} Q</span>
          <span className="inline-flex items-center gap-1"><Timer className="h-3.5 w-3.5 text-brand-600" /> {t.durationMin} {hi ? "मिनट" : "min"}</span>
          <span className="font-medium">{markLabel(t)}</span>
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-brand-700 group-hover:underline">
          {hi ? "शुरू करें" : "Start"} <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

export default async function MockTestsPage({ searchParams }: PageProps<"/mock-tests">) {
  const hi = (await getLang()) === "hi";
  const sp = await searchParams;
  const qExam = typeof sp.exam === "string" ? sp.exam : undefined;
  const exam: ExamChoice = isExamChoice(qExam) ? qExam : (await getExamChoice()) ?? "up-prt";
  const senior = seniorOf(exam);
  // The subject picker (Part III) for Classes 6–8 and above; "soon" subjects aren't clickable.
  const subjects: { key: string; en: string; hi: string; posts: number }[] | null =
    exam === "bihar-6-8" ? BIHAR_SUBJECTS : senior ? BIHAR_SENIOR[senior].subjects : null;
  const subjectsSoon = senior ? BIHAR_SENIOR[senior].soon : [];
  const qSub = typeof sp.subject === "string" ? sp.subject : "";
  const subject = subjects?.find((s) => s.key === qSub)?.key ?? subjects?.[0].key ?? "ms";
  const hasSs = subject === "ss" && (exam === "bihar-6-8" || exam === "bihar-9-10");
  const qLang = typeof sp.lang === "string" ? sp.lang : "hi";
  const lang: PartILang = PART_I_LANGS.find((l) => l.code === qLang)?.key ?? "hindi";
  const langCode = PART_I_LANGS.find((l) => l.key === lang)!.code;
  const qSs = typeof sp.ss === "string" ? sp.ss : "hg";
  const ss: SsCombo = SS_COMBOS.find((c) => c.key === qSs)?.key ?? "hg";

  const meta = examMeta(exam);
  const track = getTrack(exam)!;
  const paper = track.paper;
  const { demos, full, sections } = papersFor(exam, subject, lang, ss);
  const { prepPrice } = await getPricingSettings();
  const isBihar = exam !== "up-prt";

  return (
    <>
      <section className="hero-gradient">
        <Container className="py-12">
          <h1 className="max-w-3xl text-3xl font-extrabold text-ink-900 sm:text-5xl">
            {hi ? "असली पैटर्न के मॉक टेस्ट" : "Mock tests in the real exam pattern"}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-ink-600 sm:text-lg">
            {hi
              ? "पहले पूरा पेपर देकर देखें आप कहाँ हैं, फिर कमज़ोर खंड का मॉक दें। मध्यम से कठिन प्रश्न, हर प्रश्न हिंदी और अंग्रेज़ी में।"
              : "Take a full paper to see where you stand, then drill your weakest section. Moderate to tough questions, every one in Hindi and English."}
          </p>
          <div className="mt-6">
            <ExamTabs active={exam} hi={hi} />
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          {/* ------------------------------------------------ The paper */}
          <div className="rounded-2xl border border-ink-200 bg-white p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-bold text-ink-900">
                {hi ? meta.exam.hi : meta.exam.en} <span className="font-normal text-ink-500">· {hi ? meta.classes.hi : meta.classes.en}</span>
              </h2>
              <span className="text-sm font-semibold text-brand-700">
                {paper.totalQuestions} Q · {paper.totalMarks} {hi ? "अंक" : "marks"} · {paper.durationMin} {hi ? "मिनट" : "min"} · {track.markChip}
              </span>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs">
              {paper.sections.map((sec, i) => (
                <li key={sec.name} className="rounded-full bg-ink-50 px-3 py-1 text-ink-700 ring-1 ring-ink-200">
                  <span className="text-ink-400">{i + 1}.</span> {sec.name.replace(/: .*$/, "").replace(/ \(.*\)$/, "")} <strong className="text-ink-900">{sec.questions}</strong>
                </li>
              ))}
            </ul>
            {isBihar && (
              <p className="mt-3 text-xs text-ink-600">
                {hi
                  ? "हर प्रश्न में विकल्प E (प्रश्न का प्रयास नहीं): E पर 0 अंक, पर खाली छोड़ने पर भी ⅓ कटता है, ठीक BPSC की तरह।"
                  : "Every question has option E (not attempting): E scores 0, but a blank also loses ⅓, exactly like BPSC."}
              </p>
            )}
          </div>

          {/* ------------------------------------------------ Subject picker (Bihar 6–8 and above) */}
          {subjects && (
            <div className="mt-6">
              <p className="text-sm font-semibold text-ink-800">{hi ? "आपका विषय (भाग III)" : "Your subject (Part III)"}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {subjects.map((s) => (
                  <Link
                    key={s.key}
                    href={`/mock-tests?exam=${exam}&subject=${s.key}&lang=${langCode}`}
                    scroll={false}
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${s.key === subject ? "border-teal-600 bg-teal-600 text-white" : "border-ink-300 text-ink-700 hover:border-teal-400"}`}
                  >
                    {hi ? s.hi : s.en}
                  </Link>
                ))}
              </div>
              {subjectsSoon.length > 0 && (
                <p className="mt-2 text-xs leading-relaxed text-ink-500">
                  <span className="font-semibold text-ink-600">
                    {subjectsSoon.every((s) => s.key === "later")
                      ? (hi ? "BPSC इन विषयों के पद बाद में घोषित करेगा (तब यहाँ जुड़ेंगे): " : "BPSC will announce posts for these later (we'll add them then): ")
                      : (hi ? "जल्द आ रहे विषय: " : "Coming soon: ")}
                  </span>
                  {subjectsSoon.map((s) => (hi ? s.hi : s.en)).join(" · ")}
                </p>
              )}
              {senior && (
                <p className="mt-1.5 text-xs text-ink-500">
                  {hi
                    ? `कक्षा ${senior.replace("-", "–")}: ${BIHAR_SENIOR[senior].posts.toLocaleString("en-IN")} पद। जिन विषयों के पद घोषित हैं, वे सभी यहाँ हैं।`
                    : `Classes ${senior.replace("-", "–")}: ${BIHAR_SENIOR[senior].posts.toLocaleString("en-IN")} posts. Every subject with announced posts is here.`}
                </p>
              )}
            </div>
          )}

          {/* ------------------------------------------------ Social Science Section I/II (BPSC 6–8, 9–10) */}
          {hasSs && (
            <div className="mt-6">
              <p className="text-sm font-semibold text-ink-800">
                {hi ? "सामाजिक विज्ञान: खंड I + खंड II का चयन" : "Social Science: your Section I + Section II"}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {SS_COMBOS.map((c) => (
                  <Link
                    key={c.key}
                    href={`/mock-tests?exam=${exam}&subject=ss&ss=${c.key}&lang=${langCode}`}
                    scroll={false}
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${c.key === ss ? "border-teal-600 bg-teal-600 text-white" : "border-ink-300 text-ink-700 hover:border-teal-400"}`}
                  >
                    {hi ? c.hi : c.en}
                  </Link>
                ))}
              </div>
              <p className="mt-1.5 text-xs text-ink-500">
                {hi
                  ? "BPSC नियम: खंड I में इतिहास या भूगोल; इतिहास चुनें तो खंड II में भूगोल/अर्थशास्त्र/राजनीति शास्त्र, भूगोल चुनें तो अर्थशास्त्र/राजनीति शास्त्र। दोनों खंडों में 40-40 प्रश्न हमारा अभ्यास-अनुपात है (आधिकारिक बँटवारा प्रकाशित नहीं)।"
                  : "BPSC rule: Section I is History or Geography; with History, Section II is Geography, Economics or Political Science; with Geography, it is Economics or Political Science. 40 + 40 questions is our practice split (the official split isn't published)."}
              </p>
            </div>
          )}

          {/* ------------------------------------------------ Part I language picker (BPSC) */}
          {isBihar && (
            <div className="mt-6">
              <p className="text-sm font-semibold text-ink-800">
                {hi ? "भाग I की भाषा (अंग्रेज़ी के साथ)" : "Your Part I language (with English)"}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {PART_I_LANGS.map((l) => (
                  <Link
                    key={l.key}
                    href={`/mock-tests?exam=${exam}${subjects ? `&subject=${subject}${hasSs ? `&ss=${ss}` : ""}` : ""}&lang=${l.code}`}
                    scroll={false}
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${l.key === lang ? "border-brand-600 bg-brand-600 text-white" : "border-ink-300 text-ink-700 hover:border-brand-400"}`}
                  >
                    {hi ? l.hi : l.en}
                  </Link>
                ))}
              </div>
              <p className="mt-1.5 text-xs text-ink-500">
                {hi ? "पूर्ण पेपर और भाग I का मॉक आपकी चुनी भाषा में बदल जाते हैं।" : "The full papers and the Part I mock switch to the language you pick."}
              </p>
            </div>
          )}

          {/* ------------------------------------------------ The two approved free full mocks */}
          <div className="mt-8 rounded-2xl border-2 border-teal-300 bg-teal-50/50 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="flex items-center gap-2 text-xl font-bold text-ink-900 sm:text-2xl">
                  <Gift className="h-6 w-6 shrink-0 text-teal-600" /> {hi ? `आपके ${demos.length} मुफ़्त पूर्ण मॉक` : `Your ${demos.length} free full mocks`}
                </h2>
                <p className="mt-1 text-sm text-ink-600">
                  {hi
                    ? "दोनों मुफ़्त मॉक पूरे 120-प्रश्न वाले पेपर हैं, असली पैटर्न और अंकन के साथ। कोई साइन-अप नहीं।"
                    : "Both free mocks are complete 120-question papers in the real pattern and marking. No sign-up needed."}
                </p>
              </div>
              <FreeMockProgress ids={demos.map((t) => t.id)} hi={hi} className="sm:w-64" />
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {demos.map((t) => <MockCard key={t.id} t={t} hi={hi} />)}
              {/* The next mock: the moment the paywall starts */}
              <Link
                href="/pricing"
                className="group flex flex-col justify-between rounded-2xl bg-[#0a1329] p-5 text-white shadow-md transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-saffron-400 px-2 py-0.5 text-[11px] font-bold uppercase text-ink-900">
                    <Lock className="h-3 w-3" /> <s className="opacity-60">₹{PREP_LIST_PRICE}</s> ₹{prepPrice} · {PREP_OFF_PCT}% {hi ? "छूट" : "off"}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{hi ? `मॉक ${demos.length + 1} से आगे` : `Mock ${demos.length + 1} onwards`}</h3>
                  <p className="mt-1.5 text-sm text-white/80">
                    {hi
                      ? `${full.length} पूर्ण पेपर, ${sections.length} खंड-वार मॉक और पूरी दिन-प्रतिदिन योजना। कुल ${plusCount(PASS_STATS.totalTests)} टेस्ट।`
                      : `${full.length} full papers, ${sections.length} section-wise mocks and the whole day-by-day plan. ${plusCount(PASS_STATS.totalTests)} tests in all.`}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-saffron-300 group-hover:underline">
                  {hi ? `सब ₹${prepPrice} में खोलें (सीमित समय)` : `Unlock all for ₹${prepPrice} (limited period)`} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          <PassActiveNote hi={hi} className="mt-8" />

          {/* ------------------------------------------------ Full mocks */}
          <div className="mt-8">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
                <Trophy className="h-6 w-6 text-saffron-600" /> {hi ? "पूर्ण मॉक टेस्ट" : "Full mock tests"}
              </h2>
              <span className="text-sm text-ink-500">
                {full.length} · {paper.totalQuestions} Q · {paper.durationMin} {hi ? "मिनट" : "min"}
              </span>
            </div>
            <p className="mt-1 text-sm text-ink-600">
              {hi ? "पूरा पेपर, असली खंड-अनुपात, समय और अंकन के साथ। परीक्षा के दिन जैसा अभ्यास।" : "The whole paper in the real section split, timing and marking. Exam-day practice."}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {full.map((t) => <MockCard key={t.id} t={t} hi={hi} big />)}
            </div>
          </div>

          {/* ------------------------------------------------ Previous-year papers, online (UP) */}
          {exam === "up-prt" && PYQ_TESTS.length > 0 && (
            <div className="mt-12">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
                  <FileText className="h-6 w-6 text-brand-600" /> {hi ? "पिछले वर्षों के पेपर, ऑनलाइन" : "Previous-year papers, online"}
                </h2>
                <Link href="/pyq" className="text-sm font-semibold text-brand-700 hover:underline">{hi ? "सभी PDF देखें →" : "All PDFs →"}</Link>
              </div>
              <p className="mt-1 text-sm text-ink-600">
                {hi ? "असली पेपर, असली समय। हर प्रश्न पर सही/गलत, व्याख्या और पूरा विश्लेषण।" : "The real paper, the real time limit. Right/wrong on every question, the explanation and the full analysis."}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PYQ_TESTS.map((t) => <MockCard key={t.id} t={t} hi={hi} big />)}
              </div>
            </div>
          )}

          {/* ------------------------------------------------ Section-wise */}
          <div className="mt-12">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
                <Layers className="h-6 w-6 text-teal-600" /> {hi ? "खंड-वार मॉक" : "Section-wise mocks"}
              </h2>
              <span className="text-sm text-ink-500">{sections.length} · {hi ? "एक प्रश्न, एक मिनट" : "one question a minute"}</span>
            </div>
            <p className="mt-1 text-sm text-ink-600">
              {hi ? "पूर्ण मॉक में जो खंड कमज़ोर निकला, उसी का अभ्यास करें।" : "Drill the section your full mock showed was weakest."}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((t) => <MockCard key={t.id} t={t} hi={hi} />)}
            </div>
          </div>

          <div id="unlock" className="mx-auto mt-12 max-w-xl scroll-mt-24">
            <PaywallUnlessPass hi={hi} />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------ The plan (the fix) */}
      <section className="bg-gradient-to-br from-brand-800 via-brand-700 to-teal-700 py-14 text-white">
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="font-hand text-2xl text-saffron-300">
                {hi ? "मॉक में अंक कम आए? यही तो पता करना था।" : "Scored lower than you hoped? That's what the mock is for."}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold">
                {hi ? `अब सुधार: ${meta.title.hi} की दिन-प्रतिदिन योजना` : `Now fix it: the ${meta.title.en} day-by-day plan`}
              </h2>
              <p className="mt-3 text-brand-100">
                {hi
                  ? "रोज़ एक टॉपिक, हर टॉपिक पर मध्यम और कठिन सेट, हर हफ़्ते उसी हफ़्ते के टॉपिक पर दो टेस्ट, अंत में पूर्ण पेपर व रिवीज़न। मॉक बताता है आप कहाँ हैं; योजना बताती है आज क्या पढ़ें।"
                  : "One topic a day, a moderate and a tough set per topic, two tests on each week's topics, full papers in revision. The mock tells you where you stand; the plan tells you what to study today."}
              </p>
            </div>
            <ButtonLink href={subjects ? `${meta.planHref}&subject=${subject}` : meta.planHref} variant="accent" size="lg">
              <CalendarDays className="h-4 w-4" /> {hi ? "योजना खोलें" : "Open the plan"}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-bold text-ink-900">{hi ? "अन्य परीक्षाएँ" : "Other exams"}</h2>
            <Badge tone="amber"><Clock className="h-3 w-3" /> {hi ? "मॉक टेस्ट जल्द आ रहे हैं" : "Mock tests coming soon"}</Badge>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoon.map((e) => (
              <Link key={e.slug} href={e.hubHref} className="card card-hover flex min-w-0 items-center justify-between gap-3 p-4">
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink-900">{e.name}</span>
                  <span className="mt-0.5 block text-xs text-ink-500">{hi ? "मॉक: जल्द · गाइड व पैटर्न देखें" : "Mocks: coming soon · view guide & pattern"}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-ink-400" />
              </Link>
            ))}
          </div>

          <Callout tone="amber" title={hi ? "प्रश्नों के बारे में" : "About these questions"} className="mt-12 max-w-3xl">
            {hi
              ? "ये पिछले वर्षों के पैटर्न पर बने मूल अभ्यास प्रश्न हैं, आधिकारिक प्रश्न-पत्र नहीं। पैटर्न आधिकारिक विज्ञापन से मिलाएँ: "
              : "These are original practice questions modelled on previous papers, not official past papers. Check the pattern against the official advertisement: "}
            <a href="https://upessc.up.gov.in/Home/Advertisment" target="_blank" rel="noopener noreferrer" className="underline">UPESSC Advt 05/2026</a>
            {" · "}
            <a href="https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-152026-TRE-4.0_BPSC-20260922-dbsf04.pdf" target="_blank" rel="noopener noreferrer" className="underline">BPSC Advt 15/2026</a>.
          </Callout>
        </Container>
      </section>
    </>
  );
}
