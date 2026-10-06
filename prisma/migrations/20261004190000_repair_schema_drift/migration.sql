-- Repair migration for databases whose Prisma migration history says "applied"
-- while one or more required tables/columns were removed or never created.
-- Everything is guarded with IF NOT EXISTS / catalog checks so it is safe on
-- databases that already have the expected objects.

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'Role') THEN
    CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS "User" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "passwordHash" TEXT,
  "googleId" TEXT,
  "role" "Role" NOT NULL DEFAULT 'USER',
  "examChoice" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Attempt" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "testId" TEXT NOT NULL,
  "testTitle" TEXT NOT NULL,
  "examSlug" TEXT,
  "post" TEXT,
  "cycle" TEXT,
  "score" INTEGER NOT NULL,
  "maxScore" INTEGER NOT NULL,
  "correct" INTEGER NOT NULL,
  "wrong" INTEGER NOT NULL,
  "unattempted" INTEGER NOT NULL,
  "total" INTEGER NOT NULL,
  "weakTopics" TEXT[] NOT NULL,
  "answers" JSONB,
  "markedForReview" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "takenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Attempt_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Booking" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "mentorSlug" TEXT NOT NULL,
  "mentorName" TEXT NOT NULL,
  "post" TEXT,
  "subject" TEXT,
  "date" TEXT NOT NULL,
  "time" TEXT NOT NULL,
  "price" INTEGER NOT NULL,
  "paid" BOOLEAN NOT NULL DEFAULT false,
  "paymentId" TEXT,
  "orderId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "PlanAccess" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "plan" TEXT NOT NULL DEFAULT 'day-by-day-99',
  "amount" INTEGER NOT NULL DEFAULT 99,
  "paymentId" TEXT,
  "orderId" TEXT,
  "source" TEXT NOT NULL DEFAULT 'payment',
  "assignedByAdminId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "PlanAccess_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "PricingConfig" (
  "id" INTEGER NOT NULL DEFAULT 1,
  "prepPrice" INTEGER NOT NULL DEFAULT 99,
  "mentorPrice" INTEGER NOT NULL DEFAULT 199,
  "mentorLive" BOOLEAN NOT NULL DEFAULT false,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedByAdminId" TEXT,
  CONSTRAINT "PricingConfig_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "GuestVisit" (
  "id" TEXT NOT NULL,
  "visitorId" TEXT NOT NULL,
  "path" TEXT NOT NULL,
  "ip" TEXT,
  "country" TEXT,
  "region" TEXT,
  "city" TEXT,
  "userAgent" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "GuestVisit_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "PasswordResetToken" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "tokenHash" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "usedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "ChallengeRegistration" (
  "id" TEXT NOT NULL,
  "regNo" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "mobile" TEXT NOT NULL,
  "exam" TEXT NOT NULL,
  "subject" TEXT,
  "district" TEXT,
  "rounds" INTEGER[] NOT NULL,
  "consent" BOOLEAN NOT NULL DEFAULT false,
  "offers" BOOLEAN NOT NULL DEFAULT false,
  "source" TEXT NOT NULL DEFAULT 'challenge',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ChallengeRegistration_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "ChallengeSubmission" (
  "id" TEXT NOT NULL,
  "round" INTEGER NOT NULL,
  "name" TEXT NOT NULL,
  "mobile" TEXT NOT NULL,
  "exam" TEXT NOT NULL,
  "paper" TEXT NOT NULL,
  "score" INTEGER NOT NULL,
  "max" INTEGER NOT NULL,
  "correct" INTEGER NOT NULL,
  "wrong" INTEGER NOT NULL,
  "unattempted" INTEGER NOT NULL,
  "startedAt" TIMESTAMP(3) NOT NULL,
  "submittedAt" TIMESTAMP(3) NOT NULL,
  "durationSec" INTEGER NOT NULL,
  "late" BOOLEAN NOT NULL DEFAULT false,
  "answers" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ChallengeSubmission_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "ActivityEvent" (
  "id" TEXT NOT NULL,
  "userId" TEXT,
  "type" TEXT NOT NULL,
  "meta" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ActivityEvent_pkey" PRIMARY KEY ("id")
);

-- Add any columns that may be missing from partially upgraded tables.
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "passwordHash" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "googleId" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "role" "Role" NOT NULL DEFAULT 'USER';
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "examChoice" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "Attempt" ADD COLUMN IF NOT EXISTS "markedForReview" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "PlanAccess" ADD COLUMN IF NOT EXISTS "paymentId" TEXT;
ALTER TABLE "PlanAccess" ADD COLUMN IF NOT EXISTS "orderId" TEXT;
ALTER TABLE "PlanAccess" ADD COLUMN IF NOT EXISTS "source" TEXT NOT NULL DEFAULT 'payment';
ALTER TABLE "PlanAccess" ADD COLUMN IF NOT EXISTS "assignedByAdminId" TEXT;
ALTER TABLE "PlanAccess" ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "ChallengeRegistration" ADD COLUMN IF NOT EXISTS "subject" TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX IF NOT EXISTS "User_googleId_key" ON "User"("googleId");
CREATE INDEX IF NOT EXISTS "User_createdAt_idx" ON "User"("createdAt");
CREATE INDEX IF NOT EXISTS "User_role_idx" ON "User"("role");

CREATE INDEX IF NOT EXISTS "Attempt_userId_idx" ON "Attempt"("userId");
CREATE INDEX IF NOT EXISTS "Attempt_testId_idx" ON "Attempt"("testId");
CREATE INDEX IF NOT EXISTS "Attempt_takenAt_idx" ON "Attempt"("takenAt");
CREATE INDEX IF NOT EXISTS "Booking_userId_idx" ON "Booking"("userId");
CREATE INDEX IF NOT EXISTS "Booking_createdAt_idx" ON "Booking"("createdAt");
CREATE UNIQUE INDEX IF NOT EXISTS "PlanAccess_userId_plan_key" ON "PlanAccess"("userId", "plan");
CREATE INDEX IF NOT EXISTS "PlanAccess_createdAt_idx" ON "PlanAccess"("createdAt");
CREATE INDEX IF NOT EXISTS "PlanAccess_assignedByAdminId_idx" ON "PlanAccess"("assignedByAdminId");
CREATE INDEX IF NOT EXISTS "GuestVisit_visitorId_idx" ON "GuestVisit"("visitorId");
CREATE INDEX IF NOT EXISTS "GuestVisit_createdAt_idx" ON "GuestVisit"("createdAt");
CREATE INDEX IF NOT EXISTS "GuestVisit_path_idx" ON "GuestVisit"("path");
CREATE UNIQUE INDEX IF NOT EXISTS "PasswordResetToken_tokenHash_key" ON "PasswordResetToken"("tokenHash");
CREATE INDEX IF NOT EXISTS "PasswordResetToken_userId_idx" ON "PasswordResetToken"("userId");
CREATE INDEX IF NOT EXISTS "PasswordResetToken_expiresAt_idx" ON "PasswordResetToken"("expiresAt");
CREATE UNIQUE INDEX IF NOT EXISTS "ChallengeRegistration_regNo_key" ON "ChallengeRegistration"("regNo");
CREATE UNIQUE INDEX IF NOT EXISTS "ChallengeRegistration_mobile_key" ON "ChallengeRegistration"("mobile");
CREATE INDEX IF NOT EXISTS "ChallengeRegistration_createdAt_idx" ON "ChallengeRegistration"("createdAt");
CREATE INDEX IF NOT EXISTS "ChallengeRegistration_exam_idx" ON "ChallengeRegistration"("exam");
CREATE INDEX IF NOT EXISTS "ChallengeRegistration_source_idx" ON "ChallengeRegistration"("source");
CREATE UNIQUE INDEX IF NOT EXISTS "ChallengeSubmission_round_mobile_key" ON "ChallengeSubmission"("round", "mobile");
CREATE INDEX IF NOT EXISTS "ChallengeSubmission_round_idx" ON "ChallengeSubmission"("round");
CREATE INDEX IF NOT EXISTS "ChallengeSubmission_round_paper_idx" ON "ChallengeSubmission"("round", "paper");
CREATE INDEX IF NOT EXISTS "ChallengeSubmission_submittedAt_idx" ON "ChallengeSubmission"("submittedAt");
CREATE INDEX IF NOT EXISTS "ActivityEvent_type_idx" ON "ActivityEvent"("type");
CREATE INDEX IF NOT EXISTS "ActivityEvent_createdAt_idx" ON "ActivityEvent"("createdAt");
CREATE INDEX IF NOT EXISTS "ActivityEvent_userId_idx" ON "ActivityEvent"("userId");

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'Attempt_userId_fkey') THEN
    ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'Booking_userId_fkey') THEN
    ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'PlanAccess_userId_fkey') THEN
    ALTER TABLE "PlanAccess" ADD CONSTRAINT "PlanAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'PasswordResetToken_userId_fkey') THEN
    ALTER TABLE "PasswordResetToken" ADD CONSTRAINT "PasswordResetToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'ActivityEvent_userId_fkey') THEN
    ALTER TABLE "ActivityEvent" ADD CONSTRAINT "ActivityEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END $$;
