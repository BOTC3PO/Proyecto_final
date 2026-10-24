/**
 * F5-05 — Re-sorteo de runtime ante fallo de evaluación (plan K1-bis).
 *
 * Segunda capa de defensa del guard de división por cero (la primera es la
 * advertencia suprimible del linter). El análisis estático NUNCA es completo:
 * una expresión compuesta puede anular un denominador sin que el rango de las
 * variables lo delate. Por eso, en vivo, si `generate()` lanza para una seed
 * (división por cero, sqrt de negativo, restricciones imposibles en esa tirada,
 * etc.) re-sorteamos con seeds derivadas hasta un tope. El alumno nunca ve una
 * excepción cruda: o sale un ejercicio válido, o un error AMABLE final.
 *
 * `generate()` ya reintenta internamente las RESTRICCIONES (re-rolla el PRNG sin
 * cambiar de seed), pero un EvalError al declarar variables o al evaluar la
 * respuesta se propaga hacia afuera sin reintento. Este wrapper cubre ese hueco
 * cambiando de seed, que es lo único que produce una tirada realmente nueva.
 *
 * Es la primitiva canónica del re-sorteo. La derivación de seed por intento es
 * `${seed}-${i}` (concatenación de string), consistente con el loop del
 * reproductor del alumno y con la materialización server-side.
 */

import { generate } from "./generate.js";
import type {
  CompiledPlantilla,
  GenerationOptions,
  GenerationResult,
} from "./types.js";

/** Tope de re-sorteos por defecto (plan K1-bis: ~5). */
export const RESORTEO_TOPE_DEFAULT = 5;

/**
 * Error amable final: se agotaron los re-sorteos sin lograr un ejercicio válido.
 * Conserva la última causa para diagnóstico (logs del docente), pero su
 * `message` es apto para mostrarle al alumno sin filtrar internals.
 */
export class ResorteoAgotadoError extends Error {
  readonly intentos: number;
  readonly ultimaCausa: unknown;
  constructor(intentos: number, ultimaCausa: unknown) {
    super(
      "No se pudo generar este ejercicio. Probá de nuevo; si el problema " +
        "persiste, avisá a tu profesor.",
    );
    this.name = "ResorteoAgotadoError";
    this.intentos = intentos;
    this.ultimaCausa = ultimaCausa;
  }
}

export interface ResorteoOptions extends GenerationOptions {
  /** Tope de re-sorteos con seeds derivadas. Default `RESORTEO_TOPE_DEFAULT`. */
  maxResorteos?: number;
}

/**
 * Genera un ejercicio reintentando con seeds derivadas ante cualquier fallo de
 * `generate()`. Si una seed funciona, devuelve ese resultado; si TODAS fallan
 * hasta el tope, lanza `ResorteoAgotadoError` (amable), nunca el error crudo.
 */
export function generateConResorteo(
  compiled: CompiledPlantilla,
  options: ResorteoOptions,
): GenerationResult {
  const tope = Math.max(1, options.maxResorteos ?? RESORTEO_TOPE_DEFAULT);
  const baseSeed = String(options.seed);
  let ultimaCausa: unknown;
  for (let i = 0; i < tope; i += 1) {
    try {
      return generate(compiled, { ...options, seed: `${baseSeed}-${i}` });
    } catch (e) {
      ultimaCausa = e;
      // Seed mala (denominador 0, restricción imposible en esta tirada, …):
      // re-sorteamos con la siguiente seed derivada.
    }
  }
  throw new ResorteoAgotadoError(tope, ultimaCausa);
}
