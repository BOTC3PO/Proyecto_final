/**
 * Helpers para leer y escribir bloques del AST de una Plantilla VBLang desde el
 * editor schema-driven (WO06).
 *
 * Principio: el código sigue siendo la fuente de verdad. El editor muta el AST
 * por bloque (reemplazar/quitar/agregar) y el padre lo serializa con el
 * serializer real, de modo que los bloques NO soportados se preservan intactos
 * (regla de WO01). Para expresiones e interpolaciones reusamos el parser/
 * serializer reales (`parseExprText` / `emitExpr`), nunca un mini-parser propio,
 * para que el round-trip sea fiel.
 */
import { emitExpr } from "@vb/vblang";
import type {
  Bloque,
  CampoKV,
  Expr,
  Plantilla,
  TextoOInterpolacion,
} from "@vb/vblang";
import { parseExprText } from "./exprParse";

export const DUMMY_LOC = { line: 0, col: 0, endLine: 0, endCol: 0 } as const;

/* ---------------- bloques ---------------- */

export function getBlock<K extends Bloque["kind"]>(
  p: Plantilla,
  kind: K,
): Extract<Bloque, { kind: K }> | undefined {
  return p.bloques.find((b) => b.kind === kind) as
    | Extract<Bloque, { kind: K }>
    | undefined;
}

export function hasBlock(p: Plantilla, kind: Bloque["kind"]): boolean {
  return p.bloques.some((b) => b.kind === kind);
}

/** Reemplaza el bloque del mismo kind preservando su posición, o lo agrega. */
export function withBlock(p: Plantilla, next: Bloque): Plantilla {
  const idx = p.bloques.findIndex((b) => b.kind === next.kind);
  const bloques =
    idx === -1
      ? [...p.bloques, next]
      : p.bloques.map((b, i) => (i === idx ? next : b));
  return { ...p, bloques };
}

export function withoutBlock(p: Plantilla, kind: Bloque["kind"]): Plantilla {
  return { ...p, bloques: p.bloques.filter((b) => b.kind !== kind) };
}

/** Aplica varias mutaciones de bloque (agregar/quitar) en una pasada. */
export function withBlocks(p: Plantilla, blocks: Bloque[]): Plantilla {
  return blocks.reduce((acc, b) => withBlock(acc, b), p);
}

/* ---------------- expresiones ---------------- */

export const strLit = (value: string): Expr => ({
  kind: "str",
  value,
  loc: DUMMY_LOC,
});
export const numLit = (value: number): Expr => ({
  kind: "num",
  value,
  loc: DUMMY_LOC,
});
export const boolLit = (value: boolean): Expr => ({
  kind: "bool",
  value,
  loc: DUMMY_LOC,
});
export const arrayLit = (items: Expr[]): Expr => ({
  kind: "array",
  items,
  loc: DUMMY_LOC,
});
export const nullLit = (): Expr => ({ kind: "null", loc: DUMMY_LOC });
export const objLit = (
  entries: { key: string; value: Expr }[],
): Expr => ({
  kind: "object",
  entries: entries.map((e) => ({ key: e.key, value: e.value, loc: DUMMY_LOC })),
  loc: DUMMY_LOC,
});

/* ---------------- bridge literal JS ↔ Expr (WO-4: data pura) ---------------- */

/**
 * Construye una `Expr` literal a partir de un valor JS puro (número, string,
 * booleano, null, array, objeto). Pensado para data estructurada (ej. el bloque
 * `visual:`), no para fórmulas. Las claves `undefined` de un objeto se omiten.
 */
export function literalToExpr(value: unknown): Expr {
  if (typeof value === "number") return numLit(value);
  if (typeof value === "string") return strLit(value);
  if (typeof value === "boolean") return boolLit(value);
  if (value === null || value === undefined) return nullLit();
  if (Array.isArray(value)) return arrayLit(value.map(literalToExpr));
  if (typeof value === "object") {
    return objLit(
      Object.entries(value as Record<string, unknown>)
        .filter(([, v]) => v !== undefined)
        .map(([key, v]) => ({ key, value: literalToExpr(v) })),
    );
  }
  return nullLit();
}

/**
 * Inverso de `literalToExpr`: extrae el valor JS de una `Expr` literal. Devuelve
 * `undefined` para expresiones que no son data pura (var, binop, fun_call…),
 * para preservarlas sin romper (no se editan desde estos campos).
 */
export function exprToLiteral(expr: Expr): unknown {
  switch (expr.kind) {
    case "num":
      return expr.value;
    case "str":
      return expr.value;
    case "bool":
      return expr.value;
    case "null":
      return null;
    case "array":
      return expr.items.map(exprToLiteral);
    case "object": {
      const out: Record<string, unknown> = {};
      for (const e of expr.entries) out[e.key] = exprToLiteral(e.value);
      return out;
    }
    default:
      return undefined;
  }
}

/**
 * WO-4 — Lee el bloque `visual:` como un objeto JS plano (cada campo kv por
 * `exprToLiteral`). `null` si no hay bloque. Útil para los editores de visual
 * ricos (line-chart, timeline, latex), que trabajan con la forma de `VisualSpec`.
 */
export function readVisualRaw(p: Plantilla): Record<string, unknown> | null {
  const b = getBlock(p, "visual");
  if (!b) return null;
  const out: Record<string, unknown> = {};
  for (const c of b.campos) out[c.key] = exprToLiteral(c.value);
  return out;
}

/**
 * Escribe el bloque `visual:` desde un objeto JS plano (cada clave → campo kv
 * vía `literalToExpr`). `null`/objeto vacío quita el bloque (round-trip sin
 * basura). El orden de las claves se preserva (orden de inserción del objeto).
 */
export function writeVisualRaw(
  p: Plantilla,
  obj: Record<string, unknown> | null,
): Plantilla {
  if (!obj || Object.keys(obj).length === 0) return withoutBlock(p, "visual");
  const campos: CampoKV[] = Object.entries(obj)
    .filter(([, v]) => v !== undefined)
    .map(([key, v]) => ({ key, value: literalToExpr(v), loc: DUMMY_LOC }));
  return withBlock(p, { kind: "visual", campos, loc: DUMMY_LOC });
}

/** `kind` declarado en el bloque `visual:`, o `null` si no hay visual. */
export function readVisualKind(p: Plantilla): string | null {
  const k = readVisualRaw(p)?.kind;
  return typeof k === "string" ? k : null;
}

/** Texto a mostrar para una expresión que representa un string. */
export function exprToStringValue(expr: Expr | undefined): string {
  if (!expr) return "";
  if (expr.kind === "str") return expr.value;
  return emitExpr(expr);
}

/** Texto a mostrar para una expresión libre (fórmula). */
export function exprToText(expr: Expr | undefined): string {
  return expr ? emitExpr(expr) : "";
}

/**
 * Parsea texto a Expr usando el parser real. Devuelve `null` si no parsea
 * (el caller mantiene el valor buffered y no muta el AST).
 */
export function textToExpr(text: string): Expr | null {
  const res = parseExprText(text);
  return res.ok ? res.expr : null;
}

/* ---------------- enunciado / pasos (texto + interpolaciones) ---------------- */

export function partesToText(partes: TextoOInterpolacion[]): string {
  let out = "";
  for (const p of partes) {
    if (p.kind === "texto") {
      out += p.value.replace(/{/g, "{{").replace(/}/g, "}}");
    } else {
      const exprStr = emitExpr(p.expr);
      out += p.modificador ? `{${exprStr} | ${p.modificador}}` : `{${exprStr}}`;
    }
  }
  return out;
}

/* ---------------- enunciados (lista de variantes) ---------------- */

/**
 * Lee el bloque `enunciados:` como un array de strings (cada variante ya
 * pasada por `partesToText` para que sea editable como texto). Si el bloque
 * no existe, devuelve `[]`. Si el bloque `enunciado:` (singular) está
 * presente, devuelve `[]` también — son mutuamente excluyentes.
 */
export function readEnunciados(p: Plantilla): string[] {
  const b = getBlock(p, "enunciados");
  if (!b) return [];
  return b.items.map((it) => partesToText(it.partes));
}

/**
 * Escribe el bloque `enunciados:` a partir de un array de strings. Cada
 * string se parsea con `textToPartes` para preservar las interpolaciones.
 * Si el array queda vacío, elimina el bloque (round-trip sin basura).
 */
export function writeEnunciados(p: Plantilla, items: string[]): Plantilla {
  if (items.length === 0) {
    return withoutBlock(p, "enunciados");
  }
  const variantes = items.map((text) => ({
    partes: textToPartes(text),
    loc: DUMMY_LOC,
  }));
  return withBlock(p, { kind: "enunciados", items: variantes, loc: DUMMY_LOC });
}

/**
 * Migra el bloque `enunciado:` a `enunciados:` con una sola variante. Usado
 * por el botón "Convertir en variantes" en el editor visual.
 */
export function enunciadoToVariantes(p: Plantilla): Plantilla {
  const single = getBlock(p, "enunciado");
  if (!single) return p;
  const text = partesToText(single.partes);
  let next = withoutBlock(p, "enunciado");
  next = writeEnunciados(next, [text]);
  return next;
}

/**
 * Migra el bloque `enunciados:` a `enunciado:` tomando la primera variante
 * como el nuevo enunciado único. Si la lista está vacía no hace nada.
 */
export function variantesToEnunciado(p: Plantilla): Plantilla {
  const variantes = getBlock(p, "enunciados");
  if (!variantes || variantes.items.length === 0) return p;
  const first = variantes.items[0].partes;
  let next = withoutBlock(p, "enunciados");
  next = withBlock(next, { kind: "enunciado", partes: first, loc: DUMMY_LOC });
  return next;
}

/**
 * Devuelve los nombres de las variables declaradas en el bloque `variables:`
 * en el orden en que aparecen. Si el bloque no existe, devuelve `[]`. Pensado
 * para alimentar el autocompletado del editor de código.
 */
export function extractDeclaredVariables(p: Plantilla): string[] {
  const b = getBlock(p, "variables");
  if (!b) return [];
  return b.declaraciones.map((d) => d.nombre);
}

/* ---------------- WO-1: bloques antes solo editables en DSL crudo ---------------- */

/*
 * Hallazgos de la investigación (forma de cada bloque, ver ast.ts):
 *  - respuesta_nombre  → { expr: Expr }      (análogo a respuesta_iso; string).
 *  - tolerancia_abs    → { valor: number }   (número crudo, sin `%`).
 *  - explicacion       → { partes: [...] }   (string interpolable, como enunciado).
 *  - restricciones     → { condiciones: Expr[] }  (dash-list de fórmulas).
 *  - pistas            → { items: PasoItem[] }     (lista ordenada interpolable).
 *
 * Dónde se renderiza cada uno (PlantillaEditorSchema):
 *  - respuesta_nombre / tolerancia_abs → dentro de la Section "Tipo de pregunta"
 *    (junto al mapa y a `tolerancia`, respectivamente).
 *  - explicacion / pistas / restricciones → Sections propias tras "Puntaje y pista".
 *
 * Decisión sobre `metadata.pista` (única) vs bloque `pistas:` (plural):
 *  CONVIVEN. Son semánticamente distintos: `metadata.pista` es la pista única
 *  legada (se muestra completa) y `pistas:` es la secuencia escalonada (F2-02)
 *  que el alumno pide de a una. Migrar `metadata.pista`→`pistas:` cambiaría el
 *  DSL de plantillas viejas (rompe el round-trip idempotente y la semántica),
 *  así que NO se migra: cada uno tiene su editor y se preservan ambos.
 */

/** respuesta_nombre: respuesta por nombre (análogo a respuesta_iso). */
export function readRespuestaNombre(p: Plantilla): string {
  const b = getBlock(p, "respuesta_nombre");
  return b ? exprToStringValue(b.expr) : "";
}

/** Escribe (o quita, con "") `respuesta_nombre:` como string literal. */
export function writeRespuestaNombre(p: Plantilla, text: string): Plantilla {
  return text.trim() === ""
    ? withoutBlock(p, "respuesta_nombre")
    : withBlock(p, {
        kind: "respuesta_nombre",
        expr: strLit(text),
        loc: DUMMY_LOC,
      });
}

/** tolerancia_abs: número crudo (sin `%`). "" si no hay bloque. */
export function readToleranciaAbs(p: Plantilla): string {
  const b = getBlock(p, "tolerancia_abs");
  return b ? String(b.valor) : "";
}

/**
 * Escribe `tolerancia_abs:`. "" quita el bloque; un número no finito (ej. "-"
 * a medio escribir) devuelve `null` para que el caller mantenga el buffer.
 */
export function writeToleranciaAbs(p: Plantilla, text: string): Plantilla | null {
  if (text.trim() === "") return withoutBlock(p, "tolerancia_abs");
  const n = Number(text);
  if (!Number.isFinite(n)) return null;
  return withBlock(p, { kind: "tolerancia_abs", valor: n, loc: DUMMY_LOC });
}

/* ---------------- WO-10: encuadre (vista bloqueada del mapa) ---------------- */

/**
 * Lee el `encuadre` del bloque `mapa:` como string "oeste, sur, este, norte".
 * Formato de input/salida: cuatro números separados por comas/espacios.
 * Vacío si no hay encuadre (vista interactiva, comportamiento previo).
 */
export function readEncuadre(p: Plantilla): string {
  const b = getBlock(p, "mapa");
  return b?.encuadre ? b.encuadre.join(", ") : "";
}

/**
 * Escribe (o quita, con "") el `encuadre` del bloque `mapa:`.
 *  - `null` si el texto no parsea como 4 números válidos (el caller no debe
 *    commitear; BufferedText conserva el valor y muestra error).
 *  - Crea el bloque `mapa:` con `world_countries` si no existe, para que el
 *    docente pueda fijar el encuadre antes de elegir el mapa (round-trip
 *    idempotente). El render del alumno toma este encuadre y lockea la vista
 *    (pan/zoom OFF, recortado al viewBox).
 */
export function writeEncuadre(
  p: Plantilla,
  text: string,
): Plantilla | null {
  if (text.trim() === "") {
    const b = getBlock(p, "mapa");
    if (!b) return p;
    const { encuadre: _drop, ...rest } = b;
    void _drop;
    return withBlock(p, { ...rest, loc: DUMMY_LOC } as Bloque);
  }
  // Parseo tolerante: separadores coma, espacio, o `;`.
  const parts = text.split(/[,;\s]+/).map((s) => s.trim()).filter((s) => s !== "");
  if (parts.length !== 4) return null;
  const nums = parts.map(Number);
  if (nums.some((n) => !Number.isFinite(n))) return null;
  // Validación geográfica: oeste < este, sur < norte.
  const [west, south, east, north] = nums;
  if (west >= east || south >= north) return null;
  const encuadre = [west, south, east, north] as [number, number, number, number];
  const b = getBlock(p, "mapa");
  if (!b) {
    return withBlock(p, {
      kind: "mapa",
      nombre: "world_countries",
      encuadre,
      loc: DUMMY_LOC,
    });
  }
  return withBlock(p, { ...b, encuadre, loc: DUMMY_LOC });
}

/** explicacion: string único interpolable (mismo modelo que enunciado). */
export function readExplicacion(p: Plantilla): string {
  const b = getBlock(p, "explicacion");
  return b ? partesToText(b.partes) : "";
}

/** Escribe (o quita, con "") `explicacion:` parseando interpolaciones `{var}`. */
export function writeExplicacion(p: Plantilla, text: string): Plantilla {
  return text.trim() === ""
    ? withoutBlock(p, "explicacion")
    : withBlock(p, {
        kind: "explicacion",
        partes: textToPartes(text),
        loc: DUMMY_LOC,
      });
}

/** restricciones: dash-list de fórmulas, leídas como texto editable. */
export function readRestricciones(p: Plantilla): string[] {
  const b = getBlock(p, "restricciones");
  return b ? b.condiciones.map(exprToText) : [];
}

/**
 * Escribe `restricciones:` desde una lista de fórmulas en texto. Cada texto se
 * parsea con el parser real; los vacíos o que no parsean se descartan del AST
 * (el caller mantiene su buffer visible y marca el error inline). Lista sin
 * fórmulas válidas => quita el bloque (round-trip sin basura).
 */
export function writeRestricciones(p: Plantilla, texts: string[]): Plantilla {
  const condiciones: Expr[] = [];
  for (const t of texts) {
    if (t.trim() === "") continue;
    const expr = textToExpr(t);
    if (expr) condiciones.push(expr);
  }
  if (condiciones.length === 0) return withoutBlock(p, "restricciones");
  return withBlock(p, { kind: "restricciones", condiciones, loc: DUMMY_LOC });
}

/** pistas (plural): secuencia ordenada de pistas escalonadas, como texto. */
export function readPistas(p: Plantilla): string[] {
  const b = getBlock(p, "pistas");
  return b ? b.items.map((it) => partesToText(it.partes)) : [];
}

/**
 * Escribe `pistas:` desde una lista de strings. Mismo criterio que
 * `writeEnunciados`: cada string se conserva (incluso vacío) para que agregar
 * filas no las haga desaparecer; lista vacía => quita el bloque. NO toca
 * `metadata.pista` (la pista única conviven con esta secuencia).
 */
export function writePistas(p: Plantilla, texts: string[]): Plantilla {
  if (texts.length === 0) return withoutBlock(p, "pistas");
  const items = texts.map((text) => ({
    partes: textToPartes(text),
    loc: DUMMY_LOC,
  }));
  return withBlock(p, { kind: "pistas", items, loc: DUMMY_LOC });
}

/**
 * Convierte texto con `{expr}` / `{{` / `}}` a partes. Si una interpolación no
 * parsea como expresión, se conserva como texto literal (no se rompe).
 */
export function textToPartes(text: string): TextoOInterpolacion[] {
  const partes: TextoOInterpolacion[] = [];
  let buf = "";
  let i = 0;
  const flush = () => {
    if (buf.length > 0) {
      partes.push({ kind: "texto", value: buf });
      buf = "";
    }
  };
  while (i < text.length) {
    const ch = text[i];
    if (ch === "{" && text[i + 1] === "{") {
      buf += "{";
      i += 2;
      continue;
    }
    if (ch === "}" && text[i + 1] === "}") {
      buf += "}";
      i += 2;
      continue;
    }
    if (ch === "{") {
      const close = text.indexOf("}", i + 1);
      if (close === -1) {
        buf += text.slice(i);
        break;
      }
      const inner = text.slice(i + 1, close);
      const pipeIdx = inner.indexOf("|");
      const exprStr = pipeIdx === -1 ? inner.trim() : inner.slice(0, pipeIdx).trim();
      const modificador =
        pipeIdx === -1 ? undefined : inner.slice(pipeIdx + 1).trim();
      const parsed = exprStr.length > 0 ? textToExpr(exprStr) : null;
      if (parsed) {
        flush();
        partes.push({ kind: "interp", expr: parsed, modificador });
      } else {
        // No parsea: conservar como texto literal escapado.
        buf += text.slice(i, close + 1);
      }
      i = close + 1;
      continue;
    }
    buf += ch;
    i++;
  }
  flush();
  return partes;
}
