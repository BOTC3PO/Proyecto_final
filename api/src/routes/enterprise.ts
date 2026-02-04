import express, { Router } from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { toObjectId } from "../lib/ids";
import { normalizeSchoolId, requireUser } from "../lib/user-auth";
import { ClassroomSchema } from "../schema/aula";

export const enterprise = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const resolveSchoolId = (req: { user?: { schoolId?: string | null } }, res: any) => {
  const schoolId = typeof req.user?.schoolId === "string" ? req.user.schoolId : null;
  if (!schoolId) {
    res.status(403).json({ error: "School not assigned" });
    return null;
  }
  return schoolId;
};

const buildSchoolFilters = (schoolId: string) => {
  const escuelaObjectId = toObjectId(schoolId);
  const escuelaFilter = escuelaObjectId ? { escuelaId: escuelaObjectId } : { escuelaId: schoolId };
  return { escuelaFilter, escuelaObjectId };
};

enterprise.get("/api/enterprise/miembros", requireUser, async (req, res) => {
  const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
  if (!schoolId) return;
  const db = await getDb();
  const { escuelaFilter } = buildSchoolFilters(schoolId);
  const items = await db
    .collection("usuarios")
    .find({
      ...escuelaFilter,
      role: { $in: ["ADMIN", "TEACHER"] },
      isDeleted: { $ne: true }
    })
    .project({ fullName: 1, role: 1, escuelaId: 1, username: 1 })
    .toArray();
  const staff = items.map((item) => ({
    id: item._id?.toString?.() ?? "",
    name: item.fullName ?? item.username ?? "Sin nombre",
    role: item.role,
    schoolId: normalizeSchoolId(item.escuelaId) ?? schoolId
  }));
  res.json(staff);
});

enterprise.get("/api/enterprise/dashboard", requireUser, async (req, res) => {
  const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
  if (!schoolId) return;
  const db = await getDb();
  const { escuelaFilter } = buildSchoolFilters(schoolId);
  const staffCount = await db.collection("usuarios").countDocuments({
    ...escuelaFilter,
    role: { $in: ["ADMIN", "TEACHER"] },
    isDeleted: { $ne: true }
  });
  const activeClassroomCount = await db
    .collection("aulas")
    .countDocuments({ institutionId: schoolId, status: "activa" });
  const moduleCount = await db
    .collection("modulos")
    .countDocuments({ visibility: "escuela", schoolId });

  const indicadores = [
    { id: "staff", label: "Equipo escolar", value: staffCount.toString() },
    { id: "aulas", label: "Aulas activas", value: activeClassroomCount.toString() },
    { id: "modulos", label: "Módulos escolares", value: moduleCount.toString() }
  ];

  const acciones: string[] = [];
  if (activeClassroomCount === 0) acciones.push("Crear la primera aula de tu institución.");
  if (moduleCount === 0) acciones.push("Publicar módulos para compartir con docentes.");
  if (staffCount === 0) acciones.push("Invitar docentes y administradores a la escuela.");
  if (acciones.length === 0) {
    acciones.push(
      "Revisar el avance semanal del equipo.",
      "Coordinar nuevas capacitaciones con los docentes."
    );
  }

  res.json({ indicadores, acciones });
});

enterprise.get("/api/enterprise/modulos", requireUser, async (req, res) => {
  const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
  if (!schoolId) return;
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const cursor = db
    .collection("modulos")
    .find({ visibility: "escuela", schoolId })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

enterprise.get("/api/enterprise/aulas", requireUser, async (req, res) => {
  const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
  if (!schoolId) return;
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const cursor = db
    .collection("aulas")
    .find({ institutionId: schoolId })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

enterprise.post("/api/enterprise/aulas", requireUser, ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const payloadSchoolId = req.body?.schoolId;
    if (payloadSchoolId && typeof payloadSchoolId === "string" && payloadSchoolId !== schoolId) {
      res.status(403).json({ error: "schoolId mismatch" });
      return;
    }
    if (payloadSchoolId && typeof payloadSchoolId !== "string") {
      res.status(400).json({ error: "invalid schoolId" });
      return;
    }
    const rawTeacherIds: unknown[] = Array.isArray(req.body?.teacherIds)
      ? req.body.teacherIds
      : req.body?.teacherId
        ? [req.body.teacherId]
        : [];
    const teacherIds: string[] = rawTeacherIds
      .filter((value: unknown): value is string => typeof value === "string")
      .map((value) => value.trim())
      .filter((value) => value !== "");
    if (teacherIds.length < 1) {
      res.status(400).json({ error: "teacherId is required" });
      return;
    }
    const adminId = typeof req.body?.adminId === "string" && req.body.adminId.trim()
      ? req.body.adminId.trim()
      : typeof req.body?.createdBy === "string" && req.body.createdBy.trim()
        ? req.body.createdBy.trim()
        : null;
    if (!adminId) {
      res.status(400).json({ error: "adminId is required" });
      return;
    }
    const uniqueTeacherIds = Array.from(new Set(teacherIds));
    const adminObjectId = toObjectId(adminId);
    if (!adminObjectId) {
      res.status(400).json({ error: "invalid adminId" });
      return;
    }
    const isObjectId = (value: ReturnType<typeof toObjectId>): value is ObjectId => value !== null;
    const teacherObjectIds = uniqueTeacherIds.map((id) => toObjectId(id)).filter(isObjectId);
    if (teacherObjectIds.length !== uniqueTeacherIds.length) {
      res.status(400).json({ error: "invalid teacherId" });
      return;
    }
    const db = await getDb();
    const lookupIds = [adminObjectId, ...teacherObjectIds];
    const users = await db
      .collection("usuarios")
      .find({ _id: { $in: lookupIds }, isDeleted: { $ne: true } })
      .project({ role: 1, escuelaId: 1 })
      .toArray();
    const usersById = new Map(users.map((user) => [user._id?.toString?.() ?? "", user]));
    const adminUser = usersById.get(adminObjectId.toString());
    if (!adminUser) {
      res.status(400).json({ error: "admin not found" });
      return;
    }
    const adminRole = adminUser.role;
    if (adminRole !== "DIRECTIVO" && adminRole !== "TEACHER" && adminRole !== "ADMIN") {
      res.status(400).json({ error: "admin role invalid" });
      return;
    }
    const adminSchoolId = normalizeSchoolId(adminUser.escuelaId);
    if (adminSchoolId !== schoolId) {
      res.status(403).json({ error: "admin school mismatch" });
      return;
    }
    for (const teacherId of uniqueTeacherIds) {
      const teacherUser = usersById.get(teacherId);
      if (!teacherUser) {
        res.status(400).json({ error: "teacher not found" });
        return;
      }
      if (teacherUser.role !== "TEACHER") {
        res.status(400).json({ error: "teacher role invalid" });
        return;
      }
      const teacherSchoolId = normalizeSchoolId(teacherUser.escuelaId);
      if (teacherSchoolId !== schoolId) {
        res.status(403).json({ error: "teacher school mismatch" });
        return;
      }
    }
    const now = new Date().toISOString();
    const members = [
      { userId: adminId, roleInClass: "ADMIN", schoolId },
      ...uniqueTeacherIds.map((teacherId) => ({ userId: teacherId, roleInClass: "TEACHER", schoolId }))
    ];
    const payload = {
      ...req.body,
      schoolId,
      institutionId: schoolId,
      createdBy: adminId,
      members,
      status: req.body?.status ?? "activa",
      createdAt: req.body?.createdAt ?? now,
      updatedAt: req.body?.updatedAt ?? now
    };
    const parsed = ClassroomSchema.parse(payload);
    const result = await db.collection("aulas").insertOne(parsed);
    res.status(201).json({ id: result.insertedId, classroomId: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

enterprise.get("/api/enterprise/mensajes", requireUser, async (req, res) => {
  const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
  if (!schoolId) return;
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const cursor = db
    .collection("mensajes_reportados")
    .find({ schoolId })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ createdAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

enterprise.get("/api/enterprise/contratos", requireUser, async (req, res) => {
  const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
  if (!schoolId) return;
  const db = await getDb();
  const items = await db.collection("enterprise_contratos").find({ schoolId }).toArray();
  res.json(items);
});

enterprise.get("/api/enterprise/reportes", requireUser, async (req, res) => {
  const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
  if (!schoolId) return;
  const db = await getDb();
  const items = await db.collection("enterprise_reportes").find({ schoolId }).toArray();
  res.json(items);
});
