"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

/** Split into user-visible characters, so Devanagari conjuncts (e.g. "क्ष", "शि")
 *  are written whole instead of flashing half-formed glyphs. */
function graphemes(s: string): string[] {
  const Seg = (Intl as unknown as { Segmenter?: new (l?: string, o?: { granularity: string }) => { segment(s: string): Iterable<{ segment: string }> } }).Segmenter;
  if (Seg) return Array.from(new Seg(undefined, { granularity: "grapheme" }).segment(s), (x) => x.segment);
  return Array.from(s);
}

/**
 * Lines that "write themselves" in the handwritten font, one after another.
 * Layout never jumps: an invisible full copy reserves the space and the typed
 * text is laid over it. Screen readers / crawlers get the full text at once,
 * and reduced-motion users see it without the animation.
 */
export function HandwrittenType({
  lines,
  className,
  lineClassNames = [],
  speedMs = 55,
  startDelayMs = 250,
}: {
  lines: string[];
  className?: string;
  lineClassNames?: string[];
  speedMs?: number;
  startDelayMs?: number;
}) {
  const split = useMemo(() => lines.map(graphemes), [lines]);
  const total = split.reduce((n, l) => n + l.length, 0);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShown(total);
      return;
    }
    setShown(0);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setShown(i);
      if (i < total) timer = setTimeout(tick, speedMs + Math.random() * 40); // uneven, like a pen
    };
    timer = setTimeout(tick, startDelayMs);
    return () => clearTimeout(timer);
  }, [total, speedMs, startDelayMs]);

  // Which line is the pen on, and how far along it.
  let left = shown;
  const visible = split.map((l) => {
    const n = Math.max(0, Math.min(l.length, left));
    left -= l.length;
    return l.slice(0, n).join("");
  });
  const activeLine = Math.max(0, visible.findIndex((v, i) => v.length < lines[i].length));
  const done = shown >= total;

  return (
    <span className={cn("relative block", className)}>
      <span className="sr-only">{lines.join(" ")}</span>
      {/* Space holder: full text, invisible */}
      <span aria-hidden className="invisible block">
        {lines.map((l, i) => (
          <span key={i} className={cn("block", lineClassNames[i])}>{l}</span>
        ))}
      </span>
      {/* Pen layer */}
      <span aria-hidden className="absolute inset-0 block">
        {lines.map((_, i) => (
          <span key={i} className={cn("block", lineClassNames[i])}>
            <span className={cn(((!done && i === activeLine) || (done && i === lines.length - 1)) && "type-caret pr-0.5")}>
              {visible[i]}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
