import type { ExamPaper } from "@/lib/exams/types";
import type { PlanWeek } from "@/lib/exams/up-plan";
import { upPlan, planTests, UP_EXAM_DATE_ISO, getPlanTest } from "@/lib/exams/up-plan";
import { upExam } from "@/lib/exams/up";
import { otherExams } from "@/lib/exams/others";
import {
  biharPlan15, biharPlans68, biharPlanTests, getBiharPlanTest,
  BIHAR_SUBJECTS, BIHAR_ADVT, allBiharSectionMocks, type BiharSubject,
} from "@/lib/exams/bihar-plan";

/**
 * The "Choose your exam & level" tracks. UP aspirants usually also sit the Bihar
 * TRE, so one chooser covers: SUPER TET (1–5), BPSC TRE 4.0 (1–5) and BPSC TRE 4.0 (6–8).
 * Every track's paper comes straight from the exam guide data, so the plan and
 * the guide never disagree.
 */
export type TrackKey = "up-prt" | "bihar-1-5" | "bihar-6-8";

type Bi = { en: string; hi: string };

export interface PlanTrack {
  key: TrackKey;
  label: Bi;          // "SUPER TET"
  classes: Bi;        // "Classes 1–5"
  exam: Bi;           // "UP Assistant Teacher (UPESSC)"
  posts: Bi;          // "~12,405 posts"
  markChip: string;   // "+3 / −1"
  paper: ExamPaper;
  examDateISO: string | null;
  examDateLabel: Bi;
  guideHref: string;
  planHref: string;
  advertNote: Bi;
  dailyTip: Bi;
  /** Weeks for tracks without subjects; for Bihar 6–8 use `subjects`. */
  weeks?: PlanWeek[];
  subjects?: { key: BiharSubject; label: Bi; posts: number; weeks: PlanWeek[] }[];
}

const bihar = otherExams.find((e) => e.slug === "bihar-tre")!;

export const TRACKS: PlanTrack[] = [
  {
    key: "up-prt",
    label: { en: "SUPER TET", hi: "SUPER TET" },
    classes: { en: "Classes 1–5", hi: "कक्षा 1–5" },
    exam: { en: "UP Assistant Teacher (UPESSC)", hi: "UP सहायक अध्यापक (UPESSC)" },
    posts: { en: "~12,405 posts", hi: "~12,405 पद" },
    markChip: "+3 / −1",
    paper: upExam.detail!.papers[0],
    examDateISO: UP_EXAM_DATE_ISO,
    examDateLabel: { en: "Written exam 3–4 Dec 2026", hi: "लिखित परीक्षा 3–4 दिसंबर 2026" },
    guideHref: "/exams/up",
    planHref: "/exams/up/plan",
    advertNote: {
      en: "UPESSC Advt 05/2026 is for primary Assistant Teachers (classes 1–5) only. Check the section-wise split against the official advertisement.",
      hi: "UPESSC विज्ञापन 05/2026 केवल प्राथमिक सहायक अध्यापक (कक्षा 1–5) के लिए है। खंड-वार संख्या आधिकारिक विज्ञापन से मिलाएँ।",
    },
    dailyTip: { en: "After each week, take both week tests: they cover only that week's topics. Full 120-question papers come in the revision weeks.", hi: "हर सप्ताह के बाद दोनों सप्ताह-टेस्ट दें: इनमें केवल उसी सप्ताह के टॉपिक हैं। पूरे 120-प्रश्न पेपर रिवीज़न सप्ताहों में हैं।" },
    weeks: upPlan,
  },
  {
    key: "bihar-1-5",
    label: { en: "BPSC TRE 4.0", hi: "BPSC TRE 4.0" },
    classes: { en: "Classes 1–5", hi: "कक्षा 1–5" },
    exam: { en: "Bihar School Teacher", hi: "बिहार विद्यालय अध्यापक" },
    posts: { en: "3,847 posts", hi: "3,847 पद" },
    markChip: "+1 / −⅓ · option E",
    paper: bihar.detail!.papers[0],
    examDateISO: null,
    examDateLabel: { en: `Apply ${BIHAR_ADVT.applyWindow} · exam date not yet announced`, hi: "आवेदन 25 सितंबर – 26 अक्टूबर 2026 · परीक्षा तिथि अभी घोषित नहीं" },
    guideHref: "/exams/bihar-tre",
    planHref: "/exams/bihar-tre/plan",
    advertNote: {
      en: "BPSC Advt 15/2026: Part I (language) only needs 30%; merit is on Part II. No pedagogy section. The 120 GS questions' topic split isn't published, so ours is a practice weighting.",
      hi: "BPSC विज्ञापन 15/2026: भाग I (भाषा) में केवल 30% चाहिए; मेरिट भाग II से। शिक्षण-शास्त्र खंड नहीं है। 120 GS प्रश्नों का विषय-वार बँटवारा प्रकाशित नहीं, इसलिए हमारा अभ्यास-अनुपात है।",
    },
    dailyTip: { en: "Never leave a bubble blank: blank costs ⅓, option E costs 0.", hi: "कोई गोला खाली न छोड़ें: खाली पर ⅓ कटता है, विकल्प E पर 0।" },
    weeks: biharPlan15,
  },
  {
    key: "bihar-6-8",
    label: { en: "BPSC TRE 4.0", hi: "BPSC TRE 4.0" },
    classes: { en: "Classes 6–8", hi: "कक्षा 6–8" },
    exam: { en: "Bihar School Teacher", hi: "बिहार विद्यालय अध्यापक" },
    posts: { en: "8,563 posts", hi: "8,563 पद" },
    markChip: "+1 / −⅓ · option E",
    paper: bihar.detail!.papers[1],
    examDateISO: null,
    examDateLabel: { en: `Apply ${BIHAR_ADVT.applyWindow} · exam date not yet announced`, hi: "आवेदन 25 सितंबर – 26 अक्टूबर 2026 · परीक्षा तिथि अभी घोषित नहीं" },
    guideHref: "/exams/bihar-tre",
    planHref: "/exams/bihar-tre/plan?track=bihar-6-8",
    advertNote: {
      en: "BPSC Advt 15/2026: choose ONE subject you passed TET in. Merit is on Parts II + III; Part I only needs 30%. Urdu is offered by BPSC but not on Merit Marg yet.",
      hi: "BPSC विज्ञापन 15/2026: केवल एक विषय चुनें जिसमें TET पास किया हो। मेरिट भाग II + III से; भाग I में केवल 30% चाहिए। उर्दू BPSC में है पर मेरिट मार्ग पर अभी नहीं।",
    },
    dailyTip: { en: "Part III (80 Q) decides most of your merit: give your subject the most time.", hi: "भाग III (80 प्रश्न) से मेरिट का बड़ा हिस्सा बनता है: अपने विषय को सबसे ज़्यादा समय दें।" },
    subjects: BIHAR_SUBJECTS.map((s) => ({ key: s.key, label: { en: s.en, hi: s.hi }, posts: s.posts, weeks: biharPlans68[s.key] })),
  },
];

export function getTrack(key: string | null | undefined): PlanTrack | undefined {
  return TRACKS.find((t) => t.key === key);
}

/** Any plan test, UP or Bihar. */
export function getAnyPlanTest(id: string) {
  return getPlanTest(id) ?? getBiharPlanTest(id);
}

export const allPlanTests = [...planTests, ...biharPlanTests, ...allBiharSectionMocks];

/** Distinct test ids in a set of weeks (for progress counts). */
export function countTests(weeks: PlanWeek[]) {
  const ids = new Set<string>();
  for (const w of weeks) {
    for (const d of w.days) d.testIds.forEach((t) => ids.add(t));
    w.bigTestIds.forEach((t) => ids.add(t));
  }
  return ids.size;
}
