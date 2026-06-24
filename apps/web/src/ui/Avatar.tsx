/**
 * ui/Avatar.tsx — primitivo del rediseño (División 6 — nav).
 *
 * Avatar circular con iniciales (o contenido propio). Usado por la nav
 * principal y el sidebar de staff para el menú de usuario. Solo tokens,
 * `forwardRef` — mismo molde que Button/Badge.
 *
 * El color de relleno NO conoce el tema más allá de leer `--c-*`: hereda el
 * recoloreo por `[data-theme]`. El radio es estructural (círculo: 50%).
 */
import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

export type AvatarSize = "sm" | "md";
export type AvatarTone = "primary" | "neutral";

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  size?: AvatarSize;
  tone?: AvatarTone;
  /** Iniciales a mostrar (ignorado si se pasan `children`). */
  initials?: string;
  children?: ReactNode;
};

const SIZES: Record<AvatarSize, { box: string; fontSize: string }> = {
  sm: { box: "var(--space-6)", fontSize: "var(--text-xs)" },
  md: { box: "var(--space-7)", fontSize: "var(--text-sm)" },
};

const TONES: Record<AvatarTone, CSSProperties> = {
  primary: { background: "var(--c-primary)", color: "var(--c-text-on-dark)" },
  neutral: { background: "var(--c-surface-3)", color: "var(--c-text)" },
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { size = "sm", tone = "primary", initials, className, style, children, ...rest },
  ref,
) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: SIZES[size].box,
    height: SIZES[size].box,
    borderRadius: "50%",
    fontFamily: "var(--font-sans)",
    fontSize: SIZES[size].fontSize,
    fontWeight: "var(--fw-bold)",
    lineHeight: "var(--lh-tight)",
    userSelect: "none",
    ...TONES[tone],
  };

  return (
    <div ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
      {children ?? initials}
    </div>
  );
});

export default Avatar;
