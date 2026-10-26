import { apiGet, apiPut } from "../lib/api";

export type EstadoAsistencia = "presente" | "ausente" | "tarde" | "justificado";

export type AlumnoAsistencia = {
  alumnoId: string;
  nombre: string;
  estado: EstadoAsistencia | null;
  notas: string | null;
};

export type PlanillaAsistencia = {
  aulaId: string;
  fecha: string;
  alumnos: AlumnoAsistencia[];
};

export async function fetchPlanillaAsistencia(aulaId: string, fecha: string): Promise<PlanillaAsistencia> {
  return apiGet<PlanillaAsistencia>(
    `/api/aulas/${encodeURIComponent(aulaId)}/asistencia?fecha=${encodeURIComponent(fecha)}`
  );
}

export async function guardarPlanillaAsistencia(
  aulaId: string,
  fecha: string,
  registros: Array<{ alumnoId: string; estado: EstadoAsistencia; notas?: string | null }>
): Promise<{ ok: true; count: number }> {
  return apiPut<{ ok: true; count: number }>(
    `/api/aulas/${encodeURIComponent(aulaId)}/asistencia/${encodeURIComponent(fecha)}`,
    { registros }
  );
}
