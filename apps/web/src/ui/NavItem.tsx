/**
 * ui/NavItem.tsx — primitivo del rediseño (División 6 — nav).
 *
 * Ítem de navegación con estado activo. Envuelve el `NavLink` de
 * react-router (la nav es, por naturaleza, router-aware): así reutilizamos
 * su lógica de matching (`to`, `end`, rutas anidadas) y su
 * `aria-current="page"` automático en el ítem activo — NO se reimplementa
 * el routing, sólo se centraliza el *chrome* (activo / hover / foco).
 *
 * El foco visible lo aporta la regla global `:focus-visible` de `index.css`
 * (cubre `a`). El hover, al ser estilos inline (token-puros), se maneja con
 * estado local. Solo tokens.
 *
 * Dos orientaciones:
 *   • `horizontal` → píldora (nav superior): activo = relleno `--c-primary`.
 *   • `sidebar`    → fila con barra-acento a la izquierda (sidebar de staff).
 */
import { useState, type CSSProperties, type ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";

export type NavItemOrientation = "horizontal" | "sidebar";

export type NavItemProps = Omit<NavLinkProps, "className" | "style" | "children"> & {
  orientation?: NavItemOrientation;
  /** Override estático mergeado sobre los estilos del ítem. */
  style?: CSSProperties;
  children?: ReactNode;
};

const HORIZONTAL_BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--space-2)",
  paddingBlock: "var(--space-2)",
  paddingInline: "var(--space-3)",
  borderRadius: "var(--r-xl)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--fw-medium)",
  lineHeight: "var(--lh-tight)",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background-color 120ms ease, color 120ms ease, border-color 120ms ease",
};

const SIDEBAR_BASE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--space-2)",
  paddingBlock: "var(--space-2)",
  paddingInline: "var(--space-5)",
  borderLeftWidth: "2px",
  borderLeftStyle: "solid",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  lineHeight: "var(--lh-tight)",
  textDecoration: "none",
  transition: "background-color 120ms ease, color 120ms ease, border-color 120ms ease",
};

function horizontalStyle(isActive: boolean, hovered: boolean): CSSProperties {
  if (isActive) {
    return { background: "var(--c-primary)", color: "var(--c-text-on-dark)" };
  }
  return {
    background: hovered ? "var(--c-hover)" : "transparent",
    color: hovered ? "var(--c-text)" : "var(--c-muted)",
  };
}

function sidebarStyle(isActive: boolean, hovered: boolean): CSSProperties {
  if (isActive) {
    return {
      borderLeftColor: "var(--c-primary)",
      color: "var(--c-primary)",
      fontWeight: "var(--fw-medium)",
      background: "color-mix(in srgb, var(--c-primary) 6%, transparent)",
    };
  }
  return {
    borderLeftColor: "transparent",
    color: hovered ? "var(--c-text)" : "var(--c-muted)",
    fontWeight: "var(--fw-regular)",
    background: hovered ? "var(--c-hover)" : "transparent",
  };
}

export default function NavItem({
  orientation = "horizontal",
  style,
  children,
  ...rest
}: NavItemProps) {
  const [hovered, setHovered] = useState(false);
  const base = orientation === "sidebar" ? SIDEBAR_BASE : HORIZONTAL_BASE;

  return (
    <NavLink
      {...rest}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={({ isActive }) => ({
        ...base,
        ...(orientation === "sidebar"
          ? sidebarStyle(isActive, hovered)
          : horizontalStyle(isActive, hovered)),
        ...style,
      })}
    >
      {children}
    </NavLink>
  );
}
