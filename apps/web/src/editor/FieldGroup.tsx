/**
 * editor/FieldGroup.tsx — grupo etiquetado (label + help + children), sobre tokens.
 *
 * A diferencia del átomo `ui/Field` (que envuelve UN control y cablea
 * `htmlFor`/`aria-invalid`/`aria-describedby`), `FieldGroup` es un contenedor
 * etiquetado para grupos con varios hijos (listas de inputs, chips de
 * variables, etc.). Los hijos manejan su propia a11y (`aria-label` por ítem);
 * el label del grupo es visual + un `<span>` (no un `<label>`, para evitar
 * asociación espuria con el primer focuseable).
 *
 * No es un átomo: vive en `editor/` (composite de shell).
 */
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type FieldGroupProps = HTMLAttributes<HTMLDivElement> & {
  label?: ReactNode;
  help?: ReactNode;
  error?: ReactNode;
  children?: ReactNode;
};

const wrapStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2)",
};

const labelStyle: CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--fw-medium)",
  lineHeight: "var(--lh-tight)",
  color: "var(--c-text)",
};

const helpStyle: CSSProperties = {
  margin: "var(--space-0)",
  fontSize: "var(--text-xs)",
  lineHeight: "var(--lh-normal)",
  color: "var(--c-hint)",
};

const errorStyle: CSSProperties = {
  ...helpStyle,
  color: "var(--c-danger)",
  fontWeight: "var(--fw-medium)",
};

export default function FieldGroup({
  label,
  help,
  error,
  children,
  className,
  style,
  ...rest
}: FieldGroupProps) {
  return (
    <div className={className} style={{ ...wrapStyle, ...style }} {...rest}>
      {label != null ? <span style={labelStyle}>{label}</span> : null}
      {help && !error ? <p style={helpStyle}>{help}</p> : null}
      {error ? (
        <p role="alert" style={errorStyle}>
          {error}
        </p>
      ) : null}
      {children}
    </div>
  );
}
