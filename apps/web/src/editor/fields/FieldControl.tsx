/**
 * editor/fields/FieldControl.tsx — renderer genérico de un campo del schema,
 * sobre primitivos.
 *
 * Replica el dispatch del `FieldControl` viejo (text/number/bool/enum) pero
 * montado sobre los átomos del rediseño (BufferedText, Field, Select, Switch).
 * Reusa la capa de datos (`read*`/`write*` de plantillaFields). Las listas
 * (`list`) no van acá: las maneja `OpcionesField` (string-list) o quedan como
 * placeholder (etiqueta/expression/interpolable → D3+).
 */
import type { Plantilla } from "@vb/vblang";
import type { BoolField, EnumField, Field, NumberField, TextField } from "@vb/vblang";
import { Field as FieldAtom, Select, Switch } from "../../ui";
import BufferedText from "../BufferedText";
import {
  readBoolField,
  readEnumField,
  readNumberField,
  readTextField,
  writeBoolField,
  writeEnumField,
  writeNumberField,
  writeTextField,
} from "../../components/vblang/plantillaFields";

export type FieldControlProps = {
  field: Field;
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

export default function FieldControl({ field, plantilla, onChange }: FieldControlProps) {
  if (field.kind === "text") {
    return <TextFieldControl field={field as TextField} plantilla={plantilla} onChange={onChange} />;
  }
  if (field.kind === "number") {
    return <NumberFieldControl field={field as NumberField} plantilla={plantilla} onChange={onChange} />;
  }
  if (field.kind === "bool") {
    return <BoolFieldControl field={field as BoolField} plantilla={plantilla} onChange={onChange} />;
  }
  if (field.kind === "enum") {
    return <EnumFieldControl field={field as EnumField} plantilla={plantilla} onChange={onChange} />;
  }
  // list → no va acá (OpcionesField para string-list; el resto es D3+).
  return null;
}

function TextFieldControl({
  field,
  plantilla,
  onChange,
}: {
  field: TextField;
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  return (
    <BufferedText
      label={field.label}
      help={field.help}
      multiline={field.multiline}
      placeholder={field.expression ? "Ej.: a + b" : undefined}
      value={readTextField(plantilla, field)}
      errorMessage={field.expression ? "Expresión inválida" : undefined}
      commit={(text) => {
        const next = writeTextField(plantilla, field, text);
        if (next === null) return false;
        onChange(next);
        return true;
      }}
    />
  );
}

function NumberFieldControl({
  field,
  plantilla,
  onChange,
}: {
  field: NumberField;
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  return (
    <BufferedText
      label={field.label}
      help={field.help}
      numeric
      step={0.5}
      min={field.allowNegative ? undefined : 0}
      value={readNumberField(plantilla, field)}
      errorMessage="Número inválido"
      commit={(text) => {
        const next = writeNumberField(plantilla, field, text);
        if (next === null) return false;
        onChange(next);
        return true;
      }}
    />
  );
}

function BoolFieldControl({
  field,
  plantilla,
  onChange,
}: {
  field: BoolField;
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const value = readBoolField(plantilla, field);
  return (
    <FieldAtom label={field.label} help={field.help}>
      <Switch
        checked={value}
        onCheckedChange={(v) => onChange(writeBoolField(plantilla, field, v))}
        label={value ? "Verdadero" : "Falso"}
      />
    </FieldAtom>
  );
}

function EnumFieldControl({
  field,
  plantilla,
  onChange,
}: {
  field: EnumField;
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const value = readEnumField(plantilla, field) || field.options[0]?.value || "";
  return (
    <FieldAtom label={field.label} help={field.help}>
      <Select
        value={value}
        onChange={(e) => onChange(writeEnumField(plantilla, field, e.target.value))}
      >
        {field.options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </Select>
    </FieldAtom>
  );
}
