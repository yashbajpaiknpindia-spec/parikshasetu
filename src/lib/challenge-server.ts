import type { Question } from "@/data/questions";
import { HINDI_POEM } from "@/data/questions";
import { CHALLENGE_EXTRA, R1_PATCH, R1_REPLACE } from "@/data/challenge-questions";
import { questionHi } from "@/data/question-hi";
import { FULL_PAPER } from "@/lib/exams/up-plan";
import { BIHAR_SUBJECTS, BIHAR_SENIOR, getBiharPlanTest, allBiharSectionMocks, type SeniorLevel } from "@/lib/exams/bihar-plan";
import { composeExcluding, composeTest, getMockTest, mockTests, type BlueprintPart, type MockTest } from "@/lib/mock-engine";
import { CHALLENGE } from "@/lib/challenge";

/**
 * SERVER ONLY. The Free Mock Challenge papers, one per exam (and subject, where the
 * exam has subjects), all in the official pattern of that exam.
 *
 *  up-prt                SUPER TET: FULL_PAPER (10 sections, 120 Q, 120 min, +3/−1),
 *                        with a Hindi poem written for the round
 *  bihar-1-5             BPSC TRE 4.0 Paper 1 (150 Q, 150 min, +1/−⅓, option E)
 *  bihar-6-8:<subject>   Paper 2 in that subject; bihar-9-10 / bihar-11-12 likewise
 *
 * Every paper leaves out the questions of that exam's free and paid mocks, so a pass
 * holder has no head start. Built once per server instance and deterministic, so every
 * instance serves the same paper.
 */

export interface PaperChoice { exam: string; subject?: string }
/** Exams whose paper depends on a subject, with their subject options (live subjects only). */
export function subjectOptions(exam: string): { key: string; en: string; hi: string }[] {
  if (exam === "bihar-6-8") return BIHAR_SUBJECTS.map(({ key, en, hi }) => ({ key, en, hi }));
  const lv = seniorOf(exam);
  return lv ? BIHAR_SENIOR[lv].subjects.map(({ key, en, hi }) => ({ key, en, hi })) : [];
}
const seniorOf = (exam: string): SeniorLevel | null => (exam === "bihar-9-10" ? "9-10" : exam === "bihar-11-12" ? "11-12" : null);

/** The paper of a logged-in candidate (older logins carry only the exam). */
export const userPaper = (u: { exam: string; subject?: string; paper?: string }) => u.paper ?? paperKey(u);

/** "bihar-6-8:ms" etc. Null if the choice is incomplete or unknown. */
export function paperKey(c: PaperChoice): string | null {
  if (c.exam === "up-prt" || c.exam === "bihar-1-5") return c.exam;
  const subs = subjectOptions(c.exam);
  if (!subs.length) return null;
  return c.subject && subs.some((s) => s.key === c.subject) ? `${c.exam}:${c.subject}` : null;
}

/** The exam's full-paper template (pattern, marking, time) and the ids whose questions to skip. */
export function template(key: string): { base: MockTest; skipTests: MockTest[]; label: string } | null {
  if (key === "up-prt") {
    const base = getMockTest("up-mock-l1-full-1")!;
    const skip = mockTests.filter((t) => t.series === "up-full" || /^up-free-\d+$/.test(t.id));
    return { base, skipTests: skip, label: "SUPER TET" };
  }
  const find = (id: string) => getBiharPlanTest(id) ?? allBiharSectionMocks.find((t) => t.id === id);
  const many = (ids: string[]) => ids.map(find).filter(Boolean) as MockTest[];
  const range = (n: number, f: (i: number) => string) => Array.from({ length: n }, (_, i) => f(i + 1));
  if (key === "bihar-1-5") {
    const base = find("bh15-rev1");
    return base ? { base, skipTests: many([...range(5, (i) => `bh15-rev${i}`), ...range(10, (i) => `bh15-free-${i}`)]), label: "BPSC TRE 4.0 · Classes 1–5" } : null;
  }
  const [exam, subject] = key.split(":");
  if (exam === "bihar-6-8") {
    const base = find(`bh68${subject}-rev1`);
    const s = BIHAR_SUBJECTS.find((x) => x.key === subject);
    return base ? { base, skipTests: many([...range(4, (i) => `bh68${subject}-rev${i}`), ...range(10, (i) => `bh68-free-${subject}-${i}`)]), label: `BPSC TRE 4.0 · Classes 6–8 · ${s?.en ?? subject}` } : null;
  }
  const lv = seniorOf(exam);
  if (lv) {
    const pre = BIHAR_SENIOR[lv].prefix;
    const base = find(`${pre}${subject}-rev1`);
    const s = BIHAR_SENIOR[lv].subjects.find((x) => x.key === subject);
    return base ? { base, skipTests: many([...range(4, (i) => `${pre}${subject}-rev${i}`), ...range(10, (i) => `${pre}-free-${subject}-${i}`)]), label: `BPSC TRE 4.0 · Classes ${lv.replace("-", "–")} · ${s?.en ?? subject}` } : null;
  }
  return null;
}

const seedOf = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 17) % 40000;

/** The challenge test definition for a round and paper. */
export function challengeTest(n: number, key = "up-prt"): MockTest {
  const tpl = template(key) ?? template("up-prt")!;
  const r = CHALLENGE.rounds.find((x) => x.n === n);
  const isUp = key === "up-prt";
  return {
    ...tpl.base,
    id: `challenge-r${n}-${key.replace(":", "-")}`,
    title: `Free Mock Challenge · Round ${n} · ${tpl.label}`,
    description: isUp
      ? "The full SUPER TET paper in the official 2026 pattern: 10 sections, 120 questions, 360 marks, 120 minutes, +3 / −1."
      : `The full ${tpl.label} paper in the official BPSC TRE 4.0 pattern: 150 questions, 150 minutes, +1 / −⅓, option E.`,
    tier: "Challenge", category: "full", free: true, listed: false, demo: undefined, grade: undefined, series: undefined,
    durationMin: isUp ? r?.durationMin ?? 120 : tpl.base.durationMin,
    blueprint: isUp ? FULL_PAPER.map((p) => ({ ...p, difficulty: ["medium", "hard"], examLevel: "l1" })) : tpl.base.blueprint,
    // UP keeps its original seed: Round 1's SUPER TET paper is the reviewed one.
    seed: isUp ? 9100 + n : 9100 + n * 97 + seedOf(key), cutoffPct: 0.6, keyNote: undefined,
  };
}

const cache = new Map<string, Question[]>();

/** The round's paper for one exam, with answers and explanations (never send before submission). */
export function roundPaper(n: number, key = "up-prt"): Question[] {
  const ck = `${n}|${key}`;
  const hit = cache.get(ck);
  if (hit) return hit;
  const tpl = template(key) ?? template("up-prt")!;
  const test = challengeTest(n, key);
  const seen = new Set<string>();
  for (const t of tpl.skipTests) composeTest(t).forEach((q) => seen.add(q.id));

  let paper: Question[];
  if (key === "up-prt") {
    // Before the poem, then the round's own poem, then the rest; no repeats across the parts.
    const exclude = new Set(seen);
    const poemAt = test.blueprint.findIndex((p) => p.topic === HINDI_POEM);
    const poem = CHALLENGE_EXTRA[n]?.hindiPoem ?? [];
    const part = (bp: BlueprintPart[], seed: number) => ({ ...test, blueprint: bp, seed });
    const before = composeExcluding(part(test.blueprint.slice(0, poemAt), test.seed!), exclude);
    before.forEach((q) => exclude.add(q.id));
    const rest = test.blueprint.slice(poemAt + 1);
    if (!poem.length) rest.unshift({ section: "hindi", count: 3, difficulty: ["medium", "hard"], examLevel: "l1" });
    paper = [...before, ...poem, ...composeExcluding(part(rest, test.seed! + 50), exclude)];
  } else {
    // Section by section: questions no mock has used first; if a section's bank runs dry,
    // top it up from the paid papers (never the free mocks, which everyone can see), so
    // every paper is full length and in the exact pattern.
    const freeSeen = new Set<string>();
    for (const t of tpl.skipTests.filter((t) => t.demo)) composeTest(t).forEach((q) => freeSeen.add(q.id));
    const chosen = new Set<string>();
    paper = [];
    test.blueprint.forEach((part, i) => {
      const one = (count: number, skip: Set<string>, salt: number) =>
        composeExcluding({ ...test, blueprint: [{ ...part, count }], seed: test.seed! + i * 7 + salt }, new Set([...skip, ...chosen]));
      let got = one(part.count, seen, 0);
      if (got.length < part.count) got = [...got, ...one(part.count - got.length, new Set([...freeSeen, ...got.map((q) => q.id)]), 1)];
      // Last resort (small subject banks): any question of the bank, so the paper is never short.
      if (got.length < part.count) { got = [...got, ...one(part.count - got.length, new Set(got.map((q) => q.id)), 2)]; }
      got.forEach((q) => chosen.add(q.id));
      paper.push(...got);
    });
  }
  if (n === 1 && key === "up-prt") paper = applyRound1Review(paper);
  cache.set(ck, paper);
  return paper;
}

/**
 * Round 1 SUPER TET after the owner's review (4 Oct 2026): too-easy questions swapped for
 * harder ones (same position, same section) and some wording cleaned (same answers). The
 * Hindi of a cleaned bank question moves onto the question itself (stemHi/explanationHi).
 */
function applyRound1Review(paper: Question[]): Question[] {
  return paper.map((q) => {
    const swap = R1_REPLACE[q.id];
    if (swap) return swap;
    const p = R1_PATCH[q.id];
    if (!p) return q;
    const hi = questionHi[q.id];
    const sub = (arr: string[] | undefined, map?: Record<string, string>) => (arr && map ? arr.map((o) => map[o] ?? o) : arr);
    const out: Question = {
      ...q,
      stem: p.stem ? q.stem.replace(p.stem[0], p.stem[1]) : q.stem,
      options: sub(q.options, p.options)!,
      optionsHi: sub(q.optionsHi, p.optionsHi),
      explanation: p.explanation ?? q.explanation,
    };
    if (hi) {
      out.stemHi = p.stemHi ? hi.stem.replace(p.stemHi[0], p.stemHi[1]) : hi.stem;
      out.explanationHi = p.explanationHi ?? hi.explanation;
    }
    return out;
  });
}

/** What the browser gets during the test: no correct answers, no explanations. */
export function hideAnswers(qs: Question[]): Question[] {
  return qs.map((q) => ({ ...q, correct: -1, explanation: "", explanationHi: undefined }));
}

/** Every paper key the challenge can serve (for checks and the admin page). */
export function allPaperKeys(): string[] {
  const keys = ["up-prt", "bihar-1-5"];
  for (const exam of ["bihar-6-8", "bihar-9-10", "bihar-11-12"]) for (const s of subjectOptions(exam)) keys.push(`${exam}:${s.key}`);
  return keys;
}

/** Human label of a paper key. */
export const paperLabel = (key: string) => template(key)?.label ?? key;
