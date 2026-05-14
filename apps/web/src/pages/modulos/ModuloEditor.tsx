import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
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
import { STANDALONE_TOOLS, parseStandaloneConfig, type RecetaConfig, type LineaTiempoConfig, type MapaConfig } from "../../components/modulos/standalone/types";
import { EscaladorRecetas } from "../../components/modulos/standalone/EscaladorRecetas";
import { LineaTiempo } from "../../components/modulos/standalone/LineaTiempo";

const SUBJECT_OPTIONS = Object.keys(MODULE_SUBJECT_CAPABILITIES);


export default function ModuloEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
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

  useEffect(() => {
    const state = location.state as
      { importedQuiz?: Record<string, unknown> } | null;
    if (!state?.importedQuiz) return;
    window.history.replaceState({}, "");
    handleImportQuizzes([state.importedQuiz as ModuleQuiz]);
  }, []);

  const [draftRestored, setDraftRestored] = useState(false);

  useEffect(() => {
    if (!id) {
      try {
        const raw = sessionStorage.getItem('modulo-draft:new');
        if (raw) {
          const draft = JSON.parse(raw);
          if (Date.now() - (draft.savedAt ?? 0) < 3_600_000) {
            setDraftRestored(true);
          }
        }
      } catch { /* ignorar */ }
    }
  }, [id]);

  const isTeacher = user?.role === "TEACHER";
  const isEvaluacionMode = form.category === "evaluacion";

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

      <main className="flex-1 bg-[var(--c-bg)] min-h-screen">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold text-[var(--c-text)]">
                {isEditing ? "Editar módulo" : "Crear módulo"}
              </h1>
              <p className="text-sm text-[var(--c-muted)] mt-0.5">
                Cargá teoría, cuestionarios manuales o generados para construir el módulo.
              </p>
            </div>
          </div>

          {status === "loading" ? (
            <div className="space-y-6">
              <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
                <div className="animate-pulse space-y-4">
                  <div className="h-5 w-48 rounded-lg bg-[var(--c-border)]" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="h-10 rounded-lg bg-[var(--c-border)]" />
                    <div className="h-10 rounded-lg bg-[var(--c-border)]" />
                  </div>
                  <div className="h-20 rounded-lg bg-[var(--c-border)]" />
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="h-10 rounded-lg bg-[var(--c-border)]" />
                    <div className="h-10 rounded-lg bg-[var(--c-border)]" />
                    <div className="h-10 rounded-lg bg-[var(--c-border)]" />
                    <div className="h-10 rounded-lg bg-[var(--c-border)]" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
                <div className="animate-pulse space-y-3">
                  <div className="h-5 w-32 rounded-lg bg-[var(--c-border)]" />
                  <div className="h-24 rounded-lg bg-[var(--c-border)]" />
                </div>
              </div>
              <p className="text-center text-sm text-[var(--c-muted)]">Cargando módulo...</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              {draftRestored && (
                <div className="flex items-center justify-between gap-3 rounded-xl border border-[color-mix(in_srgb,var(--c-warning)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-warning)_8%,transparent)] px-4 py-2.5">
                  <p className="text-xs text-[var(--c-warning)]">
                    📋 Se restauró un borrador de tu sesión anterior.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      sessionStorage.removeItem('modulo-draft:new');
                      setDraftRestored(false);
                      window.location.reload();
                    }}
                    className="text-xs text-[var(--c-muted)] hover:text-[var(--c-danger)] transition-colors flex-shrink-0"
                  >
                    Descartar borrador
                  </button>
                </div>
              )}
              {/* ── Información general ── */}
              <section className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)] text-sm">&#9881;</span>
                  <h2 className="text-lg font-bold text-[var(--c-text)] tracking-tight">Información general</h2>
                  {sectionStatus.generalOk ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">&#10003; Completo</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">&#9888; Incompleto</span>
                  )}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128221; Título</span>
                    <input
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      value={form.title}
                      onChange={(event) => updateForm("title", event.target.value)}
                      required
                    />
                  </label>
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128193; Categoría</span>
                    <select
                      value={form.category}
                      onChange={(e) => updateForm("category", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                    >
                      <option value="">Sin categoría</option>
                      <option value="evaluacion">📝 Evaluación</option>
                      <option value="competencia">🏆 Competencia</option>
                    </select>
                  </label>
                </div>

                <label className="block text-sm font-medium text-[var(--c-text)]">
                  <span className="mb-1.5 flex items-center gap-1.5">&#128196; Descripción</span>
                  <textarea
                    className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                    rows={3}
                    value={form.description}
                    onChange={(event) => updateForm("description", event.target.value)}
                    required
                  />
                </label>

                <div className="grid gap-5 md:grid-cols-4">
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128218; Materia</span>
                    <select
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
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
                  {!isEvaluacionMode && (
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#127942; Nivel</span>
                    <input
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      value={form.level}
                      onChange={(event) => updateForm("level", event.target.value)}
                    />
                  </label>
                  )}
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#9202; Duración (min)</span>
                    <input
                      type="number"
                      min={1}
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      value={form.durationMinutes}
                      onChange={(event) => updateForm("durationMinutes", Number(event.target.value))}
                    />
                  </label>
                  <div className="text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128065; Visibilidad</span>
                    <select
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
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
                  <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 space-y-3">
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
                            className={`flex-1 rounded-lg border px-3 py-2 text-xs transition-all focus:outline-none focus:ring-2 ${
                              form.visibility === "escuela" && !form.visibilitySchoolId
                                ? "border-red-300 bg-red-50/50 focus:border-red-400 focus:ring-red-100"
                                : "border-amber-200 bg-[var(--c-surface)] focus:border-amber-400 focus:ring-amber-100"
                            }`}
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

              {!isEvaluacionMode && (<>
              {/* ── Teoría ── */}
              <section className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)] text-sm">&#128214;</span>
                    <h2 className="text-lg font-bold text-[var(--c-text)] tracking-tight">Teoría</h2>
                    {sectionStatus.theoryOk ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">&#10003; Completo</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">&#9888; Sin recursos</span>
                    )}
                  </div>
                  <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-medium text-[var(--c-muted)]">{theoryItems.length} recursos</span>
                </div>

                {/* New theory item form */}
                <div className="space-y-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--c-muted)]">Agregar recurso</p>
                  <div className="grid gap-3 md:grid-cols-[1fr_180px]">
                    <input
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      placeholder="Título del recurso"
                      value={newTheoryItem.title}
                      onChange={(event) =>
                        setNewTheoryItem((prev) => ({ ...prev, title: event.target.value }))
                      }
                    />
                    <select
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
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
                        className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
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
                        className="rounded-lg border border-[var(--c-border)] bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:opacity-80 transition-opacity"
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
                        className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
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
                          } else if (val === "mapa") {
                            setNewTheoryItem((prev) => ({
                              ...prev,
                              detail: JSON.stringify({ tool: "mapa", titulo: "", modo: "political", escala: "110m", anotaciones: [] } satisfies MapaConfig),
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
                        if (cfg?.tool === "mapa") {
                          const ssKey = `new-mapa-${Date.now()}`;
                          return (
                            <div className="rounded-lg border border-teal-200 bg-teal-50 p-3 flex items-center gap-3">
                              <span className="text-xs text-teal-700 flex-1">Mapa configurado ({cfg.anotaciones.length} anotaciones)</span>
                              <button
                                type="button"
                                className="rounded-md border border-teal-400 bg-white px-3 py-1.5 text-xs font-medium text-teal-700 hover:bg-teal-50"
                                onClick={() => {
                                  sessionStorage.setItem(`mapa-doc:${ssKey}`, JSON.stringify(cfg));
                                  const win = window.open(`/herramientas/mapa-editor?sskey=${ssKey}`, "_blank");
                                  if (!win) return;
                                  const timer = setInterval(() => {
                                    if (win.closed) {
                                      clearInterval(timer);
                                      try {
                                        const raw = sessionStorage.getItem(`mapa-doc:${ssKey}:result`);
                                        if (raw) {
                                          const updated = JSON.parse(raw) as MapaConfig;
                                          setNewTheoryItem((prev) => ({ ...prev, detail: JSON.stringify(updated) }));
                                        }
                                      } catch { /* ignore */ }
                                    }
                                  }, 500);
                                }}
                              >
                                Abrir editor de mapa
                              </button>
                            </div>
                          );
                        }
                        return null;
                      })()}
                    </div>
                  ) : isVideoType(newTheoryItem.type) ? (
                    <div className="space-y-1">
                      <input
                        className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
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
                        className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
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
                      className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                      placeholder="https://..."
                      type="url"
                      value={newTheoryItem.detail}
                      onChange={(event) =>
                        setNewTheoryItem((prev) => ({ ...prev, detail: event.target.value }))
                      }
                    />
                  ) : (
                    <textarea
                      className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
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
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--c-success)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
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
                      <div key={item.id} className="group rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 space-y-2 transition-colors hover:border-[var(--c-primary)]/30">
                        <div className="flex items-start gap-3">
                          {/* Reorder buttons */}
                          <div className="flex flex-col gap-1 pt-0.5 shrink-0">
                            <button
                              type="button"
                              title="Mover arriba"
                              disabled={itemIdx === 0}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-xs text-[var(--c-muted)] transition-colors hover:bg-[var(--c-surface)] disabled:cursor-not-allowed disabled:opacity-30"
                              onClick={() => moveTheoryItem(item.id, "up")}
                            >
                              ▲
                            </button>
                            <button
                              type="button"
                              title="Mover abajo"
                              disabled={itemIdx === theoryItems.length - 1}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-xs text-[var(--c-muted)] transition-colors hover:bg-[var(--c-surface)] disabled:cursor-not-allowed disabled:opacity-30"
                              onClick={() => moveTheoryItem(item.id, "down")}
                            >
                              ▼
                            </button>
                          </div>
                          {/* Position label */}
                          <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--c-border)] text-xs font-bold font-mono text-[var(--c-muted)]">
                            {itemIdx + 1}
                          </span>
                          <div className="flex-1 space-y-3">
                            <TheoryItemCard item={item} />
                            <div className="flex flex-col gap-2">
                              <input
                                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-xs transition-colors focus:border-[var(--c-primary)] focus:outline-none"
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
                                    className="text-xs text-[var(--c-primary)] hover:underline"
                                    onClick={() => setSlidesEditorFor(item.id)}
                                  >
                                    Editar presentación
                                  </button>
                                </div>
                              ) : isVideoType(item.type) ? (
                                <div className="space-y-1">
                                  <input
                                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-2 text-xs w-full focus:border-[var(--c-primary)] focus:outline-none"
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
                                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-2 text-xs w-full focus:border-[var(--c-primary)] focus:outline-none"
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
                                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-2 text-xs w-full focus:border-[var(--c-primary)] focus:outline-none"
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
                                    className="rounded-lg border border-[var(--c-border)] bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:opacity-80 transition-opacity"
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
                                    className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-2 text-xs focus:border-[var(--c-primary)] focus:outline-none"
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
                                      } else if (val === "mapa") {
                                        updateTheoryItem(item.id, { detail: JSON.stringify({ tool: "mapa", titulo: "", modo: "political", escala: "110m", anotaciones: [] } satisfies MapaConfig) });
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
                                    if (cfg?.tool === "mapa") {
                                      const ssKey = `mapa-${item.id}`;
                                      return (
                                        <div className="rounded-lg border border-teal-200 bg-teal-50 p-3 flex items-center gap-3">
                                          <span className="text-xs text-teal-700 flex-1">
                                            Mapa {cfg.modo === "political" ? "político" : "físico"} ({cfg.anotaciones.length} anotaciones)
                                          </span>
                                          <button
                                            type="button"
                                            className="rounded-md border border-teal-400 bg-white px-3 py-1.5 text-xs font-medium text-teal-700 hover:bg-teal-50"
                                            onClick={() => {
                                              sessionStorage.setItem(`mapa-doc:${ssKey}`, JSON.stringify(cfg));
                                              const win = window.open(`/herramientas/mapa-editor?sskey=${ssKey}`, "_blank");
                                              if (!win) return;
                                              const timer = setInterval(() => {
                                                if (win.closed) {
                                                  clearInterval(timer);
                                                  try {
                                                    const raw = sessionStorage.getItem(`mapa-doc:${ssKey}:result`);
                                                    if (raw) {
                                                      const updated = JSON.parse(raw) as MapaConfig;
                                                      updateTheoryItem(item.id, { detail: JSON.stringify(updated) });
                                                    }
                                                  } catch { /* ignore */ }
                                                }
                                              }, 500);
                                            }}
                                          >
                                            Abrir editor de mapa
                                          </button>
                                        </div>
                                      );
                                    }
                                    return null;
                                  })()}
                                </div>
                              ) : (
                                <textarea
                                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-2 text-xs w-full focus:border-[var(--c-primary)] focus:outline-none"
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
              </>)}

              {!isEvaluacionMode && (<>
              {/* ── Dependencias ── */}
              <section className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)] text-sm">&#128279;</span>
                  <h2 className="text-lg font-bold text-[var(--c-text)] tracking-tight">Dependencias</h2>
                  <span className="rounded-full bg-[var(--c-bg)] px-2 py-0.5 text-xs font-medium text-[var(--c-muted)]">
                    Opcional
                  </span>
                </div>
                <p className="text-xs text-[var(--c-muted)]">
                  Indicá si este módulo requiere completar otro antes, o si desbloquea módulos al terminarse.
                </p>

                {form.dependencies.length > 0 ? (
                  <ul className="space-y-2">
                    {form.dependencies.map((dep) => (
                      <li
                        key={dep.id}
                        className="flex items-center gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] px-4 py-3 transition-colors hover:border-[var(--c-primary)]/30"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--c-border)] text-[10px] font-bold text-[var(--c-muted)]">&#128279;</span>
                        <span className="flex-1 truncate text-xs font-mono text-[var(--c-text)]">{dep.id}</span>
                        <select
                          className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2.5 py-1.5 text-xs focus:border-[var(--c-primary)] focus:outline-none"
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
                  <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 space-y-3">
                    <input
                      className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-xs focus:border-[var(--c-primary)] focus:outline-none"
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
                                className="w-full rounded-lg px-3 py-2 text-left text-xs text-[var(--c-text)] transition-colors hover:bg-[var(--c-surface)] hover:text-[var(--c-primary)]"
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
                    className="w-full rounded-xl border-2 border-dashed border-[var(--c-border)] px-4 py-3 text-xs font-medium text-[var(--c-muted)] transition-colors hover:border-[var(--c-primary)] hover:text-[var(--c-primary)]"
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
              </>)}

              {isEvaluacionMode && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <p className="text-sm font-semibold text-amber-800">Modo Evaluación</p>
                  <p className="text-xs text-amber-700 mt-1">
                    El módulo está configurado como evaluación. El alumno ve directamente el
                    cuestionario sin sección de teoría. Usá las instrucciones del cuestionario
                    para dar contexto.
                  </p>
                </div>
              </div>
              )}

              {/* ── Cuestionarios ── */}
              <section className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)] text-sm">&#10068;</span>
                    <h2 className="text-lg font-bold text-[var(--c-text)] tracking-tight">Cuestionarios</h2>
                    {quizzes.length === 0 ? null : sectionStatus.quizzesOk ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">&#10003; Completo</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">&#9888; Con errores</span>
                    )}
                  </div>
                  <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-medium text-[var(--c-muted)]">{quizCountLabel}</span>
                </div>

                <div className="flex flex-wrap items-start gap-3">
                  {/* Cuestionario manual — preguntas escritas por el profesor */}
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                    onClick={() => {
                      const returnTo = id
                        ? `/modulos/${id}/editar`
                        : `/modulos/crear`;
                      navigate(
                        `/profesor/editor-cuestionarios?moduleId=${
                          id ?? "nuevo"
                        }&mode=manual&returnTo=${encodeURIComponent(returnTo)}`
                      );
                    }}
                  >
                    <span className="text-base leading-none">✏️</span>
                    Cuestionario manual
                  </button>

                  {/* Ejercicios generados — solo si la materia lo soporta */}
                  {subjectCapabilities?.generators && (
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--c-success)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                      onClick={() => {
                        const returnTo = id
                          ? `/modulos/${id}/editar`
                          : `/modulos/crear`;
                        navigate(
                          `/profesor/editor-cuestionarios?moduleId=${
                            id ?? "nuevo"
                          }&mode=generated&returnTo=${encodeURIComponent(returnTo)}`
                        );
                      }}
                    >
                      <span className="text-base leading-none">⚡</span>
                      Ejercicios generados
                    </button>
                  )}

                  <QuizImportJson onImportQuizzes={handleImportQuizzes} />
                </div>

                {/* Leyenda explicativa */}
                <div className="flex flex-wrap gap-3 text-xs text-[var(--c-muted)]">
                  <span>
                    ✏️ <strong>Manual</strong> — escribís las preguntas vos mismo
                  </span>
                  {subjectCapabilities?.generators && (
                    <span>
                      ⚡ <strong>Generados</strong> — ejercicios automáticos infinitos según la materia
                    </span>
                  )}
                </div>

                {quizzes.length === 0 ? (
                  <div className="rounded-xl border-2 border-dashed border-gray-200 py-8 text-center">
                    <p className="text-sm text-gray-400">No hay cuestionarios configurados.</p>
                    <p className="mt-1 text-xs text-gray-300">Usá los botones de arriba para agregar cuestionarios.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {quizzes.map((quiz) => (
                      <div key={quiz.id} className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                        <div className="p-5 space-y-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="grid flex-1 gap-4 md:grid-cols-3">
                            <label className="text-xs font-medium text-[var(--c-muted)]">
                              Título
                              <input
                                className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm text-[var(--c-text)] transition-colors focus:outline-none ${
                                  quizBlurErrors[quiz.id]?.length
                                    ? "border-red-400 bg-red-50"
                                    : "border-[var(--c-border)] bg-[var(--c-bg)] focus:border-[var(--c-primary)]"
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
                            <label className="text-xs font-medium text-[var(--c-muted)]">
                              Tipo
                              <select
                                className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                                value={quiz.type}
                                onChange={(event) =>
                                  updateQuiz(quiz.id, {
                                    type: event.target.value as ModuleQuiz["type"],
                                  })
                                }
                              >
                                <option value="practica">Práctica — no cuenta para la nota</option>
                                <option value="formal">Evaluación formal — cuenta para la nota</option>
                                <option value="competencia">Competencia</option>
                              </select>
                              {quiz.type === "formal" && (
                                <p className="text-xs text-amber-600 mt-1">
                                  Este cuestionario contará para la nota final del alumno.
                                </p>
                              )}
                              {quiz.type === "practica" && (
                                <p className="text-xs text-slate-400 mt-1">
                                  Este cuestionario es de práctica y no afecta la nota.
                                </p>
                              )}
                            </label>
                            <label className="text-xs font-medium text-[var(--c-muted)]">
                              Visibilidad
                              <select
                                className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
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
                              className="rounded-lg border border-[var(--c-border)] bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:opacity-80 transition-opacity"
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
                          <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 text-xs text-[var(--c-muted)]">
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

                        <label className="text-xs font-medium text-[var(--c-muted)]">
                          Instrucciones para el alumno
                          <span className="ml-1 font-normal text-gray-400">(opcional)</span>
                          <textarea
                            className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                            rows={2}
                            placeholder="Ej: Leé cada pregunta con atención. Tenés 30 minutos."
                            value={quiz.instructions ?? ""}
                            onChange={(e) => updateQuiz(quiz.id, { instructions: e.target.value })}
                          />
                        </label>

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
                          <>
                            <QuizEditorManual
                              questions={quiz.questions ?? []}
                              onChange={(next) => updateQuiz(quiz.id, { questions: next })}
                            />
                            {(quiz.mode === "manual" || quiz.mode === undefined) && (quiz.questions?.length ?? 0) > 0 ? (
                              <label className="text-xs font-medium text-[var(--c-muted)]">
                                Preguntas por examen
                                <span className="ml-1 font-normal text-gray-400">
                                  (de {quiz.questions?.length ?? 0} en el pool)
                                </span>
                                <input
                                  className="mt-1 w-32 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                                  type="number"
                                  min={1}
                                  max={quiz.questions?.length ?? 1}
                                  value={quiz.displayCount ?? quiz.questions?.length ?? ""}
                                  onChange={(e) => {
                                    const val = Number(e.target.value) || undefined;
                                    updateQuiz(quiz.id, { displayCount: val });
                                  }}
                                  placeholder={String(quiz.questions?.length ?? "")}
                                />
                              </label>
                            ) : null}
                          </>
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
                  className="rounded-xl bg-[var(--c-primary)] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
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
                            ? "text-[var(--c-danger)]"
                            : "text-[var(--c-muted)]"
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
            <button type="button" className="text-xs text-[var(--c-primary)] hover:underline" onClick={onOpenPicker}>
              Cambiar
            </button>
          </>
        ) : (
          <button
            type="button"
            className="w-full rounded-lg border border-dashed border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-muted)] hover:border-[var(--c-primary)] hover:text-[var(--c-primary)] text-left transition-colors"
            onClick={onOpenPicker}
          >
            Seleccionar documento...
          </button>
        )}
        <Link
          to="/editor"
          className="text-xs text-[var(--c-primary)] hover:underline whitespace-nowrap"
        >
          + Crear nuevo
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 space-y-2">
      <p className="text-xs text-[var(--c-muted)] mt-0.5 mb-3">
        Para contenido simple usá los bloques de arriba. El editor de texto
        es para documentos más extensos o con formato avanzado.
      </p>
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-2 py-1.5 text-xs focus:border-[var(--c-primary)] focus:outline-none"
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
                className="w-full text-left text-xs px-2 py-1.5 rounded text-[var(--c-text)] hover:bg-[var(--c-surface)] hover:text-[var(--c-primary)]"
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
      <div className="flex gap-3 pt-1 border-t border-[var(--c-border)]">
        <Link
          to="/editor"
          className="text-xs text-[var(--c-primary)] hover:underline"
        >
          + Crear nuevo documento
        </Link>
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
            <button type="button" className="text-xs text-[var(--c-primary)] hover:underline" onClick={onOpenPicker}>
              Cambiar
            </button>
          </>
        ) : (
          <button
            type="button"
            className="w-full rounded-lg border border-dashed border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-muted)] hover:border-[var(--c-primary)] hover:text-[var(--c-primary)] text-left transition-colors"
            onClick={onOpenPicker}
          >
            Seleccionar documento TuesdayJS...
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 space-y-2">
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-2 py-1.5 text-xs focus:border-[var(--c-primary)] focus:outline-none"
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
                className="w-full text-left text-xs px-2 py-1.5 rounded text-[var(--c-text)] hover:bg-[var(--c-surface)] hover:text-[var(--c-primary)]"
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
      <div className="pt-1 border-t border-[var(--c-border)]">
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
