import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const REQUIRED_TABLES = [
  "User",
  "PasswordResetToken",
  "Attempt",
  "Booking",
  "PlanAccess",
  "PricingConfig",
  "GuestVisit",
  "ChallengeRegistration",
  "ChallengeSubmission",
  "ActivityEvent",
  "RozAttempt",
  "RozUserDay",
] as const;

async function main() {
  const rows = await prisma.$queryRaw<Array<{ table_name: string }>>`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
      AND table_name = ANY(${REQUIRED_TABLES as unknown as string[]})
  `;

  const found = new Set(rows.map((row) => row.table_name));
  const missing = REQUIRED_TABLES.filter((name) => !found.has(name));

  if (missing.length) {
    throw new Error(`Database schema verification failed. Missing tables: ${missing.join(", ")}`);
  }

  console.log(`Database schema verified: ${REQUIRED_TABLES.length} required tables present.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
