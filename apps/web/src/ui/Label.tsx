/**
 * ui/Label.tsx — primitivo del rediseño (División 1).
 *
 * `<label>` estilado por tokens. El átomo crítico de asociación
 * label↔control es `Field` (que usa este Label); Label también sirve
 * suelto cuando se arma la asociación a mano (`htmlFor`/`id`).
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import { forwardRef, type CSSProperties, type LabelHTMLAttributes, type ReactNode } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  /** Marca el campo como requerido: pinta un `*` visual (aria-hidden). */
  required?: boolean;
  children?: ReactNode;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { required, className, style, children, ...rest },
  ref,
) {
  const base: CSSProperties = {
    display: "inline-block",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--fw-medium)",
    lineHeight: "var(--lh-tight)",
    color: "var(--c-text)",
  };

  return (
    <label ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
      {children}
      {required ? (
        <span aria-hidden="true" style={{ color: "var(--c-danger)", marginLeft: "var(--space-1)" }}>
          *
        </span>
      ) : null}
    </label>
  );
});

export default Label;
