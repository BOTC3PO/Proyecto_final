import { API_BASE_URL, apiFetch } from "./api";

export type ReporteFilters = {
  aula?: string;
  grupo?: string;
  periodo?: string;
  tipoActividad?: string;
  lote?: boolean;
  loteIds?: string[];
};

export type ReporteComparativo = {
  promedioGrupo: number;
  asistenciaPromedio: number;
  actividadesEvaluadas: number;
};

export type ReporteBoletin = {
  estudiante: string;
  promedio: number;
  comentarios: string;
};

export type ReporteConfig = {
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

export type ReporteResponse = {
  rol: "profesor" | "admin";
  filtros: ReporteFilters;
  configuracion: ReporteConfig;
  comparativo: ReporteComparativo;
  boletines: ReporteBoletin[];
  generacionLotes?: {
    total: number;
    ids: string[];
  };
  generadoEn: string;
};

export type ReporteFormato = "pdf" | "excel";

const buildParams = (filters: ReporteFilters, formato?: ReporteFormato) => {
  const params = new URLSearchParams();
  if (filters.aula) params.set("aula", filters.aula);
  if (filters.grupo) params.set("grupo", filters.grupo);
  if (filters.periodo) params.set("periodo", filters.periodo);
  if (filters.tipoActividad) params.set("tipoActividad", filters.tipoActividad);
  if (filters.lote) params.set("lote", "true");
  if (filters.loteIds?.length) params.set("loteIds", filters.loteIds.join(","));
  if (formato) params.set("formato", formato);
  return params.toString();
};

export const fetchReporte = async (
  rol: "profesor" | "admin",
  filters: ReporteFilters
): Promise<ReporteResponse> => {
  const query = buildParams(filters);
  const path = `/api/reportes/${rol}${query ? `?${query}` : ""}`;
  return apiFetch<ReporteResponse>(path);
};

export const downloadReporte = async (
  rol: "profesor" | "admin",
  filters: ReporteFilters,
  formato: ReporteFormato
): Promise<Blob> => {
  const query = buildParams(filters, formato);
  const response = await fetch(`${API_BASE_URL}/api/reportes/${rol}?${query}`, {
    method: "GET"
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "No se pudo generar el reporte.");
  }
  return response.blob();
};
