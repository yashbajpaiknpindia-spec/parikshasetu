CREATE TABLE IF NOT EXISTS "RozAttempt" (
  "id" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "date" TEXT NOT NULL,
  "paper" TEXT NOT NULL,
  "who" TEXT NOT NULL,
  "name" TEXT,
  "exam" TEXT NOT NULL,
  "score" DOUBLE PRECISION NOT NULL,
  "max" DOUBLE PRECISION NOT NULL,
  "correct" INTEGER NOT NULL,
  "wrong" INTEGER NOT NULL,
  "skipped" INTEGER NOT NULL,
  "sec" INTEGER NOT NULL,
  "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "answers" JSONB,
  CONSTRAINT "RozAttempt_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "RozUserDay" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "days" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "RozUserDay_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "RozAttempt_kind_date_paper_who_key"
  ON "RozAttempt"("kind", "date", "paper", "who");
CREATE INDEX IF NOT EXISTS "RozAttempt_date_kind_paper_idx"
  ON "RozAttempt"("date", "kind", "paper");
CREATE INDEX IF NOT EXISTS "RozAttempt_date_idx"
  ON "RozAttempt"("date");
CREATE INDEX IF NOT EXISTS "RozAttempt_who_idx"
  ON "RozAttempt"("who");
CREATE INDEX IF NOT EXISTS "RozUserDay_updatedAt_idx"
  ON "RozUserDay"("updatedAt");
