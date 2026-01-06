import React, { useEffect, useMemo, useState, useCallback } from "react";

// import { useParams } from "react-router-dom";



// ===== Tipos base =====
type Book = {
  schema: string;
  metadata: {
    id: string;
    title: string;
    subtitle?: string;
    language?: string;
    difficulty?: number;
    paper_color?: string;
    text_color?: string;
    theme?: {
      paperColor?: string;
      textColor?: string;
      fontFamily?: string;
      baseFontSizePx?: number;
      lineHeight?: number;
    };
  };
  structure?: {
    pageNumbering?: { startAt?: number };
    index?: Array<{ id: string; title: string; pageStart: number; anchor: string }>;
  };
  assets?: Array<any>;
  pages: Array<Page>;
  notes?: Array<any>;
};

type Page = {
  id: string;
  number: number;
  title?: string;
  anchors?: Array<{ id: string; label?: string }>;
  content: Array<Block>;
  notesLinked?: string[]; // <- agregar esto
  meta?: { chapterId?: string; estimatedReadingSeconds?: number };
};

type Block =
  | { type: "heading"; id: string; level: 1 | 2 | 3 | 4 | 5 | 6; text: string; blockStyle?: BlockStyle; textStyle?: TextStyle }
  | { type: "paragraph"; id: string; text?: string; runs?: TextRun[]; blockStyle?: BlockStyle }
  | { type: "image"; id: string; assetId: string; caption?: string; blockStyle?: BlockStyle }
  | { type: "divider"; id: string }
  | { type: "pageBreak"; id: string };

type BlockStyle = {
  align?: "left" | "center" | "right" | "justify";
  spacingBeforePx?: number;
  spacingAfterPx?: number;
  indentFirstLinePx?: number;
};

type TextStyle = {
  fontFamily?: string;
  fontSizePx?: number;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

type TextRun = {
  text: string;
  style?: TextStyle & { superscript?: boolean; subscript?: boolean };
};

type ValidationIssue = { level: "error" | "warn"; message: string; path?: string };

// ===== Helpers UI-only =====
function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function prettyJson(obj: any) {
  return JSON.stringify(obj, null, 2);
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

// ===== Mock book inicial  =====
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
          blockStyle: { align: "center", spacingBeforePx: 24, spacingAfterPx: 12 },
          textStyle: { fontSizePx: 34, bold: true, color: "#1A1A1A", fontFamily: "serif" },
        },
        {
          type: "paragraph",
          id: "p001_par_001",
          blockStyle: { align: "justify", indentFirstLinePx: 28, spacingAfterPx: 12 },
          runs: [{ text: "Escribí acá…", style: { fontSizePx: 18 } }],
        },
      ],
      
      notesLinked: [],
      meta: { chapterId: "draft", estimatedReadingSeconds: 30 },
    },
  ],
  notes: [],
};


// ===== Componente principal =====
export default function BookEditorPage() {
  // const { bookId } = useParams(); 
  const [book, setBook] = useState<Book>(EMPTY_BOOK);

  // UI state
  const [selectedPageId, setSelectedPageId] = useState<string>(book.pages[0]?.id ?? "");
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  // Mobile tabs
  const [mobileTab, setMobileTab] = useState<"pages" | "content" | "inspector">("content");

  // Panels toggles
  const [showInspector, setShowInspector] = useState(true);

  // Preview toggle
  const [previewMode, setPreviewMode] = useState<"edit" | "preview">("edit");

  // Basic “dirty” state placeholder
  const [isDirty, setIsDirty] = useState(false);

  // JSON modal
  const [jsonModalOpen, setJsonModalOpen] = useState(false);
  const [jsonDraft, setJsonDraft] = useState("");

  // Validation drawer
  const [issuesOpen, setIssuesOpen] = useState(false);

  const selectedPage = useMemo(() => book.pages.find((p) => p.id === selectedPageId) ?? null, [book.pages, selectedPageId]);

  const selectedBlock = useMemo(() => {
    if (!selectedPage || !selectedBlockId) return null;
    return selectedPage.content.find((b) => (b as any).id === selectedBlockId) ?? null;
  }, [selectedPage, selectedBlockId]);

  // Demo validation (UI-only): detect repeated content block ids across pages + index anchors suspicious
  const validationIssues = useMemo<ValidationIssue[]>(() => {
    const issues: ValidationIssue[] = [];

    // repeated block ids
    const seen = new Map<string, string>(); // blockId -> pageId
    for (const p of book.pages) {
      for (const b of p.content) {
        const id = (b as any).id;
        if (!id) continue;
        if (seen.has(id)) {
          issues.push({
            level: "error",
            message: `ID de bloque repetido: "${id}" (en ${seen.get(id)} y ${p.id}).`,
            path: `pages[${p.id}].content`,
          });
        } else {
          seen.set(id, p.id);
        }
      }
    }

    // anchors in structure.index that look not aligned to page ids
    const toc = book.structure?.index ?? [];
    for (const item of toc) {
      if (item.anchor && item.anchor.startsWith("p1:")) {
        issues.push({
          level: "warn",
          message: `TOC anchor "${item.anchor}" parece genérico. Recomendado: "<pageId>:<anchorId>" (ej. "p025:a1").`,
          path: `structure.index[${item.id}]`,
        });
      }
    }

    return issues;
  }, [book]);
/*
  useEffect(() => {
    // Si cambia el libro y la página seleccionada desaparece
    if (selectedPageId && !book.pages.some((p) => p.id === selectedPageId)) {
      setSelectedPageId(book.pages[0]?.id ?? "");
      setSelectedBlockId(null);
    }
  }, [book.pages, selectedPageId]);
*/

useEffect(() => {
  try {
    const raw = localStorage.getItem("bookEditor:draft");
    if (raw) {
      const parsed = JSON.parse(raw) as Book;
      setBook(parsed);
      setSelectedPageId(parsed.pages?.[0]?.id ?? "");
      setSelectedBlockId(null);
      setIsDirty(false);
    }
  } catch (e) {
    console.error("No se pudo cargar el borrador:", e);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

useEffect(() => {
  try {
    localStorage.setItem("bookEditor:draft", JSON.stringify(book));
  } catch (e) {
    console.error("No se pudo guardar el borrador:", e);
  }
}, [book]);


  // ===== Acciones UI (lógica básica placeholder) =====
  function openJsonModal() {
    setJsonDraft(prettyJson(book));
    setJsonModalOpen(true);
  }

  function applyJsonDraft() {
    try {
      const parsed = JSON.parse(jsonDraft);
      setBook(parsed);
      setIsDirty(true);
      setJsonModalOpen(false);
      setSelectedBlockId(null);
      setSelectedPageId(parsed.pages?.[0]?.id ?? "");
    } catch (e: any) {
      alert("JSON inválido: " + (e?.message ?? "error"));
    }
  }

  function addPage() {
    // Lógica mínima por ahora: crear página vacía al final.
    const nextNumber = (book.pages.at(-1)?.number ?? 0) + 1;
    const nextId = `p${String(nextNumber).padStart(3, "0")}`;

    const newPage: Page = {
      id: nextId,
      number: nextNumber,
      title: `Página ${nextNumber}`,
      anchors: [{ id: "a1", label: "Inicio" }],
      content: [
        {
          type: "paragraph",
          id: `${nextId}_par_001`,
          blockStyle: { align: "left" },
          runs: [{ text: "" }],
        },
      ],
      meta: { chapterId: "ch01", estimatedReadingSeconds: 30 },
    };

    setBook((prev) => ({ ...prev, pages: [...prev.pages, newPage] }));
    setSelectedPageId(nextId);
    setSelectedBlockId(`${nextId}_par_001`);
    setIsDirty(true);
  }

  function addBlock(type: Block["type"]) {
    if (!selectedPage) return;
    const pageId = selectedPage.id;
    const idx = selectedPage.content.length + 1;

    let newBlock: Block;
    if (type === "heading") {
      newBlock = { type: "heading", id: `${pageId}_h1_${String(idx).padStart(3, "0")}`, level: 1, text: "Nuevo título", blockStyle: { align: "left" }, textStyle: { bold: true, fontSizePx: 26 } };
    } else if (type === "paragraph") {
      newBlock = { type: "paragraph", id: `${pageId}_par_${String(idx).padStart(3, "0")}`, blockStyle: { align: "justify", indentFirstLinePx: 24, spacingAfterPx: 10 }, runs: [{ text: "Nuevo párrafo..." }] };
    } else if (type === "image") {
      newBlock = { type: "image", id: `${pageId}_img_${String(idx).padStart(3, "0")}`, assetId: "asset-pendiente", caption: "Epígrafe...", blockStyle: { align: "center" } };
    } else if (type === "divider") {
      newBlock = { type: "divider", id: `${pageId}_div_${String(idx).padStart(3, "0")}` };
    } else {
      newBlock = { type: "pageBreak", id: `${pageId}_pb_${String(idx).padStart(3, "0")}` };
    }

    setBook((prev) => ({
      ...prev,
      pages: prev.pages.map((p) => (p.id === pageId ? { ...p, content: [...p.content, newBlock] } : p)),
    }));
    setSelectedBlockId((newBlock as any).id);
    setIsDirty(true);
  }

  // ===== Render helpers =====
  const paperColor = book.metadata.theme?.paperColor ?? book.metadata.paper_color ?? "#F5F1E6";
  const textColor = book.metadata.theme?.textColor ?? book.metadata.text_color ?? "#1B1B1B";
  const baseFontSize = book.metadata.theme?.baseFontSizePx ?? 18;
  const fontFamily = book.metadata.theme?.fontFamily ?? "serif";
  const lineHeight = book.metadata.theme?.lineHeight ?? 1.6;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-semibold">B</div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{book.metadata.title}</div>
              <div className="truncate text-xs text-slate-500">
                {book.metadata.id} · {book.schema} {isDirty ? "· sin guardar" : "· guardado"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className={classNames(
                "rounded-lg px-3 py-2 text-sm font-medium",
                previewMode === "edit" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"
              )}
              onClick={() => setPreviewMode("edit")}
            >
              Editar
            </button>
            <button
              className={classNames(
                "rounded-lg px-3 py-2 text-sm font-medium",
                previewMode === "preview" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"
              )}
              onClick={() => setPreviewMode("preview")}
            >
              Vista previa
            </button>

            <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={() => setIssuesOpen(true)}>
              Validación ({validationIssues.length})
            </button>

            <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={openJsonModal}>
              JSON
            </button>

            <button
              className="hidden sm:inline-flex rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium"
              onClick={() => setShowInspector((v) => !v)}
            >
              {showInspector ? "Ocultar" : "Mostrar"} inspector
            </button>
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="border-t bg-white sm:hidden">
          <div className="mx-auto flex max-w-7xl gap-2 px-3 py-2">
            {(["pages", "content", "inspector"] as const).map((t) => (
              <button
                key={t}
                className={classNames(
                  "flex-1 rounded-lg px-3 py-2 text-sm font-medium",
                  mobileTab === t ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"
                )}
                onClick={() => setMobileTab(t)}
              >
                {t === "pages" ? "Páginas" : t === "content" ? "Contenido" : "Inspector"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main layout */}
      <main className="mx-auto grid max-w-7xl gap-3 px-3 py-3 sm:grid-cols-[280px_1fr] sm:px-6 lg:grid-cols-[300px_1fr_340px]">
        {/* Sidebar: Pages */}
        <aside
          className={classNames(
            "rounded-2xl border bg-white p-3",
            "sm:block",
            mobileTab === "pages" ? "block" : "hidden sm:block"
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm font-semibold">Páginas</div>
            <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white" onClick={addPage}>
              + Hoja
            </button>
          </div>

          <div className="mt-3 space-y-2">
            <input
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Buscar página… (UI)"
              disabled
            />
            <div className="max-h-[70vh] overflow-auto pr-1">
              <ul className="space-y-1">
                {book.pages.map((p) => {
                  const active = p.id === selectedPageId;
                  return (
                    <li key={p.id}>
                      <button
                        className={classNames(
                          "w-full rounded-xl border px-3 py-2 text-left",
                          active ? "border-slate-900 bg-slate-50" : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                        )}
                        onClick={() => {
                          setSelectedPageId(p.id);
                          setSelectedBlockId(null);
                          setMobileTab("content");
                        }}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <div className="truncate text-sm font-semibold">{p.title ?? `Página ${p.number}`}</div>
                            <div className="truncate text-xs text-slate-500">{p.id} · Nº {p.number}</div>
                          </div>
                          <div className="text-xs text-slate-500">{p.content.length} bloques</div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>

        {/* Center: Editor / Preview */}
        <section className={classNames("rounded-2xl border bg-white p-3", mobileTab === "content" ? "block" : "hidden sm:block")}>
          {!selectedPage ? (
            <div className="grid place-items-center py-16 text-slate-500">No hay página seleccionada.</div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">
                    {selectedPage.title ?? `Página ${selectedPage.number}`} <span className="text-slate-400">·</span>{" "}
                    <span className="text-slate-500">{selectedPage.id}</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    Capítulo: {selectedPage.meta?.chapterId ?? "—"} · Tiempo estimado: {selectedPage.meta?.estimatedReadingSeconds ?? "—"}s
                  </div>
                </div>

                {previewMode === "edit" && (
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={() => addBlock("heading")}>
                      + Título
                    </button>
                    <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={() => addBlock("paragraph")}>
                      + Párrafo
                    </button>
                    <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={() => addBlock("image")}>
                      + Imagen
                    </button>
                    <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={() => addBlock("divider")}>
                      + Separador
                    </button>
                  </div>
                )}
              </div>

              {/* Canvas */}
              <div
                className="mt-3 rounded-2xl border p-4 sm:p-6"
                style={{
                  background: paperColor,
                  color: textColor,
                  fontFamily,
                  fontSize: baseFontSize,
                  lineHeight,
                }}
              >
                {previewMode === "preview" ? (
                  <PreviewPage page={selectedPage} onSelectBlock={() => {}} />
                ) : (
                  <EditPage
                    page={selectedPage}
                    selectedBlockId={selectedBlockId}
                    onSelectBlock={(id) => setSelectedBlockId(id)}
                  />
                )}
              </div>

              {/* Footer helper */}
              <div className="mt-3 text-xs text-slate-500">
                Consejos: mantené IDs únicos por bloque (ej. <code className="rounded bg-slate-100 px-1">p002_par_001</code>) y TOC anchors tipo{" "}
                <code className="rounded bg-slate-100 px-1">p025:a1</code>.
              </div>
            </>
          )}
        </section>

        {/* Inspector */}
        <aside
          className={classNames(
            "rounded-2xl border bg-white p-3",
            "lg:block",
            showInspector ? "block" : "hidden lg:block",
            mobileTab === "inspector" ? "block" : "hidden sm:hidden lg:block"
          )}
        >
          <div className="text-sm font-semibold">Inspector</div>
          <div className="mt-3 space-y-3">
            <InspectorCard title="Documento">
              <KV label="Título" value={book.metadata.title} />
              <KV label="Idioma" value={book.metadata.language ?? "—"} />
              <KV label="Dificultad" value={String(book.metadata.difficulty ?? "—")} />
              <KV label="Papel" value={paperColor} />
              <KV label="Texto" value={textColor} />
              <KV label="Fuente" value={fontFamily} />
            </InspectorCard>

            <InspectorCard title="Página seleccionada">
              {selectedPage ? (
                <>
                  <KV label="ID" value={selectedPage.id} />
                  <KV label="Número" value={String(selectedPage.number)} />
                  <KV label="Bloques" value={String(selectedPage.content.length)} />
                  <KV label="Anchor base" value={(selectedPage.anchors?.[0]?.id ?? "—") as string} />
                </>
              ) : (
                <div className="text-sm text-slate-500">—</div>
              )}
            </InspectorCard>

            <InspectorCard title="Bloque seleccionado">
              {selectedBlock ? (
                <>
                  <KV label="Tipo" value={selectedBlock.type} />
                  <KV label="ID" value={(selectedBlock as any).id} />
                  {"text" in selectedBlock && typeof (selectedBlock as any).text === "string" ? (
                    <div className="mt-2 text-xs text-slate-500 line-clamp-4">{(selectedBlock as any).text}</div>
                  ) : null}
                  {"runs" in selectedBlock && Array.isArray((selectedBlock as any).runs) ? (
                    <div className="mt-2 text-xs text-slate-500">Runs: {(selectedBlock as any).runs.length}</div>
                  ) : null}
                </>
              ) : (
                <div className="text-sm text-slate-500">Seleccioná un bloque para ver detalles.</div>
              )}
            </InspectorCard>

            <InspectorCard title="Acciones (UI)">
              <button className="w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white" onClick={() => downloadJson(book)}>
                Descargar
              </button>
              <button className="mt-2 w-full rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={() => setPreviewMode((m) => (m === "edit" ? "preview" : "edit"))}>
                Alternar vista
              </button>
              
            </InspectorCard>
          </div>
        </aside>
      </main>

      {/* JSON Modal */}
      {jsonModalOpen && (
        <Modal title="Editar JSON (temporal)" onClose={() => setJsonModalOpen(false)}>
          <div className="space-y-3">
            <div className="text-xs text-slate-600">
              Esto es solo para acelerar pruebas. En la lógica final, el editor va a generar/validar y exportar sin tocar JSON a mano.
            </div>
            <textarea
              className="h-[50vh] w-full rounded-xl border px-3 py-2 font-mono text-xs outline-none focus:ring-2 focus:ring-slate-300"
              value={jsonDraft}
              onChange={(e) => setJsonDraft(e.target.value)}
            />
            <div className="flex flex-wrap justify-end gap-2">
              <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={() => setJsonModalOpen(false)}>
                Cancelar
              </button>
              <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white" onClick={applyJsonDraft}>
                Aplicar JSON
              </button>
              
            </div>
          </div>
        </Modal>
      )}

      {/* Issues Drawer */}
      {issuesOpen && (
        <Modal title="Validación (preliminar)" onClose={() => setIssuesOpen(false)}>
          <div className="space-y-3">
            <div className="text-xs text-slate-600">
              Esta validación es mínima (UI). Luego implementamos el validador real: IDs únicos, anchors existentes, TOC ↔ páginas, notes ↔ referencias, assets ↔ uso, etc.
            </div>

            <div className="max-h-[55vh] overflow-auto rounded-xl border">
              {validationIssues.length === 0 ? (
                <div className="p-4 text-sm text-slate-600">Sin issues detectados.</div>
              ) : (
                <ul className="divide-y">
                  {validationIssues.map((it, i) => (
                    <li key={i} className="p-3">
                      <div className="flex items-start gap-2">
                        <span
                          className={classNames(
                            "mt-0.5 inline-flex rounded-full px-2 py-0.5 text-xs font-semibold",
                            it.level === "error" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                          )}
                        >
                          {it.level.toUpperCase()}
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm">{it.message}</div>
                          {it.path ? <div className="mt-1 text-xs text-slate-500">{it.path}</div> : null}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex justify-end">
              <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white" onClick={() => setIssuesOpen(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );









}

// ===== Subcomponentes =====

function EditPage(props: {
  page: Page;
  selectedBlockId: string | null;
  onSelectBlock: (id: string) => void;
}) {
  const { page, selectedBlockId, onSelectBlock } = props;

  return (
    <div className="space-y-3">
      {page.content.map((b) => {
        const id = (b as any).id as string;
        const active = selectedBlockId === id;

        return (
          <button
            key={id}
            className={classNames(
              "w-full rounded-xl border p-3 text-left transition",
              active ? "border-slate-900 bg-white/60" : "border-white/20 bg-white/30 hover:bg-white/50"
            )}
            onClick={() => onSelectBlock(id)}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs font-semibold text-slate-700">{b.type.toUpperCase()}</div>
              <div className="text-[11px] text-slate-500">{id}</div>
            </div>

            <div className="mt-2">
              <BlockRender block={b} />
            </div>
          </button>
        );
      })}
    </div>
  );
}

function PreviewPage(props: { page: Page; onSelectBlock: (id: string) => void }) {
  const { page } = props;
  return (
    <div className="space-y-3">
      {page.content.map((b) => (
        <div key={(b as any).id} className="rounded-xl">
          <BlockRender block={b} preview />
        </div>
      ))}
    </div>
  );
}

function BlockRender({ block, preview }: { block: Block; preview?: boolean }) {
  if (block.type === "divider") return <div className="my-2 border-t border-black/20" />;

  if (block.type === "pageBreak") {
    return (
      <div className="my-2 rounded-lg border border-dashed border-black/30 px-3 py-2 text-center text-xs text-black/70">
        Salto de página
      </div>
    );
  }

  if (block.type === "heading") {
    const align = block.blockStyle?.align ?? "left";
    const size = clamp(block.textStyle?.fontSizePx ?? (block.level === 1 ? 30 : 22), 14, 60);
    const style: React.CSSProperties = {
      textAlign: align,
      fontSize: size,
      fontWeight: block.textStyle?.bold ? 700 : 600,
      fontStyle: block.textStyle?.italic ? "italic" : "normal",
      textDecoration: block.textStyle?.underline ? "underline" : "none",
      color: block.textStyle?.color,
      fontFamily: block.textStyle?.fontFamily,
      marginTop: block.blockStyle?.spacingBeforePx ?? 0,
      marginBottom: block.blockStyle?.spacingAfterPx ?? 8,
    };
    return <div style={style}>{block.text}</div>;
  }

  if (block.type === "image") {
    const align = block.blockStyle?.align ?? "center";
    return (
      <div style={{ textAlign: align as any }}>
        <div className="inline-grid place-items-center rounded-xl border border-black/20 bg-white/40 px-6 py-10 text-xs text-black/70">
          Imagen (assetId: <span className="font-mono">{block.assetId}</span>)
        </div>
        {block.caption ? <div className="mt-2 text-sm italic opacity-80">{block.caption}</div> : null}
      </div>
    );
  }

  // paragraph
  const align = block.blockStyle?.align ?? "left";
  const indent = block.blockStyle?.indentFirstLinePx ?? 0;
  const style: React.CSSProperties = {
    textAlign: align,
    textIndent: indent ? `${indent}px` : undefined,
    marginTop: block.blockStyle?.spacingBeforePx ?? 0,
    marginBottom: block.blockStyle?.spacingAfterPx ?? 10,
  };

  // Soportar ambos: text o runs (para transición)
  const runs = block.runs ?? (typeof block.text === "string" ? [{ text: block.text }] : [{ text: "" }]);

  return (
    <p style={style} className={classNames(preview ? "opacity-95" : "opacity-90")}>
      {runs.map((r, i) => {
        const s = r.style ?? {};
        const spanStyle: React.CSSProperties = {
          fontFamily: s.fontFamily,
          fontSize: s.fontSizePx,
          color: s.color,
          fontWeight: s.bold ? 700 : undefined,
          fontStyle: s.italic ? "italic" : undefined,
          textDecoration: s.underline ? "underline" : undefined,
          verticalAlign: (s as any).superscript ? "super" : (s as any).subscript ? "sub" : undefined,
        };
        return (
          <span key={i} style={spanStyle}>
            {r.text}
          </span>
        );
      })}
    </p>
  );
}

function InspectorCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white p-3">
      <div className="text-xs font-semibold text-slate-700">{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 py-1">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="min-w-0 text-right text-xs font-semibold text-slate-800">{value}</div>
    </div>
  );
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-3">
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
          <div className="text-sm font-semibold">{title}</div>
          <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={onClose}>
            Cerrar
          </button>
          
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

function downloadJson(book: Book) {
  const blob = new Blob([JSON.stringify(book, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${book.metadata.id || "book"}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
