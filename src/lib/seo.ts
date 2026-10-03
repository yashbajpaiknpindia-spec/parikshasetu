import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  ogType?: "website" | "article";
};

const baseKeywords = [
  "Merit Marg",
  "teacher exam preparation",
  "government teacher jobs",
  "teacher recruitment exams India",
  "mock tests",
];

export function pageSeo({ title, description, path, keywords = [], noIndex = false, ogType = "website" }: PageSeoInput): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");
  const url = canonical === "/" ? siteConfig.url : `${siteConfig.url}${canonical}`;
  return {
    title,
    description,
    keywords: Array.from(new Set([...baseKeywords, ...keywords])),
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { title, description, url, siteName: siteConfig.name, locale: "en_IN", type: ogType },
    twitter: { card: "summary", title, description },
  };
}
