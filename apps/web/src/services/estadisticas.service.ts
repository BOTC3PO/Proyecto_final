import { apiFetch } from "./api";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5050";

export type ProfesorEstadisticasFilters = {
  fechaInicio?: string;
  fechaFin?: string;
  moduloId?: string;
  categoria?: string;
  cohorte?: string;
};

export type ProfesorEstadisticasResponse = {
  general: {
    completadas: number;
    entregas: number;
    tiempoPromedioMin: number;
    progresoPorModulo: {
      moduloId: string;
      completadas: number;
      pendientes: number;
    }[];
  };
  rendimiento: {
    notasPorActividad: {
      actividad: string;
      promedio: number;
      max: number;
      min: number;
    }[];
    notasPorTema: {
      tema: string;
      promedio: number;
    }[];
  };
  participacion: {
    accesos: number;
    foros: number;
    encuestas: number;
    actividadSemanal: {
      semana: string;
      interacciones: number;
    }[];
  };
};

export type ProfesorEstadisticasOption = {
  value: string;
  label: string;
};

export type ProfesorEstadisticasOptions = {
  modulos: ProfesorEstadisticasOption[];
  categorias: ProfesorEstadisticasOption[];
  cohortes: ProfesorEstadisticasOption[];
};

const buildQuery = (filters?: ProfesorEstadisticasFilters) => {
  const params = new URLSearchParams();
  if (!filters) return "";
  if (filters.fechaInicio) params.set("fechaInicio", filters.fechaInicio);
  if (filters.fechaFin) params.set("fechaFin", filters.fechaFin);
  if (filters.moduloId) params.set("moduloId", filters.moduloId);
  if (filters.categoria) params.set("categoria", filters.categoria);
  if (filters.cohorte) params.set("cohorte", filters.cohorte);
  const query = params.toString();
  return query ? `?${query}` : "";
};

export async function getProfesorEstadisticas(filters?: ProfesorEstadisticasFilters) {
  const query = buildQuery(filters);
  return apiFetch<ProfesorEstadisticasResponse>(`/api/estadisticas/profesor${query}`);
}

export async function exportProfesorEstadisticas(
  filters: ProfesorEstadisticasFilters,
  format: "pdf" | "excel"
) {
  const query = buildQuery(filters);
  const joiner = query ? "&" : "?";
  const response = await fetch(`${API_BASE_URL}/api/estadisticas/profesor/export${query}${joiner}format=${format}`);
  if (!response.ok) {
    throw new Error("No se pudo exportar el reporte.");
  }
  return response.blob();
}

export async function getProfesorEstadisticasOptions() {
  return apiFetch<ProfesorEstadisticasOptions>("/api/estadisticas/profesor/opciones");
}
