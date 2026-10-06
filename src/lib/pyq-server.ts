import type { Question } from "@/data/questions";
import { ATR_2019 } from "@/data/pyq-questions/atr-2019";

/**
 * SERVER ONLY. The questions of each online previous-year paper, by `MockTest.pyq`.
 * Only the test page imports this, and it sends the questions only to a verified pass.
 */
const PAPERS: Record<string, Question[]> = {
  "atr-2019": ATR_2019,
};

export function pyqQuestions(key: string): Question[] {
  return PAPERS[key] ?? [];
}
