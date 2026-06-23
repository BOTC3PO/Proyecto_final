/**
 * ui/Checkbox.tsx — primitivo del rediseño (División 1).
 *
 * `<input type="checkbox">` nativo recoloreado con `accent-color` (token
 * `--c-primary`). Máxima accesibilidad gratis: teclado, lector de pantalla,
 * participación en formularios y multi-tema — sin hardcodear íconos ni
 * simular estados. El foco accesible lo da la regla global `:focus-visible`.
 *
 * Si recibe `label`/`children` se envuelve en un `<label>` (hit area + asocia-
 * ción). Si no, se renderiza "pelado" (ideal dentro de `Field`, que ya asocia
 * vía `htmlFor`/`aria-labelledby`).
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import { forwardRef, type CSSProperties, type InputHTMLAttributes, type ReactNode } from "react";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  /** Etiqueta visible asociada al control (envuelve en <label>). */
  label?: ReactNode;
  children?: ReactNode;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, children, className, style, disabled, ...rest },
  ref,
) {
  const control: CSSProperties = {
    width: "var(--space-4)",
    height: "var(--space-4)",
    margin: "var(--space-0)",
    accentColor: "var(--c-primary)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    flex: "0 0 auto",
  };

  const text = label ?? children;

  if (!text) {
    return (
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        className={className}
        style={{ ...control, ...style }}
        {...rest}
      />
    );
  }

  const wrapper: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--lh-normal)",
    color: "var(--c-text)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <label className={className} style={{ ...wrapper, ...style }}>
      <input ref={ref} type="checkbox" disabled={disabled} style={control} {...rest} />
      <span>{text}</span>
    </label>
  );
});

export default Checkbox;
