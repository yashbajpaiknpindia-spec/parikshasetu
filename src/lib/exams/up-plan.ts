import type { Difficulty, ExamLevel, Level, Section } from "@/data/questions";
import type { BlueprintPart, MockTest } from "@/lib/mock-engine";

/**
 * UPESSC Assistant Teacher (PRT), day-by-day study plan.
 *
 * The 2026 recruitment (Advt 05/2026) is for PRIMARY Assistant Teachers only
 * (classes 1–5): Urban posts in the Basic Education Department + attached primary
 * posts in aided schools. There is no Upper-Primary (classes 6–8) paper in it, so
 * the plan covers ONE paper, the one described in the exam guide (src/lib/exams/up.ts):
 *
 *   120 questions · 360 marks · 120 minutes · OMR · +3 per correct, −1 per wrong
 *   GK & current affairs 25 · Language (Hindi, Sanskrit, English) 30 · Maths 16 ·
 *   Science 8 · EVS & Social Studies 8 · Teaching skills 8 · Child psychology 8 ·
 *   Logical reasoning 5 · ICT 4 · Life skills, management & attitude 8
 *
 * Each day's topic has TWO practice sets, Beginner and Proficient, 50 questions
 * each, drawn only from that topic. Original questions modelled on the UPESSC /
 * UPTET previous-year papers. (The paywall is currently off: everything is free.)
 */

export const UP_EXAM_DATE_ISO = "2026-12-03";
export const UP_PLAN_TOTAL_WEEKS = 9; // 7 syllabus weeks + 2 revision weeks
export const TOPIC_TEST_SIZE = 50; // questions per Beginner / Proficient set

const MARK = { examSlug: "up", examName: "SUPER TET (UP Assistant Teacher)", post: "Assistant Teacher", cycle: "2026", markPerCorrect: 3, negativeMark: -1 } as const;

// ---- full paper: the exact 10-section split of the written exam (120 Q) -------
// Language 30 is one block in the pattern; the Hindi/Sanskrit/English split inside
// it is not published, so it is weighted towards Hindi (the largest syllabus).
export const FULL_PAPER: BlueprintPart[] = [
  { section: "up-gk", count: 10 }, { section: "gk", count: 15 },                     // GK & current affairs 25 (bank has no current-affairs items yet)
  { section: "hindi", count: 18 }, { section: "sanskrit", count: 4 }, { section: "english", count: 8 },                                                    // Language 30
  { section: "numerical", count: 16 },                                                                                                                     // Maths 16
  { section: "science", count: 8, topics: ["Physics", "Chemistry", "Biology"] },                                                                          // Science 8
  { section: "science", count: 3, topic: "Environmental science" }, { section: "gk", count: 5, topics: ["History", "Geography", "Polity"] },             // EVS & Social 8
  { section: "pedagogy", count: 8, topics: ["Teaching methods", "Assessment & inclusion", "Educational policy"] },                                         // Teaching skills 8
  { section: "pedagogy", count: 8, topics: ["Child development", "Learning theories"] },                                                                  // Child psychology 8
  { section: "reasoning", count: 5 },                                                                                                                      // Reasoning 5
  { section: "computer", count: 4 },                                                                                                                       // ICT 4
  { section: "pedagogy", count: 8, topic: "Life skills & ethics" },                                                                                       // Life skills 8
];

// ---- difficulty: "moderate to tough" (owner's rule, Sep 2026) ----------------
// No easy questions anywhere. Beginner sets are MODERATE, Proficient sets are
// TOUGH, and full papers / revision mix the two like the real exam.
const MODERATE: Difficulty[] = ["medium"];
const TOUGH: Difficulty[] = ["hard"];
const MODERATE_TO_TOUGH: Difficulty[] = ["medium", "hard"];

// ---- test builders (also collect into planTests) ----------------------------
export const planTests: MockTest[] = [];
let seedCounter = 100;

/** Canonical question-topic tag(s) a day filters on. */
type TopicFilter = { topic?: string; topics?: string[]; excludeTopics?: string[] };

/**
 * Topics that have their own dedicated, topic-accurate bank. Days WITHOUT an
 * explicit filter exclude these, so (e.g.) a Paryayvachi test never pulls the
 * Sandhi bank. New flagship topics get added here as their banks land.
 */
const FLAGSHIP_TOPICS = [
  "संधि", "समास", "अलंकार", "रस", "छंद",
  "पर्यायवाची", "विलोम", "अनेकार्थी", "मुहावरे", "लोकोक्तियाँ", "वर्तनी", "वाक्य शुद्धि",
  "Tenses", "Voice", "Narration", "Synonyms", "Antonyms", "One-word substitution", "Idioms", "Spelling",
  "Articles", "Prepositions", "Modals", "Error spotting", "Subject-verb agreement",
  "History", "Polity", "Geography", "Economy",
  "Number system", "Arithmetic", "Commercial maths", "Time & motion", "Geometry & mensuration",
  "Data interpretation", "Verbal reasoning", "Analytical reasoning",
  "Physics", "Chemistry", "Biology", "Environmental science",
  "Child development", "Teaching methods", "Learning theories",
  "Assessment & inclusion", "Educational policy", "Life skills & ethics",
  "Computer fundamentals", "Internet & ed-tech",
  "हिंदी साहित्य", "English literature",
];


function topicTest(
  id: string, title: string, section: Section, examLevel: ExamLevel,
  practice: Level, description: string, filter: TopicFilter,
): string {
  planTests.push({
    ...MARK, id, title, description, free: true, requiresPlan: true,
    level: practice, examLevel,
    tier: practice === "beginner" ? "Moderate" : "Tough",
    durationMin: 45,
    blueprint: [{ section, count: TOPIC_TEST_SIZE, ...filter, level: practice, examLevel, difficulty: practice === "beginner" ? MODERATE : TOUGH }],
    seed: ++seedCounter, cutoffPct: practice === "beginner" ? 0.6 : 0.7, category: "topic",
  });
  return id;
}
function bigTest(id: string, title: string, examLevel: ExamLevel, description: string, durationMin = 120): string {
  planTests.push({
    ...MARK, id, title, description, free: true, examLevel, tier: "Full exam pattern",
    durationMin, blueprint: FULL_PAPER.map((p) => ({ difficulty: MODERATE_TO_TOUGH, ...p, examLevel })),
    seed: ++seedCounter, cutoffPct: 0.65, category: "full",
  });
  return id;
}
/** End-of-week test: ONLY the topics studied that week, split evenly across its days
 *  (60 questions in 60 minutes at the real paper's pace, +3/−1, moderate-to-tough). */
export const WEEK_TEST_SIZE = 60;
function weekTest(id: string, title: string, examLevel: ExamLevel, days: { section: Section; filter: TopicFilter }[], description: string): string {
  const per = Math.max(1, Math.round(WEEK_TEST_SIZE / days.length));
  planTests.push({
    ...MARK, id, title, description, free: true, requiresPlan: true, examLevel, tier: "Week test",
    durationMin: per * days.length,
    blueprint: days.map((d) => ({ section: d.section, count: per, ...d.filter, examLevel, difficulty: MODERATE_TO_TOUGH })),
    seed: ++seedCounter, cutoffPct: 0.6, category: "mixed",
  });
  return id;
}
function sectionalRev(id: string, title: string, examLevel: ExamLevel, blueprint: BlueprintPart[], description: string): string {
  planTests.push({
    ...MARK, id, title, description, free: true, requiresPlan: true, examLevel, tier: "Rapid revision",
    durationMin: 20, blueprint: blueprint.map((p) => ({ difficulty: MODERATE_TO_TOUGH, ...p, examLevel })), seed: ++seedCounter, cutoffPct: 0.65, category: "subject",
  });
  return id;
}

// ---- plan types -------------------------------------------------------------
export interface PlanDay {
  topic: string;
  section: Section;
  detail: string;
  testIds: string[];
}
export interface PlanWeek {
  n: number;
  phase: "syllabus" | "revision";
  title: string;
  focus: string;
  days: PlanDay[];
  bigTestIds: string[];
}
interface RawDay { topic: string; section: Section; detail: string; filter?: TopicFilter }
interface RawWeek { title: string; focus: string; days: RawDay[] }

// =============================================================================
// Assistant Teacher (PRT), Primary (classes 1–5)
// =============================================================================
const rawL1: RawWeek[] = [
  {
    title: "Language: Hindi Grammar", focus: "हिंदी व्याकरण: 30-mark language block का सबसे बड़ा हिस्सा",
    days: [
      { topic: "संधि (Sandhi)", section: "hindi", detail: "स्वर, व्यंजन व विसर्ग संधि के नियम व उदाहरण।", filter: { topic: "संधि" } },
      { topic: "समास (Samas)", section: "hindi", detail: "समास के भेद: तत्पुरुष, द्वंद्व, द्विगु, बहुव्रीहि, कर्मधारय, अव्ययीभाव।", filter: { topic: "समास" } },
      { topic: "अलंकार, रस व छंद", section: "hindi", detail: "शब्दालंकार व अर्थालंकार, नौ रस, प्रमुख छंद।", filter: { topics: ["अलंकार", "रस", "छंद"] } },
      { topic: "पर्यायवाची, विलोम, अनेकार्थी", section: "hindi", detail: "शब्द-भंडार: समानार्थी, विपरीतार्थक, अनेकार्थक शब्द।", filter: { topics: ["पर्यायवाची", "विलोम", "अनेकार्थी"] } },
      { topic: "मुहावरे व लोकोक्तियाँ", section: "hindi", detail: "प्रचलित मुहावरे-लोकोक्तियाँ व उनके अर्थ।", filter: { topics: ["मुहावरे", "लोकोक्तियाँ"] } },
      { topic: "वर्तनी, वाक्य-शुद्धि व अपठित गद्यांश", section: "hindi", detail: "शुद्ध वर्तनी, वाक्य संशोधन, गद्यांश आधारित प्रश्न।", filter: { topics: ["वर्तनी", "वाक्य शुद्धि"] } },
    ],
  },
  {
    title: "Language: Sanskrit & English", focus: "Sanskrit basics + English grammar (part of the 30-mark block)",
    days: [
      { topic: "Sanskrit: शब्द रूप व धातु रूप", section: "sanskrit", detail: "प्रमुख शब्द रूप (अकारांत/आकारांत) व लट्/लृट् धातु रूप।", filter: { topics: ["संस्कृत शब्द रूप", "संस्कृत धातु रूप"] } },
      { topic: "Sanskrit: संधि, समास व कारक", section: "sanskrit", detail: "संस्कृत संधि, समास व कारक-विभक्ति के आधार।", filter: { topics: ["संस्कृत संधि", "संस्कृत समास", "संस्कृत कारक"] } },
      { topic: "English: Tenses, Voice & Narration", section: "english", detail: "All 12 tenses, active/passive voice, direct/indirect speech.", filter: { topics: ["Tenses", "Voice", "Narration"] } },
      { topic: "English: Articles, Prepositions, Modals", section: "english", detail: "Correct use of a/an/the, common prepositions, modal verbs.", filter: { topics: ["Articles", "Prepositions", "Modals"] } },
      { topic: "English: Vocabulary & One-word", section: "english", detail: "Synonyms, antonyms, one-word substitution, idioms, spelling.", filter: { topics: ["Synonyms", "Antonyms", "One-word substitution", "Idioms", "Spelling"] } },
      { topic: "English: Comprehension & Error spotting", section: "english", detail: "Error detection & subject-verb agreement (plus unseen passages).", filter: { topics: ["Error spotting", "Subject-verb agreement"] } },
    ],
  },
  {
    title: "Mathematics", focus: "गणित: 16 questions / 48 marks",
    days: [
      { topic: "Number system, LCM/HCF, simplification", section: "numerical", detail: "Factors, multiples, BODMAS, surds & indices, basic algebra.", filter: { topic: "Number system" } },
      { topic: "Percentage, ratio & proportion, average", section: "numerical", detail: "Core arithmetic used everywhere in the paper.", filter: { topic: "Arithmetic" } },
      { topic: "Profit & loss, discount, SI & CI", section: "numerical", detail: "Commercial maths: margins, discounts, interest.", filter: { topic: "Commercial maths" } },
      { topic: "Time–speed–distance, time & work", section: "numerical", detail: "Motion, relative speed, trains, boats & streams, work-rate, pipes.", filter: { topic: "Time & motion" } },
      { topic: "Geometry & mensuration", section: "numerical", detail: "Lines, angles, triangles, circles, area, volume & trigonometry.", filter: { topic: "Geometry & mensuration" } },
      { topic: "Data interpretation & statistics", section: "numerical", detail: "Tables, bar/pie charts, mean-median-mode.", filter: { topic: "Data interpretation" } },
    ],
  },
  {
    title: "General Knowledge & Current Affairs", focus: "सामान्य ज्ञान / समसामयिक: 25 questions / 75 marks (सबसे बड़ा भाग)",
    days: [
      { topic: "Indian history & freedom struggle", section: "gk", detail: "Ancient, medieval, modern India; the national movement.", filter: { topic: "History" } },
      { topic: "Indian & world geography", section: "gk", detail: "Physical & Indian geography, rivers, resources.", filter: { topic: "Geography" } },
      { topic: "Indian polity & constitution", section: "gk", detail: "Fundamental Rights/Duties, Parliament, judiciary.", filter: { topic: "Polity" } },
      { topic: "Indian economy", section: "gk", detail: "RBI & banking, planning, GDP, taxation & the budget.", filter: { topic: "Economy" } },
      { topic: "UP-specific GK", section: "up-gk", detail: "75 districts, rivers, heritage, ODOP, schemes, the differentiator." },
      { topic: "Static GK (+ read current affairs)", section: "gk", detail: "National symbols, important days, organisations & HQs, awards, books & authors. For current affairs (last 6–12 months), read a monthly digest from an official source such as PIB: these tests cover only facts that don't change.", filter: { topic: "Static GK" } },
    ],
  },
  {
    title: "EVS & Social Studies + Science", focus: "पर्यावरण व सामाजिक अध्ययन (8) + विज्ञान (8)",
    days: [
      { topic: "Physics: force, motion, energy, light, sound", section: "science", detail: "Everyday physics at upper-primary level.", filter: { topic: "Physics" } },
      { topic: "Chemistry: matter, reactions, acids & bases", section: "science", detail: "States of matter, common reactions, daily-life chemistry.", filter: { topic: "Chemistry" } },
      { topic: "Biology: life processes, human body, nutrition", section: "science", detail: "Cells, systems, health & nutrition.", filter: { topic: "Biology" } },
      { topic: "EVS & environment, natural resources", section: "science", detail: "Ecosystems, conservation, environmental awareness.", filter: { topic: "Environmental science" } },
      { topic: "Social Studies: history & civics", section: "gk", detail: "Freedom struggle, Constitution & governance for the classroom.", filter: { topics: ["History", "Polity"] } },
      { topic: "Social Studies: geography, safety & disaster mgmt", section: "gk", detail: "Maps, physical & Indian geography, transport safety, disaster management.", filter: { topic: "Geography" } },
    ],
  },
  {
    title: "Pedagogy, Child Psychology & Life Skills", focus: "शिक्षण कौशल (8) + बाल मनोविज्ञान (8) + जीवन कौशल (8)",
    days: [
      { topic: "Teaching methods, TLM & skills", section: "pedagogy", detail: "Methods & maxims, micro-teaching, teaching aids.", filter: { topic: "Teaching methods" } },
      { topic: "Learning theories & principles", section: "pedagogy", detail: "Behaviourism, cognitivism, constructivism & classroom use.", filter: { topic: "Learning theories" } },
      { topic: "Child development: Piaget, Vygotsky, Kohlberg", section: "pedagogy", detail: "Cognitive, socio-cultural & moral development; individual differences.", filter: { topic: "Child development" } },
      { topic: "Assessment, CCE & inclusive education", section: "pedagogy", detail: "Formative vs summative, CCE, CWSN, guidance & counselling.", filter: { topic: "Assessment & inclusion" } },
      { topic: "NEP 2020, NCF & RTE", section: "pedagogy", detail: "5+3+3+4 structure, NCF essentials, RTE Act 2009.", filter: { topic: "Educational policy" } },
      { topic: "Life skills, ethics & attitude", section: "pedagogy", detail: "Professional ethics, values, teacher as facilitator & mentor.", filter: { topic: "Life skills & ethics" } },
    ],
  },
  {
    title: "Reasoning + ICT", focus: "तार्किक ज्ञान (5) + सूचना तकनीकी (4)",
    days: [
      { topic: "Verbal reasoning", section: "reasoning", detail: "Series, coding-decoding, blood relations, direction sense.", filter: { topic: "Verbal reasoning" } },
      { topic: "Analytical reasoning & puzzles", section: "reasoning", detail: "Analogy, classification, Venn diagrams, clocks & calendars, data interpretation.", filter: { topic: "Analytical reasoning" } },
      { topic: "ICT: fundamentals, hardware/software, OS", section: "computer", detail: "Computer basics, memory, operating systems, shortcuts.", filter: { topic: "Computer fundamentals" } },
      { topic: "ICT: internet, email & ed-tech", section: "computer", detail: "Web, email, educational apps, OER, digital resources.", filter: { topic: "Internet & ed-tech" } },
    ],
  },
];

// ---- build a level's plan ---------------------------------------------------
function buildLevelPlan(examLevel: ExamLevel, raw: RawWeek[]): PlanWeek[] {
  const pfx = examLevel;
  const syllabus: PlanWeek[] = raw.map((w, wi) => {
    const n = wi + 1;
    const days: PlanDay[] = w.days.map((d, di) => {
      const base = `up-${pfx}-w${n}d${di + 1}`;
      const filter: TopicFilter = d.filter ?? { excludeTopics: FLAGSHIP_TOPICS };
      return {
        topic: d.topic, section: d.section, detail: d.detail,
        testIds: [
          topicTest(`${base}beg`, `${d.topic} (Moderate)`, d.section, examLevel, "beginner",
            `Moderate set on ${d.topic}: up to ${TOPIC_TEST_SIZE} moderate, PYQ-style questions with detailed explanations. +3/−1.`, filter),
          topicTest(`${base}pro`, `${d.topic} (Tough)`, d.section, examLevel, "proficient",
            `Tough set on ${d.topic}: ${TOPIC_TEST_SIZE} exam-level questions at the hard end of previous papers, with detailed explanations. +3/−1.`, filter),
        ],
      };
    });
    // Week tests cover only this week's topics (full papers are in the revision weeks).
    const weekDays = w.days.map((d) => ({ section: d.section, filter: d.filter ?? { excludeTopics: FLAGSHIP_TOPICS } }));
    const bigTestIds = [
      weekTest(`up-${pfx}-w${n}big1`, `Week ${n} Test 1: ${w.title}`, examLevel, weekDays, `Only this week's topics (${w.title}), mixed: ${WEEK_TEST_SIZE} questions in ${WEEK_TEST_SIZE} minutes, +3/−1. Take it after finishing Week ${n}.`),
      weekTest(`up-${pfx}-w${n}big2`, `Week ${n} Test 2: ${w.title}`, examLevel, weekDays, `Second test on Week ${n}'s topics, different questions.`),
    ];
    return { n, phase: "syllabus" as const, title: w.title, focus: w.focus, days, bigTestIds };
  });

  // two revision weeks: rapid recall + full mocks
  const revStart = syllabus.length;
  const revW1: PlanWeek = {
    n: revStart + 1, phase: "revision", title: "Revision I: rapid recall + full mocks",
    focus: "Fix weak spots, then simulate the exam daily",
    days: [1, 2, 3, 4, 5].map((i) => ({
      topic: `Rapid revision + Full Mock ${i}`, section: "gk" as Section,
      detail: "Revise a block, then take a full exam-pattern paper with analysis.",
      testIds: [
        sectionalRev(`up-${pfx}-rev${i}`, `Rapid Revision ${i}`, examLevel, [{ section: "gk", count: 15 }], "Quick 15-question recap."),
        bigTest(`up-${pfx}-revfull${i}`, `Revision Full Mock ${i}`, examLevel, "Full exam-pattern mock with analysis.", 120),
      ],
    })),
    bigTestIds: [],
  };
  const revW2: PlanWeek = {
    n: revStart + 2, phase: "revision", title: "Revision II: full mocks & taper",
    focus: "Exam-condition mocks every day; no new topics",
    days: [1, 2, 3, 4, 5].map((i) => ({
      topic: `Full Mock ${i + 5} + analysis`, section: "gk" as Section,
      detail: i === 5 ? "Final confidence mock: light revision only." : "Full exam-pattern mock under timed conditions; review every answer.",
      testIds: [bigTest(`up-${pfx}-revfull${i + 5}`, `Revision Full Mock ${i + 5}`, examLevel, "Full exam-pattern mock with analysis.", 120)],
    })),
    bigTestIds: [],
  };
  return [...syllabus, revW1, revW2];
}

// ---- exports ----------------------------------------------------------------
export interface LevelMeta {
  key: ExamLevel;
  label: string;      // "Level 1"
  name: string;       // "Primary (classes 1–5)"
  structure: string;  // one-line paper structure
}
export const UP_LEVELS: LevelMeta[] = [
  { key: "l1", label: "Assistant Teacher (PRT)", name: "Primary · classes 1–5", structure: "One written paper: 120 questions · 360 marks · 120 minutes · OMR · +3 per correct, −1 per wrong." },
];

/** The PRT plan (the only paper in this recruitment). */
export const upPlan: PlanWeek[] = buildLevelPlan("l1", rawL1);
/** @deprecated kept for callers that still index by level */
export const upPlans = { l1: upPlan };

export function getPlanTest(id: string) {
  return planTests.find((t) => t.id === id);
}

export const planTestCount = planTests.length;
export const freePlanTestCount = planTests.filter((t) => t.free).length;

/** Per-level counts for display. */
export function levelTestStats(examLevel: ExamLevel) {
  const tests = planTests.filter((t) => t.examLevel === examLevel);
  return { total: tests.length, free: tests.filter((t) => t.free).length };
}
