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

  // 8) Chequeos por tipo especial (Sprint 9A)
  lintTiposEspeciales(plantilla, issues);

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

/* ---------- Tipos especiales (Sprint 9A) ---------- */

function lintTiposEspeciales(
  plantilla: Plantilla,
  issues: LintIssue[],
): void {
  const tipo = plantilla.tipoInferido;
  const ploc = { line: plantilla.loc.line, col: plantilla.loc.col };
  const has = (k: string) => plantilla.bloques.some((b) => b.kind === k);
  const find = (k: string) => plantilla.bloques.find((b) => b.kind === k);

  if (tipo === "ordenar") {
    if (!has("opciones_explicitas")) {
      issues.push({
        severity: "error",
        code: "ordenar-requires-opciones-explicitas",
        message:
          "tipo `ordenar` requiere `opciones_explicitas:` con los items a presentar",
        line: ploc.line,
        col: ploc.col,
      });
    }
    if (!has("respuesta_orden")) {
      issues.push({
        severity: "error",
        code: "ordenar-requires-respuesta-orden",
        message: "tipo `ordenar` requiere `respuesta_orden:` con el orden correcto",
        line: ploc.line,
        col: ploc.col,
      });
    }

    // Same-set check si ambos son literales array-de-string.
    const opc = find("opciones_explicitas");
    const ord = find("respuesta_orden");
    if (
      opc &&
      opc.kind === "opciones_explicitas" &&
      ord &&
      ord.kind === "respuesta_orden"
    ) {
      const opcItems = literalStringArrayFromOpciones(opc.items);
      const ordItems = literalStringArrayFromExpr(ord.expr);
      if (opcItems && ordItems) {
        if (!sameSetStr(opcItems, ordItems)) {
          issues.push({
            severity: "warning",
            code: "ordenar-sets-diferentes",
            message:
              "los conjuntos de `opciones_explicitas` y `respuesta_orden` parecen diferentes",
            line: ord.loc.line,
            col: ord.loc.col,
          });
        }
      }
    }
  }

  if (tipo === "marcar_mapa") {
    if (!has("mapa")) {
      issues.push({
        severity: "error",
        code: "marcar-mapa-requires-mapa",
        message: "tipo `marcar_mapa` requiere `mapa:` con el identificador del mapa",
        line: ploc.line,
        col: ploc.col,
      });
    }
    if (!has("respuesta_iso")) {
      issues.push({
        severity: "error",
        code: "marcar-mapa-requires-respuesta-iso",
        message: "tipo `marcar_mapa` requiere `respuesta_iso:` con el código ISO correcto",
        line: ploc.line,
        col: ploc.col,
      });
    }
  }

  if (tipo === "analisis_sintactico") {
    if (!has("texto_analizar")) {
      issues.push({
        severity: "error",
        code: "analisis-sintactico-requires-texto-analizar",
        message: "tipo `analisis_sintactico` requiere `texto_analizar:`",
        line: ploc.line,
        col: ploc.col,
      });
    }
    if (!has("etiquetas_pedidas")) {
      issues.push({
        severity: "error",
        code: "analisis-sintactico-requires-etiquetas-pedidas",
        message: "tipo `analisis_sintactico` requiere `etiquetas_pedidas:`",
        line: ploc.line,
        col: ploc.col,
      });
    }

    // Si texto_analizar es literal string y etiquetas_pedidas son literales:
    // verificar que cada palabra aparece en el texto.
    const txt = find("texto_analizar");
    const ets = find("etiquetas_pedidas");
    if (
      txt &&
      txt.kind === "texto_analizar" &&
      txt.expr.kind === "str" &&
      ets &&
      ets.kind === "etiquetas_pedidas"
    ) {
      const tokens = tokenizarPalabras(txt.expr.value);
      for (const et of ets.etiquetas) {
        const palabraCampo = et.campos.find((c) => c.key === "palabra");
        if (palabraCampo && palabraCampo.value.kind === "str") {
          if (!tokens.has(palabraCampo.value.value)) {
            issues.push({
              severity: "warning",
              code: "palabra-no-en-texto",
              message: `la palabra "${palabraCampo.value.value}" no aparece en \`texto_analizar\``,
              line: palabraCampo.value.loc.line,
              col: palabraCampo.value.loc.col,
            });
          }
        }
      }
    }
  }

  if (tipo === "abierta") {
    // `abierta` no requiere ningún bloque de respuesta (es su razón de ser).
    // Sólo avisamos si declara un modo de corrección inválido — el parser ya
    // restringe a ninguna|manual, así que esto es defensivo.
    const corr = find("correccion");
    if (
      corr &&
      corr.kind === "correccion" &&
      corr.modo !== "ninguna" &&
      corr.modo !== "manual"
    ) {
      issues.push({
        severity: "error",
        code: "abierta-correccion-invalida",
        message: "tipo `abierta` requiere `correccion:` en `ninguna` o `manual`",
        line: corr.loc.line,
        col: corr.loc.col,
      });
    }
  } else {
    // `correccion:` sólo tiene sentido en `abierta`.
    const corr = find("correccion");
    if (corr && corr.kind === "correccion") {
      issues.push({
        severity: "warning",
        code: "correccion-fuera-de-abierta",
        message:
          "`correccion:` sólo aplica a `tipo: abierta`; en otros tipos se ignora",
        line: corr.loc.line,
        col: corr.loc.col,
      });
    }
  }

  if (tipo === "identificar_palabras") {
    if (!has("texto_analizar")) {
      issues.push({
        severity: "error",
        code: "identificar-palabras-requires-texto-analizar",
        message: "tipo `identificar_palabras` requiere `texto_analizar:`",
        line: ploc.line,
        col: ploc.col,
      });
    }
    if (!has("respuestas_validas")) {
      issues.push({
        severity: "error",
        code: "identificar-palabras-requires-respuestas-validas",
        message:
          "tipo `identificar_palabras` requiere `respuestas_validas:` con las palabras correctas",
        line: ploc.line,
        col: ploc.col,
      });
    }

    const txt = find("texto_analizar");
    const resp = find("respuestas_validas");
    if (
      txt &&
      txt.kind === "texto_analizar" &&
      txt.expr.kind === "str" &&
      resp &&
      resp.kind === "respuestas_validas"
    ) {
      const tokens = tokenizarPalabras(txt.expr.value);
      // Si todas las items son strings literales:
      if (resp.items.every((i) => i.kind === "str")) {
        for (const item of resp.items) {
          if (item.kind !== "str") continue;
          if (!tokens.has(item.value)) {
            issues.push({
              severity: "warning",
              code: "palabra-no-en-texto",
              message: `la palabra "${item.value}" no aparece en \`texto_analizar\``,
              line: item.loc.line,
              col: item.loc.col,
            });
          }
        }
      }
      // O si es 1 sola expr que es array literal de strings:
      else if (
        resp.items.length === 1 &&
        resp.items[0].kind === "array" &&
        resp.items[0].items.every((i) => i.kind === "str")
      ) {
        for (const item of resp.items[0].items) {
          if (item.kind !== "str") continue;
          if (!tokens.has(item.value)) {
            issues.push({
              severity: "warning",
              code: "palabra-no-en-texto",
              message: `la palabra "${item.value}" no aparece en \`texto_analizar\``,
              line: item.loc.line,
              col: item.loc.col,
            });
          }
        }
      }
    }
  }
}

/**
 * Tokeniza un texto en palabras (Unicode-aware) para hacer match por palabra
 * entera en vez de substring. Misma regex que usan los renderers especiales,
 * para mantener consistencia entre el linter y el reproductor.
 */
function tokenizarPalabras(texto: string): Set<string> {
  const re = /[\p{L}\p{N}]+(?:['’\-_][\p{L}\p{N}]+)*/gu;
  const tokens = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(texto)) !== null) {
    tokens.add(m[0]);
  }
  return tokens;
}

function literalStringArrayFromOpciones(items: Expr[]): string[] | null {
  // 1 expr que es array literal
  if (items.length === 1 && items[0].kind === "array") {
    const arr = items[0];
    if (arr.items.every((i) => i.kind === "str")) {
      return arr.items.map((i) => (i as Extract<Expr, { kind: "str" }>).value);
    }
    return null;
  }
  // varias exprs strings
  if (items.length > 1 && items.every((i) => i.kind === "str")) {
    return items.map((i) => (i as Extract<Expr, { kind: "str" }>).value);
  }
  return null;
}

function literalStringArrayFromExpr(expr: Expr): string[] | null {
  if (expr.kind !== "array") return null;
  if (!expr.items.every((i) => i.kind === "str")) return null;
  return expr.items.map((i) => (i as Extract<Expr, { kind: "str" }>).value);
}

function sameSetStr(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const counts = new Map<string, number>();
  for (const s of a) counts.set(s, (counts.get(s) ?? 0) + 1);
  for (const s of b) {
    const n = counts.get(s);
    if (n === undefined || n === 0) return false;
    counts.set(s, n - 1);
  }
  return true;
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
