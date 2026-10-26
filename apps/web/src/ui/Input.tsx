/**
 * ui/Input.tsx — primitivo del rediseño (División 1).
 *
 * `<input type="text">` (y afines) estilado por tokens. El estado de foco
 * accesible lo da la regla global `:focus-visible` de index.css (cubren a
 * `input`), con `--c-focus-ring` — igual que Button. El estado de error se
 * expresa vía borde + `aria-invalid` (este último lo cablea `Field`).
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef, uniones de
 * variantes/tamaños por tipos.
 */
import { forwardRef, type CSSProperties, type InputHTMLAttributes } from "react";

export type InputSize = "sm" | "md";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: InputSize;
  /** Estado de error: borde en --c-danger. `aria-invalid` lo cablea Field. */
  invalid?: boolean;
};

const SIZES: Record<InputSize, { padY: string; padX: string; fontSize: string }> = {
  sm: {
    padY: "var(--space-1)",
    padX: "var(--space-3)",
    fontSize: "var(--text-sm)",
  },
  md: {
    padY: "var(--space-2)",
    padX: "var(--space-4)",
    fontSize: "var(--text-base)",
  },
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "md", invalid = false, className, style, disabled, ...rest },
  ref,
) {
  const base: CSSProperties = {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-sans)",
    fontSize: SIZES[size].fontSize,
    lineHeight: "var(--lh-tight)",
    color: "var(--c-text)",
    background: "var(--c-surface)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? "var(--c-danger)" : "var(--c-border-strong)",
    borderRadius: "var(--r-md)",
    paddingBlock: SIZES[size].padY,
    paddingInline: SIZES[size].padX,
    margin: "var(--space-0)",
    transition: "border-color 120ms ease, box-shadow 120ms ease, opacity 120ms ease",
    cursor: disabled ? "not-allowed" : "text",
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      disabled={disabled}
      className={className}
      style={{ ...base, ...style }}
      {...rest}
    />
  );
});

export default Input;
