import type { Exam } from "./types";
import { upExam } from "./up";
import { otherExams } from "./others";

/**
 * The exam registry, every government teaching exam Merit Marg covers.
 * UP is the current priority. KVS keeps its bespoke hub at /exam; the rest use
 * the generic hub at /exams/[slug].
 */

const kvs: Exam = {
  slug: "kvs",
  name: "KVS Teacher Recruitment",
  shortName: "KVS",
  body: "Kendriya Vidyalaya Sangathan (conducted via CBSE)",
  bodyUrl: "https://kvsangathan.nic.in",
  region: "All India",
  regionShort: "Central",
  levels: ["PRT", "TGT", "PGT"],
  status: "recruitment-open",
  statusLabel: "2025–26 cycle in progress",
  vacancies: "~9,921 KVS (verify)",
  examWindow: "2025–26 Tier-2 results being declared",
  summary:
    "Central-government schools across India. A two-tier CBT (2025–26) plus interview & demo teaching. Full guide, pattern for both cycles, and mock tests.",
  featured: true,
  hubHref: "/exam",
};

export const exams: Exam[] = [upExam, kvs, ...otherExams];

export function getExam(slug: string) {
  return exams.find((e) => e.slug === slug);
}

/** Exams that use the generic hub (have full detail). */
export function detailedExams() {
  return exams.filter((e) => e.detail);
}

export function priorityExams() {
  return exams.filter((e) => e.priority);
}

/** Distinct regions for filtering. */
export function regions() {
  return Array.from(new Set(exams.map((e) => e.region))).sort();
}
