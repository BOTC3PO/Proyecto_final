/**
 * AsignarModulosModal (Tarea 16b).
 *
 * Modal para que el docente del aula asigne o desasigne módulos. Lista los
 * módulos del docente (GET /api/modulos) y marca como asignados los que
 * ya están vinculados al aula (GET /api/aulas/:id/modulos). Cada fila
 * tiene un checkbox que dispara POST/DELETE idempotente.
 *
 * Migrado al átomo ui/Modal (D10): focus-trap, ESC, scroll-lock y
 * retorno de foco vienen del átomo.
 */

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { apiDelete, apiGet, apiPost } from "../../lib/api";
import type { Module } from "../../domain/module/module.types";
import { Modal, Input, Button, Spinner, Alert } from "../../ui";

export type AsignarModulosModalProps = {
  classroomId: string;
  classroomName: string;
  onClose: () => void;
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

  const sectionBorder: CSSProperties = {
    borderBottom: "1px solid var(--c-border)",
  };

  const rowStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--space-3)",
    borderRadius: "var(--r-md)",
    border: "1px solid var(--c-border)",
    background: "var(--c-bg)",
    padding: "var(--space-3)",
  };

  return (
    <Modal
      open={true}
      onClose={onClose}
      ariaLabel={`Asignar módulos al aula ${classroomName}`}
      size="lg"
      data-testid="asignar-modulos-modal"
      style={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--space-4)",
        ...sectionBorder,
      }}>
        <div>
          <h2 style={{
            margin: 0,
            fontSize: "var(--text-lg)",
            fontWeight: "var(--fw-semibold)",
            color: "var(--c-text)",
          }}>
            Asignar módulos al aula
          </h2>
          <p style={{
            margin: "2px 0 0",
            fontSize: "var(--text-xs)",
            color: "var(--c-muted)",
          }}>
            {classroomName}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar modal"
          style={{
            background: "none",
            border: "none",
            padding: "var(--space-1)",
            fontSize: "var(--text-sm)",
            color: "var(--c-muted)",
            cursor: "pointer",
            borderRadius: "var(--r-sm)",
          }}
        >
          ✕
        </button>
      </header>

      {/* Search */}
      <div style={{ padding: "var(--space-3)", ...sectionBorder }}>
        <Input
          type="search"
          size="sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar módulo por título…"
          aria-label="Buscar módulo"
          data-testid="asignar-modulos-search"
        />
      </div>

      {globalError && (
        <div style={{ padding: "0 var(--space-3)" }}>
          <Alert variant="danger">{globalError}</Alert>
        </div>
      )}

      {/* List */}
      <div style={{ flex: 1, overflowY: "auto", padding: "var(--space-3)" }}>
        {status === "loading" && (
          <div
            style={{ display: "flex", justifyContent: "center", padding: "var(--space-6)" }}
            data-testid="asignar-modulos-loading"
          >
            <Spinner size="md" label="Cargando módulos" />
          </div>
        )}

        {status === "error" && (
          <div style={{ textAlign: "center", padding: "var(--space-4)" }}>
            <Alert variant="danger">Error: {errorMessage}</Alert>
            <div style={{ marginTop: "var(--space-3)" }}>
              <Button variant="ghost" size="sm" onClick={loadAll}>
                Reintentar
              </Button>
            </div>
          </div>
        )}

        {status === "ready" && modulos.length === 0 && (
          <p style={{
            textAlign: "center",
            padding: "var(--space-6)",
            fontSize: "var(--text-sm)",
            color: "var(--c-muted)",
          }}>
            No tenés módulos todavía. Creá uno en /modulos/crear para poder asignarlo.
          </p>
        )}

        {status === "ready" && modulos.length > 0 && filtered.length === 0 && (
          <p style={{
            textAlign: "center",
            padding: "var(--space-4)",
            fontSize: "var(--text-sm)",
            color: "var(--c-muted)",
          }}>
            Sin resultados para &quot;{search}&quot;.
          </p>
        )}

        {status === "ready" && filtered.length > 0 && (
          <ul
            style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
            data-testid="asignar-modulos-list"
          >
            {filtered.map((m) => {
              const checked = asignados.has(m.id);
              const state = rowState[m.id] ?? "idle";
              const disabled = state === "saving";
              return (
                <li
                  key={m.id}
                  style={rowStyle}
                  data-testid={`asignar-modulos-row-${m.id}`}
                  data-assigned={checked ? "true" : "false"}
                >
                  <label style={{ display: "flex", flex: 1, alignItems: "center", gap: "var(--space-3)", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={disabled}
                      onChange={() => handleToggle(m.id)}
                      data-testid={`asignar-modulos-checkbox-${m.id}`}
                      aria-label={`Asignar ${m.title}`}
                      style={{ accentColor: "var(--c-primary)" }}
                    />
                    <span style={{ minWidth: 0, flex: 1 }}>
                      <span style={{
                        display: "block",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--fw-medium)",
                        color: "var(--c-text)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}>
                        {m.title}
                      </span>
                      <span style={{
                        display: "block",
                        fontSize: "var(--text-xs)",
                        color: "var(--c-muted)",
                      }}>
                        {m.subject || m.category || "Sin materia"}
                      </span>
                    </span>
                  </label>
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "var(--text-xs)",
                      color: "var(--c-muted)",
                    }}
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

      {/* Footer */}
      <footer style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "var(--space-2)",
        padding: "var(--space-3)",
        borderTop: "1px solid var(--c-border)",
      }}>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Cerrar
        </Button>
      </footer>
    </Modal>
  );
}
