/**
 * Tarea 05 — bloque `enunciados:` (lista de variantes).
 * Mutanamente excluyente con `enunciado:`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import type { EnunciadosBloque, Plantilla } from "../../src/parser/ast.js";

function parseEnunciados(src: string): EnunciadosBloque {
  const p: Plantilla = parse(src);
  const block = p.bloques.find((b) => b.kind === "enunciados");
  if (!block || block.kind !== "enunciados") {
    throw new Error("no se encontro el bloque 'enunciados'");
  }
  return block;
}

describe("parser / bloque enunciados: (Tarea 05)", () => {
  it("parsea 1 item valido", () => {
    const block = parseEnunciados(
      `enunciados:\n  - "Cuanto es {a} + {b}?"\nrespuesta: 1\n`,
    );
    expect(block.items).toHaveLength(1);
    expect(block.items[0].partes[0]).toMatchObject({ kind: "texto", value: "Cuanto es " });
  });

  it("parsea 3 items validos con interpolacion", () => {
    const src = `enunciados:\n  - "Cuanto es {a} + {b}?"\n  - "Calcula la suma de {a} y {b}."\n  - "Resolvé {ejercicio}."\nrespuesta: 1\n`;
    const block = parseEnunciados(src);
    expect(block.items).toHaveLength(3);
    expect(block.items[1].partes.some((p) => p.kind === "interp")).toBe(true);
  });

  it("rechaza lista vacia", () => {
    const src = `enunciados:\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/enunciados.*al menos una variante|al menos una variante/);
  });

  it("rechaza item que no es string", () => {
    const src = `enunciados:\n  - 42\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/string/);
  });

  it("rechaza item sin guion", () => {
    const src = `enunciados:\n  "hola"\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/'-' al inicio/);
  });
});

describe("parser / exclusion mutua enunciado: / enunciados: (Tarea 05)", () => {
  it("rechaza enunciado y enunciados simultaneos", () => {
    const src = `enunciado: "x"\nenunciados:\n  - "y"\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/no ambos|enunciado.*enunciados|enunciados.*enunciado/);
  });

  it("acepta enunciado: solo (sin enunciados) — caso legacy", () => {
    const src = `enunciado: "x"\nrespuesta: 1\n`;
    const p = parse(src);
    const kinds = p.bloques.map((b) => b.kind);
    expect(kinds).toContain("enunciado");
    expect(kinds).not.toContain("enunciados");
  });

  it("acepta enunciados: solo (sin enunciado)", () => {
    const src = `enunciados:\n  - "x"\nrespuesta: 1\n`;
    const p = parse(src);
    const kinds = p.bloques.map((b) => b.kind);
    expect(kinds).toContain("enunciados");
    expect(kinds).not.toContain("enunciado");
  });

  it("falta enunciado/enunciados: menciona ambas opciones", () => {
    const src = `respuesta: 1\n`;
    expect(() => parse(src)).toThrow(/enunciado.*enunciados|enunciados.*enunciado/);
  });
});
