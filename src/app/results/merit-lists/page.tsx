import { pageSeo } from "@/lib/seo";
import type { Metadata } from "next";
import { ResultsHub } from "@/components/results/ResultsHub";
import { categoryMeta } from "@/data/results";

const meta = categoryMeta("merit-list");

export const metadata = pageSeo({
  title: "Teacher Recruitment Merit Lists",
  description: "Browse teacher recruitment merit lists and selection updates with official references and related result resources.",
  path: "/results/merit-lists",
  keywords: ["teacher merit list", "teacher recruitment selection list"],
  noIndex: false,
});

// New records from the database / feed show up within the hour, no redeploy.
export const revalidate = 3600;

export default function Page() {
  return <ResultsHub category="merit-list" />;
}
