import { CA_TOPICS, CA_NATIONAL, CA_BIHAR, HINDI_PROSE, EN_COMPREHENSION, questionBank, matchesLevel, type Difficulty, type ExamLevel, type Level, type Section } from "@/data/questions";
import type { BlueprintPart, MockTest } from "@/lib/mock-engine";
import type { PlanDay, PlanWeek } from "@/lib/exams/up-plan";

/**
 * Bihar School Teacher, BPSC TRE 4.0 (Advt 15/2026, 22 Sep 2026) day-by-day plans
 * for Classes 1–5 (Paper 1), 6–8 (Paper 2), 9–10 (Paper 3) and 11–12 (Paper 4).
 * Papers 3 and 4 have Paper 2's shape: Part I 30 + Part II GS 40 + Part III subject 80.
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

export type BiharSubject = "ms" | "ss" | "hindi" | "english" | "sanskrit" | "urdu";
export const BIHAR_SUBJECTS: { key: BiharSubject; en: string; hi: string; posts: number }[] = [
  { key: "ms", en: "Mathematics & Science", hi: "गणित एवं विज्ञान", posts: 2188 },
  { key: "ss", en: "Social Science", hi: "सामाजिक विज्ञान", posts: 1190 },
  { key: "hindi", en: "Hindi", hi: "हिंदी", posts: 1096 },
  { key: "english", en: "English", hi: "अंग्रेज़ी", posts: 1929 },
  { key: "sanskrit", en: "Sanskrit", hi: "संस्कृत", posts: 1225 },
  { key: "urdu", en: "Urdu", hi: "उर्दू", posts: 935 },
];
/** Subjects BPSC offers that Merit Marg doesn't cover yet (none left). */
export const BIHAR_SUBJECTS_SOON: { en: string; hi: string; posts: number }[] = [];

// ---- Part I language: English + ONE of Hindi / Urdu / Bangla -----------------
export type PartILang = "hindi" | "urdu" | "bangla";
export const PART_I_LANGS: { key: PartILang; code: string; en: string; hi: string }[] = [
  { key: "hindi", code: "hi", en: "Hindi", hi: "हिंदी" },
  { key: "urdu", code: "ur", en: "Urdu", hi: "उर्दू" },
  { key: "bangla", code: "bn", en: "Bangla", hi: "बांग्ला" },
];
/** Topic tags of the Part I Urdu/Bangla banks (kept apart from the Part III Urdu subject bank). */
export const URDU_LANG_TOPICS = ["Urdu grammar", "Urdu vocabulary", "Urdu usage"];
export const BANGLA_LANG_TOPICS = ["Bangla grammar", "Bangla vocabulary", "Bangla usage"];
/** Topic tags of the Part III Urdu subject bank (classes 6–8, SCERT/NCERT level). */
export const URDU_SUBJECT_TOPICS = ["Urdu qawaid", "Urdu prose & writers", "Urdu poetry & poets", "Urdu literary forms", "Urdu language & literature history"];
/** The 15-question second-language block of Part I for Urdu or Bangla (Hindi is in LANG_PART). */
function secondLanguage(lang: Exclude<PartILang, "hindi">): BlueprintPart[] {
  if (lang === "urdu") return [{ section: "urdu", count: 15, topics: URDU_LANG_TOPICS, tag: "part1-lang" }];
  return [{ section: "bangla", count: 15, topics: BANGLA_LANG_TOPICS, tag: "part1-lang" }];
}

const MODERATE: Difficulty[] = ["medium"];
const TOUGH: Difficulty[] = ["hard"];
const MODERATE_TO_TOUGH: Difficulty[] = ["medium", "hard"];
const GS_OTHER = ["History", "Geography", "Polity", "Economy"]; // general awareness = everything else
/** Static general awareness: not the four GS subjects and not current affairs. */
const STATIC_GA = [...GS_OTHER, ...CA_TOPICS];
const CA_DIFF: Difficulty[] = ["medium", "hard"];

const MARK = {
  examSlug: "bihar-tre", examName: "Bihar School Teacher (BPSC TRE 4.0)", cycle: "2026",
  markPerCorrect: 1, negativeMark: -1 / 3, optionE: true, blankPenalty: true,
} as const;

// ---- full papers ------------------------------------------------------------
// Part I, qualifying: "practical knowledge" of English + Hindi/Urdu/Bangla, so each
// language is grammar plus one unseen passage (3 questions).
const LANG_PART: BlueprintPart[] = [
  { section: "hindi", count: 12, tag: "part1-lang" },
  { section: "hindi", count: 3, topic: HINDI_PROSE, difficulty: ["medium", "hard"], tag: "part1-lang" },
  { section: "english", count: 12 },
  { section: "english", count: 3, topic: EN_COMPREHENSION, difficulty: ["medium", "hard"] },
];
export const PAPER_1: BlueprintPart[] = [
  ...LANG_PART.map((p) => ({ ...p, examLevel: "l1" as ExamLevel })),
  // Part II, General Studies 120 (topic split = practice weighting)
  { section: "numerical", count: 25, examLevel: "l1" },                                        // elementary maths
  { section: "reasoning", count: 20 },                                                         // mental ability
  // general awareness 20: static 14 + national current affairs 4 + Bihar current affairs 2
  { section: "gk", count: 14, excludeTopics: STATIC_GA },
  { section: "gk", count: 4, topic: CA_NATIONAL, difficulty: CA_DIFF },
  { section: "gk", count: 2, topic: CA_BIHAR, difficulty: CA_DIFF },
  { section: "science", count: 20, topics: ["Physics", "Chemistry", "Biology"], examLevel: "l1" }, // general science
  { section: "gk", count: 10, topics: ["Polity", "Economy"], examLevel: "l1" },                 // social science
  { section: "gk", count: 10, topic: "History", examLevel: "l1" },                              // Indian National Movement
  { section: "gk", count: 10, topic: "Geography", examLevel: "l1" },                            // geography
  { section: "science", count: 5, topic: "Environmental science", examLevel: "l1" },            // environment
];
const GS_40: BlueprintPart[] = [
  { section: "numerical", count: 10, examLevel: "l2" },
  // general awareness 10: static 7 + national current affairs 2 + Bihar current affairs 1
  { section: "gk", count: 7, excludeTopics: STATIC_GA },
  { section: "gk", count: 2, topic: CA_NATIONAL, difficulty: CA_DIFF },
  { section: "gk", count: 1, topic: CA_BIHAR, difficulty: CA_DIFF },
  { section: "science", count: 10, examLevel: "l2" },
  { section: "gk", count: 5, topic: "History", examLevel: "l2" },
  { section: "gk", count: 5, topic: "Geography", examLevel: "l2" },
];
/** The five Section I + Section II choices for Part III Social Science. */
export type SsCombo = "hg" | "he" | "hp" | "ge" | "gp";
const SS_TOPIC = { h: "History", g: "Geography", e: "Economy", p: "Polity" } as const;
export const SS_COMBOS: { key: SsCombo; en: string; hi: string }[] = [
  { key: "hg", en: "History + Geography", hi: "इतिहास + भूगोल" },
  { key: "he", en: "History + Economics", hi: "इतिहास + अर्थशास्त्र" },
  { key: "hp", en: "History + Political Science", hi: "इतिहास + राजनीति शास्त्र" },
  { key: "ge", en: "Geography + Economics", hi: "भूगोल + अर्थशास्त्र" },
  { key: "gp", en: "Geography + Political Science", hi: "भूगोल + राजनीति शास्त्र" },
];
/** Part III Social Science for one choice. The advert doesn't publish the Section I/II
 *  split of the 80 questions, so 40 + 40 is our practice weighting (labelled in the UI). */
function ssPart3(combo: SsCombo, examLevels?: ExamLevel[]): BlueprintPart[] {
  const [a, b] = [combo[0], combo[1]] as [keyof typeof SS_TOPIC, keyof typeof SS_TOPIC];
  const lv = examLevels ? { examLevels } : {};
  return [{ section: "gk", count: 40, topic: SS_TOPIC[a], ...lv }, { section: "gk", count: 40, topic: SS_TOPIC[b], ...lv }];
}

const SUBJECT_80: Record<BiharSubject, BlueprintPart[]> = {
  ms: [{ section: "numerical", count: 40 }, { section: "science", count: 40 }],
  // Social Science (Advt 15/2026 note): Section I is History OR Geography; Section II is
  // one more (History → Geography/Economics/Political Science; Geography → Economics/
  // Political Science). The default paper is History + Geography; SS_COMBOS has the rest.
  ss: ssPart3("hg"),
  hindi: [{ section: "hindi", count: 80 }],
  english: [{ section: "english", count: 80 }],
  sanskrit: [{ section: "sanskrit", count: 80 }],
  urdu: [{ section: "urdu", count: 80, topics: URDU_SUBJECT_TOPICS }],
};
export function paper2(subject: BiharSubject): BlueprintPart[] {
  return [...LANG_PART, ...GS_40, ...SUBJECT_80[subject].map((p) => ({ ...p, examLevel: "l2" as ExamLevel }))];
}

// ---- builders -----------------------------------------------------------------
export const biharPlanTests: MockTest[] = [];
let seed = 7000;
type Filter = { topic?: string; topics?: string[]; excludeTopics?: string[]; examLevels?: ExamLevel[] };
/** The four BPSC TRE class levels and the question level each one draws. */
export type BiharLvl = "1-5" | "6-8" | "9-10" | "11-12";
const LVL_EXAM: Record<BiharLvl, ExamLevel> = { "1-5": "l1", "6-8": "l2", "9-10": "l3", "11-12": "l4" };
const lvlLabel = (lvl: BiharLvl) => lvl.replace("-", "–");
const post = (lvl: BiharLvl) => `School Teacher · Classes ${lvlLabel(lvl)}`;

function topicSet(id: string, title: string, section: Section, examLevel: ExamLevel | undefined, practice: Level, lvl: BiharLvl, filter: Filter): string {
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
function fullPaper(id: string, title: string, lvl: BiharLvl, blueprint: BlueprintPart[], description: string): string {
  biharPlanTests.push({
    ...MARK, id, title, post: post(lvl), free: true, category: "full", tier: "Full paper (150 Q)",
    description, durationMin: 150,
    blueprint: blueprint.map((p) => ({ difficulty: MODERATE_TO_TOUGH, ...p })),
    seed: ++seed, cutoffPct: 0.6, examLevel: LVL_EXAM[lvl],
  });
  return id;
}

interface RawDay { topic: string; section: Section; detail: string; filter: Filter; examLevel?: ExamLevel }
interface RawWeek { title: string; focus: string; days: RawDay[] }

/** End-of-week test: ONLY that week's topics, split evenly across its days
 *  (60 questions in 60 minutes, BPSC marking). Full papers live in revision. */
const WEEK_TEST_SIZE = 60;
function weekTest(id: string, title: string, lvl: BiharLvl, w: RawWeek): string {
  const per = Math.max(1, Math.round(WEEK_TEST_SIZE / w.days.length));
  biharPlanTests.push({
    ...MARK, id, title, post: post(lvl), free: true, requiresPlan: true, category: "mixed", tier: "Week test",
    description: `Only this week's topics (${w.title}), mixed: ${per * w.days.length} questions in ${per * w.days.length} minutes, +1 / −⅓, option E.`,
    durationMin: per * w.days.length,
    blueprint: w.days.map((d) => ({ section: d.section, count: per, ...d.filter, examLevel: d.examLevel, difficulty: MODERATE_TO_TOUGH })),
    seed: ++seed, cutoffPct: 0.6, examLevel: LVL_EXAM[lvl],
  });
  return id;
}

function buildWeeks(prefix: string, lvl: BiharLvl, raw: RawWeek[], weekOffset = 0, bigTests?: (n: number, w: RawWeek) => string[]): PlanWeek[] {
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
  { topic: "हिंदी: अपठित गद्यांश", section: "hindi", detail: "गद्यांश पढ़कर मूल भाव, शीर्षक, शब्दार्थ व व्याकरण।", filter: { topic: HINDI_PROSE } },
  { topic: "English: Reading comprehension", section: "english", detail: "Unseen passages: main idea, title, vocabulary in context, inference.", filter: { topic: EN_COMPREHENSION } },
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
      { topic: "General awareness (static GK)", section: "gk", detail: "Symbols, important days, organisations, awards, books.", filter: { topic: "Static GK" } },
      { topic: "Current affairs: India & world", section: "gk", detail: "The last 12 months: appointments, awards, sports, schemes, summits, science. Every fact source-checked.", filter: { topic: CA_NATIONAL } },
      { topic: "Bihar current affairs", section: "gk", detail: "The last 12 months in Bihar: schemes, projects, events, appointments, awards.", filter: { topic: CA_BIHAR } },
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
      { topic: "General awareness (static GK)", section: "gk", detail: "Symbols, important days, organisations, awards, books.", filter: { topic: "Static GK" } },
      { topic: "Current affairs: India & world", section: "gk", detail: "The last 12 months: appointments, awards, sports, schemes, summits, science. Every fact source-checked.", filter: { topic: CA_NATIONAL } },
      { topic: "Bihar current affairs", section: "gk", detail: "The last 12 months in Bihar: schemes, projects, events, appointments, awards.", filter: { topic: CA_BIHAR } },
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
  urdu: [
    { topic: "Urdu: qawaid (grammar)", section: "urdu", detail: "Ism, fe'l, sifat, zameer, huroof, tazkeer-o-taanees, wahid-jama, zamane, alamat-e-auqaf.", filter: { topic: "Urdu qawaid" }, examLevel: "l2" },
    { topic: "Urdu: prose & writers", section: "urdu", detail: "Major prose writers and their works, fiction, drama and essay.", filter: { topic: "Urdu prose & writers" }, examLevel: "l2" },
    { topic: "Urdu: poetry & poets", section: "urdu", detail: "Major poets, their collections and takhallus.", filter: { topic: "Urdu poetry & poets" }, examLevel: "l2" },
    { topic: "Urdu: literary forms", section: "urdu", detail: "Ghazal, nazm, qasida, marsiya, masnavi, rubai, dastan, afsana; radif, qafiya, bahr.", filter: { topic: "Urdu literary forms" }, examLevel: "l2" },
    { topic: "Urdu: language & literature history", section: "urdu", detail: "Origin of Urdu, Dakani, Delhi and Lucknow schools, Fort William College, Aligarh and Progressive movements.", filter: { topic: "Urdu language & literature history" }, examLevel: "l2" },
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
  ms: plan68("ms"), ss: plan68("ss"), hindi: plan68("hindi"), english: plan68("english"), sanskrit: plan68("sanskrit"), urdu: plan68("urdu"),
};

// =============================================================================
// Classes 9–10 (Paper 3) and 11–12 (Paper 4), Advt 15/2026 p13–14. Same shape as
// Paper 2: Part I language 30 (qualifying) + Part II GS 40 + Part III subject 80.
// Part I and Part II reuse the Classes 6–8 blocks (the official GS topic list is the
// same). Part III draws the level's own bank: "l3" for 9–10, "l4" for 11–12; a few
// 9–10 subjects also draw the 6–8 bank ("l2"), which is pitched at graduate level too.
// =============================================================================
export type SeniorLevel = "9-10" | "11-12";
export interface LevelSubject { key: string; en: string; hi: string; posts: number }
interface SeniorSubjectDef extends LevelSubject { part3: BlueprintPart[]; days: RawDay[] }

const L3: ExamLevel[] = ["l3"];
const L23: ExamLevel[] = ["l2", "l3"];
const L4: ExamLevel[] = ["l4"];
const tp = (section: Section, count: number, topic: string, examLevels: ExamLevel[]): BlueprintPart => ({ section, count, topic, examLevels });
const dy = (topic: string, section: Section, detail: string, filter: Filter): RawDay => ({ topic, section, detail, filter });

const EN_USAGE = ["Tenses", "Voice", "Narration", "Error spotting", "Subject-verb agreement", "Synonyms", "Antonyms", "One-word substitution", "Idioms", "Spelling", "Articles", "Prepositions", "Modals"];
const HI_GRAMMAR = ["संधि", "समास", "अलंकार", "रस", "छंद", "पर्यायवाची", "विलोम", "अनेकार्थी", "मुहावरे", "लोकोक्तियाँ", "वर्तनी", "वाक्य शुद्धि"];
const S9_MATHS = [
  ["Number systems & polynomials", "Real numbers, Euclid's lemma, HCF/LCM, polynomials and their zeroes, identities."],
  ["Linear & quadratic equations", "Pairs of linear equations and consistency, quadratic equations, discriminant, word problems."],
  ["Arithmetic progressions", "nth term, sum of n terms, word problems."],
  ["Coordinate geometry", "Distance and section formulae, area of a triangle, collinearity."],
  ["Triangles & circles", "Similarity, BPT, Pythagoras, circle theorems, tangents."],
  ["Trigonometry", "Ratios, identities, standard angles, heights and distances."],
  ["Surface areas & volumes", "Solids and their combinations, frustum, areas related to circles."],
  ["Statistics & probability", "Mean, median and mode of grouped data, classical probability."],
] as const;
const S9_SCI = {
  p1: "Motion, force & work", p2: "Light, electricity & magnetism",
  c1: "Matter, atoms & reactions", c2: "Acids, metals & carbon compounds",
  b1: "Cells, tissues & life processes", b2: "Heredity, reproduction & control",
};

const SUBJECTS_9_10: SeniorSubjectDef[] = [
  {
    key: "ss", en: "Social Science", hi: "सामाजिक विज्ञान", posts: 756,
    part3: ssPart3("hg", L23),
    days: [
      dy("History", "gk", "French and Russian revolutions, Nazism, nationalism in Europe and India, globalisation, industrialisation, print culture.", { topic: "History", examLevels: L23 }),
      dy("Geography", "gk", "Physical India, drainage, climate, vegetation, population, resources, agriculture, minerals, industry, transport.", { topic: "Geography", examLevels: L23 }),
      dy("Political science", "gk", "Democracy, constitutional design, elections, institutions, rights, federalism, parties.", { topic: "Polity", examLevels: L23 }),
      dy("Economics", "gk", "Palampur, people as resource, poverty, food security, development, sectors, money and credit, globalisation.", { topic: "Economy", examLevels: L23 }),
    ],
  },
  {
    key: "english", en: "English", hi: "अंग्रेज़ी", posts: 696,
    part3: [tp("english", 30, "English literature", L23), { section: "english", count: 50, topics: EN_USAGE, examLevels: L23 }],
    days: [
      dy("English literature", "english", "Figures of speech, poetic forms, metre, major writers and works.", { topic: "English literature", examLevels: L23 }),
      dy("Tenses, voice & narration", "english", "Advanced tense use and transformations.", { topics: ["Tenses", "Voice", "Narration"], examLevels: L23 }),
      dy("Error spotting & agreement", "english", "Sentence correction at graduate level.", { topics: ["Error spotting", "Subject-verb agreement", "Articles", "Prepositions", "Modals"], examLevels: L23 }),
      dy("Vocabulary", "english", "Synonyms, antonyms, spelling.", { topics: ["Synonyms", "Antonyms", "Spelling"], examLevels: L23 }),
      dy("Idioms & one-word substitution", "english", "Idioms, phrases and one-word substitutes.", { topics: ["Idioms", "One-word substitution"], examLevels: L23 }),
    ],
  },
  {
    key: "maths", en: "Mathematics", hi: "गणित", posts: 570,
    part3: S9_MATHS.map(([t]) => tp("numerical", 10, t, L3)),
    days: S9_MATHS.map(([t, d]) => dy(`Maths: ${t}`, "numerical", d, { topic: t, examLevels: L3 })),
  },
  {
    key: "science", en: "Science", hi: "विज्ञान", posts: 463,
    part3: [
      tp("science", 14, S9_SCI.p1, L3), tp("science", 14, S9_SCI.p2, L3),
      tp("science", 12, S9_SCI.c1, L3), tp("science", 12, S9_SCI.c2, L3),
      tp("science", 14, S9_SCI.b1, L3), tp("science", 14, S9_SCI.b2, L3),
    ],
    days: [
      dy(`Physics: ${S9_SCI.p1}`, "science", "Motion, laws of motion, gravitation, pressure and buoyancy, work, energy, power, sound.", { topic: S9_SCI.p1, examLevels: L3 }),
      dy(`Physics: ${S9_SCI.p2}`, "science", "Mirrors, lenses, the eye, electricity, magnetic effects, induction.", { topic: S9_SCI.p2, examLevels: L3 }),
      dy(`Chemistry: ${S9_SCI.c1}`, "science", "States of matter, atoms and molecules, mole concept, structure of the atom, reactions.", { topic: S9_SCI.c1, examLevels: L3 }),
      dy(`Chemistry: ${S9_SCI.c2}`, "science", "Acids, bases and salts, metals and non-metals, carbon compounds, periodic classification.", { topic: S9_SCI.c2, examLevels: L3 }),
      dy(`Biology: ${S9_SCI.b1}`, "science", "Cells, tissues, nutrition, respiration, transport, excretion, health.", { topic: S9_SCI.b1, examLevels: L3 }),
      dy(`Biology: ${S9_SCI.b2}`, "science", "Control and coordination, reproduction, heredity, environment.", { topic: S9_SCI.b2, examLevels: L3 }),
    ],
  },
  {
    key: "hindi", en: "Hindi", hi: "हिंदी", posts: 361,
    part3: [tp("hindi", 30, "हिंदी साहित्य", L23), { section: "hindi", count: 50, topics: HI_GRAMMAR, examLevels: L23 }],
    days: [
      dy("हिंदी साहित्य", "hindi", "काल-विभाजन, भक्ति से नई कविता तक, प्रमुख कवि-लेखक व रचनाएँ।", { topic: "हिंदी साहित्य", examLevels: L23 }),
      dy("हिंदी: संधि व समास", "hindi", "संधि-विच्छेद, समास-विग्रह व भेद।", { topics: ["संधि", "समास"], examLevels: L23 }),
      dy("हिंदी: अलंकार, रस व छंद", "hindi", "शब्दालंकार-अर्थालंकार, रस, प्रमुख छंद।", { topics: ["अलंकार", "रस", "छंद"], examLevels: L23 }),
      dy("हिंदी: शब्द-भंडार व शुद्धि", "hindi", "पर्यायवाची, विलोम, अनेकार्थी, वर्तनी, वाक्य शुद्धि।", { topics: ["पर्यायवाची", "विलोम", "अनेकार्थी", "वर्तनी", "वाक्य शुद्धि"], examLevels: L23 }),
      dy("हिंदी: मुहावरे व लोकोक्तियाँ", "hindi", "अर्थ और प्रयोग।", { topics: ["मुहावरे", "लोकोक्तियाँ"], examLevels: L23 }),
    ],
  },
];

/** A Part III subject whose topics each get one plan day (level l4). */
function l4Subject(key: string, en: string, hi: string, posts: number, section: Section, topics: [string, number, string][]): SeniorSubjectDef {
  return {
    key, en, hi, posts,
    part3: topics.map(([t, n]) => tp(section, n, t, L4)),
    days: topics.map(([t, , d]) => dy(`${en}: ${t}`, section, d, { topic: t, examLevels: L4 })),
  };
}
const SUBJECTS_11_12: SeniorSubjectDef[] = [
  l4Subject("chemistry", "Chemistry", "रसायन शास्त्र", 3695, "chemistry", [
    ["Physical chemistry", 30, "Mole concept, atomic structure, thermodynamics, equilibrium, electrochemistry, kinetics, solutions, solid state, surface chemistry."],
    ["Inorganic chemistry", 25, "Periodicity, bonding, s-, p-, d- and f-block, coordination compounds, metallurgy."],
    ["Organic chemistry", 25, "Nomenclature, isomerism, electronic effects, mechanisms, named reactions, functional groups, biomolecules, polymers."],
  ]),
  l4Subject("physics", "Physics", "भौतिकी", 1758, "physics", [
    ["Mechanics", 22, "Kinematics, laws of motion, work-energy, rotation, gravitation, elasticity, fluids, SHM."],
    ["Heat & thermodynamics", 12, "Calorimetry, heat transfer, kinetic theory, laws of thermodynamics, Carnot engine, entropy."],
    ["Electricity & magnetism", 20, "Electrostatics, capacitors, current electricity, magnetic effects, EMI, AC circuits, EM waves."],
    ["Optics & waves", 13, "Waves, sound, Doppler effect, ray optics, interference, diffraction, polarisation."],
    ["Modern physics", 13, "Photoelectric effect, atoms, nuclei, radioactivity, semiconductors, relativity basics."],
  ]),
  l4Subject("english", "English", "अंग्रेज़ी", 1321, "english", [
    ["British poetry & drama", 18, "Chaucer to the Modernists: poets, dramatists, Shakespeare, forms and movements."],
    ["British prose & fiction", 18, "The rise of the novel to the 20th century, essayists, characters and movements."],
    ["Indian & world writing in English", 16, "Indian English writers, American and postcolonial literature."],
    ["Literary terms, forms & criticism", 16, "Figures of speech, prosody, genres, critics and critical theory."],
    ["Advanced grammar & usage", 12, "Clauses, transformations, non-finites, usage and error correction."],
  ]),
  l4Subject("botany", "Botany", "वनस्पति विज्ञान", 1078, "botany", [
    ["Plant diversity & taxonomy", 16, "Classification, microbes, algae to angiosperms, life cycles, nomenclature, families."],
    ["Plant anatomy & morphology", 16, "Root, stem, leaf, flower, fruit, tissues, secondary growth."],
    ["Plant physiology", 16, "Water relations, mineral nutrition, photosynthesis, respiration, growth regulators."],
    ["Cell biology, genetics & molecular biology", 16, "Cell cycle, Mendelian genetics, linkage, DNA, gene expression, mutation."],
    ["Ecology & plant biotechnology", 16, "Ecosystems, biodiversity, reproduction in flowering plants, tissue culture, rDNA, transgenics."],
  ]),
  l4Subject("psychology", "Psychology", "मनोविज्ञान", 1030, "psychology", [
    ["Foundations & research methods", 13, "Schools, methods, research design, statistics, biological bases."],
    ["Cognitive processes", 14, "Perception, learning, memory, thinking, motivation and emotion."],
    ["Human development", 13, "Piaget, Vygotsky, Erikson, Kohlberg, attachment, adolescence."],
    ["Intelligence & personality", 13, "Theories and tests of intelligence, personality theories and assessment."],
    ["Psychological disorders & therapy", 14, "Classification, major disorders, psychotherapies."],
    ["Social psychology & well-being", 13, "Attitudes, attribution, social influence, groups, stress and coping."],
  ]),
];

// ---- the rest of BPSC's subject list. Each goes live by itself once its bank can fill
// a full 80-question Part III (see `isLive`); until then it shows as "coming soon". ----
const L34: ExamLevel[] = ["l3", "l4"];
const SA_TOPICS = ["संस्कृत संधि", "संस्कृत समास", "संस्कृत कारक", "संस्कृत शब्द रूप", "संस्कृत धातु रूप", "संस्कृत साहित्य", "संस्कृत व्याकरण"];
const MUSIC_TOPICS: [string, string][] = [
  ["Music theory & terminology", "Nad, shruti, swar, saptak, thaat, alankar, gamak, meend."],
  ["Ragas", "Thaat, aroh-avroh, vadi-samvadi, time theory and pakad of common ragas."],
  ["Taals & laya", "Teentaal, Ektaal, Jhaptaal, Rupak, Dadra, Keherwa, Chautaal; laya."],
  ["Instruments", "Classification of instruments and their parts."],
  ["Musicians, gharanas & history", "Bhatkhande, Paluskar, Natyashastra, Sangeet Ratnakar, gharanas."],
];
const URDU_DAY_DETAIL = [
  "Qawaid: ism, fe'l, sifat, tazkeer-o-taanees, wahid-jama, sanaye-badaye.",
  "Major prose writers and their works: dastan, novel, afsana, drama, criticism.",
  "Major poets, their collections and takhallus.",
  "Ghazal, nazm, qasida, marsiya, masnavi, rubai; radif, qafiya, bahr.",
  "Origin of Urdu, Dakani, Delhi and Lucknow schools, Fort William, Aligarh, Progressive.",
];
const urduSubject = (lv: ExamLevel[]): Pick<SeniorSubjectDef, "part3" | "days"> => ({
  part3: [{ section: "urdu", count: 80, topics: URDU_SUBJECT_TOPICS, examLevels: lv }],
  days: URDU_SUBJECT_TOPICS.map((t, i) => dy(`Urdu: ${t.replace(/^Urdu /, "")}`, "urdu", URDU_DAY_DETAIL[i], { topic: t, examLevels: lv })),
});
const sanskritSubject = (lv: ExamLevel[]): Pick<SeniorSubjectDef, "part3" | "days"> => ({
  part3: [{ section: "sanskrit", count: 80, topics: SA_TOPICS, examLevels: lv }],
  days: [
    dy("संस्कृत: शब्द रूप व धातु रूप", "sanskrit", "शब्द रूप, धातु रूप, लकार।", { topics: ["संस्कृत शब्द रूप", "संस्कृत धातु रूप"], examLevels: lv }),
    dy("संस्कृत: संधि, समास व कारक", "sanskrit", "संधि (सूत्र सहित), समास, कारक-विभक्ति।", { topics: ["संस्कृत संधि", "संस्कृत समास", "संस्कृत कारक"], examLevels: lv }),
    dy("संस्कृत व्याकरण: प्रत्यय व वाच्य", "sanskrit", "कृत्-तद्धित प्रत्यय, उपसर्ग, वाच्य, स्त्री-प्रत्यय।", { topic: "संस्कृत व्याकरण", examLevels: lv }),
    dy("संस्कृत साहित्य", "sanskrit", "वेद से आधुनिक काल तक: कवि, नाटककार, काव्यशास्त्र।", { topic: "संस्कृत साहित्य", examLevels: lv }),
  ],
});
const musicSubject = (lv: ExamLevel[]): Pick<SeniorSubjectDef, "part3" | "days"> => ({
  part3: MUSIC_TOPICS.map(([t]) => tp("music", 16, t, lv)),
  days: MUSIC_TOPICS.map(([t, d]) => dy(`Music: ${t}`, "music", d, { topic: t, examLevels: lv })),
});
/** A Classes 11–12 subject made of its own topics plus a slice of the 9–10 bank on the same subject. */
function l4With9(key: string, en: string, hi: string, posts: number, section: Section, topics: [string, number, string][], nine?: [string, number]): SeniorSubjectDef {
  const s = l4Subject(key, en, hi, posts, section, topics);
  if (!nine) return s;
  return {
    ...s,
    part3: [...s.part3, tp(section, nine[1], nine[0], L3)],
    days: [...s.days, dy(`${en}: Classes 9–10 foundations`, section, "The secondary-school base of the subject (NCERT 9–10).", { topic: nine[0], examLevels: L3 })],
  };
}

const MORE_9_10: SeniorSubjectDef[] = [
  { key: "urdu", en: "Urdu", hi: "उर्दू", posts: 660, ...urduSubject(L23) },
  { key: "sanskrit", en: "Sanskrit", hi: "संस्कृत", posts: 322, ...sanskritSubject(L23) },
  {
    key: "pe", en: "Physical Education", hi: "शारीरिक शिक्षा", posts: 47,
    part3: [tp("physical-education", 20, "Anatomy, physiology & health", L3), tp("physical-education", 20, "Sports training & fitness", L3), tp("physical-education", 24, "Games, rules & measurements", L3), tp("physical-education", 16, "History, organisation & Olympics", L3)],
    days: [
      dy("PE: Anatomy, physiology & health", "physical-education", "Body systems, exercise physiology, first aid, nutrition, posture.", { topic: "Anatomy, physiology & health", examLevels: L3 }),
      dy("PE: Sports training & fitness", "physical-education", "Training principles, fitness components, tests, yoga.", { topic: "Sports training & fitness", examLevels: L3 }),
      dy("PE: Games, rules & measurements", "physical-education", "Field and court measurements, rules, terms, equipment.", { topic: "Games, rules & measurements", examLevels: L3 }),
      dy("PE: History, organisation & Olympics", "physical-education", "Olympic movement, sports bodies, awards, tournaments.", { topic: "History, organisation & Olympics", examLevels: L3 }),
    ],
  },
  { key: "music", en: "Music", hi: "संगीत", posts: 2, ...musicSubject(L34) },
];

const MORE_11_12: SeniorSubjectDef[] = [
  { key: "urdu", en: "Urdu", hi: "उर्दू", posts: 877, ...urduSubject(L34) },
  { key: "sanskrit", en: "Sanskrit", hi: "संस्कृत", posts: 746, ...sanskritSubject(L34) },
  {
    key: "hindi", en: "Hindi", hi: "हिंदी", posts: 739,
    part3: [tp("hindi", 30, "हिंदी साहित्य", L34), tp("hindi", 12, "काव्यशास्त्र", L4), { section: "hindi", count: 38, topics: HI_GRAMMAR, examLevels: L34 }],
    days: [
      dy("हिंदी साहित्य का इतिहास", "hindi", "आदिकाल से समकालीन तक: धाराएँ, कवि, लेखक, आलोचक।", { topic: "हिंदी साहित्य", examLevels: L34 }),
      dy("काव्यशास्त्र", "hindi", "रस, शब्द-शक्ति, ध्वनि, वक्रोक्ति, रीति, औचित्य; पाश्चात्य काव्यशास्त्र।", { topic: "काव्यशास्त्र", examLevels: L4 }),
      dy("हिंदी: संधि, समास, अलंकार, छंद", "hindi", "व्याकरण और काव्य-रूप।", { topics: ["संधि", "समास", "अलंकार", "रस", "छंद"], examLevels: L34 }),
      dy("हिंदी: शब्द-भंडार, मुहावरे व लोकोक्तियाँ", "hindi", "पर्यायवाची, विलोम, मुहावरे, लोकोक्तियाँ।", { topics: ["पर्यायवाची", "विलोम", "अनेकार्थी", "मुहावरे", "लोकोक्तियाँ", "वर्तनी", "वाक्य शुद्धि"], examLevels: L34 }),
    ],
  },
  { key: "music", en: "Music", hi: "संगीत", posts: 736, ...musicSubject(L34) },
  l4With9("polsci", "Political Science", "राजनीति शास्त्र", 665, "gk", [
    ["Political theory", 17, "Liberty, equality, justice, rights, citizenship, nationalism, secularism."],
    ["Indian Constitution & government", 17, "Making of the Constitution, rights, institutions, federalism, politics since 1947."],
    ["Indian & Western political thought", 17, "Kautilya to Ambedkar; Plato to Marx."],
    ["International relations & comparative politics", 17, "Cold War, UN, globalisation, India's foreign policy, regional groupings."],
  ], ["Polity", 12]),
  l4Subject("maths", "Mathematics", "गणित", 657, "numerical", [
    ["Sets, functions & algebra", 16, "Sets, relations, functions, complex numbers, P&C, binomial theorem, sequences."],
    ["Matrices & determinants", 12, "Operations, inverse, rank, systems of equations."],
    ["Calculus", 24, "Limits, continuity, derivatives and applications, integrals, differential equations."],
    ["Vectors & 3D geometry", 12, "Dot and cross products, lines, planes, conics."],
    ["Probability & statistics", 16, "Conditional probability, Bayes, distributions, linear programming."],
  ]),
  l4With9("history", "History", "इतिहास", 608, "gk", [
    ["Ancient India", 17, "Harappa to the Guptas; sources, inscriptions, Magadha."],
    ["Medieval India", 17, "Sultanate, Vijayanagara, Bhakti-Sufi, Mughals."],
    ["Modern India", 17, "Colonial rule, 1857, reform, the national movement, partition."],
    ["World history", 17, "Early societies to paths to modernisation (NCERT Themes in World History)."],
  ], ["History", 12]),
  l4Subject("zoology", "Zoology", "जंतु विज्ञान", 449, "zoology", [
    ["Animal diversity & classification", 16, "Non-chordates to mammals, classification, characters."],
    ["Animal physiology", 20, "Digestion, respiration, circulation, excretion, neural and hormonal control."],
    ["Cell biology & genetics", 16, "Cell, cell division, Mendelian and human genetics, molecular basis."],
    ["Evolution, ecology & behaviour", 12, "Origin of life, evidences, theories, populations, behaviour."],
    ["Developmental biology & applied zoology", 16, "Gametogenesis, embryology, immunology, applied zoology."],
  ]),
  l4Subject("homesci", "Home Science", "गृह विज्ञान", 418, "home-science", [
    ["Food & nutrition", 20, "Nutrients, deficiency diseases, meal planning, food safety."],
    ["Human development & family studies", 16, "Life stages, child care, family and community."],
    ["Fabric & apparel", 16, "Fibres, yarns, fabrics, dyeing, care of clothes."],
    ["Resource management", 12, "Time, energy, money, consumer education."],
    ["Communication & extension", 16, "Communication, extension methods, community development."],
  ]),
  l4Subject("cs", "Computer Science", "कंप्यूटर विज्ञान", 407, "computer-science", [
    ["Programming in Python", 20, "Data types, control flow, functions, strings, lists, dictionaries, files."],
    ["Data structures & algorithms", 16, "Stacks, queues, searching, sorting, complexity."],
    ["Databases & SQL", 16, "Relational model, keys, SQL queries, normalisation."],
    ["Computer networks", 12, "Topologies, protocols, OSI/TCP-IP, internet, security."],
    ["Computer organisation & operating systems", 16, "Number systems, logic gates, memory, CPU, OS concepts."],
  ]),
  l4Subject("sociology", "Sociology", "समाज शास्त्र", 266, "sociology", [
    ["Sociological concepts & thinkers", 24, "Society, culture, institutions; Comte, Durkheim, Weber, Marx, Indian sociologists."],
    ["Indian society", 24, "Caste, tribe, family, kinship, religion, village and urban India."],
    ["Social change & development", 16, "Modernisation, globalisation, social movements."],
    ["Research methods", 16, "Methods, sampling, survey, fieldwork."],
  ]),
  l4With9("geography", "Geography", "भूगोल", 176, "gk", [
    ["Physical geography", 20, "Earth, landforms, climate, oceans, biogeography."],
    ["Human & economic geography", 17, "Population, settlements, economic activities, transport and trade."],
    ["Geography of India", 20, "Physiography, drainage, climate, resources, regions."],
    ["Practical geography & maps", 11, "Maps, scales, projections, remote sensing, GIS."],
  ], ["Geography", 12]),
  l4With9("economics", "Economics", "अर्थशास्त्र", 138, "gk", [
    ["Microeconomics", 20, "Demand, supply, elasticity, production, costs, markets."],
    ["Macroeconomics", 20, "National income, money, banking, income determination, government budget, BoP."],
    ["Indian economic development", 17, "Planning, reforms since 1991, poverty, employment, sectors."],
    ["Statistics for economics", 11, "Data, measures of central tendency and dispersion, correlation, index numbers."],
  ], ["Economy", 12]),
  l4Subject("business", "Business Studies", "व्यावसायिक अध्ययन", 133, "commerce", [
    ["Principles & functions of management", 28, "Management principles, planning, organising, staffing, directing, controlling."],
    ["Business finance & marketing", 28, "Financial management, markets, marketing mix."],
    ["Business environment & consumer protection", 24, "Business environment, forms of organisation, consumer protection."],
  ]),
  l4Subject("philosophy", "Philosophy", "दर्शन शास्त्र", 80, "philosophy", [
    ["Indian philosophy", 32, "Vedanta, Nyaya-Vaisheshika, Samkhya-Yoga, Mimamsa, Buddhism, Jainism, Charvaka."],
    ["Western philosophy", 28, "Plato and Aristotle to Descartes, Hume, Kant and the moderns."],
    ["Logic & ethics", 20, "Deduction, induction, fallacies; ethical theories."],
  ]),
  l4Subject("accountancy", "Accountancy", "लेखाशास्त्र", 66, "commerce", [
    ["Financial accounting", 32, "Principles, journal, ledger, trial balance, depreciation, final accounts."],
    ["Partnership & company accounts", 28, "Partnership, shares, debentures."],
    ["Analysis of financial statements", 20, "Ratios, cash flow statement."],
  ]),
  l4Subject("entrepreneurship", "Entrepreneurship", "उद्यमशीलता", 58, "commerce", [
    ["Entrepreneurship concepts", 28, "Entrepreneur, types, functions, entrepreneurial motivation."],
    ["Business planning & opportunity", 28, "Idea generation, opportunity assessment, business plan."],
    ["Enterprise management & resources", 24, "Resource mobilisation, marketing, growth of enterprises."],
  ]),
];

/** Questions available to one part of a paper (same filters as composeTest, ignoring difficulty). */
function poolSize(p: BlueprintPart): number {
  return questionBank.filter((q) =>
    q.section === p.section && !q.passageId &&
    (p.topic ? q.topic === p.topic : p.topics ? p.topics.includes(q.topic) : true) &&
    matchesLevel(p, q)).length;
}
/** Live = the bank can fill every part of the 80-question Part III. Days with no questions yet are dropped. */
function liveOnly(list: SeniorSubjectDef[]): SeniorSubjectDef[] {
  return list
    .filter((s) => s.part3.every((p) => poolSize(p) >= p.count))
    .map((s) => ({ ...s, days: s.days.filter((d) => poolSize({ section: d.section, count: 1, ...d.filter }) > 0) }));
}
const ALL_9_10 = [...SUBJECTS_9_10, ...MORE_9_10];
const ALL_11_12 = [...SUBJECTS_11_12, ...MORE_11_12];
const LIVE_9_10 = liveOnly(ALL_9_10);
const LIVE_11_12 = liveOnly(ALL_11_12);
const soonOf = (all: SeniorSubjectDef[], live: SeniorSubjectDef[], later: LevelSubject): LevelSubject[] => [
  ...all.filter((s) => !live.some((x) => x.key === s.key)).map(({ key, en, hi, posts }) => ({ key, en, hi, posts })),
  later,
];
const SOON_9_10 = soonOf(ALL_9_10, LIVE_9_10, { key: "later", en: "Bangla, Fine Arts, Dance, Maithili, Arabic, Persian", hi: "बांग्ला, ललित कला, नृत्य, मैथिली, अरबी, फ़ारसी", posts: 0 });
const SOON_11_12 = soonOf(ALL_11_12, LIVE_11_12, { key: "later", en: "Bangla, Bhojpuri, Magahi, Maithili, Pali, Prakrit, Arabic, Persian", hi: "बांग्ला, भोजपुरी, मगही, मैथिली, पाली, प्राकृत, अरबी, फ़ारसी", posts: 0 });

export const BIHAR_SENIOR: Record<SeniorLevel, { prefix: string; posts: number; subjects: SeniorSubjectDef[]; soon: LevelSubject[] }> = {
  "9-10": { prefix: "bh910", posts: 3877, subjects: LIVE_9_10, soon: SOON_9_10 },
  "11-12": { prefix: "bh1112", posts: 16101, subjects: LIVE_11_12, soon: SOON_11_12 },
};
export const SENIOR_LEVEL_KEYS = Object.keys(BIHAR_SENIOR) as SeniorLevel[];
export function seniorSubject(level: SeniorLevel, key: string): SeniorSubjectDef | undefined {
  return BIHAR_SENIOR[level].subjects.find((s) => s.key === key);
}
/** Paper 3 / Paper 4 for one subject. */
export function seniorPaper(level: SeniorLevel, key: string): BlueprintPart[] {
  return [...LANG_PART, ...GS_40, ...seniorSubject(level, key)!.part3];
}

function planSenior(level: SeniorLevel, s: SeniorSubjectDef): PlanWeek[] {
  const pre = `${BIHAR_SENIOR[level].prefix}${s.key}`;
  let k = 0;
  const big = (n: number, w: RawWeek) => [
    weekTest(`${pre}-w${n}big${++k}`, `Week ${n} Test 1: ${s.en} (Classes ${lvlLabel(level)})`, level, w),
    weekTest(`${pre}-w${n}big${++k}`, `Week ${n} Test 2: ${s.en} (Classes ${lvlLabel(level)})`, level, w),
  ];
  const subjectWeek = buildWeeks(pre, level, [{
    title: `Part III · ${s.en} (80 Q)`, focus: `विषय-पत्र: ${s.hi} (कक्षा ${lvlLabel(level)}, SCERT/NCERT)`, days: s.days,
  }], common68.length, big);
  return [
    ...common68, // Part I and Part II are the same blocks as Classes 6–8
    ...subjectWeek,
    {
      n: common68.length + subjectWeek.length + 1, phase: "revision", title: `Revision: full paper (${s.en}, Classes ${lvlLabel(level)})`,
      focus: "Exam conditions: 150 questions, 150 minutes, option E",
      days: [1, 2, 3, 4].map((i) => ({
        topic: `Full mock ${i}`, section: "gk" as Section,
        detail: "Take a full paper in 150 minutes. Merit counts Parts II + III; Part I only needs 30%.",
        testIds: [fullPaper(`${pre}-rev${i}`, `Revision Full Paper · Classes ${lvlLabel(level)} · ${s.en}: Mock ${i}`, level, seniorPaper(level, s.key), "Full exam-pattern mock with analysis.")],
      })),
      bigTestIds: [],
    },
  ];
}
export const biharSeniorPlans: Record<SeniorLevel, Record<string, PlanWeek[]>> = {
  "9-10": Object.fromEntries(LIVE_9_10.map((s) => [s.key, planSenior("9-10", s)])),
  "11-12": Object.fromEntries(LIVE_11_12.map((s) => [s.key, planSenior("11-12", s)])),
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

function sectionMock(id: string, title: string, covers: string, lvl: BiharLvl, blueprint: BlueprintPart[]): MockTest {
  const n = blueprint.reduce((a, p) => a + p.count, 0);
  return {
    ...MARK, id, title, covers, post: post(lvl), free: true, category: "subject", tier: "Exam level",
    description: `${n} questions in ${n} minutes, BPSC TRE pattern: +1 / −⅓, option E (not attempting), blank also −⅓.`,
    durationMin: n, examLevel: LVL_EXAM[lvl], seed: idSeed(id), cutoffPct: 0.6,
    blueprint: blueprint.map((p) => ({ difficulty: MODERATE_TO_TOUGH, ...p })),
  };
}
/** A fifth-size copy of a paper, keeping every part's share (at least 1 Q each). */
const scaled = (bp: BlueprintPart[], f = 0.2): BlueprintPart[] => bp.map((p) => ({ ...p, count: Math.max(1, Math.round(p.count * f)) }));

/** Legacy free-mock helper data. Live access is controlled by the two designated free-test IDs in plan-access. */
export const FREE_MOCKS_PER_EXAM = 10;

/** 20-question Paper 1 in the real split (150 → 20): language 4, GS 16. */
const FREE_20_P1: BlueprintPart[] = [
  { section: "hindi", count: 2, examLevel: "l1" }, { section: "english", count: 2, examLevel: "l1" },
  { section: "numerical", count: 4, examLevel: "l1" },
  { section: "reasoning", count: 3 },
  { section: "gk", count: 2, excludeTopics: STATIC_GA }, { section: "gk", count: 1, topic: CA_BIHAR, difficulty: CA_DIFF },
  { section: "science", count: 2, topics: ["Physics", "Chemistry", "Biology"], examLevel: "l1" },
  { section: "gk", count: 1, topics: ["Polity", "Economy"], examLevel: "l1" },
  { section: "gk", count: 1, topic: "History", examLevel: "l1" },
  { section: "gk", count: 1, topic: "Geography", examLevel: "l1" },
  { section: "science", count: 1, topic: "Environmental science", examLevel: "l1" },
];
/** 20-question Paper 2 in the real split (150 → 20): language 4, GS 5, your subject 11. */
const SUBJECT_11: Record<BiharSubject, BlueprintPart[]> = {
  ms: [{ section: "numerical", count: 6 }, { section: "science", count: 5 }],
  ss: [{ section: "gk", count: 6, topic: "History" }, { section: "gk", count: 5, topic: "Geography" }],
  hindi: [{ section: "hindi", count: 11 }],
  english: [{ section: "english", count: 11 }],
  sanskrit: [{ section: "sanskrit", count: 11 }],
  urdu: [{ section: "urdu", count: 11, topics: URDU_SUBJECT_TOPICS }],
};
/** Language 4 + GS 5 of a 20-question Paper 2/3/4 (the subject adds 11). */
const FREE_P2_COMMON: BlueprintPart[] = [
  { section: "hindi", count: 2 }, { section: "english", count: 2 },
  { section: "numerical", count: 1, examLevel: "l2" }, { section: "gk", count: 1, topic: CA_NATIONAL, difficulty: CA_DIFF },
  { section: "science", count: 1, examLevel: "l2" }, { section: "gk", count: 1, topic: "History", examLevel: "l2" },
  { section: "gk", count: 1, topic: "Geography", examLevel: "l2" },
];
function free20p2(subject: BiharSubject): BlueprintPart[] {
  return [...FREE_P2_COMMON, ...SUBJECT_11[subject].map((p) => ({ ...p, examLevel: "l2" as ExamLevel }))];
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
  sectionMock("bh15-sec-lang", "Part I · Language (qualifying)", "English + Hindi: you need at least 30%", "1-5", PAPER_1.slice(0, LANG_PART.length)),
  sectionMock("bh15-sec-maths", "Elementary Mathematics", "Number system, arithmetic, commercial maths, time & work, geometry, DI", "1-5", [{ section: "numerical", count: 25, examLevel: "l1" }]),
  sectionMock("bh15-sec-mental", "Mental Ability", "Series, coding, relations, directions, analogy, Venn, clocks & calendars", "1-5", [{ section: "reasoning", count: 20 }]),
  sectionMock("bh15-sec-science", "General Science & Environment", "Physics, chemistry, biology + environment", "1-5",
    [{ section: "science", count: 20, topics: ["Physics", "Chemistry", "Biology"], examLevel: "l1" }, { section: "science", count: 5, topic: "Environmental science", examLevel: "l1" }]),
  sectionMock("bh15-sec-social", "Social Science, National Movement & Geography", "Polity, economy, Indian National Movement, geography", "1-5",
    [{ section: "gk", count: 10, topics: ["Polity", "Economy"], examLevel: "l1" }, { section: "gk", count: 10, topic: "History", examLevel: "l1" }, { section: "gk", count: 10, topic: "Geography", examLevel: "l1" }]),
  sectionMock("bh15-sec-awareness", "General Awareness", "Static GK plus current affairs (India, world and Bihar)", "1-5", [
    { section: "gk", count: 14, excludeTopics: STATIC_GA },
    { section: "gk", count: 4, topic: CA_NATIONAL, difficulty: CA_DIFF },
    { section: "gk", count: 2, topic: CA_BIHAR, difficulty: CA_DIFF },
  ]),
];
export function biharSectionMocks68(subject: BiharSubject): MockTest[] {
  const s = BIHAR_SUBJECTS.find((x) => x.key === subject)!;
  return [
    sectionMock(`bh68-sec-lang`, "Part I · Language (qualifying)", "English + Hindi: you need at least 30%", "6-8", LANG_PART),
    sectionMock(`bh68-sec-gs`, "Part II · General Studies (40 Q)", "Maths, general awareness, general science, National Movement, geography", "6-8", GS_40),
    // Part III: three full 80-question subject mocks (Mock 1 keeps its original id).
    ...[1, 2, 3].map((i) => sectionMock(
      i === 1 ? `bh68-sec-${subject}` : `bh68-sec-${subject}-${i}`,
      `Part III · ${s.en} (80 Q): Mock ${i}`,
      `The full 80-question subject paper: ${s.en}, SCERT/NCERT level`, "6-8",
      SUBJECT_80[subject].map((p) => ({ ...p, examLevel: "l2" as ExamLevel })),
    )),
  ];
}
// ---- Classes 9–10 and 11–12: free minis and Part III section mocks ------------------
/** Shrink a blueprint to exactly n questions, keeping each part's share (largest remainder). */
function scaleTo(bp: BlueprintPart[], n: number): BlueprintPart[] {
  const total = bp.reduce((a, p) => a + p.count, 0);
  const raw = bp.map((p) => (p.count * n) / total);
  const out = raw.map(Math.floor);
  let left = n - out.reduce((a, b) => a + b, 0);
  raw.map((r, i) => [r - Math.floor(r), i] as const).sort((a, b) => b[0] - a[0]).forEach(([, i]) => { if (left-- > 0) out[i]++; });
  return bp.map((p, i) => ({ ...p, count: out[i] })).filter((p) => p.count > 0);
}
const seniorPost = (level: SeniorLevel) => `Classes ${lvlLabel(level)}`;

function buildSeniorFree(level: SeniorLevel, s: SeniorSubjectDef): MockTest[] {
  const pre = BIHAR_SENIOR[level].prefix;
  return Array.from({ length: FREE_MOCKS_PER_EXAM }, (_, i) => ({
    ...sectionMock(`${pre}-free-${s.key}-${i + 1}`, `Free Mock ${i + 1} · ${s.en}`, `Language, General Studies and ${s.en} (${seniorPost(level)}) in the real paper split`, level,
      [...FREE_P2_COMMON, ...scaleTo(s.part3, 11)]),
    category: "mixed" as const, demo: true,
  }));
}
function buildSeniorSections(level: SeniorLevel, s: SeniorSubjectDef): MockTest[] {
  const pre = BIHAR_SENIOR[level].prefix;
  return [1, 2, 3].map((i) => sectionMock(
    i === 1 ? `${pre}-sec-${s.key}` : `${pre}-sec-${s.key}-${i}`,
    `Part III · ${s.en} (80 Q): Mock ${i}`,
    `The full 80-question subject paper: ${s.en}, ${seniorPost(level)}`, level, s.part3,
  ));
}
const seniorFree = Object.fromEntries(SENIOR_LEVEL_KEYS.map((lv) => [lv, Object.fromEntries(BIHAR_SENIOR[lv].subjects.map((s) => [s.key, buildSeniorFree(lv, s)]))])) as Record<SeniorLevel, Record<string, MockTest[]>>;
const seniorSections = Object.fromEntries(SENIOR_LEVEL_KEYS.map((lv) => [lv, Object.fromEntries(BIHAR_SENIOR[lv].subjects.map((s) => [s.key, buildSeniorSections(lv, s)]))])) as Record<SeniorLevel, Record<string, MockTest[]>>;
/** The 10 FREE mocks for one Classes 9–10 / 11–12 subject. */
export function biharSeniorFreeMocks(level: SeniorLevel, key: string): MockTest[] {
  return seniorFree[level][key] ?? [];
}
/** The three 80-question Part III mocks for one Classes 9–10 / 11–12 subject. Part I and
 *  Part II section mocks are the Classes 6–8 ones (bh68-sec-lang, bh68-sec-gs). */
export function biharSeniorSectionMocks(level: SeniorLevel, key: string): MockTest[] {
  return seniorSections[level][key] ?? [];
}

/** Every Bihar section mock (for routing), de-duplicated. */
export const allBiharSectionMocks: MockTest[] = [
  ...biharFreeMocks15,
  ...BIHAR_SUBJECTS.flatMap((s) => biharFreeMocks68(s.key)),
  ...retiredDemos,
  ...biharSectionMocks15,
  ...[...new Map(BIHAR_SUBJECTS.flatMap((s) => biharSectionMocks68(s.key)).map((t) => [t.id, t])).values()],
  ...SENIOR_LEVEL_KEYS.flatMap((lv) => BIHAR_SENIOR[lv].subjects.flatMap((s) => [...biharSeniorFreeMocks(lv, s.key), ...biharSeniorSectionMocks(lv, s.key)])),
];
/** Every Classes 9–10 / 11–12 paper id prefix + subject key, e.g. "bh910ss", "bh1112chemistry". */
const SENIOR_SUBJECT_PREFIXES = SENIOR_LEVEL_KEYS.flatMap((lv) => BIHAR_SENIOR[lv].subjects.map((s) => `${BIHAR_SENIOR[lv].prefix}${s.key}`));

/** Legacy helper data for free samples; the live access rule is controlled by plan-access.
 *  (classes 6–8: the first full paper in every subject, and the common GS section). */
const FREE_EXTRA_IDS = [
  "bh15-rev1", "bh15-sec-maths", "bh68-sec-gs",
  ...BIHAR_SUBJECTS.map((s) => `bh68${s.key}-rev1`),
  ...SENIOR_SUBJECT_PREFIXES.map((p) => `${p}-rev1`),
];
for (const id of FREE_EXTRA_IDS) {
  const t = getBiharPlanTest(id) ?? allBiharSectionMocks.find((x) => x.id === id);
  if (t) t.demo = true;
}

// =============================================================================
// Urdu / Bangla versions of every paper with a Part I language block. Only the
// 15-question second language changes; the rest (and the seed) stay identical, so
// candidates of every language sit the same General Studies questions.
// =============================================================================
const langOf = (lang: PartILang) => PART_I_LANGS.find((l) => l.key === lang)!;

/** The id of a paper in the chosen Part I language ("bh15-rev1" → "bh15-rev1-ur"). */
export function withLangId(id: string, lang: PartILang): string {
  return lang === "hindi" ? id : `${id}-${langOf(lang).code}`;
}

/** Replace the Hindi Part I block with the chosen language (same position in the paper). */
function swapSecondLanguage(bp: BlueprintPart[], lang: PartILang): BlueprintPart[] {
  if (lang === "hindi") return bp;
  const at = bp.findIndex((p) => p.tag === "part1-lang");
  if (at < 0) return bp;
  const difficulty = bp[at].difficulty;
  const rest = bp.filter((p) => p.tag !== "part1-lang");
  rest.splice(at, 0, ...secondLanguage(lang).map((p) => ({ ...p, difficulty })));
  return rest;
}

function withLanguage(t: MockTest, lang: PartILang): MockTest {
  const L = langOf(lang);
  return {
    ...t,
    id: withLangId(t.id, lang),
    title: `${t.title} · ${L.en}`,
    covers: t.covers?.replace("English + Hindi", `English + ${L.en}`),
    listed: false, // alternates of a listed paper, not extra tests (kept out of the counts)
    blueprint: swapSecondLanguage(t.blueprint, lang),
  };
}

/** The id of a Social Science paper for one Section I/II choice ("hg" keeps the base id). */
export function withSsId(id: string, combo: SsCombo): string {
  return combo === "hg" ? id : `${id}-${combo}`;
}
const SS_BASE_IDS = [
  "bh68-sec-ss", "bh68-sec-ss-2", "bh68-sec-ss-3", ...[1, 2, 3, 4].map((i) => `bh68ss-rev${i}`),
  "bh910-sec-ss", "bh910-sec-ss-2", "bh910-sec-ss-3", ...[1, 2, 3, 4].map((i) => `bh910ss-rev${i}`),
];
const ssVariants: MockTest[] = [];
for (const c of SS_COMBOS.filter((x) => x.key !== "hg")) {
  for (const id of SS_BASE_IDS) {
    const t = getBiharPlanTest(id) ?? allBiharSectionMocks.find((x) => x.id === id);
    if (!t) continue;
    const at = t.blueprint.findIndex((p) => p.count === 40 && p.topic === "History");
    // Classes 9–10 draw the 6–8 and 9–10 banks; Classes 6–8 only their own.
    const part3 = (id.startsWith("bh910") ? ssPart3(c.key, L23) : ssPart3(c.key).map((p) => ({ ...p, examLevel: "l2" as ExamLevel })))
      .map((p) => ({ ...p, difficulty: t.blueprint[at]?.difficulty }));
    const bp = t.blueprint.filter((_, i) => i !== at && i !== at + 1);
    bp.splice(at, 0, ...part3);
    ssVariants.push({
      ...t, id: withSsId(id, c.key), title: `${t.title} · ${c.en}`, listed: false, blueprint: bp,
    });
  }
}
allBiharSectionMocks.push(...ssVariants);

const LANG_BASE_IDS = [
  "bh15-sec-lang", "bh68-sec-lang",
  ...[1, 2, 3, 4, 5].map((i) => `bh15-rev${i}`),
  ...BIHAR_SUBJECTS.flatMap((s) => [1, 2, 3, 4].map((i) => `bh68${s.key}-rev${i}`)),
  ...SS_COMBOS.filter((x) => x.key !== "hg").flatMap((c) => [1, 2, 3, 4].map((i) => withSsId(`bh68ss-rev${i}`, c.key))),
  ...SENIOR_SUBJECT_PREFIXES.flatMap((p) => [1, 2, 3, 4].map((i) => `${p}-rev${i}`)),
  ...SS_COMBOS.filter((x) => x.key !== "hg").flatMap((c) => [1, 2, 3, 4].map((i) => withSsId(`bh910ss-rev${i}`, c.key))),
];
export const biharLangVariants: MockTest[] = [];
for (const lang of ["urdu", "bangla"] as const) {
  for (const id of LANG_BASE_IDS) {
    const t = getBiharPlanTest(id) ?? allBiharSectionMocks.find((x) => x.id === id);
    if (t) biharLangVariants.push(withLanguage(t, lang));
  }
}
allBiharSectionMocks.push(...biharLangVariants);
