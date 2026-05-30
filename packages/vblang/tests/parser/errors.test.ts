import { describe, expect, it } from "vitest";
import { ParseError } from "../../src/parser/errors.js";
import { parse } from "../../src/parser/parser.js";

const BASE = `\nenunciado: "x"\nrespuesta: 1\n`;

describe("parse / errores semánticos", () => {
  it("typo en nombre de bloque sugiere el correcto", () => {
    const src = `variabbles:\n  v: 1\n` + BASE;
    try {
      parse(src);
      expect.fail("debió tirar ParseError");
    } catch (e) {
      expect(e).toBeInstanceOf(ParseError);
      const err = e as ParseError;
      expect(err.message).toMatch(/variables/);
    }
  });

  it("bloque duplicado", () => {
    const src = `variables:\n  v: 1\nvariables:\n  t: 2\n` + BASE;
    expect(() => parse(src)).toThrow(/declarado dos veces/);
  });

  it("falta enunciado", () => {
    const src = `respuesta: 1\n`;
    expect(() => parse(src)).toThrow(/enunciado/);
  });

  it("sin respuesta ni generador", () => {
    const src = `enunciado: "x"\n`;
    expect(() => parse(src)).toThrow(/respuesta|generador/);
  });

  it("tipo marcar_mapa pero falta respuesta_iso", () => {
    const src = `enunciado: "x"\nrespuesta: 1\ntipo: marcar_mapa\n`;
    expect(() => parse(src)).toThrow(/marcar_mapa/);
  });

  it("tipo mc declarado pero sin opciones ni opciones_explicitas", () => {
    const src = `enunciado: "x"\nrespuesta: 1\ntipo: mc\n`;
    expect(() => parse(src)).toThrow(/mc/);
  });

  it("tolerancia: 1k no es un número válido", () => {
    const src = `enunciado: "x"\nrespuesta: 1\ntolerancia: 1k\n`;
    expect(() => parse(src)).toThrow(/tolerancia/);
  });

  it("opciones: 1.5 no es entero", () => {
    const src =
      `enunciado: "x"\nrespuesta: 1\ntipo: mc\nopciones: 1.5\nopciones_explicitas:\n  - "a"\n  - "b"\n`;
    expect(() => parse(src)).toThrow(/entero/);
  });

  it("tipo inválido", () => {
    const src = `enunciado: "x"\nrespuesta: 1\ntipo: chocolate\n`;
    expect(() => parse(src)).toThrow(/Tipo desconocido|chocolate/);
  });

  it("mapa inválido", () => {
    const src = `enunciado: "x"\nrespuesta: 1\nmapa: world_pizza\n`;
    expect(() => parse(src)).toThrow(/Mapa desconocido|world_pizza/);
  });

  it("tipo ordenar sin respuesta_orden", () => {
    const src = `enunciado: "x"\nrespuesta: 1\ntipo: ordenar\n`;
    expect(() => parse(src)).toThrow(/ordenar/);
  });

  it("opciones con identificador (no número) explica opciones_explicitas", () => {
    const src = `enunciado: "x"\nrespuesta: 1\ntipo: mc\nopciones: mi_lista\n`;
    try {
      parse(src);
      expect.fail("debió tirar ParseError");
    } catch (e) {
      expect(e).toBeInstanceOf(ParseError);
      const err = e as ParseError;
      expect(err.message).toMatch(/opciones_explicitas/);
      expect(err.suggestion).toBeDefined();
    }
  });

  it("mapa desconocido sugiere usar comillas con un nombre válido", () => {
    const src = `enunciado: "x"\nrespuesta: 1\nmapa: world_pizza\n`;
    try {
      parse(src);
      expect.fail("debió tirar ParseError");
    } catch (e) {
      expect(e).toBeInstanceOf(ParseError);
      const err = e as ParseError;
      expect(err.message).toMatch(/Mapa desconocido/);
      expect(err.suggestion).toMatch(/comillas/);
    }
  });
});
