import Link from "next/link";
import { cn } from "@/lib/utils";
import { RESULT_CATEGORIES, type ResultCategory } from "@/data/results";

/** LATEST RESULTS | ADMIT CARDS | ANSWER KEYS | CUT OFF | MERIT LISTS, real links, so
 *  every sub-section has its own crawlable URL. Scrolls sideways on small phones. */
export function ResultCategoryTabs({
  active, hi, counts, highlightActive = true,
}: {
  active: ResultCategory;
  hi: boolean;
  counts: Partial<Record<ResultCategory, number>>;
  /** false = plain shortcut links (e.g. on the home page, where no tab is "current"). */
  highlightActive?: boolean;
}) {
  return (
    <nav aria-label={hi ? "रिज़ल्ट श्रेणियाँ" : "Result categories"} className="-mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
      <ul className="flex min-w-max gap-2">
        {RESULT_CATEGORIES.map((c) => {
          const on = highlightActive && c.key === active;
          return (
            <li key={c.key}>
              <Link
                href={c.path}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  on
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700",
                )}
              >
                {hi ? c.label.hi : c.label.en}
                <span className={cn("rounded-full px-1.5 text-xs", on ? "bg-white/20" : "bg-ink-100 text-ink-500")}>
                  {counts[c.key] ?? 0}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
