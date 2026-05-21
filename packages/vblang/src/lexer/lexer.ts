import { LexError } from "./errors.js";
import { classifyIndent } from "./indentation.js";
import {
  ALWAYS_KEYWORDS,
  BLOCK_KEYWORDS,
  Token,
  TokenKind,
} from "./tokens.js";

const IDENT_START_RE = /[a-záéíóúñA-ZÁÉÍÓÚÑ_]/;
const IDENT_CONT_RE = /[a-záéíóúñA-ZÁÉÍÓÚÑ_0-9]/;

function isDigit(ch: string): boolean {
  return ch >= "0" && ch <= "9";
}

export function lex(rawSource: string): Token[] {
  const source = rawSource.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const tokens: Token[] = [];
  const indentStack: number[] = [0];
  const len = source.length;

  let pos = 0;
  let line = 1;
  let col = 1;
  let atLineStart = true;

  function advance(): string {
    const ch = source[pos++];
    if (ch === "\n") {
      line++;
      col = 1;
    } else {
      col++;
    }
    return ch;
  }

  function push(kind: TokenKind, value: string, l: number, c: number): void {
    tokens.push({ kind, value, line: l, col: c });
  }

  function peek(offset = 0): string {
    return source[pos + offset] ?? "";
  }

  function lineHasContentBefore(currentLine: number): boolean {
    for (let i = tokens.length - 1; i >= 0; i--) {
      const t = tokens[i];
      if (t.line < currentLine) return false;
      if (t.kind === TokenKind.NEWLINE) return false;
      if (t.kind === TokenKind.INDENT || t.kind === TokenKind.DEDENT) continue;
      return true;
    }
    return false;
  }

  while (pos < len) {
    if (atLineStart) {
      let spaces = 0;
      while (pos < len) {
        const ch = source[pos];
        if (ch === " ") {
          spaces++;
          advance();
        } else if (ch === "\t") {
          throw new LexError(
            "Indentación con tab no permitida; usar 2 espacios.",
            line,
            col,
          );
        } else {
          break;
        }
      }

      if (pos >= len) break;
      const first = source[pos];

      if (first === "\n") {
        advance();
        continue;
      }
      if (first === "#") {
        while (pos < len && source[pos] !== "\n") advance();
        if (pos < len) advance();
        continue;
      }

      const event = classifyIndent(spaces, indentStack, line);
      if (event.kind === "INDENT") {
        push(TokenKind.INDENT, "", line, 1);
      } else if (event.kind === "DEDENT") {
        for (let i = 0; i < event.count; i++) {
          push(TokenKind.DEDENT, "", line, 1);
        }
      }

      atLineStart = false;

      if (
        source[pos] === "-" &&
        (source[pos + 1] === " " || source[pos + 1] === "\n" || pos + 1 >= len)
      ) {
        push(TokenKind.DASH, "-", line, col);
        advance();
        continue;
      }
    }

    const ch = source[pos];

    if (ch === "\n") {
      push(TokenKind.NEWLINE, "\n", line, col);
      advance();
      atLineStart = true;
      continue;
    }

    if (ch === " ") {
      advance();
      continue;
    }

    if (ch === "\t") {
      throw new LexError("Tab no permitido fuera de indentación.", line, col);
    }

    if (ch === "#") {
      while (pos < len && source[pos] !== "\n") advance();
      continue;
    }

    if (ch === "/" && peek(1) === "*") {
      throw new LexError(
        "No se reconocen comentarios estilo /* */, usá # para comentarios.",
        line,
        col,
      );
    }

    const startLine = line;
    const startCol = col;

    if (ch === '"') {
      advance();
      let value = "";
      while (pos < len && source[pos] !== '"') {
        const c = source[pos];
        if (c === "\n") {
          throw new LexError(
            "el string no tiene comilla de cierre",
            startLine,
            startCol,
          );
        }
        if (c === "\\") {
          const nxt = source[pos + 1];
          if (nxt === undefined) {
            throw new LexError(
              "el string no tiene comilla de cierre",
              startLine,
              startCol,
            );
          }
          switch (nxt) {
            case "n":
              value += "\n";
              break;
            case "t":
              value += "\t";
              break;
            case '"':
              value += '"';
              break;
            case "\\":
              value += "\\";
              break;
            case "{":
              value += "{";
              break;
            case "}":
              value += "}";
              break;
            default:
              throw new LexError(`Escape inválido \\${nxt}`, line, col);
          }
          advance();
          advance();
        } else {
          value += c;
          advance();
        }
      }
      if (pos >= len) {
        throw new LexError(
          "el string no tiene comilla de cierre",
          startLine,
          startCol,
        );
      }
      advance();
      push(TokenKind.STRING, value, startLine, startCol);
      continue;
    }

    if (isDigit(ch)) {
      let raw = "";
      while (pos < len && isDigit(source[pos])) {
        raw += source[pos];
        advance();
      }
      if (source[pos] === "." && source[pos + 1] !== "." && isDigit(peek(1))) {
        raw += ".";
        advance();
        while (pos < len && isDigit(source[pos])) {
          raw += source[pos];
          advance();
        }
      }
      if (source[pos] === "e" || source[pos] === "E") {
        let look = pos + 1;
        if (source[look] === "+" || source[look] === "-") look++;
        if (isDigit(source[look] ?? "")) {
          raw += source[pos];
          advance();
          if (source[pos] === "+" || source[pos] === "-") {
            raw += source[pos];
            advance();
          }
          while (pos < len && isDigit(source[pos])) {
            raw += source[pos];
            advance();
          }
        }
      }
      push(TokenKind.NUMBER, raw, startLine, startCol);
      continue;
    }

    if (IDENT_START_RE.test(ch)) {
      let raw = "";
      while (pos < len && IDENT_CONT_RE.test(source[pos])) {
        raw += source[pos];
        advance();
      }

      if (Object.prototype.hasOwnProperty.call(ALWAYS_KEYWORDS, raw)) {
        push(ALWAYS_KEYWORDS[raw], raw, startLine, startCol);
        continue;
      }

      const atBlockStart = !lineHasContentBefore(startLine);
      if (
        atBlockStart &&
        Object.prototype.hasOwnProperty.call(BLOCK_KEYWORDS, raw)
      ) {
        let i = pos;
        while (i < len && source[i] === " ") i++;
        if (source[i] === ":") {
          push(BLOCK_KEYWORDS[raw], raw, startLine, startCol);
          continue;
        }
      }

      push(TokenKind.IDENT, raw, startLine, startCol);
      continue;
    }

    if (ch === "=" && peek(1) === "=") {
      push(TokenKind.EQ, "==", startLine, startCol);
      advance();
      advance();
      continue;
    }
    if (ch === "=") {
      throw new LexError(
        "Carácter inesperado '='. ¿Quisiste usar ':' para declarar?",
        line,
        col,
      );
    }
    if (ch === "!" && peek(1) === "=") {
      push(TokenKind.NEQ, "!=", startLine, startCol);
      advance();
      advance();
      continue;
    }
    if (ch === "<" && peek(1) === "=") {
      push(TokenKind.LTE, "<=", startLine, startCol);
      advance();
      advance();
      continue;
    }
    if (ch === ">" && peek(1) === "=") {
      push(TokenKind.GTE, ">=", startLine, startCol);
      advance();
      advance();
      continue;
    }
    if (ch === "<") {
      push(TokenKind.LT, "<", startLine, startCol);
      advance();
      continue;
    }
    if (ch === ">") {
      push(TokenKind.GT, ">", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "." && peek(1) === ".") {
      push(TokenKind.RANGE, "..", startLine, startCol);
      advance();
      advance();
      continue;
    }
    if (ch === ".") {
      push(TokenKind.DOT, ".", startLine, startCol);
      advance();
      continue;
    }
    if (ch === ":") {
      push(TokenKind.COLON, ":", startLine, startCol);
      advance();
      let after = pos;
      while (after < len && source[after] === " ") after++;
      if (source[after] === "|") {
        let afterPipe = after + 1;
        while (afterPipe < len && source[afterPipe] === " ") afterPipe++;
        if (afterPipe >= len || source[afterPipe] === "\n") {
          while (pos < after) advance();
          const mlLine = line;
          const mlCol = col;
          advance();
          while (pos < len && source[pos] === " ") advance();
          if (pos < len && source[pos] === "\n") advance();

          let baseIndent: number | null = null;
          const contentLines: string[] = [];

          while (pos < len) {
            const lineStartPos = pos;
            const lineStartLine = line;
            const lineStartCol = col;

            let spaces = 0;
            while (pos < len && source[pos] === " ") {
              spaces++;
              advance();
            }
            const restStart = pos;
            while (pos < len && source[pos] !== "\n") advance();
            const rest = source.slice(restStart, pos);
            const isBlank = rest === "";

            if (!isBlank) {
              if (baseIndent === null) {
                baseIndent = spaces;
                contentLines.push(rest);
              } else {
                if (spaces < baseIndent) {
                  pos = lineStartPos;
                  line = lineStartLine;
                  col = lineStartCol;
                  break;
                }
                contentLines.push(
                  " ".repeat(spaces - baseIndent) + rest,
                );
              }
            } else if (baseIndent !== null) {
              contentLines.push("");
            }

            if (pos < len && source[pos] === "\n") advance();
          }

          push(
            TokenKind.MULTILINE_STRING,
            contentLines.join("\n"),
            mlLine,
            mlCol,
          );
          atLineStart = true;
          continue;
        }
      }
      continue;
    }
    if (ch === ",") {
      push(TokenKind.COMMA, ",", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "|") {
      push(TokenKind.PIPE, "|", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "(") {
      push(TokenKind.LPAREN, "(", startLine, startCol);
      advance();
      continue;
    }
    if (ch === ")") {
      push(TokenKind.RPAREN, ")", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "[") {
      push(TokenKind.LBRACKET, "[", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "]") {
      push(TokenKind.RBRACKET, "]", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "{") {
      push(TokenKind.LBRACE, "{", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "}") {
      push(TokenKind.RBRACE, "}", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "+") {
      push(TokenKind.PLUS, "+", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "-") {
      push(TokenKind.MINUS, "-", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "*") {
      push(TokenKind.STAR, "*", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "/") {
      push(TokenKind.SLASH, "/", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "%") {
      push(TokenKind.PERCENT, "%", startLine, startCol);
      advance();
      continue;
    }
    if (ch === "^") {
      push(TokenKind.CARET, "^", startLine, startCol);
      advance();
      continue;
    }

    throw new LexError(`Carácter inesperado '${ch}'`, line, col);
  }

  if (
    tokens.length > 0 &&
    tokens[tokens.length - 1].kind !== TokenKind.NEWLINE
  ) {
    push(TokenKind.NEWLINE, "", line, col);
  }
  while (indentStack.length > 1) {
    indentStack.pop();
    push(TokenKind.DEDENT, "", line, col);
  }
  push(TokenKind.EOF, "", line, col);

  return tokens;
}
