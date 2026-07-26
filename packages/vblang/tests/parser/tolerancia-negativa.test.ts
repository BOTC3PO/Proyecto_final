/**
 * PLAN casos-limite §3 — una tolerancia negativa no tiene sentido (ninguna
 * respuesta cumple `|r-e| ≤ -2`) y el lexer nunca produjo un NUMBER con signo,
 * así que siempre falló el parseo. Lo que faltaba era decir POR QUÉ: el mensaje
 * genérico ("debe ser un número") no mencionaba el signo, y el docente veía
 * desaparecer su tolerancia sin entender nada.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";

describe("parser / tolerancia negativa", () => {
  it("nombra el signo en `tolerancia:`", () => {
    expect(() => parse(`enunciado: "x"\nrespuesta: 1\ntolerancia: -2\n`)).toThrow(
      /`tolerancia:` no puede ser negativa/,
    );
  });

  it("nombra el signo en `tolerancia_abs:`", () => {
    expect(() => parse(`enunciado: "x"\nrespuesta: 1\ntolerancia_abs: -0.5\n`)).toThrow(
      /`tolerancia_abs:` no puede ser negativa/,
    );
  });

  it("el mensaje genérico sigue para lo que no es un número", () => {
    expect(() => parse(`enunciado: "x"\nrespuesta: 1\ntolerancia: "alta"\n`)).toThrow(
      /debe ser un número \(opcionalmente con %\)/,
    );
  });
});
