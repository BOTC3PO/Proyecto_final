/**
 * Lectura/escritura de campos del editor schema-driven contra el AST de una
 * Plantilla (WO06). Cada campo del schema mapea a UN bloque; acá vive la lógica
 * pura (sin React) para leer su valor y reescribir el bloque, además del armado
 * del esqueleto al cambiar de tipo. Probado en plantillaFields.spec.
 */
import type {
  Bloque,
  CampoKV,
  EtiquetaPedida,
  Expr,
  Field,
  ListField,
  MapaBloque,
  MetadataBloque,
  Plantilla,
  TextField,
  TipoPregunta,
  VariableDecl,
} from "@vb/vblang";
import { CONSTANTES_GLOBALES, QUESTION_TYPE_SCHEMAS } from "@vb/vblang";
import {
  arrayLit,
  boolLit,
  DUMMY_LOC,
  exprToStringValue,
  exprToText,
  getBlock,
  hasBlock,
  numLit,
  numLiteral,
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
  // PLAN-E §21 Parte A — selección múltiple.
  "multiple",
  "puntaje_parcial",
  // PLAN-E §21 Parte B — análisis por rangos de palabras.
  "spans_pedidos",
  "etiquetas_disponibles",
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
  if (field.block === "multiple") {
    const b = getBlock(p, "multiple");
    return b ? b.valor : false;
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
  if (field.block === "puntaje_parcial") {
    const b = getBlock(p, "puntaje_parcial");
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
  if (field.block === "etiquetas_disponibles") {
    const b = getBlock(p, "etiquetas_disponibles");
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

/** PLAN-E §21 Parte B — fila del editor de spans (índices de palabra). */
export interface SpanRow {
  desde: number;
  hasta: number;
  etiqueta: string;
}

export function readSpans(p: Plantilla): SpanRow[] {
  const b = getBlock(p, "spans_pedidos");
  if (!b) return [];
  return b.spans.map((sp) => {
    const num = (key: string): number => {
      const c = sp.campos.find((x) => x.key === key);
      return c?.value.kind === "num" ? c.value.value : 0;
    };
    const etiqueta = sp.campos.find((x) => x.key === "etiqueta");
    return {
      desde: num("desde"),
      hasta: num("hasta"),
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
  // El schema ya declara `allowNegative: false` para tolerancia y nadie lo
  // miraba: una tolerancia negativa se guardaba, generaba un DSL que el parser
  // rechaza (`tolerancia: -2`) y el bloque terminaba perdiéndose sin aviso.
  // `null` = "no se guarda" (el caller conserva lo tipeado).
  if (field.kind === "number" && !field.allowNegative && n < 0) return null;
  return withBlock(p, {
    kind: "tolerancia",
    valor: n,
    esPorcentaje: false,
    loc: DUMMY_LOC,
  });
}

export function writeBoolField(p: Plantilla, field: Field, value: boolean): Plantilla {
  if (field.block === "multiple") {
    // `multiple: false` = ausente (round-trip sin basura).
    return value
      ? withBlock(p, { kind: "multiple", valor: true, loc: DUMMY_LOC })
      : withoutBlock(p, "multiple");
  }
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
  if (field.block === "puntaje_parcial") {
    if (value === "") return withoutBlock(p, "puntaje_parcial");
    return withBlock(p, {
      kind: "puntaje_parcial",
      modo: value === "proporcional" ? "proporcional" : "todo_o_nada",
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
  if (field.block === "etiquetas_disponibles") {
    // Lista opcional: vacía = bloque ausente (round-trip sin basura).
    if (items.length === 0) return withoutBlock(p, "etiquetas_disponibles");
    return withBlock(p, {
      kind: "etiquetas_disponibles",
      items: items.map(strLit),
      loc: DUMMY_LOC,
    });
  }
  return p;
}

export function writeSpans(p: Plantilla, rows: SpanRow[]): Plantilla {
  const spans: EtiquetaPedida[] = rows.map((r) => ({
    id: "",
    campos: [
      { key: "desde", value: numLit(r.desde) },
      { key: "hasta", value: numLit(r.hasta) },
      { key: "etiqueta", value: strLit(r.etiqueta) },
    ],
  }));
  return withBlock(p, { kind: "spans_pedidos", spans, loc: DUMMY_LOC });
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
    case "analisis_spans":
      blocks.push({
        kind: "texto_analizar",
        expr: strLit("El perro grande corre por el parque"),
        loc: DUMMY_LOC,
      });
      blocks.push({
        kind: "spans_pedidos",
        spans: [
          {
            id: "",
            campos: [
              { key: "desde", value: numLit(0) },
              { key: "hasta", value: numLit(2) },
              { key: "etiqueta", value: strLit("sujeto") },
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

const PLACEHOLDER_ENUNCIADO = "Escribí el enunciado…";

/**
 * Bloques que `generate()` ignora cuando hay un `generador:` activo (los provee
 * el generador). Se barren al activar/cambiar la base generador para que el AST
 * quede limpio y no arrastre `variables:`/`respuesta:` de otra base — que el
 * generador no usa y descolocan al lint respecto del preview.
 */
const GENERADOR_STRIP_BLOCKS: Bloque["kind"][] = [
  ...ANSWER_BLOCKS,
  "variables",
  "restricciones",
];

/** Activa la base generador con `id`, barriendo los bloques que el generador provee. */
export function applyGenerador(p: Plantilla, id: string): Plantilla {
  let next: Plantilla = p;
  for (const k of GENERADOR_STRIP_BLOCKS) next = withoutBlock(next, k);
  if (!hasBlock(next, "enunciado")) {
    next = withBlock(next, {
      kind: "enunciado",
      partes: [{ kind: "texto", value: PLACEHOLDER_ENUNCIADO }],
      loc: DUMMY_LOC,
    });
  }
  return withBlock(next, { kind: "generador", id, loc: DUMMY_LOC });
}

/** Resetea el enunciado al texto de ejemplo (placeholder), sin tocar el resto. */
export function resetEnunciadoPlaceholder(p: Plantilla): Plantilla {
  return withBlock(p, {
    kind: "enunciado",
    partes: [{ kind: "texto", value: PLACEHOLDER_ENUNCIADO }],
    loc: DUMMY_LOC,
  });
}

/** Recolecta los nombres de variables referenciadas en una expresión. */
function collectVarNames(expr: Expr, out: (name: string) => void): void {
  switch (expr.kind) {
    case "var":
      out(expr.name);
      return;
    case "binop":
      collectVarNames(expr.left, out);
      collectVarNames(expr.right, out);
      return;
    case "unary":
      collectVarNames(expr.arg, out);
      return;
    case "fun_call":
      for (const a of expr.args) collectVarNames(a, out);
      return;
    case "field":
      collectVarNames(expr.target, out);
      return;
    case "index":
      collectVarNames(expr.target, out);
      collectVarNames(expr.key, out);
      return;
    case "array":
      for (const i of expr.items) collectVarNames(i, out);
      return;
    case "object":
      for (const e of expr.entries) collectVarNames(e.value, out);
      return;
    case "for_comp":
      if (expr.iterable.kind === "range") {
        collectVarNames(expr.iterable.from, out);
        collectVarNames(expr.iterable.to, out);
      } else {
        collectVarNames(expr.iterable, out);
      }
      collectVarNames(expr.body, out);
      return;
    // num / str / bool / null: sin variables
  }
}

/**
 * Variables interpoladas en el enunciado que el generador NO provee (ni son
 * constantes globales). Si devuelve algo, el enunciado quedó incompatible con
 * el generador (típico al venir de otra base) y el preview tiraría "variable
 * indefinida". Mismo criterio que el lint generador-aware.
 */
export function enunciadoUndefinedVars(
  p: Plantilla,
  provided: Iterable<string>,
): string[] {
  const enun = getBlock(p, "enunciado");
  if (!enun) return [];
  const allowed = new Set<string>([
    ...provided,
    ...Object.keys(CONSTANTES_GLOBALES),
  ]);
  const undef = new Set<string>();
  for (const parte of enun.partes) {
    if (parte.kind !== "interp") continue;
    collectVarNames(parte.expr, (name) => {
      if (!allowed.has(name)) undef.add(name);
    });
  }
  return [...undef];
}

/* ---------------- metadata (dificultad) ---------------- */

function setMetaCampo(
  p: Plantilla,
  key: string,
  value: Expr | undefined,
): Plantilla {
  const m = getBlock(p, "metadata");
  const campos: CampoKV[] = m ? [...m.campos] : [];
  const idx = campos.findIndex((c) => c.key === key);
  if (value === undefined) {
    if (idx >= 0) campos.splice(idx, 1);
  } else {
    const campo: CampoKV = { key, value, loc: DUMMY_LOC };
    if (idx >= 0) campos[idx] = campo;
    else campos.push(campo);
  }
  if (campos.length === 0) return withoutBlock(p, "metadata");
  const block: MetadataBloque = {
    kind: "metadata",
    campos,
    loc: m?.loc ?? DUMMY_LOC,
  };
  return withBlock(p, block);
}

/** Dificultad declarada en `metadata`, o "" si no hay (= al azar). */
export function readDificultad(p: Plantilla): string {
  const campo = getBlock(p, "metadata")?.campos.find(
    (c) => c.key === "dificultad",
  )?.value;
  return campo?.kind === "str" ? campo.value : "";
}

/** Fija (o quita, con "") la dificultad en `metadata`. */
export function writeDificultad(p: Plantilla, value: string): Plantilla {
  return setMetaCampo(p, "dificultad", value === "" ? undefined : strLit(value));
}

/** Puntaje (`metadata: puntaje`) como número, o `null` si no hay. */
export function readPuntaje(p: Plantilla): number | null {
  const campo = getBlock(p, "metadata")?.campos.find(
    (c) => c.key === "puntaje",
  )?.value;
  return campo?.kind === "num" ? campo.value : null;
}

/** Fija (o quita, con `null`) el puntaje en `metadata`. */
export function writePuntaje(p: Plantilla, value: number | null): Plantilla {
  return setMetaCampo(p, "puntaje", value === null ? undefined : numLit(value));
}

/** Pista (`metadata: pista`), o "" si no hay. */
export function readPista(p: Plantilla): string {
  const campo = getBlock(p, "metadata")?.campos.find(
    (c) => c.key === "pista",
  )?.value;
  return campo?.kind === "str" ? campo.value : "";
}

/** Fija (o quita, con "") la pista en `metadata`. */
export function writePista(p: Plantilla, value: string): Plantilla {
  return setMetaCampo(p, "pista", value === "" ? undefined : strLit(value));
}

/* ---------------- resumen ---------------- */

/** Cantidad de variables declaradas en el bloque `variables:`. */
export function contarVariables(p: Plantilla): number {
  return getBlock(p, "variables")?.declaraciones.length ?? 0;
}

/* ---------------- VB-B6: lectura/escritura de variables ---------------- */

/**
 * VB-B6 — `readVariable`: lee una variable del bloque `variables:`.
 * Devuelve `null` si el índice está fuera de rango. La localización
 * es del AST original (no se usa para editar; sirve sólo para
 * preservar identidad en round-trips).
 */
export function readVariable(p: Plantilla, index: number): VariableDecl | null {
  const decls = getBlock(p, "variables")?.declaraciones ?? [];
  return index >= 0 && index < decls.length ? decls[index]! : null;
}

/**
 * VB-B6 — `addVariable`: agrega una `VariableDecl` al final del
 * bloque `variables:` (o en la posición `atIndex` si se pasa).
 * Si el bloque no existe, lo crea. Crea la variable con un nombre
 * único derivado de `baseName` (sufijos `_2`, `_3`…) si ya existe.
 */
export function addVariable(
  p: Plantilla,
  decl: VariableDecl,
  atIndex?: number,
): Plantilla {
  const existing = getBlock(p, "variables");
  const current = existing?.declaraciones ?? [];
  // Si la decl que entra tiene un nombre duplicado, generamos uno
  // único para no chocar con el linter (`var-duplicada`).
  const taken = new Set(current.map((d) => d.nombre));
  if (taken.has(decl.nombre)) {
    let i = 2;
    while (taken.has(`${decl.nombre}_${i}`)) i++;
    decl = { ...decl, nombre: `${decl.nombre}_${i}` };
  }
  const idx = atIndex === undefined ? current.length : Math.max(0, Math.min(atIndex, current.length));
  const next = [...current.slice(0, idx), decl, ...current.slice(idx)];
  const newBlock: Bloque = existing
    ? { ...existing, declaraciones: next }
    : { kind: "variables", declaraciones: next, loc: DUMMY_LOC };
  return withBlock(p, newBlock);
}

/**
 * VB-B6 — `updateVariable`: reemplaza la variable en `index` con la
 * `VariableDecl` provista. Mantiene la posición original y el orden
 * de las demás. Si el índice está fuera de rango, devuelve la
 * plantilla sin cambios.
 */
export function updateVariable(
  p: Plantilla,
  index: number,
  decl: VariableDecl,
): Plantilla {
  const existing = getBlock(p, "variables");
  if (!existing) return p;
  const current = existing.declaraciones;
  if (index < 0 || index >= current.length) return p;
  const next = current.map((d, i) => (i === index ? decl : d));
  return withBlock(p, { ...existing, declaraciones: next });
}

/**
 * PLAN casos-limite §11 — reescribe las REFERENCIAS a una variable.
 *
 * `updateVariable` con un `nombre` distinto sólo cambia la declaración: las
 * interpolaciones del enunciado y las expresiones que la usaban seguían
 * apuntando al nombre viejo, así que el editor clásico producía plantillas que
 * morían con "variable indefinida: a" (Tiza lo evitaba dejando el campo
 * `readOnly`, que era tapar el problema, no resolverlo).
 *
 * Recorre el árbol entero y renombra los nodos `var`. Con eso alcanza para los
 * dos casos: las expresiones (`a * 2`) y las interpolaciones del texto (`{a}`
 * parsea a un `interp` que contiene un `var`). No toca `fun_call.name` ni
 * `field` (son funciones y propiedades, no variables).
 */
function renameRefs<T>(nodo: T, viejo: string, nuevo: string): T {
  if (Array.isArray(nodo)) {
    return nodo.map((x) => renameRefs(x, viejo, nuevo)) as unknown as T;
  }
  if (nodo === null || typeof nodo !== "object") return nodo;

  const obj = nodo as Record<string, unknown>;
  if (obj.kind === "var" && obj.name === viejo) {
    return { ...obj, name: nuevo } as unknown as T;
  }
  // `para x en …`: dentro del cuerpo, `x` es la variable del bucle y tapa a la
  // de la plantilla. Si se llaman igual, adentro no hay nada que renombrar.
  if (obj.kind === "for_comp" && obj.variable === viejo) {
    return {
      ...obj,
      iterable: renameRefs(obj.iterable, viejo, nuevo),
    } as unknown as T;
  }

  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) out[k] = renameRefs(v, viejo, nuevo);
  return out as unknown as T;
}

/** Un nombre de variable válido para el DSL (mismo criterio que el lexer). */
const IDENT_RE = /^[A-Za-z_][A-Za-z0-9_]*$/;

/**
 * PLAN casos-limite §11 — renombra la variable en `index` Y todas sus
 * referencias. Devuelve `null` si el nombre no sirve (vacío, no es un
 * identificador válido, o ya lo usa otra variable), misma convención que
 * `writeNumberField`: `null` = no se guarda.
 */
export function renameVariable(
  p: Plantilla,
  index: number,
  nombre: string,
): Plantilla | null {
  const existing = getBlock(p, "variables");
  if (!existing) return null;
  const current = existing.declaraciones;
  if (index < 0 || index >= current.length) return null;
  const decl = current[index]!;
  const nuevo = nombre.trim();
  if (nuevo === decl.nombre) return p;
  if (!IDENT_RE.test(nuevo)) return null;
  if (current.some((d, i) => i !== index && d.nombre === nuevo)) return null;

  const renombrada = renameRefs(p, decl.nombre, nuevo);
  const bloque = getBlock(renombrada, "variables");
  if (!bloque) return null;
  return withBlock(renombrada, {
    ...bloque,
    declaraciones: bloque.declaraciones.map((d, i) =>
      i === index ? { ...d, nombre: nuevo } : d,
    ),
  });
}

/**
 * VB-B6 — `removeVariable`: elimina la variable en `index`. Si el
 * bloque queda vacío, lo elimina también. Si el índice está fuera
 * de rango, devuelve la plantilla sin cambios.
 */
export function removeVariable(p: Plantilla, index: number): Plantilla {
  const existing = getBlock(p, "variables");
  if (!existing) return p;
  const current = existing.declaraciones;
  if (index < 0 || index >= current.length) return p;
  const next = current.filter((_, i) => i !== index);
  if (next.length === 0) return withoutBlock(p, "variables");
  return withBlock(p, { ...existing, declaraciones: next });
}

/**
 * VB-B6 — factories de expresiones para los tipos más comunes
 * de variable. El form las usa al "+Añadir" para arrancar con un
 * seed razonable según el tipo elegido.
 */
export function makeRandomIntExpr(lo: number, hi: number): Expr {
  return {
    kind: "fun_call",
    name: "random",
    args: [numLit(lo), numLit(hi)],
    loc: DUMMY_LOC,
  };
}

export function makeRandomFloatExpr(lo: number, hi: number): Expr {
  return {
    kind: "fun_call",
    name: "random_float",
    args: [numLit(lo), numLit(hi)],
    loc: DUMMY_LOC,
  };
}

export function makeListExpr(items: string[]): Expr {
  return arrayLit(
    items.map((s) => {
      // Intentamos como número si parece un número, si no como string.
      const n = Number(s);
      if (s.trim() !== "" && Number.isFinite(n)) return numLit(n);
      return strLit(s);
    }),
  );
}

/** VB-B6 — clasifica la `Expr` de una variable en uno de los tipos
 *  editables del form. Usado para inicializar los inputs cuando el
 *  usuario edita una variable existente (no asumimos un tipo
 *  hardcodeado).
 *
 *  El subtipo "Rango" se retiró (2026-07-26): escribía `rango(lo, hi)`, una
 *  función que VBLang nunca tuvo (no está en `BUILTIN_NAMES`), así que toda
 *  variable creada así fallaba al generar con "función desconocida: rango".
 *  Su intención —un valor entre Inicio y Fin— es exactamente `random(lo, hi)`.
 *  No había ninguna plantilla que lo usara, ni en el repo ni en la base. */
export type VariableKind = "random-int" | "random-float" | "list" | "expr";

export function classifyVariable(expr: Expr): VariableKind {
  if (expr.kind === "fun_call") {
    switch (expr.name) {
      case "random":
        return "random-int";
      case "random_float":
        return "random-float";
      case "uno_de":
      case "choice":
        return "list";
      default:
        return "expr";
    }
  }
  if (expr.kind === "array") {
    return "list";
  }
  return "expr";
}

/**
 * PLAN tiza-autoria-avanzada §0 — ítems de una lista, o `null` si la expresión
 * no es una lista. Cubre las tres formas que acepta el DSL: array desnudo
 * (`[1, 2]`), `uno_de([...])`/`choice([...])` y los argumentos sueltos
 * (`uno_de(1, 2)`).
 */
export function listItemExprs(expr: Expr): Expr[] | null {
  if (expr.kind === "array") return expr.items;
  if (expr.kind === "fun_call" && (expr.name === "uno_de" || expr.name === "choice")) {
    const primero = expr.args[0];
    if (primero?.kind === "array") return primero.items;
    return expr.args;
  }
  return null;
}

/**
 * PLAN tiza-autoria-avanzada §0 — ¿esta lista se puede editar como texto sin
 * perder nada?
 *
 * Sólo si cada ítem es un literal de string o de número. Un array de OBJETOS
 * (`[{ nombre: "Argentina", iso: "ARG" }]`, que es lo que usa la plantilla de
 * ejemplo del mapa) o una lista por referencia (`uno_de(paises)`) se veía como
 * texto plano en los editores y el round-trip la destruía: los objetos volvían
 * como strings escapados —matando `{pais.capital}`— y la referencia volvía como
 * lista vacía. El linter lo cantaba después, con la plantilla ya arruinada.
 *
 * Los editores usan esto para NO ofrecer el editor de lista en esos casos y
 * mandar a modo Código, que es de fidelidad total.
 */
export function listaEditableComoTexto(expr: Expr): boolean {
  const items = listItemExprs(expr);
  if (items === null) return false;
  // Una lista vacía sí es editable (es el punto de partida para llenarla).
  return items.every((it) => it.kind === "str" || numLiteral(it) !== null);
}

/**
 * PLAN tiza-autoria-avanzada §0 — reescribe los ítems de una lista
 * **conservando su forma**. Antes los editores escribían siempre
 * `uno_de([...])`, así que a un array desnudo le aparecía un wrapper que no
 * tenía y `uno_de(paises)` pasaba a recibir un string en vez de un array.
 */
export function withListItems(expr: Expr, items: string[]): Expr {
  const lista = makeListExpr(items);
  if (expr.kind === "array") return lista;
  if (expr.kind === "fun_call" && (expr.name === "uno_de" || expr.name === "choice")) {
    return { ...expr, args: [lista] };
  }
  // No era una lista todavía (subtipo recién cambiado): forma canónica.
  return { kind: "fun_call", name: "uno_de", args: [lista], loc: DUMMY_LOC };
}

/**
 * Estima cuántas combinaciones distintas puede generar la plantilla a partir de
 * sus variables: producto de los rangos `random(min,max)` y los `uno_de([...])`.
 * `continuo` indica que hay valores continuos (`random_float`) → "muchas".
 */
export function combinacionesPosibles(p: Plantilla): {
  total: number;
  continuo: boolean;
} {
  const decls = getBlock(p, "variables")?.declaraciones ?? [];
  let total = 1;
  let continuo = false;
  for (const d of decls) {
    const e = d.expr;
    if (e.kind === "fun_call" && e.name === "random" && e.args.length === 2) {
      const lo = e.args[0];
      const hi = e.args[1];
      if (lo.kind === "num" && hi.kind === "num") {
        total *= Math.max(1, Math.floor(hi.value - lo.value + 1));
      }
    } else if (
      e.kind === "fun_call" &&
      e.name === "uno_de" &&
      e.args[0]?.kind === "array"
    ) {
      total *= Math.max(1, e.args[0].items.length);
    } else if (e.kind === "fun_call" && e.name === "random_float") {
      continuo = true;
    }
  }
  return { total, continuo };
}

/** Bloques no cubiertos por la UI schema-driven (se preservan read-only). */
const HANDLED_BLOCKS = new Set<Bloque["kind"]>([
  "enunciado",
  // `enunciados:` (plural) SÍ se edita (EnunciadoField → lista de variantes);
  // faltaba acá y `unhandledBlocks` lo reportaba como no manejado por error.
  "enunciados",
  "tipo",
  "respuesta",
  "respuestas_validas",
  "respuesta_iso",
  // WO-1: respuesta por nombre (alternativa a respuesta_iso en el mapa).
  "respuesta_nombre",
  "respuesta_orden",
  "etiquetas_pedidas",
  "opciones_explicitas",
  "mapa",
  "texto_analizar",
  "unidad",
  "tolerancia",
  // WO-1: tolerancia absoluta (número crudo, junto a la relativa).
  "tolerancia_abs",
  "correccion",
  // PLAN-E §21 Parte A — selección múltiple.
  "multiple",
  "puntaje_parcial",
  // PLAN-E §21 Parte B — análisis por rangos de palabras.
  "spans_pedidos",
  "etiquetas_disponibles",
  "generador",
  "variables",
  // WO-1: restricciones (dash-list de fórmulas) y pistas escalonadas (plural).
  "restricciones",
  "pistas",
  // WO-1: explicación que se muestra tras responder.
  "explicacion",
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
