import { Router } from "express";
import { requirePolicy } from "../lib/authorization";
import { recordAuditLog } from "../lib/audit-log";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";
import { normalizeSchoolId, requireUser } from "../lib/user-auth";
import { serializeUsuario } from "../lib/user-serializer";
import { UsuarioSchema } from "../schema/usuario";

export const usuarios = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

usuarios.post("/api/usuarios", requireUser, requirePolicy("usuarios/create"), async (req, res) => {
  try {
    const nowIso = new Date().toISOString();
    const parsed = UsuarioSchema.parse({
      ...req.body,
      createdAt: nowIso,
      updatedAt: nowIso
    });
    const requester =
      (res.locals as {
        user?: { _id?: { toString?: () => string }; role?: string; escuelaId?: unknown; schoolId?: string | null };
      }).user ??
      (req as {
        user?: { _id?: { toString?: () => string }; role?: string; escuelaId?: unknown; schoolId?: string | null };
      }).user;
    const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
    const accessLevel = authorization?.data?.accessLevel;
    if (accessLevel !== "admin" && accessLevel !== "school") {
      res.status(403).json({ error: "forbidden" });
      return;
    }
    if (accessLevel !== "admin") {
      const requesterSchoolId =
        typeof requester?.schoolId === "string" ? requester.schoolId : normalizeSchoolId(requester?.escuelaId);
      const targetSchoolId = normalizeSchoolId(parsed.escuelaId);
      if (!requesterSchoolId || !targetSchoolId || requesterSchoolId !== targetSchoolId) {
        res.status(403).json({ error: "forbidden" });
        return;
      }
    }
    const db = await getDb();
    const now = new Date();
    const doc = {
      ...parsed,
      escuelaId: parsed.escuelaId ? toObjectId(parsed.escuelaId) : null,
      birthdate: parsed.birthdate ? new Date(parsed.birthdate) : null,
      consents: parsed.consents
        ? { ...parsed.consents, consentedAt: parsed.consents.consentedAt ? new Date(parsed.consents.consentedAt) : undefined }
        : undefined,
      parentProfile: parsed.parentProfile
        ? {
            ...parsed.parentProfile,
            childrenIds: parsed.parentProfile.childrenIds?.map((id) => toObjectId(id)).filter(Boolean)
          }
        : undefined,
      teacherProfile: parsed.teacherProfile
        ? {
            ...parsed.teacherProfile,
            managedClassIds: parsed.teacherProfile.managedClassIds?.map((id) => toObjectId(id)).filter(Boolean)
          }
        : undefined,
      isDeleted: false,
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("usuarios").insertOne(doc);
    await recordAuditLog({
      actorId: requester?._id?.toString?.() ?? "system",
      action: "usuarios.create",
      targetType: "usuario",
      targetId: result.insertedId.toString(),
      metadata: {
        role: doc.role ?? null,
        escuelaId: doc.escuelaId?.toString?.() ?? null
      }
    });
    res.status(201).json({ id: result.insertedId });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

usuarios.get("/api/usuarios", requireUser, requirePolicy("usuarios/list"), async (req, res) => {
  const user = (req as { user?: { role?: string; schoolId?: string | null; escuelaId?: unknown } }).user;
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const query: Record<string, unknown> = { isDeleted: { $ne: true } };
  const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
  const accessLevel = authorization?.data?.accessLevel;
  if (accessLevel === "admin") {
    // Global access.
  } else if (accessLevel === "school") {
    const schoolId =
      typeof user?.schoolId === "string" ? user.schoolId : normalizeSchoolId(user?.escuelaId);
    if (!schoolId) {
      res.status(403).json({ error: "forbidden" });
      return;
    }
    const escuelaObjectId = toObjectId(schoolId);
    query.escuelaId = escuelaObjectId ?? schoolId;
  } else {
    res.status(403).json({ error: "forbidden" });
    return;
  }
  const cursor = db
    .collection("usuarios")
    .find(query)
    .project({ _id: 1, username: 1, role: 1, escuelaId: 1 })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ createdAt: -1 });
  const items = (await cursor.toArray()).map((item) => ({
    id: item._id,
    username: item.username,
    role: item.role,
    escuelaId: item.escuelaId
  }));
  res.json({ items, limit, offset });
});

usuarios.get("/api/usuarios/:id", requireUser, requirePolicy("usuarios/read"), async (req, res) => {
  const db = await getDb();
  const objectId = toObjectId(req.params.id);
  if (!objectId) return res.status(400).json({ error: "invalid id" });
  const requester =
    (res.locals as { user?: { _id?: { toString?: () => string }; role?: string; teacherProfile?: unknown } }).user ??
    (req as { user?: { _id?: { toString?: () => string }; role?: string; teacherProfile?: unknown } }).user;
  const requesterId = requester?._id?.toString?.() ?? null;
  if (!requesterId) return res.status(403).json({ error: "forbidden" });
  const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
  const accessLevel = authorization?.data?.accessLevel;
  const item = await db.collection("usuarios").findOne(
    { _id: objectId, isDeleted: { $ne: true } },
    {
      projection: {
        username: 1,
        email: 1,
        fullName: 1,
        role: 1,
        escuelaId: 1,
        teacherProfile: 1
      }
    }
  );
  if (!item) return res.status(404).json({ error: "not found" });
  if (accessLevel === "admin") {
    res.json(serializeUsuario(item, { access: "admin" }));
    return;
  }
  const managedClassIds = (requester as { teacherProfile?: { managedClassIds?: unknown[] } })?.teacherProfile
    ?.managedClassIds ?? [];
  const adminClassCriteria: Array<Record<string, unknown>> = [{ adminIds: requesterId }];
  if (managedClassIds.length) adminClassCriteria.push({ _id: { $in: managedClassIds } });
  const memberUserIds = [objectId, objectId.toString()];
  const classAccess = await db.collection("clases").findOne(
    {
      $and: [
        { $or: adminClassCriteria },
        {
          members: {
            $elemMatch: {
              userId: { $in: memberUserIds },
              roleInClass: { $in: ["TEACHER", "STUDENT"] }
            }
          }
        }
      ]
    },
    { projection: { _id: 1 } }
  );
  if (classAccess) {
    res.json(serializeUsuario(item, { access: "member" }));
    return;
  }
  const hasPublicTeacherModules =
    item.teacherProfile?.modules?.some((module: { isPublic?: boolean }) => module.isPublic === true) ?? false;
  if (!item.escuelaId && hasPublicTeacherModules) {
    res.json(serializeUsuario(item, { access: "public" }));
    return;
  }
  const targetMemberships = await db
    .collection("membresias_escuela")
    .find({ usuarioId: objectId, estado: { $ne: "revocada" } })
    .project({ escuelaId: 1 })
    .toArray();
  const targetEscuelaIds = targetMemberships.map((membership) => membership.escuelaId).filter(Boolean);
  if (!targetEscuelaIds.length) return res.status(403).json({ error: "forbidden" });
  const targetEscuelaIdSet = new Set(targetEscuelaIds.map((escuelaId) => escuelaId.toString()));
  const escuelaIdParam = req.query.escuelaId;
  const escuelaId = typeof escuelaIdParam === "string" ? toObjectId(escuelaIdParam) : null;
  if (escuelaId && !targetEscuelaIdSet.has(escuelaId.toString())) return res.status(403).json({ error: "forbidden" });
  const requesterMembership = await db.collection("membresias_escuela").findOne({
    usuarioId: requesterId,
    escuelaId: escuelaId ? escuelaId : { $in: targetEscuelaIds },
    estado: { $ne: "revocada" }
  });
  if (!requesterMembership) return res.status(403).json({ error: "forbidden" });
  if (escuelaId) {
    const membresia = await db.collection("membresias_escuela").findOne({
      usuarioId: objectId,
      escuelaId,
      estado: { $ne: "revocada" }
    });
    if (membresia) {
      res.json(
        serializeUsuario(item, {
          access: "member",
          membership: {
            rolEscuela: membresia.rol,
            estadoMembresia: membresia.estado,
            fechaAltaMembresia: membresia.fechaAlta,
            escuelaId: membresia.escuelaId
          }
        })
      );
      return;
    }
  }
  res.json(serializeUsuario(item, { access: "member" }));
});
