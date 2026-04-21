import { prisma } from "./prisma";

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
  const entry: AuditLogEntry = {
    actorId,
    action,
    targetType,
    targetId,
    timestamp: new Date(),
    metadata: metadata ?? null
  };
  try {
    await prisma.auditLog.create({
      data: {
        actorId: entry.actorId,
        action: entry.action,
        targetType: entry.targetType,
        targetId: entry.targetId ?? null,
        timestamp: entry.timestamp.toISOString(),
        metadata: entry.metadata ? JSON.stringify(entry.metadata) : null
      }
    });
  } catch (error) {
    console.error("Failed to write audit log entry", error);
  }
  return entry;
};
