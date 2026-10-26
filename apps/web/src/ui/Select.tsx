/**
 * ui/Select.tsx — primitivo del rediseño (División 1).
 *
 * `<select>` nativo estilado por tokens. Se conserva la flecha nativa
 * (máxima accesibilidad + multi-tema sin hardcodear íconos). El foco
 * accesible viene de la regla global `:focus-visible` de index.css.
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import { forwardRef, type CSSProperties, type SelectHTMLAttributes, type ReactNode } from "react";

export type SelectSize = "sm" | "md";

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
  size?: SelectSize;
  invalid?: boolean;
  children?: ReactNode;
};

const SIZES: Record<SelectSize, { padY: string; padX: string; fontSize: string }> = {
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

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { size = "md", invalid = false, className, style, disabled, children, ...rest },
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
    // espacio extra a la derecha para no tapar la flecha nativa
    paddingRight: "var(--space-6)",
    margin: "var(--space-0)",
    transition: "border-color 120ms ease, opacity 120ms ease",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <select
      ref={ref}
      aria-invalid={invalid || undefined}
      disabled={disabled}
      className={className}
      style={{ ...base, ...style }}
      {...rest}
    >
      {children}
    </select>
  );
});

export default Select;
