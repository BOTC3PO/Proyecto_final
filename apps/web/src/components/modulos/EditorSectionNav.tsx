/**
 * EditorSectionNav — Tarea 15.
 *
 * Barra de navegación sticky para el editor de módulos. Renderiza una
 * columna lateral (desktop ≥ lg) o una fila horizontal scrollable (mobile)
 * con un link por sección. Cada link muestra un indicador ✓/⚠ del estado
 * de la sección. Al hacer click, hace scroll suave al ancla y enfoca el
 * heading de la sección (que debe tener `tabIndex={-1}`).
 *
 * La sección activa se resalta con `IntersectionObserver`.
 *
 * Accesibilidad: `<nav aria-label>`, `aria-current="location"` en la activa,
 * respeta `prefers-reduced-motion` (sin scroll suave en ese caso).
 */

import { useEffect, useState } from "react";

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
      aria-label="Secciones del editor"
      data-testid="editor-section-nav"
      className={className}
    >
      {/* Desktop: columna vertical sticky */}
      <ul
        role="list"
        className="hidden lg:flex lg:flex-col lg:gap-1 lg:sticky lg:top-20"
      >
        {sections.map((s) => (
          <NavItem
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
        className="flex flex-row gap-1 overflow-x-auto border-b border-[var(--c-border)] bg-[var(--c-surface)] py-1 lg:hidden sticky top-12 z-10"
      >
        {sections.map((s) => (
          <NavItem
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

function NavItem({
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
  const enabled = section.enabled !== false;
  const statusGlyph = section.status.status === "ok" ? "✓" : "⚠";
  const statusColor =
    section.status.status === "ok"
      ? "text-[var(--c-success)]"
      : "text-[var(--c-warning)]";
  const baseClasses =
    layout === "row"
      ? "shrink-0 rounded-md px-3 py-1 text-xs"
      : "rounded-md px-3 py-1.5 text-sm";
  const activeClasses = isActive
    ? "bg-[var(--c-primary-soft,#dbeafe)] text-[var(--c-primary,#1d4ed8)] font-semibold"
    : "text-[var(--c-muted,#64748b)] hover:bg-[var(--c-surface-2,#f1f5f9)] hover:text-[var(--c-text,#0f172a)]";
  return (
    <li>
      <a
        href={`#${section.id}`}
        onClick={(e) => onClick(e, section)}
        aria-current={isActive ? "location" : undefined}
        aria-disabled={!enabled || undefined}
        data-testid={`editor-section-link-${section.id}`}
        className={`flex items-center gap-2 ${baseClasses} ${activeClasses} ${
          enabled ? "" : "pointer-events-none opacity-50"
        }`}
      >
        <span aria-hidden="true" className={statusColor}>
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
