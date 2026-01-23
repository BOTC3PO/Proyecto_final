import { apiFetch } from "./api";

export type TareaResumen = {
  id: string;
  titulo: string;
  curso: string;
  vence: string;
};

export async function fetchTareas(): Promise<TareaResumen[]> {
  return apiFetch<TareaResumen[]>("/api/tareas");
}
