import { lex } from "../../src/lexer/lexer.js";
import { TokenKind } from "../../src/lexer/tokens.js";
import type { Expr } from "../../src/parser/ast.js";
import { TokenCursor } from "../../src/parser/cursor.js";
import { parseExpression } from "../../src/parser/expression.js";
import { createBuiltins } from "../../src/evaluator/builtins.js";
import { CONSTANTES_GLOBALES } from "../../src/evaluator/constants.js";
import {
  evaluateExpr,
  type EvalContext,
} from "../../src/evaluator/evaluator.js";
import { createIsolatedMath } from "../../src/evaluator/math-setup.js";
import { Scope } from "../../src/evaluator/scope.js";
import { createPrng } from "../../src/runtime/prng.js";

export function parseExprOnly(src: string): Expr {
  const tokens = lex(src);
  const cursor = new TokenCursor(tokens);
  while (cursor.peek().kind === TokenKind.NEWLINE) cursor.consume();
  return parseExpression(cursor);
}

export function makeCtx(seed = "test"): EvalContext {
  const prng = createPrng(seed);
  const math = createIsolatedMath();
  const builtins = createBuiltins(prng, math);
  return { prng, math, builtins };
}

export function evalSrc(
  src: string,
  vars: Record<string, unknown> = {},
  ctx?: EvalContext,
): unknown {
  const ctxFinal = ctx ?? makeCtx();
  const scope = new Scope({ ...CONSTANTES_GLOBALES, ...vars });
  return evaluateExpr(parseExprOnly(src), scope, ctxFinal);
}
