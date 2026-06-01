/**
 * Lectura/escritura de campos del editor schema-driven contra el AST de una
 * Plantilla (WO06). Cada campo del schema mapea a UN bloque; acá vive la lógica
 * pura (sin React) para leer su valor y reescribir el bloque, además del armado
 * del esqueleto al cambiar de tipo. Probado en plantillaFields.spec.
 */
import type {
  Bloque,
  EtiquetaPedida,
  Field,
  ListField,
  MapaBloque,
  Plantilla,
  TextField,
  TipoPregunta,
} from "@vb/vblang";
import { QUESTION_TYPE_SCHEMAS } from "@vb/vblang";
import {
  arrayLit,
  boolLit,
  DUMMY_LOC,
  exprToStringValue,
  exprToText,
  getBlock,
  hasBlock,
  numLit,
  partesToText,
  strLit,
  textToExpr,
  textToPartes,
  withBlock,
  withoutBlock,
} from "./plantillaAst";

/** Bloques que definen la "respuesta"/forma de un tipo, y se barren al cambiarlo. */
const ANSWER_BLOCKS: Bloque["kind"][] = [
  "tipo",
  "respuesta",
  "respuestas_validas",
  "respuesta_iso",
  "respuesta_nombre",
  "respuesta_orden",
  "etiquetas_pedidas",
  "opciones",
  "opciones_explicitas",
  "mapa",
  "texto_analizar",
  "unidad",
  "tolerancia",
  "correccion",
];

/* ---------------- lecturas ---------------- */

export function readTextField(p: Plantilla, field: TextField): string {
  switch (field.block) {
    case "enunciado": {
      const b = getBlock(p, "enunciado");
      return b ? partesToText(b.partes) : "";
    }
    case "respuesta": {
      const b = getBlock(p, "respuesta");
      if (!b) return "";
      return field.expression ? exprToText(b.expr) : exprToStringValue(b.expr);
    }
    case "respuesta_orden": {
      const b = getBlock(p, "respuesta_orden");
      return b ? exprToText(b.expr) : "";
    }
    case "respuesta_iso": {
      const b = getBlock(p, "respuesta_iso");
      return b ? exprToStringValue(b.expr) : "";
    }
    case "texto_analizar": {
      const b = getBlock(p, "texto_analizar");
      return b ? exprToStringValue(b.expr) : "";
    }
    case "unidad": {
      const b = getBlock(p, "unidad");
      return b ? b.valor : "";
    }
    default:
      return "";
  }
}

export function readNumberField(p: Plantilla, field: Field): string {
  if (field.block === "tolerancia") {
    const b = getBlock(p, "tolerancia");
    return b ? String(b.valor) : "";
  }
  return "";
}

export function readBoolField(p: Plantilla, field: Field): boolean {
  if (field.block === "respuesta") {
    const b = getBlock(p, "respuesta");
    return b?.expr.kind === "bool" ? b.expr.value : false;
  }
  return false;
}

export function readEnumField(p: Plantilla, field: Field): string {
  if (field.block === "mapa") {
    const b = getBlock(p, "mapa");
    return b ? b.nombre : "";
  }
  if (field.block === "correccion") {
    const b = getBlock(p, "correccion");
    return b ? b.modo : "";
  }
  return "";
}

export function readListStrings(p: Plantilla, field: ListField): string[] {
  if (field.block === "opciones_explicitas") {
    const b = getBlock(p, "opciones_explicitas");
    return b ? b.items.map(exprToStringValue) : [];
  }
  if (field.block === "respuestas_validas") {
    const b = getBlock(p, "respuestas_validas");
    return b ? b.items.map(exprToStringValue) : [];
  }
  return [];
}

export interface EtiquetaRow {
  palabra: string;
  etiqueta: string;
}

export function readEtiquetas(p: Plantilla): EtiquetaRow[] {
  const b = getBlock(p, "etiquetas_pedidas");
  if (!b) return [];
  return b.etiquetas.map((et) => {
    const palabra = et.campos.find((c) => c.key === "palabra");
    const etiqueta = et.campos.find((c) => c.key === "etiqueta");
    return {
      palabra: palabra ? exprToStringValue(palabra.value) : "",
      etiqueta: etiqueta ? exprToStringValue(etiqueta.value) : "",
    };
  });
}

/* ---------------- escrituras ---------------- */

/** `null` = el valor no parsea (el caller mantiene el buffer y no muta el AST). */
export function writeTextField(
  p: Plantilla,
  field: TextField,
  text: string,
): Plantilla | null {
  switch (field.block) {
    case "enunciado":
      return withBlock(p, {
        kind: "enunciado",
        partes: textToPartes(text),
        loc: DUMMY_LOC,
      });
    case "respuesta": {
      if (field.expression) {
        const expr = textToExpr(text);
        if (!expr) return null;
        return withBlock(p, { kind: "respuesta", expr, loc: DUMMY_LOC });
      }
      return withBlock(p, { kind: "respuesta", expr: strLit(text), loc: DUMMY_LOC });
    }
    case "respuesta_orden": {
      const expr = textToExpr(text);
      if (!expr) return null;
      return withBlock(p, { kind: "respuesta_orden", expr, loc: DUMMY_LOC });
    }
    case "respuesta_iso":
      return withBlock(p, {
        kind: "respuesta_iso",
        expr: strLit(text),
        loc: DUMMY_LOC,
      });
    case "texto_analizar":
      return withBlock(p, {
        kind: "texto_analizar",
        expr: strLit(text),
        loc: DUMMY_LOC,
      });
    case "unidad":
      return text.trim() === ""
        ? withoutBlock(p, "unidad")
        : withBlock(p, { kind: "unidad", valor: text, loc: DUMMY_LOC });
    default:
      return p;
  }
}

export function writeNumberField(
  p: Plantilla,
  field: Field,
  text: string,
): Plantilla | null {
  if (field.block !== "tolerancia") return p;
  if (text.trim() === "") return withoutBlock(p, "tolerancia");
  const n = Number(text);
  if (!Number.isFinite(n)) return null; // ej. "-" intermedio
  return withBlock(p, {
    kind: "tolerancia",
    valor: n,
    esPorcentaje: false,
    loc: DUMMY_LOC,
  });
}

export function writeBoolField(p: Plantilla, field: Field, value: boolean): Plantilla {
  if (field.block !== "respuesta") return p;
  return withBlock(p, { kind: "respuesta", expr: boolLit(value), loc: DUMMY_LOC });
}

export function writeEnumField(p: Plantilla, field: Field, value: string): Plantilla {
  if (field.block === "mapa") {
    return withBlock(p, {
      kind: "mapa",
      nombre: value as MapaBloque["nombre"],
      loc: DUMMY_LOC,
    });
  }
  if (field.block === "correccion") {
    return withBlock(p, {
      kind: "correccion",
      modo: value === "manual" ? "manual" : "ninguna",
      loc: DUMMY_LOC,
    });
  }
  return p;
}

export function writeListStrings(
  p: Plantilla,
  field: ListField,
  items: string[],
): Plantilla {
  if (field.block === "opciones_explicitas") {
    return withBlock(p, {
      kind: "opciones_explicitas",
      items: items.map(strLit),
      loc: DUMMY_LOC,
    });
  }
  if (field.block === "respuestas_validas") {
    return withBlock(p, {
      kind: "respuestas_validas",
      items: items.map(strLit),
      loc: DUMMY_LOC,
    });
  }
  return p;
}

export function writeEtiquetas(p: Plantilla, rows: EtiquetaRow[]): Plantilla {
  const etiquetas: EtiquetaPedida[] = rows.map((r) => ({
    id: "",
    campos: [
      { key: "palabra", value: strLit(r.palabra) },
      { key: "etiqueta", value: strLit(r.etiqueta) },
    ],
  }));
  return withBlock(p, { kind: "etiquetas_pedidas", etiquetas, loc: DUMMY_LOC });
}

/* ---------------- base / tipo ---------------- */

/** True si la plantilla usa la base "generador". */
export function isGeneradorBase(p: Plantilla): boolean {
  return hasBlock(p, "generador");
}

/** Bloques semilla con defaults válidos para un tipo recién elegido. */
function seedBlocks(tipo: TipoPregunta): Bloque[] {
  const blocks: Bloque[] = [];
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  if (schema.declaraTipo) {
    blocks.push({ kind: "tipo", valor: tipo, loc: DUMMY_LOC });
  }
  switch (tipo) {
    case "input":
      blocks.push({ kind: "respuesta", expr: strLit(""), loc: DUMMY_LOC });
      break;
    case "mc":
      blocks.push({
        kind: "opciones_explicitas",
        items: [strLit("Opción 1"), strLit("Opción 2")],
        loc: DUMMY_LOC,
      });
      blocks.push({ kind: "respuesta", expr: strLit("Opción 1"), loc: DUMMY_LOC });
      break;
    case "vf":
      blocks.push({ kind: "respuesta", expr: boolLit(true), loc: DUMMY_LOC });
      break;
    case "completar":
      blocks.push({
        kind: "respuestas_validas",
        items: [strLit("")],
        loc: DUMMY_LOC,
      });
      break;
    case "ordenar":
      blocks.push({
        kind: "opciones_explicitas",
        items: [strLit("Primero"), strLit("Segundo")],
        loc: DUMMY_LOC,
      });
      blocks.push({
        kind: "respuesta_orden",
        expr: arrayLit([strLit("Primero"), strLit("Segundo")]),
        loc: DUMMY_LOC,
      });
      break;
    case "marcar_mapa":
      blocks.push({ kind: "mapa", nombre: "world_countries", loc: DUMMY_LOC });
      blocks.push({ kind: "respuesta_iso", expr: strLit("AR"), loc: DUMMY_LOC });
      break;
    case "analisis_sintactico":
      blocks.push({
        kind: "texto_analizar",
        expr: strLit("el gato duerme"),
        loc: DUMMY_LOC,
      });
      blocks.push({
        kind: "etiquetas_pedidas",
        etiquetas: [
          {
            id: "",
            campos: [
              { key: "palabra", value: strLit("gato") },
              { key: "etiqueta", value: strLit("sustantivo") },
            ],
          },
        ],
        loc: DUMMY_LOC,
      });
      break;
    case "identificar_palabras":
      blocks.push({
        kind: "texto_analizar",
        expr: strLit("el gato come pescado"),
        loc: DUMMY_LOC,
      });
      blocks.push({
        kind: "respuestas_validas",
        items: [strLit("gato")],
        loc: DUMMY_LOC,
      });
      break;
    case "abierta":
      // WO07 — abierta no lleva clave de respuesta; sólo el modo de corrección.
      blocks.push({ kind: "correccion", modo: "ninguna", loc: DUMMY_LOC });
      break;
  }
  return blocks;
}

/**
 * Rearma el esqueleto de la plantilla para `tipo`, preservando enunciado,
 * variables, metadata, pasos, visual, restricciones y dataset. Sale de la base
 * generador si estaba activa. El resultado es un DSL válido y editable.
 */
export function applyTipo(p: Plantilla, tipo: TipoPregunta): Plantilla {
  let next: Plantilla = p;
  next = withoutBlock(next, "generador");
  for (const k of ANSWER_BLOCKS) next = withoutBlock(next, k);
  if (!hasBlock(next, "enunciado")) {
    next = withBlock(next, {
      kind: "enunciado",
      partes: [{ kind: "texto", value: "Escribí el enunciado…" }],
      loc: DUMMY_LOC,
    });
  }
  for (const b of seedBlocks(tipo)) next = withBlock(next, b);
  return next;
}

/** Activa la base generador con `id`, barriendo los bloques de respuesta. */
export function applyGenerador(p: Plantilla, id: string): Plantilla {
  let next: Plantilla = p;
  for (const k of ANSWER_BLOCKS) next = withoutBlock(next, k);
  if (!hasBlock(next, "enunciado")) {
    next = withBlock(next, {
      kind: "enunciado",
      partes: [{ kind: "texto", value: "Escribí el enunciado…" }],
      loc: DUMMY_LOC,
    });
  }
  return withBlock(next, { kind: "generador", id, loc: DUMMY_LOC });
}

/** Bloques no cubiertos por la UI schema-driven (se preservan read-only). */
const HANDLED_BLOCKS = new Set<Bloque["kind"]>([
  "enunciado",
  "tipo",
  "respuesta",
  "respuestas_validas",
  "respuesta_iso",
  "respuesta_orden",
  "etiquetas_pedidas",
  "opciones_explicitas",
  "mapa",
  "texto_analizar",
  "unidad",
  "tolerancia",
  "correccion",
  "generador",
  "variables",
  "visual",
  "pasos",
  "metadata",
]);

export function unhandledBlocks(p: Plantilla): Bloque["kind"][] {
  const kinds = new Set<Bloque["kind"]>();
  for (const b of p.bloques) {
    if (!HANDLED_BLOCKS.has(b.kind)) kinds.add(b.kind);
  }
  return [...kinds];
}

/* ---------------- add-on visual: PNG (static-image) ---------------- */

export interface StaticImageValue {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function visualCampo(p: Plantilla, key: string) {
  const b = getBlock(p, "visual");
  return b?.campos.find((c) => c.key === key)?.value;
}

/** Lee el visual como imagen estática, o `null` si no hay o no es imagen. */
export function readStaticImage(p: Plantilla): StaticImageValue | null {
  const kind = visualCampo(p, "kind");
  if (!(kind?.kind === "str" && kind.value === "static-image")) return null;
  const src = visualCampo(p, "src");
  const alt = visualCampo(p, "alt");
  const width = visualCampo(p, "width");
  const height = visualCampo(p, "height");
  return {
    src: src?.kind === "str" ? src.value : "",
    alt: alt?.kind === "str" ? alt.value : "",
    width: width?.kind === "num" ? width.value : undefined,
    height: height?.kind === "num" ? height.value : undefined,
  };
}

/** Escribe (o reemplaza) el visual como imagen estática. */
export function writeStaticImage(p: Plantilla, v: StaticImageValue): Plantilla {
  const campos = [
    { key: "kind", value: strLit("static-image"), loc: DUMMY_LOC },
    { key: "src", value: strLit(v.src), loc: DUMMY_LOC },
    { key: "alt", value: strLit(v.alt), loc: DUMMY_LOC },
    ...(v.width != null
      ? [{ key: "width", value: numLit(v.width), loc: DUMMY_LOC }]
      : []),
    ...(v.height != null
      ? [{ key: "height", value: numLit(v.height), loc: DUMMY_LOC }]
      : []),
  ];
  return withBlock(p, { kind: "visual", campos, loc: DUMMY_LOC });
}

export function removeVisual(p: Plantilla): Plantilla {
  return withoutBlock(p, "visual");
}

/** True si hay un visual que NO es imagen estática (no editable en esta UI). */
export function hasNonImageVisual(p: Plantilla): boolean {
  const b = getBlock(p, "visual");
  if (!b) return false;
  const kind = b.campos.find((c) => c.key === "kind")?.value;
  return !(kind?.kind === "str" && kind.value === "static-image");
}
