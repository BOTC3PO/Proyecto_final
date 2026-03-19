import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import katex from "katex";
import "katex/dist/katex.min.css";

import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import type {
  Block,
  BlockDocument,
  ChartBlock,
  FlowBlock,
  LatexBlock,
  MathBlock,
  ShapeBlock,
  TableBlock,
  TextBlock,
} from "../types";
import { createEmptyBlockDocument } from "../utils";
import { TextBlockRenderer } from "../renderers/TextBlockRenderer";
import { LatexBlockRenderer } from "../renderers/LatexBlockRenderer";
import { TableBlockRenderer } from "../renderers/TableBlockRenderer";
import { ChartBlockRenderer } from "../renderers/ChartBlockRenderer";
import { FlowBlockRenderer } from "../renderers/FlowBlockRenderer";
import { MathBlockRenderer } from "../renderers/MathBlockRenderer";
import { ShapeBlockRenderer } from "../renderers/ShapeBlockRenderer";
import { ShapeBlockEditor } from "../editors/ShapeBlockEditor";
import { FunctionSquare, Shapes } from "lucide-react";

import { useBlockEditor } from "./state/useBlockEditor";
import { fetchBlockDocument, saveBlockDocument } from "./services/blocksApi";

// ─── Helpers ────────────────────────────────────────────────────────────────

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isValidBlockDocument(obj: unknown): obj is BlockDocument {
  return (
    typeof obj === "object" &&
    obj !== null &&
    (obj as { version?: number }).version === 1 &&
    Array.isArray((obj as { blocks?: unknown[] }).blocks)
  );
}

function blockIcon(type: Block["type"]): string {
  switch (type) {
    case "text":
      return "¶";
    case "latex":
      return "∑";
    case "table":
      return "⊞";
    case "chart":
      return "▦";
    case "flow":
      return "⬡";
    case "math":
      return "f";
    case "shape":
      return "◈";
    default:
      return "·";
  }
}

function blockTypeName(type: Block["type"]): string {
  switch (type) {
    case "text":
      return "Texto";
    case "latex":
      return "LaTeX";
    case "table":
      return "Tabla";
    case "chart":
      return "Gráfico";
    case "flow":
      return "Flujo";
    case "math":
      return "Función f(x)";
    case "shape":
      return "Formas";
    default:
      return type;
  }
}

function blockPreview(block: Block): string {
  switch (block.type) {
    case "text":
      return block.content.slice(0, 30) || "(vacío)";
    case "latex":
      return block.content.slice(0, 30) || "(vacío)";
    case "table":
      return block.title
        ? block.title.slice(0, 30)
        : `${block.headers.length} col · ${block.rows.length} fil`;
    case "chart":
      return block.title ? block.title.slice(0, 30) : `Gráfico ${block.chartType}`;
    case "flow":
      return block.title ? block.title.slice(0, 30) : `${block.nodes.length} nodos`;
    case "math":
      return block.title
        ? block.title.slice(0, 30)
        : block.functions.map((f) => f.expression).join(", ").slice(0, 30) || "(vacío)";
    case "shape":
      return block.title
        ? block.title.slice(0, 30)
        : block.collection;
    default:
      return "";
  }
}

// ─── FSA types ───────────────────────────────────────────────────────────────

interface FileSystemFileHandle {
  getFile(): Promise<File>;
  createWritable(): Promise<FileSystemWritableFileStream>;
  queryPermission(desc: { mode: "readwrite" }): Promise<PermissionState>;
  requestPermission(desc: { mode: "readwrite" }): Promise<PermissionState>;
  name: string;
}
interface FileSystemWritableFileStream {
  write(data: string | Blob | ArrayBuffer): Promise<void>;
  close(): Promise<void>;
}
declare global {
  interface Window {
    showOpenFilePicker?: (opts?: {
      types?: Array<{ description: string; accept: Record<string, string[]> }>;
      multiple?: boolean;
    }) => Promise<FileSystemFileHandle[]>;
    showSaveFilePicker?: (opts?: {
      suggestedName?: string;
      types?: Array<{ description: string; accept: Record<string, string[]> }>;
    }) => Promise<FileSystemFileHandle>;
  }
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function InspectorCard({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100">
      <button
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide hover:bg-slate-50"
        onClick={() => setOpen((o) => !o)}
      >
        {title}
        <span className="text-slate-400">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="px-3 pb-3 pt-1 space-y-2">{children}</div>}
    </div>
  );
}

const inputCls =
  "w-full text-xs border border-slate-200 rounded px-1.5 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400";

// ─── Block inspectors ─────────────────────────────────────────────────────────

function TextInspector({
  block,
  onUpdate,
}: {
  block: TextBlock;
  onUpdate: (patch: Record<string, unknown>) => void;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-gray-600 block mb-1">Contenido</label>
      <textarea
        className="w-full text-sm border border-slate-200 rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-400 resize-none"
        rows={6}
        value={block.content}
        onChange={(e) => onUpdate({ content: e.target.value })}
      />
    </div>
  );
}

function LatexInspector({
  block,
  onUpdate,
}: {
  block: LatexBlock;
  onUpdate: (patch: Record<string, unknown>) => void;
}) {
  const { html, error } = (() => {
    try {
      return {
        html: katex.renderToString(block.content, {
          displayMode: block.displayMode,
          throwOnError: true,
        }),
        error: false,
      };
    } catch {
      return { html: block.content, error: true };
    }
  })();

  return (
    <div className="space-y-2">
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Fórmula LaTeX</label>
        <input
          className={inputCls}
          value={block.content}
          onChange={(e) => onUpdate({ content: e.target.value })}
          placeholder="\sum_{i=1}^{n} x_i"
        />
      </div>
      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
        <input
          type="checkbox"
          checked={block.displayMode}
          onChange={(e) => onUpdate({ displayMode: e.target.checked })}
        />
        Modo bloque (centrado)
      </label>
      <div className="rounded-lg border border-slate-100 bg-slate-50 p-3 min-h-[40px]">
        {error ? (
          <span className="text-xs text-red-500 font-mono">{block.content}</span>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  );
}

function TableInspector({
  block,
  onUpdate,
}: {
  block: TableBlock;
  onUpdate: (patch: Record<string, unknown>) => void;
}) {
  const addRow = () => {
    const newRow = new Array(block.headers.length).fill("");
    onUpdate({ rows: [...block.rows, newRow] });
  };

  const addCol = () => {
    const newHeaders = [...block.headers, `Col ${block.headers.length + 1}`];
    const newRows = block.rows.map((r) => [...r, ""]);
    onUpdate({ headers: newHeaders, rows: newRows });
  };

  const updateHeader = (i: number, val: string) => {
    const headers = [...block.headers];
    headers[i] = val;
    onUpdate({ headers });
  };

  const updateCell = (ri: number, ci: number, val: string) => {
    const rows = block.rows.map((r, rIdx) =>
      rIdx === ri ? r.map((c, cIdx) => (cIdx === ci ? val : c)) : r
    );
    onUpdate({ rows });
  };

  return (
    <div className="space-y-2">
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Título</label>
        <input
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th key={i} className="border border-slate-200 p-0.5">
                  <input
                    className="w-full px-1 py-0.5 font-semibold bg-slate-50 focus:outline-none"
                    value={h}
                    onChange={(e) => updateHeader(i, e.target.value)}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} className="border border-slate-200 p-0.5">
                    <input
                      className="w-full px-1 py-0.5 focus:outline-none"
                      value={String(cell)}
                      onChange={(e) => updateCell(ri, ci, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2">
        <button
          onClick={addRow}
          className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
        >
          + Fila
        </button>
        <button
          onClick={addCol}
          className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
        >
          + Columna
        </button>
      </div>
    </div>
  );
}

function ChartInspector({
  block,
  doc,
  onUpdate,
}: {
  block: ChartBlock;
  doc: BlockDocument;
  onUpdate: (patch: Record<string, unknown>) => void;
}) {
  const tableBlocks = doc.blocks.filter((b) => b.type === "table") as TableBlock[];
  const source = block.sourceTableId ? "table" : "manual";
  const isMultiSeries =
    block.chartType === "bar" ||
    block.chartType === "line" ||
    block.chartType === "area" ||
    block.chartType === "bar-stacked" ||
    block.chartType === "bar-grouped" ||
    block.chartType === "area-stacked";

  const updateDatasetLabel = (i: number, label: string) => {
    const datasets = (block.data?.datasets ?? []).map((ds, idx) =>
      idx === i ? { ...ds, label } : ds
    );
    onUpdate({ data: { ...block.data, datasets } });
  };

  const updateDatasetValues = (i: number, raw: string) => {
    const values = raw
      .split(",")
      .map((s) => Number(s.trim()))
      .filter((n) => !isNaN(n));
    const datasets = (block.data?.datasets ?? []).map((ds, idx) =>
      idx === i ? { ...ds, values } : ds
    );
    onUpdate({ data: { ...block.data, datasets } });
  };

  const updateDatasetColor = (i: number, color: string) => {
    const datasets = (block.data?.datasets ?? []).map((ds, idx) =>
      idx === i ? { ...ds, color } : ds
    );
    onUpdate({ data: { ...block.data, datasets } });
  };

  const addDataset = () => {
    const datasets = [...(block.data?.datasets ?? []), { label: "", values: [] }];
    onUpdate({ data: { ...block.data, datasets } });
  };

  const removeDataset = (i: number) => {
    const datasets = (block.data?.datasets ?? []).filter((_, idx) => idx !== i);
    onUpdate({ data: { ...block.data, datasets } });
  };

  const updateLabels = (raw: string) => {
    const labels = raw.split(",").map((s) => s.trim());
    onUpdate({ data: { ...block.data, labels } });
  };

  return (
    <div className="space-y-2">
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Título</label>
        <input
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Tipo de gráfico</label>
        <select
          className={inputCls}
          value={block.chartType}
          onChange={(e) => onUpdate({ chartType: e.target.value })}
        >
          <option value="bar">Barras</option>
          <option value="line">Línea</option>
          <option value="pie">Torta</option>
          <option value="scatter">Dispersión</option>
          <option value="area">Área</option>
          <option value="bar-stacked">Barras apiladas</option>
          <option value="bar-grouped">Barras agrupadas</option>
          <option value="area-stacked">Área apilada</option>
          <option value="histogram">Histograma</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Fuente</label>
        <div className="flex gap-3">
          <label className="flex items-center gap-1 text-xs text-gray-600 cursor-pointer">
            <input
              type="radio"
              checked={source === "manual"}
              onChange={() => onUpdate({ sourceTableId: undefined })}
            />
            Manual
          </label>
          <label className="flex items-center gap-1 text-xs text-gray-600 cursor-pointer">
            <input
              type="radio"
              checked={source === "table"}
              onChange={() => {
                const first = tableBlocks[0];
                if (first) onUpdate({ sourceTableId: first.id });
              }}
              disabled={tableBlocks.length === 0}
            />
            Tabla
          </label>
        </div>
      </div>

      {source === "table" && tableBlocks.length > 0 ? (
        <>
          <div>
            <label className="text-xs font-medium text-gray-600 block mb-1">Tabla fuente</label>
            <select
              className={inputCls}
              value={block.sourceTableId ?? ""}
              onChange={(e) => onUpdate({ sourceTableId: e.target.value })}
            >
              {tableBlocks.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title || t.id}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 block mb-1">
              Col. eje X (índice)
            </label>
            <input
              type="number"
              className={inputCls}
              min={0}
              value={block.xColumn ?? 0}
              onChange={(e) => onUpdate({ xColumn: Number(e.target.value) })}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <label className="text-xs font-medium text-gray-600 block mb-1">
              Etiquetas (separadas por coma)
            </label>
            <input
              className={inputCls}
              value={block.data?.labels.join(", ") ?? ""}
              onChange={(e) => updateLabels(e.target.value)}
              placeholder="A, B, C"
            />
          </div>
          {(block.data?.datasets ?? []).map((ds, i) => (
            <div key={i} className="space-y-1 border border-slate-100 rounded p-2">
              <div className="flex items-center gap-1">
                <input
                  className={inputCls + " flex-1"}
                  value={ds.label}
                  onChange={(e) => updateDatasetLabel(i, e.target.value)}
                  placeholder="Nombre de serie"
                />
                {isMultiSeries && (
                  <input
                    type="color"
                    className="w-6 h-6 rounded border border-slate-200 cursor-pointer p-0.5 shrink-0"
                    value={ds.color ?? "#6366f1"}
                    onChange={(e) => updateDatasetColor(i, e.target.value)}
                    title="Color de serie"
                  />
                )}
                {isMultiSeries && (block.data?.datasets ?? []).length > 1 && (
                  <button
                    onClick={() => removeDataset(i)}
                    className="text-red-400 hover:text-red-600 px-1 text-sm shrink-0"
                    title="Eliminar serie"
                  >
                    ×
                  </button>
                )}
              </div>
              <input
                className={inputCls}
                defaultValue={ds.values.join(", ")}
                onBlur={(e) => updateDatasetValues(i, e.target.value)}
                placeholder="0, 0, 0"
              />
            </div>
          ))}
          {isMultiSeries && (
            <button
              onClick={addDataset}
              className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded w-full"
            >
              + Agregar serie
            </button>
          )}
        </>
      )}

      <div className="rounded-lg border border-slate-100 bg-slate-50 p-2">
        <ChartBlockRenderer block={block} doc={doc} />
      </div>
    </div>
  );
}

function FlowInspector({
  block,
  onUpdate,
}: {
  block: FlowBlock;
  onUpdate: (patch: Record<string, unknown>) => void;
}) {
  const updateNode = (id: string, patch: Partial<FlowBlock["nodes"][number]>) => {
    const nodes = block.nodes.map((n) => (n.id === id ? { ...n, ...patch } : n));
    onUpdate({ nodes });
  };

  const addNode = () => {
    const id = `n${Date.now().toString(36)}`;
    const nodes = [
      ...block.nodes,
      { id, label: "Nuevo nodo", x: 50, y: (block.nodes.length + 1) * 80, shape: "rect" as const },
    ];
    onUpdate({ nodes });
  };

  const removeNode = (id: string) => {
    const nodes = block.nodes.filter((n) => n.id !== id);
    const edges = block.edges.filter((e) => e.fromId !== id && e.toId !== id);
    onUpdate({ nodes, edges });
  };

  const addEdge = () => {
    if (block.nodes.length < 2) return;
    const id = `e${Date.now().toString(36)}`;
    const edges = [
      ...block.edges,
      { id, fromId: block.nodes[0].id, toId: block.nodes[1].id },
    ];
    onUpdate({ edges });
  };

  const updateEdge = (id: string, patch: Partial<FlowBlock["edges"][number]>) => {
    const edges = block.edges.map((e) => (e.id === id ? { ...e, ...patch } : e));
    onUpdate({ edges });
  };

  const removeEdge = (id: string) => {
    const edges = block.edges.filter((e) => e.id !== id);
    onUpdate({ edges });
  };

  return (
    <div className="space-y-2">
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Título</label>
        <input
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="text-xs font-medium text-gray-600">Nodos</label>
          <button
            onClick={addNode}
            className="text-xs px-1.5 py-0.5 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
          >
            + Nodo
          </button>
        </div>
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {block.nodes.map((node) => (
            <div key={node.id} className="flex items-center gap-1 text-xs">
              <input
                className="flex-1 border border-slate-200 rounded px-1 py-0.5 focus:outline-none"
                value={node.label}
                onChange={(e) => updateNode(node.id, { label: e.target.value })}
              />
              <select
                className="border border-slate-200 rounded px-1 py-0.5 focus:outline-none text-xs"
                value={node.shape ?? "rect"}
                onChange={(e) =>
                  updateNode(node.id, {
                    shape: e.target.value as "rect" | "diamond" | "circle",
                  })
                }
              >
                <option value="rect">■</option>
                <option value="diamond">◆</option>
                <option value="circle">●</option>
              </select>
              <button
                onClick={() => removeNode(node.id)}
                className="text-red-400 hover:text-red-600 px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="text-xs font-medium text-gray-600">Conexiones</label>
          <button
            onClick={addEdge}
            className="text-xs px-1.5 py-0.5 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
            disabled={block.nodes.length < 2}
          >
            + Conexión
          </button>
        </div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {block.edges.map((edge) => (
            <div key={edge.id} className="flex items-center gap-1 text-xs">
              <select
                className="flex-1 border border-slate-200 rounded px-1 py-0.5 focus:outline-none text-xs"
                value={edge.fromId}
                onChange={(e) => updateEdge(edge.id, { fromId: e.target.value })}
              >
                {block.nodes.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.label}
                  </option>
                ))}
              </select>
              <span className="text-gray-400">→</span>
              <select
                className="flex-1 border border-slate-200 rounded px-1 py-0.5 focus:outline-none text-xs"
                value={edge.toId}
                onChange={(e) => updateEdge(edge.id, { toId: e.target.value })}
              >
                {block.nodes.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.label}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeEdge(edge.id)}
                className="text-red-400 hover:text-red-600 px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-100 bg-slate-50 p-2">
        <FlowBlockRenderer block={block} />
      </div>
    </div>
  );
}

// ─── Math inspector ───────────────────────────────────────────────────────────

function MathInspector({
  block,
  onUpdate,
}: {
  block: MathBlock;
  onUpdate: (patch: Record<string, unknown>) => void;
}) {
  const addFunction = () => {
    onUpdate({
      functions: [
        ...block.functions,
        { id: crypto.randomUUID(), expression: "", color: "#2563eb" },
      ],
    });
  };

  const removeFunction = (id: string) => {
    onUpdate({ functions: block.functions.filter((f) => f.id !== id) });
  };

  const updateFunction = (id: string, patch: Partial<MathBlock["functions"][number]>) => {
    onUpdate({
      functions: block.functions.map((f) => (f.id === id ? { ...f, ...patch } : f)),
    });
  };

  return (
    <div className="space-y-2">
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Título</label>
        <input
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value || undefined })}
          placeholder="Título del gráfico"
        />
      </div>

      <div className="grid grid-cols-2 gap-1">
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">x mín</label>
          <input
            type="number"
            className={inputCls}
            value={block.xMin}
            onChange={(e) => onUpdate({ xMin: Number(e.target.value) })}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">x máx</label>
          <input
            type="number"
            className={inputCls}
            value={block.xMax}
            onChange={(e) => onUpdate({ xMax: Number(e.target.value) })}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">y mín</label>
          <input
            type="number"
            className={inputCls}
            placeholder="auto"
            value={block.yMin ?? ""}
            onChange={(e) =>
              onUpdate({ yMin: e.target.value === "" ? undefined : Number(e.target.value) })
            }
          />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">y máx</label>
          <input
            type="number"
            className={inputCls}
            placeholder="auto"
            value={block.yMax ?? ""}
            onChange={(e) =>
              onUpdate({ yMax: e.target.value === "" ? undefined : Number(e.target.value) })
            }
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Muestras</label>
        <input
          type="number"
          className={inputCls}
          min={10}
          max={2000}
          value={block.samples ?? 400}
          onChange={(e) => onUpdate({ samples: Number(e.target.value) })}
        />
      </div>

      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
        <input
          type="checkbox"
          checked={block.showGrid ?? true}
          onChange={(e) => onUpdate({ showGrid: e.target.checked })}
        />
        Cuadrícula
      </label>
      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
        <input
          type="checkbox"
          checked={block.showLegend ?? true}
          onChange={(e) => onUpdate({ showLegend: e.target.checked })}
        />
        Leyenda
      </label>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="text-xs font-medium text-gray-600">Funciones</label>
          <button
            onClick={addFunction}
            className="text-xs px-1.5 py-0.5 border border-gray-200 bg-white text-gray-700 hover:bg-slate-50 rounded"
          >
            + Agregar
          </button>
        </div>
        <div className="space-y-1 max-h-48 overflow-y-auto">
          {block.functions.map((fn) => (
            <div key={fn.id} className="flex items-center gap-1 text-xs">
              <input
                className="flex-1 border border-slate-200 rounded px-1 py-0.5 focus:outline-none text-xs"
                placeholder="sin(x)"
                value={fn.expression}
                onChange={(e) => updateFunction(fn.id, { expression: e.target.value })}
              />
              <input
                type="color"
                className="h-5 w-6 rounded border border-slate-200 cursor-pointer"
                value={fn.color ?? "#2563eb"}
                onChange={(e) => updateFunction(fn.id, { color: e.target.value })}
              />
              <button
                onClick={() => removeFunction(fn.id)}
                className="text-red-400 hover:text-red-600 px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-100 bg-slate-50 p-2">
        <MathBlockRenderer block={block} />
      </div>
    </div>
  );
}

// ─── Single block renderer for canvas ────────────────────────────────────────

function SingleBlockRenderer({ block, doc }: { block: Block; doc: BlockDocument }) {
  switch (block.type) {
    case "text":
      return <TextBlockRenderer block={block} />;
    case "latex":
      return <LatexBlockRenderer block={block} />;
    case "table":
      return <TableBlockRenderer block={block} />;
    case "chart":
      return <ChartBlockRenderer block={block} doc={doc} />;
    case "flow":
      return <FlowBlockRenderer block={block} />;
    case "math":
      return <MathBlockRenderer block={block} />;
    case "shape":
      return <ShapeBlockRenderer block={block} />;
    default:
      return <div className="text-xs text-gray-400">Bloque desconocido</div>;
  }
}

// ─── Sortable sidebar item ────────────────────────────────────────────────────

function SortableBlockItem({
  block,
  idx,
  isActive,
  onSelect,
}: {
  block: Block;
  idx: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: block.id,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center group/item">
      {/* Drag handle */}
      <span
        {...attributes}
        {...listeners}
        className="pl-1 pr-0.5 text-slate-300 opacity-0 group-hover/item:opacity-100 cursor-grab active:cursor-grabbing select-none text-xs"
        title="Arrastrar para reordenar"
      >
        ⠿
      </span>
      <button
        className={cx(
          "flex-1 text-left px-2 py-2 flex items-center gap-2 border-l-2 transition-colors",
          isActive
            ? "bg-indigo-50 border-l-indigo-500 text-indigo-700"
            : "border-l-transparent hover:bg-slate-50 text-gray-700"
        )}
        onClick={onSelect}
      >
        <span
          className={cx(
            "font-mono text-xs w-4 text-center",
            isActive ? "text-indigo-500" : "text-gray-400"
          )}
        >
          {blockIcon(block.type)}
        </span>
        <span
          className={cx(
            "text-xs w-5 text-right shrink-0",
            isActive ? "text-indigo-400" : "text-gray-400"
          )}
        >
          {idx + 1}
        </span>
        <span className="text-xs truncate flex-1">{blockPreview(block)}</span>
      </button>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function BlockEditorPage({
  initialDocument,
  onDone,
}: {
  initialDocument?: BlockDocument;
  onDone?: (doc: BlockDocument) => void;
} = {}) {
  const { id } = useParams<{ id?: string }>();
  const [searchParams] = useSearchParams();
  const ssKey = searchParams.get("sskey");

  const { state, dispatch, undo, redo, canUndo, canRedo, selectedBlock } = useBlockEditor();
  const { document: doc, title, selectedBlockId, dirty } = state;

  // FSA
  const fsaHandleRef = useRef<FileSystemFileHandle | null>(null);
  const [fsaFileName, setFsaFileName] = useState<string | null>(null);

  // Hidden file input for "Cargar" button
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Add-block dropdown
  const [showAddMenu, setShowAddMenu] = useState(false);
  const addMenuRef = useRef<HTMLDivElement>(null);

  // Inline title editing
  const [editingTitle, setEditingTitle] = useState(false);

  // DnD sensors for sidebar
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;
      const blocks = doc.blocks;
      const from = blocks.findIndex((b) => b.id === active.id);
      const to = blocks.findIndex((b) => b.id === over.id);
      if (from < 0 || to < 0) return;
      dispatch({ type: "MOVE_BLOCK_INDEX", from, to });
    },
    [doc.blocks, dispatch]
  );
  const titleInputRef = useRef<HTMLInputElement>(null);

  // ─── Load on mount ──────────────────────────────────────────────────────────

  useEffect(() => {
    async function load() {
      // Priority 0: initialDocument prop (overlay mode)
      if (initialDocument) {
        dispatch({ type: "LOAD_DOCUMENT", document: initialDocument });
        return;
      }

      // Priority 1: sessionStorage key from ModuloEditor
      if (ssKey) {
        try {
          const raw = sessionStorage.getItem(`block-doc:${ssKey}`);
          if (raw) {
            const parsed = JSON.parse(raw) as { detail?: string; title?: string };
            const detailStr = parsed.detail ?? "";
            let loadedDoc: BlockDocument;
            try {
              const candidate = JSON.parse(detailStr) as unknown;
              loadedDoc = isValidBlockDocument(candidate) ? candidate : createEmptyBlockDocument();
            } catch {
              loadedDoc = createEmptyBlockDocument();
            }
            dispatch({
              type: "LOAD_DOCUMENT",
              document: loadedDoc,
              title: parsed.title ?? "Documento de bloques",
            });
            return;
          }
        } catch {
          // fall through
        }
      }

      // Priority 2: :id route param → fetch from API
      if (id) {
        try {
          const record = await fetchBlockDocument(id);
          dispatch({
            type: "LOAD_DOCUMENT",
            document: record.document,
            title: record.title,
          });
        } catch {
          dispatch({ type: "LOAD_DOCUMENT", document: createEmptyBlockDocument() });
        }
        return;
      }

      // Priority 3: empty document
      dispatch({ type: "LOAD_DOCUMENT", document: createEmptyBlockDocument() });
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Close add menu on outside click ───────────────────────────────────────

  useEffect(() => {
    if (!showAddMenu) return;
    function handler(e: MouseEvent) {
      if (addMenuRef.current && !addMenuRef.current.contains(e.target as Node)) {
        setShowAddMenu(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showAddMenu]);

  // ─── Focus title input when editing ────────────────────────────────────────

  useEffect(() => {
    if (editingTitle) titleInputRef.current?.focus();
  }, [editingTitle]);

  // ─── FSA operations ─────────────────────────────────────────────────────────

  const openLocalFile = useCallback(async () => {
    if (!window.showOpenFilePicker) {
      alert("File System Access API no soportada en este navegador. Usa Chrome/Edge.");
      return;
    }
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [{ description: "JSON", accept: { "application/json": [".json"] } }],
        multiple: false,
      });
      const file = await handle.getFile();
      const text = await file.text();
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        alert("El archivo no es un JSON válido.");
        return;
      }
      if (!isValidBlockDocument(parsed)) {
        alert("El archivo no tiene un formato válido de documento de bloques.");
        return;
      }
      fsaHandleRef.current = handle;
      setFsaFileName(handle.name);
      dispatch({
        type: "LOAD_DOCUMENT",
        document: parsed,
        title: handle.name.replace(/\.json$/i, ""),
      });
    } catch {
      // user cancelled
    }
  }, [dispatch]);

  const saveLocalFile = useCallback(async () => {
    const payload = {
      ...doc,
      _title: title,
    };
    const json = JSON.stringify(payload, null, 2);

    // Try to reuse existing handle
    if (fsaHandleRef.current) {
      try {
        let perm = await fsaHandleRef.current.queryPermission({ mode: "readwrite" });
        if (perm !== "granted") {
          perm = await fsaHandleRef.current.requestPermission({ mode: "readwrite" });
        }
        if (perm === "granted") {
          const writable = await fsaHandleRef.current.createWritable();
          await writable.write(json);
          await writable.close();
          dispatch({ type: "MARK_DIRTY", dirty: false });
          return;
        }
      } catch {
        // fall through to showSaveFilePicker
      }
    }

    if (window.showSaveFilePicker) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: fsaFileName ?? `${title}.json`,
          types: [{ description: "JSON", accept: { "application/json": [".json"] } }],
        });
        const writable = await handle.createWritable();
        await writable.write(json);
        await writable.close();
        fsaHandleRef.current = handle;
        setFsaFileName(handle.name);
        dispatch({ type: "MARK_DIRTY", dirty: false });
        return;
      } catch {
        // user cancelled or not supported
      }
    }

    // Fallback: download
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement("a");
    a.href = url;
    a.download = `${title}.json`;
    a.click();
    URL.revokeObjectURL(url);
    dispatch({ type: "MARK_DIRTY", dirty: false });
  }, [doc, title, fsaFileName, dispatch]);

  const importFile = useCallback(async () => {
    const input = window.document.createElement("input");
    input.type = "file";
    input.accept = "application/json,.json";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const text = await file.text();
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        alert("El archivo no tiene un formato válido de documento de bloques.");
        return;
      }
      if (!isValidBlockDocument(parsed)) {
        alert("El archivo no tiene un formato válido de documento de bloques.");
        return;
      }
      dispatch({
        type: "LOAD_DOCUMENT",
        document: parsed,
        title: file.name.replace(/\.json$/i, ""),
      });
    };
    input.click();
  }, [dispatch]);

  const loadFromFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      let parsed: unknown;
      try {
        parsed = JSON.parse(reader.result as string);
      } catch {
        alert("El archivo no tiene un formato válido de documento de bloques.");
        return;
      }
      if (!isValidBlockDocument(parsed)) {
        alert("El archivo no tiene un formato válido de documento de bloques.");
        return;
      }
      dispatch({
        type: "LOAD_DOCUMENT",
        document: parsed,
        title: file.name.replace(/\.json$/i, ""),
      });
    };
    reader.readAsText(file);
    // Reset so the same file can be re-selected
    e.target.value = "";
  }, [dispatch]);

  const exportFile = useCallback(() => {
    const payload = { ...doc, _title: title };
    const json = JSON.stringify(payload, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement("a");
    a.href = url;
    a.download = `${title}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [doc, title]);

  const handleSaveApi = useCallback(async () => {
    try {
      const res = await saveBlockDocument(doc, title);
      dispatch({ type: "MARK_DIRTY", dirty: false });
      // Write result back to sessionStorage for ModuloEditor
      if (ssKey) {
        sessionStorage.setItem(`block-doc:${ssKey}:result`, res.id);
      }
      alert(`Guardado en servidor. ID: ${res.id}`);
    } catch (e: unknown) {
      alert("Error al guardar: " + String(e));
    }
  }, [doc, title, ssKey, dispatch]);

  // ─── Keyboard shortcuts ──────────────────────────────────────────────────────

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey;
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT";

      if (ctrl && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        undo();
      } else if (ctrl && (e.key === "y" || (e.key === "z" && e.shiftKey))) {
        e.preventDefault();
        redo();
      } else if (ctrl && e.key === "s") {
        e.preventDefault();
        saveLocalFile();
      } else if (e.key === "Escape") {
        dispatch({ type: "SELECT_BLOCK", blockId: null });
      } else if ((e.key === "Delete" || e.key === "Backspace") && !isInput && selectedBlockId) {
        e.preventDefault();
        if (window.confirm("¿Eliminar este bloque?")) {
          dispatch({ type: "DELETE_BLOCK", blockId: selectedBlockId });
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [undo, redo, saveLocalFile, dispatch, selectedBlockId]);

  // ─── Block type update helper ────────────────────────────────────────────────

  const handleBlockUpdate = useCallback(
    (blockId: string, patch: Record<string, unknown>) => {
      dispatch({ type: "UPDATE_BLOCK", blockId, patch });
    },
    [dispatch]
  );

  // ─── Render ──────────────────────────────────────────────────────────────────

  const BLOCK_TYPES: Array<{ type: Block["type"]; label: string; icon?: React.ReactNode }> = [
    { type: "text", label: "Texto" },
    { type: "latex", label: "LaTeX" },
    { type: "table", label: "Tabla" },
    { type: "chart", label: "Gráfico" },
    { type: "flow", label: "Flujo" },
    { type: "math", label: "Función f(x)" },
    { type: "shape", label: "Formas", icon: <Shapes size={14} className="text-indigo-500 flex-shrink-0" /> },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* ═══ HEADER ═══════════════════════════════════════════════════════════ */}
      <header className="flex-shrink-0 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white flex items-center px-3 gap-2 shadow-md z-20">
        {/* Back button (overlay mode) */}
        {onDone && (
          <button
            className="px-2 py-1 text-xs rounded bg-white/15 hover:bg-white/25 text-white"
            onClick={() => onDone(doc)}
            title="Volver"
          >
            ← Volver
          </button>
        )}
        {/* Title */}
        <div className="flex items-center gap-2 min-w-0">
          {editingTitle ? (
            <input
              ref={titleInputRef}
              className="text-sm font-semibold bg-white/20 text-white rounded px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-white/60 max-w-[200px]"
              value={title}
              onChange={(e) => dispatch({ type: "UPDATE_TITLE", title: e.target.value })}
              onBlur={() => setEditingTitle(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "Escape") setEditingTitle(false);
              }}
            />
          ) : (
            <button
              className="text-sm font-semibold truncate max-w-[200px] hover:bg-white/10 rounded px-1"
              onClick={() => setEditingTitle(true)}
              title="Clic para editar título"
            >
              {title || "Sin título"}
            </button>
          )}

          {dirty && (
            <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-amber-50 text-amber-700 ring-1 ring-amber-200">
              Sin guardar
            </span>
          )}
        </div>

        {/* Center: filename */}
        {fsaFileName && (
          <span className="text-xs text-blue-100 truncate max-w-[160px]" title={fsaFileName}>
            {fsaFileName}
          </span>
        )}

        <div className="flex-1" />

        {/* Undo / Redo */}
        <button
          className="px-2 py-1 text-xs rounded bg-white/15 hover:bg-white/25 text-white disabled:opacity-40"
          onClick={undo}
          disabled={!canUndo}
          title="Deshacer (Ctrl+Z)"
        >
          ↩ Deshacer
        </button>
        <button
          className="px-2 py-1 text-xs rounded bg-white/15 hover:bg-white/25 text-white disabled:opacity-40"
          onClick={redo}
          disabled={!canRedo}
          title="Rehacer (Ctrl+Y)"
        >
          ↪ Rehacer
        </button>

        <span className="text-white/30 text-xs">|</span>

        {/* Local file */}
        <button
          className="px-2 py-1 text-xs rounded bg-white/15 hover:bg-white/25 text-white"
          onClick={openLocalFile}
          title="Abrir archivo local"
        >
          Abrir local
        </button>
        <button
          className="px-2 py-1 text-xs rounded bg-white/15 hover:bg-white/25 text-white"
          onClick={saveLocalFile}
          title="Guardar en archivo local (Ctrl+S)"
        >
          Guardar local
        </button>

        <span className="text-white/30 text-xs">|</span>

        {/* Import / Export / API */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          className="hidden"
          onChange={loadFromFile}
        />
        <button
          className="px-2 py-1 text-xs rounded bg-white/15 hover:bg-white/25 text-white"
          onClick={() => fileInputRef.current?.click()}
        >
          Cargar
        </button>
        <button
          className="px-2 py-1 text-xs rounded bg-white/15 hover:bg-white/25 text-white"
          onClick={importFile}
        >
          Importar
        </button>
        <button
          className="px-2 py-1 text-xs rounded bg-white/15 hover:bg-white/25 text-white"
          onClick={exportFile}
        >
          Exportar
        </button>
        <button
          className="px-2 py-1 text-xs rounded bg-emerald-500/80 hover:bg-emerald-500 text-white"
          onClick={onDone ? () => onDone(doc) : handleSaveApi}
        >
          {onDone ? "Guardar" : "Guardar API"}
        </button>
      </header>

      {/* ═══ BODY ═════════════════════════════════════════════════════════════ */}
      <div className="flex flex-1 overflow-hidden">
        {/* ─── LEFT SIDEBAR ──────────────────────────────────────────────── */}
        <aside className="w-56 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col overflow-hidden">
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Bloques
            </span>

            {/* Add block button */}
            <div className="relative" ref={addMenuRef}>
              <button
                className="w-6 h-6 flex items-center justify-center rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold leading-none"
                onClick={() => setShowAddMenu((v) => !v)}
                title="Agregar bloque"
              >
                +
              </button>
              {showAddMenu && (
                <div className="absolute top-7 right-0 z-30 w-36 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                  {BLOCK_TYPES.map(({ type, label, icon }) => (
                    <button
                      key={type}
                      className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-slate-50 flex items-center gap-2"
                      onClick={() => {
                        dispatch({ type: "ADD_BLOCK", blockType: type });
                        setShowAddMenu(false);
                      }}
                    >
                      {icon ?? (type === "math" ? (
                        <FunctionSquare size={14} className="text-indigo-500 flex-shrink-0" />
                      ) : (
                        <span className="font-mono text-indigo-500 w-4 text-center">
                          {blockIcon(type)}
                        </span>
                      ))}
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Block list */}
          <div className="flex-1 overflow-y-auto">
            {doc.blocks.length === 0 ? (
              <p className="text-xs text-gray-400 italic px-3 py-4 text-center">
                Sin bloques
              </p>
            ) : (
              <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                <SortableContext
                  items={doc.blocks.map((b) => b.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {doc.blocks.map((block, idx) => (
                    <SortableBlockItem
                      key={block.id}
                      block={block}
                      idx={idx}
                      isActive={block.id === selectedBlockId}
                      onSelect={() =>
                        dispatch({
                          type: "SELECT_BLOCK",
                          blockId: block.id === selectedBlockId ? null : block.id,
                        })
                      }
                    />
                  ))}
                </SortableContext>
              </DndContext>
            )}
          </div>
        </aside>

        {/* ─── CANVAS ────────────────────────────────────────────────────── */}
        <main
          className="flex-1 bg-slate-100 overflow-y-auto"
          onClick={() => dispatch({ type: "SELECT_BLOCK", blockId: null })}
        >
          <div className="px-8 py-6 max-w-3xl mx-auto">
            {doc.blocks.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 gap-3">
                <span className="text-4xl text-slate-300">⬡</span>
                <p className="text-sm text-slate-400">
                  Sin bloques — agregá uno desde el panel izquierdo
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {doc.blocks.map((block, idx) => {
                  const isSelected = block.id === selectedBlockId;
                  return (
                    <div key={block.id} className="relative group">
                      {/* Floating toolbar */}
                      {isSelected && (
                        <div className="absolute -top-8 left-0 z-10 flex items-center gap-1 bg-white border border-gray-200 rounded-lg shadow-sm px-2 py-1">
                          <span className="font-mono text-xs text-slate-400 mr-1">
                            {blockTypeName(block.type)}
                          </span>
                          <button
                            className={cx(
                              "w-6 h-6 text-xs rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-30"
                            )}
                            title="Mover arriba"
                            disabled={idx === 0}
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch({
                                type: "MOVE_BLOCK",
                                blockId: block.id,
                                direction: "up",
                              });
                            }}
                          >
                            ▲
                          </button>
                          <button
                            className="w-6 h-6 text-xs rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-30"
                            title="Mover abajo"
                            disabled={idx === doc.blocks.length - 1}
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch({
                                type: "MOVE_BLOCK",
                                blockId: block.id,
                                direction: "down",
                              });
                            }}
                          >
                            ▼
                          </button>
                          <button
                            className="w-6 h-6 text-xs rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                            title="Duplicar"
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch({ type: "DUPLICATE_BLOCK", blockId: block.id });
                            }}
                          >
                            ⊕
                          </button>
                          <button
                            className="w-6 h-6 text-xs rounded border border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                            title="Eliminar"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (window.confirm("¿Eliminar este bloque?")) {
                                dispatch({ type: "DELETE_BLOCK", blockId: block.id });
                              }
                            }}
                          >
                            ✕
                          </button>
                        </div>
                      )}

                      {/* Block card */}
                      <div
                        className={cx(
                          "rounded-lg border border-gray-200 bg-white shadow-sm p-4 cursor-pointer transition-all",
                          isSelected ? "ring-2 ring-indigo-400" : "hover:shadow-md"
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch({
                            type: "SELECT_BLOCK",
                            blockId: isSelected ? null : block.id,
                          });
                        }}
                      >
                        <SingleBlockRenderer block={block} doc={doc} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </main>

        {/* ─── RIGHT INSPECTOR ────────────────────────────────────────────── */}
        <aside className="w-72 flex-shrink-0 bg-white border-l border-slate-200 flex flex-col overflow-hidden">
          {/* Inspector header */}
          <div className="px-3 py-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Inspector
            </span>
          </div>

          <div className="flex-1 overflow-y-auto">
            {selectedBlock ? (
              /* ── Block selected: show block editor ── */
              <InspectorCard title={blockTypeName(selectedBlock.type)}>
                {selectedBlock.type === "text" && (
                  <TextInspector
                    block={selectedBlock as TextBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "latex" && (
                  <LatexInspector
                    block={selectedBlock as LatexBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "table" && (
                  <TableInspector
                    block={selectedBlock as TableBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "chart" && (
                  <ChartInspector
                    block={selectedBlock as ChartBlock}
                    doc={doc}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "flow" && (
                  <FlowInspector
                    block={selectedBlock as FlowBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "math" && (
                  <MathInspector
                    block={selectedBlock as MathBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "shape" && (
                  <ShapeBlockEditor
                    block={selectedBlock as ShapeBlock}
                    onChange={(updated) =>
                      dispatch({
                        type: "UPDATE_BLOCK",
                        blockId: selectedBlock.id,
                        patch: updated as unknown as Record<string, unknown>,
                      })
                    }
                  />
                )}
              </InspectorCard>
            ) : (
              /* ── No block selected: show document info + hint ── */
              <>
                <InspectorCard title="Documento">
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">Título</label>
                    <input
                      className={inputCls}
                      value={title}
                      onChange={(e) => dispatch({ type: "UPDATE_TITLE", title: e.target.value })}
                    />
                  </div>
                </InspectorCard>
                <p className="text-xs text-slate-400 italic px-3 pt-4">
                  Hacé clic en un bloque para editarlo
                </p>
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
