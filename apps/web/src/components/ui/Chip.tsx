/**
 * Chip / etiqueta del sistema de diseño (prototipo `.chip-line`).
 * Si recibe `onRemove`, muestra una X con `aria-label` descriptivo.
 */
import type { ReactNode } from "react";

export interface ChipProps {
  children: ReactNode;
  onRemove?: () => void;
  /** Etiqueta del chip para el aria-label del botón de quitar. */
  removeLabel?: string;
  disabled?: boolean;
  className?: string;
}

export default function Chip({
  children,
  onRemove,
  removeLabel,
  disabled,
  className = "",
}: ChipProps) {
  return (
    <span
      className={
        "inline-flex items-center gap-1 rounded-full bg-[var(--c-surface-3)] " +
        "px-2.5 py-0.5 text-xs text-[var(--c-text)] " +
        className
      }
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          disabled={disabled}
          aria-label={removeLabel ?? `Quitar ${typeof children === "string" ? children : "elemento"}`}
          className={
            "rounded-full text-[var(--c-text-3)] transition-colors motion-reduce:transition-none " +
            "hover:text-[var(--c-danger)] " +
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] " +
            "disabled:opacity-50 disabled:cursor-not-allowed"
          }
        >
          ×
        </button>
      )}
    </span>
  );
}
