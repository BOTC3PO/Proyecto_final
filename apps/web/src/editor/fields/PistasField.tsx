import type { CSSProperties } from "react";
import type { Plantilla } from "@vb/vblang";
import { Button, Input } from "../../ui";
import FieldGroup from "../FieldGroup";
import {
  readPistas,
  writePistas,
} from "../../components/vblang/plantillaAst";
import { errorTextFor, useFieldErrorMap } from "../LintContext";

export type PistasFieldProps = {
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

const indexStyle: CSSProperties = {
  fontSize: "var(--text-xs)",
  fontWeight: "var(--fw-medium)",
  color: "var(--c-hint)",
  minWidth: "var(--space-5)",
  lineHeight: "var(--lh-tight)",
  paddingTop: "var(--space-2)",
};

const itemErrorStyle: CSSProperties = {
  margin: "var(--space-0)",
  fontSize: "var(--text-xs)",
  color: "var(--c-danger)",
  fontWeight: "var(--fw-medium)",
};

export default function PistasField({ plantilla, onChange }: PistasFieldProps) {
  const items = readPistas(plantilla);
  const update = (next: string[]) => onChange(writePistas(plantilla, next));
  const errMap = useFieldErrorMap();

  return (
    <FieldGroup
      label="Pistas escalonadas"
      help="Secuencia de pistas que el alumno pide de a una. Podés usar {variable} para interpolar."
      error={errorTextFor(errMap, "pistas")}
    >
      <ul style={listStyle}>
        {items.map((item, idx) => {
          const itemError = errorTextFor(errMap, `pistas.${idx}`);
          return (
            <li key={idx} style={{ ...rowStyle, flexWrap: "wrap" }}>
              <span style={indexStyle}>{idx + 1}.</span>
              <Input
                aria-label={`Pista ${idx + 1}`}
                value={item}
                invalid={itemError != null}
                placeholder={`Pista ${idx + 1}`}
                onChange={(e) => {
                  const next = items.slice();
                  next[idx] = e.target.value;
                  update(next);
                }}
              />
              <Button
                variant="danger"
                size="sm"
                aria-label={`Eliminar pista ${idx + 1}`}
                onClick={() => update(items.filter((_, i) => i !== idx))}
              >
                Eliminar
              </Button>
              {itemError ? (
                <p role="alert" style={{ ...itemErrorStyle, flexBasis: "100%" }}>
                  {itemError}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
      <Button variant="ghost" size="sm" onClick={() => update([...items, ""])}>
        + Agregar pista
      </Button>
    </FieldGroup>
  );
}
