/**
 * ui/Card.tsx — primitivo DEMOSTRADOR del rediseño.
 *
 * Plantilla del patrón que seguirán las próximas divisiones:
 * todos los valores visuales son tokens. Cero literales hardcodeados.
 *
 * Variantes:
 *   • flat    → solo borde, sin sombra
 *   • raised  → sombra suave (--shadow-sm)
 *   • elevated→ sombra media (--shadow-md)
 *   • pop     → sombra fuerte (--shadow-lg) — climax visual
 *
 * Convive con `components/ui/Card.tsx` (viejo) hasta que cada división
 * lo migre.
 */
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type CardVariant = "flat" | "raised" | "elevated" | "pop";
export type CardPadding = "none" | "sm" | "md" | "lg";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  padding?: CardPadding;
  children?: ReactNode;
};

const PADDING: Record<CardPadding, string> = {
  none: "var(--space-0)",
  sm: "var(--space-3)",
  md: "var(--space-4)",
  lg: "var(--space-5)",
};

const SHADOW: Record<CardVariant, string> = {
  flat: "none",
  raised: "var(--shadow-sm)",
  elevated: "var(--shadow-md)",
  pop: "var(--shadow-lg)",
};

export default function Card({
  variant = "raised",
  padding = "md",
  className,
  style,
  children,
  ...rest
}: CardProps) {
  const base: CSSProperties = {
    background: "var(--c-surface)",
    color: "var(--c-text)",
    borderColor: "var(--c-border)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "var(--r-lg)",
    padding: PADDING[padding],
    boxShadow: SHADOW[variant],
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-base)",
    lineHeight: "var(--lh-normal)",
  };

  return (
    <div className={className} style={{ ...base, ...style }} {...rest}>
      {children}
    </div>
  );
}
