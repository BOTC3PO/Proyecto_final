/**
 * editor/EditorPlantilla.tsx — raíz del editor reconstruido (D2 + D3).
 *
 * Drop-in del editor viejo (`components/vblang/PlantillaEditorSchema`):
 * MISMA interfaz `{ plantilla, onChange }`, montada sobre los primitivos de
 * `ui/` y reutilizando la capa de datos existente (`plantillaAst`/
 * `plantillaFields`/`@vb/vblang`). NO modifica al editor viejo; convive
 * detrás de un flag en `VarianteEditor`.
 *
 * Slice D2 = shell + campos core:
 *   • tipo de pregunta, enunciado, respuesta, opciones, puntaje + pista.
 *
 * Slice D3 = campos ricos:
 *   • variables (declaración: nombre, tipo, rango/valores).
 *   • visual (PNG, line-chart, timeline, latex, vector-diagram, circuit).
 *   • texto rico (explicación, restricciones, pistas escalonadas).
 *
 * D4+ (preservados read-only): generador base, mapa avanzado (encuadre +
 * respuesta_nombre), etiquetas + diccionario, dataset.
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
import VariablesField from "./fields/VariablesField";
import VisualField from "./fields/VisualField";
import ExplicacionField from "./fields/ExplicacionField";
import RestriccionesField from "./fields/RestriccionesField";
import PistasField from "./fields/PistasField";
import { isGeneradorBase } from "../components/vblang/plantillaFields";
import { getBlock, hasBlock } from "../components/vblang/plantillaAst";

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
  // D3: campos ricos
  "variables",
  "visual",
  "explicacion",
  "restricciones",
  "pistas",
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

  const coreFields: Field[] = schema.fields.filter((f) => f.block !== "enunciado");
  const isList = (f: Field): f is ListField => f.kind === "list";

  const listFields = coreFields.filter(isList);
  const stringListFields = listFields.filter((f) => f.itemShape === "string");
  const skippedRichFields = listFields.filter((f) => f.itemShape !== "string");
  const scalarFields = coreFields.filter((f) => !isList(f));

  const variables = getBlock(plantilla, "variables")?.declaraciones ?? [];
  const hasVariables = variables.length > 0;
  const hasRestricciones = hasBlock(plantilla, "restricciones");
  const hasPistas = hasBlock(plantilla, "pistas");

  const generadorNote: ReactNode = baseGenerador ? (
    <Alert variant="info" title="Base generador (editor V2 — slice)">
      Esta plantilla usa la base <strong>generador asistido</strong>. El editor
      V2 aún no reconstruye el selector de generadores ni las variables que
      provee (D4+). Los bloques se preservan en el DSL; acá podés editar el
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
          el DSL. Editálos desde el editor clásico o el modo código (D4+ los
          migrará).
        </Alert>
      ) : null}

      {/* D3: Variables */}
      {hasVariables || !baseGenerador ? (
        <Section title="Variables" description="Variables aleatorias que se evalúan en cada instancia.">
          <VariablesField
            plantilla={plantilla}
            variables={variables}
            onChange={onChange}
          />
        </Section>
      ) : null}

      {/* D3: Visual */}
      <Section title="Visual" description="Imagen o diagrama asociado a la pregunta.">
        <VisualField plantilla={plantilla} onChange={onChange} />
      </Section>

      <Section title="Puntaje y pista" description="Metadata de la pregunta.">
        <PuntajePistaField plantilla={plantilla} onChange={onChange} />
      </Section>

      {/* D3: Texto rico */}
      <Section title="Explicación" description="Retroalimentación que se muestra al alumno tras responder.">
        <ExplicacionField plantilla={plantilla} onChange={onChange} />
      </Section>

      {hasRestricciones || hasVariables ? (
        <Section title="Restricciones" description="Condiciones que las variables deben cumplir.">
          <RestriccionesField plantilla={plantilla} onChange={onChange} />
        </Section>
      ) : null}

      {hasPistas ? (
        <Section title="Pistas escalonadas" description="Pistas que el alumno pide de a una (además de la pista única de metadata).">
          <PistasField plantilla={plantilla} onChange={onChange} />
        </Section>
      ) : null}

      {preserved.length > 0 ? (
        <Section title="Bloques preservados" description="No se editan en V2; se mantienen en el DSL.">
          <p style={placeholderStyle}>
            Estos bloques están presentes y se preservan intactos en el código:{" "}
            <code>{preserved.join(", ")}</code>. Editalos desde el editor clásico
            o el modo código. D4+ los migrará: generador base, etiquetas +
            diccionario, dataset.
          </p>
        </Section>
      ) : null}
    </div>
  );
}
