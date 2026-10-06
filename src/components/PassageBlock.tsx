import { cn } from "@/lib/utils";

interface PassageBlockProps {
  text?: string | null;
  hi?: boolean;
  className?: string;
}

export function PassageBlock({ text, hi = false, className }: PassageBlockProps) {
  if (!text?.trim()) return null;

  return (
    <section
      aria-label={hi ? "गद्यांश / पद्यांश" : "Passage"}
      className={cn(
        "mb-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-7 text-ink-800 shadow-sm sm:p-5 sm:text-[15px]",
        className,
      )}
    >
      <div className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
        {hi ? "पद्यांश / गद्यांश" : "Passage"}
      </div>
      <p className="whitespace-pre-wrap break-words font-medium">{text}</p>
    </section>
  );
}
