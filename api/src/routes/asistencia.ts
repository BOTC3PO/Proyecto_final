import { randomUUID } from "node:crypto";
import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { requireClassroomScope } from "../lib/classroom-scope";
import { isClassroomActiveStatus, normalizeClassroomStatus } from "../schema/aula";
import { whereSoloAlumnosReales } from "../lib/inscripcion-prueba";
import { FechaAsistenciaSchema, PlanillaAsistenciaUpsertSchema } from "../schema/asistencia";

export const asistencia = Router();

const todayIso = () => new Date().toISOString().slice(0, 10);

const getRequesterId = (req: { user?: { id?: string; _id?: { toString?: () => string } | string } }) => {
  const user = req.user;
  if (typeof user?.id === "string") return user.id;
  if (typeof user?._id === "string") return user._id;
  if (user?._id && typeof (user._id as { toString?: () => string }).toString === "function") {
    return (user._id as { toString: () => string }).toString();
  }
  return null;
};

// PLAN-A §3 — planilla de un aula: los miembros STUDENT (excluyendo
// espejos-alumno, no son "alumnos facturables"/reales del aula) con su
// registro de Asistencia de la fecha pedida, si existe.
asistencia.get(
  "/api/aulas/:id/asistencia",
  requireUser,
  requireClassroomScope({
    allowMemberRoles: ["ADMIN", "TEACHER"],
    allowSchoolMatch: true,
    notFoundMessage: "aula no encontrada"
  }),
  async (req, res) => {
    const fechaRaw = typeof req.query.fecha === "string" ? req.query.fecha : todayIso();
    const parsedFecha = FechaAsistenciaSchema.safeParse(fechaRaw);
    if (!parsedFecha.success) {
      res.status(400).json({ error: "fecha inválida (formato YYYY-MM-DD)" });
      return;
    }
    const fecha = parsedFecha.data;
    const aulaId = req.params.id as string;

    const miembros = await prisma.claseMiembro.findMany({
      where: { claseId: aulaId, rolEnClase: "STUDENT", ...whereSoloAlumnosReales() },
      select: { usuarioId: true }
    });
    const alumnoIds = miembros.map((m) => m.usuarioId).filter(Boolean);
    if (alumnoIds.length === 0) {
      res.json({ aulaId, fecha, alumnos: [] });
      return;
    }

    const [usuarios, registros] = await Promise.all([
      prisma.usuario.findMany({
        where: { id: { in: alumnoIds } },
        select: { id: true, fullName: true, username: true }
      }),
      prisma.asistencia.findMany({
        where: { claseId: aulaId, fecha, alumnoId: { in: alumnoIds } }
      })
    ]);
    const nombrePorId = new Map(usuarios.map((u) => [u.id, u.fullName || u.username || u.id]));
    const registroPorAlumno = new Map(registros.map((r) => [r.alumnoId, r]));

    const alumnos = alumnoIds.map((alumnoId) => {
      const registro = registroPorAlumno.get(alumnoId);
      return {
        alumnoId,
        nombre: nombrePorId.get(alumnoId) ?? alumnoId,
        estado: registro?.estado ?? null,
        notas: registro?.notas ?? null
      };
    });

    res.json({ aulaId, fecha, alumnos });
  }
);

// PLAN-A §3 — upsert masivo de la planilla de un día. Idempotente: se
// puede reenviar la misma planilla (ej. el docente corrige un estado)
// sin duplicar filas — clave (claseId, alumnoId, fecha).
asistencia.put(
  "/api/aulas/:id/asistencia/:fecha",
  requireUser,
  requireClassroomScope({
    allowMemberRoles: ["ADMIN", "TEACHER"],
    allowSchoolMatch: true,
    notFoundMessage: "aula no encontrada"
  }),
  async (req, res) => {
    const parsedFecha = FechaAsistenciaSchema.safeParse(req.params.fecha);
    if (!parsedFecha.success) {
      res.status(400).json({ error: "fecha inválida (formato YYYY-MM-DD)" });
      return;
    }
    const parsedBody = PlanillaAsistenciaUpsertSchema.safeParse(req.body);
    if (!parsedBody.success) {
      res.status(400).json({ error: "payload inválido", issues: parsedBody.error.issues });
      return;
    }
    const fecha = parsedFecha.data;
    const aulaId = req.params.id as string;
    const classroom = res.locals.classroom as { status?: unknown } | undefined;
    // Mismo criterio que publicaciones/aulas (PLAN-A §2): status
    // ausente (legacy) ⇒ ACTIVE, no un 409 sin contexto.
    const currentStatus = normalizeClassroomStatus(classroom?.status) ?? "ACTIVE";
    if (!isClassroomActiveStatus(currentStatus)) {
      res.status(403).json({
        error: "classroom is read-only",
        detail: `El aula tiene estado ${currentStatus}; no se puede registrar asistencia.`
      });
      return;
    }

    // Defensa: sólo se puede marcar asistencia de alumnos que
    // realmente son miembros STUDENT de esta aula (no cualquier id
    // que el cliente mande).
    const miembros = await prisma.claseMiembro.findMany({
      where: { claseId: aulaId, rolEnClase: "STUDENT", ...whereSoloAlumnosReales() },
      select: { usuarioId: true }
    });
    const alumnoIdsValidos = new Set(miembros.map((m) => m.usuarioId));
    const invalido = parsedBody.data.registros.find((r) => !alumnoIdsValidos.has(r.alumnoId));
    if (invalido) {
      res.status(400).json({
        error: `el alumno ${invalido.alumnoId} no pertenece a esta aula`
      });
      return;
    }

    const requesterId = getRequesterId(req as never) ?? "unknown";
    const now = new Date().toISOString();

    for (const registro of parsedBody.data.registros) {
      const existing = await prisma.asistencia.findFirst({
        where: { claseId: aulaId, alumnoId: registro.alumnoId, fecha }
      });
      const eraAusente = existing?.estado === "ausente";
      if (existing) {
        await prisma.asistencia.update({
          where: { id: existing.id },
          data: {
            estado: registro.estado,
            notas: registro.notas ?? null,
            registradoPor: requesterId,
            updatedAt: now
          }
        });
      } else {
        await prisma.asistencia.create({
          data: {
            id: randomUUID(),
            claseId: aulaId,
            alumnoId: registro.alumnoId,
            fecha,
            estado: registro.estado,
            notas: registro.notas ?? null,
            registradoPor: requesterId,
            createdAt: now,
            updatedAt: now
          }
        });
      }
      // PLAN-A §3.4 — evento para reportes del padre cuando una
      // inasistencia se registra (o se corrige *a* "ausente"); no
      // duplicar si ya estaba marcada ausente y se reenvía la misma
      // planilla (idempotencia, mismo criterio que el upsert de arriba).
      if (registro.estado === "ausente" && !eraAusente) {
        await prisma.eventoReportePadre.create({
          data: {
            json: JSON.stringify({
              tipo: "inasistencia",
              claseId: aulaId,
              alumnoId: registro.alumnoId,
              fecha,
              registradoPor: requesterId
            }),
            createdAt: now
          }
        });
      }
    }

    res.json({ ok: true, aulaId, fecha, count: parsedBody.data.registros.length });
  }
);

// PLAN-A §3 — resumen de asistencia por alumno, para reportes
// (reportes-v2.ts). Sólo TEACHER del aula o DIRECTIVO/ADMIN de la
// escuela (mismo criterio que el resto de este archivo).
export async function getResumenAsistenciaAula(
  aulaId: string
): Promise<Array<{ alumnoId: string; presentes: number; ausentes: number; tarde: number; justificados: number; total: number }>> {
  const registros = await prisma.asistencia.findMany({ where: { claseId: aulaId } });
  const porAlumno = new Map<string, { presentes: number; ausentes: number; tarde: number; justificados: number; total: number }>();
  for (const r of registros) {
    const acc = porAlumno.get(r.alumnoId) ?? { presentes: 0, ausentes: 0, tarde: 0, justificados: 0, total: 0 };
    acc.total += 1;
    if (r.estado === "presente") acc.presentes += 1;
    else if (r.estado === "ausente") acc.ausentes += 1;
    else if (r.estado === "tarde") acc.tarde += 1;
    else if (r.estado === "justificado") acc.justificados += 1;
    porAlumno.set(r.alumnoId, acc);
  }
  return Array.from(porAlumno.entries()).map(([alumnoId, acc]) => ({ alumnoId, ...acc }));
}
