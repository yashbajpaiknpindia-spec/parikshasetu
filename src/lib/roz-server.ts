import "server-only";
import crypto from "node:crypto";
import { prisma, isDbConfigured } from "@/lib/prisma";
import type { Question } from "@/data/questions";
import { composeExcluding, type MockTest } from "@/lib/mock-engine";
import { template, paperLabel } from "@/lib/challenge-server";
import { mobileKey } from "@/lib/challenge-token";
import { ROZ_KINDS, type RozKind } from "@/lib/roz";

/** SERVER ONLY. PostgreSQL is the source of truth for Roz ka 10 / Sunday Sprint. */

const seedOf = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const paperCache = new Map<string, { test: MockTest; questions: Question[] }>();

export const rozReady = () => isDbConfigured && !!process.env.JWT_SECRET;

/** The day's paper for one exam/subject: same questions for everyone that day. */
export function rozPaper(kind: RozKind, date: string, key: string): { test: MockTest; questions: Question[] } | null {
  const ck = `${kind}|${date}|${key}`;
  const hit = paperCache.get(ck);
  if (hit) return hit;
  const tpl = template(key);
  if (!tpl) return null;
  const k = ROZ_KINDS[kind];
  const test: MockTest = {
    ...tpl.base,
    id: `${kind}-${date}-${key.replace(/:/g, "-")}`,
    title: `${k.name.en} · ${paperLabel(key)}`,
    series: undefined,
    demo: undefined,
    listed: false,
    free: true,
    durationMin: k.minutes,
    seed: 50000 + (seedOf(ck) % 400000),
  };
  const pool = composeExcluding(test, new Set()).filter((q) => !q.passageId);
  const n = Math.min(k.questions, pool.length);
  const questions = Array.from({ length: n }, (_, i) => pool[Math.floor((i * pool.length) / n)]);
  const out = { test: { ...test, blueprint: [], fixedCount: n }, questions };
  if (paperCache.size > 200) paperCache.clear();
  paperCache.set(ck, out);
  return out;
}

export const hideAnswer = (q: Question): Question => ({ ...q, correct: -1, explanation: "", explanationHi: undefined });

export function markOf(test: MockTest, q: Question, choice: number | null | undefined): number {
  if (choice === null || choice === undefined || choice < 0) return 0;
  return choice === q.correct ? test.markPerCorrect : test.negativeMark;
}

export function scoreRoz(test: MockTest, qs: Question[], a: Record<string, number | null>) {
  let score = 0, correct = 0, wrong = 0;
  for (const q of qs) {
    const c = a[q.id];
    if (c === null || c === undefined || c < 0) continue;
    if (c === q.correct) correct++; else wrong++;
    score += markOf(test, q, c);
  }
  return { score: Math.round(score * 100) / 100, max: qs.length * test.markPerCorrect, correct, wrong, skipped: qs.length - correct - wrong, total: qs.length };
}

const secret = () => process.env.JWT_SECRET ?? "";
const sig = (data: string) => crypto.createHmac("sha256", secret()).update(`roz:${data}`).digest("base64url").slice(0, 32);
const safeEq = (a: string, b: string) => a.length === b.length && crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
export function signRoz(payload: object): string {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sig(body)}`;
}
export function verifyRoz<T>(token: unknown): T | null {
  if (typeof token !== "string" || !secret()) return null;
  const [body, s] = token.split(".");
  if (!body || !s || !safeEq(s, sig(body))) return null;
  try { return JSON.parse(Buffer.from(body, "base64url").toString()) as T; } catch { return null; }
}

export interface RozAttempt { k: RozKind; d: string; p: string; w: string; at: number; a: Record<string, number | null> }
export interface RozDone { k: RozKind; d: string; p: string; w: string; score: number; max: number; correct: number; wrong: number; skipped: number; sec: number }

export const DEV_COOKIE = "mm_dev";
export const doneCookie = (k: RozKind) => `mm_roz_${k}`;
export const newDeviceId = () => crypto.randomBytes(9).toString("base64url");
export const whoOf = (mobile: string | null | undefined, dev: string | null | undefined) =>
  mobile ? mobileKey(mobile) : dev ? `g${dev.replace(/[^A-Za-z0-9_-]/g, "").slice(0, 16)}` : null;

export interface RozRow {
  name: string | null;
  exam: string;
  paper: string;
  score: number;
  max: number;
  correct: number;
  wrong: number;
  skipped: number;
  sec: number;
  at: string;
  answers: Record<string, number | null>;
}

function rowFromDb(row: { name: string | null; exam: string; paper: string; score: number; max: number; correct: number; wrong: number; skipped: number; sec: number; submittedAt: Date; answers: unknown }): RozRow {
  const answers = row.answers && typeof row.answers === "object" && !Array.isArray(row.answers)
    ? Object.fromEntries(Object.entries(row.answers as Record<string, unknown>).map(([k, v]) => [k, typeof v === "number" || v === null ? v : null]))
    : {};
  return { ...row, at: row.submittedAt.toISOString(), answers };
}

export async function saveRoz(k: RozKind, d: string, who: string, row: RozRow): Promise<{ rank: number; total: number } | null> {
  if (!rozReady()) return null;
  try {
    await prisma.rozAttempt.create({
      data: {
        kind: k, date: d, paper: row.paper, who, name: row.name, exam: row.exam,
        score: row.score, max: row.max, correct: row.correct, wrong: row.wrong,
        skipped: row.skipped, sec: row.sec, submittedAt: new Date(row.at), answers: row.answers,
      },
    });
  } catch (error: unknown) {
    if ((error as { code?: string })?.code !== "P2002") throw error;
  }
  const mine = await prisma.rozAttempt.findUnique({ where: { kind_date_paper_who: { kind: k, date: d, paper: row.paper, who } }, select: { score: true, sec: true } });
  return mine ? rankRoz(k, d, row.paper, who, mine.score, mine.sec) : null;
}

export async function rankRoz(k: RozKind, d: string, paper: string, who: string, score: number, sec: number) {
  if (!rozReady()) return null;
  try {
    const [better, total] = await Promise.all([
      prisma.rozAttempt.count({
        where: {
          kind: k, date: d, paper,
          NOT: { who },
          OR: [{ score: { gt: score } }, { AND: [{ score }, { sec: { lt: sec } }] }],
        },
      }),
      prisma.rozAttempt.count({ where: { kind: k, date: d, paper } }),
    ]);
    return { rank: better + 1, total };
  } catch { return null; }
}

export async function boardRoz(k: RozKind, d: string, paper: string, top = 10) {
  if (!rozReady()) return { rows: [], total: 0 };
  try {
    const [total, named] = await Promise.all([
      prisma.rozAttempt.count({ where: { kind: k, date: d, paper } }),
      prisma.rozAttempt.findMany({
        where: { kind: k, date: d, paper, name: { not: null } },
        orderBy: [{ score: "desc" }, { sec: "asc" }, { submittedAt: "asc" }],
        take: top,
        select: { who: true, name: true, score: true, sec: true },
      }),
    ]);
    const rows = named.filter((r): r is typeof r & { name: string } => !!r.name).map((r) => ({ name: shortName(r.name), score: r.score, sec: r.sec, who: r.who }));
    return { rows, total };
  } catch { return { rows: [], total: 0 }; }
}

export function shortName(n: string) {
  const parts = n.trim().split(/\s+/);
  return parts.length > 1 ? `${parts[0]} ${parts[parts.length - 1][0]}.` : parts[0];
}

export async function claimRoz(k: RozKind, d: string, paper: string, guest: string, who: string, name: string) {
  if (!rozReady()) return;
  const existing = await prisma.rozAttempt.findUnique({ where: { kind_date_paper_who: { kind: k, date: d, paper, who: guest } } });
  if (!existing) return;
  const named = await prisma.rozAttempt.findUnique({ where: { kind_date_paper_who: { kind: k, date: d, paper, who } }, select: { id: true } });
  if (named) return;
  await prisma.rozAttempt.update({ where: { id: existing.id }, data: { who, name: name.trim() } });
}

export async function addUserDays(mobile: string, name: string, days: unknown[]): Promise<string[]> {
  const clean = [...new Set(days.filter((s): s is string => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s)))].sort();
  if (!rozReady()) return clean;
  const key = mobileKey(mobile);
  const prev = await prisma.rozUserDay.findUnique({ where: { id: key }, select: { days: true } });
  const all = [...new Set([...(prev?.days ?? []), ...clean])].sort().slice(-400);
  await prisma.rozUserDay.upsert({ where: { id: key }, create: { id: key, name, days: all }, update: { name, days: all } });
  return all;
}

export async function rozStats(days: string[]) {
  if (!rozReady() || !days.length) return [];
  try {
    const [groups, named] = await Promise.all([
      prisma.rozAttempt.groupBy({ by: ["date", "kind", "paper"], where: { date: { in: days } }, _count: { _all: true }, _avg: { score: true } }),
      prisma.rozAttempt.groupBy({ by: ["date", "kind", "paper"], where: { date: { in: days }, name: { not: null } }, _count: { _all: true } }),
    ]);
    const namedMap = new Map(named.map((g) => [`${g.date}|${g.kind}|${g.paper}`, g._count._all]));
    return groups.map((g) => ({
      date: g.date, kind: g.kind as RozKind, paper: g.paper, attempts: g._count._all,
      named: namedMap.get(`${g.date}|${g.kind}|${g.paper}`) ?? 0,
      avg: Math.round((g._avg.score ?? 0) * 10) / 10,
    })).sort((a, b) => b.date.localeCompare(a.date) || a.kind.localeCompare(b.kind) || a.paper.localeCompare(b.paper));
  } catch (error) {
    console.error("[roz] stats failed", error);
    return [];
  }
}
