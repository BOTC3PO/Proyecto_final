import { Router } from "express";
import { z } from "zod";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";

export const reportes = Router();

const objectIdString = z.string().regex(/^[a-fA-F0-9]{24}$/);

const SolicitudVinculoSchema = z.object({
  childId: objectIdString
});

const AprobacionVinculoSchema = z.object({
  parentId: objectIdString
});

const daysBetween = (start: Date, end: Date) => (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

const isMinor = (birthdate?: Date | null) => {
  if (!birthdate) return false;
  return daysBetween(birthdate, new Date()) < 365.25 * 18;
};

const logReportePadre = async (params: {
  parentId: ReturnType<typeof toObjectId>;
  childId: ReturnType<typeof toObjectId>;
  tipo: "estadisticas" | "informe";
  acceso: "menor" | "aprobado";
}) => {
  const db = await getDb();
  await db.collection("eventos_reportes_padres").insertOne({
    parentId: params.parentId,
    childId: params.childId,
    tipo: params.tipo,
    acceso: params.acceso,
    createdAt: new Date()
  });
};

const validarAccesoPadre = async (parentId: ReturnType<typeof toObjectId>, childId: ReturnType<typeof toObjectId>) => {
  if (!parentId || !childId) {
    return { ok: false, status: 400, error: "parentId and childId are required" as const };
  }
  const db = await getDb();
  const child = await db
    .collection("usuarios")
    .findOne({ _id: childId, isDeleted: { $ne: true } }, { projection: { birthdate: 1 } });
  if (!child) return { ok: false, status: 404, error: "child not found" as const };
  const vinculo = await db.collection("vinculos_padre_hijo").findOne({
    parentId,
    childId,
    estado: { $ne: "revocado" }
  });
  if (!vinculo) return { ok: false, status: 403, error: "no link" as const };
  const menor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
  if (menor) {
    return { ok: true, acceso: "menor" as const };
  }
  if (vinculo.estado === "aprobado") {
    return { ok: true, acceso: "aprobado" as const };
  }
  return { ok: false, status: 403, error: "approval required" as const };
};

reportes.post("/api/vinculos/solicitar", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  try {
    const parsed = SolicitudVinculoSchema.parse(req.body);
    const childId = toObjectId(parsed.childId);
    if (!parentId || !childId) return res.status(400).json({ error: "invalid parent or child id" });
    const db = await getDb();
    const existing = await db.collection("vinculos_padre_hijo").findOne({ parentId, childId });
    const now = new Date();
    if (existing) {
      await db.collection("vinculos_padre_hijo").updateOne(
        { _id: existing._id },
        {
          $set: {
            estado: existing.estado === "aprobado" ? "aprobado" : "pendiente",
            solicitadoAt: existing.solicitadoAt ?? now,
            updatedAt: now
          }
        }
      );
      return res.json({ ok: true, estado: existing.estado === "aprobado" ? "aprobado" : "pendiente" });
    }
    await db.collection("vinculos_padre_hijo").insertOne({
      parentId,
      childId,
      estado: "pendiente",
      solicitadoAt: now,
      createdAt: now,
      updatedAt: now
    });
    return res.status(201).json({ ok: true, estado: "pendiente" });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

reportes.post("/api/vinculos/aprobar", async (req, res) => {
  const childIdParam = req.header("x-usuario-id");
  const childId = typeof childIdParam === "string" ? toObjectId(childIdParam) : null;
  try {
    const parsed = AprobacionVinculoSchema.parse(req.body);
    const parentId = toObjectId(parsed.parentId);
    if (!parentId || !childId) return res.status(400).json({ error: "invalid parent or child id" });
    const db = await getDb();
    const result = await db.collection("vinculos_padre_hijo").updateOne(
      { parentId, childId, estado: { $ne: "revocado" } },
      {
        $set: {
          estado: "aprobado",
          aprobadoAt: new Date(),
          updatedAt: new Date()
        },
        $setOnInsert: {
          parentId,
          childId,
          solicitadoAt: new Date(),
          createdAt: new Date()
        }
      },
      { upsert: true }
    );
    return res.json({ ok: true, updated: result.modifiedCount });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

reportes.get("/api/vinculos/validar", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  const childIdParam = req.query.childId;
  const childId = typeof childIdParam === "string" ? toObjectId(childIdParam) : null;
  const result = await validarAccesoPadre(parentId, childId);
  if (!result.ok) return res.status(result.status).json({ ok: false, error: result.error });
  return res.json({ ok: true, acceso: result.acceso });
});

reportes.get("/api/estadisticas/hijos/:hijoId", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  const childId = toObjectId(req.params.hijoId);
  const acceso = await validarAccesoPadre(parentId, childId);
  if (!acceso.ok) return res.status(acceso.status).json({ error: acceso.error });
  const db = await getDb();
  const items = await db.collection("progreso_modulos").find({ usuarioId: req.params.hijoId }).toArray();
  const completados = items.filter((item) => item.status === "completado").length;
  const progreso = items.length ? Math.round((completados / items.length) * 100) : 0;
  await logReportePadre({ parentId, childId, tipo: "estadisticas", acceso: acceso.acceso });
  return res.json({ items, resumen: { completados, total: items.length, progreso } });
});

reportes.get("/api/informes/hijos/:hijoId", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  const childId = toObjectId(req.params.hijoId);
  const acceso = await validarAccesoPadre(parentId, childId);
  if (!acceso.ok) return res.status(acceso.status).json({ error: acceso.error });
  const db = await getDb();
  const items = await db.collection("progreso_modulos").find({ usuarioId: req.params.hijoId }).toArray();
  await logReportePadre({ parentId, childId, tipo: "informe", acceso: acceso.acceso });
  return res.json({ generatedAt: new Date().toISOString(), items });
});

type ReporteFilters = {
  aula?: string;
  grupo?: string;
  periodo?: string;
  tipoActividad?: string;
};

type ReporteFormato = "pdf" | "excel" | "json";

type ReporteConfig = {
  encabezado: {
    titulo: string;
    subtitulo: string;
    logoUrl: string;
  };
  piePagina: {
    texto: string;
    generadoPor: string;
  };
};

type Boletin = {
  estudiante: string;
  promedio: number;
  comentarios: string;
};

type ReporteResponse = {
  rol: "profesor" | "admin";
  filtros: ReporteFilters;
  configuracion: ReporteConfig;
  comparativo: {
    promedioGrupo: number;
    asistenciaPromedio: number;
    actividadesEvaluadas: number;
  };
  boletines: Boletin[];
  generacionLotes?: {
    total: number;
    ids: string[];
  };
  generadoEn: string;
};

const LOGO_INSTITUCIONAL =
  "https://storage.googleapis.com/educaai-public/assets/logo-institucional.png";

const toStringValue = (value: unknown): string | undefined => {
  if (typeof value === "string" && value.trim()) return value.trim();
  if (Array.isArray(value) && typeof value[0] === "string") return value[0].trim();
  return undefined;
};

const parseFilters = (query: Record<string, unknown>): ReporteFilters => ({
  aula: toStringValue(query.aula),
  grupo: toStringValue(query.grupo),
  periodo: toStringValue(query.periodo),
  tipoActividad: toStringValue(query.tipoActividad)
});

const parseFormato = (value: unknown): ReporteFormato => {
  const format = toStringValue(value)?.toLowerCase();
  if (format === "pdf" || format === "excel") return format;
  return "json";
};

const parseLote = (query: Record<string, unknown>) => {
  const lote = toStringValue(query.lote);
  const loteIds = toStringValue(query.loteIds);
  const ids = loteIds ? loteIds.split(",").map((id) => id.trim()).filter(Boolean) : [];
  return {
    enabled: lote === "true" || lote === "1" || ids.length > 0,
    ids
  };
};

const buildReporteData = (rol: "profesor" | "admin", filtros: ReporteFilters, loteIds: string[]) => {
  const configuracion: ReporteConfig = {
    encabezado: {
      titulo: `Reporte comparativo - ${rol === "profesor" ? "Profesor" : "Administrador"}`,
      subtitulo: `Periodo ${filtros.periodo ?? "actual"} · Aula ${filtros.aula ?? "general"}`,
      logoUrl: LOGO_INSTITUCIONAL
    },
    piePagina: {
      texto: "Documento confidencial para uso institucional.",
      generadoPor: "Plataforma EducaAI"
    }
  };

  const boletines: Boletin[] = [
    { estudiante: "María López", promedio: 4.6, comentarios: "Excelente avance en lecturas guiadas." },
    { estudiante: "Juan Pérez", promedio: 3.9, comentarios: "Reforzar comprensión lectora y prácticas." },
    { estudiante: "Camila Torres", promedio: 4.2, comentarios: "Buen desempeño, mantener participación." }
  ];

  return {
    rol,
    filtros,
    configuracion,
    comparativo: {
      promedioGrupo: rol === "admin" ? 4.2 : 4.1,
      asistenciaPromedio: rol === "admin" ? 0.92 : 0.9,
      actividadesEvaluadas: rol === "admin" ? 128 : 42
    },
    boletines,
    generacionLotes: loteIds.length
      ? {
          total: loteIds.length,
          ids: loteIds
        }
      : undefined,
    generadoEn: new Date().toISOString()
  } satisfies ReporteResponse;
};

const buildFilePayload = (data: ReporteResponse, formato: ReporteFormato) => {
  const header = `${data.configuracion.encabezado.titulo}\n${data.configuracion.encabezado.subtitulo}\nLogo: ${data.configuracion.encabezado.logoUrl}\n`;
  const footer = `\n${data.configuracion.piePagina.texto}\nGenerado por: ${data.configuracion.piePagina.generadoPor}\n`;
  const body = [
    `Filtros: ${JSON.stringify(data.filtros)}`,
    `Comparativo: ${JSON.stringify(data.comparativo)}`,
    `Boletines: ${JSON.stringify(data.boletines)}`,
    data.generacionLotes ? `Lotes: ${JSON.stringify(data.generacionLotes)}` : "Lotes: n/a",
    `Generado: ${data.generadoEn}`
  ].join("\n");

  const content = `${header}${body}${footer}`;
  const buffer = Buffer.from(content, "utf-8");

  return {
    buffer,
    contentType:
      formato === "pdf"
        ? "application/pdf"
        : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    extension: formato === "pdf" ? "pdf" : "xlsx"
  };
};

export const reportes = Router();

const handleReporte = (rol: "profesor" | "admin") => (req: any, res: any) => {
  const filtros = parseFilters(req.query);
  const formato = parseFormato(req.query.formato);
  const lote = parseLote(req.query);
  const data = buildReporteData(rol, filtros, lote.ids);

  if (formato !== "json") {
    const payload = buildFilePayload(data, formato);
    res.setHeader("Content-Type", payload.contentType);
    res.setHeader("Content-Disposition", `attachment; filename=\"reporte-${rol}.${payload.extension}\"`);
    return res.send(payload.buffer);
  }

  return res.json(data);
};

reportes.get("/api/reportes/profesor", handleReporte("profesor"));
reportes.get("/api/reportes/admin", handleReporte("admin"));
