import { describe, expect, it } from "vitest";
import { lex } from "../../src/lexer/lexer.js";
import { TokenKind } from "../../src/lexer/tokens.js";

describe("lexer / strings", () => {
  it('"hola" → STRING with value "hola"', () => {
    const tokens = lex('"hola"');
    expect(tokens[0]).toMatchObject({
      kind: TokenKind.STRING,
      value: "hola",
    });
  });

  it("string with spaces → STRING", () => {
    const tokens = lex('"con espacios"');
    expect(tokens[0]).toMatchObject({
      kind: TokenKind.STRING,
      value: "con espacios",
    });
  });

  it('escape \\" inside string', () => {
    const tokens = lex('"escape \\" interno"');
    expect(tokens[0].kind).toBe(TokenKind.STRING);
    expect(tokens[0].value).toBe('escape " interno');
  });

  it("escape \\n becomes a literal newline in the value", () => {
    const tokens = lex('"escape \\n linea"');
    expect(tokens[0].value).toBe("escape \n linea");
  });

  it("supports \\t, \\\\, \\{, \\} escapes", () => {
    const tokens = lex('"a\\tb\\\\c\\{d\\}"');
    expect(tokens[0].value).toBe("a\tb\\c{d}");
  });

  it("unterminated string throws LexError", () => {
    expect(() => lex('"sin cerrar')).toThrow(
      /comilla de cierre/,
    );
  });

  it("newline inside a string throws LexError", () => {
    expect(() => lex('"hola\nmundo"')).toThrow(/comilla de cierre/);
  });

  it("multiline string preserves content with newlines", () => {
    const src = "enunciado: |\n  Línea 1\n  Línea 2";
    const tokens = lex(src);
    const kinds = tokens.map((t) => t.kind);
    expect(kinds[0]).toBe(TokenKind.KW_ENUNCIADO);
    expect(kinds[1]).toBe(TokenKind.COLON);
    expect(kinds[2]).toBe(TokenKind.MULTILINE_STRING);
    expect(tokens[2].value).toBe("Línea 1\nLínea 2");
  });

  it("multiline preserves relative indentation inside content", () => {
    const src = "enunciado: |\n  L1\n    L2\n  L3";
    const tokens = lex(src);
    const ml = tokens.find((t) => t.kind === TokenKind.MULTILINE_STRING);
    expect(ml?.value).toBe("L1\n  L2\nL3");
  });

  it("multiline ends when indent decreases below the base", () => {
    const src = "enunciado: |\n  L1\n  L2\notro: 3";
    const tokens = lex(src);
    const ml = tokens.find((t) => t.kind === TokenKind.MULTILINE_STRING);
    expect(ml?.value).toBe("L1\nL2");
    const otro = tokens.find(
      (t) => t.kind === TokenKind.IDENT && t.value === "otro",
    );
    expect(otro).toBeDefined();
  });
});
