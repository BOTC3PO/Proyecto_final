
import { prisma } from "../prisma";
import { ENV } from "../env";
import { withAdvisoryLock } from "../pg-lock";

type DelinquencyStatus = "ACTIVE" | "PAST_DUE" | "SUSPENDED";

const DAY_IN_MS = 24 * 60 * 60 * 1000;

const resolveDelinquencyStatus = (daysPastDue: number): DelinquencyStatus => {
  if (daysPastDue >= ENV.BILLING_SUSPEND_DAYS) return "SUSPENDED";
  if (daysPastDue >= ENV.BILLING_PAST_DUE_DAYS) return "PAST_DUE";
  return "ACTIVE";
};

const isValidDate = (value: unknown) => value instanceof Date && !Number.isNaN(value.valueOf());

const computeDaysPastDue = (createdAt: string, now: Date) => {
  const issuedAt = new Date(createdAt);
  if (!isValidDate(issuedAt)) return null;
  const diff = now.valueOf() - issuedAt.valueOf();
  return diff <= 0 ? 0 : Math.floor(diff / DAY_IN_MS);
};

export const runDelinquencySweep = async () => {
  const now = new Date();

  // TODO: No Prisma model for "invoices" yet — returning empty list until
  // an Invoice model is added to the schema.
  const unpaidBySchool: Array<{ _id: string; oldestInvoiceAt: string }> = [];

  const unpaidSchoolIds = unpaidBySchool.map((entry) => entry._id).filter(Boolean);

  // Group status updates by target status to batch the updateMany calls
  const byStatus: Record<DelinquencyStatus, string[]> = {
    ACTIVE: [],
    PAST_DUE: [],
    SUSPENDED: []
  };

  for (const unpaid of unpaidBySchool) {
    if (!unpaid?._id || !unpaid.oldestInvoiceAt) continue;
    const daysPastDue = computeDaysPastDue(unpaid.oldestInvoiceAt, now);
    if (daysPastDue === null) continue;
    const nextStatus = resolveDelinquencyStatus(daysPastDue);
    byStatus[nextStatus].push(unpaid._id);
  }

  let changeCount = 0;

  for (const [status, ids] of Object.entries(byStatus) as [DelinquencyStatus, string[]][]) {
    if (ids.length === 0) continue;
    const result = await prisma.escuela.updateMany({
      where: {
        id: { in: ids },
        subscriptionStatus: { not: "INACTIVE" }
      },
      data: { subscriptionStatus: status }
    });
    changeCount += result.count;
  }

  // Clear schools that are PAST_DUE/SUSPENDED but now have no unpaid invoices
  const clearedResult = await prisma.escuela.updateMany({
    where: {
      subscriptionStatus: { in: ["PAST_DUE", "SUSPENDED"] },
      id: { notIn: unpaidSchoolIds }
    },
    data: { subscriptionStatus: "ACTIVE" }
  });
  changeCount += clearedResult.count;

  return {
    evaluatedSchools: unpaidBySchool.length,
    updatedSchools: changeCount,
    policy: {
      pastDueDays: ENV.BILLING_PAST_DUE_DAYS,
      suspendDays: ENV.BILLING_SUSPEND_DAYS
    }
  };
};

export const scheduleDelinquencyJob = () => {
  if (!ENV.BILLING_DELINQUENCY_JOB_ENABLED) return;
  const intervalMs = Math.max(ENV.BILLING_DELINQUENCY_JOB_INTERVAL_MINUTES, 5) * 60 * 1000;
  const runJob = async () => {
    try {
      // Advisory lock — con 2+ instancias del API, sólo una corre el
      // sweep por tick (ver tareas_pendientes/PLAN-escalabilidad-api.md).
      await withAdvisoryLock("billing-delinquency-sweep", runDelinquencySweep);
    } catch (error) {
      console.error("Delinquency sweep failed", error);
    }
  };
  runJob();
  setInterval(runJob, intervalMs);
};
