/**
 * editor/fields/EnunciadoField.tsx — enunciado + interpolación de variables,
 * sobre primitivos.
 *
 * Reusa la capa de datos (`readTextField`/`writeTextField` con el campo
 * schema `enunciado`, `readEnunciados`/`writeEnunciados`,
 * `enunciadoToVariantes`/`variantesToEnunciado`, `extractDeclaredVariables`).
 *
 * Dos modos (igual que el editor viejo):
 *   • enunciado simple → Textarea multilínea con interpolación `{var}`.
 *   • enunciados (variantes) → lista de Textareas, add/remove, convertir.
 *
 * Las variables declaradas aparecen como chips clicables que insertan
 * `{nombre}` en la posición del caret del enunciado simple (vía el handle
 * imperativo de `BufferedText`).
 */
import { useRef, type CSSProperties, type ReactNode } from "react";
import type { Plantilla, TextField } from "@vb/vblang";
import { Badge, Button, Input } from "../../ui";
import BufferedText, { type BufferedTextHandle } from "../BufferedText";
import FieldGroup from "../FieldGroup";
import {
  enunciadoToVariantes,
  extractDeclaredVariables,
  getBlock,
  readEnunciados,
  variantesToEnunciado,
  writeEnunciados,
} from "../../components/vblang/plantillaAst";
import { readTextField, writeTextField } from "../../components/vblang/plantillaFields";

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

export type EnunciadoFieldProps = {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

const chipsStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--space-1)",
};

const rowStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "var(--space-2)",
};

const listStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2)",
  margin: "var(--space-0)",
  padding: "var(--space-0)",
  listStyle: "none",
};

const actionsStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-2)",
};

const counterStyle: CSSProperties = {
  fontSize: "var(--text-xs)",
  color: "var(--c-hint)",
};

export default function EnunciadoField({ plantilla, onChange }: EnunciadoFieldProps) {
  const enunciadosActive = getBlock(plantilla, "enunciados") !== undefined;
  const bufferRef = useRef<BufferedTextHandle | null>(null);
  const variables = extractDeclaredVariables(plantilla);

  const insertVariable = (name: string) => {
    bufferRef.current?.insertAtCursor(`{${name}}`);
  };

  const varsHelp: ReactNode =
    variables.length > 0
      ? "Tocá una variable para insertarla en el enunciado."
      : undefined;

  if (enunciadosActive) {
    return (
      <EnunciadosList plantilla={plantilla} onChange={onChange} />
    );
  }

  const value = readTextField(plantilla, schemaEnunciado);

  return (
    <>
      <BufferedText
        ref={bufferRef}
        label={schemaEnunciado.label}
        help={schemaEnunciado.help}
        multiline
        rows={4}
        value={value}
        commit={(text) => {
          const next = writeTextField(plantilla, schemaEnunciado, text);
          if (next === null) return false;
          onChange(next);
          return true;
        }}
      />

      {variables.length > 0 ? (
        <FieldGroup label="Variables" help={varsHelp}>
          <div style={chipsStyle}>
            {variables.map((name) => (
              <Badge
                key={name}
                variant="accent"
                size="sm"
                // rol de botón accesible via tabIndex + tecla; Badge es <span>
                tabIndex={0}
                role="button"
                aria-label={`Insertar variable ${name} en el enunciado`}
                onClick={() => insertVariable(name)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    insertVariable(name);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                {name}
              </Badge>
            ))}
          </div>
        </FieldGroup>
      ) : null}

      <div style={actionsStyle}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onChange(enunciadoToVariantes(plantilla))}
        >
          Convertir en variantes
        </Button>
      </div>
    </>
  );
}

/** Lista de variantes de enunciado (`enunciados:` plural). */
function EnunciadosList({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const items = readEnunciados(plantilla);
  const update = (next: string[]) => onChange(writeEnunciados(plantilla, next));

  const headStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--space-2)",
  };

  return (
    <FieldGroup label="Enunciados (variantes)" help="Cada variante acepta {variable}.">
      <div style={headStyle}>
        <span style={counterStyle}>
          {items.length} {items.length === 1 ? "variante" : "variantes"}
        </span>
      </div>
      <ul style={listStyle}>
        {items.map((tmpl, idx) => (
          <li key={idx} style={rowStyle}>
            <Input
              aria-label={`Variante de enunciado ${idx + 1}`}
              value={tmpl}
              placeholder="Texto de la variante (acepta {variable})"
              onChange={(e) => {
                const next = items.slice();
                next[idx] = e.target.value;
                update(next);
              }}
            />
            <Button
              variant="danger"
              size="sm"
              aria-label={`Eliminar variante ${idx + 1}`}
              disabled={items.length <= 1}
              onClick={() => {
                if (items.length <= 1) return;
                update(items.filter((_, i) => i !== idx));
              }}
            >
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
      <div style={actionsStyle}>
        <Button variant="ghost" size="sm" onClick={() => update([...items, ""])}>
          + Agregar variante
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onChange(variantesToEnunciado(plantilla))}
        >
          Convertir a enunciado simple
        </Button>
      </div>
    </FieldGroup>
  );
}
