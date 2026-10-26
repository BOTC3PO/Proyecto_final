/**
 * PLAN-R Parte 1 — subset copiado para el dashboard del alumno.
 * Origen: `apps/web/src/pages/menu-alumno.tsx` + `apps/web/src/services/tareas.ts`.
 * Sólo los campos que este dashboard consume, no el `Module` completo.
 */
export type ModuloResumen = {
  id: string;
  title: string;
};

export type ProgressItem = {
  moduloId: string;
  status: "iniciado" | "en_progreso" | "completado";
};

export type ProgressResponse = {
  items: ProgressItem[];
};

export type TareaResumen = {
  id: string;
  titulo: string;
  curso: string;
  vence: string;
};
