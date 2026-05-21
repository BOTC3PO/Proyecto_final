import { levenshtein } from "../lexer/suggestions.js";
import type {
  BinOp,
  Expr,
  ForComprehension,
  FunCall,
  Loc,
} from "../parser/ast.js";
import type { PRNG } from "../runtime/prng.js";
import type { BuiltinFn } from "./builtins.js";
import { EvalError } from "./errors.js";
import type { IsolatedMath } from "./math-setup.js";
import { Scope } from "./scope.js";

export interface EvalContext {
  prng: PRNG;
  math: IsolatedMath;
  builtins: Record<string, BuiltinFn>;
}

function locOf(expr: Expr): Loc {
  return expr.loc;
}

export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => deepEqual(v, b[i]));
  }
  if (typeof a === "object" && typeof b === "object") {
    const ka = Object.keys(a as object);
    const kb = Object.keys(b as object);
    if (ka.length !== kb.length) return false;
    return ka.every((k) =>
      deepEqual(
        (a as Record<string, unknown>)[k],
        (b as Record<string, unknown>)[k],
      ),
    );
  }
  return false;
}

export function evaluateExpr(
  expr: Expr,
  scope: Scope,
  ctx: EvalContext,
): unknown {
  switch (expr.kind) {
    case "num":
      return expr.value;
    case "str":
      return expr.value;
    case "bool":
      return expr.value;
    case "null":
      return null;
    case "var": {
      if (!scope.has(expr.name)) {
        throw new EvalError(
          `variable indefinida: ${expr.name}`,
          locOf(expr),
        );
      }
      return scope.get(expr.name);
    }
    case "array":
      return expr.items.map((i) => evaluateExpr(i, scope, ctx));
    case "object": {
      const obj: Record<string, unknown> = {};
      for (const entry of expr.entries) {
        obj[entry.key] = evaluateExpr(entry.value, scope, ctx);
      }
      return obj;
    }
    case "field": {
      const target = evaluateExpr(expr.target, scope, ctx);
      if (target === null || target === undefined) {
        throw new EvalError(
          `acceso a \`.${expr.field}\` sobre null/undefined`,
          locOf(expr),
        );
      }
      if (typeof target !== "object") {
        throw new EvalError(
          `no se puede acceder a \`.${expr.field}\` sobre ${typeof target}`,
          locOf(expr),
        );
      }
      // Soporte para .length en arrays
      if (Array.isArray(target) && expr.field === "length") {
        return target.length;
      }
      const value = (target as Record<string, unknown>)[expr.field];
      return value;
    }
    case "index": {
      const target = evaluateExpr(expr.target, scope, ctx);
      const key = evaluateExpr(expr.key, scope, ctx);
      if (Array.isArray(target)) {
        if (typeof key !== "number" || !Number.isInteger(key)) {
          throw new EvalError(
            `índice de array debe ser entero, recibió ${typeof key}`,
            locOf(expr),
          );
        }
        if (key < 0 || key >= target.length) {
          throw new EvalError(
            `índice ${key} fuera de rango (tamaño ${target.length})`,
            locOf(expr),
          );
        }
        return target[key];
      }
      if (target !== null && typeof target === "object") {
        return (target as Record<string, unknown>)[String(key)];
      }
      throw new EvalError(
        `no se puede indexar ${typeof target}`,
        locOf(expr),
      );
    }
    case "unary": {
      const arg = evaluateExpr(expr.arg, scope, ctx);
      if (expr.op === "no") {
        if (typeof arg !== "boolean") {
          throw new EvalError(
            `'no' espera boolean, recibió ${typeof arg}`,
            locOf(expr),
          );
        }
        return !arg;
      }
      if (typeof arg !== "number") {
        throw new EvalError(
          `operador '${expr.op}' espera número, recibió ${typeof arg}`,
          locOf(expr),
        );
      }
      return expr.op === "-" ? -arg : +arg;
    }
    case "binop":
      return evalBinOp(expr, scope, ctx);
    case "fun_call":
      return evalFunCall(expr, scope, ctx);
    case "for_comp":
      return evalForComp(expr, scope, ctx);
  }
}

function evalBinOp(
  expr: BinOp,
  scope: Scope,
  ctx: EvalContext,
): unknown {
  // Decisión: en v1 no se hace short-circuit en y/o.
  const l = evaluateExpr(expr.left, scope, ctx);
  const r = evaluateExpr(expr.right, scope, ctx);

  switch (expr.op) {
    case "+":
      if (typeof l === "number" && typeof r === "number") return l + r;
      if (typeof l === "string" || typeof r === "string") {
        return stringify(l) + stringify(r);
      }
      throw new EvalError(
        `operador + no soportado entre ${typeof l} y ${typeof r}`,
        locOf(expr),
      );
    case "-":
    case "*":
    case "/":
    case "%":
    case "^": {
      if (typeof l !== "number" || typeof r !== "number") {
        throw new EvalError(
          `operador ${expr.op} requiere números`,
          locOf(expr),
        );
      }
      if (expr.op === "-") return l - r;
      if (expr.op === "*") return l * r;
      if (expr.op === "/") {
        if (r === 0) {
          throw new EvalError(`división por cero`, locOf(expr));
        }
        return l / r;
      }
      if (expr.op === "%") {
        if (r === 0) {
          throw new EvalError(`módulo por cero`, locOf(expr));
        }
        return l % r;
      }
      // ^
      return Math.pow(l, r);
    }
    case "==":
      return deepEqual(l, r);
    case "!=":
      return !deepEqual(l, r);
    case "<":
    case ">":
    case "<=":
    case ">=": {
      if (typeof l === "number" && typeof r === "number") {
        if (expr.op === "<") return l < r;
        if (expr.op === ">") return l > r;
        if (expr.op === "<=") return l <= r;
        return l >= r;
      }
      if (typeof l === "string" && typeof r === "string") {
        const cmp = l.localeCompare(r);
        if (expr.op === "<") return cmp < 0;
        if (expr.op === ">") return cmp > 0;
        if (expr.op === "<=") return cmp <= 0;
        return cmp >= 0;
      }
      throw new EvalError(
        `comparación ${expr.op} no soportada entre ${typeof l} y ${typeof r}`,
        locOf(expr),
      );
    }
    case "y":
      if (typeof l !== "boolean" || typeof r !== "boolean") {
        throw new EvalError(
          `'y' requiere operandos boolean, recibió ${typeof l} y ${typeof r}`,
          locOf(expr),
        );
      }
      return l && r;
    case "o":
      if (typeof l !== "boolean" || typeof r !== "boolean") {
        throw new EvalError(
          `'o' requiere operandos boolean, recibió ${typeof l} y ${typeof r}`,
          locOf(expr),
        );
      }
      return l || r;
  }
}

function stringify(v: unknown): string {
  if (v === null || v === undefined) return "";
  if (typeof v === "boolean") return v ? "verdadero" : "falso";
  return String(v);
}

function evalFunCall(
  expr: FunCall,
  scope: Scope,
  ctx: EvalContext,
): unknown {
  // Caso especial: filtrar — segundo argumento es lazy.
  if (expr.name === "filtrar") {
    if (expr.args.length !== 2) {
      throw new EvalError(
        `filtrar requiere 2 argumentos (array, predicado)`,
        locOf(expr),
      );
    }
    const arrayVal = evaluateExpr(expr.args[0], scope, ctx);
    if (!Array.isArray(arrayVal)) {
      throw new EvalError(
        `filtrar: primer argumento debe ser array`,
        locOf(expr),
      );
    }
    const predExpr = expr.args[1];
    return arrayVal.filter((item) => {
      const childScope = scope.extend({ item });
      return Boolean(evaluateExpr(predExpr, childScope, ctx));
    });
  }

  const args = expr.args.map((a) => evaluateExpr(a, scope, ctx));

  const builtin = ctx.builtins[expr.name];
  if (builtin) {
    try {
      return builtin(...args);
    } catch (e) {
      if (e instanceof EvalError) {
        if (e.line === undefined) {
          e.line = expr.loc.line;
          e.col = expr.loc.col;
        }
        throw e;
      }
      throw new EvalError(
        `${expr.name}: ${(e as Error).message}`,
        locOf(expr),
      );
    }
  }

  // Fallback a math.js
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mathFn = (ctx.math as any)[expr.name];
  if (typeof mathFn === "function") {
    try {
      const result = mathFn(...args);
      if (
        result &&
        typeof result === "object" &&
        "toNumber" in (result as object) &&
        typeof (result as { toNumber: () => number }).toNumber === "function"
      ) {
        return (result as { toNumber: () => number }).toNumber();
      }
      return result;
    } catch (e) {
      throw new EvalError(
        `${expr.name}: ${(e as Error).message}`,
        locOf(expr),
      );
    }
  }

  const candidates = [
    ...Object.keys(ctx.builtins),
    "sqrt",
    "abs",
    "log",
    "ln",
    "log10",
    "exp",
    "sin",
    "cos",
    "tan",
    "min",
    "max",
    "pow",
    "floor",
    "ceil",
  ];
  const suggestion = suggestFromList(expr.name, candidates);
  throw new EvalError(
    suggestion
      ? `función desconocida: ${expr.name}. ¿Quisiste decir ${suggestion}?`
      : `función desconocida: ${expr.name}`,
    locOf(expr),
  );
}

function suggestFromList(input: string, options: string[]): string | null {
  let best: string | null = null;
  let bestDist = Infinity;
  for (const opt of options) {
    const d = levenshtein(input, opt);
    if (d < bestDist) {
      bestDist = d;
      best = opt;
    }
  }
  return bestDist <= 2 ? best : null;
}

function evalForComp(
  expr: ForComprehension,
  scope: Scope,
  ctx: EvalContext,
): unknown {
  let items: unknown[];
  if (expr.iterable.kind === "range") {
    const from = evaluateExpr(expr.iterable.from, scope, ctx);
    const to = evaluateExpr(expr.iterable.to, scope, ctx);
    if (typeof from !== "number" || typeof to !== "number") {
      throw new EvalError(`rango requiere números`, locOf(expr));
    }
    if (!Number.isInteger(from) || !Number.isInteger(to)) {
      throw new EvalError(`rango requiere enteros`, locOf(expr));
    }
    items = [];
    if (from <= to) {
      for (let i = from; i <= to; i++) items.push(i);
    } else {
      for (let i = from; i >= to; i--) items.push(i);
    }
  } else {
    const val = evaluateExpr(expr.iterable, scope, ctx);
    if (!Array.isArray(val)) {
      throw new EvalError(`iterable debe ser array`, locOf(expr));
    }
    items = val;
  }
  return items.map((item) => {
    const childScope = scope.extend({ [expr.variable]: item });
    return evaluateExpr(expr.body, childScope, ctx);
  });
}
