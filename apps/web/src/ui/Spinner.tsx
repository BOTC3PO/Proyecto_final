/**
 * ui/Spinner.tsx — primitivo del rediseño (División 1).
 *
 * Indicador de carga. SVG con `<animateTransform>` (SMIL) → rotación
 * declarativa sin keyframes CSS. Colores por tokens: arco inactivo
 * `--c-border` + arco activo `--c-primary`.
 *
 * Accesibilidad: por defecto `role="img"` + `aria-label="Cargando…"`. Para
 * uso decorativo (junto a un texto "Cargando…" ya visible), pasar
 * `label={null}` → queda `aria-hidden` y no se anuncia dos veces.
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import { forwardRef, type CSSProperties, type SVGProps } from "react";

export type SpinnerSize = "sm" | "md" | "lg";

export type SpinnerProps = Omit<SVGProps<SVGSVGElement>, "role" | "aria-label"> & {
  size?: SpinnerSize;
  /** Nombre accesible. Pasar `null` para marcarlo decorativo (aria-hidden). */
  label?: string | null;
};

const SIZES: Record<SpinnerSize, string> = {
  sm: "var(--space-4)",
  md: "var(--space-5)",
  lg: "var(--space-6)",
};

const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(function Spinner(
  { size = "md", label = "Cargando…", className, style, ...rest },
  ref,
) {
  const dim = SIZES[size];
  const base: CSSProperties = {
    width: dim,
    height: dim,
    flex: "0 0 auto",
    display: "inline-block",
    verticalAlign: "middle",
  };

  const decorative = label == null;

  return (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      className={className}
      style={{ ...base, ...style }}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative || undefined}
      {...rest}
    >
      <circle cx="12" cy="12" r="9" fill="none" stroke="var(--c-border)" strokeWidth={3} />
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="var(--c-primary)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="42 60"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
});

export default Spinner;
