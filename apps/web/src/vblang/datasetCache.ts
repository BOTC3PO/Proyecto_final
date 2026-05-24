import { apiGet } from "../lib/api";

/**
 * Caché in-memory de datasets cargados desde el backend. La interface del
 * runtime (`obtenerDataset`) es síncrona, así que precargamos asíncronamente
 * desde el hook / la página y leemos sincrónicamente al evaluar la plantilla.
 *
 * Cuando la API devuelve 404 cacheamos `null` para no reintentar en cada
 * ejecución; `limpiarCacheDatasets()` invalida todo (útil para tests y tras
 * editar un dataset).
 */
const cache = new Map<string, Array<Record<string, unknown>> | null>();

interface ByNameResponse {
  filas: Array<{ datos: Record<string, unknown> }>;
}

export async function precargarDataset(nombre: string): Promise<void> {
  if (cache.has(nombre)) return;
  try {
    const res = await apiGet<ByNameResponse>(
      `/api/vblang/datasets/by-name/${encodeURIComponent(nombre)}`,
    );
    cache.set(
      nombre,
      res.filas.map((f) => f.datos),
    );
  } catch {
    cache.set(nombre, null);
  }
}

export function obtenerDatasetSync(
  nombre: string,
): Array<Record<string, unknown>> | null {
  return cache.get(nombre) ?? null;
}

export function limpiarCacheDatasets(): void {
  cache.clear();
}
