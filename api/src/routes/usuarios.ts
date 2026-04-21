import crypto from "node:crypto";
import { Router } from "express";
import { requirePolicy } from "../lib/authorization";
import { recordAuditLog } from "../lib/audit-log";
import { prisma } from "../lib/prisma";
import { toObjectId } from "../lib/ids";
import { markUsersWithoutUsablePasswordForReset } from "../lib/password-health";
import { hashPassword } from "../lib/passwords";
import { normalizeSchoolId } from "../lib/school-ids";
import { requireUser } from "../lib/user-auth";
import { serializeUsuario } from "../lib/user-serializer";
import { UsuarioWriteSchema } from "../schema/usuario";

export const usuarios = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};


usuarios.post("/api/usuarios", requireUser, requirePolicy("usuarios/create"), async (req, res) => {
  try {
    const nowIso = new Date().toISOString();
    const parsed = UsuarioWriteSchema.parse({
      ...req.body,
      createdAt: nowIso,
      updatedAt: nowIso
    });
    const requester =
      (res.locals as {
        user?: { _id?: { toString?: () => string }; role?: string; schoolId?: string | null };
      }).user ??
      (req as {
        user?: { _id?: { toString?: () => string }; role?: string; schoolId?: string | null };
      }).user;
    const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
    const accessLevel = authorization?.data?.accessLevel;
    if (accessLevel !== "admin" && accessLevel !== "school") {
      res.status(403).json({ error: "forbidden" });
      return;
    }
    if (accessLevel !== "admin") {
      const requesterSchoolId = typeof requester?.schoolId === "string" ? requester.schoolId : null;
      const targetSchoolId = normalizeSchoolId(parsed.escuelaId);
      if (!requesterSchoolId || !targetSchoolId || requesterSchoolId !== targetSchoolId) {
        res.status(403).json({ error: "forbidden" });
        return;
      }
    }
    const now = new Date().toISOString();

    const consentsData = parsed.consents
      ? {
          privacyConsent: parsed.consents.privacyConsent ?? false,
          termsAccepted: parsed.consents.termsAccepted ?? false,
          consentedAt: parsed.consents.consentedAt
            ? new Date(parsed.consents.consentedAt).toISOString()
            : undefined
        }
      : {};

    const result = await prisma.usuario.create({
      data: {
        id: crypto.randomUUID(),
        username: parsed.username,
        email: parsed.email,
        fullName: parsed.fullName,
        role: parsed.role,
        escuelaId: parsed.escuelaId ?? null,
        birthdate: parsed.birthdate ? new Date(parsed.birthdate).toISOString() : null,
        passwordHash: hashPassword(parsed.password),
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
        ...consentsData
      }
    });
    const passwordResetRequired =
      "passwordResetRequired" in parsed && (parsed as any).passwordResetRequired === true;
    await recordAuditLog({
      actorId: requester?._id?.toString?.() ?? "system",
      action: "usuarios.create",
      targetType: "usuario",
      targetId: result.id.toString(),
      metadata: {
        role: result.role ?? null,
        escuelaId: result.escuelaId?.toString?.() ?? null,
        passwordResetRequired
      }
    });
    await markUsersWithoutUsablePasswordForReset({
      actorId: requester?._id?.toString?.() ?? "system",
      reason: "post-create-validation",
      targetUserId: result.id.toString()
    });
    res.status(201).json({ id: result.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

usuarios.get("/api/usuarios", requireUser, requirePolicy("usuarios/list"), async (req, res) => {
  const user = (req as { user?: { role?: string; schoolId?: string | null } }).user;
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const where: Record<string, unknown> = { isDeleted: { not: true } };
  const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
  const accessLevel = authorization?.data?.accessLevel;
  if (accessLevel === "admin") {
    // Global access.
  } else if (accessLevel === "school") {
    const schoolId = typeof user?.schoolId === "string" ? user.schoolId : null;
    if (!schoolId) {
      res.status(403).json({ error: "forbidden" });
      return;
    }
    where.escuelaId = schoolId;
  } else {
    res.status(403).json({ error: "forbidden" });
    return;
  }
  const items = await prisma.usuario.findMany({
    where: where as any,
    select: { id: true, username: true, role: true, escuelaId: true },
    skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
    take: limit,
    orderBy: { createdAt: "desc" }
  });
  res.json({ items: items.map((item) => ({ id: item.id, username: item.username, role: item.role, escuelaId: item.escuelaId })), limit, offset });
});

usuarios.get("/api/usuarios/:id", requireUser, requirePolicy("usuarios/read"), async (req, res) => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!rawId) return res.status(400).json({ error: "missing id" });
  const objectId = toObjectId(rawId);
  if (!objectId) return res.status(400).json({ error: "invalid id" });
  const requester =
    (res.locals as { user?: { _id?: { toString?: () => string }; role?: string; teacherProfile?: unknown } }).user ??
    (req as { user?: { _id?: { toString?: () => string }; role?: string; teacherProfile?: unknown } }).user;
  const requesterId = requester?._id?.toString?.() ?? null;
  if (!requesterId) return res.status(403).json({ error: "forbidden" });
  const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
  const accessLevel = authorization?.data?.accessLevel;
  const item = await prisma.usuario.findFirst({
    where: { id: rawId, isDeleted: { not: true } }
  });
  if (!item) return res.status(404).json({ error: "not found" });
  if (accessLevel === "admin") {
    res.json(serializeUsuario(item, { access: "admin" }));
    return;
  }
  // Class-based access check — the Clase model does not have `adminIds` or embedded `members` array in the Prisma schema;
  // we skip this lookup and fall through to membership-based access.
  const hasPublicTeacherModules =
    (item as any).teacherProfile?.modules?.some((module: { isPublic?: boolean }) => module.isPublic === true) ?? false;
  if (!item.escuelaId && hasPublicTeacherModules) {
    res.json(serializeUsuario(item, { access: "public" }));
    return;
  }
  const targetMemberships = await prisma.membresia.findMany({
    where: { usuarioId: rawId, estado: { not: "revocada" } }
  });
  const targetEscuelaIds = targetMemberships.map((membership) => membership.escuelaId).filter(Boolean);
  if (!targetEscuelaIds.length) return res.status(403).json({ error: "forbidden" });
  const targetEscuelaIdSet = new Set(targetEscuelaIds.map((escuelaId) => String(escuelaId)));
  const escuelaIdParam = req.query.escuelaId;
  const escuelaId = typeof escuelaIdParam === "string" ? escuelaIdParam : null;
  if (escuelaId && !targetEscuelaIdSet.has(escuelaId.toString())) return res.status(403).json({ error: "forbidden" });
  const requesterMembership = await prisma.membresia.findFirst({
    where: {
      usuarioId: requesterId,
      escuelaId: escuelaId ? escuelaId : { in: targetEscuelaIds as string[] },
      estado: { not: "revocada" }
    }
  });
  if (!requesterMembership) return res.status(403).json({ error: "forbidden" });
  if (escuelaId) {
    const membresia = await prisma.membresia.findFirst({
      where: {
        usuarioId: rawId,
        escuelaId,
        estado: { not: "revocada" }
      }
    });
    if (membresia) {
      res.json(
        serializeUsuario(item, {
          access: "member",
          membership: {
            rolEscuela: membresia.rol as string | undefined,
            estadoMembresia: membresia.estado as string | undefined,
            fechaAltaMembresia: membresia.fechaAlta as string | undefined,
            escuelaId: membresia.escuelaId as string | undefined
          }
        })
      );
      return;
    }
  }
  res.json(serializeUsuario(item, { access: "member" }));
});

usuarios.get("/api/perfil", requireUser, async (req, res) => {
  try {
    const userReq = (req as { user?: { _id?: unknown; id?: unknown; role?: string } }).user;
    const rawId = userReq?._id ?? userReq?.id;
    const userId = rawId ? (typeof rawId === "string" ? rawId : String(rawId)) : null;
    if (!userId) return res.status(401).json({ error: "not authenticated" });

    // Prefer the doc already fetched by requireUser middleware to avoid a redundant DB query
    const userDoc = (res.locals.userDoc as Record<string, unknown> | null)
      ?? await prisma.usuario.findFirst({ where: { id: userId, isDeleted: { not: true } } });
    if (!userDoc) return res.status(404).json({ error: "not found" });

    const progresoItems = await prisma.progresoModulo.findMany({
      where: { usuarioId: userId, status: "completado" },
      select: { moduloId: true }
    });
    const moduloIds = progresoItems.map((p) => p.moduloId as string).filter(Boolean);
    let modulosCompletados = { publicos: 0, privados: 0, total: 0 };
    if (moduloIds.length > 0) {
      const modulos = await prisma.modulo.findMany({
        where: { id: { in: moduloIds } },
        select: { id: true, visibility: true }
      });
      const visMap = new Map(modulos.map((m) => [m.id as string, (m.visibility ?? "privado") as string]));
      let pub = 0; let priv = 0;
      for (const id of moduloIds) {
        if (visMap.get(id) === "publico") pub++; else priv++;
      }
      modulosCompletados = { publicos: pub, privados: priv, total: moduloIds.length };
    }

    let hijos: Array<{ id: string; nombre: string; usuario: string }> = [];
    if (userDoc.role === "PARENT") {
      const vinculos = await prisma.progresoModuloVinculo.findMany({
        where: { parentId: userId, estado: "aprobado" },
        select: { childId: true }
      });
      const childIds = vinculos.map((v) => v.childId as string).filter(Boolean);
      if (childIds.length > 0) {
        const childDocs = await prisma.usuario.findMany({
          where: { id: { in: childIds } },
          select: { id: true, fullName: true, username: true }
        });
        hijos = childDocs.map((c) => ({
          id: (c.id?.toString?.() ?? "") as string,
          nombre: (c.fullName ?? c.username ?? "Sin nombre") as string,
          usuario: (c.username ?? "") as string
        }));
      }
    }

    res.json({
      id: (userDoc as any).id?.toString?.() ?? userId,
      username: (userDoc.username ?? "") as string,
      email: (userDoc.email ?? "") as string,
      fullName: (userDoc.fullName ?? userDoc.username ?? "Sin nombre") as string,
      role: (userDoc.role ?? "USER") as string,
      escuelaId: userDoc.escuelaId ? String(userDoc.escuelaId) : null,
      createdAt: userDoc.createdAt ? new Date(userDoc.createdAt as string).toISOString() : null,
      isBanned: userDoc.isBanned === true,
      warningCount: typeof userDoc.warningCount === "number" ? userDoc.warningCount : 0,
      modulosCompletados,
      hijos
    });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});
