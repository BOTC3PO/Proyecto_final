/**
 * ui/Switch.tsx — primitivo del rediseño (División 1).
 *
 * Toggle on/off con semántica ARIA correcta: `<button role="switch">` +
 * `aria-checked`. Teclado gratis (Space/Enter conmutan un `<button>`); foco
 * accesible vía la regla global `:focus-visible` (cubre a `button`).
 *
 * Es un control controlado: `checked` + `onCheckedChange`. El nombre
 * accesible lo da `Field` (`aria-labelledby`) o `aria-label` suelto.
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import { forwardRef, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";

export type SwitchProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange" | "type" | "role" | "aria-checked"
> & {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  /** Etiqueta visible opcional (alternativa a aria-label / Field). */
  label?: ReactNode;
  disabled?: boolean;
};

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { checked, onCheckedChange, label, disabled, className, style, onClick, ...rest },
  ref,
) {
  const track: CSSProperties = {
    flex: "0 0 auto",
    position: "relative",
    width: "var(--space-6)",
    height: "var(--space-4)",
    borderRadius: "var(--r-xl)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: checked ? "var(--c-primary)" : "var(--c-border-strong)",
    background: checked ? "var(--c-primary)" : "var(--c-surface-3)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "background-color 160ms ease, border-color 160ms ease",
  };

  const thumb: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: checked ? "calc(100% - var(--space-3))" : "var(--space-1)",
    transform: "translateY(-50%)",
    width: "var(--space-3)",
    height: "var(--space-3)",
    borderRadius: "var(--r-xl)",
    background: "var(--c-surface)",
    boxShadow: "var(--shadow-sm)",
    transition: "left 160ms ease",
  };

  const labelText: CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--lh-normal)",
    color: "var(--c-text)",
  };

  const wrapper: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <span className={className} style={{ ...wrapper, ...style }}>
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        style={track}
        onClick={(e) => {
          if (!disabled) onCheckedChange(!checked);
          onClick?.(e);
        }}
        {...rest}
      >
        <span aria-hidden="true" style={thumb} />
      </button>
      {label ? <span style={labelText}>{label}</span> : null}
    </span>
  );
});

export default Switch;
