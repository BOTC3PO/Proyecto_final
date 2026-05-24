/**
 * Listado de datasets VBLang (Sprint 9B).
 *
 * Hermano funcional de PlantillasIndex: cards con search + filter por
 * visibility + tabs "Mis" / "Biblioteca". Modal de creación rápida con form
 * inline (nombre + columnas). Al confirmar redirige al editor del dataset.
 */

import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  createDataset,
  deleteDataset,
  listDatasets,
} from "../domain/vblang/datasetApi";
import type {
  ColumnaTipo,
  DatasetListItem,
  DatasetListParams,
} from "../domain/vblang/dataset.types";

export type DatasetsIndexMode = "mias" | "biblioteca";

interface VblangDatasetsIndexProps {
  mode?: DatasetsIndexMode;
}

const VISIBILITY_BADGE: Record<string, string> = {
  privada: "bg-slate-100 text-slate-700",
  escuela: "bg-blue-100 text-blue-700",
  publica: "bg-emerald-100 text-emerald-700",
};

function DatasetCard({
  item,
  mode,
  onDelete,
}: {
  item: DatasetListItem;
  mode: DatasetsIndexMode;
  onDelete: (id: string) => void;
}) {
  const updated = new Date(item.updatedAt);
  const cols = Object.keys(item.columnas);
  return (
    <article
      className="rounded-xl border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-4 shadow-sm hover:shadow transition-shadow"
      data-testid="dataset-card"
    >
      <header className="flex items-start justify-between gap-3">
        <Link to={`/datasets/${item.id}`} className="flex-1 min-w-0 group">
          <h3 className="font-semibold text-sm truncate group-hover:text-[var(--c-primary,#3b82f6)]">
            {item.nombre}
          </h3>
          <p className="text-xs text-[var(--c-muted,#64748b)] truncate">
            {cols.length} columna{cols.length === 1 ? "" : "s"} ·{" "}
            {item.filasCount} fila{item.filasCount === 1 ? "" : "s"}
          </p>
        </Link>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
            VISIBILITY_BADGE[item.visibility] ?? "bg-slate-100 text-slate-700"
          }`}
        >
          {item.visibility}
        </span>
      </header>
      {item.descripcion && (
        <p className="mt-2 text-xs text-[var(--c-muted,#64748b)] line-clamp-2">
          {item.descripcion}
        </p>
      )}
      {cols.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {cols.slice(0, 6).map((c) => (
            <span
              key={c}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 font-mono"
            >
              {c}:{item.columnas[c]}
            </span>
          ))}
          {cols.length > 6 && (
            <span className="text-[10px] text-slate-400">
              +{cols.length - 6} más
            </span>
          )}
        </div>
      )}
      <footer className="mt-3 flex items-center justify-between text-[10px] text-[var(--c-muted,#64748b)]">
        <span>Actualizado {updated.toLocaleDateString()}</span>
        {mode === "mias" && (
          <button
            type="button"
            onClick={() => {
              if (window.confirm(`¿Eliminar dataset "${item.nombre}"?`)) {
                onDelete(item.id);
              }
            }}
            className="rounded-md border border-red-200 px-2 py-1 text-[10px] font-medium text-red-700 hover:bg-red-50"
          >
            Eliminar
          </button>
        )}
      </footer>
    </article>
  );
}

interface CreateModalProps {
  onClose: () => void;
  onCreated: (id: string) => void;
}

interface ColumnaDraft {
  nombre: string;
  tipo: ColumnaTipo;
}

function CreateModal({ onClose, onCreated }: CreateModalProps) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [visibility, setVisibility] = useState<"privada" | "escuela" | "publica">(
    "privada",
  );
  const [columnas, setColumnas] = useState<ColumnaDraft[]>([
    { nombre: "", tipo: "string" },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addColumna = () =>
    setColumnas((c) => [...c, { nombre: "", tipo: "string" }]);
  const removeColumna = (idx: number) =>
    setColumnas((c) => c.filter((_, i) => i !== idx));
  const updateColumna = (idx: number, patch: Partial<ColumnaDraft>) =>
    setColumnas((c) => c.map((col, i) => (i === idx ? { ...col, ...patch } : col)));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("El nombre es requerido.");
      return;
    }
    const map: Record<string, ColumnaTipo> = {};
    for (const c of columnas) {
      const key = c.nombre.trim();
      if (!key) continue;
      if (map[key]) {
        setError(`Columna "${key}" duplicada.`);
        return;
      }
      map[key] = c.tipo;
    }
    if (Object.keys(map).length === 0) {
      setError("Necesitás al menos una columna.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const ds = await createDataset({
        nombre: nombre.trim(),
        descripcion: descripcion.trim() || undefined,
        visibility,
        columnas: map,
      });
      onCreated(ds.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo crear el dataset.");
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      data-testid="dataset-create-modal"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-xl bg-white p-5 shadow-xl space-y-4"
      >
        <header className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Nuevo dataset</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-lg leading-none"
            aria-label="Cerrar"
          >
            ×
          </button>
        </header>

        <label className="block space-y-1">
          <span className="text-xs font-medium text-slate-600">Nombre</span>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="paises"
            autoFocus
          />
        </label>

        <label className="block space-y-1">
          <span className="text-xs font-medium text-slate-600">
            Descripción (opcional)
          </span>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows={2}
            className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block space-y-1">
          <span className="text-xs font-medium text-slate-600">Visibilidad</span>
          <select
            value={visibility}
            onChange={(e) => setVisibility(e.target.value as typeof visibility)}
            className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm"
          >
            <option value="privada">Privada</option>
            <option value="escuela">Escuela</option>
            <option value="publica">Pública</option>
          </select>
        </label>

        <div className="space-y-2">
          <p className="text-xs font-medium text-slate-600">Columnas</p>
          {columnas.map((c, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <input
                type="text"
                value={c.nombre}
                onChange={(e) => updateColumna(idx, { nombre: e.target.value })}
                placeholder="nombre"
                className="flex-1 rounded-md border border-slate-300 px-2 py-1 text-sm font-mono"
              />
              <select
                value={c.tipo}
                onChange={(e) =>
                  updateColumna(idx, { tipo: e.target.value as ColumnaTipo })
                }
                className="rounded-md border border-slate-300 px-2 py-1 text-sm"
              >
                <option value="string">string</option>
                <option value="number">number</option>
                <option value="boolean">boolean</option>
              </select>
              {columnas.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeColumna(idx)}
                  className="text-slate-400 hover:text-red-600 text-lg leading-none px-1"
                  aria-label="Eliminar columna"
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addColumna}
            className="text-xs font-medium text-blue-600 hover:underline"
          >
            + Agregar columna
          </button>
          <p className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 rounded p-2">
            Las columnas se definen al crear el dataset. En v1 no se pueden
            agregar/eliminar después; solo editar filas.
          </p>
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:bg-slate-300"
          >
            {submitting ? "Creando…" : "Crear dataset"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function VblangDatasetsIndex({
  mode = "mias",
}: VblangDatasetsIndexProps) {
  const navigate = useNavigate();
  const [items, setItems] = useState<DatasetListItem[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [visibilityFilter, setVisibilityFilter] =
    useState<DatasetListParams["visibility"]>("todas");
  const [createOpen, setCreateOpen] = useState(false);

  const load = useCallback(() => {
    setStatus("loading");
    setErrorMessage(null);
    listDatasets({
      q: q || undefined,
      visibility: visibilityFilter,
      owner: mode === "biblioteca" ? "otros" : "mias",
    })
      .then((res) => {
        setItems(res.items);
        setStatus("ready");
      })
      .catch((err) => {
        setStatus("error");
        setErrorMessage(err instanceof Error ? err.message : "Error de carga");
      });
  }, [q, visibilityFilter, mode]);

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = async (id: string) => {
    try {
      await deleteDataset(id);
      load();
    } catch (err) {
      window.alert(
        err instanceof Error ? err.message : "No se pudo eliminar el dataset.",
      );
    }
  };

  return (
    <main
      className="min-h-screen bg-[var(--c-bg,#f8fafc)] p-6"
      data-testid="datasets-index"
    >
      <div className="mx-auto max-w-6xl space-y-4">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">Datasets VBLang</h1>
          <button
            type="button"
            onClick={() => setCreateOpen(true)}
            className="rounded-md bg-[var(--c-primary,#3b82f6)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            data-testid="datasets-new-button"
          >
            + Nuevo dataset
          </button>
        </header>

        <nav className="flex gap-2 border-b border-[var(--c-border,#e2e8f0)]">
          <NavLink
            to="/datasets"
            end
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium ${
                isActive
                  ? "border-b-2 border-[var(--c-primary,#3b82f6)] text-[var(--c-primary,#3b82f6)]"
                  : "text-[var(--c-muted,#64748b)]"
              }`
            }
          >
            Mis datasets
          </NavLink>
          <NavLink
            to="/datasets/biblioteca"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium ${
                isActive
                  ? "border-b-2 border-[var(--c-primary,#3b82f6)] text-[var(--c-primary,#3b82f6)]"
                  : "text-[var(--c-muted,#64748b)]"
              }`
            }
          >
            Biblioteca
          </NavLink>
        </nav>

        <section className="flex flex-wrap gap-2">
          <input
            type="search"
            placeholder="Buscar…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="flex-1 min-w-[12rem] rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-3 py-1.5 text-sm"
          />
          <select
            value={visibilityFilter}
            onChange={(e) =>
              setVisibilityFilter(
                e.target.value as DatasetListParams["visibility"],
              )
            }
            className="rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-3 py-1.5 text-sm"
          >
            <option value="todas">Todas</option>
            <option value="privadas">Privadas</option>
            <option value="escuela">Escuela</option>
            <option value="publicas">Públicas</option>
          </select>
        </section>

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
              {mode === "biblioteca"
                ? "No hay datasets compartidos todavía."
                : "Todavía no creaste datasets."}
            </p>
            {mode === "mias" && (
              <button
                type="button"
                onClick={() => setCreateOpen(true)}
                className="mt-3 inline-block text-sm text-[var(--c-primary,#3b82f6)] hover:underline"
              >
                Crear el primer dataset →
              </button>
            )}
          </div>
        )}
        {status === "ready" && items.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <DatasetCard
                key={it.id}
                item={it}
                mode={mode}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {createOpen && (
        <CreateModal
          onClose={() => setCreateOpen(false)}
          onCreated={(id) => {
            setCreateOpen(false);
            navigate(`/datasets/${id}`);
          }}
        />
      )}
    </main>
  );
}
