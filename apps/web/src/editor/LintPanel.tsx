/**
 * editor/LintPanel.tsx — resumen de validación del editor nuevo (≈ ErrorPanel).
 *
 * Muestra todos los issues del `lint` (errores + warnings) en un `Alert`, como
 * complemento del lint por campo (cada campo culpable ya pinta su error vía
 * `Field.error`/`lintFieldMap`). No replica los quick-fixes ni el "ir a línea"
 * del `ErrorPanel` del modo código (eso vive en la página de código, no en el
 * form). Si no hay issues, no renderiza nada.
 */
import type { CSSProperties } from "react";
import type { LintReport } from "@vb/vblang";
import { Alert } from "../ui";

const listStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-1)",
  margin: "var(--space-0)",
  paddingLeft: "var(--space-4)",
  fontSize: "var(--text-xs)",
  lineHeight: "var(--lh-normal)",
};

const codeStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-2xs, var(--text-xs))",
  color: "var(--c-hint)",
  marginRight: "var(--space-1)",
};

export type LintPanelProps = { report: LintReport };

export default function LintPanel({ report }: LintPanelProps) {
  const { errors, warnings } = report;
  if (errors.length === 0 && warnings.length === 0) return null;

  const variant = errors.length > 0 ? "danger" : "warning";
  const title =
    `${errors.length} ${errors.length === 1 ? "error" : "errores"}` +
    ` · ${warnings.length} ${warnings.length === 1 ? "advertencia" : "advertencias"}`;

  return (
    <Alert variant={variant} title={title}>
      <ul style={listStyle}>
        {[...errors, ...warnings].map((it, i) => (
          <li key={`${it.code}-${i}`}>
            <code style={codeStyle}>{it.code}</code>
            {it.message}
          </li>
        ))}
      </ul>
    </Alert>
  );
}
