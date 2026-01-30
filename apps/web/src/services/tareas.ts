import { apiGet } from "../lib/api";

export type TareaResumen = {
  id: string;
  titulo: string;
  curso: string;
  vence: string;
};

export async function fetchTareas(): Promise<TareaResumen[]> {
  return apiGet<TareaResumen[]>("/api/tareas");
}
