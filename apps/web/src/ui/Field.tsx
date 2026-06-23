/**
 * ui/Field.tsx — primitivo del rediseño (División 1).
 *
 * Átomo CRÍTICO de accesibilidad de formularios. Envuelve un control y:
 *   • genera un `id` estable (useId) y asocia `<Label htmlFor>` ↔ control;
 *   • inyecta en el control, vía cloneElement: `id`, `aria-invalid` y
 *     `aria-describedby` apuntando al texto de ayuda o de error;
 *   • renderiza el texto de ayuda y, si hay `error`, un mensaje con `role=
 *     alert"` (anunciado por AT al aparecer) que también es el-describedby.
 *
 * El control hijo recibe `invalid` automáticamente cuando hay `error`, de
 * modo que Input/Textarea/Select pinten el borde en --c-danger sin que el
 * consumidor lo repita. Si el hijo ya trae `invalid`, se respeta.
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useId,
  type CSSProperties,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import Label, { type LabelProps } from "./Label";

export type FieldProps = Omit<HTMLAttributes<HTMLDivElement>, "id"> & {
  /** Texto/etiqueta del campo. */
  label?: ReactNode;
  /** Props extra para el Label interno (ej. `required`). */
  labelProps?: LabelProps;
  /** Texto de ayuda (no crítico). Se anuncia vía aria-describedby. */
  help?: ReactNode;
  /** Mensaje de error. Pone el control en estado invalid + role=alert. */
  error?: ReactNode;
  /** Marca requerido el Label (propaga el `*` visual). */
  required?: boolean;
  /** Override del id autogenerado del control. */
  id?: string;
  /** Control: Input / Textarea / Select / Checkbox / Radio / Switch / … */
  children: ReactElement;
};

const Field = forwardRef<HTMLDivElement, FieldProps>(function Field(
  { label, labelProps, help, error, required, id, className, style, children, ...rest },
  ref,
) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const helpId = `${fieldId}-help`;
  const errorId = `${fieldId}-error`;

  const describedBy = error ? errorId : help ? helpId : undefined;
  const isInvalid = !!error;

  const child = Children.only(children);
  const control = isValidElement(child)
    ? cloneElement(child, {
        id: (child.props as { id?: string }).id ?? fieldId,
        "aria-invalid": isInvalid || (child.props as { "aria-invalid"?: boolean })["aria-invalid"] || undefined,
        "aria-describedby": describedBy,
        ...(("invalid" in (child.props as Record<string, unknown>))
          ? { invalid: (child.props as { invalid?: boolean }).invalid ?? isInvalid }
          : {}),
      } as Record<string, unknown>)
    : child;

  const base: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-2)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    color: "var(--c-text)",
  };

  const helpStyle: CSSProperties = {
    fontSize: "var(--text-xs)",
    lineHeight: "var(--lh-normal)",
    color: "var(--c-hint)",
    margin: "var(--space-0)",
  };

  const errorStyle: CSSProperties = {
    ...helpStyle,
    color: "var(--c-danger)",
    fontWeight: "var(--fw-medium)",
  };

  return (
    <div ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
      {label != null ? (
        <Label htmlFor={fieldId} required={required} {...labelProps}>
          {label}
        </Label>
      ) : null}
      {control}
      {help && !error ? (
        <p id={helpId} style={helpStyle}>
          {help}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" style={errorStyle}>
          {error}
        </p>
      ) : null}
    </div>
  );
});

export default Field;
