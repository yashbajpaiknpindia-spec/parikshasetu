"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { EXAM_CHOICES, saveExamChoice, type ExamChoice } from "@/lib/exam-choice";

/** SUPER TET | BPSC TRE 4.0 (1–5) | BPSC TRE 4.0 (6–8), real links (crawlable), and picking one is remembered. */
export function ExamTabs({ active, hi }: { active: ExamChoice; hi: boolean }) {
  return (
    <nav aria-label={hi ? "परीक्षा चुनें" : "Choose exam"} className="-mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
      <ul className="flex min-w-max gap-2">
        {EXAM_CHOICES.map((e) => {
          const on = e.key === active;
          return (
            <li key={e.key}>
              <Link
                href={e.mocksHref}
                scroll={false}
                onClick={() => saveExamChoice(e.key)}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "flex flex-col rounded-2xl border-2 px-4 py-2.5 transition-colors",
                  on ? "border-brand-600 bg-brand-600 text-white" : "border-ink-200 bg-white text-ink-800 hover:border-brand-300",
                )}
              >
                <span className="text-sm font-bold">{hi ? e.title.hi : e.title.en}</span>
                <span className={cn("text-[11px]", on ? "text-brand-100" : "text-ink-500")}>{hi ? e.classes.hi : e.classes.en}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
