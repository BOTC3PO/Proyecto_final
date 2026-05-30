/**
 * Estado vacío (prototipo `.empty-state`): ícono opcional + título + texto +
 * acción opcional. Para listas/canvas sin contenido todavía.
 */
import type { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export default function EmptyState({
  title,
  description,
  icon,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={
        "flex flex-col items-center justify-center gap-2 rounded-[var(--r-lg)] " +
        "border border-dashed border-[var(--c-border)] bg-[var(--c-surface-2)] " +
        "px-6 py-10 text-center " +
        className
      }
    >
      {icon && <div className="text-2xl text-[var(--c-text-3)]" aria-hidden>{icon}</div>}
      <p className="text-sm font-semibold text-[var(--c-text)]">{title}</p>
      {description && (
        <p className="max-w-sm text-xs text-[var(--c-text-3)]">{description}</p>
      )}
      {action && <div className="mt-1">{action}</div>}
    </div>
  );
}
