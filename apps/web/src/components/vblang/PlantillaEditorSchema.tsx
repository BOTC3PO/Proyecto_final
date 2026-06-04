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
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { Plantilla, TipoPregunta } from "@vb/vblang";
import {
  ALL_QUESTION_TYPES,
  QUESTION_TYPE_SCHEMAS,
} from "@vb/vblang";
import type { Field, ListField, TextField } from "@vb/vblang";
import GeneradorPicker from "./GeneradorPicker";
import { listGeneradores } from "../../vblang/listGeneradores";
import { AccessibleList } from "./AccessibleList";
import PalabraCombobox from "./PalabraCombobox";
import { uploadPng } from "./mediaApi";
import {
  CATEGORIAS_GRAMATICALES,
  sugerirCategoriaGramatical,
  type EntradaDiccionario,
} from "../../services/diccionario";
import {
  addVariablesFromSuggestions,
  applyGenerador,
  applyTipo,
  combinacionesPosibles,
  contarVariables,
  enunciadoUndefinedVars,
  hasNonImageVisual,
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
  readTextField,
  readVariableNames,
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
  writeStaticImage,
  writeTextField,
  type EtiquetaRow,
} from "./plantillaFields";
import { getGeneradorProvidedVars } from "../../vblang/generadorVars";
import {
  suggestVariablesIA,
  type VariableSugerida,
} from "../../domain/vblang/aiSuggest";
import { ApiError } from "../../lib/api";

interface Props {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  valoresActuales?: Record<string, unknown>;
  tieneErrores?: boolean;
  /** Inyectable para tests; por defecto sube a /api/media/upload. */
  uploadImage?: (file: Blob) => Promise<string>;
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

  // identificar_palabras: las respuestas válidas son palabras → autocompletado
  // y validación contra el diccionario. Otros tipos (completar) usan texto plano.
  const esPalabras =
    lf.block === "respuestas_validas" &&
    plantilla.tipoInferido === "identificar_palabras";

  const items = readListStrings(plantilla, lf);
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
  const current = readStaticImage(plantilla);
  const [src, setSrc] = useState<string>(current?.src ?? "");
  const [alt, setAlt] = useState<string>(current?.alt ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const altId = useId();

  if (hasNonImageVisual(plantilla)) {
    return (
      <ReadOnlyPlaceholder>
        Hay un bloque <code>visual:</code> que no es una imagen (gráfico u otro).
        Se preserva tal cual; editalo desde el modo Código.
      </ReadOnlyPlaceholder>
    );
  }

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
        placeholder="Describí la imagen para lectores de pantalla"
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
          {current ? "Actualizar imagen" : "Insertar imagen"}
        </button>
        {current && (
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2 rounded border border-[var(--c-border,#e2e8f0)] p-3">
      <h3 className="text-sm font-semibold text-[var(--c-text,#0f172a)]">{title}</h3>
      {children}
    </section>
  );
}

/* ---------------- componente principal ---------------- */

export default function PlantillaEditorSchema({
  plantilla,
  onChange,
  tieneErrores,
  uploadImage = uploadPng,
}: Props) {
  const baseGenerador = isGeneradorBase(plantilla);
  const tipo: TipoPregunta = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const extras = unhandledBlocks(plantilla);
  const generadorBloque = plantilla.bloques.find((b) => b.kind === "generador");
  const generadorId =
    generadorBloque?.kind === "generador" ? generadorBloque.id : "";
  /** Default razonable al activar la base generador (primer generador). */
  const defaultGeneradorId = listGeneradores()[0]?.id ?? "";

  const [confirmDialog, setConfirmDialog] = useState<{
    message: string;
    onConfirm: () => void;
  } | null>(null);
  const enunciadoFieldRef = useRef<EnunciadoFieldHandle | null>(null);

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
    <div className="flex flex-col gap-3" data-testid="vblang-schema-editor">
      {tieneErrores && (
        <div role="alert" className="rounded bg-red-50 px-3 py-2 text-xs text-red-700">
          El código tiene errores; corregilos para que el preview funcione.
        </div>
      )}

      <Section title="Base de la pregunta">
        <div role="radiogroup" aria-label="Base de la pregunta" className="flex gap-3">
          <label className="flex items-center gap-1 text-xs">
            <input
              type="radio"
              name="base"
              checked={!baseGenerador}
              onChange={() => onChange(applyTipo(plantilla, tipo === undefined ? "input" : tipo))}
            />
            Tipo de pregunta
          </label>
          <label className="flex items-center gap-1 text-xs">
            <input
              type="radio"
              name="base"
              checked={baseGenerador}
              onChange={() =>
                applyGeneradorWithCheck(plantilla, generadorId || defaultGeneradorId)
              }
            />
            Generador asistido
          </label>
        </div>
      </Section>

      {baseGenerador ? (
        <Section title="Generador asistido">
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
          <ReadOnlyPlaceholder>
            Con un generador activo, los datos y la respuesta los provee el
            generador. Escribí la consigna acá e insertá las variables tocándolas
            en la lista de arriba.
          </ReadOnlyPlaceholder>
        </Section>
      ) : (
        <Section title="Tipo de pregunta">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="tipo-select" className="text-xs font-medium">
              Tipo
            </label>
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

          {schema.fields.map((field) => (
            <FieldControl
              key={field.key}
              field={field}
              plantilla={plantilla}
              onChange={onChange}
            />
          ))}
        </Section>
      )}

      {!baseGenerador && (
        <Section title="Variables">
          <VariablesIASection plantilla={plantilla} tipo={tipo} onChange={onChange} />
        </Section>
      )}

      <Section title="Puntaje y pista">
        <PuntajePistaField plantilla={plantilla} onChange={onChange} />
      </Section>

      <Section title="Imagen (PNG) — opcional">
        <VisualPngField
          plantilla={plantilla}
          onChange={onChange}
          uploadImage={uploadImage}
        />
      </Section>

      {extras.length > 0 && (
        <Section title="Otros bloques (preservados)">
          <ReadOnlyPlaceholder>
            Estos bloques no se editan en el formulario y se preservan tal cual en
            el código: <code>{extras.join(", ")}</code>. Editalos desde el modo
            Código.
          </ReadOnlyPlaceholder>
        </Section>
      )}

      <Section title="Resumen">
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

/* ---------------- variables + Sugerir con IA (DIFF-05) ---------------- */

/**
 * Lista las variables declaradas y ofrece "Sugerir con IA": le pide al backend
 * (que llama a Claude) variables para el enunciado actual, las muestra y deja
 * insertar las elegidas. Las expresiones se validan con el parser real al
 * aplicarlas (`addVariablesFromSuggestions`), así nada inválido entra al DSL.
 */
function VariablesIASection({
  plantilla,
  tipo,
  onChange,
}: {
  plantilla: Plantilla;
  tipo: TipoPregunta;
  onChange: (next: Plantilla) => void;
}) {
  const enunciado = readTextField(plantilla, schemaEnunciado);
  const declaradas = readVariableNames(plantilla);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [sugeridas, setSugeridas] = useState<VariableSugerida[]>([]);
  const [sel, setSel] = useState<Record<string, boolean>>({});

  const pedir = async () => {
    setStatus("loading");
    setError(null);
    try {
      const vars = await suggestVariablesIA(enunciado, tipo);
      setSugeridas(vars);
      setSel(Object.fromEntries(vars.map((v) => [v.nombre, true])));
      setStatus("done");
    } catch (e) {
      setStatus("error");
      if (e instanceof ApiError && e.status === 503) {
        setError("La sugerencia con IA no está configurada en el servidor.");
      } else {
        setError(e instanceof Error ? e.message : "No se pudo sugerir.");
      }
    }
  };

  const aplicar = () => {
    const elegidas = sugeridas
      .filter((v) => sel[v.nombre])
      .map((v) => ({ nombre: v.nombre, expr: v.expr }));
    const { plantilla: next } = addVariablesFromSuggestions(plantilla, elegidas);
    onChange(next);
    setSugeridas([]);
    setStatus("idle");
  };

  const descartar = () => {
    setSugeridas([]);
    setStatus("idle");
  };

  const algunaElegida = sugeridas.some((v) => sel[v.nombre]);

  return (
    <div className="flex flex-col gap-2">
      {declaradas.length > 0 ? (
        <div className="flex flex-wrap items-center gap-1">
          {declaradas.map((n) => (
            <span
              key={n}
              className="rounded-full border border-[var(--c-border,#e2e8f0)] bg-[var(--c-bg,#f8fafc)] px-2 py-0.5 font-mono text-[10px] text-[var(--c-text)]"
            >
              {n}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-[10px] text-[var(--c-muted,#64748b)]">
          No hay variables declaradas. Editalas en modo Código, o pedí una
          sugerencia con IA.
        </p>
      )}

      <button
        type="button"
        onClick={() => void pedir()}
        disabled={status === "loading" || enunciado.trim() === ""}
        className="self-start rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-xs font-medium text-[var(--c-primary,#3b82f6)] disabled:opacity-40"
      >
        {status === "loading" ? "Pensando…" : "✨ Sugerir con IA"}
      </button>
      {enunciado.trim() === "" && (
        <span className="text-[10px] text-[var(--c-muted,#64748b)]">
          Escribí primero el enunciado para sugerir variables.
        </span>
      )}

      {status === "error" && error && (
        <span role="alert" className="text-[10px] text-red-600">
          {error}
        </span>
      )}

      {status === "done" && sugeridas.length > 0 && (
        <div className="flex flex-col gap-1.5 rounded border border-[var(--c-border,#e2e8f0)] p-2">
          <ul className="flex flex-col gap-1">
            {sugeridas.map((v) => (
              <li key={v.nombre} className="flex items-start gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={!!sel[v.nombre]}
                  onChange={(e) =>
                    setSel((s) => ({ ...s, [v.nombre]: e.target.checked }))
                  }
                  aria-label={`Incluir variable ${v.nombre}`}
                  className="mt-0.5"
                />
                <span className="min-w-0">
                  <code className="font-mono text-[var(--c-text)]">
                    {v.nombre}: {v.expr}
                  </code>
                  {v.descripcion && (
                    <span className="block text-[10px] text-[var(--c-muted,#64748b)]">
                      {v.descripcion}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={aplicar}
              disabled={!algunaElegida}
              className="rounded bg-[var(--c-primary,#3b82f6)] px-2 py-1 text-xs font-semibold text-white disabled:opacity-40"
            >
              Aplicar seleccionadas
            </button>
            <button
              type="button"
              onClick={descartar}
              className="rounded border border-[var(--c-border,#e2e8f0)] px-2 py-1 text-xs"
            >
              Descartar
            </button>
          </div>
        </div>
      )}
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
