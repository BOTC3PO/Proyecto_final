/**
 * F2-02 — serializer: round-trip del bloque `pistas:`.
 * parse(serialize(parse(src))) debe ser estructuralmente equivalente al
 * original. La pista única se emite inline; varias, como lista.
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

describe("serializer / pistas: round-trip (F2-02)", () => {
  it("pista unica inline", () => {
    const src = `enunciado: "x"
pistas: "Acordate de la formula"
respuesta: 1
`;
    const { original, reparsed } = roundTrip(src);
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
    const block = reparsed.bloques.find((b) => b.kind === "pistas");
    expect(block && block.kind === "pistas").toBe(true);
    if (block && block.kind === "pistas") {
      expect(block.items).toHaveLength(1);
    }
  });

  it("pista unica se serializa inline (no como lista)", () => {
    const out = serialize(parse(`enunciado: "x"\npistas: "sola"\nrespuesta: 1\n`));
    expect(out).toContain(`pistas: "sola"`);
    expect(out).not.toMatch(/pistas:\n/);
  });

  it("3 pistas con interpolacion", () => {
    const src = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "Cuanto es {a} + {b}?"

pistas:
  - "Pensá en {a}"
  - "Sumale {b}"
  - "El total es {a + b}"

respuesta: a + b
`;
    const { original, reparsed } = roundTrip(src);
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
    const block = reparsed.bloques.find((b) => b.kind === "pistas");
    if (block && block.kind === "pistas") {
      expect(block.items).toHaveLength(3);
    }
  });

  it("lista se serializa con formato `- \"...\"`", () => {
    const src = `enunciado: "x"\npistas:\n  - "Hola {x}"\n  - "Chau {x}"\nrespuesta: 1\n`;
    const out = serialize(parse(src));
    expect(out).toContain("pistas:");
    expect(out).toMatch(/\n  - "Hola \{x\}"\n  - "Chau \{x\}"\n/);
  });

  it("round-trip estable en dos pasadas (idempotencia del serializer)", () => {
    const src = `enunciado: "x"\npistas:\n  - "a {n}"\n  - "b {n}"\nrespuesta: 1\n`;
    const once = serialize(parse(src));
    const twice = serialize(parse(once));
    expect(twice).toBe(once);
  });
});
