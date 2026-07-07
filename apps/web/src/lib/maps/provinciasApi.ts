/**
 * Cliente para `GET /api/maps/provincias` (catálogo) y
 * `GET /api/maps/provincias/:pais` (TopoJSON de divisiones provinciales) —
 * PLAN-N §3: capa "División provincial de [país]" en el editor de mapas.
 */
import { apiGet } from "../api";
import type { TopologyLike } from "./topojson-lite";

export type ProvinciaCatalogoItem = {
  pais: string;
  nombre: string;
  divisiones: number;
};

export async function listPaisesConProvincias(): Promise<ProvinciaCatalogoItem[]> {
  const items = await apiGet<ProvinciaCatalogoItem[]>("/api/maps/provincias");
  return Array.isArray(items) ? items : [];
}

export async function fetchProvinciasTopo(pais: string): Promise<TopologyLike> {
  return apiGet<TopologyLike>(`/api/maps/provincias/${encodeURIComponent(pais)}`);
}
