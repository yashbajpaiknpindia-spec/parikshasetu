import type { MockTest } from "@/lib/mock-engine";
import type { PassTier } from "@/lib/pricing";

export const PLAN_PRICE = 99;
export const PLAN_CODE = "prep";
export const MENTOR_PLAN_CODE = "mentor";

// Business rule preserved from the previous production branch: exactly two mocks are free.
export const FREE_MOCK_IDS = new Set(["up-mock-l1-full-1", "up-mock-l1-full-2"]);

export const paymentsLive = !!(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID);

export function isFreeMock(testId: string) {
  return FREE_MOCK_IDS.has(testId);
}

/** Paid unless it is one of the two explicitly approved free tests. */
export function isPaidTest(t: Pick<MockTest, "id"> | undefined | null): boolean {
  return !t || !isFreeMock(t.id);
}

/** Browser display hint only. Real access is always checked server-side against the account DB. */
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
