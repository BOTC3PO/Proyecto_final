/**
 * Cache a nivel módulo de la documentación de generadores
 * (`/api/generators/:cat/:name/docs`).
 *
 * La doc es estática (`documentacion_generadores.json`), así que una vez traída
 * para un `cat/name` no se vuelve a pedir: cambiar entre tipos de pregunta y
 * generadores ya vistos es instantáneo (sin spinner ni refetch). Las respuestas
 * 404 (generador sin doc) también se cachean como "missing"; los errores
 * transitorios NO se cachean para permitir reintentar.
 */
import { apiGet } from "../../lib/api";

export type VariableDoc = { descripcion: string; ejemplo: string };
export type SubtipoDoc = {
  descripcion: string;
  variables: Record<string, VariableDoc>;
};
export type GeneratorDocs = { subtipos: Record<string, SubtipoDoc> };

export type DocsEntry =
  | { status: "ok"; docs: GeneratorDocs }
  | { status: "missing" };

const cache = new Map<string, DocsEntry>();

/** Resultado cacheado para `cat/name`, o `undefined` si todavía no se pidió. */
export function getCachedGeneradorDocs(
  cat: string,
  name: string,
): DocsEntry | undefined {
  return cache.get(`${cat}/${name}`);
}

/**
 * Trae la doc de un generador, usando el cache. Acepta un `AbortSignal` para
 * cancelar la request si el usuario cambia de generador antes de que responda
 * (evita que una respuesta vieja pise a la nueva). Las llamadas abortadas
 * propagan el `AbortError`.
 */
export async function fetchGeneradorDocs(
  cat: string,
  name: string,
  signal?: AbortSignal,
): Promise<DocsEntry> {
  const key = `${cat}/${name}`;
  const hit = cache.get(key);
  if (hit) return hit;

  try {
    const docs = await apiGet<GeneratorDocs>(
      `/api/generators/${cat}/${name}/docs`,
      { signal },
    );
    const entry: DocsEntry =
      docs && docs.subtipos && Object.keys(docs.subtipos).length > 0
        ? { status: "ok", docs }
        : { status: "missing" };
    cache.set(key, entry);
    return entry;
  } catch (err) {
    // Abort: lo propagamos para que el caller ignore el resultado y no toque
    // el estado (la nueva request manda).
    if (err instanceof DOMException && err.name === "AbortError") throw err;
    const entry: DocsEntry = { status: "missing" };
    // 404 = el generador no tiene doc: es estable, lo cacheamos. Otros errores
    // (red, 5xx) podrían ser transitorios → no cacheamos para reintentar.
    if ((err as { status?: number })?.status === 404) cache.set(key, entry);
    return entry;
  }
}

/** Limpia el cache (para tests). */
export function __clearGeneradorDocsCache(): void {
  cache.clear();
}
