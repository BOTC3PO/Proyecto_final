/**
 * Generadores para los 4 "tipos especiales" del DSL VBLang:
 *  - ordenar
 *  - marcar_mapa
 *  - analisis_sintactico
 *  - identificar_palabras
 *
 * Cada función recibe el `CompiledPlantilla`, el `Scope` con variables ya
 * declaradas, el `EvalContext`, el `seed`, el número de intento y los textos
 * de enunciado/pasos/pistas ya interpolados. Devuelve un `GenerationResult`
 * ya armado.
 */
import { EvalError } from "../evaluator/errors.js";
import {
  evaluateExpr,
  type EvalContext,
} from "../evaluator/evaluator.js";
import type { Scope } from "../evaluator/scope.js";
import type { CompiledPlantilla, GenerationResult } from "./types.js";

function coerceStringArray(value: unknown, ctx: string): string[] {
  if (!Array.isArray(value)) {
    throw new EvalError(`${ctx} debe evaluar a un array, recibió ${typeof value}`);
  }
  return value.map((v) => {
    if (typeof v === "string") return v;
    if (typeof v === "number" || typeof v === "boolean") return String(v);
    throw new EvalError(
      `${ctx}: cada elemento debe ser string, recibió ${typeof v}`,
    );
  });
}

function sameSet(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const counts = new Map<string, number>();
  for (const s of a) counts.set(s, (counts.get(s) ?? 0) + 1);
  for (const s of b) {
    const n = counts.get(s);
    if (n === undefined || n === 0) return false;
    counts.set(s, n - 1);
  }
  return true;
}

/* ------------------------------------------------------------------------- */
/* ordenar                                                                    */
/* ------------------------------------------------------------------------- */

export function generateOrdenar(
  compiled: CompiledPlantilla,
  scope: Scope,
  ctx: EvalContext,
  seed: string,
  intento: number,
  enunciado: string,
  pasos: string[] | undefined,
  pistas: string[] | undefined,
  explicacion: string | undefined,
): GenerationResult {
  if (!compiled.opcionesExplicitas || compiled.opcionesExplicitas.length === 0) {
    throw new EvalError(
      "tipo `ordenar` requiere `opciones_explicitas:` con los items a presentar",
    );
  }
  if (!compiled.respuestaOrden) {
    throw new EvalError(
      "tipo `ordenar` requiere `respuesta_orden:` con el orden correcto",
    );
  }

  // Evaluar opciones_explicitas: si es 1 expr que es array, usar el array; si
  // son varias exprs, evaluarlas individualmente. Mismo patrón que `mc`.
  let itemsRaw: unknown[];
  if (compiled.opcionesExplicitas.length === 1) {
    const single = evaluateExpr(compiled.opcionesExplicitas[0], scope, ctx);
    itemsRaw = Array.isArray(single) ? single : [single];
  } else {
    itemsRaw = compiled.opcionesExplicitas.map((e) =>
      evaluateExpr(e, scope, ctx),
    );
  }
  const items = coerceStringArray(itemsRaw, "opciones_explicitas (ordenar)");

  const ordenRaw = evaluateExpr(compiled.respuestaOrden, scope, ctx);
  const ordenCorrecto = coerceStringArray(
    ordenRaw,
    "respuesta_orden",
  );

  if (!sameSet(items, ordenCorrecto)) {
    throw new EvalError(
      `ordenar: los conjuntos de \`opciones_explicitas\` y \`respuesta_orden\` deben tener exactamente los mismos elementos`,
    );
  }

  return {
    tipo: "ordenar",
    enunciado,
    pasos,
    pistas,
    explicacion,
    variables: scope.toRecord(),
    seed,
    intentos: intento,
    items,
    ordenCorrecto,
  };
}

/* ------------------------------------------------------------------------- */
/* marcar_mapa                                                                */
/* ------------------------------------------------------------------------- */

export function generateMarcarMapa(
  compiled: CompiledPlantilla,
  scope: Scope,
  ctx: EvalContext,
  seed: string,
  intento: number,
  enunciado: string,
  pasos: string[] | undefined,
  pistas: string[] | undefined,
  explicacion: string | undefined,
): GenerationResult {
  if (!compiled.mapa) {
    throw new EvalError(
      "tipo `marcar_mapa` requiere `mapa:` con el identificador del mapa",
    );
  }
  if (!compiled.respuestaIso) {
    throw new EvalError(
      "tipo `marcar_mapa` requiere `respuesta_iso:` con el código ISO correcto",
    );
  }

  const isoRaw = evaluateExpr(compiled.respuestaIso, scope, ctx);
  if (typeof isoRaw !== "string") {
    throw new EvalError(
      `respuesta_iso debe evaluar a string, recibió ${typeof isoRaw}`,
      compiled.respuestaIso.loc,
    );
  }
  const respuestaIso = isoRaw.trim();
  if (respuestaIso.length === 0) {
    throw new EvalError(
      "respuesta_iso evaluó a string vacío",
      compiled.respuestaIso.loc,
    );
  }

  let respuestaNombre: string | undefined;
  if (compiled.respuestaNombre) {
    const nombreRaw = evaluateExpr(compiled.respuestaNombre, scope, ctx);
    if (nombreRaw === null || nombreRaw === undefined) {
      respuestaNombre = undefined;
    } else if (typeof nombreRaw === "string") {
      respuestaNombre = nombreRaw;
    } else if (typeof nombreRaw === "number" || typeof nombreRaw === "boolean") {
      respuestaNombre = String(nombreRaw);
    } else {
      throw new EvalError(
        `respuesta_nombre debe evaluar a string (o null), recibió ${typeof nombreRaw}`,
        compiled.respuestaNombre.loc,
      );
    }
  }

  const result: GenerationResult = {
    tipo: "marcar_mapa",
    enunciado,
    pasos,
    pistas,
    explicacion,
    variables: scope.toRecord(),
    seed,
    intentos: intento,
    mapaId: compiled.mapa,
    respuestaIso,
  };
  if (respuestaNombre !== undefined) result.respuestaNombre = respuestaNombre;
  return result;
}

/* ------------------------------------------------------------------------- */
/* analisis_sintactico                                                        */
/* ------------------------------------------------------------------------- */

export function generateAnalisisSintactico(
  compiled: CompiledPlantilla,
  scope: Scope,
  ctx: EvalContext,
  seed: string,
  intento: number,
  enunciado: string,
  pasos: string[] | undefined,
  pistas: string[] | undefined,
  explicacion: string | undefined,
): GenerationResult {
  if (!compiled.textoAnalizar) {
    throw new EvalError(
      "tipo `analisis_sintactico` requiere `texto_analizar:`",
    );
  }
  if (!compiled.etiquetasPedidas) {
    throw new EvalError(
      "tipo `analisis_sintactico` requiere `etiquetas_pedidas:`",
    );
  }

  const textoRaw = evaluateExpr(compiled.textoAnalizar, scope, ctx);
  if (typeof textoRaw !== "string") {
    throw new EvalError(
      `texto_analizar debe evaluar a string, recibió ${typeof textoRaw}`,
      compiled.textoAnalizar.loc,
    );
  }

  const etiquetas: Array<{ palabra: string; etiqueta: string }> = [];
  for (const et of compiled.etiquetasPedidas) {
    const palabraCampo = et.campos.find((c) => c.key === "palabra");
    const etiquetaCampo = et.campos.find((c) => c.key === "etiqueta");
    if (!palabraCampo || !etiquetaCampo) {
      throw new EvalError(
        `cada item de \`etiquetas_pedidas\` para analisis_sintactico debe tener los campos \`palabra\` y \`etiqueta\``,
      );
    }
    const palabraVal = evaluateExpr(palabraCampo.value, scope, ctx);
    const etiquetaVal = evaluateExpr(etiquetaCampo.value, scope, ctx);
    if (typeof palabraVal !== "string") {
      throw new EvalError(
        `el campo \`palabra\` debe evaluar a string, recibió ${typeof palabraVal}`,
        palabraCampo.value.loc,
      );
    }
    if (typeof etiquetaVal !== "string") {
      throw new EvalError(
        `el campo \`etiqueta\` debe evaluar a string, recibió ${typeof etiquetaVal}`,
        etiquetaCampo.value.loc,
      );
    }
    if (!textoRaw.includes(palabraVal)) {
      throw new EvalError(
        `la palabra "${palabraVal}" no aparece en \`texto_analizar\``,
        palabraCampo.value.loc,
      );
    }
    etiquetas.push({ palabra: palabraVal, etiqueta: etiquetaVal });
  }

  return {
    tipo: "analisis_sintactico",
    enunciado,
    pasos,
    pistas,
    explicacion,
    variables: scope.toRecord(),
    seed,
    intentos: intento,
    textoAnalizar: textoRaw,
    etiquetasPedidas: etiquetas,
  };
}

/* ------------------------------------------------------------------------- */
/* identificar_palabras                                                       */
/* ------------------------------------------------------------------------- */

export function generateIdentificarPalabras(
  compiled: CompiledPlantilla,
  scope: Scope,
  ctx: EvalContext,
  seed: string,
  intento: number,
  enunciado: string,
  pasos: string[] | undefined,
  pistas: string[] | undefined,
  explicacion: string | undefined,
): GenerationResult {
  if (!compiled.textoAnalizar) {
    throw new EvalError(
      "tipo `identificar_palabras` requiere `texto_analizar:`",
    );
  }
  if (!compiled.respuestasValidas || compiled.respuestasValidas.length === 0) {
    throw new EvalError(
      "tipo `identificar_palabras` requiere `respuestas_validas:` con las palabras correctas",
    );
  }

  const textoRaw = evaluateExpr(compiled.textoAnalizar, scope, ctx);
  if (typeof textoRaw !== "string") {
    throw new EvalError(
      `texto_analizar debe evaluar a string, recibió ${typeof textoRaw}`,
      compiled.textoAnalizar.loc,
    );
  }

  // respuestas_validas se evalúa como en `identificar_palabras`: si hay una
  // sola expr y evalúa a array, usar el array. Si hay varias, cada una es un
  // item.
  let respuestasRaw: unknown[];
  if (compiled.respuestasValidas.length === 1) {
    const single = evaluateExpr(compiled.respuestasValidas[0], scope, ctx);
    respuestasRaw = Array.isArray(single) ? single : [single];
  } else {
    respuestasRaw = compiled.respuestasValidas.map((e) =>
      evaluateExpr(e, scope, ctx),
    );
  }

  const respuestasValidas = coerceStringArray(
    respuestasRaw,
    "respuestas_validas (identificar_palabras)",
  );

  for (const palabra of respuestasValidas) {
    if (!textoRaw.includes(palabra)) {
      throw new EvalError(
        `la palabra "${palabra}" no aparece en \`texto_analizar\``,
      );
    }
  }

  return {
    tipo: "identificar_palabras",
    enunciado,
    pasos,
    pistas,
    explicacion,
    variables: scope.toRecord(),
    seed,
    intentos: intento,
    textoAnalizar: textoRaw,
    respuestasValidas,
  };
}
