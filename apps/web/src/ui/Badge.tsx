/**
 * ui/Badge.tsx — primitivo del rediseño (División 1).
 *
 * Chip / pill semántico (dificultad, estado, conteo). Variantes de color vía
 * los tokens soft `--c-*-soft` (fondo) + `--c-*` (borde / texto). Neutral usa
 * superficie + borde. Tamaños sm/md.
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

export type BadgeVariant =
  | "neutral"
  | "primary"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type BadgeSize = "sm" | "md";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** Chip con esquinas redondeadas de píldora (default true). */
  pill?: boolean;
  children?: ReactNode;
};

const SIZES: Record<BadgeSize, { padY: string; padX: string; fontSize: string }> = {
  sm: { padY: "var(--space-1)", padX: "var(--space-2)", fontSize: "var(--text-xs)" },
  md: { padY: "var(--space-1)", padX: "var(--space-3)", fontSize: "var(--text-sm)" },
};

function variantStyle(variant: BadgeVariant): CSSProperties {
  switch (variant) {
    case "primary":
      return {
        background: "color-mix(in srgb, var(--c-primary) 14%, var(--c-surface))",
        borderColor: "var(--c-primary)",
        color: "var(--c-primary)",
      };
    case "accent":
      return {
        background: "var(--c-accent-soft)",
        borderColor: "var(--c-accent)",
        color: "var(--c-accent)",
      };
    case "success":
      return {
        background: "var(--c-success-soft)",
        borderColor: "var(--c-success)",
        color: "var(--c-success)",
      };
    case "warning":
      return {
        background: "var(--c-warning-soft)",
        borderColor: "var(--c-warning)",
        color: "var(--c-warning)",
      };
    case "danger":
      return {
        background: "var(--c-danger-soft)",
        borderColor: "var(--c-danger)",
        color: "var(--c-danger)",
      };
    case "info":
      return {
        background: "var(--c-info-soft)",
        borderColor: "var(--c-info)",
        color: "var(--c-info)",
      };
    case "neutral":
    default:
      return {
        background: "var(--c-surface-3)",
        borderColor: "var(--c-border)",
        color: "var(--c-text)",
      };
  }
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = "neutral", size = "md", pill = true, className, style, children, ...rest },
  ref,
) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-1)",
    fontFamily: "var(--font-sans)",
    fontSize: SIZES[size].fontSize,
    fontWeight: "var(--fw-medium)",
    lineHeight: "var(--lh-tight)",
    paddingBlock: SIZES[size].padY,
    paddingInline: SIZES[size].padX,
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: pill ? "var(--r-xl)" : "var(--r-sm)",
    whiteSpace: "nowrap",
    ...variantStyle(variant),
  };

  return (
    <span ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
      {children}
    </span>
  );
});

export default Badge;
