import { questionHi } from "@/data/question-hi";
import type { Question } from "@/data/questions";
import type { Lang } from "@/lib/i18n";

export interface LocalizedQuestion {
  stem: string;
  options: string[];
  explanation: string;
  /** The other language's stem, shown as a secondary line (bilingual display). */
  altStem?: string;
  /** The other language's options, kept index-aligned for bilingual option rendering. */
  altOptions?: string[];
  hasHi: boolean;
}

/** Returns the question in the chosen language, with the English stem as `altStem`
 *  when a Hindi translation exists (bilingual display, like the real exam). */
export function localizedQuestion(q: Question, lang: Lang): LocalizedQuestion {
  // Some server-only previous-year questions carry their own Hindi copy rather than
  // using the client-bundled questionHi map.
  if (q.stemHi || q.explanationHi) {
    if (lang === "hi") {
      return {
        stem: q.stemHi ?? q.stem,
        options: q.stemHi ? q.optionsHi ?? q.options : q.options,
        explanation: q.explanationHi ?? q.explanation,
        altStem: q.stemHi ? q.stem : undefined,
        altOptions: q.stemHi && q.optionsHi ? q.options : undefined,
        hasHi: !!q.stemHi,
      };
    }
    return { stem: q.stem, options: q.options, explanation: q.explanation, altStem: q.stemHi, altOptions: q.optionsHi, hasHi: !!q.stemHi };
  }
  if (lang === "hi") {
    const h = questionHi[q.id];
    if (h) {
      // If composeTest shuffled the options, q.optionsHi holds the Hindi options in
      // the SAME shuffled order; use those so the bilingual display stays aligned.
      return { stem: h.stem, options: q.optionsHi ?? h.options, explanation: h.explanation, altStem: q.stem, altOptions: q.options, hasHi: true };
    }
  }
  // English mode: still show the Hindi question as a second line (bilingual paper).
  const h = questionHi[q.id];
  return { stem: q.stem, options: q.options, explanation: q.explanation, altStem: h?.stem, altOptions: q.optionsHi ?? h?.options, hasHi: !!h };
}
