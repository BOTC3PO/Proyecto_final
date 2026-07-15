/**
 * Editor schema-driven de plantillas VBLang (WO06).
 *
 * Reemplazo del formulario rígido por un renderer declarativo: un único
 * componente dibuja cualquier tipo a partir de `QUESTION_TYPE_SCHEMAS`, más las
 * piezas base (generador) y los add-ons (imagen PNG). El código sigue siendo la
 * fuente de verdad: muta el AST por bloque y el padre lo serializa. Los bloques
 * no soportados se preservan como placeholder read-only (regla de WO01).
 *
 * Mismo contrato de props que el formulario anterior, para que el padre
 * (PlantillaEditor) lo use sin cambios en su lógica de serialización.
 */
import {
  forwardRef,
  useContext,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  createContext,
} from "react";
import type { Expr, Plantilla, TipoPregunta } from "@vb/vblang";
import {
  ALL_QUESTION_TYPES,
  QUESTION_TYPE_SCHEMAS,
} from "@vb/vblang";
import type { Field, ListField, TextField } from "@vb/vblang";
import {
  exprToText,
  getBlock,
  readEnunciados,
  writeEnunciados,
  enunciadoToVariantes,
  variantesToEnunciado,
  textToExpr,
  readRespuestaNombre,
  writeRespuestaNombre,
  readToleranciaAbs,
  writeToleranciaAbs,
  readEncuadre,
  writeEncuadre,
  readExplicacion,
  writeExplicacion,
  readRestricciones,
  writeRestricciones,
  readPistas,
  writePistas,
  readVisualRaw,
  writeVisualRaw,
  readVisualKind,
} from "./plantillaAst";
import GeneradorPicker from "./GeneradorPicker";
import { listGeneradores } from "../../vblang/listGeneradores";
import { AccessibleList } from "./AccessibleList";
import PalabraCombobox from "./PalabraCombobox";
import LangSelector from "./LangSelector";
import { uploadPng } from "./mediaApi";
import {
  CATEGORIAS_GRAMATICALES,
  sugerirCategoriaGramatical,
  type EntradaDiccionario,
} from "../../services/diccionario";
import {
  applyGenerador,
  applyTipo,
  combinacionesPosibles,
  contarVariables,
  enunciadoUndefinedVars,
  isGeneradorBase,
  readBoolField,
  readDificultad,
  readEnumField,
  readEtiquetas,
  readListStrings,
  readNumberField,
  readPista,
  readPuntaje,
  readStaticImage,
  readSpans,
  readTextField,
  removeVisual,
  resetEnunciadoPlaceholder,
  unhandledBlocks,
  writeBoolField,
  writeDificultad,
  writeEnumField,
  writeEtiquetas,
  writeListStrings,
  writeNumberField,
  writePista,
  writePuntaje,
  writeSpans,
  writeStaticImage,
  writeTextField,
  type EtiquetaRow,
  type SpanRow,
} from "./plantillaFields";
import { getGeneradorProvidedVars } from "../../vblang/generadorVars";
// VB-B5 — errores de lint a nivel campo. El panel general sigue
// mostrándose; este módulo solo agrega el badge inline en el campo
// culpable cuando el código del issue mapea a un `fieldId`.
import {
  buildFieldErrors,
  fieldHasError,
  FieldErrorBadge,
  type FieldErrors,
} from "./FieldErrorBadge";
import VariablesEditor from "./VariablesEditor";
import type { LintIssue } from "@vb/vblang";

import { useI18n } from "../../i18n/I18nContext";
interface Props {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  valoresActuales?: Record<string, unknown>;
  tieneErrores?: boolean;
  /**
   * VB-B5 — issues del linter para pintar a nivel campo. Si no se
   * pasa, el form se renderiza sin badges inline (sólo el panel
   * general). Default: `[]`.
   */
  lintIssues?: readonly LintIssue[];
  /** Inyectable para tests; por defecto sube a /api/media/upload. */
  uploadImage?: (file: Blob) => Promise<string>;
}

/* ---------------- VB-B5: wrapper de campo con error inline ---------------- */

/**
 * Envuelve un campo del form y le aplica el badge de error del lint
 * cuando hay issues atribuibles a `fieldId`. Pinta un borde rojo
 * (vía `data-error="true"`) si hay error, para que el form pueda
 * estilarlo.
 *
 * Es un wrapper genérico para campos que renderizan UN SOLO input
 * (text, number, enum, list, etc.). El `EnunciadoField` y la lista
 * de variantes son casos especiales: ellos mismos se auto-markan
 * con `data-field-id` por variante y muestran el badge — no usan
 * este wrapper.
 */
function FieldErrorWrapper({
  fieldId,
  fieldErrors,
  children,
}: {
  fieldId: string;
  fieldErrors: FieldErrors;
  children: React.ReactNode;
}) {
  const hasError = fieldHasError(fieldId, fieldErrors);
  return (
    <div
      className="flex flex-col gap-0.5"
      data-field-id={fieldId}
      data-error={hasError || undefined}
    >
      {children}
      <FieldErrorBadge fieldId={fieldId} errors={fieldErrors} />
    </div>
  );
}

/* ---------------- inputs con buffer ---------------- */

/**
 * Input de texto con buffer: no pisa lo que el usuario escribe mientras tiene
 * foco; al perder foco se normaliza al valor canónico del AST. `commit`
 * devuelve si el valor pudo escribirse (false ⇒ se muestra el error).
 */
function BufferedText({
  value,
  commit,
  multiline,
  label,
  help,
  id,
}: {
  value: string;
  commit: (text: string) => boolean;
  multiline?: boolean;
  label: string;
  help?: string;
  id: string;
}) {
  const [text, setText] = useState(value);
  const [invalid, setInvalid] = useState(false);
  const focused = useRef(false);
  const helpId = `${id}-help`;

  useEffect(() => {
    if (!focused.current) setText(value);
  }, [value]);

  const onChange = (t: string) => {
    setText(t);
    setInvalid(!commit(t));
  };

  const common = {
    id,
    value: text,
    "aria-invalid": invalid || undefined,
    "aria-describedby": help ? helpId : undefined,
    onFocus: () => {
      focused.current = true;
    },
    onBlur: () => {
      focused.current = false;
      setText(value);
      setInvalid(false);
    },
    className:
      "w-full rounded border px-2 py-1 text-sm " +
      (invalid
        ? "border-red-500"
        : "border-[var(--c-border,#cbd5e1)]"),
  };

  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={id} className="text-xs font-medium text-[var(--c-text,#0f172a)]">
        {label}
      </label>
      {multiline ? (
        <textarea {...common} rows={2} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input {...common} onChange={(e) => onChange(e.target.value)} />
      )}
      {help && (
        <span id={helpId} className="text-[10px] text-[var(--c-muted,#64748b)]">
          {help}
        </span>
      )}
      {invalid && (
        <span role="alert" className="text-[10px] text-red-600">
          Valor inválido: se conserva el último válido.
        </span>
      )}
    </div>
  );
}

/* ---------------- renderer de un campo ---------------- */

// QA-FIX-10: idioma del diccionario, compartido por todos los
// PalabraCombobox del template (no tendría sentido mezclar es y fr
// en el mismo ejercicio). El LangSelector vive en
// PlantillaEditorSchema; los hijos leen el valor por Context.
const LangContext = createContext<string>("es");

function FieldControl({
  field,
  plantilla,
  onChange,
}: {
  field: Field;
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const id = useId();

  if (field.kind === "text") {
    const tf = field as TextField;
    return (
      <BufferedText
        id={id}
        label={field.label}
        help={field.help}
        multiline={tf.multiline}
        value={readTextField(plantilla, tf)}
        commit={(text) => {
          const next = writeTextField(plantilla, tf, text);
          if (next === null) return false;
          onChange(next);
          return true;
        }}
      />
    );
  }

  if (field.kind === "number") {
    return (
      <BufferedText
        id={id}
        label={field.label}
        help={field.help}
        value={readNumberField(plantilla, field)}
        commit={(text) => {
          const next = writeNumberField(plantilla, field, text);
          if (next === null) return false;
          onChange(next);
          return true;
        }}
      />
    );
  }

  if (field.kind === "bool") {
    const val = readBoolField(plantilla, field);
    return (
      <div className="flex flex-col gap-0.5">
        <label htmlFor={id} className="text-xs font-medium text-[var(--c-text,#0f172a)]">
          {field.label}
        </label>
        <select
          id={id}
          value={val ? "v" : "f"}
          onChange={(e) => onChange(writeBoolField(plantilla, field, e.target.value === "v"))}
          className="rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
        >
          <option value="v">Verdadero</option>
          <option value="f">Falso</option>
        </select>
      </div>
    );
  }

  if (field.kind === "enum") {
    const val = readEnumField(plantilla, field) || field.options[0]?.value;
    return (
      <div className="flex flex-col gap-0.5">
        <label htmlFor={id} className="text-xs font-medium text-[var(--c-text,#0f172a)]">
          {field.label}
        </label>
        <select
          id={id}
          value={val}
          onChange={(e) => onChange(writeEnumField(plantilla, field, e.target.value))}
          className="rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
        >
          {field.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {field.help && (
          <span className="text-[10px] text-[var(--c-muted,#64748b)]">{field.help}</span>
        )}
      </div>
    );
  }

  // list
  const lf = field as ListField;
  if (lf.itemShape === "etiqueta") {
    const rows = readEtiquetas(plantilla);
    return (
      <>
        <datalist id={CATEGORIAS_DATALIST_ID}>
          {CATEGORIAS_GRAMATICALES.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
        <AccessibleList<EtiquetaRow>
          items={rows}
          onChange={(next) => onChange(writeEtiquetas(plantilla, next))}
          createItem={() => ({ palabra: "", etiqueta: "" })}
          label={field.label}
          addLabel="Agregar etiqueta"
          itemNoun="etiqueta"
          minItems={lf.minItems ?? 0}
          renderItem={(item, index, onItem) => (
            <EtiquetaRowEditor item={item} index={index} onItem={onItem} />
          )}
        />
      </>
    );
  }

  // PLAN-E §21 Parte B — spans por rango de palabras: cada fila edita
  // desde/hasta (índices de palabra 0-based inclusive) + etiqueta, con la
  // vista previa del fragmento sobre `texto_analizar`.
  if (lf.itemShape === "span") {
    const rows = readSpans(plantilla);
    const textoBloque = getBlock(plantilla, "texto_analizar");
    const texto =
      textoBloque?.expr.kind === "str" ? textoBloque.expr.value : "";
    const palabras = texto.split(/\s+/).filter((w) => w.length > 0);
    return (
      <AccessibleList<SpanRow>
        items={rows}
        onChange={(next) => onChange(writeSpans(plantilla, next))}
        createItem={() => ({ desde: 0, hasta: 0, etiqueta: "" })}
        label={field.label}
        addLabel="Agregar span"
        itemNoun="span"
        minItems={lf.minItems ?? 0}
        renderItem={(item, index, onItem) => (
          <SpanRowEditor
            item={item}
            index={index}
            onItem={onItem}
            palabras={palabras}
          />
        )}
      />
    );
  }

  // identificar_palabras: las respuestas válidas son palabras → autocompletado
  // y validación contra el diccionario. Otros tipos (completar) usan texto plano.
  const esPalabras =
    lf.block === "respuestas_validas" &&
    plantilla.tipoInferido === "identificar_palabras";

  const items = readListStrings(plantilla, lf);
  const lang = useContext(LangContext);
  return (
    <AccessibleList<string>
      items={items}
      onChange={(next) => onChange(writeListStrings(plantilla, lf, next))}
      createItem={() => ""}
      label={field.label}
      addLabel="Agregar ítem"
      itemNoun="ítem"
      minItems={lf.minItems ?? 0}
      renderItem={(item, index, onItem) =>
        esPalabras ? (
          <PalabraCombobox
            label={`${field.label} ${index + 1}`}
            value={item}
            onChange={onItem}
            placeholder="palabra"
            lang={lang}
          />
        ) : (
          <input
            aria-label={`${field.label} ${index + 1}`}
            value={item}
            onChange={(e) => onItem(e.target.value)}
            className="w-full rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
          />
        )
      }
    />
  );
}

const CATEGORIAS_DATALIST_ID = "vblang-categorias-gramaticales";

/**
 * Fila de etiqueta para analisis_sintactico: la palabra usa el combobox del
 * diccionario (autocompletado + validación) y, al resolverse, propone la
 * categoría gramatical. Si la etiqueta está vacía se completa sola; el autor
 * siempre puede sobrescribirla (datalist con las categorías estándar).
 */
function EtiquetaRowEditor({
  item,
  index,
  onItem,
}: {
  item: EtiquetaRow;
  index: number;
  onItem: (next: EtiquetaRow) => void;
}) {
  const [sugerida, setSugerida] = useState<string | null>(null);
  const etiquetaId = useId();
  const lang = useContext(LangContext);

  const handleLookup = (_word: string, entry: EntradaDiccionario | null) => {
    const cat = sugerirCategoriaGramatical(entry);
    setSugerida(cat);
    // Autocompleta la etiqueta sólo si está vacía, para no pisar lo que el
    // autor ya escribió.
    if (cat && item.etiqueta.trim() === "") {
      onItem({ ...item, etiqueta: cat });
    }
  };

  const mostrarSugerencia =
    sugerida !== null && sugerida !== item.etiqueta.trim();

  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex gap-1">
        <div className="min-w-0 flex-1">
          <PalabraCombobox
            label={`Palabra ${index + 1}`}
            value={item.palabra}
            onChange={(palabra) => onItem({ ...item, palabra })}
            onLookup={handleLookup}
            placeholder="palabra"
            lang={lang}
          />
        </div>
        <input
          id={etiquetaId}
          list={CATEGORIAS_DATALIST_ID}
          aria-label={`Etiqueta ${index + 1}`}
          value={item.etiqueta}
          placeholder="etiqueta"
          onChange={(e) => onItem({ ...item, etiqueta: e.target.value })}
          className="min-w-0 flex-1 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
        />
      </div>
      {mostrarSugerencia && (
        <button
          type="button"
          onClick={() => onItem({ ...item, etiqueta: sugerida! })}
          className="self-start text-[10px] text-[var(--c-primary,#3b82f6)] hover:underline"
        >
          Sugerencia del diccionario: usar «{sugerida}»
        </button>
      )}
    </div>
  );
}

/**
 * PLAN-E §21 Parte B — fila de span: desde/hasta como <select> de palabras del
 * texto (imposible salirse de rango) y etiqueta libre. Si el texto todavía no
 * está escrito, caen a inputs numéricos.
 */
function SpanRowEditor({
  item,
  index,
  onItem,
  palabras,
}: {
  item: SpanRow;
  index: number;
  onItem: (next: SpanRow) => void;
  palabras: string[];
}) {
  const fragmento =
    palabras.length > 0 && item.desde <= item.hasta && item.hasta < palabras.length
      ? palabras.slice(item.desde, item.hasta + 1).join(" ")
      : null;
  const selectClass =
    "min-w-0 flex-1 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm";
  const wordSelect = (
    key: "desde" | "hasta",
    value: number,
  ) =>
    palabras.length > 0 ? (
      <select
        aria-label={`${key === "desde" ? "Desde" : "Hasta"} (span ${index + 1})`}
        value={value}
        onChange={(e) => onItem({ ...item, [key]: Number(e.target.value) })}
        className={selectClass}
      >
        {palabras.map((w, i) => (
          <option key={i} value={i}>
            {i}: {w}
          </option>
        ))}
      </select>
    ) : (
      <input
        type="number"
        min={0}
        aria-label={`${key === "desde" ? "Desde" : "Hasta"} (span ${index + 1})`}
        value={value}
        onChange={(e) => onItem({ ...item, [key]: Number(e.target.value) })}
        className={selectClass}
      />
    );
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex gap-1">
        {wordSelect("desde", item.desde)}
        {wordSelect("hasta", item.hasta)}
        <input
          aria-label={`Etiqueta (span ${index + 1})`}
          value={item.etiqueta}
          placeholder="etiqueta"
          onChange={(e) => onItem({ ...item, etiqueta: e.target.value })}
          className={selectClass}
        />
      </div>
      {fragmento !== null ? (
        <span className="text-[10px] text-[var(--c-muted,#64748b)]">«{fragmento}»</span>
      ) : (
        <span className="text-[10px] text-[var(--c-danger,#dc2626)]">
          Rango fuera del texto (desde ≤ hasta, dentro de las palabras).
        </span>
      )}
    </div>
  );
}

/* ---------------- WO-4: visual nativo (dispatcher + editores) ---------------- */

/** Kinds de visual autoreables desde el form (los demás se editan en código). */
const VISUAL_KIND_OPTS: { value: string; label: string }[] = [
  { value: "", label: "Ninguno" },
  { value: "static-image", label: "Imagen (PNG)" },
  { value: "line-chart", label: "Gráfico de líneas" },
  { value: "timeline", label: "Línea de tiempo" },
  { value: "latex", label: "Fórmula (LaTeX)" },
  { value: "vector-diagram", label: "Diagrama de vectores" },
  { value: "circuit", label: "Circuito eléctrico" },
];

/**
 * Visuales soportados por el render pero no autoreados acá.
 * Vacío en WO-10: `vector-diagram` y `circuit` ya tienen editor (replican
 * el patrón de line-chart). Si vuelve a aparecer uno nuevo, agregalo acá y
 * añadile un editor dedicado.
 */
const VISUAL_CODE_ONLY = new Set<string>([]);

/** Semilla mínima válida al elegir un kind nuevo (forma de `VisualSpec`). */
function seedVisual(kind: string): Record<string, unknown> {
  switch (kind) {
    case "line-chart":
      return {
        kind: "line-chart",
        title: "",
        series: [
          {
            id: "s1",
            label: "Serie 1",
            points: [
              { x: 0, y: 0 },
              { x: 1, y: 1 },
            ],
          },
        ],
      };
    case "timeline":
      return {
        kind: "timeline",
        title: "",
        events: [{ id: "e1", title: "Evento 1", date: "2000" }],
      };
    case "latex":
      return { kind: "latex", content: "x^2 + y^2 = z^2", displayMode: true };
    case "vector-diagram":
      return {
        kind: "vector-diagram",
        vectors: [
          { id: "v1", label: "Vector 1", dx: 1, dy: 0 },
        ],
      };
    case "circuit":
      return {
        kind: "circuit",
        elements: [
          { id: "r1", type: "resistor", value: 100, unit: "Ω" },
        ],
      };
    default:
      return { kind };
  }
}

/**
 * WO-4 — Dispatcher del bloque `visual:`. Un selector de kind enruta a cada
 * editor: `static-image` (PNG, sin cambios), `line-chart`, `timeline`, `latex`
 * y, desde WO-10, `vector-diagram` y `circuit`. Los kinds que el render
 * soporta pero el form no autorea (si los hubiera) se preservan y se editan
 * desde el modo Código.
 */
function VisualField({
  plantilla,
  onChange,
  uploadImage,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  uploadImage: (file: Blob) => Promise<string>;
}) {
  const kind = readVisualKind(plantilla);
  const selectId = useId();

  const cambiarKind = (next: string) => {
    if (next === kind) return;
    if (next === "") {
      onChange(removeVisual(plantilla));
      return;
    }
    if (next === "static-image") {
      onChange(writeStaticImage(plantilla, { src: "", alt: "" }));
      return;
    }
    onChange(writeVisualRaw(plantilla, seedVisual(next)));
  };

  // El selector ofrece los kinds autoreables; si el visual actual es uno
  // code-only, lo agregamos como opción seleccionada para no perder el contexto.
  const opts =
    kind && VISUAL_CODE_ONLY.has(kind)
      ? [...VISUAL_KIND_OPTS, { value: kind, label: `${kind} (modo Código)` }]
      : VISUAL_KIND_OPTS;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <label htmlFor={selectId} className="text-xs font-medium text-[var(--c-text,#0f172a)]">
          Tipo de visual
        </label>
        <select
          id={selectId}
          value={kind ?? ""}
          onChange={(e) => cambiarKind(e.target.value)}
          className="rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
        >
          {opts.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {kind === "static-image" && (
        <VisualPngField
          plantilla={plantilla}
          onChange={onChange}
          uploadImage={uploadImage}
        />
      )}
      {kind === "line-chart" && (
        <LineChartField plantilla={plantilla} onChange={onChange} />
      )}
      {kind === "timeline" && (
        <TimelineField plantilla={plantilla} onChange={onChange} />
      )}
      {kind === "latex" && (
        <LatexField plantilla={plantilla} onChange={onChange} />
      )}
      {kind === "vector-diagram" && (
        <VectorDiagramField plantilla={plantilla} onChange={onChange} />
      )}
      {kind === "circuit" && (
        <CircuitField plantilla={plantilla} onChange={onChange} />
      )}
      {kind && VISUAL_CODE_ONLY.has(kind) && (
        <ReadOnlyPlaceholder>
          El visual <code>{kind}</code> se renderiza pero se edita desde el modo
          Código. Se preserva tal cual.
        </ReadOnlyPlaceholder>
      )}
    </div>
  );
}

/* ---------------- WO-4: editor LaTeX ---------------- */

function LatexField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const content = typeof raw.content === "string" ? raw.content : "";
  const displayMode = raw.displayMode !== false; // default true
  const id = useId();
  const patch = (next: Record<string, unknown>) =>
    onChange(writeVisualRaw(plantilla, { kind: "latex", content, displayMode, ...next }));

  return (
    <div className="flex flex-col gap-1.5">
      <BufferedText
        id={id}
        label="Fórmula (LaTeX)"
        help="Sintaxis KaTeX, ej.: \\frac{a}{b} = c^2"
        multiline
        value={content}
        commit={(text) => {
          patch({ content: text });
          return true;
        }}
      />
      <label className="flex items-center gap-1.5 text-xs">
        <input
          type="checkbox"
          checked={displayMode}
          onChange={(e) => patch({ displayMode: e.target.checked })}
        />
        Modo display (centrado, tamaño grande)
      </label>
    </div>
  );
}

/* ---------------- WO-10: editor vector-diagram ---------------- */

interface VectorRow {
  id: string;
  label: string;
  /** Texto editable: dos números separados por coma/espacio (dx, dy). */
  componentes: string;
  color: string;
}

/* PLAN-E §8 — el color por vector se auto-asigna por índice (rotando esta
   paleta) en vez de un `<input type="color">` manual: el campo `color`
   sigue viviendo en el AST (compatibilidad con plantillas guardadas), sólo
   se retira el control de la UI. */
const VECTOR_PALETTE = ["#2563eb", "#dc2626", "#16a34a", "#d97706", "#7c3aed", "#0891b2"];

/** "3, 4" → {dx:3, dy:4}. Devuelve `null` si no parsea. */
function parseComponentes(texto: string): { dx: number; dy: number } | null {
  const parts = texto.split(/[,;\s]+/).map((s) => s.trim()).filter((s) => s !== "");
  if (parts.length !== 2) return null;
  const dx = Number(parts[0]);
  const dy = Number(parts[1]);
  if (!Number.isFinite(dx) || !Number.isFinite(dy)) return null;
  return { dx, dy };
}

function componentesToTexto(c: { dx: number; dy: number }): string {
  return `${c.dx}, ${c.dy}`;
}

function VectorDiagramField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const vectorsRaw = Array.isArray(raw.vectors) ? (raw.vectors as Record<string, unknown>[]) : [];
  const rows: VectorRow[] = vectorsRaw.map((v, i) => ({
    id: typeof v.id === "string" ? v.id : `v${i + 1}`,
    label: typeof v.label === "string" ? v.label : `Vector ${i + 1}`,
    componentes: parseComponentes(
      `${Number(v.dx)}, ${Number(v.dy)}`,
    )
      ? componentesToTexto({ dx: Number(v.dx), dy: Number(v.dy) })
      : `${Number(v.dx) || 0}, ${Number(v.dy) || 0}`,
    color: typeof v.color === "string" ? v.color : "#2563eb",
  }));

  const write = (nextRows: VectorRow[]) => {
    const vectors = nextRows.map((r) => {
      const parsed = parseComponentes(r.componentes) ?? { dx: 0, dy: 0 };
      const obj: Record<string, unknown> = {
        id: r.id,
        label: r.label,
        dx: parsed.dx,
        dy: parsed.dy,
        color: r.color,
      };
      return obj;
    });
    onChange(writeVisualRaw(plantilla, { kind: "vector-diagram", vectors }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] text-[var(--c-muted,#64748b)]">
        Diagrama de vectores con componentes (dx, dy) en el plano. El render
        los dibuja desde el origen (o desde un punto de aplicación si se
        agrega en el DSL).
      </p>
      <AccessibleList<VectorRow>
        items={rows}
        onChange={write}
        createItem={() => ({
          id: `v${rows.length + 1}`,
          label: `Vector ${rows.length + 1}`,
          componentes: "1, 0",
          color: VECTOR_PALETTE[rows.length % VECTOR_PALETTE.length],
        })}
        label="Vectores"
        addLabel="Agregar vector"
        itemNoun="vector"
        minItems={1}
        renderItem={(item, index, onItem) => (
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <input
                aria-label={`Etiqueta del vector ${index + 1}`}
                value={item.label}
                onChange={(e) => onItem({ ...item, label: e.target.value })}
                placeholder="Etiqueta"
                className="min-w-0 flex-1 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
              />
            </div>
            <input
              aria-label={`Componentes (dx, dy) del vector ${index + 1}`}
              value={item.componentes}
              onChange={(e) => onItem({ ...item, componentes: e.target.value })}
              placeholder="dx, dy (ej.: 3, 4)"
              className="rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 font-mono text-xs"
            />
          </div>
        )}
      />
    </div>
  );
}

/* ---------------- WO-10: editor circuit ---------------- */

interface ElementoCircuitoRow {
  id: string;
  type: string;
  value: string;
  unit: string;
}

function CircuitField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const elementsRaw = Array.isArray(raw.elements) ? (raw.elements as Record<string, unknown>[]) : [];
  const rows: ElementoCircuitoRow[] = elementsRaw.map((e, i) => ({
    id: typeof e.id === "string" ? e.id : `e${i + 1}`,
    type: typeof e.type === "string" ? e.type : "resistor",
    value: e.value != null ? String(e.value) : "",
    unit: typeof e.unit === "string" ? e.unit : "",
  }));

  const write = (nextRows: ElementoCircuitoRow[]) => {
    const elements = nextRows.map((r) => {
      const obj: Record<string, unknown> = { id: r.id, type: r.type };
      const v = Number(r.value);
      if (r.value.trim() !== "" && Number.isFinite(v)) obj.value = v;
      if (r.unit.trim() !== "") obj.unit = r.unit;
      return obj;
    });
    onChange(writeVisualRaw(plantilla, { kind: "circuit", elements }));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] text-[var(--c-muted,#64748b)]">
        Circuito eléctrico: cada elemento tiene un tipo (resistor, capacitor,
        fuente, etc.), un valor numérico y una unidad. El render los muestra
        en serie.
      </p>
      <AccessibleList<ElementoCircuitoRow>
        items={rows}
        onChange={write}
        createItem={() => ({
          id: `e${rows.length + 1}`,
          type: "resistor",
          value: "100",
          unit: "Ω",
        })}
        label="Elementos"
        addLabel="Agregar elemento"
        itemNoun="elemento"
        minItems={1}
        renderItem={(item, index, onItem) => (
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <input
                aria-label={`Tipo del elemento ${index + 1}`}
                value={item.type}
                onChange={(e) => onItem({ ...item, type: e.target.value })}
                placeholder="tipo (resistor, capacitor, …)"
                className="min-w-0 flex-1 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
              />
              <input
                aria-label={`Valor del elemento ${index + 1}`}
                value={item.value}
                onChange={(e) => onItem({ ...item, value: e.target.value })}
                placeholder="valor"
                className="w-24 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm font-mono"
              />
              <input
                aria-label={`Unidad del elemento ${index + 1}`}
                value={item.unit}
                onChange={(e) => onItem({ ...item, unit: e.target.value })}
                placeholder="unidad"
                className="w-20 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}

/* ---------------- WO-4: editor line-chart ---------------- */

interface SerieRow {
  id: string;
  label: string;
  /** Texto editable: una línea "x, y" por punto. */
  puntos: string;
}

/** "0, 1\n2, 3" → [{x:0,y:1},{x:2,y:3}]. Descarta líneas que no parsean. */
function parsePuntos(texto: string): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  for (const linea of texto.split("\n")) {
    const m = linea.trim();
    if (m === "") continue;
    const [xs, ys] = m.split(/[,;\s]+/);
    const x = Number(xs);
    const y = Number(ys);
    if (Number.isFinite(x) && Number.isFinite(y)) out.push({ x, y });
  }
  return out;
}

function puntosToTexto(points: { x: number; y: number }[]): string {
  return points.map((p) => `${p.x}, ${p.y}`).join("\n");
}

function LineChartField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const title = typeof raw.title === "string" ? raw.title : "";
  const xLabel = typeof raw.xLabel === "string" ? raw.xLabel : "";
  const yLabel = typeof raw.yLabel === "string" ? raw.yLabel : "";
  const seriesRaw = Array.isArray(raw.series) ? (raw.series as Record<string, unknown>[]) : [];
  const titleId = useId();
  const xId = useId();
  const yId = useId();

  const rows: SerieRow[] = seriesRaw.map((s, i) => ({
    id: typeof s.id === "string" ? s.id : `s${i + 1}`,
    label: typeof s.label === "string" ? s.label : `Serie ${i + 1}`,
    puntos: puntosToTexto(
      Array.isArray(s.points)
        ? (s.points as Record<string, unknown>[])
            .map((p) => ({ x: Number(p.x), y: Number(p.y) }))
            .filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y))
        : [],
    ),
  }));

  const write = (nextTitle: string, nextX: string, nextY: string, nextRows: SerieRow[]) => {
    const series = nextRows.map((r) => ({
      id: r.id,
      label: r.label,
      points: parsePuntos(r.puntos),
    }));
    const obj: Record<string, unknown> = { kind: "line-chart" };
    if (nextTitle.trim() !== "") obj.title = nextTitle;
    if (nextX.trim() !== "") obj.xLabel = nextX;
    if (nextY.trim() !== "") obj.yLabel = nextY;
    obj.series = series;
    onChange(writeVisualRaw(plantilla, obj));
  };

  return (
    <div className="flex flex-col gap-2">
      <BufferedText
        id={titleId}
        label="Título del gráfico"
        value={title}
        commit={(t) => {
          write(t, xLabel, yLabel, rows);
          return true;
        }}
      />
      <div className="grid grid-cols-2 gap-2">
        <BufferedText
          id={xId}
          label="Eje X"
          value={xLabel}
          commit={(t) => {
            write(title, t, yLabel, rows);
            return true;
          }}
        />
        <BufferedText
          id={yId}
          label="Eje Y"
          value={yLabel}
          commit={(t) => {
            write(title, xLabel, t, rows);
            return true;
          }}
        />
      </div>
      <AccessibleList<SerieRow>
        items={rows}
        onChange={(next) => write(title, xLabel, yLabel, next)}
        createItem={() => ({
          id: `s${rows.length + 1}`,
          label: `Serie ${rows.length + 1}`,
          puntos: "0, 0\n1, 1",
        })}
        label="Series"
        addLabel="Agregar serie"
        itemNoun="serie"
        minItems={1}
        renderItem={(item, index, onItem) => (
          <div className="flex flex-col gap-1">
            <input
              aria-label={`Nombre de la serie ${index + 1}`}
              value={item.label}
              onChange={(e) => onItem({ ...item, label: e.target.value })}
              placeholder="Nombre de la serie"
              className="w-full rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
            />
            <textarea
              aria-label={`Puntos de la serie ${index + 1}`}
              value={item.puntos}
              onChange={(e) => onItem({ ...item, puntos: e.target.value })}
              rows={3}
              placeholder={"Un punto por línea: x, y\nej.: 0, 1"}
              className="w-full rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 font-mono text-xs"
            />
          </div>
        )}
      />
    </div>
  );
}

/* ---------------- WO-4: editor timeline ---------------- */

interface EventoRow {
  id: string;
  title: string;
  date: string;
  description: string;
}

function TimelineField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const title = typeof raw.title === "string" ? raw.title : "";
  const eventsRaw = Array.isArray(raw.events) ? (raw.events as Record<string, unknown>[]) : [];
  const titleId = useId();

  const rows: EventoRow[] = eventsRaw.map((e, i) => ({
    id: typeof e.id === "string" ? e.id : `e${i + 1}`,
    title: typeof e.title === "string" ? e.title : "",
    date: typeof e.date === "string" ? e.date : "",
    description: typeof e.description === "string" ? e.description : "",
  }));

  const write = (nextTitle: string, nextRows: EventoRow[]) => {
    const events = nextRows.map((r) => {
      const ev: Record<string, unknown> = { id: r.id, title: r.title, date: r.date };
      if (r.description.trim() !== "") ev.description = r.description;
      return ev;
    });
    const obj: Record<string, unknown> = { kind: "timeline" };
    if (nextTitle.trim() !== "") obj.title = nextTitle;
    obj.events = events;
    onChange(writeVisualRaw(plantilla, obj));
  };

  return (
    <div className="flex flex-col gap-2">
      <BufferedText
        id={titleId}
        label="Título de la línea de tiempo"
        value={title}
        commit={(t) => {
          write(t, rows);
          return true;
        }}
      />
      <p className="text-[10px] text-[var(--c-muted,#64748b)]">
        Cargá los eventos a mano. (También podés alimentarla desde el dataset{" "}
        <code>eventos_historicos</code> editando en modo Código.)
      </p>
      <AccessibleList<EventoRow>
        items={rows}
        onChange={(next) => write(title, next)}
        createItem={() => ({
          id: `e${rows.length + 1}`,
          title: "Nuevo evento",
          date: "",
          description: "",
        })}
        label="Eventos"
        addLabel="Agregar evento"
        itemNoun="evento"
        minItems={1}
        renderItem={(item, index, onItem) => (
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <input
                aria-label={`Título del evento ${index + 1}`}
                value={item.title}
                onChange={(e) => onItem({ ...item, title: e.target.value })}
                placeholder="Título"
                className="min-w-0 flex-1 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
              />
              <input
                aria-label={`Fecha del evento ${index + 1}`}
                value={item.date}
                onChange={(e) => onItem({ ...item, date: e.target.value })}
                placeholder="Fecha (ej.: 1816)"
                className="w-32 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
              />
            </div>
            <input
              aria-label={`Descripción del evento ${index + 1}`}
              value={item.description}
              onChange={(e) => onItem({ ...item, description: e.target.value })}
              placeholder="Descripción (opcional)"
              className="w-full rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-xs"
            />
          </div>
        )}
      />
    </div>
  );
}

/* ---------------- add-on PNG ---------------- */

function VisualPngField({
  plantilla,
  onChange,
  uploadImage,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  uploadImage: (file: Blob) => Promise<string>;
}) {
  const { t } = useI18n();
  const current = readStaticImage(plantilla);
  // Una imagen "cargada" es un bloque con `src` no vacío. Un static-image recién
  // sembrado (al elegir el kind) tiene `src` vacío → todavía no insertada.
  const imagenCargada = !!current && current.src.trim() !== "";
  const [src, setSrc] = useState<string>(current?.src ?? "");
  const [alt, setAlt] = useState<string>(current?.alt ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const altId = useId();

  // WO-4 — el rebote por "visual no-imagen" se eliminó: el dispatcher de
  // `VisualField` ya enruta cada kind a su editor (este componente sólo se
  // monta para `static-image`).

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const url = await uploadImage(file);
      setSrc(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo subir la imagen");
    } finally {
      setUploading(false);
    }
  };

  // El alt es OBLIGATORIO (WCAG 1.1.1): sin él no se inserta/actualiza.
  const canInsert = src.trim() !== "" && alt.trim() !== "";

  return (
    <div className="flex flex-col gap-1">
      <input
        type="file"
        accept="image/png"
        aria-label="Subir imagen PNG"
        onChange={(e) => void onFile(e.target.files?.[0])}
        className="text-xs"
      />
      {uploading && <span className="text-[10px] text-[var(--c-muted,#64748b)]">Subiendo…</span>}
      {error && (
        <span role="alert" className="text-[10px] text-red-600">
          {error}
        </span>
      )}
      {src && (
        <span className="break-all text-[10px] text-[var(--c-muted,#64748b)]">
          Archivo: {src}
        </span>
      )}
      <label htmlFor={altId} className="text-xs font-medium text-[var(--c-text,#0f172a)]">
        Texto alternativo (alt) — obligatorio
      </label>
      <input
        id={altId}
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
        aria-required="true"
        aria-invalid={alt.trim() === "" || undefined}
        placeholder={t("plantillaEditorSchema.describiLaImagenParaLectores")}
        className="rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
      />
      {alt.trim() === "" && (
        <span role="alert" className="text-[10px] text-red-600">
          El alt es obligatorio para insertar la imagen.
        </span>
      )}
      <div className="flex gap-2">
        <button
          type="button"
          disabled={!canInsert}
          onClick={() => onChange(writeStaticImage(plantilla, { src, alt }))}
          className="rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-xs disabled:opacity-40"
        >
          {/* WO-4 — un bloque static-image con `src` vacío (recién seleccionado
              el kind) cuenta como "no insertada todavía". */}
          {imagenCargada ? "Actualizar imagen" : "Insertar imagen"}
        </button>
        {imagenCargada && (
          <button
            type="button"
            onClick={() => onChange(removeVisual(plantilla))}
            className="rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-xs text-red-600"
          >
            Quitar imagen
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------------- placeholder ---------------- */

function ReadOnlyPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-testid="vblang-schema-readonly"
      className="rounded border border-dashed border-[var(--c-border,#cbd5e1)] bg-white px-3 py-2 text-xs italic text-[var(--c-muted,#64748b)]"
    >
      {children}
    </div>
  );
}

function Section({
  title,
  children,
  ...rest
}: {
  title: string;
  children: React.ReactNode;
  // VB-B5 — aceptamos props extra (data-field-id, data-error) para
  // que el Section de variables pueda identificarse sin tener que
  // agregar un wrapper extra.
  [key: string]: unknown;
}) {
  return (
    <section
      className="flex flex-col gap-2 rounded border border-[var(--c-border,#e2e8f0)] p-3"
      {...rest}
    >
      <h3 className="text-sm font-semibold text-[var(--c-text,#0f172a)]">{title}</h3>
      {children}
    </section>
  );
}

/* ---------------- componente principal ---------------- */

export default function PlantillaEditorSchema({
  plantilla,
  onChange,
  valoresActuales,
  tieneErrores,
  lintIssues = [],
  uploadImage = uploadPng,
}: Props) {
  const { t } = useI18n();
  const baseGenerador = isGeneradorBase(plantilla);
  const tipo: TipoPregunta = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const extras = unhandledBlocks(plantilla);
  const variables = getBlock(plantilla, "variables")?.declaraciones ?? [];
  const generadorBloque = plantilla.bloques.find((b) => b.kind === "generador");
  const generadorId =
    generadorBloque?.kind === "generador" ? generadorBloque.id : "";
  // VB-B5 — calculamos los errores por campo UNA vez por render.
  // Es un memo implícito (no usamos useMemo porque el map es barato
  // y queremos que se recalcule cuando cambian los issues — la
  // firma `lintIssueToFieldId` se llama por issue y no se cachea).
  const fieldErrors: FieldErrors = buildFieldErrors(lintIssues);
  /** Default razonable al activar la base generador (primer generador). */
  const defaultGeneradorId = listGeneradores()[0]?.id ?? "";

  const [confirmDialog, setConfirmDialog] = useState<{
    message: string;
    onConfirm: () => void;
  } | null>(null);
  const enunciadoFieldRef = useRef<EnunciadoFieldHandle | null>(null);

  // QA-FIX-10: idioma del diccionario. Compartido por todos los
  // PalabraCombobox del template vía LangContext. El LangSelector
  // hace el fetch inicial y aplica el default (es si está, si no
  // el primero). Aquí sólo almacenamos el valor.
  const [lang, setLang] = useState<string>("es");

  /**
   * Activa/cambia la base generador. Si el enunciado heredado interpola
   * variables que el nuevo generador no provee, ofrece resetearlo al texto de
   * ejemplo (confirm + Deshacer), en vez de dejarlo roto en silencio.
   */
  const applyGeneradorWithCheck = (prev: Plantilla, id: string) => {
    const next = applyGenerador(prev, id);
    onChange(next);
    const undef = enunciadoUndefinedVars(next, getGeneradorProvidedVars(id));
    if (undef.length === 0) return;
    const reset = resetEnunciadoPlaceholder(next);
    setConfirmDialog({
      message:
        `El enunciado usa ${undef.length === 1 ? "una variable que" : "variables que"} ` +
        `este generador no provee (${undef.join(", ")}). ` +
        "¿Resetear el enunciado al texto de ejemplo? Podés revertirlo con Deshacer (↶).",
      onConfirm: () => {
        onChange(reset);
        setConfirmDialog(null);
      },
    });
  };

  const insertarVariableEnEnunciado = (token: string) => {
    enunciadoFieldRef.current?.insert(token);
  };

  return (
    <LangContext.Provider value={lang}>
      <div className="flex flex-col gap-3" data-testid="vblang-schema-editor">
        {tieneErrores && (
          <div role="alert" className="rounded bg-red-50 px-3 py-2 text-xs text-red-700">
            El código tiene errores; corregilos para que el preview funcione.
          </div>
        )}

        {/* QA-FIX-10: selector de idioma del diccionario, poblado con
            los idiomas REALES del archivo (no lista fija). Vive al
            tope del editor porque el lang es transversal a todos los
            PalabraCombobox del template. */}
        <div className="flex items-center justify-between gap-2">
          <LangSelector value={lang} onChange={setLang} />
        </div>

        <Section title={t("plantillaEditorSchema.baseDeLaPregunta")}>
        <div role="radiogroup" aria-label={t("plantillaEditorSchema.baseDeLaPregunta")} className="flex gap-3">
          <label className="flex items-center gap-1 text-xs">
            <input
              type="radio"
              name="base"
              checked={!baseGenerador}
              onChange={() => onChange(applyTipo(plantilla, tipo === undefined ? "input" : tipo))}
            />{t("plantillaEditorSchema.tipoDePregunta")}</label>
          <label className="flex items-center gap-1 text-xs">
            <input
              type="radio"
              name="base"
              checked={baseGenerador}
              onChange={() =>
                applyGeneradorWithCheck(plantilla, generadorId || defaultGeneradorId)
              }
            />{t("plantillaEditorSchema.generadorAsistido")}</label>
        </div>
      </Section>

      {baseGenerador ? (
        <Section title={t("plantillaEditorSchema.generadorAsistido")}>
          <GeneradorPicker
            value={generadorId}
            onChange={(id) => applyGeneradorWithCheck(plantilla, id)}
            docsVariant="formulario"
            onInsertVariable={insertarVariableEnEnunciado}
          />
          <DificultadControl plantilla={plantilla} onChange={onChange} />
          <EnunciadoGeneradorField
            ref={enunciadoFieldRef}
            plantilla={plantilla}
            onChange={onChange}
            variables={getGeneradorProvidedVars(generadorId)}
          />
          <ReadOnlyPlaceholder>{t("plantillaEditorSchema.conUnGeneradorActivoLos")}</ReadOnlyPlaceholder>
        </Section>
      ) : (
        <Section title={t("plantillaEditorSchema.tipoDePregunta")}>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="tipo-select" className="text-xs font-medium">{t("comun.tipo")}</label>
            <select
              id="tipo-select"
              data-testid="vblang-form-tipo"
              value={tipo}
              onChange={(e) => onChange(applyTipo(plantilla, e.target.value as TipoPregunta))}
              className="rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
            >
              {ALL_QUESTION_TYPES.map((t) => (
                <option key={t} value={t}>
                  {QUESTION_TYPE_SCHEMAS[t].label}
                </option>
              ))}
            </select>
            <span className="text-[10px] text-[var(--c-muted,#64748b)]">
              {schema.descripcion}
            </span>
          </div>

          {schema.fields.map((field) =>
            field.block === "enunciado" ? (
              <EnunciadoField
                key={field.key}
                plantilla={plantilla}
                onChange={onChange}
                fieldErrors={fieldErrors}
              />
            ) : (
              <FieldErrorWrapper
                key={field.key}
                fieldId={field.key}
                fieldErrors={fieldErrors}
              >
                <FieldControl
                  field={field}
                  plantilla={plantilla}
                  onChange={onChange}
                />
              </FieldErrorWrapper>
            ),
          )}

          {/* WO-1: tolerancia_abs va junto a la `tolerancia` relativa (sólo
              cuando el tipo la usa, p. ej. input numérico). */}
          {schema.fields.some((f) => f.block === "tolerancia") && (
            <ToleranciaAbsField plantilla={plantilla} onChange={onChange} />
          )}

          {/* WO-1: respuesta_nombre acompaña la config de mapa (alternativa por
              nombre al código ISO; habilita seleccionar provincias por nombre).
              WO-10: encuadre acompaña la config de mapa (vista bloqueada). */}
          {tipo === "marcar_mapa" && (
            <>
              <EncuadreField plantilla={plantilla} onChange={onChange} />
              <RespuestaNombreField plantilla={plantilla} onChange={onChange} />
            </>
          )}
        </Section>
      )}

      {!baseGenerador && (
        <Section
          title={t("plantillaEditorTiza.variables")}
          // VB-B5 — el bloque variables no está en `schema.fields`
          // (es un Section aparte), así que lo marcamos a mano para
          // que `lintIssueToFieldId("var-duplicada" | "range-invalid")`
          // pueda pintarlo.
          data-field-id="variables"
          data-error={fieldHasError("variables", fieldErrors) || undefined}
        >
          {/* VB-B6 — editor de variables (reemplaza al
              VariablesCards presentacional). Las cards son
              editables; el "+Añadir" al final de la lista y la
              mini-toolbar al costado de la card activa insertan
              nuevas variables en la posición del seleccionado. */}
          <VariablesEditor
            plantilla={plantilla}
            variables={variables}
            valores={valoresActuales}
            onChange={onChange}
          />
          <FieldErrorBadge fieldId="variables" errors={fieldErrors} />
        </Section>
      )}

      <Section title={t("plantillaEditorSchema.puntajeYPista")}>
        <PuntajePistaField plantilla={plantilla} onChange={onChange} />
      </Section>

      {/* WO-1: pistas escalonadas (bloque `pistas:` plural). Conviven con la
          "Pista" única de arriba (metadata.pista): aquélla se muestra completa,
          éstas se piden de a una. No hay migración entre ambas. */}
      <Section title={t("plantillaEditorSchema.pistasEscalonadas")}>
        <PistasField plantilla={plantilla} onChange={onChange} />
        <span className="text-[10px] text-[var(--c-muted,#64748b)]">
          Secuencia que el alumno pide de a una. Distinta de la «Pista» única de
          arriba; podés usar una, la otra o ambas.
        </span>
      </Section>

      {/* WO-1: explicación mostrada tras responder (interpola variables). */}
      <Section title={t("plantillaEditorTiza.explicacion")}>
        <ExplicacionField plantilla={plantilla} onChange={onChange} />
      </Section>

      {/* WO-1: restricciones (fórmulas que deben cumplirse, p. ej. a != 0).
          El generador las provee/ignora, por eso sólo en base "tipo". */}
      {!baseGenerador && (
        <Section title={t("plantillaEditorSchema.restricciones")}>
          <RestriccionesField plantilla={plantilla} onChange={onChange} />
        </Section>
      )}

      <Section title={t("plantillaEditorSchema.visualOpcional")}>
        <VisualField
          plantilla={plantilla}
          onChange={onChange}
          uploadImage={uploadImage}
        />
      </Section>

      {extras.length > 0 && (
        <Section title={t("plantillaEditorSchema.otrosBloquesPreservados")}>
          <ReadOnlyPlaceholder>{t("plantillaEditorSchema.estosBloquesNoSeEditan")}<code>{extras.join(", ")}</code>. Editalos desde el modo
            Código.
          </ReadOnlyPlaceholder>
        </Section>
      )}

      <Section title={t("menuProfesor.resumen")}>
        <ResumenPanel
          plantilla={plantilla}
          baseGenerador={baseGenerador}
          tipo={tipo}
          tieneErrores={!!tieneErrores}
        />
      </Section>

      {confirmDialog && (
        <ConfirmDialog
          message={confirmDialog.message}
          onConfirm={confirmDialog.onConfirm}
          onCancel={() => setConfirmDialog(null)}
        />
      )}
      </div>
    </LangContext.Provider>
  );
}

/* ---------------- base generador: dificultad + enunciado ---------------- */

const DIFICULTADES: { value: string; label: string }[] = [
  { value: "", label: "Al azar" },
  { value: "basico", label: "Básico" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
];

/** Control de dificultad (escribe `metadata: dificultad`) para el formulario. */
function DificultadControl({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const id = useId();
  const value = readDificultad(plantilla);
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={id} className="text-xs font-medium text-[var(--c-text,#0f172a)]">
        Dificultad
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(writeDificultad(plantilla, e.target.value))}
        className="rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
      >
        {DIFICULTADES.map((d) => (
          <option key={d.value} value={d.value}>
            {d.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ---------------- puntaje + pista (metadata) ---------------- */

/**
 * Puntaje y pista, persistidos en `metadata`. Antes caían en el placeholder
 * read-only (DIFF-06): ahora son inputs reales con label asociado. Vacío =
 * quitar el campo del metadata (round-trip sin basura).
 */
function PuntajePistaField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const puntajeId = useId();
  const pistaId = useId();
  const puntaje = readPuntaje(plantilla);
  const pista = readPista(plantilla);

  // Buffer local con foco para el puntaje: evita que el round-trip del padre
  // (debounced) pise lo que se está tipeando (ej. un decimal a medio escribir).
  const [puntajeBuf, setPuntajeBuf] = useState(puntaje === null ? "" : String(puntaje));
  const puntajeFocused = useRef(false);
  useEffect(() => {
    if (!puntajeFocused.current) {
      setPuntajeBuf(puntaje === null ? "" : String(puntaje));
    }
  }, [puntaje]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <label htmlFor={puntajeId} className="text-xs font-medium text-[var(--c-text,#0f172a)]">
          Puntaje
        </label>
        <input
          id={puntajeId}
          type="number"
          step={0.5}
          min={0}
          value={puntajeBuf}
          onFocus={() => {
            puntajeFocused.current = true;
          }}
          onBlur={() => {
            puntajeFocused.current = false;
            setPuntajeBuf(puntaje === null ? "" : String(puntaje));
          }}
          onChange={(e) => {
            const raw = e.target.value;
            setPuntajeBuf(raw);
            if (raw.trim() === "") {
              onChange(writePuntaje(plantilla, null));
              return;
            }
            const n = Number(raw);
            if (Number.isFinite(n)) onChange(writePuntaje(plantilla, n));
          }}
          placeholder="Sin puntaje"
          className="w-28 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
        />
      </div>
      <BufferedText
        id={pistaId}
        label="Pista"
        help="Pista opcional para el estudiante."
        value={pista}
        commit={(text) => {
          onChange(writePista(plantilla, text));
          return true;
        }}
      />
    </div>
  );
}

/* ---------------- WO-1: bloques antes solo editables en DSL ---------------- */

/** tolerancia_abs: número crudo (sin `%`), junto a la tolerancia relativa. */
function ToleranciaAbsField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const id = useId();
  return (
    <BufferedText
      id={id}
      label="Tolerancia absoluta"
      help="Margen absoluto (sin %). Útil cuando la respuesta esperada es 0 o muy chica. Opcional."
      value={readToleranciaAbs(plantilla)}
      commit={(text) => {
        const next = writeToleranciaAbs(plantilla, text);
        if (next === null) return false;
        onChange(next);
        return true;
      }}
    />
  );
}

/** respuesta_nombre: validar por nombre (alternativa al ISO) en el mapa. */
function RespuestaNombreField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const id = useId();
  return (
    <BufferedText
      id={id}
      label="Nombre correcto (alternativa al ISO)"
      help="Valida por nombre de país/región (ej.: Argentina), p. ej. para seleccionar provincias por nombre. Opcional."
      value={readRespuestaNombre(plantilla)}
      commit={(text) => {
        onChange(writeRespuestaNombre(plantilla, text));
        return true;
      }}
    />
  );
}

/** WO-10: encuadre del mapa (vista bloqueada: pan/zoom OFF).
 * Formato: 4 números separados por coma/espacio: oeste, sur, este, norte.
 * Vacío = sin encuadre (vista interactiva). Si el texto no parsea como 4
 * números válidos, el commit no se aplica y se muestra el error del BufferedText. */
function EncuadreField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const id = useId();
  return (
    <BufferedText
      id={id}
      label="Encuadre fijo (vista bloqueada)"
      help="Opcional. 4 números: oeste, sur, este, norte (ej.: -75, -55, -53, -20). Si está, el mapa se ve sin pan/zoom y recortado. Si está vacío, el mapa es interactivo."
      value={readEncuadre(plantilla)}
      commit={(text) => {
        const next = writeEncuadre(plantilla, text);
        if (next === null) return false;
        onChange(next);
        return true;
      }}
    />
  );
}

/** explicacion: texto interpolable que se muestra tras responder. */
function ExplicacionField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const id = useId();
  return (
    <BufferedText
      id={id}
      label="Explicación"
      help="Se muestra al alumno tras responder. Podés interpolar variables con {var}."
      multiline
      value={readExplicacion(plantilla)}
      commit={(text) => {
        onChange(writeExplicacion(plantilla, text));
        return true;
      }}
    />
  );
}

/** pistas escalonadas (bloque plural): lista ordenada, reordenable. */
function PistasField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const items = readPistas(plantilla);
  return (
    <AccessibleList<string>
      items={items}
      onChange={(next) => onChange(writePistas(plantilla, next))}
      createItem={() => ""}
      label="Pistas (en orden)"
      addLabel="Agregar pista"
      itemNoun="pista"
      renderItem={(item, index, onItem) => (
        <input
          aria-label={`Pista ${index + 1}`}
          value={item}
          onChange={(e) => onItem(e.target.value)}
          placeholder="Pista que el alumno pide de a una"
          className="w-full rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
        />
      )}
    />
  );
}

/**
 * restricciones: dash-list de fórmulas (ej. `a != 0`). Mantiene un buffer local
 * de strings para no perder lo que se tipea mientras una fórmula no parsea (el
 * AST sólo guarda las válidas, vía `writeRestricciones`). Se re-sincroniza con
 * el AST cuando cambia por fuera (modo Código, undo): se compara la proyección
 * canónica de las filas válidas locales contra el bloque del AST.
 */
function RestriccionesField({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const astItems = readRestricciones(plantilla);
  const [rows, setRows] = useState<string[]>(astItems);

  // Proyección canónica (re-emitida) de las filas locales válidas, para
  // distinguir nuestras propias escrituras de un cambio externo del AST.
  const localCanonical = rows
    .map((r) => (r.trim() === "" ? null : textToExpr(r)))
    .filter((e): e is Expr => e !== null)
    .map(exprToText);

  const astKey = astItems.join("\n");
  useEffect(() => {
    if (localCanonical.join("\n") !== astKey) {
      setRows(astItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [astKey]);

  const update = (next: string[]) => {
    setRows(next);
    onChange(writeRestricciones(plantilla, next));
  };

  return (
    <AccessibleList<string>
      items={rows}
      onChange={update}
      createItem={() => ""}
      label="Restricciones (fórmulas)"
      addLabel="Agregar restricción"
      itemNoun="restricción"
      renderItem={(item, index, onItem) => {
        const invalid = item.trim() !== "" && textToExpr(item) === null;
        return (
          <div className="flex flex-col gap-0.5">
            <input
              aria-label={`Restricción ${index + 1}`}
              aria-invalid={invalid || undefined}
              value={item}
              onChange={(e) => onItem(e.target.value)}
              placeholder="ej.: a != 0"
              className={
                "w-full rounded border px-2 py-1 font-mono text-sm " +
                (invalid ? "border-red-500" : "border-[var(--c-border,#cbd5e1)]")
              }
            />
            {invalid && (
              <span role="alert" className="text-[10px] text-red-600">
                Fórmula inválida: no se guarda hasta corregirla.
              </span>
            )}
          </div>
        );
      }}
    />
  );
}

/* ---------------- variables como cards (solo lectura) ---------------- */

type VarTone = "success" | "info" | "warning" | "accent";

/**
 * Infiere la "pill de tipo" de una variable a partir de su expresión: random →
 * Aleatorio entero, random_float → Aleatorio decimal, uno_de/choice → Lista,
 * etc. Cada tono mapea a un token de color del tema (el punto de color).
 */
export function inferTipoVar(expr: Expr): { label: string; tone: VarTone } {
  if (expr.kind === "fun_call") {
    switch (expr.name) {
      case "random":
        return { label: "Aleatorio entero", tone: "success" };
      case "random_float":
        return { label: "Aleatorio decimal", tone: "success" };
      case "uno_de":
      case "choice":
        return { label: "Lista", tone: "info" };
      case "rango":
      case "range":
        return { label: "Rango", tone: "info" };
      default:
        return { label: "Función", tone: "accent" };
    }
  }
  if (expr.kind === "num") return { label: "Número", tone: "warning" };
  if (expr.kind === "str") return { label: "Texto", tone: "warning" };
  if (expr.kind === "array") return { label: "Lista", tone: "info" };
  return { label: "Expresión", tone: "accent" };
}

/**
 * Formatea un valor anidado (string SIEMPRE entre comillas, recursivo en
 * objetos/arrays). Uso interno de `formatValor` para los miembros de un
 * objeto o array — a diferencia del nivel superior, acá las strings se citan
 * para que `{ nombre: "Argentina", iso: "ARG" }` se lea como literal de JS,
 * no como texto plano.
 */
function formatValorAnidado(v: unknown): string {
  if (v === null || v === undefined) return "—";
  if (typeof v === "string") return JSON.stringify(v);
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (Array.isArray(v)) return `[${v.map(formatValorAnidado).join(", ")}]`;
  if (typeof v === "object") {
    const entries = Object.entries(v as Record<string, unknown>)
      .map(([k, val]) => `${k}: ${formatValorAnidado(val)}`)
      .join(", ");
    return `{ ${entries} }`;
  }
  return String(v);
}

/** Formatea el valor actual del preview ("ahora: X") para mostrarlo en la card. */
export function formatValor(v: unknown): string {
  if (v === null || v === undefined) return "—";
  if (typeof v === "string") return v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  // Filas de dataset (objeto) o pool de filas (array de objetos): antes caía
  // al fallback `String(v)`, que para objetos da literalmente "[object
  // Object]" — ej. una variable `paises: [{nombre:"Argentina",...}, ...]` o
  // `pais: uno_de(paises)` se veía como "[object Object],[object Object]".
  // Recursamos en `formatValorAnidado` para mostrar el literal legible.
  if (Array.isArray(v)) return `[${v.map(formatValorAnidado).join(", ")}]`;
  if (typeof v === "object") {
    const entries = Object.entries(v as Record<string, unknown>)
      .map(([k, val]) => `${k}: ${formatValorAnidado(val)}`)
      .join(", ");
    return `{ ${entries} }`;
  }
  return String(v);
}

/* ---------------- resumen (DIFF-02) ---------------- */

/**
 * Panel de resumen: cantidad de variables, tipo actual, combinaciones posibles
 * y un pill de estado (ok/error). El estado refleja `tieneErrores`, que el
 * padre alimenta con el lint inline generador-aware (coincide con el preview).
 */
function ResumenPanel({
  plantilla,
  baseGenerador,
  tipo,
  tieneErrores,
}: {
  plantilla: Plantilla;
  baseGenerador: boolean;
  tipo: TipoPregunta;
  tieneErrores: boolean;
}) {
  const nVars = contarVariables(plantilla);
  const { total, continuo } = combinacionesPosibles(plantilla);
  const tipoLabel = baseGenerador
    ? "Generador asistido"
    : (QUESTION_TYPE_SCHEMAS[tipo]?.label ?? tipo);
  const combinaciones = baseGenerador
    ? "las define el generador"
    : continuo
      ? "muchas (incluye decimales)"
      : total.toLocaleString("es-AR");

  return (
    <div className="flex flex-col gap-1.5 rounded border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-3 text-xs">
      <ResumenRow label="Variables" value={String(baseGenerador ? 0 : nVars)} />
      <ResumenRow label="Tipo" value={tipoLabel} />
      <ResumenRow label="Combinaciones posibles" value={combinaciones} />
      <div className="pt-1">
        <span
          className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
            tieneErrores
              ? "bg-[color-mix(in_srgb,var(--c-danger)_12%,transparent)] text-[var(--c-danger)]"
              : "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]"
          }`}
        >
          {tieneErrores ? "Con errores" : "Sin errores"}
        </span>
      </div>
    </div>
  );
}

function ResumenRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[var(--c-muted,#64748b)]">{label}</span>
      <span className="font-semibold text-[var(--c-text)]">{value}</span>
    </div>
  );
}

export interface EnunciadoFieldHandle {
  /** Inserta `token` en la posición del cursor (o al final). */
  insert: (token: string) => void;
}

/**
 * Enunciado para la base generador. Usa un buffer local con foco (igual que
 * BufferedText) para no pelear con el `plantilla` debounced del padre mientras
 * se tipea, y expone `insert()` para el insert-on-click de variables.
 */
const EnunciadoGeneradorField = forwardRef<
  EnunciadoFieldHandle,
  {
    plantilla: Plantilla;
    onChange: (next: Plantilla) => void;
    /** Variables que provee el generador, para los chips "Insertar:". */
    variables?: string[];
  }
>(function EnunciadoGeneradorField({ plantilla, onChange, variables = [] }, ref) {
  const id = useId();
  const astValue = readTextField(plantilla, schemaEnunciado);
  const [text, setText] = useState(astValue);
  const focused = useRef(false);
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  // Mientras no tiene foco, se sincroniza con el AST (cambios externos:
  // reset de enunciado, cambio de generador, etc.).
  useEffect(() => {
    if (!focused.current) setText(astValue);
  }, [astValue]);

  const insert = (token: string) => {
    const ta = taRef.current;
    const base = focused.current ? text : astValue;
    const start = ta?.selectionStart ?? base.length;
    const end = ta?.selectionEnd ?? base.length;
    const combinado = base.slice(0, start) + token + base.slice(end);
    setText(combinado);
    const next = writeTextField(plantilla, schemaEnunciado, combinado);
    if (next) onChange(next);
    requestAnimationFrame(() => {
      const el = taRef.current;
      if (el) {
        const pos = start + token.length;
        el.focus();
        el.setSelectionRange(pos, pos);
      }
    });
  };

  useImperativeHandle(
    ref,
    () => ({ insert }),
    // `text`/`plantilla` cambian el closure de insert; las incluimos para
    // insertar siempre sobre el valor actual.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [text, astValue, plantilla],
  );

  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={id} className="text-xs font-medium text-[var(--c-text,#0f172a)]">
        Enunciado
      </label>
      <textarea
        id={id}
        ref={taRef}
        value={text}
        rows={3}
        onFocus={() => {
          focused.current = true;
        }}
        onBlur={() => {
          focused.current = false;
          setText(astValue);
        }}
        onChange={(e) => {
          setText(e.target.value);
          const next = writeTextField(plantilla, schemaEnunciado, e.target.value);
          if (next) onChange(next);
        }}
        placeholder="Escribí la consigna como se la mostrarías al alumno."
        className="w-full rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
      />
      {variables.length > 0 && (
        <div className="mt-1 flex flex-wrap items-center gap-1">
          <span className="text-[10px] text-[var(--c-muted,#64748b)]">Insertar:</span>
          {variables.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => insert(`{${v}}`)}
              aria-label={`Insertar variable ${v} en el enunciado`}
              className="rounded-full border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-2 py-0.5 font-mono text-[10px] text-[var(--c-primary,#3b82f6)] hover:bg-[var(--c-bg,#f1f5f9)]"
            >
              {`{${v}}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

/* ---------------- enunciado / enunciados: lista de variantes ---------------- */

/**
 * Campo enunciado del editor visual: si el AST trae `enunciado:` (singular)
 * muestra el input único actual más un botón "Convertir en variantes". Si
 * trae `enunciados:` muestra una lista editable (input por variante,
 * eliminar por fila, "+ Agregar variante", mínimo 1) más el botón inverso
 * "Convertir a enunciado simple". Se preservan los bloques no soportados
 * (regla de WO01).
 */
function EnunciadoField({
  plantilla,
  onChange,
  fieldErrors = {},
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  fieldErrors?: FieldErrors;
}) {
  const id = useId();
  const enunciadosActive = getBlock(plantilla, "enunciados") !== undefined;

  return (
    <div
      className="flex flex-col gap-1.5"
      data-field-id="enunciado"
      data-error={fieldHasError("enunciado", fieldErrors) || undefined}
    >
      <FieldErrorBadge fieldId="enunciado" errors={fieldErrors} />
      {enunciadosActive ? (
        <EnunciadosListField
          plantilla={plantilla}
          onChange={onChange}
          fieldErrors={fieldErrors}
        />
      ) : (
        <>
          <BufferedText
            id={id}
            label="Enunciado"
            help="Texto de la consigna. Podés interpolar variables con {var}."
            multiline
            value={readEnunciadoRaw(plantilla)}
            commit={(text) => {
              const next = writeTextField(plantilla, schemaEnunciado, text);
              if (next === null) return false;
              onChange(next);
              return true;
            }}
          />
          <button
            type="button"
            onClick={() => onChange(enunciadoToVariantes(plantilla))}
            className="self-start rounded border border-dashed border-[var(--c-border,#cbd5e1)] px-2 py-0.5 text-[10px] text-[var(--c-muted,#64748b)] hover:border-[var(--c-primary,#3b82f6)] hover:text-[var(--c-primary,#3b82f6)]"
          >
            Convertir en variantes
          </button>
        </>
      )}
    </div>
  );
}

/** Lee el texto crudo del bloque `enunciado:` (no a través del TextField). */
function readEnunciadoRaw(p: Plantilla): string {
  const b = getBlock(p, "enunciado");
  if (!b) return "";
  let out = "";
  for (const part of b.partes) {
    if (part.kind === "texto") {
      out += part.value.replace(/{/g, "{{").replace(/}/g, "}}");
    } else {
      const exprStr = exprToText(part.expr);
      out += part.modificador ? `{${exprStr} | ${part.modificador}}` : `{${exprStr}}`;
    }
  }
  return out;
}

function EnunciadosListField({
  plantilla,
  onChange,
  fieldErrors = {},
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  fieldErrors?: FieldErrors;
}) {
  const items = readEnunciados(plantilla);

  const update = (next: typeof items) => onChange(writeEnunciados(plantilla, next));

  return (
    <div className="flex flex-col gap-1.5" data-testid="vblang-enunciados-list">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[var(--c-text,#0f172a)]">
          Enunciados (variantes)
        </span>
        <span className="text-[10px] text-[var(--c-muted,#64748b)]">
          {items.length} {items.length === 1 ? "variante" : "variantes"}
        </span>
      </div>
      <ul className="flex flex-col gap-1">
        {items.map((tmpl, idx) => {
          // VB-B5 — cada variante tiene su propio fieldId
          // (`enunciados.${idx}`) para errores de lint a nivel item.
          // El badge va al PIE del input (no arriba, para no romper
          // el layout horizontal de la fila con el botón Eliminar).
          const variantId = `enunciados.${idx}`;
          const hasError = fieldHasError(variantId, fieldErrors);
          return (
            <li
              key={idx}
              className="flex flex-col gap-0.5"
              data-field-id={variantId}
              data-error={hasError || undefined}
            >
              <div className="flex items-start gap-1">
                <input
                  type="text"
                  aria-label={`Variante de enunciado ${idx + 1}`}
                  value={tmpl.text}
                  onChange={(e) => {
                    const next = items.slice();
                    next[idx] = { ...next[idx], text: e.target.value };
                    update(next);
                  }}
                  placeholder="Texto de la variante (acepta {variable})"
                  className={
                    "flex-1 rounded border px-2 py-1 text-sm " +
                    (hasError
                      ? "border-red-500"
                      : "border-[var(--c-border,#cbd5e1)]")
                  }
                />
                {/* PLAN-E §15: tipo propio de la variante (vacío = heredar) */}
                <select
                  aria-label={`Tipo de la variante ${idx + 1}`}
                  title="Tipo de la variante (heredado por defecto)"
                  value={tmpl.tipo ?? ""}
                  onChange={(e) => {
                    const next = items.slice();
                    const { tipo: _tipo, ...rest } = next[idx];
                    next[idx] = e.target.value
                      ? { ...rest, tipo: e.target.value as NonNullable<typeof tmpl.tipo> }
                      : rest;
                    update(next);
                  }}
                  className="shrink-0 rounded border border-[var(--c-border,#cbd5e1)] px-1 py-1 text-xs"
                >
                  <option value="">Heredado</option>
                  <option value="mc">Opción múltiple</option>
                  <option value="vf">V/F</option>
                  <option value="input">Numérica</option>
                  <option value="completar">Completar</option>
                </select>
                <button
                  type="button"
                  aria-label={`Eliminar variante ${idx + 1}`}
                  disabled={items.length <= 1}
                  onClick={() => {
                    if (items.length <= 1) return;
                    update(items.filter((_, i) => i !== idx));
                  }}
                  className="shrink-0 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-xs text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Eliminar
                </button>
              </div>
              <FieldErrorBadge fieldId={variantId} errors={fieldErrors} />
            </li>
          );
        })}
      </ul>
      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => update([...items, { text: "" }])}
          className="rounded border border-dashed border-[var(--c-border,#cbd5e1)] px-2 py-1 text-xs text-[var(--c-muted,#64748b)] hover:border-[var(--c-primary,#3b82f6)] hover:text-[var(--c-primary,#3b82f6)]"
        >
          + Agregar variante
        </button>
        <button
          type="button"
          onClick={() => onChange(variantesToEnunciado(plantilla))}
          className="rounded border border-dashed border-[var(--c-border,#cbd5e1)] px-2 py-1 text-xs text-[var(--c-muted,#64748b)] hover:border-[var(--c-primary,#3b82f6)] hover:text-[var(--c-primary,#3b82f6)]"
        >
          Convertir a enunciado simple
        </button>
      </div>
    </div>
  );
}

/* ---------------- confirm dialog ---------------- */

function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      data-testid="vblang-schema-confirm"
    >
      <div className="max-w-sm rounded-lg border border-[var(--c-border,#e2e8f0)] bg-white p-4 shadow-lg">
        <p className="mb-4 text-sm">{message}</p>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded border border-[var(--c-border,#e2e8f0)] px-3 py-1 text-xs"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded bg-[var(--c-primary,#3b82f6)] px-3 py-1 text-xs font-semibold text-white"
          >
            Resetear enunciado
          </button>
        </div>
      </div>
    </div>
  );
}

// Campo enunciado reutilizable (para la base generador).
const schemaEnunciado: TextField = {
  kind: "text",
  key: "enunciado",
  label: "Enunciado",
  help: "Texto de la consigna. Podés interpolar variables con {var}.",
  required: true,
  block: "enunciado",
  multiline: true,
  interpolable: true,
};
