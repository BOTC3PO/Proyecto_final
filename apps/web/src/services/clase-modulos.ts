import { apiGet, apiPost, apiDelete } from "../lib/api";

export type ClaseModuloItem = {
  moduloId: string;
  assignedAt: string | null;
  required: boolean;
};

export async function fetchClaseModulos(aulaId: string): Promise<ClaseModuloItem[]> {
  const data = await apiGet<{ items: ClaseModuloItem[] }>(
    `/api/aulas/${aulaId}/modulos`
  );
  return data.items;
}

export async function assignModulo(aulaId: string, moduloId: string): Promise<void> {
  await apiPost(`/api/aulas/${aulaId}/modulos`, { moduloId });
}

export async function unassignModulo(aulaId: string, moduloId: string): Promise<void> {
  await apiDelete(`/api/aulas/${aulaId}/modulos/${moduloId}`);
}
