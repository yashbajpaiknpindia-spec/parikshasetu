/**
 * Generalised exam model, Merit Marg covers ALL government teaching exams
 * (central + state). Each exam is one entry in the registry. Some entries carry
 * full `detail` (rendered by the generic hub at /exams/[slug]); KVS keeps its own
 * bespoke hub at /exam. Everything aspirant-facing is labelled and linked to the
 * official notification, figures change every cycle and must be verified there.
 */

export type ExamStatus =
  | "recruitment-open" // a live recruitment notification / imminent exam
  | "notification-awaited"
  | "eligibility-test" // e.g. CTET/TET: qualifies you, not a recruitment
  | "upcoming";

export interface ExamPost {
  code: string; // e.g. "PRT", "TGT", "Assistant Teacher"
  name: string;
  classes: string; // "Classes I–V"
  qualification: string;
  tet: string; // TET/CTET requirement
  maxAge?: string;
  pay?: string;
}

export interface PatternSection {
  name: string;
  questions: number | string;
  marks: number | string;
}

export interface ExamPaper {
  name: string; // "Written Exam", "Tier-1", "Paper-I"
  sections: PatternSection[];
  totalQuestions: number | string;
  totalMarks: number | string;
  durationMin: number | string;
  marking: string;
  negativeMarking: string;
  mode: string; // "OMR / offline" | "CBT / online"
  note?: string;
}

export interface SyllabusSection {
  id: string;
  title: string;
  topics: string[];
  hindi?: boolean; // render topics in the Devanagari font
}

export interface OfficialLink {
  label: string;
  url: string;
  kind: "official" | "portal";
}

export interface ExamDetail {
  posts: ExamPost[];
  stages: string[];
  papers: ExamPaper[];
  syllabus: SyllabusSection[];
  eligibilityNote?: string;
  ageRelaxations?: { category: string; years: string }[];
  strategy?: { title: string; body: string }[];
  books?: { section: string; title: string }[];
  officialLinks: OfficialLink[];
  mockTestIds?: string[];
  lastReviewed: string;
}

export interface Exam {
  slug: string;
  name: string; // "KVS Teacher Recruitment"
  shortName: string; // "KVS"
  body: string; // conducting authority
  bodyUrl: string;
  region: string; // "All India" | "Uttar Pradesh" | ...
  regionShort: string; // "Central" | "UP" | "Bihar"
  levels: string[]; // posts/levels: ["PRT","TGT","PGT"]
  status: ExamStatus;
  statusLabel: string;
  vacancies?: string; // "~11,000 (verify)"
  examWindow?: string; // "Written exam ~Nov 2026 (verify)"
  summary: string;
  featured?: boolean;
  priority?: boolean; // surfaced at the top (e.g. UP right now)
  hubHref: string; // "/exam" (KVS bespoke) or "/exams/<slug>"
  /** Verified deep links (override the ones derived from notifications). */
  applyUrl?: string;
  noticeUrl?: string;
  planHref?: string; // a free, dated study plan (e.g. UP)
  detail?: ExamDetail; // present for generic-hub exams
}

export const statusMeta: Record<ExamStatus, { label: string; tone: "green" | "amber" | "brand" | "slate" }> = {
  "recruitment-open": { label: "Recruitment live", tone: "green" },
  "notification-awaited": { label: "Notification awaited", tone: "amber" },
  "eligibility-test": { label: "Eligibility test", tone: "brand" },
  upcoming: { label: "Upcoming", tone: "slate" },
};
