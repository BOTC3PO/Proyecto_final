import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

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
import {
  TextBlockEditor,
  LatexBlockEditor,
  InlineLatexEditor,
  TableBlockEditor,
  InlineTableEditor,
  ChartBlockEditor,
  InlineChartTypeToolbar,
  FlowBlockEditor,
  MathBlockEditor,
  ShapeBlockEditor,
} from "../editors";
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


function CanvasBlockContent({
  block,
  doc,
  isSelected,
  onUpdate,
}: {
  block: Block;
  doc: BlockDocument;
  isSelected: boolean;
  onUpdate: (patch: Record<string, unknown>) => void;
}) {
  if (isSelected) {
    switch (block.type) {
      case "text":
        return (
          <div className="p-4">
            <textarea
              className="w-full text-base leading-relaxed font-normal resize-none focus:outline-none bg-transparent border-none p-0"
              style={{ fontFamily: "inherit", minHeight: "3em" }}
              rows={Math.max(3, (block as TextBlock).content.split("\n").length + 1)}
              value={(block as TextBlock).content}
              onChange={(e) => {
                e.stopPropagation();
                onUpdate({ content: e.target.value });
              }}
              onClick={(e) => e.stopPropagation()}
              placeholder="Escribí tu texto aquí..."
              autoFocus
            />
          </div>
        );
      case "latex":
        return (
          <div className="p-4">
            <InlineLatexEditor block={block as LatexBlock} onUpdate={onUpdate} />
          </div>
        );
      case "chart":
        return (
          <div>
            <InlineChartTypeToolbar
              chartType={(block as ChartBlock).chartType}
              onUpdate={onUpdate}
            />
            <div className="p-4">
              <ChartBlockRenderer block={block as ChartBlock} doc={doc} />
            </div>
          </div>
        );
      case "table":
        return <InlineTableEditor block={block as TableBlock} onUpdate={onUpdate} />;
    }
  }
  return (
    <div className="p-4">
      <SingleBlockRenderer block={block} doc={doc} />
    </div>
  );
}

// ─── Block type menu list ─────────────────────────────────────────────────────

const BLOCK_TYPES_MENU = [
  { type: "text" as Block["type"], label: "Texto", icon: "¶" },
  { type: "latex" as Block["type"], label: "LaTeX", icon: "∑" },
  { type: "table" as Block["type"], label: "Tabla", icon: "⊞" },
  { type: "chart" as Block["type"], label: "Gráfico", icon: "▦" },
  { type: "flow" as Block["type"], label: "Flujo", icon: "⬡" },
  { type: "math" as Block["type"], label: "Función f(x)", icon: "f" },
  { type: "shape" as Block["type"], label: "Formas", icon: "◈" },
];

function AddBlockBetween({ onAdd }: { onAdd: (type: Block["type"]) => void }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showMenu) return;
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showMenu]);

  return (
    <div className="relative flex justify-center h-7 items-center group/add z-10">
      <div className="absolute inset-x-0 h-px bg-transparent group-hover/add:bg-indigo-200 transition-colors top-1/2" />
      <div className="relative" ref={menuRef}>
        <button
          className="w-6 h-6 rounded-full bg-white border-2 border-indigo-300 text-indigo-500 text-sm font-bold leading-none opacity-0 group-hover/add:opacity-100 hover:bg-indigo-500 hover:text-white transition-all shadow-sm flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu((v) => !v);
          }}
          title="Agregar bloque aquí"
        >
          +
        </button>
        {showMenu && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-44">
            {BLOCK_TYPES_MENU.map(({ type, label, icon }) => (
              <button
                key={type}
                className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-slate-50 flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd(type);
                  setShowMenu(false);
                }}
              >
                <span className="font-mono text-indigo-500 w-4 text-center">{icon}</span>
                {label}
              </button>
            ))}
          </div>
        )}
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
        dispatch({ type: "DELETE_BLOCK", blockId: selectedBlockId });
      } else if (e.key === "ArrowUp" && !isInput && selectedBlockId) {
        e.preventDefault();
        const idx = doc.blocks.findIndex((b) => b.id === selectedBlockId);
        if (idx > 0) dispatch({ type: "SELECT_BLOCK", blockId: doc.blocks[idx - 1].id });
      } else if (e.key === "ArrowDown" && !isInput && selectedBlockId) {
        e.preventDefault();
        const idx = doc.blocks.findIndex((b) => b.id === selectedBlockId);
        if (idx >= 0 && idx < doc.blocks.length - 1) {
          dispatch({ type: "SELECT_BLOCK", blockId: doc.blocks[idx + 1].id });
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [undo, redo, saveLocalFile, dispatch, selectedBlockId, doc]);

  // ─── Block type update helper ────────────────────────────────────────────────

  const handleBlockUpdate = useCallback(
    (blockId: string, patch: Record<string, unknown>) => {
      dispatch({ type: "UPDATE_BLOCK", blockId, patch });
    },
    [dispatch]
  );

  // ─── Add block at specific position ──────────────────────────────────────────
  // afterIdx = -1 means "before the first block"; afterIdx = i means "after block at index i"

  const addBlockAt = useCallback(
    (type: Block["type"], afterIdx: number) => {
      const fromIdx = doc.blocks.length; // new block will be appended at this index
      dispatch({ type: "ADD_BLOCK", blockType: type });
      const toIdx = afterIdx + 1; // desired final index
      if (toIdx < fromIdx) {
        dispatch({ type: "MOVE_BLOCK_INDEX", from: fromIdx, to: toIdx });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [doc.blocks.length, dispatch]
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
              <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
                <span className="text-5xl text-slate-300">⊕</span>
                <p className="text-base font-medium text-slate-500">
                  Hacé clic en + para agregar tu primer bloque
                </p>
                <p className="text-sm text-slate-400">
                  Usá el botón + del panel izquierdo para comenzar
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                {/* + button before first block */}
                <AddBlockBetween onAdd={(type) => addBlockAt(type, -1)} />
                {doc.blocks.map((block, idx) => {
                  const isSelected = block.id === selectedBlockId;
                  return (
                    <React.Fragment key={block.id}>
                      <div className="relative group/block mb-0">
                        {/* Block type badge – top-right corner */}
                        {isSelected && (
                          <span className="absolute top-2 right-2 z-10 text-[10px] bg-slate-100 text-slate-400 rounded px-1 pointer-events-none select-none">
                            {blockTypeName(block.type)}
                          </span>
                        )}

                        {/* Floating toolbar – always visible when block is selected */}
                        {isSelected && (
                          <div className="absolute -top-8 left-0 z-10 flex items-center gap-1 bg-white border border-gray-200 rounded-lg shadow-sm px-2 py-1">
                            <button
                              className="w-6 h-6 text-xs rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-30"
                              title="Mover arriba (↑)"
                              disabled={idx === 0}
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "MOVE_BLOCK", blockId: block.id, direction: "up" });
                              }}
                            >
                              ▲
                            </button>
                            <button
                              className="w-6 h-6 text-xs rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-30"
                              title="Mover abajo (↓)"
                              disabled={idx === doc.blocks.length - 1}
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "MOVE_BLOCK", blockId: block.id, direction: "down" });
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
                              title="Eliminar (Delete)"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "DELETE_BLOCK", blockId: block.id });
                              }}
                            >
                              ✕
                            </button>
                          </div>
                        )}

                        {/* Block card */}
                        <div
                          className={cx(
                            "rounded-lg border bg-white transition-all overflow-hidden",
                            isSelected
                              ? "ring-2 ring-indigo-500 shadow-lg border-indigo-200"
                              : "border-gray-200 shadow-sm hover:shadow-md cursor-pointer"
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch({
                              type: "SELECT_BLOCK",
                              blockId: isSelected ? null : block.id,
                            });
                          }}
                        >
                          <CanvasBlockContent
                            block={block}
                            doc={doc}
                            isSelected={isSelected}
                            onUpdate={(patch) => handleBlockUpdate(block.id, patch)}
                          />
                        </div>
                      </div>
                      {/* + button after this block */}
                      <AddBlockBetween onAdd={(type) => addBlockAt(type, idx)} />
                    </React.Fragment>
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
                  <TextBlockEditor
                    block={selectedBlock as TextBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "latex" && (
                  <LatexBlockEditor
                    block={selectedBlock as LatexBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "table" && (
                  <TableBlockEditor
                    block={selectedBlock as TableBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "chart" && (
                  <ChartBlockEditor
                    block={selectedBlock as ChartBlock}
                    doc={doc}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "flow" && (
                  <FlowBlockEditor
                    block={selectedBlock as FlowBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "math" && (
                  <MathBlockEditor
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
