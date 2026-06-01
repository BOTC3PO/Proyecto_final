import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import type { ModuleQuiz, Module } from "../../domain/module/module.types";
import PlantillaSelectorModal from "../../components/vblang/PlantillaSelectorModal";
import { batchGetPlantillas } from "../../domain/vblang/plantillaApi";
import type { PlantillaListItem } from "../../domain/vblang/plantilla.types";
import TheoryItemCard, { type TheoryItem } from "../../components/modulos/TheoryItemCard";
import TheorySlideEditor from "../../components/modulos/TheorySlideEditor";
import QuizEditorManual from "../../components/modulos/QuizEditorManual";
import QuizEditorGenerated from "../../components/modulos/QuizEditorGenerated";
import QuizGeneratedPreview from "../../components/modulos/QuizGeneratedPreview";
import QuizComposicionEditor from "../../components/modulos/QuizComposicionEditor";
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
import {
  STANDALONE_TOOLS,
  parseStandaloneConfig,
  makeEmptyMapaConfig,
  type RecetaConfig,
  type LineaTiempoConfig,
  type MapaConfig,
} from "../../components/modulos/standalone/types";
import { EscaladorRecetas } from "../../components/modulos/standalone/EscaladorRecetas";
import { LineaTiempo } from "../../components/modulos/standalone/LineaTiempo";

// Abre el editor de mapa completo (MapaEditorFull) en una ventana nueva,
// pasándole la config por sessionStorage y recuperando el resultado al cerrarse.
// Los datasets ya no se pasan por sessionStorage: el editor los trae de la API.
function launchMapaEditor(
  ssKey: string,
  cfg: MapaConfig,
  onResult: (updated: MapaConfig) => void,
) {
  sessionStorage.setItem(`mapa-doc:${ssKey}`, JSON.stringify(cfg));
  const win = window.open(`/herramientas/mapa-editor?sskey=${ssKey}`, "_blank");
  if (!win) return;
  const timer = setInterval(() => {
    if (!win.closed) return;
    clearInterval(timer);
    try {
      const raw = sessionStorage.getItem(`mapa-doc:${ssKey}:result`);
      if (raw) onResult(JSON.parse(raw) as MapaConfig);
    } catch {
      /* ignore */
    } finally {
      sessionStorage.removeItem(`mapa-doc:${ssKey}`);
      sessionStorage.removeItem(`mapa-doc:${ssKey}:result`);
    }
  }, 500);
}

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
    materias,
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

  // UX-02: asociar cada error de validación de campo con su control vía
  // aria-describedby/aria-invalid. Los mensajes son deterministas (ver
  // useModuloPersistence), así que el mapeo string→campo es estable.
  const FIELD_ERROR_MSG = {
    title: "El título es obligatorio.",
    description: "La descripción es obligatoria.",
    subject: "La materia es obligatoria.",
    level: "El nivel es obligatorio.",
  } as const;
  const fieldErr = (f: keyof typeof FIELD_ERROR_MSG) =>
    validationErrors.includes(FIELD_ERROR_MSG[f]);

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
          const hasData =
            draft.form?.title?.trim() ||
            draft.form?.description?.trim() ||
            draft.form?.subject?.trim() ||
            draft.theoryItems?.length > 0 ||
            draft.quizzes?.length > 0;
          if (hasData && Date.now() - (draft.savedAt ?? 0) < 3_600_000) {
            setDraftRestored(true);
          }
        }
      } catch { /* ignorar */ }
    }
  }, [id]);

  const isTeacher = user?.role === "TEACHER";
  const isEvaluacionMode = form.category === "evaluacion";

  // ─── Plantilla selector (Sprint 10A · Bloque B) ─────────────────────────
  const [plantillaModalOpen, setPlantillaModalOpen] = useState(false);
  const plantillaIdsEnUso = useMemo(() => {
    const ids: string[] = [];
    for (const quiz of quizzes) {
      const genId = quiz.generatorId ?? "";
      if (genId.startsWith("plantilla:")) {
        ids.push(genId.slice("plantilla:".length));
      }
    }
    return ids;
  }, [quizzes]);
  const [plantillaNombres, setPlantillaNombres] = useState<
    Record<string, string>
  >({});
  useEffect(() => {
    if (plantillaIdsEnUso.length === 0) return;
    const faltantes = plantillaIdsEnUso.filter(
      (pid) => !(pid in plantillaNombres),
    );
    if (faltantes.length === 0) return;
    let cancelled = false;
    void batchGetPlantillas(faltantes)
      .then((items) => {
        if (cancelled) return;
        const next: Record<string, string> = {};
        for (const item of items) next[item.id] = item.nombre;
        if (Object.keys(next).length > 0) {
          setPlantillaNombres((prev) => ({ ...prev, ...next }));
        }
      })
      .catch(() => {
        // Si el batch falla, dejamos los nombres pendientes; el UI muestra
        // el ID y el usuario puede volver a abrir el módulo.
      });
    return () => {
      cancelled = true;
    };
  }, [plantillaIdsEnUso, plantillaNombres]);

  const handleSelectPlantilla = (plantilla: PlantillaListItem) => {
    const baseQuiz: ModuleQuiz = {
      id: `quiz-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title: plantilla.nombre,
      type: "formal",
      status: "draft",
      version: 1,
      visibility: "publico",
      mode: "generated",
      generatorId: `plantilla:${plantilla.id}`,
      generatorVersion: plantilla.version,
      count: 5,
      seedPolicy: "perAttempt",
      params: {},
    };
    handleImportQuizzes([baseQuiz]);
    setPlantillaNombres((prev) => ({
      ...prev,
      [plantilla.id]: plantilla.nombre,
    }));
    setPlantillaModalOpen(false);
  };

  const moduloReturnTo = id
    ? `/modulos/${id}/editar`
    : `/modulos/crear`;

  const quizCountLabel =
    quizzes.length === 0
      ? "Sin cuestionarios"
      : `${quizzes.length} cuestionario${quizzes.length === 1 ? "" : "s"}`;

  // Preview de cuestionarios MANUALES: muestra los enunciados reales del pool.
  // Para los GENERADOS se usa <QuizGeneratedPreview /> (UX-04), que corre el
  // generador real en vez de inventar "semillas".
  const buildQuizPreviewItems = (quiz: ModuleQuiz) => {
    if (quiz.questions && quiz.questions.length > 0) {
      return quiz.questions.slice(0, 3).map((q, i) => ({
        id: q.id,
        label: `P${i + 1}: ${q.prompt}`,
      }));
    }
    return [{ id: `${quiz.id}-empty`, label: "Sin preguntas configuradas." }];
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

      {/* Sprint 10A — modal de selección de plantilla VBLang. */}
      {plantillaModalOpen ? (
        <PlantillaSelectorModal
          onClose={() => setPlantillaModalOpen(false)}
          onSelect={handleSelectPlantilla}
          materiaHint={form.subject || undefined}
          createReturnTo={moduloReturnTo}
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
        <header className="vb-page-bar" role="banner">
          <nav className="crumb" aria-label="Migas de pan">
            <Link to="/modulos" className="hover:text-[var(--c-text)]">Módulos</Link>
            <svg className="w-3 h-3" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6"/>
            </svg>
            <span className="text-[var(--c-text)]">
              {isEditing ? (form.title || "Editar módulo") : "Nuevo módulo"}
            </span>
          </nav>
          <div
            className={`save-state${status === "saving" ? " is-saving" : ""}${status === "error" ? " is-error" : ""}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="dot" aria-hidden="true"></span>
            <span>
              {status === "saving"
                ? "Guardando…"
                : status === "saved"
                  ? "Guardado"
                  : status === "error"
                    ? "Error"
                    : "Borrador local"}
            </span>
          </div>
        </header>
        <a href="#main-content" className="skip-link">Saltar al contenido</a>
        <div id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 outline-none">
          <div className="mb-6">
            <p className="text-sm text-[var(--c-muted)]">
              Cargá teoría, cuestionarios manuales o generados para construir el módulo.
            </p>
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
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-center justify-between gap-3 rounded-xl border border-[color-mix(in_srgb,var(--c-warning)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-warning)_8%,transparent)] px-4 py-2.5"
                >
                  <p className="text-xs text-[var(--c-warning)]">
                    <span aria-hidden="true">📋 </span>Se restauró un borrador de tu sesión anterior.
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
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700"><span aria-hidden="true">&#10003;</span> Completo</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700"><span aria-hidden="true">&#9888;</span> Incompleto</span>
                  )}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128221; Título</span>
                    <input
                      id="modulo-field-title"
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      value={form.title}
                      onChange={(event) => updateForm("title", event.target.value)}
                      required
                      aria-invalid={fieldErr("title") || undefined}
                      aria-describedby={fieldErr("title") ? "modulo-err-title" : undefined}
                    />
                    {fieldErr("title") && (
                      <p id="modulo-err-title" className="mt-1 text-xs text-[var(--c-danger)]">
                        {FIELD_ERROR_MSG.title}
                      </p>
                    )}
                  </label>
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128193; Categoría</span>
                    <select
                      value={form.category}
                      onChange={(e) => updateForm("category", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                    >
                      <option value="sin-categoria">Sin categoría</option>
                      <option value="evaluacion">📝 Evaluación</option>
                      <option value="competencia">🏆 Competencia</option>
                    </select>
                  </label>
                </div>

                <label className="block text-sm font-medium text-[var(--c-text)]">
                  <span className="mb-1.5 flex items-center gap-1.5">&#128196; Descripción</span>
                  <textarea
                    id="modulo-field-description"
                    className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                    rows={3}
                    value={form.description}
                    onChange={(event) => updateForm("description", event.target.value)}
                    required
                    aria-invalid={fieldErr("description") || undefined}
                    aria-describedby={fieldErr("description") ? "modulo-err-description" : undefined}
                  />
                  {fieldErr("description") && (
                    <p id="modulo-err-description" className="mt-1 text-xs text-[var(--c-danger)]">
                      {FIELD_ERROR_MSG.description}
                    </p>
                  )}
                </label>

                <div className="grid gap-5 md:grid-cols-4">
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128218; Materia</span>
                    <select
                      id="modulo-field-subject"
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      value={form.subject}
                      onChange={(event) => handleSubjectChange(event.target.value)}
                      required
                      aria-invalid={fieldErr("subject") || undefined}
                      aria-describedby={fieldErr("subject") ? "modulo-err-subject" : undefined}
                    >
                      <option value="">-- Seleccionar materia --</option>
                      {materias.map((m) => (
                        <option key={m} value={m.toLowerCase().replace(/\s+/g, '')}>
                          {m}
                        </option>
                      ))}
                    </select>
                    {fieldErr("subject") && (
                      <p id="modulo-err-subject" className="mt-1 text-xs text-[var(--c-danger)]">
                        {FIELD_ERROR_MSG.subject}
                      </p>
                    )}
                  </label>
                  {!isEvaluacionMode && (
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#127942; Nivel</span>
                    <input
                      id="modulo-field-level"
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      value={form.level}
                      placeholder="Ej: 1° año secundario"
                      onChange={(event) => updateForm("level", event.target.value)}
                      aria-invalid={fieldErr("level") || undefined}
                      aria-describedby={fieldErr("level") ? "modulo-err-level" : undefined}
                    />
                    {fieldErr("level") && (
                      <p id="modulo-err-level" className="mt-1 text-xs text-[var(--c-danger)]">
                        {FIELD_ERROR_MSG.level}
                      </p>
                    )}
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
                        <p role="status" aria-live="polite" className="sr-only">
                          {escuelaSearch ? `${escuelaResults.length} resultados` : ""}
                        </p>
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
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700"><span aria-hidden="true">&#10003;</span> Completo</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700"><span aria-hidden="true">&#9888;</span> Sin recursos</span>
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
                              detail: JSON.stringify(makeEmptyMapaConfig()),
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
                          return (
                            <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 flex items-center gap-3">
                              <span className="text-xs text-[var(--c-muted)] flex-1">
                                Mapa {cfg.modo === "political" ? "político" : "físico"} · {cfg.anotaciones.length} anotaciones
                              </span>
                              <button
                                type="button"
                                aria-label="Abrir editor de mapa en ventana nueva"
                                className="rounded-md border border-[var(--c-primary)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-hover)]"
                                onClick={() =>
                                  launchMapaEditor(`new-mapa-${Date.now()}`, cfg, (updated) =>
                                    setNewTheoryItem((prev) => ({ ...prev, detail: JSON.stringify(updated) })),
                                  )
                                }
                              >
                                <svg className="inline-block w-4 h-4 mr-1.5 align-text-bottom" viewBox="0 0 24 24" aria-hidden="true">
                                  <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v16M15 6v16"/>
                                </svg>
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
                        aria-label="URL del video"
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
                        aria-label="URL del documento"
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
                      aria-label="URL del enlace"
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
                  <div role="status" className="rounded-xl border-2 border-dashed border-[var(--c-border)] py-8 text-center">
                    <p className="text-sm text-[var(--c-muted)]">No hay elementos teóricos cargados.</p>
                    <p className="mt-1 text-xs text-[var(--c-muted)]">Usá el formulario de arriba para agregar recursos.</p>
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
                              aria-label="Mover recurso hacia arriba"
                              disabled={itemIdx === 0}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-xs text-[var(--c-muted)] transition-colors hover:bg-[var(--c-surface)] disabled:cursor-not-allowed disabled:opacity-30"
                              onClick={() => moveTheoryItem(item.id, "up")}
                            >
                              <span aria-hidden="true">▲</span>
                            </button>
                            <button
                              type="button"
                              title="Mover abajo"
                              aria-label="Mover recurso hacia abajo"
                              disabled={itemIdx === theoryItems.length - 1}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-xs text-[var(--c-muted)] transition-colors hover:bg-[var(--c-surface)] disabled:cursor-not-allowed disabled:opacity-30"
                              onClick={() => moveTheoryItem(item.id, "down")}
                            >
                              <span aria-hidden="true">▼</span>
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
                                aria-label="Título del recurso"
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
                                    aria-label="URL del video"
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
                                    aria-label="URL del documento"
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
                                  aria-label="URL del enlace"
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
                                        updateTheoryItem(item.id, { detail: JSON.stringify(makeEmptyMapaConfig()) });
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
                                      return (
                                        <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 flex items-center gap-3">
                                          <span className="text-xs text-[var(--c-muted)] flex-1">
                                            Mapa {cfg.modo === "political" ? "político" : "físico"} · {cfg.anotaciones.length} anotaciones
                                          </span>
                                          <button
                                            type="button"
                                            aria-label="Abrir editor de mapa en ventana nueva"
                                            className="rounded-md border border-[var(--c-primary)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-hover)]"
                                            onClick={() =>
                                              launchMapaEditor(`mapa-${item.id}`, cfg, (updated) =>
                                                updateTheoryItem(item.id, { detail: JSON.stringify(updated) }),
                                              )
                                            }
                                          >
                                            <svg className="inline-block w-4 h-4 mr-1.5 align-text-bottom" viewBox="0 0 24 24" aria-hidden="true">
                                              <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v16M15 6v16"/>
                                            </svg>
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
                                onClick={() => {
                                  if (window.confirm("¿Eliminar este recurso de teoría? Esta acción no se puede deshacer.")) {
                                    removeTheoryItem(item.id);
                                  }
                                }}
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
                  <div role="status" className="rounded-xl border-2 border-dashed border-[var(--c-border)] py-6 text-center">
                    <p className="text-sm text-[var(--c-muted)]">Sin dependencias configuradas.</p>
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
                    <p role="status" aria-live="polite" className="sr-only">
                      {depResults.length > 0 ? `${depResults.length} resultados` : ""}
                    </p>
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
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700"><span aria-hidden="true">&#10003;</span> Completo</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700"><span aria-hidden="true">&#9888;</span> Con errores</span>
                    )}
                  </div>
                  <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-medium text-[var(--c-muted)]">{quizCountLabel}</span>
                </div>

                <div className="flex flex-wrap items-start gap-3">
                  {/* Sprint 10A: abrir selector de plantilla en lugar de
                      redirigir directamente a crear una nueva. */}
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                    data-testid="open-plantilla-selector"
                    onClick={() => setPlantillaModalOpen(true)}
                  >
                    <span className="text-base leading-none">🧩</span>
                    Usar plantilla VBLang
                  </button>

                  <QuizImportJson onImportQuizzes={handleImportQuizzes} />
                </div>

                {/* Editores clásicos — V1 y V2 quedan accesibles como legacy */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="text-[var(--c-muted)]">Abrir editor clásico:</span>
                  <button
                    type="button"
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                    onClick={() => {
                      const returnTo = id
                        ? `/modulos/${id}/editar`
                        : `/modulos/crear`;
                      navigate(
                        `/profesor/editor-cuestionarios-v2?moduleId=${
                          id ?? "nuevo"
                        }&mode=manual&returnTo=${encodeURIComponent(returnTo)}`
                      );
                    }}
                  >
                    ✏️ Editor V2 (manual)
                  </button>
                  <button
                    type="button"
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
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
                    ✏️ Editor V1
                  </button>
                  {subjectCapabilities?.supportsGenerators && (
                    <button
                      type="button"
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
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
                      ⚡ Generados (legacy)
                    </button>
                  )}
                </div>

                {/* Leyenda explicativa */}
                <div className="flex flex-wrap gap-3 text-xs text-[var(--c-muted)]">
                  <span>
                    🧩 <strong>Plantilla VBLang</strong> — código DSL con preview en vivo y validación
                  </span>
                </div>

                {quizzes.length === 0 ? (
                  <div role="status" className="rounded-xl border-2 border-dashed border-[var(--c-border)] py-8 text-center">
                    <p className="text-sm text-[var(--c-muted)]">No hay cuestionarios configurados.</p>
                    <p className="mt-1 text-xs text-[var(--c-muted)]">Usá los botones de arriba para agregar cuestionarios.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {quizzes.map((quiz) => {
                      const quizGenId = quiz.generatorId ?? "";
                      const esPlantilla = quizGenId.startsWith("plantilla:");
                      const plantillaId = esPlantilla
                        ? quizGenId.slice("plantilla:".length)
                        : null;
                      const plantillaNombre = plantillaId
                        ? plantillaNombres[plantillaId]
                        : undefined;
                      return (
                      <div key={quiz.id} className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                        <div className="p-5 space-y-4">
                        {/* Sprint 10A — badge según origen del cuestionario */}
                        <div className="flex flex-wrap items-center gap-2">
                          {esPlantilla ? (
                            <>
                              <span
                                className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700"
                                data-testid="quiz-badge-plantilla"
                              >
                                🧩 Plantilla VBLang
                              </span>
                              {plantillaNombre && (
                                <span className="text-xs text-[var(--c-muted)]">
                                  {plantillaNombre}
                                </span>
                              )}
                              {plantillaId && (
                                <Link
                                  to={`/plantillas/${plantillaId}?returnTo=${encodeURIComponent(moduloReturnTo)}`}
                                  className="text-xs text-[var(--c-primary)] hover:underline"
                                  data-testid="quiz-plantilla-edit-link"
                                >
                                  Editar plantilla →
                                </Link>
                              )}
                            </>
                          ) : quiz.mode === "generated" ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                              ⚡ Generado
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                              ✏️ Manual
                            </span>
                          )}
                        </div>

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
                              onClick={() => {
                                if (window.confirm("¿Eliminar este cuestionario y todas sus preguntas? Esta acción no se puede deshacer.")) {
                                  removeQuiz(quiz.id);
                                }
                              }}
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
                              Vista previa del estudiante (no registra intento)
                            </p>
                            {quiz.mode === "generated" ? (
                              <QuizGeneratedPreview
                                generatorId={quiz.generatorId ?? ""}
                                count={quiz.count ?? 3}
                              />
                            ) : (
                              <ul className="list-disc space-y-1 pl-4">
                                {buildQuizPreviewItems(quiz).map((item) => (
                                  <li key={item.id}>{item.label}</li>
                                ))}
                              </ul>
                            )}
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

                        {/* Composición del quiz: pool, selección, variantes y peso.
                            Nivel quiz (no DSL). Se persiste en settings. */}
                        <QuizComposicionEditor
                          value={quiz.composition}
                          total={
                            quiz.mode === "generated"
                              ? quiz.count ?? 0
                              : quiz.questions?.length ?? 0
                          }
                          onChange={(composition) =>
                            updateQuiz(quiz.id, { composition })
                          }
                        />
                        </div>
                      </div>
                      );
                    })}
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
                    <ul role="alert" aria-live="assertive" className="list-disc space-y-1 pl-5 text-sm text-[var(--c-danger)]">
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
