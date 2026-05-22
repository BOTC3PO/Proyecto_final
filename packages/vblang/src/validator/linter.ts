import { CONSTANTES_GLOBALES } from "../evaluator/constants.js";
import type {
  Expr,
  Plantilla,
  VariableDecl,
} from "../parser/ast.js";
import { inferExprType, type InferContext } from "./infer.js";
import { TypeEnv } from "./type-env.js";
import {
  isAssignable,
  T,
  typeToString,
  type LintIssue,
  type LintReport,
  type VBType,
} from "./types.js";

export type { LintIssue, LintReport } from "./types.js";

export function lint(plantilla: Plantilla): LintReport {
  const issues: LintIssue[] = [];
  const env = new TypeEnv();
  const variableTypes: Record<string, VBType> = {};

  // Constantes globales pre-cargadas
  for (const k of Object.keys(CONSTANTES_GLOBALES)) {
    env.set(k, T.number);
  }

  // dataset / mapa placeholders
  const dataset = plantilla.bloques.find((b) => b.kind === "dataset");
  if (dataset && dataset.kind === "dataset") {
    env.set("dataset", T.array(T.unknown));
  }
  const mapa = plantilla.bloques.find((b) => b.kind === "mapa");
  if (mapa && mapa.kind === "mapa") {
    env.set(
      "mapa",
      T.array(
        T.object({
          nombre: T.string,
          iso: T.string,
        }),
      ),
    );
  }

  const report = (issue: LintIssue) => issues.push(issue);
  const ctx: InferContext = { report };

  // 1) Variables — primero, sin importar el orden en el source.
  const varsBlock = plantilla.bloques.find((b) => b.kind === "variables");
  const declaraciones: VariableDecl[] =
    varsBlock && varsBlock.kind === "variables"
      ? varsBlock.declaraciones
      : [];

  const seen = new Set<string>();
  for (const decl of declaraciones) {
    if (seen.has(decl.nombre)) {
      issues.push({
        severity: "warning",
        code: "var-duplicada",
        message: `variable duplicada: ${decl.nombre}`,
        line: decl.loc.line,
        col: decl.loc.col,
      });
    }
    seen.add(decl.nombre);

    // random literal range-invalid
    if (
      decl.expr.kind === "fun_call" &&
      decl.expr.name === "random" &&
      decl.expr.args.length === 2
    ) {
      const lo = asLiteralNumber(decl.expr.args[0]);
      const hi = asLiteralNumber(decl.expr.args[1]);
      if (lo !== null && hi !== null && lo > hi) {
        issues.push({
          severity: "error",
          code: "range-invalid",
          message: `random(${lo}, ${hi}): min > max`,
          line: decl.expr.loc.line,
          col: decl.expr.loc.col,
        });
      }
    }

    const t = inferExprType(decl.expr, env, ctx);
    env.set(decl.nombre, t);
    variableTypes[decl.nombre] = t;
  }

  // 2) Restricciones
  for (const b of plantilla.bloques) {
    if (b.kind !== "restricciones") continue;
    for (const cond of b.condiciones) {
      const t = inferExprType(cond, env, ctx);
      if (!isAssignable(t, T.boolean)) {
        issues.push({
          severity: "error",
          code: "type-mismatch",
          message: `la restricción debe ser booleana, infiere ${typeToString(t)}`,
          line: cond.loc.line,
          col: cond.loc.col,
        });
      }
    }
  }

  // 3) Respuesta + check de tipo según tipoInferido
  const respBlock = plantilla.bloques.find((b) => b.kind === "respuesta");
  if (respBlock && respBlock.kind === "respuesta") {
    const respT = inferExprType(respBlock.expr, env, ctx);

    if (plantilla.tipoInferido === "vf" && !isAssignable(respT, T.boolean)) {
      issues.push({
        severity: "error",
        code: "vf-requires-boolean",
        message: `tipo vf requiere respuesta booleana, infiere ${typeToString(respT)}`,
        line: respBlock.loc.line,
        col: respBlock.loc.col,
      });
    }

    if (plantilla.tipoInferido === "mc") {
      const opcExpl = plantilla.bloques.find(
        (b) => b.kind === "opciones_explicitas",
      );
      if (!opcExpl) {
        if (!isAssignable(respT, T.number)) {
          issues.push({
            severity: "error",
            code: "mc-requires-number",
            message: `tipo mc con \`opciones:\` (sin opciones_explicitas) requiere respuesta numérica, infiere ${typeToString(respT)}`,
            line: respBlock.loc.line,
            col: respBlock.loc.col,
          });
        }
      } else if (opcExpl.kind === "opciones_explicitas") {
        // Comprobación estática: si todo es literal, verificar inclusión.
        const items = opcExpl.items;
        if (
          respBlock.expr.kind === "str" &&
          items.every((i) => i.kind === "str")
        ) {
          const optVals = items.map(
            (i) => (i as Extract<Expr, { kind: "str" }>).value,
          );
          if (!optVals.includes(respBlock.expr.value)) {
            issues.push({
              severity: "error",
              code: "mc-opcion-no-incluida",
              message: `la respuesta "${respBlock.expr.value}" no aparece en opciones_explicitas`,
              line: respBlock.loc.line,
              col: respBlock.loc.col,
            });
          }
        }
        if (
          respBlock.expr.kind === "num" &&
          items.every((i) => i.kind === "num")
        ) {
          const optVals = items.map(
            (i) => (i as Extract<Expr, { kind: "num" }>).value,
          );
          if (!optVals.includes(respBlock.expr.value)) {
            issues.push({
              severity: "error",
              code: "mc-opcion-no-incluida",
              message: `la respuesta ${respBlock.expr.value} no aparece en opciones_explicitas`,
              line: respBlock.loc.line,
              col: respBlock.loc.col,
            });
          }
        }
      }
    }
  }

  // 4) Respuestas válidas
  for (const b of plantilla.bloques) {
    if (b.kind !== "respuestas_validas") continue;
    for (const item of b.items) inferExprType(item, env, ctx);
  }

  // 5) Bloques de respuesta especial — inferir aunque no usemos el tipo todavía
  for (const b of plantilla.bloques) {
    if (
      b.kind === "respuesta_iso" ||
      b.kind === "respuesta_nombre" ||
      b.kind === "respuesta_orden" ||
      b.kind === "texto_analizar"
    ) {
      inferExprType(b.expr, env, ctx);
    }
    if (b.kind === "opciones_explicitas") {
      for (const item of b.items) inferExprType(item, env, ctx);
    }
  }

  // 6) Interpolaciones en enunciado y pasos
  for (const b of plantilla.bloques) {
    if (b.kind === "enunciado") {
      for (const p of b.partes) {
        if (p.kind === "interp") inferExprType(p.expr, env, ctx);
      }
    } else if (b.kind === "pasos") {
      for (const paso of b.pasos) {
        for (const p of paso.partes) {
          if (p.kind === "interp") inferExprType(p.expr, env, ctx);
        }
      }
    }
  }

  // 7) Patrones extra
  detectPatterns(plantilla, declaraciones, issues);

  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");
  return { issues, errors, warnings, variableTypes };
}

/* ---------- Helpers ---------- */

/**
 * Resuelve un Expr a un número literal si es `NumLit` o `UnaryOp(±, NumLit)`.
 * Devuelve null si no se puede determinar estáticamente.
 */
function asLiteralNumber(e: Expr): number | null {
  if (e.kind === "num") return e.value;
  if (e.kind === "unary" && e.arg.kind === "num") {
    if (e.op === "-") return -e.arg.value;
    if (e.op === "+") return e.arg.value;
  }
  return null;
}

/* ---------- Walkers ---------- */

function walkExpr(expr: Expr, visit: (e: Expr) => void): void {
  visit(expr);
  switch (expr.kind) {
    case "binop":
      walkExpr(expr.left, visit);
      walkExpr(expr.right, visit);
      break;
    case "unary":
      walkExpr(expr.arg, visit);
      break;
    case "fun_call":
      for (const a of expr.args) walkExpr(a, visit);
      break;
    case "field":
      walkExpr(expr.target, visit);
      break;
    case "index":
      walkExpr(expr.target, visit);
      walkExpr(expr.key, visit);
      break;
    case "array":
      for (const i of expr.items) walkExpr(i, visit);
      break;
    case "object":
      for (const e of expr.entries) walkExpr(e.value, visit);
      break;
    case "for_comp":
      if (expr.iterable.kind === "range") {
        walkExpr(expr.iterable.from, visit);
        walkExpr(expr.iterable.to, visit);
      } else {
        walkExpr(expr.iterable, visit);
      }
      walkExpr(expr.body, visit);
      break;
    // leaves: num/str/bool/null/var
  }
}

function* allBlockExpressions(plantilla: Plantilla): Iterable<Expr> {
  for (const b of plantilla.bloques) {
    switch (b.kind) {
      case "variables":
        for (const d of b.declaraciones) yield d.expr;
        break;
      case "restricciones":
        for (const c of b.condiciones) yield c;
        break;
      case "respuesta":
        yield b.expr;
        break;
      case "respuestas_validas":
        for (const i of b.items) yield i;
        break;
      case "enunciado":
        for (const p of b.partes) if (p.kind === "interp") yield p.expr;
        break;
      case "pasos":
        for (const paso of b.pasos) {
          for (const p of paso.partes) if (p.kind === "interp") yield p.expr;
        }
        break;
      case "respuesta_iso":
      case "respuesta_nombre":
      case "respuesta_orden":
      case "texto_analizar":
        yield b.expr;
        break;
      case "opciones_explicitas":
        for (const i of b.items) yield i;
        break;
      case "metadata":
      case "visual":
        for (const c of b.campos) yield c.value;
        break;
    }
  }
}

/* ---------- Patrones ---------- */

function detectPatterns(
  plantilla: Plantilla,
  declaraciones: VariableDecl[],
  issues: LintIssue[],
): void {
  // ----- var-unused
  const referenced = new Set<string>();
  for (const e of allBlockExpressions(plantilla)) {
    walkExpr(e, (node) => {
      if (node.kind === "var") referenced.add(node.name);
    });
  }
  for (const decl of declaraciones) {
    if (!referenced.has(decl.nombre)) {
      issues.push({
        severity: "warning",
        code: "var-unused",
        message: `variable declarada pero no usada: ${decl.nombre}`,
        line: decl.loc.line,
        col: decl.loc.col,
      });
    }
  }

  // ----- random-inline en enunciado / pasos
  const inlineCheckBlocks = plantilla.bloques.filter(
    (b) => b.kind === "enunciado" || b.kind === "pasos",
  );
  for (const b of inlineCheckBlocks) {
    if (b.kind === "enunciado") {
      for (const p of b.partes) {
        if (p.kind !== "interp") continue;
        walkExpr(p.expr, (e) => {
          if (e.kind === "fun_call" && e.name === "random") {
            issues.push({
              severity: "warning",
              code: "random-inline",
              message:
                "random() en interpolación genera valores distintos en cada uso. Declaralo como variable.",
              line: e.loc.line,
              col: e.loc.col,
            });
          }
        });
      }
    } else if (b.kind === "pasos") {
      for (const paso of b.pasos) {
        for (const p of paso.partes) {
          if (p.kind !== "interp") continue;
          walkExpr(p.expr, (e) => {
            if (e.kind === "fun_call" && e.name === "random") {
              issues.push({
                severity: "warning",
                code: "random-inline",
                message:
                  "random() en interpolación genera valores distintos en cada uso. Declaralo como variable.",
                line: e.loc.line,
                col: e.loc.col,
              });
            }
          });
        }
      }
    }
  }

  // ----- division-zero-risk y sqrt-negative-risk
  const declByName = new Map(declaraciones.map((d) => [d.nombre, d]));
  const isRandomDecl = (name: string) => {
    const d = declByName.get(name);
    if (!d) return null;
    if (d.expr.kind !== "fun_call" || d.expr.name !== "random") return null;
    const args = d.expr.args;
    if (args.length !== 2) return null;
    const min = asLiteralNumber(args[0]);
    const max = asLiteralNumber(args[1]);
    if (min === null || max === null) return null;
    return { min, max };
  };

  for (const e of allBlockExpressions(plantilla)) {
    walkExpr(e, (node) => {
      // div / mod por cero
      if (
        node.kind === "binop" &&
        (node.op === "/" || node.op === "%") &&
        node.right.kind === "var"
      ) {
        const range = isRandomDecl(node.right.name);
        if (range && range.min <= 0 && range.max >= 0) {
          issues.push({
            severity: "warning",
            code: "division-zero-risk",
            message: `denominador '${node.right.name}' puede ser cero según rango [${range.min}, ${range.max}]`,
            line: node.loc.line,
            col: node.loc.col,
          });
        }
      }
      // sqrt(arg) negativo
      if (
        node.kind === "fun_call" &&
        node.name === "sqrt" &&
        node.args.length === 1 &&
        node.args[0].kind === "var"
      ) {
        const range = isRandomDecl(node.args[0].name);
        if (range && range.min < 0) {
          issues.push({
            severity: "warning",
            code: "sqrt-negative-risk",
            message: `argumento de sqrt('${node.args[0].name}') puede ser negativo según rango [${range.min}, ${range.max}]`,
            line: node.loc.line,
            col: node.loc.col,
          });
        }
      }
    });
  }

  // ----- range-contradictorio en restricciones
  detectRangeContradiction(plantilla, issues);
}

function detectRangeContradiction(
  plantilla: Plantilla,
  issues: LintIssue[],
): void {
  const restr = plantilla.bloques.find((b) => b.kind === "restricciones");
  if (!restr || restr.kind !== "restricciones") return;

  type Op = ">" | ">=" | "<" | "<=" | "==";
  interface Bound {
    op: Op;
    value: number;
    loc: { line: number; col: number };
  }
  const bounds = new Map<string, Bound[]>();

  for (const cond of restr.condiciones) {
    if (cond.kind !== "binop") continue;
    const op = cond.op;
    if (op !== ">" && op !== ">=" && op !== "<" && op !== "<=" && op !== "==") {
      continue;
    }
    let varName: string | undefined;
    let value: number | undefined;
    let effOp: Op = op;
    if (cond.left.kind === "var" && cond.right.kind === "num") {
      varName = cond.left.name;
      value = cond.right.value;
    } else if (cond.left.kind === "num" && cond.right.kind === "var") {
      varName = cond.right.name;
      value = cond.left.value;
      const inv: Record<Op, Op> = {
        ">": "<",
        ">=": "<=",
        "<": ">",
        "<=": ">=",
        "==": "==",
      };
      effOp = inv[op];
    }
    if (varName === undefined || value === undefined) continue;
    if (!bounds.has(varName)) bounds.set(varName, []);
    bounds.get(varName)!.push({ op: effOp, value, loc: cond.loc });
  }

  for (const [name, bs] of bounds) {
    let lower = -Infinity;
    let lowerStrict = false;
    let upper = Infinity;
    let upperStrict = false;
    let eqVal: number | undefined;
    let lastLoc: { line: number; col: number } = bs[0].loc;

    for (const b of bs) {
      lastLoc = b.loc;
      if (b.op === ">") {
        if (b.value > lower || (b.value === lower && !lowerStrict)) {
          lower = b.value;
          lowerStrict = true;
        }
      } else if (b.op === ">=") {
        if (b.value > lower) {
          lower = b.value;
          lowerStrict = false;
        }
      } else if (b.op === "<") {
        if (b.value < upper || (b.value === upper && !upperStrict)) {
          upper = b.value;
          upperStrict = true;
        }
      } else if (b.op === "<=") {
        if (b.value < upper) {
          upper = b.value;
          upperStrict = false;
        }
      } else if (b.op === "==") {
        eqVal = b.value;
      }
    }

    let contradiction = false;
    if (lower > upper) contradiction = true;
    else if (lower === upper && (lowerStrict || upperStrict)) {
      contradiction = true;
    } else if (eqVal !== undefined) {
      if (lowerStrict ? eqVal <= lower : eqVal < lower) contradiction = true;
      if (upperStrict ? eqVal >= upper : eqVal > upper) contradiction = true;
    }

    if (contradiction) {
      issues.push({
        severity: "warning",
        code: "range-contradictorio",
        message: `restricciones contradictorias para '${name}'`,
        line: lastLoc.line,
        col: lastLoc.col,
      });
    }
  }
}
