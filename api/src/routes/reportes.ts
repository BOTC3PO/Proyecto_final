import { Router } from "express";

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
