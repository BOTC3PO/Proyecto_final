import { recordAuditLog } from "./audit-log";
import { getDb } from "./db";
import { toObjectId } from "./ids";
import { isPasswordHashUsable } from "./passwords";

export const markUsersWithoutUsablePasswordForReset = async (params: {
  actorId: string;
  reason: string;
  targetUserId?: string;
}) => {
  const { actorId, reason, targetUserId } = params;
  const db = await getDb();
  const targetObjectId = targetUserId ? toObjectId(targetUserId) : null;
  if (targetUserId && !targetObjectId) return;
  const query: Record<string, unknown> = targetObjectId ? { _id: targetObjectId } : {};
  const candidates = await db
    .collection("usuarios")
    .find(query)
    .project({ _id: 1, role: 1, passwordHash: 1, passwordResetRequired: 1 })
    .toArray();

  for (const user of candidates) {
    if (isPasswordHashUsable(user.passwordHash) || user.passwordResetRequired === true) continue;
    await db.collection("usuarios").updateOne(
      { _id: user._id },
      {
        $set: {
          passwordResetRequired: true,
          updatedAt: new Date()
        }
      }
    );
    await recordAuditLog({
      actorId,
      action: "usuarios.password_reset_required",
      targetType: "usuario",
      targetId: user._id.toString(),
      metadata: {
        reason,
        role: typeof user.role === "string" ? user.role : null,
        hadPasswordHash: typeof user.passwordHash === "string"
      }
    });
  }
};
