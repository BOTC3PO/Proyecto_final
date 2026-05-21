import { describe, expect, it } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { evalSrc } from "./_helpers.js";

describe("evaluator / aritmética", () => {
  it("2 + 3 * 4 = 14", () => {
    expect(evalSrc("2 + 3 * 4")).toBe(14);
  });

  it("2 ^ 3 = 8", () => {
    expect(evalSrc("2 ^ 3")).toBe(8);
  });

  it("-2 ^ 2 = -4 (precedencia: -(2^2))", () => {
    expect(evalSrc("-2 ^ 2")).toBe(-4);
  });

  it("5 / 0 lanza EvalError 'división por cero'", () => {
    expect(() => evalSrc("5 / 0")).toThrow(EvalError);
    expect(() => evalSrc("5 / 0")).toThrow(/división por cero/);
  });

  it("5 % 3 = 2", () => {
    expect(evalSrc("5 % 3")).toBe(2);
  });

  it("(a + b) * 2 con a=1, b=2 = 6", () => {
    expect(evalSrc("(a + b) * 2", { a: 1, b: 2 })).toBe(6);
  });

  it("concatenación de strings", () => {
    expect(evalSrc('"hola" + " " + "mundo"')).toBe("hola mundo");
  });

  it("comparaciones numéricas", () => {
    expect(evalSrc("7 == 7")).toBe(true);
    expect(evalSrc("7 != 8")).toBe(true);
    expect(evalSrc("3 < 5")).toBe(true);
    expect(evalSrc("5 >= 5")).toBe(true);
    expect(evalSrc("5 > 5")).toBe(false);
  });

  it("comparación de strings", () => {
    expect(evalSrc('"a" == "a"')).toBe(true);
    expect(evalSrc('"a" != "b"')).toBe(true);
  });

  it("lógicos: y, o, no", () => {
    expect(evalSrc("verdadero y falso")).toBe(false);
    expect(evalSrc("verdadero o falso")).toBe(true);
    expect(evalSrc("no falso")).toBe(true);
    expect(evalSrc("no verdadero")).toBe(false);
  });

  it("módulo por cero lanza error", () => {
    expect(() => evalSrc("5 % 0")).toThrow(/módulo/);
  });

  it("'+' aplicado a number + string concatena", () => {
    expect(evalSrc('"valor: " + 42')).toBe("valor: 42");
  });

  it("'no' sobre no-boolean lanza error", () => {
    expect(() => evalSrc("no 5")).toThrow(/boolean/);
  });

  it("'y' con operandos no-boolean lanza error", () => {
    expect(() => evalSrc("5 y 3")).toThrow(/boolean/);
  });

  it("igualdad estructural de arrays", () => {
    expect(evalSrc("[1, 2, 3] == [1, 2, 3]")).toBe(true);
    expect(evalSrc("[1, 2] == [1, 3]")).toBe(false);
  });

  it("acceso a campo y comparación", () => {
    expect(
      evalSrc("obj.x + 1", { obj: { x: 10 } }),
    ).toBe(11);
  });

  it("for comprehension simple", () => {
    expect(evalSrc("[for i in 1..3: i * 2]")).toEqual([2, 4, 6]);
  });

  it("for comprehension con array", () => {
    expect(evalSrc("[for x in xs: x + 1]", { xs: [10, 20, 30] })).toEqual([
      11, 21, 31,
    ]);
  });
});
