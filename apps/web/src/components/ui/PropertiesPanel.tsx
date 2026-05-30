/**
 * Panel de propiedades de la columna derecha (prototipo `.panel`).
 * Wrapper con título accesible (`role="region"` + `aria-label`) y secciones.
 */
import type { ReactNode } from "react";

export interface PropertiesPanelProps {
  title: string;
  children: ReactNode;
  /** Acciones del encabezado (ej. cerrar). */
  headerActions?: ReactNode;
  className?: string;
}

export function PropertiesPanel({
  title,
  children,
  headerActions,
  className = "",
}: PropertiesPanelProps) {
  return (
    <aside
      role="region"
      aria-label={title}
      className={
        "flex h-full flex-col border-l border-[var(--c-border)] bg-[var(--c-surface)] " +
        className
      }
    >
      <div className="flex items-center justify-between gap-2 border-b border-[var(--c-border)] px-4 py-3">
        <h2 className="text-sm font-bold text-[var(--c-text)]">{title}</h2>
        {headerActions}
      </div>
      <div className="flex-1 overflow-auto p-4">{children}</div>
    </aside>
  );
}

export interface PanelSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Subsección dentro del panel (ej. "Datos", "Estilo"). */
export function PanelSection({ title, children, className = "" }: PanelSectionProps) {
  return (
    <section className={"mb-4 space-y-2 " + className}>
      {title && (
        <h3 className="text-[10px] font-semibold uppercase tracking-wide text-[var(--c-text-3)]">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}

export default PropertiesPanel;
