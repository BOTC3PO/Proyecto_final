import { describe, expect, it } from "vitest";
import { lex } from "../../src/lexer/lexer.js";
import { TokenKind } from "../../src/lexer/tokens.js";
import type { Expr } from "../../src/parser/ast.js";
import { TokenCursor } from "../../src/parser/cursor.js";
import { parseExpression } from "../../src/parser/expression.js";
import { inferExprType } from "../../src/validator/infer.js";
import { TypeEnv } from "../../src/validator/type-env.js";
import { T, type LintIssue, type VBType } from "../../src/validator/types.js";

function parseExprOnly(src: string): Expr {
  const tokens = lex(src);
  const cursor = new TokenCursor(tokens);
  while (cursor.peek().kind === TokenKind.NEWLINE) cursor.consume();
  return parseExpression(cursor);
}

function infer(
  src: string,
  env: Record<string, VBType> = {},
): { type: VBType; issues: LintIssue[] } {
  const issues: LintIssue[] = [];
  const e = new TypeEnv(env);
  const t = inferExprType(parseExprOnly(src), e, {
    report: (i) => issues.push(i),
  });
  return { type: t, issues };
}

describe("infer / literales", () => {
  it("número", () => {
    expect(infer("42").type).toEqual(T.number);
  });
  it("string", () => {
    expect(infer('"hola"').type).toEqual(T.string);
  });
  it("boolean", () => {
    expect(infer("verdadero").type).toEqual(T.boolean);
  });
  it("null", () => {
    expect(infer("nulo").type).toEqual(T.null);
  });
});

describe("infer / arrays y objetos", () => {
  it("array homogéneo", () => {
    expect(infer("[1, 2, 3]").type).toEqual(T.array(T.number));
  });

  it("array mixto número/string", () => {
    const { type } = infer('[1, "a"]');
    expect(type.kind).toBe("array");
    if (type.kind === "array") {
      expect(type.element.kind).toBe("union");
    }
  });

  it("array vacío", () => {
    expect(infer("[]").type).toEqual(T.array(T.unknown));
  });

  it("object literal", () => {
    expect(infer('{a: 1, b: "x"}').type).toEqual(
      T.object({ a: T.number, b: T.string }),
    );
  });
});

describe("infer / variables", () => {
  it("variable definida", () => {
    const { type, issues } = infer("v", { v: T.number });
    expect(type).toEqual(T.number);
    expect(issues).toHaveLength(0);
  });

  it("variable indefinida → unknown + issue var-undef", () => {
    const { type, issues } = infer("v");
    expect(type).toEqual(T.unknown);
    expect(issues.some((i) => i.code === "var-undef")).toBe(true);
  });

  it("var-undef con sugerencia Levenshtein", () => {
    const { issues } = infer("velocida", { velocidad: T.number });
    expect(issues[0].suggestion).toBe("velocidad");
  });
});

describe("infer / binops", () => {
  it("v + 1 con v:number → number", () => {
    expect(infer("v + 1", { v: T.number }).type).toEqual(T.number);
  });

  it("v + 1 con v:string → infiere string sin error (concat permitida)", () => {
    const { type, issues } = infer("v + 1", { v: T.string });
    // '+' admite string + number como concatenación, así que el linter NO debe
    // reportar type-mismatch y el tipo inferido debe ser string.
    expect(issues.filter((i) => i.code === "type-mismatch")).toHaveLength(0);
    expect(type).toEqual(T.string);
  });

  it("v * 2 con v:string → error", () => {
    const { issues } = infer("v * 2", { v: T.string });
    expect(issues.some((i) => i.code === "type-mismatch")).toBe(true);
  });

  it("a == b con tipos distintos → boolean sin error", () => {
    const { type, issues } = infer("a == b", { a: T.number, b: T.string });
    expect(type).toEqual(T.boolean);
    expect(issues).toHaveLength(0);
  });

  it("a < b con tipos distintos → error", () => {
    const { issues } = infer("a < b", { a: T.number, b: T.string });
    expect(issues.some((i) => i.code === "type-mismatch")).toBe(true);
  });

  it("v y t requiere boolean", () => {
    const { issues } = infer("v y t", { v: T.number, t: T.number });
    expect(issues.some((i) => i.code === "type-mismatch")).toBe(true);
  });
});

describe("infer / funciones", () => {
  it("random(1, 10) → number", () => {
    expect(infer("random(1, 10)").type).toEqual(T.number);
  });

  it('random(1, "x") → reporta type-mismatch', () => {
    const { issues } = infer('random(1, "x")');
    expect(issues.some((i) => i.code === "type-mismatch")).toBe(true);
  });

  it("random(1) → reporta aridad", () => {
    const { issues } = infer("random(1)");
    expect(issues.some((i) => i.code === "arity")).toBe(true);
  });

  it("uno_de([1, 2, 3]) → number (returnsFn)", () => {
    expect(infer("uno_de([1, 2, 3])").type).toEqual(T.number);
  });

  it('uno_de(["a", "b"]) → string', () => {
    expect(infer('uno_de(["a", "b"])').type).toEqual(T.string);
  });

  it("uno_de([]) → unknown", () => {
    expect(infer("uno_de([])").type).toEqual(T.unknown);
  });

  it("ordenar_por sobre array de objetos preserva el tipo del elemento", () => {
    const { type } = infer('ordenar_por([{x: 1}], "x")');
    expect(type.kind).toBe("array");
  });

  it("función inexistente → fun-undef con sugerencia", () => {
    const { issues } = infer("functionInexistente(1)");
    expect(issues.some((i) => i.code === "fun-undef")).toBe(true);
  });

  it("randm(1, 2) sugiere random", () => {
    const { issues } = infer("randm(1, 2)");
    const issue = issues.find((i) => i.code === "fun-undef");
    expect(issue?.suggestion).toBe("random");
  });
});

describe("infer / filtrar (lazy con item)", () => {
  it("filtrar numérico", () => {
    const { type } = infer("filtrar([1, 2, 3], item > 0)");
    expect(type).toEqual(T.array(T.number));
  });

  it("filtrar con object", () => {
    const { type } = infer("filtrar([{n: 1}], item.n > 0)");
    expect(type.kind).toBe("array");
    if (type.kind === "array") {
      expect(type.element.kind).toBe("object");
    }
  });

  it("filtrar con predicado no-boolean → reporta", () => {
    const { issues } = infer("filtrar([1, 2], item)");
    expect(issues.some((i) => i.code === "type-mismatch")).toBe(true);
  });
});

describe("infer / acceso a campos", () => {
  it("vehiculo.nombre con objeto tipado", () => {
    const { type, issues } = infer("vehiculo.nombre", {
      vehiculo: T.object({ nombre: T.string }),
    });
    expect(type).toEqual(T.string);
    expect(issues).toHaveLength(0);
  });

  it("campo inexistente en objeto con tipos conocidos", () => {
    const { issues } = infer("vehiculo.color", {
      vehiculo: T.object({ nombre: T.string }),
    });
    expect(issues.some((i) => i.code === "field-undef")).toBe(true);
  });

  it("acceso a campo sobre unknown no warns", () => {
    const { type, issues } = infer("vehiculo.color", { vehiculo: T.unknown });
    expect(type).toEqual(T.unknown);
    expect(issues).toHaveLength(0);
  });

  it("acceso a length de array", () => {
    expect(infer("xs.length", { xs: T.array(T.number) }).type).toEqual(
      T.number,
    );
  });
});

describe("infer / for comp", () => {
  it("[for i in 1..n: i^2] con n:number → array<number>", () => {
    const { type } = infer("[for i in 1..n: i^2]", { n: T.number });
    expect(type).toEqual(T.array(T.number));
  });

  it("for comp con array", () => {
    const { type } = infer("[for x in xs: x + 1]", {
      xs: T.array(T.number),
    });
    expect(type).toEqual(T.array(T.number));
  });
});

describe("infer / unary", () => {
  it("-v con v:number → number", () => {
    expect(infer("-v", { v: T.number }).type).toEqual(T.number);
  });

  it("-v con v:string → error", () => {
    const { issues } = infer("-v", { v: T.string });
    expect(issues.some((i) => i.code === "type-mismatch")).toBe(true);
  });

  it("no v con v:number → error", () => {
    const { issues } = infer("no v", { v: T.number });
    expect(issues.some((i) => i.code === "type-mismatch")).toBe(true);
  });
});
