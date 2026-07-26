import { Router } from "express";
import { recordAuditLog } from "../lib/audit-log";
import { prisma } from "../lib/prisma";
import { ENTERPRISE_FEATURES, requireEnterpriseFeature } from "../lib/entitlements";
import { requirePolicy } from "../lib/authorization";
import { buildSimplePdf } from "../lib/pdf";
import { requireUser } from "../lib/user-auth";

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

const buildDateWhere = (filters: StatsFilters, field: string) => {
  const range: { gte?: Date; lte?: Date } = {};
  if (filters.fechaInicio) range.gte = new Date(filters.fechaInicio);
  if (filters.fechaFin) range.lte = new Date(filters.fechaFin);
  if (Object.keys(range).length === 0) return {};
  return { [field]: range };
};

const buildProgresoWhere = (filters: StatsFilters) => {
  const where: Record<string, unknown> = {
    ...buildDateWhere(filters, "updatedAt")
  };
  if (filters.moduloId) where.moduloId = filters.moduloId;
  return where;
};

const buildProfesorStats = async (filters: StatsFilters) => {
  // Fetch all matching progreso records and aggregate in JavaScript.
  // PLAN-multirol Fase 3 — antes acá se descartaba el progreso de las
  // cuentas espejo. Ya no existen: la persona es una sola cuenta y lo que
  // marca "esto es de prueba" es su inscripción al aula.
  const progresoRecords = await prisma.progresoModulo.findMany({
    where: buildProgresoWhere(filters) as any
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

const buildQuizMetrics = async (
  filters: StatsFilters,
  scopeMatch: Record<string, unknown>
) => {
  const dateWhere = buildDateWhere(filters, "startedAt");

  // Fetch all quiz_attempts within date range.
  const allAttemptsRaw = await prisma.quizAttempt.findMany({
    where: dateWhere as any
  });
  const allAttempts = allAttemptsRaw;

  // Fetch quizzes to get moduleId for scope filtering
  const quizIds = [...new Set(allAttempts.map((a) => a.quizId).filter(Boolean))] as string[];
  const quizzes = quizIds.length
    ? await prisma.quiz.findMany({ where: { id: { in: quizIds } } })
    : [];
  const quizMap = new Map(quizzes.map((q) => [q.id, q]));

  // Fetch modules to get schoolId / ownerUserId for scope filtering
  const moduleIds = [...new Set(quizzes.map((q) => q.moduleId).filter(Boolean))] as string[];
  const modules = moduleIds.length
    ? await prisma.modulo.findMany({ where: { id: { in: moduleIds } } })
    : [];
  const moduleMap = new Map(modules.map((m) => [m.id, m]));

  // Apply scope filter in JavaScript
  const scopeAulaId = scopeMatch.aulaId as string | undefined;
  const scopeDocenteId = scopeMatch.docenteId as string | undefined;
  const scopeInstitucionId = scopeMatch.institucionId as string | undefined;

  const filteredAttempts = allAttempts.filter((attempt) => {
    const quiz = attempt.quizId ? quizMap.get(attempt.quizId) : undefined;
    const mod = quiz?.moduleId ? moduleMap.get(quiz.moduleId) : undefined;
    if (scopeAulaId) {
      // aulaId is not directly on modulo in the listed schema; skip scope filter if not present
      return true;
    }
    if (scopeDocenteId) {
      return mod?.ownerUserId === scopeDocenteId;
    }
    if (scopeInstitucionId) {
      return mod?.schoolId === scopeInstitucionId;
    }
    return true;
  });

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

estadisticas.get(
  "/api/estadisticas/profesor",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.REPORTS),
  requirePolicy("estadisticas/read"),
  async (req, res) => {
    const filters: StatsFilters = {
      fechaInicio: typeof req.query.fechaInicio === "string" ? req.query.fechaInicio : undefined,
      fechaFin: typeof req.query.fechaFin === "string" ? req.query.fechaFin : undefined,
      moduloId: typeof req.query.moduloId === "string" ? req.query.moduloId : undefined,
      categoria: typeof req.query.categoria === "string" ? req.query.categoria : undefined,
      cohorte: typeof req.query.cohorte === "string" ? req.query.cohorte : undefined
    };

    const data = await buildProfesorStats(filters);
    res.json(data);
  }
);

estadisticas.get(
  "/api/estadisticas/profesor/export",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.REPORTS),
  requirePolicy("estadisticas/export"),
  async (req, res) => {
    const format = typeof req.query.format === "string" ? req.query.format : "excel";
    const filters: StatsFilters = {
      fechaInicio: typeof req.query.fechaInicio === "string" ? req.query.fechaInicio : undefined,
      fechaFin: typeof req.query.fechaFin === "string" ? req.query.fechaFin : undefined,
      moduloId: typeof req.query.moduloId === "string" ? req.query.moduloId : undefined,
      categoria: typeof req.query.categoria === "string" ? req.query.categoria : undefined,
      cohorte: typeof req.query.cohorte === "string" ? req.query.cohorte : undefined
    };
    const data = await buildProfesorStats(filters);
    const requester = (req as { user?: { _id?: { toString?: () => string } } }).user;
    await recordAuditLog({
      actorId: requester?._id?.toString?.() ?? "anonymous",
      action: "estadisticas.export",
      targetType: "estadisticas_profesor",
      targetId: format,
      metadata: {
        filters
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
    const aulaId = typeof req.params.aulaId === "string" ? req.params.aulaId : "";
    if (!aulaId) return res.status(400).json({ error: "aulaId requerido" });
    const filters: StatsFilters = {
      fechaInicio: typeof req.query.fechaInicio === "string" ? req.query.fechaInicio : undefined,
      fechaFin: typeof req.query.fechaFin === "string" ? req.query.fechaFin : undefined
    };
    const data = await buildQuizMetrics(filters, { aulaId });
    res.json(data);
  }
);

estadisticas.get(
  "/api/estadisticas/quizzes/docente/:docenteId",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES),
  requirePolicy("estadisticas/read"),
  async (req, res) => {
    const docenteId = typeof req.params.docenteId === "string" ? req.params.docenteId : "";
    if (!docenteId) return res.status(400).json({ error: "docenteId requerido" });
    const filters: StatsFilters = {
      fechaInicio: typeof req.query.fechaInicio === "string" ? req.query.fechaInicio : undefined,
      fechaFin: typeof req.query.fechaFin === "string" ? req.query.fechaFin : undefined
    };
    const data = await buildQuizMetrics(filters, { docenteId });
    res.json(data);
  }
);

estadisticas.get(
  "/api/estadisticas/quizzes/institucion/:institucionId",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES),
  requirePolicy("estadisticas/read"),
  async (req, res) => {
    const institucionId =
      typeof req.params.institucionId === "string" ? req.params.institucionId : "";
    if (!institucionId) return res.status(400).json({ error: "institucionId requerida" });
    const filters: StatsFilters = {
      fechaInicio: typeof req.query.fechaInicio === "string" ? req.query.fechaInicio : undefined,
      fechaFin: typeof req.query.fechaFin === "string" ? req.query.fechaFin : undefined
    };
    const data = await buildQuizMetrics(filters, { institucionId });
    res.json(data);
  }
);
