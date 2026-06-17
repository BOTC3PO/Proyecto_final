import { Router } from "express";
import { requirePolicy } from "../lib/authorization";
import { requireClassroomScope } from "../lib/classroom-scope";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { isClassroomReadOnlyStatus } from "../schema/aula";

export const aulaFeed = Router();

const getRequesterId = (req: { user?: { _id?: { toString?: () => string } } }) =>
  req.user?._id?.toString?.() ?? null;

type ClassroomContext =
  | { success: false; error: { status: number; message: string } }
  | { success: true; classroomId: string };

/**
 * FIX-TABLON-403 — la policy de acceso al feed reimplementaba la
 * autorización leyendo `classroom.schoolId ?? classroom.institutionId`
 * (campos legacy del Zod schema de Mongo) cuando el modelo Prisma
 * expone `escuelaId`. Resultado: para un TEACHER-miembro del aula,
 * `canAccessClassroom` veía `classroomSchoolId = undefined`,
 * `classroomMembers = []` (porque tampoco se hacía `include` de
 * `miembros`), y caía en `return false` → 403 "forbidden" para
 * `/api/aula/leaderboard` y `/api/aula/actividades` (los dos widgets
 * que rompía el bug 2.3 del informe `test-parte-3-profesor.md`).
 *
 * La policy canónica vive en `requireClassroomScope`
 * (`api/src/lib/classroom-scope.ts`), que ya carga los `miembros`,
 * valida dueño/miembro/school-match, y deja `res.locals.classroom`
 * con la forma `{ id, members, schoolId: escuelaId, createdBy,
 * teacherId, teacherOfRecord, isDeleted }`. Reusamos ese middleware
 * para no reimplementar la matriz de acceso ad-hoc.
 */
const resolveClassroomContext = async (
  req: { query: { classroomId?: unknown } }
): Promise<ClassroomContext> => {
  const classroomId = typeof req.query.classroomId === "string" ? req.query.classroomId : null;
  // FIX-AULA-PARAM — 400 en vez de 404 cuando falta `classroomId`. Un 404
  // hace pensar que la ruta no existe y despista el diagnóstico (ver
  // `docs/qa/diagnostico_aula_feed.md`). El 404 sí corresponde a la
  // línea siguiente, donde el id viene pero el aula no se encuentra.
  if (!classroomId) return { success: false, error: { status: 400, message: "classroomId requerido" } };
  const classroom = await prisma.clase.findFirst({
    where: { id: classroomId, isDeleted: { not: true } }
  });
  if (!classroom) return { success: false, error: { status: 404, message: "classroom not found" } };
  if (isClassroomReadOnlyStatus(classroom.status)) {
    return { success: false, error: { status: 410, message: "classroom feed not available" } };
  }
  return { success: true, classroomId };
};

aulaFeed.get(
  "/api/aula/publicaciones",
  requireUser,
  requireClassroomScope({
    paramName: "classroomId",
    paramSource: "query",
    badRequestMessage: "classroomId requerido",
    allowMemberRoles: "any",
    allowSchoolMatch: true,
    notFoundMessage: "classroom not found"
  }),
  async (req, res) => {
    const context = await resolveClassroomContext(req);
    if (!context.success) {
      return res.status(context.error.status).json({ error: context.error.message });
    }
    const items = await prisma.publicacion.findMany({
      where: { aulaId: context.classroomId, isDeleted: { not: true } },
      orderBy: { publishedAt: "desc" }
    });
    res.json({ items });
  }
);

aulaFeed.get(
  "/api/aula/leaderboard",
  requireUser,
  requireClassroomScope({
    paramName: "classroomId",
    paramSource: "query",
    badRequestMessage: "classroomId requerido",
    allowMemberRoles: "any",
    allowSchoolMatch: true,
    notFoundMessage: "classroom not found"
  }),
  async (req, res) => {
    const context = await resolveClassroomContext(req);
    if (!context.success) {
      return res.status(context.error.status).json({ error: context.error.message });
    }
    res.json({ items: [] });
  }
);

aulaFeed.get(
  "/api/aula/actividades",
  requireUser,
  requireClassroomScope({
    paramName: "classroomId",
    paramSource: "query",
    badRequestMessage: "classroomId requerido",
    allowMemberRoles: "any",
    allowSchoolMatch: true,
    notFoundMessage: "classroom not found"
  }),
  async (req, res) => {
    const context = await resolveClassroomContext(req);
    if (!context.success) {
      return res.status(context.error.status).json({ error: context.error.message });
    }

    const hoy = new Date().toISOString();
    const rows = await prisma.actividadAula.findMany({
      where: {
        aulaId: context.classroomId,
        isDeleted: false,
        fecha: { gte: hoy },
      },
      orderBy: { fecha: "asc" },
      take: 10,
      select: { id: true, tipo: true, titulo: true, descripcion: true, fecha: true },
    });

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
  }
);

aulaFeed.post("/api/aula/actividades", requireUser, requirePolicy("aula-feed/write"), async (req, res) => {
  const { classroomId, tipo, titulo, descripcion, fecha } = req.body as Record<string, unknown>;

  if (!classroomId || !tipo || !titulo || !fecha) {
    return res.status(400).json({ error: "classroomId, tipo, titulo y fecha son requeridos" });
  }

  const VALID_TIPOS = new Set(["clase", "evaluacion", "evento"]);
  if (!VALID_TIPOS.has(String(tipo))) {
    return res.status(400).json({ error: "tipo inválido" });
  }

  const id = `act-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const createdBy = getRequesterId(req as never) ?? "unknown";
  const now = new Date().toISOString();

  await prisma.actividadAula.create({
    data: {
      id,
      aulaId: String(classroomId),
      tipo: String(tipo),
      titulo: String(titulo),
      descripcion: descripcion != null ? String(descripcion) : null,
      fecha: String(fecha),
      createdBy,
      createdAt: now,
    },
  });

  res.status(201).json({ id, tipo, titulo, descripcion, fecha });
});

aulaFeed.delete("/api/aula/actividades/:id", requireUser, requirePolicy("aula-feed/write"), async (req, res) => {
  await prisma.actividadAula.updateMany({
    where: { id: String(req.params.id) },
    data: { isDeleted: true },
  });
  res.json({ ok: true });
});
