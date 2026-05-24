/**
 * Modal para seleccionar una plantilla existente al armar un quiz de módulo
 * (Sprint 10A — Bloque B). Permite buscar por nombre, alternar entre "Mis
 * plantillas" / "Biblioteca", o redirigir a la página de creación.
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listPlantillas } from "../../domain/vblang/plantillaApi";
import type {
  PlantillaListItem,
  PlantillaListParams,
} from "../../domain/vblang/plantilla.types";

type Tab = "mias" | "biblioteca";

interface Props {
  onClose: () => void;
  onSelect: (plantilla: PlantillaListItem) => void;
  /** Si se pasa, filtra plantillas por materia. */
  materiaHint?: string;
  /** URL a pasar como returnTo al crear una nueva plantilla. */
  createReturnTo?: string;
}

export default function PlantillaSelectorModal({
  onClose,
  onSelect,
  materiaHint,
  createReturnTo,
}: Props) {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("mias");
  const [q, setQ] = useState("");
  const [items, setItems] = useState<PlantillaListItem[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setErrorMessage(null);
    const params: PlantillaListParams = {
      q: q || undefined,
      materia: materiaHint || undefined,
      owner: tab === "biblioteca" ? "otros" : "mias",
    };
    listPlantillas(params)
      .then((res) => {
        if (cancelled) return;
        setItems(res.items);
        setStatus("ready");
      })
      .catch((err) => {
        if (cancelled) return;
        setStatus("error");
        setErrorMessage(err instanceof Error ? err.message : "Error de carga");
      });
    return () => {
      cancelled = true;
    };
  }, [q, materiaHint, tab]);

  const handleCreateNew = () => {
    const url = createReturnTo
      ? `/plantillas/nueva?returnTo=${encodeURIComponent(createReturnTo)}`
      : "/plantillas/nueva";
    navigate(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      data-testid="plantilla-selector-modal"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-xl bg-white shadow-2xl flex flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 p-4">
          <h2 className="text-lg font-semibold">Seleccionar plantilla VBLang</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </header>

        <div className="flex gap-2 border-b border-slate-200 px-4">
          <button
            type="button"
            onClick={() => setTab("mias")}
            className={`px-3 py-2 text-sm font-medium ${
              tab === "mias"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-slate-600"
            }`}
          >
            Mis plantillas
          </button>
          <button
            type="button"
            onClick={() => setTab("biblioteca")}
            className={`px-3 py-2 text-sm font-medium ${
              tab === "biblioteca"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-slate-600"
            }`}
          >
            Biblioteca
          </button>
        </div>

        <div className="border-b border-slate-200 p-3">
          <input
            type="search"
            placeholder="Buscar por nombre…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          {status === "loading" && (
            <p className="text-sm text-slate-500 animate-pulse">Cargando…</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}
          {status === "ready" && items.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-8">
              {tab === "biblioteca"
                ? "No hay plantillas en la biblioteca."
                : "Todavía no creaste plantillas."}
            </p>
          )}
          {status === "ready" && items.length > 0 && (
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(item)}
                    data-testid={`plantilla-option-${item.id}`}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-left hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">
                          {item.nombre}
                        </p>
                        {item.materia && (
                          <p className="text-xs text-slate-500">
                            {item.materia}
                          </p>
                        )}
                        {item.descripcion && (
                          <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                            {item.descripcion}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">
                        v{item.version}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-slate-200 p-3 flex justify-between items-center">
          <button
            type="button"
            onClick={handleCreateNew}
            className="text-sm font-medium text-blue-600 hover:underline"
            data-testid="plantilla-selector-create-new"
          >
            + Crear nueva plantilla
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50"
          >
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}
