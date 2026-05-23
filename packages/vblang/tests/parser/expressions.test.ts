import { describe, expect, it } from "vitest";
import { lex } from "../../src/lexer/lexer.js";
import { TokenKind } from "../../src/lexer/tokens.js";
import type { Expr } from "../../src/parser/ast.js";
import { TokenCursor } from "../../src/parser/cursor.js";
import { ParseError } from "../../src/parser/errors.js";
import { parseExpression } from "../../src/parser/expression.js";

function parse(source: string): Expr {
  const tokens = lex(source);
  const cursor = new TokenCursor(tokens);
  while (cursor.peek().kind === TokenKind.NEWLINE) cursor.consume();
  return parseExpression(cursor);
}

describe("parser / literales", () => {
  it("número entero", () => {
    expect(parse("42")).toMatchObject({ kind: "num", value: 42 });
  });

  it("número decimal", () => {
    expect(parse("3.14")).toMatchObject({ kind: "num", value: 3.14 });
  });

  it("número en notación científica", () => {
    expect(parse("9.109e-31")).toMatchObject({ kind: "num", value: 9.109e-31 });
  });

  it("string", () => {
    expect(parse('"hola"')).toMatchObject({ kind: "str", value: "hola" });
  });

  it("verdadero / falso / nulo", () => {
    expect(parse("verdadero")).toMatchObject({ kind: "bool", value: true });
    expect(parse("falso")).toMatchObject({ kind: "bool", value: false });
    expect(parse("nulo")).toMatchObject({ kind: "null" });
  });
});

describe("parser / variables y acceso", () => {
  it("identificador simple", () => {
    expect(parse("vehiculo")).toMatchObject({ kind: "var", name: "vehiculo" });
  });

  it("identificador con acentos", () => {
    expect(parse("año")).toMatchObject({ kind: "var", name: "año" });
  });

  it("campo único: vehiculo.nombre", () => {
    expect(parse("vehiculo.nombre")).toMatchObject({
      kind: "field",
      target: { kind: "var", name: "vehiculo" },
      field: "nombre",
    });
  });

  it("campo de campo: a.b.c", () => {
    expect(parse("a.b.c")).toMatchObject({
      kind: "field",
      target: {
        kind: "field",
        target: { kind: "var", name: "a" },
        field: "b",
      },
      field: "c",
    });
  });

  it("indexado: numeros[0]", () => {
    expect(parse("numeros[0]")).toMatchObject({
      kind: "index",
      target: { kind: "var", name: "numeros" },
      key: { kind: "num", value: 0 },
    });
  });

  it("indexado con expresión: numeros[i+1]", () => {
    expect(parse("numeros[i+1]")).toMatchObject({
      kind: "index",
      target: { kind: "var", name: "numeros" },
      key: {
        kind: "binop",
        op: "+",
        left: { kind: "var", name: "i" },
        right: { kind: "num", value: 1 },
      },
    });
  });

  it("campo después de índice: vehiculo.lista[0]", () => {
    expect(parse("vehiculo.lista[0]")).toMatchObject({
      kind: "index",
      target: {
        kind: "field",
        target: { kind: "var", name: "vehiculo" },
        field: "lista",
      },
      key: { kind: "num", value: 0 },
    });
  });

  it("acceso combinado: tabla[random(0, 9)].producto", () => {
    expect(parse("tabla[random(0, 9)].producto")).toMatchObject({
      kind: "field",
      field: "producto",
      target: {
        kind: "index",
        target: { kind: "var", name: "tabla" },
        key: {
          kind: "fun_call",
          name: "random",
          args: [
            { kind: "num", value: 0 },
            { kind: "num", value: 9 },
          ],
        },
      },
    });
  });
});

describe("parser / aritmética: precedencia y asociatividad", () => {
  it("2 + 3 * 4 → +(2, *(3, 4))", () => {
    expect(parse("2 + 3 * 4")).toMatchObject({
      kind: "binop",
      op: "+",
      left: { kind: "num", value: 2 },
      right: {
        kind: "binop",
        op: "*",
        left: { kind: "num", value: 3 },
        right: { kind: "num", value: 4 },
      },
    });
  });

  it("2 * 3 + 4 → +(*(2, 3), 4)", () => {
    expect(parse("2 * 3 + 4")).toMatchObject({
      kind: "binop",
      op: "+",
      left: {
        kind: "binop",
        op: "*",
        left: { kind: "num", value: 2 },
        right: { kind: "num", value: 3 },
      },
      right: { kind: "num", value: 4 },
    });
  });

  it("2 - 3 - 4 → -( -(2, 3), 4) (left-assoc)", () => {
    expect(parse("2 - 3 - 4")).toMatchObject({
      kind: "binop",
      op: "-",
      left: {
        kind: "binop",
        op: "-",
        left: { kind: "num", value: 2 },
        right: { kind: "num", value: 3 },
      },
      right: { kind: "num", value: 4 },
    });
  });

  it("a + b * c - d / e", () => {
    expect(parse("a + b * c - d / e")).toMatchObject({
      kind: "binop",
      op: "-",
      left: {
        kind: "binop",
        op: "+",
        left: { kind: "var", name: "a" },
        right: {
          kind: "binop",
          op: "*",
          left: { kind: "var", name: "b" },
          right: { kind: "var", name: "c" },
        },
      },
      right: {
        kind: "binop",
        op: "/",
        left: { kind: "var", name: "d" },
        right: { kind: "var", name: "e" },
      },
    });
  });

  it("paréntesis cambian la precedencia: (a + b) * c", () => {
    expect(parse("(a + b) * c")).toMatchObject({
      kind: "binop",
      op: "*",
      left: {
        kind: "binop",
        op: "+",
        left: { kind: "var", name: "a" },
        right: { kind: "var", name: "b" },
      },
      right: { kind: "var", name: "c" },
    });
  });

  it("módulo % tiene la misma precedencia que */", () => {
    expect(parse("a + b % c")).toMatchObject({
      kind: "binop",
      op: "+",
      right: { kind: "binop", op: "%" },
    });
  });

  it("división y multiplicación encadenada: a/b*c → *(/(a,b), c)", () => {
    expect(parse("a/b*c")).toMatchObject({
      kind: "binop",
      op: "*",
      left: {
        kind: "binop",
        op: "/",
        left: { kind: "var", name: "a" },
        right: { kind: "var", name: "b" },
      },
      right: { kind: "var", name: "c" },
    });
  });
});

describe("parser / potencia (right-assoc)", () => {
  it("2^3^4 → ^(2, ^(3, 4))", () => {
    expect(parse("2^3^4")).toMatchObject({
      kind: "binop",
      op: "^",
      left: { kind: "num", value: 2 },
      right: {
        kind: "binop",
        op: "^",
        left: { kind: "num", value: 3 },
        right: { kind: "num", value: 4 },
      },
    });
  });

  it("a^2 + b^2", () => {
    expect(parse("a^2 + b^2")).toMatchObject({
      kind: "binop",
      op: "+",
      left: { kind: "binop", op: "^" },
      right: { kind: "binop", op: "^" },
    });
  });

  it("2 * a^2 → *(2, ^(a, 2))", () => {
    expect(parse("2 * a^2")).toMatchObject({
      kind: "binop",
      op: "*",
      left: { kind: "num", value: 2 },
      right: {
        kind: "binop",
        op: "^",
        left: { kind: "var", name: "a" },
        right: { kind: "num", value: 2 },
      },
    });
  });
});

describe("parser / unario", () => {
  it("-2^2 → -(^(2, 2))  (potencia tiene mayor precedencia que '-' unario)", () => {
    expect(parse("-2^2")).toMatchObject({
      kind: "unary",
      op: "-",
      arg: {
        kind: "binop",
        op: "^",
        left: { kind: "num", value: 2 },
        right: { kind: "num", value: 2 },
      },
    });
  });

  it("-a + b → +(-(a), b)", () => {
    expect(parse("-a + b")).toMatchObject({
      kind: "binop",
      op: "+",
      left: { kind: "unary", op: "-", arg: { kind: "var", name: "a" } },
      right: { kind: "var", name: "b" },
    });
  });

  it("doble negación --a", () => {
    expect(parse("--a")).toMatchObject({
      kind: "unary",
      op: "-",
      arg: { kind: "unary", op: "-", arg: { kind: "var", name: "a" } },
    });
  });

  it("+a", () => {
    expect(parse("+a")).toMatchObject({
      kind: "unary",
      op: "+",
      arg: { kind: "var", name: "a" },
    });
  });

  it("-(a+b)", () => {
    expect(parse("-(a+b)")).toMatchObject({
      kind: "unary",
      op: "-",
      arg: { kind: "binop", op: "+" },
    });
  });
});

describe("parser / comparación", () => {
  it("a == b", () => {
    expect(parse("a == b")).toMatchObject({
      kind: "binop",
      op: "==",
      left: { kind: "var", name: "a" },
      right: { kind: "var", name: "b" },
    });
  });

  it("a != b", () => {
    expect(parse("a != b")).toMatchObject({ kind: "binop", op: "!=" });
  });

  it("a < b, a > b, a <= b, a >= b", () => {
    expect(parse("a < b")).toMatchObject({ kind: "binop", op: "<" });
    expect(parse("a > b")).toMatchObject({ kind: "binop", op: ">" });
    expect(parse("a <= b")).toMatchObject({ kind: "binop", op: "<=" });
    expect(parse("a >= b")).toMatchObject({ kind: "binop", op: ">=" });
  });

  it("a == b == c lanza ParseError (no asociativo)", () => {
    expect(() => parse("a == b == c")).toThrow(ParseError);
    expect(() => parse("a == b == c")).toThrow(/no son asociativos/);
  });

  it("compara con string: a == \"hola\"", () => {
    expect(parse('a == "hola"')).toMatchObject({
      kind: "binop",
      op: "==",
      right: { kind: "str", value: "hola" },
    });
  });
});

describe("parser / lógicos", () => {
  it("a y b o c → o(y(a, b), c)", () => {
    expect(parse("a y b o c")).toMatchObject({
      kind: "binop",
      op: "o",
      left: {
        kind: "binop",
        op: "y",
        left: { kind: "var", name: "a" },
        right: { kind: "var", name: "b" },
      },
      right: { kind: "var", name: "c" },
    });
  });

  it("no a y b → y(no(a), b)", () => {
    expect(parse("no a y b")).toMatchObject({
      kind: "binop",
      op: "y",
      left: { kind: "unary", op: "no", arg: { kind: "var", name: "a" } },
      right: { kind: "var", name: "b" },
    });
  });

  it("no (a == b) → no(==(a, b))", () => {
    expect(parse("no (a == b)")).toMatchObject({
      kind: "unary",
      op: "no",
      arg: {
        kind: "binop",
        op: "==",
        left: { kind: "var", name: "a" },
        right: { kind: "var", name: "b" },
      },
    });
  });

  it("v > 0 y t > 0", () => {
    expect(parse("v > 0 y t > 0")).toMatchObject({
      kind: "binop",
      op: "y",
      left: {
        kind: "binop",
        op: ">",
        left: { kind: "var", name: "v" },
        right: { kind: "num", value: 0 },
      },
      right: {
        kind: "binop",
        op: ">",
        left: { kind: "var", name: "t" },
        right: { kind: "num", value: 0 },
      },
    });
  });

  it("a o b o c (left-assoc)", () => {
    expect(parse("a o b o c")).toMatchObject({
      kind: "binop",
      op: "o",
      left: {
        kind: "binop",
        op: "o",
        left: { kind: "var", name: "a" },
        right: { kind: "var", name: "b" },
      },
      right: { kind: "var", name: "c" },
    });
  });
});

describe("parser / array literal", () => {
  it("[]", () => {
    expect(parse("[]")).toMatchObject({ kind: "array", items: [] });
  });

  it("[1, 2, 3]", () => {
    const ast = parse("[1, 2, 3]") as { items: Expr[] };
    expect(ast).toMatchObject({ kind: "array" });
    expect(ast.items).toHaveLength(3);
    expect(ast.items[0]).toMatchObject({ kind: "num", value: 1 });
    expect(ast.items[2]).toMatchObject({ kind: "num", value: 3 });
  });

  it("array con expresiones: [a+1, b*2]", () => {
    expect(parse("[a+1, b*2]")).toMatchObject({
      kind: "array",
      items: [
        { kind: "binop", op: "+" },
        { kind: "binop", op: "*" },
      ],
    });
  });

  it("array con strings", () => {
    expect(parse('["a", "b"]')).toMatchObject({
      kind: "array",
      items: [
        { kind: "str", value: "a" },
        { kind: "str", value: "b" },
      ],
    });
  });
});

describe("parser / objeto literal", () => {
  it("{nombre: \"Martín\", edad: 15}", () => {
    expect(parse('{nombre: "Martín", edad: 15}')).toMatchObject({
      kind: "object",
      entries: [
        { key: "nombre", value: { kind: "str", value: "Martín" } },
        { key: "edad", value: { kind: "num", value: 15 } },
      ],
    });
  });

  it("{} vacío", () => {
    expect(parse("{}")).toMatchObject({ kind: "object", entries: [] });
  });

  it("objeto con expresiones: {x: a+1}", () => {
    expect(parse("{x: a+1}")).toMatchObject({
      kind: "object",
      entries: [
        { key: "x", value: { kind: "binop", op: "+" } },
      ],
    });
  });
});

describe("parser / for comprehension", () => {
  it("[for i in 1..n: i^2]", () => {
    expect(parse("[for i in 1..n: i^2]")).toMatchObject({
      kind: "for_comp",
      variable: "i",
      iterable: {
        kind: "range",
        from: { kind: "num", value: 1 },
        to: { kind: "var", name: "n" },
      },
      body: {
        kind: "binop",
        op: "^",
        left: { kind: "var", name: "i" },
        right: { kind: "num", value: 2 },
      },
    });
  });

  it("[for p in paises: \"Hola \" + p]", () => {
    expect(parse('[for p in paises: "Hola " + p]')).toMatchObject({
      kind: "for_comp",
      variable: "p",
      iterable: { kind: "var", name: "paises" },
      body: {
        kind: "binop",
        op: "+",
        left: { kind: "str", value: "Hola " },
        right: { kind: "var", name: "p" },
      },
    });
  });

  it("[for x in 0..10: x*2]", () => {
    expect(parse("[for x in 0..10: x*2]")).toMatchObject({
      kind: "for_comp",
      variable: "x",
      iterable: {
        kind: "range",
        from: { kind: "num", value: 0 },
        to: { kind: "num", value: 10 },
      },
    });
  });

  it("for comp con cuerpo función: [for v in xs: f(v)]", () => {
    expect(parse("[for v in xs: f(v)]")).toMatchObject({
      kind: "for_comp",
      variable: "v",
      iterable: { kind: "var", name: "xs" },
      body: { kind: "fun_call", name: "f" },
    });
  });
});

describe("parser / llamadas a función", () => {
  it("random(1, 10)", () => {
    expect(parse("random(1, 10)")).toMatchObject({
      kind: "fun_call",
      name: "random",
      args: [
        { kind: "num", value: 1 },
        { kind: "num", value: 10 },
      ],
    });
  });

  it("uno_de([\"a\",\"b\"])", () => {
    expect(parse('uno_de(["a","b"])')).toMatchObject({
      kind: "fun_call",
      name: "uno_de",
      args: [
        {
          kind: "array",
          items: [
            { kind: "str", value: "a" },
            { kind: "str", value: "b" },
          ],
        },
      ],
    });
  });

  it("filtrar(paises, item.iso != pais.iso)", () => {
    expect(parse("filtrar(paises, item.iso != pais.iso)")).toMatchObject({
      kind: "fun_call",
      name: "filtrar",
      args: [
        { kind: "var", name: "paises" },
        {
          kind: "binop",
          op: "!=",
          left: {
            kind: "field",
            target: { kind: "var", name: "item" },
            field: "iso",
          },
          right: {
            kind: "field",
            target: { kind: "var", name: "pais" },
            field: "iso",
          },
        },
      ],
    });
  });

  it("sqrt(b^2 - 4*a*c)", () => {
    expect(parse("sqrt(b^2 - 4*a*c)")).toMatchObject({
      kind: "fun_call",
      name: "sqrt",
      args: [
        {
          kind: "binop",
          op: "-",
          left: {
            kind: "binop",
            op: "^",
            left: { kind: "var", name: "b" },
            right: { kind: "num", value: 2 },
          },
          right: {
            kind: "binop",
            op: "*",
            left: {
              kind: "binop",
              op: "*",
              left: { kind: "num", value: 4 },
              right: { kind: "var", name: "a" },
            },
            right: { kind: "var", name: "c" },
          },
        },
      ],
    });
  });

  it("llamada sin argumentos: hoy()", () => {
    expect(parse("hoy()")).toMatchObject({
      kind: "fun_call",
      name: "hoy",
      args: [],
    });
  });

  it("anidada: f(g(x))", () => {
    expect(parse("f(g(x))")).toMatchObject({
      kind: "fun_call",
      name: "f",
      args: [
        { kind: "fun_call", name: "g", args: [{ kind: "var", name: "x" }] },
      ],
    });
  });
});

describe("parser / casos combinados", () => {
  it("random(50, 200) * t", () => {
    expect(parse("random(50, 200) * t")).toMatchObject({
      kind: "binop",
      op: "*",
      left: {
        kind: "fun_call",
        name: "random",
        args: [
          { kind: "num", value: 50 },
          { kind: "num", value: 200 },
        ],
      },
      right: { kind: "var", name: "t" },
    });
  });

  it("v > 0 y v <= 100", () => {
    expect(parse("v > 0 y v <= 100")).toMatchObject({
      kind: "binop",
      op: "y",
      left: { kind: "binop", op: ">" },
      right: { kind: "binop", op: "<=" },
    });
  });

  it("(a + b) * (c - d)", () => {
    expect(parse("(a + b) * (c - d)")).toMatchObject({
      kind: "binop",
      op: "*",
      left: { kind: "binop", op: "+" },
      right: { kind: "binop", op: "-" },
    });
  });

  it("expresión compleja: no (a == b) y c > 0", () => {
    expect(parse("no (a == b) y c > 0")).toMatchObject({
      kind: "binop",
      op: "y",
      left: { kind: "unary", op: "no", arg: { kind: "binop", op: "==" } },
      right: { kind: "binop", op: ">" },
    });
  });

  it("string como argumento: f(\"hola\", x)", () => {
    expect(parse('f("hola", x)')).toMatchObject({
      kind: "fun_call",
      name: "f",
      args: [
        { kind: "str", value: "hola" },
        { kind: "var", name: "x" },
      ],
    });
  });
});

describe("parser / errores", () => {
  it("'1 + ' lanza ParseError", () => {
    expect(() => parse("1 + ")).toThrow(ParseError);
    expect(() => parse("1 + ")).toThrow(/expresión/);
  });

  it("'(1 + 2' lanza ParseError con mención de ')'", () => {
    expect(() => parse("(1 + 2")).toThrow(/\)/);
  });

  it("'a..b' fuera de for comp lanza ParseError", () => {
    expect(() => parse("a..b")).toThrow(/for/);
  });

  it("'[1, 2, ' sin cerrar", () => {
    expect(() => parse("[1, 2, ")).toThrow(ParseError);
  });

  it("'random(1,' incompleto", () => {
    expect(() => parse("random(1,")).toThrow(ParseError);
  });

  it("'a.' sin nombre de campo", () => {
    expect(() => parse("a.")).toThrow(/campo/);
  });

  it("'a[1' sin cerrar índice", () => {
    expect(() => parse("a[1")).toThrow(/\]/);
  });

  it("comparación encadenada 'a < b < c' lanza ParseError", () => {
    expect(() => parse("a < b < c")).toThrow(/no son asociativos/);
  });

  it("número solo seguido de ',' no es expresión válida en top-level", () => {
    expect(() => parse(",")).toThrow(ParseError);
  });
});

describe("parser / loc tracking", () => {
  it("loc.line coincide con la línea de origen", () => {
    const ast = parse("2 + 3 * 4");
    expect(ast.loc.line).toBe(1);
    if (ast.kind === "binop") {
      expect(ast.left.loc.line).toBe(1);
      expect(ast.right.loc.line).toBe(1);
    }
  });

  it("loc.col apunta a columnas coherentes", () => {
    const ast = parse("a + b") as { loc: { col: number }; right: { loc: { col: number } } };
    expect(ast.loc.col).toBeGreaterThanOrEqual(1);
    expect(ast.right.loc.col).toBeGreaterThan(ast.loc.col);
  });

  it("loc abarca hasta el último token (endCol)", () => {
    const ast = parse("f(1, 2)");
    expect(ast.loc.endCol).toBeGreaterThan(ast.loc.col);
  });
});

describe("parser / performance", () => {
  it("parsea una expresión de ~15 operadores en < 5ms", () => {
    const src = "1 + 2 * 3 - 4 / 5 + a * b - c / d + e^2 - f + g * h / i + j";
    const t0 = performance.now();
    parse(src);
    const dt = performance.now() - t0;
    expect(dt).toBeLessThan(5);
  });
});
