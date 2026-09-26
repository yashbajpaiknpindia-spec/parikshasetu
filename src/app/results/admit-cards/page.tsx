import type { Metadata } from "next";
import { ResultsHub } from "@/components/results/ResultsHub";
import { categoryMeta } from "@/data/results";

const meta = categoryMeta("admit-card");

export const metadata: Metadata = {
  title: "Latest Admit Cards: Teacher Recruitment & TET",
  description: meta.metaDescription,
  alternates: { canonical: meta.path },
};

// New records from the database / feed show up within the hour, no redeploy.
export const revalidate = 3600;

export default function Page() {
  return <ResultsHub category="admit-card" />;
}
