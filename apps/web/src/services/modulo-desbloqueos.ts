/**
 * "Niveles por aula con mapa de flujo" — desbloqueo manual por docente.
 * Sólo el dueño del módulo puede gestionar esto (mismo criterio que
 * `/api/modulos/:id/invitados`, ver api/src/routes/modulos.ts).
 */
import { apiGet, apiPost, apiDelete } from "../lib/api";

export type ModuloDesbloqueoItem = {
  id: string;
  usuarioId: string | null;
  usuarioNombre: string | null;
  aulaId: string | null;
  aulaNombre: string | null;
  otorgadoPor: string;
  createdAt: string;
};

export async function fetchModuloDesbloqueos(moduloId: string): Promise<ModuloDesbloqueoItem[]> {
  const data = await apiGet<{ items: ModuloDesbloqueoItem[] }>(
    `/api/modulos/${encodeURIComponent(moduloId)}/desbloqueos`
  );
  return data.items;
}

export async function crearModuloDesbloqueo(
  moduloId: string,
  payload: { usuarioId: string } | { aulaId: string }
): Promise<{ id: string }> {
  return apiPost<{ id: string }>(
    `/api/modulos/${encodeURIComponent(moduloId)}/desbloqueos`,
    payload
  );
}

export async function eliminarModuloDesbloqueo(moduloId: string, desbloqueoId: string): Promise<void> {
  await apiDelete<void>(
    `/api/modulos/${encodeURIComponent(moduloId)}/desbloqueos/${encodeURIComponent(desbloqueoId)}`
  );
}
