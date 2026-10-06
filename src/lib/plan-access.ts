import type { MockTest } from "@/lib/mock-engine";
import type { PassTier } from "@/lib/pricing";

/**
 * Pass access. A test is free when the mock-engine marks it with `demo: true`.
 * This keeps the list of free mocks in one place and prevents pricing/access
 * drift between SUPER TET and BPSC TRE papers.
 */
export const paymentsLive = !!(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID);

export function isPaidTest(t: Pick<MockTest, "demo"> | undefined | null): boolean {
  return !t?.demo;
}

/** Legacy ID helper retained for compatibility; prefer `test.demo` at call sites. */
export function isFreeMock(testId: string): boolean {
  return /(?:^|-)free-[12]$/.test(testId)
    || testId === "up-mock-l1-full-1"
    || testId === "bh15-rev1"
    || /^(?:bh68[^-]+|bh(?:910|1112)[^-]+)-rev1$/.test(testId);
}

export function getPassTier(): PassTier | null {
  try {
    const m = /(?:^|;\s*)mm_pass=(prep|mentor)\./.exec(document.cookie);
    return (m?.[1] as PassTier | undefined) ?? null;
  } catch {
    return null;
  }
}

export function announcePassChange() {
  try { window.dispatchEvent(new CustomEvent("mm-pass")); } catch {}
}
