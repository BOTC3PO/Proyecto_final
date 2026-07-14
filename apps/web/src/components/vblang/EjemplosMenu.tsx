/**
 * Menú "Ejemplos": carga una plantilla de SPRINT_9B_EXAMPLES en el editor.
 * Si hay cambios sin guardar, pide confirmación antes de reemplazar.
 */
import { useEffect, useRef, useState } from "react";
import { SPRINT_9B_EXAMPLES } from "../../vblang/examples";

import { useI18n } from "../../i18n/I18nContext";
interface EjemplosMenuProps {
  onLoad: (codigoDsl: string) => void;
  hasUnsavedChanges: boolean;
  /** Render sin disparador propio (el contenido se monta tal cual, ej. dentro
   *  de un modal). Default false = popover con botón "Ejemplos ▾". */
  inline?: boolean;
}

export default function EjemplosMenu({
  onLoad,
  hasUnsavedChanges,
  inline = false,
}: EjemplosMenuProps) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [pendiente, setPendiente] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const elegir = (codigoDsl: string) => {
    if (hasUnsavedChanges) {
      setPendiente(codigoDsl);
      return;
    }
    onLoad(codigoDsl);
    setOpen(false);
  };

  const confirmar = () => {
    if (pendiente !== null) onLoad(pendiente);
    setPendiente(null);
    setOpen(false);
  };

  const panelInner =
    pendiente !== null ? (
      <div className="p-2 text-xs space-y-2">
        <p className="text-[var(--c-text)]">{t("ejemplosMenu.tenesCambiosSinGuardarReemplazar")}</p>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setPendiente(null)}
            className="rounded border border-[var(--c-border,#e2e8f0)] px-2 py-1"
          >{t("comun.cancelar")}</button>
          <button
            type="button"
            onClick={confirmar}
            className="rounded bg-[var(--c-primary,#3b82f6)] px-2 py-1 font-semibold text-white"
          >{t("ejemplosMenu.reemplazar")}</button>
        </div>
      </div>
    ) : (
      <ul className="max-h-80 overflow-auto">
        {SPRINT_9B_EXAMPLES.map((ej) => (
          <li key={ej.id}>
            <button
              type="button"
              role="menuitem"
              onClick={() => elegir(ej.codigoDsl)}
              className="block w-full rounded px-2 py-1.5 text-left hover:bg-[var(--c-bg,#f1f5f9)]"
            >
              <span className="block text-xs font-semibold text-[var(--c-text)]">
                {ej.titulo}
              </span>
              <span className="block text-[10px] text-[var(--c-muted,#64748b)]">
                {ej.descripcion}
              </span>
            </button>
          </li>
        ))}
      </ul>
    );

  if (inline) {
    return (
      <div ref={rootRef} role="menu" aria-label={t("ejemplosMenu.plantillasDeEjemplo")}>
        {panelInner}
      </div>
    );
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="rounded-md border border-[var(--c-border,#e2e8f0)] px-3 py-1.5 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg,#f1f5f9)]"
      >{t("ejemplosMenu.ejemplos")}</button>

      {open && (
        <div
          role="menu"
          aria-label={t("ejemplosMenu.plantillasDeEjemplo")}
          className="absolute right-0 z-50 mt-1 w-72 rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-1 shadow-lg"
        >
          {panelInner}
        </div>
      )}
    </div>
  );
}
