import { cookies } from "next/headers";
import { EXAM_COOKIE, isExamChoice, type ExamChoice } from "@/lib/exam-choice";

/** Server: the exam the visitor chose earlier (cookie), or null. */
export async function getExamChoice(): Promise<ExamChoice | null> {
  try {
    const v = (await cookies()).get(EXAM_COOKIE)?.value;
    return isExamChoice(v) ? v : null;
  } catch {
    return null;
  }
}
