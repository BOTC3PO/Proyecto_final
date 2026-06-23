/**
 * ui/Textarea.tsx — primitivo del rediseño (División 1).
 *
 * `<textarea>` estilado por tokens. Mismo contrato de a11y que Input
 * (foco vía regla global, error vía borde + `aria-invalid` que cablea Field).
 * `resize` vertical por defecto; `rows` controla la altura inicial.
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import { forwardRef, type CSSProperties, type TextareaHTMLAttributes } from "react";

export type TextareaSize = "sm" | "md";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: TextareaSize;
  invalid?: boolean;
};

const SIZES: Record<TextareaSize, { padY: string; padX: string; fontSize: string }> = {
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

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { size = "md", invalid = false, className, style, disabled, rows = 4, ...rest },
  ref,
) {
  const base: CSSProperties = {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-sans)",
    fontSize: SIZES[size].fontSize,
    lineHeight: "var(--lh-normal)",
    color: "var(--c-text)",
    background: "var(--c-surface)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? "var(--c-danger)" : "var(--c-border-strong)",
    borderRadius: "var(--r-md)",
    paddingBlock: SIZES[size].padY,
    paddingInline: SIZES[size].padX,
    margin: "var(--space-0)",
    resize: "vertical",
    transition: "border-color 120ms ease, box-shadow 120ms ease, opacity 120ms ease",
    cursor: disabled ? "not-allowed" : "text",
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      disabled={disabled}
      rows={rows}
      className={className}
      style={{ ...base, ...style }}
      {...rest}
    />
  );
});

export default Textarea;
