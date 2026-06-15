/**
 * F7-01 — Referencia de funciones (builtins) del DSL.
 *
 * Fuente de verdad: `BUILTIN_SIGNATURES` (builtins propios de
 * `createBuiltins`) y `MATHJS_SIGNATURES` (subconjunto curado de math.js al
 * que el evaluador cae como fallback — ver `evaluator/evaluator.ts`). Las
 * firmas se renderizan con `typeToString`, sin prosa fija: si se agrega o
 * cambia un tipo en `validator/builtin-signatures.ts`, la referencia se
 * actualiza solo.
 *
 * El test de drift (`tests/reference/drift.test.ts`) compara
 * `BUILTIN_SIGNATURES` contra las claves reales de `createBuiltins(...)` —
 * si se agrega un builtin nuevo y se olvida documentar su firma, falla.
 */
import { builtinNames, createBuiltins } from "../evaluator/builtins.js";
import { createIsolatedMath } from "../evaluator/math-setup.js";
import { createPrng } from "../runtime/prng.js";
import {
  BUILTIN_SIGNATURES,
  MATHJS_SIGNATURES,
  lookupSignature,
} from "../validator/builtin-signatures.js";
import { typeToString } from "../validator/types.js";

export interface BuiltinReferencia {
  nombre: string;
  /** Firma renderizada, ej.: `(number, number) -> number`. */
  firma: string;
}

export interface DiffResult {
  /** Presentes en el código pero sin firma documentada. */
  faltantes: string[];
  /** Con firma documentada pero inexistentes en el código. */
  sobrantes: string[];
}

/** Nombres de los builtins propios reales, según `createBuiltins(...)`. */
export function nombresBuiltinsRuntime(): string[] {
  const prng = createPrng("referencia-dsl");
  const math = createIsolatedMath();
  return builtinNames(createBuiltins(prng, math));
}

/**
 * Todas las funciones invocables desde el DSL: builtins propios +
 * subconjunto curado de math.js.
 */
export function nombresBuiltinsDisponibles(): string[] {
  return [
    ...new Set([
      ...nombresBuiltinsRuntime(),
      ...Object.keys(MATHJS_SIGNATURES),
    ]),
  ].sort();
}

function firmaToString(nombre: string): string {
  const sig = lookupSignature(nombre);
  if (!sig) return "(?)";
  const params = sig.params.map(typeToString);
  if (sig.optionalParams) {
    params.push(...sig.optionalParams.map((t) => `${typeToString(t)}?`));
  }
  if (sig.variadic && params.length > 0) {
    params[params.length - 1] += "...";
  }
  return `(${params.join(", ")}) -> ${typeToString(sig.returns)}`;
}

/** Lista de builtins con su firma, ordenada por nombre. */
export function listaBuiltins(): BuiltinReferencia[] {
  return nombresBuiltinsDisponibles().map((nombre) => ({
    nombre,
    firma: firmaToString(nombre),
  }));
}

/**
 * Compara `actuales` (por defecto, los builtins propios + math.js curado)
 * contra las claves documentadas en `BUILTIN_SIGNATURES`/`MATHJS_SIGNATURES`.
 */
export function diffBuiltins(
  actuales: readonly string[] = nombresBuiltinsDisponibles(),
): DiffResult {
  const referencia = new Set([
    ...Object.keys(BUILTIN_SIGNATURES),
    ...Object.keys(MATHJS_SIGNATURES),
  ]);
  const real = new Set(actuales);
  return {
    faltantes: [...real].filter((b) => !referencia.has(b)).sort(),
    sobrantes: [...referencia].filter((b) => !real.has(b)).sort(),
  };
}
