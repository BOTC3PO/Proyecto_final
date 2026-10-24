/**
 * F2-03 — bloque `explicacion:` (string único interpolable).
 *
 * Mismo patrón de superficie que `enunciado:` y `unidad:`: un string inline o
 * multilínea con `|`. NO es lista (a diferencia de `pistas:`, que es una
 * secuencia). El bloque es opcional; sin él, el adapter cae al fallback
 * `buildExplanation(pasos)`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import type { ExplicacionBloque, Plantilla } from "../../src/parser/ast.js";

function parseExplicacion(src: string): ExplicacionBloque {
  const p: Plantilla = parse(src);
  const block = p.bloques.find((b) => b.kind === "explicacion");
  if (!block || block.kind !== "explicacion") {
    throw new Error("no se encontro el bloque 'explicacion'");
  }
  return block;
}

describe("parser / bloque explicacion: (F2-03)", () => {
  it("parsea string inline simple", () => {
    const block = parseExplicacion(
      `enunciado: "x"\nexplicacion: "La suma es 2+2=4"\nrespuesta: 1\n`,
    );
    expect(block.partes).toHaveLength(1);
    expect(block.partes[0]).toMatchObject({ kind: "texto", value: "La suma es 2+2=4" });
  });

  it("parsea string inline con interpolacion {var}", () => {
    const block = parseExplicacion(
      `variables:\n  a: random(1, 10)\nenunciado: "x {a}"\nexplicacion: "Resultado: {a}"\nrespuesta: a\n`,
    );
    expect(block.partes.length).toBeGreaterThanOrEqual(2);
    expect(block.partes.some((p) => p.kind === "interp")).toBe(true);
  });

  it("parsea string multilinea con |", () => {
    const src = `enunciado: "x"
explicacion: |
  Primera linea
  Segunda con {a}
respuesta: 1
`;
    const block = parseExplicacion(src);
    // multilinea preserva el \n dentro del texto; la interpolación {a}
    // queda como un `interp` aparte. Resultado: 1 texto (con \n) + 1 interp.
    const textos = block.partes.filter((p) => p.kind === "texto");
    const interps = block.partes.filter((p) => p.kind === "interp");
    expect(textos).toHaveLength(1);
    expect(textos[0].value).toMatch(/Primera linea\nSegunda con /);
    expect(interps).toHaveLength(1);
  });

  it("rechaza explicacion sin string (numero)", () => {
    const src = `enunciado: "x"\nexplicacion: 42\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/string|"…"|multil[ií]nea/);
  });

  it("rechaza explicacion sin valor (renglon vacio)", () => {
    const src = `enunciado: "x"\nexplicacion:\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/string|"…"|multil[ií]nea/);
  });

  it("rechaza explicacion: declarado dos veces", () => {
    const src = `enunciado: "x"\nexplicacion: "a"\nexplicacion: "b"\nrespuesta: 1\n`;
    expect(() => parse(src)).toThrow(/dos veces/);
  });

  it("plantillas sin explicacion: parsean sin el bloque (no es obligatorio)", () => {
    const p = parse(`enunciado: "x"\nrespuesta: 1\n`);
    expect(p.bloques.some((b) => b.kind === "explicacion")).toBe(false);
  });

  it("convive con enunciado, pasos, pistas y respuesta", () => {
    const src = `enunciado: "x"
pasos:
  - "s1"
pistas:
  - "p1"
explicacion: "Por la definicion"
respuesta: 1
`;
    const p = parse(src);
    const kinds = p.bloques.map((b) => b.kind);
    expect(kinds).toContain("explicacion");
    expect(kinds).toContain("pasos");
    expect(kinds).toContain("pistas");
    expect(kinds).toContain("enunciado");
    expect(kinds).toContain("respuesta");
  });

  it("reconoce `explicacion:` como block keyword (sugerencia de typo)", () => {
    // Un typo `explicaion:` debe sugerir `explicacion:`. El mecanismo es
    // genérico (suggestKeyword) y se alimenta de BLOCK_KEYWORDS.
    const src = `enunciado: "x"\nexplicaion: "x"\nrespuesta: 1\n`;
    try {
      parse(src);
      expect.unreachable("debió tirar ParseError");
    } catch (e) {
      expect((e as Error).message).toMatch(/explicacion/);
    }
  });
});
