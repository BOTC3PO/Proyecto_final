/**
 * Textarea del sistema de diseño (prototipo `.textarea`).
 * Hereda de `Field`: nunca queda sin nombre accesible (label o aria-label).
 */
import type { TextareaHTMLAttributes } from "react";
import Field, { CONTROL_CLS, type FieldOwnProps } from "./Field";

type NativeProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "aria-label" | "id" | "required" | "className"
>;

export type TextareaProps = FieldOwnProps & NativeProps;

export default function Textarea(props: TextareaProps) {
  const {
    label,
    hint,
    error,
    required,
    className,
    ["aria-label"]: ariaLabel,
    ...native
  } = props as TextareaProps & { "aria-label"?: string; className?: string };

  const name = (label !== undefined
    ? { label }
    : { "aria-label": ariaLabel as string }) as FieldOwnProps;

  return (
    <Field {...name} hint={hint} error={error} required={required} className={className}>
      {(control) => (
        <textarea {...native} {...control} className={`${CONTROL_CLS} resize-y`} />
      )}
    </Field>
  );
}
