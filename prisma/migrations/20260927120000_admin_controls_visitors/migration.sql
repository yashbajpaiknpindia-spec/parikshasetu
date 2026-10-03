-- Admin controls, dynamic pricing, and anonymous guest visit tracking
ALTER TABLE "PlanAccess" ALTER COLUMN "paymentId" DROP NOT NULL;
ALTER TABLE "PlanAccess" ALTER COLUMN "orderId" DROP NOT NULL;
ALTER TABLE "PlanAccess" ADD COLUMN "source" TEXT NOT NULL DEFAULT 'payment';
ALTER TABLE "PlanAccess" ADD COLUMN "assignedByAdminId" TEXT;
ALTER TABLE "PlanAccess" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
CREATE INDEX "PlanAccess_assignedByAdminId_idx" ON "PlanAccess"("assignedByAdminId");

CREATE TABLE "PricingConfig" (
  "id" INTEGER NOT NULL DEFAULT 1,
  "prepPrice" INTEGER NOT NULL DEFAULT 99,
  "mentorPrice" INTEGER NOT NULL DEFAULT 199,
  "mentorLive" BOOLEAN NOT NULL DEFAULT false,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedByAdminId" TEXT,
  CONSTRAINT "PricingConfig_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GuestVisit" (
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
CREATE INDEX "GuestVisit_visitorId_idx" ON "GuestVisit"("visitorId");
CREATE INDEX "GuestVisit_createdAt_idx" ON "GuestVisit"("createdAt");
CREATE INDEX "GuestVisit_path_idx" ON "GuestVisit"("path");

ALTER TABLE "Attempt" ADD COLUMN "markedForReview" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
