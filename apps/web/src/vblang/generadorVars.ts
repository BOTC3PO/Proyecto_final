/**
 * Set de variables que expone un generador asistido para la interpolación del
 * enunciado, computado corriendo el provider real (el mismo que usa el preview).
 *
 * `generate()` arma el scope del enunciado con las claves de `ejercicio.datos`
 * que devuelve el provider (más las constantes globales). Por eso, para que el
 * lint inline y la oferta de "resetear enunciado" coincidan EXACTAMENTE con lo
 * que hará el preview, derivamos las variables desde el provider y no desde la
 * doc estática.
 *
 * Para un id sin subtipo (`cat/name`) el provider elige un subtipo al azar por
 * seed; muestreamos varias seeds y unimos las claves para cubrir los subtipos
 * posibles (un id con subtipo fijo da siempre el mismo set). El resultado se
 * cachea por id — la doc/estructura del generador es estática.
 */
import { generadorAsistidoProvider } from "./provider";

const cache = new Map<string, string[]>();

// Seeds de muestreo. Incluimos las del preview (`preview-0..2`) para alinear
// con lo que el usuario ve, más algunas extra para cubrir otros subtipos.
const SAMPLE_SEEDS = [
  "preview-0",
  "preview-1",
  "preview-2",
  "gv-3",
  "gv-4",
  "gv-5",
  "gv-6",
  "gv-7",
];

/**
 * Devuelve las variables top-level que el generador `id` provee al enunciado.
 * Cacheado por id. Devuelve `[]` para id vacío o generador inexistente.
 */
export function getGeneradorProvidedVars(id: string): string[] {
  if (!id) return [];
  const hit = cache.get(id);
  if (hit) return hit;

  const names = new Set<string>();
  for (const seed of SAMPLE_SEEDS) {
    try {
      const ej = generadorAsistidoProvider.generar(id, seed, "intermedio");
      if (ej?.datos) {
        for (const k of Object.keys(ej.datos)) names.add(k);
      }
    } catch {
      // Si una seed/subtipo falla, simplemente no aporta variables.
    }
  }

  const result = [...names];
  cache.set(id, result);
  return result;
}

/** Limpia el cache (para tests). */
export function __clearGeneradorVarsCache(): void {
  cache.clear();
}
