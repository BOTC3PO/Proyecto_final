/**
 * WO07 — pregunta `abierta` (ninguna / manual).
 *
 * Cubre el camino completo en el paquete: parser relaja la ausencia de
 * `respuesta` SÓLO para `abierta`, el runtime genera sin clave de respuesta y
 * con el modo de corrección, el adapter no emite `answerKey` y marca
 * `manualGrading`, y el serializer hace round-trip del bloque `correccion`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { ParseError } from "../../src/parser/errors.js";
import { serialize } from "../../src/serializer/serialize.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";

const DSL_MANUAL = `enunciado: "Explicá la fotosíntesis."
tipo: abierta
correccion: manual
`;

const DSL_NINGUNA = `enunciado: "Comentá lo que aprendiste."
tipo: abierta
correccion: ninguna
`;

describe("abierta · parser", () => {
  it("acepta una pregunta abierta sin clave de respuesta", () => {
    const p = parse(DSL_MANUAL);
    expect(p.tipoInferido).toBe("abierta");
    expect(p.bloques.some((b) => b.kind === "correccion")).toBe(true);
  });

  it("la ausencia de respuesta sin `tipo: abierta` sigue siendo un error", () => {
    expect(() => parse(`enunciado: "¿algo?"\n`)).toThrow(ParseError);
  });

  it("`tipo: abierta` con `respuesta:` es un error", () => {
    expect(() =>
      parse(`enunciado: "¿algo?"\ntipo: abierta\nrespuesta: "x"\n`),
    ).toThrow(ParseError);
  });

  it("modo de corrección inválido es un error de parseo", () => {
    expect(() =>
      parse(`enunciado: "x"\ntipo: abierta\ncorreccion: auto\n`),
    ).toThrow(ParseError);
  });

  it("abierta sin `correccion:` parsea (default ninguna en runtime)", () => {
    const p = parse(`enunciado: "x"\ntipo: abierta\n`);
    expect(p.tipoInferido).toBe("abierta");
  });
});

describe("abierta · lint", () => {
  it("no produce errores de lint", () => {
    for (const dsl of [DSL_MANUAL, DSL_NINGUNA]) {
      const report = lint(parse(dsl));
      expect(report.errors).toEqual([]);
    }
  });

  it("`correccion:` fuera de abierta produce warning", () => {
    const report = lint(
      parse(`enunciado: "x"\ntipo: vf\nrespuesta: verdadero\ncorreccion: manual\n`),
    );
    expect(report.warnings.some((w) => w.code === "correccion-fuera-de-abierta")).toBe(
      true,
    );
  });
});

describe("abierta · runtime", () => {
  it("genera sin respuesta y con el modo de corrección", () => {
    const gen = generate(compile(parse(DSL_MANUAL)), { seed: "s1" });
    expect(gen.tipo).toBe("abierta");
    expect(gen.respuesta).toBeUndefined();
    expect(gen.correccion).toBe("manual");
  });

  it("default ninguna cuando no se declara correccion", () => {
    const gen = generate(compile(parse(`enunciado: "x"\ntipo: abierta\n`)), {
      seed: "s2",
    });
    expect(gen.correccion).toBe("ninguna");
  });
});

describe("abierta · adapter", () => {
  it("manual: sin answerKey, con correccion y manualGrading", () => {
    const q = toModuleQuizQuestion(
      generate(compile(parse(DSL_MANUAL)), { seed: "s3" }),
      { id: "q1", points: 5 },
    );
    expect(q.questionType).toBe("abierta");
    expect(q.answerKey).toBeUndefined();
    expect(q.correccion).toBe("manual");
    expect(q.manualGrading).toBe(true);
    expect(q.points).toBe(5);
  });

  it("ninguna: sin answerKey ni manualGrading", () => {
    const q = toModuleQuizQuestion(
      generate(compile(parse(DSL_NINGUNA)), { seed: "s4" }),
      { id: "q2" },
    );
    expect(q.correccion).toBe("ninguna");
    expect(q.answerKey).toBeUndefined();
    expect(q.manualGrading).toBeUndefined();
  });
});

describe("abierta · serializer", () => {
  it("round-trip lossless del bloque correccion", () => {
    const original = parse(DSL_MANUAL);
    const reparsed = parse(serialize(original));
    const modo = (b: typeof reparsed) =>
      b.bloques.find((x) => x.kind === "correccion");
    expect(modo(reparsed)).toMatchObject({ kind: "correccion", modo: "manual" });
  });
});
