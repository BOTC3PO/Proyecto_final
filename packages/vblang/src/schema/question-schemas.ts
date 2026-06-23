/**
 * Schemas declarativos de los tipos de pregunta genéricos de VBLang (WO06).
 *
 * Cada `QuestionTypeSchema` describe los campos que un editor schema-driven debe
 * dibujar para armar ese tipo de punta a punta, junto a un `sampleDsl` mínimo y
 * válido. El test `tests/schema/concordance.test.ts` verifica que schema y
 * parser CONCUERDAN: el sample parsea, infiere el `tipo` esperado, no produce
 * errores de lint estructural, round-trip es lossless, y cada campo obligatorio
 * está presente en el AST resultante.
 *
 * Los generadores (base "generador") y las visuales (add-on PNG/gráficos) son
 * piezas aparte: estos schemas cubren sólo la base "tipo genérico".
 */
import type { TipoPregunta } from "../parser/ast.js";
import type { Field, TextField } from "./field-types.js";

export interface QuestionTypeSchema {
  /** Tipo de pregunta (coincide con `Plantilla.tipoInferido`). */
  tipo: TipoPregunta;
  /** Etiqueta visible para el selector de base. */
  label: string;
  /** Descripción corta para el editor. */
  descripcion: string;
  /**
   * Si el parser necesita un bloque `tipo:` explícito para inferir este tipo.
   * (Ej.: `mc`/`vf`/`completar`/`identificar_palabras` sí; `ordenar`/
   * `marcar_mapa`/`analisis_sintactico` se infieren de sus bloques de respuesta.)
   */
  declaraTipo: boolean;
  /** Campos del tipo, en orden de presentación. */
  fields: Field[];
  /**
   * DSL mínimo válido que materializa los campos obligatorios. Prueba viva de
   * la concordancia schema ↔ parser.
   */
  sampleDsl: string;
}

/** Campo enunciado, común a todos los tipos. */
function enunciadoField(): TextField {
  return {
    kind: "text",
    key: "enunciado",
    label: "Enunciado",
    help: "Texto de la consigna. Podés interpolar variables con {var}.",
    required: true,
    block: "enunciado",
    multiline: true,
    interpolable: true,
  };
}

// WO-11 — schema de tipo `expresion` (respuesta simbólica). El alumno
// escribe una expresión algebraica; la corrección es por equivalencia
// simbólica (numérica + algebraica vía math.simplify), no por
// tolerancia numérica ni por igualdad de string. El input esperado
// es notación math.js: `2*x+4` (no `2x+4`), `x^2+1`, paréntesis
// para agrupar. Ver `docs/vblang/wo-11-eje-simbolico.md` §4.
const expresionSchema: QuestionTypeSchema = {
  tipo: "expresion",
  label: "Respuesta simbólica (expresión algebraica)",
  descripcion:
    "El alumno escribe una expresión algebraica. Se acepta cualquier forma equivalente (ej. '2x+4' y '2(x+2)' cuentan igual); se rechaza si la forma es distinta como función (ej. '2x+4' vs '2x+5').",
  declaraTipo: false,
  fields: [
    enunciadoField(),
    {
      kind: "text",
      key: "respuesta_expr",
      label: "Expresión esperada",
      help:
        "Expresión VBLang que evalúa a un string con notación math.js (ej. '2*x+4', 'x^2+1'). Se compara por equivalencia simbólica.",
      required: true,
      block: "respuesta_expr",
      expression: true,
    },
  ],
  sampleDsl: `enunciado: "Factoriza: 6x + 12"
respuesta_expr: "6*(x+2)"
`,
};

const inputSchema: QuestionTypeSchema = {
  tipo: "input",
  label: "Respuesta numérica / abierta corta",
  descripcion:
    "El alumno escribe una respuesta. Se corrige por igualdad o por tolerancia.",
  declaraTipo: false,
  fields: [
    enunciadoField(),
    {
      kind: "text",
      key: "respuesta",
      label: "Respuesta correcta",
      help: "Expresión VBLang. Puede usar las variables (ej.: a + b).",
      required: true,
      block: "respuesta",
      expression: true,
    },
    {
      kind: "number",
      key: "tolerancia",
      label: "Tolerancia",
      help: "Margen aceptado. Opcional.",
      required: false,
      block: "tolerancia",
      allowNegative: false,
    },
    {
      kind: "text",
      key: "unidad",
      label: "Unidad",
      help: "Unidad esperada (ej.: m/s). Opcional.",
      required: false,
      block: "unidad",
    },
  ],
  sampleDsl: `enunciado: "¿Cuál es la capital de Francia?"
respuesta: "París"
`,
};

const mcSchema: QuestionTypeSchema = {
  tipo: "mc",
  label: "Opción múltiple",
  descripcion: "Varias opciones; una correcta.",
  declaraTipo: true,
  fields: [
    enunciadoField(),
    {
      kind: "list",
      key: "opciones",
      label: "Opciones",
      help: "Las opciones a presentar (incluida la correcta).",
      required: true,
      block: "opciones_explicitas",
      emits: "opciones_explicitas",
      itemShape: "string",
      minItems: 2,
    },
    {
      kind: "text",
      key: "respuesta",
      label: "Respuesta correcta",
      help: "Texto exacto de la opción correcta.",
      required: true,
      block: "respuesta",
    },
  ],
  sampleDsl: `enunciado: "¿Cuál es un número primo?"
tipo: mc
opciones_explicitas:
  - "4"
  - "6"
  - "7"
respuesta: "7"
`,
};

const vfSchema: QuestionTypeSchema = {
  tipo: "vf",
  label: "Verdadero / Falso",
  descripcion: "Afirmación a evaluar como verdadera o falsa.",
  declaraTipo: true,
  fields: [
    enunciadoField(),
    {
      kind: "bool",
      key: "respuesta",
      label: "¿La afirmación es verdadera?",
      required: true,
      block: "respuesta",
    },
  ],
  sampleDsl: `enunciado: "El Sol es una estrella."
tipo: vf
respuesta: verdadero
`,
};

const completarSchema: QuestionTypeSchema = {
  tipo: "completar",
  label: "Completar",
  descripcion: "El alumno completa un hueco; se aceptan varias respuestas.",
  declaraTipo: true,
  fields: [
    enunciadoField(),
    {
      kind: "list",
      key: "respuestas_validas",
      label: "Respuestas válidas",
      help: "Todas las respuestas que se aceptan como correctas.",
      required: true,
      block: "respuestas_validas",
      emits: "respuestas_validas",
      itemShape: "string",
      minItems: 1,
    },
  ],
  sampleDsl: `enunciado: "La capital de Francia es ___."
tipo: completar
respuestas_validas:
  - "París"
  - "Paris"
`,
};

const ordenarSchema: QuestionTypeSchema = {
  tipo: "ordenar",
  label: "Ordenar",
  descripcion: "El alumno ordena un conjunto de ítems.",
  // Se infiere de `respuesta_orden`, pero declaramos `tipo:` para que sea explícito.
  declaraTipo: true,
  fields: [
    enunciadoField(),
    {
      kind: "list",
      key: "items",
      label: "Ítems a ordenar",
      help: "Los ítems que se presentan (mezclados) al alumno.",
      required: true,
      block: "opciones_explicitas",
      emits: "opciones_explicitas",
      itemShape: "string",
      minItems: 2,
    },
    {
      kind: "text",
      key: "respuesta_orden",
      label: "Orden correcto",
      help: 'Arreglo con el orden correcto, ej.: ["1", "2", "3"].',
      required: true,
      block: "respuesta_orden",
      expression: true,
    },
  ],
  sampleDsl: `enunciado: "Ordená de menor a mayor."
tipo: ordenar
opciones_explicitas:
  - "1"
  - "2"
  - "3"
respuesta_orden: ["1", "2", "3"]
`,
};

const marcarMapaSchema: QuestionTypeSchema = {
  tipo: "marcar_mapa",
  label: "Marcar en el mapa",
  descripcion: "El alumno selecciona un país o provincia en un mapa.",
  declaraTipo: true,
  fields: [
    enunciadoField(),
    {
      kind: "enum",
      key: "mapa",
      label: "Mapa",
      help: "Identificador del mapa a cargar.",
      required: true,
      block: "mapa",
      options: [
        { value: "world_countries", label: "Países del mundo" },
        { value: "world_states_provinces", label: "Provincias / estados (por país)" },
        { value: "world_cities", label: "Ciudades" },
      ],
    },
    {
      kind: "text",
      key: "respuesta_iso",
      label: "Código ISO correcto",
      help: "Para países: ISO A3 (ej. ARG). Para provincias: ISO 3166-2 (ej. AR-C para CABA).",
      required: true,
      block: "respuesta_iso",
    },
  ],
  sampleDsl: `enunciado: "Marcá Argentina en el mapa."
tipo: marcar_mapa
mapa: world_countries
respuesta_iso: "ARG"
`,
};

const analisisSintacticoSchema: QuestionTypeSchema = {
  tipo: "analisis_sintactico",
  label: "Análisis sintáctico",
  descripcion: "El alumno etiqueta palabras de una oración.",
  declaraTipo: true,
  fields: [
    enunciadoField(),
    {
      kind: "text",
      key: "texto_analizar",
      label: "Texto a analizar",
      help: "La oración que el alumno debe analizar.",
      required: true,
      block: "texto_analizar",
    },
    {
      kind: "list",
      key: "etiquetas_pedidas",
      label: "Etiquetas pedidas",
      help: "Pares palabra → etiqueta (la respuesta correcta).",
      required: true,
      block: "etiquetas_pedidas",
      emits: "etiquetas_pedidas",
      itemShape: "etiqueta",
      minItems: 1,
    },
  ],
  sampleDsl: `enunciado: "Analizá la oración."
tipo: analisis_sintactico
texto_analizar: "el gato duerme"
etiquetas_pedidas:
  - { palabra: "gato", etiqueta: "sustantivo" }
  - { palabra: "duerme", etiqueta: "verbo" }
`,
};

const identificarPalabrasSchema: QuestionTypeSchema = {
  tipo: "identificar_palabras",
  label: "Identificar palabras",
  descripcion: "El alumno marca las palabras correctas dentro de un texto.",
  declaraTipo: true,
  fields: [
    enunciadoField(),
    {
      kind: "text",
      key: "texto_analizar",
      label: "Texto",
      help: "El texto del que el alumno marca palabras.",
      required: true,
      block: "texto_analizar",
    },
    {
      kind: "list",
      key: "respuestas_validas",
      label: "Palabras correctas",
      help: "Las palabras que cuentan como correctas.",
      required: true,
      block: "respuestas_validas",
      emits: "respuestas_validas",
      itemShape: "string",
      minItems: 1,
    },
  ],
  sampleDsl: `enunciado: "Identificá los sustantivos."
tipo: identificar_palabras
texto_analizar: "el gato come pescado"
respuestas_validas:
  - "gato"
  - "pescado"
`,
};

const abiertaSchema: QuestionTypeSchema = {
  tipo: "abierta",
  label: "Pregunta abierta",
  descripcion:
    "El alumno escribe libremente. No lleva clave de respuesta: es informativa " +
    "(no puntúa) o la corrige el profe a mano (crédito parcial).",
  declaraTipo: true,
  fields: [
    enunciadoField(),
    {
      kind: "enum",
      key: "correccion",
      label: "Corrección",
      help:
        "ninguna: informativa, no afecta la nota. manual: la corrige el profe " +
        "asignando puntaje parcial.",
      required: true,
      block: "correccion",
      options: [
        { value: "ninguna", label: "Ninguna (informativa, no puntúa)" },
        { value: "manual", label: "Manual (la corrige el profe)" },
      ],
    },
  ],
  sampleDsl: `enunciado: "Explicá con tus palabras qué es la fotosíntesis."
tipo: abierta
correccion: manual
`,
};

/** Schemas de los tipos genéricos, indexados por `tipo`. */
export const QUESTION_TYPE_SCHEMAS: Record<TipoPregunta, QuestionTypeSchema> = {
  input: inputSchema,
  mc: mcSchema,
  vf: vfSchema,
  completar: completarSchema,
  ordenar: ordenarSchema,
  marcar_mapa: marcarMapaSchema,
  analisis_sintactico: analisisSintacticoSchema,
  identificar_palabras: identificarPalabrasSchema,
  abierta: abiertaSchema,
  // WO-11 — respuesta simbólica. Schema aditivo.
  expresion: expresionSchema,
};

/** Lista ordenada de tipos soportados por la base "tipo genérico". */
export const ALL_QUESTION_TYPES: TipoPregunta[] = [
  "input",
  "mc",
  "vf",
  "completar",
  "ordenar",
  "marcar_mapa",
  "analisis_sintactico",
  "identificar_palabras",
  "abierta",
  // WO-11 — simbólico al final (tipo más nuevo, aún en adopción).
  "expresion",
];

/** Lookup por tipo (helper para el renderer). */
export function getQuestionSchema(tipo: TipoPregunta): QuestionTypeSchema {
  return QUESTION_TYPE_SCHEMAS[tipo];
}
