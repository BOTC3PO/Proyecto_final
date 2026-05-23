import type { BinOp, Expr, ForComprehension, FunCall } from "../parser/ast.js";
import { suggestFromList } from "../util/suggest.js";
import {
  allSignatureNames,
  lookupSignature,
} from "./builtin-signatures.js";
import type { TypeEnv } from "./type-env.js";
import {
  isAssignable,
  simplifyUnion,
  T,
  typeToString,
  type LintIssue,
  type VBType,
} from "./types.js";

export interface InferContext {
  report: (issue: LintIssue) => void;
}

export function inferExprType(
  expr: Expr,
  env: TypeEnv,
  ctx: InferContext,
): VBType {
  switch (expr.kind) {
    case "num":
      return T.number;
    case "str":
      return T.string;
    case "bool":
      return T.boolean;
    case "null":
      return T.null;
    case "var": {
      const t = env.get(expr.name);
      if (t === undefined) {
        const sugg = suggestFromList(expr.name, env.names());
        ctx.report({
          severity: "error",
          code: "var-undef",
          message: sugg
            ? `variable indefinida: ${expr.name}. ¿Quisiste decir ${sugg}?`
            : `variable indefinida: ${expr.name}`,
          line: expr.loc.line,
          col: expr.loc.col,
          suggestion: sugg ?? undefined,
        });
        return T.unknown;
      }
      return t;
    }
    case "array": {
      if (expr.items.length === 0) return T.array(T.unknown);
      const elements = expr.items.map((i) => inferExprType(i, env, ctx));
      return T.array(simplifyUnion(elements));
    }
    case "object": {
      const fields: Record<string, VBType> = {};
      for (const entry of expr.entries) {
        fields[entry.key] = inferExprType(entry.value, env, ctx);
      }
      return T.object(fields);
    }
    case "field": {
      const targetT = inferExprType(expr.target, env, ctx);
      if (targetT.kind === "unknown") return T.unknown;
      if (targetT.kind === "array" && expr.field === "length") return T.number;
      if (targetT.kind === "object") {
        if (expr.field in targetT.fields) return targetT.fields[expr.field];
        // Objeto vacío {}: no warning — la estructura es desconocida.
        if (Object.keys(targetT.fields).length === 0) return T.unknown;
        ctx.report({
          severity: "warning",
          code: "field-undef",
          message: `campo '${expr.field}' no existe en el objeto`,
          line: expr.loc.line,
          col: expr.loc.col,
        });
        return T.unknown;
      }
      ctx.report({
        severity: "error",
        code: "type-mismatch",
        message: `no se puede acceder a campo '${expr.field}' sobre ${typeToString(targetT)}`,
        line: expr.loc.line,
        col: expr.loc.col,
      });
      return T.unknown;
    }
    case "index": {
      const targetT = inferExprType(expr.target, env, ctx);
      const keyT = inferExprType(expr.key, env, ctx);
      if (targetT.kind === "unknown") return T.unknown;
      if (targetT.kind === "array") {
        if (!isAssignable(keyT, T.number)) {
          ctx.report({
            severity: "error",
            code: "type-mismatch",
            message: `índice debe ser number, recibió ${typeToString(keyT)}`,
            line: expr.loc.line,
            col: expr.loc.col,
          });
        }
        return targetT.element;
      }
      if (targetT.kind === "object") {
        return T.unknown;
      }
      ctx.report({
        severity: "error",
        code: "type-mismatch",
        message: `no se puede indexar ${typeToString(targetT)}`,
        line: expr.loc.line,
        col: expr.loc.col,
      });
      return T.unknown;
    }
    case "unary": {
      const argT = inferExprType(expr.arg, env, ctx);
      if (expr.op === "no") {
        if (!isAssignable(argT, T.boolean)) {
          ctx.report({
            severity: "error",
            code: "type-mismatch",
            message: `'no' espera boolean, recibió ${typeToString(argT)}`,
            line: expr.loc.line,
            col: expr.loc.col,
          });
          return T.never;
        }
        return T.boolean;
      }
      if (!isAssignable(argT, T.number)) {
        ctx.report({
          severity: "error",
          code: "type-mismatch",
          message: `'${expr.op}' espera number, recibió ${typeToString(argT)}`,
          line: expr.loc.line,
          col: expr.loc.col,
        });
        return T.never;
      }
      return T.number;
    }
    case "binop":
      return inferBinOp(expr, env, ctx);
    case "fun_call":
      return inferFunCall(expr, env, ctx);
    case "for_comp":
      return inferForComp(expr, env, ctx);
  }
}

function inferBinOp(
  expr: BinOp,
  env: TypeEnv,
  ctx: InferContext,
): VBType {
  const lT = inferExprType(expr.left, env, ctx);
  const rT = inferExprType(expr.right, env, ctx);

  switch (expr.op) {
    case "+":
      if (isAssignable(lT, T.number) && isAssignable(rT, T.number)) {
        return T.number;
      }
      if (isAssignable(lT, T.string) || isAssignable(rT, T.string)) {
        return T.string;
      }
      ctx.report({
        severity: "error",
        code: "type-mismatch",
        message: `'+' no soporta ${typeToString(lT)} y ${typeToString(rT)}`,
        line: expr.loc.line,
        col: expr.loc.col,
      });
      return T.never;
    case "-":
    case "*":
    case "/":
    case "%":
    case "^": {
      if (!isAssignable(lT, T.number) || !isAssignable(rT, T.number)) {
        ctx.report({
          severity: "error",
          code: "type-mismatch",
          message: `'${expr.op}' requiere number, recibió ${typeToString(lT)} y ${typeToString(rT)}`,
          line: expr.loc.line,
          col: expr.loc.col,
        });
        return T.never;
      }
      return T.number;
    }
    case "==":
    case "!=":
      return T.boolean;
    case "<":
    case ">":
    case "<=":
    case ">=": {
      if (isAssignable(lT, T.number) && isAssignable(rT, T.number)) {
        return T.boolean;
      }
      if (isAssignable(lT, T.string) && isAssignable(rT, T.string)) {
        return T.boolean;
      }
      ctx.report({
        severity: "error",
        code: "type-mismatch",
        message: `'${expr.op}' requiere ambos number o ambos string, recibió ${typeToString(lT)} y ${typeToString(rT)}`,
        line: expr.loc.line,
        col: expr.loc.col,
      });
      return T.boolean;
    }
    case "y":
    case "o": {
      if (!isAssignable(lT, T.boolean) || !isAssignable(rT, T.boolean)) {
        ctx.report({
          severity: "error",
          code: "type-mismatch",
          message: `'${expr.op}' requiere boolean, recibió ${typeToString(lT)} y ${typeToString(rT)}`,
          line: expr.loc.line,
          col: expr.loc.col,
        });
        return T.never;
      }
      return T.boolean;
    }
  }
}

function inferFunCall(
  expr: FunCall,
  env: TypeEnv,
  ctx: InferContext,
): VBType {
  // Caso especial: filtrar (predicado lazy con `item`)
  if (expr.name === "filtrar") {
    if (expr.args.length !== 2) {
      ctx.report({
        severity: "error",
        code: "arity",
        message: `filtrar requiere 2 argumentos, recibió ${expr.args.length}`,
        line: expr.loc.line,
        col: expr.loc.col,
      });
      return T.array(T.unknown);
    }
    const arrT = inferExprType(expr.args[0], env, ctx);
    let elemT: VBType = T.unknown;
    if (arrT.kind === "array") {
      elemT = arrT.element;
    } else if (arrT.kind !== "unknown") {
      ctx.report({
        severity: "error",
        code: "type-mismatch",
        message: `filtrar: primer argumento debe ser array, recibió ${typeToString(arrT)}`,
        line: expr.loc.line,
        col: expr.loc.col,
      });
    }
    const predEnv = env.extend({ item: elemT });
    const predT = inferExprType(expr.args[1], predEnv, ctx);
    if (!isAssignable(predT, T.boolean)) {
      ctx.report({
        severity: "error",
        code: "type-mismatch",
        message: `filtrar: el predicado debe ser boolean, infiere ${typeToString(predT)}`,
        line: expr.args[1].loc.line,
        col: expr.args[1].loc.col,
      });
    }
    return T.array(elemT);
  }

  const sig = lookupSignature(expr.name);
  if (!sig) {
    const sugg = suggestFromList(expr.name, allSignatureNames());
    ctx.report({
      severity: "error",
      code: "fun-undef",
      message: sugg
        ? `función desconocida: ${expr.name}. ¿Quisiste decir ${sugg}?`
        : `función desconocida: ${expr.name}`,
      line: expr.loc.line,
      col: expr.loc.col,
      suggestion: sugg ?? undefined,
    });
    return T.unknown;
  }

  const argTypes = expr.args.map((a) => inferExprType(a, env, ctx));
  const requiredMin = sig.params.length;
  const optional = sig.optionalParams?.length ?? 0;
  const maxAccepted = sig.variadic ? Infinity : requiredMin + optional;

  if (argTypes.length < requiredMin || argTypes.length > maxAccepted) {
    ctx.report({
      severity: "error",
      code: "arity",
      message: `${expr.name}: requiere ${requiredMin}${
        sig.variadic ? "+" : optional > 0 ? `-${requiredMin + optional}` : ""
      } argumentos, recibió ${argTypes.length}`,
      line: expr.loc.line,
      col: expr.loc.col,
    });
  }

  const allParams = [...sig.params, ...(sig.optionalParams ?? [])];
  for (let i = 0; i < argTypes.length; i++) {
    const paramType = sig.variadic
      ? allParams[Math.min(i, allParams.length - 1)]
      : allParams[i];
    if (!paramType) continue;
    if (!isAssignable(argTypes[i], paramType)) {
      ctx.report({
        severity: "error",
        code: "type-mismatch",
        message: `${expr.name}: argumento ${i + 1} debe ser ${typeToString(paramType)}, recibió ${typeToString(argTypes[i])}`,
        line: expr.args[i].loc.line,
        col: expr.args[i].loc.col,
      });
    }
  }

  if (sig.returnsFn) return sig.returnsFn(argTypes);
  return sig.returns;
}

function inferForComp(
  expr: ForComprehension,
  env: TypeEnv,
  ctx: InferContext,
): VBType {
  let elemT: VBType = T.unknown;

  if (expr.iterable.kind === "range") {
    const fromT = inferExprType(expr.iterable.from, env, ctx);
    const toT = inferExprType(expr.iterable.to, env, ctx);
    if (!isAssignable(fromT, T.number) || !isAssignable(toT, T.number)) {
      ctx.report({
        severity: "error",
        code: "type-mismatch",
        message: `rango requiere number en from y to, recibió ${typeToString(fromT)} y ${typeToString(toT)}`,
        line: expr.loc.line,
        col: expr.loc.col,
      });
    }
    elemT = T.number;
  } else {
    const iterT = inferExprType(expr.iterable, env, ctx);
    if (iterT.kind === "array") {
      elemT = iterT.element;
    } else if (iterT.kind !== "unknown") {
      ctx.report({
        severity: "error",
        code: "type-mismatch",
        message: `for ... in: requiere array, recibió ${typeToString(iterT)}`,
        line: expr.loc.line,
        col: expr.loc.col,
      });
    }
  }

  const bodyEnv = env.extend({ [expr.variable]: elemT });
  const bodyT = inferExprType(expr.body, bodyEnv, ctx);
  return T.array(bodyT);
}
