import { pageSeo } from "@/lib/seo";
import type { Metadata } from "next";
import { ResultsHub } from "@/components/results/ResultsHub";
import { categoryMeta } from "@/data/results";

const meta = categoryMeta("result");

export const metadata = pageSeo({
  title: "Latest Teacher Exam Results",
  description: "Browse the latest government teacher recruitment and TET results, official result links, important dates and related updates.",
  path: "/results",
  keywords: ["teacher exam results", "TET results", "government teacher results"],
  noIndex: false,
});

// New records from the database / feed show up within the hour, no redeploy.
export const revalidate = 3600;

export default function Page() {
  return <ResultsHub category="result" />;
}
