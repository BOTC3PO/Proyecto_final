/**
 * F2-04 — serializer: round-trip del bloque `tolerancia_abs:`.
 * parse(serialize(parse(src))) === parse(src) estructuralmente. La forma
 * inline es la única (número crudo, sin `%`).
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { serialize } from "../../src/serializer/serialize.js";
import type { Plantilla } from "../../src/parser/ast.js";

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

function roundTrip(src: string): { original: Plantilla; reparsed: Plantilla } {
  const original = parse(src);
  const serialized = serialize(original);
  const reparsed = parse(serialized);
  return { original, reparsed };
}

describe("serializer / tolerancia_abs: round-trip (F2-04)", () => {
  it("número decimal se preserva", () => {
    const src = `enunciado: "x"
tolerancia_abs: 0.001
respuesta: 0
`;
    const { original, reparsed } = roundTrip(src);
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
    const block = reparsed.bloques.find((b) => b.kind === "tolerancia_abs");
    if (block && block.kind === "tolerancia_abs") {
      expect(block.valor).toBe(0.001);
    }
  });

  it("se serializa inline `tolerancia_abs: 0.5`", () => {
    const out = serialize(
      parse(`enunciado: "x"\ntolerancia_abs: 0.5\nrespuesta: 0\n`),
    );
    expect(out).toContain(`tolerancia_abs: 0.5`);
    // No debe colarse un `%` (esa sintaxis es de `tolerancia:`).
    expect(out).not.toMatch(/tolerancia_abs:[^%\n]*%/);
  });

  it("convive con tolerancia: y se serializan en su orden original", () => {
    const src = `enunciado: "x"
tolerancia: 5%
tolerancia_abs: 0.001
respuesta: 0
`;
    const { original, reparsed } = roundTrip(src);
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
    const kinds = reparsed.bloques.map((b) => b.kind);
    expect(kinds.indexOf("tolerancia")).toBeLessThan(
      kinds.indexOf("tolerancia_abs"),
    );
  });

  it("round-trip estable en dos pasadas (idempotencia del serializer)", () => {
    const src = `enunciado: "x"\ntolerancia_abs: 0.001\nrespuesta: 0\n`;
    const once = serialize(parse(src));
    const twice = serialize(parse(once));
    expect(twice).toBe(once);
  });
});
