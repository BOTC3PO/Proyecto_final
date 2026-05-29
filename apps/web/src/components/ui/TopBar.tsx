/**
 * Barra superior común de los editores (prototipo `.topbar`).
 *
 * Estructura: Volver · eyebrow (tipo de editor) · título del documento
 * (editable inline si se pasa `onTitleChange`) · indicador de guardado con
 * `aria-live` · acciones a la derecha.
 */
import type { ReactNode } from "react";
import Button from "./Button";

export type SaveStatus = "saved" | "saving" | "dirty" | "error";

export interface TopBarProps {
  /** Etiqueta pequeña encima/junto al título (ej. "Editor VBLang"). */
  eyebrow?: ReactNode;
  title: string;
  /** Si se pasa, el título se vuelve editable inline. */
  onTitleChange?: (next: string) => void;
  titleAriaLabel?: string;
  onBack?: () => void;
  backLabel?: string;
  saved?: { status: SaveStatus; text: string };
  /** Acciones a la derecha (botones). */
  actions?: ReactNode;
  className?: string;
}

const SAVE_COLOR: Record<SaveStatus, string> = {
  saved: "text-[var(--c-success)]",
  saving: "text-[var(--c-text-3)]",
  dirty: "text-[var(--c-warning)]",
  error: "text-[var(--c-danger)]",
};

export default function TopBar({
  eyebrow,
  title,
  onTitleChange,
  titleAriaLabel = "Nombre del documento",
  onBack,
  backLabel = "Volver",
  saved,
  actions,
  className = "",
}: TopBarProps) {
  return (
    <header
      className={
        "flex items-center gap-3 border-b border-[var(--c-border)] " +
        "bg-[var(--c-surface)] px-4 py-2.5 " +
        className
      }
    >
      {onBack && (
        <Button variant="ghost" size="sm" onClick={onBack}>
          ← {backLabel}
        </Button>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        {eyebrow && (
          <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--c-text-3)]">
            {eyebrow}
          </span>
        )}
        {onTitleChange ? (
          <input
            type="text"
            aria-label={titleAriaLabel}
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className={
              "w-full truncate rounded-[var(--r-sm)] border border-transparent bg-transparent " +
              "px-1 py-0.5 text-sm font-semibold text-[var(--c-text)] " +
              "hover:border-[var(--c-border)] " +
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
            }
          />
        ) : (
          <h1 className="truncate px-1 text-sm font-semibold text-[var(--c-text)]">
            {title}
          </h1>
        )}
      </div>

      {saved && (
        <span
          role="status"
          aria-live="polite"
          className={"shrink-0 text-xs " + SAVE_COLOR[saved.status]}
        >
          {saved.text}
        </span>
      )}

      {actions && <div className="flex shrink-0 items-center gap-1.5">{actions}</div>}
    </header>
  );
}
