/**
 * PLAN-E §15 — variantes de `enunciados:` con tipo propio (`- mc "..."`).
 *
 * Cubre:
 * 1. Parser: `- mc "texto"` produce PasoItem.tipo; tipo inválido rechaza.
 * 2. Round-trip: parse(serialize(parse(src))) preserva el tipo.
 * 3. Runtime: la variante sorteada define el tipo servido (forceVariant);
 *    determinismo por seed; heredar cuando no declara tipo.
 * 4. Compile guards: base no-básica rechaza; variante mc sin opciones rechaza.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { serialize } from "../../src/serializer/serialize.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import type { EnunciadosBloque, Plantilla } from "../../src/parser/ast.js";

const PLANTILLA_MIXTA = `variables:
  a: random(1, 100)
  b: random(1, 100)
opciones: 4
enunciados:
  - "Escribí el resultado de {a} + {b}."
  - mc "Marcá el resultado de {a} + {b}."
respuesta: a + b
`;

function getEnunciados(p: Plantilla): EnunciadosBloque {
  const block = p.bloques.find((b) => b.kind === "enunciados");
  if (!block || block.kind !== "enunciados") throw new Error("sin enunciados");
  return block;
}

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

describe("parser / variante con tipo propio", () => {
  it("parsea `- mc \"...\"` con tipo en el item", () => {
    const block = getEnunciados(parse(PLANTILLA_MIXTA));
    expect(block.items).toHaveLength(2);
    expect(block.items[0].tipo).toBeUndefined();
    expect(block.items[1].tipo).toBe("mc");
  });

  it("rechaza tipo de variante desconocido", () => {
    const src = `enunciados:\n  - ordenar "texto"\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/Tipo de variante desconocido/);
  });

  it("los items de pasos: NO aceptan tipo (ident se rechaza como no-string)", () => {
    const src = `enunciado: "x"\npasos:\n  - mc "paso"\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/string/);
  });
});

describe("serializer / round-trip variante con tipo", () => {
  it("preserva el tipo de cada variante", () => {
    const original = parse(PLANTILLA_MIXTA);
    const reparsed = parse(serialize(original));
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
    expect(getEnunciados(reparsed).items[1].tipo).toBe("mc");
  });
});

describe("compile / guards de variantes con tipo", () => {
  it("rechaza variantes con tipo sobre plantilla no básica", () => {
    const src = `variables:
  lista: ["a", "b", "c"]
tipo: ordenar
enunciados:
  - "Ordená."
  - mc "Marcá."
respuesta_orden: lista
`;
    expect(() => compile(parse(src))).toThrow(/tipo básico/);
  });

  it("rechaza variante mc sin opciones", () => {
    const src = `variables:
  a: random(1, 10)
enunciados:
  - "Escribí {a}."
  - mc "Marcá {a}."
respuesta: a
`;
    expect(() => compile(parse(src))).toThrow(/variante de tipo `mc`/);
  });
});

describe("runtime / tipo servido por variante", () => {
  const compiled = () => compile(parse(PLANTILLA_MIXTA));

  it("forceVariant 0 → hereda el tipo base (input)", () => {
    const r = generate(compiled(), { seed: "s1", forceVariant: 0 });
    expect(r.tipo).toBe("input");
    expect(r.opciones).toBeUndefined();
    expect(typeof r.respuesta).toBe("number");
  });

  it("forceVariant 1 → sirve mc con opciones y la respuesta marcada", () => {
    const r = generate(compiled(), { seed: "s1", forceVariant: 1 });
    expect(r.tipo).toBe("mc");
    expect(r.opciones).toHaveLength(4);
    expect(r.opciones!.filter((o) => o.correcta)).toHaveLength(1);
  });

  it("determinismo: mismo seed → mismo tipo y mismas variables", () => {
    const a = generate(compiled(), { seed: "det-tipo" });
    const b = generate(compiled(), { seed: "det-tipo" });
    expect(a.tipo).toBe(b.tipo);
    expect(a.enunciado).toBe(b.enunciado);
    expect(a.variables).toEqual(b.variables);
  });

  it("variante vf sobre respuesta booleana", () => {
    const src = `variables:
  a: random(1, 10)
enunciados:
  - "¿{a} es mayor que 5? (escribí verdadero/falso)"
  - vf "Indicá si {a} es mayor que 5."
respuesta: a > 5
`;
    const r = generate(compile(parse(src)), { seed: "s2", forceVariant: 1 });
    expect(r.tipo).toBe("vf");
    expect(r.opciones).toHaveLength(2);
  });
});
