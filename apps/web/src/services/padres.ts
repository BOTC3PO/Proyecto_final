import { apiGet, apiPatch } from "../lib/api";

export type HijoRestricciones = {
  permisosTareas: boolean;
  permisosMensajes: boolean;
  notas?: string | null;
};

export type HijoEstadisticas = {
  items: Array<Record<string, unknown>>;
  resumen: {
    completados: number;
    total: number;
    progreso: number;
  };
};

export type HijoInforme = {
  generatedAt: string;
  items: Array<Record<string, unknown>>;
};

export const fetchRestriccionesHijo = (hijoId: string) =>
  apiGet<HijoRestricciones>(`/api/padres/hijos/${hijoId}/limites`);

export const updateRestriccionesHijo = (hijoId: string, payload: Partial<HijoRestricciones>) =>
  apiPatch<HijoRestricciones>(`/api/padres/hijos/${hijoId}/limites`, payload);

export const fetchReporteEstadisticasHijo = (hijoId: string) =>
  apiGet<HijoEstadisticas>(`/api/estadisticas/hijos/${hijoId}`);

export const fetchReporteInformeHijo = (hijoId: string) =>
  apiGet<HijoInforme>(`/api/informes/hijos/${hijoId}`);
