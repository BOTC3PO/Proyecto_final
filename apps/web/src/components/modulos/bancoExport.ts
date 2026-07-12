/**
 * Mapeo del banco de preguntas hand-authored al shape JSON que exporta
 * el botón "Exportar JSON" de `BancoPreguntasEditor` (Tarea 20).
 *
 * Shape exportado:
 *   { enunciado, questionType: "mc" | "vf" | "input",
 *     options: string[], answerKey: string | string[],
 *     explanation: string }
 *
 * El banco (`Question` de generadoresV2/basic/types) distingue MC y TF:
 *  - MC: { type:"mc", prompt, options:[{text, correct, because}], explanation, tags }
 *  - TF: { type:"tf", prompt, answer:true|false, becauseTrue, becauseFalse, tags }
 */

import type { MCQuestion, Question, TFQuestion } from "../../generadoresV2/basic/types";

/** Item del array `preguntas` que produce el export. */
export type ExportedBancoQuestion = {
  enunciado: string;
  questionType: "mc" | "vf";
  options: string[];
  answerKey: string;
  explanation: string;
};

/** Envoltorio del archivo completo. Coincide con `exercisesJsonExample`
 *  que el import usa como caso válido. */
export type ExportedBancoFile = {
  preguntas: ExportedBancoQuestion[];
  /** Metadata liviana para identificar el origen al reimportar. */
  meta?: {
    source: "banco-preguntas";
    exportedAt: string;
  };
};

function trimOrEmpty(value: string | undefined | null): string {
  return (value ?? "").trim();
}

export function bancoQuestionToExport(q: Question): ExportedBancoQuestion {
  if (q.type === "tf") {
    const tf = q as TFQuestion;
    const answerKey = tf.answer ? "true" : "false";
    const explanation = trimOrEmpty(tf.becauseTrue) || trimOrEmpty(tf.becauseFalse);
    return {
      enunciado: trimOrEmpty(tf.prompt),
      questionType: "vf",
      options: ["true", "false"],
      answerKey,
      explanation,
    };
  }
  // MC u otros: tratamos como MC.
  const mc = q as MCQuestion;
  const optionsTexts = (mc.options ?? []).map((o) => trimOrEmpty(o.text));
  // answerKey: texto de la opcion marcada como correcta; si hay varias
  // marcadas, usamos la primera (consistente con el editor que solo
  // permite una `correct:true` a la vez via radio).
  const correctOpt = (mc.options ?? []).find((o) => o.correct);
  const answerKey = correctOpt
    ? trimOrEmpty(correctOpt.text)
    : trimOrEmpty((mc as { answerKey?: string }).answerKey) || optionsTexts[0] || "";
  return {
    enunciado: trimOrEmpty(mc.prompt),
    questionType: "mc",
    options: optionsTexts,
    answerKey,
    explanation: trimOrEmpty(mc.explanation),
  };
}

export function bancoToExportFile(questions: Question[]): ExportedBancoFile {
  return {
    preguntas: questions.map(bancoQuestionToExport),
    meta: {
      source: "banco-preguntas",
      exportedAt: new Date().toISOString(),
    },
  };
}

export function exportBancoToJson(questions: Question[]): string {
  return JSON.stringify(bancoToExportFile(questions), null, 2);
}

/** Construye un nombre de archivo `banco-preguntas-YYYY-MM-DD.json`. */
export function buildBancoFileName(now: Date = new Date()): string {
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `banco-preguntas-${yyyy}-${mm}-${dd}.json`;
}
