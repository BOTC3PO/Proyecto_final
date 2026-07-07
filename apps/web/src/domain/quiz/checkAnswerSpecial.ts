/**
 * Comparadores client-side de respuesta correcta para los 4 tipos especiales
 * del Sprint 9B (ordenar, marcar_mapa, analisis_sintactico, identificar_palabras).
 *
 * El servidor también evalúa al recibir el submit, pero el cliente necesita
 * estos helpers para:
 *   - mostrar feedback inmediato (verde/rojo) en los renderers,
 *   - calcular `correctas` para los renderers post-submit,
 *   - permitir un eventual modo "práctica auto-graded" sin round-trip.
 *
 * NOTA arquitectónica: no encontré un `checkAnswer` previo centralizado en el
 * frontend — QuizAttempt simplemente delega al backend. Centralicé los nuevos
 * comparadores acá para que un sprint futuro pueda absorber también los tipos
 * base (mc/vf/input) y unificar la lógica.
 */

import type { ModuleQuizQuestion } from "../module/module.types";

export function buildCorrectasFromEtiquetas(
  etiquetas?: Array<{ palabra: string; etiqueta: string }>,
): Record<string, string> {
  const acc: Record<string, string> = {};
  for (const e of etiquetas ?? []) acc[e.palabra] = e.etiqueta;
  return acc;
}

export function checkOrdenar(
  question: ModuleQuizQuestion,
  userAnswer: unknown,
): boolean {
  if (!Array.isArray(question.answerKey)) return false;
  const correcta = question.answerKey as string[];
  const userArr = Array.isArray(userAnswer) ? (userAnswer as string[]) : [];
  if (correcta.length !== userArr.length) return false;
  return correcta.every((v, i) => v === userArr[i]);
}

function normalizeMapName(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase();
}

export function checkMarcarMapa(
  question: ModuleQuizQuestion,
  userAnswer: unknown,
): boolean {
  if (typeof userAnswer !== "string") return false;
  const modo = question.modoRespuestaMapa ?? "iso";
  if (modo === "nombre") {
    const correcta = question.respuestaNombreCorrecta;
    if (!correcta) return false;
    return normalizeMapName(userAnswer) === normalizeMapName(correcta);
  }
  return question.respuestaIsoCorrecta === userAnswer;
}

export function checkAnalisisSintactico(
  question: ModuleQuizQuestion,
  userAnswer: unknown,
): boolean {
  const correctas = buildCorrectasFromEtiquetas(question.etiquetasPedidas);
  if (!userAnswer || typeof userAnswer !== "object" || Array.isArray(userAnswer))
    return false;
  const user = userAnswer as Record<string, string>;
  const keys = Object.keys(correctas);
  if (keys.length === 0) return false;
  return keys.every((k) => correctas[k] === user[k]);
}

/**
 * PLAN-E §21 Parte B — analisis_spans: la respuesta del alumno y el answerKey
 * son arrays de strings canónicos `"desde-hasta:etiqueta"`. Comparación exacta
 * por conjunto (el puntaje proporcional lo calcula el server; acá sólo el
 * verde/rojo todo-o-nada del feedback inmediato).
 */
export function checkAnalisisSpans(
  question: ModuleQuizQuestion,
  userAnswer: unknown,
): boolean {
  return checkIdentificarPalabras(question, userAnswer);
}

export function checkIdentificarPalabras(
  question: ModuleQuizQuestion,
  userAnswer: unknown,
): boolean {
  if (!Array.isArray(question.answerKey)) return false;
  if (!Array.isArray(userAnswer)) return false;
  const correctas = new Set(question.answerKey as string[]);
  const user = new Set(userAnswer as string[]);
  if (correctas.size !== user.size) return false;
  for (const v of correctas) if (!user.has(v)) return false;
  return true;
}

/** Dispatcher: devuelve null si el tipo no es uno de los 4 especiales. */
export function checkAnswerSpecial(
  question: ModuleQuizQuestion,
  userAnswer: unknown,
): boolean | null {
  switch (question.questionType) {
    case "ordenar":
      return checkOrdenar(question, userAnswer);
    case "marcar_mapa":
      return checkMarcarMapa(question, userAnswer);
    case "analisis_sintactico":
      return checkAnalisisSintactico(question, userAnswer);
    case "analisis_spans":
      return checkAnalisisSpans(question, userAnswer);
    case "identificar_palabras":
      return checkIdentificarPalabras(question, userAnswer);
    default:
      return null;
  }
}
