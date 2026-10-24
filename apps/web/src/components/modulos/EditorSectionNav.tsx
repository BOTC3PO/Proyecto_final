/**
 * EditorSectionNav — Tarea 15 (chrome rediseñado División 7).
 *
 * Barra de navegación sticky para el editor de módulos. Renderiza una
 * columna lateral (desktop ≥ lg) o una fila horizontal scrollable (mobile)
 * con un link por sección. Cada link muestra un indicador ✓/⚠ del estado
 * de la sección. Al hacer click, hace scroll suave al ancla y enfoca el
 * heading de la sección (que debe tener `tabIndex={-1}`).
 *
 * La sección activa se resalta con `IntersectionObserver`.
 *
 * El chrome usa los mismos tokens y patrones que los átomos de D6 (NavItem).
 * Las anclas son `<a href="#id">` con scroll propio — no se usa NavLink de
 * react-router para no interferir con el IntersectionObserver y el focus.
 *
 * Accesibilidad: `<nav aria-label>`, `aria-current="location"` en la activa,
 * respeta `prefers-reduced-motion` (sin scroll suave en ese caso).
 */

import { useEffect, useState, type CSSProperties } from "react";

import { useI18n } from "../../i18n/I18nContext";
export interface EditorSectionStatus {
  /** "ok" cuando la sección está completa, "incomplete" cuando le falta algo. */
  status: "ok" | "incomplete";
  /** Etiqueta accesible adicional (e.g. "Incompleta" o "Completa"). */
  label?: string;
}

export interface EditorSectionDef {
  id: string;
  label: string;
  /** Estado actual de la sección (controlado por el padre). */
  status: EditorSectionStatus;
  /** Si false, el link se muestra deshabilitado (no scroll). */
  enabled?: boolean;
}

export interface EditorSectionNavProps {
  sections: EditorSectionDef[];
  /** Clases extra para el contenedor (permite alinear con el grid del editor). */
  className?: string;
}

export default function EditorSectionNav({
  sections,
  className = "",
}: EditorSectionNavProps) {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState<string | null>(
    sections[0]?.id ?? null,
  );

  // Detectar la sección activa via IntersectionObserver. La sección se considera
  // activa cuando su parte superior cruza el "rootMargin" (debajo del page-bar).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Elegimos la sección con la posición más alta que aún está
        // intersectando (entries con isIntersecting=true ordenados por top).
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -50% 0px",
        threshold: 0,
      },
    );
    for (const t of targets) observer.observe(t);
    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: EditorSectionDef,
  ) => {
    if (section.enabled === false) {
      e.preventDefault();
      return;
    }
    const target = document.getElementById(section.id);
    if (!target) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    // Foco en el heading (los headings tienen tabIndex=-1 explícito).
    const heading = target.querySelector("h1, h2, h3, h4, h5, h6");
    if (heading instanceof HTMLElement) {
      heading.focus({ preventScroll: true });
    } else {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
    setActiveId(section.id);
  };

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label={t("editorSectionNav.seccionesDelEditor")}
      data-testid="editor-section-nav"
      className={className}
    >
      {/* Desktop: columna vertical sticky */}
      <ul
        role="list"
        className="hidden lg:flex lg:flex-col lg:gap-1 lg:sticky lg:top-20"
        style={{ listStyle: "none", margin: 0, padding: 0 }}
      >
        {sections.map((s) => (
          <SectionNavItem
            key={s.id}
            section={s}
            isActive={s.id === activeId}
            onClick={handleClick}
            layout="column"
          />
        ))}
      </ul>
      {/* Mobile: fila horizontal sticky con scroll */}
      <ul
        role="list"
        className="flex flex-row gap-1 overflow-x-auto lg:hidden sticky z-10"
        style={{
          listStyle: "none",
          margin: 0,
          padding: `var(--space-1) var(--space-2)`,
          top: "3rem",
          background: "var(--c-surface)",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "var(--c-border)",
        }}
      >
        {sections.map((s) => (
          <SectionNavItem
            key={s.id}
            section={s}
            isActive={s.id === activeId}
            onClick={handleClick}
            layout="row"
          />
        ))}
      </ul>
    </nav>
  );
}

function SectionNavItem({
  section,
  isActive,
  onClick,
  layout,
}: {
  section: EditorSectionDef;
  isActive: boolean;
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: EditorSectionDef,
  ) => void;
  layout: "row" | "column";
}) {
  const [hovered, setHovered] = useState(false);
  const enabled = section.enabled !== false;
  const statusGlyph = section.status.status === "ok" ? "✓" : "⚠";
  const statusColor: CSSProperties["color"] =
    section.status.status === "ok" ? "var(--c-success)" : "var(--c-warning)";

  const base: CSSProperties =
    layout === "row"
      ? {
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-2)",
          flexShrink: 0,
          borderRadius: "var(--r-md)",
          paddingBlock: "var(--space-1)",
          paddingInline: "var(--space-3)",
          fontSize: "var(--text-xs)",
          fontFamily: "var(--font-sans)",
          textDecoration: "none",
          whiteSpace: "nowrap",
          transition: "background-color 120ms ease, color 120ms ease",
        }
      : {
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
          borderRadius: "var(--r-md)",
          paddingBlock: "var(--space-2)",
          paddingInline: "var(--space-3)",
          fontSize: "var(--text-sm)",
          fontFamily: "var(--font-sans)",
          textDecoration: "none",
          transition: "background-color 120ms ease, color 120ms ease",
        };

  const state: CSSProperties = isActive
    ? {
        background: "color-mix(in srgb, var(--c-primary) 12%, var(--c-surface))",
        color: "var(--c-primary)",
        fontWeight: "var(--fw-semibold)",
      }
    : {
        background: hovered ? "var(--c-hover)" : "transparent",
        color: hovered ? "var(--c-text)" : "var(--c-muted)",
        fontWeight: "var(--fw-regular)",
      };

  return (
    <li>
      <a
        href={`#${section.id}`}
        onClick={(e) => onClick(e, section)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-current={isActive ? "location" : undefined}
        aria-disabled={!enabled || undefined}
        data-testid={`editor-section-link-${section.id}`}
        style={{
          ...base,
          ...state,
          ...(enabled ? {} : { pointerEvents: "none", opacity: 0.5 }),
        }}
      >
        <span aria-hidden="true" style={{ color: statusColor, flexShrink: 0 }}>
          {statusGlyph}
        </span>
        <span>{section.label}</span>
        {section.status.label ? (
          <span className="sr-only"> ({section.status.label})</span>
        ) : null}
      </a>
    </li>
  );
}
