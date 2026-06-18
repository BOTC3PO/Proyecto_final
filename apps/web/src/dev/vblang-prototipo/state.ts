/**
 * State del prototipo VBLang 2.0.
 *
 * Mantenemos un state central con useReducer: la idea es que un mismo elemento
 * (la pregunta, una variable, un add-on) pueda ser seleccionado desde la
 * tarjeta central y editarse en el property grid a la derecha. El state es
 * mock: vive solo en memoria.
 *
 * El contrato `EditorProps` (compartido por todos los editores del property
 * grid) es la pieza clave: el property grid monta cada editor desde un
 * REGISTRO (mapa) en lugar de un switch gigante. Ver
 * `property-grid/registry.ts`.
 */
import { createContext, useContext } from "react";
import type { Dispatch } from "react";

/* ---------- Tipos de pregunta (12, según el prototipo) ---------- */

/**
 * Los 9 tipos que el editor real soporta + 3 que el prototipo "expone como
 * tarjeta visible" para mostrar el patrón (la versión 2.0 los agregará).
 *
 * Usamos ids estables (slug) distintos del `TipoPregunta` interno: la
 * intención del prototipo es representar la paleta visual completa de tipos,
 * no la realidad del schema actual.
 */
export type QuestionTypeId =
  | "input" // numérica
  | "mc" // opción múltiple
  | "vf" // V/F
  | "completar"
  | "abierta" // texto libre
  | "ordenar"
  | "analisis_sintactico"
  | "identificar_palabras"
  | "marcar_mapa" // selección en mapa
  | "emparejar" // no implementado en editor real
  | "codigo_formula" // no implementado en editor real
  | "visual"; // no implementado en editor real

export type QuestionCategory = "esencial" | "futuro";

export interface QuestionTypeMeta {
  id: QuestionTypeId;
  label: string;
  description: string;
  category: QuestionCategory;
  /** Glyph tipo "ícono emoji" para la card. Mantenemos texto para evitar
   *  acoplar al set de lucide (el prototipo no debe sumar dependencias). */
  glyph: string;
}

export const QUESTION_TYPES: QuestionTypeMeta[] = [
  { id: "input", label: "Numérica", description: "Respuesta con tolerancia.", category: "esencial", glyph: "1." },
  { id: "mc", label: "Opción múltiple", description: "Varias opciones; una correcta.", category: "esencial", glyph: "a/b" },
  { id: "vf", label: "Verdadero / Falso", description: "Afirmación a evaluar.", category: "esencial", glyph: "V/F" },
  { id: "completar", label: "Completar", description: "Huecos con respuestas válidas.", category: "esencial", glyph: "[…]" },
  { id: "abierta", label: "Texto libre", description: "Respuesta abierta, corrección manual.", category: "esencial", glyph: "“ ”" },
  { id: "ordenar", label: "Ordenar", description: "Reordenar un conjunto de ítems.", category: "esencial", glyph: "↕" },
  { id: "analisis_sintactico", label: "Análisis sintáctico", description: "Etiquetar palabras de una oración.", category: "esencial", glyph: "S→V" },
  { id: "identificar_palabras", label: "Identificar palabras", description: "Marcar las palabras correctas en un texto.", category: "esencial", glyph: "⊕⊖" },
  { id: "marcar_mapa", label: "Selección en mapa", description: "Señalar país/región en un mapa.", category: "esencial", glyph: "✦" },
  { id: "emparejar", label: "Emparejar", description: "Parejas concepto → definición.", category: "futuro", glyph: "↔" },
  { id: "codigo_formula", label: "Código / Fórmula", description: "Editor con resaltado de sintaxis.", category: "futuro", glyph: "</>" },
  { id: "visual", label: "Visual", description: "Imagen, gráfico, slider interactivo.", category: "futuro", glyph: "▦" },
];

/* ---------- Elementos seleccionables en la tarjeta central ---------- */

/**
 * Identifica un elemento de la tarjeta central. El property grid a la derecha
 * se monta a partir de este id. El cambio de tipo al clickear en la grilla
 * de tipos actualiza el `type` del `question` y resetea la selección.
 */
export type ElementId =
  | { kind: "question" }
  | { kind: "variable"; variableId: string }
  | { kind: "addOn"; addOnId: string };

/* ---------- Add-ons (bloques opcionales) ---------- */

export type AddOnKind = "hints" | "explanation" | "steps" | "restricciones" | "unidad" | "dataset" | "imagen";

export interface AddOn {
  id: string;
  kind: AddOnKind;
  /** Resumen para mostrar en el bloque plegado (ej. "Pistas (2)"). */
  summary: string;
  expanded: boolean;
  /** Datos del add-on, forma libre según `kind`. */
  data: AddOnData;
}

export type AddOnData =
  | { kind: "hints"; items: string[] }
  | { kind: "explanation"; text: string }
  | { kind: "steps"; items: string[] }
  | { kind: "restricciones"; items: string[] }
  | { kind: "unidad"; value: string }
  | { kind: "dataset"; datasetId: string; column: string }
  | { kind: "imagen"; src: string; alt: string };

/* ---------- Variables ---------- */

export type VarType = "int" | "float" | "list" | "rango";

export interface ProtoVariable {
  id: string;
  name: string;
  type: VarType;
  min?: number;
  max?: number;
  expression: string;
  /** Valor del último preview, para mostrar "ahora: 7". */
  currentValue: number | number[] | string;
}

/* ---------- Pregunta (modelo mock) ---------- */

export interface ProtoQuestion {
  type: QuestionTypeId;
  enunciado: string;
  /** Para numérica: el valor correcto (mock). */
  respuesta?: string;
  /** Para numérica: tolerancia. */
  tolerancia?: number;
  /** Opciones, solo para mc. */
  opciones?: { id: string; label: string; correct: boolean }[];
  /** Para vf: true = verdadero, false = falso. */
  vfAnswer?: boolean;
  /** Para completar: respuestas válidas. */
  completarAnswers?: string[];
  /** Para ordenar: ítems. */
  ordenarItems?: { id: string; label: string }[];
  /** Texto / párrafo, para abierta / sintaxis / identificación. */
  bodyText?: string;
  /** Mapa, etc. */
}

/* ---------- State central + acciones ---------- */

export interface PrototypeState {
  question: ProtoQuestion;
  variables: ProtoVariable[];
  addOns: AddOn[];
  selected: ElementId;
  /** Cambia cuando el usuario clickea "Regenerar" en el preview. */
  seed: number;
  /** Si el panel "Código generado" está abierto. */
  showCode: boolean;
  /** Estado del menú "+ Añadir". */
  addMenuOpen: boolean;
}

export type Action =
  | { type: "setType"; questionType: QuestionTypeId }
  | { type: "setEnunciado"; value: string }
  | { type: "setRespuesta"; value: string }
  | { type: "setTolerancia"; value: number }
  | { type: "setOpciones"; opciones: ProtoQuestion["opciones"] }
  | { type: "setVfAnswer"; value: boolean }
  | { type: "setVariable"; variableId: string; patch: Partial<ProtoVariable> }
  | { type: "addAddOn"; addOn: AddOn }
  | { type: "removeAddOn"; addOnId: string }
  | { type: "toggleAddOn"; addOnId: string }
  | { type: "updateAddOn"; addOnId: string; data: AddOnData }
  | { type: "select"; element: ElementId }
  | { type: "regenerate" }
  | { type: "setShowCode"; value: boolean }
  | { type: "setAddMenuOpen"; value: boolean };

/* ---------- Helpers para el reducer ---------- */

export function reducer(state: PrototypeState, action: Action): PrototypeState {
  switch (action.type) {
    case "setType": {
      // Al cambiar de tipo, reseteamos la selección al "question" (la grilla
      // muestra el tipo nuevo). El mock de question se reemplaza por uno
      // coherente con el tipo — ver `defaultQuestionFor`.
      return {
        ...state,
        question: defaultQuestionFor(action.questionType),
        selected: { kind: "question" },
      };
    }
    case "setEnunciado":
      return { ...state, question: { ...state.question, enunciado: action.value } };
    case "setRespuesta":
      return { ...state, question: { ...state.question, respuesta: action.value } };
    case "setTolerancia":
      return { ...state, question: { ...state.question, tolerancia: action.value } };
    case "setOpciones":
      return { ...state, question: { ...state.question, opciones: action.opciones } };
    case "setVfAnswer":
      return { ...state, question: { ...state.question, vfAnswer: action.value } };
    case "setVariable":
      return {
        ...state,
        variables: state.variables.map((v) =>
          v.id === action.variableId ? { ...v, ...action.patch } : v,
        ),
      };
    case "addAddOn":
      return { ...state, addOns: [...state.addOns, action.addOn] };
    case "removeAddOn":
      return { ...state, addOns: state.addOns.filter((a) => a.id !== action.addOnId) };
    case "toggleAddOn":
      return {
        ...state,
        addOns: state.addOns.map((a) =>
          a.id === action.addOnId ? { ...a, expanded: !a.expanded } : a,
        ),
      };
    case "updateAddOn":
      return {
        ...state,
        addOns: state.addOns.map((a) =>
          a.id === action.addOnId ? { ...a, data: action.data } : a,
        ),
      };
    case "select":
      return { ...state, selected: action.element };
    case "regenerate":
      return { ...state, seed: state.seed + 1 };
    case "setShowCode":
      return { ...state, showCode: action.value };
    case "setAddMenuOpen":
      return { ...state, addMenuOpen: action.value };
  }
}

/**
 * Devuelve un `ProtoQuestion` "vacío pero coherente" para un tipo dado. Se usa
 * cuando el usuario cambia de tipo en la grilla. Mock: no valida nada.
 */
function defaultQuestionFor(type: QuestionTypeId): ProtoQuestion {
  const enunciado = "¿Cuánto es {a} × {b}?";
  switch (type) {
    case "input":
      return { type, enunciado, respuesta: "a * b", tolerancia: 0 };
    case "mc":
      return {
        type,
        enunciado: "¿Cuál es la capital de {pais}?",
        opciones: [
          { id: "o1", label: "{capCorrecta}", correct: true },
          { id: "o2", label: "Opción B", correct: false },
          { id: "o3", label: "Opción C", correct: false },
        ],
      };
    case "vf":
      return { type, enunciado: "{pais} está en {continente}.", vfAnswer: true };
    case "completar":
      return { type, enunciado: "La capital de Francia es __.", completarAnswers: ["París"] };
    case "abierta":
      return { type, enunciado: "Explicá con tus palabras qué es la fotosíntesis." };
    case "ordenar":
      return {
        type,
        enunciado: "Ordená estos eventos cronológicamente.",
        ordenarItems: [
          { id: "i1", label: "Primer evento" },
          { id: "i2", label: "Segundo evento" },
          { id: "i3", label: "Tercer evento" },
        ],
      };
    case "analisis_sintactico":
      return { type, enunciado: "Etiquetá sintácticamente la oración.", bodyText: "El gato negro duerme." };
    case "identificar_palabras":
      return { type, enunciado: "Marcá los sustantivos en el texto.", bodyText: "El perro corre por el parque." };
    case "marcar_mapa":
      return { type, enunciado: "Señalá {pais} en el mapa." };
    case "emparejar":
      return { type, enunciado: "Emparejá cada concepto con su definición." };
    case "codigo_formula":
      return { type, enunciado: "Escribí la fórmula de {concepto}." };
    case "visual":
      return { type, enunciado: "Interacción visual (gráfico / slider)." };
  }
}

/* ---------- Context del state + dispatch ---------- */

interface PrototypeCtxValue {
  state: PrototypeState;
  dispatch: Dispatch<Action>;
}

export const PrototypeContext = createContext<PrototypeCtxValue | null>(null);

export function usePrototype(): PrototypeCtxValue {
  const ctx = useContext(PrototypeContext);
  if (!ctx) {
    throw new Error("usePrototype debe usarse dentro de <PrototypeContext.Provider>");
  }
  return ctx;
}
