/**
 * Sprint 10A — Bloque C.
 * Panel ADMIN para aprobar/rechazar plantillas VBLang públicas pendientes.
 */

import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet, apiPost } from "../../lib/api";
import type {
  PlantillaListItem,
  PlantillaListResponse,
} from "../../domain/vblang/plantilla.types";

type Status = "loading" | "ready" | "error";

export default function PlantillasModeracion() {
  const [items, setItems] = useState<PlantillaListItem[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [acting, setActing] = useState<string | null>(null);

  const load = useCallback(() => {
    setStatus("loading");
    setErrorMessage(null);
    apiGet<PlantillaListResponse>("/api/admin/plantillas/pendientes")
      .then((res) => {
        setItems(res.items);
        setStatus("ready");
      })
      .catch((err) => {
        setStatus("error");
        setErrorMessage(err instanceof Error ? err.message : "Error de carga");
      });
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleAction = async (id: string, accion: "aprobar" | "rechazar") => {
    setActing(id);
    try {
      await apiPost<unknown>(`/api/admin/plantillas/${id}/${accion}`, {});
      load();
    } catch (err) {
      window.alert(
        err instanceof Error ? err.message : `No se pudo ${accion} la plantilla.`,
      );
    } finally {
      setActing(null);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--c-bg,#f8fafc)] p-6">
      <div className="mx-auto max-w-5xl space-y-4">
        <header>
          <h1 className="text-2xl font-bold">Moderación de plantillas VBLang</h1>
          <p className="mt-1 text-sm text-[var(--c-muted,#64748b)]">
            Plantillas públicas pendientes de aprobación.
          </p>
        </header>

        {status === "loading" && (
          <p className="text-sm text-[var(--c-muted,#64748b)] animate-pulse">
            Cargando…
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
        {status === "ready" && items.length === 0 && (
          <div className="rounded-xl border-2 border-dashed border-[var(--c-border,#e2e8f0)] py-10 text-center">
            <p className="text-sm text-[var(--c-muted,#64748b)]">
              No hay plantillas pendientes de moderación.
            </p>
          </div>
        )}
        {status === "ready" && items.length > 0 && (
          <ul className="space-y-3">
            {items.map((p) => (
              <li
                key={p.id}
                className="rounded-xl border border-[var(--c-border,#e2e8f0)] bg-white p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm">{p.nombre}</h3>
                    <p className="text-xs text-[var(--c-muted,#64748b)] mt-0.5">
                      por {p.ownerName ?? p.ownerUserId} ·{" "}
                      {new Date(p.updatedAt).toLocaleDateString()}
                      {p.materia ? ` · ${p.materia}` : ""}
                    </p>
                    {p.descripcion && (
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                        {p.descripcion}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Link
                      to={`/plantillas/${p.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-50"
                    >
                      Ver
                    </Link>
                    <button
                      type="button"
                      disabled={acting === p.id}
                      onClick={() => void handleAction(p.id, "aprobar")}
                      className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
                    >
                      Aprobar
                    </button>
                    <button
                      type="button"
                      disabled={acting === p.id}
                      onClick={() => void handleAction(p.id, "rechazar")}
                      className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 disabled:opacity-50"
                    >
                      Rechazar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
