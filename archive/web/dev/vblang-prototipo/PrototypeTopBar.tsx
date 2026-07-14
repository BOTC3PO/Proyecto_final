/**
 * TopBar del prototipo.
 *
 * Variante liviana del TopBar del sistema de diseño: eyebrow "VBLang 2.0 ·
 * Prototipo" + título "Editor de consignas" + status "mock · no se guarda"
 * + acciones (volver, regenerar, reset).
 *
 * El back navega a `/dev/ui` (otra página de dev) por defecto, con la
 * opción de pasar otro destino.
 */
import { TopBar } from "../../components/ui";

export interface PrototypeTopBarProps {
  onBack: () => void;
  onReset: () => void;
}

export function PrototypeTopBar({ onBack, onReset }: PrototypeTopBarProps) {
  return (
    <TopBar
      eyebrow="VBLang 2.0 · Editor prototipo"
      title="Consigna numérica"
      titleAriaLabel="Nombre del documento (prototipo)"
      onBack={onBack}
      backLabel="Volver a /dev"
      saved={{ status: "saved", text: "mock · sin persistencia" }}
      actions={
        <>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-[var(--r-md)] border border-[var(--c-border-strong)] px-2.5 py-1 text-xs text-[var(--c-text)] hover:bg-[var(--c-hover)]"
          >
            <span aria-hidden="true">↺</span> Reset
          </button>
        </>
      }
      className="border-b border-[var(--c-border)]"
    />
  );
}
