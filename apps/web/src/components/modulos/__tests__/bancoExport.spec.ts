/**
 * Tests del exportador del banco de preguntas (Tarea 20) +
 * round-trip export -> import (Tarea 20, aceptacion).
 *
 * El round-trip asegura que el shape exportado, al reimportarse con la
 * lógica de normalización esperada, produce las mismas preguntas.
 */

import { describe, expect, it } from "vitest";
import {
  bancoToExportFile,
  buildBancoFileName,
  exportBancoToJson,
} from "../bancoExport";
import type { MCQuestion, TFQuestion } from "../../../generadoresV2/basic/types";

// Replica minima de la logica de normalizacion esperada del importador
// (buildQuestion), copiada textualmente para el test de round-trip.
// Mantener en sync si cambia el shape exportado.
type ImportedQuestion = {
  id: string;
  prompt: string;
  questionType: "mc" | "vf" | "input";
  options: string[];
  answerKey: string | string[];
  explanation: string;
};

const isNonEmptyString = (v: unknown): v is string =>
  typeof v === "string" && v.trim().length > 0;

const normalizeOptions = (raw: unknown): string[] => {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((o) => (isNonEmptyString(o) ? o.trim() : ""))
    .filter(Boolean);
};

const normalizeAnswerKey = (raw: unknown): string | string[] => {
  if (Array.isArray(raw))
    return raw.filter(isNonEmptyString).map((s) => s.trim());
  if (typeof raw === "string") return raw.trim();
  if (typeof raw === "number" && Number.isFinite(raw)) return String(raw);
  return "";
};

const simulateImport = (json: unknown): ImportedQuestion[] => {
  const value = json as { preguntas?: unknown };
  const preguntas = Array.isArray(value.preguntas) ? value.preguntas : [];
  return preguntas.map((p, index) => {
    const pregunta = p as Record<string, unknown>;
    const prompt = isNonEmptyString(pregunta.enunciado)
      ? pregunta.enunciado
      : isNonEmptyString(pregunta.prompt)
        ? (pregunta.prompt as string)
        : `Pregunta ${index + 1}`;
    const qtRaw = pregunta.questionType ?? pregunta.tipo;
    const questionType: "mc" | "vf" | "input" =
      qtRaw === "vf" || qtRaw === "input" || qtRaw === "mc" ? qtRaw : "mc";
    const options = questionType === "input" ? [] : normalizeOptions(pregunta.options);
    return {
      id: `imported-${index}`,
      prompt: prompt.trim(),
      questionType,
      options,
      answerKey: normalizeAnswerKey(pregunta.answerKey ?? pregunta.solucion),
      explanation: isNonEmptyString(pregunta.explanation)
        ? (pregunta.explanation as string).trim()
        : isNonEmptyString(pregunta.explicacion)
          ? (pregunta.explicacion as string).trim()
          : "",
    };
  });
};

const MC: MCQuestion = {
  id: "mc-1",
  type: "mc",
  prompt: "¿Cuál es la fórmula de la velocidad media?",
  options: [
    { text: "v = d / t", correct: true, because: "" },
    { text: "v = t / d", correct: false, because: "" },
    { text: "v = d * t", correct: false, because: "" },
  ],
  explanation: "Se calcula como distancia dividida por tiempo.",
  tags: [],
};

const TF: TFQuestion = {
  id: "tf-1",
  type: "tf",
  prompt: "La Tierra gira alrededor del Sol.",
  answer: true,
  becauseTrue: "Así es, heliocentrismo.",
  becauseFalse: "",
  tags: [],
};

describe("bancoExport", () => {
  it("convierte una pregunta MC al shape que el import acepta", () => {
    const file = bancoToExportFile([MC]);
    expect(file.preguntas).toHaveLength(1);
    const exp = file.preguntas[0];
    expect(exp.enunciado).toBe(MC.prompt);
    expect(exp.questionType).toBe("mc");
    expect(exp.options).toEqual(["v = d / t", "v = t / d", "v = d * t"]);
    expect(exp.answerKey).toBe("v = d / t");
    expect(exp.explanation).toBe(MC.explanation);
    expect(file.meta?.source).toBe("banco-preguntas");
  });

  it("convierte una pregunta TF al shape que el import acepta", () => {
    const file = bancoToExportFile([TF]);
    const exp = file.preguntas[0];
    expect(exp.questionType).toBe("vf");
    expect(exp.options).toEqual(["true", "false"]);
    expect(exp.answerKey).toBe("true");
    // becauseTrue tiene prioridad sobre becauseFalse (definido en el orden).
    expect(exp.explanation).toBe("Así es, heliocentrismo.");
  });

  it("exportBancoToJson devuelve un string JSON parseable", () => {
    const json = exportBancoToJson([MC, TF]);
    const parsed = JSON.parse(json);
    expect(Array.isArray(parsed.preguntas)).toBe(true);
    expect(parsed.preguntas).toHaveLength(2);
  });

  it("buildBancoFileName devuelve banco-preguntas-YYYY-MM-DD.json", () => {
    const fixed = new Date(2026, 5, 7); // 7 de junio
    const name = buildBancoFileName(fixed);
    expect(name).toBe("banco-preguntas-2026-06-07.json");
  });
});

describe("round-trip export -> import", () => {
  it("preserva enunciado, opciones y answerKey tras reimportar", () => {
    const json = exportBancoToJson([MC, TF]);
    const imported = simulateImport(JSON.parse(json));
    expect(imported).toHaveLength(2);

    // MC
    const mcImp = imported[0];
    expect(mcImp.prompt).toBe(MC.prompt);
    expect(mcImp.questionType).toBe("mc");
    expect(mcImp.options).toEqual(["v = d / t", "v = t / d", "v = d * t"]);
    expect(mcImp.answerKey).toBe("v = d / t");
    expect(mcImp.explanation).toBe(MC.explanation);

    // TF
    const tfImp = imported[1];
    expect(tfImp.prompt).toBe(TF.prompt);
    expect(tfImp.questionType).toBe("vf");
    expect(tfImp.options).toEqual(["true", "false"]);
    expect(tfImp.answerKey).toBe("true");
    expect(tfImp.explanation).toBe("Así es, heliocentrismo.");
  });

  it("banco vacio exporta preguntas=[]", () => {
    const file = bancoToExportFile([]);
    expect(file.preguntas).toEqual([]);
  });
});
