/**
 * Vocabulario de campos del editor schema-driven de VBLang (work order 06).
 *
 * Un "campo" es la unidad declarativa que un único renderer dibuja. Cada campo
 * mapea a UN bloque del AST. La fuente de verdad sigue siendo el parser/validate:
 * el schema sólo describe la UI, nunca relaja ni reemplaza la validación.
 *
 * El vocabulario es deliberadamente chico: `number` (con negativos, arreglados
 * en WO01), `text`, `bool`, `enum`, y la lista repetible de primera clase
 * (`list`). La lista emite las dash-lists que el parser ya soporta.
 *
 * IMPORTANTE: esto es composición a NIVEL editor de plantilla. NO incluye nada
 * de serie/pool/puntos (eso es a nivel quiz, WO05) ni lo mete en el DSL.
 */
import type { BloqueKind } from "../parser/ast.js";

/**
 * Bloques dash-list que el parser soporta y que una lista repetible puede
 * emitir (cada fila = un ítem `- ...`).
 */
export type DashListBlock =
  | "opciones_explicitas"
  | "respuestas_validas"
  | "pasos"
  | "etiquetas_pedidas"
  | "restricciones";

export const DASH_LIST_BLOCKS: readonly DashListBlock[] = [
  "opciones_explicitas",
  "respuestas_validas",
  "pasos",
  "etiquetas_pedidas",
  "restricciones",
] as const;

export type FieldKind = "number" | "text" | "bool" | "enum" | "list";

interface FieldBase {
  /** Clave lógica estable del campo (para el estado del form). */
  key: string;
  /** Etiqueta visible y accesible (label asociado al control). */
  label: string;
  /** Ayuda corta opcional. */
  help?: string;
  /** Si el campo es obligatorio para que el `tipo` sea válido ante el parser. */
  required: boolean;
  /** Bloque del AST que este campo materializa. */
  block: BloqueKind;
}

export interface NumberField extends FieldBase {
  kind: "number";
  /** Los negativos están soportados (bug arreglado en WO01). */
  allowNegative: boolean;
}

export interface TextField extends FieldBase {
  kind: "text";
  /** Multilínea (textarea) vs single-line. */
  multiline?: boolean;
  /** Acepta interpolaciones `{var}` (enunciado, pasos). */
  interpolable?: boolean;
  /** El valor se parsea como expresión VBLang (respuesta, respuesta_orden, …). */
  expression?: boolean;
}

export interface BoolField extends FieldBase {
  kind: "bool";
}

export interface EnumOption {
  value: string;
  label: string;
}

export interface EnumField extends FieldBase {
  kind: "enum";
  options: EnumOption[];
}

/** Forma de cada fila de una lista repetible. */
export type ListItemShape =
  /** Texto plano (opciones_explicitas como strings, respuestas_validas). */
  | "string"
  /** Expresión VBLang (restricciones, items expr). */
  | "expression"
  /** Texto con interpolaciones `{var}` (pasos). */
  | "interpolable"
  /** Objeto `{ palabra, etiqueta }` (etiquetas_pedidas). */
  | "etiqueta";

export interface ListField extends FieldBase {
  kind: "list";
  /** Bloque dash-list que emite. Invariante: `emits === block`. */
  emits: DashListBlock;
  /** Forma de cada ítem. */
  itemShape: ListItemShape;
  /** Mínimo de ítems para que el tipo sea válido. */
  minItems?: number;
}

export type Field = NumberField | TextField | BoolField | EnumField | ListField;
