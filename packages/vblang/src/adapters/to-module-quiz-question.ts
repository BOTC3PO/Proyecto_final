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
      return tipo;
    case "ordenar":
    case "marcar_mapa":
    case "analisis_sintactico":
    case "identificar_palabras":
      throw new AdapterError(
        `tipo de pregunta "${tipo}" no está soportado por el adaptador v1; requiere Sprint 9`,
        "tipo-no-soportado",
      );
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

  if (opciones !== undefined) result.options = opciones;
  if (answerKey !== undefined) result.answerKey = answerKey;

  const explanation = options.explanation ?? buildExplanation(gen.pasos);
  if (explanation !== undefined) result.explanation = explanation;

  const tolRel = mapTolerancia(gen);
  if (tolRel !== undefined) result.toleranciaRelativa = tolRel;

  const unidades = mapUnidades(gen);
  if (unidades !== undefined) result.unidades = unidades;

  if (gen.variables && Object.keys(gen.variables).length > 0) {
    result.datos = gen.variables;
  }

  if (gen.pasos && gen.pasos.length > 0) result.pasos = gen.pasos;

  if (options.visualSpec !== undefined) result.visualSpec = options.visualSpec;

  return result;
}
