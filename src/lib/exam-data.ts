/**
 * KVS recruitment, single source of truth for the exam-info hub and mock engine.
 *
 * VERIFICATION STANCE (see also SETUP.md and the on-page notices):
 * KVS recruitment has run under two very different regimes and mixing them is the
 * single biggest source of error. Everything here is labelled by CYCLE. All
 * aspirant-facing figures link to the official notification. Coaching portals
 * disagree on several 2025–26 numbers; those are flagged and must be reconciled
 * against the official CBSE / KVS notification PDF before a candidate acts on them.
 *
 * Grounded in the project exam-blueprint plus sourced research (Sept 2026).
 */

export type PostCode = "PRT" | "TGT" | "PGT";

export interface Post {
  code: PostCode;
  name: string;
  teaches: string;
  classes: string;
  qualification: string;
  ctet: string;
  maxAge: number;
  payLevel: string;
  entryPay: string;
}

export const posts: Post[] = [
  {
    code: "PRT",
    name: "Primary Teacher",
    teaches: "Primary classes",
    classes: "Classes I–V",
    qualification:
      "Senior Secondary (Class XII) with ≥50% + D.El.Ed. (2-yr) or B.El.Ed. (4-yr); proficiency in Hindi & English.",
    ctet: "CTET Paper-I mandatory",
    maxAge: 30,
    payLevel: "Level 6 (7th CPC)",
    entryPay: "₹35,400 (entry basic)",
  },
  {
    code: "TGT",
    name: "Trained Graduate Teacher",
    teaches: "Upper-primary & secondary",
    classes: "Classes VI–X",
    qualification:
      "Bachelor's/Honours in the relevant subject with ≥50% + B.Ed.; proficiency in Hindi & English.",
    ctet: "CTET Paper-II mandatory",
    maxAge: 35,
    payLevel: "Level 7 (7th CPC)",
    entryPay: "₹44,900 (entry basic)",
  },
  {
    code: "PGT",
    name: "Post Graduate Teacher",
    teaches: "Senior secondary",
    classes: "Classes XI–XII",
    qualification:
      "Master's (or integrated PG) in the relevant subject with ≥50% + B.Ed.; proficiency in Hindi & English.",
    ctet: "Generally not required for PGT",
    maxAge: 40,
    payLevel: "Level 8 (7th CPC)",
    entryPay: "₹47,600 (entry basic)",
  },
];

export interface AgeRelaxation {
  category: string;
  years: string;
}
export const ageRelaxations: AgeRelaxation[] = [
  { category: "SC / ST", years: "5 years" },
  { category: "OBC (non-creamy layer)", years: "3 years" },
  { category: "Persons with Disabilities (PwD)", years: "up to 10 years" },
  { category: "Ex-servicemen", years: "as per GoI formula" },
  { category: "KVS employees", years: "as specified in the notification" },
];

export const reservation = [
  { category: "SC", pct: "15%" },
  { category: "ST", pct: "7.5%" },
  { category: "OBC", pct: "27%" },
  { category: "EWS", pct: "10%" },
  { category: "PwD (horizontal)", pct: "4%" },
];

/* ------------------------------------------------------------------ */
/*  Exam cycles                                                        */
/* ------------------------------------------------------------------ */

export interface PatternRow {
  part: string;
  section: string;
  questions: number | string;
  marks: number | string;
}

export interface Cycle {
  id: "2022-23" | "2025-26";
  label: string;
  conductedBy: string;
  status: string;
  confidence: "well-documented" | "provisional";
  headline: string;
  stages: string[];
  marking: string;
  negativeMarking: string;
  duration: string;
  total: string;
  weightage: string;
  patterns: Record<PostCode, PatternRow[]>;
  notes: string[];
}

export const cycles: Cycle[] = [
  {
    id: "2022-23",
    label: "2022–23 cycle",
    conductedBy: "KVS (direct recruitment, computer-based test)",
    status: "Last KVS-run direct recruitment (≈13,404 posts). CBT held Feb–Mar 2023.",
    confidence: "well-documented",
    headline:
      "A single objective CBT + interview, with NO negative marking. Use this as the stable baseline for practice.",
    stages: [
      "Stage 1: Computer Based Test (single objective paper)",
      "Stage 2: Interview (with a teaching-skill element)",
      "Stage 3: Document verification",
    ],
    marking: "+1 per correct answer",
    negativeMarking: "None",
    duration: "180 minutes (150 for Music/Librarian)",
    total: "180 questions · 180 marks",
    weightage: "Final merit = CBT 70% : Interview 30%",
    patterns: {
      PRT: [
        { part: "I", section: "General English + General Hindi", questions: 20, marks: 20 },
        { part: "II", section: "General Awareness & Current Affairs, Reasoning, Computer Literacy", questions: 20, marks: 20 },
        { part: "III", section: "Perspectives on Education & Leadership", questions: 60, marks: 60 },
        { part: "IV", section: "Subject concerned (primary level)", questions: 80, marks: 80 },
      ],
      TGT: [
        { part: "I", section: "General English + General Hindi", questions: 20, marks: 20 },
        { part: "II", section: "GK & Current Affairs, Reasoning, Computer Literacy", questions: 20, marks: 20 },
        { part: "III", section: "Perspectives on Education & Leadership", questions: 40, marks: 40 },
        { part: "IV", section: "Concerned subject", questions: 100, marks: 100 },
      ],
      PGT: [
        { part: "I", section: "General English + General Hindi", questions: 10, marks: 10 },
        { part: "II", section: "GK & Current Affairs, Reasoning, Computer Literacy", questions: 20, marks: 20 },
        { part: "III", section: "Perspectives on Education & Leadership", questions: 40, marks: 40 },
        { part: "IV", section: "Concerned subject", questions: 100, marks: 100 },
      ],
    },
    notes: [
      "PRT weighted Perspectives on Education 60 + Subject 80; TGT & PGT weighted Perspectives 40 + Subject 100.",
      "Bilingual (English–Hindi) MCQs; concerned-language papers for language subjects.",
      "Portal-reported qualifying marks (~140–150/180) are indicative, not an official fixed pass mark.",
    ],
  },
  {
    id: "2025-26",
    label: "2025–26 cycle",
    conductedBy: "CBSE (joint KVS + NVS + EMRS recruitment)",
    status:
      "Current cycle. Notification reported Nov 2025; Tier-2 results being declared in phases through 2026.",
    confidence: "provisional",
    headline:
      "A new two-tier CBT (Tier-1 screening → Tier-2 subject) WITH negative marking, then interview/demo. Portals contradict each other on Tier-2. Verify against the official notification.",
    stages: [
      "Tier-1: common objective screening CBT (qualifying; shortlist ~1:10)",
      "Tier-2: post/subject-specific CBT (decides merit)",
      "Interview / Demo teaching (teaching posts) or Skill test (non-teaching)",
      "Document verification & medical",
    ],
    marking: "Tier-1: +3 correct. Tier-2 objective: +1 correct.",
    negativeMarking:
      "Reported: Tier-1 −1 per wrong; Tier-2 objective −0.25 per wrong. (Verify.)",
    duration: "Tier-1: 120 min · Tier-2: ~150 min",
    total: "Tier-1: 100 questions · 300 marks",
    weightage: "Reported: Tier-2 85% : Interview/Demo 15%",
    patterns: {
      PRT: [
        { part: "I", section: "Reasoning Ability", questions: 20, marks: 60 },
        { part: "II", section: "Numerical / Quantitative Ability", questions: 20, marks: 60 },
        { part: "III", section: "Computer Literacy", questions: 20, marks: 60 },
        { part: "IV", section: "General Knowledge & Current Affairs", questions: 20, marks: 60 },
        { part: "V", section: "Language Competency: English", questions: 10, marks: 30 },
        { part: "VI", section: "Language Competency: Hindi / MIL", questions: 10, marks: 30 },
      ],
      TGT: [
        { part: "I", section: "Reasoning Ability", questions: 20, marks: 60 },
        { part: "II", section: "Numerical / Quantitative Ability", questions: 20, marks: 60 },
        { part: "III", section: "Computer Literacy", questions: 20, marks: 60 },
        { part: "IV", section: "General Knowledge & Current Affairs", questions: 20, marks: 60 },
        { part: "V", section: "Language Competency: English", questions: 10, marks: 30 },
        { part: "VI", section: "Language Competency: Hindi / MIL", questions: 10, marks: 30 },
      ],
      PGT: [
        { part: "I", section: "Reasoning Ability", questions: 20, marks: 60 },
        { part: "II", section: "Numerical / Quantitative Ability", questions: 20, marks: 60 },
        { part: "III", section: "Computer Literacy", questions: 20, marks: 60 },
        { part: "IV", section: "General Knowledge & Current Affairs", questions: 20, marks: 60 },
        { part: "V", section: "Language Competency: English", questions: 10, marks: 30 },
        { part: "VI", section: "Language Competency: Hindi / MIL", questions: 10, marks: 30 },
      ],
    },
    notes: [
      "The 6-part Tier-1 table above is the most widely reported structure; a minority of portals describe a 4-section screen. Confirm against the notification.",
      "Tier-2 format is disputed: some sources report 70 Q / 100 marks (60 objective + 10 descriptive); others reuse the old 180-Q four-part paper. Do not treat as fixed.",
      "Reported vacancies vary (≈9,126 / 9,921 KVS; ≈14,967 combined KVS+NVS). Quote only the official figure.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Syllabus                                                           */
/* ------------------------------------------------------------------ */

export interface SyllabusSection {
  id: string;
  title: string;
  topics: string[];
}

export const syllabus: SyllabusSection[] = [
  {
    id: "reasoning",
    title: "Reasoning / Analytical Ability",
    topics: [
      "Analogies, classification, similarities",
      "Number & alphabet series",
      "Coding–decoding",
      "Blood relations, direction sense",
      "Syllogism, statement–conclusion",
      "Ordering / ranking, seating arrangement",
      "Venn diagrams, data sufficiency",
      "Non-verbal (mirror images, paper folding)",
    ],
  },
  {
    id: "numerical",
    title: "Numerical / Quantitative Ability",
    topics: [
      "Number system, simplification",
      "HCF / LCM, percentages",
      "Ratio & proportion, averages",
      "Profit & loss, SI / CI",
      "Time–speed–distance, time & work",
      "Mensuration",
      "Data interpretation",
    ],
  },
  {
    id: "computer",
    title: "Computer Literacy",
    topics: [
      "Fundamentals, generations & types",
      "Hardware & software, memory/storage",
      "Operating systems, MS Office",
      "Internet, email, browsers, search engines",
      "Networking & web technology basics",
      "DBMS basics, ICT in education",
    ],
  },
  {
    id: "gk",
    title: "General Knowledge & Current Affairs",
    topics: [
      "Indian polity & constitution",
      "History (ancient, medieval, modern)",
      "Geography & Indian geography",
      "Economy basics",
      "General/everyday science",
      "Art & culture, sports, awards, books",
      "National & international current affairs (rolling 6–12 months)",
    ],
  },
  {
    id: "english",
    title: "General English",
    topics: [
      "Tenses, articles, prepositions, modals",
      "Narration, active/passive voice",
      "Subject–verb agreement, error spotting",
      "Vocabulary, synonyms/antonyms",
      "One-word substitution, idioms & phrases",
      "Reading comprehension",
    ],
  },
  {
    id: "hindi",
    title: "General Hindi (सामान्य हिंदी)",
    topics: [
      "संज्ञा, सर्वनाम, विशेषण, क्रिया",
      "संधि, समास, अलंकार, कारक",
      "उपसर्ग एवं प्रत्यय, वचन, लिंग",
      "पर्यायवाची, विलोम, अनेकार्थक शब्द",
      "मुहावरे एवं लोकोक्तियाँ",
      "अपठित गद्यांश, वाक्य शुद्धि",
    ],
  },
  {
    id: "pedagogy",
    title: "Perspectives on Education & Pedagogy",
    topics: [
      "Child development & learning (Piaget, Vygotsky, Kohlberg)",
      "Theories of learning: behaviourism, cognitivism, constructivism",
      "Motivation, assessment (formative/summative → competency-based)",
      "Inclusive education, diversity & disability",
      "NEP 2020, NCF-FS 2022 / NCF-SE 2023, RTE Act 2009",
      "Holistic progress card, classroom management, TLM, action research",
    ],
  },
];

export const subjectNotes = {
  tgt: "TGT subject questions are rooted in NCERT Classes VI–X but pitched at graduation level (e.g. Maths, Science, Social Studies, English, Hindi).",
  pgt: "PGT subject content is at post-graduation/degree level. The detailed, subject-wise syllabus is released by CBSE as PDFs. Download those per subject.",
  prt: "PRT subject core covers primary-level Maths, EVS and language pedagogy aligned to the NCERT primary syllabus and the FLN (Foundational Literacy & Numeracy) mission.",
};

/* ------------------------------------------------------------------ */
/*  Preparation resources                                              */
/* ------------------------------------------------------------------ */

export const books = [
  { section: "Reasoning", title: "Verbal & Non-Verbal Reasoning: R.S. Aggarwal (S. Chand)" },
  { section: "Quantitative", title: "Quantitative Aptitude: R.S. Aggarwal" },
  { section: "English", title: "Objective General English: S.P. Bakshi (Arihant); Wren & Martin" },
  { section: "Hindi", title: "Samanya Hindi: Lucent; Adhunik Hindi Vyakaran: Bharti Bhawan" },
  { section: "Computer", title: "Computer Awareness: Arihant" },
  { section: "GK / Current Affairs", title: "Lucent's GK; Manorama / Pratiyogita Darpan Yearbook" },
  { section: "Pedagogy / NEP", title: "CTET pedagogy material + NEP 2020 + NCF (FS 2022 / SE 2023)" },
  { section: "Subject core", title: "NCERT textbooks (Classes VI–XII): non-negotiable base" },
];

export interface Channel {
  name: string;
  focus: string;
  url: string;
}
// Leads to vet, not endorsements, verify each is active before relying on it.
export const channels: Channel[] = [
  { name: "Teachers Adda247", focus: "All sections, daily live classes + mocks", url: "https://www.youtube.com/c/Adda247TeachingExams" },
  { name: "Let's LEARN", focus: "Child Development, Pedagogy & Ed-Psychology", url: "https://www.youtube.com/channel/UCCUoz5ivpW5fbZIDGUTacbQ" },
  { name: "EduRev (KVS PGT/TGT/PRT)", focus: "Free courses, mocks, PYQs hub", url: "https://edurev.in/explore/328/KVS-PGTTGTPRT" },
];

/* ------------------------------------------------------------------ */
/*  Sources (for the "verify" panels)                                  */
/* ------------------------------------------------------------------ */

export interface Source {
  label: string;
  url: string;
  kind: "official" | "portal" | "legal";
}
export const sources: Source[] = [
  { label: "KVS Sangathan: official", url: "https://kvsangathan.nic.in/en/recruitment/", kind: "official" },
  { label: "CBSE: conducts KVS/NVS recruitment", url: "https://cbse.gov.in", kind: "official" },
  { label: "CTET: official", url: "https://ctet.nic.in", kind: "official" },
  { label: "NCERT textbooks (free PDFs)", url: "https://ncert.nic.in", kind: "official" },
  { label: "Careers360: KVS Recruitment Examination", url: "https://competition.careers360.com/exams/kvs-recruitment-examination", kind: "portal" },
  { label: "Adda247: KVS eligibility & selection", url: "https://www.adda247.com/teaching-jobs-exam/kvs-eligibility/", kind: "portal" },
  { label: "Delhi HC: KVS 4% PwD reservation", url: "https://www.livelaw.in/high-court/delhi-high-court/delhi-high-court-kedriya-vidyalaya-pwd-reservation-241352", kind: "legal" },
];

export const lastReviewed = "21 September 2026";
