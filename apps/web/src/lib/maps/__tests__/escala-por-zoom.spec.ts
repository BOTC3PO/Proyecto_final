import { describe, expect, it } from "vitest";
import { escalaPorZoom } from "../escala-por-zoom";

describe("escalaPorZoom", () => {
  it("devuelve 1 cuando el viewBox coincide con el ancho base (sin zoom)", () => {
    expect(escalaPorZoom(1000, 1000)).toBe(1);
  });

  it("achica proporcionalmente al acercar (viewBox más chico que el ancho base)", () => {
    expect(escalaPorZoom(80, 1000)).toBeCloseTo(0.08);
    expect(escalaPorZoom(500, 1000)).toBeCloseTo(0.5);
  });

  it("devuelve 1 (fallback seguro) si el ancho base es 0 o inválido", () => {
    expect(escalaPorZoom(80, 0)).toBe(1);
    expect(escalaPorZoom(80, Number.NaN)).toBe(1);
    expect(escalaPorZoom(Number.NaN, 1000)).toBe(1);
  });
});
