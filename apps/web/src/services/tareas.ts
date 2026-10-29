import { apiDelete, apiGet, apiPatch, apiPost } from "../lib/api";

/** Resumen de una tarea pendiente del alumno (inicio y página Tareas). */
export type TareaResumen = {
  id: string;
  titulo: string;
  curso: string;
  /** Fecha formateada para mostrar («Sin fecha» si no tiene). */
  vence: string;
  /** Fecha límite en ISO, para ordenar y filtrar. */
  venceIso?: string | null;
};

export type Tarea = {
  id: string;
  claseId: string;
  titulo: string;
  consigna: string;
  vence: string | null;
  puntajeMax: number | null;
  estado: "publicada" | "cerrada";
  createdAt: string;
};

export type Entrega = {
  id: string;
  tareaId: string;
  alumnoId: string;
  texto: string;
  enlace: string | null;
  entregadaAt: string;
  tarde: boolean;
  nota: number | null;
  devolucion: string | null;
  corregidaAt: string | null;
};

export async function fetchTareas(): Promise<TareaResumen[]> {
  return apiGet<TareaResumen[]>("/api/tareas");
}

export const fetchTareasAula = (aulaId: string) =>
  apiGet<{ items: Array<Tarea & { miEntrega: Entrega | null }>; gestiona: boolean }>(`/api/aulas/${aulaId}/tareas`);

export const fetchTarea = (id: string) =>
  apiGet<{ tarea: Tarea; aulaNombre: string | null; miEntrega: Entrega | null; gestiona: boolean }>(`/api/tareas/${id}`);

export const crearTarea = (aulaId: string, data: { titulo: string; consigna: string; vence?: string | null; puntajeMax?: number | null }) =>
  apiPost<Tarea>(`/api/aulas/${aulaId}/tareas`, data);

export const actualizarTarea = (id: string, data: Partial<Pick<Tarea, "titulo" | "consigna" | "vence" | "puntajeMax" | "estado">>) =>
  apiPatch<Tarea>(`/api/tareas/${id}`, data);

export const borrarTarea = (id: string) => apiDelete<void>(`/api/tareas/${id}`);

export const entregarTarea = (id: string, data: { texto: string; enlace?: string | null }) =>
  apiPost<Entrega>(`/api/tareas/${id}/entregas`, data);

export const fetchEntregas = (tareaId: string) =>
  apiGet<{ tarea: Tarea; entregas: Array<{ alumnoId: string; alumnoNombre: string; entrega: Entrega | null }> }>(
    `/api/tareas/${tareaId}/entregas`
  );

export const corregirEntrega = (entregaId: string, data: { nota: number | null; devolucion?: string | null }) =>
  apiPatch<Entrega>(`/api/entregas/${entregaId}`, data);
