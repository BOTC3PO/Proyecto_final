import type { CSSProperties } from "react";
import type { Plantilla } from "@vb/vblang";
import { Button, Input } from "../../ui";
import FieldGroup from "../FieldGroup";
import {
  readRestricciones,
  writeRestricciones,
} from "../../components/vblang/plantillaAst";

export type RestriccionesFieldProps = {
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

export default function RestriccionesField({ plantilla, onChange }: RestriccionesFieldProps) {
  const items = readRestricciones(plantilla);
  const update = (next: string[]) => onChange(writeRestricciones(plantilla, next));

  return (
    <FieldGroup
      label="Restricciones"
      help="Condiciones que las variables deben cumplir (fórmulas). Ej.: a > b, x != 0."
    >
      <ul style={listStyle}>
        {items.map((item, idx) => (
          <li key={idx} style={rowStyle}>
            <Input
              aria-label={`Restricción ${idx + 1}`}
              value={item}
              placeholder={`Fórmula ${idx + 1}`}
              style={{ fontFamily: "var(--font-mono)" }}
              onChange={(e) => {
                const next = items.slice();
                next[idx] = e.target.value;
                update(next);
              }}
            />
            <Button
              variant="danger"
              size="sm"
              aria-label={`Eliminar restricción ${idx + 1}`}
              onClick={() => update(items.filter((_, i) => i !== idx))}
            >
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
      <Button variant="ghost" size="sm" onClick={() => update([...items, ""])}>
        + Agregar restricción
      </Button>
    </FieldGroup>
  );
}
