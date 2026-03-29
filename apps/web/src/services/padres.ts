import { apiGet, apiPatch } from "../lib/api";

export type ActividadHijo = {
  id: string;
  aulaId: string;
  aulaNombre: string;
  tipo: "clase" | "evaluacion" | "evento";
  titulo: string;
  descripcion?: string;
  fecha: string;
  when: string;
};

export type EvaluacionBoletin = {
  quizId: string;
  quizTitle?: string;
  score: number | null;
  maxScore: number | null;
  fecha: string;
};

export type MateriaBoletin = {
  materia: string;
  promedio: number | null;
  evaluaciones: EvaluacionBoletin[];
};

export type BoletinResponse = {
  materias: MateriaBoletin[];
  total: number;
};

export async function fetchActividadesHijo(
  hijoId: string
): Promise<ActividadHijo[]> {
  const data = await apiGet<{ items: ActividadHijo[] }>(
    `/api/padres/hijos/${hijoId}/actividades`
  );
  return data.items ?? [];
}

export async function fetchBoletinHijo(
  hijoId: string
): Promise<BoletinResponse> {
  return apiGet<BoletinResponse>(
    `/api/padres/hijos/${hijoId}/boletin`
  );
}

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
