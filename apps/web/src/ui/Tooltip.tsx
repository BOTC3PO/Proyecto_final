/**
 * ui/Tooltip.tsx — primitivo del rediseño (División 1).
 *
 * Tooltip accesible: aparece al hover Y al foco del teclado, se oculta al
 * blur / Escape. El disparador se vincula al contenido vía
 * `aria-describedby` (AT lo anuncia). `role="tooltip"` en el contenido.
 *
 * Posicionamiento simple (absolute, arriba por defecto) — no es una molécula
 * de popper con colisión; eso viene después. Atomo suficiente para iconos y
 * controles solo-ícono del editor.
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import {
  cloneElement,
  forwardRef,
  isValidElement,
  useId,
  useState,
  type CSSProperties,
  type FocusEvent as ReactFocusEvent,
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";

export type TooltipPlacement = "top" | "bottom";

export type TooltipProps = {
  /** Contenido del tooltip. */
  content: ReactNode;
  /** Disparador (un único elemento). */
  children: ReactElement;
  placement?: TooltipPlacement;
};

function Tooltip(
  { content, children, placement = "top" }: TooltipProps,
  ref: Ref<HTMLSpanElement>,
) {
  const [open, setOpen] = useState(false);
  const tipId = `tooltip-${useId()}`;

  const trigger = isValidElement(children)
    ? cloneElement(children, {
        "aria-describedby": open ? tipId : undefined,
        onMouseEnter: (e: ReactMouseEvent) => {
          (children.props as { onMouseEnter?: (e: ReactMouseEvent) => void }).onMouseEnter?.(e);
          setOpen(true);
        },
        onMouseLeave: (e: ReactMouseEvent) => {
          (children.props as { onMouseLeave?: (e: ReactMouseEvent) => void }).onMouseLeave?.(e);
          setOpen(false);
        },
        onFocus: (e: ReactFocusEvent) => {
          (children.props as { onFocus?: (e: ReactFocusEvent) => void }).onFocus?.(e);
          setOpen(true);
        },
        onBlur: (e: ReactFocusEvent) => {
          (children.props as { onBlur?: (e: ReactFocusEvent) => void }).onBlur?.(e);
          setOpen(false);
        },
        onKeyDown: (e: KeyboardEvent) => {
          (children.props as { onKeyDown?: (e: KeyboardEvent) => void }).onKeyDown?.(e);
          if (e.key === "Escape") setOpen(false);
        },
      } as Record<string, unknown>)
    : children;

  const wrapper: CSSProperties = {
    position: "relative",
    display: "inline-flex",
  };

  const tipBase: CSSProperties = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--lh-tight)",
    color: "var(--c-surface)",
    background: "var(--c-text)",
    borderRadius: "var(--r-sm)",
    paddingBlock: "var(--space-1)",
    paddingInline: "var(--space-2)",
    boxShadow: "var(--shadow-md)",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    opacity: open ? 1 : 0,
    visibility: open ? "visible" : "hidden",
    transition: "opacity 120ms ease",
  };

  const tipPos: CSSProperties =
    placement === "top"
      ? { bottom: "100%", marginBottom: "var(--space-2)" }
      : { top: "100%", marginTop: "var(--space-2)" };

  return (
    <span ref={ref} style={wrapper}>
      {trigger}
      <span id={tipId} role="tooltip" style={{ ...tipBase, ...tipPos }}>
        {content}
      </span>
    </span>
  );
}

export default forwardRef(Tooltip);
