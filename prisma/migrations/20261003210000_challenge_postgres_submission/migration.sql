ALTER TABLE "ChallengeRegistration" ADD COLUMN IF NOT EXISTS "subject" TEXT;

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

CREATE UNIQUE INDEX IF NOT EXISTS "ChallengeSubmission_round_mobile_key" ON "ChallengeSubmission"("round", "mobile");
CREATE INDEX IF NOT EXISTS "ChallengeSubmission_round_idx" ON "ChallengeSubmission"("round");
CREATE INDEX IF NOT EXISTS "ChallengeSubmission_round_paper_idx" ON "ChallengeSubmission"("round", "paper");
CREATE INDEX IF NOT EXISTS "ChallengeSubmission_submittedAt_idx" ON "ChallengeSubmission"("submittedAt");
