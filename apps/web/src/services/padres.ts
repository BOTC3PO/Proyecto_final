import { apiGet } from "../lib/api";

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

export type HijoInforme = {
  generatedAt: string;
  items: Array<Record<string, unknown>>;
};

export const fetchReporteInformeHijo = (hijoId: string) =>
  apiGet<HijoInforme>(`/api/informes/hijos/${hijoId}`);
