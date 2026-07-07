/**
 * PLAN-E §21 Parte B — analisis_spans (análisis por rangos de palabras).
 *
 * Cubre: parser (inferencia y tipo declarado), round-trip, guards del
 * generador (rangos fuera de texto, campos faltantes), generate (spans +
 * etiquetas disponibles con autocompletado de las usadas), adapter
 * (answerKey canónico, sin filtrar la clave fuera de answerKey) y codec.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { serialize } from "../../src/serializer/serialize.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { splitPalabras } from "../../src/runtime/generate-special.js";
import {
  spanFromKey,
  spanToKey,
  toModuleQuizQuestion,
} from "../../src/adapters/to-module-quiz-question.js";

const PLANTILLA_SPANS = `enunciado: "Analizá la oración."
tipo: analisis_spans
texto_analizar: "El perro grande corre por el parque"
spans_pedidos:
  - { desde: 0, hasta: 2, etiqueta: "sujeto" }
  - { desde: 3, hasta: 6, etiqueta: "predicado" }
  - { desde: 1, hasta: 1, etiqueta: "nucleo_sujeto" }
etiquetas_disponibles:
  - "objeto directo"
puntaje_parcial: proporcional
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

describe("parser / analisis_spans", () => {
  it("infiere el tipo desde spans_pedidos sin `tipo:`", () => {
    const p = parse(
      'enunciado: "x"\ntexto_analizar: "a b"\nspans_pedidos:\n  - { desde: 0, hasta: 1, etiqueta: "s" }\n',
    );
    expect(p.tipoInferido).toBe("analisis_spans");
  });

  it("tipo declarado exige spans_pedidos y texto_analizar", () => {
    // Con respuesta pero sin spans: cae el guard específico del tipo.
    expect(() =>
      parse('enunciado: "x"\ntipo: analisis_spans\nrespuesta: 1\n'),
    ).toThrow(/requiere `spans_pedidos:` y `texto_analizar:`/);
  });

  it("round-trip lossless", () => {
    const original = parse(PLANTILLA_SPANS);
    const reparsed = parse(serialize(original));
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
  });
});

describe("runtime / generateAnalisisSpans", () => {
  it("sirve spans, etiquetas (correctas autoagregadas) y puntaje", () => {
    const r = generate(compile(parse(PLANTILLA_SPANS)), { seed: "s1" });
    expect(r.tipo).toBe("analisis_spans");
    expect(r.textoAnalizar).toBe("El perro grande corre por el parque");
    expect(r.spansPedidos).toEqual([
      { desde: 0, hasta: 2, etiqueta: "sujeto" },
      { desde: 3, hasta: 6, etiqueta: "predicado" },
      { desde: 1, hasta: 1, etiqueta: "nucleo_sujeto" },
    ]);
    // Declaradas primero, correctas faltantes autoagregadas en orden.
    expect(r.etiquetasDisponibles).toEqual([
      "objeto directo",
      "sujeto",
      "predicado",
      "nucleo_sujeto",
    ]);
    expect(r.puntajeParcial).toBe("proporcional");
  });

  it("rechaza un span fuera del texto", () => {
    const src =
      'enunciado: "x"\ntexto_analizar: "solo dos"\nspans_pedidos:\n  - { desde: 0, hasta: 2, etiqueta: "s" }\n';
    expect(() => generate(compile(parse(src)), { seed: "s1" })).toThrow(
      /fuera de rango/,
    );
  });

  it("rechaza un span con campos faltantes", () => {
    const src =
      'enunciado: "x"\ntexto_analizar: "a b"\nspans_pedidos:\n  - { desde: 0, etiqueta: "s" }\n';
    expect(() => generate(compile(parse(src)), { seed: "s1" })).toThrow(
      /`desde`, `hasta` y `etiqueta`/,
    );
  });

  it("splitPalabras: palabra = token por espacios", () => {
    expect(splitPalabras("  El perro   grande. ")).toEqual([
      "El",
      "perro",
      "grande.",
    ]);
  });
});

describe("adapter / analisis_spans", () => {
  it("answerKey canónico + etiquetas visibles; la clave no viaja aparte", () => {
    const r = generate(compile(parse(PLANTILLA_SPANS)), { seed: "s1" });
    const q = toModuleQuizQuestion(r);
    expect(q.questionType).toBe("analisis_spans");
    expect(q.textoAnalizar).toBe("El perro grande corre por el parque");
    expect(q.etiquetasDisponibles).toContain("objeto directo");
    expect(q.answerKey).toEqual([
      "0-2:sujeto",
      "3-6:predicado",
      "1-1:nucleo_sujeto",
    ]);
    expect(q.puntajeParcial).toBe("proporcional");
    // La clave estructurada NO se copia a otro campo (sanitización cubre answerKey).
    expect(
      (q as unknown as Record<string, unknown>).spansPedidos,
    ).toBeUndefined();
  });

  it("codec: spanToKey/spanFromKey son inversos", () => {
    const sp = { desde: 4, hasta: 12, etiqueta: "objeto directo" };
    expect(spanFromKey(spanToKey(sp))).toEqual(sp);
    expect(spanFromKey("basura")).toBeNull();
  });
});
