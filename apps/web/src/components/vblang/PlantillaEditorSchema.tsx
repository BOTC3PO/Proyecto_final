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
import { useEffect, useId, useRef, useState } from "react";
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
  applyGenerador,
  applyTipo,
  hasNonImageVisual,
  isGeneradorBase,
  readBoolField,
  readEnumField,
  readEtiquetas,
  readListStrings,
  readNumberField,
  readStaticImage,
  readTextField,
  removeVisual,
  unhandledBlocks,
  writeBoolField,
  writeEnumField,
  writeEtiquetas,
  writeListStrings,
  writeNumberField,
  writeStaticImage,
  writeTextField,
  type EtiquetaRow,
} from "./plantillaFields";

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
                onChange(applyGenerador(plantilla, generadorId || defaultGeneradorId))
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
            onChange={(id) => onChange(applyGenerador(plantilla, id))}
          />
          <FieldControl
            field={schemaEnunciado}
            plantilla={plantilla}
            onChange={onChange}
          />
          <ReadOnlyPlaceholder>
            Con un generador activo, las variables y la respuesta las provee el
            generador. El enunciado de arriba se mantiene en el DSL.
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
