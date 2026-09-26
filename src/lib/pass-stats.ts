import { mockTests, isMockLive, type MockTest } from "@/lib/mock-engine";
import { allPlanTests, TRACKS } from "@/lib/exams/tracks";
import { isFreeMock } from "@/lib/plan-access";

/**
 * Real counts of what the ₹99 Prep Pass unlocks, computed from the test data so the
 * sales copy ("unlock 1,200+ tests") is always true. Safe on server and client.
 */
const byId = new Map<string, MockTest>();
for (const t of [...mockTests.filter(isMockLive), ...allPlanTests]) byId.set(t.id, t);
const paid = [...byId.values()].filter((t) => !isFreeMock(t.id) && t.listed !== false);

const weeksOf = (k: string) => {
  const tr = TRACKS.find((t) => t.key === k);
  return tr?.weeks?.length ?? tr?.subjects?.[0]?.weeks.length ?? 0;
};

export const PASS_STATS = {
  /** Every paid test the pass opens, across all exams. */
  totalTests: paid.length,
  fullMocks: paid.filter((t) => t.category === "full").length,
  sectionMocks: paid.filter((t) => t.category === "subject").length,
  practiceSets: paid.filter((t) => t.category === "topic").length,
  weekTests: paid.filter((t) => t.tier === "Week test").length,
  /** Length of the day-by-day plan for SUPER TET (the flagship track). */
  planWeeksUp: weeksOf("up-prt"),
};

/** "1,200+" style: rounded DOWN to a tidy number so it never overstates. */
export function plusCount(n: number) {
  const step = n >= 1000 ? 100 : n >= 100 ? 50 : n >= 20 ? 10 : 1;
  return `${(Math.floor(n / step) * step).toLocaleString("en-IN")}+`;
}
