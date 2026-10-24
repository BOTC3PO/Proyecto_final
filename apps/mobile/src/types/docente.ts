/**
 * PLAN-R Parte 5 — copiado de `apps/web/src/domain/classroom/classroom.types.ts`
 * + `apps/web/src/services/asistencia.ts` (mismo criterio que Partes 1-4).
 */
export type Aula = {
  id: string;
  name: string;
  description?: string;
};

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
