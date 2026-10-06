import { pageSeo } from "@/lib/seo";
import type { Metadata } from "next";
import { ResultsHub } from "@/components/results/ResultsHub";
import { categoryMeta } from "@/data/results";

const meta = categoryMeta("admit-card");

export const metadata = pageSeo({
  title: "Latest Teacher Exam Admit Cards",
  description: "Find the latest teacher recruitment and TET admit cards, release updates and official download links.",
  path: "/results/admit-cards",
  keywords: ["teacher exam admit card", "TET admit card"],
  noIndex: false,
});

// New records from the database / feed show up within the hour, no redeploy.
export const revalidate = 3600;

export default function Page() {
  return <ResultsHub category="admit-card" />;
}
