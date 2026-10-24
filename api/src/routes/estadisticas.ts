import { Router } from "express";
import { recordAuditLog } from "../lib/audit-log";
import { prisma } from "../lib/prisma";
import { ENTERPRISE_FEATURES, requireEnterpriseFeature } from "../lib/entitlements";
import { requirePolicy } from "../lib/authorization";
import { buildSimplePdf } from "../lib/pdf";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { perteneceAEscuela } from "../lib/pertenece-escuela";
import { whereSoloAlumnosReales } from "../lib/inscripcion-prueba";

export const estadisticas = Router();

type StatsFilters = {
  fechaInicio?: string;
  fechaFin?: string;
  moduloId?: string;
  categoria?: string;
  cohorte?: string;
};

type ProgresoResumenItem = {
  moduloId: string | null;
  completadas: number;
  pendientes: number;
  tiempoPromedioMin: number;
  scorePromedio: number;
  scoreMax: number;
  scoreMin: number;
};

type NotaTemaItem = {
  tema: string | null;
  promedio: number;
};

type ActividadSemanalItem = {
  semana: string | null;
  interacciones: number;
};

type QuizMetricsItem = {
  quizId: string | null;
  intentos: number;
  intentosEntregados: number;
  promedioScore: number;
  promedioMaxScore: number;
};

type ReqUser = { id?: string; role?: string; roles?: string[]; schoolId?: string | null };

/**
 * B10 — quién ve qué. El ADMIN de plataforma ve todo; el resto de los roles de personal, solo lo de la
 * escuela de su sesión. Antes cualquier docente de cualquier escuela leía los agregados de todas, y los
 * endpoints por aula, docente e institución aceptaban cualquier id.
 */
type Alcance = { global: true } | { global: false; escuelaId: string };

const alcanceDe = (user: ReqUser | undefined): Alcance | null => {
  if (hasRole(user, "ADMIN")) return { global: true };
  return user?.schoolId ? { global: false, escuelaId: user.schoolId } : null;
};

// Las columnas de fecha son texto ISO: se compara contra texto, no contra `Date` (Prisma rechaza un
// `Date` contra un `String`). Una fecha sola (`2026-10-12`) en `fechaFin` incluye todo ese día.
const parseFecha = (raw: string | undefined, finDeDia = false): string | undefined | null => {
  if (!raw) return undefined;
  const soloFecha = /^\d{4}-\d{2}-\d{2}$/.test(raw);
  const d = new Date(soloFecha && finDeDia ? `${raw}T23:59:59.999Z` : raw);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
};

const buildDateWhere = (filters: StatsFilters, field: string) => {
  const range: { gte?: string; lte?: string } = {};
  const desde = parseFecha(filters.fechaInicio);
  const hasta = parseFecha(filters.fechaFin, true);
  if (desde) range.gte = desde;
  if (hasta) range.lte = hasta;
  if (Object.keys(range).length === 0) return {};
  return { [field]: range };
};

const filtrosDeQuery = (req: { query: Record<string, unknown> }): StatsFilters | { error: string } => {
  const q = (k: string) => (typeof req.query[k] === "string" ? (req.query[k] as string) : undefined);
  const filters: StatsFilters = {
    fechaInicio: q("fechaInicio"),
    fechaFin: q("fechaFin"),
    moduloId: q("moduloId"),
    categoria: q("categoria"),
    cohorte: q("cohorte")
  };
  if (parseFecha(filters.fechaInicio) === null) return { error: "fechaInicio inválida" };
  if (parseFecha(filters.fechaFin, true) === null) return { error: "fechaFin inválida" };
  return filters;
};

const buildProgresoWhere = async (filters: StatsFilters, alcance: Alcance) => {
  const where: Record<string, unknown> = {
    ...buildDateWhere(filters, "updatedAt")
  };
  if (filters.moduloId) where.moduloId = filters.moduloId;
  if (!alcance.global) {
    const miembros = await prisma.membresia.findMany({
      where: { escuelaId: alcance.escuelaId, estado: "activa" },
      select: { usuarioId: true }
    });
    where.usuarioId = { in: miembros.map((m) => m.usuarioId) };
  }
  return where;
};

const buildProfesorStats = async (filters: StatsFilters, alcance: Alcance) => {
  // Fetch all matching progreso records and aggregate in JavaScript.
  // PLAN-multirol Fase 3 — antes acá se descartaba el progreso de las
  // cuentas espejo. Ya no existen: la persona es una sola cuenta y lo que
  // marca "esto es de prueba" es su inscripción al aula.
  const progresoRecords = await prisma.progresoModulo.findMany({
    where: (await buildProgresoWhere(filters, alcance)) as any
  });

  // Group by moduloId
  const byModulo = new Map<string, {
    scores: number[]; completadas: number; pendientes: number;
  }>();
  for (const p of progresoRecords) {
    const key = p.moduloId ?? "null";
    if (!byModulo.has(key)) byModulo.set(key, { scores: [], completadas: 0, pendientes: 0 });
    const entry = byModulo.get(key)!;
    if (p.status === "completado") entry.completadas += 1;
    else entry.pendientes += 1;
    if (typeof p.score === "number") entry.scores.push(p.score);
  }

  const progresoResumen: ProgresoResumenItem[] = Array.from(byModulo.entries())
    .map(([moduloId, data]) => {
      const avg = data.scores.length
        ? data.scores.reduce((a, b) => a + b, 0) / data.scores.length : 0;
      const max = data.scores.length ? Math.max(...data.scores) : 0;
      const min = data.scores.length ? Math.min(...data.scores) : 0;
      return {
        moduloId: moduloId === "null" ? null : moduloId,
        completadas: data.completadas,
        pendientes: data.pendientes,
        tiempoPromedioMin: 0, // timeSpentMinutes not in Prisma schema
        scorePromedio: avg,
        scoreMax: max,
        scoreMin: min
      };
    })
    .sort((a, b) => b.completadas - a.completadas);

  const totalCompletadas = progresoResumen.reduce((acc, item) => acc + item.completadas, 0);
  const tiempoPromedioMin = 0; // timeSpentMinutes not in Prisma schema

  // entregas, notas_temas, accesos, foros_respuestas, encuestas_respuestas, participacion
  // are not in the Prisma schema — return zero values until those models are added
  const entregas = 0;
  const notasPorTema: NotaTemaItem[] = [];
  const accesos = 0;
  const foros = 0;
  const encuestas = 0;
  const actividadSemanal: ActividadSemanalItem[] = [];

  const notasPorActividad = progresoResumen.map((item) => ({
    actividad: item.moduloId ?? "Sin módulo",
    promedio: Math.round(item.scorePromedio),
    max: Math.round(item.scoreMax),
    min: Math.round(item.scoreMin)
  }));

  return {
    general: {
      completadas: totalCompletadas,
      entregas,
      tiempoPromedioMin,
      progresoPorModulo: progresoResumen.map((item) => ({
        moduloId: item.moduloId ?? "Sin módulo",
        completadas: item.completadas,
        pendientes: item.pendientes
      }))
    },
    rendimiento: {
      notasPorActividad,
      notasPorTema: notasPorTema.map((item) => ({
        tema: item.tema ?? "Sin tema",
        promedio: Math.round(item.promedio)
      }))
    },
    participacion: {
      accesos,
      foros,
      encuestas,
      actividadSemanal: actividadSemanal.map((item) => ({
        semana: item.semana,
        interacciones: item.interacciones
      }))
    }
  };
};

const buildCsv = (data: Awaited<ReturnType<typeof buildProfesorStats>>) => {
  const rows = [
    ["Métrica", "Valor"],
    ["Actividades completadas", data.general.completadas],
    ["Entregas", data.general.entregas],
    ["Tiempo promedio (min)", data.general.tiempoPromedioMin],
    ["Accesos", data.participacion.accesos],
    ["Foros", data.participacion.foros],
    ["Encuestas", data.participacion.encuestas]
  ];
  return rows.map((row) => row.join(",")).join("\n");
};

const buildPdf = (data: Awaited<ReturnType<typeof buildProfesorStats>>) =>
  buildSimplePdf([
    "Reporte de estadísticas",
    "",
    "Resumen general",
    `Actividades completadas: ${data.general.completadas}`,
    `Entregas: ${data.general.entregas}`,
    `Tiempo promedio (min): ${data.general.tiempoPromedioMin}`,
    "",
    "Participación",
    `Accesos: ${data.participacion.accesos}`,
    `Foros: ${data.participacion.foros}`,
    `Encuestas: ${data.participacion.encuestas}`
  ]);

type QuizScope =
  | { kind: "aula"; aulaId: string }
  | { kind: "docente"; docenteId: string; escuelaId: string | null }
  | { kind: "institucion"; institucionId: string };

const buildQuizMetrics = async (filters: StatsFilters, scope: QuizScope) => {
  const where: Record<string, unknown> = { ...buildDateWhere(filters, "startedAt") };

  // El alcance se resuelve en la base: antes se traían los intentos de TODAS las escuelas y se filtraba
  // en JavaScript (y el filtro por aula no filtraba nada).
  if (scope.kind === "aula") {
    const miembros = await prisma.claseMiembro.findMany({
      where: { claseId: scope.aulaId, rolEnClase: "STUDENT", ...whereSoloAlumnosReales() },
      select: { usuarioId: true }
    });
    where.userId = { in: miembros.map((m) => m.usuarioId) };
  } else {
    const modulos = await prisma.modulo.findMany({
      where:
        scope.kind === "institucion"
          ? { schoolId: scope.institucionId }
          : { ownerUserId: scope.docenteId, ...(scope.escuelaId ? { schoolId: scope.escuelaId } : {}) },
      select: { id: true }
    });
    const quizzesDelAlcance = modulos.length
      ? await prisma.quiz.findMany({ where: { moduleId: { in: modulos.map((m) => m.id) } }, select: { id: true } })
      : [];
    where.quizId = { in: quizzesDelAlcance.map((q) => q.id) };
  }

  const filteredAttempts = await prisma.quizAttempt.findMany({ where: where as any });

  // Overall summary
  const totalIntentos = filteredAttempts.length;
  const intentosEntregados = filteredAttempts.filter(
    (a) => a.status === "submitted" || a.status === "graded"
  ).length;
  const allScores = filteredAttempts.map((a) => (typeof a.score === "number" ? a.score : 0));
  const allMaxScores = filteredAttempts.map((a) => (typeof a.maxScore === "number" ? a.maxScore : 0));
  const promedioScore = allScores.length
    ? allScores.reduce((a, b) => a + b, 0) / allScores.length : 0;
  const promedioMaxScore = allMaxScores.length
    ? allMaxScores.reduce((a, b) => a + b, 0) / allMaxScores.length : 0;
  const accuracy = promedioMaxScore > 0
    ? Math.round((promedioScore / promedioMaxScore) * 100) : 0;

  // Group by quizId
  const byQuiz = new Map<string, { scores: number[]; maxScores: number[] }>();
  for (const attempt of filteredAttempts) {
    const qid = attempt.quizId ?? "unknown";
    if (!byQuiz.has(qid)) byQuiz.set(qid, { scores: [], maxScores: [] });
    const entry = byQuiz.get(qid)!;
    if (typeof attempt.score === "number") entry.scores.push(attempt.score);
    if (typeof attempt.maxScore === "number") entry.maxScores.push(attempt.maxScore);
  }

  const perQuiz: QuizMetricsItem[] = Array.from(byQuiz.entries())
    .map(([quizId, data]) => {
      const avgScore = data.scores.length
        ? data.scores.reduce((a, b) => a + b, 0) / data.scores.length : 0;
      const avgMaxScore = data.maxScores.length
        ? data.maxScores.reduce((a, b) => a + b, 0) / data.maxScores.length : 0;
      return {
        quizId,
        intentos: data.scores.length,
        intentosEntregados: 0,
        promedioScore: avgScore,
        promedioMaxScore: avgMaxScore
      };
    })
    .sort((a, b) => b.intentos - a.intentos);

  return {
    resumen: {
      intentos: totalIntentos,
      intentosEntregados,
      scorePromedio: Math.round(promedioScore),
      maxScorePromedio: Math.round(promedioMaxScore),
      precisionPromedio: accuracy
    },
    quizzes: perQuiz.map((item) => {
      const maxScore = item.promedioMaxScore;
      const quizAccuracy =
        maxScore > 0 ? Math.round((item.promedioScore / maxScore) * 100) : 0;
      return {
        quizId: item.quizId ?? "Sin quiz",
        intentos: item.intentos,
        scorePromedio: Math.round(item.promedioScore),
        maxScorePromedio: Math.round(item.promedioMaxScore),
        precisionPromedio: quizAccuracy
      };
    })
  };
};

const sinAlcance = (res: import("express").Response) =>
  res.status(403).json({ error: "tu sesión no tiene una escuela asociada" });

estadisticas.get(
  "/api/estadisticas/profesor",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.REPORTS),
  requirePolicy("estadisticas/read"),
  async (req, res) => {
    const alcance = alcanceDe(req.user as ReqUser | undefined);
    if (!alcance) return sinAlcance(res);
    const filters = filtrosDeQuery(req);
    if ("error" in filters) return res.status(400).json(filters);

    const data = await buildProfesorStats(filters, alcance);
    res.json(data);
  }
);

estadisticas.get(
  "/api/estadisticas/profesor/export",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.REPORTS),
  requirePolicy("estadisticas/export"),
  async (req, res) => {
    const alcance = alcanceDe(req.user as ReqUser | undefined);
    if (!alcance) return sinAlcance(res);
    const format = typeof req.query.format === "string" ? req.query.format : "excel";
    const filters = filtrosDeQuery(req);
    if ("error" in filters) return res.status(400).json(filters);
    const data = await buildProfesorStats(filters, alcance);
    const requester = (req as { user?: { _id?: { toString?: () => string } } }).user;
    await recordAuditLog({
      actorId: requester?._id?.toString?.() ?? "anonymous",
      action: "estadisticas.export",
      targetType: "estadisticas_profesor",
      targetId: format,
      metadata: {
        filters,
        alcance: alcance.global ? "global" : alcance.escuelaId
      }
    });

    if (format === "pdf") {
      const body = await buildPdf(data);
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=estadisticas-profesor.pdf");
      return res.send(body);
    }

    const csv = buildCsv(data);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=estadisticas-profesor.csv");
    return res.send(csv);
  }
);

estadisticas.get(
  "/api/estadisticas/quizzes/aula/:aulaId",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES),
  requirePolicy("estadisticas/read"),
  async (req, res) => {
    const alcance = alcanceDe(req.user as ReqUser | undefined);
    if (!alcance) return sinAlcance(res);
    const aulaId = typeof req.params.aulaId === "string" ? req.params.aulaId : "";
    if (!aulaId) return res.status(400).json({ error: "aulaId requerido" });
    const filters = filtrosDeQuery(req);
    if ("error" in filters) return res.status(400).json(filters);
    // Un aula de otra escuela se trata como inexistente.
    const aula = await prisma.clase.findFirst({ where: { id: aulaId, isDeleted: false } });
    if (!aula || (!alcance.global && aula.escuelaId !== alcance.escuelaId)) {
      return res.status(404).json({ error: "aula no encontrada" });
    }
    const data = await buildQuizMetrics(filters, { kind: "aula", aulaId });
    res.json(data);
  }
);

estadisticas.get(
  "/api/estadisticas/quizzes/docente/:docenteId",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES),
  requirePolicy("estadisticas/read"),
  async (req, res) => {
    const alcance = alcanceDe(req.user as ReqUser | undefined);
    if (!alcance) return sinAlcance(res);
    const docenteId = typeof req.params.docenteId === "string" ? req.params.docenteId : "";
    if (!docenteId) return res.status(400).json({ error: "docenteId requerido" });
    const filters = filtrosDeQuery(req);
    if ("error" in filters) return res.status(400).json(filters);
    if (!alcance.global && !(await perteneceAEscuela(alcance.escuelaId, docenteId))) {
      return res.status(404).json({ error: "docente no encontrado" });
    }
    const data = await buildQuizMetrics(filters, {
      kind: "docente",
      docenteId,
      escuelaId: alcance.global ? null : alcance.escuelaId
    });
    res.json(data);
  }
);

estadisticas.get(
  "/api/estadisticas/quizzes/institucion/:institucionId",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES),
  requirePolicy("estadisticas/read"),
  async (req, res) => {
    const alcance = alcanceDe(req.user as ReqUser | undefined);
    if (!alcance) return sinAlcance(res);
    const institucionId =
      typeof req.params.institucionId === "string" ? req.params.institucionId : "";
    if (!institucionId) return res.status(400).json({ error: "institucionId requerida" });
    const filters = filtrosDeQuery(req);
    if ("error" in filters) return res.status(400).json(filters);
    if (!alcance.global && institucionId !== alcance.escuelaId) {
      return res.status(403).json({ error: "forbidden" });
    }
    const data = await buildQuizMetrics(filters, { kind: "institucion", institucionId });
    res.json(data);
  }
);
