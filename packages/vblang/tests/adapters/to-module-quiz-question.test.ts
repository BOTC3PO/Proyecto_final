import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { beforeEach, describe, expect, it } from "vitest";
import { AdapterError } from "../../src/adapters/errors.js";
import {
  resetIdCounter,
  toModuleQuizQuestion,
} from "../../src/adapters/to-module-quiz-question.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import type { GenerationResult } from "../../src/runtime/types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURE_DIR = resolve(__dirname, "../fixtures/valid");

function loadCompiled(name: string) {
  return compile(parse(readFileSync(resolve(FIXTURE_DIR, name), "utf8")));
}

function gen(name: string, seed: string): GenerationResult {
  return generate(loadCompiled(name), { seed });
}

describe("adapter / 16.1 MRU (input numérico)", () => {
  it("mapea a questionType input + prompt + answerKey + tolerancia relativa", () => {
    const g = gen("16_1_mru.vblang", "demo-1");
    const q = toModuleQuizQuestion(g);
    expect(q.questionType).toBe("input");
    expect(typeof q.prompt).toBe("string");
    expect(q.prompt.length).toBeGreaterThan(0);
    expect(q.prompt).toContain("km");
    expect(typeof q.answerKey).toBe("string");
    const answer = Number(q.answerKey);
    expect(Number.isFinite(answer)).toBe(true);
    expect(answer).toBeGreaterThan(0);
    expect(q.toleranciaRelativa).toBeDefined();
    expect(q.toleranciaRelativa!).toBeGreaterThan(0);
    expect(q.unidades?.resultado).toBe("km");
    expect(q.datos?.v).toBeDefined();
    expect(q.datos?.t).toBeDefined();
  });
});

describe("adapter / 16.4 energía (con pasos)", () => {
  it("explanation se construye desde pasos con \\n", () => {
    const g = gen("16_4_energia.vblang", "energia-1");
    const q = toModuleQuizQuestion(g);
    expect(q.pasos).toBeDefined();
    expect(q.pasos!.length).toBe(3);
    expect(typeof q.explanation).toBe("string");
    expect(q.explanation!).toContain("\n");
  });

  it("tolerancia 5% → toleranciaRelativa 0.05", () => {
    const g = gen("16_4_energia.vblang", "energia-2");
    const q = toModuleQuizQuestion(g);
    expect(q.toleranciaRelativa).toBe(0.05);
  });
});

describe("adapter / vf", () => {
  it("opciones [Verdadero, Falso] + answerKey según respuesta", () => {
    const src = `
enunciado: "El cielo es azul."
respuesta: verdadero
tipo: vf
`;
    const g = generate(compile(parse(src)), { seed: "vf-1" });
    const q = toModuleQuizQuestion(g);
    expect(q.questionType).toBe("vf");
    expect(q.options).toEqual(["Verdadero", "Falso"]);
    expect(q.answerKey).toBe("Verdadero");
  });

  it("respuesta falsa → answerKey 'Falso'", () => {
    const src = `
enunciado: "El cielo es verde."
respuesta: falso
tipo: vf
`;
    const g = generate(compile(parse(src)), { seed: "vf-2" });
    const q = toModuleQuizQuestion(g);
    expect(q.answerKey).toBe("Falso");
  });
});

describe("adapter / mc con opciones_explicitas", () => {
  it("options.length === N y answerKey es el texto correcto", () => {
    const src = `
enunciado: "Cual es la capital de Francia?"
respuesta: "Paris"
tipo: mc
opciones_explicitas:
  - "Madrid"
  - "Paris"
  - "Berlin"
  - "Roma"
`;
    const g = generate(compile(parse(src)), { seed: "mc-1" });
    const q = toModuleQuizQuestion(g);
    expect(q.questionType).toBe("mc");
    expect(q.options).toBeDefined();
    expect(q.options!.length).toBe(4);
    expect(q.options).toContain("Paris");
    expect(q.answerKey).toBe("Paris");
    // El array de options NO marca cuál es correcta: son sólo strings.
    expect(
      q.options!.every((o) => typeof o === "string"),
    ).toBe(true);
  });
});

describe("adapter / tipos especiales sin campos requeridos", () => {
  // Sprint 9A: estos tipos ahora SÍ están soportados, pero requieren los
  // campos específicos del shape. Si faltan, falla con `respuesta-inconsistente`.
  it("ordenar sin items/ordenCorrecto → respuesta-inconsistente", () => {
    const g: GenerationResult = {
      tipo: "ordenar",
      enunciado: "x",
      variables: {},
      seed: "s",
      intentos: 1,
    };
    expect(() => toModuleQuizQuestion(g)).toThrow(AdapterError);
    try {
      toModuleQuizQuestion(g);
    } catch (e) {
      expect((e as AdapterError).code).toBe("respuesta-inconsistente");
    }
  });

  it("marcar_mapa sin mapaId/respuestaIso → respuesta-inconsistente", () => {
    const g: GenerationResult = {
      tipo: "marcar_mapa",
      enunciado: "x",
      variables: {},
      seed: "s",
      intentos: 1,
    };
    expect(() => toModuleQuizQuestion(g)).toThrow(AdapterError);
  });
});

describe("adapter / tolerancia absoluta", () => {
  it("tolerancia 1 con respuesta 280 → ~0.00357", () => {
    const g: GenerationResult = {
      tipo: "input",
      enunciado: "x",
      respuesta: 280,
      tolerancia: { valor: 1, esPorcentaje: false },
      variables: {},
      seed: "s",
      intentos: 1,
    };
    const q = toModuleQuizQuestion(g);
    expect(q.toleranciaRelativa).toBeCloseTo(1 / 280, 5);
  });

  it("tolerancia 0 (degenerado) → 0", () => {
    const g: GenerationResult = {
      tipo: "input",
      enunciado: "x",
      respuesta: 100,
      tolerancia: { valor: 0, esPorcentaje: false },
      variables: {},
      seed: "s",
      intentos: 1,
    };
    const q = toModuleQuizQuestion(g);
    expect(q.toleranciaRelativa).toBe(0);
  });

  it("tolerancia 5% sin contexto de respuesta → 0.05", () => {
    const g: GenerationResult = {
      tipo: "input",
      enunciado: "x",
      respuesta: 50,
      tolerancia: { valor: 5, esPorcentaje: true },
      variables: {},
      seed: "s",
      intentos: 1,
    };
    const q = toModuleQuizQuestion(g);
    expect(q.toleranciaRelativa).toBe(0.05);
  });
});

describe("adapter / generateId determinístico vs counter", () => {
  beforeEach(() => resetIdCounter());

  it("mismo seed sin reset → IDs distintos (counter incrementa)", () => {
    const g: GenerationResult = {
      tipo: "input",
      enunciado: "x",
      respuesta: 1,
      variables: {},
      seed: "fixed-seed",
      intentos: 1,
    };
    const q1 = toModuleQuizQuestion(g);
    const q2 = toModuleQuizQuestion(g);
    expect(q1.id).not.toBe(q2.id);
    // Pero el prefijo del hash debe coincidir (mismo seed).
    const prefix = q1.id.split("-").slice(0, 2).join("-");
    expect(q2.id.startsWith(prefix)).toBe(true);
  });

  it("mismo seed con reset entre llamadas → mismo ID", () => {
    const g: GenerationResult = {
      tipo: "input",
      enunciado: "x",
      respuesta: 1,
      variables: {},
      seed: "fixed-seed",
      intentos: 1,
    };
    resetIdCounter();
    const q1 = toModuleQuizQuestion(g);
    resetIdCounter();
    const q2 = toModuleQuizQuestion(g);
    expect(q1.id).toBe(q2.id);
  });

  it("ID custom desde options.id se respeta", () => {
    const g: GenerationResult = {
      tipo: "input",
      enunciado: "x",
      respuesta: 1,
      variables: {},
      seed: "s",
      intentos: 1,
    };
    const q = toModuleQuizQuestion(g, { id: "custom-id-42" });
    expect(q.id).toBe("custom-id-42");
  });
});

describe("adapter / respuestas_validas", () => {
  it("answerKey es array de strings", () => {
    const g = gen("16_3_cuadratica.vblang", "cuad-1");
    const q = toModuleQuizQuestion(g);
    expect(Array.isArray(q.answerKey)).toBe(true);
    expect((q.answerKey as string[]).length).toBe(2);
  });
});

describe("adapter / focus + visualSpec", () => {
  it("focus pasa a la salida", () => {
    const g: GenerationResult = {
      tipo: "input",
      enunciado: "x",
      respuesta: 1,
      variables: {},
      seed: "s",
      intentos: 1,
    };
    const q = toModuleQuizQuestion(g, { focus: "fisica/cinematica/MRU" });
    expect(q.focus).toBe("fisica/cinematica/MRU");
  });

  it("visualSpec custom pasa a la salida", () => {
    const g: GenerationResult = {
      tipo: "input",
      enunciado: "x",
      respuesta: 1,
      variables: {},
      seed: "s",
      intentos: 1,
    };
    const visualSpec = { kind: "latex", content: "x^2" };
    const q = toModuleQuizQuestion(g, { visualSpec });
    expect(q.visualSpec).toEqual(visualSpec);
  });
});
