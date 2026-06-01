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
