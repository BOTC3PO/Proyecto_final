import { describe, expect, it } from "vitest";
import { lex } from "../../src/lexer/lexer.js";
import { TokenKind } from "../../src/lexer/tokens.js";

function kinds(source: string): TokenKind[] {
  return lex(source)
    .filter(
      (t) =>
        t.kind !== TokenKind.NEWLINE &&
        t.kind !== TokenKind.INDENT &&
        t.kind !== TokenKind.DEDENT &&
        t.kind !== TokenKind.EOF,
    )
    .map((t) => t.kind);
}

describe("lexer / basic", () => {
  it('"v: 42" → IDENT, COLON, NUMBER', () => {
    expect(kinds("v: 42")).toEqual([
      TokenKind.IDENT,
      TokenKind.COLON,
      TokenKind.NUMBER,
    ]);
    const tokens = lex("v: 42");
    expect(tokens[0]).toMatchObject({ kind: TokenKind.IDENT, value: "v" });
    expect(tokens[2]).toMatchObject({ kind: TokenKind.NUMBER, value: "42" });
  });

  it('"edad: -10" → IDENT, COLON, MINUS, NUMBER (lexer emits MINUS, not DASH)', () => {
    expect(kinds("edad: -10")).toEqual([
      TokenKind.IDENT,
      TokenKind.COLON,
      TokenKind.MINUS,
      TokenKind.NUMBER,
    ]);
  });

  it('"pi: 3.14" → IDENT, COLON, NUMBER', () => {
    const tokens = lex("pi: 3.14");
    expect(kinds("pi: 3.14")).toEqual([
      TokenKind.IDENT,
      TokenKind.COLON,
      TokenKind.NUMBER,
    ]);
    expect(tokens[2].value).toBe("3.14");
  });

  it('"masa: 9.109e-31" → NUMBER with value "9.109e-31"', () => {
    const tokens = lex("masa: 9.109e-31");
    const number = tokens.find((t) => t.kind === TokenKind.NUMBER);
    expect(number?.value).toBe("9.109e-31");
  });

  it('"verdadero" → VERDADERO', () => {
    expect(kinds("verdadero")).toEqual([TokenKind.VERDADERO]);
  });

  it('"falso" → FALSO and "nulo" → NULO', () => {
    expect(kinds("falso")).toEqual([TokenKind.FALSO]);
    expect(kinds("nulo")).toEqual([TokenKind.NULO]);
  });

  it('"no a" → NO, IDENT', () => {
    expect(kinds("no a")).toEqual([TokenKind.NO, TokenKind.IDENT]);
  });

  it('"y" and "o" are always keywords', () => {
    expect(kinds("a y b")).toEqual([
      TokenKind.IDENT,
      TokenKind.Y,
      TokenKind.IDENT,
    ]);
    expect(kinds("a o b")).toEqual([
      TokenKind.IDENT,
      TokenKind.O,
      TokenKind.IDENT,
    ]);
  });

  it('"1..10" → NUMBER, RANGE, NUMBER', () => {
    expect(kinds("1..10")).toEqual([
      TokenKind.NUMBER,
      TokenKind.RANGE,
      TokenKind.NUMBER,
    ]);
    const tokens = lex("1..10");
    expect(tokens[0].value).toBe("1");
    expect(tokens[2].value).toBe("10");
  });

  it('"a == b" → IDENT, EQ, IDENT', () => {
    expect(kinds("a == b")).toEqual([
      TokenKind.IDENT,
      TokenKind.EQ,
      TokenKind.IDENT,
    ]);
  });

  it('"a != b" → IDENT, NEQ, IDENT', () => {
    expect(kinds("a != b")).toEqual([
      TokenKind.IDENT,
      TokenKind.NEQ,
      TokenKind.IDENT,
    ]);
  });

  it('"a <= b" / "a >= b" / "a < b" / "a > b"', () => {
    expect(kinds("a <= b")).toEqual([
      TokenKind.IDENT,
      TokenKind.LTE,
      TokenKind.IDENT,
    ]);
    expect(kinds("a >= b")).toEqual([
      TokenKind.IDENT,
      TokenKind.GTE,
      TokenKind.IDENT,
    ]);
    expect(kinds("a < b")).toEqual([
      TokenKind.IDENT,
      TokenKind.LT,
      TokenKind.IDENT,
    ]);
    expect(kinds("a > b")).toEqual([
      TokenKind.IDENT,
      TokenKind.GT,
      TokenKind.IDENT,
    ]);
  });

  it('"a^2" → IDENT, CARET, NUMBER', () => {
    expect(kinds("a^2")).toEqual([
      TokenKind.IDENT,
      TokenKind.CARET,
      TokenKind.NUMBER,
    ]);
  });

  it('"[1, 2, 3]" → LBRACKET, NUMBER, COMMA, NUMBER, COMMA, NUMBER, RBRACKET', () => {
    expect(kinds("[1, 2, 3]")).toEqual([
      TokenKind.LBRACKET,
      TokenKind.NUMBER,
      TokenKind.COMMA,
      TokenKind.NUMBER,
      TokenKind.COMMA,
      TokenKind.NUMBER,
      TokenKind.RBRACKET,
    ]);
  });

  it("for / in are always keywords", () => {
    expect(kinds("for x in lista")).toEqual([
      TokenKind.FOR,
      TokenKind.IDENT,
      TokenKind.IN,
      TokenKind.IDENT,
    ]);
  });

  it("identifiers accept accents and ñ", () => {
    const tokens = lex("año: 1");
    expect(tokens[0]).toMatchObject({ kind: TokenKind.IDENT, value: "año" });
    const tokens2 = lex("descripción: 2");
    expect(tokens2[0]).toMatchObject({
      kind: TokenKind.IDENT,
      value: "descripción",
    });
  });

  it("block keywords only at start of line followed by ':'", () => {
    const t1 = lex("variables: 1");
    expect(t1[0].kind).toBe(TokenKind.KW_VARIABLES);
    const t2 = lex("x: variables");
    const idx = t2.findIndex((t) => t.value === "variables");
    expect(t2[idx].kind).toBe(TokenKind.IDENT);
  });

  it("comment with # is discarded", () => {
    expect(kinds("v: 1 # comentario")).toEqual([
      TokenKind.IDENT,
      TokenKind.COLON,
      TokenKind.NUMBER,
    ]);
  });

  it("emits EOF at the end", () => {
    const tokens = lex("v: 1");
    expect(tokens[tokens.length - 1].kind).toBe(TokenKind.EOF);
  });
});
