/**
 * ui/Modal.tsx — primitivo del rediseño (División 1).
 *
 * Diálogo modal accesible sobre `createPortal`:
 *   • `role="dialog"` + `aria-modal="true"` + `aria-labelledby` (título) o
 *     `aria-label`.
 *   • Focus trap: al abrir, enfoca el primer focuseable del panel (o el panel);
 *     Tab/Shift-Tab no sale del diálogo.
 *   • ESC cierra.
 *   • Retorno de foco al disparador al cerrar.
 *   • Bloqueo de scroll del body mientras está abierto.
 *   • Click en el backdrop cierra (desactivable con `closeOnBackdrop={false}`).
 *
 * `Dialog` es un alias del mismo componente. No construye header/footer como
 * molécula: el contenido lo da el consumidor (átomo).
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

export type ModalSize = "sm" | "md" | "lg";

export type ModalProps = Omit<HTMLAttributes<HTMLDivElement>, "role"> & {
  /** Controla visibilidad. */
  open: boolean;
  /** Se llama al pedir cierre (ESC / backdrop). */
  onClose: () => void;
  /** Título accesible (renderiza encabezado y alimenta aria-labelledby). */
  title?: ReactNode;
  /** Etiqueta accesible alternativa cuando no hay `title`. */
  ariaLabel?: string;
  size?: ModalSize;
  /** Cerrar al click en el backdrop (default true). */
  closeOnBackdrop?: boolean;
  children?: ReactNode;
};

const WIDTH: Record<ModalSize, string> = {
  sm: "min(20rem, 90vw)",
  md: "min(32rem, 90vw)",
  lg: "min(48rem, 90vw)",
};

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

function focusablesIn(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement,
  );
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  {
    open,
    onClose,
    title,
    ariaLabel,
    size = "md",
    closeOnBackdrop = true,
    className,
    style,
    children,
    ...rest
  },
  ref,
) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const titleId = `modal-title-${useId()}`;
  useEffect(() => {
    if (!open) return;

    const trigger = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    if (panel) {
      const f = focusablesIn(panel);
      (f[0] ?? panel).focus();
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === "Tab" && panel) {
        const f = focusablesIn(panel);
        if (f.length === 0) {
          e.preventDefault();
          return;
        }
        const first = f[0];
        const last = f[f.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      trigger?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const overlay: CSSProperties = {
    position: "fixed",
    inset: "var(--space-0)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--space-4)",
    background: "color-mix(in srgb, var(--c-text) 45%, transparent)",
  };

  const panel: CSSProperties = {
    width: WIDTH[size],
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "auto",
    boxSizing: "border-box",
    background: "var(--c-surface)",
    color: "var(--c-text)",
    borderColor: "var(--c-border)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "var(--r-lg)",
    boxShadow: "var(--shadow-lg)",
    padding: "var(--space-5)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-base)",
    lineHeight: "var(--lh-normal)",
  };

  const titleStyle: CSSProperties = {
    margin: "var(--space-0) 0 var(--space-3)",
    fontSize: "var(--text-lg)",
    fontWeight: "var(--fw-semibold)",
    lineHeight: "var(--lh-tight)",
    color: "var(--c-text)",
  };

  return createPortal(
    <div
      style={overlay}
      onMouseDown={(e) => {
        if (closeOnBackdrop && e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={(node) => {
          panelRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={!title ? ariaLabel : undefined}
        tabIndex={-1}
        className={className}
        style={{ ...panel, ...style }}
        {...rest}
      >
        {title ? (
          <h2 id={titleId} style={titleStyle}>
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </div>,
    document.body,
  );
});

export default Modal;

/** Alias de Modal (mismo componente, nombre alternativo). */
export const Dialog = Modal;
