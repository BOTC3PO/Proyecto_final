import { TokenKind } from "../lexer/tokens.js";
import type { Token } from "../lexer/tokens.js";
import { ParseError } from "./errors.js";

export class TokenCursor {
  private pos = 0;
  private tokens: Token[];

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  peek(offset = 0): Token {
    const idx = this.pos + offset;
    if (idx >= this.tokens.length) {
      return this.tokens[this.tokens.length - 1];
    }
    return this.tokens[idx];
  }

  consume(): Token {
    const t = this.tokens[this.pos];
    if (this.pos < this.tokens.length - 1) this.pos++;
    return t;
  }

  consumeKind(k: TokenKind, label?: string): Token {
    const t = this.peek();
    if (t.kind !== k) {
      throw new ParseError(
        `Se esperaba ${label ?? k} pero se encontró ${t.kind}${
          t.value ? ` ('${t.value}')` : ""
        }`,
        t.line,
        t.col,
      );
    }
    return this.consume();
  }

  match(k: TokenKind): boolean {
    if (this.peek().kind === k) {
      this.consume();
      return true;
    }
    return false;
  }

  atEnd(): boolean {
    return this.peek().kind === TokenKind.EOF;
  }
}
