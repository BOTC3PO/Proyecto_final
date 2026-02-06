import { getDb } from "./db";

export type AuditLogEntry = {
  actorId: string;
  action: string;
  targetType: string;
  targetId: string | null;
  timestamp: Date;
  metadata?: Record<string, unknown> | null;
};

export const recordAuditLog = async ({
  actorId,
  action,
  targetType,
  targetId,
  metadata
}: Omit<AuditLogEntry, "timestamp">) => {
  const db = await getDb();
  const entry: AuditLogEntry = {
    actorId,
    action,
    targetType,
    targetId,
    timestamp: new Date(),
    metadata: metadata ?? null
  };
  try {
    await db.collection("audit_logs").insertOne(entry);
  } catch (error) {
    console.error("Failed to write audit log entry", error);
  }
  return entry;
};
