import { Router } from "express";
import { requirePolicy } from "../lib/authorization";
import { prisma } from "../lib/prisma";
import { openContentDb } from "../lib/db-open";
import { requireUser } from "../lib/user-auth";
import { isClassroomReadOnlyStatus } from "../schema/aula";
import type { Classroom } from "../schema/aula";

export const aulaFeed = Router();

const getRequesterId = (req: { user?: { _id?: { toString?: () => string } } }) =>
  req.user?._id?.toString?.() ?? null;

const getRequesterSchoolId = (req: { user?: { schoolId?: string | null } }) => req.user?.schoolId ?? null;

const canAccessClassroom = ({
  requesterId,
  accessLevel,
  requesterSchoolId,
  classroomSchoolId,
  classroomMembers
}: {
  requesterId: string | null;
  accessLevel: "admin" | "staff" | "learner";
  requesterSchoolId?: string | null;
  classroomSchoolId?: string | null;
  classroomMembers?: Array<{ userId?: string }> | null;
}) => {
  if (accessLevel === "admin") return true;
  const isMember = !!requesterId && (classroomMembers ?? []).some((member) => member.userId === requesterId);
  if (isMember) return true;
  if (accessLevel === "staff") {
    return !!requesterSchoolId && !!classroomSchoolId && requesterSchoolId === classroomSchoolId;
  }
  return false;
};

type ClassroomContext =
  | { success: false; error: { status: number; message: string } }
  | { success: true; classroomId: string; classroom: Classroom };

const resolveClassroomContext = async (
  req: { query: { classroomId?: unknown }; user?: Record<string, unknown> },
  accessLevel: "admin" | "staff" | "learner"
): Promise<ClassroomContext> => {
  const classroomId = typeof req.query.classroomId === "string" ? req.query.classroomId : null;
  if (!classroomId) return { success: false, error: { status: 404, message: "classroom not found" } };
  const classroom = await prisma.clase.findFirst({
    where: { id: classroomId, isDeleted: { not: true } }
  });
  if (!classroom) return { success: false, error: { status: 404, message: "classroom not found" } };
  if (isClassroomReadOnlyStatus((classroom as unknown as Classroom).status)) {
    return { success: false, error: { status: 410, message: "classroom feed not available" } };
  }
  const requesterId = getRequesterId(req as { user?: { _id?: { toString?: () => string } } });
  const requesterSchoolId = getRequesterSchoolId(req as { user?: { schoolId?: string | null } });
  const classroomAsDoc = classroom as unknown as Classroom;
  if (
    !canAccessClassroom({
      requesterId,
      accessLevel,
      requesterSchoolId,
      classroomSchoolId: classroomAsDoc.schoolId ?? classroomAsDoc.institutionId,
      classroomMembers: Array.isArray(classroomAsDoc.members) ? classroomAsDoc.members : []
    })
  ) {
    return { success: false, error: { status: 403, message: "forbidden" } };
  }
  return { success: true, classroomId, classroom: classroomAsDoc };
};

aulaFeed.get("/api/aula/publicaciones", requireUser, requirePolicy("aula-feed/read"), async (req, res) => {
  const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
  const accessLevel = authorization?.data?.accessLevel;
  if (accessLevel !== "admin" && accessLevel !== "staff" && accessLevel !== "learner") {
    return res.status(403).json({ error: "forbidden" });
  }
  const context = await resolveClassroomContext(req, accessLevel);
  if (!context.success) {
    return res.status(context.error.status).json({ error: context.error.message });
  }
  const items = await prisma.publicacion.findMany({
    where: { aulaId: context.classroomId, isDeleted: { not: true } },
    orderBy: { publishedAt: "desc" }
  });
  res.json({ items });
});

aulaFeed.get("/api/aula/leaderboard", requireUser, requirePolicy("aula-feed/read"), async (req, res) => {
  const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
  const accessLevel = authorization?.data?.accessLevel;
  if (accessLevel !== "admin" && accessLevel !== "staff" && accessLevel !== "learner") {
    return res.status(403).json({ error: "forbidden" });
  }
  const context = await resolveClassroomContext(req, accessLevel);
  if (!context.success) {
    return res.status(context.error.status).json({ error: context.error.message });
  }
  res.json({ items: [] });
});

aulaFeed.get("/api/aula/actividades", requireUser, requirePolicy("aula-feed/read"), async (req, res) => {
  const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
  const accessLevel = authorization?.data?.accessLevel;
  if (accessLevel !== "admin" && accessLevel !== "staff" && accessLevel !== "learner") {
    return res.status(403).json({ error: "forbidden" });
  }
  const context = await resolveClassroomContext(req, accessLevel);
  if (!context.success) {
    return res.status(context.error.status).json({ error: context.error.message });
  }

  const db = openContentDb();
  const hoy = new Date().toISOString();
  const rows = db.prepare(`
    SELECT id, tipo, titulo, descripcion, fecha
    FROM actividades_aula
    WHERE aula_id = ? AND is_deleted = 0 AND fecha >= ?
    ORDER BY fecha ASC
    LIMIT 10
  `).all(context.classroomId, hoy) as Array<{ id: string; tipo: string; titulo: string; descripcion: string | null; fecha: string }>;

  res.json({
    items: rows.map((row) => ({
      id: row.id,
      label: row.titulo,
      when: new Date(row.fecha).toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
      tipo: row.tipo,
      descripcion: row.descripcion ?? undefined,
      fecha: row.fecha,
    })),
  });
});

aulaFeed.post("/api/aula/actividades", requireUser, requirePolicy("aula-feed/write"), (req, res) => {
  const { classroomId, tipo, titulo, descripcion, fecha } = req.body as Record<string, unknown>;

  if (!classroomId || !tipo || !titulo || !fecha) {
    return res.status(400).json({ error: "classroomId, tipo, titulo y fecha son requeridos" });
  }

  const VALID_TIPOS = new Set(["clase", "evaluacion", "evento"]);
  if (!VALID_TIPOS.has(String(tipo))) {
    return res.status(400).json({ error: "tipo inválido" });
  }

  const db = openContentDb();
  const id = `act-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const createdBy = getRequesterId(req as never) ?? "unknown";
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO actividades_aula
      (id, aula_id, tipo, titulo, descripcion, fecha, created_by, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id,
    String(classroomId),
    String(tipo),
    String(titulo),
    descripcion != null ? String(descripcion) : null,
    String(fecha),
    createdBy,
    now
  );

  res.status(201).json({ id, tipo, titulo, descripcion, fecha });
});

aulaFeed.delete("/api/aula/actividades/:id", requireUser, requirePolicy("aula-feed/write"), (req, res) => {
  const db = openContentDb();
  db.prepare("UPDATE actividades_aula SET is_deleted = 1 WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});
