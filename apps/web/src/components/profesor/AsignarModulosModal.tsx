/**
 * AsignarModulosModal (Tarea 16b).
 *
 * Modal para que el docente del aula asigne o desasigne módulos. Lista los
 * módulos del docente (GET /api/modulos) y marca como asignados los que
 * ya están vinculados al aula (GET /api/aulas/:id/modulos). Cada fila
 * tiene un checkbox que dispara POST/DELETE idempotente.
 *
 * Endpoint docs:
 *  - GET    /api/aulas/:id/modulos          → { items: [{moduloId, assignedAt, required}] }
 *  - POST   /api/aulas/:id/modulos          body: { moduloId, required? } → 201 | 200 (idempotente)
 *  - DELETE /api/aulas/:id/modulos/:moduloId → 200
 *
 * No tocamos el módulo en sí ni los progresos al desasignar.
 */

import { useEffect, useMemo, useState } from "react";
import { apiDelete, apiGet, apiPost } from "../../lib/api";
import type { Module } from "../../domain/module/module.types";

export type AsignarModulosModalProps = {
  classroomId: string;
  classroomName: string;
  onClose: () => void;
  /**
   * Llamado tras una asignación/desasignación exitosa. El padre puede
   * refrescar su propio listado de módulos del aula si lo necesita.
   */
  onChange?: () => void;
};

type AssignedItem = {
  moduloId: string;
  assignedAt?: string | null;
  required?: boolean;
};

type ModulosResponse = { items: Module[] };
type AssignedResponse = { items: AssignedItem[] };

type RowState = "loading" | "idle" | "saving" | "error";

export default function AsignarModulosModal({
  classroomId,
  classroomName,
  onClose,
  onChange,
}: AsignarModulosModalProps) {
  const [modulos, setModulos] = useState<Module[]>([]);
  const [asignados, setAsignados] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [rowState, setRowState] = useState<Record<string, RowState>>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  const loadAll = async () => {
    setStatus("loading");
    setErrorMessage(null);
    try {
      const [modulosRes, asignadosRes] = await Promise.all([
        apiGet<ModulosResponse>("/api/modulos"),
        apiGet<AssignedResponse>(
          `/api/aulas/${encodeURIComponent(classroomId)}/modulos`,
        ),
      ]);
      setModulos(modulosRes.items ?? []);
      setAsignados(new Set((asignadosRes.items ?? []).map((a) => a.moduloId)));
      setStatus("ready");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "error");
      setStatus("error");
    }
  };

  useEffect(() => {
    loadAll();
  }, [classroomId]);

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return modulos;
    return modulos.filter((m) => m.title.toLowerCase().includes(q));
  }, [modulos, search]);

  const handleToggle = async (moduloId: string) => {
    const isAssigned = asignados.has(moduloId);
    setRowState((s) => ({ ...s, [moduloId]: "saving" }));
    setGlobalError(null);
    try {
      if (isAssigned) {
        await apiDelete<{ ok: true }>(
          `/api/aulas/${encodeURIComponent(classroomId)}/modulos/${encodeURIComponent(moduloId)}`,
        );
        setAsignados((prev) => {
          const next = new Set(prev);
          next.delete(moduloId);
          return next;
        });
      } else {
        await apiPost<{ ok: true }>(
          `/api/aulas/${encodeURIComponent(classroomId)}/modulos`,
          { moduloId, required: false },
        );
        setAsignados((prev) => new Set(prev).add(moduloId));
      }
      setRowState((s) => ({ ...s, [moduloId]: "idle" }));
      onChange?.();
    } catch (err) {
      setRowState((s) => ({ ...s, [moduloId]: "error" }));
      setGlobalError(err instanceof Error ? err.message : "error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Asignar módulos al aula ${classroomName}`}
      data-testid="asignar-modulos-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-xl bg-[var(--c-surface)] shadow-2xl flex flex-col">
        <header className="flex items-center justify-between border-b border-[var(--c-border)] p-4">
          <div>
            <h2 className="text-lg font-semibold text-[var(--c-text)]">
              Asignar módulos al aula
            </h2>
            <p className="text-xs text-[var(--c-muted)] mt-0.5">{classroomName}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="rounded-md p-1 text-[var(--c-muted)] hover:bg-[var(--c-border)] hover:text-[var(--c-text)]"
          >
            ✕
          </button>
        </header>

        <div className="border-b border-[var(--c-border)] p-3">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar módulo por título…"
            aria-label="Buscar módulo"
            className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-sm text-[var(--c-text)] placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-primary)]"
            data-testid="asignar-modulos-search"
          />
        </div>

        {globalError && (
          <div className="border-b border-[var(--c-border)] bg-[var(--c-danger,#dc2626)]/10 px-4 py-2 text-sm text-[var(--c-danger,#dc2626)]">
            {globalError}
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-3">
          {status === "loading" && (
            <div className="space-y-2 p-2" data-testid="asignar-modulos-loading">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 animate-pulse rounded-lg bg-[var(--c-border)]" />
              ))}
            </div>
          )}

          {status === "error" && (
            <div className="rounded-xl border-2 border-dashed border-[var(--c-border)] p-6 text-center">
              <p className="text-sm text-[var(--c-danger,#dc2626)] mb-3">
                Error: {errorMessage}
              </p>
              <button
                type="button"
                onClick={loadAll}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-sm font-medium text-[var(--c-text)] hover:bg-[var(--c-primary-soft,#dbeafe)]"
              >
                Reintentar
              </button>
            </div>
          )}

          {status === "ready" && modulos.length === 0 && (
            <div className="rounded-xl border-2 border-dashed border-[var(--c-border)] p-6 text-center">
              <p className="text-sm text-[var(--c-muted)]">
                No tenés módulos todavía. Creá uno en /modulos/crear para poder asignarlo.
              </p>
            </div>
          )}

          {status === "ready" && modulos.length > 0 && filtered.length === 0 && (
            <p className="p-4 text-center text-sm text-[var(--c-muted)]">
              Sin resultados para "{search}".
            </p>
          )}

          {status === "ready" && filtered.length > 0 && (
            <ul
              className="space-y-2"
              data-testid="asignar-modulos-list"
            >
              {filtered.map((m) => {
                const checked = asignados.has(m.id);
                const state = rowState[m.id] ?? "idle";
                const disabled = state === "saving";
                return (
                  <li
                    key={m.id}
                    className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3"
                    data-testid={`asignar-modulos-row-${m.id}`}
                    data-assigned={checked ? "true" : "false"}
                  >
                    <label className="flex flex-1 items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        onChange={() => handleToggle(m.id)}
                        data-testid={`asignar-modulos-checkbox-${m.id}`}
                        aria-label={`Asignar ${m.title}`}
                        className="h-4 w-4 rounded border-[var(--c-border)] accent-[var(--c-primary)]"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-[var(--c-text)]">
                          {m.title}
                        </span>
                        <span className="block text-xs text-[var(--c-muted)]">
                          {m.subject || m.category || "Sin materia"}
                        </span>
                      </span>
                    </label>
                    <span
                      className="shrink-0 text-xs text-[var(--c-muted)]"
                      data-testid={`asignar-modulos-status-${m.id}`}
                    >
                      {state === "saving"
                        ? "Guardando…"
                        : state === "error"
                          ? "Error"
                          : checked
                            ? "Asignado"
                            : "No asignado"}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <footer className="flex items-center justify-end gap-2 border-t border-[var(--c-border)] p-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-sm font-medium text-[var(--c-text)] hover:bg-[var(--c-border)]"
          >
            Cerrar
          </button>
        </footer>
      </div>
    </div>
  );
}
