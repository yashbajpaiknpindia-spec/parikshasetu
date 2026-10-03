import "server-only";

import { prisma, isDbConfigured } from "@/lib/prisma";

/** PostgreSQL-backed store for the Free Mock Challenge.
 *
 * The donor build used external Blob/Supabase storage. This application already has
 * PostgreSQL as its source of truth, so challenge registrations and submissions are
 * deliberately persisted through Prisma instead of introducing a second datastore.
 */
export function blobReady() {
  return isDbConfigured;
}

export function anyStore() {
  return isDbConfigured;
}

export interface Registration {
  reg_no: string;
  name: string;
  mobile: string;
  exam: string;
  subject?: string | null;
  district?: string | null;
  rounds: number[];
  consent_updates: boolean;
  consent_offers: boolean;
  source: string | null;
}

export async function saveRegistration(row: Registration): Promise<{ stored: boolean; already: boolean; regNo: string }> {
  if (!isDbConfigured) return { stored: false, already: false, regNo: row.reg_no };

  const existing = await prisma.challengeRegistration.findUnique({
    where: { mobile: row.mobile },
    select: { regNo: true, name: true, mobile: true, exam: true, subject: true, district: true, rounds: true, consent: true, offers: true, source: true },
  });

  if (existing) {
    const rounds = [...new Set([...existing.rounds, ...row.rounds])].sort((a, b) => a - b);
    const updated = await prisma.challengeRegistration.update({
      where: { mobile: row.mobile },
      data: {
        name: row.name || existing.name,
        exam: row.exam || existing.exam,
        subject: row.subject ?? existing.subject,
        district: row.district ?? existing.district,
        rounds,
        consent: existing.consent || row.consent_updates,
        offers: existing.offers || row.consent_offers,
        source: existing.source || row.source || "challenge",
      },
      select: { regNo: true },
    });
    return { stored: true, already: true, regNo: updated.regNo };
  }

  let regNo = row.reg_no;
  for (let i = 0; i < 5; i += 1) {
    try {
      const created = await prisma.challengeRegistration.create({
        data: {
          regNo,
          name: row.name,
          mobile: row.mobile,
          exam: row.exam,
          subject: row.subject ?? null,
          district: row.district ?? null,
          rounds: row.rounds,
          consent: row.consent_updates,
          offers: row.consent_offers,
          source: row.source || "challenge",
        },
        select: { regNo: true },
      });
      return { stored: true, already: false, regNo: created.regNo };
    } catch (error: unknown) {
      if ((error as { code?: string })?.code !== "P2002") throw error;
      regNo = `${row.reg_no}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
    }
  }
  return { stored: false, already: false, regNo };
}

export interface Submission {
  round: number;
  name: string;
  mobile: string;
  exam: string;
  paper: string;
  score: number;
  max: number;
  correct: number;
  wrong: number;
  unattempted: number;
  startedAt: string;
  submittedAt: string;
  durationSec: number;
  late: boolean;
  answers: Record<string, number | null>;
}

function toSubmission(row: {
  round: number;
  name: string;
  mobile: string;
  exam: string;
  paper: string;
  score: number;
  max: number;
  correct: number;
  wrong: number;
  unattempted: number;
  startedAt: Date;
  submittedAt: Date;
  durationSec: number;
  late: boolean;
  answers: unknown;
}): Submission {
  const answers = row.answers && typeof row.answers === "object" && !Array.isArray(row.answers)
    ? Object.fromEntries(Object.entries(row.answers as Record<string, unknown>).map(([k, v]) => [k, typeof v === "number" || v === null ? v : null]))
    : {};
  return {
    round: row.round,
    name: row.name,
    mobile: row.mobile,
    exam: row.exam,
    paper: row.paper,
    score: row.score,
    max: row.max,
    correct: row.correct,
    wrong: row.wrong,
    unattempted: row.unattempted,
    startedAt: row.startedAt.toISOString(),
    submittedAt: row.submittedAt.toISOString(),
    durationSec: row.durationSec,
    late: row.late,
    answers,
  };
}

export async function saveSubmission(row: Submission): Promise<"ok" | "dup" | "fail"> {
  if (!isDbConfigured) return "fail";
  try {
    await prisma.challengeSubmission.create({
      data: {
        round: row.round,
        name: row.name,
        mobile: row.mobile,
        exam: row.exam,
        paper: row.paper,
        score: row.score,
        max: row.max,
        correct: row.correct,
        wrong: row.wrong,
        unattempted: row.unattempted,
        startedAt: new Date(row.startedAt),
        submittedAt: new Date(row.submittedAt),
        durationSec: row.durationSec,
        late: row.late,
        answers: row.answers,
      },
    });
    return "ok";
  } catch (error: unknown) {
    if ((error as { code?: string })?.code === "P2002") return "dup";
    console.error("[challenge] saveSubmission failed", error);
    return "fail";
  }
}

export async function getSubmission(round: number, mobile: string): Promise<Submission | null> {
  if (!isDbConfigured) return null;
  try {
    const row = await prisma.challengeSubmission.findUnique({ where: { round_mobile: { round, mobile } } });
    return row ? toSubmission(row) : null;
  } catch (error) {
    console.error("[challenge] getSubmission failed", error);
    return null;
  }
}

/** Compatibility no-op. PostgreSQL computes ranking directly. */
export async function saveRankMarker(_row: Submission) {
  return undefined;
}

/** Rank within a paper: score desc, then duration asc, then submission time asc. */
export async function rankOf(row: Pick<Submission, "round" | "paper" | "score" | "durationSec" | "mobile" | "submittedAt">): Promise<{ rank: number; total: number } | null> {
  if (!isDbConfigured) return null;
  try {
    const better = await prisma.challengeSubmission.count({
      where: {
        round: row.round,
        paper: row.paper,
        OR: [
          { score: { gt: row.score } },
          { AND: [{ score: row.score }, { durationSec: { lt: row.durationSec } }] },
          { AND: [{ score: row.score }, { durationSec: row.durationSec }, { submittedAt: { lt: new Date(row.submittedAt) } }] },
        ],
      },
    });
    const total = await prisma.challengeSubmission.count({ where: { round: row.round, paper: row.paper } });
    return { rank: better + 1, total };
  } catch (error) {
    console.error("[challenge] rankOf failed", error);
    return null;
  }
}

export async function listSubmissions(round: number): Promise<Submission[]> {
  if (!isDbConfigured) return [];
  try {
    const rows = await prisma.challengeSubmission.findMany({
      where: { round },
      orderBy: [{ score: "desc" }, { durationSec: "asc" }, { submittedAt: "asc" }],
    });
    return rows.map(toSubmission);
  } catch (error) {
    console.error("[challenge] listSubmissions failed", error);
    return [];
  }
}

export async function countRegistrations(): Promise<number | null> {
  if (!isDbConfigured) return null;
  try {
    return await prisma.challengeRegistration.count();
  } catch (error) {
    console.error("[challenge] countRegistrations failed", error);
    return null;
  }
}

export function rankSubmissions(rows: Submission[]): Submission[] {
  return [...rows].sort((a, b) => b.score - a.score || a.durationSec - b.durationSec || a.submittedAt.localeCompare(b.submittedAt));
}
