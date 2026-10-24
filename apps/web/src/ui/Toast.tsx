/**
 * ui/Toast.tsx — notificación no-bloqueante sobre tokens.
 *
 * Variantes semánticas (info/success/warning/danger) controlan el acento
 * visual y el nivel de `aria-live` (polite para info/success, assertive
 * para warning/danger).
 *
 * Posición fija bottom-right, z por encima de modales.
 * El consumidor monta/desmonta condicionalmente; no hay cola interna.
 */
import { forwardRef, useEffect, type CSSProperties } from "react";

export type ToastVariant = "info" | "success" | "warning" | "danger";

export interface ToastAction {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

export type ToastProps = {
  message: string;
  variant?: ToastVariant;
  actions?: ToastAction[];
  onClose: () => void;
  /** Auto-close en ms. Pasar 0 o undefined para mantenerlo hasta cierre manual. */
  durationMs?: number;
  className?: string;
  style?: CSSProperties;
};

const VARIANT_BORDER: Record<ToastVariant, string> = {
  info: "var(--c-info)",
  success: "var(--c-success)",
  warning: "var(--c-warning)",
  danger: "var(--c-danger)",
};

const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
  { message, variant = "info", actions, onClose, durationMs, className, style },
  ref,
) {
  useEffect(() => {
    if (!durationMs || durationMs <= 0) return;
    const id = window.setTimeout(onClose, durationMs);
    return () => window.clearTimeout(id);
  }, [durationMs, onClose]);

  const isAssertive = variant === "danger" || variant === "warning";

  const container: CSSProperties = {
    position: "fixed",
    bottom: "var(--space-4)",
    right: "var(--space-4)",
    zIndex: 1100,
    maxWidth: "28rem",
    borderRadius: "var(--r-md)",
    border: "1px solid var(--c-border)",
    borderLeftWidth: "3px",
    borderLeftColor: VARIANT_BORDER[variant],
    background: "var(--c-surface)",
    padding: "var(--space-3) var(--space-4)",
    boxShadow: "var(--shadow-lg)",
    fontFamily: "var(--font-sans)",
  };

  const closeBtnStyle: CSSProperties = {
    fontSize: "var(--text-xs)",
    color: "var(--c-muted)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "var(--space-1)",
    lineHeight: 1,
  };

  const primaryBtnStyle: CSSProperties = {
    borderRadius: "var(--r-sm)",
    background: "var(--c-primary)",
    color: "var(--c-text-on-dark)",
    padding: "var(--space-1) var(--space-3)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--fw-semibold)",
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
  };

  const secondaryBtnStyle: CSSProperties = {
    borderRadius: "var(--r-sm)",
    border: "1px solid var(--c-border)",
    background: "var(--c-surface)",
    color: "var(--c-text)",
    padding: "var(--space-1) var(--space-3)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--fw-medium)",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
  };

  return (
    <div
      ref={ref}
      role={isAssertive ? "alert" : "status"}
      aria-live={isAssertive ? "assertive" : "polite"}
      data-testid="toast"
      className={className}
      style={{ ...container, ...style }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)" }}>
        <p style={{
          flex: 1,
          margin: 0,
          fontSize: "var(--text-sm)",
          color: "var(--c-text)",
          lineHeight: "var(--lh-normal)",
        }}>
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          style={closeBtnStyle}
        >
          ✕
        </button>
      </div>
      {actions && actions.length > 0 && (
        <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-2)" }}>
          {actions.map((action, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                action.onClick();
                onClose();
              }}
              style={action.primary ? primaryBtnStyle : secondaryBtnStyle}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

export default Toast;
