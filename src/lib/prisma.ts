import { PrismaClient } from "@prisma/client";

/**
 * Real backend switch: the whole app treats the database as "configured"
 * when DATABASE_URL is set. Every server route checks `isDbConfigured` and
 * falls back to demo behaviour (same as before) when it isn't — so the app
 * still boots with zero config, but on Render with a Postgres add-on attached
 * everything (auth, attempts, bookings, plan access, admin dashboard) is real.
 */
export const isDbConfigured = !!process.env.DATABASE_URL;

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  (isDbConfigured
    ? new PrismaClient({ log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"] })
    : (undefined as unknown as PrismaClient));

if (process.env.NODE_ENV !== "production" && isDbConfigured) {
  globalForPrisma.prisma = prisma;
}
