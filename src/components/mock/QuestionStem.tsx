import { cn } from "@/lib/utils";
import { scriptOf } from "@/lib/script";

/**
 * Question text, with "match the following" stems drawn as a proper List-I / List-II
 * table (like the printed paper) instead of one run-on paragraph. Any other stem keeps
 * its line breaks (statement questions: "1. … 2. … Which are correct?").
 */

interface MatchStem {
  intro: string;
  headI: string;
  headII: string;
  left: string[];
  right: string[];
}

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const isDevanagari = (s: string) => /[ऀ-ॿ]/.test(s);

/** Finds `${label}.` or `${label})` as a list marker at or after `from`, or -1. */
function markerAt(s: string, label: string, from: number): { at: number; end: number } | null {
  const re = new RegExp(`(^|[\\s:;,(])${label}[.)]\\s+`, "g");
  re.lastIndex = from;
  const m = re.exec(s);
  if (!m) return null;
  const at = m.index + m[1].length;
  return { at, end: m.index + m[0].length };
}

const clean = (x: string) =>
  x
    .replace(/\s*(List[- ]?I{1,2}|सूची[- ]?I{1,2}|सूची[- ]?[१२])\s*(\([^)]*\))?\s*[:：]?\s*$/u, "")
    .replace(/[\s,;।]+$/u, "")
    .replace(/\.$/, "")
    .trim();

/** Parses a match-the-following stem, or returns null if it is not one. */
export function parseMatch(stem: string): MatchStem | null {
  const a = markerAt(stem, "A", 0);
  if (!a) return null;
  // Consecutive letter markers A, B, C, ...
  const lm: { at: number; end: number }[] = [a];
  for (let i = 1; i < LETTERS.length; i++) {
    const m = markerAt(stem, LETTERS[i], lm[i - 1].end);
    if (!m) break;
    // stop if a "1." marker comes before this letter (we have reached List-II)
    const one = markerAt(stem, "1", lm[i - 1].end);
    if (one && one.at < m.at) break;
    lm.push(m);
  }
  if (lm.length < 3) return null;
  // Consecutive number markers 1, 2, 3, ... after the last letter
  const nm: { at: number; end: number }[] = [];
  const first = markerAt(stem, "1", lm[lm.length - 1].end);
  if (!first) return null;
  nm.push(first);
  for (let i = 2; i <= 6; i++) {
    const m = markerAt(stem, String(i), nm[nm.length - 1].end);
    if (!m) break;
    nm.push(m);
  }
  if (nm.length < 3) return null;

  const left = lm.map((m, i) => clean(stem.slice(m.end, i + 1 < lm.length ? lm[i + 1].at : nm[0].at)));
  const right = nm.map((m, i) => clean(stem.slice(m.end, i + 1 < nm.length ? nm[i + 1].at : stem.length)));
  if ([...left, ...right].some((x) => !x || x.length > 220)) return null;

  const intro = stem
    .slice(0, a.at)
    .replace(/\s+/g, " ")
    .replace(/\s*(List[- ]?I|सूची[- ]?I)\s*(\([^)]*\))?\s*[:：]\s*$/u, "")
    .trim();
  const hi = isDevanagari(stem);
  const head = (roman: "I" | "II") => {
    const m = new RegExp(`(List[- ]?${roman}|सूची[- ]?${roman})(?![I])\\s*\\(([^)]+)\\)`, "u").exec(stem);
    const base = hi ? `सूची-${roman}` : `List-${roman}`;
    return m ? `${base} (${m[2]})` : base;
  };
  return { intro, headI: head("I"), headII: head("II"), left, right };
}

function Txt({ text, className }: { text: string; className?: string }) {
  const sc = scriptOf(text);
  return <span dir={sc.dir} className={cn(sc.className, className)}>{text}</span>;
}

/**
 * Stem + optional second-language stem. Match stems render as one table; when both
 * languages parse to the same shape, each cell shows the other language underneath.
 */
export function QuestionStem({
  stem, altStem, size = "lg",
}: { stem: string; altStem?: string; size?: "lg" | "sm" }) {
  const m = parseMatch(stem);
  const alt = altStem ? parseMatch(altStem) : null;
  const big = size === "lg";
  const stemCls = big ? "mt-3 text-lg font-medium leading-relaxed text-ink-900" : "text-sm font-medium text-ink-900";
  const altCls = big ? "mt-1 text-sm text-ink-500" : "text-xs text-ink-400";

  if (!m) {
    return (
      <>
        <p className={cn("whitespace-pre-line", stemCls)}><Txt text={stem} /></p>
        {altStem && <p className={cn("whitespace-pre-line", altCls)}><Txt text={altStem} /></p>}
      </>
    );
  }
  const paired = !!alt && alt.left.length === m.left.length && alt.right.length === m.right.length;
  const rows = Math.max(m.left.length, m.right.length);
  return (
    <>
      <p className={stemCls}><Txt text={m.intro} /></p>
      {altStem && <p className={altCls}><Txt text={paired ? alt!.intro : altStem} className="whitespace-pre-line" /></p>}
      <div className={cn("overflow-x-auto", big ? "mt-4" : "mt-2")}>
        <table className={cn("w-full border-collapse overflow-hidden rounded-xl text-left ring-1 ring-ink-200", big ? "text-[15px]" : "text-xs")}>
          <thead className="bg-ink-50 text-ink-700">
            <tr>
              <th className="w-1/2 border-b border-r border-ink-200 px-3 py-2 font-semibold">
                <Txt text={m.headI} />
                {paired && <span className="block text-xs font-normal text-ink-500"><Txt text={alt!.headI} /></span>}
              </th>
              <th className="w-1/2 border-b border-ink-200 px-3 py-2 font-semibold">
                <Txt text={m.headII} />
                {paired && <span className="block text-xs font-normal text-ink-500"><Txt text={alt!.headII} /></span>}
              </th>
            </tr>
          </thead>
          <tbody className="text-ink-800">
            {Array.from({ length: rows }, (_, i) => (
              <tr key={i} className="align-top odd:bg-white even:bg-ink-50/40">
                <td className="border-r border-t border-ink-200 px-3 py-2">
                  {m.left[i] && (
                    <span className="flex gap-2">
                      <b className="shrink-0 text-brand-700">{LETTERS[i]}.</b>
                      <span>
                        <Txt text={m.left[i]} />
                        {paired && <span className="block text-xs text-ink-500"><Txt text={alt!.left[i]} /></span>}
                      </span>
                    </span>
                  )}
                </td>
                <td className="border-t border-ink-200 px-3 py-2">
                  {m.right[i] && (
                    <span className="flex gap-2">
                      <b className="shrink-0 text-brand-700">{i + 1}.</b>
                      <span>
                        <Txt text={m.right[i]} />
                        {paired && <span className="block text-xs text-ink-500"><Txt text={alt!.right[i]} /></span>}
                      </span>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {big && (
        <p className="mt-3 text-sm font-medium text-ink-600">
          {isDevanagari(stem) ? "नीचे दिए गए कूट से सही उत्तर चुनिए:" : "Choose the correct code:"}
        </p>
      )}
    </>
  );
}
