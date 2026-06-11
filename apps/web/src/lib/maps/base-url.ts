/**
 * Resuelve la URL del TopoJSON del mapa base según `modo` y `escala`.
 *
 * El servidor expone datasets distintos según el modo:
 *   - political → `countries_<escala>.topo.json` (polígonos de países con
 *     fronteras administrativas)
 *   - physical  → `land_<escala>.topo.json` (masas continentales; en este
 *     dataset NO existe el archivo `countries_…`, por eso el helper es la
 *     única fuente de verdad del mapeo)
 *
 * Las escalas aceptadas son `110m` (ligero) y `50m` (detallado).
 */
export type MapaModo = "political" | "physical";
export type MapaEscala = "110m" | "50m";

const PHYSICAL_PREFIX = "land_";
const POLITICAL_PREFIX = "countries_";

export function mapaBaseUrl(modo: MapaModo, escala: MapaEscala): string {
  const prefix = modo === "physical" ? PHYSICAL_PREFIX : POLITICAL_PREFIX;
  return `/api/maps/${modo}/earth/${prefix}${escala}.topo.json`;
}
