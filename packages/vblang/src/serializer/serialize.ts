/**
 * Serializa una `Plantilla` (AST) de vuelta a su forma fuente DSL.
 *
 * Invariante (testeado): para todo source S parseable,
 *   parse(serialize(parse(S))) === parse(S)
 * estructuralmente (ignorando `loc` y, por la naturaleza del lexer, comentarios
 * y whitespace fuera de strings). Los comentarios SE PIERDEN en el round-trip;
 * eso es esperable porque el AST no los conserva.
 *
 * Se usa para el modo "editor visual" — un docente edita un formulario, el
 * form muta el AST, y el serializer regenera DSL para que el preview y la
 * persistencia sigan funcionando con string como source of truth.
 */

import type {
  BinOpKind,
  Bloque,
  CampoKV,
  EtiquetaPedida,
  Expr,
  ObjectEntry,
  PasoItem,
  Plantilla,
  TextoOInterpolacion,
  VariableDecl,
} from "../parser/ast.js";

/* ---------------------- precedencia de binops ---------------------- */

const BINOP_PREC: Record<BinOpKind, number> = {
  o: 1,
  y: 2,
  "==": 3,
  "!=": 3,
  "<": 3,
  ">": 3,
  "<=": 3,
  ">=": 3,
  "+": 4,
  "-": 4,
  "*": 5,
  "/": 5,
  "%": 5,
  "^": 6,
};

const BINOP_RIGHT_ASSOC: Partial<Record<BinOpKind, boolean>> = { "^": true };

/* ---------------------- helpers de string ---------------------- */

/** Identificador válido para clave de objeto sin comillas. */
const IDENT_RE = /^[a-záéíóúñA-ZÁÉÍÓÚÑ_][a-záéíóúñA-ZÁÉÍÓÚÑ_0-9]*$/;

function escapeDslString(value: string): string {
  let out = "";
  for (const ch of value) {
    if (ch === "\\") out += "\\\\";
    else if (ch === '"') out += '\\"';
    else if (ch === "\n") out += "\\n";
    else if (ch === "\t") out += "\\t";
    else out += ch;
  }
  return out;
}

function quoteDslString(value: string): string {
  return `"${escapeDslString(value)}"`;
}

/** Formato numérico estable para round-trip (JSON-compatible para enteros y decimales). */
function formatNumber(n: number): string {
  if (!Number.isFinite(n)) {
    throw new Error(`No se puede serializar número no finito: ${n}`);
  }
  // Number.toString produce "1", "1.5", "1e-7"… El lexer soporta todos ellos.
  return String(n);
}

/* ---------------------- expresiones ---------------------- */

export function emitExpr(expr: Expr): string {
  switch (expr.kind) {
    case "num":
      return formatNumber(expr.value);
    case "str":
      return quoteDslString(expr.value);
    case "bool":
      return expr.value ? "verdadero" : "falso";
    case "null":
      return "nulo";
    case "var":
      return expr.name;
    case "array":
      return `[${expr.items.map(emitExpr).join(", ")}]`;
    case "object":
      return `{ ${expr.entries.map(emitObjectEntry).join(", ")} }`;
    case "field":
      return `${emitMemberTarget(expr.target)}.${expr.field}`;
    case "index":
      return `${emitMemberTarget(expr.target)}[${emitExpr(expr.key)}]`;
    case "fun_call":
      return `${expr.name}(${expr.args.map(emitExpr).join(", ")})`;
    case "binop":
      return `${emitBinopChild(expr.left, expr.op, "L")} ${expr.op} ${emitBinopChild(
        expr.right,
        expr.op,
        "R",
      )}`;
    case "unary":
      return emitUnary(expr.op, expr.arg);
    case "for_comp": {
      const iter =
        expr.iterable.kind === "range"
          ? `${emitExpr(expr.iterable.from)}..${emitExpr(expr.iterable.to)}`
          : emitExpr(expr.iterable);
      return `[for ${expr.variable} in ${iter}: ${emitExpr(expr.body)}]`;
    }
    default: {
      const _exhaustive: never = expr;
      throw new Error(`Expr no soportado por el serializer: ${JSON.stringify(_exhaustive)}`);
    }
  }
}

function emitObjectEntry(e: ObjectEntry): string {
  const key = IDENT_RE.test(e.key) ? e.key : quoteDslString(e.key);
  return `${key}: ${emitExpr(e.value)}`;
}

/**
 * Para acceso de campo / índice, si el target es composite (binop, unary,
 * for_comp), envolvemos en paréntesis para preservar la estructura.
 */
function emitMemberTarget(target: Expr): string {
  if (
    target.kind === "binop" ||
    target.kind === "unary" ||
    target.kind === "for_comp"
  ) {
    return `(${emitExpr(target)})`;
  }
  return emitExpr(target);
}

function emitUnary(op: "-" | "+" | "no", arg: Expr): string {
  // Para `no`, el argumento es un parseComparison, así que casi todo binop de
  // mayor precedencia queda OK. Para `+/-` el argumento es otro parseUnary,
  // por lo que sólo unary y postfix son válidos como hijos directos.
  if (op === "no") {
    return `no ${emitNotChild(arg)}`;
  }
  return `${op}${emitSignChild(arg)}`;
}

function emitNotChild(arg: Expr): string {
  // `no` espera un parseComparison. Si arg es `o`/`y`/`no`, hay que envolver.
  if (
    (arg.kind === "binop" && (arg.op === "o" || arg.op === "y")) ||
    (arg.kind === "unary" && arg.op === "no")
  ) {
    return `(${emitExpr(arg)})`;
  }
  return emitExpr(arg);
}

function emitSignChild(arg: Expr): string {
  // Para `-x` / `+x` el lexer/parser admite parseUnary recursivo, así que
  // `--a` parsea OK. Pero un binop como hijo necesita paréntesis.
  if (arg.kind === "binop") return `(${emitExpr(arg)})`;
  return emitExpr(arg);
}

function emitBinopChild(child: Expr, parentOp: BinOpKind, side: "L" | "R"): string {
  const parentPrec = BINOP_PREC[parentOp];
  const parentRightAssoc = BINOP_RIGHT_ASSOC[parentOp] === true;

  // Unary `no` tiene precedencia menor que comparación, hay que parentizar
  // siempre como hijo de binop.
  if (child.kind === "unary" && child.op === "no") {
    return `(${emitExpr(child)})`;
  }
  // Unary +/- bindea más fuerte que aritmética; sólo necesita parens bajo `^`.
  if (child.kind === "unary" && (child.op === "-" || child.op === "+")) {
    if (parentOp === "^") return `(${emitExpr(child)})`;
    return emitExpr(child);
  }
  if (child.kind !== "binop") {
    return emitExpr(child);
  }
  const childPrec = BINOP_PREC[child.op];
  let needsParens: boolean;
  if (childPrec < parentPrec) {
    needsParens = true;
  } else if (childPrec > parentPrec) {
    needsParens = false;
  } else {
    // Misma precedencia. Para left-assoc, envolver si hijo está a la derecha.
    // Para right-assoc, envolver si hijo está a la izquierda.
    needsParens = parentRightAssoc ? side === "L" : side === "R";
  }
  const s = emitExpr(child);
  return needsParens ? `(${s})` : s;
}

/* ---------------------- partes de enunciado/pasos ---------------------- */

/**
 * Codifica el valor crudo (post-lex) de una secuencia de texto + interpolaciones
 * a la string que aparecería entre comillas en el DSL, ya con los escapes de
 * texto aplicados.
 */
function emitInterpolatedString(partes: TextoOInterpolacion[]): string {
  let raw = "";
  for (const p of partes) {
    if (p.kind === "texto") {
      // Escapar `{`/`}` literales antes de que el interpolation parser los
      // confunda con apertura/cierre de interpolación.
      let escaped = "";
      for (const ch of p.value) {
        if (ch === "{") escaped += "{{";
        else if (ch === "}") escaped += "}}";
        else escaped += ch;
      }
      raw += escaped;
    } else {
      const exprStr = emitExpr(p.expr);
      if (p.modificador && p.modificador.length > 0) {
        raw += `{${exprStr} | ${p.modificador}}`;
      } else {
        raw += `{${exprStr}}`;
      }
    }
  }
  return `"${escapeDslString(raw)}"`;
}

/* ---------------------- bloques ---------------------- */

function emitVariableDecl(decl: VariableDecl, indent: string): string {
  return `${indent}${decl.nombre}: ${emitExpr(decl.expr)}`;
}

function emitCampoKV(campo: CampoKV, indent: string): string {
  return `${indent}${campo.key}: ${emitExpr(campo.value)}`;
}

function emitEtiquetaPedida(et: EtiquetaPedida, indent: string): string {
  const entries: ObjectEntry[] = [];
  if (et.id) {
    entries.push({
      key: "id",
      value: { kind: "str", value: et.id, loc: dummyLoc() },
      loc: dummyLoc(),
    });
  }
  for (const c of et.campos) {
    entries.push({ key: c.key, value: c.value, loc: dummyLoc() });
  }
  const objStr = `{ ${entries.map(emitObjectEntry).join(", ")} }`;
  return `${indent}- ${objStr}`;
}

function emitPaso(paso: PasoItem, indent: string): string {
  return `${indent}- ${emitInterpolatedString(paso.partes)}`;
}

function dummyLoc() {
  return { line: 0, col: 0, endLine: 0, endCol: 0 };
}

function emitBloque(b: Bloque): string {
  const INDENT = "  ";
  switch (b.kind) {
    case "metadata": {
      if (b.campos.length === 0) return "metadata:";
      const body = b.campos.map((c) => emitCampoKV(c, INDENT)).join("\n");
      return `metadata:\n${body}`;
    }
    case "variables": {
      if (b.declaraciones.length === 0) return "variables:";
      const body = b.declaraciones
        .map((d) => emitVariableDecl(d, INDENT))
        .join("\n");
      return `variables:\n${body}`;
    }
    case "restricciones": {
      if (b.condiciones.length === 0) return "restricciones:";
      const body = b.condiciones
        .map((c) => `${INDENT}- ${emitExpr(c)}`)
        .join("\n");
      return `restricciones:\n${body}`;
    }
    case "respuestas_validas": {
      if (b.items.length === 0) return "respuestas_validas:";
      const body = b.items
        .map((i) => `${INDENT}- ${emitExpr(i)}`)
        .join("\n");
      return `respuestas_validas:\n${body}`;
    }
    case "visual": {
      if (b.campos.length === 0) return "visual:";
      const body = b.campos.map((c) => emitCampoKV(c, INDENT)).join("\n");
      return `visual:\n${body}`;
    }
    case "respuesta":
      return `respuesta: ${emitExpr(b.expr)}`;
    case "respuesta_iso":
      return `respuesta_iso: ${emitExpr(b.expr)}`;
    case "respuesta_nombre":
      return `respuesta_nombre: ${emitExpr(b.expr)}`;
    case "respuesta_orden":
      return `respuesta_orden: ${emitExpr(b.expr)}`;
    case "texto_analizar":
      return `texto_analizar: ${emitExpr(b.expr)}`;
    case "unidad":
      return `unidad: ${quoteDslString(b.valor)}`;
    case "tolerancia":
      return `tolerancia: ${formatNumber(b.valor)}${b.esPorcentaje ? "%" : ""}`;
    case "tolerancia_abs":
      // F2-04: número crudo, sin `%` (siempre absoluto). Mismo formato que
      // `tolerancia:` sin el sufijo de porcentaje.
      return `tolerancia_abs: ${formatNumber(b.valor)}`;
    case "opciones":
      return `opciones: ${b.cantidad}`;
    case "tipo":
      return `tipo: ${b.valor}`;
    case "enunciado":
      return `enunciado: ${emitInterpolatedString(b.partes)}`;
    case "enunciados": {
      // Mismo formato que `pasos:`: bloque multilinea con `- "..."` por
      // variante, escapando strings via emitInterpolatedString (que ya
      // maneja { } literales y caracteres especiales).
      if (b.items.length === 0) return "enunciados:";
      const body = b.items
        .map((it) => `${INDENT}- ${emitInterpolatedString(it.partes)}`)
        .join("\n");
      return `enunciados:\n${body}`;
    }
    case "pasos": {
      if (b.pasos.length === 0) return "pasos:";
      const body = b.pasos.map((p) => emitPaso(p, INDENT)).join("\n");
      return `pasos:\n${body}`;
    }
    case "explicacion":
      // F2-03: string único interpolable. Mismo patrón que `enunciado:` y
      // `unidad:`. El bloque `explicacion:` (a diferencia de `enunciado:`)
      // no soporta multilínea con `|` (siempre es una sola frase por
      // semántica del modelo: una sola explicación por pregunta).
      return `explicacion: ${emitInterpolatedString(b.partes)}`;
    case "pistas": {
      // F2-02: una sola pista se emite inline (round-trip con la forma
      // inline); varias, como lista `- "..."`. El parser acepta ambas.
      if (b.items.length === 0) return "pistas:";
      if (b.items.length === 1) {
        return `pistas: ${emitInterpolatedString(b.items[0].partes)}`;
      }
      const body = b.items.map((p) => emitPaso(p, INDENT)).join("\n");
      return `pistas:\n${body}`;
    }
    case "generador":
      return `generador: ${b.id}`;
    case "dataset":
      return `dataset: ${b.nombre}`;
    case "mapa":
      return `mapa: ${b.nombre}`;
    case "etiquetas_pedidas": {
      if (b.etiquetas.length === 0) return "etiquetas_pedidas:";
      const body = b.etiquetas
        .map((e) => emitEtiquetaPedida(e, INDENT))
        .join("\n");
      return `etiquetas_pedidas:\n${body}`;
    }
    case "correccion":
      return `correccion: ${b.modo}`;
    case "opciones_explicitas": {
      if (b.items.length === 0) return "opciones_explicitas:";
      // Si hay una sola expresión y NO es un literal-array multi-elemento,
      // emitir inline (consistente con el parser que acepta inline o multi-línea).
      if (b.items.length === 1) {
        return `opciones_explicitas: ${emitExpr(b.items[0])}`;
      }
      const body = b.items
        .map((i) => `${INDENT}- ${emitExpr(i)}`)
        .join("\n");
      return `opciones_explicitas:\n${body}`;
    }
    default: {
      const _exhaustive: never = b;
      throw new Error(
        `Bloque no soportado por el serializer: ${JSON.stringify(_exhaustive)}`,
      );
    }
  }
}

/* ---------------------- API pública ---------------------- */

export function serialize(plantilla: Plantilla): string {
  if (plantilla.bloques.length === 0) return "";
  return plantilla.bloques.map(emitBloque).join("\n\n") + "\n";
}
