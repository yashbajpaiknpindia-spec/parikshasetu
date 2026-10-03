import { pageSeo } from "@/lib/seo";
import type { Metadata } from "next";
import { ResultsHub } from "@/components/results/ResultsHub";
import { categoryMeta } from "@/data/results";

const meta = categoryMeta("answer-key");

export const metadata = pageSeo({
  title: "Teacher Exam Answer Keys",
  description: "Find teacher recruitment and TET answer keys, official updates, objection information and related result resources.",
  path: "/results/answer-keys",
  keywords: ["teacher exam answer key", "TET answer key"],
  noIndex: false,
});

// New records from the database / feed show up within the hour, no redeploy.
export const revalidate = 3600;

export default function Page() {
  return <ResultsHub category="answer-key" />;
}
