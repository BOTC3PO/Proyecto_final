/**
 * PLAN-roles-v3 C — cola de revisión posterior de la escuela.
 *
 * No es aprobación previa: el material ya está publicado. Bajar algo lo saca
 * de circulación sin borrarlo (el cuestionario queda inactivo, la plantilla
 * vuelve a privada).
 */
import { apiGet, apiPost } from "../lib/api";

export type ItemRevision = {
  id: string;
  titulo: string;
  autorId: string | null;
  visibility?: string;
  updatedAt: string;
};

export const fetchRevision = () =>
  apiGet<{ quizzes: ItemRevision[]; plantillas: ItemRevision[] }>("/api/escuela/revision");

export const ocultarItem = (tipo: "quiz" | "plantilla", id: string, motivo?: string) =>
  apiPost<{ ok: boolean }>(`/api/escuela/revision/${tipo}/${id}/ocultar`, motivo ? { motivo } : {});
