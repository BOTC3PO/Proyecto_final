import { lex } from "../lexer/lexer.js";
import { TokenKind } from "../lexer/tokens.js";
import type { Loc, TextoOInterpolacion } from "./ast.js";
import { TokenCursor } from "./cursor.js";
import { ParseError } from "./errors.js";
import { parseExpression } from "./expression.js";

function findPipeOutsideBrackets(s: string): number {
  let depth = 0;
  let inString = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inString) {
      if (ch === "\\" && i + 1 < s.length) {
        i++;
        continue;
      }
      if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') {
      inString = true;
      continue;
    }
    if (ch === "(" || ch === "[" || ch === "{") depth++;
    else if (ch === ")" || ch === "]" || ch === "}") depth--;
    else if (ch === "|" && depth === 0) return i;
  }
  return -1;
}

export function parseEnunciadoString(
  raw: string,
  baseLoc: Loc,
): TextoOInterpolacion[] {
  const parts: TextoOInterpolacion[] = [];
  let buf = "";
  let i = 0;

  const flushBuf = () => {
    if (buf.length > 0) {
      parts.push({ kind: "texto", value: buf });
      buf = "";
    }
  };

  while (i < raw.length) {
    const ch = raw[i];

    if (ch === "{") {
      if (raw[i + 1] === "{") {
        buf += "{";
        i += 2;
        continue;
      }

      let j = i + 1;
      let inner = "";
      let foundClose = false;
      while (j < raw.length) {
        const c = raw[j];
        if (c === "}") {
          if (raw[j + 1] === "}") {
            inner += "}";
            j += 2;
            continue;
          }
          foundClose = true;
          break;
        }
        inner += c;
        j++;
      }

      if (!foundClose) {
        throw new ParseError(
          `Llave abierta en \`{${inner}\` no se cierra`,
          baseLoc.line,
          baseLoc.col,
        );
      }

      flushBuf();

      let exprStr = inner;
      let modificador: string | undefined;
      const pipeIdx = findPipeOutsideBrackets(inner);
      if (pipeIdx !== -1) {
        exprStr = inner.slice(0, pipeIdx).trim();
        modificador = inner.slice(pipeIdx + 1).trim();
      } else {
        exprStr = inner.trim();
      }

      if (exprStr.length === 0) {
        throw new ParseError(
          `Interpolación vacía: \`{${inner}}\``,
          baseLoc.line,
          baseLoc.col,
        );
      }

      const exprTokens = lex(exprStr);
      const exprCursor = new TokenCursor(exprTokens);
      while (exprCursor.peek().kind === TokenKind.NEWLINE) exprCursor.consume();
      const expr = parseExpression(exprCursor);

      parts.push({ kind: "interp", expr, modificador });
      i = j + 1;
      continue;
    }

    if (ch === "}" && raw[i + 1] === "}") {
      buf += "}";
      i += 2;
      continue;
    }

    buf += ch;
    i++;
  }

  flushBuf();
  return parts;
}
