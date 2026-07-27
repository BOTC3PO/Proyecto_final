/**
 * components/vblang/TizaEditor.tsx — WO-V2d
 *
 * Capa de presentación + edición contextual del editor Tiza:
 *   • TizaQuestionCard: tarjeta de presentación del centro (read-outs en vivo,
 *     chips de variables clicables, pistas con badges, "Añadir bloque").
 *   • TizaPropertyGrid: property grid contextual a la derecha (pregunta vs variable).
 *
 * Reusa plantillaFields/plantillaAst para el round-trip y no duplica lógica de datos.
 * Tokens-only.
 */
import {
  useEffect,
  useId,
  useRef,
  useState,
  useMemo,
  type CSSProperties,
  type InputHTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import {
  type Expr,
  type Field,
  type ListField,
  type Plantilla,
  type TextField,
  type TipoPregunta,
  type VariableDecl,
  ALL_QUESTION_TYPES,
  QUESTION_TYPE_SCHEMAS,
  usaToleranciaPorDefecto,
} from "@vb/vblang";
import Menu from "../../ui/Menu";
import CodeEditor from "../../editor/CodeEditor";
import ValidationReport from "./ValidationReport";
import type { ValidationState } from "../../hooks/usePlantillaValidation";
// Etapa 2 (Tiza — preguntas nativas) — se alía el import para no chocar con
// `TipoPregunta` de `@vb/vblang` (el tipo de PREGUNTA — vf/opciones/input…),
// que es un concepto totalmente distinto del ROL de la pregunta DENTRO del
// cuestionario (obligatoria/relleno).
import type { TipoPregunta as RolPreguntaQuiz } from "../../domain/quiz/preguntas";
import type { Dificultad as DificultadPregunta } from "../../domain/quiz/posiciones";
import {
  applyTipo,
  applyGenerador,
  readTextField,
  readNumberField,
  readBoolField,
  readEnumField,
  readListStrings,
  readEtiquetas,
  readSpans,
  writeTextField,
  writeNumberField,
  writeBoolField,
  writeEnumField,
  writeListStrings,
  writeEtiquetas,
  writeSpans,
  type EtiquetaRow,
  type SpanRow,
  updateVariable,
  renameVariable,
  addVariable,
  removeVariable,
  makeRandomIntExpr,
  makeRandomFloatExpr,
  makeListExpr,
  listaEditableComoTexto,
  withListItems,
} from "./plantillaFields";
import GeneradorPicker from "./GeneradorPicker";
import {
  getBlock,
  exprToText,
  exprToStringValue,
  textToExpr,
  numLit,
  numLiteral,
  DUMMY_LOC,
  readPistas,
  writePistas,
  readPasos,
  writePasos,
  readRestricciones,
  writeRestricciones,
  readEnunciados,
  writeEnunciados,
  enunciadoToVariantes,
  variantesToEnunciado,
  readExplicacion,
  writeExplicacion,
  withBlock,
  withoutBlock,
} from "./plantillaAst";

import { listDatasets } from "../../domain/vblang/datasetApi";
import type { DatasetListItem } from "../../domain/vblang/dataset.types";
import { useI18n } from "../../i18n/I18nContext";
/* ─── tipos ─────────────────────────────────────────────────────────── */

// Valor sintético del <select> de tipo para la base generador (legacy): no es
// un `TipoPregunta` del DSL, sólo la forma de elegir "esta pregunta la arma un
// generador" desde el mismo control que el resto de los tipos.
const GENERADOR_TIPO_VALUE = "__generador";

// Etiqueta i18n por tipo de pregunta. Fuente de las labels: QUESTION_TYPE_SCHEMAS
// (paquete @vb/vblang, en español); acá las traducimos por id en runtime.
export const TIPO_PREGUNTA_KEY: Record<string, string> = {
  input: "tipoPregunta.input",
  mc: "tipoPregunta.mc",
  vf: "tipoPregunta.vf",
  completar: "tipoPregunta.completar",
  ordenar: "tipoPregunta.ordenar",
  marcar_mapa: "tipoPregunta.marcarMapa",
  analisis_sintactico: "tipoPregunta.analisisSintactico",
  analisis_spans: "tipoPregunta.analisisSpans",
  identificar_palabras: "tipoPregunta.identificarPalabras",
  abierta: "tipoPregunta.abierta",
  expresion: "tipoPregunta.expresion",
};

// Etiqueta i18n por tipo de pregunta para la descripción corta (bajo el
// selector de tipo). Misma fuente que TIPO_PREGUNTA_KEY: QUESTION_TYPE_SCHEMAS
// (@vb/vblang) trae el texto en español, acá lo traducimos por id.
export const TIPO_PREGUNTA_DESCRIPCION_KEY: Record<string, string> = {
  input: "tipoPregunta.inputDescripcion",
  mc: "tipoPregunta.mcDescripcion",
  vf: "tipoPregunta.vfDescripcion",
  completar: "tipoPregunta.completarDescripcion",
  ordenar: "tipoPregunta.ordenarDescripcion",
  marcar_mapa: "tipoPregunta.marcarMapaDescripcion",
  analisis_sintactico: "tipoPregunta.analisisSintacticoDescripcion",
  analisis_spans: "tipoPregunta.analisisSpansDescripcion",
  identificar_palabras: "tipoPregunta.identificarPalabrasDescripcion",
  abierta: "tipoPregunta.abiertaDescripcion",
  expresion: "tipoPregunta.expresionDescripcion",
};

export type TizaSelection =
  | { kind: "pregunta" }
  | { kind: "variable"; index: number };

export interface LiveValues {
  /** Valores de las variables en el primer preview exitoso. */
  variables?: Record<string, unknown>;
  /** Valor resuelto de la respuesta (si aplica). */
  respuesta?: string;
  /** Tolerancia absoluta resuelta (si aplica). */
  toleranciaAbs?: number;
}

export interface TizaQuestionCardProps {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  selection: TizaSelection;
  onSelectQuestion: () => void;
  onSelectVariable: (index: number) => void;
  live: LiveValues;
}

export interface TizaPropertyGridProps {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  selection: TizaSelection;
  onSelectQuestion: () => void;
  live: LiveValues;
  validation?: ValidationState;
  /**
   * Etapa 2 (Tiza — preguntas nativas) — rol de ESTA pregunta dentro del
   * cuestionario (obligatoria/relleno + límite/pool). `undefined` cuando el
   * editor no tiene `quizId` (plantilla suelta, standalone): la sección NO
   * se renderiza en ese caso — no tiene sentido sin un cuestionario.
   */
  quizMeta?: QuizPreguntaMeta;
  onChangeQuizMeta?: (next: QuizPreguntaMeta) => void;
  /** WO-tiza-config (Fase 3) — poolIds ya usados por otras preguntas del
   *  cuestionario, para sugerirlos en el input de Pool (datalist) y evitar
   *  typos que parten un pool en dos en silencio. */
  poolsDisponibles?: string[];
}

/**
 * Etapa 2 (Tiza — preguntas nativas) — metadatos de `PreguntaQuiz` editables
 * desde el property grid. Espejo liviano de los campos relevantes de
 * `PreguntaQuiz` (`domain/quiz/preguntas.ts`); NO incluye `plantillaId`
 * (lo resuelve el host, `PlantillaEditorTiza.tsx`, a partir de la pregunta
 * activa del rail). `dificultad`/`puntaje` se agregaron en WO-tiza-config
 * (Fase 3 del plan): el schema y el runtime ya los soportaban, faltaba la UI.
 */
export interface QuizPreguntaMeta {
  rol: RolPreguntaQuiz;
  /** Sólo aplica si `rol === "relleno"`. */
  maxRepeticiones?: number;
  /** Sólo aplica si `rol === "relleno"`. */
  poolId?: string;
  /** Dificultad de la pregunta (base del ruteo por dificultad, WO-14).
   *  `undefined` = sin asignar (el runtime la trata como intermedio). */
  dificultad?: DificultadPregunta;
  /** Peso de la pregunta en el puntaje. `undefined` = default (1). */
  puntaje?: number;
}

/* ─── helpers visuales ──────────────────────────────────────────────── */

const mono: CSSProperties = {
  fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
};

/** Numeración circular reusada por los bloques tipo lista (pistas, pasos, variantes). */
const numberBadgeStyle: CSSProperties = {
  width: 20,
  height: 20,
  flex: "0 0 auto",
  borderRadius: 6,
  background: "var(--c-accent-soft)",
  color: "var(--c-accent)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 11,
  fontWeight: 700,
};

/** Botón "×" de quitar ítem, reusado por los bloques tipo lista editables. */
const removeItemButtonStyle: CSSProperties = {
  flex: "0 0 auto",
  width: 30,
  height: 30,
  borderRadius: 8,
  border: "1px solid var(--c-border)",
  background: "var(--c-surface-2)",
  color: "var(--c-text-3)",
  cursor: "pointer",
  fontSize: 14,
  lineHeight: 1,
};

/** Botón de texto "＋ Otro ítem" / "Convertir…", reusado por los bloques tipo lista. */
const addLinkButtonStyle: CSSProperties = {
  marginTop: 2,
  fontSize: 12.5,
  fontWeight: 600,
  color: "var(--c-accent)",
  background: "transparent",
  border: 0,
  cursor: "pointer",
  padding: "4px 0",
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--c-text-3)",
        marginBottom: 7,
      }}
    >
      {children}
    </div>
  );
}

function inputStyle(monoSpace = false): CSSProperties {
  return {
    width: "100%",
    border: "1px solid var(--c-border)",
    borderRadius: "var(--r-md)",
    padding: "10px 12px",
    color: "var(--c-text)",
    background: "var(--c-surface-2)",
    outline: "none",
    fontSize: 13.5,
    lineHeight: 1.45,
    fontFamily: monoSpace
      ? "var(--font-mono-css, ui-monospace, monospace)"
      : "var(--font-sans)",
  };
}

/* ─── inputs con buffer local (anti-latencia / anti-doble-llave) ──────────
 * El `value` canónico se deriva del AST (con `partesToText`, que re-escapa
 * `{`→`{{`). Si la caja se controlara con ese valor, tipear `{` lo mostraría
 * como `{{` y borrarlo lo re-escaparía. Mientras la caja tiene foco usamos un
 * draft local (texto crudo) y emitimos al modelo en cada cambio; al perder el
 * foco volvemos al valor canónico. Así desaparecen la latencia y el doble {{. */
type BufferedTextareaProps = {
  value: string;
  onCommit: (v: string) => void;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange">;

function BufferedTextarea({ value, onCommit, onBlur, ...rest }: BufferedTextareaProps) {
  const [draft, setDraft] = useState<string | null>(null);
  return (
    <textarea
      {...rest}
      value={draft ?? value}
      onChange={(e) => {
        setDraft(e.target.value);
        onCommit(e.target.value);
      }}
      onBlur={(e) => {
        setDraft(null);
        onBlur?.(e);
      }}
    />
  );
}

type BufferedInputProps = {
  value: string;
  onCommit: (v: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

function BufferedInput({ value, onCommit, onBlur, ...rest }: BufferedInputProps) {
  const [draft, setDraft] = useState<string | null>(null);
  return (
    <input
      {...rest}
      value={draft ?? value}
      onChange={(e) => {
        setDraft(e.target.value);
        onCommit(e.target.value);
      }}
      onBlur={(e) => {
        setDraft(null);
        onBlur?.(e);
      }}
    />
  );
}

/* ─── helpers de lectura/escritura ──────────────────────────────────── */

function fieldByKey(p: Plantilla, key: string): TextField | null {
  const schema = QUESTION_TYPE_SCHEMAS[p.tipoInferido];
  if (!schema) return null;
  const f = schema.fields.find((x) => x.key === key);
  return f && f.kind === "text" ? (f as TextField) : null;
}

function numberFieldByKey(p: Plantilla, key: string): Field | null {
  const schema = QUESTION_TYPE_SCHEMAS[p.tipoInferido];
  if (!schema) return null;
  const f = schema.fields.find((x) => x.key === key);
  return f && f.kind === "number" ? f : null;
}

function getVariables(p: Plantilla): VariableDecl[] {
  return getBlock(p, "variables")?.declaraciones ?? [];
}

function getVariable(p: Plantilla, index: number): VariableDecl | null {
  return getVariables(p)[index] ?? null;
}

/**
 * Formatea un valor anidado (string SIEMPRE entre comillas, recursivo).
 * Ver mismo patrón en `PlantillaEditorSchema.formatValorAnidado`.
 */
function formatValueAnidado(v: unknown): string {
  if (v === undefined || v === null) return "?";
  if (typeof v === "number") {
    return Number.isInteger(v) ? String(v) : v.toFixed(3).replace(/\.?0+$/, "");
  }
  if (typeof v === "string") return JSON.stringify(v);
  if (typeof v === "boolean") return v ? "Sí" : "No";
  if (Array.isArray(v)) return `[${v.map(formatValueAnidado).join(", ")}]`;
  if (typeof v === "object") {
    const entries = Object.entries(v as Record<string, unknown>)
      .map(([k, val]) => `${k}: ${formatValueAnidado(val)}`)
      .join(", ");
    return `{ ${entries} }`;
  }
  return String(v);
}

function formatValue(v: unknown): string {
  if (v === undefined || v === null) return "?";
  if (typeof v === "number") {
    return Number.isInteger(v) ? String(v) : v.toFixed(3).replace(/\.?0+$/, "");
  }
  if (typeof v === "string") return v;
  if (typeof v === "boolean") return v ? "Sí" : "No";
  // Filas de dataset (objeto) o pool de filas (array de objetos): antes caía
  // a `String(v)` → "[object Object]" repetido. Ver formatValorAnidado en
  // PlantillaEditorSchema.tsx para el mismo fix del editor clásico.
  if (Array.isArray(v)) return `[${v.map(formatValueAnidado).join(", ")}]`;
  if (typeof v === "object") {
    const entries = Object.entries(v as Record<string, unknown>)
      .map(([k, val]) => `${k}: ${formatValueAnidado(val)}`)
      .join(", ");
    return `{ ${entries} }`;
  }
  return String(v);
}

/**
 * Subtipos que ofrece el <select> del property grid de variable.
 *
 * §3 — `random_float` se separó de `random`: los dos se mostraban como
 * "Aleatorio (entero)", así que para un decimal había que ir a modo Código. Y
 * eso importaba porque el subtipo entero con bordes decimales redondea el rango
 * (casos-límite §8), o sea el docente no tenía salida en la interfaz.
 */
type Subtipo = "random" | "random_float" | "list" | "expr";

/** ¿Este subtipo usa el par Mínimo/Máximo? */
function esRango(k: Subtipo): boolean {
  return k === "random" || k === "random_float";
}

function classifyVariable(expr: Expr): Subtipo {
  if (expr.kind === "fun_call") {
    if (expr.name === "random") return "random";
    if (expr.name === "random_float") return "random_float";
    if (expr.name === "uno_de" || expr.name === "choice") return "list";
  }
  if (expr.kind === "array") return "list";
  return "expr";
}

function randomBounds(expr: Expr): { min: string; max: string } {
  if (
    expr.kind === "fun_call" &&
    (expr.name === "random" || expr.name === "random_float") &&
    expr.args.length === 2
  ) {
    // `numLiteral` (no `kind === "num"`): los negativos vuelven del parser como
    // unario y así los campos quedaban vacíos — ver PLAN casos-limite §1.
    const min = numLiteral(expr.args[0]);
    const max = numLiteral(expr.args[1]);
    if (min !== null && max !== null) return { min: String(min), max: String(max) };
  }
  return { min: "", max: "" };
}

/**
 * Ítems de la lista, UNO POR LÍNEA (§12). Con `", "` como separador un valor
 * con coma interna ("Buenos Aires, Argentina") no se podía escribir, y los que
 * ya existían se partían en dos al editar la lista.
 */
function listOptions(expr: Expr): string {
  if (expr.kind === "fun_call" && expr.args[0]?.kind === "array") {
    return expr.args[0].items.map(exprToStringValue).join("\n");
  }
  if (expr.kind === "array") {
    return expr.items.map(exprToStringValue).join("\n");
  }
  return "";
}

function makeChoiceExpr(items: string[]): Expr {
  return {
    kind: "fun_call",
    name: "uno_de",
    args: [makeListExpr(items)],
    loc: DUMMY_LOC,
  };
}

/**
 * PLAN tiza-autoria-avanzada §0 — texto de la lista para el textarea, o `null`
 * si editarla como texto perdería datos (objetos, o `uno_de(otraVariable)`).
 * `null` = no ofrecer el editor y mandar a modo Código.
 */
function listOptionsEditables(expr: Expr): string | null {
  return listaEditableComoTexto(expr) ? listOptions(expr) : null;
}

function updateVariableExpr(
  p: Plantilla,
  index: number,
  expr: Expr,
): Plantilla {
  const v = getVariable(p, index);
  if (!v) return p;
  return updateVariable(p, index, { ...v, expr });
}

/* ─── Tarjeta de presentación (centro) ──────────────────────────────── */

export function TizaQuestionCard({
  plantilla,
  onChange,
  selection,
  onSelectQuestion,
  onSelectVariable,
  live,
}: TizaQuestionCardProps) {
  const { t } = useI18n();
  // §4 — el bloque `dataset:` es ortogonal al tipo. Se revela si ya existe o si
  // se lo eligió del menú (el bloque se escribe al elegir un dataset concreto).
  const datasetNombre = getBlock(plantilla, "dataset")?.nombre ?? "";
  const [pickingDataset, setPickingDataset] = useState(false);
  const tipo = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const enunField = fieldByKey(plantilla, "enunciado");
  const respField = fieldByKey(plantilla, "respuesta");
  const tolField = numberFieldByKey(plantilla, "tolerancia");

  const enunciado = enunField ? readTextField(plantilla, enunField) : "";
  const respuestaExpr = respField ? readTextField(plantilla, respField) : "";
  const toleranciaAbs = tolField ? readNumberField(plantilla, tolField) : "";

  const variables = getVariables(plantilla);
  const pistas = readPistas(plantilla);
  const pasos = readPasos(plantilla);
  const restricciones = readRestricciones(plantilla);
  const explicacion = readExplicacion(plantilla);
  // Etapa "preguntas nativas en Tiza" (fix bloques) — `enunciado:` y
  // `enunciados:` (variantes) son mutuamente excluyentes en el parser
  // (rechaza tener ambos). Mientras haya variantes activas, la sección de
  // enunciado pasa a editar la lista en lugar del texto único.
  const enunciadosActive = getBlock(plantilla, "enunciados") !== undefined;
  const enunciadosItems = readEnunciados(plantilla);

  const enunciadoRendered = useMemo(() => {
    let text = enunciadosActive ? (enunciadosItems[0]?.text ?? "") : enunciado;
    for (const [name, value] of Object.entries(live.variables ?? {})) {
      text = text.replaceAll(`{${name}}`, formatValue(value));
    }
    return text;
  }, [enunciado, enunciadosActive, enunciadosItems, live.variables]);

  const isQuestionSelected = selection.kind === "pregunta";

  return (
    <div
      style={{
        maxWidth: 560,
        margin: "0 auto",
        background: "var(--c-surface)",
        border: "1px solid var(--c-border)",
        borderTop: "3px solid var(--c-accent)",
        borderRadius: "var(--r-lg)",
        boxShadow: "var(--shadow)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
      data-testid="tiza-question-card"
    >
      {/* pill de tipo */}
      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "var(--c-accent-soft)",
            color: "var(--c-accent)",
            fontSize: 12,
            fontWeight: 700,
            padding: "5px 11px",
            borderRadius: 999,
          }}
        >
          <span aria-hidden="true">№</span> {TIPO_PREGUNTA_KEY[tipo] ? t(TIPO_PREGUNTA_KEY[tipo]) : (schema?.label ?? tipo)}
        </span>
        <span style={{ fontSize: 12, color: "var(--c-text-3)" }}>
          {TIPO_PREGUNTA_DESCRIPCION_KEY[tipo] ? t(TIPO_PREGUNTA_DESCRIPCION_KEY[tipo]) : (schema?.descripcion ?? t("tizaEditor.editaLasPropiedadesALa"))}
        </span>
      </div>

      {/* ENUNCIADO */}
      <div
        id="tiza-sec-enunciado"
        onClick={onSelectQuestion}
        style={{
          cursor: "pointer",
          borderRadius: "var(--r-md)",
          outline: isQuestionSelected ? "2px solid var(--c-accent)" : undefined,
          outlineOffset: 4,
        }}
        role="button"
        tabIndex={0}
        aria-pressed={isQuestionSelected}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onSelectQuestion();
        }}
      >
        <Eyebrow>{enunciadosActive ? t("tizaEditor.enunciadoVariantes") : t("plantillaEditorTiza.enunciado")}</Eyebrow>
        {enunciadosActive ? (
          <div onClick={(e) => e.stopPropagation()}>
            {enunciadosItems.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}
              >
                <div style={{ ...numberBadgeStyle, marginTop: 10 }}>{i + 1}</div>
                <BufferedTextarea
                  value={item.text}
                  rows={2}
                  placeholder={t("tizaEditor.textoDeLaVariante")}
                  onCommit={(v) => {
                    const next = [...enunciadosItems];
                    next[i] = { ...next[i], text: v };
                    onChange(writeEnunciados(plantilla, next));
                  }}
                  style={{ ...inputStyle(), flex: 1, minWidth: 0 }}
                />
                {/* PLAN-E §15: tipo propio de la variante (vacío = heredar) */}
                <select
                  aria-label={`Tipo de la variante ${i + 1}`}
                  title={t("plantillaEditorSchema.tipoDeLaVarianteHeredado")}
                  value={item.tipo ?? ""}
                  onChange={(e) => {
                    const next = [...enunciadosItems];
                    const { tipo: _tipo, ...rest } = next[i];
                    next[i] = e.target.value
                      ? { ...rest, tipo: e.target.value as NonNullable<typeof item.tipo> }
                      : rest;
                    onChange(writeEnunciados(plantilla, next));
                  }}
                  style={{ ...inputStyle(), width: 118, marginTop: 2, flex: "none" }}
                >
                  <option value="">{t("plantillaEditorSchema.heredado")}</option>
                  <option value="mc">{t("bancoPreguntasEditor.opcionMultiple")}</option>
                  <option value="vf">V/F</option>
                  <option value="input">{t("plantillaEditorSchema.numerica")}</option>
                  <option value="completar">{t("plantillaEditorSchema.completar")}</option>
                </select>
                <button
                  type="button"
                  aria-label={`${t("tizaEditor.quitarVariante")} ${i + 1}`}
                  title={t("tizaEditor.quitarVariante")}
                  disabled={enunciadosItems.length <= 1}
                  onClick={() =>
                    onChange(
                      writeEnunciados(plantilla, enunciadosItems.filter((_, j) => j !== i)),
                    )
                  }
                  style={{
                    ...removeItemButtonStyle,
                    marginTop: 2,
                    opacity: enunciadosItems.length <= 1 ? 0.45 : 1,
                    cursor: enunciadosItems.length <= 1 ? "not-allowed" : "pointer",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
            <div style={{ display: "flex", gap: 16 }}>
              <button
                type="button"
                onClick={() =>
                  onChange(
                    writeEnunciados(plantilla, [
                      ...enunciadosItems,
                      { text: t("tizaEditor.nuevaVariante") },
                    ]),
                  )
                }
                style={addLinkButtonStyle}
              >{t("tizaEditor.otraVariante")}</button>
              <button
                type="button"
                onClick={() => onChange(variantesToEnunciado(plantilla))}
                style={addLinkButtonStyle}
              >{t("tizaEditor.volverAEnunciadoUnico")}</button>
            </div>
          </div>
        ) : (
          <BufferedTextarea
            value={enunciado}
            rows={2}
            placeholder={t("tizaEditor.escribiLaConsigna")}
            onCommit={(v) => {
              if (!enunField) return;
              const next = writeTextField(plantilla, enunField, v);
              if (next) onChange(next);
            }}
            onClick={(e) => e.stopPropagation()}
            style={{
              ...inputStyle(),
              fontSize: 17,
              fontWeight: 560,
              lineHeight: 1.4,
            }}
          />
        )}
        <div
          style={{
            marginTop: 9,
            fontSize: 13.5,
            color: "var(--c-text-2)",
          }}
        >{t("tizaEditor.vista")}<span style={{ color: "var(--c-text)", fontWeight: 560 }}>{enunciadoRendered}</span>
        </div>
      </div>

      {/* VARIABLES */}
      {variables.length > 0 ? (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div id="tiza-sec-variables">
            <Eyebrow>{t("plantillaEditorTiza.variables")}</Eyebrow>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
              {variables.map((v, i) => {
                const selected =
                  selection.kind === "variable" && selection.index === i;
                const liveValue = formatValue(live.variables?.[v.nombre]);
                const def =
                  classifyVariable(v.expr) === "random"
                    ? `${v.nombre}(${randomBounds(v.expr).min}, ${
                        randomBounds(v.expr).max
                      })`
                    : classifyVariable(v.expr) === "list"
                      ? "opciones(…)"
                      : `= ${exprToText(v.expr)}`;
                return (
                  <button
                    key={`${v.nombre}-${i}`}
                    type="button"
                    onClick={() => onSelectVariable(i)}
                    aria-pressed={selected}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 9,
                      padding: "7px 11px",
                      borderRadius: 10,
                      cursor: "pointer",
                      background: selected
                        ? "var(--c-accent-soft)"
                        : "var(--c-surface)",
                      border: `1.5px solid ${
                        selected ? "var(--c-accent)" : "var(--c-border)"
                      }`,
                    }}
                  >
                    <span
                      style={{
                        ...mono,
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--c-accent)",
                      }}
                    >
                      {v.nombre}
                    </span>
                    <span style={{ ...mono, fontSize: 12, color: "var(--c-text-3)" }}>
                      {def}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--c-text-2)",
                        background: "var(--c-surface)",
                        border: "1px solid var(--c-border)",
                        padding: "2px 7px",
                        borderRadius: 999,
                      }}
                    >
                      ahora: {liveValue}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      ) : null}

      {/* RESPUESTA + TOLERANCIA */}
      {(respField || tolField) && (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div id="tiza-sec-respuesta" style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
            {respField ? (
              <div>
                <Eyebrow>{t("plantillaEditorTiza.respuesta")}</Eyebrow>
                <div
                  style={{
                    ...mono,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--c-text)",
                  }}
                >
                  {respuestaExpr || "—"}{" "}
                  <span style={{ color: "var(--c-text-3)" }}>
                    = {live.respuesta ?? "?"}
                  </span>
                </div>
              </div>
            ) : null}
            {tolField ? (
              <div>
                <Eyebrow>{t("tizaEditor.tolerancia")}</Eyebrow>
                <div
                  style={{
                    ...mono,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--c-text)",
                  }}
                >
                  ± {toleranciaAbs || "0"}
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}

      {/* PASOS DE RESOLUCIÓN */}
      {pasos.length > 0 ? (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div id="tiza-sec-pasos">
            <Eyebrow>{t("tizaEditor.pasosDeResolucion")}</Eyebrow>
            {pasos.map((text: string, i: number) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}
              >
                <div style={numberBadgeStyle}>{i + 1}</div>
                <div style={{ fontSize: 13.5, color: "var(--c-text-2)", lineHeight: 1.45 }}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* RESTRICCIONES */}
      {restricciones.length > 0 ? (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div id="tiza-sec-restricciones">
            <Eyebrow>{t("plantillaEditorSchema.restricciones")}</Eyebrow>
            {restricciones.map((text: string, i: number) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}
              >
                <div style={numberBadgeStyle}>{i + 1}</div>
                <div style={{ ...mono, fontSize: 13.5, color: "var(--c-text-2)", lineHeight: 1.45 }}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* PISTAS */}
      {pistas.length > 0 ? (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div id="tiza-sec-pistas">
            <Eyebrow>{t("plantillaEditorTiza.pistas")}</Eyebrow>
          {pistas.map((text: string, i: number) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <div style={numberBadgeStyle}>
                  {i + 1}
                </div>
                <div style={{ fontSize: 13.5, color: "var(--c-text-2)", lineHeight: 1.45 }}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* EXPLICACIÓN */}
      {explicacion ? (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div id="tiza-sec-explicacion">
            <Eyebrow>{t("plantillaEditorTiza.explicacion")}</Eyebrow>
            <div style={{ fontSize: 13.5, color: "var(--c-text-2)", lineHeight: 1.5 }}>
              {explicacion}
            </div>
          </div>
        </>
      ) : null}

      {/* DATASET (§4) — se muestra si la plantilla ya lo declara o si se acaba
          de elegir del menú. El bloque se escribe al elegir el dataset. */}
      {datasetNombre !== "" || pickingDataset ? (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div id="tiza-sec-dataset">
            <CampoDataset plantilla={plantilla} onChange={onChange} />
          </div>
        </>
      ) : null}

      {/* AÑADIR BLOQUE */}
      <AddBlockButton
        onSelect={(kind) => {
          if (kind === "dataset") {
            setPickingDataset(true);
          } else if (kind === "variable") {
            // §3 — nombre libre (`v`, `v_2`…): `addVariable` desambigua solo si
            // choca. Arranca como aleatorio entero, el subtipo más común, y se
            // selecciona para que el property grid quede listo para editarla.
            const decls = getBlock(plantilla, "variables")?.declaraciones ?? [];
            onChange(
              addVariable(plantilla, {
                nombre: "v",
                expr: makeRandomIntExpr(1, 10),
                loc: DUMMY_LOC,
              }),
            );
            onSelectVariable(decls.length);
          } else if (kind === "pista") {
            onChange(writePistas(plantilla, [...pistas, "Nueva pista…"]));
          } else if (kind === "pasos") {
            onChange(writePasos(plantilla, [...pasos, "Nuevo paso…"]));
          } else if (kind === "restric") {
            // Placeholder debe parsear como fórmula real (`writeRestricciones`
            // guarda `Expr[]`, no texto libre): "true" es un formula válida
            // y editable, a diferencia de una frase que se descartaría en
            // silencio al no parsear.
            onChange(writeRestricciones(plantilla, [...restricciones, "true"]));
          } else if (kind === "variante") {
            // `enunciado:`/`enunciados:` son mutuamente excluyentes en el
            // parser: si todavía no hay variantes, primero se migra el
            // enunciado único a la primera variante.
            const base = enunciadosActive ? plantilla : enunciadoToVariantes(plantilla);
            const items = readEnunciados(base);
            onChange(writeEnunciados(base, [...items, { text: "Nueva variante…" }]));
          }
        }}
      />
    </div>
  );
}

/* ─── "＋ Añadir bloque" ────────────────────────────────────────────── */

const ADD_ITEMS = [
  // §3 — "Variable" no estaba: no había forma de agregar una variable desde
  // Tiza (ni un "+" en el rail ni una sola llamada a `addVariable`), así que
  // había que ir a modo Código para declarar la primera.
  { id: "variable", labelKey: "tizaEditor.variable", icon: "𝑥", tagKey: "tizaEditor.aleatoriaOLista" },
  { id: "pista", labelKey: "tizaEditor.pista", icon: "💡", tagKey: "tizaEditor.escalonada" },
  { id: "pasos", labelKey: "tizaEditor.pasosDeResolucion", icon: "≡", tagKey: "" },
  { id: "restric", labelKey: "tizaEditor.restriccion", icon: "≠", tagKey: "tizaEditor.sobreVariables" },
  { id: "variante", labelKey: "tizaEditor.varianteDeEnunciado", icon: "¶", tagKey: "" },
  { id: "dataset", labelKey: "tizaEditor.datasetExterno", icon: "⊟", tagKey: "" },
];

function AddBlockButton({ onSelect }: { onSelect: (kind: string) => void }) {
  const { t } = useI18n();
  return (
    <Menu
      align="start"
      panelWidth="248px"
      trigger={(props) => (
        <button
          type="button"
          {...props}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "9px 14px",
            borderRadius: "var(--r-md)",
            border: "1px dashed var(--c-border)",
            background: "transparent",
            color: "var(--c-accent)",
            fontSize: 13,
            fontWeight: 660,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          <span aria-hidden="true">＋</span> {t("tizaEditor.anadirBloque")}
        </button>
      )}
    >
      {({ close }) => (
        <div style={{ display: "flex", flexDirection: "column", padding: 6 }}>
          {ADD_ITEMS.map((it) => (
            <button
              key={it.id}
              type="button"
              role="menuitem"
              data-testid={`tiza-add-${it.id}`}
              onClick={() => {
                onSelect(it.id);
                close();
              }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 11,
                padding: "9px 10px",
                borderRadius: 8,
                border: 0,
                background: "transparent",
                color: it.id === "dataset" ? "var(--c-text-3)" : "var(--c-text)",
                fontSize: 13,
                fontWeight: 560,
                cursor: it.id === "dataset" ? "default" : "pointer",
                textAlign: "left",
                opacity: it.id === "dataset" ? 0.55 : 1,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  flex: "0 0 auto",
                  borderRadius: 7,
                  background: "var(--c-accent-soft)",
                  color: "var(--c-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                }}
              >
                {it.icon}
              </span>
              <span style={{ flex: 1 }}>{t(it.labelKey)}</span>
              <span style={{ fontSize: 11, color: "var(--c-text-3)" }}>{it.tagKey ? t(it.tagKey) : ""}</span>
            </button>
          ))}
        </div>
      )}
    </Menu>
  );
}

/* ─── Property grid contextual ──────────────────────────────────────── */

export function TizaPropertyGrid({
  plantilla,
  onChange,
  selection,
  onSelectQuestion,
  live,
  validation,
  quizMeta,
  onChangeQuizMeta,
  poolsDisponibles,
}: TizaPropertyGridProps) {
  if (selection.kind === "variable") {
    return (
      <VariablePropertyGrid
        plantilla={plantilla}
        onChange={onChange}
        index={selection.index}
        onSelectQuestion={onSelectQuestion}
        live={live}
      />
    );
  }
  return (
    <QuestionPropertyGrid
      plantilla={plantilla}
      onChange={onChange}
      live={live}
      validation={validation}
      quizMeta={quizMeta}
      onChangeQuizMeta={onChangeQuizMeta}
      poolsDisponibles={poolsDisponibles}
    />
  );
}

/* ─── Property grid: pregunta ───────────────────────────────────────── */

function QuestionPropertyGrid({
  plantilla,
  onChange,
  live,
  validation,
  quizMeta,
  onChangeQuizMeta,
  poolsDisponibles,
}: {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  live: LiveValues;
  validation?: ValidationState;
  quizMeta?: QuizPreguntaMeta;
  onChangeQuizMeta?: (next: QuizPreguntaMeta) => void;
  poolsDisponibles?: string[];
}) {
  const { t } = useI18n();
  const tipo = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  // WO-tiza-config (Fase 3) — id del <datalist> de pools sugeridas.
  const poolListId = useId();
  const enunField = fieldByKey(plantilla, "enunciado");
  const respField = fieldByKey(plantilla, "respuesta");
  const unidadField = fieldByKey(plantilla, "unidad");
  const tolField = numberFieldByKey(plantilla, "tolerancia");

  const enunciado = enunField ? readTextField(plantilla, enunField) : "";
  const respuesta = respField ? readTextField(plantilla, respField) : "";
  const unidad = unidadField ? readTextField(plantilla, unidadField) : "";
  const tolerancia = tolField ? readNumberField(plantilla, tolField) : "";
  const pistas = readPistas(plantilla);
  const pasos = readPasos(plantilla);
  const restricciones = readRestricciones(plantilla);
  const explicacion = readExplicacion(plantilla);
  const enunciadosActive = getBlock(plantilla, "enunciados") !== undefined;
  const enunciadosItems = readEnunciados(plantilla);

  // El generador es una BASE excluyente con el tipo (`applyTipo` borra
  // `generador:`, `applyGenerador` borra variables/respuesta/restricciones), así
  // que vive en el selector de tipo como opción legacy en vez de ser un campo
  // suelto al pie. `pickingGenerador` cubre el paso intermedio: eligió la opción
  // legacy pero todavía no eligió cuál generador (el AST no cambia hasta eso).
  const generadorId = getBlock(plantilla, "generador")?.id ?? "";
  const [pickingGenerador, setPickingGenerador] = useState(false);
  const usaGenerador = generadorId !== "" || pickingGenerador;
  const [tolNegativa, setTolNegativa] = useState(false);

  // §7 — mismo predicado que usa el grader (`usaToleranciaPorDefecto`), así el
  // aviso no puede desincronizarse del criterio real de corrección.
  // `live.respuesta` es literalmente el `answerKey` que se corrige.
  const respuestaViva = Number(String(live.respuesta ?? "").replace(",", "."));
  const decimalesSinTolerancia =
    tolerancia.trim() === "" &&
    Number.isFinite(respuestaViva) &&
    String(live.respuesta ?? "").trim() !== "" &&
    usaToleranciaPorDefecto(respuestaViva, undefined, live.toleranciaAbs);

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PropertyGridHeader icon="№" title={TIPO_PREGUNTA_KEY[tipo] ? t(TIPO_PREGUNTA_KEY[tipo]) : (schema?.label ?? t("varianteEditor.pregunta"))} />
      <div
        style={{
          padding: 18,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* TIPO */}
        <div>
          <Eyebrow>{t("tizaEditor.tipoDePregunta")}</Eyebrow>
          <select
            value={usaGenerador ? GENERADOR_TIPO_VALUE : tipo}
            onChange={(e) => {
              if (e.target.value === GENERADOR_TIPO_VALUE) {
                setPickingGenerador(true);
                return;
              }
              setPickingGenerador(false);
              onChange(applyTipo(plantilla, e.target.value as TipoPregunta));
            }}
            style={{ ...inputStyle(), cursor: "pointer", fontWeight: 600 }}
            data-testid="tiza-tipo-select"
          >
            {ALL_QUESTION_TYPES.map((qt) => (
              <option key={qt} value={qt}>
                {TIPO_PREGUNTA_KEY[qt] ? t(TIPO_PREGUNTA_KEY[qt]) : QUESTION_TYPE_SCHEMAS[qt].label}
              </option>
            ))}
            <optgroup label="Legacy">
              <option value={GENERADOR_TIPO_VALUE}>{t("tizaEditor.generadorLegacy")}</option>
            </optgroup>
          </select>
          <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
            {usaGenerador
              ? t("tizaEditor.elGeneradorProveeLosDatos")
              : t("tizaEditor.cambiarElTipoRearmaLos")}
          </div>
        </div>

        {/* WO-tiza-config (Fase 4) — base generador (`generador: <id>`), hoy
            legacy: se mantiene por retrocompatibilidad y sólo se muestra si el
            tipo elegido es la opción legacy. Reusa `GeneradorPicker` (mismo
            componente del editor clásico) + `applyGenerador`/`applyTipo`. Las
            variables del generador se insertan al enunciado como `{var}` desde
            los chips del panel de docs (modo "formulario"). */}
        {usaGenerador ? (
          <div data-testid="tiza-generador-picker">
            <GeneradorPicker
              value={generadorId}
              onChange={(id) => {
                if (id) {
                  onChange(applyGenerador(plantilla, id));
                  setPickingGenerador(false);
                } else {
                  // "Elegir generador…" con uno ya aplicado = volver al tipo
                  // normal; el AST vuelve al esqueleto del tipo inferido.
                  if (generadorId) onChange(applyTipo(plantilla, tipo));
                  setPickingGenerador(true);
                }
              }}
              docsVariant="formulario"
              onInsertVariable={
                enunField
                  ? (token) => {
                      // C3 (PLAN-CORRECCIONES): `writeTextField` puede
                      // devolver `null` para bloques que no maneja (acá
                      // sólo se llama con `enunField`, que siempre cae en
                      // el caso "enunciado" — no-op defensivo si algún día
                      // deja de ser así).
                      const next = writeTextField(
                        plantilla,
                        enunField,
                        enunciado === "" || enunciado.endsWith(" ")
                          ? `${enunciado}${token}`
                          : `${enunciado} ${token}`,
                      );
                      if (next) onChange(next);
                    }
                  : undefined
              }
            />
          </div>
        ) : null}

        {/* ENUNCIADO */}
        {enunField ? (
          <div>
            <Eyebrow>{enunciadosActive ? t("tizaEditor.enunciadoVariantes") : t("plantillaEditorTiza.enunciado")}</Eyebrow>
            {enunciadosActive ? (
              <div>
                {/* Las variantes son `{ text, tipo? }` desde PLAN-E §15, no
                    strings: este bloque había quedado con la forma vieja. */}
                {enunciadosItems.map((item, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}
                  >
                    <div style={{ ...numberBadgeStyle, marginTop: 10 }}>{i + 1}</div>
                    <BufferedTextarea
                      value={item.text}
                      rows={2}
                      onCommit={(v) => {
                        const next = [...enunciadosItems];
                        next[i] = { ...next[i], text: v };
                        onChange(writeEnunciados(plantilla, next));
                      }}
                      style={{ ...inputStyle(), flex: 1, minWidth: 0 }}
                    />
                    <button
                      type="button"
                      aria-label={`${t("tizaEditor.quitarVariante")} ${i + 1}`}
                      title={t("tizaEditor.quitarVariante")}
                      disabled={enunciadosItems.length <= 1}
                      onClick={() =>
                        onChange(
                          writeEnunciados(plantilla, enunciadosItems.filter((_, j) => j !== i)),
                        )
                      }
                      style={{
                        ...removeItemButtonStyle,
                        marginTop: 2,
                        opacity: enunciadosItems.length <= 1 ? 0.45 : 1,
                        cursor: enunciadosItems.length <= 1 ? "not-allowed" : "pointer",
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <div style={{ display: "flex", gap: 16 }}>
                  <button
                    type="button"
                    onClick={() =>
                      onChange(
                    writeEnunciados(plantilla, [
                      ...enunciadosItems,
                      { text: t("tizaEditor.nuevaVariante") },
                    ]),
                  )
                    }
                    style={addLinkButtonStyle}
                  >
                    {t("tizaEditor.otraVariante")}
                  </button>
                  <button
                    type="button"
                    onClick={() => onChange(variantesToEnunciado(plantilla))}
                    style={addLinkButtonStyle}
                  >
                    {t("tizaEditor.volverAEnunciadoUnico")}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <BufferedTextarea
                  value={enunciado}
                  rows={3}
                  onCommit={(v) => {
                    const next = writeTextField(plantilla, enunField, v);
                    if (next) onChange(next);
                  }}
                  style={inputStyle()}
                />
                <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
                  {t("tizaEditor.usa")}{" "}
                  <code style={{ ...mono, color: "var(--c-accent)" }}>{"{var}"}</code>{" "}
                  {t("tizaEditor.paraInsertarVariables")}
                </div>
              </>
            )}
          </div>
        ) : null}

        {/* RESPUESTA */}
        {respField ? (
          <div>
            <Eyebrow>{t("tizaEditor.respuesta")}</Eyebrow>
            <BufferedInput
              type="text"
              value={respuesta}
              onCommit={(v) => {
                const next = writeTextField(plantilla, respField, v);
                if (next) onChange(next);
              }}
              style={inputStyle(true)}
            />
            <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
              {t("tizaEditor.expresionSobreVariablesAhora")}{" "}
              <span style={{ color: "var(--c-text-2)", fontWeight: 600 }}>
                = {live.respuesta ?? "?"}
              </span>
            </div>
          </div>
        ) : null}

        {/* TOLERANCIA + UNIDAD */}
        {tolField || unidadField ? (
          <div style={{ display: "flex", gap: 12 }}>
            {tolField ? (
              <div style={{ flex: 1 }}>
                <Eyebrow>{t("tizaEditor.toleranciaAbs")}</Eyebrow>
                <BufferedInput
                  type="number"
                  min={tolField.kind === "number" && tolField.allowNegative ? undefined : 0}
                  value={tolerancia}
                  onCommit={(v) => {
                    const next = writeNumberField(plantilla, tolField, v);
                    // Una tolerancia negativa no se guarda (§3): sin este aviso
                    // el campo mostraba el valor tipeado y el bloque se perdía.
                    setTolNegativa(v.trim() !== "" && Number(v) < 0);
                    if (next) onChange(next);
                  }}
                  style={inputStyle(true)}
                  data-testid="tiza-tolerancia-input"
                />
                {tolNegativa ? (
                  <div style={{ fontSize: 11, color: "var(--c-danger)", marginTop: 4 }}>
                    {t("tizaEditor.toleranciaNoNegativa")}
                  </div>
                ) : null}
                {/* §7 — la respuesta en vivo da decimales y no hay tolerancia
                    declarada: el alumno tendría que adivinar los 4 decimales
                    que serializa `formatoDefault`. Se avisa con qué precisión
                    se va a corregir mientras tanto. */}
                {!tolNegativa && decimalesSinTolerancia ? (
                  <div
                    style={{ fontSize: 11, color: "var(--c-text-2)", marginTop: 4 }}
                    data-testid="tiza-decimales-sin-tolerancia"
                  >
                    {t("tizaEditor.respuestaDecimalSinTolerancia")}
                  </div>
                ) : null}
              </div>
            ) : null}
            {unidadField ? (
              <div style={{ flex: 1 }}>
                <Eyebrow>{t("tizaEditor.unidad")}</Eyebrow>
                <BufferedInput
                  type="text"
                  value={unidad}
                  placeholder="—"
                  onCommit={(v) => {
                    const next = writeTextField(plantilla, unidadField, v);
                    if (next) onChange(next);
                  }}
                  style={inputStyle()}
                />
              </div>
            ) : null}
          </div>
        ) : null}

        {/* CAMPOS DEL TIPO (§1) — todo lo que el schema declara y Tiza no tenía
            cableado a mano: opciones de mc, ítems de ordenar, mapa +
            respuesta_iso, texto_analizar, etiquetas, spans, corrección de
            abierta, respuesta_expr… Antes vivían sólo en modo Código. */}
        {!usaGenerador ? (
          <CamposDelSchema plantilla={plantilla} onChange={onChange} tipo={tipo} />
        ) : null}

        {/* BLOQUES: PISTAS */}
        <div style={{ height: 1, background: "var(--c-border)", margin: "6px 0" }} />
        <Eyebrow>{t("tizaEditor.bloques")}</Eyebrow>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 9,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 660 }}>{t("tizaEditor.pistas")}</span>
            <span
              style={{
                fontSize: 11,
                color: "var(--c-text-3)",
                background: "var(--c-surface-2)",
                padding: "2px 7px",
                borderRadius: 999,
              }}
            >
              {pistas.length}
            </span>
          </div>
          {pistas.map((text: string, i: number) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  flex: "0 0 auto",
                  borderRadius: 6,
                  background: "var(--c-accent-soft)",
                  color: "var(--c-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <BufferedInput
                type="text"
                value={text}
                onCommit={(v) => {
                  const next = [...pistas];
                  next[i] = v;
                  onChange(writePistas(plantilla, next));
                }}
                style={{ ...inputStyle(), flex: 1, minWidth: 0 }}
              />
              <button
                type="button"
                aria-label={`${t("tizaEditor.quitarPista")} ${i + 1}`}
                title={t("tizaEditor.quitarPista")}
                onClick={() =>
                  onChange(writePistas(plantilla, pistas.filter((_, j) => j !== i)))
                }
                style={{
                  flex: "0 0 auto",
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  border: "1px solid var(--c-border)",
                  background: "var(--c-surface-2)",
                  color: "var(--c-text-3)",
                  cursor: "pointer",
                  fontSize: 14,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onChange(writePistas(plantilla, [...pistas, t("tizaEditor.nuevaPista")]))}
            style={{
              marginTop: 2,
              fontSize: 12.5,
              fontWeight: 600,
              color: "var(--c-accent)",
              background: "transparent",
              border: 0,
              cursor: "pointer",
              padding: "4px 0",
            }}
          >
            {t("tizaEditor.otraPista")}
          </button>
        </div>

        {/* BLOQUES: PASOS DE RESOLUCIÓN */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
            <span style={{ fontSize: 13, fontWeight: 660 }}>{t("tizaEditor.pasosDeResolucion")}</span>
            <span
              style={{
                fontSize: 11,
                color: "var(--c-text-3)",
                background: "var(--c-surface-2)",
                padding: "2px 7px",
                borderRadius: 999,
              }}
            >
              {pasos.length}
            </span>
          </div>
          {pasos.map((text: string, i: number) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={numberBadgeStyle}>{i + 1}</div>
              <BufferedInput
                type="text"
                value={text}
                onCommit={(v) => {
                  const next = [...pasos];
                  next[i] = v;
                  onChange(writePasos(plantilla, next));
                }}
                style={{ ...inputStyle(), flex: 1, minWidth: 0 }}
              />
              <button
                type="button"
                aria-label={`${t("tizaEditor.quitarPaso")} ${i + 1}`}
                title={t("tizaEditor.quitarPaso")}
                onClick={() => onChange(writePasos(plantilla, pasos.filter((_, j) => j !== i)))}
                style={removeItemButtonStyle}
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onChange(writePasos(plantilla, [...pasos, t("tizaEditor.nuevoPaso")]))}
            style={addLinkButtonStyle}
          >
            {t("tizaEditor.otroPaso")}
          </button>
        </div>

        {/* BLOQUES: RESTRICCIONES — el generador provee (y `applyGenerador`
            borra) las variables, así que restringirlas desde acá no hace nada:
            con base generador la sección no se muestra. */}
        <div style={{ display: usaGenerador ? "none" : undefined }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
            <span style={{ fontSize: 13, fontWeight: 660 }}>{t("tizaEditor.restricciones")}</span>
            <span
              style={{
                fontSize: 11,
                color: "var(--c-text-3)",
                background: "var(--c-surface-2)",
                padding: "2px 7px",
                borderRadius: 999,
              }}
            >
              {restricciones.length}
            </span>
          </div>
          {restricciones.map((text: string, i: number) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={numberBadgeStyle}>{i + 1}</div>
                <BufferedInput
                  type="text"
                  value={text}
                  placeholder={t("tizaEditor.ejANoIgual0")}
                  onCommit={(v) => {
                    const next = [...restricciones];
                    next[i] = v;
                    onChange(writeRestricciones(plantilla, next));
                  }}
                  style={{ ...inputStyle(true), flex: 1, minWidth: 0 }}
                />
                <button
                  type="button"
                  aria-label={`${t("tizaEditor.quitarRestriccion")} ${i + 1}`}
                  title={t("tizaEditor.quitarRestriccion")}
                  onClick={() =>
                    onChange(writeRestricciones(plantilla, restricciones.filter((_, j) => j !== i)))
                  }
                  style={removeItemButtonStyle}
                >
                  ×
                </button>
              </div>
              {text.trim() !== "" && textToExpr(text) === null ? (
                <div style={{ fontSize: 11, color: "var(--c-danger)", marginTop: 4, marginLeft: 28 }}>
                  {t("tizaEditor.formulaInvalidaNoSeGuarda")}
                </div>
              ) : null}
            </div>
          ))}
          <button
            type="button"
            onClick={() => onChange(writeRestricciones(plantilla, [...restricciones, "true"]))}
            style={addLinkButtonStyle}
          >
            {t("tizaEditor.otraRestriccion")}
          </button>
        </div>

        {/* EXPLICACIÓN */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 660, marginBottom: 9 }}>
            {t("tizaEditor.explicacion")}
          </div>
          <BufferedTextarea
            value={explicacion}
            rows={3}
            onCommit={(v) => onChange(writeExplicacion(plantilla, v))}
            style={inputStyle()}
          />
        </div>

        {/* Etapa 2 (Tiza — preguntas nativas) — rol dentro del cuestionario.
            Sólo se renderiza con `quizMeta` presente (hay `quizId`): no
            tiene sentido para una plantilla suelta standalone. */}
        {quizMeta && onChangeQuizMeta ? (
          <div>
            <div style={{ height: 1, background: "var(--c-border)", margin: "6px 0 16px" }} />
            <Eyebrow>{t("tizaEditor.rolEnElCuestionario")}</Eyebrow>
            <select
              value={quizMeta.rol}
              onChange={(e) =>
                onChangeQuizMeta({
                  ...quizMeta,
                  rol: e.target.value as RolPreguntaQuiz,
                })
              }
              style={{ ...inputStyle(), cursor: "pointer", fontWeight: 600 }}
              data-testid="quiz-meta-rol-select"
            >
              <option value="obligatoria">{t("tizaEditor.obligatoriaEntraSiempreUnaVez")}</option>
              <option value="relleno">{t("tizaEditor.rellenoPoolPuedeRepetirse")}</option>
            </select>
            <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
              {quizMeta.rol === "obligatoria"
                ? t("tizaEditor.estaPreguntaApareceEnTodos")
                : t("tizaEditor.elCuestionarioSorteaCuantasVeces")}
            </div>

            {quizMeta.rol === "relleno" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 14 }}>
                <div>
                  <Eyebrow>{t("tizaEditor.limiteDeRepeticion")}</Eyebrow>
                  <input
                    type="number"
                    min={1}
                    step={1}
                    value={quizMeta.maxRepeticiones ?? ""}
                    placeholder={t("tizaEditor.sinLimitePropio")}
                    onChange={(e) => {
                      const raw = e.target.value;
                      if (raw === "") {
                        onChangeQuizMeta({ ...quizMeta, maxRepeticiones: undefined });
                        return;
                      }
                      const n = Number(raw);
                      if (Number.isFinite(n) && n >= 1) {
                        onChangeQuizMeta({ ...quizMeta, maxRepeticiones: Math.floor(n) });
                      }
                    }}
                    style={inputStyle()}
                    data-testid="quiz-meta-max-repeticiones-input"
                  />
                  <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
                    {t("tizaEditor.cuantasVecesPuedeOcupar")}
                  </div>
                </div>
                <div>
                  <Eyebrow>{t("tizaEditor.pool")}</Eyebrow>
                  <BufferedInput
                    type="text"
                    value={quizMeta.poolId ?? ""}
                    onCommit={(v) =>
                      onChangeQuizMeta({ ...quizMeta, poolId: v.trim() || undefined })
                    }
                    style={inputStyle()}
                    list={poolListId}
                    data-testid="quiz-meta-pool-id-input"
                  />
                  {/* WO-tiza-config (Fase 3) — sugerir pools existentes del
                      cuestionario: un typo acá parte el pool en dos en
                      silencio, así que el navegador ofrece las conocidas. */}
                  <datalist id={poolListId} data-testid="quiz-meta-pool-datalist">
                    {(poolsDisponibles ?? []).map((p) => (
                      <option key={p} value={p} />
                    ))}
                  </datalist>
                  <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
                    {t("tizaEditor.agrupaPreguntasIntercambiables")}
                    {poolsDisponibles && poolsDisponibles.length > 0
                      ? ` ${t("tizaEditor.poolsExistentes")} ${poolsDisponibles.join(", ")}.`
                      : ""}
                  </div>
                </div>
              </div>
            ) : null}

            {/* WO-tiza-config (Fase 3) — dificultad + puntaje por pregunta.
                El schema (`PreguntaQuiz`) y el runtime ya los soportaban;
                esto sólo agrega la UI. Aplican a cualquier rol. */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 14 }}>
              <div>
                <Eyebrow>{t("comun.dificultad")}</Eyebrow>
                <select
                  value={quizMeta.dificultad ?? ""}
                  onChange={(e) =>
                    onChangeQuizMeta({
                      ...quizMeta,
                      dificultad: e.target.value
                        ? (e.target.value as DificultadPregunta)
                        : undefined,
                    })
                  }
                  style={{ ...inputStyle(), cursor: "pointer" }}
                  data-testid="quiz-meta-dificultad-select"
                >
                  <option value="">{t("tizaEditor.sinAsignar")}</option>
                  <option value="basico">{t("comun.basico")}</option>
                  <option value="intermedio">{t("comun.intermedio")}</option>
                  <option value="avanzado">{t("comun.avanzado")}</option>
                </select>
                <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
                  {t("tizaEditor.laUsaElRuteoPor")}
                </div>
              </div>
              <div>
                <Eyebrow>{t("tizaEditor.puntaje")}</Eyebrow>
                <input
                  type="number"
                  min={0}
                  step="any"
                  value={quizMeta.puntaje ?? ""}
                  placeholder="1"
                  onChange={(e) => {
                    const raw = e.target.value;
                    if (raw === "") {
                      onChangeQuizMeta({ ...quizMeta, puntaje: undefined });
                      return;
                    }
                    const n = Number(raw);
                    if (Number.isFinite(n) && n >= 0) {
                      onChangeQuizMeta({ ...quizMeta, puntaje: n });
                    }
                  }}
                  style={inputStyle()}
                  data-testid="quiz-meta-puntaje-input"
                />
                <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
                  {t("tizaEditor.pesoDeEstaPreguntaEnEl")}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* VALIDACIÓN (conservada de V1/V2) */}
        {validation ? (
          <div style={{ marginTop: 8 }}>
            <div style={{ height: 1, background: "var(--c-border)", margin: "6px 0 16px" }} />
            <ValidationReport
              state={validation}
              disabled={!plantilla}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ─── Campos del schema, genéricos ──────────────────────────────────── */

/**
 * PLAN tiza-autoria-avanzada §1 — Tiza leía 4 claves hardcodeadas
 * (`enunciado`, `respuesta`, `unidad`, `tolerancia`) y nunca recorría
 * `schema.fields`, así que 10 de los 11 tipos de pregunta tenían campos
 * OBLIGATORIOS invisibles en la interfaz y había que irse a modo Código. El más
 * caro: `mc` sembraba `opciones_explicitas: ["Opción 1", "Opción 2"]` y no había
 * forma de editarlas — se publicaban tal cual.
 *
 * Estos controles cubren los `kind` del schema con los MISMOS `read*`/`write*`
 * de `plantillaFields` que ya usaba el editor clásico (incluido el respeto de
 * `allowNegative`, que se arregló en casos-límite §3). Los que Tiza ya tenía a
 * mano con UI propia (enunciado, respuesta, unidad, tolerancia) se siguen
 * renderizando aparte: acá van "los demás".
 */
const CLAVES_CON_UI_PROPIA = new Set(["enunciado", "respuesta", "unidad", "tolerancia"]);

function CampoEscalar({
  field,
  plantilla,
  onChange,
}: {
  field: Field;
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
}) {
  const { t } = useI18n();
  const [invalido, setInvalido] = useState(false);
  const ayuda = field.help ? (
    <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>{field.help}</div>
  ) : null;

  if (field.kind === "bool") {
    const value = readBoolField(plantilla, field);
    return (
      <div style={{ marginBottom: 18 }}>
        <Eyebrow>{field.label}</Eyebrow>
        <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(writeBoolField(plantilla, field, e.target.checked))}
            data-testid={`tiza-campo-${field.key}`}
          />
          <span style={{ fontSize: 13, color: "var(--c-text-2)" }}>
            {value ? t("comun.si") : t("comun.no")}
          </span>
        </label>
        {ayuda}
      </div>
    );
  }

  if (field.kind === "enum") {
    const value = readEnumField(plantilla, field) || field.options[0]?.value || "";
    return (
      <div style={{ marginBottom: 18 }}>
        <Eyebrow>{field.label}</Eyebrow>
        <select
          value={value}
          onChange={(e) => onChange(writeEnumField(plantilla, field, e.target.value))}
          style={{ ...inputStyle(), cursor: "pointer" }}
          data-testid={`tiza-campo-${field.key}`}
        >
          {field.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {ayuda}
      </div>
    );
  }

  if (field.kind === "number") {
    return (
      <div style={{ marginBottom: 18 }}>
        <Eyebrow>{field.label}</Eyebrow>
        <BufferedInput
          type="number"
          step="any"
          min={field.allowNegative ? undefined : 0}
          value={readNumberField(plantilla, field)}
          onCommit={(v) => {
            const next = writeNumberField(plantilla, field, v);
            // `null` = no se guarda (ej. negativo donde el schema no lo permite).
            setInvalido(next === null && v.trim() !== "");
            if (next) onChange(next);
          }}
          style={inputStyle(true)}
          data-testid={`tiza-campo-${field.key}`}
        />
        {invalido ? (
          <div style={{ fontSize: 11, color: "var(--c-danger)", marginTop: 4 }}>
            {t("tizaEditor.valorInvalidoNoSeGuarda")}
          </div>
        ) : (
          ayuda
        )}
      </div>
    );
  }

  // text
  const textField = field as TextField;
  const value = readTextField(plantilla, textField);
  const commit = (v: string) => {
    const next = writeTextField(plantilla, textField, v);
    setInvalido(next === null && v.trim() !== "");
    if (next) onChange(next);
  };
  return (
    <div style={{ marginBottom: 18 }}>
      <Eyebrow>{field.label}</Eyebrow>
      {textField.multiline ? (
        <BufferedTextarea
          value={value}
          rows={3}
          onCommit={commit}
          style={{ ...inputStyle(true), resize: "vertical" }}
          data-testid={`tiza-campo-${field.key}`}
        />
      ) : (
        <BufferedInput
          type="text"
          value={value}
          placeholder={textField.expression ? t("tizaEditor.ejAB") : undefined}
          onCommit={commit}
          style={inputStyle(true)}
          data-testid={`tiza-campo-${field.key}`}
        />
      )}
      {invalido ? (
        <div style={{ fontSize: 11, color: "var(--c-danger)", marginTop: 4 }}>
          {t("tizaEditor.valorInvalidoNoSeGuarda")}
        </div>
      ) : (
        ayuda
      )}
    </div>
  );
}

/** Lista de strings (opciones de mc, ítems a ordenar, respuestas válidas…). */
function CampoListaStrings({
  field,
  plantilla,
  onChange,
}: {
  field: ListField;
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
}) {
  const { t } = useI18n();
  const items = readListStrings(plantilla, field);
  const minItems = field.minItems ?? 0;
  const update = (next: string[]) => onChange(writeListStrings(plantilla, field, next));

  return (
    <div style={{ marginBottom: 18 }}>
      <Eyebrow>{field.label}</Eyebrow>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {items.map((item, idx) => (
          <div key={idx} style={{ display: "flex", gap: 7, alignItems: "center" }}>
            <BufferedInput
              type="text"
              value={item}
              aria-label={`${field.label} ${idx + 1}`}
              onCommit={(v) => {
                const next = items.slice();
                next[idx] = v;
                update(next);
              }}
              style={{ ...inputStyle(true), flex: 1 }}
              data-testid={`tiza-campo-${field.key}-${idx}`}
            />
            <button
              type="button"
              aria-label={`${t("comun.eliminar")} ${idx + 1}`}
              disabled={items.length <= minItems}
              onClick={() => update(items.filter((_, i) => i !== idx))}
              style={{
                border: 0,
                background: "transparent",
                color: items.length <= minItems ? "var(--c-text-3)" : "var(--c-danger)",
                cursor: items.length <= minItems ? "not-allowed" : "pointer",
                fontSize: 15,
                padding: "0 4px",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => update([...items, ""])}
        style={addLinkButtonStyle}
        data-testid={`tiza-campo-${field.key}-add`}
      >
        ＋ {field.label}
      </button>
      {field.help ? (
        <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>{field.help}</div>
      ) : null}
    </div>
  );
}

/** Pares palabra/etiqueta de `analisis_sintactico`. */
function CampoEtiquetas({
  plantilla,
  onChange,
  field,
}: {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  field: ListField;
}) {
  const { t } = useI18n();
  const label = field.label;
  const rows = readEtiquetas(plantilla);
  const update = (next: EtiquetaRow[]) => onChange(writeEtiquetas(plantilla, next));
  // Un bloque vacío no parsea si el campo es obligatorio, así que el último no
  // se puede borrar (misma política que `minItems` en las listas de strings).
  const minItems = field.minItems ?? (field.required ? 1 : 0);

  return (
    <div style={{ marginBottom: 18 }}>
      <Eyebrow>{label}</Eyebrow>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {rows.map((row, idx) => (
          <div key={idx} style={{ display: "flex", gap: 7, alignItems: "center" }}>
            <BufferedInput
              type="text"
              value={row.palabra}
              aria-label={`${t("tizaEditor.palabra")} ${idx + 1}`}
              placeholder={t("tizaEditor.palabra")}
              onCommit={(v) => {
                const next = rows.slice();
                next[idx] = { ...row, palabra: v };
                update(next);
              }}
              style={{ ...inputStyle(true), flex: 1 }}
              data-testid={`tiza-etiqueta-palabra-${idx}`}
            />
            <BufferedInput
              type="text"
              value={row.etiqueta}
              aria-label={`${t("tizaEditor.etiqueta")} ${idx + 1}`}
              placeholder={t("tizaEditor.etiqueta")}
              onCommit={(v) => {
                const next = rows.slice();
                next[idx] = { ...row, etiqueta: v };
                update(next);
              }}
              style={{ ...inputStyle(true), flex: 1 }}
              data-testid={`tiza-etiqueta-tag-${idx}`}
            />
            <button
              type="button"
              aria-label={`${t("comun.eliminar")} ${idx + 1}`}
              disabled={rows.length <= minItems}
              onClick={() => update(rows.filter((_, i) => i !== idx))}
              data-testid={`tiza-etiqueta-eliminar-${idx}`}
              style={{
                border: 0,
                background: "transparent",
                color: rows.length <= minItems ? "var(--c-text-3)" : "var(--c-danger)",
                cursor: rows.length <= minItems ? "not-allowed" : "pointer",
                fontSize: 15,
                padding: "0 4px",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => update([...rows, { palabra: "", etiqueta: "" }])}
        style={addLinkButtonStyle}
        data-testid="tiza-etiqueta-add"
      >
        ＋ {label}
      </button>
    </div>
  );
}

/**
 * PLAN tiza-autoria-avanzada §7 — spans de `analisis_spans` (índices de
 * palabra). Era el único campo que NINGUNA interfaz editaba: el editor clásico
 * lo saltea con un cartel ("campos aún no editables… se preservan tal cual").
 * La capa de datos ya existía (`readSpans`/`writeSpans`), sólo faltaba la UI.
 */
function CampoSpans({
  plantilla,
  onChange,
  field,
}: {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  field: ListField;
}) {
  const { t } = useI18n();
  const label = field.label;
  const rows = readSpans(plantilla);
  const update = (next: SpanRow[]) => onChange(writeSpans(plantilla, next));
  // `spans_pedidos` es obligatorio: un bloque vacío no parsea, así que el
  // último span no se puede borrar.
  const minItems = field.minItems ?? (field.required ? 1 : 0);
  const texto = readTextField(plantilla, {
    kind: "text",
    key: "texto_analizar",
    label: "",
    block: "texto_analizar",
  } as TextField);
  const palabras = texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;

  return (
    <div style={{ marginBottom: 18 }}>
      <Eyebrow>{label}</Eyebrow>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {rows.map((row, idx) => {
          // El compilador exige `desde ≤ hasta` y ambos dentro del texto.
          const fueraDeRango =
            palabras > 0 && (row.hasta >= palabras || row.desde < 0 || row.desde > row.hasta);
          return (
            <div key={idx}>
              <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
                <BufferedInput
                  type="number"
                  min={0}
                  value={String(row.desde)}
                  aria-label={`${t("tizaEditor.desde")} ${idx + 1}`}
                  onCommit={(v) => {
                    if (v.trim() === "") return;
                    const n = Number(v);
                    if (!Number.isInteger(n)) return;
                    const next = rows.slice();
                    next[idx] = { ...row, desde: n };
                    update(next);
                  }}
                  style={{ ...inputStyle(true), width: 66 }}
                  data-testid={`tiza-span-desde-${idx}`}
                />
                <BufferedInput
                  type="number"
                  min={0}
                  value={String(row.hasta)}
                  aria-label={`${t("tizaEditor.hasta")} ${idx + 1}`}
                  onCommit={(v) => {
                    if (v.trim() === "") return;
                    const n = Number(v);
                    if (!Number.isInteger(n)) return;
                    const next = rows.slice();
                    next[idx] = { ...row, hasta: n };
                    update(next);
                  }}
                  style={{ ...inputStyle(true), width: 66 }}
                  data-testid={`tiza-span-hasta-${idx}`}
                />
                <BufferedInput
                  type="text"
                  value={row.etiqueta}
                  aria-label={`${t("tizaEditor.etiqueta")} ${idx + 1}`}
                  placeholder={t("tizaEditor.etiqueta")}
                  onCommit={(v) => {
                    const next = rows.slice();
                    next[idx] = { ...row, etiqueta: v };
                    update(next);
                  }}
                  style={{ ...inputStyle(true), flex: 1 }}
                  data-testid={`tiza-span-etiqueta-${idx}`}
                />
                <button
                  type="button"
                  aria-label={`${t("comun.eliminar")} ${idx + 1}`}
                  disabled={rows.length <= minItems}
                  onClick={() => update(rows.filter((_, i) => i !== idx))}
                  data-testid={`tiza-span-eliminar-${idx}`}
                  style={{
                    border: 0,
                    background: "transparent",
                    color: rows.length <= minItems ? "var(--c-text-3)" : "var(--c-danger)",
                    cursor: rows.length <= minItems ? "not-allowed" : "pointer",
                    fontSize: 15,
                    padding: "0 4px",
                  }}
                >
                  ×
                </button>
              </div>
              {fueraDeRango ? (
                <div
                  style={{ fontSize: 11, color: "var(--c-danger)", marginTop: 3 }}
                  data-testid={`tiza-span-fuera-de-rango-${idx}`}
                >
                  {t("tizaEditor.spanFueraDelTexto")}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => update([...rows, { desde: 0, hasta: 0, etiqueta: "" }])}
        style={addLinkButtonStyle}
        data-testid="tiza-span-add"
      >
        ＋ {label}
      </button>
      <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
        {palabras > 0
          ? `${t("tizaEditor.indicesDePalabra")} 0–${palabras - 1}`
          : t("tizaEditor.indicesDePalabra")}
      </div>
    </div>
  );
}

/**
 * PLAN tiza-autoria-avanzada §4 — bloque `dataset:`.
 *
 * Todo el camino ya existía (parser → `compile` → `generate` pidiéndole las
 * filas al provider → CRUD en la API → páginas de datasets → `DatasetField` en
 * el editor clásico); lo único apagado era el botón de Tiza, con un
 * `disabled` a mano y el tag "pronto".
 *
 * Además del picker, muestra las COLUMNAS del dataset elegido: el runtime deja
 * las filas en scope bajo el nombre del dataset, y hasta ahora nada en la
 * interfaz decía qué campos tiene, así que había que adivinarlos.
 */
function CampoDataset({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
}) {
  const { t } = useI18n();
  const nombre = getBlock(plantilla, "dataset")?.nombre ?? "";
  const [items, setItems] = useState<DatasetListItem[] | null>(null);
  const [fallo, setFallo] = useState(false);

  useEffect(() => {
    let vivo = true;
    listDatasets({ limit: 100 })
      .then((r) => {
        if (vivo) setItems(r.items);
      })
      .catch(() => {
        if (vivo) setFallo(true);
      });
    return () => {
      vivo = false;
    };
  }, []);

  const escribir = (n: string) =>
    onChange(
      n.trim() === ""
        ? withoutBlock(plantilla, "dataset")
        : withBlock(plantilla, { kind: "dataset", nombre: n.trim(), loc: DUMMY_LOC }),
    );

  const elegido = items?.find((d) => d.nombre === nombre);
  const columnas = elegido ? Object.keys(elegido.columnas ?? {}) : [];

  return (
    <div style={{ marginBottom: 18 }} data-testid="tiza-dataset">
      <Eyebrow>{t("tizaEditor.datasetExterno")}</Eyebrow>
      {fallo ? (
        // Si la lista no carga (sin sesión, API caída), no se bloquea la
        // autoría: se puede tipear el nombre, igual que el editor clásico.
        <BufferedInput
          type="text"
          value={nombre}
          placeholder="ej.: paises_del_mundo"
          onCommit={escribir}
          style={inputStyle(true)}
          data-testid="tiza-dataset-input"
        />
      ) : (
        <select
          value={nombre}
          onChange={(e) => escribir(e.target.value)}
          style={{ ...inputStyle(), cursor: "pointer" }}
          data-testid="tiza-dataset-select"
        >
          <option value="">{t("tizaEditor.sinDataset")}</option>
          {/* El nombre guardado puede no estar en la lista (dataset borrado o de
              otra escuela): se ofrece igual para no perderlo en silencio. */}
          {nombre !== "" && !items?.some((d) => d.nombre === nombre) ? (
            <option value={nombre}>{nombre}</option>
          ) : null}
          {(items ?? []).map((d) => (
            <option key={d.id} value={d.nombre}>
              {d.nombre} ({d.filasCount})
            </option>
          ))}
        </select>
      )}
      {columnas.length > 0 ? (
        <div
          style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}
          data-testid="tiza-dataset-columnas"
        >
          {t("tizaEditor.columnasDisponibles")}{" "}
          <span style={{ ...mono, color: "var(--c-text-2)" }}>{columnas.join(", ")}</span>
        </div>
      ) : (
        <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
          {t("tizaEditor.lasFilasQuedanEnScope")}
        </div>
      )}
    </div>
  );
}

/**
 * Renderiza los campos del schema que Tiza no tiene cableados a mano.
 * `null` si el tipo no tiene ninguno (hoy: `input`).
 */
function CamposDelSchema({
  plantilla,
  onChange,
  tipo,
}: {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  tipo: TipoPregunta;
}) {
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const restantes = (schema?.fields ?? []).filter((f) => !CLAVES_CON_UI_PROPIA.has(f.key));
  if (restantes.length === 0) return null;
  return (
    <>
      {restantes.map((field) => {
        if (field.kind === "list") {
          const lf = field as ListField;
          if (lf.itemShape === "etiqueta") {
            return (
              <CampoEtiquetas
                key={field.key}
                plantilla={plantilla}
                onChange={onChange}
                field={lf}
              />
            );
          }
          if (lf.itemShape === "span") {
            return (
              <CampoSpans
                key={field.key}
                plantilla={plantilla}
                onChange={onChange}
                field={lf}
              />
            );
          }
          return (
            <CampoListaStrings
              key={field.key}
              field={lf}
              plantilla={plantilla}
              onChange={onChange}
            />
          );
        }
        return (
          <CampoEscalar
            key={field.key}
            field={field}
            plantilla={plantilla}
            onChange={onChange}
          />
        );
      })}
    </>
  );
}

/* ─── Property grid: variable ───────────────────────────────────────── */

function VariablePropertyGrid({
  plantilla,
  onChange,
  index,
  onSelectQuestion,
  live,
}: {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  index: number;
  onSelectQuestion: () => void;
  live: LiveValues;
}) {
  const { t } = useI18n();
  const v = getVariable(plantilla, index);
  // El índice queda obsoleto si la plantilla activa cambia (rail) o si la
  // variable seleccionada se borra: sin este guard, el panel se queda en
  // blanco (`return null`) en lugar de mostrar la pregunta — el "área en
  // blanco" del ítem 6 de PLAN-E §6.
  useEffect(() => {
    if (!v) onSelectQuestion();
  }, [v, onSelectQuestion]);
  // PLAN-E §11 — el chip "Usar en enunciado" decía "copiar" pero no tenía
  // ningún onClick: era texto estático, no un control. Se vuelve un botón
  // real (mismo `navigator.clipboard` que `PromptIAPanel.tsx`). El hook
  // tiene que vivir antes del `return null` de abajo (Rules of Hooks).
  const [copied, setCopied] = useState(false);
  // PLAN casos-limite §5 — el ida y vuelta del selector de subtipo destruía el
  // valor (`a: -7` → random → volver daba `a: a + b`). Se guarda la última
  // expresión de cada subtipo, por nombre de variable, para restaurarla al
  // volver. Vive antes del `return null` de abajo (Rules of Hooks).
  const previas = useRef<Record<string, Partial<Record<Subtipo, Expr>>>>({});
  // §11 — el rename se rechaza si el nombre no es un identificador válido o ya
  // está tomado; sin aviso, el campo volvía al valor viejo sin explicar nada.
  const [nombreInvalido, setNombreInvalido] = useState(false);
  if (!v) return null;

  const kind = classifyVariable(v.expr);
  const bounds = esRango(kind) ? randomBounds(v.expr) : { min: "", max: "" };
  // `null` = es una lista pero editarla como texto perdería datos (§0).
  const options = kind === "list" ? listOptionsEditables(v.expr) : null;
  const exprText = kind === "expr" ? exprToText(v.expr) : "";
  const liveValue = formatValue(live.variables?.[v.nombre]);

  /**
   * Escribe uno de los dos límites del `random`. Un `<input type="number">`
   * reporta `""` mientras el texto es parcial o inválido (incluido el `-` solo
   * al empezar a escribir un negativo), y `Number("")` es 0: comitear eso
   * pisaba el rango con ceros — ver PLAN casos-limite §2. El otro extremo sale
   * del AST vigente, no del string de la UI.
   */
  const setBound = (cual: "min" | "max", val: string) => {
    if (val.trim() === "") return;
    const n = Number(val);
    if (!Number.isFinite(n)) return;
    const otro = Number(cual === "min" ? bounds.max : bounds.min);
    const fallback = cual === "min" ? n + 1 : n - 1;
    const min = cual === "min" ? n : Number.isFinite(otro) && bounds.min !== "" ? otro : fallback;
    const max = cual === "max" ? n : Number.isFinite(otro) && bounds.max !== "" ? otro : fallback;
    const make = kind === "random_float" ? makeRandomFloatExpr : makeRandomIntExpr;
    onChange(updateVariableExpr(plantilla, index, make(min, max)));
  };

  /**
   * Cambia el subtipo (§5). Dos arreglos: el valor anterior de ese subtipo se
   * restaura si ya se estuvo ahí, y el placeholder de "Valor por expresión"
   * dejó de ser `a + b` — referenciaba una variable `b` inexistente, así que
   * tocar el selector rompía la plantilla en runtime ("variable indefinida").
   */
  const setKind = (nextKind: Subtipo) => {
    if (nextKind === kind) return;
    const stash = (previas.current[v.nombre] ??= {});
    stash[kind] = v.expr;
    const expr =
      stash[nextKind] ??
      (nextKind === "random"
        ? makeRandomIntExpr(1, 10)
        : nextKind === "random_float"
          ? makeRandomFloatExpr(0, 1)
          : nextKind === "list"
            ? makeChoiceExpr(["a", "b", "c"])
            : numLit(0));
    onChange(updateVariableExpr(plantilla, index, expr));
  };

  // §6 — `random(10, 1)` compila pero falla en CADA intento del alumno
  // ("random: int: max (1) < min (10)"). No se bloquea el tipeo, se avisa.
  const rangoInvertido =
    bounds.min !== "" && bounds.max !== "" && Number(bounds.min) > Number(bounds.max);

  // §8 — el subtipo es ENTERO: con bordes decimales el runtime redondea el
  // rango hacia adentro (`random(1.2, 4.8)` sortea entre 2 y 4), así que lo
  // que el docente escribió no es lo que se sortea. Para decimales existe
  // `random_float`, que se escribe en modo Código.
  const bordesDecimales =
    kind === "random" &&
    ((bounds.min !== "" && !Number.isInteger(Number(bounds.min))) ||
      (bounds.max !== "" && !Number.isInteger(Number(bounds.max))));

  const handleCopyVar = async () => {
    try {
      await navigator.clipboard.writeText(`{${v.nombre}}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Sin permiso de clipboard (ej. entorno de test): no rompe el flujo.
    }
  };

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PropertyGridHeader icon="𝑥" title={`${t("generadorDocsPanel.variable")} · ${v.nombre}`} />
      <div style={{ padding: 18, flex: 1 }}>
        <button
          type="button"
          onClick={onSelectQuestion}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 600,
            color: "var(--c-text-3)",
            background: "transparent",
            border: 0,
            cursor: "pointer",
            padding: "0 0 14px",
          }}
        >
          {t("tizaEditor.volverALaPregunta")}
        </button>

        {/* §3 — borrar la variable. No había forma de quitar una desde Tiza.
            Al borrar se vuelve a la pregunta: el índice seleccionado quedaría
            apuntando a otra variable (o a ninguna). */}
        <button
          type="button"
          onClick={() => {
            onChange(removeVariable(plantilla, index));
            onSelectQuestion();
          }}
          data-testid="tiza-variable-eliminar"
          style={{
            float: "right",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--c-danger)",
            background: "transparent",
            border: 0,
            cursor: "pointer",
            padding: "0 0 14px",
          }}
        >
          {t("comun.eliminar")}
        </button>

        {/* NOMBRE — §11: era readOnly (renombrar obligaba a ir a modo Código y
            actualizar las interpolaciones a mano). Ahora `renameVariable`
            reescribe también las referencias, así que se puede editar acá. */}
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>{t("comun.nombre")}</Eyebrow>
          <BufferedInput
            type="text"
            value={v.nombre}
            onCommit={(val) => {
              const next = renameVariable(plantilla, index, val);
              setNombreInvalido(next === null && val.trim() !== v.nombre);
              if (next) onChange(next);
            }}
            style={{
              ...inputStyle(true),
              fontSize: 14,
              fontWeight: 700,
              color: "var(--c-accent)",
            }}
            data-testid="tiza-variable-nombre-input"
          />
          {nombreInvalido ? (
            <div
              style={{ fontSize: 11, color: "var(--c-danger)", marginTop: 4 }}
              data-testid="tiza-nombre-invalido"
            >
              {t("tizaEditor.nombreDeVariableInvalido")}
            </div>
          ) : (
            <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
              {t("tizaEditor.renombrarActualizaLasReferencias")}
            </div>
          )}
        </div>

        {/* SUBTIPO */}
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>{t("tizaEditor.subtipo")}</Eyebrow>
          <select
            value={kind}
            onChange={(e) =>
              setKind(e.target.value as "random" | "list" | "expr")
            }
            style={inputStyle()}
          >
            <option value="random">{t("tizaEditor.aleatorioEntero")}</option>
            <option value="random_float">{t("tizaEditor.aleatorioDecimal")}</option>
            <option value="list">{t("tizaEditor.listaDeOpciones")}</option>
            <option value="expr">{t("tizaEditor.valorPorExpresion")}</option>
          </select>
        </div>

        {/* VALOR ACTUAL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "14px 16px",
            border: "1px solid var(--c-accent)",
            background: "var(--c-accent-soft)",
            borderRadius: 11,
            marginBottom: 18,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "var(--c-accent)",
                marginBottom: 2,
              }}
            >
              {t("tizaEditor.valorActual")}
            </div>
            <div
              style={{
                ...mono,
                fontSize: 30,
                fontWeight: 700,
                color: "var(--c-text)",
                lineHeight: 1,
              }}
            >
              {liveValue}
            </div>
            <div style={{ fontSize: 11, color: "var(--c-text-2)", marginTop: 5 }}>
              {t("tizaEditor.seRegeneraEnCadaIntento")}
            </div>
          </div>
        </div>

        {/* RANDOM */}
        {esRango(kind) ? (
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <Eyebrow>{t("tizaEditor.minimo")}</Eyebrow>
                <BufferedInput
                  type="number"
                  value={bounds.min}
                  onCommit={(val) => setBound("min", val)}
                  style={inputStyle(true)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <Eyebrow>{t("tizaEditor.maximo")}</Eyebrow>
                <BufferedInput
                  type="number"
                  value={bounds.max}
                  onCommit={(val) => setBound("max", val)}
                  style={inputStyle(true)}
                />
              </div>
            </div>
            {rangoInvertido ? (
              <div
                style={{ fontSize: 11, color: "var(--c-danger)", marginTop: 4 }}
                data-testid="tiza-rango-invertido"
              >
                {t("comun.rangoInvertido")}
              </div>
            ) : null}
            {bordesDecimales ? (
              <div
                style={{ fontSize: 11, color: "var(--c-text-2)", marginTop: 4 }}
                data-testid="tiza-bordes-decimales"
              >
                {t("tizaEditor.subtipoEnteroBordesDecimales")}
              </div>
            ) : null}
          </div>
        ) : null}

        {/* LISTA — §12: era un único input separado por comas, así que un ítem
            con coma interna ("Buenos Aires, Argentina") era imposible de
            escribir y los valores existentes con coma se partían al editar.
            Un ítem por línea, mismo patrón que el editor clásico. */}
        {kind === "list" ? (
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>{t("tizaEditor.opciones")}</Eyebrow>
            {options === null ? (
              /* §0 — la lista tiene objetos o es una referencia a otra variable:
                 editarla como texto la destruía (los objetos volvían como
                 strings escapados). Se muestra el valor y se manda a Código. */
              <>
                <div
                  style={{
                    ...inputStyle(true),
                    ...mono,
                    fontSize: 12,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    maxHeight: 160,
                    overflowY: "auto",
                    color: "var(--c-text-2)",
                  }}
                  data-testid="tiza-lista-no-editable-valor"
                >
                  {exprToText(v.expr)}
                </div>
                <div
                  style={{ fontSize: 11.5, color: "var(--c-text-2)", marginTop: 6 }}
                  data-testid="tiza-lista-no-editable"
                >
                  {t("tizaEditor.listaNoEditableEnFormulario")}
                </div>
              </>
            ) : (
              <>
                <BufferedTextarea
                  value={options}
                  rows={Math.min(8, Math.max(3, options.split("\n").length + 1))}
                  onCommit={(val) => {
                    const items = val
                      .split("\n")
                      .map((s) => s.trim())
                      .filter(Boolean);
                    // `withListItems` conserva la forma original (array desnudo
                    // vs `uno_de(...)`): antes se envolvía siempre en `uno_de`.
                    onChange(
                      updateVariableExpr(plantilla, index, withListItems(v.expr, items)),
                    );
                  }}
                  style={{ ...inputStyle(true), resize: "vertical" }}
                  data-testid="tiza-lista-opciones"
                />
                <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
                  {t("tizaEditor.unaOpcionPorLinea")}
                </div>
              </>
            )}
          </div>
        ) : null}

        {/* EXPR */}
        {kind === "expr" ? (
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>{t("tizaEditor.expresion")}</Eyebrow>
            <BufferedInput
              type="text"
              value={exprText}
              placeholder={t("tizaEditor.ejAB")}
              onCommit={(val) => {
                const expr = textToExpr(val);
                if (expr) onChange(updateVariableExpr(plantilla, index, expr));
              }}
              style={inputStyle(true)}
            />
            <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
              {t("tizaEditor.dependeDeOtrasVariables")}
            </div>
          </div>
        ) : null}

        {/* USAR EN ENUNCIADO */}
        <div style={{ height: 1, background: "var(--c-border)", margin: "6px 0 16px" }} />
        <Eyebrow>{t("tizaEditor.usarEnEnunciado")}</Eyebrow>
        <button
          type="button"
          onClick={handleCopyVar}
          aria-label={`${t("tizaEditor.copiar")} {${v.nombre}} ${t("tizaEditor.paraPegarEnElEnunciado")}`}
          data-testid="variable-copy-chip"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            ...mono,
            fontSize: 13,
            fontWeight: 700,
            color: "var(--c-accent)",
            background: "var(--c-accent-soft)",
            border: "1px solid transparent",
            padding: "7px 12px",
            borderRadius: 9,
            marginBottom: 18,
            cursor: "pointer",
          }}
        >
          {"{" + v.nombre + "}"}{" "}
          <span style={{ fontSize: 11, color: "var(--c-text-3)", fontFamily: "var(--font-sans)" }}>
            {copied ? t("tizaEditor.copiado") : t("tizaEditor.copiar")}
          </span>
        </button>
      </div>
    </div>
  );
}

/* ─── Drawer de código pulido ───────────────────────────────────────── */

export interface TizaCodeDrawerProps {
  code: string;
  visible: boolean;
  onToggle: () => void;
}

export function TizaCodeDrawer({ code, visible, onToggle }: TizaCodeDrawerProps) {
  const { t } = useI18n();
  return (
    <div
      style={{
        background: "var(--c-surface)",
        border: "1px solid var(--c-border)",
        borderRadius: "var(--r-lg)",
        boxShadow: "var(--shadow)",
        overflow: "hidden",
        marginTop: 18,
      }}
      data-testid="tiza-code-drawer"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={visible}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "13px 16px",
          border: 0,
          borderBottom: visible ? "1px solid var(--c-border)" : "none",
          background: "var(--c-surface)",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span aria-hidden="true" style={{ ...mono, fontSize: 13, fontWeight: 700, color: "var(--c-accent)" }}>
          {"</>"}
        </span>
        <span style={{ fontSize: 13.5, fontWeight: 660 }}>{t("tizaEditor.codigoGeneradoVblang")}</span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontSize: 11,
            fontWeight: 700,
            color: "var(--c-success)",
            background: "color-mix(in srgb, var(--c-success) 12%, transparent)",
            padding: "3px 8px",
            borderRadius: 999,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "var(--c-success)",
              animation: "code-blip 1.6s infinite",
            }}
          />{t("tizaEditor.enVivo")}</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 12, color: "var(--c-text-3)" }}>{t("tizaEditor.soloLectura")}</span>
        <span
          aria-hidden="true"
          style={{
            fontSize: 13,
            color: "var(--c-text-3)",
            transform: visible ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "transform 150ms ease",
          }}
        >
          ⌄
        </span>
      </button>
      {visible ? (
        <div
          style={{
            background: "var(--c-code-bg)",
            fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
            fontSize: 12.5,
            lineHeight: 1.75,
          }}
        >
          <CodeEditor value={code} onChange={() => {}} readOnly minRows={8} label="Código DSL generado" />
        </div>
      ) : null}
    </div>
  );
}

/* ─── Header del property grid ──────────────────────────────────────── */

function PropertyGridHeader({ icon, title }: { icon: string; title: string }) {
  const { t } = useI18n();
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
        background: "var(--c-surface)",
        borderBottom: "1px solid var(--c-border)",
        padding: "16px 18px",
        display: "flex",
        alignItems: "center",
        gap: 11,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 32,
          height: 32,
          flex: "0 0 auto",
          borderRadius: "var(--r-md)",
          background: "var(--c-accent-soft)",
          color: "var(--c-accent)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
        }}
      >
        {icon}
      </span>
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "var(--c-text-3)",
          }}
        >
          {t("tizaEditor.propiedades")}
        </div>
        <div style={{ fontSize: 15, fontWeight: 700 }}>{title}</div>
      </div>
    </div>
  );
}
