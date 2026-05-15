import type { Ejercicio } from "../../generadoresV2/core/types";
import type { ModuleQuizQuestion } from "../module/module.types";

function interpolatePrompt(prompt: string, datos?: Record<string, unknown>): string {
  if (!datos || !prompt.includes("{")) return prompt;
  return prompt.replace(/\{(\w+)\}/g, (match, key) => {
    const val = datos[key];
    if (val === undefined || val === null) return match;
    return String(val);
  });
}

export function ejercicioToQuestion(e: Ejercicio): ModuleQuizQuestion {
  const base = {
    id: e.id,
    focus: e.subtipo,
    visualSpec: e.visual,
  };
  if (e.tipo === "quiz") {
    return {
      ...base,
      prompt: interpolatePrompt(e.enunciado, e.datos),
      questionType: "mc",
      options: e.opciones,
      answerKey: e.opciones[e.indiceCorrecto],
      explanation: e.explicacion,
      pasos: e.pasos,
      datos: e.datos as Record<string, unknown> | undefined,
    };
  }
  if (e.tipo === "completar") {
    return {
      ...base,
      prompt: interpolatePrompt(e.enunciado, undefined),
      questionType: "completar",
      answerKey: e.respuestaCorrecta,
      explanation: e.explicacion,
    };
  }
  // numerico
  return {
    ...base,
    prompt: interpolatePrompt(e.enunciado, e.datos),
    questionType: "input",
    answerKey: String(e.resultado),
    toleranciaRelativa: e.toleranciaRelativa,
    unidades: e.unidades,
    datos: e.datos as Record<string, unknown>,
    pasos: e.pasos,
  };
}
