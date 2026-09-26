import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { RESULT_CATEGORIES } from "@/data/results";
import { getResults } from "@/lib/results-source";
import { exams } from "@/lib/exams/registry";

export const revalidate = 3600;

/** /sitemap.xml, core pages, every exam hub, every Results listing and result page. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();
  const results = await getResults();

  const core = ["", "/exams", "/exams/up/plan", "/mock-tests", "/notifications", "/about"].map((p) => ({
    url: `${base}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8,
  }));
  const hubs = exams.map((e) => ({ url: `${base}${e.hubHref}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 }));
  const listings = RESULT_CATEGORIES.map((c) => ({
    url: `${base}${c.path}`, lastModified: now, changeFrequency: "daily" as const, priority: 0.9,
  }));
  const details = results.map((r) => ({
    url: `${base}/results/${r.slug}`,
    lastModified: new Date(r.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...core, ...hubs, ...listings, ...details];
}
