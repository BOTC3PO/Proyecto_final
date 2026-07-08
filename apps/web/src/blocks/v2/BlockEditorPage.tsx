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
  ImageBlock,
  LatexBlock,
  MathBlock,
  ShapeBlock,
  TableBlock,
  TextBlock,
  AudioBlock,
  VideoBlock,
  PdfBlock,
  LinkBlock,
  FormulaBlock,
} from "../types";
import { createEmptyBlockDocument } from "../utils";
import { TextBlockRenderer } from "../renderers/TextBlockRenderer";
import { LatexBlockRenderer } from "../renderers/LatexBlockRenderer";
import { TableBlockRenderer } from "../renderers/TableBlockRenderer";
import { ChartBlockRenderer } from "../renderers/ChartBlockRenderer";
import { FlowBlockRenderer } from "../renderers/FlowBlockRenderer";
import { MathBlockRenderer } from "../renderers/MathBlockRenderer";
import { ShapeBlockRenderer } from "../renderers/ShapeBlockRenderer";
import { AudioBlockRenderer } from "../renderers/AudioBlockRenderer";
import { VideoBlockRenderer } from "../renderers/VideoBlockRenderer";
import { PdfBlockRenderer } from "../renderers/PdfBlockRenderer";
import { LinkBlockRenderer } from "../renderers/LinkBlockRenderer";
import { FormulaBlockRenderer } from "../renderers/FormulaBlockRenderer";
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
  AudioBlockEditor,
  VideoBlockEditor,
  PdfBlockEditor,
  LinkBlockEditor,
  FormulaBlockEditor,
} from "../editors";
import { FunctionSquare, Shapes } from "lucide-react";

import { useBlockEditor } from "./state/useBlockEditor";
import { fetchBlockDocument, saveBlockDocument } from "./services/blocksApi";
import { Button, Pill, Input, Select } from "../../components/ui";
import { GuardarComoMaterial } from "../../components/materiales/GuardarComoMaterial";
import { apiGet } from "../../lib/api";

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
    case "image":
      return "🖼";
    case "audio":
      return "🔊";
    case "video":
      return "▶";
    case "pdf":
      return "📄";
    case "link":
      return "🔗";
    case "formula":
      return "∫";
    default:
      return "·";
  }
}

/** "hace Ns" / "hace Nmin" para el indicador de guardado del header. */
function formatElapsed(sinceMs: number): string {
  const s = Math.max(0, Math.floor((Date.now() - sinceMs) / 1000));
  if (s < 60) return `hace ${s} s`;
  const m = Math.floor(s / 60);
  return `hace ${m} min`;
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
    case "image":
      return "Imagen";
    case "audio":
      return "Audio";
    case "video":
      return "Video";
    case "pdf":
      return "PDF";
    case "link":
      return "Enlace";
    case "formula":
      return "Fórmula";
    default:
      return type;
  }
}

/** Descripción corta para la tarjeta de la paleta de bloques (PLAN-O). */
function blockSublabel(type: Block["type"]): string {
  switch (type) {
    case "text":
      return "Párrafo rico";
    case "latex":
      return "Ecuación";
    case "table":
      return "Datos";
    case "chart":
      return "Barras · línea";
    case "flow":
      return "Diagrama";
    case "math":
      return "Plot";
    case "shape":
      return "Geometría editable";
    case "image":
      return "URL o archivo";
    case "audio":
      return "Clip de audio";
    case "video":
      return "Video embebido";
    case "pdf":
      return "Documento PDF";
    case "link":
      return "Enlace externo";
    case "formula":
      return "Con variables";
    default:
      return "";
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
    case "image":
      return (block as ImageBlock).alt?.slice(0, 30) || "(sin descripción)";
    case "audio":
      return (block as AudioBlock).alt?.slice(0, 30) || "(sin descripción)";
    case "video":
      return (block as VideoBlock).alt?.slice(0, 30) || (block as VideoBlock).url.slice(0, 30) || "(sin descripción)";
    case "pdf":
      return (block as PdfBlock).title?.slice(0, 30) || (block as PdfBlock).url.slice(0, 30) || "(sin título)";
    case "link":
      return (block as LinkBlock).title?.slice(0, 30) || (block as LinkBlock).url.slice(0, 30) || "(sin título)";
    case "formula":
      return ((block as FormulaBlock).title?.slice(0, 30)) || (block as FormulaBlock).content.slice(0, 30) || "(vacío)";
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
    <div className="border-b border-[var(--c-border)]">
      <button
        type="button"
        aria-expanded={open}
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide hover:bg-[var(--c-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
        onClick={() => setOpen((o) => !o)}
      >
        {title}
        <span className="text-[var(--c-muted)]" aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="px-3 pb-3 pt-1 space-y-2">{children}</div>}
    </div>
  );
}

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--c-primary)]";

// PLAN-O — atajos de una letra para agregar un bloque (sólo si no hay foco
// en un input/textarea/select). Mismo mapeo que la barra de estado muestra.
const QUICK_ADD_KEYS: Record<string, Block["type"]> = {
  b: "text",
  f: "math",
  g: "chart",
  l: "latex",
  t: "table",
};

const fileMenuItemCls =
  "w-full text-left px-3 py-1.5 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--c-focus-ring)]";


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
              aria-label="Contenido del bloque de texto"
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
      case "image": {
        const imgBlock = block as ImageBlock;
        return (
          <div className="p-4 space-y-3">
            <Input
              type="url"
              label="URL de la imagen"
              placeholder="https://... o pegá una URL"
              value={imgBlock.url}
              onChange={(e) => onUpdate({ url: e.target.value })}
              onClick={(e) => e.stopPropagation()}
            />
            <Input
              type="text"
              label="Descripción para accesibilidad"
              required
              hint="Este texto también se lee en voz alta al usar TTS."
              placeholder="Describí la imagen para alumnos con discapacidad visual"
              value={imgBlock.alt}
              onChange={(e) => onUpdate({ alt: e.target.value })}
              onClick={(e) => e.stopPropagation()}
            />
            <Input
              type="text"
              label="Pie de foto"
              hint="Opcional"
              placeholder="Texto visible debajo de la imagen"
              value={imgBlock.caption ?? ""}
              onChange={(e) => onUpdate({ caption: e.target.value })}
              onClick={(e) => e.stopPropagation()}
            />
            <Select
              label="Tamaño"
              value={imgBlock.width ?? "medium"}
              onChange={(e) => onUpdate({ width: e.target.value })}
              onClick={(e) => e.stopPropagation()}
            >
              <option value="small">Pequeño (33%)</option>
              <option value="medium">Mediano (66%)</option>
              <option value="full">Completo (100%)</option>
            </Select>
            {imgBlock.url && (
              <div className="rounded-lg overflow-hidden border border-[var(--c-border)]">
                <img
                  src={imgBlock.url}
                  alt={imgBlock.alt || "Preview"}
                  className="max-h-48 object-contain w-full"
                />
              </div>
            )}
          </div>
        );
      }
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
  { type: "image" as Block["type"], label: "Imagen", icon: "🖼" },
  { type: "audio" as Block["type"], label: "Audio", icon: "🔊" },
  { type: "video" as Block["type"], label: "Video", icon: "▶" },
  { type: "pdf" as Block["type"], label: "PDF", icon: "📄" },
  { type: "link" as Block["type"], label: "Enlace", icon: "🔗" },
  { type: "formula" as Block["type"], label: "Fórmula", icon: "∫" },
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
      <div className="absolute inset-x-0 h-px bg-transparent group-hover/add:bg-[var(--c-primary)] transition-colors top-1/2 opacity-30" />
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          aria-label="Agregar bloque aquí"
          aria-haspopup="menu"
          aria-expanded={showMenu}
          className="w-6 h-6 rounded-full bg-[var(--c-surface)] border-2 border-[var(--c-primary)] text-[var(--c-primary)] text-sm font-bold leading-none opacity-0 group-hover/add:opacity-100 hover:bg-[var(--c-primary)] hover:text-white transition-all motion-reduce:transition-none flex items-center justify-center focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu((v) => !v);
          }}
          title="Agregar bloque aquí"
        >
          +
        </button>
        {showMenu && (
          <div
            role="menu"
            aria-label="Tipo de bloque a agregar"
            className="absolute top-8 left-1/2 -translate-x-1/2 z-40 bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl py-1 w-44"
          >
            {BLOCK_TYPES_MENU.map(({ type, label, icon }) => (
              <button
                key={type}
                type="button"
                role="menuitem"
                className="w-full text-left px-3 py-1.5 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)] flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--c-focus-ring)]"
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd(type);
                  setShowMenu(false);
                }}
              >
                <span className="font-mono text-[var(--c-primary)] w-4 text-center" aria-hidden="true">{icon}</span>
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
    case "image": {
      const imgBlock = block as ImageBlock;
      const widthClass =
        imgBlock.width === "small" ? "w-1/3"
        : imgBlock.width === "full" ? "w-full"
        : "w-2/3";
      return (
        <figure className="my-2">
          {imgBlock.url ? (
            <img
              src={imgBlock.url}
              alt={imgBlock.alt || ""}
              className={`${widthClass} rounded-lg object-contain max-h-96 mx-auto block`}
            />
          ) : (
            <div className="flex items-center justify-center h-32 rounded-lg bg-[var(--c-bg)] border-2 border-dashed border-[var(--c-border)]">
              <span className="text-[var(--c-muted)] text-sm">
                🖼 Sin imagen
              </span>
            </div>
          )}
          {imgBlock.caption && (
            <figcaption className="text-center text-xs text-[var(--c-muted)] mt-2 italic">
              {imgBlock.caption}
            </figcaption>
          )}
        </figure>
      );
    }
    case "audio":
      return <AudioBlockRenderer block={block} />;
    case "video":
      return <VideoBlockRenderer block={block} />;
    case "pdf":
      return <PdfBlockRenderer block={block} />;
    case "link":
      return <LinkBlockRenderer block={block} />;
    case "formula":
      return <FormulaBlockRenderer block={block} />;
    default:
      return <div className="text-xs text-[var(--c-muted)]">Bloque desconocido</div>;
  }
}

// ─── Sortable sidebar item ────────────────────────────────────────────────────

function SortableBlockItem({
  block,
  idx,
  total,
  isActive,
  onSelect,
  onMoveUp,
  onMoveDown,
}: {
  block: Block;
  idx: number;
  total: number;
  isActive: boolean;
  onSelect: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: block.id,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const preview = blockPreview(block);
  const blockName = `${blockTypeName(block.type)} ${idx + 1}: ${preview}`;

  return (
    <div ref={setNodeRef} style={style} className="flex items-center group/item" role="listitem">
      {/* Drag handle — apuntador. El reordenado por teclado va por los botones ↑/↓. */}
      <span
        {...attributes}
        {...listeners}
        aria-label={`Arrastrar para reordenar: ${blockName}`}
        className="pl-1 pr-0.5 text-slate-300 opacity-0 group-hover/item:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded cursor-grab active:cursor-grabbing select-none text-xs"
        title="Arrastrar para reordenar"
      >
        ⠿
      </span>
      <button
        type="button"
        aria-pressed={isActive}
        className={cx(
          "flex-1 text-left px-2 py-2 flex items-center gap-2 border-l-2 transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--c-focus-ring)]",
          isActive
            ? "bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] border-l-[var(--c-primary)] text-[var(--c-primary)]"
            : "border-l-transparent hover:bg-[var(--c-bg)] text-[var(--c-text)]"
        )}
        onClick={onSelect}
      >
        <span
          className={cx(
            "font-mono text-xs w-4 text-center",
            isActive ? "text-[var(--c-primary)]" : "text-[var(--c-muted)]"
          )}
          aria-hidden="true"
        >
          {blockIcon(block.type)}
        </span>
        <span
          className={cx(
            "text-xs w-5 text-right shrink-0",
            isActive ? "text-[var(--c-primary)]" : "text-[var(--c-muted)]"
          )}
          aria-hidden="true"
        >
          {idx + 1}
        </span>
        <span className="text-xs truncate flex-1">{preview}</span>
      </button>
      {/* Reordenado accesible por teclado (no depende del drag-and-drop). */}
      <div className="flex flex-col opacity-0 group-hover/item:opacity-100 focus-within:opacity-100">
        <Button
          variant="icon"
          size="sm"
          className="h-4 w-5 text-xs"
          title="Mover arriba"
          aria-label={`Mover arriba: ${blockName}`}
          disabled={idx === 0}
          onClick={(e) => {
            e.stopPropagation();
            onMoveUp();
          }}
        >
          ↑
        </Button>
        <Button
          variant="icon"
          size="sm"
          className="h-4 w-5 text-xs"
          title="Mover abajo"
          aria-label={`Mover abajo: ${blockName}`}
          disabled={idx === total - 1}
          onClick={(e) => {
            e.stopPropagation();
            onMoveDown();
          }}
        >
          ↓
        </Button>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function BlockEditorPage({
  initialDocument,
  onDone,
  materialId: materialIdProp,
}: {
  initialDocument?: BlockDocument;
  onDone?: (doc: BlockDocument) => void;
  // PLAN-G §1 (item 25) — si el documento se abrió desde un material
  // guardado, permite que "Guardar como material" cree una versión
  // nueva en vez de un material nuevo. En modo standalone también se
  // puede recibir por query param (?materialId=), ver más abajo.
  materialId?: string | null;
} = {}) {
  const { id } = useParams<{ id?: string }>();
  const [searchParams] = useSearchParams();
  const ssKey = searchParams.get("sskey");
  const materialIdParam = searchParams.get("materialId");
  const materialId = materialIdProp ?? materialIdParam;

  const { state, dispatch, undo, redo, canUndo, canRedo, selectedBlock } = useBlockEditor();
  const { document: doc, title, selectedBlockId, dirty } = state;

  // FSA
  const fsaHandleRef = useRef<FileSystemFileHandle | null>(null);
  const [fsaFileName, setFsaFileName] = useState<string | null>(null);

  // Hidden file input for "Cargar" button
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File actions overflow (Abrir/Guardar local, Cargar, Importar, Exportar)
  const [showFileMenu, setShowFileMenu] = useState(false);
  const fileMenuRef = useRef<HTMLDivElement>(null);

  // Inline title editing
  const [editingTitle, setEditingTitle] = useState(false);

  // PLAN-O — vista de lienzo escritorio/móvil (mismo patrón que BookEditorPage).
  const [desktopView, setDesktopView] = useState(true);

  // PLAN-O — "Guardado hace Ns": se marca cada vez que `dirty` pasa de true a
  // false (cualquier vía: API, archivo local, o volver desde el overlay).
  const [lastSavedAt, setLastSavedAt] = useState<number | null>(null);
  const wasDirtyRef = useRef(dirty);
  useEffect(() => {
    if (wasDirtyRef.current && !dirty) setLastSavedAt(Date.now());
    wasDirtyRef.current = dirty;
  }, [dirty]);
  const [, forceSavedTick] = useState(0);
  useEffect(() => {
    if (lastSavedAt == null) return;
    const id = setInterval(() => forceSavedTick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, [lastSavedAt]);

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

      // Priority 1.5 (PLAN-G §1, item 25): ?materialId= → fetch material
      // guardado (contenido ya parseado por el back).
      if (materialIdParam) {
        try {
          const material = await apiGet<{ version: { contenido: BlockDocument } }>(
            `/api/materiales/guardados/${materialIdParam}`,
          );
          const candidate = material.version.contenido as unknown;
          dispatch({
            type: "LOAD_DOCUMENT",
            document: isValidBlockDocument(candidate) ? candidate : createEmptyBlockDocument(),
          });
        } catch {
          dispatch({ type: "LOAD_DOCUMENT", document: createEmptyBlockDocument() });
        }
        return;
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

  // ─── Close file menu on outside click ──────────────────────────────────────

  useEffect(() => {
    if (!showFileMenu) return;
    function handler(e: MouseEvent) {
      if (fileMenuRef.current && !fileMenuRef.current.contains(e.target as Node)) {
        setShowFileMenu(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showFileMenu]);

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
      } else if (!ctrl && !isInput && QUICK_ADD_KEYS[e.key.toLowerCase()]) {
        e.preventDefault();
        dispatch({ type: "ADD_BLOCK", blockType: QUICK_ADD_KEYS[e.key.toLowerCase()] });
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
    { type: "image", label: "Imagen" },
    { type: "audio", label: "Audio" },
    { type: "video", label: "Video" },
    { type: "pdf", label: "PDF" },
    { type: "link", label: "Enlace" },
    { type: "formula", label: "Fórmula" },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[var(--c-bg)]">
      {/* ═══ HEADER ═══════════════════════════════════════════════════════════ */}
      <header className="flex-shrink-0 h-12 bg-[var(--c-surface)] border-b border-[var(--c-border)] flex items-center px-3 gap-2 z-20">
        {/* Back button (overlay mode) */}
        {onDone && (
          <Button variant="ghost" size="sm" onClick={() => onDone(doc)} title="Volver">
            ← Volver
          </Button>
        )}

        {/* Doc identity: ícono + eyebrow + título editable */}
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="w-8 h-8 rounded-lg bg-[var(--c-bg)] flex items-center justify-center text-[var(--c-text)] flex-shrink-0"
            aria-hidden="true"
          >
            <Shapes size={16} />
          </span>
          <div className="min-w-0 leading-tight">
            <div className="text-[10px] font-bold uppercase tracking-wide text-[var(--c-muted)]">
              Motor gráfico
            </div>
            {editingTitle ? (
              <input
                ref={titleInputRef}
                aria-label="Título del documento"
                className="text-sm font-semibold bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1 -mx-1 border border-[var(--c-border)] focus:outline-none focus:border-[var(--c-primary)] max-w-[200px]"
                value={title}
                onChange={(e) => dispatch({ type: "UPDATE_TITLE", title: e.target.value })}
                onBlur={() => setEditingTitle(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Escape") setEditingTitle(false);
                }}
              />
            ) : (
              <button
                type="button"
                className="text-sm font-semibold text-[var(--c-text)] truncate max-w-[200px] rounded px-1 -mx-1 hover:bg-[var(--c-bg)] block text-left"
                onClick={() => setEditingTitle(true)}
                title="Clic para editar título"
              >
                {title || "Sin título"}
              </button>
            )}
          </div>
          {dirty ? (
            <Pill tone="warn">Sin guardar</Pill>
          ) : (
            lastSavedAt != null && <Pill tone="ok">Guardado · {formatElapsed(lastSavedAt)}</Pill>
          )}
        </div>

        {/* Center: filename */}
        {fsaFileName && (
          <span className="text-xs text-[var(--c-muted)] truncate max-w-[160px]" title={fsaFileName}>
            {fsaFileName}
          </span>
        )}

        <div className="flex-1" />

        {/* Escritorio / Móvil */}
        <div
          role="group"
          aria-label="Vista del lienzo"
          className="inline-flex items-center gap-0.5 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-lg p-0.5"
        >
          <button
            type="button"
            aria-pressed={desktopView}
            onClick={() => setDesktopView(true)}
            className={cx(
              "px-2 py-1 rounded-md text-xs font-medium",
              desktopView ? "bg-[var(--c-surface)] text-[var(--c-text)] shadow-sm" : "text-[var(--c-muted)]"
            )}
          >
            Escritorio
          </button>
          <button
            type="button"
            aria-pressed={!desktopView}
            onClick={() => setDesktopView(false)}
            className={cx(
              "px-2 py-1 rounded-md text-xs font-medium",
              !desktopView ? "bg-[var(--c-surface)] text-[var(--c-text)] shadow-sm" : "text-[var(--c-muted)]"
            )}
          >
            Móvil
          </button>
        </div>

        {/* Undo / Redo */}
        <Button variant="ghost" size="sm" onClick={undo} disabled={!canUndo} title="Deshacer (Ctrl+Z)">
          ↩ Deshacer
        </Button>
        <Button variant="ghost" size="sm" onClick={redo} disabled={!canRedo} title="Rehacer (Ctrl+Y)">
          ↪ Rehacer
        </Button>

        {/* Archivo: abrir/guardar local, cargar, importar, exportar (PLAN-O: colapsado a un menú) */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          className="hidden"
          onChange={loadFromFile}
        />
        <div className="relative" ref={fileMenuRef}>
          <Button
            variant="ghost"
            size="sm"
            aria-haspopup="menu"
            aria-expanded={showFileMenu}
            aria-label="Archivo: abrir, guardar, cargar, importar o exportar"
            title="Archivo"
            onClick={() => setShowFileMenu((v) => !v)}
          >
            ⋯
          </Button>
          {showFileMenu && (
            <div
              role="menu"
              aria-label="Acciones de archivo"
              className="absolute top-8 right-0 z-30 w-44 bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl py-1 shadow-lg"
            >
              <button type="button" role="menuitem" className={fileMenuItemCls} onClick={() => { setShowFileMenu(false); openLocalFile(); }}>
                Abrir local
              </button>
              <button type="button" role="menuitem" className={fileMenuItemCls} title="Ctrl+S" onClick={() => { setShowFileMenu(false); saveLocalFile(); }}>
                Guardar local
              </button>
              <div className="my-1 border-t border-[var(--c-border)]" aria-hidden="true" />
              <button type="button" role="menuitem" className={fileMenuItemCls} onClick={() => { setShowFileMenu(false); fileInputRef.current?.click(); }}>
                Cargar
              </button>
              <button type="button" role="menuitem" className={fileMenuItemCls} onClick={() => { setShowFileMenu(false); importFile(); }}>
                Importar
              </button>
              <button type="button" role="menuitem" className={fileMenuItemCls} onClick={() => { setShowFileMenu(false); exportFile(); }}>
                Exportar
              </button>
            </div>
          )}
        </div>

        <GuardarComoMaterial
          tipo="interactivo"
          defaultTitulo={title}
          materialId={materialId}
          getContenido={() => doc}
        />
        <Button variant="primary" size="sm" onClick={onDone ? () => onDone(doc) : handleSaveApi}>
          Guardar
        </Button>
      </header>

      {/* ═══ BODY ═════════════════════════════════════════════════════════════ */}
      <div className="flex flex-1 overflow-hidden">
        {/* ─── LEFT SIDEBAR ──────────────────────────────────────────────── */}
        <aside className="w-60 flex-shrink-0 bg-[var(--c-surface)] border-r border-[var(--c-border)] flex flex-col overflow-hidden">
          {/* Paleta de tipos (PLAN-O: grid de íconos permanente, no dropdown) */}
          <div className="flex-shrink-0 border-b border-[var(--c-border)]">
            <div className="px-3 pt-2 pb-1">
              <span className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide">
                Bloques
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 px-2 pb-2" role="group" aria-label="Agregar bloque">
              {BLOCK_TYPES.map(({ type, label, icon }) => (
                <button
                  key={type}
                  type="button"
                  className="flex flex-col items-start gap-0.5 rounded-lg border border-[var(--c-border)] p-2 text-left hover:border-[var(--c-primary)] hover:bg-[var(--c-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
                  onClick={() => dispatch({ type: "ADD_BLOCK", blockType: type })}
                  title={`Agregar ${label}`}
                >
                  <span aria-hidden="true">
                    {icon ?? (type === "math" ? (
                      <FunctionSquare size={14} className="text-[var(--c-primary)]" />
                    ) : (
                      <span className="font-mono text-[var(--c-primary)]">{blockIcon(type)}</span>
                    ))}
                  </span>
                  <span className="text-xs font-semibold text-[var(--c-text)] leading-tight">{label}</span>
                  <span className="text-[10px] text-[var(--c-muted)] leading-tight">{blockSublabel(type)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Estructura: outline del documento */}
          <div className="px-3 pt-2 pb-1 flex-shrink-0">
            <span className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide">
              Estructura
            </span>
          </div>
          <div className="flex-1 overflow-y-auto">
            {doc.blocks.length === 0 ? (
              <p className="text-xs text-[var(--c-muted)] italic px-3 py-4 text-center">
                Sin bloques
              </p>
            ) : (
              <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                <SortableContext
                  items={doc.blocks.map((b) => b.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div role="list" aria-label="Bloques del documento">
                    {doc.blocks.map((block, idx) => (
                      <SortableBlockItem
                        key={block.id}
                        block={block}
                        idx={idx}
                        total={doc.blocks.length}
                        isActive={block.id === selectedBlockId}
                        onSelect={() =>
                          dispatch({
                            type: "SELECT_BLOCK",
                            blockId: block.id === selectedBlockId ? null : block.id,
                          })
                        }
                        onMoveUp={() =>
                          dispatch({ type: "MOVE_BLOCK", blockId: block.id, direction: "up" })
                        }
                        onMoveDown={() =>
                          dispatch({ type: "MOVE_BLOCK", blockId: block.id, direction: "down" })
                        }
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            )}
          </div>
        </aside>

        {/* ─── CANVAS ────────────────────────────────────────────────────── */}
        <main
          className="flex-1 bg-[var(--c-bg)] overflow-y-auto"
          onClick={() => dispatch({ type: "SELECT_BLOCK", blockId: null })}
        >
          <div className={cx("px-8 py-6 mx-auto transition-[max-width]", desktopView ? "max-w-3xl" : "max-w-sm")}>
            {doc.blocks.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
                <span className="text-5xl text-[var(--c-border)]">⊕</span>
                <p className="text-base font-medium text-[var(--c-muted)]">
                  Hacé clic en + para agregar tu primer bloque
                </p>
                <p className="text-sm text-[var(--c-muted)]">
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
                          <span className="absolute top-2 right-2 z-10 text-[10px] bg-[var(--c-bg)] text-[var(--c-muted)] rounded px-1 pointer-events-none select-none">
                            {blockTypeName(block.type)}
                          </span>
                        )}

                        {/* Floating toolbar – always visible when block is selected */}
                        {isSelected && (
                          <div className="absolute -top-8 left-0 z-10 flex items-center gap-1 bg-[var(--c-surface)] border border-[var(--c-border)] rounded-lg px-2 py-1">
                            <Button
                              variant="icon"
                              size="sm"
                              title="Mover arriba (↑)"
                              aria-label="Mover bloque arriba"
                              disabled={idx === 0}
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "MOVE_BLOCK", blockId: block.id, direction: "up" });
                              }}
                            >
                              ▲
                            </Button>
                            <Button
                              variant="icon"
                              size="sm"
                              title="Mover abajo (↓)"
                              aria-label="Mover bloque abajo"
                              disabled={idx === doc.blocks.length - 1}
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "MOVE_BLOCK", blockId: block.id, direction: "down" });
                              }}
                            >
                              ▼
                            </Button>
                            <Button
                              variant="icon"
                              size="sm"
                              title="Duplicar"
                              aria-label="Duplicar bloque"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "DUPLICATE_BLOCK", blockId: block.id });
                              }}
                            >
                              ⊕
                            </Button>
                            <Button
                              variant="icon"
                              size="sm"
                              className="text-[var(--c-danger)]"
                              title="Eliminar (Delete)"
                              aria-label="Eliminar bloque"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "DELETE_BLOCK", blockId: block.id });
                              }}
                            >
                              ✕
                            </Button>
                          </div>
                        )}

                        {/* Block card */}
                        <div
                          className={cx(
                            "rounded-lg border bg-[var(--c-surface)] transition-all overflow-hidden",
                            isSelected
                              ? "ring-2 ring-[var(--c-primary)] border-[var(--c-primary)]"
                              : "border-[var(--c-border)] cursor-pointer"
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
        <aside className="w-72 flex-shrink-0 bg-[var(--c-surface)] border-l border-[var(--c-border)] flex flex-col overflow-hidden">
          {/* Inspector header */}
          <div className="px-3 py-2 border-b border-[var(--c-border)]">
            <span className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide">
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
                {selectedBlock.type === "image" && (() => {
                  const imgBlock = selectedBlock as ImageBlock;
                  const onUpdate = (patch: Record<string, unknown>) =>
                    handleBlockUpdate(selectedBlock.id, patch);
                  return (
                    <div className="space-y-3">
                      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                        URL de la imagen
                        <input
                          type="url"
                          className={inputCls}
                          placeholder="https://..."
                          value={imgBlock.url}
                          onChange={(e) => onUpdate({ url: e.target.value })}
                        />
                      </label>
                      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                        Descripción (alt) *
                        <input
                          type="text"
                          className={inputCls}
                          placeholder="Describí la imagen"
                          value={imgBlock.alt}
                          onChange={(e) => onUpdate({ alt: e.target.value })}
                        />
                      </label>
                      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                        Pie de foto
                        <input
                          type="text"
                          className={inputCls}
                          placeholder="Opcional"
                          value={imgBlock.caption ?? ""}
                          onChange={(e) => onUpdate({ caption: e.target.value })}
                        />
                      </label>
                      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                        Tamaño
                        <select
                          className={inputCls}
                          value={imgBlock.width ?? "medium"}
                          onChange={(e) => onUpdate({ width: e.target.value })}
                        >
                          <option value="small">Pequeño (33%)</option>
                          <option value="medium">Mediano (66%)</option>
                          <option value="full">Completo (100%)</option>
                        </select>
                      </label>
                    </div>
                  );
                })()}
                {selectedBlock.type === "audio" && (
                  <AudioBlockEditor
                    block={selectedBlock as AudioBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "video" && (
                  <VideoBlockEditor
                    block={selectedBlock as VideoBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "pdf" && (
                  <PdfBlockEditor
                    block={selectedBlock as PdfBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "link" && (
                  <LinkBlockEditor
                    block={selectedBlock as LinkBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
                {selectedBlock.type === "formula" && (
                  <FormulaBlockEditor
                    block={selectedBlock as FormulaBlock}
                    onUpdate={(patch) => handleBlockUpdate(selectedBlock.id, patch)}
                  />
                )}
              </InspectorCard>
            ) : (
              /* ── No block selected: show document info + hint ── */
              <>
                <InspectorCard title="Documento">
                  <div>
                    <label className="text-xs font-medium text-[var(--c-muted)] block mb-1">Título</label>
                    <input
                      aria-label="Título del documento"
                      className={inputCls}
                      value={title}
                      onChange={(e) => dispatch({ type: "UPDATE_TITLE", title: e.target.value })}
                    />
                  </div>
                </InspectorCard>
                <p className="text-xs text-[var(--c-muted)] italic px-3 pt-4">
                  Hacé clic en un bloque para editarlo
                </p>
              </>
            )}
          </div>
        </aside>
      </div>

      {/* ═══ BARRA DE ESTADO ══════════════════════════════════════════════════ */}
      <footer className="flex-shrink-0 h-6 px-3 flex items-center justify-between text-[11px] text-[var(--c-muted)] bg-[var(--c-surface)] border-t border-[var(--c-border)]">
        <span>
          {selectedBlock ? `Bloque seleccionado: ${blockTypeName(selectedBlock.type)}` : "Ningún bloque seleccionado"}
          {" · "}
          {doc.blocks.length} bloque{doc.blocks.length === 1 ? "" : "s"} en el documento
        </span>
        <span aria-hidden="true">B texto · F f(x) · G gráfico · L LaTeX · T tabla · ⌫ eliminar</span>
      </footer>
    </div>
  );
}
