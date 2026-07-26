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
import { TIPO_PREGUNTA_KEY, TIPO_PREGUNTA_DESCRIPCION_KEY } from "../../components/vblang/TizaEditor";
import { useI18n } from "../../i18n/I18nContext";

export type TipoSelectorProps = {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

export default function TipoSelector({ plantilla, onChange }: TipoSelectorProps) {
  const { t } = useI18n();
  const tipo: TipoPregunta = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const help: ReactNode = TIPO_PREGUNTA_DESCRIPCION_KEY[tipo] ? t(TIPO_PREGUNTA_DESCRIPCION_KEY[tipo]) : schema.descripcion;

  return (
    <Field label={t("plantillaEditorSchema.tipoDePregunta")} help={help}>
      <Select
        value={tipo}
        onChange={(e) => onChange(applyTipo(plantilla, e.target.value as TipoPregunta))}
      >
        {ALL_QUESTION_TYPES.map((qt) => (
          <option key={qt} value={qt}>
            {TIPO_PREGUNTA_KEY[qt] ? t(TIPO_PREGUNTA_KEY[qt]) : QUESTION_TYPE_SCHEMAS[qt].label}
          </option>
        ))}
      </Select>
    </Field>
  );
}
