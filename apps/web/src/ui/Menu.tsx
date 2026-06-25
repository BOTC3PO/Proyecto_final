/**
 * ui/Menu.tsx — primitivo del rediseño (División 6 — nav).
 *
 * Popover de menú accesible para el menú de usuario (nav principal +
 * sidebar de staff comparten el patrón). Centraliza la a11y que antes se
 * repetía a mano:
 *   • `role="menu"` en el panel + `aria-haspopup`/`aria-expanded`/
 *     `aria-controls` en el disparador.
 *   • Cierre por click-afuera y por **Escape** (con retorno de foco al
 *     disparador).
 *   • Navegación por teclado entre ítems con ▲/▼ (Home/End) sobre los
 *     focuseables del panel.
 *
 * Sólo gestiona el *chrome* y la interacción: el disparador y los ítems los
 * provee el consumidor (los ítems siguen saliendo de `navConfig`). El foco
 * visible lo aporta la regla global `:focus-visible`. Solo tokens.
 *
 * Patrón de interacción replicado de Modal/Tooltip (átomos con estado).
 */
import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

export type MenuAlign = "start" | "end";

export type MenuPlacement = "down" | "up";

export type MenuTriggerProps = {
  onClick: () => void;
  "aria-haspopup": "menu";
  "aria-expanded": boolean;
  "aria-controls": string;
};

export type MenuProps = {
  /** Render del disparador. Spread `props` sobre un `<button>`. */
  trigger: (props: MenuTriggerProps) => ReactNode;
  /** Contenido del panel. Recibe `close` para cerrar tras seleccionar. */
  children: (api: { close: () => void }) => ReactNode;
  /** Alineación horizontal del panel respecto del disparador. */
  align?: MenuAlign;
  /** Dirección vertical del panel. Default `"down"` (preserva comportamiento
   *  histórico del primitivo). Usar `"up"` cuando el disparador está
   *  anclado al fondo de un contenedor con overflow propio (ej. sidebar). */
  placement?: MenuPlacement;
  /** Ancho mínimo del panel (token recomendado). */
  panelWidth?: string;
  /** Wrapper y disparador ocupan todo el ancho disponible (ej. sidebar). */
  fullWidth?: boolean;
};

const FOCUSABLE = 'a[href],button:not([disabled]),[role="menuitem"],[tabindex]:not([tabindex="-1"])';

export default function Menu({
  trigger,
  children,
  align = "end",
  placement = "down",
  panelWidth,
  fullWidth = false,
}: MenuProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = `menu-${useId()}`;

  // El disparador es el primer <button> del wrapper (se renderiza antes que
  // el panel); lo usamos para devolverle el foco al cerrar con Escape.
  const focusTrigger = () =>
    wrapperRef.current?.querySelector<HTMLButtonElement>(":scope > button")?.focus();

  const close = () => setOpen(false);

  // Cierre por click afuera del wrapper (disparador + panel).
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open]);

  const focusables = () =>
    Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);

  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      setOpen(false);
      focusTrigger();
      return;
    }
    const items = focusables();
    if (items.length === 0) return;
    const idx = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[idx < 0 ? 0 : (idx + 1) % items.length].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[idx <= 0 ? items.length - 1 : idx - 1].focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0].focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1].focus();
    }
  };

  const wrapper: CSSProperties = {
    position: "relative",
    display: fullWidth ? "block" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
  };

  const panel: CSSProperties = {
    position: "absolute",
    ...(placement === "up"
      ? { bottom: "100%", marginBottom: "var(--space-2)" }
      : { top: "100%", marginTop: "var(--space-2)" }),
    zIndex: 50,
    right: align === "end" ? "var(--space-0)" : "auto",
    left: align === "start" ? "var(--space-0)" : "auto",
    minWidth: panelWidth ?? "var(--space-8)",
    background: "var(--c-surface)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--c-border)",
    borderRadius: "var(--r-lg)",
    boxShadow: "var(--shadow-lg)",
    paddingBlock: "var(--space-1)",
    overflow: "hidden",
  };

  return (
    <div ref={wrapperRef} style={wrapper} onKeyDown={onKeyDown}>
      {trigger({
        onClick: () => setOpen((v) => !v),
        "aria-haspopup": "menu",
        "aria-expanded": open,
        "aria-controls": panelId,
      })}
      {open && (
        <div ref={panelRef} id={panelId} role="menu" style={panel}>
          {children({ close })}
        </div>
      )}
    </div>
  );
}
