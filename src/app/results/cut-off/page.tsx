import { pageSeo } from "@/lib/seo";
import type { Metadata } from "next";
import { ResultsHub } from "@/components/results/ResultsHub";
import { categoryMeta } from "@/data/results";

const meta = categoryMeta("cut-off");

export const metadata = pageSeo({
  title: "Teacher Exam Cut-Offs",
  description: "Track teacher recruitment and TET cut-off updates, category information and links to official sources when available.",
  path: "/results/cut-off",
  keywords: ["teacher exam cut off", "TET cut off"],
  noIndex: false,
});

// New records from the database / feed show up within the hour, no redeploy.
export const revalidate = 3600;

export default function Page() {
  return <ResultsHub category="cut-off" />;
}
