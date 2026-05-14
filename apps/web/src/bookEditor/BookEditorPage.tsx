import React, { useEffect, useRef, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Block, Book, BookAsset, BookNote, Page } from "../domain/book/book.types";
import { useBookEditor } from "./state/useBookEditor";
import type { EditorAction } from "./state/bookEditor.reducer";
import { ensureUniqueIds } from "./services/ids";
import { exportBookToDownload, importBookFromFile } from "./services/importExport";
import { migrateToV11ForEditor } from "./services/migrate";
import { fetchBook, fetchBooks, saveBook } from "./services/booksApi";
import type { BookListItem } from "./services/booksApi";

// ===== Helpers =====
function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function prettyJson(obj: unknown) {
  return JSON.stringify(obj, null, 2);
}

// Clases reutilizables para el editor
const editorCls = {
  headerBg:      'bg-[var(--c-text)]',
  headerText:    'text-[var(--c-bg)]',
  headerBtn:     'px-2 py-1 text-xs rounded bg-white/10 hover:bg-white/20 text-[var(--c-bg)] disabled:opacity-40 transition-colors',
  headerDivider: 'w-px h-5 bg-white/20 mx-1',

  sidebarBg:     'bg-[var(--c-surface)]',
  sidebarBorder: 'border-[var(--c-border)]',
  sidebarHeader: 'text-[10px] font-semibold text-[var(--c-muted)] uppercase tracking-widest',

  itemActive:    'bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] border-l-2 border-l-[var(--c-primary)]',
  itemInactive:  'border-l-2 border-l-transparent hover:bg-[var(--c-bg)]',
  itemText:      'text-xs text-[var(--c-text)] truncate',
  itemMuted:     'text-xs text-[var(--c-muted)]',

  canvasBg:      'bg-[var(--c-bg)]',

  input:         'w-full text-xs border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--c-primary)]',
};

// ===== Font options =====
const FONT_OPTIONS = [
  { label: 'Serif',      value: 'Georgia, "Times New Roman", serif' },
  { label: 'Sans-serif', value: '"Helvetica Neue", Arial, sans-serif' },
  { label: 'Mono',       value: '"Courier New", Courier, monospace' },
  { label: 'Georgia',    value: 'Georgia, serif' },
  { label: 'Palatino',   value: '"Palatino Linotype", "Book Antiqua", Palatino, serif' },
  { label: 'Garamond',   value: 'Garamond, "EB Garamond", serif' },
  { label: 'Verdana',    value: 'Verdana, Geneva, sans-serif' },
  { label: 'Trebuchet',  value: '"Trebuchet MS", sans-serif' },
  { label: 'Geist',      value: '"Geist", system-ui, sans-serif' },
  { label: 'Courier',    value: '"Courier New", monospace' },
] as const;

// ===== FSA types =====
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

// ===== EMPTY_BOOK =====
const EMPTY_BOOK: Book = {
  schema: "book.pages@1.1",
  metadata: {
    id: "book-draft",
    title: "Nuevo documento",
    language: "es",
    difficulty: 3,
    theme: {
      paperColor: "#E0C9A6",
      textColor: "#2B2B2B",
      fontFamily: "serif",
      baseFontSizePx: 18,
      lineHeight: 1.6,
    },
  },
  structure: {
    pageNumbering: { startAt: 1 },
    index: [],
  },
  assets: [],
  pages: [
    {
      id: "p001",
      number: 1,
      title: "Página 1",
      anchors: [{ id: "a1", label: "Inicio" }],
      content: [
        {
          type: "heading",
          id: "p001_h1_001",
          level: 1,
          text: "Título",
          blockStyle: { align: "left" },
          textStyle: { bold: true },
        },
        {
          type: "paragraph",
          id: "p001_p_001",
          runs: [{ text: "Escribe aquí tu contenido..." }],
          blockStyle: { align: "left" },
        },
      ],
    },
  ],
  notes: [],
};

// ===== Modal =====
function Modal({
  title,
  onClose,
  children,
  wide,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className={classNames(
          "bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl flex flex-col max-h-[90vh]",
          wide ? "w-[700px]" : "w-[520px]"
        )}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
          <span className="text-sm font-semibold text-[var(--c-text)]">{title}</span>
          <button
            className="text-[var(--c-muted)] hover:text-[var(--c-text)] text-xl leading-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}

// ===== IconBtn =====
function IconBtn({
  label,
  title,
  onClick,
  disabled,
  danger,
  small,
}: {
  label: string;
  title?: string;
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  danger?: boolean;
  small?: boolean;
}) {
  return (
    <button
      title={title ?? label}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "rounded font-mono select-none transition-colors",
        small ? "px-1 py-0 text-xs" : "px-1.5 py-0.5 text-sm",
        danger
          ? "text-red-500 hover:bg-red-50 disabled:opacity-30"
          : "text-[var(--c-muted)] hover:bg-[var(--c-bg)] disabled:opacity-30"
      )}
    >
      {label}
    </button>
  );
}

// ===== ToolbarButton =====
function ToolbarButton({
  children,
  active,
  title,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  title?: string;
  onClick?: () => void;
}) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={classNames(
        "min-w-[24px] h-6 px-1.5 text-xs rounded flex items-center justify-center transition-colors",
        active
          ? "bg-[color-mix(in_srgb,var(--c-primary)_15%,transparent)] text-[var(--c-primary)]"
          : "text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)]"
      )}
    >
      {children}
    </button>
  );
}

// ===== AlignButtons =====
function AlignButtons({
  value,
  onChange,
}: {
  value?: string;
  onChange: (v: "left" | "center" | "right" | "justify") => void;
}) {
  const aligns: Array<{ v: "left" | "center" | "right" | "justify"; label: string }> = [
    { v: "left", label: "L" },
    { v: "center", label: "C" },
    { v: "right", label: "R" },
    { v: "justify", label: "J" },
  ];
  return (
    <div className="flex gap-0.5">
      {aligns.map((a) => (
        <button
          key={a.v}
          onClick={() => onChange(a.v)}
          className={classNames(
            "w-6 h-6 text-xs rounded font-mono",
            value === a.v
              ? "bg-[var(--c-primary)] text-white"
              : "bg-[var(--c-bg)] text-[var(--c-muted)] hover:bg-[var(--c-border)]"
          )}
        >
          {a.label}
        </button>
      ))}
    </div>
  );
}

// ===== InspectorCard =====
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
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide hover:bg-[var(--c-bg)]"
        onClick={() => setOpen((o) => !o)}
      >
        {title}
        <span className="text-[var(--c-muted)]">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="px-3 pb-3 pt-1 space-y-2">{children}</div>}
    </div>
  );
}

// ===== KV (Key-Value row) =====
function KV({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-[var(--c-muted)] w-20 shrink-0">{label}</span>
      <div className="flex-1">{children}</div>
    </div>
  );
}

// ===== Small input helpers =====
const inputCls = editorCls.input;
const textareaCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--c-primary)] resize-none";

// ===== MetadataEditor =====
function MetadataEditor({
  book,
  dispatch,
}: {
  book: Book;
  dispatch: (a: EditorAction) => void;
}) {
  const m = book.metadata;
  const th = m.theme ?? {};
  return (
    <div className="space-y-2">
      <KV label="Título">
        <input
          className={inputCls}
          value={m.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "UPDATE_METADATA", patch: { title: e.target.value } })
          }
        />
      </KV>
      <KV label="Subtítulo">
        <input
          className={inputCls}
          value={m.subtitle ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "UPDATE_METADATA", patch: { subtitle: e.target.value } })
          }
        />
      </KV>
      <KV label="Idioma">
        <input
          className={inputCls}
          value={m.language ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "UPDATE_METADATA", patch: { language: e.target.value } })
          }
        />
      </KV>
      <KV label="Dificultad">
        <input
          type="number"
          className={inputCls}
          min={1}
          max={5}
          value={m.difficulty ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_METADATA",
              patch: { difficulty: Number(e.target.value) },
            })
          }
        />
      </KV>
      <KV label="Color papel">
        <input
          type="color"
          className="w-full h-6 rounded-lg border border-[var(--c-border)] cursor-pointer"
          value={th.paperColor ?? "#FFFFFF"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "UPDATE_THEME", patch: { paperColor: e.target.value } })
          }
        />
      </KV>
      <KV label="Color texto">
        <input
          type="color"
          className="w-full h-6 rounded-lg border border-[var(--c-border)] cursor-pointer"
          value={th.textColor ?? "#000000"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "UPDATE_THEME", patch: { textColor: e.target.value } })
          }
        />
      </KV>
      <KV label="Tipografía">
        <select
          className={inputCls}
          value={th.fontFamily ?? 'Georgia, "Times New Roman", serif'}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch({ type: "UPDATE_THEME", patch: { fontFamily: e.target.value } })
          }
        >
          {FONT_OPTIONS.map((f) => (
            <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>
              {f.label}
            </option>
          ))}
        </select>
      </KV>
      <KV label="Tamaño px">
        <input
          type="number"
          className={inputCls}
          min={10}
          max={36}
          value={th.baseFontSizePx ?? 18}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_THEME",
              patch: { baseFontSizePx: Number(e.target.value) },
            })
          }
        />
      </KV>
      <KV label="Interlineado">
        <input
          type="number"
          className={inputCls}
          step={0.1}
          min={1}
          max={3}
          value={th.lineHeight ?? 1.6}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_THEME",
              patch: { lineHeight: Number(e.target.value) },
            })
          }
        />
      </KV>
    </div>
  );
}

// ===== PageInspector =====
function PageInspector({
  page,
  dispatch,
}: {
  page: Page;
  dispatch: (a: EditorAction) => void;
}) {
  const [newAnchorId, setNewAnchorId] = useState("");
  const [newAnchorLabel, setNewAnchorLabel] = useState("");

  const addAnchor = () => {
    const id = newAnchorId.trim();
    if (!id) return;
    dispatch({
      type: "ADD_PAGE_ANCHOR",
      pageId: page.id,
      anchor: { id, label: newAnchorLabel.trim() || undefined },
    });
    setNewAnchorId("");
    setNewAnchorLabel("");
  };

  return (
    <div className="space-y-2">
      <KV label="Título pág.">
        <input
          className={inputCls}
          value={page.title ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "UPDATE_PAGE_TITLE", pageId: page.id, title: e.target.value })
          }
        />
      </KV>
      <div>
        <p className="text-xs font-medium text-[var(--c-muted)] mb-1">Anclas</p>
        {(page.anchors ?? []).length === 0 && (
          <p className="text-xs text-[var(--c-muted)] italic">Sin anclas</p>
        )}
        {(page.anchors ?? []).map((a) => (
          <div key={a.id} className="flex items-center gap-1 mb-1">
            <span className="text-xs font-mono text-[var(--c-primary)] truncate max-w-[60px]">{a.id}</span>
            <input
              className={classNames(inputCls, "flex-1")}
              placeholder="etiqueta"
              value={a.label ?? ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: "UPDATE_PAGE_ANCHOR",
                  pageId: page.id,
                  anchorId: a.id,
                  patch: { label: e.target.value },
                })
              }
            />
            <button
              className="text-red-400 hover:text-red-600 text-xs"
              onClick={() =>
                dispatch({ type: "REMOVE_PAGE_ANCHOR", pageId: page.id, anchorId: a.id })
              }
            >
              ✕
            </button>
          </div>
        ))}
        <div className="mt-2 space-y-1">
          <input
            className={inputCls}
            placeholder="id-ancla"
            value={newAnchorId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewAnchorId(e.target.value)}
          />
          <input
            className={inputCls}
            placeholder="etiqueta (opcional)"
            value={newAnchorLabel}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewAnchorLabel(e.target.value)
            }
          />
          <button
            className="w-full text-xs bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] hover:opacity-80 text-[var(--c-primary)] rounded-lg py-1"
            onClick={addAnchor}
          >
            + Agregar ancla
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== BlockInspector =====
function BlockInspector({
  block,
  page,
  book,
  dispatch,
}: {
  block: Block;
  page: Page;
  book: Book;
  dispatch: (a: EditorAction) => void;
}) {
  if (block.type === "heading") {
    const levels: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 2, 3, 4, 5, 6];
    return (
      <div className="space-y-2">
        <KV label="Nivel">
          <div className="flex gap-0.5 flex-wrap">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() =>
                  dispatch({
                    type: "UPDATE_HEADING",
                    pageId: page.id,
                    blockId: block.id,
                    patch: { level: l },
                  })
                }
                className={classNames(
                  "w-7 h-6 text-xs rounded font-mono",
                  block.level === l
                    ? "bg-[var(--c-primary)] text-white"
                    : "bg-[var(--c-bg)] text-[var(--c-muted)] hover:bg-[var(--c-border)]"
                )}
              >
                H{l}
              </button>
            ))}
          </div>
        </KV>
        <KV label="Alineación">
          <AlignButtons
            value={block.blockStyle?.align}
            onChange={(v) =>
              dispatch({
                type: "UPDATE_HEADING",
                pageId: page.id,
                blockId: block.id,
                patch: { blockStyle: { align: v } },
              })
            }
          />
        </KV>
        <KV label="Estilo">
          <div className="flex gap-1">
            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_HEADING",
                  pageId: page.id,
                  blockId: block.id,
                  patch: { textStyle: { bold: !block.textStyle?.bold } },
                })
              }
              className={classNames(
                "px-2 py-0.5 text-xs rounded font-bold",
                block.textStyle?.bold
                  ? "bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)]"
                  : "bg-[var(--c-bg)] text-[var(--c-muted)] hover:bg-[var(--c-border)]"
              )}
            >
              N
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_HEADING",
                  pageId: page.id,
                  blockId: block.id,
                  patch: { textStyle: { italic: !block.textStyle?.italic } },
                })
              }
              className={classNames(
                "px-2 py-0.5 text-xs rounded italic",
                block.textStyle?.italic
                  ? "bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)]"
                  : "bg-[var(--c-bg)] text-[var(--c-muted)] hover:bg-[var(--c-border)]"
              )}
            >
              K
            </button>
          </div>
        </KV>
        <div className="mt-1">
          <p className={editorCls.sidebarHeader + " mb-1"}>Fuente del bloque</p>
          <select
            className={inputCls}
            value={block.textStyle?.fontFamily ?? ''}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const val = e.target.value;
              dispatch({
                type: "UPDATE_HEADING",
                pageId: page.id,
                blockId: block.id,
                patch: { textStyle: { fontFamily: val || undefined } },
              });
            }}
          >
            <option value="">Heredar del libro</option>
            {FONT_OPTIONS.map((f) => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  if (block.type === "paragraph") {
    const run0 = block.runs?.[0];
    return (
      <div className="space-y-2">
        <KV label="Alineación">
          <AlignButtons
            value={block.blockStyle?.align}
            onChange={(v) =>
              dispatch({
                type: "UPDATE_PARAGRAPH_BLOCKSTYLE",
                pageId: page.id,
                blockId: block.id,
                patch: { align: v },
              })
            }
          />
        </KV>
        <KV label="Sangría 1ª">
          <input
            type="number"
            className={inputCls}
            value={block.blockStyle?.indentFirstLinePx ?? 0}
            step={4}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "UPDATE_PARAGRAPH_BLOCKSTYLE",
                pageId: page.id,
                blockId: block.id,
                patch: { indentFirstLinePx: Number(e.target.value) },
              })
            }
          />
        </KV>
        <KV label="Estilo">
          <div className="flex gap-1">
            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_PARAGRAPH_RUN",
                  pageId: page.id,
                  blockId: block.id,
                  runIndex: 0,
                  patch: { style: { bold: !run0?.style?.bold } },
                })
              }
              className={classNames(
                "px-2 py-0.5 text-xs rounded font-bold",
                run0?.style?.bold
                  ? "bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)]"
                  : "bg-[var(--c-bg)] text-[var(--c-muted)] hover:bg-[var(--c-border)]"
              )}
            >
              N
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_PARAGRAPH_RUN",
                  pageId: page.id,
                  blockId: block.id,
                  runIndex: 0,
                  patch: { style: { italic: !run0?.style?.italic } },
                })
              }
              className={classNames(
                "px-2 py-0.5 text-xs rounded italic",
                run0?.style?.italic
                  ? "bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)]"
                  : "bg-[var(--c-bg)] text-[var(--c-muted)] hover:bg-[var(--c-border)]"
              )}
            >
              K
            </button>
          </div>
        </KV>
        <div className="mt-1">
          <p className={editorCls.sidebarHeader + " mb-1"}>Fuente del bloque</p>
          <select
            className={inputCls}
            value={run0?.style?.fontFamily ?? ''}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const val = e.target.value;
              dispatch({
                type: "UPDATE_RUN_STYLE",
                pageId: page.id,
                blockId: block.id,
                runIndex: 0,
                patch: { fontFamily: val || undefined },
              });
            }}
          >
            <option value="">Heredar del libro</option>
            {FONT_OPTIONS.map((f) => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  if (block.type === "image") {
    const asset = (book.assets ?? []).find((a) => a.id === block.assetId);
    return (
      <div className="space-y-2">
        <KV label="Asset">
          <span className="text-xs text-[var(--c-muted)] truncate block">{asset?.name ?? block.assetId}</span>
        </KV>
        <KV label="Alineación">
          <AlignButtons
            value={block.blockStyle?.align}
            onChange={(v) =>
              dispatch({
                type: "UPDATE_IMAGE",
                pageId: page.id,
                blockId: block.id,
                patch: { blockStyle: { align: v } },
              })
            }
          />
        </KV>
        <KV label="Pie">
          <input
            className={inputCls}
            value={block.caption ?? ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "UPDATE_IMAGE",
                pageId: page.id,
                blockId: block.id,
                patch: { caption: e.target.value },
              })
            }
          />
        </KV>
        <KV label="Cambiar">
          <select
            className={inputCls}
            value={block.assetId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch({
                type: "UPDATE_IMAGE",
                pageId: page.id,
                blockId: block.id,
                patch: { assetId: e.target.value },
              })
            }
          >
            {(book.assets ?? []).map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </KV>
      </div>
    );
  }

  if (block.type === "divider") {
    return (
      <div className="space-y-2">
        <KV label="Color línea">
          <input
            type="color"
            className="w-full h-6 rounded-lg border border-[var(--c-border)] cursor-pointer"
            value={block.color ?? "#94a3b8"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "UPDATE_DIVIDER",
                pageId: page.id,
                blockId: block.id,
                patch: { color: e.target.value },
              })
            }
          />
        </KV>
      </div>
    );
  }

  return <p className="text-xs text-[var(--c-muted)] italic">Sin opciones para este bloque</p>;
}

// ===== NotesPanel =====
function NotesPanel({
  book,
  dispatch,
}: {
  book: Book;
  dispatch: (a: EditorAction) => void;
}) {
  const [newTerm, setNewTerm] = useState("");
  const [newContent, setNewContent] = useState("");
  const notes = book.notes ?? [];

  const addNote = () => {
    const term = newTerm.trim();
    const content = newContent.trim();
    if (!term) return;
    const note: BookNote = {
      id: "note-" + Date.now().toString(36),
      term,
      content,
    };
    dispatch({ type: "ADD_NOTE", note });
    setNewTerm("");
    setNewContent("");
  };

  return (
    <div className="space-y-3">
      {notes.length === 0 && <p className="text-xs text-[var(--c-muted)] italic">Sin notas</p>}
      {notes.map((note) => (
        <div key={note.id} className="border border-[var(--c-border)] rounded p-2 space-y-1">
          <div className="flex items-center gap-1">
            <input
              className={classNames(inputCls, "font-semibold flex-1")}
              value={note.term}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "UPDATE_NOTE", noteId: note.id, patch: { term: e.target.value } })
              }
            />
            <button
              className="text-red-400 hover:text-red-600 text-xs"
              onClick={() => dispatch({ type: "REMOVE_NOTE", noteId: note.id })}
            >
              ✕
            </button>
          </div>
          <textarea
            className={classNames(textareaCls, "h-14")}
            value={note.content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              dispatch({
                type: "UPDATE_NOTE",
                noteId: note.id,
                patch: { content: e.target.value },
              })
            }
          />
        </div>
      ))}
      <div className="border border-dashed border-[var(--c-border)] rounded p-2 space-y-1">
        <p className="text-xs font-medium text-[var(--c-muted)]">Nueva nota</p>
        <input
          className={inputCls}
          placeholder="Término"
          value={newTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTerm(e.target.value)}
        />
        <textarea
          className={classNames(textareaCls, "h-14")}
          placeholder="Contenido"
          value={newContent}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewContent(e.target.value)}
        />
        <button
          className="w-full text-xs bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] hover:opacity-80 text-[var(--c-primary)] rounded-lg py-1"
          onClick={addNote}
        >
          + Agregar nota
        </button>
      </div>
    </div>
  );
}

// ===== TOC Modal =====
function TocModal({
  book,
  dispatch,
  onClose,
}: {
  book: Book;
  dispatch: (a: EditorAction) => void;
  onClose: () => void;
}) {
  const [newTitle, setNewTitle] = useState("");
  const [newAnchor, setNewAnchor] = useState("");
  const [newPageStart, setNewPageStart] = useState(1);

  const entries = book.structure?.index ?? [];

  const anchorOptions = book.pages.flatMap((p) =>
    (p.anchors ?? []).map((a) => p.id + ":" + a.id)
  );

  const addEntry = () => {
    const title = newTitle.trim();
    if (!title) return;
    dispatch({
      type: "ADD_TOC_ENTRY",
      entry: {
        id: "toc-" + Date.now().toString(36),
        title,
        pageStart: newPageStart,
        anchor: newAnchor.trim(),
      },
    });
    setNewTitle("");
    setNewAnchor("");
    setNewPageStart(1);
  };

  return (
    <Modal title="Índice / Tabla de contenidos" onClose={onClose} wide>
      <datalist id="toc-anchor-opts">
        {anchorOptions.map((o) => (
          <option key={o} value={o} />
        ))}
      </datalist>

      {entries.length === 0 && (
        <p className="text-sm text-[var(--c-muted)] italic mb-4">Sin entradas de índice</p>
      )}

      <div className="space-y-2 mb-4">
        {entries.map((entry, idx) => (
          <div key={entry.id} className="flex items-center gap-1 border border-[var(--c-border)] rounded p-2">
            <div className="flex flex-col gap-0.5 mr-1">
              <button
                className="text-xs text-[var(--c-muted)] hover:text-[var(--c-text)] leading-none"
                onClick={() =>
                  dispatch({ type: "MOVE_TOC_ENTRY", entryId: entry.id, direction: "up" })
                }
                disabled={idx === 0}
              >
                ▲
              </button>
              <button
                className="text-xs text-[var(--c-muted)] hover:text-[var(--c-text)] leading-none"
                onClick={() =>
                  dispatch({ type: "MOVE_TOC_ENTRY", entryId: entry.id, direction: "down" })
                }
                disabled={idx === entries.length - 1}
              >
                ▼
              </button>
            </div>
            <input
              className={classNames(inputCls, "flex-1")}
              placeholder="Título"
              value={entry.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: "UPDATE_TOC_ENTRY",
                  entryId: entry.id,
                  patch: { title: e.target.value },
                })
              }
            />
            <input
              className={classNames(inputCls, "w-28")}
              placeholder="pageId:anchorId"
              list="toc-anchor-opts"
              value={entry.anchor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: "UPDATE_TOC_ENTRY",
                  entryId: entry.id,
                  patch: { anchor: e.target.value },
                })
              }
            />
            <input
              type="number"
              className={classNames(inputCls, "w-14")}
              placeholder="Pág."
              value={entry.pageStart}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: "UPDATE_TOC_ENTRY",
                  entryId: entry.id,
                  patch: { pageStart: Number(e.target.value) },
                })
              }
            />
            <button
              className="text-red-400 hover:text-red-600 text-sm"
              onClick={() => dispatch({ type: "REMOVE_TOC_ENTRY", entryId: entry.id })}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="border border-dashed border-[var(--c-border)] rounded p-3 space-y-2">
        <p className="text-xs font-semibold text-[var(--c-muted)]">Nueva entrada</p>
        <div className="flex gap-1">
          <input
            className={classNames(inputCls, "flex-1")}
            placeholder="Título"
            value={newTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
          />
          <input
            className={classNames(inputCls, "w-28")}
            placeholder="pageId:anchorId"
            list="toc-anchor-opts"
            value={newAnchor}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewAnchor(e.target.value)}
          />
          <input
            type="number"
            className={classNames(inputCls, "w-14")}
            placeholder="Pág."
            value={newPageStart}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewPageStart(Number(e.target.value))
            }
          />
        </div>
        <button
          className="w-full text-xs bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] hover:opacity-80 text-[var(--c-primary)] rounded-lg py-1"
          onClick={addEntry}
        >
          + Agregar entrada
        </button>
      </div>

      {/* ── Rendered preview ── */}
      {entries.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-semibold text-[var(--c-muted)] mb-3 uppercase tracking-wide">
            Vista previa del índice
          </p>
          <div
            className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-6"
            style={{ fontFamily: book.metadata.theme?.fontFamily ?? "serif" }}
          >
            <h2 className="text-lg font-bold mb-4 text-[var(--c-text)] border-b border-[var(--c-border)] pb-2">
              Índice
            </h2>
            <div className="space-y-2">
              {entries.map((entry) => (
                <div key={entry.id} className="flex items-baseline gap-1">
                  <span className="text-sm text-[var(--c-text)] shrink-0">{entry.title}</span>
                  <span
                    className="flex-1 border-b border-dotted border-[var(--c-border)] mb-1"
                    style={{ minWidth: 16 }}
                  />
                  <span className="text-sm text-[var(--c-muted)] shrink-0 tabular-nums">
                    {entry.pageStart}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ===== AssetsModal =====
function AssetsModal({
  book,
  dispatch,
  onClose,
}: {
  book: Book;
  dispatch: (a: EditorAction) => void;
  onClose: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const assets = book.assets ?? [];

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const asset: BookAsset = {
        id: "asset-" + Date.now().toString(36),
        name: file.name,
        mimeType: file.type,
        dataUrl: reader.result as string,
      };
      const img = new Image();
      img.onload = () => {
        dispatch({ type: "ADD_ASSET", asset: { ...asset, width: img.width, height: img.height } });
      };
      img.onerror = () => {
        dispatch({ type: "ADD_ASSET", asset });
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <Modal title="Biblioteca de imágenes" onClose={onClose} wide>
      <div className="mb-4">
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
        <button
          className="px-3 py-1.5 text-sm bg-[var(--c-primary)] text-white rounded-lg hover:opacity-90"
          onClick={() => fileRef.current?.click()}
        >
          + Subir imagen
        </button>
      </div>

      {assets.length === 0 && (
        <p className="text-sm text-[var(--c-muted)] italic">Sin assets</p>
      )}

      <div className="grid grid-cols-3 gap-3">
        {assets.map((a) => (
          <div key={a.id} className="border border-[var(--c-border)] rounded overflow-hidden group relative">
            {a.dataUrl.startsWith("data:image") ? (
              <img
                src={a.dataUrl}
                alt={a.name}
                className="w-full h-24 object-cover"
              />
            ) : (
              <div className="w-full h-24 bg-[var(--c-bg)] flex items-center justify-center text-xs text-[var(--c-muted)]">
                {a.mimeType}
              </div>
            )}
            <div className="p-1 text-xs text-[var(--c-text)] truncate">{a.name}</div>
            <button
              className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded px-1 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => dispatch({ type: "REMOVE_ASSET", assetId: a.id })}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
}

// ===== LibraryModal =====
function LibraryModal({
  dispatch,
  onClose,
}: {
  dispatch: (a: EditorAction) => void;
  onClose: () => void;
}) {
  const [books, setBooks] = useState<BookListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetchBooks()
      .then((r) => setBooks(r.items))
      .catch((e: unknown) => setErr(String(e)))
      .finally(() => setLoading(false));
  }, []);

  const load = async (id: string) => {
    try {
      const b = await fetchBook(id);
      const migrated = migrateToV11ForEditor(b);
      const { book } = ensureUniqueIds(migrated);
      dispatch({ type: "LOAD_BOOK", book });
      onClose();
    } catch (e: unknown) {
      alert("Error al cargar: " + String(e));
    }
  };

  return (
    <Modal title="Mis documentos" onClose={onClose}>
      {loading && <p className="text-sm text-[var(--c-muted)]">Cargando...</p>}
      {err && <p className="text-sm text-red-500">{err}</p>}
      {!loading && !err && books.length === 0 && (
        <p className="text-sm text-[var(--c-muted)] italic">Sin documentos guardados</p>
      )}
      <div className="space-y-2">
        {books.map((b) => (
          <div
            key={b.id}
            className="flex items-center justify-between border border-[var(--c-border)] rounded p-2"
          >
            <div>
              <p className="text-sm font-medium text-[var(--c-text)]">{b.title}</p>
              <p className="text-xs text-[var(--c-muted)]">{b.id}</p>
            </div>
            <button
              className="px-2 py-1 text-xs bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)] hover:opacity-80 text-[var(--c-primary)] rounded-lg"
              onClick={() => load(b.id)}
            >
              Abrir
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
}

// ===== JsonModal =====
function JsonModal({ book, onClose }: { book: Book; onClose: () => void }) {
  return (
    <Modal title="JSON del documento" onClose={onClose} wide>
      <pre className="text-xs bg-[var(--c-bg)] rounded-lg p-3 overflow-auto max-h-[60vh] whitespace-pre-wrap break-all text-[var(--c-text)]">
        {prettyJson(book)}
      </pre>
    </Modal>
  );
}

// ===== InlineBlock =====
function InlineBlock({
  block,
  page,
  book,
  isSelected,
  dispatch,
  onSelect,
}: {
  block: Block;
  page: Page;
  book: Book;
  isSelected: boolean;
  dispatch: (a: EditorAction) => void;
  onSelect: () => void;
}) {
  const theme = book.metadata.theme ?? {};
  const textColor = theme.textColor ?? "#000000";
  const fontFamily = theme.fontFamily ?? "serif";
  const basePx = theme.baseFontSizePx ?? 18;

  const pageIdx = page.content.findIndex((b) => b.id === block.id);
  const totalBlocks = page.content.length;

  const wrapperCls = classNames(
    "relative group",
    isSelected ? "ring-2 ring-[var(--c-primary)] rounded" : "hover:ring-1 hover:ring-[var(--c-border)] rounded"
  );

  const blockToolbar = isSelected ? (
    <div className="absolute -top-7 left-0 z-10 flex items-center gap-0.5 bg-[var(--c-surface)] border border-[var(--c-border)] rounded-lg px-1 py-0.5">
      <span className="text-xs text-[var(--c-muted)] mr-1 font-mono">{block.type}</span>
      <IconBtn
        label="▲"
        title="Subir bloque"
        small
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          dispatch({ type: "MOVE_BLOCK", pageId: page.id, blockId: block.id, direction: "up" });
        }}
        disabled={pageIdx === 0}
      />
      <IconBtn
        label="▼"
        title="Bajar bloque"
        small
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          dispatch({ type: "MOVE_BLOCK", pageId: page.id, blockId: block.id, direction: "down" });
        }}
        disabled={pageIdx === totalBlocks - 1}
      />
      <IconBtn
        label="⊕"
        title="Duplicar bloque"
        small
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          dispatch({ type: "DUPLICATE_BLOCK", pageId: page.id, blockId: block.id });
        }}
      />
      <IconBtn
        label="✕"
        title="Eliminar bloque"
        small
        danger
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          dispatch({ type: "DELETE_BLOCK", pageId: page.id, blockId: block.id });
        }}
      />
    </div>
  ) : null;

  if (block.type === "heading") {
    const tagFontSizes: Record<number, number> = { 1: 2.0, 2: 1.6, 3: 1.3, 4: 1.1, 5: 1.0, 6: 0.9 };
    const factor = tagFontSizes[block.level] ?? 1;
    const fontSize = basePx * factor;
    const align = block.blockStyle?.align ?? "left";
    const blockFontFamily = block.textStyle?.fontFamily ?? fontFamily;
    const style: React.CSSProperties = {
      fontFamily: blockFontFamily,
      fontSize,
      color: textColor,
      textAlign: align,
      fontWeight: block.textStyle?.bold !== false ? "bold" : "normal",
      fontStyle: block.textStyle?.italic ? "italic" : "normal",
      background: "transparent",
      border: "none",
      outline: "none",
      width: "100%",
      padding: "2px 0",
      lineHeight: 1.2,
    };

    return (
      <div className={wrapperCls} onClick={(e: React.MouseEvent) => { e.stopPropagation(); onSelect(); }}>
        {blockToolbar}
        <div className="py-1 px-1">
          {isSelected ? (
            <input
              type="text"
              autoFocus
              style={style}
              value={block.text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: "UPDATE_HEADING",
                  pageId: page.id,
                  blockId: block.id,
                  patch: { text: e.target.value },
                })
              }
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
          ) : (
            <div
              style={{ ...style, cursor: "text" } as React.CSSProperties}
            >
              {block.text || <span style={{ color: "#aaa" }}>Título vacío</span>}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (block.type === "paragraph") {
    const text =
      block.text ??
      (block.runs ?? []).map((r) => r.text).join("");
    const align = block.blockStyle?.align ?? "left";
    const indentPx = block.blockStyle?.indentFirstLinePx ?? 0;
    const run0 = block.runs?.[0];
    const blockFontFamily = run0?.style?.fontFamily ?? fontFamily;
    const blockFontSize = run0?.style?.fontSizePx ?? basePx;
    const style: React.CSSProperties = {
      fontFamily: blockFontFamily,
      fontSize: blockFontSize,
      color: textColor,
      textAlign: align,
      textIndent: indentPx ? `${indentPx}px` : undefined,
      background: "transparent",
      border: "none",
      outline: "none",
      width: "100%",
      resize: "none",
      lineHeight: theme.lineHeight ?? 1.6,
      padding: "2px 0",
    };

    return (
      <div className={wrapperCls} onClick={(e: React.MouseEvent) => { e.stopPropagation(); onSelect(); }}>
        {blockToolbar}
        <div className="py-1 px-1">
          {isSelected ? (
            <textarea
              autoFocus
              rows={1}
              style={{
                ...style,
                overflow: 'hidden',
                resize: 'none',
                minHeight: '1.5em',
                height: 'auto',
                fieldSizing: 'content',
              } as React.CSSProperties}
              onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                const el = e.currentTarget;
                el.style.height = 'auto';
                el.style.height = el.scrollHeight + 'px';
              }}
              value={text}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                dispatch({
                  type: "UPDATE_PARAGRAPH_RUN",
                  pageId: page.id,
                  blockId: block.id,
                  runIndex: 0,
                  patch: { text: e.target.value },
                })
              }
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
          ) : (
            <p
              style={style as React.CSSProperties}
              className="whitespace-pre-wrap cursor-text"
            >
              {text || <span style={{ color: "#aaa" }}>Párrafo vacío</span>}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (block.type === "image") {
    const asset = (book.assets ?? []).find((a) => a.id === block.assetId);
    const align = block.blockStyle?.align ?? "center";
    const justifyMap: Record<string, string> = {
      left: "flex-start",
      center: "center",
      right: "flex-end",
      justify: "center",
    };

    return (
      <div className={wrapperCls} onClick={(e: React.MouseEvent) => { e.stopPropagation(); onSelect(); }}>
        {blockToolbar}
        <div
          className="py-2 px-1 flex flex-col"
          style={{ alignItems: justifyMap[align] ?? "center" }}
        >
          {asset?.dataUrl ? (
            <div className="relative">
              <img
                src={asset.dataUrl}
                alt={asset.name}
                className="max-w-full max-h-64 rounded shadow"
              />
              {isSelected && (
                <div className="absolute inset-0 bg-[var(--c-primary)]/20 flex items-center justify-center rounded">
                  <span className="bg-[var(--c-primary)] text-white text-xs px-2 py-1 rounded">
                    Cambiar imagen en Inspector
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div
              className="w-full h-32 bg-[var(--c-bg)] border-2 border-dashed border-[var(--c-border)] rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80"
            >
              <span className="text-[var(--c-muted)] text-sm">
                {isSelected ? "Asignar imagen en Inspector" : "Sin imagen asignada"}
              </span>
            </div>
          )}
          {block.caption && (
            <p
              className="text-center text-xs mt-1"
              style={{ fontFamily, color: textColor, opacity: 0.7 }}
            >
              {block.caption}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (block.type === "divider") {
    const divColor = block.color ?? "#94a3b8";
    return (
      <div className={wrapperCls} onClick={(e: React.MouseEvent) => { e.stopPropagation(); onSelect(); }}>
        {blockToolbar}
        <div className="py-3 px-1">
          <hr style={{ borderColor: divColor, borderTopWidth: 1 }} />
        </div>
      </div>
    );
  }

  if (block.type === "pageBreak") {
    return (
      <div className={wrapperCls} onClick={(e: React.MouseEvent) => { e.stopPropagation(); onSelect(); }}>
        {blockToolbar}
        <div className="py-2 px-1 border border-dashed border-[var(--c-border)] rounded text-center text-xs text-[var(--c-muted)]">
          — Salto de página —
        </div>
      </div>
    );
  }

  return null;
}

// ===== PageCanvas =====
function PageCanvas({
  page,
  book,
  selectedBlockId,
  dispatch,
  desktopView,
}: {
  page: Page;
  book: Book;
  selectedBlockId: string | null;
  dispatch: (a: EditorAction) => void;
  desktopView: boolean;
}) {
  const theme = book.metadata.theme ?? {};
  const paperColor = theme.paperColor ?? "#FFFFFF";
  const textColor = theme.textColor ?? "#000000";
  const startAt = book.structure?.pageNumbering?.startAt ?? 1;
  const pageNumber = (startAt - 1) + page.number;

  return (
    <div
      className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] mx-auto my-6 flex flex-col"
      style={{
        background: paperColor,
        maxWidth: desktopView ? 1100 : 680,
        width: "100%",
        minHeight: 900,
        padding: desktopView ? "56px 120px" : "56px 64px",
        fontFamily: theme.fontFamily ?? "serif",
      }}
      onClick={() => dispatch({ type: "SELECT_BLOCK", blockId: null })}
    >
      <div className="flex-1 space-y-2">
        {page.content.length === 0 && (
          <p className="text-center text-[var(--c-muted)] italic text-sm py-16">
            Página vacía — usa el panel inferior para agregar bloques
          </p>
        )}
        {page.content.map((block) => (
          <InlineBlock
            key={block.id}
            block={block}
            page={page}
            book={book}
            isSelected={selectedBlockId === block.id}
            dispatch={dispatch}
            onSelect={() => dispatch({ type: "SELECT_BLOCK", blockId: block.id })}
          />
        ))}
      </div>
      {/* Page number at bottom */}
      <div
        className="mt-8 pt-3 text-center text-xs select-none"
        style={{ borderTop: `1px solid ${textColor}22`, color: `${textColor}99` }}
      >
        {pageNumber}
      </div>
    </div>
  );
}

// ===== Add Block Bar =====
function AddBlockBar({
  dispatch,
}: {
  dispatch: (a: EditorAction) => void;
}) {
  const types: Array<{ t: Block["type"]; label: string }> = [
    { t: "heading", label: "Título" },
    { t: "paragraph", label: "Párrafo" },
    { t: "image", label: "Imagen" },
    { t: "divider", label: "Divisor" },
    { t: "pageBreak", label: "Salto" },
  ];
  return (
    <div className="flex items-center gap-1 flex-wrap">
      <span className="text-xs text-[var(--c-muted)] mr-1">+ Bloque:</span>
      {types.map(({ t, label }) => (
        <button
          key={t}
          className="px-2 py-0.5 text-xs bg-[var(--c-bg)] hover:bg-[var(--c-border)] text-[var(--c-text)] rounded"
          onClick={() => dispatch({ type: "ADD_BLOCK", blockType: t })}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// ===== MAIN COMPONENT =====
export default function BookEditorPage() {
  const params = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const { state, dispatch, undo, redo, canUndo, canRedo, selectedPage, selectedBlock, runValidation } =
    useBookEditor();

  const book = state.book;

  // FSA state
  const [fsaHandle, setFsaHandle] = useState<FileSystemFileHandle | null>(null);
  const [fsaFileName, setFsaFileName] = useState<string | null>(null);

  // Modal visibility
  const [showToc, setShowToc] = useState(false);
  const [showAssets, setShowAssets] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showJson, setShowJson] = useState(false);

  // Desktop / mobile canvas view
  const [desktopView, setDesktopView] = useState(false);

  // Save feedback
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Import file ref
  const importRef = useRef<HTMLInputElement>(null);

  // Load book from URL param or default
  useEffect(() => {
    const loadInitial = async () => {
      if (params.id) {
        try {
          const b = await fetchBook(params.id);
          const migrated = migrateToV11ForEditor(b);
          const { book: uniq } = ensureUniqueIds(migrated);
          dispatch({ type: "LOAD_BOOK", book: uniq });
          runValidation(uniq);
        } catch {
          dispatch({ type: "LOAD_BOOK", book: EMPTY_BOOK });
        }
      } else {
        dispatch({ type: "LOAD_BOOK", book: EMPTY_BOOK });
      }
    };
    loadInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  // Validation on book change
  useEffect(() => {
    if (book) runValidation(book);
  }, [book, runValidation]);

  // ===== FSA handlers =====
  const openLocalFile = useCallback(async () => {
    if (!window.showOpenFilePicker) {
      alert("File System Access API no soportada en este navegador. Usa Chrome/Edge.");
      return;
    }
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [
          {
            description: "Documento JSON",
            accept: { "application/json": [".json"] },
          },
        ],
        multiple: false,
      });
      const file = await handle.getFile();
      const b = await importBookFromFile(file);
      dispatch({ type: "LOAD_BOOK", book: b });
      setFsaHandle(handle);
      setFsaFileName(handle.name);
    } catch (e: unknown) {
      if (e instanceof Error && e.name === "AbortError") return;
      alert("Error al abrir archivo: " + String(e));
    }
  }, [dispatch]);

  const saveLocalFile = useCallback(async () => {
    if (!book) return;
    const json = JSON.stringify(book, null, 2);

    if (fsaHandle) {
      try {
        let perm = await fsaHandle.queryPermission({ mode: "readwrite" });
        if (perm !== "granted") {
          perm = await fsaHandle.requestPermission({ mode: "readwrite" });
        }
        if (perm === "granted") {
          const writable = await fsaHandle.createWritable();
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
          suggestedName: fsaFileName ?? `${book.metadata.title ?? "documento"}.json`,
          types: [
            {
              description: "Documento JSON",
              accept: { "application/json": [".json"] },
            },
          ],
        });
        const writable = await handle.createWritable();
        await writable.write(json);
        await writable.close();
        setFsaHandle(handle);
        setFsaFileName(handle.name);
        dispatch({ type: "MARK_DIRTY", dirty: false });
        return;
      } catch (e: unknown) {
        if (e instanceof Error && e.name === "AbortError") return;
      }
    }

    // Fallback: download
    exportBookToDownload(book, fsaFileName ?? `${book.metadata.title ?? "documento"}.json`);
    dispatch({ type: "MARK_DIRTY", dirty: false });
  }, [book, dispatch, fsaHandle, fsaFileName]);

  // ===== Import / Export =====
  const handleImportFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const b = await importBookFromFile(file);
        dispatch({ type: "LOAD_BOOK", book: b });
        setFsaHandle(null);
        setFsaFileName(file.name);
      } catch (err: unknown) {
        alert("Error al importar: " + String(err));
      }
      e.target.value = "";
    },
    [dispatch]
  );

  const handleSaveServer = useCallback(async () => {
    if (!book) return;
    setSaveStatus('saving');
    try {
      const res = await saveBook(book);
      alert(`Guardado en servidor. ID: ${res.id}`);
      dispatch({ type: "MARK_DIRTY", dirty: false });
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (e: unknown) {
      setSaveStatus('error');
      alert("Error al guardar: " + String(e));
    }
  }, [book, dispatch]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        undo();
      } else if (ctrl && (e.key === "y" || (e.key === "z" && e.shiftKey))) {
        e.preventDefault();
        redo();
      } else if (ctrl && e.key === "s") {
        e.preventDefault();
        saveLocalFile();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [undo, redo, saveLocalFile]);

  if (!book) {
    return (
      <div className="h-screen flex items-center justify-center bg-[var(--c-bg)]">
        <p className="text-[var(--c-muted)] text-lg">Cargando editor…</p>
      </div>
    );
  }

  const issues = state.issues;
  const errorCount = issues.filter((i) => i.level === "error").length;
  const warnCount = issues.filter((i) => i.level === "warn").length;

  const hasSelectedBlock = !!selectedBlock;
  const hasSelectedPage = !!selectedPage;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[var(--c-bg)]">
      {/* ===== HEADER WORD-STYLE ===== */}
      <header className="flex-shrink-0 border-b border-[var(--c-border)] bg-[var(--c-surface)] flex items-center px-4 gap-3 h-11 z-20">
        {/* Botón volver */}
        <button
          onClick={() => {
            if (state.dirty) {
              if (window.confirm('Tenés cambios sin guardar. ¿Salir de todas formas?')) {
                navigate(-1);
              }
            } else {
              navigate(-1);
            }
          }}
          className="flex items-center gap-1 px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors flex-shrink-0"
          title="Volver"
        >
          ← Volver
        </button>

        <div className="w-px h-4 bg-[var(--c-border)] flex-shrink-0" />

        {/* Logo / título editable */}
        <div className="flex items-center gap-2 min-w-0 max-w-[220px]">
          <div className="w-5 h-5 rounded bg-[var(--c-primary)] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[9px] font-bold">VB</span>
          </div>
          <span className="text-[10px] text-[var(--c-muted)] hidden sm:block flex-shrink-0">
            Editor de texto
          </span>
          <span className="text-[var(--c-muted)] hidden sm:block">·</span>
          <input
            className="text-sm font-medium bg-transparent text-[var(--c-text)] focus:outline-none focus:border-b focus:border-[var(--c-primary)] truncate min-w-0 w-full"
            value={book.metadata.title || ''}
            placeholder="Sin título"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "UPDATE_METADATA", patch: { title: e.target.value } })
            }
          />
        </div>

        {/* Estado de guardado */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {state.dirty && saveStatus === 'idle' && (
            <span className="text-[10px] text-[var(--c-muted)]">Sin guardar</span>
          )}
          {saveStatus === 'saving' && (
            <span className="text-[10px] text-[var(--c-muted)] animate-pulse">Guardando...</span>
          )}
          {saveStatus === 'saved' && (
            <span className="text-[10px] text-[var(--c-success)]">✓ Guardado</span>
          )}
          {saveStatus === 'error' && (
            <span className="text-[10px] text-[var(--c-danger)]">Error al guardar</span>
          )}
          {fsaFileName && !saveStatus && (
            <span className="text-[10px] text-[var(--c-muted)] truncate max-w-[120px]" title={fsaFileName}>
              {fsaFileName}
            </span>
          )}
        </div>

        <div className="flex-1" />

        {/* Undo / Redo */}
        <button onClick={undo} disabled={!canUndo} title="Deshacer (Ctrl+Z)"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] disabled:opacity-30 transition-colors">
          ↩
        </button>
        <button onClick={redo} disabled={!canRedo} title="Rehacer (Ctrl+Y)"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] disabled:opacity-30 transition-colors">
          ↪
        </button>

        <div className="w-px h-4 bg-[var(--c-border)]" />

        {/* Guardar en servidor */}
        <button onClick={handleSaveServer}
          className="px-3 py-1 text-xs rounded-lg bg-[var(--c-primary)] text-white hover:opacity-90 transition-opacity font-medium">
          Guardar
        </button>

        {/* Guardar local */}
        <button onClick={saveLocalFile} title="Guardar archivo local (Ctrl+S)"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors">
          Local
        </button>

        <div className="w-px h-4 bg-[var(--c-border)]" />

        {/* Archivos */}
        <button onClick={openLocalFile} title="Abrir archivo local"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors">
          Abrir
        </button>
        <input ref={importRef} type="file" accept=".json" className="hidden" onChange={handleImportFile} />
        <button onClick={() => importRef.current?.click()} title="Importar JSON"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors">
          Importar
        </button>
        <button onClick={() => exportBookToDownload(book, `${book.metadata.title || "documento"}.json`)} title="Exportar JSON"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors">
          ↓ JSON
        </button>

        <div className="w-px h-4 bg-[var(--c-border)]" />

        {/* Vista */}
        <button onClick={() => setDesktopView((v) => !v)} title="Alternar vista móvil/escritorio"
          className={classNames(
            "px-2 py-1 text-xs rounded transition-colors",
            desktopView
              ? "bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)]"
              : "text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)]"
          )}>
          {desktopView ? "PC" : "Móvil"}
        </button>

        <div className="w-px h-4 bg-[var(--c-border)]" />

        {/* Herramientas */}
        <button onClick={() => setShowToc(true)} title="Índice"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors">
          Índice
        </button>
        <button onClick={() => setShowAssets(true)} title="Imágenes"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors">
          Imágenes
        </button>
        <button onClick={() => setShowLibrary(true)} title="Biblioteca"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors">
          Biblioteca
        </button>
        <button onClick={() => setShowJson(true)} title="Ver JSON"
          className="px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors font-mono">
          {'{ }'}
        </button>

        {/* Issues badge */}
        {(errorCount > 0 || warnCount > 0) && (
          <div className="flex gap-1">
            {errorCount > 0 && (
              <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded">
                {errorCount}E
              </span>
            )}
            {warnCount > 0 && (
              <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.5 rounded">
                {warnCount}W
              </span>
            )}
          </div>
        )}
      </header>

      {/* ===== TOOLBAR WORD-STYLE ===== */}
      {hasSelectedBlock && selectedBlock && selectedPage && (
        <div className="flex-shrink-0 border-b border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 flex items-center gap-1 flex-wrap">

          {/* Fuente */}
          <select
            className="text-xs border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-1.5 py-1 h-6 focus:outline-none focus:border-[var(--c-primary)]"
            style={{
              width: 110,
              fontFamily:
                selectedBlock.type === 'paragraph'
                  ? (selectedBlock.runs?.[0]?.style?.fontFamily ?? book.metadata.theme?.fontFamily ?? '')
                  : selectedBlock.type === 'heading'
                  ? (selectedBlock.textStyle?.fontFamily ?? '')
                  : '',
            }}
            value={
              selectedBlock.type === 'paragraph'
                ? (selectedBlock.runs?.[0]?.style?.fontFamily ?? '')
                : selectedBlock.type === 'heading'
                ? (selectedBlock.textStyle?.fontFamily ?? '')
                : ''
            }
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const val = e.target.value;
              if (selectedBlock.type === 'paragraph') {
                dispatch({ type: "UPDATE_RUN_STYLE", pageId: selectedPage.id, blockId: selectedBlock.id, runIndex: 0, patch: { fontFamily: val || undefined } });
              } else if (selectedBlock.type === 'heading') {
                dispatch({ type: "UPDATE_HEADING", pageId: selectedPage.id, blockId: selectedBlock.id, patch: { textStyle: { fontFamily: val || undefined } } });
              }
            }}
          >
            <option value="">Fuente</option>
            {FONT_OPTIONS.map((f) => (
              <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>{f.label}</option>
            ))}
          </select>

          <div className="w-px h-4 bg-[var(--c-border)] mx-0.5" />

          {/* Tamaño (solo párrafo) */}
          {selectedBlock.type === 'paragraph' && (
            <select
              className="text-xs border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-1.5 py-1 h-6 w-14 focus:outline-none focus:border-[var(--c-primary)]"
              value={selectedBlock.runs?.[0]?.style?.fontSizePx ?? ''}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const val = Number(e.target.value);
                if (!val) return;
                dispatch({ type: "UPDATE_RUN_STYLE", pageId: selectedPage.id, blockId: selectedBlock.id, runIndex: 0, patch: { fontSizePx: val } });
              }}
            >
              <option value="">px</option>
              {[8,9,10,11,12,14,16,18,20,22,24,28,32,36,40,48,60,72].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          )}

          <div className="w-px h-4 bg-[var(--c-border)] mx-0.5" />

          {/* Bold */}
          <ToolbarButton
            active={
              selectedBlock.type === 'paragraph'
                ? !!selectedBlock.runs?.[0]?.style?.bold
                : selectedBlock.type === 'heading'
                ? !!selectedBlock.textStyle?.bold
                : false
            }
            title="Negrita (Ctrl+B)"
            onClick={() => {
              if (selectedBlock.type === 'paragraph') {
                const cur = !!selectedBlock.runs?.[0]?.style?.bold;
                dispatch({ type: "UPDATE_RUN_STYLE", pageId: selectedPage.id, blockId: selectedBlock.id, runIndex: 0, patch: { bold: !cur } });
              } else if (selectedBlock.type === 'heading') {
                dispatch({ type: "UPDATE_HEADING", pageId: selectedPage.id, blockId: selectedBlock.id, patch: { textStyle: { bold: !selectedBlock.textStyle?.bold } } });
              }
            }}
          >
            <strong>B</strong>
          </ToolbarButton>

          {/* Italic */}
          <ToolbarButton
            active={
              selectedBlock.type === 'paragraph'
                ? !!selectedBlock.runs?.[0]?.style?.italic
                : selectedBlock.type === 'heading'
                ? !!selectedBlock.textStyle?.italic
                : false
            }
            title="Cursiva (Ctrl+I)"
            onClick={() => {
              if (selectedBlock.type === 'paragraph') {
                const cur = !!selectedBlock.runs?.[0]?.style?.italic;
                dispatch({ type: "UPDATE_RUN_STYLE", pageId: selectedPage.id, blockId: selectedBlock.id, runIndex: 0, patch: { italic: !cur } });
              } else if (selectedBlock.type === 'heading') {
                dispatch({ type: "UPDATE_HEADING", pageId: selectedPage.id, blockId: selectedBlock.id, patch: { textStyle: { italic: !selectedBlock.textStyle?.italic } } });
              }
            }}
          >
            <em>I</em>
          </ToolbarButton>

          {/* Underline (solo párrafo) */}
          {selectedBlock.type === 'paragraph' && (
            <ToolbarButton
              active={!!selectedBlock.runs?.[0]?.style?.underline}
              title="Subrayado (Ctrl+U)"
              onClick={() => {
                if (selectedBlock.type !== 'paragraph') return;
                const cur = !!selectedBlock.runs?.[0]?.style?.underline;
                dispatch({ type: "UPDATE_RUN_STYLE", pageId: selectedPage.id, blockId: selectedBlock.id, runIndex: 0, patch: { underline: !cur } });
              }}
            >
              <span style={{ textDecoration: 'underline' }}>U</span>
            </ToolbarButton>
          )}

          <div className="w-px h-4 bg-[var(--c-border)] mx-0.5" />

          {/* Alineación */}
          {(['left','center','right','justify'] as const).map((align) => (
            <ToolbarButton
              key={align}
              title={align}
              active={
                (selectedBlock.type === 'paragraph' || selectedBlock.type === 'heading')
                  ? selectedBlock.blockStyle?.align === align
                  : false
              }
              onClick={() => {
                if (selectedBlock.type === 'paragraph') {
                  dispatch({ type: "UPDATE_PARAGRAPH_BLOCKSTYLE", pageId: selectedPage.id, blockId: selectedBlock.id, patch: { align } });
                } else if (selectedBlock.type === 'heading') {
                  dispatch({ type: "UPDATE_HEADING", pageId: selectedPage.id, blockId: selectedBlock.id, patch: { blockStyle: { align } } });
                }
              }}
            >
              {align === 'left'    && '⬅'}
              {align === 'center'  && '↔'}
              {align === 'right'   && '➡'}
              {align === 'justify' && '☰'}
            </ToolbarButton>
          ))}

          <div className="w-px h-4 bg-[var(--c-border)] mx-0.5" />

          {/* Color de texto */}
          <label className="flex items-center gap-1 cursor-pointer" title="Color de texto">
            <span className="text-xs text-[var(--c-muted)]">A</span>
            <input
              type="color"
              className="w-5 h-5 rounded cursor-pointer border border-[var(--c-border)]"
              value={
                selectedBlock.type === 'paragraph'
                  ? (selectedBlock.runs?.[0]?.style?.color ?? '#000000')
                  : selectedBlock.type === 'heading'
                  ? (selectedBlock.textStyle?.color ?? '#000000')
                  : '#000000'
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const color = e.target.value;
                if (selectedBlock.type === 'paragraph') {
                  dispatch({ type: "UPDATE_RUN_STYLE", pageId: selectedPage.id, blockId: selectedBlock.id, runIndex: 0, patch: { color } });
                } else if (selectedBlock.type === 'heading') {
                  dispatch({ type: "UPDATE_HEADING", pageId: selectedPage.id, blockId: selectedBlock.id, patch: { textStyle: { color } } });
                }
              }}
            />
          </label>

          {/* Nivel de heading */}
          {selectedBlock.type === 'heading' && (
            <>
              <div className="w-px h-4 bg-[var(--c-border)] mx-0.5" />
              <select
                className="text-xs border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-1.5 py-1 h-6 w-16 focus:outline-none"
                value={selectedBlock.level}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  dispatch({ type: "UPDATE_HEADING", pageId: selectedPage.id, blockId: selectedBlock.id, patch: { level: Number(e.target.value) as 1|2|3|4|5|6 } });
                }}
              >
                {[1,2,3,4,5,6].map((l) => <option key={l} value={l}>H{l}</option>)}
              </select>
            </>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Tipo de bloque */}
          <span className="text-xs text-[var(--c-muted)] px-2 py-1 rounded bg-[var(--c-bg)]">
            {selectedBlock.type === 'paragraph' ? '¶ Párrafo'
              : selectedBlock.type === 'heading' ? `H${(selectedBlock as { level: number }).level} Título`
              : selectedBlock.type === 'image' ? 'Imagen'
              : selectedBlock.type === 'divider' ? '─ Separador'
              : selectedBlock.type === 'pageBreak' ? 'Salto de página'
              : selectedBlock.type}
          </span>
        </div>
      )}

      {/* ===== MAIN 3-PANEL LAYOUT ===== */}
      <main className="flex flex-1 overflow-hidden min-h-0">
        {/* ===== LEFT SIDEBAR: Pages ===== */}
        <aside className="w-48 flex-shrink-0 border-r border-[var(--c-border)] bg-[var(--c-surface)] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-2 py-2 border-b border-[var(--c-border)]">
            <span className={editorCls.sidebarHeader}>
              Páginas
            </span>
            <button
              className="text-xs bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)] hover:opacity-80 text-[var(--c-primary)] rounded-lg px-1.5 py-0.5"
              onClick={() => dispatch({ type: "ADD_PAGE" })}
              title="Nueva página"
            >
              +
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {book.pages.map((page, idx) => {
              const isActive = state.selectedPageId === page.id;
              return (
                <div
                  key={page.id}
                  className={classNames(
                    "group flex items-center gap-1 px-2 py-1.5 cursor-pointer border-b border-[var(--c-border)] select-none",
                    isActive
                      ? editorCls.itemActive
                      : editorCls.itemInactive
                  )}
                  onClick={() => dispatch({ type: "SELECT_PAGE", pageId: page.id })}
                >
                  <div className="flex-1 min-w-0">
                    <p
                      className={classNames(
                        "text-xs truncate",
                        isActive ? "text-[var(--c-primary)] font-medium" : "text-[var(--c-text)]"
                      )}
                    >
                      {page.title || `Pág. ${idx + 1}`}
                    </p>
                    <p className="text-xs text-[var(--c-muted)]">{page.content.length} bloques</p>
                  </div>
                  {isActive && (
                    <div className="flex flex-col gap-0.5 opacity-0 group-hover:opacity-100">
                      <button
                        className="text-[var(--c-muted)] hover:text-[var(--c-text)] text-xs leading-none"
                        title="Mover arriba"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          dispatch({ type: "MOVE_PAGE", pageId: page.id, direction: "up" });
                        }}
                      >
                        ▲
                      </button>
                      <button
                        className="text-[var(--c-muted)] hover:text-[var(--c-text)] text-xs leading-none"
                        title="Mover abajo"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          dispatch({ type: "MOVE_PAGE", pageId: page.id, direction: "down" });
                        }}
                      >
                        ▼
                      </button>
                    </div>
                  )}
                  {isActive && (
                    <div className="flex gap-0.5 opacity-0 group-hover:opacity-100">
                      <button
                        className="text-[var(--c-muted)] hover:text-[var(--c-primary)] text-xs"
                        title="Duplicar"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          dispatch({ type: "DUPLICATE_PAGE", pageId: page.id });
                        }}
                      >
                        ⊕
                      </button>
                      <button
                        className="text-[var(--c-muted)] hover:text-[var(--c-danger)] text-xs"
                        title="Eliminar"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          if (
                            book.pages.length > 1 &&
                            window.confirm(`¿Eliminar "${page.title || `Pág. ${idx + 1}`}"? Esta acción no se puede deshacer.`)
                          ) {
                            dispatch({ type: "DELETE_PAGE", pageId: page.id });
                          }
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* ===== CENTER: Canvas ===== */}
        <section className="flex-1 overflow-y-auto flex flex-col">
          {selectedPage && (
            <div className="flex-shrink-0 bg-[var(--c-surface)] border-b border-[var(--c-border)] px-3 py-1.5 flex items-center gap-2">
              <AddBlockBar dispatch={dispatch} />
            </div>
          )}

          {selectedPage ? (
            <PageCanvas
              page={selectedPage}
              book={book}
              selectedBlockId={state.selectedBlockId}
              dispatch={dispatch}
              desktopView={desktopView}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-[var(--c-muted)] text-sm">
              Selecciona una página
            </div>
          )}
        </section>

        {/* ===== RIGHT SIDEBAR: Inspector ===== */}
        <aside className="w-72 flex-shrink-0 border-l border-[var(--c-border)] bg-[var(--c-surface)] flex flex-col overflow-hidden">
          <div className="flex-shrink-0 px-3 py-2 border-b border-[var(--c-border)]">
            <span className={editorCls.sidebarHeader}>
              Inspector
            </span>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* DOCUMENTO */}
            <InspectorCard title="Documento">
              <MetadataEditor book={book} dispatch={dispatch} />
            </InspectorCard>

            {/* PÁGINA */}
            <InspectorCard title="Página" defaultOpen={hasSelectedPage}>
              {selectedPage ? (
                <PageInspector page={selectedPage} dispatch={dispatch} />
              ) : (
                <p className="text-xs text-[var(--c-muted)] italic">Sin página seleccionada</p>
              )}
            </InspectorCard>

            {/* BLOQUE */}
            <InspectorCard title="Bloque" defaultOpen={hasSelectedBlock}>
              {selectedBlock && selectedPage ? (
                <BlockInspector
                  block={selectedBlock}
                  page={selectedPage}
                  book={book}
                  dispatch={dispatch}
                />
              ) : (
                <p className="text-xs text-[var(--c-muted)] italic">
                  Haz clic en un bloque para editarlo
                </p>
              )}
            </InspectorCard>

            {/* NOTAS */}
            <InspectorCard title="Notas / Glosario" defaultOpen={false}>
              <NotesPanel book={book} dispatch={dispatch} />
            </InspectorCard>
          </div>
        </aside>
      </main>

      {/* ===== MODALS ===== */}
      {showToc && (
        <TocModal book={book} dispatch={dispatch} onClose={() => setShowToc(false)} />
      )}
      {showAssets && (
        <AssetsModal book={book} dispatch={dispatch} onClose={() => setShowAssets(false)} />
      )}
      {showLibrary && (
        <LibraryModal dispatch={dispatch} onClose={() => setShowLibrary(false)} />
      )}
      {showJson && (
        <JsonModal book={book} onClose={() => setShowJson(false)} />
      )}
    </div>
  );
}
