import { formatoDefault } from "../evaluator/interpolation.js";
import { fnv1a } from "../runtime/prng.js";
import type { GenerationResult, OpcionGenerada } from "../runtime/types.js";
import { AdapterError } from "./errors.js";
import type {
  AdapterOptions,
  ModuleQuizQuestion,
  ModuleQuizQuestionType,
} from "./module-quiz-question.js";

/** Counter incremental por proceso para que IDs con mismo seed difieran. */
let idCounter = 0;

/**
 * Reinicia el counter de IDs. Útil para tests deterministas.
 * No es necesario en producción.
 */
export function resetIdCounter(): void {
  idCounter = 0;
}

function generateId(seed: string): string {
  const hash = fnv1a(seed).toString(16).padStart(8, "0");
  const c = idCounter++;
  return `vb-${hash}-${c}`;
}

function mapTipo(tipo: GenerationResult["tipo"]): ModuleQuizQuestionType {
  switch (tipo) {
    case "input":
    case "mc":
    case "vf":
    case "completar":
    case "ordenar":
    case "marcar_mapa":
    case "analisis_sintactico":
    case "identificar_palabras":
    case "abierta":
      return tipo;
    default:
      throw new AdapterError(
        `tipo de pregunta desconocido "${String(tipo)}"`,
        "tipo-no-soportado",
      );
  }
}

function mapOpciones(opciones?: OpcionGenerada[]): string[] | undefined {
  if (!opciones) return undefined;
  return opciones.map((o) => o.texto);
}

function mapAnswerKey(gen: GenerationResult): string | string[] | undefined {
  if (gen.opciones && gen.opciones.length > 0) {
    const correcta = gen.opciones.find((o) => o.correcta);
    if (!correcta) {
      throw new AdapterError(
        `ninguna opción está marcada como correcta`,
        "sin-respuesta-correcta",
      );
    }
    return correcta.texto;
  }
  if (gen.respuestasValidas && gen.respuestasValidas.length > 0) {
    return gen.respuestasValidas.map((v) => formatoDefault(v));
  }
  if (gen.respuesta !== undefined) {
    return formatoDefault(gen.respuesta);
  }
  return undefined;
}

function mapTolerancia(gen: GenerationResult): number | undefined {
  if (!gen.tolerancia) return undefined;
  const { valor, esPorcentaje } = gen.tolerancia;
  if (esPorcentaje) return valor / 100;
  // Tolerancia absoluta → ratio dividiendo por |respuesta|.
  if (typeof gen.respuesta === "number" && Math.abs(gen.respuesta) > 1e-9) {
    return valor / Math.abs(gen.respuesta);
  }
  // Degenerado: respuesta no numérica o muy chica.
  return valor;
}

function mapUnidades(gen: GenerationResult): Record<string, string> | undefined {
  if (gen.unidad) return { resultado: gen.unidad };
  return undefined;
}

function buildExplanation(pasos?: string[]): string | undefined {
  if (!pasos || pasos.length === 0) return undefined;
  return pasos.join("\n");
}

/**
 * Convierte el resultado de `generate()` al shape canónico que consume
 * el reproductor de quizzes (`ModuleQuizQuestion`).
 *
 * Reglas principales:
 *  - tipos especiales (ordenar/marcar_mapa/…) lanzan AdapterError.
 *  - `options` es `string[]`; la marca de "correcta" se preserva en `answerKey`.
 *  - `toleranciaRelativa` es siempre ratio:
 *     - porcentaje → valor / 100
 *     - absoluto con respuesta numérica → valor / |respuesta|
 *     - absoluto degenerado → valor tal cual
 *  - `unidades` usa la convención `{ resultado: <unidad> }`.
 *  - `explanation` se construye desde `pasos` si el caller no la pasa.
 */
export function toModuleQuizQuestion(
  gen: GenerationResult,
  options: AdapterOptions = {},
): ModuleQuizQuestion {
  const questionType = mapTipo(gen.tipo);
  const opciones = mapOpciones(gen.opciones);
  const answerKey = mapAnswerKey(gen);

  const result: ModuleQuizQuestion = {
    id: options.id ?? generateId(gen.seed),
    prompt: gen.enunciado,
    questionType,
    focus: options.focus ?? null,
  };

  if (options.points !== undefined) result.points = options.points;

  if (opciones !== undefined) result.options = opciones;
  if (answerKey !== undefined) result.answerKey = answerKey;

  // Sprint 9A — tipos especiales: campos específicos del shape.
  if (gen.tipo === "ordenar") {
    if (!gen.items || !gen.ordenCorrecto) {
      throw new AdapterError(
        "ordenar requiere `items` y `ordenCorrecto` en GenerationResult",
        "respuesta-inconsistente",
      );
    }
    result.items = gen.items;
    result.answerKey = gen.ordenCorrecto;
  } else if (gen.tipo === "marcar_mapa") {
    if (!gen.mapaId || !gen.respuestaIso) {
      throw new AdapterError(
        "marcar_mapa requiere `mapaId` y `respuestaIso` en GenerationResult",
        "respuesta-inconsistente",
      );
    }
    result.mapaId = gen.mapaId;
    result.respuestaIsoCorrecta = gen.respuestaIso;
    result.answerKey = gen.respuestaIso;
    if (gen.mapaId === "world_states_provinces" && gen.respuestaIso.includes("-")) {
      result.paisIso = gen.respuestaIso.substring(0, 2);
    }
  } else if (gen.tipo === "analisis_sintactico") {
    if (!gen.textoAnalizar || !gen.etiquetasPedidas) {
      throw new AdapterError(
        "analisis_sintactico requiere `textoAnalizar` y `etiquetasPedidas` en GenerationResult",
        "respuesta-inconsistente",
      );
    }
    result.textoAnalizar = gen.textoAnalizar;
    result.etiquetasPedidas = gen.etiquetasPedidas;
    // No answerKey: las respuestas correctas están embebidas en etiquetasPedidas.
  } else if (gen.tipo === "identificar_palabras") {
    if (!gen.textoAnalizar || !gen.respuestasValidas) {
      throw new AdapterError(
        "identificar_palabras requiere `textoAnalizar` y `respuestasValidas` en GenerationResult",
        "respuesta-inconsistente",
      );
    }
    result.textoAnalizar = gen.textoAnalizar;
    result.answerKey = gen.respuestasValidas.map((v) => String(v));
  } else if (gen.tipo === "abierta") {
    // Sin answerKey: la pregunta abierta no tiene clave de respuesta.
    const modo = gen.correccion ?? "ninguna";
    result.correccion = modo;
    if (modo === "manual") result.manualGrading = true;
  }

  const explanation =
    options.explanation ??
    // F2-03: `explicacion:` de la plantilla gana sobre el fallback
    // `buildExplanation(pasos)`. El orden de precedencia queda:
    //   1. `options.explanation` (caller override).
    //   2. `gen.explicacion` (F2-03, explícita en el DSL).
    //   3. `buildExplanation(gen.pasos)` (fallback legacy).
    //   4. `País correcto: <nombre>` para `marcar_mapa` (fallback final).
    gen.explicacion ??
    buildExplanation(gen.pasos) ??
    (gen.tipo === "marcar_mapa" && gen.respuestaNombre
      ? `Respuesta correcta: ${gen.respuestaNombre}`
      : undefined);
  if (explanation !== undefined) result.explanation = explanation;

  const tolRel = mapTolerancia(gen);
  if (tolRel !== undefined) result.toleranciaRelativa = tolRel;

  // F2-04: tolerancia absoluta. Si la plantilla la declara, se propaga tal
  // cual (siempre es absoluta, sin esPorcentaje). Default ausente = 0,
  // que colapsa el criterio al `|r-e| ≤ |e|·tol_rel` previo.
  if (gen.toleranciaAbs !== undefined && gen.toleranciaAbs > 0) {
    result.toleranciaAbsoluta = gen.toleranciaAbs;
  }

  const unidades = mapUnidades(gen);
  if (unidades !== undefined) result.unidades = unidades;

  if (gen.variables && Object.keys(gen.variables).length > 0) {
    result.datos = gen.variables;
  }

  if (gen.pasos && gen.pasos.length > 0) result.pasos = gen.pasos;

  // F2-02: pistas escalonadas (texto interpolado). Se propagan tal cual; el
  // costo en puntos lo decide la composición del quiz, no el adaptador.
  if (gen.pistas && gen.pistas.length > 0) result.pistas = gen.pistas;

  // El visual explícito del caller gana; si no hay, usamos el que aportó el
  // generador asistido (propagado en GenerationResult.visual).
  if (options.visualSpec !== undefined) result.visualSpec = options.visualSpec;
  else if (gen.visual !== undefined) result.visualSpec = gen.visual;

  return result;
}
