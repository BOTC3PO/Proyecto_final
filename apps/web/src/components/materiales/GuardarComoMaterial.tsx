import { useId, useState } from "react";
import { apiPost } from "../../lib/api";

export type MaterialTipo = "mapa" | "timeline" | "interactivo" | "presentacion";

export type GuardarComoMaterialResult = {
  materialId: string;
  versionId: string;
  versionNumber: number;
};

type Props = {
  tipo: MaterialTipo;
  /** Perezoso: se llama recién al click de "Guardar", para no serializar en cada render. */
  getContenido: () => unknown;
  defaultTitulo?: string;
  /** Si viene, guarda una VERSIÓN NUEVA sobre este material en vez de crear uno nuevo. */
  materialId?: string | null;
  onSaved?: (result: GuardarComoMaterialResult) => void;
  className?: string;
};

type Status = "idle" | "asking-title" | "saving" | "saved" | "error";

/**
 * PLAN-G §1 (item 25) — botón "Guardar como material" homogéneo para los
 * 4 editores standalone (mapa, timeline, interactivo, presentacion).
 * No reemplaza el guardado normal de cada editor (onSave/onDone dentro
 * de un módulo, o el guardado real a BloqueJson en bloques standalone):
 * es un destino de guardado adicional y opcional.
 */
export function GuardarComoMaterial({
  tipo,
  getContenido,
  defaultTitulo,
  materialId,
  onSaved,
  className,
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [titulo, setTitulo] = useState(defaultTitulo ?? "");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const tituloId = useId();

  const reset = () => {
    setStatus("idle");
    setErrorMsg(null);
  };

  const guardar = async (tituloParaCrear?: string) => {
    setStatus("saving");
    setErrorMsg(null);
    try {
      const contenido = getContenido();
      let result: GuardarComoMaterialResult;
      if (materialId) {
        result = await apiPost<GuardarComoMaterialResult>(
          `/api/materiales/guardados/${materialId}/versiones`,
          { contenido },
        );
      } else {
        result = await apiPost<GuardarComoMaterialResult>("/api/materiales/guardados", {
          tipo,
          titulo: tituloParaCrear,
          contenido,
        });
      }
      setStatus("saved");
      onSaved?.(result);
    } catch {
      setStatus("error");
      setErrorMsg("No se pudo guardar el material.");
    }
  };

  const handleClick = () => {
    if (materialId) {
      void guardar();
      return;
    }
    setTitulo(defaultTitulo ?? "");
    setStatus("asking-title");
  };

  const handleConfirmTitulo = () => {
    const t = titulo.trim();
    if (!t) return;
    void guardar(t);
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <button
        type="button"
        onClick={handleClick}
        disabled={status === "saving"}
        className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] disabled:opacity-50 transition-colors"
      >
        {status === "saving" ? "Guardando…" : "Guardar como material"}
      </button>
      {status === "saved" && (
        <span className="text-xs text-[var(--c-success)]">✓ Guardado</span>
      )}
      {status === "error" && (
        <span className="text-xs text-[var(--c-danger)]">{errorMsg}</span>
      )}

      {status === "asking-title" && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${tituloId}-label`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={reset}
        >
          <div
            className="w-full max-w-md rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id={`${tituloId}-label`} className="text-base font-semibold text-[var(--c-text)]">
              Guardar como material
            </h3>
            <p className="mt-1 text-xs text-[var(--c-muted)]">
              Elegí un título para poder reabrirlo o reusarlo más adelante.
            </p>
            <label htmlFor={tituloId} className="mt-4 block text-xs font-medium text-[var(--c-muted)]">
              Título
            </label>
            <input
              id={tituloId}
              autoFocus
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleConfirmTitulo();
              }}
              className="mt-1 w-full rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]"
              placeholder="Nombre del material"
            />
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={reset}
                className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmTitulo}
                disabled={!titulo.trim()}
                className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
