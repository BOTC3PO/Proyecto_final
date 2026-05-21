import { describe, expect, it } from "vitest";
import { lex } from "../../src/lexer/lexer.js";
import { TokenKind } from "../../src/lexer/tokens.js";

describe("lexer / indentation", () => {
  it("variables block with 2-space indent emits INDENT/DEDENT", () => {
    const tokens = lex("variables:\n  v: 1\n  t: 2");
    const sequence = tokens.map((t) => t.kind);
    expect(sequence).toEqual([
      TokenKind.KW_VARIABLES,
      TokenKind.COLON,
      TokenKind.NEWLINE,
      TokenKind.INDENT,
      TokenKind.IDENT,
      TokenKind.COLON,
      TokenKind.NUMBER,
      TokenKind.NEWLINE,
      TokenKind.IDENT,
      TokenKind.COLON,
      TokenKind.NUMBER,
      TokenKind.NEWLINE,
      TokenKind.DEDENT,
      TokenKind.EOF,
    ]);
  });

  it("4 spaces after 2 spaces produces another INDENT", () => {
    const tokens = lex("a:\n  b:\n    c: 1");
    const indents = tokens.filter((t) => t.kind === TokenKind.INDENT);
    expect(indents.length).toBe(2);
  });

  it("0 spaces after 4 spaces produces 2 DEDENT", () => {
    const tokens = lex("a:\n  b:\n    c: 1\nx: 2");
    const kinds = tokens.map((t) => t.kind);
    const xIdx = tokens.findIndex(
      (t) => t.kind === TokenKind.IDENT && t.value === "x",
    );
    expect(xIdx).toBeGreaterThan(0);
    expect(kinds[xIdx - 1]).toBe(TokenKind.DEDENT);
    expect(kinds[xIdx - 2]).toBe(TokenKind.DEDENT);
  });

  it("a tab as indentation throws LexError", () => {
    expect(() => lex("a:\n\tb: 1")).toThrow(/tab/i);
  });

  it("3 spaces (odd) throws LexError", () => {
    expect(() => lex("a:\n   b: 1")).toThrow(/múltiplo de 2/);
  });

  it("inconsistent dedent throws LexError", () => {
    // jump from 4 to 3 — 3 is not on the stack
    expect(() => lex("a:\n    b: 1\n   c: 2")).toThrow();
  });

  it("blank lines and comment-only lines do not affect indentation", () => {
    const src = "a:\n  b: 1\n\n  # comentario\n  c: 2";
    const tokens = lex(src);
    const indents = tokens.filter((t) => t.kind === TokenKind.INDENT);
    const dedents = tokens.filter((t) => t.kind === TokenKind.DEDENT);
    expect(indents.length).toBe(1);
    expect(dedents.length).toBe(1);
  });

  it("comment-only line at unusual indent is ignored", () => {
    const src = "a:\n  b: 1\n     # mal indentado\n  c: 2";
    expect(() => lex(src)).not.toThrow();
  });

  it("emits all pending DEDENTs and EOF at end of input", () => {
    const tokens = lex("a:\n  b:\n    c: 1");
    const tail = tokens.slice(-4).map((t) => t.kind);
    expect(tail).toEqual([
      TokenKind.NEWLINE,
      TokenKind.DEDENT,
      TokenKind.DEDENT,
      TokenKind.EOF,
    ]);
  });

  it("dash at start of indented line is DASH, not MINUS", () => {
    const tokens = lex("opciones:\n  - A\n  - B");
    const dashes = tokens.filter((t) => t.kind === TokenKind.DASH);
    expect(dashes.length).toBe(2);
    expect(tokens.filter((t) => t.kind === TokenKind.MINUS).length).toBe(0);
  });
});
