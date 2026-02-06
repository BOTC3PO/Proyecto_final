import { getDb } from "../db";
import { ENV } from "../env";
import { toObjectId } from "../ids";

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
  const db = await getDb();
  const now = new Date();
  const unpaidBySchool = await db
    .collection("invoices")
    .aggregate<{ _id: string; oldestInvoiceAt: string }>([
      { $match: { status: { $ne: "PAID" } } },
      { $group: { _id: "$schoolId", oldestInvoiceAt: { $min: "$createdAt" } } }
    ])
    .toArray();

  const bulk = db.collection("escuelas").initializeUnorderedBulkOp();
  let changeCount = 0;

  for (const unpaid of unpaidBySchool) {
    if (!unpaid?._id || !unpaid.oldestInvoiceAt) continue;
    const daysPastDue = computeDaysPastDue(unpaid.oldestInvoiceAt, now);
    if (daysPastDue === null) continue;
    const nextStatus = resolveDelinquencyStatus(daysPastDue);
    const escuelaId = toObjectId(unpaid._id);
    const filter = {
      ...(escuelaId ? { _id: escuelaId } : { _id: unpaid._id }),
      subscriptionStatus: { $ne: "INACTIVE" }
    };
    bulk.find(filter).updateOne({ $set: { subscriptionStatus: nextStatus } });
    changeCount += 1;
  }

  const clearedSchools = await db
    .collection("escuelas")
    .find(
      {
        subscriptionStatus: { $in: ["PAST_DUE", "SUSPENDED"] },
        _id: {
          $nin: unpaidBySchool
            .map((entry) => toObjectId(entry._id) ?? entry._id)
            .filter((value) => value !== null)
        }
      },
      { projection: { _id: 1 } }
    )
    .toArray();

  for (const school of clearedSchools) {
    bulk.find({ _id: school._id }).updateOne({ $set: { subscriptionStatus: "ACTIVE" } });
    changeCount += 1;
  }

  if (changeCount > 0) {
    await bulk.execute();
  }

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
      await runDelinquencySweep();
    } catch (error) {
      console.error("Delinquency sweep failed", error);
    }
  };
  runJob();
  setInterval(runJob, intervalMs);
};
