import type { Metadata } from "next";
import { ResultsHub } from "@/components/results/ResultsHub";
import { categoryMeta } from "@/data/results";

const meta = categoryMeta("cut-off");

export const metadata: Metadata = {
  title: "Latest Cut-off Marks: Teacher Recruitment",
  description: meta.metaDescription,
  alternates: { canonical: meta.path },
};

// New records from the database / feed show up within the hour, no redeploy.
export const revalidate = 3600;

export default function Page() {
  return <ResultsHub category="cut-off" />;
}
