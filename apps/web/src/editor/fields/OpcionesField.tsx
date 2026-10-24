/**
 * editor/fields/OpcionesField.tsx — lista repetible de strings, sobre primitivos.
 *
 * Cubre los campos `list` con `itemShape: "string"` del schema (opciones de
 * MC, ítems a ordenar, respuestas válidas de completar/identificar_palabras).
 * Reusa `readListStrings`/`writeListStrings`. Cada fila es un `Input` + un
 * `Button` "Eliminar" (con nombre accesible); al final, "+ Agregar".
 *
 * Las listas con `itemShape` "etiqueta" / "expression" / "interpolable" no
 * las cubre este slice (D3+); `EditorPlantilla` las marca como preservadas.
 */
import type { CSSProperties } from "react";
import type { ListField, Plantilla } from "@vb/vblang";
import { Button, Input } from "../../ui";
import FieldGroup from "../FieldGroup";
import PalabraCombobox from "../../components/vblang/PalabraCombobox";
import { readListStrings, writeListStrings } from "../../components/vblang/plantillaFields";
import { useLang } from "../LangContext";
import { useFieldError } from "../LintContext";

export type OpcionesFieldProps = {
  field: ListField;
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

const listStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2)",
  margin: "var(--space-0)",
  padding: "var(--space-0)",
  listStyle: "none",
};

const rowStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "var(--space-2)",
};

export default function OpcionesField({ field, plantilla, onChange }: OpcionesFieldProps) {
  const items = readListStrings(plantilla, field);
  const minItems = field.minItems ?? 0;
  const update = (next: string[]) => onChange(writeListStrings(plantilla, field, next));
  const error = useFieldError(field.key);
  const lang = useLang();

  // identificar_palabras: las respuestas válidas son palabras → autocompletado
  // y validación contra el diccionario (igual que el editor viejo).
  const esPalabras =
    field.block === "respuestas_validas" &&
    plantilla.tipoInferido === "identificar_palabras";

  return (
    <FieldGroup label={field.label} help={field.help} error={error}>
      <ul style={listStyle}>
        {items.map((item, idx) => (
          <li key={idx} style={rowStyle}>
            {esPalabras ? (
              <div style={{ minWidth: 0, flex: 1 }}>
                <PalabraCombobox
                  label={`${field.label} ${idx + 1}`}
                  value={item}
                  placeholder="palabra"
                  lang={lang}
                  onChange={(palabra) => {
                    const next = items.slice();
                    next[idx] = palabra;
                    update(next);
                  }}
                />
              </div>
            ) : (
              <Input
                aria-label={`${field.label} ${idx + 1}`}
                value={item}
                placeholder={`Ítem ${idx + 1}`}
                onChange={(e) => {
                  const next = items.slice();
                  next[idx] = e.target.value;
                  update(next);
                }}
              />
            )}
            <Button
              variant="danger"
              size="sm"
              aria-label={`Eliminar ítem ${idx + 1}`}
              disabled={items.length <= minItems}
              onClick={() => update(items.filter((_, i) => i !== idx))}
            >
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
      <Button variant="ghost" size="sm" onClick={() => update([...items, ""])}>
        + Agregar
      </Button>
    </FieldGroup>
  );
}
