import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { Block, Book, Page } from "../domain/book/book.types";
import { useBookEditor } from "./state/useBookEditor";
import { ensureUniqueIds } from "./services/ids";
import { exportBookToDownload, importBookFromFile } from "./services/importExport";
import { migrateToV11ForEditor } from "./services/migrate";
import { fetchBook, fetchBooks, saveBook } from "./services/booksApi";

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

function prepareBookForEditor(input: Book): Book {
  const migrated = migrateToV11ForEditor(input);
  const { book } = ensureUniqueIds(migrated);
  return book;
}

// ===== Componente principal =====
export default function BookEditorPage() {
  const { id: routeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { state, dispatch, selectedPage, selectedBlock, runValidation } = useBookEditor();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // UI state
  // Mobile tabs
  const [mobileTab, setMobileTab] = useState<"pages" | "content" | "inspector">("content");

  // Panels toggles
  const [showInspector, setShowInspector] = useState(true);

  // Preview toggle
  const [previewMode, setPreviewMode] = useState<"edit" | "preview">("edit");

  // JSON modal
  const [jsonModalOpen, setJsonModalOpen] = useState(false);
  const [jsonDraft, setJsonDraft] = useState("");

  // Validation drawer
  const [issuesOpen, setIssuesOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [saveError, setSaveError] = useState<string | null>(null);
  const [draftSavedAt, setDraftSavedAt] = useState<string | null>(null);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [libraryInput, setLibraryInput] = useState("");
  const [libraryQuery, setLibraryQuery] = useState("");
  const [libraryPage, setLibraryPage] = useState(1);
  const [libraryLoading, setLibraryLoading] = useState(false);
  const [libraryError, setLibraryError] = useState<string | null>(null);
  const [libraryResults, setLibraryResults] = useState<{
    items: Array<{ id: string; title: string; createdAt?: string; updatedAt?: string }>;
    page: number;
    totalPages: number;
    total: number;
  } | null>(null);

  const book = state.book;
  const queryId = new URLSearchParams(location.search).get("id");
  const bookId = routeId ?? queryId ?? null;

  const handleBack = () => {
    const fallbackUrl = new URL("/profesor/modulos", window.location.origin);
    if (bookId) {
      fallbackUrl.searchParams.set("id", bookId);
    }

    const stateValue = location.state as { from?: string } | null;
    if (stateValue?.from) {
      const targetUrl = new URL(stateValue.from, window.location.origin);
      if (bookId && !targetUrl.searchParams.has("id")) {
        targetUrl.searchParams.set("id", bookId);
      }
      navigate(`${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`);
      return;
    }

    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate(`${fallbackUrl.pathname}${fallbackUrl.search}`);
  };

  useEffect(() => {
    let ignore = false;

    async function loadInitialBook() {
      setIsLoading(true);
      setLoadError(null);

      let loadedBook: Book | null = null;

      if (bookId) {
        try {
          const remote = await fetchBook(bookId);
          if (ignore) return;
          loadedBook = prepareBookForEditor(remote);
        } catch (e) {
          if (ignore) return;
          console.error("No se pudo cargar el libro remoto:", e);
          setLoadError("No se pudo cargar el libro remoto. Se usará el borrador local.");
        }
      }

      if (!loadedBook) {
        let fallback = EMPTY_BOOK;
        try {
          const raw = localStorage.getItem("bookEditor:draft");
          if (raw) {
            const parsed = JSON.parse(raw) as Book;
            fallback = parsed;
          }
        } catch (e) {
          console.error("No se pudo cargar el borrador:", e);
        }
        loadedBook = prepareBookForEditor(fallback);
      }

      dispatch({ type: "LOAD_BOOK", book: loadedBook });
      setIsLoading(false);
    }

    loadInitialBook();

    return () => {
      ignore = true;
    };
  }, [bookId, dispatch]);

  useEffect(() => {
    if (!libraryOpen) return;
    let ignore = false;

    async function loadLibrary() {
      setLibraryLoading(true);
      setLibraryError(null);
      try {
        const response = await fetchBooks({ q: libraryQuery || undefined, page: libraryPage, pageSize: 8 });
        if (ignore) return;
        setLibraryResults({
          items: response.items,
          page: response.page,
          totalPages: response.totalPages,
          total: response.total
        });
      } catch (e) {
        if (ignore) return;
        console.error("No se pudo cargar la biblioteca:", e);
        setLibraryError("No se pudieron cargar los libros guardados. Revisá tu conexión.");
      } finally {
        if (!ignore) setLibraryLoading(false);
      }
    }

    loadLibrary();
    return () => {
      ignore = true;
    };
  }, [libraryOpen, libraryQuery, libraryPage]);

  useEffect(() => {
    if (!book) return;
    try {
      localStorage.setItem("bookEditor:draft", JSON.stringify(book));
    } catch (e) {
      console.error("No se pudo guardar el borrador:", e);
    }
  }, [book]);

  useEffect(() => {
    if (!book) return;
    runValidation(book);
  }, [book, runValidation]);

  useEffect(() => {
    if (state.dirty && saveStatus === "saved") {
      setSaveStatus("idle");
    }
  }, [saveStatus, state.dirty]);

  // ===== Acciones UI (lógica básica placeholder) =====
  function openJsonModal() {
    if (!book) return;
    setJsonDraft(prettyJson(book));
    setJsonModalOpen(true);
  }

  function applyJsonDraft() {
    try {
      const parsed = prepareBookForEditor(JSON.parse(jsonDraft));
      dispatch({ type: "LOAD_BOOK", book: parsed });
      dispatch({ type: "MARK_DIRTY", dirty: true });
      setJsonModalOpen(false);
    } catch (e: any) {
      alert("JSON inválido: " + (e?.message ?? "error"));
    }
  }

  function addPage() {
    dispatch({ type: "ADD_PAGE" });
  }

  function addBlock(type: Block["type"]) {
    if (!selectedPage) return;
    dispatch({ type: "ADD_BLOCK", blockType: type });
  }

  async function handleImportFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const imported = await importBookFromFile(file);
      dispatch({ type: "LOAD_BOOK", book: imported });
      dispatch({ type: "MARK_DIRTY", dirty: true });
      setMobileTab("content");
    } catch (e: any) {
      alert("No se pudo importar el archivo: " + (e?.message ?? "error"));
    } finally {
      event.target.value = "";
    }
  }

  async function handleSaveRemote() {
    if (!book) return;
    setSaveStatus("saving");
    setSaveError(null);

    try {
      await saveBook(book);
      dispatch({ type: "MARK_DIRTY", dirty: false });
      setSaveStatus("saved");
    } catch (e: any) {
      console.error("No se pudo guardar:", e);
      setSaveStatus("error");
      setSaveError("No se pudo guardar en el servidor.");
    }
  }

  function handleSaveDraft() {
    if (!book) return;
    try {
      localStorage.setItem("bookEditor:draft", JSON.stringify(book));
      setDraftSavedAt(new Date().toISOString());
    } catch (e) {
      console.error("No se pudo guardar el borrador:", e);
      setSaveStatus("error");
      setSaveError("No se pudo guardar el borrador local.");
    }
  }

  function openLibrary() {
    setLibraryOpen(true);
    setLibraryInput("");
    setLibraryQuery("");
    setLibraryPage(1);
    setLibraryResults(null);
    setLibraryError(null);
  }

  async function handleOpenBook(id: string) {
    setLibraryError(null);
    setIsLoading(true);
    try {
      const remote = await fetchBook(id);
      const loaded = prepareBookForEditor(remote);
      dispatch({ type: "LOAD_BOOK", book: loaded });
      dispatch({ type: "MARK_DIRTY", dirty: false });
      setSaveStatus("idle");
      setLibraryOpen(false);
    } catch (e) {
      console.error("No se pudo abrir el libro:", e);
      setLibraryError("No se pudo abrir el libro seleccionado.");
    } finally {
      setIsLoading(false);
    }
  }

  //const validationIssues = state.issues;

  // ===== Render helpers =====
  const paperColor = book?.metadata.theme?.paperColor ?? book?.metadata.paper_color ?? "#F5F1E6";
  const textColor = book?.metadata.theme?.textColor ?? book?.metadata.text_color ?? "#1B1B1B";
  const baseFontSize = book?.metadata.theme?.baseFontSizePx ?? 18;
  const fontFamily = book?.metadata.theme?.fontFamily ?? "serif";
  const lineHeight = book?.metadata.theme?.lineHeight ?? 1.6;

  if (!book) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2 sm:px-6">
            <button
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
              onClick={handleBack}
              type="button"
            >
              Volver
            </button>
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 font-semibold text-white">B</div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">Editor de libros</div>
                <div className="truncate text-xs text-slate-500">Preparando editor…</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 animate-spin rounded-full border border-slate-300 border-t-transparent" />
                  Cargando…
                </div>
              ) : null}
              {loadError ? <span className="text-red-600">{loadError}</span> : null}
            </div>
          </div>
        </header>
        <div className="p-6">Cargando editor…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2 sm:px-6">
          <button
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            onClick={handleBack}
            type="button"
          >
            Volver
          </button>
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 font-semibold text-white">B</div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{book.metadata.title}</div>
              <div className="truncate text-xs text-slate-500">
                {book.metadata.id} · {book.schema} {state.dirty ? "· sin guardar" : "· guardado"}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                {isLoading ? (
                  <span className="inline-flex items-center gap-2 text-slate-500">
                    <span className="h-3 w-3 animate-spin rounded-full border border-slate-300 border-t-transparent" />
                    Cargando…
                  </span>
                ) : null}
                {saveStatus === "saving" ? <span className="text-slate-500">Guardando…</span> : null}
                {saveStatus === "saved" ? <span className="text-emerald-600">Guardado</span> : null}
                {saveStatus === "error" ? <span className="text-red-600">{saveError ?? "Error al guardar"}</span> : null}
                {draftSavedAt ? <span className="text-slate-400">Borrador local actualizado</span> : null}
                {loadError ? <span className="text-red-600">{loadError}</span> : null}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
              onClick={handleSaveRemote}
              disabled={saveStatus === "saving" || isLoading}
            >
              Guardar
            </button>
            <button
              className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60"
              onClick={handleSaveDraft}
              disabled={isLoading}
            >
              Guardar borrador local
            </button>
            <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium" onClick={openLibrary}>
              Abrir libro
            </button>
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

            <button
              className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium"
              onClick={() => {
                runValidation(book);
                setIssuesOpen(true);
              }}
            >
              Validación ({state.issues.length})
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
                  const active = p.id === state.selectedPageId;
                  return (
                    <li key={p.id}>
                      <button
                        className={classNames(
                          "w-full rounded-xl border px-3 py-2 text-left",
                          active ? "border-slate-900 bg-slate-50" : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                        )}
                        onClick={() => {
                          dispatch({ type: "SELECT_PAGE", pageId: p.id });
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
                  <PreviewPage page={selectedPage} />
                ) : (
                  <EditPage
                    page={selectedPage}
                    selectedBlockId={state.selectedBlockId}
                    onSelectBlock={(id) => dispatch({ type: "SELECT_BLOCK", blockId: id })}
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
                    <div className="mt-2 line-clamp-4 text-xs text-slate-500">{(selectedBlock as any).text}</div>
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
              <div className="space-y-2">
                <button
                  className="w-full rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Importar JSON
                </button>
                <button
                  className="w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white"
                  onClick={() => exportBookToDownload(book, `${book.metadata.id || "book"}.json`)}
                >
                  Exportar
                </button>
                <button
                  className="w-full rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium"
                  onClick={() => setPreviewMode((m) => (m === "edit" ? "preview" : "edit"))}
                >
                  Alternar vista
                </button>
              </div>
              <input ref={fileInputRef} type="file" accept="application/json" className="hidden" onChange={handleImportFile} />
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
              Esta validación usa el servicio compartido. Luego implementamos el validador real: IDs únicos, anchors existentes, TOC ↔ páginas, notes ↔ referencias, assets ↔ uso, etc.
            </div>

            <div className="max-h-[55vh] overflow-auto rounded-xl border">
              {state.issues.length === 0 ? (
                <div className="p-4 text-sm text-slate-600">Sin issues detectados.</div>
              ) : (
                <ul className="divide-y">
                  {state.issues.map((it, i) => (
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

      {libraryOpen && (
        <Modal title="Abrir libro guardado" onClose={() => setLibraryOpen(false)}>
          <div className="space-y-4">
            <form
              className="flex flex-wrap items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                setLibraryPage(1);
                setLibraryQuery(libraryInput.trim());
              }}
            >
              <input
                className="min-w-[220px] flex-1 rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Buscar por título o ID"
                value={libraryInput}
                onChange={(event) => setLibraryInput(event.target.value)}
              />
              <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white" type="submit">
                Buscar
              </button>
              <button
                className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium"
                type="button"
                onClick={() => {
                  setLibraryInput("");
                  setLibraryQuery("");
                  setLibraryPage(1);
                }}
              >
                Limpiar
              </button>
            </form>

            {libraryError ? <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{libraryError}</div> : null}

            <div className="rounded-xl border">
              <div className="divide-y">
                {libraryLoading ? (
                  <div className="px-4 py-6 text-center text-sm text-slate-500">Cargando libros...</div>
                ) : libraryResults?.items.length ? (
                  libraryResults.items.map((item) => (
                    <button
                      key={item.id}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50"
                      onClick={() => handleOpenBook(item.id)}
                    >
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">{item.title}</div>
                        <div className="truncate text-xs text-slate-500">{item.id}</div>
                      </div>
                      <div className="text-xs text-slate-400">
                        {item.updatedAt ? `Actualizado ${new Date(item.updatedAt).toLocaleDateString()}` : "Sin fecha"}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-slate-500">No hay libros guardados.</div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>
                {libraryResults ? `Página ${libraryResults.page} de ${libraryResults.totalPages} · ${libraryResults.total} libros` : "—"}
              </span>
              <div className="flex items-center gap-2">
                <button
                  className="rounded-lg border px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => setLibraryPage((p) => Math.max(1, p - 1))}
                  disabled={libraryLoading || (libraryResults?.page ?? 1) <= 1}
                >
                  Anterior
                </button>
                <button
                  className="rounded-lg border px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => setLibraryPage((p) => (libraryResults ? Math.min(libraryResults.totalPages, p + 1) : p + 1))}
                  disabled={libraryLoading || (libraryResults ? libraryResults.page >= libraryResults.totalPages : false)}
                >
                  Siguiente
                </button>
              </div>
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

function PreviewPage(props: { page: Page }) {
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
          verticalAlign: s.superscript ? "super" : s.subscript ? "sub" : undefined,
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
