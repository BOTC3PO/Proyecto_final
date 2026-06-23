/**
 * ui/Alert.tsx — primitivo del rediseño (División 1).
 *
 * Banner de feedback (info / success / warning / danger) usando los tokens
 * `--c-*-soft` de fondo + `--c-*` de borde-izquierda y título. Semántica:
 *   • danger  → role="alert"  (anunciado al aparecer).
 *   • success / info / warning → role="status".
 * El consumidor puede pisar `role` (ej. para avisos estáticos sin anuncio).
 *
 * `Callout` es un alias del mismo componente.
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
  /** Título destacado (opcional). */
  title?: ReactNode;
  /** Cuerpo del mensaje. */
  children?: ReactNode;
  /** Pisa el role implícito por variante. */
  role?: "alert" | "status" | "none";
};

function variantStyle(variant: AlertVariant): { accent: string; soft: string; title: string } {
  switch (variant) {
    case "success":
      return { accent: "var(--c-success)", soft: "var(--c-success-soft)", title: "var(--c-success)" };
    case "warning":
      return { accent: "var(--c-warning)", soft: "var(--c-warning-soft)", title: "var(--c-warning)" };
    case "danger":
      return { accent: "var(--c-danger)", soft: "var(--c-danger-soft)", title: "var(--c-danger)" };
    case "info":
    default:
      return { accent: "var(--c-info)", soft: "var(--c-info-soft)", title: "var(--c-info)" };
  }
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { variant = "info", title, role, className, style, children, ...rest },
  ref,
) {
  const v = variantStyle(variant);
  const implicitRole: "alert" | "status" = variant === "danger" ? "alert" : "status";
  const resolvedRole = role === "none" ? undefined : role ?? implicitRole;

  const base: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-1)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--lh-normal)",
    color: "var(--c-text)",
    background: v.soft,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--c-border)",
    borderLeftWidth: "var(--space-1)",
    borderLeftColor: v.accent,
    borderRadius: "var(--r-md)",
    paddingBlock: "var(--space-3)",
    paddingInline: "var(--space-4)",
  };

  const titleStyle: CSSProperties = {
    margin: "var(--space-0)",
    fontSize: "var(--text-base)",
    fontWeight: "var(--fw-semibold)",
    lineHeight: "var(--lh-tight)",
    color: v.title,
  };

  const bodyStyle: CSSProperties = {
    margin: "var(--space-0)",
    color: "var(--c-text)",
  };

  return (
    <div ref={ref} role={resolvedRole} className={className} style={{ ...base, ...style }} {...rest}>
      {title ? <p style={titleStyle}>{title}</p> : null}
      {children ? <div style={bodyStyle}>{children}</div> : null}
    </div>
  );
});

export default Alert;

/** Alias de Alert (mismo componente, nombre alternativo). */
export const Callout = Alert;
