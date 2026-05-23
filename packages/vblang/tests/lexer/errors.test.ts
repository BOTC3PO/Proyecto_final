import { describe, expect, it } from "vitest";
import { LexError } from "../../src/lexer/errors.js";
import { lex } from "../../src/lexer/lexer.js";
import { suggestKeyword } from "../../src/lexer/suggestions.js";
import { TokenKind } from "../../src/lexer/tokens.js";

describe("lexer / errors and suggestions", () => {
  it('suggestKeyword("variabbles") → "variables"', () => {
    expect(suggestKeyword("variabbles")).toBe("variables");
  });

  it("suggestKeyword returns null when nothing is close (distance > 2)", () => {
    expect(suggestKeyword("xyzabc")).toBeNull();
  });

  it('suggestKeyword("respeusta") → "respuesta"', () => {
    expect(suggestKeyword("respeusta")).toBe("respuesta");
  });

  it('"x = 1" throws LexError suggesting ":" for declaration', () => {
    try {
      lex("x = 1");
      expect.fail("should have thrown");
    } catch (e) {
      expect(e).toBeInstanceOf(LexError);
      expect((e as Error).message).toMatch(/=/);
      expect((e as Error).message).toMatch(/:/);
    }
  });

  it("'/* comment */' throws LexError with #-comment hint", () => {
    expect(() => lex("/* comment */")).toThrow(/#/);
  });

  it("typo'd block keyword stays as IDENT (parser handles structural error)", () => {
    const tokens = lex("variabbles: 1");
    expect(tokens[0]).toMatchObject({
      kind: TokenKind.IDENT,
      value: "variabbles",
    });
  });

  it("LexError reports line and col", () => {
    try {
      lex("a:\n   b: 1");
      expect.fail("should have thrown");
    } catch (e) {
      const err = e as LexError;
      expect(err).toBeInstanceOf(LexError);
      expect(err.line).toBe(2);
    }
  });

  it("unknown character throws LexError", () => {
    expect(() => lex("a @ b")).toThrow(/inesperado/);
  });
});
