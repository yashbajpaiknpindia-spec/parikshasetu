import "server-only";

import { prisma } from "@/lib/prisma";

const LEGACY_PREP_PLANS = ["prep", "full-access-99", "day-by-day-99"] as const;

/** Returns the strongest paid entitlement on the account. Mentor always wins over Prep. */
export async function getPaidPlanAccess(userId: string) {
  const mentor = await prisma.planAccess.findFirst({
    where: { userId, plan: "mentor" },
    orderBy: { createdAt: "desc" },
  });
  if (mentor) return mentor;

  return prisma.planAccess.findFirst({
    where: { userId, plan: { in: [...LEGACY_PREP_PLANS] } },
    orderBy: { createdAt: "desc" },
  });
}

export async function hasPaidPlanAccess(userId: string) {
  return !!(await getPaidPlanAccess(userId));
}
