import type { Metadata } from "next";
import { RozRevise } from "@/components/roz/RozRevise";
import { getLang } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Revise your mistakes",
  description: "Questions you got wrong in Roz ka 10 come back after 1, 3 and 7 days, until you get them right.",
  robots: { index: false },
};

export default async function RevisePage() {
  const hi = (await getLang()) === "hi";
  return <RozRevise hi={hi} />;
}
