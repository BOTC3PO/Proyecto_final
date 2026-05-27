/**
 * Toast no-bloqueante con botones de acción opcionales (Sprint 10B · B6).
 *
 * Reemplaza el uso de `window.confirm` en flujos post-save donde queremos
 * ofrecer una acción (ej. "Volver al módulo") sin secuestrar el thread con
 * un modal nativo del browser.
 */
import { useEffect } from "react";

export interface ToastAction {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

export interface ToastProps {
  message: string;
  actions?: ToastAction[];
  onClose: () => void;
  /** Auto-close en ms. Pasar 0 o undefined para mantenerlo hasta cierre manual. */
  durationMs?: number;
}

export default function Toast({
  message,
  actions,
  onClose,
  durationMs,
}: ToastProps) {
  useEffect(() => {
    if (!durationMs || durationMs <= 0) return;
    const id = window.setTimeout(onClose, durationMs);
    return () => window.clearTimeout(id);
  }, [durationMs, onClose]);

  return (
    <div
      role="status"
      data-testid="toast"
      className="fixed bottom-4 right-4 z-50 max-w-md rounded-lg border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-4 py-3 shadow-lg"
    >
      <div className="flex items-start gap-3">
        <p className="flex-1 text-sm text-[var(--c-text,#1e293b)]">{message}</p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="text-xs text-[var(--c-muted,#64748b)] hover:text-[var(--c-text,#1e293b)]"
        >
          ✕
        </button>
      </div>
      {actions && actions.length > 0 && (
        <div className="mt-2 flex gap-2">
          {actions.map((action, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                action.onClick();
                onClose();
              }}
              className={
                action.primary
                  ? "rounded-md bg-[var(--c-primary,#3b82f6)] px-3 py-1 text-xs font-semibold text-white"
                  : "rounded-md border border-[var(--c-border,#e2e8f0)] px-3 py-1 text-xs"
              }
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
