import { recordAuditLog } from "./audit-log";
import { prisma } from "./prisma";
import { resolvePrimaryRole } from "./roles";
import { isPasswordHashUsable } from "./passwords";

export const markUsersWithoutUsablePasswordForReset = async (params: {
  actorId: string;
  reason: string;
  targetUserId?: string;
}) => {
  const { actorId, reason, targetUserId } = params;
  if (targetUserId && !targetUserId.trim()) return;
  const whereClause = targetUserId ? { id: targetUserId } : {};
  const candidates = await prisma.usuario.findMany({
    where: whereClause,
    select: { id: true, roles: true, passwordHash: true, passwordResetRequired: true }
  });

  for (const user of candidates) {
    if (isPasswordHashUsable(user.passwordHash) || user.passwordResetRequired === true) continue;
    await prisma.usuario.update({
      where: { id: user.id },
      data: { passwordResetRequired: true, updatedAt: new Date().toISOString() }
    });
    await recordAuditLog({
      actorId,
      action: "usuarios.password_reset_required",
      targetType: "usuario",
      targetId: user.id,
      metadata: {
        reason,
        role: resolvePrimaryRole(user),
        hadPasswordHash: typeof user.passwordHash === "string"
      }
    });
  }
};
