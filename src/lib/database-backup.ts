import "server-only";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const DATABASE_BACKUP_VERSION = 2;

export type DatabaseBackup = {
  version: number;
  app: "pariksha-setu";
  exportedAt: string;
  counts: Record<string, number>;
  data: {
    users: unknown[];
    passwordResetTokens: unknown[];
    attempts: unknown[];
    bookings: unknown[];
    planAccess: unknown[];
    pricingConfigs: unknown[];
    guestVisits: unknown[];
    challengeRegistrations: unknown[];
    challengeSubmissions: unknown[];
    activityEvents: unknown[];
    rozAttempts: unknown[];
    rozUserDays: unknown[];
  };
};

export async function exportDatabase(): Promise<DatabaseBackup> {
  const [users, passwordResetTokens, attempts, bookings, planAccess, pricingConfigs, guestVisits, challengeRegistrations, challengeSubmissions, activityEvents, rozAttempts, rozUserDays] = await Promise.all([
    prisma.user.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.passwordResetToken.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.attempt.findMany({ orderBy: { takenAt: "asc" } }),
    prisma.booking.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.planAccess.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.pricingConfig.findMany({ orderBy: { id: "asc" } }),
    prisma.guestVisit.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.challengeRegistration.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.challengeSubmission.findMany({ orderBy: { submittedAt: "asc" } }),
    prisma.activityEvent.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.rozAttempt.findMany({ orderBy: { submittedAt: "asc" } }),
    prisma.rozUserDay.findMany({ orderBy: { updatedAt: "asc" } }),
  ]);

  const data = {
    users,
    passwordResetTokens,
    attempts,
    bookings,
    planAccess,
    pricingConfigs,
    guestVisits,
    challengeRegistrations,
    challengeSubmissions,
    activityEvents,
    rozAttempts,
    rozUserDays,
  };
  const counts = Object.fromEntries(Object.entries(data).map(([key, rows]) => [key, rows.length]));

  return {
    version: DATABASE_BACKUP_VERSION,
    app: "pariksha-setu",
    exportedAt: new Date().toISOString(),
    counts,
    data,
  };
}

function requiredString(value: unknown, field: string) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`Invalid ${field}`);
  return value;
}

function requiredInt(value: unknown, field: string) {
  if (typeof value !== "number" || !Number.isInteger(value)) throw new Error(`Invalid ${field}`);
  return value;
}

function requiredNumber(value: unknown, field: string) {
  if (typeof value !== "number" || !Number.isFinite(value)) throw new Error(`Invalid ${field}`);
  return value;
}

function requiredBool(value: unknown, field: string) {
  if (typeof value !== "boolean") throw new Error(`Invalid ${field}`);
  return value;
}

function optionalString(value: unknown, field: string) {
  if (value == null) return null;
  if (typeof value !== "string") throw new Error(`Invalid ${field}`);
  return value;
}

function dateValue(value: unknown, field: string) {
  const raw = requiredString(value, field);
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid ${field}`);
  return date;
}

function objectRows(value: unknown, key: string) {
  if (!Array.isArray(value)) throw new Error(`Backup field ${key} must be an array`);
  return value as Record<string, unknown>[];
}

function jsonValue(value: unknown): Prisma.InputJsonValue | typeof Prisma.JsonNull | undefined {
  if (value === undefined) return undefined;
  if (value === null) return Prisma.JsonNull;
  return value as Prisma.InputJsonValue;
}

export async function importDatabase(input: unknown, replaceAll: boolean) {
  if (!input || typeof input !== "object") throw new Error("Invalid backup file");
  const backup = input as Record<string, unknown>;
  if (backup.app !== "pariksha-setu") throw new Error("This is not a Pariksha Setu backup");
  const backupVersion = backup.version;
  if (backupVersion !== 1 && backupVersion !== DATABASE_BACKUP_VERSION) throw new Error(`Unsupported backup version: ${String(backupVersion)}`);
  const data = backup.data;
  if (!data || typeof data !== "object") throw new Error("Backup data is missing");
  const d = data as Record<string, unknown>;

  const users = objectRows(d.users, "users");
  const passwordResetTokens = objectRows(d.passwordResetTokens, "passwordResetTokens");
  const attempts = objectRows(d.attempts, "attempts");
  const bookings = objectRows(d.bookings, "bookings");
  const planAccess = objectRows(d.planAccess, "planAccess");
  const pricingConfigs = objectRows(d.pricingConfigs, "pricingConfigs");
  const guestVisits = objectRows(d.guestVisits, "guestVisits");
  const challengeRegistrations = objectRows(d.challengeRegistrations, "challengeRegistrations");
  const challengeSubmissions = objectRows(d.challengeSubmissions, "challengeSubmissions");
  const activityEvents = objectRows(d.activityEvents, "activityEvents");
  const rozAttempts = objectRows(d.rozAttempts ?? [], "rozAttempts");
  const rozUserDays = objectRows(d.rozUserDays ?? [], "rozUserDays");

  const total = users.length + passwordResetTokens.length + attempts.length + bookings.length + planAccess.length + pricingConfigs.length + guestVisits.length + challengeRegistrations.length + challengeSubmissions.length + activityEvents.length + rozAttempts.length + rozUserDays.length;
  if (total > 250_000) throw new Error("Backup is too large (maximum 250,000 records)");

  return prisma.$transaction(async (tx) => {
    if (replaceAll) {
      await tx.rozAttempt.deleteMany();
      await tx.rozUserDay.deleteMany();
      await tx.activityEvent.deleteMany();
      await tx.challengeSubmission.deleteMany();
      await tx.challengeRegistration.deleteMany();
      await tx.guestVisit.deleteMany();
      await tx.passwordResetToken.deleteMany();
      await tx.planAccess.deleteMany();
      await tx.booking.deleteMany();
      await tx.attempt.deleteMany();
      await tx.pricingConfig.deleteMany();
      await tx.user.deleteMany();
    }

    for (const row of users) {
      const id = requiredString(row.id, "User.id");
      const create: Prisma.UserUncheckedCreateInput = {
        id,
        name: requiredString(row.name, "User.name"),
        email: requiredString(row.email, "User.email"),
        passwordHash: optionalString(row.passwordHash, "User.passwordHash"),
        googleId: optionalString(row.googleId, "User.googleId"),
        role: row.role === "ADMIN" ? "ADMIN" : "USER",
        examChoice: optionalString(row.examChoice, "User.examChoice"),
        createdAt: dateValue(row.createdAt, "User.createdAt"),
        updatedAt: dateValue(row.updatedAt, "User.updatedAt"),
        lastSeenAt: dateValue(row.lastSeenAt, "User.lastSeenAt"),
      };
      await tx.user.upsert({ where: { id }, create, update: create });
    }

    for (const row of passwordResetTokens) {
      const id = requiredString(row.id, "PasswordResetToken.id");
      const create: Prisma.PasswordResetTokenUncheckedCreateInput = {
        id,
        userId: requiredString(row.userId, "PasswordResetToken.userId"),
        tokenHash: requiredString(row.tokenHash, "PasswordResetToken.tokenHash"),
        expiresAt: dateValue(row.expiresAt, "PasswordResetToken.expiresAt"),
        usedAt: row.usedAt == null ? null : dateValue(row.usedAt, "PasswordResetToken.usedAt"),
        createdAt: dateValue(row.createdAt, "PasswordResetToken.createdAt"),
      };
      await tx.passwordResetToken.upsert({ where: { id }, create, update: create });
    }

    for (const row of attempts) {
      const id = requiredString(row.id, "Attempt.id");
      const create: Prisma.AttemptUncheckedCreateInput = {
        id,
        userId: requiredString(row.userId, "Attempt.userId"),
        testId: requiredString(row.testId, "Attempt.testId"),
        testTitle: requiredString(row.testTitle, "Attempt.testTitle"),
        examSlug: optionalString(row.examSlug, "Attempt.examSlug"),
        post: optionalString(row.post, "Attempt.post"),
        cycle: optionalString(row.cycle, "Attempt.cycle"),
        score: requiredInt(row.score, "Attempt.score"),
        maxScore: requiredInt(row.maxScore, "Attempt.maxScore"),
        correct: requiredInt(row.correct, "Attempt.correct"),
        wrong: requiredInt(row.wrong, "Attempt.wrong"),
        unattempted: requiredInt(row.unattempted, "Attempt.unattempted"),
        total: requiredInt(row.total, "Attempt.total"),
        weakTopics: Array.isArray(row.weakTopics) ? row.weakTopics.filter((v): v is string => typeof v === "string") : [],
        answers: jsonValue(row.answers),
        markedForReview: Array.isArray(row.markedForReview) ? row.markedForReview.filter((v): v is string => typeof v === "string") : [],
        takenAt: dateValue(row.takenAt, "Attempt.takenAt"),
      };
      await tx.attempt.upsert({ where: { id }, create, update: create });
    }

    for (const row of bookings) {
      const id = requiredString(row.id, "Booking.id");
      const create: Prisma.BookingUncheckedCreateInput = {
        id,
        userId: requiredString(row.userId, "Booking.userId"),
        mentorSlug: requiredString(row.mentorSlug, "Booking.mentorSlug"),
        mentorName: requiredString(row.mentorName, "Booking.mentorName"),
        post: optionalString(row.post, "Booking.post"),
        subject: optionalString(row.subject, "Booking.subject"),
        date: requiredString(row.date, "Booking.date"),
        time: requiredString(row.time, "Booking.time"),
        price: requiredInt(row.price, "Booking.price"),
        paid: requiredBool(row.paid, "Booking.paid"),
        paymentId: optionalString(row.paymentId, "Booking.paymentId"),
        orderId: optionalString(row.orderId, "Booking.orderId"),
        createdAt: dateValue(row.createdAt, "Booking.createdAt"),
      };
      await tx.booking.upsert({ where: { id }, create, update: create });
    }

    for (const row of planAccess) {
      const id = requiredString(row.id, "PlanAccess.id");
      const create: Prisma.PlanAccessUncheckedCreateInput = {
        id,
        userId: requiredString(row.userId, "PlanAccess.userId"),
        plan: requiredString(row.plan, "PlanAccess.plan"),
        amount: requiredInt(row.amount, "PlanAccess.amount"),
        paymentId: optionalString(row.paymentId, "PlanAccess.paymentId"),
        orderId: optionalString(row.orderId, "PlanAccess.orderId"),
        source: requiredString(row.source, "PlanAccess.source"),
        assignedByAdminId: optionalString(row.assignedByAdminId, "PlanAccess.assignedByAdminId"),
        createdAt: dateValue(row.createdAt, "PlanAccess.createdAt"),
        updatedAt: dateValue(row.updatedAt, "PlanAccess.updatedAt"),
      };
      await tx.planAccess.upsert({ where: { id }, create, update: create });
    }

    for (const row of pricingConfigs) {
      const id = requiredInt(row.id, "PricingConfig.id");
      const create: Prisma.PricingConfigUncheckedCreateInput = {
        id,
        prepPrice: requiredInt(row.prepPrice, "PricingConfig.prepPrice"),
        mentorPrice: requiredInt(row.mentorPrice, "PricingConfig.mentorPrice"),
        mentorLive: requiredBool(row.mentorLive, "PricingConfig.mentorLive"),
        updatedAt: dateValue(row.updatedAt, "PricingConfig.updatedAt"),
        updatedByAdminId: optionalString(row.updatedByAdminId, "PricingConfig.updatedByAdminId"),
      };
      await tx.pricingConfig.upsert({ where: { id }, create, update: create });
    }

    for (const row of guestVisits) {
      const id = requiredString(row.id, "GuestVisit.id");
      const create: Prisma.GuestVisitUncheckedCreateInput = {
        id,
        visitorId: requiredString(row.visitorId, "GuestVisit.visitorId"),
        path: requiredString(row.path, "GuestVisit.path"),
        ip: optionalString(row.ip, "GuestVisit.ip"),
        country: optionalString(row.country, "GuestVisit.country"),
        region: optionalString(row.region, "GuestVisit.region"),
        city: optionalString(row.city, "GuestVisit.city"),
        userAgent: optionalString(row.userAgent, "GuestVisit.userAgent"),
        createdAt: dateValue(row.createdAt, "GuestVisit.createdAt"),
      };
      await tx.guestVisit.upsert({ where: { id }, create, update: create });
    }

    for (const row of challengeRegistrations) {
      const id = requiredString(row.id, "ChallengeRegistration.id");
      const create: Prisma.ChallengeRegistrationUncheckedCreateInput = {
        id,
        regNo: requiredString(row.regNo, "ChallengeRegistration.regNo"),
        name: requiredString(row.name, "ChallengeRegistration.name"),
        mobile: requiredString(row.mobile, "ChallengeRegistration.mobile"),
        exam: requiredString(row.exam, "ChallengeRegistration.exam"),
        subject: optionalString(row.subject, "ChallengeRegistration.subject"),
        district: optionalString(row.district, "ChallengeRegistration.district"),
        rounds: Array.isArray(row.rounds) ? row.rounds.filter((v): v is number => typeof v === "number") : [],
        consent: requiredBool(row.consent, "ChallengeRegistration.consent"),
        offers: requiredBool(row.offers, "ChallengeRegistration.offers"),
        source: requiredString(row.source, "ChallengeRegistration.source"),
        createdAt: dateValue(row.createdAt, "ChallengeRegistration.createdAt"),
      };
      await tx.challengeRegistration.upsert({ where: { id }, create, update: create });
    }

    for (const row of challengeSubmissions) {
      const id = requiredString(row.id, "ChallengeSubmission.id");
      const create: Prisma.ChallengeSubmissionUncheckedCreateInput = {
        id,
        round: requiredInt(row.round, "ChallengeSubmission.round"),
        name: requiredString(row.name, "ChallengeSubmission.name"),
        mobile: requiredString(row.mobile, "ChallengeSubmission.mobile"),
        exam: requiredString(row.exam, "ChallengeSubmission.exam"),
        paper: requiredString(row.paper, "ChallengeSubmission.paper"),
        score: requiredInt(row.score, "ChallengeSubmission.score"),
        max: requiredInt(row.max, "ChallengeSubmission.max"),
        correct: requiredInt(row.correct, "ChallengeSubmission.correct"),
        wrong: requiredInt(row.wrong, "ChallengeSubmission.wrong"),
        unattempted: requiredInt(row.unattempted, "ChallengeSubmission.unattempted"),
        startedAt: dateValue(row.startedAt, "ChallengeSubmission.startedAt"),
        submittedAt: dateValue(row.submittedAt, "ChallengeSubmission.submittedAt"),
        durationSec: requiredInt(row.durationSec, "ChallengeSubmission.durationSec"),
        late: requiredBool(row.late, "ChallengeSubmission.late"),
        answers: jsonValue(row.answers),
        createdAt: dateValue(row.createdAt, "ChallengeSubmission.createdAt"),
      };
      await tx.challengeSubmission.upsert({ where: { id }, create, update: create });
    }

    for (const row of activityEvents) {
      const id = requiredString(row.id, "ActivityEvent.id");
      const create: Prisma.ActivityEventUncheckedCreateInput = {
        id,
        userId: optionalString(row.userId, "ActivityEvent.userId"),
        type: requiredString(row.type, "ActivityEvent.type"),
        meta: jsonValue(row.meta),
        createdAt: dateValue(row.createdAt, "ActivityEvent.createdAt"),
      };
      await tx.activityEvent.upsert({ where: { id }, create, update: create });
    }

    for (const row of rozAttempts) {
      const id = requiredString(row.id, "RozAttempt.id");
      const create: Prisma.RozAttemptUncheckedCreateInput = {
        id,
        kind: requiredString(row.kind, "RozAttempt.kind"),
        date: requiredString(row.date, "RozAttempt.date"),
        paper: requiredString(row.paper, "RozAttempt.paper"),
        who: requiredString(row.who, "RozAttempt.who"),
        name: optionalString(row.name, "RozAttempt.name"),
        exam: requiredString(row.exam, "RozAttempt.exam"),
        score: requiredNumber(row.score, "RozAttempt.score"),
        max: requiredNumber(row.max, "RozAttempt.max"),
        correct: requiredInt(row.correct, "RozAttempt.correct"),
        wrong: requiredInt(row.wrong, "RozAttempt.wrong"),
        skipped: requiredInt(row.skipped, "RozAttempt.skipped"),
        sec: requiredInt(row.sec, "RozAttempt.sec"),
        submittedAt: dateValue(row.submittedAt, "RozAttempt.submittedAt"),
        answers: jsonValue(row.answers),
      };
      await tx.rozAttempt.upsert({ where: { id }, create, update: create });
    }

    for (const row of rozUserDays) {
      const id = requiredString(row.id, "RozUserDay.id");
      const create: Prisma.RozUserDayUncheckedCreateInput = {
        id,
        name: requiredString(row.name, "RozUserDay.name"),
        days: Array.isArray(row.days) ? row.days.filter((v): v is string => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v)).slice(-400) : [],
        updatedAt: dateValue(row.updatedAt, "RozUserDay.updatedAt"),
      };
      await tx.rozUserDay.upsert({ where: { id }, create, update: create });
    }

    return {
      replaceAll,
      recordsImported: total,
      counts: {
        users: users.length,
        passwordResetTokens: passwordResetTokens.length,
        attempts: attempts.length,
        bookings: bookings.length,
        planAccess: planAccess.length,
        pricingConfigs: pricingConfigs.length,
        guestVisits: guestVisits.length,
        challengeRegistrations: challengeRegistrations.length,
        challengeSubmissions: challengeSubmissions.length,
        activityEvents: activityEvents.length,
        rozAttempts: rozAttempts.length,
        rozUserDays: rozUserDays.length,
      },
    };
  }, { maxWait: 15_000, timeout: 120_000 });
}
