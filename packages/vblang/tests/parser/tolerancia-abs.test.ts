/**
 * F2-04 — parser: bloque `tolerancia_abs:` (número absoluto, sin %).
 *
 * Patrón casi idéntico a `tolerancia:` pero SIN soporte de `%` (es siempre
 * absoluta por definición). Mismas reglas de sintaxis: número crudo,
 * opcionalmente negativo (la validación de rango vive en el validator).
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import type { Plantilla, ToleranciaAbsBloque } from "../../src/parser/ast.js";

function parseTolAbs(src: string): ToleranciaAbsBloque {
  const p: Plantilla = parse(src);
  const block = p.bloques.find((b) => b.kind === "tolerancia_abs");
  if (!block || block.kind !== "tolerancia_abs") {
    throw new Error("no se encontro el bloque 'tolerancia_abs'");
  }
  return block;
}

describe("parser / bloque tolerancia_abs: (F2-04)", () => {
  it("parsea número entero", () => {
    const block = parseTolAbs(
      `enunciado: "x"\ntolerancia_abs: 5\nrespuesta: 1\n`,
    );
    expect(block.valor).toBe(5);
  });

  it("parsea número decimal", () => {
    const block = parseTolAbs(
      `enunciado: "x"\ntolerancia_abs: 0.001\nrespuesta: 1\n`,
    );
    expect(block.valor).toBe(0.001);
  });

  it("parsea cero (caso límite)", () => {
    const block = parseTolAbs(
      `enunciado: "x"\ntolerancia_abs: 0\nrespuesta: 1\n`,
    );
    expect(block.valor).toBe(0);
  });

  it("rechaza número con % (la sintaxis % es solo de `tolerancia:`)", () => {
    // `5%` se tokeniza como NUMBER `5` seguido de PERCENT. Como no aceptamos
    // % acá, el parser debe rechazar el PERCENT como token inesperado.
    const src = `enunciado: "x"\ntolerancia_abs: 5%\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow();
  });

  it("rechaza string", () => {
    const src = `enunciado: "x"\ntolerancia_abs: "0.001"\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/n[uú]mero/);
  });

  it("rechaza bloque sin valor (renglón vacío)", () => {
    const src = `enunciado: "x"\ntolerancia_abs:\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/n[uú]mero/);
  });

  it("rechaza tolerancia_abs: declarado dos veces", () => {
    const src = `enunciado: "x"\ntolerancia_abs: 0.1\ntolerancia_abs: 0.2\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/dos veces/);
  });

  it("convive con tolerancia: (relativa) en la misma plantilla", () => {
    const src = `enunciado: "x"
tolerancia: 5%
tolerancia_abs: 0.001
respuesta: 1
`;
    const p = parse(src);
    const kinds = p.bloques.map((b) => b.kind);
    expect(kinds).toContain("tolerancia");
    expect(kinds).toContain("tolerancia_abs");
  });

  it("plantillas sin tolerancia_abs: parsean sin el bloque (no es obligatorio)", () => {
    const p = parse(`enunciado: "x"\nrespuesta: 1\n`);
    expect(p.bloques.some((b) => b.kind === "tolerancia_abs")).toBe(false);
  });

  it("reconoce `tolerancia_abs:` como block keyword (typo sugiere el original)", () => {
    const src = `enunciado: "x"\ntolerancia_ab: 0.1\nrespuesta: 1\n`;
    try {
      parse(src);
      expect.unreachable("debió tirar ParseError");
    } catch (e) {
      // suggestKeyword usa Levenshtein; `tolerancia_ab` está a 1 de
      // `tolerancia_abs`, debe sugerirlo.
      expect((e as Error).message).toMatch(/tolerancia_abs/);
    }
  });
});
