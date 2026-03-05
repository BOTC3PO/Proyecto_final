import React, { useEffect, useRef, useState, useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";
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

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

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
    title: "Nuevo libro",
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
          runs: [{ text: "Escribe aquí el contenido de tu libro." }],
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className={classNames(
          "bg-white rounded-lg shadow-2xl flex flex-col max-h-[90vh]",
          wide ? "w-[700px]" : "w-[520px]"
        )}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="font-semibold text-slate-800">{title}</span>
          <button
            className="text-slate-400 hover:text-slate-700 text-xl leading-none"
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
          : "text-slate-600 hover:bg-slate-100 disabled:opacity-30"
      )}
    >
      {label}
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
              ? "bg-indigo-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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

// ===== KV (Key-Value row) =====
function KV({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-500 w-20 shrink-0">{label}</span>
      <div className="flex-1">{children}</div>
    </div>
  );
}

// ===== Small input helpers =====
const inputCls =
  "w-full text-xs border border-slate-200 rounded px-1.5 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400";
const textareaCls =
  "w-full text-xs border border-slate-200 rounded px-1.5 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400 resize-none";

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
          className="w-full h-6 rounded border border-slate-200 cursor-pointer"
          value={th.paperColor ?? "#FFFFFF"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "UPDATE_THEME", patch: { paperColor: e.target.value } })
          }
        />
      </KV>
      <KV label="Color texto">
        <input
          type="color"
          className="w-full h-6 rounded border border-slate-200 cursor-pointer"
          value={th.textColor ?? "#000000"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "UPDATE_THEME", patch: { textColor: e.target.value } })
          }
        />
      </KV>
      <KV label="Tipografía">
        <select
          className={inputCls}
          value={th.fontFamily ?? "serif"}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch({ type: "UPDATE_THEME", patch: { fontFamily: e.target.value } })
          }
        >
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-serif</option>
          <option value="monospace">Mono</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="'Palatino Linotype', serif">Palatino</option>
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
        <p className="text-xs font-medium text-slate-500 mb-1">Anclas</p>
        {(page.anchors ?? []).length === 0 && (
          <p className="text-xs text-slate-400 italic">Sin anclas</p>
        )}
        {(page.anchors ?? []).map((a) => (
          <div key={a.id} className="flex items-center gap-1 mb-1">
            <span className="text-xs font-mono text-indigo-600 truncate max-w-[60px]">{a.id}</span>
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
            className="w-full text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded py-1"
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
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              K
            </button>
          </div>
        </KV>
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
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              K
            </button>
          </div>
        </KV>
      </div>
    );
  }

  if (block.type === "image") {
    const asset = (book.assets ?? []).find((a) => a.id === block.assetId);
    return (
      <div className="space-y-2">
        <KV label="Asset">
          <span className="text-xs text-slate-500 truncate block">{asset?.name ?? block.assetId}</span>
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
            className="w-full h-6 rounded border border-slate-200 cursor-pointer"
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

  return <p className="text-xs text-slate-400 italic">Sin opciones para este bloque</p>;
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
      {notes.length === 0 && <p className="text-xs text-slate-400 italic">Sin notas</p>}
      {notes.map((note) => (
        <div key={note.id} className="border border-slate-100 rounded p-2 space-y-1">
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
      <div className="border border-dashed border-slate-200 rounded p-2 space-y-1">
        <p className="text-xs font-medium text-slate-500">Nueva nota</p>
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
          className="w-full text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded py-1"
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

  // Build datalist of all page:anchor pairs
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
        <p className="text-sm text-slate-400 italic mb-4">Sin entradas de índice</p>
      )}

      <div className="space-y-2 mb-4">
        {entries.map((entry, idx) => (
          <div key={entry.id} className="flex items-center gap-1 border border-slate-100 rounded p-2">
            <div className="flex flex-col gap-0.5 mr-1">
              <button
                className="text-xs text-slate-400 hover:text-slate-700 leading-none"
                onClick={() =>
                  dispatch({ type: "MOVE_TOC_ENTRY", entryId: entry.id, direction: "up" })
                }
                disabled={idx === 0}
              >
                ▲
              </button>
              <button
                className="text-xs text-slate-400 hover:text-slate-700 leading-none"
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

      <div className="border border-dashed border-slate-200 rounded p-3 space-y-2">
        <p className="text-xs font-semibold text-slate-500">Nueva entrada</p>
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
          className="w-full text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded py-1"
          onClick={addEntry}
        >
          + Agregar entrada
        </button>
      </div>

      {/* ── Rendered preview ── */}
      {entries.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
            Vista previa del índice
          </p>
          <div
            className="rounded-lg border border-slate-200 bg-white p-6"
            style={{ fontFamily: book.metadata.theme?.fontFamily ?? "serif" }}
          >
            <h2 className="text-lg font-bold mb-4 text-slate-800 border-b border-slate-200 pb-2">
              Índice
            </h2>
            <div className="space-y-2">
              {entries.map((entry) => (
                <div key={entry.id} className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-800 shrink-0">{entry.title}</span>
                  <span
                    className="flex-1 border-b border-dotted border-slate-300 mb-1"
                    style={{ minWidth: 16 }}
                  />
                  <span className="text-sm text-slate-500 shrink-0 tabular-nums">
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
          className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={() => fileRef.current?.click()}
        >
          + Subir imagen
        </button>
      </div>

      {assets.length === 0 && (
        <p className="text-sm text-slate-400 italic">Sin assets</p>
      )}

      <div className="grid grid-cols-3 gap-3">
        {assets.map((a) => (
          <div key={a.id} className="border border-slate-200 rounded overflow-hidden group relative">
            {a.dataUrl.startsWith("data:image") ? (
              <img
                src={a.dataUrl}
                alt={a.name}
                className="w-full h-24 object-cover"
              />
            ) : (
              <div className="w-full h-24 bg-slate-100 flex items-center justify-center text-xs text-slate-400">
                {a.mimeType}
              </div>
            )}
            <div className="p-1 text-xs text-slate-600 truncate">{a.name}</div>
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
    <Modal title="Biblioteca de libros" onClose={onClose}>
      {loading && <p className="text-sm text-slate-500">Cargando...</p>}
      {err && <p className="text-sm text-red-500">{err}</p>}
      {!loading && !err && books.length === 0 && (
        <p className="text-sm text-slate-400 italic">Sin libros en el servidor</p>
      )}
      <div className="space-y-2">
        {books.map((b) => (
          <div
            key={b.id}
            className="flex items-center justify-between border border-slate-100 rounded p-2"
          >
            <div>
              <p className="text-sm font-medium text-slate-800">{b.title}</p>
              <p className="text-xs text-slate-400">{b.id}</p>
            </div>
            <button
              className="px-2 py-1 text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded"
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
    <Modal title="JSON del libro" onClose={onClose} wide>
      <pre className="text-xs bg-slate-50 rounded p-3 overflow-auto max-h-[60vh] whitespace-pre-wrap break-all">
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
  const paperColor = theme.paperColor ?? "#FFFFFF";
  const textColor = theme.textColor ?? "#000000";
  const fontFamily = theme.fontFamily ?? "serif";
  const basePx = theme.baseFontSizePx ?? 18;

  const pageIdx = page.content.findIndex((b) => b.id === block.id);
  const totalBlocks = page.content.length;

  // Shared style for selected block wrapper
  const wrapperCls = classNames(
    "relative group",
    isSelected ? "ring-2 ring-indigo-400 rounded" : "hover:ring-1 hover:ring-slate-300 rounded"
  );

  // Block toolbar (visible only when selected)
  const blockToolbar = isSelected ? (
    <div className="absolute -top-7 left-0 z-10 flex items-center gap-0.5 bg-white border border-slate-200 rounded shadow-sm px-1 py-0.5">
      <span className="text-xs text-slate-400 mr-1 font-mono">{block.type}</span>
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
    const style: React.CSSProperties = {
      fontFamily,
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
    const style: React.CSSProperties = {
      fontFamily,
      fontSize: basePx,
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
              rows={Math.max(3, Math.ceil(text.length / 60))}
              style={style}
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
                <div className="absolute inset-0 bg-indigo-600/20 flex items-center justify-center rounded">
                  <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                    Cambiar imagen en Inspector
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div
              className="w-full h-32 bg-slate-100 border-2 border-dashed border-slate-300 rounded flex items-center justify-center cursor-pointer hover:bg-slate-200"
            >
              <span className="text-slate-400 text-sm">
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
        <div className="py-2 px-1 border border-dashed border-slate-300 rounded text-center text-xs text-slate-400">
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
      className="rounded-lg shadow-xl mx-auto my-6 flex flex-col"
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
          <p className="text-center text-slate-300 italic text-sm py-16">
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
      <span className="text-xs text-slate-500 mr-1">+ Bloque:</span>
      {types.map(({ t, label }) => (
        <button
          key={t}
          className="px-2 py-0.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded"
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
  const location = useLocation();

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
            description: "Libro JSON",
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
          suggestedName: fsaFileName ?? `${book.metadata.title ?? "libro"}.json`,
          types: [
            {
              description: "Libro JSON",
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
    exportBookToDownload(book, fsaFileName ?? `${book.metadata.title ?? "libro"}.json`);
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
    try {
      const res = await saveBook(book);
      alert(`Guardado en servidor. ID: ${res.id}`);
      dispatch({ type: "MARK_DIRTY", dirty: false });
    } catch (e: unknown) {
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
      <div className="h-screen flex items-center justify-center bg-slate-100">
        <p className="text-slate-500 text-lg">Cargando editor…</p>
      </div>
    );
  }

  const issues = state.issues;
  const errorCount = issues.filter((i) => i.level === "error").length;
  const warnCount = issues.filter((i) => i.level === "warn").length;

  // Inspector sections visibility: open by default when relevant block selected
  const hasSelectedBlock = !!selectedBlock;
  const hasSelectedPage = !!selectedPage;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-slate-100">
      {/* ===== HEADER ===== */}
      <header className="flex-shrink-0 h-12 bg-slate-800 text-white flex items-center px-3 gap-2 shadow-md z-20">
        <span className="font-bold text-base mr-2 truncate max-w-[180px]" title={book.metadata.title}>
          {book.metadata.title || "Sin título"}
        </span>

        {state.dirty && (
          <span className="text-xs bg-amber-500 text-white px-1.5 py-0.5 rounded">
            Sin guardar
          </span>
        )}
        {fsaFileName && (
          <span className="text-xs text-slate-400 truncate max-w-[140px]" title={fsaFileName}>
            {fsaFileName}
          </span>
        )}

        <div className="flex-1" />

        {/* Undo/Redo */}
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded disabled:opacity-40"
          onClick={undo}
          disabled={!canUndo}
          title="Deshacer (Ctrl+Z)"
        >
          ↩ Deshacer
        </button>
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded disabled:opacity-40"
          onClick={redo}
          disabled={!canRedo}
          title="Rehacer (Ctrl+Y)"
        >
          ↪ Rehacer
        </button>

        <div className="w-px h-6 bg-slate-600 mx-1" />

        {/* FSA buttons */}
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
          onClick={openLocalFile}
          title="Abrir archivo local (File System Access API)"
        >
          Abrir local
        </button>
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
          onClick={saveLocalFile}
          title="Guardar en archivo local (Ctrl+S)"
        >
          Guardar local
        </button>

        <div className="w-px h-6 bg-slate-600 mx-1" />

        {/* Import/Export */}
        <input
          ref={importRef}
          type="file"
          accept=".json"
          className="hidden"
          onChange={handleImportFile}
        />
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
          onClick={() => importRef.current?.click()}
          title="Importar JSON"
        >
          Importar
        </button>
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
          onClick={() =>
            exportBookToDownload(book, `${book.metadata.title || "libro"}.json`)
          }
          title="Exportar JSON"
        >
          Exportar
        </button>
        <button
          className="px-2 py-1 text-xs bg-green-700 hover:bg-green-600 rounded"
          onClick={handleSaveServer}
          title="Guardar en servidor"
        >
          Guardar API
        </button>

        <div className="w-px h-6 bg-slate-600 mx-1" />

        {/* View toggle */}
        <button
          className={classNames(
            "px-2 py-1 text-xs rounded",
            desktopView
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-slate-700 hover:bg-slate-600 text-white"
          )}
          onClick={() => setDesktopView((v) => !v)}
          title="Alternar vista móvil / escritorio"
        >
          {desktopView ? "🖥 PC" : "📱 Móvil"}
        </button>

        <div className="w-px h-6 bg-slate-600 mx-1" />

        {/* Feature buttons */}
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
          onClick={() => setShowToc(true)}
        >
          Índice
        </button>
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
          onClick={() => setShowAssets(true)}
        >
          Imágenes
        </button>
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
          onClick={() => setShowLibrary(true)}
        >
          Biblioteca
        </button>
        <button
          className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
          onClick={() => setShowJson(true)}
        >
          JSON
        </button>

        {/* Issues badge */}
        {(errorCount > 0 || warnCount > 0) && (
          <div className="flex gap-1 ml-1">
            {errorCount > 0 && (
              <span className="text-xs bg-red-600 text-white px-1.5 py-0.5 rounded">
                {errorCount} error{errorCount > 1 ? "es" : ""}
              </span>
            )}
            {warnCount > 0 && (
              <span className="text-xs bg-amber-500 text-white px-1.5 py-0.5 rounded">
                {warnCount} aviso{warnCount > 1 ? "s" : ""}
              </span>
            )}
          </div>
        )}
      </header>

      {/* ===== MAIN 3-PANEL LAYOUT ===== */}
      <main className="flex flex-1 overflow-hidden min-h-0">
        {/* ===== LEFT SIDEBAR: Pages ===== */}
        <aside className="w-48 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-2 py-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Páginas
            </span>
            <button
              className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded px-1.5 py-0.5"
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
                    "group flex items-center gap-1 px-2 py-1.5 cursor-pointer border-b border-slate-50 select-none",
                    isActive
                      ? "bg-indigo-50 border-l-2 border-l-indigo-500"
                      : "hover:bg-slate-50"
                  )}
                  onClick={() => dispatch({ type: "SELECT_PAGE", pageId: page.id })}
                >
                  <div className="flex-1 min-w-0">
                    <p
                      className={classNames(
                        "text-xs truncate",
                        isActive ? "text-indigo-700 font-medium" : "text-slate-700"
                      )}
                    >
                      {page.title || `Pág. ${idx + 1}`}
                    </p>
                    <p className="text-xs text-slate-400">{page.content.length} bloques</p>
                  </div>
                  {isActive && (
                    <div className="flex flex-col gap-0.5 opacity-0 group-hover:opacity-100">
                      <button
                        className="text-slate-400 hover:text-slate-700 text-xs leading-none"
                        title="Mover arriba"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          dispatch({ type: "MOVE_PAGE", pageId: page.id, direction: "up" });
                        }}
                      >
                        ▲
                      </button>
                      <button
                        className="text-slate-400 hover:text-slate-700 text-xs leading-none"
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
                        className="text-slate-400 hover:text-indigo-600 text-xs"
                        title="Duplicar"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          dispatch({ type: "DUPLICATE_PAGE", pageId: page.id });
                        }}
                      >
                        ⊕
                      </button>
                      <button
                        className="text-slate-400 hover:text-red-600 text-xs"
                        title="Eliminar"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          if (book.pages.length > 1) {
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
          {/* Add block toolbar pinned at top of canvas area */}
          {selectedPage && (
            <div className="flex-shrink-0 bg-white border-b border-slate-200 px-3 py-1.5 flex items-center gap-2">
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
            <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
              Selecciona una página
            </div>
          )}
        </section>

        {/* ===== RIGHT SIDEBAR: Inspector ===== */}
        <aside className="w-72 flex-shrink-0 border-l border-slate-200 bg-white flex flex-col overflow-hidden">
          <div className="flex-shrink-0 px-3 py-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
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
                <p className="text-xs text-slate-400 italic">Sin página seleccionada</p>
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
                <p className="text-xs text-slate-400 italic">
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
