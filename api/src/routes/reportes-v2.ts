import type { Prisma } from "@prisma/client";
import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { whereSoloAlumnosReales } from "../lib/inscripcion-prueba";
import { getResumenAsistenciaAula } from "./asistencia";

export const reportesV2 = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

const getUserFromReq = (req: { user?: { role?: string; roles?: string[] } }) => req.user ?? null;

// ── GET /api/v2/reportes/boletin/:aulaId ────────────────────
// Boletín de calificaciones por aula — para profesor y directivo
reportesV2.get(
  "/api/v2/reportes/boletin/:aulaId",
  requireUser,
  async (req, res) => {
    const aulaId = req.params.aulaId as string;
    if (!aulaId) return res.status(400).json({ error: "aulaId requerido" });

    try {
      // Obtener alumnos del aula
      const aula = await prisma.clase.findFirst({
        where: { id: aulaId, isDeleted: { not: true } },
        select: { id: true, name: true }
      });
      if (!aula) return res.status(404).json({ error: "aula no encontrada" });

      // Fetch classroom members with student role.
      // FASE 4 — el espejo-alumno no aparece en el boletín del aula.
      // PLAN-A §4 — `rolEnClase` real es "STUDENT" (nunca se escribe
      // "USER" en ClaseMiembro); con "USER" el boletín siempre venía vacío.
      const miembros = await prisma.claseMiembro.findMany({
        where: { claseId: aulaId, rolEnClase: "STUDENT", ...whereSoloAlumnosReales() }
      });
      const alumnoIds = miembros.map((m) => m.usuarioId).filter(Boolean) as string[];

      if (!alumnoIds.length) {
        return res.json({ aulaId, aulaNombre: aula.name, alumnos: [] });
      }

      // Obtener nombres de alumnos
      const usuarios = await prisma.usuario.findMany({
        where: { id: { in: alumnoIds }, isDeleted: { not: true } },
        select: { id: true, fullName: true, username: true }
      });

      const usuarioMap = new Map(
        usuarios.map((u) => [
          u.id,
          { nombre: String(u.fullName ?? u.username ?? "Alumno"), username: String(u.username ?? "") }
        ])
      );

      // Obtener quiz-attempts formales del aula
      const attempts = await prisma.quizAttempt.findMany({
        where: {
          userId: { in: alumnoIds },
          status: { in: ["completed", "submitted"] }
        }
      });

      // Obtener módulos para materia
      const moduleIds = [...new Set(
        attempts.map((a) => String(a.quizId ?? "")).filter(Boolean)
      )];
      const modules = moduleIds.length
        ? await prisma.modulo.findMany({
            where: { id: { in: moduleIds } },
            select: { id: true, titulo: true }
          })
        : [];
      const moduleMap = new Map(
        modules.map((m) => [m.id, m])
      );

      // Agrupar por alumno
      const byAlumno = new Map<string, typeof attempts>();
      for (const attempt of attempts) {
        const uid = String(attempt.userId ?? "");
        if (!byAlumno.has(uid)) byAlumno.set(uid, []);
        byAlumno.get(uid)!.push(attempt);
      }

      // PLAN-A §3 — integrar el resumen de asistencia al boletín (fase 4
      // del plan: "exponer asistencia en reportes").
      const resumenAsistencia = await getResumenAsistenciaAula(aulaId);
      const asistenciaPorAlumno = new Map(resumenAsistencia.map((r) => [r.alumnoId, r]));

      const alumnos = alumnoIds.map((alumnoId) => {
        const info = usuarioMap.get(alumnoId) ?? { nombre: alumnoId, username: "" };
        const misAttempts = byAlumno.get(alumnoId) ?? [];

        // Agrupar por materia — using modulo titulo as category
        const porMateria = new Map<string, number[]>();
        for (const attempt of misAttempts) {
          const mod = moduleMap.get(String(attempt.quizId ?? ""));
          const materia = String(mod?.titulo ?? "General");
          if (typeof attempt.score === "number") {
            if (!porMateria.has(materia)) porMateria.set(materia, []);
            porMateria.get(materia)!.push(attempt.score);
          }
        }

        const materias = Array.from(porMateria.entries()).map(([materia, scores]) => ({
          materia,
          promedio: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
          evaluaciones: scores.length,
        }));

        const promedioGeneral = materias.length
          ? Math.round(materias.reduce((acc, m) => acc + m.promedio, 0) / materias.length)
          : null;

        return {
          alumnoId,
          nombre: info.nombre,
          username: info.username,
          promedioGeneral,
          materias,
          totalEvaluaciones: misAttempts.length,
          asistencia: asistenciaPorAlumno.get(alumnoId) ?? {
            presentes: 0,
            ausentes: 0,
            tarde: 0,
            justificados: 0,
            total: 0,
          },
        };
      });

      return res.json({
        aulaId,
        aulaNombre: String(aula.name ?? ""),
        generadoEn: new Date().toISOString(),
        alumnos,
      });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);

// ── GET /api/v2/reportes/asistencia/:aulaId ─────────────────
// Reporte de actividades del aula — para profesor y directivo
reportesV2.get(
  "/api/v2/reportes/asistencia/:aulaId",
  requireUser,
  async (req, res) => {
    const aulaId = req.params.aulaId as string;
    if (!aulaId) return res.status(400).json({ error: "aulaId requerido" });

    const actividades = await prisma.actividadAula.findMany({
      where: { aulaId, isDeleted: false },
      orderBy: { fecha: "desc" },
      take: 50,
      select: { id: true, tipo: true, titulo: true, descripcion: true, fecha: true },
    });

    const clases = actividades.filter((a) => a.tipo === "clase");
    const evaluaciones = actividades.filter((a) => a.tipo === "evaluacion");
    const eventos = actividades.filter((a) => a.tipo === "evento");

    return res.json({
      aulaId,
      generadoEn: new Date().toISOString(),
      resumen: {
        totalClases: clases.length,
        totalEvaluaciones: evaluaciones.length,
        totalEventos: eventos.length,
      },
      actividades: actividades.map((a) => ({
        id: a.id,
        tipo: a.tipo,
        titulo: a.titulo,
        descripcion: a.descripcion ?? undefined,
        fecha: a.fecha,
        fechaFormateada: new Date(a.fecha).toLocaleDateString("es-AR", {
          weekday: "long", day: "numeric", month: "long", year: "numeric"
        }),
      })),
    });
  }
);

// ── GET /api/v2/reportes/progreso/:aulaId ───────────────────
// Métricas de progreso por módulo — para directivo y padres
reportesV2.get(
  "/api/v2/reportes/progreso/:aulaId",
  requireUser,
  async (req, res) => {
    const aulaId = req.params.aulaId as string;
    if (!aulaId) return res.status(400).json({ error: "aulaId requerido" });

    try {
      const claseModulos = await prisma.claseModulo.findMany({
        where: { claseId: aulaId },
        select: { moduloId: true },
      });
      const moduloIds = claseModulos.map((m) => m.moduloId);
      if (!moduloIds.length) {
        return res.json({ aulaId, modulos: [], generadoEn: new Date().toISOString() });
      }

      // Datos de módulos
      const modulos = await prisma.modulo.findMany({
        where: { id: { in: moduloIds } },
        select: { id: true, titulo: true, descripcion: true }
      });

      // Progreso de todos los alumnos
      const progreso = await prisma.progresoModulo.findMany({
        where: { moduloId: { in: moduloIds } }
      });

      const moduloMap = new Map(modulos.map((m) => [m.id, m]));

      const porModulo = moduloIds.map((moduloId) => {
        const mod = moduloMap.get(moduloId);
        const items = progreso.filter(
          (p) => p.moduloId === moduloId
        );
        const completados = items.filter((p) => p.status === "completado").length;
        const enProgreso = items.filter(
          (p) => p.status === "en_progreso" || p.status === "iniciado"
        ).length;
        const total = items.length;
        return {
          moduloId,
          titulo: String(mod?.titulo ?? moduloId),
          materia: "General",
          completados,
          enProgreso,
          sinIniciar: Math.max(0, total - completados - enProgreso),
          total,
          porcentaje: total > 0
            ? Math.round((completados / total) * 100) : 0,
        };
      });

      return res.json({
        aulaId,
        generadoEn: new Date().toISOString(),
        modulos: porModulo,
      });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);

// ── GET /api/v2/reportes/escuela ────────────────────────────
// Métricas globales de la escuela — para directivo
reportesV2.get(
  "/api/v2/reportes/escuela",
  requireUser,
  async (req, res) => {
    const schoolId = getSchoolId(req as never);
    const user = getUserFromReq(req as never);
    if (!schoolId && !hasRole(user, "ADMIN")) {
      return res.status(400).json({ error: "schoolId requerido" });
    }

    try {
      const baseWhere = schoolId
        ? { escuelaId: schoolId, isDeleted: { not: true }, status: "ACTIVE" }
        : { isDeleted: { not: true }, status: "ACTIVE" };

      const [totalAulas, totalUsuarios, aulas] = await Promise.all([
        prisma.clase.count({ where: baseWhere as any }),
        prisma.usuario.count({
          where: {
            ...(schoolId ? { escuelaId: schoolId } : {}),
            isDeleted: { not: true }
          }
        }),
        prisma.clase.findMany({
          where: baseWhere as any,
          select: { id: true, name: true },
          take: 20
        })
      ]);

      const aulaIds = aulas.map((a) => a.id);

      const actividadesCount = aulaIds.length
        ? await prisma.actividadAula.count({
            where: { aulaId: { in: aulaIds }, isDeleted: false },
          })
        : 0;

      // Progreso total using Prisma
      const progresoTotal = await prisma.progresoModulo.count(
        aulaIds.length ? { where: { aulaId: { in: aulaIds } } } : undefined
      );
      const progresoCompletado = await prisma.progresoModulo.count({
        where: {
          ...(aulaIds.length ? { aulaId: { in: aulaIds } } : {}),
          status: "completado"
        }
      });

      return res.json({
        generadoEn: new Date().toISOString(),
        escuela: schoolId ?? "global",
        indicadores: {
          totalAulas,
          totalUsuarios,
          totalActividades: actividadesCount,
          progresoTotal,
          progresoCompletado,
          porcentajeCompletado: progresoTotal > 0
            ? Math.round((progresoCompletado / progresoTotal) * 100) : 0,
        },
      });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);
