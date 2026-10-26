/**
 * Tarea 07 — serializer: round-trip del bloque `enunciados:`.
 * Para parse(serialize(parse(src))) el AST resultante debe ser
 * estructuralmente equivalente al original.
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

describe("serializer / enunciados: round-trip (Tarea 07)", () => {
  it("1 variante sin interpolacion", () => {
    const src = `enunciados:
  - "Variante unica"
respuesta: 1
`;
    const { original, reparsed } = roundTrip(src);
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
    const block = reparsed.bloques.find((b) => b.kind === "enunciados");
    expect(block && block.kind === "enunciados").toBe(true);
    if (block && block.kind === "enunciados") {
      expect(block.items).toHaveLength(1);
    }
  });

  it("3 variantes con interpolacion", () => {
    const src = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciados:
  - "Cuanto es {a} + {b}?"
  - "Calcula la suma de {a} y {b}."
  - "Resolvé el ejercicio {a} + {b}."

respuesta: a + b
`;
    const { original, reparsed } = roundTrip(src);
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
    const block = reparsed.bloques.find((b) => b.kind === "enunciados");
    expect(block && block.kind === "enunciados").toBe(true);
    if (block && block.kind === "enunciados") {
      expect(block.items).toHaveLength(3);
    }
  });

  it("serialized de un enunciados: tiene el formato esperado", () => {
    const src = `enunciados:
  - "Hola {x}"
  - "Chau {x}"
respuesta: 1
`;
    const out = serialize(parse(src));
    expect(out).toContain("enunciados:");
    expect(out).toMatch(/\n  - "Hola \{x\}"\n  - "Chau \{x\}"\n/);
  });

  it("escapado de comillas dobles dentro de variante", () => {
    const src = `enunciados:
  - "El dijo \\"hola\\""
respuesta: 1
`;
    const out = serialize(parse(src));
    // El escape sobrevive el round-trip.
    const { reparsed } = roundTrip(src);
    const block = reparsed.bloques.find((b) => b.kind === "enunciados");
    if (block && block.kind === "enunciados") {
      const first = block.items[0].partes[0];
      if (first.kind === "texto") {
        expect(first.value).toBe('El dijo "hola"');
      } else {
        throw new Error("esperaba texto literal");
      }
    }
    // El output contiene el escape correcto
    expect(out).toMatch(/\\"hola\\"/);
  });
});
