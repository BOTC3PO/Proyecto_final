/**
 * Input de texto del sistema de diseño (prototipo `.input`).
 * Hereda de `Field`: nunca queda sin nombre accesible (label o aria-label).
 */
import type { InputHTMLAttributes } from "react";
import Field, { CONTROL_CLS, type FieldOwnProps } from "./Field";

type NativeProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "aria-label" | "id" | "required" | "className"
>;

export type InputProps = FieldOwnProps & NativeProps;

export default function Input(props: InputProps) {
  const {
    label,
    hint,
    error,
    required,
    className,
    ["aria-label"]: ariaLabel,
    ...native
  } = props as InputProps & { "aria-label"?: string; className?: string };

  const name = (label !== undefined
    ? { label }
    : { "aria-label": ariaLabel as string }) as FieldOwnProps;

  return (
    <Field {...name} hint={hint} error={error} required={required} className={className}>
      {(control) => <input {...native} {...control} className={CONTROL_CLS} />}
    </Field>
  );
}
