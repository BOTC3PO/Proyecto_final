/**
 * F2-03 — serializer: round-trip del bloque `explicacion:`.
 * parse(serialize(parse(src))) debe ser estructuralmente equivalente al
 * original. Como `explicacion:` es un solo string (no lista), la forma
 * inline es la única que el serializer emite.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { serialize } from "../../src/serializer/serialize.js";
import type { Plantilla } from "../../src/parser/ast.js";

function stripLoc<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(stripLoc) as unknown as T;
  }
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

function roundTrip(src: string): { original: Plantilla; reparsed: Plantilla } {
  const original = parse(src);
  const serialized = serialize(original);
  const reparsed = parse(serialized);
  return { original, reparsed };
}

describe("serializer / explicacion: round-trip (F2-03)", () => {
  it("string inline simple", () => {
    const src = `enunciado: "x"
explicacion: "La suma es 2+2=4"
respuesta: 1
`;
    const { original, reparsed } = roundTrip(src);
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
    const block = reparsed.bloques.find((b) => b.kind === "explicacion");
    expect(block && block.kind === "explicacion").toBe(true);
  });

  it("con interpolacion {var}", () => {
    const src = `variables:
  a: random(1, 10)

enunciado: "Cuanto es {a}?"

explicacion: "El resultado es {a}."

respuesta: a
`;
    const { original, reparsed } = roundTrip(src);
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
    const block = reparsed.bloques.find((b) => b.kind === "explicacion");
    if (block && block.kind === "explicacion") {
      expect(block.partes.some((p) => p.kind === "interp")).toBe(true);
    }
  });

  it("se serializa inline con `explicacion: \"...\"`", () => {
    const out = serialize(
      parse(`enunciado: "x"\nexplicacion: "sola"\nrespuesta: 1\n`),
    );
    expect(out).toContain(`explicacion: "sola"`);
  });

  it("round-trip estable en dos pasadas (idempotencia del serializer)", () => {
    const src = `enunciado: "x"\nexplicacion: "Resultado: {n}"\nrespuesta: 1\n`;
    const once = serialize(parse(src));
    const twice = serialize(parse(once));
    expect(twice).toBe(once);
  });
});
