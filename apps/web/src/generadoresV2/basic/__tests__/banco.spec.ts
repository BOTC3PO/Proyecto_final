/**
 * Tests del banco hand-authored como fuente del pool (WO08).
 *
 * Cubre: origen de templates, adapter multi→single (mc/tf/fill-blank/match),
 * la integración con la política de pool de WO05 (todas | K; fijo/azar/
 * elige_alumno) y el registro/descriptores para el provider.
 */
import { afterEach, describe, expect, it } from "vitest";
import {
  buildQuizTemplate,
  clearBancoTemplates,
  getDescriptoresBasic,
  mapBancoQuestion,
  registerBancoTemplate,
  runBanco,
  VF_FALSE,
  VF_TRUE,
} from "../banco";
import type {
  FillBlankQuestion,
  MatchQuestion,
  MCQuestion,
  Question,
  TFQuestion,
} from "../types";
import { DeterministicPrng } from "../../core/prng";

const mc = (id: string, correct = "B"): MCQuestion => ({
  id,
  type: "mc",
  prompt: `Pregunta ${id}`,
  options: [
    { text: "A", correct: correct === "A", because: "" },
    { text: "B", correct: correct === "B", because: "" },
    { text: "C", correct: correct === "C", because: "" },
  ],
  explanation: `Explica ${id}`,
  tags: [],
});

const tf = (id: string, answer: boolean): TFQuestion => ({
  id,
  type: "tf",
  prompt: `VF ${id}`,
  answer,
  becauseTrue: "porque sí",
  becauseFalse: "porque no",
  tags: [],
});

const fillSingle = (id: string): FillBlankQuestion => ({
  id,
  type: "fill-blank",
  prompt: `Completar ${id}`,
  template: "La capital es {{c}}",
  blanks: [{ id: "c", correctAnswers: ["Madrid", "madrid"] }],
});

const fillMulti = (id: string): FillBlankQuestion => ({
  id,
  type: "fill-blank",
  prompt: `Completar ${id}`,
  template: "{{a}} y {{b}}",
  blanks: [
    { id: "a", correctAnswers: ["x"] },
    { id: "b", correctAnswers: ["y"] },
  ],
});

const match = (id: string): MatchQuestion => ({
  id,
  type: "match",
  prompt: `Unir ${id}`,
  pairs: [{ left: "1", right: "uno" }],
  explanation: "",
});

afterEach(() => clearBancoTemplates());

describe("buildQuizTemplate", () => {
  it("envuelve el pool y deja la selección en 'todas'", () => {
    const t = buildQuizTemplate([mc("a"), mc("b")], { id: "banco1", materia: "fisica" });
    expect(t.pool).toHaveLength(2);
    expect(t.metadata.id).toBe("banco1");
    expect(t.metadata.materia).toBe("fisica");
    expect(t.settings.displayCount).toBe(2);
    expect(t.settings.selectionDefault).toEqual({ mode: "fixed" });
  });
});

describe("mapBancoQuestion (adapter multi→single)", () => {
  it("mc → mc con answerKey = texto correcto", () => {
    const q = mc("a", "C");
    const generated = {
      id: "a",
      type: "mc" as const,
      prompt: "Pregunta a",
      options: [
        { optionId: "opt_0", text: "C" },
        { optionId: "opt_1", text: "A" },
        { optionId: "opt_2", text: "B" },
      ],
    };
    const mq = mapBancoQuestion(q, generated, { points: 2, focus: "banco:x" });
    expect(mq).not.toBeNull();
    expect(mq!.questionType).toBe("mc");
    expect(mq!.options).toEqual(["C", "A", "B"]);
    expect(mq!.answerKey).toBe("C");
    expect(mq!.explanation).toBe("Explica a");
    expect(mq!.points).toBe(2);
    expect(mq!.focus).toBe("banco:x");
  });

  it("tf → vf con answerKey Verdadero/Falso y explicación según la respuesta", () => {
    const generatedT = { id: "t", type: "tf" as const, prompt: "VF t" };
    const v = mapBancoQuestion(tf("t", true), generatedT)!;
    expect(v.questionType).toBe("vf");
    expect(v.answerKey).toBe(VF_TRUE);
    expect(v.explanation).toBe("porque sí");

    const f = mapBancoQuestion(tf("f", false), { ...generatedT, id: "f" })!;
    expect(f.answerKey).toBe(VF_FALSE);
    expect(f.explanation).toBe("porque no");
  });

  it("fill-blank de un solo blank → completar (admite múltiples respuestas)", () => {
    const generated = { id: "fb", type: "fill-blank" as const, prompt: "Completar fb" };
    const mq = mapBancoQuestion(fillSingle("fb"), generated)!;
    expect(mq.questionType).toBe("completar");
    expect(mq.answerKey).toEqual(["Madrid", "madrid"]);
  });

  it("fill-blank multi-blank → null (no representable)", () => {
    const generated = { id: "fb", type: "fill-blank" as const, prompt: "x" };
    expect(mapBancoQuestion(fillMulti("fb"), generated)).toBeNull();
  });

  it("match → null (sin equivalente)", () => {
    const generated = { id: "m", type: "match" as const, prompt: "x" };
    expect(mapBancoQuestion(match("m"), generated)).toBeNull();
  });

  it("mc sin opción correcta → null", () => {
    const q: MCQuestion = {
      ...mc("a"),
      options: [{ text: "A", correct: false, because: "" }],
    };
    const generated = {
      id: "a",
      type: "mc" as const,
      prompt: "p",
      options: [{ optionId: "opt_0", text: "A" }],
    };
    expect(mapBancoQuestion(q, generated)).toBeNull();
  });
});

describe("runBanco (política de pool de WO05)", () => {
  const pool: Question[] = [mc("a"), mc("b"), mc("c"), mc("d")];
  const template = buildQuizTemplate(pool, { id: "b1" });

  it("'todas' presenta todas en orden", () => {
    const out = runBanco(template, {
      seed: "s",
      composition: { tomar: "todas", seleccion: "fijo" },
    });
    expect(out.map((q) => q.id)).toEqual(["a", "b", "c", "d"]);
    expect(out.every((q) => q.focus === "banco:b1")).toBe(true);
  });

  it("'fijo' toma las primeras K", () => {
    const out = runBanco(template, {
      seed: "s",
      composition: { tomar: 2, seleccion: "fijo" },
    });
    expect(out.map((q) => q.id)).toEqual(["a", "b"]);
  });

  it("'azar' es determinístico por seed y toma K", () => {
    const comp = { tomar: 2, seleccion: "azar" as const };
    const a = runBanco(template, { seed: "seed-1", composition: comp });
    const b = runBanco(template, { seed: "seed-1", composition: comp });
    expect(a.map((q) => q.id)).toEqual(b.map((q) => q.id));
    expect(a).toHaveLength(2);
  });

  it("'elige_alumno' presenta TODO el grupo", () => {
    const out = runBanco(template, {
      seed: "s",
      composition: { tomar: 1, seleccion: "elige_alumno" },
    });
    expect(out).toHaveLength(4);
  });

  it("descarta las preguntas no representables antes de aplicar la política", () => {
    const mixed = buildQuizTemplate(
      [mc("a"), match("m"), fillMulti("fb"), mc("b")],
      { id: "mix" },
    );
    const out = runBanco(mixed, {
      seed: "s",
      composition: { tomar: "todas", seleccion: "fijo" },
    });
    // match + fill-blank multi se descartan → quedan los 2 mc.
    expect(out.map((q) => q.id)).toEqual(["a", "b"]);
  });

  it("pool vacío → []", () => {
    const empty = buildQuizTemplate([], { id: "empty" });
    expect(runBanco(empty, { seed: "s" })).toEqual([]);
  });

  it("propaga el peso por defecto de la composición", () => {
    const out = runBanco(template, {
      seed: "s",
      composition: { tomar: "todas", seleccion: "fijo", pesoPorDefecto: 3 },
    });
    expect(out.every((q) => q.points === 3)).toBe(true);
  });
});

describe("registro + descriptores para el provider (tarea 3)", () => {
  it("sin bancos registrados → []", () => {
    expect(getDescriptoresBasic(new DeterministicPrng(0))).toEqual([]);
  });

  it("un banco registrado se expone como descriptor que genera un ejercicio", () => {
    registerBancoTemplate(buildQuizTemplate([mc("a"), tf("t", true)], { id: "b1" }));
    const descriptors = getDescriptoresBasic(new DeterministicPrng(0));
    expect(descriptors).toHaveLength(1);
    expect(descriptors[0].id).toBe("basic/b1");

    const ej = descriptors[0].generate("intermedio", new DeterministicPrng(7));
    expect(["quiz", "completar"]).toContain(ej.tipo);
    expect(ej.generatorId).toBe("basic/b1");
  });

  it("clearBancoTemplates limpia el registro", () => {
    registerBancoTemplate(buildQuizTemplate([mc("a")], { id: "b1" }));
    clearBancoTemplates();
    expect(getDescriptoresBasic(new DeterministicPrng(0))).toEqual([]);
  });
});
