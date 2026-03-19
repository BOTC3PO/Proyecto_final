import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import type { ModuleQuiz, Module } from "../../domain/module/module.types";
import { MODULE_SUBJECT_CAPABILITIES } from "../../domain/module/module.types";
import TheoryItemCard, { type TheoryItem } from "../../components/modulos/TheoryItemCard";
import TheorySlideEditor from "../../components/modulos/TheorySlideEditor";
import QuizEditorManual from "../../components/modulos/QuizEditorManual";
import QuizEditorGenerated from "../../components/modulos/QuizEditorGenerated";
import QuizImportJson from "../../components/modulos/QuizImportJson";
import BlockEditorPage from "../../blocks/v2/BlockEditorPage";
import { deserializeBlockDocument } from "../../blocks/utils";
import {
  useModuloEditor,
  detailToPresentation,
  isBookType,
  isLinkType,
  isVideoType,
  isDocumentoType,
  isTuesdayType,
  isPresentationType,
  isHerramientaType,
  isHerramientaStandaloneType,
  type BookResult,
  type TuesdayResult,
} from "./useModuloEditor";
import { STANDALONE_TOOLS, parseStandaloneConfig, type RecetaConfig, type LineaTiempoConfig } from "../../components/modulos/standalone/types";
import { EscaladorRecetas } from "../../components/modulos/standalone/EscaladorRecetas";
import { LineaTiempo } from "../../components/modulos/standalone/LineaTiempo";

const SUBJECT_OPTIONS = Object.keys(MODULE_SUBJECT_CAPABILITIES);


export default function ModuloEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    status,
    message,
    validationErrors,
    form,
    updateForm,
    handleSubjectChange,
    subjectCapabilities,
    isEditing,
    theoryItems,
    newTheoryItem,
    setNewTheoryItem,
    handleAddTheoryItem,
    updateTheoryItem,
    removeTheoryItem,
    moveTheoryItem,
    slidesEditorFor,
    setSlidesEditorFor,
    slidesEditorItem,
    handleSlidesDone,
    blockEditorFor,
    setBlockEditorFor,
    blockEditorItem,
    handleBlockDone,
    quizzes,
    addQuiz,
    updateQuiz,
    removeQuiz,
    handleImportQuizzes,
    quizPreviewOpen,
    setQuizPreviewOpen,
    quizBlurErrors,
    validateQuizTitle,
    sectionStatus,
    bookSearch,
    setBookSearch,
    bookResults,
    bookLoading,
    bookPickerFor,
    setBookPickerFor,
    newBookTitle,
    clearBookTitle,
    openBookPicker,
    selectBook,
    searchBooks,
    tuesdaySearch,
    setTuesdaySearch,
    tuesdayResults,
    tuesdayLoading,
    tuesdayPickerFor,
    setTuesdayPickerFor,
    openTuesdayPicker,
    selectTuesdayDoc,
    searchTuesdayDocs,
    escuelaResults,
    escuelaSearch,
    setEscuelaSearch,
    escuelaLoading,
    searchEscuelas,
    depSearch,
    setDepSearch,
    depResults,
    clearDepResults,
    depLoading,
    depPickerOpen,
    setDepPickerOpen,
    addDependency,
    removeDependency,
    updateDependencyType,
    searchModules,
    handleSubmit,
  } = useModuloEditor(id, user, navigate);

  const isTeacher = user?.role === "TEACHER";

  const quizCountLabel =
    quizzes.length === 0
      ? "Sin cuestionarios"
      : `${quizzes.length} cuestionario${quizzes.length === 1 ? "" : "s"}`;

  const buildQuizPreviewItems = (quiz: ModuleQuiz) => {
    if (quiz.questions && quiz.questions.length > 0) {
      return quiz.questions.slice(0, 3).map((q, i) => ({
        id: q.id,
        label: `P${i + 1}: ${q.prompt}`,
      }));
    }
    const total = quiz.count ?? 3;
    if (!quiz.generatorId || total <= 0) {
      return [{ id: `${quiz.id}-empty`, label: "Sin preguntas ni generador configurado." }];
    }
    const hashStr = (value: string) => {
      let hash = 0;
      for (let i = 0; i < value.length; i += 1) {
        hash = (hash << 5) - hash + value.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    };
    const mulberry32 = (seed: number) => () => {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const seedSource = String(
      quiz.fixedSeed ?? `${quiz.id}:${quiz.generatorId}:${quiz.generatorVersion ?? 1}`,
    );
    const random = mulberry32(hashStr(seedSource));
    const previewCount = Math.min(total, 5);
    return Array.from({ length: previewCount }, (_, i) => {
      const token = Math.floor(random() * 900 + 100);
      return { id: `${quiz.id}-prev-${i + 1}`, label: `Pregunta ${i + 1} · semilla ${token}` };
    });
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* Slide editor overlay — rendered outside the form to avoid z-index issues */}
      {slidesEditorFor && slidesEditorItem ? (
        <TheorySlideEditor
          presentationTitle={slidesEditorItem.title}
          initialSlides={slidesEditorItem.slides}
          initialTheme={slidesEditorItem.theme}
          initialAccentColor={slidesEditorItem.accentColor}
          onDone={handleSlidesDone}
          onClose={() => setSlidesEditorFor(null)}
        />
      ) : null}

      {/* Block editor overlay — fullscreen, rendered outside the form */}
      {blockEditorFor && blockEditorItem ? (
        <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>
          <BlockEditorPage
            initialDocument={deserializeBlockDocument(blockEditorItem.detail)}
            onDone={handleBlockDone}
          />
        </div>
      ) : null}

      <main className="flex-1 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <header className="mb-10 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-8 shadow-lg shadow-indigo-200/50">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm">
              {isEditing ? "Editar módulo" : "Crear módulo"}
            </h1>
            <p className="mt-2 text-sm text-blue-100/90">
              Cargá teoría, cuestionarios manuales o generados para construir la experiencia del módulo.
            </p>
          </header>

          {status === "loading" ? (
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="animate-pulse space-y-4">
                  <div className="h-5 w-48 rounded-lg bg-gray-200" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="h-10 rounded-lg bg-gray-200" />
                    <div className="h-10 rounded-lg bg-gray-200" />
                  </div>
                  <div className="h-20 rounded-lg bg-gray-200" />
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="h-10 rounded-lg bg-gray-200" />
                    <div className="h-10 rounded-lg bg-gray-200" />
                    <div className="h-10 rounded-lg bg-gray-100" />
                    <div className="h-10 rounded-lg bg-gray-100" />
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="animate-pulse space-y-3">
                  <div className="h-5 w-32 rounded-lg bg-gray-200" />
                  <div className="h-24 rounded-lg bg-gray-100" />
                </div>
              </div>
              <p className="text-center text-sm text-gray-400">Cargando módulo...</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* ── Información general ── */}
              <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
                <div className="p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-sm">&#9881;</span>
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight">Información general</h2>
                  {sectionStatus.generalOk ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">&#10003; Completo</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">&#9888; Incompleto</span>
                  )}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128221; Título</span>
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50/50 px-3.5 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={form.title}
                      onChange={(event) => updateForm("title", event.target.value)}
                      required
                    />
                  </label>
                  <label className="block text-sm font-medium text-gray-700">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128193; Categoría</span>
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50/50 px-3.5 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={form.category}
                      onChange={(event) => updateForm("category", event.target.value)}
                      required
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-gray-700">
                  <span className="mb-1.5 flex items-center gap-1.5">&#128196; Descripción</span>
                  <textarea
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50/50 px-3.5 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    rows={3}
                    value={form.description}
                    onChange={(event) => updateForm("description", event.target.value)}
                    required
                  />
                </label>

                <div className="grid gap-5 md:grid-cols-4">
                  <label className="block text-sm font-medium text-gray-700">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128218; Materia</span>
                    <select
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50/50 px-3.5 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={form.subject}
                      onChange={(event) => handleSubjectChange(event.target.value)}
                      required
                    >
                      <option value="">-- Seleccionar --</option>
                      {SUBJECT_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm font-medium text-gray-700">
                    <span className="mb-1.5 flex items-center gap-1.5">&#127942; Nivel</span>
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50/50 px-3.5 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={form.level}
                      onChange={(event) => updateForm("level", event.target.value)}
                      required
                    />
                  </label>
                  <label className="block text-sm font-medium text-gray-700">
                    <span className="mb-1.5 flex items-center gap-1.5">&#9202; Duración (min)</span>
                    <input
                      type="number"
                      min={1}
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50/50 px-3.5 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={form.durationMinutes}
                      onChange={(event) => updateForm("durationMinutes", Number(event.target.value))}
                    />
                  </label>
                  <div className="text-sm font-medium text-gray-700">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128065; Visibilidad</span>
                    <select
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50/50 px-3.5 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={form.visibility}
                      onChange={(event) => {
                        updateForm("visibility", event.target.value as Module["visibility"]);
                        if (event.target.value === "escuela") {
                          searchEscuelas("");
                        }
                      }}
                    >
                      <option value="publico">Público</option>
                      <option value="privado">Privado (solo vos)</option>
                      <option value="escuela">Escuela</option>
                    </select>
                  </div>
                </div>

                {/* School picker — only shown when visibility = "escuela" */}
                {form.visibility === "escuela" ? (
                  <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-4 space-y-3 shadow-sm">
                    <p className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-amber-700 text-[10px]">&#127979;</span>
                      ¿A qué escuela aplica esta visibilidad?
                    </p>
                    {form.visibilitySchoolId ? (
                      <div className="flex items-center gap-3 rounded-lg bg-white/60 px-3 py-2">
                        <span className="text-xs text-amber-900">
                          Escuela seleccionada:{" "}
                          <strong>
                            {escuelaResults.find((e) => e.id === form.visibilitySchoolId)?.name ??
                              form.visibilitySchoolId}
                          </strong>
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700 transition-colors hover:bg-amber-200"
                          onClick={() => {
                            updateForm("visibilitySchoolId", "");
                            searchEscuelas("");
                          }}
                        >
                          Cambiar
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex gap-2">
                          <input
                            className="flex-1 rounded-lg border border-amber-200 bg-white px-3 py-2 text-xs shadow-sm transition-all focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100"
                            placeholder="Buscar escuela..."
                            value={escuelaSearch}
                            onChange={(e) => {
                              setEscuelaSearch(e.target.value);
                              searchEscuelas(e.target.value);
                            }}
                            onFocus={() => {
                              if (escuelaResults.length === 0) searchEscuelas("");
                            }}
                          />
                        </div>
                        {escuelaLoading ? (
                          <p className="text-xs text-gray-500 animate-pulse">Buscando...</p>
                        ) : escuelaResults.length > 0 ? (
                          <ul className="max-h-36 overflow-y-auto space-y-1 rounded-lg bg-white/60 p-1">
                            {escuelaResults.map((escuela) => (
                              <li key={escuela.id}>
                                <button
                                  type="button"
                                  className="w-full rounded-lg px-3 py-2 text-left text-xs text-gray-700 transition-colors hover:bg-amber-100 hover:text-amber-900"
                                  onClick={() => {
                                    updateForm("visibilitySchoolId", escuela.id);
                                    setEscuelaSearch("");
                                  }}
                                >
                                  {escuela.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs text-gray-400">
                            {escuelaSearch ? "Sin resultados." : "Escribí para buscar."}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ) : null}
                </div>
              </section>

              {/* ── Teoría ── */}
              <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500" />
                <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 text-sm">&#128214;</span>
                    <h2 className="text-lg font-bold text-gray-900 tracking-tight">Teoría</h2>
                    {sectionStatus.theoryOk ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">&#10003; Completo</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">&#9888; Sin recursos</span>
                    )}
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">{theoryItems.length} recursos</span>
                </div>

                {/* New theory item form */}
                <div className="space-y-3 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Agregar recurso</p>
                  <div className="grid gap-3 md:grid-cols-[1fr_180px]">
                    <input
                      className="rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      placeholder="Título del recurso"
                      value={newTheoryItem.title}
                      onChange={(event) =>
                        setNewTheoryItem((prev) => ({ ...prev, title: event.target.value }))
                      }
                    />
                    <select
                      className="rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      value={newTheoryItem.type}
                      onChange={(event) => {
                        const t = event.target.value;
                        setNewTheoryItem((prev) => ({ ...prev, type: t, detail: "" }));
                        setBookPickerFor(null);
                        setTuesdayPickerFor(null);
                        clearBookTitle();
                      }}
                    >
                      {subjectCapabilities.theoryTypes.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                          {opt.label}
                          {opt.disabled && opt.disabledReason ? ` — ${opt.disabledReason}` : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Detail field — conditional on type */}
                  {isBookType(newTheoryItem.type) ? (
                    <BookPicker
                      isOpen={bookPickerFor === "new"}
                      search={bookSearch}
                      results={bookResults}
                      loading={bookLoading}
                      selectedId={newTheoryItem.detail}
                      selectedTitle={newBookTitle}
                      onOpenPicker={() => openBookPicker("new")}
                      onSearch={(q) => { setBookSearch(q); searchBooks(q); }}
                      onSelect={selectBook}
                      onClose={() => setBookPickerFor(null)}
                    />
                  ) : isTuesdayType(newTheoryItem.type) ? (
                    <TuesdayPicker
                      isOpen={tuesdayPickerFor === "new"}
                      search={tuesdaySearch}
                      results={tuesdayResults}
                      loading={tuesdayLoading}
                      selectedId={newTheoryItem.detail}
                      onOpenPicker={() => openTuesdayPicker("new")}
                      onSearch={(q) => { setTuesdaySearch(q); searchTuesdayDocs(q); }}
                      onSelect={selectTuesdayDoc}
                      onClose={() => setTuesdayPickerFor(null)}
                    />
                  ) : isPresentationType(newTheoryItem.type) ? (
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">
                        {detailToPresentation(newTheoryItem.detail).slides.length === 0
                          ? "Sin diapositivas"
                          : `${detailToPresentation(newTheoryItem.detail).slides.length} diapositiva(s)`}
                      </span>
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 px-3 py-1.5 text-xs hover:bg-gray-100"
                        onClick={() => setSlidesEditorFor("new")}
                      >
                        {detailToPresentation(newTheoryItem.detail).slides.length === 0
                          ? "Crear presentación"
                          : "Editar presentación"}
                      </button>
                    </div>
                  ) : isHerramientaType(newTheoryItem.type) ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-100 transition-colors"
                        onClick={() => setBlockEditorFor("new")}
                      >
                        Abrir editor de bloques
                      </button>
                      {newTheoryItem.detail && (
                        <span className="text-xs text-gray-400">
                          {newTheoryItem.detail.startsWith("{")
                            ? "Documento local"
                            : `ID: ${newTheoryItem.detail.slice(0, 8)}…`}
                        </span>
                      )}
                    </div>
                  ) : isHerramientaStandaloneType(newTheoryItem.type) ? (
                    <div className="space-y-3">
                      <select
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-500"
                        value={(() => {
                          const cfg = parseStandaloneConfig(newTheoryItem.detail);
                          return cfg ? cfg.tool : newTheoryItem.detail;
                        })()}
                        onChange={(event) => {
                          const val = event.target.value;
                          if (val === "tabla-periodica") {
                            setNewTheoryItem((prev) => ({ ...prev, detail: "tabla-periodica" }));
                          } else if (val === "escalador-recetas") {
                            setNewTheoryItem((prev) => ({
                              ...prev,
                              detail: JSON.stringify({ tool: "escalador-recetas", titulo: "", porcionesBase: 1, ingredientes: [], pasos: [] } satisfies RecetaConfig),
                            }));
                          } else if (val === "linea-tiempo") {
                            setNewTheoryItem((prev) => ({
                              ...prev,
                              detail: JSON.stringify({ tool: "linea-tiempo", titulo: "", eventos: [] } satisfies LineaTiempoConfig),
                            }));
                          } else {
                            setNewTheoryItem((prev) => ({ ...prev, detail: val }));
                          }
                        }}
                      >
                        <option value="">Seleccionar herramienta...</option>
                        {STANDALONE_TOOLS.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                      {(() => {
                        const cfg = parseStandaloneConfig(newTheoryItem.detail);
                        if (cfg?.tool === "escalador-recetas") {
                          return (
                            <EscaladorRecetas
                              config={cfg}
                              onChange={(updated) =>
                                setNewTheoryItem((prev) => ({ ...prev, detail: JSON.stringify(updated) }))
                              }
                            />
                          );
                        }
                        if (cfg?.tool === "linea-tiempo") {
                          return (
                            <LineaTiempo
                              config={cfg}
                              onChange={(updated) =>
                                setNewTheoryItem((prev) => ({ ...prev, detail: JSON.stringify(updated) }))
                              }
                            />
                          );
                        }
                        return null;
                      })()}
                    </div>
                  ) : isVideoType(newTheoryItem.type) ? (
                    <div className="space-y-1">
                      <input
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                        placeholder="https://youtu.be/... o https://vimeo.com/..."
                        type="url"
                        value={newTheoryItem.detail}
                        onChange={(event) =>
                          setNewTheoryItem((prev) => ({ ...prev, detail: event.target.value }))
                        }
                      />
                      <p className="text-xs text-gray-400">
                        Soporta YouTube, Vimeo o un enlace directo a archivo de video.
                      </p>
                    </div>
                  ) : isDocumentoType(newTheoryItem.type) ? (
                    <div className="space-y-1">
                      <input
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                        placeholder="https://... (PDF, DOC, etc.)"
                        type="url"
                        value={newTheoryItem.detail}
                        onChange={(event) =>
                          setNewTheoryItem((prev) => ({ ...prev, detail: event.target.value }))
                        }
                      />
                      <p className="text-xs text-gray-400">
                        Enlace a un documento externo. Si es PDF, se mostrará como visor; otros tipos se ofrecen como descarga.
                      </p>
                    </div>
                  ) : isLinkType(newTheoryItem.type) ? (
                    <input
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="https://..."
                      type="url"
                      value={newTheoryItem.detail}
                      onChange={(event) =>
                        setNewTheoryItem((prev) => ({ ...prev, detail: event.target.value }))
                      }
                    />
                  ) : (
                    <textarea
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      rows={4}
                      placeholder="Escribí el contenido del texto aquí..."
                      value={newTheoryItem.detail}
                      onChange={(event) =>
                        setNewTheoryItem((prev) => ({ ...prev, detail: event.target.value }))
                      }
                    />
                  )}

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 hover:shadow-md active:scale-[0.98]"
                    onClick={handleAddTheoryItem}
                  >
                    <span className="text-base leading-none">+</span> Agregar recurso
                  </button>
                </div>

                {/* Existing theory items */}
                {theoryItems.length === 0 ? (
                  <div className="rounded-xl border-2 border-dashed border-gray-200 py-8 text-center">
                    <p className="text-sm text-gray-400">No hay elementos teóricos cargados.</p>
                    <p className="mt-1 text-xs text-gray-300">Usá el formulario de arriba para agregar recursos.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {theoryItems.map((item, itemIdx) => (
                      <div key={item.id} className="group rounded-xl border border-gray-200 bg-white p-4 space-y-2 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md">
                        <div className="flex items-start gap-3">
                          {/* Reorder buttons */}
                          <div className="flex flex-col gap-1 pt-0.5 shrink-0">
                            <button
                              type="button"
                              title="Mover arriba"
                              disabled={itemIdx === 0}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xs text-gray-500 transition-all hover:bg-white hover:border-gray-300 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-30"
                              onClick={() => moveTheoryItem(item.id, "up")}
                            >
                              ▲
                            </button>
                            <button
                              type="button"
                              title="Mover abajo"
                              disabled={itemIdx === theoryItems.length - 1}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xs text-gray-500 transition-all hover:bg-white hover:border-gray-300 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-30"
                              onClick={() => moveTheoryItem(item.id, "down")}
                            >
                              ▼
                            </button>
                          </div>
                          {/* Position label */}
                          <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 text-xs font-bold font-mono text-gray-600 shadow-sm">
                            {itemIdx + 1}
                          </span>
                          <div className="flex-1 space-y-3">
                            <TheoryItemCard item={item} />
                            <div className="flex flex-col gap-2">
                              <input
                                className="rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs shadow-sm transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                                placeholder="Título"
                                value={item.title}
                                onChange={(event) =>
                                  updateTheoryItem(item.id, { title: event.target.value })
                                }
                              />
                              {/* Detail editing — conditional on type */}
                              {isBookType(item.type) ? (
                                <ExistingBookField
                                  item={item}
                                  isOpen={bookPickerFor === item.id}
                                  search={bookSearch}
                                  results={bookResults}
                                  loading={bookLoading}
                                  onOpenPicker={() => openBookPicker(item.id)}
                                  onSearch={(q) => { setBookSearch(q); searchBooks(q); }}
                                  onSelect={selectBook}
                                  onClose={() => setBookPickerFor(null)}
                                />
                              ) : isTuesdayType(item.type) ? (
                                <ExistingTuesdayField
                                  item={item}
                                  isOpen={tuesdayPickerFor === item.id}
                                  search={tuesdaySearch}
                                  results={tuesdayResults}
                                  loading={tuesdayLoading}
                                  onOpenPicker={() => openTuesdayPicker(item.id)}
                                  onSearch={(q) => { setTuesdaySearch(q); searchTuesdayDocs(q); }}
                                  onSelect={selectTuesdayDoc}
                                  onClose={() => setTuesdayPickerFor(null)}
                                />
                              ) : isPresentationType(item.type) ? (
                                <div className="flex items-center gap-3">
                                  <span className="text-xs text-gray-500">
                                    {detailToPresentation(item.detail).slides.length} diapositiva(s)
                                  </span>
                                  <button
                                    type="button"
                                    className="text-xs text-blue-600 hover:underline"
                                    onClick={() => setSlidesEditorFor(item.id)}
                                  >
                                    Editar presentación
                                  </button>
                                </div>
                              ) : isVideoType(item.type) ? (
                                <div className="space-y-1">
                                  <input
                                    className="rounded-md border border-gray-300 px-2 py-2 text-xs w-full"
                                    placeholder="https://youtu.be/... o https://vimeo.com/..."
                                    type="url"
                                    value={item.detail}
                                    onChange={(event) =>
                                      updateTheoryItem(item.id, { detail: event.target.value })
                                    }
                                  />
                                  <p className="text-[11px] text-gray-400">YouTube, Vimeo o enlace directo a video.</p>
                                </div>
                              ) : isDocumentoType(item.type) ? (
                                <div className="space-y-1">
                                  <input
                                    className="rounded-md border border-gray-300 px-2 py-2 text-xs w-full"
                                    placeholder="https://... (PDF, DOC, etc.)"
                                    type="url"
                                    value={item.detail}
                                    onChange={(event) =>
                                      updateTheoryItem(item.id, { detail: event.target.value })
                                    }
                                  />
                                  <p className="text-[11px] text-gray-400">PDF → visor integrado · otros formatos → descarga.</p>
                                </div>
                              ) : isLinkType(item.type) ? (
                                <input
                                  className="rounded-md border border-gray-300 px-2 py-2 text-xs w-full"
                                  placeholder="https://..."
                                  value={item.detail}
                                  onChange={(event) =>
                                    updateTheoryItem(item.id, { detail: event.target.value })
                                  }
                                />
                              ) : isHerramientaType(item.type) ? (
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    className="rounded-md border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-100 transition-colors"
                                    onClick={() => setBlockEditorFor(item.id)}
                                  >
                                    Abrir editor de bloques
                                  </button>
                                  {item.detail && (
                                    <span className="text-xs text-gray-400">
                                      {item.detail.startsWith("{")
                                        ? "Documento local"
                                        : `ID: ${item.detail.slice(0, 8)}…`}
                                    </span>
                                  )}
                                </div>
                              ) : isHerramientaStandaloneType(item.type) ? (
                                <div className="space-y-3">
                                  <select
                                    className="w-full rounded-md border border-gray-300 px-2 py-2 text-xs text-gray-500"
                                    value={(() => {
                                      const cfg = parseStandaloneConfig(item.detail === "Sin detalle adicional." ? "" : item.detail);
                                      return cfg ? cfg.tool : "";
                                    })()}
                                    onChange={(event) => {
                                      const val = event.target.value;
                                      if (val === "tabla-periodica") {
                                        updateTheoryItem(item.id, { detail: "tabla-periodica" });
                                      } else if (val === "escalador-recetas") {
                                        updateTheoryItem(item.id, { detail: JSON.stringify({ tool: "escalador-recetas", titulo: "", porcionesBase: 1, ingredientes: [], pasos: [] } satisfies RecetaConfig) });
                                      } else if (val === "linea-tiempo") {
                                        updateTheoryItem(item.id, { detail: JSON.stringify({ tool: "linea-tiempo", titulo: "", eventos: [] } satisfies LineaTiempoConfig) });
                                      } else {
                                        updateTheoryItem(item.id, { detail: val });
                                      }
                                    }}
                                  >
                                    <option value="">Seleccionar herramienta...</option>
                                    {STANDALONE_TOOLS.map((t) => (
                                      <option key={t.value} value={t.value}>{t.label}</option>
                                    ))}
                                  </select>
                                  {(() => {
                                    const cfg = parseStandaloneConfig(item.detail === "Sin detalle adicional." ? "" : item.detail);
                                    if (cfg?.tool === "escalador-recetas") {
                                      return (
                                        <EscaladorRecetas
                                          config={cfg}
                                          onChange={(updated) =>
                                            updateTheoryItem(item.id, { detail: JSON.stringify(updated) })
                                          }
                                        />
                                      );
                                    }
                                    if (cfg?.tool === "linea-tiempo") {
                                      return (
                                        <LineaTiempo
                                          config={cfg}
                                          onChange={(updated) =>
                                            updateTheoryItem(item.id, { detail: JSON.stringify(updated) })
                                          }
                                        />
                                      );
                                    }
                                    return null;
                                  })()}
                                </div>
                              ) : (
                                <textarea
                                  className="rounded-md border border-gray-300 px-2 py-2 text-xs w-full"
                                  rows={3}
                                  value={item.detail}
                                  onChange={(event) =>
                                    updateTheoryItem(item.id, { detail: event.target.value })
                                  }
                                />
                              )}
                              <button
                                type="button"
                                className="self-start rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600 transition-all hover:bg-red-100 hover:border-red-300"
                                onClick={() => removeTheoryItem(item.id)}
                              >
                                Eliminar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                </div>
              </section>

              {/* ── Dependencias ── */}
              <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="h-1.5 bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400" />
                <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 text-sm">&#128279;</span>
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight">Dependencias</h2>
                  <span className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
                    Opcional
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  Indicá si este módulo requiere completar otro antes, o si desbloquea módulos al terminarse.
                </p>

                {form.dependencies.length > 0 ? (
                  <ul className="space-y-2">
                    {form.dependencies.map((dep) => (
                      <li
                        key={dep.id}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white px-4 py-3 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-600">&#128279;</span>
                        <span className="flex-1 truncate text-xs font-mono text-gray-700">{dep.id}</span>
                        <select
                          className="rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs shadow-sm transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                          value={dep.type}
                          onChange={(e) =>
                            updateDependencyType(dep.id, e.target.value as "required" | "unlocks")
                          }
                        >
                          <option value="required">Requerido antes</option>
                          <option value="unlocks">Desbloquea al terminar</option>
                        </select>
                        <button
                          type="button"
                          className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs font-medium text-red-600 transition-all hover:bg-red-100 hover:border-red-300"
                          onClick={() => removeDependency(dep.id)}
                        >
                          Quitar
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="rounded-xl border-2 border-dashed border-gray-200 py-6 text-center">
                    <p className="text-sm text-gray-400">Sin dependencias configuradas.</p>
                  </div>
                )}

                {depPickerOpen ? (
                  <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 space-y-3 shadow-sm">
                    <input
                      className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs shadow-sm transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      placeholder="Buscar módulo por título..."
                      value={depSearch}
                      autoFocus
                      onChange={(e) => {
                        setDepSearch(e.target.value);
                        searchModules(e.target.value);
                      }}
                    />
                    {depLoading ? (
                      <p className="text-xs text-gray-500 animate-pulse">Buscando...</p>
                    ) : depResults.length > 0 ? (
                      <ul className="max-h-40 overflow-y-auto space-y-1 rounded-lg bg-white/60 p-1">
                        {depResults
                          .filter((r) => r.id !== id)
                          .map((mod) => (
                            <li key={mod.id}>
                              <button
                                type="button"
                                className="w-full rounded-lg px-3 py-2 text-left text-xs text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-700"
                                onClick={() => addDependency(mod)}
                              >
                                {mod.title}
                                <span className="ml-1 text-gray-400">({mod.id})</span>
                              </button>
                            </li>
                          ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-gray-400">
                        {depSearch.length > 0 ? "Sin resultados." : "Escribí para buscar."}
                      </p>
                    )}
                    <button
                      type="button"
                      className="rounded-md bg-gray-100 px-3 py-1.5 text-xs text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
                      onClick={() => {
                        setDepPickerOpen(false);
                        setDepSearch("");
                        clearDepResults();
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="w-full rounded-xl border-2 border-dashed border-gray-300 px-4 py-3 text-xs font-medium text-gray-500 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600"
                    onClick={() => {
                      setDepPickerOpen(true);
                      searchModules("");
                    }}
                  >
                    + Agregar dependencia
                  </button>
                )}
                </div>
              </section>

              {/* ── Cuestionarios ── */}
              <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500" />
                <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600 text-sm">&#10068;</span>
                    <h2 className="text-lg font-bold text-gray-900 tracking-tight">Cuestionarios</h2>
                    {quizzes.length === 0 ? null : sectionStatus.quizzesOk ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">&#10003; Completo</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">&#9888; Con errores</span>
                    )}
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">{quizCountLabel}</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-violet-700 hover:shadow-md active:scale-[0.98]"
                    onClick={() => addQuiz("manual")}
                  >
                    <span className="text-base leading-none">+</span> Manual
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg border-2 border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-medium text-violet-700 shadow-sm transition-all duration-200 hover:bg-violet-100 hover:border-violet-300 active:scale-[0.98]"
                    onClick={() => addQuiz("generated")}
                  >
                    <span className="text-base leading-none">+</span> Generado
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <QuizImportJson onImportQuizzes={handleImportQuizzes} />
                </div>

                {quizzes.length === 0 ? (
                  <div className="rounded-xl border-2 border-dashed border-gray-200 py-8 text-center">
                    <p className="text-sm text-gray-400">No hay cuestionarios configurados.</p>
                    <p className="mt-1 text-xs text-gray-300">Usá los botones de arriba para agregar cuestionarios.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {quizzes.map((quiz) => (
                      <div key={quiz.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
                        <div className="h-1 bg-gradient-to-r from-violet-400 to-purple-400" />
                        <div className="p-5 space-y-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="grid flex-1 gap-4 md:grid-cols-3">
                            <label className="text-xs font-medium text-gray-600">
                              Título
                              <input
                                className={`mt-1 w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                                  quizBlurErrors[quiz.id]?.length
                                    ? "border-red-400 bg-red-50 focus:ring-red-100"
                                    : "border-gray-300 focus:border-violet-400 focus:ring-violet-100"
                                }`}
                                value={quiz.title}
                                onChange={(event) =>
                                  updateQuiz(quiz.id, { title: event.target.value })
                                }
                                onBlur={() => validateQuizTitle(quiz.id, quiz.title)}
                              />
                              {quizBlurErrors[quiz.id]?.map((err) => (
                                <span key={err} className="mt-1 block text-xs text-red-600">
                                  {err}
                                </span>
                              ))}
                            </label>
                            <label className="text-xs font-medium text-gray-600">
                              Tipo
                              <select
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
                                value={quiz.type}
                                onChange={(event) =>
                                  updateQuiz(quiz.id, {
                                    type: event.target.value as ModuleQuiz["type"],
                                  })
                                }
                              >
                                <option value="practica">Práctica</option>
                                <option value="evaluacion">Evaluación</option>
                                <option value="competencia">Competencia</option>
                              </select>
                            </label>
                            <label className="text-xs font-medium text-gray-600">
                              Visibilidad
                              <select
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm transition-all duration-200 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
                                value={quiz.visibility}
                                onChange={(event) =>
                                  updateQuiz(quiz.id, {
                                    visibility: event.target.value as ModuleQuiz["visibility"],
                                  })
                                }
                              >
                                <option value="publico">Público</option>
                                <option value="escuela">Escuela</option>
                              </select>
                            </label>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <button
                              type="button"
                              className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600 transition-all hover:bg-red-100 hover:border-red-300"
                              onClick={() => removeQuiz(quiz.id)}
                            >
                              Eliminar cuestionario
                            </button>
                            <button
                              type="button"
                              className="rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600 transition-all hover:bg-indigo-100 hover:border-indigo-300"
                              onClick={() =>
                                setQuizPreviewOpen((prev) => ({
                                  ...prev,
                                  [quiz.id]: !prev[quiz.id],
                                }))
                              }
                            >
                              {quizPreviewOpen[quiz.id] ? "Ocultar vista previa" : "Vista previa"}
                            </button>
                          </div>
                        </div>

                        {quizPreviewOpen[quiz.id] ? (
                          <div className="rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-4 text-xs text-indigo-700 shadow-sm">
                            <p className="mb-2 font-semibold">
                              Vista previa del estudiante (semilla fija, no registra intento)
                            </p>
                            <ul className="list-disc space-y-1 pl-4">
                              {buildQuizPreviewItems(quiz).map((item) => (
                                <li key={item.id}>{item.label}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        {quiz.mode === "generated" ? (
                          <QuizEditorGenerated
                            generatorId={quiz.generatorId ?? ""}
                            generatorVersion={quiz.generatorVersion ?? 1}
                            params={(quiz.params as Record<string, unknown>) ?? {}}
                            count={quiz.count ?? 0}
                            onChange={(next) => updateQuiz(quiz.id, { ...next })}
                            showPreview={isTeacher}
                          />
                        ) : (
                          <QuizEditorManual
                            questions={quiz.questions ?? []}
                            onChange={(next) => updateQuiz(quiz.id, { questions: next })}
                          />
                        )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                </div>
              </section>

              {/* ── Submit ── */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-70"
                  disabled={status === "saving"}
                >
                  {status === "saving"
                    ? "Guardando..."
                    : isEditing
                      ? "Guardar cambios"
                      : "Crear módulo"}
                </button>
                <div className="flex flex-col gap-2">
                  {message ? (
                    <span
                      className={`text-sm ${
                        status === "saved"
                          ? "text-emerald-600"
                          : status === "error"
                            ? "text-red-600"
                            : "text-gray-600"
                      }`}
                    >
                      {message}
                    </span>
                  ) : null}
                  {validationErrors.length > 0 ? (
                    <ul className="list-disc space-y-1 pl-5 text-sm text-red-600">
                      {validationErrors.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
}

// ─── Inline sub-components ────────────────────────────────────────────────────

type BookPickerProps = {
  isOpen: boolean;
  search: string;
  results: BookResult[];
  loading: boolean;
  selectedId: string;
  selectedTitle: string;
  onOpenPicker: () => void;
  onSearch: (q: string) => void;
  onSelect: (book: BookResult) => void;
  onClose: () => void;
};

function BookPicker({
  isOpen,
  search,
  results,
  loading,
  selectedId,
  selectedTitle,
  onOpenPicker,
  onSearch,
  onSelect,
  onClose,
}: BookPickerProps) {
  if (!isOpen) {
    return (
      <div className="flex items-center gap-3">
        {selectedId ? (
          <>
            <span className="text-xs text-gray-600">
              Libro: <strong>{selectedTitle || selectedId}</strong>
            </span>
            <button type="button" className="text-xs text-blue-600 hover:underline" onClick={onOpenPicker}>
              Cambiar
            </button>
          </>
        ) : (
          <button
            type="button"
            className="w-full rounded-md border border-dashed border-gray-300 px-3 py-2 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-600 text-left"
            onClick={onOpenPicker}
          >
            Seleccionar libro...
          </button>
        )}
        <a
          href="/editor"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-blue-600 hover:underline whitespace-nowrap"
        >
          + Crear nuevo ↗
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-blue-200 bg-blue-50 p-3 space-y-2">
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md border border-gray-300 px-2 py-1.5 text-xs"
          placeholder="Buscar libro por título..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(search)}
          autoFocus
        />
      </div>
      {loading ? (
        <p className="text-xs text-gray-500">Buscando...</p>
      ) : results.length > 0 ? (
        <ul className="space-y-0.5 max-h-40 overflow-y-auto">
          {results.map((book) => (
            <li key={book.id}>
              <button
                type="button"
                className="w-full text-left text-xs px-2 py-1.5 rounded hover:bg-white hover:text-blue-700 text-gray-700"
                onClick={() => onSelect(book)}
              >
                {book.title}
                <span className="text-gray-400 ml-1">({book.id})</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-gray-400">Sin resultados.</p>
      )}
      <div className="flex gap-3 pt-1 border-t border-blue-100">
        <a
          href="/editor"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-blue-600 hover:underline"
        >
          + Crear nuevo libro ↗
        </a>
        <button type="button" className="text-xs text-gray-400 hover:text-gray-600" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

type TuesdayPickerProps = {
  isOpen: boolean;
  search: string;
  results: TuesdayResult[];
  loading: boolean;
  selectedId: string;
  onOpenPicker: () => void;
  onSearch: (q: string) => void;
  onSelect: (doc: TuesdayResult) => void;
  onClose: () => void;
};

function TuesdayPicker({
  isOpen,
  search,
  results,
  loading,
  selectedId,
  onOpenPicker,
  onSearch,
  onSelect,
  onClose,
}: TuesdayPickerProps) {
  if (!isOpen) {
    return (
      <div className="flex items-center gap-3">
        {selectedId ? (
          <>
            <span className="text-xs text-gray-600">
              Documento: <strong>{selectedId}</strong>
            </span>
            <button type="button" className="text-xs text-blue-600 hover:underline" onClick={onOpenPicker}>
              Cambiar
            </button>
          </>
        ) : (
          <button
            type="button"
            className="w-full rounded-md border border-dashed border-gray-300 px-3 py-2 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-600 text-left"
            onClick={onOpenPicker}
          >
            Seleccionar documento TuesdayJS...
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-md border border-blue-200 bg-blue-50 p-3 space-y-2">
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md border border-gray-300 px-2 py-1.5 text-xs"
          placeholder="Buscar documento por título..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(search)}
          autoFocus
        />
      </div>
      {loading ? (
        <p className="text-xs text-gray-500">Buscando...</p>
      ) : results.length > 0 ? (
        <ul className="space-y-0.5 max-h-40 overflow-y-auto">
          {results.map((doc) => (
            <li key={doc.id}>
              <button
                type="button"
                className="w-full text-left text-xs px-2 py-1.5 rounded hover:bg-white hover:text-blue-700 text-gray-700"
                onClick={() => onSelect(doc)}
              >
                {doc.title}
                <span className="text-gray-400 ml-1">({doc.id})</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-gray-400">Sin resultados.</p>
      )}
      <div className="pt-1 border-t border-blue-100">
        <button type="button" className="text-xs text-gray-400 hover:text-gray-600" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

// Fields for existing theory items (book/tuesday pickers embedded inline)

type ExistingBookFieldProps = {
  item: TheoryItem;
  isOpen: boolean;
  search: string;
  results: BookResult[];
  loading: boolean;
  onOpenPicker: () => void;
  onSearch: (q: string) => void;
  onSelect: (book: BookResult) => void;
  onClose: () => void;
};

function ExistingBookField({
  item,
  isOpen,
  search,
  results,
  loading,
  onOpenPicker,
  onSearch,
  onSelect,
  onClose,
}: ExistingBookFieldProps) {
  return (
    <BookPicker
      isOpen={isOpen}
      search={search}
      results={results}
      loading={loading}
      selectedId={item.detail}
      selectedTitle={item.title}
      onOpenPicker={onOpenPicker}
      onSearch={onSearch}
      onSelect={onSelect}
      onClose={onClose}
    />
  );
}

type ExistingTuesdayFieldProps = {
  item: TheoryItem;
  isOpen: boolean;
  search: string;
  results: TuesdayResult[];
  loading: boolean;
  onOpenPicker: () => void;
  onSearch: (q: string) => void;
  onSelect: (doc: TuesdayResult) => void;
  onClose: () => void;
};

function ExistingTuesdayField({
  item,
  isOpen,
  search,
  results,
  loading,
  onOpenPicker,
  onSearch,
  onSelect,
  onClose,
}: ExistingTuesdayFieldProps) {
  return (
    <TuesdayPicker
      isOpen={isOpen}
      search={search}
      results={results}
      loading={loading}
      selectedId={item.detail}
      onOpenPicker={onOpenPicker}
      onSearch={onSearch}
      onSelect={onSelect}
      onClose={onClose}
    />
  );
}
