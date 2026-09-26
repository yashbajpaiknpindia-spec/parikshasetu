import Link from "next/link";
import {
  Building2,
  BadgeCheck,
  Layers,
  BookOpen,
  Target,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Container, Badge, Callout } from "@/components/ui";

export const metadata = {
  title: "Exam Guide",
  description:
    "The complete KVS PRT, TGT and PGT guide: posts, eligibility, exam pattern, syllabus, a preparation strategy and how to apply, with every figure flagged for verification against the official notification.",
};

const sections = [
  {
    href: "/exam/overview",
    title: "About KVS & the posts",
    desc: "What KVS is, who conducts recruitment now, and the PRT / TGT / PGT posts compared side by side.",
    Icon: Building2,
  },
  {
    href: "/exam/eligibility",
    title: "Eligibility",
    desc: "Qualifications, CTET requirement, age limits, age relaxations and reservation, post by post.",
    Icon: BadgeCheck,
  },
  {
    href: "/exam/pattern",
    title: "Exam pattern",
    desc: "Both cycles compared: the 2022–23 single paper and the new 2025–26 two-tier exam with negative marking.",
    Icon: Layers,
  },
  {
    href: "/exam/syllabus",
    title: "Syllabus",
    desc: "Section-wise topics across reasoning, aptitude, computers, GK, languages and pedagogy.",
    Icon: BookOpen,
  },
  {
    href: "/exam/strategy",
    title: "Preparation strategy",
    desc: "A month-by-month plan, high-ROI principles, demo and interview tips, and vetted resources.",
    Icon: Target,
  },
  {
    href: "/exam/apply",
    title: "How to apply",
    desc: "The step-by-step application process, official links, and what to take only from the notification.",
    Icon: FileText,
  },
];

export default function ExamGuidePage() {
  return (
    <div>
      <section className="hero-gradient border-b border-ink-200">
        <Container>
          <div className="max-w-3xl py-16 sm:py-20 animate-fade-up">
            <Badge>Exam Guide</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Your complete guide to <span className="text-gradient">KVS recruitment</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              KVS recruits Primary (PRT), Trained Graduate (TGT) and Post Graduate (PGT) teachers
              for Kendriya Vidyalayas across India. This guide walks you through the posts,
              eligibility, exam pattern, syllabus, a realistic preparation plan and the application
              process, organised so you always know which cycle a figure belongs to.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <Callout tone="amber">
            <strong className="text-ink-900">Always verify against the official notification.</strong>{" "}
            KVS recruitment has run under two very different regimes, the <strong>2022–23</strong>{" "}
            cycle (KVS-run, a single objective paper, no negative marking) and the current{" "}
            <strong>2025–26</strong> cycle (CBSE-run, a two-tier exam, with negative marking).
            Vacancies, fees, dates and even the Tier-2 format differ between coaching portals. Treat
            everything here as a working model and confirm anything you act on against the official
            notification on{" "}
            <a
              href="https://kvsangathan.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 underline underline-offset-2"
            >
              kvsangathan.nic.in
            </a>{" "}
            and{" "}
            <a
              href="https://cbse.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 underline underline-offset-2"
            >
              cbse.gov.in
            </a>
            .
          </Callout>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map(({ href, title, desc, Icon }) => (
              <Link key={href} href={href} className="card card-hover group flex flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-ink-900">{title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
