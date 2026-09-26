import type { Difficulty, ExamLevel, Level, Section } from "@/data/questions";
import type { BlueprintPart, MockTest } from "@/lib/mock-engine";
import type { PlanDay, PlanWeek } from "@/lib/exams/up-plan";

/**
 * Bihar School Teacher, BPSC TRE 4.0 (Advt 15/2026, 22 Sep 2026) day-by-day plans
 * for Classes 1–5 (Paper 1) and Classes 6–8 (Paper 2).
 *
 * Official pattern (Advt 15/2026, p13–16), both papers:
 *   150 questions · 150 marks · 2 h 30 min · objective, options A–E
 *   (E = "not attempting") · −⅓ per wrong answer AND per question left blank.
 *   Part I Language (30 Q) is QUALIFYING only (min 30%); merit uses the other parts.
 *   Paper 1 (1–5):  Part I Language 30 + Part II General Studies 120.
 *   Paper 2 (6–8):  Part I Language 30 + Part II GS 40 + Part III Subject 80.
 * GS topics (official list): elementary maths, mental ability (Paper 1 only), general
 * awareness, general science, social science (Paper 1), Indian National Movement,
 * geography, environment (Paper 1). No pedagogy / child development section.
 *
 * The split of the 120 / 40 GS questions between those topics is NOT published,
 * the per-topic counts below are our practice weighting, labelled as such in the UI.
 * Exam date: not yet announced (BPSC exam calendar: after the application window).
 */

export const BIHAR_ADVT = {
  number: "15/2026",
  date: "22 Sep 2026",
  url: "https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-152026-TRE-4.0_BPSC-20260922-dbsf04.pdf",
  applyWindow: "25 Sep – 26 Oct 2026",
};

export type BiharSubject = "ms" | "ss" | "hindi" | "english" | "sanskrit";
export const BIHAR_SUBJECTS: { key: BiharSubject; en: string; hi: string; posts: number }[] = [
  { key: "ms", en: "Mathematics & Science", hi: "गणित एवं विज्ञान", posts: 2188 },
  { key: "ss", en: "Social Science", hi: "सामाजिक विज्ञान", posts: 1190 },
  { key: "hindi", en: "Hindi", hi: "हिंदी", posts: 1096 },
  { key: "english", en: "English", hi: "अंग्रेज़ी", posts: 1929 },
  { key: "sanskrit", en: "Sanskrit", hi: "संस्कृत", posts: 1225 },
];
/** Offered by BPSC but not yet on Merit Marg (no Urdu question bank). */
export const BIHAR_SUBJECTS_SOON = [{ en: "Urdu", hi: "उर्दू", posts: 935 }];

const MODERATE: Difficulty[] = ["medium"];
const TOUGH: Difficulty[] = ["hard"];
const MODERATE_TO_TOUGH: Difficulty[] = ["medium", "hard"];
const GS_OTHER = ["History", "Geography", "Polity", "Economy"]; // general awareness = everything else

const MARK = {
  examSlug: "bihar-tre", examName: "Bihar School Teacher (BPSC TRE 4.0)", cycle: "2026",
  markPerCorrect: 1, negativeMark: -1 / 3, optionE: true, blankPenalty: true,
} as const;

// ---- full papers ------------------------------------------------------------
const LANG_PART: BlueprintPart[] = [
  { section: "hindi", count: 15 }, { section: "english", count: 15 }, // Part I, qualifying
];
export const PAPER_1: BlueprintPart[] = [
  ...LANG_PART.map((p) => ({ ...p, examLevel: "l1" as ExamLevel })),
  // Part II, General Studies 120 (topic split = practice weighting)
  { section: "numerical", count: 25, examLevel: "l1" },                                        // elementary maths
  { section: "reasoning", count: 20 },                                                         // mental ability
  { section: "gk", count: 20, excludeTopics: GS_OTHER },                                       // general awareness
  { section: "science", count: 20, topics: ["Physics", "Chemistry", "Biology"], examLevel: "l1" }, // general science
  { section: "gk", count: 10, topics: ["Polity", "Economy"], examLevel: "l1" },                 // social science
  { section: "gk", count: 10, topic: "History", examLevel: "l1" },                              // Indian National Movement
  { section: "gk", count: 10, topic: "Geography", examLevel: "l1" },                            // geography
  { section: "science", count: 5, topic: "Environmental science", examLevel: "l1" },            // environment
];
const GS_40: BlueprintPart[] = [
  { section: "numerical", count: 10, examLevel: "l2" },
  { section: "gk", count: 10, excludeTopics: GS_OTHER },
  { section: "science", count: 10, examLevel: "l2" },
  { section: "gk", count: 5, topic: "History", examLevel: "l2" },
  { section: "gk", count: 5, topic: "Geography", examLevel: "l2" },
];
const SUBJECT_80: Record<BiharSubject, BlueprintPart[]> = {
  ms: [{ section: "numerical", count: 40 }, { section: "science", count: 40 }],
  ss: [{ section: "gk", count: 25, topic: "History" }, { section: "gk", count: 25, topic: "Geography" },
       { section: "gk", count: 15, topic: "Polity" }, { section: "gk", count: 15, topic: "Economy" }],
  hindi: [{ section: "hindi", count: 80 }],
  english: [{ section: "english", count: 80 }],
  sanskrit: [{ section: "sanskrit", count: 80 }],
};
export function paper2(subject: BiharSubject): BlueprintPart[] {
  return [...LANG_PART, ...GS_40, ...SUBJECT_80[subject].map((p) => ({ ...p, examLevel: "l2" as ExamLevel }))];
}

// ---- builders -----------------------------------------------------------------
export const biharPlanTests: MockTest[] = [];
let seed = 7000;
type Filter = { topic?: string; topics?: string[]; excludeTopics?: string[] };
const post = (lvl: "1-5" | "6-8") => (lvl === "1-5" ? "School Teacher · Classes 1–5" : "School Teacher · Classes 6–8");

function topicSet(id: string, title: string, section: Section, examLevel: ExamLevel | undefined, practice: Level, lvl: "1-5" | "6-8", filter: Filter): string {
  if (!biharPlanTests.some((t) => t.id === id)) {
    biharPlanTests.push({
      ...MARK, id, title, post: post(lvl), free: true, requiresPlan: true, category: "topic", level: practice, examLevel,
      tier: practice === "beginner" ? "Moderate" : "Tough",
      description: `${practice === "beginner" ? "Moderate" : "Tough"} set on ${title.replace(/ \((Moderate|Tough)\)$/, "")}: up to 50 questions, BPSC marking (+1, −⅓, option E).`,
      durationMin: 50,
      blueprint: [{ section, count: 50, ...filter, level: practice, examLevel, difficulty: practice === "beginner" ? MODERATE : TOUGH }],
      seed: ++seed, cutoffPct: practice === "beginner" ? 0.6 : 0.65,
    });
  }
  return id;
}
function fullPaper(id: string, title: string, lvl: "1-5" | "6-8", blueprint: BlueprintPart[], description: string): string {
  biharPlanTests.push({
    ...MARK, id, title, post: post(lvl), free: true, category: "full", tier: "Full paper (150 Q)",
    description, durationMin: 150,
    blueprint: blueprint.map((p) => ({ difficulty: MODERATE_TO_TOUGH, ...p })),
    seed: ++seed, cutoffPct: 0.6, examLevel: lvl === "1-5" ? "l1" : "l2",
  });
  return id;
}

interface RawDay { topic: string; section: Section; detail: string; filter: Filter; examLevel?: ExamLevel }
interface RawWeek { title: string; focus: string; days: RawDay[] }

/** End-of-week test: ONLY that week's topics, split evenly across its days
 *  (60 questions in 60 minutes, BPSC marking). Full papers live in revision. */
const WEEK_TEST_SIZE = 60;
function weekTest(id: string, title: string, lvl: "1-5" | "6-8", w: RawWeek): string {
  const per = Math.max(1, Math.round(WEEK_TEST_SIZE / w.days.length));
  biharPlanTests.push({
    ...MARK, id, title, post: post(lvl), free: true, requiresPlan: true, category: "mixed", tier: "Week test",
    description: `Only this week's topics (${w.title}), mixed: ${per * w.days.length} questions in ${per * w.days.length} minutes, +1 / −⅓, option E.`,
    durationMin: per * w.days.length,
    blueprint: w.days.map((d) => ({ section: d.section, count: per, ...d.filter, examLevel: d.examLevel, difficulty: MODERATE_TO_TOUGH })),
    seed: ++seed, cutoffPct: 0.6, examLevel: lvl === "1-5" ? "l1" : "l2",
  });
  return id;
}

function buildWeeks(prefix: string, lvl: "1-5" | "6-8", raw: RawWeek[], weekOffset = 0, bigTests?: (n: number, w: RawWeek) => string[]): PlanWeek[] {
  return raw.map((w, wi) => {
    const n = wi + 1 + weekOffset;
    const days: PlanDay[] = w.days.map((d, di) => {
      const base = `${prefix}-w${n}d${di + 1}`;
      return {
        topic: d.topic, section: d.section, detail: d.detail,
        testIds: [
          topicSet(`${base}mod`, `${d.topic} (Moderate)`, d.section, d.examLevel, "beginner", lvl, d.filter),
          topicSet(`${base}tgh`, `${d.topic} (Tough)`, d.section, d.examLevel, "proficient", lvl, d.filter),
        ],
      };
    });
    return { n, phase: "syllabus" as const, title: w.title, focus: w.focus, days, bigTestIds: bigTests ? bigTests(n, w) : [] };
  });
}

// ---- shared day lists -----------------------------------------------------------
const LANGUAGE_DAYS = (lvl: ExamLevel | undefined): RawDay[] => [
  { topic: "हिंदी: संधि व समास", section: "hindi", detail: "संधि-विच्छेद, समास-विग्रह व भेद।", filter: { topics: ["संधि", "समास"] }, examLevel: lvl },
  { topic: "हिंदी: शब्द-भंडार व मुहावरे", section: "hindi", detail: "पर्यायवाची, विलोम, अनेकार्थी, मुहावरे-लोकोक्तियाँ।", filter: { topics: ["पर्यायवाची", "विलोम", "अनेकार्थी", "मुहावरे", "लोकोक्तियाँ"] }, examLevel: lvl },
  { topic: "हिंदी: वर्तनी, वाक्य-शुद्धि, अलंकार", section: "hindi", detail: "शुद्ध वर्तनी, वाक्य संशोधन, प्रमुख अलंकार-रस।", filter: { topics: ["वर्तनी", "वाक्य शुद्धि", "अलंकार", "रस", "छंद"] }, examLevel: lvl },
  { topic: "English: Tenses, Voice & Narration", section: "english", detail: "Tense use, active/passive, direct/indirect speech.", filter: { topics: ["Tenses", "Voice", "Narration"] }, examLevel: lvl },
  { topic: "English: Articles, Prepositions & errors", section: "english", detail: "Articles, prepositions, modals, error spotting, agreement.", filter: { topics: ["Articles", "Prepositions", "Modals", "Error spotting", "Subject-verb agreement"] }, examLevel: lvl },
  { topic: "English: Vocabulary", section: "english", detail: "Synonyms, antonyms, one-word substitution, idioms, spelling.", filter: { topics: ["Synonyms", "Antonyms", "One-word substitution", "Idioms", "Spelling"] }, examLevel: lvl },
];

// =============================================================================
// Classes 1–5 · Paper 1
// =============================================================================
const RAW_1_5: RawWeek[] = [
  {
    title: "Elementary Mathematics", focus: "प्राथमिक गणित: GS का सबसे बड़ा हिस्सा",
    days: [
      { topic: "Number system, LCM/HCF, simplification", section: "numerical", detail: "Factors, multiples, BODMAS, fractions, surds & indices.", filter: { topic: "Number system" }, examLevel: "l1" },
      { topic: "Percentage, ratio & average", section: "numerical", detail: "Core arithmetic used across the paper.", filter: { topic: "Arithmetic" }, examLevel: "l1" },
      { topic: "Profit & loss, SI & CI", section: "numerical", detail: "Commercial maths: margins, discounts, interest.", filter: { topic: "Commercial maths" }, examLevel: "l1" },
      { topic: "Time, speed & work", section: "numerical", detail: "Motion, trains, boats & streams, work-rate, pipes.", filter: { topic: "Time & motion" }, examLevel: "l1" },
      { topic: "Geometry & mensuration", section: "numerical", detail: "Angles, triangles, circles, area and volume.", filter: { topic: "Geometry & mensuration" }, examLevel: "l1" },
      { topic: "Data interpretation", section: "numerical", detail: "Tables, bar & pie charts, mean-median-mode.", filter: { topic: "Data interpretation" }, examLevel: "l1" },
    ],
  },
  {
    title: "Mental Ability + General Science & Environment", focus: "मानसिक क्षमता, सामान्य विज्ञान, पर्यावरण",
    days: [
      { topic: "Mental ability: verbal reasoning", section: "reasoning", detail: "Series, coding-decoding, blood relations, directions.", filter: { topic: "Verbal reasoning" } },
      { topic: "Mental ability: analytical reasoning", section: "reasoning", detail: "Analogy, classification, Venn diagrams, clocks & calendars.", filter: { topic: "Analytical reasoning" } },
      { topic: "General science: physics", section: "science", detail: "Force, motion, energy, light, sound, electricity.", filter: { topic: "Physics" }, examLevel: "l1" },
      { topic: "General science: chemistry", section: "science", detail: "Matter, acids & bases, everyday chemistry.", filter: { topic: "Chemistry" }, examLevel: "l1" },
      { topic: "General science: biology", section: "science", detail: "Human body, nutrition, diseases, plants & animals.", filter: { topic: "Biology" }, examLevel: "l1" },
      { topic: "Environment", section: "science", detail: "Ecosystems, pollution, conservation, natural resources.", filter: { topic: "Environmental science" }, examLevel: "l1" },
    ],
  },
  {
    title: "Social Science, National Movement, Geography & General Awareness", focus: "सामाजिक विज्ञान, राष्ट्रीय आंदोलन, भूगोल, सामान्य जानकारी",
    days: [
      { topic: "Indian history & National Movement", section: "gk", detail: "1857 to 1947: movements, leaders, sessions, acts.", filter: { topic: "History" }, examLevel: "l1" },
      { topic: "Geography: India & world", section: "gk", detail: "Physical features, rivers, climate, soils, resources.", filter: { topic: "Geography" }, examLevel: "l1" },
      { topic: "Social science: polity & civics", section: "gk", detail: "Constitution, rights & duties, Parliament, local government.", filter: { topic: "Polity" }, examLevel: "l1" },
      { topic: "Social science: economy", section: "gk", detail: "Budget, banking, planning, basic economic terms.", filter: { topic: "Economy" }, examLevel: "l1" },
      { topic: "General awareness (static GK)", section: "gk", detail: "Symbols, important days, organisations, awards, books. Read current affairs from an official source (e.g. PIB).", filter: { topic: "Static GK" } },
    ],
  },
  {
    title: "Part I · Language (qualifying: at least 30%)", focus: "भाषा: अंग्रेज़ी व हिंदी का व्यावहारिक ज्ञान (क्वालीफाइंग)",
    days: LANGUAGE_DAYS("l1"),
  },
];

let p1n = 0;
const paper1Big = (n: number, w: RawWeek) => [
  weekTest(`bh15-w${n}big${++p1n}`, `Week ${n} Test 1: ${w.title}`, "1-5", w),
  weekTest(`bh15-w${n}big${++p1n}`, `Week ${n} Test 2: ${w.title}`, "1-5", w),
];
const syllabus15 = buildWeeks("bh15", "1-5", RAW_1_5, 0, paper1Big);
export const biharPlan15: PlanWeek[] = [
  ...syllabus15,
  {
    n: syllabus15.length + 1, phase: "revision", title: "Revision: full Paper 1 every day", focus: "Exam conditions: 150 questions, 150 minutes, option E",
    days: [1, 2, 3, 4, 5].map((i) => ({
      topic: `Full mock ${i}`, section: "gk" as Section,
      detail: "Take a full Paper 1 in 150 minutes. Use E for questions you won't risk; never leave a bubble blank.",
      testIds: [fullPaper(`bh15-rev${i}`, `Revision Full Paper 1: Mock ${i}`, "1-5", PAPER_1, "Full exam-pattern mock with analysis.")],
    })),
    bigTestIds: [],
  },
];

// =============================================================================
// Classes 6–8 · Paper 2 (GS + Language are common; Part III depends on subject)
// =============================================================================
const RAW_6_8_COMMON: RawWeek[] = [
  {
    title: "Part II · General Studies (40 Q)", focus: "सामान्य अध्ययन: गणित, विज्ञान, राष्ट्रीय आंदोलन, भूगोल, सामान्य जानकारी",
    days: [
      { topic: "Elementary mathematics", section: "numerical", detail: "Number system, algebra, arithmetic, mensuration (classes 6–8).", filter: {}, examLevel: "l2" },
      { topic: "General science", section: "science", detail: "Physics, chemistry and biology at upper-primary level.", filter: {}, examLevel: "l2" },
      { topic: "Indian National Movement & history", section: "gk", detail: "Freedom struggle, reform movements, key events.", filter: { topic: "History" }, examLevel: "l2" },
      { topic: "Geography", section: "gk", detail: "India & world: physical, climate, resources, maps.", filter: { topic: "Geography" }, examLevel: "l2" },
      { topic: "General awareness (static GK)", section: "gk", detail: "Symbols, important days, organisations, awards, books. Read current affairs from an official source (e.g. PIB).", filter: { topic: "Static GK" } },
    ],
  },
  { title: "Part I · Language (qualifying: at least 30%)", focus: "भाषा: अंग्रेज़ी व हिंदी का व्यावहारिक ज्ञान (क्वालीफाइंग)", days: LANGUAGE_DAYS(undefined) },
];

const SUBJECT_DAYS: Record<BiharSubject, RawDay[]> = {
  ms: [
    { topic: "Maths: number system & algebra", section: "numerical", detail: "Integers, rationals, exponents, algebraic expressions, equations.", filter: { topic: "Number system" }, examLevel: "l2" },
    { topic: "Maths: geometry & mensuration", section: "numerical", detail: "Lines, triangles, quadrilaterals, circles, area, volume.", filter: { topic: "Geometry & mensuration" }, examLevel: "l2" },
    { topic: "Maths: arithmetic & commercial", section: "numerical", detail: "Ratio, percentage, profit-loss, interest.", filter: { topics: ["Arithmetic", "Commercial maths"] }, examLevel: "l2" },
    { topic: "Science: physics", section: "science", detail: "Motion, force, pressure, light, sound, electricity, magnetism.", filter: { topic: "Physics" }, examLevel: "l2" },
    { topic: "Science: chemistry", section: "science", detail: "Matter, metals & non-metals, acids-bases-salts, carbon, changes.", filter: { topic: "Chemistry" }, examLevel: "l2" },
    { topic: "Science: biology", section: "science", detail: "Cells, nutrition, respiration, reproduction, microorganisms.", filter: { topic: "Biology" }, examLevel: "l2" },
  ],
  ss: [
    { topic: "History", section: "gk", detail: "Sources, ancient & medieval India, colonial rule, freedom struggle.", filter: { topic: "History" }, examLevel: "l2" },
    { topic: "Geography", section: "gk", detail: "Earth, maps, climate, resources, India & Bihar geography basics.", filter: { topic: "Geography" }, examLevel: "l2" },
    { topic: "Political science / civics", section: "gk", detail: "Constitution, democracy, government, judiciary, local bodies.", filter: { topic: "Polity" }, examLevel: "l2" },
    { topic: "Economics", section: "gk", detail: "Economy basics, markets, money & banking, development.", filter: { topic: "Economy" }, examLevel: "l2" },
  ],
  hindi: [
    { topic: "हिंदी: संधि", section: "hindi", detail: "स्वर, व्यंजन व विसर्ग संधि (कठिन उदाहरण)।", filter: { topic: "संधि" }, examLevel: "l2" },
    { topic: "हिंदी: समास", section: "hindi", detail: "समास-विग्रह व भेद।", filter: { topic: "समास" }, examLevel: "l2" },
    { topic: "हिंदी: अलंकार, रस व छंद", section: "hindi", detail: "शब्दालंकार-अर्थालंकार, नौ रस, प्रमुख छंद।", filter: { topics: ["अलंकार", "रस", "छंद"] }, examLevel: "l2" },
    { topic: "हिंदी साहित्य", section: "hindi", detail: "काल-विभाजन, प्रमुख कवि-लेखक व रचनाएँ।", filter: { topic: "हिंदी साहित्य" }, examLevel: "l2" },
    { topic: "हिंदी: शब्द-भंडार", section: "hindi", detail: "पर्यायवाची, विलोम, अनेकार्थी, मुहावरे-लोकोक्तियाँ।", filter: { topics: ["पर्यायवाची", "विलोम", "अनेकार्थी", "मुहावरे", "लोकोक्तियाँ"] }, examLevel: "l2" },
  ],
  english: [
    { topic: "English: Tenses, Voice & Narration", section: "english", detail: "Advanced use of tenses, passive voice, reported speech.", filter: { topics: ["Tenses", "Voice", "Narration"] }, examLevel: "l2" },
    { topic: "English: Error spotting & agreement", section: "english", detail: "Sentence correction and subject-verb agreement.", filter: { topics: ["Error spotting", "Subject-verb agreement"] }, examLevel: "l2" },
    { topic: "English: Vocabulary", section: "english", detail: "Synonyms, antonyms, one-word, idioms, spelling.", filter: { topics: ["Synonyms", "Antonyms", "One-word substitution", "Idioms", "Spelling"] }, examLevel: "l2" },
    { topic: "English literature", section: "english", detail: "Major writers, poets, works and literary terms.", filter: { topic: "English literature" }, examLevel: "l2" },
  ],
  sanskrit: [
    { topic: "संस्कृत: शब्द रूप व धातु रूप", section: "sanskrit", detail: "प्रमुख शब्द रूप व लट्-लृट्-लोट् धातु रूप।", filter: { topics: ["संस्कृत शब्द रूप", "संस्कृत धातु रूप"] }, examLevel: "l2" },
    { topic: "संस्कृत: संधि, समास व कारक", section: "sanskrit", detail: "संस्कृत संधि (सूत्र सहित), समास, कारक-विभक्ति।", filter: { topics: ["संस्कृत संधि", "संस्कृत समास", "संस्कृत कारक"] }, examLevel: "l2" },
  ],
};

const common68 = buildWeeks("bh68", "6-8", RAW_6_8_COMMON, 0, (n, w) => [
  weekTest(`bh68-w${n}big1`, `Week ${n} Test 1: ${w.title}`, "6-8", w),
  weekTest(`bh68-w${n}big2`, `Week ${n} Test 2: ${w.title}`, "6-8", w),
]);

function plan68(subject: BiharSubject): PlanWeek[] {
  const s = BIHAR_SUBJECTS.find((x) => x.key === subject)!;
  let k = 0;
  const big = (n: number, w: RawWeek) => [
    weekTest(`bh68${subject}-w${n}big${++k}`, `Week ${n} Test 1: ${s.en}`, "6-8", w),
    weekTest(`bh68${subject}-w${n}big${++k}`, `Week ${n} Test 2: ${s.en}`, "6-8", w),
  ];
  const subjectWeek = buildWeeks(`bh68${subject}`, "6-8", [{
    title: `Part III · ${s.en} (80 Q)`, focus: `विषय-पत्र: ${s.hi} (SCERT/NCERT स्तर)`, days: SUBJECT_DAYS[subject],
  }], common68.length, big);
  const revN = common68.length + subjectWeek.length + 1;
  return [
    ...common68,
    ...subjectWeek,
    {
      n: revN, phase: "revision", title: `Revision: full Paper 2 (${s.en})`, focus: "Exam conditions: 150 questions, 150 minutes, option E",
      days: [1, 2, 3, 4].map((i) => ({
        topic: `Full mock ${i}`, section: "gk" as Section,
        detail: "Take a full Paper 2 in 150 minutes. Merit counts Parts II + III; Part I only needs 30%.",
        testIds: [fullPaper(`bh68${subject}-rev${i}`, `Revision Full Paper 2 · ${s.en}: Mock ${i}`, "6-8", paper2(subject), "Full exam-pattern mock with analysis.")],
      })),
      bigTestIds: [],
    },
  ];
}

export const biharPlans68: Record<BiharSubject, PlanWeek[]> = {
  ms: plan68("ms"), ss: plan68("ss"), hindi: plan68("hindi"), english: plan68("english"), sanskrit: plan68("sanskrit"),
};

export function getBiharPlanTest(id: string) {
  return biharPlanTests.find((t) => t.id === id);
}

// =============================================================================
// Section-wise mocks (Mock Tests page), one per part of the official paper,
// at the real pace (150 Q in 150 min = 1 minute a question), moderate-to-tough.
// =============================================================================
/** Stable seed from the id, so a section mock always draws the same paper. */
const idSeed = (id: string) => 9000 + ([...id].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7) % 50000);

function sectionMock(id: string, title: string, covers: string, lvl: "1-5" | "6-8", blueprint: BlueprintPart[]): MockTest {
  const n = blueprint.reduce((a, p) => a + p.count, 0);
  return {
    ...MARK, id, title, covers, post: post(lvl), free: true, category: "subject", tier: "Exam level",
    description: `${n} questions in ${n} minutes, BPSC TRE pattern: +1 / −⅓, option E (not attempting), blank also −⅓.`,
    durationMin: n, examLevel: lvl === "1-5" ? "l1" : "l2", seed: idSeed(id), cutoffPct: 0.6,
    blueprint: blueprint.map((p) => ({ difficulty: MODERATE_TO_TOUGH, ...p })),
  };
}
/** A fifth-size copy of a paper, keeping every part's share (at least 1 Q each). */
const scaled = (bp: BlueprintPart[], f = 0.2): BlueprintPart[] => bp.map((p) => ({ ...p, count: Math.max(1, Math.round(p.count * f)) }));

/** How many free mocks each exam gets. Everything else needs the ₹99 Prep Pass. */
export const FREE_MOCKS_PER_EXAM = 10;

/** 20-question Paper 1 in the real split (150 → 20): language 4, GS 16. */
const FREE_20_P1: BlueprintPart[] = [
  { section: "hindi", count: 2, examLevel: "l1" }, { section: "english", count: 2, examLevel: "l1" },
  { section: "numerical", count: 4, examLevel: "l1" },
  { section: "reasoning", count: 3 },
  { section: "gk", count: 3, excludeTopics: GS_OTHER },
  { section: "science", count: 2, topics: ["Physics", "Chemistry", "Biology"], examLevel: "l1" },
  { section: "gk", count: 1, topics: ["Polity", "Economy"], examLevel: "l1" },
  { section: "gk", count: 1, topic: "History", examLevel: "l1" },
  { section: "gk", count: 1, topic: "Geography", examLevel: "l1" },
  { section: "science", count: 1, topic: "Environmental science", examLevel: "l1" },
];
/** 20-question Paper 2 in the real split (150 → 20): language 4, GS 5, your subject 11. */
const SUBJECT_11: Record<BiharSubject, BlueprintPart[]> = {
  ms: [{ section: "numerical", count: 6 }, { section: "science", count: 5 }],
  ss: [{ section: "gk", count: 3, topic: "History" }, { section: "gk", count: 3, topic: "Geography" },
       { section: "gk", count: 3, topic: "Polity" }, { section: "gk", count: 2, topic: "Economy" }],
  hindi: [{ section: "hindi", count: 11 }],
  english: [{ section: "english", count: 11 }],
  sanskrit: [{ section: "sanskrit", count: 11 }],
};
function free20p2(subject: BiharSubject): BlueprintPart[] {
  return [
    { section: "hindi", count: 2 }, { section: "english", count: 2 },
    { section: "numerical", count: 1, examLevel: "l2" }, { section: "gk", count: 1, excludeTopics: GS_OTHER },
    { section: "science", count: 1, examLevel: "l2" }, { section: "gk", count: 1, topic: "History", examLevel: "l2" },
    { section: "gk", count: 1, topic: "Geography", examLevel: "l2" },
    ...SUBJECT_11[subject].map((p) => ({ ...p, examLevel: "l2" as ExamLevel })),
  ];
}

/** The 10 FREE mocks for BPSC TRE 4.0 classes 1–5. */
export const biharFreeMocks15: MockTest[] = Array.from({ length: FREE_MOCKS_PER_EXAM }, (_, i) => ({
  ...sectionMock(`bh15-free-${i + 1}`, `Free Mock ${i + 1}`, "Language and General Studies in the real Paper 1 split", "1-5", FREE_20_P1),
  category: "mixed" as const, demo: true,
}));
/** The 10 FREE mocks for BPSC TRE 4.0 classes 6–8, in the candidate's subject. */
export function biharFreeMocks68(subject: BiharSubject): MockTest[] {
  const s = BIHAR_SUBJECTS.find((x) => x.key === subject)!;
  return Array.from({ length: FREE_MOCKS_PER_EXAM }, (_, i) => ({
    ...sectionMock(`bh68-free-${subject}-${i + 1}`, `Free Mock ${i + 1} · ${s.en}`, `Language, General Studies and ${s.en} in the real Paper 2 split`, "6-8", free20p2(subject)),
    category: "mixed" as const, demo: true,
  }));
}

/** Retired demo papers: kept (paid, unlisted) so old links and past attempts still open. */
const retiredDemos: MockTest[] = [
  { ...sectionMock("bh15-demo", "Mixed Paper (all parts)", "A fifth-size Paper 1 in the real split", "1-5", scaled(PAPER_1)), category: "mixed", listed: false },
  ...BIHAR_SUBJECTS.map((s) => ({
    ...sectionMock(`bh68-demo-${s.key}`, `Mixed Paper · ${s.en}`, `A fifth-size Paper 2 in the real split`, "6-8", scaled(paper2(s.key))),
    category: "mixed" as const, listed: false,
  })),
];

export const biharSectionMocks15: MockTest[] = [
  sectionMock("bh15-sec-lang", "Part I · Language (qualifying)", "English + Hindi: you need at least 30%", "1-5", PAPER_1.slice(0, 2)),
  sectionMock("bh15-sec-maths", "Elementary Mathematics", "Number system, arithmetic, commercial maths, time & work, geometry, DI", "1-5", [{ section: "numerical", count: 25, examLevel: "l1" }]),
  sectionMock("bh15-sec-mental", "Mental Ability", "Series, coding, relations, directions, analogy, Venn, clocks & calendars", "1-5", [{ section: "reasoning", count: 20 }]),
  sectionMock("bh15-sec-science", "General Science & Environment", "Physics, chemistry, biology + environment", "1-5",
    [{ section: "science", count: 20, topics: ["Physics", "Chemistry", "Biology"], examLevel: "l1" }, { section: "science", count: 5, topic: "Environmental science", examLevel: "l1" }]),
  sectionMock("bh15-sec-social", "Social Science, National Movement & Geography", "Polity, economy, Indian National Movement, geography", "1-5",
    [{ section: "gk", count: 10, topics: ["Polity", "Economy"], examLevel: "l1" }, { section: "gk", count: 10, topic: "History", examLevel: "l1" }, { section: "gk", count: 10, topic: "Geography", examLevel: "l1" }]),
  sectionMock("bh15-sec-awareness", "General Awareness", "Static GK: symbols, important days, organisations, awards, books", "1-5", [{ section: "gk", count: 20, excludeTopics: GS_OTHER }]),
];
export function biharSectionMocks68(subject: BiharSubject): MockTest[] {
  const s = BIHAR_SUBJECTS.find((x) => x.key === subject)!;
  return [
    sectionMock(`bh68-sec-lang`, "Part I · Language (qualifying)", "English + Hindi: you need at least 30%", "6-8", LANG_PART),
    sectionMock(`bh68-sec-gs`, "Part II · General Studies (40 Q)", "Maths, general awareness, general science, National Movement, geography", "6-8", GS_40),
    sectionMock(`bh68-sec-${subject}`, `Part III · ${s.en} (80 Q)`, `The full 80-question subject paper: ${s.en}, SCERT/NCERT level`, "6-8",
      SUBJECT_80[subject].map((p) => ({ ...p, examLevel: "l2" as ExamLevel }))),
  ];
}
/** Every Bihar section mock (for routing), de-duplicated. */
export const allBiharSectionMocks: MockTest[] = [
  ...biharFreeMocks15,
  ...BIHAR_SUBJECTS.flatMap((s) => biharFreeMocks68(s.key)),
  ...retiredDemos,
  ...biharSectionMocks15,
  ...[...new Map(BIHAR_SUBJECTS.flatMap((s) => biharSectionMocks68(s.key)).map((t) => [t.id, t])).values()],
];

/** FREE besides the 10 mini mocks: one full paper and one section-wise mock per exam
 *  (classes 6–8: the first full paper in every subject, and the common GS section). */
const FREE_EXTRA_IDS = [
  "bh15-rev1", "bh15-sec-maths", "bh68-sec-gs",
  ...BIHAR_SUBJECTS.map((s) => `bh68${s.key}-rev1`),
];
for (const id of FREE_EXTRA_IDS) {
  const t = getBiharPlanTest(id) ?? allBiharSectionMocks.find((x) => x.id === id);
  if (t) t.demo = true;
}
