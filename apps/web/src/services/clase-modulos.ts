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

// "Niveles por aula con mapa de flujo" — nodos = módulos asignados al
// aula, con el progreso/candado del usuario que pide el mapa.
// `links` sólo conecta dependencias ENTRE módulos del mismo aula.
export type MapaModuloStatus = "no_iniciado" | "en_progreso" | "completado";

export type MapaModuloNodo = {
  id: string;
  title: string;
  subject: string | null;
  status: MapaModuloStatus;
  isLocked: boolean;
  missingDependencies: { id: string; title: string }[];
};

export type MapaModuloLink = {
  id: string;
  sourceId: string;
  targetId: string;
};

export type AulaMapaModulos = {
  modulos: MapaModuloNodo[];
  links: MapaModuloLink[];
};

export async function fetchAulaMapaModulos(aulaId: string): Promise<AulaMapaModulos> {
  return apiGet<AulaMapaModulos>(`/api/aulas/${aulaId}/mapa-modulos`);
}
