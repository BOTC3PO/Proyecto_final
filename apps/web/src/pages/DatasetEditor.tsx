/**
 * Editor tabular de un dataset VBLang (Sprint 9B).
 *
 * Layout:
 *   - Header con metadata editable: nombre, descripción, visibility.
 *   - Tabla con una fila por registro; columnas según `dataset.columnas`.
 *   - Auto-save por fila al blur o Enter.
 *   - + Agregar fila / × Eliminar fila por registro.
 *   - Validación de tipo por celda (string/number/boolean): borde rojo si
 *     el valor no parsea al tipo de la columna; bloquea el save hasta corregir.
 *
 * NOTA: v1 no permite agregar/eliminar/renombrar columnas. Se definen al crear
 * el dataset desde VblangDatasetsIndex.
 *
 * Mobile-friendly: scroll horizontal en tabla cuando hay muchas columnas.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { invalidarDataset } from "../vblang/datasetCache";
import {
  addRows,
  deleteRow,
  getDataset,
  refreshDataset,
  updateDataset,
  updateRow,
} from "../domain/vblang/datasetApi";
import { useI18n } from "../i18n/I18nContext";
import type {
  ColumnaTipo,
  DatasetDetail,
  DatasetFila,
} from "../domain/vblang/dataset.types";

// ─── Parser de celdas ────────────────────────────────────────────────────────

interface ParseResult {
  ok: boolean;
  value?: unknown;
  error?: string;
}

function parseCell(raw: string, tipo: ColumnaTipo): ParseResult {
  if (raw === "") {
    // Celda vacía: la consideramos string "" para string, null para number/boolean.
    if (tipo === "string") return { ok: true, value: "" };
    return { ok: true, value: null };
  }
  if (tipo === "string") return { ok: true, value: raw };
  if (tipo === "number") {
    const trimmed = raw.trim().replace(",", ".");
    const n = Number(trimmed);
    if (!Number.isFinite(n)) {
      return { ok: false, error: "no es un número válido" };
    }
    return { ok: true, value: n };
  }
  // boolean
  const lower = raw.trim().toLowerCase();
  if (["true", "1", "sí", "si", "yes", "verdadero"].includes(lower)) {
    return { ok: true, value: true };
  }
  if (["false", "0", "no", "falso"].includes(lower)) {
    return { ok: true, value: false };
  }
  return { ok: false, error: "usá true / false" };
}

function cellToString(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "boolean") return value ? "true" : "false";
  return String(value);
}

// ─── Row local state ──────────────────────────────────────────────────────────

interface RowDraft {
  id: string;
  /** raw strings por columna — lo que el alumno está editando. */
  cells: Record<string, string>;
  /** errores de parseo por columna. */
  errors: Record<string, string>;
  /** snapshot del valor último guardado (para detectar cambios). */
  saved: Record<string, unknown>;
  saving: boolean;
  error: string | null;
}

function buildRowDraft(fila: DatasetFila, columnas: string[]): RowDraft {
  const cells: Record<string, string> = {};
  for (const c of columnas) cells[c] = cellToString(fila.datos[c]);
  return {
    id: fila.id,
    cells,
    errors: {},
    saved: { ...fila.datos },
    saving: false,
    error: null,
  };
}

// ─── Componente principal ────────────────────────────────────────────────────

export default function DatasetEditor() {
  const { t } = useI18n();
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataset, setDataset] = useState<DatasetDetail | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [rows, setRows] = useState<RowDraft[]>([]);

  // Metadata local
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [visibility, setVisibility] = useState<"privada" | "escuela" | "publica">(
    "privada",
  );
  const [metaSaving, setMetaSaving] = useState(false);
  const [metaMessage, setMetaMessage] = useState<string | null>(null);

  // PLAN-E §20: fuente externa
  const [sourceUrl, setSourceUrl] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [refreshMessage, setRefreshMessage] = useState<string | null>(null);

  const columnasOrden = useMemo(
    () => (dataset ? Object.keys(dataset.columnas) : []),
    [dataset],
  );

  // Sin id → no podemos editar; la creación se hace desde el modal del
  // índice de datasets, que navega acá con el id ya creado. Mostramos hint.
  useEffect(() => {
    if (!id) {
      setStatus("error");
      setErrorMessage(
        "Para crear un dataset usá el botón «+ Nuevo dataset» en la lista.",
      );
      return;
    }
    let cancelled = false;
    setStatus("loading");
    getDataset(id)
      .then((d) => {
        if (cancelled) return;
        setDataset(d);
        setNombre(d.nombre);
        setDescripcion(d.descripcion ?? "");
        setVisibility(d.visibility);
        setSourceUrl(d.sourceUrl ?? "");
        setRows(d.filas.map((f) => buildRowDraft(f, Object.keys(d.columnas))));
        setStatus("ready");
      })
      .catch((err) => {
        if (cancelled) return;
        setStatus("error");
        setErrorMessage(
          err instanceof Error ? err.message : t("datasetEditor.noSePudoCargarEl"),
        );
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  // ─── Handlers de metadata ──────────────────────────────────────────────────

  const handleMetaSave = async () => {
    if (!id || !dataset) return;
    setMetaSaving(true);
    setMetaMessage(null);
    try {
      const updated = await updateDataset(id, {
        nombre: nombre.trim() || dataset.nombre,
        descripcion: descripcion.trim() || undefined,
        visibility,
        sourceUrl: sourceUrl.trim() || null,
      });
      // El PUT del backend no devuelve `filas`; preservamos las locales.
      setDataset((prev) => (prev ? { ...prev, ...updated, filas: prev.filas } : prev));
      // Si cambió el nombre, invalidamos ambas entradas del cache para que
      // las plantillas que lo referenciaban recarguen al próximo run.
      invalidarDataset(dataset.nombre);
      if (updated.nombre && updated.nombre !== dataset.nombre) {
        invalidarDataset(updated.nombre);
      }
      setMetaMessage("Metadata guardada.");
      setTimeout(() => setMetaMessage(null), 2000);
    } catch (err) {
      setMetaMessage(
        err instanceof Error ? err.message : t("datasetEditor.noSePudoGuardarMetadata"),
      );
    } finally {
      setMetaSaving(false);
    }
  };

  // PLAN-E §20: guarda la URL si cambió, baja la fuente y reemplaza las filas.
  const handleRefresh = async () => {
    if (!id || !dataset) return;
    const url = sourceUrl.trim();
    if (!url) return;
    if (
      !window.confirm(
        "Refrescar desde la URL REEMPLAZA todas las filas actuales. ¿Continuar?",
      )
    ) {
      return;
    }
    setRefreshing(true);
    setRefreshMessage(null);
    try {
      if (url !== (dataset.sourceUrl ?? "")) {
        await updateDataset(id, { sourceUrl: url });
      }
      const r = await refreshDataset(id);
      const fresh = await getDataset(id);
      setDataset(fresh);
      setRows(fresh.filas.map((f) => buildRowDraft(f, Object.keys(fresh.columnas))));
      invalidarDataset(fresh.nombre);
      setRefreshMessage(`${r.filas} filas importadas.`);
    } catch (err) {
      setRefreshMessage(
        err instanceof Error ? err.message : t("datasetEditor.noSePudoRefrescarLa"),
      );
    } finally {
      setRefreshing(false);
    }
  };

  // ─── Handlers de filas ─────────────────────────────────────────────────────

  const updateRowCell = useCallback(
    (rowId: string, col: string, raw: string) => {
      setRows((prev) =>
        prev.map((r) => {
          if (r.id !== rowId) return r;
          const errors = { ...r.errors };
          const tipo = dataset?.columnas[col];
          if (tipo) {
            const p = parseCell(raw, tipo);
            if (!p.ok) errors[col] = p.error ?? "valor inválido";
            else delete errors[col];
          }
          return { ...r, cells: { ...r.cells, [col]: raw }, errors };
        }),
      );
    },
    [dataset],
  );

  const saveRow = useCallback(
    async (rowId: string) => {
      if (!id || !dataset) return;
      const row = rows.find((r) => r.id === rowId);
      if (!row) return;
      if (Object.keys(row.errors).length > 0) return;
      // Construir objeto datos parseado
      const datos: Record<string, unknown> = {};
      for (const col of columnasOrden) {
        const tipo = dataset.columnas[col];
        const parsed = parseCell(row.cells[col], tipo);
        if (!parsed.ok) return; // sanity
        datos[col] = parsed.value;
      }
      // Detectar si cambió
      const equal = columnasOrden.every(
        (c) => JSON.stringify(datos[c]) === JSON.stringify(row.saved[c]),
      );
      if (equal) return;

      setRows((prev) =>
        prev.map((r) => (r.id === rowId ? { ...r, saving: true, error: null } : r)),
      );
      try {
        const updated = await updateRow(id, rowId, datos);
        setRows((prev) =>
          prev.map((r) =>
            r.id === rowId
              ? { ...r, saving: false, saved: { ...updated.datos } }
              : r,
          ),
        );
        invalidarDataset(dataset.nombre);
      } catch (err) {
        setRows((prev) =>
          prev.map((r) =>
            r.id === rowId
              ? {
                  ...r,
                  saving: false,
                  error: err instanceof Error ? err.message : "Error guardando",
                }
              : r,
          ),
        );
      }
    },
    [id, dataset, rows, columnasOrden],
  );

  const handleAddRow = async () => {
    if (!id || !dataset) return;
    // Fila vacía con tipos por defecto
    const empty: Record<string, unknown> = {};
    for (const c of columnasOrden) {
      const tipo = dataset.columnas[c];
      empty[c] = tipo === "string" ? "" : tipo === "number" ? 0 : false;
    }
    try {
      await addRows(id, [empty]);
      // Recargar para obtener el nuevo filaId asignado por la API.
      const fresh = await getDataset(id);
      setDataset(fresh);
      setRows(fresh.filas.map((f) => buildRowDraft(f, columnasOrden)));
      invalidarDataset(dataset.nombre);
    } catch (err) {
      window.alert(
        err instanceof Error ? err.message : t("datasetEditor.noSePudoAgregarLa"),
      );
    }
  };

  const handleDeleteRow = async (rowId: string) => {
    if (!id) return;
    if (!window.confirm(t("datasetEditor.eliminarEstaFila"))) return;
    try {
      await deleteRow(id, rowId);
      setRows((prev) => prev.filter((r) => r.id !== rowId));
      if (dataset) invalidarDataset(dataset.nombre);
    } catch (err) {
      window.alert(
        err instanceof Error ? err.message : t("datasetEditor.noSePudoEliminarLa"),
      );
    }
  };

  // ─── Render ─────────────────────────────────────────────────────────────────

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500 animate-pulse">{t("datasetEditor.cargandoDataset")}</p>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-6 rounded-xl shadow space-y-3 max-w-md">
          <p className="text-slate-700 text-sm">{errorMessage}</p>
          <button
            type="button"
            onClick={() => navigate("/datasets")}
            className="text-blue-600 text-sm hover:underline"
          >{t("datasetEditor.volverADatasets")}</button>
        </div>
      </main>
    );
  }

  if (!dataset) return null;

  return (
    <main
      className="min-h-screen bg-[var(--c-bg,#f8fafc)] p-6"
      data-testid="dataset-editor"
    >
      <div className="mx-auto max-w-6xl space-y-5">
        <Link to="/datasets" className="text-sm text-blue-600 hover:underline">{t("datasetEditor.volverADatasets")}</Link>

        {/* Metadata */}
        <section className="rounded-xl border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-4 space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600">{t("comun.nombre")}</span>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm"
                data-testid="dataset-name-input"
              />
            </label>
            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600">{t("comun.visibilidad")}</span>
              <select
                value={visibility}
                onChange={(e) =>
                  setVisibility(e.target.value as typeof visibility)
                }
                className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm"
              >
                <option value="privada">{t("comun.privada")}</option>
                <option value="escuela">{t("sidebar.escuela")}</option>
                <option value="publica">{t("comun.publica")}</option>
              </select>
            </label>
          </div>
          <label className="block space-y-1">
            <span className="text-xs font-medium text-slate-600">{t("comun.descripcion")}</span>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows={2}
              className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-medium text-slate-600">{t("datasetEditor.urlDeOrigenHttpsCsv")}</span>
            <div className="flex gap-2">
              <input
                type="url"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                placeholder="https://ejemplo.com/datos.csv"
                className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm font-mono"
                data-testid="dataset-source-url-input"
              />
              <button
                type="button"
                onClick={handleRefresh}
                disabled={refreshing || !sourceUrl.trim()}
                className="shrink-0 rounded-md border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-100 disabled:opacity-50"
                data-testid="dataset-refresh-button"
              >
                {refreshing ? "Refrescando…" : "Refrescar desde URL"}
              </button>
            </div>
            {refreshMessage && (
              <p className="text-xs text-slate-500">{refreshMessage}</p>
            )}
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleMetaSave}
              disabled={metaSaving}
              className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:bg-slate-300"
              data-testid="dataset-save-meta"
            >
              {metaSaving ? "Guardando…" : "Guardar metadata"}
            </button>
            {metaMessage && (
              <span className="text-xs text-slate-500">{metaMessage}</span>
            )}
          </div>
        </section>

        {/* Tabla de filas */}
        <section className="rounded-xl border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] overflow-hidden">
          <div className="overflow-x-auto">
            <table
              className="w-full text-sm border-collapse"
              data-testid="dataset-table"
            >
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  {columnasOrden.map((c) => (
                    <th
                      key={c}
                      className="px-3 py-2 text-left text-xs font-semibold text-slate-700"
                    >
                      <div className="flex flex-col">
                        <span className="font-mono">{c}</span>
                        <span className="text-[10px] font-normal text-slate-400">
                          {dataset.columnas[c]}
                        </span>
                      </div>
                    </th>
                  ))}
                  <th className="w-12 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td
                      colSpan={columnasOrden.length + 1}
                      className="p-6 text-center text-slate-400 text-sm"
                    >{t("datasetEditor.sinFilasTodavia")}</td>
                  </tr>
                )}
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-slate-100 hover:bg-slate-50"
                    data-testid={`dataset-row-${row.id}`}
                  >
                    {columnasOrden.map((c) => {
                      const err = row.errors[c];
                      return (
                        <td key={c} className="px-2 py-1 align-top">
                          <input
                            type="text"
                            value={row.cells[c] ?? ""}
                            onChange={(e) =>
                              updateRowCell(row.id, c, e.target.value)
                            }
                            onBlur={() => saveRow(row.id)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.currentTarget.blur();
                              }
                            }}
                            className={`w-full rounded border px-2 py-1 text-sm font-mono ${
                              err
                                ? "border-red-400 bg-red-50"
                                : "border-slate-200 focus:border-blue-400"
                            }`}
                            data-testid={`dataset-cell-${row.id}-${c}`}
                            aria-invalid={!!err}
                            title={err}
                          />
                          {err && (
                            <p className="mt-0.5 text-[10px] text-red-600">
                              {err}
                            </p>
                          )}
                        </td>
                      );
                    })}
                    <td className="px-2 py-1 align-top w-12">
                      <button
                        type="button"
                        onClick={() => handleDeleteRow(row.id)}
                        title={t("datasetEditor.eliminarFila")}
                        className="text-slate-400 hover:text-red-600 text-lg leading-none px-2"
                        data-testid={`dataset-delete-row-${row.id}`}
                      >
                        ×
                      </button>
                      {row.saving && (
                        <span className="block text-[10px] text-slate-400">
                          ⇄
                        </span>
                      )}
                      {row.error && (
                        <span className="block text-[10px] text-red-600">
                          err
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-slate-200 p-3">
            <button
              type="button"
              onClick={handleAddRow}
              className="rounded-md border border-blue-300 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100"
              data-testid="dataset-add-row"
            >{t("datasetEditor.agregarFila")}</button>
          </div>
        </section>
      </div>
    </main>
  );
}
