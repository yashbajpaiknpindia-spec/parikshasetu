/**
 * Comprehension passage texts, keyed by passageId. Questions carry only the id;
 * composeTest attaches the text when it builds a paper.
 */
import { enSaPassages } from "./question-comprehension-en-sa";
import { hindiPassages } from "./question-hi-comprehension";

export const PASSAGES: Record<string, string> = {
  ...enSaPassages,
  ...hindiPassages,
};
