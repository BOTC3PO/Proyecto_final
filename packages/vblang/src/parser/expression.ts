import { Token, TokenKind } from "../lexer/tokens.js";
import {
  BinOpKind,
  Expr,
  ForComprehension,
  Loc,
  ObjectEntry,
  RangeIter,
} from "./ast.js";
import { TokenCursor } from "./cursor.js";
import { ParseError } from "./errors.js";

function tokLoc(t: Token): Loc {
  const len = t.value ? t.value.length : 0;
  return { line: t.line, col: t.col, endLine: t.line, endCol: t.col + len };
}

function spanLoc(start: Loc, end: Loc): Loc {
  return {
    line: start.line,
    col: start.col,
    endLine: end.endLine,
    endCol: end.endCol,
  };
}

const COMPARISON_OPS: Partial<Record<TokenKind, BinOpKind>> = {
  [TokenKind.EQ]: "==",
  [TokenKind.NEQ]: "!=",
  [TokenKind.LT]: "<",
  [TokenKind.GT]: ">",
  [TokenKind.LTE]: "<=",
  [TokenKind.GTE]: ">=",
};

const ADD_OPS: Partial<Record<TokenKind, BinOpKind>> = {
  [TokenKind.PLUS]: "+",
  [TokenKind.MINUS]: "-",
};

const MUL_OPS: Partial<Record<TokenKind, BinOpKind>> = {
  [TokenKind.STAR]: "*",
  [TokenKind.SLASH]: "/",
  [TokenKind.PERCENT]: "%",
};

export function parseExpression(cursor: TokenCursor): Expr {
  const expr = parseOr(cursor);
  const next = cursor.peek();
  if (next.kind === TokenKind.RANGE) {
    throw new ParseError(
      "El operador '..' solo se permite dentro de un 'for ... in'",
      next.line,
      next.col,
    );
  }
  return expr;
}

function parseOr(cursor: TokenCursor): Expr {
  let left = parseAnd(cursor);
  while (cursor.peek().kind === TokenKind.O) {
    cursor.consume();
    const right = parseAnd(cursor);
    left = {
      kind: "binop",
      op: "o",
      left,
      right,
      loc: spanLoc(left.loc, right.loc),
    };
  }
  return left;
}

function parseAnd(cursor: TokenCursor): Expr {
  let left = parseNot(cursor);
  while (cursor.peek().kind === TokenKind.Y) {
    cursor.consume();
    const right = parseNot(cursor);
    left = {
      kind: "binop",
      op: "y",
      left,
      right,
      loc: spanLoc(left.loc, right.loc),
    };
  }
  return left;
}

function parseNot(cursor: TokenCursor): Expr {
  if (cursor.peek().kind === TokenKind.NO) {
    const noTok = cursor.consume();
    const arg = parseComparison(cursor);
    return {
      kind: "unary",
      op: "no",
      arg,
      loc: spanLoc(tokLoc(noTok), arg.loc),
    };
  }
  return parseComparison(cursor);
}

function parseComparison(cursor: TokenCursor): Expr {
  const left = parseArithmetic(cursor);
  const opKind = cursor.peek().kind;
  const op = COMPARISON_OPS[opKind];
  if (!op) return left;

  cursor.consume();
  const right = parseArithmetic(cursor);
  const result: Expr = {
    kind: "binop",
    op,
    left,
    right,
    loc: spanLoc(left.loc, right.loc),
  };

  const followKind = cursor.peek().kind;
  if (COMPARISON_OPS[followKind]) {
    const tok = cursor.peek();
    throw new ParseError(
      "Los operadores de comparación no son asociativos (usá paréntesis o el operador 'y').",
      tok.line,
      tok.col,
    );
  }
  return result;
}

function parseArithmetic(cursor: TokenCursor): Expr {
  let left = parseTerm(cursor);
  while (true) {
    const op = ADD_OPS[cursor.peek().kind];
    if (!op) break;
    cursor.consume();
    const right = parseTerm(cursor);
    left = {
      kind: "binop",
      op,
      left,
      right,
      loc: spanLoc(left.loc, right.loc),
    };
  }
  return left;
}

function parseTerm(cursor: TokenCursor): Expr {
  let left = parseUnary(cursor);
  while (true) {
    const op = MUL_OPS[cursor.peek().kind];
    if (!op) break;
    cursor.consume();
    const right = parseUnary(cursor);
    left = {
      kind: "binop",
      op,
      left,
      right,
      loc: spanLoc(left.loc, right.loc),
    };
  }
  return left;
}

function parseUnary(cursor: TokenCursor): Expr {
  const peek = cursor.peek();
  if (peek.kind === TokenKind.MINUS || peek.kind === TokenKind.PLUS) {
    const tok = cursor.consume();
    const arg = parseUnary(cursor);
    return {
      kind: "unary",
      op: tok.kind === TokenKind.MINUS ? "-" : "+",
      arg,
      loc: spanLoc(tokLoc(tok), arg.loc),
    };
  }
  return parseFactor(cursor);
}

function parseFactor(cursor: TokenCursor): Expr {
  const left = parsePostfix(cursor);
  if (cursor.peek().kind === TokenKind.CARET) {
    cursor.consume();
    const right = parseFactor(cursor);
    return {
      kind: "binop",
      op: "^",
      left,
      right,
      loc: spanLoc(left.loc, right.loc),
    };
  }
  return left;
}

function parsePostfix(cursor: TokenCursor): Expr {
  let expr = parseBase(cursor);
  while (true) {
    const peek = cursor.peek();
    if (peek.kind === TokenKind.DOT) {
      cursor.consume();
      const idTok = cursor.peek();
      if (idTok.kind !== TokenKind.IDENT) {
        throw new ParseError(
          `Se esperaba un nombre de campo después de '.', se encontró ${idTok.kind}`,
          idTok.line,
          idTok.col,
        );
      }
      cursor.consume();
      expr = {
        kind: "field",
        target: expr,
        field: idTok.value,
        loc: spanLoc(expr.loc, tokLoc(idTok)),
      };
    } else if (peek.kind === TokenKind.LBRACKET) {
      const lbTok = cursor.consume();
      const key = parseExpression(cursor);
      const rb = cursor.peek();
      if (rb.kind !== TokenKind.RBRACKET) {
        throw new ParseError(
          `Falta cierre ']' (línea ${lbTok.line})`,
          rb.line,
          rb.col,
        );
      }
      cursor.consume();
      expr = {
        kind: "index",
        target: expr,
        key,
        loc: spanLoc(expr.loc, tokLoc(rb)),
      };
    } else if (peek.kind === TokenKind.LPAREN) {
      if (expr.kind !== "var") {
        throw new ParseError(
          "Solo se admiten llamadas a funciones por nombre (no sobre expresiones).",
          peek.line,
          peek.col,
        );
      }
      const lparenTok = cursor.consume();
      const args: Expr[] = [];
      if (cursor.peek().kind !== TokenKind.RPAREN) {
        args.push(parseExpression(cursor));
        while (cursor.match(TokenKind.COMMA)) {
          if (cursor.peek().kind === TokenKind.RPAREN) break;
          args.push(parseExpression(cursor));
        }
      }
      const rp = cursor.peek();
      if (rp.kind !== TokenKind.RPAREN) {
        throw new ParseError(
          `Falta cierre ')' (línea ${lparenTok.line})`,
          rp.line,
          rp.col,
        );
      }
      cursor.consume();
      expr = {
        kind: "fun_call",
        name: expr.name,
        args,
        loc: spanLoc(expr.loc, tokLoc(rp)),
      };
    } else {
      break;
    }
  }
  return expr;
}

function parseBase(cursor: TokenCursor): Expr {
  const tok = cursor.peek();
  switch (tok.kind) {
    case TokenKind.NUMBER: {
      cursor.consume();
      return { kind: "num", value: Number(tok.value), loc: tokLoc(tok) };
    }
    case TokenKind.STRING:
    case TokenKind.MULTILINE_STRING: {
      cursor.consume();
      return { kind: "str", value: tok.value, loc: tokLoc(tok) };
    }
    case TokenKind.VERDADERO: {
      cursor.consume();
      return { kind: "bool", value: true, loc: tokLoc(tok) };
    }
    case TokenKind.FALSO: {
      cursor.consume();
      return { kind: "bool", value: false, loc: tokLoc(tok) };
    }
    case TokenKind.NULO: {
      cursor.consume();
      return { kind: "null", loc: tokLoc(tok) };
    }
    case TokenKind.IDENT: {
      cursor.consume();
      return { kind: "var", name: tok.value, loc: tokLoc(tok) };
    }
    case TokenKind.LPAREN: {
      const lp = cursor.consume();
      const inner = parseExpression(cursor);
      const rp = cursor.peek();
      if (rp.kind !== TokenKind.RPAREN) {
        throw new ParseError(
          `Falta cierre ')' (línea ${lp.line})`,
          rp.line,
          rp.col,
        );
      }
      cursor.consume();
      inner.loc = spanLoc(tokLoc(lp), tokLoc(rp));
      return inner;
    }
    case TokenKind.LBRACKET: {
      const lb = cursor.consume();
      if (cursor.peek().kind === TokenKind.FOR) {
        return parseForComprehension(cursor, lb);
      }
      const items: Expr[] = [];
      if (cursor.peek().kind !== TokenKind.RBRACKET) {
        items.push(parseExpression(cursor));
        while (cursor.match(TokenKind.COMMA)) {
          if (cursor.peek().kind === TokenKind.RBRACKET) break;
          items.push(parseExpression(cursor));
        }
      }
      const rb = cursor.peek();
      if (rb.kind !== TokenKind.RBRACKET) {
        throw new ParseError(
          `Falta cierre ']' (línea ${lb.line})`,
          rb.line,
          rb.col,
        );
      }
      cursor.consume();
      return {
        kind: "array",
        items,
        loc: spanLoc(tokLoc(lb), tokLoc(rb)),
      };
    }
    case TokenKind.LBRACE: {
      const lb = cursor.consume();
      const entries: ObjectEntry[] = [];
      if (cursor.peek().kind !== TokenKind.RBRACE) {
        entries.push(parseObjectEntry(cursor));
        while (cursor.match(TokenKind.COMMA)) {
          if (cursor.peek().kind === TokenKind.RBRACE) break;
          entries.push(parseObjectEntry(cursor));
        }
      }
      const rb = cursor.peek();
      if (rb.kind !== TokenKind.RBRACE) {
        throw new ParseError(
          `Falta cierre '}' (línea ${lb.line})`,
          rb.line,
          rb.col,
        );
      }
      cursor.consume();
      return {
        kind: "object",
        entries,
        loc: spanLoc(tokLoc(lb), tokLoc(rb)),
      };
    }
    case TokenKind.NEWLINE:
    case TokenKind.EOF: {
      throw new ParseError(
        `Se esperaba una expresión, se encontró fin de línea`,
        tok.line,
        tok.col,
      );
    }
    default: {
      throw new ParseError(
        `Se esperaba una expresión, se encontró ${tok.kind}${
          tok.value ? ` ('${tok.value}')` : ""
        }`,
        tok.line,
        tok.col,
      );
    }
  }
}

function parseObjectEntry(cursor: TokenCursor): ObjectEntry {
  const keyTok = cursor.peek();
  let keyName: string;
  if (keyTok.kind === TokenKind.IDENT) {
    keyName = keyTok.value;
    cursor.consume();
  } else if (keyTok.kind === TokenKind.STRING) {
    keyName = keyTok.value;
    cursor.consume();
  } else {
    throw new ParseError(
      `Se esperaba una clave en el objeto, se encontró ${keyTok.kind}`,
      keyTok.line,
      keyTok.col,
    );
  }
  const colon = cursor.peek();
  if (colon.kind !== TokenKind.COLON) {
    throw new ParseError(
      `Se esperaba ':' después de la clave`,
      colon.line,
      colon.col,
    );
  }
  cursor.consume();
  const value = parseExpression(cursor);
  return {
    key: keyName,
    value,
    loc: spanLoc(tokLoc(keyTok), value.loc),
  };
}

function parseForComprehension(
  cursor: TokenCursor,
  lbrack: Token,
): ForComprehension {
  cursor.consumeKind(TokenKind.FOR, "'for'");
  const varTok = cursor.peek();
  if (varTok.kind !== TokenKind.IDENT) {
    throw new ParseError(
      `Se esperaba un nombre de variable después de 'for'`,
      varTok.line,
      varTok.col,
    );
  }
  cursor.consume();
  cursor.consumeKind(TokenKind.IN, "'in'");

  const iterFirst = parseOr(cursor);
  let iterable: Expr | RangeIter;
  if (cursor.peek().kind === TokenKind.RANGE) {
    cursor.consume();
    const toExpr = parseOr(cursor);
    iterable = { kind: "range", from: iterFirst, to: toExpr };
  } else {
    iterable = iterFirst;
  }

  cursor.consumeKind(TokenKind.COLON, "':'");
  const body = parseExpression(cursor);

  const rb = cursor.peek();
  if (rb.kind !== TokenKind.RBRACKET) {
    throw new ParseError(
      `Falta cierre ']' en la comprensión 'for' (línea ${lbrack.line})`,
      rb.line,
      rb.col,
    );
  }
  cursor.consume();

  return {
    kind: "for_comp",
    variable: varTok.value,
    iterable,
    body,
    loc: spanLoc(tokLoc(lbrack), tokLoc(rb)),
  };
}
