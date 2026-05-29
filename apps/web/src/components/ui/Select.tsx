/**
 * Select del sistema de diseño (prototipo `.select`).
 * Hereda de `Field`: nunca queda sin nombre accesible (label o aria-label).
 */
import type { SelectHTMLAttributes, ReactNode } from "react";
import Field, { CONTROL_CLS, type FieldOwnProps } from "./Field";

type NativeProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "aria-label" | "id" | "required" | "className"
>;

export type SelectProps = FieldOwnProps & NativeProps & { children: ReactNode };

export default function Select(props: SelectProps) {
  const {
    label,
    hint,
    error,
    required,
    className,
    children,
    ["aria-label"]: ariaLabel,
    ...native
  } = props as SelectProps & { "aria-label"?: string; className?: string };

  const name = (label !== undefined
    ? { label }
    : { "aria-label": ariaLabel as string }) as FieldOwnProps;

  return (
    <Field {...name} hint={hint} error={error} required={required} className={className}>
      {(control) => (
        <select {...native} {...control} className={CONTROL_CLS}>
          {children}
        </select>
      )}
    </Field>
  );
}
