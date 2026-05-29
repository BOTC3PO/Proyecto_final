/**
 * Wrapper de campo de formulario (prototipo `.field`).
 *
 * Regla de a11y horneada: **todo campo necesita nombre accesible**. Por tipos
 * se exige `label` (visible) **o** `aria-label` (oculto) — uno de los dos.
 *
 * `Field` es de bajo nivel y usa render-prop para inyectar al control los
 * atributos correctos (`id`, `aria-describedby`, `aria-invalid`, `aria-label`).
 * Los controles `Input` / `Select` / `Textarea` se construyen encima.
 */
import { useId } from "react";
import type { ReactNode } from "react";

// label XOR aria-label, exigido por tipos.
export type AccessibleName =
  | { label: string; "aria-label"?: never }
  | { label?: never; "aria-label": string };

export type FieldOwnProps = AccessibleName & {
  /** Texto de ayuda bajo el control. */
  hint?: ReactNode;
  /** Mensaje de error (también marca el control como inválido). */
  error?: ReactNode;
  required?: boolean;
  className?: string;
};

/** Atributos que el render-prop inyecta al control interno. */
export interface FieldControlProps {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  "aria-label"?: string;
  required?: boolean;
}

type FieldProps = FieldOwnProps & {
  children: (control: FieldControlProps) => ReactNode;
};

export default function Field({
  label,
  hint,
  error,
  required,
  className = "",
  children,
  ...rest
}: FieldProps) {
  const ariaLabel = (rest as { "aria-label"?: string })["aria-label"];
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const control: FieldControlProps = {
    id,
    "aria-describedby": describedBy,
    "aria-invalid": error ? true : undefined,
    "aria-label": label ? undefined : ariaLabel,
    required,
  };

  return (
    <div className={"flex flex-col gap-1 " + className}>
      {label && (
        <label htmlFor={id} className="text-xs font-medium text-[var(--c-text-3)]">
          {label}
          {required && <span className="ml-0.5 text-[var(--c-danger)]">*</span>}
        </label>
      )}
      {children(control)}
      {hint && !error && (
        <p id={hintId} className="text-xs text-[var(--c-text-3)]">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs text-[var(--c-danger)]">
          {error}
        </p>
      )}
    </div>
  );
}

/** Clases compartidas de los controles (input/select/textarea). */
export const CONTROL_CLS =
  "w-full rounded-[var(--r-md)] border border-[var(--c-border-strong)] " +
  "bg-[var(--c-surface)] px-3 py-1.5 text-sm text-[var(--c-text)] " +
  "transition-colors motion-reduce:transition-none " +
  "placeholder:text-[var(--c-text-3)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] " +
  "aria-[invalid=true]:border-[var(--c-danger)] " +
  "disabled:opacity-50 disabled:cursor-not-allowed";
