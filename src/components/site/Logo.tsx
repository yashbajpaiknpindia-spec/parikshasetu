import { cn } from "@/lib/utils";

/** Brand colours taken from the final Merit Marg logo artwork. */
export const BRAND_NAVY = "#0a1329";
export const BRAND_GOLD = "#e5ae40";

/**
 * Merit Marg brand mark, an outlined "M" whose rising stroke becomes an upward
 * arrow (merit + the path forward, मार्ग). Traced from the final logo artwork so it
 * stays crisp at any size. Uses currentColor, so set the colour with a text-* class.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="20 20 840 690"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <g stroke="currentColor" strokeWidth={30} strokeLinejoin="miter" strokeMiterlimit={10}>
        {/* one continuous outline: right leg → inner V → left leg → apex → rising arrow shaft */}
        <path d="M628 470 665 680H792L700 316 420 664 222 422 178 680H50L168 218 420 510 790 84" />
        {/* arrowhead */}
        <path d="M688 86 826 46 804 188" strokeLinecap="square" />
      </g>
    </svg>
  );
}

/**
 * Full brand lockup: the gold mark in a navy badge + the bilingual wordmark.
 * Used in the navbar and footer.
 */
export function BrandLockup({
  markClassName,
  compact = false,
}: {
  markClassName?: string;
  compact?: boolean;
}) {
  return (
    <>
      <span
        className={cn(
          "grid place-items-center rounded-xl shadow-sm",
          compact ? "h-9 w-9" : "h-9 w-9",
          markClassName,
        )}
        style={{ backgroundColor: BRAND_NAVY, color: BRAND_GOLD }}
      >
        <BrandMark className="h-5 w-6" />
      </span>
      <span className="flex flex-col gap-1 leading-none">
        <span className="font-display text-[15px] font-bold uppercase tracking-wide text-ink-900">Merit Marg</span>
        <span className="font-hindi text-[11px] text-ink-500">मेरिट मार्ग</span>
      </span>
    </>
  );
}
