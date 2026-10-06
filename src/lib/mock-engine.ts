import {
  questionBank,
  questionLevel,
  sectionLabels,
  CA_TOPICS,
  CA_NATIONAL,
  CA_UP,
  GK_CULTURE,
  GK_AWARDS,
  HINDI_PROSE,
  HINDI_POEM,
  EN_COMPREHENSION,
  SA_COMPREHENSION,
  matchesLevel,
  type Difficulty,
  type ExamLevel,
  type Level,
  type Question,
  type Section,
} from "@/data/questions";
import { questionHi } from "@/data/question-hi";
import { PASSAGES } from "@/data/passages";
import { FULL_PAPER } from "@/lib/exams/up-plan";
import { FREE_MINI_MOCKS } from "@/lib/pricing";

/**
 * A slice of a paper. Historically this filtered by `section` only, which is
 * why "topic" tests drew random section questions and repeated across tests.
 * A part can now also pin an exact `topic` (or a set of `topics`) and a `level`,
 * so a Sandhi / Beginner test draws only Sandhi / Beginner questions.
 */
export interface BlueprintPart {
  section: Section;
  count: number;
  topic?: string;
  topics?: string[];
  /** Topics to keep OUT of a section-wide draw (e.g. so a Samas test does not
   *  pull the dedicated Sandhi bank). Ignored when `topic`/`topics` is set. */
  excludeTopics?: string[];
  level?: Level;
  /** Restrict to a UPESSC exam level. Shared (untagged) questions always match. */
  examLevel?: ExamLevel;
  /** Several levels at once (e.g. BPSC 9–10 Social Science draws the 6–8 and 9–10 banks).
   *  Overrides `examLevel`. Parts naming a senior level (l3/l4) skip untagged questions. */
  examLevels?: ExamLevel[];
  /** Only these difficulties (e.g. ["hard"] for exam-level mocks). */
  difficulty?: Difficulty[];
  /** Prefer this difficulty first; if the pool is short, top up from the other allowed difficulties. */
  prefer?: Difficulty;
  /** Marks a block that a paper variant may swap out (BPSC Part I second language). */
  tag?: "part1-lang";
}

export interface MockTest {
  id: string;
  examSlug: string; // which exam this belongs to ("kvs", "up", ...)
  examName: string;
  title: string;
  description: string;
  post: string;
  cycle: string;
  tier: string;
  free: boolean;
  durationMin: number;
  markPerCorrect: number;
  negativeMark: number; // stored as a negative number, e.g. -1
  blueprint: BlueprintPart[];
  seed?: number; // makes distinct tests draw different subsets from the bank
  cutoffPct?: number; // "exam-ready" target as a fraction of max (default 0.6)
  category?: "topic" | "subject" | "mixed" | "full"; // what the mock covers
  level?: Level; // beginner / proficient, for topic practice sets
  examLevel?: ExamLevel; // l1 (Primary) / l2 (Upper Primary)
  /** false = still reachable by URL (old attempts keep working) but not listed. */
  listed?: boolean;
  /** One line on what the paper covers, shown on the listing card. */
  covers?: string;
  /** Part of the day-by-day plan (topic sets, week tests) rather than the mock-tests page. */
  requiresPlan?: boolean;
  /** FREE for everyone: the two designated free mock tests. Every other
   *  test needs the paid Prep Pass (see src/lib/plan-access.ts · isPaidTest). */
  demo?: boolean;
  /** Difficulty grade shown on a mock card. */
  grade?: Grade;
  /** Tests sharing a series are composed together, in order, without repeating questions. */
  series?: string;
  /** A fixed previous-year paper whose questions are held server-side. */
  pyq?: string;
  /** Question count for fixed papers whose blueprint is empty. */
  fixedCount?: number;
  /** Answer-key/source note shown on the test intro/results surfaces. */
  keyNote?: { en: string; hi: string };
  /** BPSC TRE 4.0 style: a 5th option "E, not attempting" that scores 0. */
  optionE?: boolean;
  /** BPSC TRE 4.0 style: a question left completely blank is penalised like a wrong answer. */
  blankPenalty?: boolean;
}

export type Grade = "easy" | "moderate" | "tough";
export const gradeLabel: Record<Grade, { en: string; hi: string }> = {
  easy: { en: "Easy", hi: "आसान" },
  moderate: { en: "Moderate", hi: "मध्यम" },
  tough: { en: "Tough", hi: "कठिन" },
};

/** Number of questions shown by a test, including fixed previous-year papers. */
export const questionCount = (t: Pick<MockTest, "blueprint" | "fixedCount">) =>
  t.fixedCount ?? t.blueprint.reduce((a, p) => a + p.count, 0);

/** Answer value meaning "E, not attempting" (only on tests with `optionE`). */
export const OPTION_E = -1;

/** "+3 / −1", "+1 / −⅓", "+1", human marking label. */
export function markLabel(t: Pick<MockTest, "markPerCorrect" | "negativeMark">) {
  const n = Math.abs(t.negativeMark);
  if (!n) return `+${t.markPerCorrect}`;
  const frac = Math.abs(n - 1 / 3) < 1e-6 ? "⅓" : Math.abs(n - 0.25) < 1e-6 ? "¼" : String(n);
  return `+${t.markPerCorrect} / −${frac}`;
}

/** Human labels for the mock category (EN / HI). */
export const categoryLabel: Record<
  "topic" | "subject" | "mixed" | "full",
  { en: string; hi: string; tone: "slate" | "brand" | "saffron" }
> = {
  topic: { en: "Topic test", hi: "टॉपिक टेस्ट", tone: "slate" },
  subject: { en: "Subject test", hi: "विषय टेस्ट", tone: "brand" },
  mixed: { en: "Mixed paper", hi: "मिश्रित पेपर", tone: "saffron" },
  full: { en: "Full mock", hi: "पूर्ण मॉक", tone: "saffron" },
};

/**
 * Exam-level UPESSC mocks: short (20 min) subject papers at the pace of the real
 * exam (120 Q in 120 min = 1 min a question), drawn ONLY from hard, PYQ-styled
 * questions. They show where you stand; the day-by-day plan is how you improve.
 */
const HARD: Difficulty[] = ["hard"];
const UPGK_POOL: Difficulty[] = ["hard", "medium"]; // UP-GK has few "hard" items
let examMockSeed = 500;
function examMock(
  id: string, examLevel: ExamLevel, title: string, covers: string,
  blueprint: BlueprintPart[], durationMin = 20, category: MockTest["category"] = "subject",
): MockTest {
  const n = blueprint.reduce((a, p) => a + p.count, 0);
  return {
    id, examSlug: "up", examName: "SUPER TET (UP Assistant Teacher)",
    title, covers,
    description: `${n} exam-level questions in ${durationMin} minutes, the same one-minute-a-question pace as the real paper. +3 / −1.`,
    post: "Assistant Teacher (PRT)",
    cycle: "2026", tier: "Exam level", category, free: true,
    durationMin, markPerCorrect: 3, negativeMark: -1, examLevel,
    blueprint: blueprint.map((p) => ({ difficulty: p.section === "up-gk" ? UPGK_POOL : HARD, examLevel, ...p })),
    seed: ++examMockSeed, cutoffPct: 0.6,
  };
}

// Quarter-size paper in the exact 10-section proportions of the real exam (120 → 30).
const MIXED_30: BlueprintPart[] = [
  // GK 6 (official split): 2 national + 1 UP current affairs, 1 culture & art, 1 awards/sports/books, 1 UP static
  { section: "gk", count: 2, topic: CA_NATIONAL, difficulty: ["medium", "hard"] as Difficulty[] }, { section: "up-gk", count: 1, topic: CA_UP, difficulty: ["medium", "hard"] as Difficulty[] },
  { section: "gk", count: 1, topic: GK_CULTURE, difficulty: ["medium", "hard"] as Difficulty[] }, { section: "gk", count: 1, topic: GK_AWARDS, difficulty: ["medium", "hard"] as Difficulty[] },
  { section: "up-gk", count: 1, excludeTopics: CA_TOPICS },
  // Language 8: Hindi grammar 2 + one Hindi unseen passage (3), Sanskrit 1, English 2
  { section: "hindi", count: 2 }, { section: "hindi", count: 3, topic: HINDI_PROSE, difficulty: ["medium", "hard"] as Difficulty[] }, { section: "sanskrit", count: 1 }, { section: "english", count: 2 },
  { section: "numerical", count: 4 },                                                                     // Maths 4
  { section: "science", count: 2, topics: ["Physics", "Chemistry", "Biology"] },                          // Science 2
  { section: "science", count: 1, topic: "Environmental science" },
  { section: "gk", count: 1, topics: ["History", "Geography", "Polity"] },                                // EVS & Social 2
  { section: "pedagogy", count: 2, topics: ["Teaching methods", "Assessment & inclusion", "Educational policy"] }, // Teaching 2
  { section: "pedagogy", count: 2, topics: ["Child development", "Learning theories"] },                   // Child psych 2
  { section: "reasoning", count: 1 }, { section: "computer", count: 1 },                                  // Reasoning 1 · ICT 1
  { section: "pedagogy", count: 2, topic: "Life skills & ethics" },                                       // Life skills 2
];

/** 20-question mini paper in the exact 10-section proportions (120 → 20). */
const FREE_20: BlueprintPart[] = [
  // GK 4 (official split): national + UP current affairs, culture & art, awards/sports/books
  { section: "gk", count: 1, topic: CA_NATIONAL, difficulty: ["medium", "hard"] as Difficulty[] }, { section: "up-gk", count: 1, topic: CA_UP, difficulty: ["medium", "hard"] as Difficulty[] },
  { section: "gk", count: 1, topic: GK_CULTURE, difficulty: ["medium", "hard"] as Difficulty[] }, { section: "gk", count: 1, topic: GK_AWARDS, difficulty: ["medium", "hard"] as Difficulty[] },
  { section: "hindi", count: 3 }, { section: "sanskrit", count: 1 }, { section: "english", count: 1 },    // Language 5
  { section: "numerical", count: 3 },                                                                     // Maths 3
  { section: "science", count: 1, topics: ["Physics", "Chemistry", "Biology"] },                          // Science 1
  { section: "science", count: 1, topic: "Environmental science" },                                       // EVS & Social 2
  { section: "gk", count: 1, topics: ["History", "Geography", "Polity"] },
  { section: "pedagogy", count: 1, topics: ["Teaching methods", "Assessment & inclusion", "Educational policy"] }, // Teaching 1
  { section: "pedagogy", count: 1, topics: ["Child development", "Learning theories"] },                   // Child psych 1
  { section: "reasoning", count: 1 }, { section: "computer", count: 1 },                                  // Reasoning 1 · ICT 1
  { section: "pedagogy", count: 1, topic: "Life skills & ethics" },                                       // Life skills 1
];

/** 20-question SUPER TET mini mocks. Only the first FREE_MINI_MOCKS are free; the
 * rest stay defined (old links and attempts keep working) but are paid and unlisted. */
const upMiniMocks: MockTest[] = Array.from({ length: 10 }, (_, i) => ({
  ...examMock(`up-free-${i + 1}`, "l1", `Free Mock ${i + 1}`, "20 questions from all 10 sections of the real paper",
    FREE_20, 20, "mixed"),
  ...(i < FREE_MINI_MOCKS ? { demo: true } : { listed: false }),
}));
/** The free SUPER TET mini mocks (listed on the mock-tests page). */
export const upFreeMocks: MockTest[] = upMiniMocks.filter((t) => t.demo);

/** Assistant Teacher (PRT) mocks, one per section of the written exam, then mixed
 *  and full papers in the exact exam proportions. All exam-level (hard) questions. */
export const examLevelMocks: MockTest[] = [
  ...upMiniMocks,
  // ---- section-wise (20 Q · 20 min)
  // FREE: one section-wise mock, so people can try the real thing before paying.
  { ...examMock("up-mock-l1-gk", "l1", "GK & Current Affairs", "Section 1 · 25 Q in the exam: current affairs (India, world, UP), culture & art, awards, sports and books",
    [{ section: "gk", count: 6, topic: CA_NATIONAL, difficulty: ["medium", "hard"] as Difficulty[] }, { section: "up-gk", count: 4, topic: CA_UP, difficulty: ["medium", "hard"] as Difficulty[] },
     { section: "gk", count: 4, topic: GK_CULTURE, difficulty: ["medium", "hard"] as Difficulty[] }, { section: "gk", count: 4, topic: GK_AWARDS, difficulty: ["medium", "hard"] as Difficulty[] },
     { section: "gk", count: 1, excludeTopics: [...CA_TOPICS, GK_CULTURE, GK_AWARDS] }, { section: "up-gk", count: 1, excludeTopics: CA_TOPICS }]), demo: true },
  examMock("up-mock-l1-upgk", "l1", "UP-specific GK", "Part of Section 1: districts, rivers, heritage, ODOP, polity & symbols of UP, plus UP current affairs",
    [{ section: "up-gk", count: 16, excludeTopics: CA_TOPICS }, { section: "up-gk", count: 4, topic: CA_UP, difficulty: ["medium", "hard"] as Difficulty[] }]),
  examMock("up-mock-l1-hindi", "l1", "भाषा: हिंदी (Hindi)", "Section 2 · Language 30 Q: संधि, समास, अलंकार-रस, शब्द-भंडार, मुहावरे, वर्तनी, अपठित गद्यांश व पद्यांश",
    [{ section: "hindi", count: 14 }, { section: "hindi", count: 3, topic: HINDI_PROSE, difficulty: ["medium", "hard"] as Difficulty[] }, { section: "hindi", count: 3, topic: HINDI_POEM, difficulty: ["medium", "hard"] as Difficulty[] }]),
  examMock("up-mock-l1-sa-en", "l1", "भाषा: Sanskrit & English", "Section 2 · Language 30 Q: संस्कृत व्याकरण व अपठित + English grammar, vocabulary & comprehension",
    [{ section: "sanskrit", count: 5 }, { section: "sanskrit", count: 3, topic: SA_COMPREHENSION, difficulty: ["medium", "hard"] as Difficulty[] },
     { section: "english", count: 9 }, { section: "english", count: 3, topic: EN_COMPREHENSION, difficulty: ["medium", "hard"] as Difficulty[] }]),
  examMock("up-mock-l1-maths", "l1", "Mathematics", "Section 3 · 16 Q: number system, percentage, profit-loss, interest, time-work, geometry, DI",
    [{ section: "numerical", count: 20 }]),
  examMock("up-mock-l1-science", "l1", "Science", "Section 4 · 8 Q: physics, chemistry, biology",
    [{ section: "science", count: 20, topics: ["Physics", "Chemistry", "Biology"] }]),
  examMock("up-mock-l1-evs", "l1", "EVS & Social Studies", "Section 5 · 8 Q: environment, history, geography, civics",
    [{ section: "science", count: 8, topic: "Environmental science" }, { section: "gk", count: 12, topics: ["History", "Geography", "Polity", "Economy"] }]),
  examMock("up-mock-l1-pedagogy", "l1", "Teaching Skills / Pedagogy", "Section 6 · 8 Q: methods, TLM, assessment & CCE, NEP 2020, NCF, RTE",
    [{ section: "pedagogy", count: 20, topics: ["Teaching methods", "Assessment & inclusion", "Educational policy"] }]),
  examMock("up-mock-l1-child-psych", "l1", "Child Psychology / Development", "Section 7 · 8 Q: Piaget, Vygotsky, Kohlberg, learning theories, motivation",
    [{ section: "pedagogy", count: 20, topics: ["Child development", "Learning theories"] }]),
  examMock("up-mock-l1-life-skills", "l1", "Life Skills, Management & Attitude", "Section 10 · 8 Q: life skills, teacher ethics & values, management",
    [{ section: "pedagogy", count: 20, topic: "Life skills & ethics" }]),
  examMock("up-mock-l1-reasoning-ict", "l1", "Logical Reasoning & ICT", "Sections 8–9 · 5 + 4 Q: series, coding, directions, puzzles + computer basics",
    [{ section: "reasoning", count: 11 }, { section: "computer", count: 9 }]),
  // ---- mixed (30 Q · 30 min, exact exam proportions)
  examMock("up-mock-l1-mixed", "l1", "Mixed Paper 1 (all 10 sections)", "A quarter-size paper in the real section split",
    MIXED_30, 30, "mixed"),
  examMock("up-mock-l1-mixed-2", "l1", "Mixed Paper 2 (all 10 sections)", "A second quarter-size paper, different questions",
    MIXED_30, 30, "mixed"),
  // ---- full (120 Q · 120 min, the real paper), 10 graded papers
  ...upFullPapers(),
];

/**
 * Ten SUPER TET full papers with a deliberate difficulty climb. Papers 1–2 are easy,
 * 3–5 moderate, 6–10 tough; they form a single series so a question used in an earlier
 * paper is not reused in a later one. Access remains governed by the application's
 * Paper 1 is the free full mock; every other full paper requires the Prep Pass.
 */
function upFullPapers(): MockTest[] {
  const gradeOf = (n: number): Grade => (n <= 2 ? "easy" : n <= 5 ? "moderate" : "tough");
  const pool: Record<Grade, { difficulty: Difficulty[]; prefer?: Difficulty }> = {
    easy: { difficulty: ["easy", "medium"], prefer: "easy" },
    moderate: { difficulty: ["medium"] },
    tough: { difficulty: ["hard"] },
  };
  const covers: Record<Grade, string> = {
    easy: "Warm-up level: easier questions in the real 10-section split. 120 Q, 360 marks, 120 minutes",
    moderate: "Moderate level: the standard of a typical SUPER TET paper. 120 Q, 360 marks, 120 minutes",
    tough: "Tough level: only the hardest, PYQ-style questions. 120 Q, 360 marks, 120 minutes",
  };
  return Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    const grade = gradeOf(n);
    const base = examMock(`up-mock-l1-full-${n}`, "l1", `Full Exam Paper ${n} (120 Q)`, covers[grade], FULL_PAPER, 120, "full");
    return {
      ...base,
      description: `120 questions in 120 minutes, the real paper's pace and marking (+3 / −1). Level: ${gradeLabel[grade].en.toLowerCase()}. No question repeats across the 10 full papers.`,
      blueprint: base.blueprint.map((p) => ({ ...p, ...pool[grade] })),
      grade,
      series: "up-full",
      cutoffPct: grade === "easy" ? 0.7 : 0.6,
      ...(n === 1 ? { demo: true } : {}),
    };
  });
}

export const mockTests: MockTest[] = [
  ...examLevelMocks,
  // ---------------------------------------------------------- UP (priority)
  {
    id: "up-diagnostic",
    listed: false, // replaced by the exam-level mocks below
    examSlug: "up",
    examName: "SUPER TET (UP Assistant Teacher)",
    title: "UPESSC Assistant Teacher: Free Diagnostic",
    description:
      "A quick cross-section of the UPESSC Assistant Teacher paper (UP-GK, language, maths, reasoning, pedagogy). Uses the 2026 marking (+3, −1) so you feel the negative-marking pressure.",
    post: "Assistant Teacher",
    cycle: "2026",
    tier: "Exam pattern",
    category: "full",
    free: true,
    durationMin: 20,
    markPerCorrect: 3,
    negativeMark: -1,
    blueprint: [
      { section: "up-gk", count: 4 , excludeTopics: CA_TOPICS },
      { section: "hindi", count: 3 },
      { section: "english", count: 2 },
      { section: "numerical", count: 3 },
      { section: "reasoning", count: 2 },
      { section: "pedagogy", count: 3 },
      { section: "computer", count: 1 },
    ],
  },
  {
    id: "up-gk-sprint",
    listed: false, // replaced by the exam-level mocks below
    examSlug: "up",
    examName: "SUPER TET (UP Assistant Teacher)",
    title: "UPESSC: UP General Knowledge Sprint",
    description:
      "UP-specific GK is the biggest differentiator in the UPESSC Assistant Teacher exam: districts, rivers, heritage, schemes. Drill it here with the 2026 marking (+3, −1).",
    post: "Assistant Teacher",
    cycle: "2026",
    tier: "UP-GK focus",
    category: "subject",
    free: true,
    durationMin: 12,
    markPerCorrect: 3,
    negativeMark: -1,
    blueprint: [
      { section: "up-gk", count: 8 , excludeTopics: CA_TOPICS },
    ],
  },
  {
    id: "up-pedagogy",
    listed: false, // replaced by the exam-level mocks below
    examSlug: "up",
    examName: "SUPER TET (UP Assistant Teacher)",
    title: "UPESSC: Pedagogy, Child Psychology & Language",
    description:
      "The scoring, formula-light blocks of the UPESSC Assistant Teacher paper. Lock these down early. 2026 marking (+3, −1).",
    post: "Assistant Teacher",
    cycle: "2026",
    tier: "Pedagogy + language",
    category: "subject",
    free: true,
    durationMin: 15,
    markPerCorrect: 3,
    negativeMark: -1,
    blueprint: [
      { section: "pedagogy", count: 6 },
      { section: "hindi", count: 2 },
      { section: "english", count: 2 },
    ],
  },
  // ---------------------------------------------------------- KVS
  // Kept for later, but NOT live: mock tests are UPESSC-only for now (see
  // LIVE_MOCK_EXAMS). KVS shows as "Coming soon" on the mock-tests page.
  {
    id: "free-diagnostic",
    examSlug: "kvs",
    examName: "KVS",
    title: "Free Diagnostic Mock",
    description:
      "A quick cross-section of the Tier-1 screening. See where you stand, part by part, and get a weak-spot report. Uses the 2025–26 marking (+3, −1).",
    post: "All",
    cycle: "2025-26",
    tier: "Tier-1 style",
    category: "full",
    free: true,
    durationMin: 20,
    markPerCorrect: 3,
    negativeMark: -1,
    blueprint: [
      { section: "reasoning", count: 3 },
      { section: "numerical", count: 3 },
      { section: "computer", count: 3 },
      { section: "gk", count: 2 , excludeTopics: CA_TOPICS },
      { section: "english", count: 3 },
      { section: "hindi", count: 2 },
    ],
  },
  {
    id: "prt-pedagogy",
    examSlug: "kvs",
    examName: "KVS",
    title: "PRT: Pedagogy & Child Development",
    description:
      "Focused set on Perspectives on Education, where PRT aspirants win or lose easy marks. Uses the 2022–23 marking (+1, no negative marking).",
    post: "PRT",
    cycle: "2022-23",
    tier: "Perspectives on Education",
    category: "subject",
    free: true,
    durationMin: 15,
    markPerCorrect: 1,
    negativeMark: 0,
    blueprint: [
      { section: "pedagogy", count: 6 },
      { section: "english", count: 2 },
      { section: "hindi", count: 2 },
    ],
  },
  {
    id: "tgt-tier1-sprint",
    examSlug: "kvs",
    examName: "KVS",
    title: "TGT: Tier-1 Sprint",
    description:
      "A longer screening sprint across all six Tier-1 parts with the 2025–26 marking (+3, −1) and negative-marking discipline built in.",
    post: "TGT",
    cycle: "2025-26",
    tier: "Tier-1 full",
    category: "full",
    free: true,
    durationMin: 25,
    markPerCorrect: 3,
    negativeMark: -1,
    blueprint: [
      { section: "reasoning", count: 4 },
      { section: "numerical", count: 4 },
      { section: "computer", count: 4 },
      { section: "gk", count: 3 , excludeTopics: CA_TOPICS },
      { section: "english", count: 3 },
      { section: "hindi", count: 3 },
    ],
  },
];

/** Exams whose mock tests are live. Every other exam's mocks show "Coming soon"
 *  (its guide, pattern and notifications stay fully available). */
export const LIVE_MOCK_EXAMS = ["up", "bihar-tre"];
export const isMockLive = (t: Pick<MockTest, "examSlug">) => LIVE_MOCK_EXAMS.includes(t.examSlug);

export function getMockTest(id: string) {
  return mockTests.find((t) => t.id === id);
}

/** Small deterministic RNG so a given seed always yields the same paper. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededPick<T>(items: T[], count: number, seed: number): T[] {
  if (items.length <= count) return items;
  const rng = mulberry32(seed);
  const arr = [...items];
  // Fisher–Yates with the seeded RNG
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

/**
 * Deterministically shuffle a question's options so the answer isn't always "A".
 * Returns a NEW question with `options`/`correct` reordered; if a Hindi translation
 * exists, `optionsHi` carries the Hindi options in the same order so the bilingual
 * display stays aligned. The seed is stable, so re-composing a test (for reopening
 * a past attempt or showing history) yields the exact same order every time.
 */
function shuffleOptions(q: Question, seed: number): Question {
  const n = q.options.length;
  const perm = Array.from({ length: n }, (_, i) => i);
  const rng = mulberry32(seed >>> 0);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  const hi = questionHi[q.id];
  return {
    ...q,
    options: perm.map((i) => q.options[i]),
    correct: perm.indexOf(q.correct),
    optionsHi: hi ? perm.map((i) => hi.options[i]) : q.optionsHi,
  };
}

const levelMatches = (part: BlueprintPart, q: Question) => matchesLevel(part, q);

/** Seeded Fisher–Yates over the whole list. */
function seededShuffle<T>(items: T[], seed: number): T[] {
  const rng = mulberry32(seed);
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const seriesCache = new Map<string, Map<string, Question[]>>();

/** Compose the ordered list of questions for a test from the bank. Tests in a series
 * are composed together, each skipping questions used by the preceding papers. */
export function composeTest(test: MockTest): Question[] {
  if (!test.series) return composeOne(test, new Set());
  let papers = seriesCache.get(test.series);
  if (!papers) {
    papers = new Map();
    const used = new Set<string>();
    for (const t of mockTests.filter((x) => x.series === test.series)) {
      papers.set(t.id, composeOne(t, used));
    }
    seriesCache.set(test.series, papers);
  }
  return papers.get(test.id) ?? composeOne(test, new Set());
}

function composeOne(test: MockTest, usedIds: Set<string>): Question[] {
  const out: Question[] = [];
  let partSeed = (test.seed ?? 1) * 1000;
  for (const part of test.blueprint) {
    const level = part.level ?? test.level;
    const pool = questionBank.filter(
      (q) =>
        q.section === part.section &&
        !usedIds.has(q.id) &&
        (part.topics ? part.topics.includes(q.topic) : true) &&
        (part.topic ? q.topic === part.topic : true) &&
        (!part.topic && !part.topics && part.excludeTopics
          ? !part.excludeTopics.includes(q.topic)
          : true) &&
        (level ? questionLevel(q) === level : true) &&
        (part.difficulty ? part.difficulty.includes(q.difficulty) : true) &&
        levelMatches(part, q) &&
        (q.passageId ? part.topic === q.topic || !!part.topics?.includes(q.topic) : true),
    );
    if (pool.some((q) => q.passageId)) {
      const groups = new Map<string, Question[]>();
      for (const q of pool) {
        const key = q.passageId ?? q.id;
        groups.set(key, [...(groups.get(key) ?? []), q]);
      }
      const order = seededShuffle([...groups.keys()], ++partSeed);
      let taken = 0;
      for (const key of order) {
        const g = groups.get(key)!.sort((a, b) => a.id.localeCompare(b.id));
        if (taken >= part.count) break;
        if (taken > 0 && taken + g.length > part.count) continue;
        g.forEach((q, i) => {
          usedIds.add(q.id);
          const withText = q.passageId ? { ...q, passage: PASSAGES[q.passageId] } : q;
          out.push(shuffleOptions(withText, partSeed * 131 + (taken + i) * 17 + 3));
        });
        taken += g.length;
      }
      continue;
    }
    const seed = ++partSeed;
    const preferred = part.prefer ? pool.filter((q) => q.difficulty === part.prefer) : pool;
    let picked = seededPick(preferred, part.count, seed);
    if (picked.length < part.count && part.prefer) {
      const rest = pool.filter((q) => q.difficulty !== part.prefer);
      const needed = part.count - picked.length;
      picked = seededShuffle([...picked, ...seededPick(rest, needed, seed + 7)], seed + 11);
    }
    picked.forEach((q, i) => {
      usedIds.add(q.id);
      out.push(shuffleOptions(q, partSeed * 131 + i * 17 + 3));
    });
  }
  return out;
}

export function totalQuestions(test: MockTest) {
  return questionCount(test);
}

export interface SectionResult {
  section: Section;
  label: string;
  total: number;
  attempted: number;
  correct: number;
  wrong: number;
  accuracy: number; // 0..1 over attempted
}

export interface TopicResult {
  topic: string;
  total: number;
  attempted: number;
  correct: number;
  wrong: number;
  accuracy: number; // 0..1 over attempted
}

export interface ScoreResult {
  score: number;
  maxScore: number;
  correct: number;
  wrong: number;
  unattempted: number;
  /** Chose option E ("not attempting"), no penalty. */
  notAttempting: number;
  /** Left blank on a blank-penalty test, penalised like a wrong answer. */
  blankPenalised: number;
  total: number;
  perSection: SectionResult[];
  perTopic: TopicResult[];
  weakSections: Section[];
  weakTopics: string[];
}

/**
 * Estimate the percentile a score sits at, relative to a modelled cohort of
 * test-takers (mean ~45%, logistic spread). Demo/estimate only, there is no
 * real cohort DB yet, so this is a plausible, monotonic curve, not live data.
 * Returns an integer 1..99.
 */
export function estimatePercentile(scorePct: number): number {
  const p = 100 / (1 + Math.exp(-(scorePct - 45) / 12));
  return Math.max(1, Math.min(99, Math.round(p)));
}

/** answers: questionId -> selected option index, or null/undefined if skipped. */
export function scoreAttempt(
  test: MockTest,
  questions: Question[],
  answers: Record<string, number | null>,
): ScoreResult {
  const bySection = new Map<Section, SectionResult>();
  const byTopic = new Map<string, TopicResult>();
  const weakTopics: string[] = [];
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;
  let notAttempting = 0;
  let blankPenalised = 0;

  for (const q of questions) {
    if (!bySection.has(q.section)) {
      bySection.set(q.section, {
        section: q.section,
        label: sectionLabels[q.section],
        total: 0,
        attempted: 0,
        correct: 0,
        wrong: 0,
        accuracy: 0,
      });
    }
    if (!byTopic.has(q.topic)) {
      byTopic.set(q.topic, { topic: q.topic, total: 0, attempted: 0, correct: 0, wrong: 0, accuracy: 0 });
    }
    const sr = bySection.get(q.section)!;
    const tr = byTopic.get(q.topic)!;
    sr.total += 1;
    tr.total += 1;

    const ans = answers[q.id];
    if (ans === OPTION_E) {
      unattempted += 1;
      notAttempting += 1;
      continue;
    }
    if (ans === null || ans === undefined) {
      unattempted += 1;
      if (test.blankPenalty) blankPenalised += 1;
      continue;
    }
    sr.attempted += 1;
    tr.attempted += 1;
    if (ans === q.correct) {
      correct += 1;
      sr.correct += 1;
      tr.correct += 1;
    } else {
      wrong += 1;
      sr.wrong += 1;
      tr.wrong += 1;
      if (!weakTopics.includes(q.topic)) weakTopics.push(q.topic);
    }
  }

  const perSection = [...bySection.values()].map((sr) => ({
    ...sr,
    accuracy: sr.attempted ? sr.correct / sr.attempted : 0,
  }));
  const perTopic = [...byTopic.values()].map((tr) => ({
    ...tr,
    accuracy: tr.attempted ? tr.correct / tr.attempted : 0,
  }));

  const weakSections = perSection
    .filter((s) => s.attempted > 0 && s.accuracy < 0.6)
    .map((s) => s.section);

  // Round to 2 dp so fractional marking (−⅓) displays cleanly.
  const score = Math.round((correct * test.markPerCorrect + (wrong + blankPenalised) * test.negativeMark) * 100) / 100;
  const maxScore = questions.length * test.markPerCorrect;

  return {
    score,
    maxScore,
    correct,
    wrong,
    unattempted,
    notAttempting,
    blankPenalised,
    total: questions.length,
    perSection,
    perTopic,
    weakSections,
    weakTopics,
  };
}

/** Compose a mock while excluding a known set of question IDs. Server-only helpers such as
 * the Free Mock Challenge use this to build a paper without repeating visible mocks. */
export function composeExcluding(test: MockTest, exclude: Set<string>): Question[] {
  return composeOne(test, new Set(exclude));
}
