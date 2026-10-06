import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { RESULT_CATEGORIES } from "@/data/results";
import { getResults } from "@/lib/results-source";
import { exams } from "@/lib/exams/registry";
import { mentors } from "@/data/mentors";
import { mockTests } from "@/lib/mock-engine";
import { allPlanTests } from "@/lib/exams/tracks";
import { PYQ_TESTS } from "@/data/pyq-tests";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();
  const results = await getResults();
  const urls = new Map<string, MetadataRoute.Sitemap[number]>();
  const add = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly", lastModified = now) => {
    const url = `${base}${path}`;
    urls.set(url, { url, lastModified, changeFrequency, priority });
  };
  const core = [
    ["/", 1], ["/about", 0.7], ["/exam", 0.8], ["/exam/overview", 0.65], ["/exam/eligibility", 0.75], ["/exam/pattern", 0.75], ["/exam/syllabus", 0.75], ["/exam/strategy", 0.8], ["/exam/apply", 0.7], ["/exams", 0.95], ["/exams/up/plan", 0.9], ["/exams/bihar-tre/plan", 0.9], ["/mock-tests", 0.95], ["/notifications", 0.9], ["/mentors", 0.65], ["/pricing", 0.8], ["/pyq", 0.9], ["/results", 0.9], ["/results/admit-cards", 0.9], ["/results/answer-keys", 0.9], ["/results/cut-off", 0.9], ["/results/merit-lists", 0.9], ["/legal/privacy", 0.25], ["/legal/refund", 0.25], ["/legal/terms", 0.25], ["/challenge", 0.85],
  ] as const;
  core.forEach(([path, priority]) => add(path, priority, path === "/notifications" ? "daily" : "weekly"));
  exams.forEach((exam) => { if (exam.hubHref.startsWith("/exams/")) add(exam.hubHref, 0.8, "weekly"); });
  mentors.forEach((mentor) => add(`/mentors/${mentor.slug}`, 0.55, "monthly"));
  const seenTests = new Set<string>();
  [...mockTests, ...allPlanTests, ...PYQ_TESTS].forEach((test) => { if (!seenTests.has(test.id)) { seenTests.add(test.id); add(`/mock-tests/${test.id}`, 0.65, "weekly"); } });
  RESULT_CATEGORIES.forEach((category) => add(category.path, 0.9, "daily"));
  results.forEach((result) => add(`/results/${result.slug}`, 0.7, "weekly", new Date(result.updated_at)));
  return [...urls.values()];
}
