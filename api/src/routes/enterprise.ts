import { Router } from "express";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";
import { normalizeSchoolId, requireUser } from "../lib/user-auth";

export const enterprise = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

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
