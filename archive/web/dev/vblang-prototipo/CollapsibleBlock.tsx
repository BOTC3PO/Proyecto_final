/**
 * Bloque plegable con resumen — el patrón de "disclosure" del property grid.
 *
 * El bloque colapsado muestra un resumen ("Pistas (2)"). Al expandir, muestra
 * `children`. El control es accesible: `<button>` con `aria-expanded` y
 * `aria-controls`. Click en el header alterna.
 *
 * Variante: si se pasa `onRemove`, aparece un botón "Quitar" en el header
 * (lo usa el menú de add-ons).
 */
import type { ReactNode } from "react";

export interface CollapsibleBlockProps {
  summary: ReactNode;
  expanded: boolean;
  onToggle: () => void;
  onRemove?: () => void;
  removeLabel?: string;
  children: ReactNode;
  /** Si true, clickear el bloque (no solo el header) también lo abre. */
  expandOnBodyClick?: boolean;
  /** ID para aria-controls; se genera automáticamente si se omite. */
  controlsId?: string;
  /** Acciones adicionales en el header (a la izquierda del "Quitar"). */
  headerExtra?: ReactNode;
  /** Estilo del bloque: "plain" = sin borde propio; "card" = card. */
  variant?: "plain" | "card";
}

export function CollapsibleBlock({
  summary,
  expanded,
  onToggle,
  onRemove,
  removeLabel = "Quitar bloque",
  children,
  expandOnBodyClick = false,
  controlsId,
  headerExtra,
  variant = "plain",
}: CollapsibleBlockProps) {
  const baseCls =
    variant === "card"
      ? "rounded-[var(--r-md)] border border-[var(--c-border)] bg-[var(--c-surface)]"
      : "rounded-[var(--r-md)] border border-dashed border-[var(--c-border)] bg-[var(--c-surface-3)]/60";

  return (
    <div className={baseCls}>
      <div className="flex items-center gap-2 px-3 py-2">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={controlsId}
          className="flex flex-1 items-center gap-2 text-left text-sm font-medium text-[var(--c-text)] hover:text-[var(--c-primary)]"
        >
          <span
            aria-hidden="true"
            className="grid h-4 w-4 place-items-center font-mono text-[10px] text-[var(--c-text-3)]"
          >
            {expanded ? "▾" : "▸"}
          </span>
          <span>{summary}</span>
        </button>
        {headerExtra}
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label={removeLabel}
            className="rounded-[var(--r-sm)] px-1.5 py-0.5 text-[10px] text-[var(--c-text-3)] hover:bg-[var(--c-hover)] hover:text-[var(--c-danger)]"
          >
            ×
          </button>
        )}
      </div>
      {expanded && (
        <div
          id={controlsId}
          onClick={expandOnBodyClick ? onToggle : undefined}
          className="border-t border-[var(--c-border)] px-3 py-2 text-xs text-[var(--c-text)]"
        >
          {children}
        </div>
      )}
    </div>
  );
}
