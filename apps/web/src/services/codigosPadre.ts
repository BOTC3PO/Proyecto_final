import { apiDelete, apiGet, apiPost } from "../lib/api";

export type CodigoCreado = { id: string; codigo: string; expiresAt: string };
export type CodigoListado = {
  id: string;
  hijoId: string;
  estado: "activo" | "usado" | "revocado";
  createdAt: string;
  expiresAt: string;
  usadoPor: string | null;
  usadoAt: string | null;
};

/** K8 — la escuela emite un código de invitación para la familia de UN alumno (se ve una sola vez). */
export const crearCodigoPadre = (hijoId: string) => apiPost<CodigoCreado>("/api/escuela/codigos-padre", { hijoId });

export const listarCodigosPadre = async (hijoId: string): Promise<CodigoListado[]> =>
  (await apiGet<{ items: CodigoListado[] }>(`/api/escuela/codigos-padre?hijoId=${encodeURIComponent(hijoId)}`)).items ?? [];

export const anularCodigoPadre = (id: string) => apiDelete<{ ok: boolean }>(`/api/escuela/codigos-padre/${encodeURIComponent(id)}`);
