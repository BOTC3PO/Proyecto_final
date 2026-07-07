/**
 * PLAN-E §21 Parte A — mc de selección múltiple.
 *
 * Cubre: parser (multiple/puntaje_parcial), round-trip, guards de compile,
 * generate (varias correctas + flags) y adapter (answerKey array).
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { serialize } from "../../src/serializer/serialize.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";

const PLANTILLA_MULTIPLE = `enunciado: "Marcá los divisores primos de 6."
tipo: mc
multiple: true
puntaje_parcial: proporcional
opciones_explicitas:
  - "2"
  - "3"
  - "4"
  - "6"
respuestas_validas:
  - "2"
  - "3"
`;

function stripLoc<T>(value: T): T {
  if (Array.isArray(value)) return value.map(stripLoc) as unknown as T;
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(value as Record<string, unknown>)) {
      if (k === "loc") continue;
      out[k] = stripLoc((value as Record<string, unknown>)[k]);
    }
    return out as unknown as T;
  }
  return value;
}

describe("parser / multiple + puntaje_parcial", () => {
  it("parsea ambos bloques", () => {
    const p = parse(PLANTILLA_MULTIPLE);
    const kinds = p.bloques.map((b) => b.kind);
    expect(kinds).toContain("multiple");
    expect(kinds).toContain("puntaje_parcial");
  });

  it("rechaza multiple con valor no booleano", () => {
    expect(() => parse('enunciado: "x"\nmultiple: quizas\nrespuesta: 1\n')).toThrow(
      /`multiple:` debe ser/,
    );
  });

  it("rechaza puntaje_parcial desconocido", () => {
    expect(() =>
      parse('enunciado: "x"\npuntaje_parcial: mitad\nrespuesta: 1\n'),
    ).toThrow(/Modo de puntaje desconocido/);
  });

  it("round-trip preserva multiple y puntaje_parcial", () => {
    const original = parse(PLANTILLA_MULTIPLE);
    const reparsed = parse(serialize(original));
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
  });
});

describe("compile / guards de multiple", () => {
  it("rechaza multiple sin tipo mc", () => {
    const src = 'enunciado: "x"\nmultiple: true\nrespuesta: 1\n';
    expect(() => compile(parse(src))).toThrow(/requiere `tipo: mc`/);
  });

  it("rechaza multiple mc sin opciones_explicitas", () => {
    const src =
      'enunciado: "x"\ntipo: mc\nopciones: 4\nmultiple: true\nrespuesta: 1\n';
    expect(() => compile(parse(src))).toThrow(/opciones_explicitas/);
  });
});

describe("runtime + adapter / mc múltiple", () => {
  it("marca varias correctas y propaga flags", () => {
    const r = generate(compile(parse(PLANTILLA_MULTIPLE)), { seed: "s1" });
    expect(r.tipo).toBe("mc");
    expect(r.multiple).toBe(true);
    expect(r.puntajeParcial).toBe("proporcional");
    const correctas = (r.opciones ?? []).filter((o) => o.correcta).map((o) => o.texto);
    expect(correctas.sort()).toEqual(["2", "3"]);
  });

  it("adapter: answerKey array con todas las correctas + flags", () => {
    const r = generate(compile(parse(PLANTILLA_MULTIPLE)), { seed: "s1" });
    const q = toModuleQuizQuestion(r);
    expect(q.multiple).toBe(true);
    expect(q.puntajeParcial).toBe("proporcional");
    expect(Array.isArray(q.answerKey)).toBe(true);
    expect((q.answerKey as string[]).sort()).toEqual(["2", "3"]);
    expect(q.options).toHaveLength(4);
  });

  it("mc simple no gana flags (no-regresión)", () => {
    const src = `enunciado: "¿2+2?"
tipo: mc
opciones_explicitas:
  - "4"
  - "5"
respuesta: "4"
`;
    const r = generate(compile(parse(src)), { seed: "s1" });
    expect(r.multiple).toBeUndefined();
    const q = toModuleQuizQuestion(r);
    expect(q.multiple).toBeUndefined();
    expect(q.answerKey).toBe("4");
  });
});
