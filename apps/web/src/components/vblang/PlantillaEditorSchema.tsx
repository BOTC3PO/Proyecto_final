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
import type { Expr, Plantilla, TipoPregunta, VariableDecl } from "@vb/vblang";
import {
  ALL_QUESTION_TYPES,
  QUESTION_TYPE_SCHEMAS,
} from "@vb/vblang";
import type { Field, ListField, TextField } from "@vb/vblang";
import { exprToText, getBlock, readEnunciados, writeEnunciados, enunciadoToVariantes, variantesToEnunciado } from "./plantillaAst";
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
  valoresActuales,
  tieneErrores,
  uploadImage = uploadPng,
}: Props) {
  const baseGenerador = isGeneradorBase(plantilla);
  const tipo: TipoPregunta = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const extras = unhandledBlocks(plantilla);
  const variables = getBlock(plantilla, "variables")?.declaraciones ?? [];
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

          {schema.fields.map((field) =>
            field.block === "enunciado" ? (
              <EnunciadoField
                key={field.key}
                plantilla={plantilla}
                onChange={onChange}
              />
            ) : (
              <FieldControl
                key={field.key}
                field={field}
                plantilla={plantilla}
                onChange={onChange}
              />
            ),
          )}
        </Section>
      )}

      {!baseGenerador && variables.length > 0 && (
        <Section title="Variables detectadas">
          <VariablesCards variables={variables} valores={valoresActuales} />
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

/* ---------------- variables como cards (solo lectura) ---------------- */

type VarTone = "success" | "info" | "warning" | "accent";

/**
 * Infiere la "pill de tipo" de una variable a partir de su expresión: random →
 * Aleatorio entero, random_float → Aleatorio decimal, uno_de/choice → Lista,
 * etc. Cada tono mapea a un token de color del tema (el punto de color).
 */
function inferTipoVar(expr: Expr): { label: string; tone: VarTone } {
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

/** Formatea el valor actual del preview ("ahora: X") para mostrarlo en la card. */
function formatValor(v: unknown): string {
  if (v === null || v === undefined) return "—";
  if (typeof v === "string") return v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (Array.isArray(v)) return `[${v.map((x) => String(x)).join(", ")}]`;
  return String(v);
}

/**
 * Variables del bloque `variables:` como cards (delta #1 del rediseño): grip
 * decorativo, nombre con prefijo `{}`, pill de tipo con punto de color, la
 * definición monoespaciada y el valor del último preview ("ahora: X").
 *
 * Es presentacional: las variables se editan desde el modo Código (la edición
 * estructurada no entra en este paso visual). Por eso no hay inputs muertos.
 */
function VariablesCards({
  variables,
  valores,
}: {
  variables: VariableDecl[];
  valores?: Record<string, unknown>;
}) {
  return (
    <div className="flex flex-col gap-2">
      <ul className="vb-var-cards" aria-label="Variables de la plantilla">
        {variables.map((d) => {
          const t = inferTipoVar(d.expr);
          const tieneValor = valores ? d.nombre in valores : false;
          return (
            <li className="vb-var-card" key={d.nombre}>
              <span className="vb-var-card__grip" aria-hidden="true">
                ⠿
              </span>
              <span className="vb-var-card__name">{`{${d.nombre}}`}</span>
              <span className="vb-var-card__pill">
                <span
                  className="vb-var-card__dot"
                  style={{ background: `var(--c-${t.tone})` }}
                  aria-hidden="true"
                />
                {t.label}
              </span>
              <code className="vb-var-card__def">{exprToText(d.expr)}</code>
              {tieneValor && (
                <span className="vb-var-card__now">
                  ahora: <strong>{formatValor(valores![d.nombre])}</strong>
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <p className="text-[10px] text-[var(--c-hint)]">
        Las variables se editan desde el modo Código.
      </p>
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
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const id = useId();
  const enunciadosActive = getBlock(plantilla, "enunciados") !== undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {enunciadosActive ? (
        <EnunciadosListField plantilla={plantilla} onChange={onChange} />
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
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const items = readEnunciados(plantilla);

  const update = (next: string[]) => onChange(writeEnunciados(plantilla, next));

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
        {items.map((tmpl, idx) => (
          <li key={idx} className="flex items-start gap-1">
            <input
              type="text"
              aria-label={`Variante de enunciado ${idx + 1}`}
              value={tmpl}
              onChange={(e) => {
                const next = items.slice();
                next[idx] = e.target.value;
                update(next);
              }}
              placeholder="Texto de la variante (acepta {variable})"
              className="flex-1 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
            />
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
          </li>
        ))}
      </ul>
      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => update([...items, ""])}
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
