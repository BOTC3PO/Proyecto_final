/**
 * F2-02 — bloque `pistas:` (pistas escalonadas).
 *
 * Una sola keyword con dos formas de superficie:
 *  - inline: `pistas: "una pista"` → lista de 1.
 *  - lista:  `pistas:\n  - "a"\n  - "b"`.
 * No es un par pista/pistas (las pistas son una secuencia, no variantes).
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import type { PistasBloque, Plantilla } from "../../src/parser/ast.js";

function parsePistas(src: string): PistasBloque {
  const p: Plantilla = parse(src);
  const block = p.bloques.find((b) => b.kind === "pistas");
  if (!block || block.kind !== "pistas") {
    throw new Error("no se encontro el bloque 'pistas'");
  }
  return block;
}

describe("parser / bloque pistas: (F2-02)", () => {
  it("parsea pista unica inline", () => {
    const block = parsePistas(
      `enunciado: "x"\npistas: "Acordate de {a}"\nrespuesta: 1\n`,
    );
    expect(block.items).toHaveLength(1);
    expect(block.items[0].partes[0]).toMatchObject({
      kind: "texto",
      value: "Acordate de ",
    });
    expect(block.items[0].partes.some((p) => p.kind === "interp")).toBe(true);
  });

  it("parsea lista escalonada de 3 pistas", () => {
    const src = `enunciado: "x"\npistas:\n  - "Primera: pensá en {a}"\n  - "Segunda: usá {b}"\n  - "Tercera: el resultado es {a}+{b}"\nrespuesta: 1\n`;
    const block = parsePistas(src);
    expect(block.items).toHaveLength(3);
    expect(block.items[1].partes.some((p) => p.kind === "interp")).toBe(true);
  });

  it("la forma inline produce una lista de exactamente 1 item", () => {
    const block = parsePistas(`enunciado: "x"\npistas: "sola"\nrespuesta: 1\n`);
    expect(block.items).toHaveLength(1);
  });

  it("rechaza lista vacia", () => {
    const src = `enunciado: "x"\npistas:\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/pistas.*al menos una pista|al menos una pista/);
  });

  it("rechaza item de lista que no es string", () => {
    const src = `enunciado: "x"\npistas:\n  - 42\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/string/);
  });

  it("rechaza item de lista sin guion", () => {
    const src = `enunciado: "x"\npistas:\n  "hola"\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/'-' al inicio/);
  });

  it("rechaza pistas: declarado dos veces", () => {
    const src = `enunciado: "x"\npistas: "a"\npistas: "b"\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/dos veces/);
  });

  it("plantillas sin pistas: parsean sin el bloque (no es obligatorio)", () => {
    const p = parse(`enunciado: "x"\nrespuesta: 1\n`);
    expect(p.bloques.some((b) => b.kind === "pistas")).toBe(false);
  });

  it("convive con enunciado y pasos", () => {
    const src = `enunciado: "x"\npistas:\n  - "p1"\n  - "p2"\npasos:\n  - "s1"\nrespuesta: 1\n`;
    const p = parse(src);
    const kinds = p.bloques.map((b) => b.kind);
    expect(kinds).toContain("pistas");
    expect(kinds).toContain("pasos");
    expect(kinds).toContain("enunciado");
  });
});
