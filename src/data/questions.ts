/**
 * Starter practice question bank.
 *
 * IMPORTANT (anti-fabrication rule): these are ORIGINAL practice questions
 * MODELLED ON the KVS exam pattern. They are NOT official Previous Year
 * Questions (PYQs). Content is kept evergreen and verifiable. In production the
 * platform's paper-generation engine expands this bank with tagged items and
 * operator-verified PYQs (labelled separately).
 */

import { upExpansion } from "./question-bank-up";
import { upHardExpansion } from "./question-bank-up-hard";
import { upExpansion2 } from "./question-bank-up-2";
import { growthGa } from "./question-bank-ga";
import { growthGb } from "./question-bank-gb";
import { growthGc } from "./question-bank-gc";
import { sandhiBank } from "./question-hi-sandhi";
import { alankarBank } from "./question-hi-alankar";
import { samasBank } from "./question-hi-samas";
import { shabdBank } from "./question-hi-shabd";
import { muhavreBank } from "./question-hi-muhavre";
import { vartaniBank } from "./question-hi-vartani";
import { sanskritRoopBank } from "./question-sa-roop";
import { sanskritVyakaranBank } from "./question-sa-vyakaran";
import { englishVocabBank } from "./question-en-vocab";
import { englishGrammarBank } from "./question-en-grammar";
import { englishGrammar2Bank } from "./question-en-grammar2";
import { englishErrorBank } from "./question-en-error";
import { gkHistoryBank } from "./question-gk-history";
import { gkPolityBank } from "./question-gk-polity";
import { gkGeographyBank } from "./question-gk-geography";
import { gkEconomyBank } from "./question-gk-economy";
import { maNumberBank } from "./question-ma-number";
import { maArithmeticBank } from "./question-ma-arithmetic";
import { maCommercialBank } from "./question-ma-commercial";
import { maTimeBank } from "./question-ma-time";
import { maGeometryBank } from "./question-ma-geometry";
import { maDiBank } from "./question-ma-di";
import { verbalReasoningBank } from "./question-re-verbal";
import { analyticalReasoningBank } from "./question-re-analytical";
import { physicsBank } from "./question-sc-physics";
import { chemistryBank } from "./question-sc-chemistry";
import { biologyBank } from "./question-sc-biology";
import { evsBank } from "./question-sc-evs";
import { childDevelopmentBank } from "./question-pd-development";
import { teachingMethodsBank } from "./question-pd-teaching";
import { learningTheoriesBank } from "./question-pd-learning";
import { assessmentInclusionBank } from "./question-pd-assessment";
import { educationalPolicyBank } from "./question-pd-policy";
import { lifeSkillsEthicsBank } from "./question-pd-lifeskills";
import { computerFundamentalsBank } from "./question-ic-fundamentals";
import { internetEdtechBank } from "./question-ic-internet";
import { l2PhysicsBank } from "./question-l2-physics";
import { l2ChemistryBank } from "./question-l2-chemistry";
import { l2BiologyBank } from "./question-l2-biology";
import { l2NumberBank } from "./question-l2-number";
import { l2GeometryBank } from "./question-l2-geometry";
import { l2ArithBank } from "./question-l2-arith";
import { l2HistoryBank } from "./question-l2-history";
import { l2GeographyBank } from "./question-l2-geography";
import { l2PolityBank } from "./question-l2-polity";
import { l2EconomyBank } from "./question-l2-economy";
import { l2SandhiBank } from "./question-l2-hi-sandhi";
import { l2SamasBank } from "./question-l2-hi-samas";
import { l2AlankarBank } from "./question-l2-hi-alankar";
import { l2ShabdBank } from "./question-l2-hi-shabd";
import { l2SahityaBank } from "./question-l2-hi-sahitya";
import { l2SanskritRoopBank } from "./question-l2-sa-roop";
import { l2SanskritVyakaranBank } from "./question-l2-sa-vyakaran";
import { l2EnGrammarBank } from "./question-l2-en-grammar";
import { l2EnVocabBank } from "./question-l2-en-vocab";
import { l2EnErrorBank } from "./question-l2-en-error";
import { l2EnLiteratureBank } from "./question-l2-en-literature";
import { moderateBank } from "./question-moderate";
import { urduLanguageBank } from "./question-ur-lang";
import { banglaLanguageBank } from "./question-bn-lang";
import { urduSubjectBank } from "./question-ur-subject";
import { enSaComprehensionBank } from "./question-comprehension-en-sa";
import { gkCultureBank } from "./question-gk-culture";
import { gkAwardsBank } from "./question-gk-awards";
import { gapFillBank } from "./question-gap-fill";
import { reasoningTypesBank } from "./question-re-types";
import { hindiComprehensionBank } from "./question-hi-comprehension";
import { caUpBank } from "./question-ca-up";
import { caUp2Bank } from "./question-ca-up-2";
import { caNationalBank } from "./question-ca-national";
import { caBiharBank } from "./question-ca-bihar";
import { caNational2Bank } from "./question-ca-national-2";
// ---- BPSC 9–12 banks (generated) ----
import { s12AccountancyBank } from "./question-s12-accountancy";
import { s12Botany1Bank } from "./question-s12-botany-1";
import { s12Botany2Bank } from "./question-s12-botany-2";
import { s12BusinessBank } from "./question-s12-business";
import { s12Chem1Bank } from "./question-s12-chem-1";
import { s12Chem2Bank } from "./question-s12-chem-2";
import { s12Chem3Bank } from "./question-s12-chem-3";
import { s12CsBank } from "./question-s12-cs";
import { s12EconomicsBank } from "./question-s12-economics";
import { s12English1Bank } from "./question-s12-english-1";
import { s12English2Bank } from "./question-s12-english-2";
import { s12EntrepreneurshipBank } from "./question-s12-entrepreneurship";
import { s12GeographyBank } from "./question-s12-geography";
import { s12HindiBank } from "./question-s12-hindi";
import { s12HistoryBank } from "./question-s12-history";
import { s12HomesciBank } from "./question-s12-homesci";
import { s12MathsBank } from "./question-s12-maths";
import { s12MusicBank } from "./question-s12-music";
import { s12PhilosophyBank } from "./question-s12-philosophy";
import { s12Physics1Bank } from "./question-s12-physics-1";
import { s12Physics2Bank } from "./question-s12-physics-2";
import { s12PolsciBank } from "./question-s12-polsci";
import { s12Psych1Bank } from "./question-s12-psych-1";
import { s12Psych2Bank } from "./question-s12-psych-2";
import { s12SanskritBank } from "./question-s12-sanskrit";
import { s12SociologyBank } from "./question-s12-sociology";
import { s12UrduBank } from "./question-s12-urdu";
import { s12ZoologyBank } from "./question-s12-zoology";
import { s9EnglishBank } from "./question-s9-english";
import { s9HindiBank } from "./question-s9-hindi";
import { s9Maths1Bank } from "./question-s9-maths-1";
import { s9Maths2Bank } from "./question-s9-maths-2";
import { s9PeBank } from "./question-s9-pe";
import { s9Science1Bank } from "./question-s9-science-1";
import { s9Science2Bank } from "./question-s9-science-2";
import { s9Social1Bank } from "./question-s9-social-1";
import { s9Social2Bank } from "./question-s9-social-2";
import { s9UrduBank } from "./question-s9-urdu";
// ---- end BPSC 9–12 banks ----

export type Section =
  | "reasoning"
  | "numerical"
  | "computer"
  | "gk"
  | "up-gk"
  | "english"
  | "hindi"
  | "sanskrit"
  | "urdu"
  | "bangla"
  | "pedagogy"
  | "science"
  // BPSC TRE 4.0 Classes 11–12 subject papers (Part III)
  | "physics"
  | "chemistry"
  | "botany"
  | "psychology"
  | "zoology"
  | "home-science"
  | "computer-science"
  | "sociology"
  | "commerce"
  | "philosophy"
  | "music"
  | "physical-education";

export type Difficulty = "easy" | "medium" | "hard";

/** Current-affairs topics. Static-GK draws exclude these so each paper gets a
 *  deliberate, fixed number of current-affairs questions instead of a random mix. */
export const CA_NATIONAL = "Current affairs";
export const CA_UP = "UP current affairs";
export const CA_BIHAR = "Bihar current affairs";
export const CA_TOPICS = [CA_NATIONAL, CA_UP, CA_BIHAR];

/** Comprehension topics (passage-based questions). */
export const HINDI_PROSE = "अपठित गद्यांश";
export const HINDI_POEM = "अपठित पद्यांश";
export const EN_COMPREHENSION = "Reading comprehension";
export const SA_COMPREHENSION = "संस्कृत अपठित";

/** New static GK topics from the official SUPER TET GK syllabus. */
export const GK_CULTURE = "Indian culture & art";
export const GK_AWARDS = "Awards, sports & books";

/** Aspirant-facing test level. Drives the Beginner / Proficient practice sets. */
export type Level = "beginner" | "proficient";

/**
 * Exam level a question is written for:
 *   "l1" = Primary (classes 1–5), "l2" = Upper Primary (classes 6–8),
 *   "l3" = Secondary (BPSC classes 9–10), "l4" = Senior Secondary (BPSC classes 11–12).
 * l3/l4 questions are opt-in: they only appear in parts that ask for that level.
 * A common topic can be pitched differently per level, so questions are tagged.
 * When omitted, a question is SHARED, it serves both levels (used while a
 * level-specific bank is still being built out).
 */
export type ExamLevel = "l1" | "l2" | "l3" | "l4";
/** Levels whose questions never leak into papers that don't ask for them. */
export const SENIOR_LEVELS: ExamLevel[] = ["l3", "l4"];
/** Does a question suit a paper part's level? Shared (untagged) questions serve any level
 *  and tagged ones must match, except that senior (l3/l4) questions are opt-in, and parts
 *  naming a senior level want only tagged banks. */
export function matchesLevel(part: { examLevel?: ExamLevel; examLevels?: ExamLevel[] }, q: { examLevel?: ExamLevel }): boolean {
  const levels = part.examLevels ?? (part.examLevel ? [part.examLevel] : undefined);
  if (!q.examLevel) return !levels?.some((l) => SENIOR_LEVELS.includes(l));
  if (!levels) return !SENIOR_LEVELS.includes(q.examLevel);
  return levels.includes(q.examLevel);
}

export interface Question {
  id: string;
  section: Section;
  topic: string;
  difficulty: Difficulty;
  /**
   * Explicit test level. When omitted we fall back to difficulty
   * (easy → beginner, medium/hard → proficient) so legacy questions still
   * slot into the right set. See `questionLevel`.
   */
  level?: Level;
  /** Which UPESSC exam level this question is written for. Omitted = shared. */
  examLevel?: ExamLevel;
  stem: string;
  options: string[];
  correct: number; // index into options
  explanation: string;
  /** Set by composeTest when it shuffles the options: the Hindi options reordered
   *  with the SAME permutation, so the bilingual display stays aligned. */
  optionsHi?: string[];
  /** Comprehension: questions sharing a passageId are always drawn together, and only
   *  by blueprint parts that name their topic. */
  passageId?: string;
  /** The passage text, attached by composeTest from the passage registry. */
  passage?: string;
  /** Hindi carried on the question itself (previous-year papers, which stay server-side
   *  instead of going into the client-bundled questionHi map). */
  stemHi?: string;
  explanationHi?: string;
}

/** The level a question belongs to ____ explicit `level`, else derived from difficulty. */
export function questionLevel(q: Question): Level {
  if (q.level) return q.level;
  return q.difficulty === "easy" ? "beginner" : "proficient";
}

export const sectionLabels: Record<Section, string> = {
  reasoning: "Reasoning Ability",
  numerical: "Numerical Ability",
  computer: "Computer Literacy",
  gk: "General Knowledge",
  "up-gk": "UP General Knowledge",
  english: "General English",
  hindi: "General Hindi",
  sanskrit: "General Sanskrit",
  urdu: "Urdu",
  bangla: "Bangla",
  pedagogy: "Perspectives on Education",
  science: "Science",
  physics: "Physics",
  chemistry: "Chemistry",
  botany: "Botany",
  psychology: "Psychology",
  zoology: "Zoology",
  "home-science": "Home Science",
  "computer-science": "Computer Science",
  sociology: "Sociology",
  commerce: "Commerce",
  philosophy: "Philosophy",
  music: "Music",
  "physical-education": "Physical Education",
};

const baseQuestions: Question[] = [
  // ----------------------------------------------------------- Reasoning
  {
    id: "r1", section: "reasoning", topic: "Number series", difficulty: "easy",
    stem: "Find the next term: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"], correct: 2,
    explanation: "Differences increase by 2: +4, +6, +8, +10, +12. So 30 + 12 = 42.",
  },
  {
    id: "r2", section: "reasoning", topic: "Odd one out", difficulty: "easy",
    stem: "Which number is the odd one out? 3, 5, 7, 9, 11",
    options: ["3", "7", "9", "11"], correct: 2,
    explanation: "3, 5, 7 and 11 are prime; 9 (= 3 × 3) is composite.",
  },
  {
    id: "r3", section: "reasoning", topic: "Coding-decoding", difficulty: "medium",
    stem: "If MADRAS is coded as NBESBT, then BOMBAY is coded as?",
    options: ["CPNCBZ", "CPNBBZ", "CQNCBZ", "CPMCBZ"], correct: 0,
    explanation: "Each letter is shifted +1: B→C, O→P, M→N, B→C, A→B, Y→Z → CPNCBZ.",
  },
  {
    id: "r4", section: "reasoning", topic: "Blood relations", difficulty: "medium",
    stem: "Pointing to a girl, Rahul said, 'She is the daughter of my grandfather's only son.' How is the girl related to Rahul?",
    options: ["Cousin", "Sister", "Aunt", "Mother"], correct: 1,
    explanation: "Grandfather's only son is Rahul's father; his daughter is Rahul's sister.",
  },
  {
    id: "r5", section: "reasoning", topic: "Analogy", difficulty: "easy",
    stem: "Hand : Glove :: Foot : ?",
    options: ["Shoe-lace", "Sock", "Toe", "Leg"], correct: 1,
    explanation: "A glove is worn on the hand; a sock is worn on the foot.",
  },
  {
    id: "r6", section: "reasoning", topic: "Direction sense", difficulty: "medium",
    stem: "A man walks 5 km North, turns right and walks 3 km, then turns right and walks 5 km. How far is he from the start?",
    options: ["3 km", "5 km", "8 km", "13 km"], correct: 0,
    explanation: "The two 5 km legs (North then South) cancel; only the 3 km East leg remains.",
  },

  // ----------------------------------------------------------- Numerical
  {
    id: "n1", section: "numerical", topic: "Percentage", difficulty: "easy",
    stem: "What is 15% of 200?",
    options: ["15", "20", "30", "45"], correct: 2,
    explanation: "15% of 200 = 0.15 × 200 = 30.",
  },
  {
    id: "n2", section: "numerical", topic: "Discount", difficulty: "medium",
    stem: "After a 20% discount, an item sells for ₹240. What was its marked price?",
    options: ["₹280", "₹300", "₹288", "₹320"], correct: 1,
    explanation: "₹240 is 80% of the MRP, so MRP = 240 / 0.8 = ₹300.",
  },
  {
    id: "n3", section: "numerical", topic: "Simple interest", difficulty: "easy",
    stem: "Simple interest on ₹1,000 at 5% per annum for 2 years is?",
    options: ["₹50", "₹100", "₹110", "₹200"], correct: 1,
    explanation: "SI = P × R × T / 100 = 1000 × 5 × 2 / 100 = ₹100.",
  },
  {
    id: "n4", section: "numerical", topic: "Speed & time", difficulty: "medium",
    stem: "A 120 m long train running at 36 km/h crosses a pole in how many seconds?",
    options: ["10 s", "12 s", "15 s", "20 s"], correct: 1,
    explanation: "36 km/h = 10 m/s. Time = distance / speed = 120 / 10 = 12 s.",
  },
  {
    id: "n5", section: "numerical", topic: "Ratio", difficulty: "easy",
    stem: "Two numbers are in the ratio 3 : 4 and add up to 28. The larger number is?",
    options: ["12", "14", "16", "18"], correct: 2,
    explanation: "Total parts = 7, each part = 4, so the numbers are 12 and 16.",
  },
  {
    id: "n6", section: "numerical", topic: "LCM", difficulty: "easy",
    stem: "The LCM of 4, 6 and 8 is?",
    options: ["12", "16", "24", "48"], correct: 2,
    explanation: "24 is the smallest number divisible by 4, 6 and 8.",
  },

  // ----------------------------------------------------------- Computer
  {
    id: "c1", section: "computer", topic: "Fundamentals", difficulty: "easy",
    stem: "CPU stands for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Peripheral Unit"], correct: 1,
    explanation: "CPU = Central Processing Unit, the 'brain' of the computer.",
  },
  {
    id: "c2", section: "computer", topic: "Operating systems", difficulty: "easy",
    stem: "Which of the following is an operating system?",
    options: ["MS Word", "Oracle", "Linux", "Chrome"], correct: 2,
    explanation: "Linux is an operating system; the others are applications/DBMS/browser.",
  },
  {
    id: "c3", section: "computer", topic: "Memory", difficulty: "medium",
    stem: "RAM is best described as?",
    options: ["Permanent storage", "Volatile memory", "An input device", "A type of CPU"], correct: 1,
    explanation: "RAM is volatile, its contents are lost when power is switched off.",
  },
  {
    id: "c4", section: "computer", topic: "Shortcuts", difficulty: "easy",
    stem: "Which shortcut copies the selected text in most applications?",
    options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + P"], correct: 2,
    explanation: "Ctrl + C copies; Ctrl + X cuts and Ctrl + V pastes.",
  },
  {
    id: "c5", section: "computer", topic: "Internet", difficulty: "medium",
    stem: "HTTP stands for?",
    options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Process", "Home Transfer Text Protocol"], correct: 0,
    explanation: "HTTP = HyperText Transfer Protocol, used to transfer web pages.",
  },
  {
    id: "c6", section: "computer", topic: "Devices", difficulty: "easy",
    stem: "Which of these is an input device?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"], correct: 2,
    explanation: "A keyboard sends input to the computer; the others are output devices.",
  },

  // ----------------------------------------------------------- English
  {
    id: "e1", section: "english", topic: "Synonyms", difficulty: "easy",
    stem: "Choose the synonym of 'diligent'.",
    options: ["Lazy", "Hardworking", "Careless", "Slow"], correct: 1,
    explanation: "'Diligent' means showing careful, persistent effort, hardworking.",
  },
  {
    id: "e2", section: "english", topic: "Antonyms", difficulty: "easy",
    stem: "Choose the antonym of 'scarce'.",
    options: ["Rare", "Limited", "Abundant", "Few"], correct: 2,
    explanation: "'Scarce' means in short supply; its opposite is 'abundant'.",
  },
  {
    id: "e3", section: "english", topic: "Prepositions", difficulty: "medium",
    stem: "She has been living here ____ 2010.",
    options: ["for", "since", "from", "by"], correct: 1,
    explanation: "'Since' is used with a point in time (2010); 'for' is used with a period.",
  },
  {
    id: "e4", section: "english", topic: "One-word substitution", difficulty: "medium",
    stem: "A person who cannot read or write is ____.",
    options: ["Illegible", "Illiterate", "Ignorant", "Innocent"], correct: 1,
    explanation: "'Illiterate' means unable to read or write.",
  },
  {
    id: "e5", section: "english", topic: "Voice", difficulty: "medium",
    stem: "Change to passive voice: 'She writes a letter.'",
    options: ["A letter is written by her.", "A letter was written by her.", "A letter is being written by her.", "A letter has written by her."], correct: 0,
    explanation: "Simple present passive: object + is/are + past participle + by + agent.",
  },
  {
    id: "e6", section: "english", topic: "Idioms", difficulty: "medium",
    stem: "The idiom 'to bite the bullet' means to ____.",
    options: ["give up easily", "face a difficult situation bravely", "eat quickly", "make a mistake"], correct: 1,
    explanation: "'Bite the bullet' means to endure a difficult situation with courage.",
  },

  // ----------------------------------------------------------- Hindi
  {
    id: "h1", section: "hindi", topic: "संधि", difficulty: "medium",
    stem: "'विद्यालय' में कौन-सी संधि है?",
    options: ["गुण संधि", "दीर्घ संधि", "वृद्धि संधि", "यण संधि"], correct: 1,
    explanation: "विद्या + आलय = विद्यालय; आ + आ → आ (दीर्घ संधि)।",
  },
  {
    id: "h2", section: "hindi", topic: "पर्यायवाची", difficulty: "easy",
    stem: "'सूर्य' का पर्यायवाची शब्द है ____",
    options: ["चंद्र", "भानु", "पवन", "सलिल"], correct: 1,
    explanation: "भानु, रवि, दिनकर आदि सूर्य के पर्यायवाची हैं।",
  },
  {
    id: "h3", section: "hindi", topic: "विलोम", difficulty: "easy",
    stem: "'अंधकार' का विलोम शब्द है ____",
    options: ["तम", "प्रकाश", "रात्रि", "कालिमा"], correct: 1,
    explanation: "अंधकार (अँधेरा) का विलोम प्रकाश (उजाला) है।",
  },
  {
    id: "h4", section: "hindi", topic: "मुहावरे", difficulty: "medium",
    stem: "'आँख का तारा' मुहावरे का अर्थ है ____",
    options: ["बहुत प्यारा", "आँख का रोग", "चमकीली वस्तु", "दूर की वस्तु"], correct: 0,
    explanation: "'आँख का तारा' का अर्थ है: बहुत प्रिय या दुलारा।",
  },
  {
    id: "h5", section: "hindi", topic: "लिंग", difficulty: "easy",
    stem: "'राजा' का स्त्रीलिंग रूप है ____",
    options: ["राजकुमारी", "रानी", "महारानी", "देवी"], correct: 1,
    explanation: "'राजा' का स्त्रीलिंग 'रानी' है।",
  },

  // ----------------------------------------------------------- GK
  {
    id: "g1", section: "gk", topic: "Polity", difficulty: "medium",
    stem: "How many Fundamental Rights are guaranteed by the Indian Constitution at present?",
    options: ["Five", "Six", "Seven", "Eight"], correct: 1,
    explanation: "There are six Fundamental Rights after the Right to Property was removed as a fundamental right (44th Amendment, 1978).",
  },
  {
    id: "g2", section: "gk", topic: "Education", difficulty: "medium",
    stem: "The Right to Education is provided under which Article of the Constitution?",
    options: ["Article 19", "Article 21A", "Article 45", "Article 51A"], correct: 1,
    explanation: "Article 21A (added by the 86th Amendment, 2002) makes education a fundamental right for children aged 6–14.",
  },
  {
    id: "g3", section: "gk", topic: "Institutions", difficulty: "easy",
    stem: "Kendriya Vidyalayas function under which Ministry of the Government of India?",
    options: ["Ministry of Home Affairs", "Ministry of Education", "Ministry of Culture", "Ministry of Defence"], correct: 1,
    explanation: "KVS is an autonomous body under the Ministry of Education.",
  },

  // ----------------------------------------------------------- Pedagogy
  {
    id: "p1", section: "pedagogy", topic: "Development", difficulty: "medium",
    stem: "The theory of cognitive development in stages is associated with ____",
    options: ["Jean Piaget", "B.F. Skinner", "Ivan Pavlov", "Abraham Maslow"], correct: 0,
    explanation: "Jean Piaget proposed four stages of cognitive development.",
  },
  {
    id: "p2", section: "pedagogy", topic: "Learning theory", difficulty: "medium",
    stem: "The concept of the 'Zone of Proximal Development' (ZPD) was given by ____",
    options: ["Piaget", "Vygotsky", "Kohlberg", "Bruner"], correct: 1,
    explanation: "Lev Vygotsky introduced the ZPD, the gap between what a learner can do alone and with guidance.",
  },
  {
    id: "p3", section: "pedagogy", topic: "Policy", difficulty: "easy",
    stem: "The National Education Policy (NEP) was launched in which year?",
    options: ["2016", "2018", "2020", "2022"], correct: 2,
    explanation: "NEP 2020 was approved by the Union Cabinet in July 2020.",
  },
  {
    id: "p4", section: "pedagogy", topic: "Moral development", difficulty: "medium",
    stem: "Lawrence Kohlberg is best known for his theory of ____",
    options: ["Moral development", "Language acquisition", "Classical conditioning", "Needs hierarchy"], correct: 0,
    explanation: "Kohlberg proposed stages of moral development.",
  },
  {
    id: "p5", section: "pedagogy", topic: "Assessment", difficulty: "medium",
    stem: "Formative assessment is best described as ____",
    options: ["Assessment of learning at the end of a term", "Assessment for learning, ongoing during teaching", "A one-time board examination", "Ranking students against each other"], correct: 1,
    explanation: "Formative assessment is continuous ('for learning') and used to improve teaching-learning.",
  },
  {
    id: "p6", section: "pedagogy", topic: "Policy", difficulty: "medium",
    stem: "'Learning by doing' as an educational principle is most associated with ____",
    options: ["John Dewey", "Rousseau", "Froebel", "Montessori"], correct: 0,
    explanation: "John Dewey championed experiential 'learning by doing'.",
  },

  // ----------------------------------------------------------- UP GK
  {
    id: "ug1", section: "up-gk", topic: "UP administration", difficulty: "easy",
    stem: "What is the capital of Uttar Pradesh?",
    options: ["Kanpur", "Lucknow", "Prayagraj", "Varanasi"], correct: 1,
    explanation: "Lucknow is the capital of Uttar Pradesh.",
  },
  {
    id: "ug2", section: "up-gk", topic: "UP administration", difficulty: "medium",
    stem: "How many districts does Uttar Pradesh have?",
    options: ["70", "72", "75", "80"], correct: 2,
    explanation: "Uttar Pradesh is divided into 75 districts (across 18 divisions).",
  },
  {
    id: "ug3", section: "up-gk", topic: "UP geography", difficulty: "hard",
    stem: "The river Ganga enters Uttar Pradesh through which district?",
    options: ["Bijnor", "Ballia", "Prayagraj", "Kanpur"], correct: 0,
    explanation: "The Ganga enters UP near Bijnor and exits near Ballia.",
  },
  {
    id: "ug4", section: "up-gk", topic: "UP heritage", difficulty: "easy",
    stem: "The Taj Mahal is located in which UP city?",
    options: ["Lucknow", "Agra", "Mathura", "Jhansi"], correct: 1,
    explanation: "The Taj Mahal, a UNESCO World Heritage Site, is in Agra.",
  },
  {
    id: "ug5", section: "up-gk", topic: "UP culture", difficulty: "medium",
    stem: "Chikankari embroidery is traditionally associated with which UP city?",
    options: ["Varanasi", "Lucknow", "Kanpur", "Bareilly"], correct: 1,
    explanation: "Chikankari is the traditional hand embroidery of Lucknow.",
  },
  {
    id: "ug6", section: "up-gk", topic: "UP schemes", difficulty: "medium",
    stem: "The 'One District One Product' (ODOP) scheme is a flagship programme of which state government?",
    options: ["Bihar", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"], correct: 1,
    explanation: "ODOP is a flagship scheme of the Uttar Pradesh government.",
  },
  {
    id: "ug7", section: "up-gk", topic: "UP geography", difficulty: "hard",
    stem: "Which is the largest district of Uttar Pradesh by area?",
    options: ["Sonbhadra", "Lakhimpur Kheri", "Prayagraj", "Hardoi"], correct: 1,
    explanation: "Lakhimpur Kheri is the largest district of UP by area.",
  },
  {
    id: "ug8", section: "up-gk", topic: "UP polity", difficulty: "medium",
    stem: "The legislature of Uttar Pradesh is ____",
    options: ["Unicameral", "Bicameral", "Tricameral", "Nominated only"], correct: 1,
    explanation: "UP has a bicameral legislature: Vidhan Sabha (Assembly) and Vidhan Parishad (Council).",
  },
  {
    id: "ug9", section: "up-gk", topic: "UP geography", difficulty: "medium",
    stem: "Dudhwa National Park is located in which state?",
    options: ["Uttarakhand", "Uttar Pradesh", "Bihar", "Madhya Pradesh"], correct: 1,
    explanation: "Dudhwa National Park (and tiger reserve) is in Lakhimpur Kheri/Bahraich, Uttar Pradesh.",
  },
  {
    id: "ug10", section: "up-gk", topic: "UP culture", difficulty: "easy",
    stem: "Which UP city is world-famous for Banarasi silk sarees?",
    options: ["Lucknow", "Varanasi", "Kanpur", "Agra"], correct: 1,
    explanation: "Banarasi silk is the traditional handloom craft of Varanasi (Banaras).",
  },
  {
    id: "ug11", section: "up-gk", topic: "UP culture", difficulty: "medium",
    stem: "The Kumbh / Magh Mela on the Sangam is held in which UP city?",
    options: ["Ayodhya", "Prayagraj", "Mathura", "Gorakhpur"], correct: 1,
    explanation: "The Kumbh and annual Magh Mela are held at the Sangam in Prayagraj.",
  },
  {
    id: "ug12", section: "up-gk", topic: "UP administration", difficulty: "medium",
    stem: "How many administrative divisions (mandal) does Uttar Pradesh have?",
    options: ["12", "15", "18", "21"], correct: 2,
    explanation: "UP's 75 districts are grouped into 18 administrative divisions.",
  },

  // ----------------------------------------------------------- Science
  {
    id: "s1", section: "science", topic: "Physics", difficulty: "easy",
    stem: "The SI unit of force is ____",
    options: ["Joule", "Newton", "Watt", "Pascal"], correct: 1,
    explanation: "Force is measured in newtons (N); 1 N = 1 kg·m/s².",
  },
  {
    id: "s2", section: "science", topic: "Chemistry", difficulty: "easy",
    stem: "The chemical formula of water is ____",
    options: ["CO₂", "H₂O", "O₂", "NaCl"], correct: 1,
    explanation: "Water is H₂O, two hydrogen atoms and one oxygen atom.",
  },
  {
    id: "s3", section: "science", topic: "Biology", difficulty: "easy",
    stem: "During photosynthesis, plants absorb which gas?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], correct: 2,
    explanation: "Plants take in carbon dioxide and release oxygen during photosynthesis.",
  },
  {
    id: "s4", section: "science", topic: "Biology", difficulty: "medium",
    stem: "Which organelle is called the 'powerhouse of the cell'?",
    options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi body"], correct: 2,
    explanation: "Mitochondria produce most of the cell's energy (ATP).",
  },
  {
    id: "s5", section: "science", topic: "Physics", difficulty: "medium",
    stem: "The approximate speed of light in vacuum is ____",
    options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"], correct: 1,
    explanation: "Light travels at about 3 × 10⁸ metres per second in vacuum.",
  },
  {
    id: "s6", section: "science", topic: "Biology", difficulty: "easy",
    stem: "Which vitamin is synthesised in the skin on exposure to sunlight?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], correct: 2,
    explanation: "Sunlight (UV-B) helps the skin synthesise Vitamin D.",
  },

  // ----------------------------------------------------------- More reasoning
  {
    id: "r7", section: "reasoning", topic: "Coding", difficulty: "medium",
    stem: "If A=1, B=2, C=3 … then the sum of letters in 'CAT' is ____",
    options: ["24", "27", "20", "21"], correct: 0,
    explanation: "C(3) + A(1) + T(20) = 24.",
  },
  {
    id: "r8", section: "reasoning", topic: "Series", difficulty: "medium",
    stem: "Complete the series: AZ, BY, CX, ?",
    options: ["DV", "DW", "EW", "DX"], correct: 1,
    explanation: "First letter goes A→B→C→D; second goes Z→Y→X→W. So DW.",
  },
  {
    id: "r9", section: "reasoning", topic: "Blood relations", difficulty: "hard",
    stem: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
    options: ["Sister", "Mother", "Aunt", "Grandmother"], correct: 1,
    explanation: "The only daughter of the woman's mother is the woman herself; so she is the man's mother.",
  },

  // ----------------------------------------------------------- More numerical
  {
    id: "n7", section: "numerical", topic: "Fractions", difficulty: "easy",
    stem: "What is 3/4 of 80?",
    options: ["50", "60", "65", "40"], correct: 1,
    explanation: "3/4 × 80 = 60.",
  },
  {
    id: "n8", section: "numerical", topic: "Unitary method", difficulty: "easy",
    stem: "If 5 pens cost ₹75, what do 8 pens cost?",
    options: ["₹100", "₹110", "₹120", "₹125"], correct: 2,
    explanation: "One pen = ₹15, so 8 pens = ₹120.",
  },
  {
    id: "n9", section: "numerical", topic: "Average", difficulty: "easy",
    stem: "The average of 10, 20, 30 and 40 is ____",
    options: ["20", "25", "30", "35"], correct: 1,
    explanation: "(10+20+30+40)/4 = 100/4 = 25.",
  },

  // ----------------------------------------------------------- More pedagogy
  {
    id: "p7", section: "pedagogy", topic: "Thinkers", difficulty: "medium",
    stem: "The concept of 'Kindergarten' was introduced by ____",
    options: ["Maria Montessori", "Friedrich Froebel", "John Dewey", "Rousseau"], correct: 1,
    explanation: "Friedrich Froebel founded the Kindergarten ('garden of children').",
  },
  {
    id: "p8", section: "pedagogy", topic: "Assessment", difficulty: "medium",
    stem: "Continuous and Comprehensive Evaluation (CCE) assesses ____",
    options: ["Only scholastic areas", "Only co-scholastic areas", "Both scholastic and co-scholastic areas", "Only final exams"], correct: 2,
    explanation: "CCE covers both scholastic (academic) and co-scholastic (life skills, attitudes) domains.",
  },
  {
    id: "p9", section: "pedagogy", topic: "NEP 2020", difficulty: "medium",
    stem: "Under NEP 2020, the new school curricular structure is ____",
    options: ["10+2", "5+3+3+4", "8+4", "4+4+2+2"], correct: 1,
    explanation: "NEP 2020 replaces 10+2 with a 5+3+3+4 structure (foundational, preparatory, middle, secondary).",
  },

  // ----------------------------------------------------------- More GK
  {
    id: "g4", section: "gk", topic: "History", difficulty: "easy",
    stem: "Who is popularly known as the 'Father of the Nation' in India?",
    options: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "B. R. Ambedkar"], correct: 2,
    explanation: "Mahatma Gandhi is honoured as the Father of the Nation.",
  },
  {
    id: "g5", section: "gk", topic: "Polity", difficulty: "medium",
    stem: "The Constitution of India was adopted by the Constituent Assembly on ____",
    options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1950"], correct: 1,
    explanation: "It was adopted on 26 November 1949 and came into force on 26 January 1950.",
  },

  // ----------------------------------------------------------- More language
  {
    id: "h6", section: "hindi", topic: "लिंग", difficulty: "easy",
    stem: "'पुस्तक' शब्द का लिंग है ____",
    options: ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "उभयलिंग"], correct: 1,
    explanation: "'पुस्तक' स्त्रीलिंग शब्द है (जैसे: यह पुस्तक अच्छी है)।",
  },
  {
    id: "h7", section: "hindi", topic: "पर्यायवाची", difficulty: "medium",
    stem: "'कमल' का पर्यायवाची शब्द है ____",
    options: ["पंकज", "अनिल", "विहग", "तरु"], correct: 0,
    explanation: "पंकज, जलज, नीरज, सरोज आदि कमल के पर्यायवाची हैं।",
  },
  {
    id: "e7", section: "english", topic: "Number", difficulty: "easy",
    stem: "The plural of 'child' is ____",
    options: ["childs", "childes", "children", "childrens"], correct: 2,
    explanation: "'Child' has the irregular plural 'children'.",
  },
  {
    id: "e8", section: "english", topic: "Spelling", difficulty: "medium",
    stem: "Choose the correctly spelt word.",
    options: ["Definately", "Definitely", "Definitly", "Defenitely"], correct: 1,
    explanation: "The correct spelling is 'definitely'.",
  },
];

/** Full bank = base starter set + the expanded UP/shared bank. */
/**
 * Questions held back from every test until they are rewritten, flagged during the
 * Sep 2026 bilingual review as garbled, ambiguous (two defensible answers) or out of
 * date. Remove an id from this list once its question is fixed.
 */
export const HELD_FOR_REVIEW = new Set<string>([
  // Current affairs with conflicting or single-source facts: verify, then release.
  "uca-p-17", "uca-p-10", "uca-p-16",
  "ca-p-33", "ca-p-16", "ca-b-38", "ca-p-15", "ca-p-34",
  "bca-p-09", "bca-b-16", "bca-p-20", "bca-b-17", "bca-p-17", "bca-p-06", "bca-p-07",
  // Static GK with a disputed answer across GK books ("first non-Indian Bharat Ratna").
  "gaw-p-03",
  // Second national current-affairs set: single-source or unopened official pages.
  "ca2-p-02", "ca2-p-19", "ca2-p-24", "ca2-p-26", "ca2-p-21", "ca2-p-06",
  // Gap fill: 2026 Road Safety Month dates confirmed only by a secondary site.
  "gf-ev-b-08",
  // Second UP current-affairs set: single-source or conflicting figures.
  "uca2-b-18", "uca2-p-20", "uca2-p-05", "uca2-p-11", "uca2-p-16", "uca2-b-11",
  // BPSC 11–12 Chemistry: same stem as another item in a sibling file.
  "s12c2-b-019",
  // Reasoning items where a second answer is arguable.
  "rt-sn-p-10", "rt-si-p-07", "rt-bl-b-08",
"gg-p-14", "gg-p-29", "gg-p-30", "ge-p-32", "rv-b-21", "rv-p-22", "ra-p-25", "ra-p-31", "sch-b-27", "sch-b-50", "sb-p-44", "se-p-01", "se-p-08", "se-p-12", "se-b-05", "pol-p-05", "lc-b-09", "lc-p-27", "lb-b-48", "lb-p-39", "l2h-b-09", "l2g-p-43", "l2g-b-30", "l2p-p-07"]);

const allQuestions: Question[] = [
  ...baseQuestions,
  ...moderateBank,
  ...urduLanguageBank,
  ...banglaLanguageBank,
  ...urduSubjectBank,
  ...enSaComprehensionBank,
  ...gkCultureBank,
  ...gkAwardsBank,
  ...gapFillBank,
  ...reasoningTypesBank,
  ...hindiComprehensionBank,
  ...caUpBank,
  ...caUp2Bank,
  ...caNationalBank,
  ...caBiharBank,
  ...caNational2Bank,
// ---- BPSC 9–12 banks (generated) ----
  ...s12AccountancyBank,
  ...s12Botany1Bank,
  ...s12Botany2Bank,
  ...s12BusinessBank,
  ...s12Chem1Bank,
  ...s12Chem2Bank,
  ...s12Chem3Bank,
  ...s12CsBank,
  ...s12EconomicsBank,
  ...s12English1Bank,
  ...s12English2Bank,
  ...s12EntrepreneurshipBank,
  ...s12GeographyBank,
  ...s12HindiBank,
  ...s12HistoryBank,
  ...s12HomesciBank,
  ...s12MathsBank,
  ...s12MusicBank,
  ...s12PhilosophyBank,
  ...s12Physics1Bank,
  ...s12Physics2Bank,
  ...s12PolsciBank,
  ...s12Psych1Bank,
  ...s12Psych2Bank,
  ...s12SanskritBank,
  ...s12SociologyBank,
  ...s12UrduBank,
  ...s12ZoologyBank,
  ...s9EnglishBank,
  ...s9HindiBank,
  ...s9Maths1Bank,
  ...s9Maths2Bank,
  ...s9PeBank,
  ...s9Science1Bank,
  ...s9Science2Bank,
  ...s9Social1Bank,
  ...s9Social2Bank,
  ...s9UrduBank,
// ---- end BPSC 9–12 banks ----
  ...upExpansion,
  ...upHardExpansion,
  ...upExpansion2,
  ...growthGa,
  ...growthGb,
  ...growthGc,
  ...sandhiBank,
  ...alankarBank,
  ...samasBank,
  ...shabdBank,
  ...muhavreBank,
  ...vartaniBank,
  ...sanskritRoopBank,
  ...sanskritVyakaranBank,
  ...englishVocabBank,
  ...englishGrammarBank,
  ...englishGrammar2Bank,
  ...englishErrorBank,
  ...gkHistoryBank,
  ...gkPolityBank,
  ...gkGeographyBank,
  ...gkEconomyBank,
  ...maNumberBank,
  ...maArithmeticBank,
  ...maCommercialBank,
  ...maTimeBank,
  ...maGeometryBank,
  ...maDiBank,
  ...verbalReasoningBank,
  ...analyticalReasoningBank,
  ...physicsBank,
  ...chemistryBank,
  ...biologyBank,
  ...evsBank,
  ...childDevelopmentBank,
  ...teachingMethodsBank,
  ...learningTheoriesBank,
  ...assessmentInclusionBank,
  ...educationalPolicyBank,
  ...lifeSkillsEthicsBank,
  ...computerFundamentalsBank,
  ...internetEdtechBank,
  ...l2PhysicsBank,
  ...l2ChemistryBank,
  ...l2BiologyBank,
  ...l2NumberBank,
  ...l2GeometryBank,
  ...l2ArithBank,
  ...l2HistoryBank,
  ...l2GeographyBank,
  ...l2PolityBank,
  ...l2EconomyBank,
  ...l2SandhiBank,
  ...l2SamasBank,
  ...l2AlankarBank,
  ...l2ShabdBank,
  ...l2SahityaBank,
  ...l2SanskritRoopBank,
  ...l2SanskritVyakaranBank,
  ...l2EnGrammarBank,
  ...l2EnVocabBank,
  ...l2EnErrorBank,
  ...l2EnLiteratureBank,
];

export const questionBank: Question[] = allQuestions.filter((q) => !HELD_FOR_REVIEW.has(q.id));
