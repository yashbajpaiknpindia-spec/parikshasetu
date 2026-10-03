import { seedResults, type ExamResult, type ResultCategory } from "@/data/results";

/**
 * Results data source, the ONLY place pages read results from.
 *
 * Priority:
 *  1. Supabase table `exam_results` (when NEXT_PUBLIC_SUPABASE_URL + ANON_KEY are
 *     set) via the REST endpoint, see supabase/exam_results.sql.
 *  2. A JSON feed at RESULTS_FEED_URL (hosted file, Google Sheet → JSON, edge fn).
 *     Shape: { "results": ExamResult[] }
 *  3. The built-in seed in src/data/results.ts.
 *
 * Anything invalid is dropped, and an empty/failed source falls back to the seed,
 * so the page never goes blank and never shows a malformed record.
 * Pages revalidate hourly, so new rows appear without a redeploy.
 */

const REVALIDATE_SECONDS = 3600;

const isUrl = (v: unknown) => typeof v === "string" && /^https?:\/\//.test(v);
const optUrl = (v: unknown) => v == null || isUrl(v);

function isResult(x: unknown): x is ExamResult {
  const r = x as Partial<ExamResult>;
  return (
    !!r &&
    typeof r.id === "string" &&
    typeof r.slug === "string" && /^[a-z0-9-]+$/.test(r.slug) &&
    typeof r.exam_name === "string" &&
    typeof r.organisation === "string" &&
    typeof r.category === "string" &&
    typeof r.result_status === "string" &&
    isUrl(r.result_url) &&
    isUrl(r.official_website) &&
    optUrl(r.scorecard_url) && optUrl(r.cutoff_url) && optUrl(r.merit_list_url)
  );
}

function normalise(r: ExamResult): ExamResult {
  return { ...r, important_dates: Array.isArray(r.important_dates) ? r.important_dates : [] };
}

async function fromSupabase(): Promise<ExamResult[] | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  try {
    const res = await fetch(`${url}/rest/v1/exam_results?select=*&published=eq.true&order=result_date.desc.nullslast`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      next: { revalidate: REVALIDATE_SECONDS, tags: ["results"] },
    });
    if (!res.ok) return null;
    const rows = await res.json();
    return Array.isArray(rows) ? rows.filter(isResult).map(normalise) : null;
  } catch {
    return null;
  }
}

async function fromFeed(): Promise<ExamResult[] | null> {
  const url = process.env.RESULTS_FEED_URL;
  if (!url) return null;
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS, tags: ["results"] } });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data?.results) ? data.results.filter(isResult).map(normalise) : null;
  } catch {
    return null;
  }
}

/** Newest first; undated records go last. */
export function sortLatest(list: ExamResult[]) {
  return [...list].sort((a, b) => (b.result_date ?? "").localeCompare(a.result_date ?? ""));
}

/** All records, newest first. */
export async function getResults(): Promise<ExamResult[]> {
  for (const source of [fromSupabase, fromFeed]) {
    const rows = await source();
    if (rows && rows.length > 0) return sortLatest(rows);
  }
  return sortLatest(seedResults);
}

export async function getResultsByCategory(category: ResultCategory) {
  return (await getResults()).filter((r) => r.category === category);
}

export async function getResultBySlug(slug: string) {
  return (await getResults()).find((r) => r.slug === slug) ?? null;
}
