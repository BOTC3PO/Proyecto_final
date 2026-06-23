/**
 * editor/EditorPlantilla.tsx — raíz del editor reconstruido (División 2).
 *
 * Drop-in del editor viejo (`components/vblang/PlantillaEditorSchema`):
 * MISMA interfaz `{ plantilla, onChange }`, montada sobre los primitivos de
 * `ui/` y reutilizando la capa de datos existente (`plantillaAst`/
 * `plantillaFields`/`@vb/vblang`). NO modifica al editor viejo; convive
 * detrás de un flag en `VarianteEditor`.
 *
 * Slice D2 = shell + campos core:
 *   • tipo de pregunta (Select) — base "tipo genérico".
 *   • enunciado (Textarea + interpolación de variables + variantes).
 *   • respuesta según tipo + opciones/distractores (MC) — via `FieldControl`
 *     (text/number/bool/enum) y `OpcionesField` (string-list).
 *   • puntaje + pista (metadata).
 *
 * Los fields ricos (generador, visual, mapa avanzado, pistas escalonadas,
 * restricciones, explicación, dataset, variables, etiquetas) quedan para D3+;
 * acá se preservan read-only (se listan en "Bloques preservados") para no
 * romper el round-trip.
 */
import type { CSSProperties, ReactNode } from "react";
import {
  QUESTION_TYPE_SCHEMAS,
  type Bloque,
  type ListField,
  type Plantilla,
} from "@vb/vblang";
import type { Field } from "@vb/vblang";
import { Alert } from "../ui";
import Section from "./Section";
import TipoSelector from "./fields/TipoSelector";
import EnunciadoField from "./fields/EnunciadoField";
import FieldControl from "./fields/FieldControl";
import OpcionesField from "./fields/OpcionesField";
import PuntajePistaField from "./fields/PuntajePistaField";
import { isGeneradorBase } from "../components/vblang/plantillaFields";

export interface EditorPlantillaProps {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}

const shellStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-4)",
  fontFamily: "var(--font-sans)",
  color: "var(--c-text)",
};

const placeholderStyle: CSSProperties = {
  margin: "var(--space-0)",
  fontSize: "var(--text-xs)",
  lineHeight: "var(--lh-normal)",
  color: "var(--c-hint)",
  fontStyle: "italic",
};

/** Bloques que este slice edita (el resto se lista como preservado). */
const V2_EDITS = new Set<Bloque["kind"]>([
  "tipo",
  "enunciado",
  "enunciados",
  "respuesta",
  "respuestas_validas",
  "respuesta_iso",
  "respuesta_orden",
  "respuesta_nombre",
  "respuesta_expr",
  "opciones_explicitas",
  "texto_analizar",
  "unidad",
  "tolerancia",
  "tolerancia_abs",
  "correccion",
  "mapa",
  "metadata",
]);

/** Bloques presentes que este slice NO edita (preservados read-only). */
function preservedKinds(p: Plantilla): Bloque["kind"][] {
  const kinds = new Set<Bloque["kind"]>();
  for (const b of p.bloques) {
    if (!V2_EDITS.has(b.kind)) kinds.add(b.kind);
  }
  return [...kinds];
}

export default function EditorPlantilla({ plantilla, onChange }: EditorPlantillaProps) {
  const baseGenerador = isGeneradorBase(plantilla);
  const tipo = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const preserved = preservedKinds(plantilla);

  // Campos del schema que este slice renderiza (omitiendo `enunciado`, que
  // tiene su propio campo, y las listas no-string, que son D3+).
  const coreFields: Field[] = schema.fields.filter((f) => f.block !== "enunciado");
  const isList = (f: Field): f is ListField => f.kind === "list";

  const listFields = coreFields.filter(isList);
  const stringListFields = listFields.filter((f) => f.itemShape === "string");
  const skippedRichFields = listFields.filter((f) => f.itemShape !== "string");
  const scalarFields = coreFields.filter((f) => !isList(f));

  const generadorNote: ReactNode = baseGenerador ? (
    <Alert variant="info" title="Base generador (editor V2 — slice)">
      Esta plantilla usa la base <strong>generador asistido</strong>. El editor
      V2 aún no reconstruye el selector de generadores ni las variables que
      provee (D3+). Los bloques se preservan en el DSL; acá podés editar el
      enunciado y la metadata. Para el generador, usá el editor clásico
      (desactivá el flag <code>?editorV2=1</code>).
    </Alert>
  ) : null;

  return (
    <div style={shellStyle} data-testid="editor-plantilla-v2">
      {generadorNote}

      {!baseGenerador ? (
        <Section title="Tipo de pregunta" description={schema.descripcion}>
          <TipoSelector plantilla={plantilla} onChange={onChange} />
        </Section>
      ) : null}

      <Section title="Enunciado" description="Texto de la consigna para el alumno.">
        <EnunciadoField plantilla={plantilla} onChange={onChange} />
      </Section>

      {!baseGenerador && scalarFields.length > 0 ? (
        <Section
          title="Respuesta"
          description="Clave de respuesta y parámetros de corrección según el tipo."
        >
          {scalarFields.map((field) => (
            <FieldControl
              key={field.key}
              field={field}
              plantilla={plantilla}
              onChange={onChange}
            />
          ))}
        </Section>
      ) : null}

      {!baseGenerador && stringListFields.length > 0 ? (
        <Section title="Opciones / ítems" description="Lista de opciones o ítems a presentar.">
          {stringListFields.map((field) => (
            <OpcionesField
              key={field.key}
              field={field}
              plantilla={plantilla}
              onChange={onChange}
            />
          ))}
        </Section>
      ) : null}

      {!baseGenerador && skippedRichFields.length > 0 ? (
        <Alert variant="warning" title="Campos aún no editables en V2">
          {skippedRichFields.map((f) => f.label).join(", ")} se preservan tal cual en
          el DSL. Editálos desde el editor clásico o el modo código (D3+ los
          migrará).
        </Alert>
      ) : null}

      <Section title="Puntaje y pista" description="Metadata de la pregunta.">
        <PuntajePistaField plantilla={plantilla} onChange={onChange} />
      </Section>

      {preserved.length > 0 ? (
        <Section title="Bloques preservados" description="No se editan en V2; se mantienen en el DSL.">
          <p style={placeholderStyle}>
            Estos bloques están presentes y se preservan intactos en el código:{" "}
            <code>{preserved.join(", ")}</code>. Editalos desde el editor clásico
            o el modo código. El editor V2 los migrará en divisiones siguientes
            (D3+): variables, visual, pistas escalonadas, restricciones,
            explicación, dataset, generador, etiquetas.
          </p>
        </Section>
      ) : null}
    </div>
  );
}
