/**
 * PLAN-R Parte 2 — copiado de `apps/web/src/services/calendarioUnificado.ts`.
 */
export type TipoEvento =
  | "feriado" | "vacaciones" | "acto_escolar" | "evento_institucional" | "sin_clases"
  | "clase" | "evaluacion" | "evento";

export type EventoCalendario = {
  id: string;
  tipo: TipoEvento;
  titulo: string;
  descripcion: string | null;
  fechaInicio: string;
  fechaFin: string;
  origen: "escuela" | "aula";
  aulaNombre?: string;
};
