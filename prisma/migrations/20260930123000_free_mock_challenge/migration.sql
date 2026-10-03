CREATE TABLE "ChallengeRegistration" (
  "id" TEXT NOT NULL,
  "regNo" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "mobile" TEXT NOT NULL,
  "exam" TEXT NOT NULL,
  "district" TEXT,
  "rounds" INTEGER[] NOT NULL,
  "consent" BOOLEAN NOT NULL DEFAULT false,
  "offers" BOOLEAN NOT NULL DEFAULT false,
  "source" TEXT NOT NULL DEFAULT 'challenge',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ChallengeRegistration_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "ChallengeRegistration_regNo_key" ON "ChallengeRegistration"("regNo");
CREATE UNIQUE INDEX "ChallengeRegistration_mobile_key" ON "ChallengeRegistration"("mobile");
CREATE INDEX "ChallengeRegistration_createdAt_idx" ON "ChallengeRegistration"("createdAt");
CREATE INDEX "ChallengeRegistration_exam_idx" ON "ChallengeRegistration"("exam");
CREATE INDEX "ChallengeRegistration_source_idx" ON "ChallengeRegistration"("source");
