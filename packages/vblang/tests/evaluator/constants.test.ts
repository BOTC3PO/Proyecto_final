import { describe, expect, it } from "vitest";
import {
  evaluateExpr,
} from "../../src/evaluator/evaluator.js";
import { CONSTANTES_GLOBALES } from "../../src/evaluator/constants.js";
import { Scope } from "../../src/evaluator/scope.js";
import { evalSrc, makeCtx, parseExprOnly } from "./_helpers.js";

describe("evaluator / constantes globales", () => {
  it("pi sin declarar = Math.PI", () => {
    expect(evalSrc("pi")).toBe(Math.PI);
  });

  it("g = 9.80665", () => {
    expect(evalSrc("g")).toBe(9.80665);
  });

  it("c = 299792458", () => {
    expect(evalSrc("c")).toBe(299792458);
  });

  it("e ≈ Math.E", () => {
    expect(evalSrc("e")).toBe(Math.E);
  });

  it("variable declarada sobrescribe constante: pi=3 → pi == 3", () => {
    const ctx = makeCtx();
    const scope = new Scope({ ...CONSTANTES_GLOBALES });
    scope.set("pi", 3);
    expect(evaluateExpr(parseExprOnly("pi == 3"), scope, ctx)).toBe(true);
    expect(evaluateExpr(parseExprOnly("pi"), scope, ctx)).toBe(3);
  });

  it("constantes funcionan en expresiones", () => {
    expect(evalSrc("2 * pi") as number).toBeCloseTo(2 * Math.PI, 9);
  });
});
