import { Router } from "express";
import { getDb } from "../lib/db";

export const estadisticas = Router();

type StatsFilters = {
  fechaInicio?: string;
  fechaFin?: string;
  moduloId?: string;
  categoria?: string;
  cohorte?: string;
};

type ProgresoResumenItem = {
  _id?: string | null;
  completadas?: number | null;
  pendientes?: number | null;
  tiempoPromedioMin?: number | null;
  scorePromedio?: number | null;
  scoreMax?: number | null;
  scoreMin?: number | null;
};

type NotaTemaItem = {
  _id?: string | null;
  promedio?: number | null;
};

type ActividadSemanalItem = {
  _id?: string | null;
  interacciones?: number | null;
};

const buildDateMatch = (filters: StatsFilters, field: string) => {
  const range: { $gte?: Date; $lte?: Date } = {};
  if (filters.fechaInicio) range.$gte = new Date(filters.fechaInicio);
  if (filters.fechaFin) range.$lte = new Date(filters.fechaFin);
  if (Object.keys(range).length === 0) return {};
  return { [field]: range };
};

const buildMatch = (filters: StatsFilters, field = "updatedAt") => {
  const match: Record<string, unknown> = {
    ...buildDateMatch(filters, field)
  };
  if (filters.moduloId) match.moduloId = filters.moduloId;
  if (filters.categoria) match.categoria = filters.categoria;
  if (filters.cohorte) match.cohorte = filters.cohorte;
  return match;
};

const buildProfesorStats = async (filters: StatsFilters) => {
  const db = await getDb();
  const progresoMatch = buildMatch(filters, "updatedAt");
  const entregasMatch = buildMatch(filters, "createdAt");
  const participacionMatch = buildMatch(filters, "createdAt");

  const [progresoResumen] = await db
    .collection("progreso_modulos")
    .aggregate([
      { $match: progresoMatch },
      {
        $group: {
          _id: "$moduloId",
          completadas: {
            $sum: { $cond: [{ $eq: ["$status", "completado"] }, 1, 0] }
          },
          pendientes: {
            $sum: { $cond: [{ $ne: ["$status", "completado"] }, 1, 0] }
          },
          tiempoPromedioMin: { $avg: { $ifNull: ["$timeSpentMinutes", 0] } },
          scorePromedio: { $avg: { $ifNull: ["$score", 0] } },
          scoreMax: { $max: { $ifNull: ["$score", 0] } },
          scoreMin: { $min: { $ifNull: ["$score", 0] } }
        }
      },
      { $sort: { completadas: -1 } }
    ])
    .toArray() as ProgresoResumenItem[];

  const totalCompletadas = progresoResumen.reduce<number>((acc, item) => acc + (item.completadas ?? 0), 0);
  const tiempoPromedioMin = Math.round(
    progresoResumen.reduce<number>((acc, item) => acc + (item.tiempoPromedioMin ?? 0), 0) /
      Math.max(progresoResumen.length, 1)
  );

  const entregas = await db.collection("entregas").countDocuments(entregasMatch);

  const notasPorActividad = progresoResumen.map((item) => ({
    actividad: item._id ?? "Sin módulo",
    promedio: Math.round(item.scorePromedio ?? 0),
    max: Math.round(item.scoreMax ?? 0),
    min: Math.round(item.scoreMin ?? 0)
  }));

  const notasPorTema = await db
    .collection("notas_temas")
    .aggregate([
      { $match: buildMatch(filters, "createdAt") },
      { $group: { _id: "$tema", promedio: { $avg: "$score" } } },
      { $sort: { promedio: -1 } }
    ])
    .toArray() as NotaTemaItem[];

  const accesos = await db.collection("accesos").countDocuments(participacionMatch);
  const foros = await db.collection("foros_respuestas").countDocuments(participacionMatch);
  const encuestas = await db.collection("encuestas_respuestas").countDocuments(participacionMatch);

  const actividadSemanal = await db
    .collection("participacion")
    .aggregate([
      { $match: participacionMatch },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: { $ifNull: ["$createdAt", new Date()] }
            }
          },
          interacciones: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } },
      { $limit: 8 }
    ])
    .toArray() as ActividadSemanalItem[];

  return {
    general: {
      completadas: totalCompletadas,
      entregas,
      tiempoPromedioMin,
      progresoPorModulo: progresoResumen.map((item) => ({
        moduloId: item._id ?? "Sin módulo",
        completadas: item.completadas ?? 0,
        pendientes: item.pendientes ?? 0
      }))
    },
    rendimiento: {
      notasPorActividad,
      notasPorTema: notasPorTema.map((item) => ({
        tema: item._id ?? "Sin tema",
        promedio: Math.round(item.promedio ?? 0)
      }))
    },
    participacion: {
      accesos,
      foros,
      encuestas,
      actividadSemanal: actividadSemanal.map((item) => ({
        semana: item._id,
        interacciones: item.interacciones ?? 0
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

estadisticas.get("/api/estadisticas/profesor", async (req, res) => {
  const filters: StatsFilters = {
    fechaInicio: typeof req.query.fechaInicio === "string" ? req.query.fechaInicio : undefined,
    fechaFin: typeof req.query.fechaFin === "string" ? req.query.fechaFin : undefined,
    moduloId: typeof req.query.moduloId === "string" ? req.query.moduloId : undefined,
    categoria: typeof req.query.categoria === "string" ? req.query.categoria : undefined,
    cohorte: typeof req.query.cohorte === "string" ? req.query.cohorte : undefined
  };

  const data = await buildProfesorStats(filters);
  res.json(data);
});

estadisticas.get("/api/estadisticas/profesor/export", async (req, res) => {
  const format = typeof req.query.format === "string" ? req.query.format : "excel";
  const filters: StatsFilters = {
    fechaInicio: typeof req.query.fechaInicio === "string" ? req.query.fechaInicio : undefined,
    fechaFin: typeof req.query.fechaFin === "string" ? req.query.fechaFin : undefined,
    moduloId: typeof req.query.moduloId === "string" ? req.query.moduloId : undefined,
    categoria: typeof req.query.categoria === "string" ? req.query.categoria : undefined,
    cohorte: typeof req.query.cohorte === "string" ? req.query.cohorte : undefined
  };
  const data = await buildProfesorStats(filters);

  if (format === "pdf") {
    const body = `Reporte de estadísticas\n\nCompletadas: ${data.general.completadas}\nEntregas: ${data.general.entregas}\nTiempo promedio: ${data.general.tiempoPromedioMin} min\nAccesos: ${data.participacion.accesos}\nForos: ${data.participacion.foros}\nEncuestas: ${data.participacion.encuestas}`;
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=estadisticas-profesor.pdf");
    return res.send(body);
  }

  const csv = buildCsv(data);
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=estadisticas-profesor.csv");
  return res.send(csv);
});
