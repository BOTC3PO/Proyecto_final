/**
 * editor/fields/TipoSelector.tsx — selector de tipo de pregunta, sobre primitivos.
 *
 * Reusa `applyTipo` (capa de datos) para rearma el esqueleto al cambiar de
 * tipo, preservando enunciado/variables/metadata. Sólo se monta en la base
 * "tipo genérico" (no en generador).
 */
import type { ReactNode } from "react";
import { ALL_QUESTION_TYPES, QUESTION_TYPE_SCHEMAS, type Plantilla, type TipoPregunta } from "@vb/vblang";
import { Field, Select } from "../../ui";
import { applyTipo } from "../../components/vblang/plantillaFields";

export type TipoSelectorProps = {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

export default function TipoSelector({ plantilla, onChange }: TipoSelectorProps) {
  const tipo: TipoPregunta = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const help: ReactNode = schema.descripcion;

  return (
    <Field label="Tipo de pregunta" help={help}>
      <Select
        value={tipo}
        onChange={(e) => onChange(applyTipo(plantilla, e.target.value as TipoPregunta))}
      >
        {ALL_QUESTION_TYPES.map((t) => (
          <option key={t} value={t}>
            {QUESTION_TYPE_SCHEMAS[t].label}
          </option>
        ))}
      </Select>
    </Field>
  );
}
