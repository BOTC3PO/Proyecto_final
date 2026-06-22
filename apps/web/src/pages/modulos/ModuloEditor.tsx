import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { useIsTeacher } from "../../auth/use-roles";
import type { ModuleQuiz, Module } from "../../domain/module/module.types";
import PlantillaSelectorModal from "../../components/vblang/PlantillaSelectorModal";
import { batchGetPlantillas } from "../../domain/vblang/plantillaApi";
import type { PlantillaListItem } from "../../domain/vblang/plantilla.types";
import TheoryItemCard, { type TheoryItem } from "../../components/modulos/TheoryItemCard";
import TheorySlideEditor from "../../components/modulos/TheorySlideEditor";
import QuizEditorManual from "../../components/modulos/QuizEditorManual";
import QuizEditorGenerated from "../../components/modulos/QuizEditorGenerated";
import QuizGeneratedPreview from "../../components/modulos/QuizGeneratedPreview";
import QuizPosicionesEditor from "../../components/modulos/QuizPosicionesEditor";
import QuizImportJson from "../../components/modulos/QuizImportJson";
import EvaluacionConfig from "../../components/modulos/EvaluacionConfig";
import { parseEvaluacionConfig } from "../../domain/quiz/intentos";
import { SCORING_SYSTEMS, DEFAULT_SCORING_SYSTEM_ID } from "@vb/vblang";
import VistaAlumnoOverlay from "../../components/modulos/VistaAlumnoOverlay";
import EditorSectionNav, {
  type EditorSectionDef,
} from "../../components/modulos/EditorSectionNav";
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
import MapaEditorFull from "../herramientas/MapaEditorFull";

// ─── Pills de estado (prototipo `.pill`) ───────────────────────────────────
// Mismas tonalidades que el componente de diseño `ui/Pill`, pero con
// `role="status"` para que los lectores de pantalla anuncien el estado de cada
// tarjeta (Incompleto / N recursos / Opcional / Con errores…). Theme-driven:
// solo tokens `--c-*`, así el color lo manda el tema activo.
const PILL_TONES = {
  ok: "bg-[var(--c-success-soft)] text-[var(--c-success)]",
  warn: "bg-[var(--c-warning-soft)] text-[var(--c-warning)]",
  danger: "bg-[var(--c-danger-soft)] text-[var(--c-danger)]",
  info: "bg-[var(--c-info-soft)] text-[var(--c-info)]",
  neutral: "bg-[var(--c-bg)] text-[var(--c-muted)]",
} as const;

function StatusPill({
  tone,
  children,
}: {
  tone: keyof typeof PILL_TONES;
  children: ReactNode;
}) {
  return (
    <span
      role="status"
      className={
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold " +
        PILL_TONES[tone]
      }
    >
      {children}
    </span>
  );
}

// Cabecera de tarjeta reutilizable (prototipo `.card-head`): icono + título +
// subtítulo de ayuda (`.sub`) + slot a la derecha para el pill de estado / chip.
function CardHeader({
  icon,
  title,
  subtitle,
  right,
  headingId,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  right?: ReactNode;
  /** Tarea 15: id + tabIndex=-1 en el h2 para que el nav pueda enfocar el
   *  heading de la seccion al hacer scroll-to-anchor. */
  headingId?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)] text-sm"
        >
          {icon}
        </span>
        <div className="min-w-0">
          <h2
            id={headingId}
            tabIndex={headingId ? -1 : undefined}
            className="text-lg font-bold text-[var(--c-text)] tracking-tight outline-none"
          >
            {title}
          </h2>
          <p className="mt-0.5 text-xs text-[var(--c-muted)]">{subtitle}</p>
        </div>
      </div>
      {right ? <div className="flex shrink-0 items-center gap-2">{right}</div> : null}
    </div>
  );
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
    // FIX-TEST4-MOD-02 — flag de carga inicial. Mientras es
    // true, mostramos un skeleton en lugar del form vacío (que
    // mostraba los datos del servidor con un frame de delay).
    isModuleLoading,
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

  // FIX-MODULO-QUIZ-IMPORT — el `useEffect` original tenía deps `[]`
  // y solo corría en mount. Cuando el docente ya estaba en el editor
  // de módulo, iba a "Editor V2", creaba un cuestionario, y volvía
  // con `navigate(returnTo, { state: { importedQuiz } })`, el state
  // llegaba a `location.state` pero el effect NO se re-disparaba
  // (deps `[]` y el componente ya estaba montado). Resultado: el
  // cuestionario "no se cargaba en el módulo" — bug 7.9 de
  // `docs/qa/test-parte-3-profesor.md`.
  //
  // Fix: depender de `location.state` para re-correr el effect cada
  // vez que llega un nuevo `importedQuiz`. Se reemplaza el state
  // apenas se consume para que navegaciones sucesivas (ej. ir y
  // volver) sigan funcionando, sin que el efecto quede "pegado" en
  // el primer quiz si el docente entra y sale varias veces del V2.
  const importedQuizState = (location.state as
    | { importedQuiz?: Record<string, unknown> }
    | null)?.importedQuiz;
  useEffect(() => {
    if (!importedQuizState) return;
    window.history.replaceState(
      window.history.state ?? {},
      "",
      window.location.pathname + window.location.search,
    );
    handleImportQuizzes([importedQuizState as ModuleQuiz]);
    // handleImportQuizzes viene de useModuloEditor (estable entre
    // renders para un mismo id). `location.state` se reemplaza
    // arriba así que la próxima vez que no haya importedQuiz el
    // effect no hace nada.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [importedQuizState]);

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

  // MULTIROL-02: usar helper centralizado (rol principal o
  // membership de "TEACHER" en roles[]).
  const isTeacher = useIsTeacher();
  const isEvaluacionMode = form.category === "evaluacion";

  // Tarea 15: lista de secciones que se muestra en el nav sticky. El id
  // matchea el `id` del <section> correspondiente. El status se deriva de
  // `sectionStatus` (generalOk / theoryOk / quizzesOk) y, para las secciones
  // que no tienen flag propio (herramientas, dependencias), se infiere de
  // longitud > 0 o se considera opcional.
  const sectionNavItems: EditorSectionDef[] = [
    {
      id: "sec-general",
      label: "General",
      status: {
        status: sectionStatus.generalOk ? "ok" : "incomplete",
        label: sectionStatus.generalOk ? "Completa" : "Incompleta",
      },
    },
    {
      id: "sec-teoria",
      label: "Teoría",
      status: {
        status: sectionStatus.theoryOk ? "ok" : "incomplete",
        label: sectionStatus.theoryOk ? "Completa" : "Incompleta",
      },
    },
    {
      id: "sec-herramientas",
      label: "Herramientas",
      status: {
        status: theoryItems.some(
          (t) => t.type === "Herramienta" || t.type === "HerramientaStandalone",
        )
          ? "ok"
          : "incomplete",
        label: theoryItems.some(
          (t) => t.type === "Herramienta" || t.type === "HerramientaStandalone",
        )
          ? "Con herramientas"
          : "Opcional",
      },
    },
    {
      id: "sec-cuestionarios",
      label: "Cuestionarios",
      status: {
        status: sectionStatus.quizzesOk ? "ok" : "incomplete",
        label: sectionStatus.quizzesOk ? "Completa" : "Incompleta",
      },
    },
    {
      id: "sec-dependencias",
      label: "Dependencias",
      status: {
        status: "incomplete", // no hay flag propio: siempre se muestra como opcional
        label: "Opcional",
      },
    },
  ];

  // ─── Plantilla selector (Sprint 10A · Bloque B) ─────────────────────────
  const [plantillaModalOpen, setPlantillaModalOpen] = useState(false);
  // ─── Vista alumno (Tarea 14): overlay de previsualizacion local ──────────
  const [vistaAlumnoOpen, setVistaAlumnoOpen] = useState(false);
  // ─── Editor de mapa (M8v2): overlay full-screen en la misma pestaña ──────
  // `herramientaId` identifica a qué herramienta del módulo vuelve el
  // resultado: "new" = formulario de recurso nuevo, otro valor = item.id.
  const [mapaEditing, setMapaEditing] = useState<
    { herramientaId: "new" | string; config: MapaConfig } | null
  >(null);

  const handleMapaSave = (updated: MapaConfig) => {
    if (!mapaEditing) return;
    const detail = JSON.stringify(updated);
    if (mapaEditing.herramientaId === "new") {
      setNewTheoryItem((prev) => ({ ...prev, detail }));
    } else {
      updateTheoryItem(mapaEditing.herramientaId, { detail });
    }
    setMapaEditing(null);
  };
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

      {/* Tarea 14 — vista alumno (overlay de previsualizacion local). */}
      <VistaAlumnoOverlay
        open={vistaAlumnoOpen}
        onClose={() => setVistaAlumnoOpen(false)}
        title={form.title || "Vista previa del módulo"}
        theoryItems={theoryItems}
        quizzes={quizzes}
      />

      {/* M8v2 — editor de mapa en overlay full-screen (portal, mismo patrón
          que VistaAlumnoOverlay). Sin pestañas nuevas ni sessionStorage: la
          config viaja en memoria por initialConfig/onSave. El overlay solo se
          cierra con Guardar/Volver — Esc queda para el editor (cancelar
          pendientes), así un Esc de más no tira el trabajo. */}
      {mapaEditing
        ? createPortal(
            <div
              data-testid="mapa-editor-overlay"
              className="fixed inset-0 z-[100] bg-[var(--c-bg)]"
              role="dialog"
              aria-modal="true"
              aria-label="Editor de mapa"
            >
              <MapaEditorFull
                initialConfig={mapaEditing.config}
                onSave={handleMapaSave}
                onCancel={() => setMapaEditing(null)}
              />
            </div>,
            document.body,
          )
        : null}

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
          <button
            type="button"
            onClick={() => setVistaAlumnoOpen(true)}
            aria-label="Abrir vista alumno"
            data-testid="vista-alumno-open"
            className="rounded-md border border-[var(--c-primary)] px-3 py-1 text-xs font-semibold text-[var(--c-primary)] hover:bg-[var(--c-primary)] hover:text-white"
          >
            👁 Vista alumno
          </button>
        </header>
        <a href="#main-content" className="skip-link">Saltar al contenido</a>
        <div id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 outline-none">
          <div className="lg:grid lg:grid-cols-[180px_1fr] lg:gap-6">
            <EditorSectionNav sections={sectionNavItems} />
            <div className="min-w-0">
          <div className="mb-6">
            <p className="text-sm text-[var(--c-muted)]">
              Cargá teoría, cuestionarios manuales o generados para construir el módulo.
            </p>
          </div>

          {/* FIX-TEST4-MOD-02 — usar `isModuleLoading` en vez de
              `status === "loading"`. `status` solo es "loading"
              durante la llamada al API, pero el flag persiste
              hasta que los datos están listos, evitando el
              flash del form vacío en el primer render. */}
          {isModuleLoading ? (
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
              <section id="sec-general" className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-5">
                <CardHeader
                  icon={<span>&#9881;</span>}
                  title="Información general"
                  subtitle="Título, materia y nivel del módulo."
                  headingId="sec-general-heading"
                  right={
                    sectionStatus.generalOk ? (
                      <StatusPill tone="ok"><span aria-hidden="true">&#10003;</span> Completo</StatusPill>
                    ) : (
                      <StatusPill tone="warn"><span aria-hidden="true">&#9888;</span> Incompleto</StatusPill>
                    )
                  }
                />
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
                    <p className="flex items-center gap-2 text-xs font-semibold text-[var(--c-text)]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--c-warning-soft)] text-[var(--c-warning)] text-[10px]">&#127979;</span>
                      ¿A qué escuela aplica esta visibilidad?
                    </p>
                    {form.visibilitySchoolId ? (
                      <div className="flex items-center gap-3 rounded-lg bg-[var(--c-surface)] px-3 py-2">
                        <span className="text-xs text-[var(--c-text)]">
                          Escuela seleccionada:{" "}
                          <strong>
                            {escuelaResults.find((e) => e.id === form.visibilitySchoolId)?.name ??
                              form.visibilitySchoolId}
                          </strong>
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-[var(--c-warning-soft)] px-2.5 py-1 text-xs font-medium text-[var(--c-warning)] transition-colors hover:bg-[color-mix(in_srgb,var(--c-warning)_22%,var(--c-surface))]"
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
                                ? "border-[color-mix(in_srgb,var(--c-danger)_40%,transparent)] bg-[var(--c-danger-soft)] focus:border-[var(--c-danger)] focus:ring-[color-mix(in_srgb,var(--c-danger)_25%,transparent)]"
                                : "border-[var(--c-border)] bg-[var(--c-surface)] focus:border-[var(--c-primary)] focus:ring-[color-mix(in_srgb,var(--c-primary)_22%,transparent)]"
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
                          <p className="text-xs text-[var(--c-muted)] animate-pulse">Buscando...</p>
                        ) : escuelaResults.length > 0 ? (
                          <ul className="max-h-36 overflow-y-auto space-y-1 rounded-lg bg-[var(--c-surface)] p-1">
                            {escuelaResults.map((escuela) => (
                              <li key={escuela.id}>
                                <button
                                  type="button"
                                  className="w-full rounded-lg px-3 py-2 text-left text-xs text-[var(--c-text)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-text)]"
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
                          <p className="text-xs text-[var(--c-muted)]">
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
              <section id="sec-teoria" className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-5">
                <CardHeader
                  icon={<span>&#128214;</span>}
                  title="Teoría"
                  subtitle="Recursos de estudio: textos, videos, libros y herramientas."
                  headingId="sec-teoria-heading"
                  right={
                    <>
                      {sectionStatus.theoryOk ? (
                        <StatusPill tone="ok"><span aria-hidden="true">&#10003;</span> Completo</StatusPill>
                      ) : (
                        <StatusPill tone="warn"><span aria-hidden="true">&#9888;</span> Sin recursos</StatusPill>
                      )}
                      <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-medium text-[var(--c-muted)]">{theoryItems.length} recursos</span>
                    </>
                  }
                />

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
                      <span className="text-xs text-[var(--c-muted)]">
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
                        <span className="text-xs text-[var(--c-muted)]">
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
                                aria-label="Abrir editor de mapa"
                                className="rounded-md border border-[var(--c-primary)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-hover)]"
                                onClick={() =>
                                  setMapaEditing({ herramientaId: "new", config: cfg })
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
                      <p className="text-xs text-[var(--c-muted)]">
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
                      <p className="text-xs text-[var(--c-muted)]">
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
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--c-success)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text-on-dark)] hover:opacity-90 transition-opacity"
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
                              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-sm text-[var(--c-muted)] transition-colors hover:bg-[var(--c-surface)] hover:text-[var(--c-text)] disabled:cursor-not-allowed disabled:opacity-30"
                              onClick={() => moveTheoryItem(item.id, "up")}
                            >
                              <span aria-hidden="true">▲</span>
                            </button>
                            <button
                              type="button"
                              title="Mover abajo"
                              aria-label="Mover recurso hacia abajo"
                              disabled={itemIdx === theoryItems.length - 1}
                              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-sm text-[var(--c-muted)] transition-colors hover:bg-[var(--c-surface)] hover:text-[var(--c-text)] disabled:cursor-not-allowed disabled:opacity-30"
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
                                  <span className="text-xs text-[var(--c-muted)]">
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
                                  <p className="text-[11px] text-[var(--c-muted)]">YouTube, Vimeo o enlace directo a video.</p>
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
                                  <p className="text-[11px] text-[var(--c-muted)]">PDF → visor integrado · otros formatos → descarga.</p>
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
                                    <span className="text-xs text-[var(--c-muted)]">
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
                                            aria-label="Abrir editor de mapa"
                                            className="rounded-md border border-[var(--c-primary)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-hover)]"
                                            onClick={() =>
                                              setMapaEditing({ herramientaId: item.id, config: cfg })
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
                                className="self-start rounded-md border border-[color-mix(in_srgb,var(--c-danger)_30%,transparent)] bg-[var(--c-danger-soft)] px-2.5 py-1 text-xs font-medium text-[var(--c-danger)] transition-all hover:bg-[color-mix(in_srgb,var(--c-danger)_18%,var(--c-surface))] hover:border-[color-mix(in_srgb,var(--c-danger)_45%,transparent)]"
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
                 {/* Tarea 15: ancla para el item "Herramientas" del nav.
                     Las herramientas viven dentro de Teoría como items
                     isHerramientaType; este marker garantiza que el link
                     del nav siempre tenga un target. */}
                 <div id="sec-herramientas" className="scroll-mt-32" />
               </section>
               </>)}

              {!isEvaluacionMode && (<>
              {/* ── Dependencias ── */}
              <section id="sec-dependencias" className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-4">
                <CardHeader
                  icon={<span>&#128279;</span>}
                  title="Dependencias"
                  headingId="sec-dependencias-heading"
                  subtitle="Indicá si este módulo requiere completar otro antes, o si desbloquea módulos al terminarse."
                  right={<StatusPill tone="neutral">Opcional</StatusPill>}
                />

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
                          className="rounded-md border border-[color-mix(in_srgb,var(--c-danger)_30%,transparent)] bg-[var(--c-danger-soft)] px-2 py-1 text-xs font-medium text-[var(--c-danger)] transition-all hover:bg-[color-mix(in_srgb,var(--c-danger)_18%,var(--c-surface))] hover:border-[color-mix(in_srgb,var(--c-danger)_45%,transparent)]"
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
                      <p className="text-xs text-[var(--c-muted)] animate-pulse">Buscando...</p>
                    ) : depResults.length > 0 ? (
                      <ul className="max-h-40 overflow-y-auto space-y-1 rounded-lg bg-[var(--c-surface)] p-1">
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
                                <span className="ml-1 text-[var(--c-muted)]">({mod.id})</span>
                              </button>
                            </li>
                          ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-[var(--c-muted)]">
                        {depSearch.length > 0 ? "Sin resultados." : "Escribí para buscar."}
                      </p>
                    )}
                    <p role="status" aria-live="polite" className="sr-only">
                      {depResults.length > 0 ? `${depResults.length} resultados` : ""}
                    </p>
                    <button
                      type="button"
                      className="rounded-md bg-[var(--c-bg)] px-3 py-1.5 text-xs text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-text)]"
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
              <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-warning)_30%,transparent)] bg-[var(--c-warning-soft)] px-5 py-4 flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">📝</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--c-text)]">Modo Evaluación</p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">
                    El módulo está configurado como evaluación. El alumno ve directamente el
                    cuestionario sin sección de teoría. Usá las instrucciones del cuestionario
                    para dar contexto.
                  </p>
                </div>
              </div>
              )}

              {/* ── Cuestionarios ── */}
              <section id="sec-cuestionarios" className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-5">
                <CardHeader
                  icon={<span>&#10068;</span>}
                  title="Cuestionarios"
                  headingId="sec-cuestionarios-heading"
                  subtitle="Evaluaciones manuales, generadas o desde plantillas VBLang."
                  right={
                    <>
                      {quizzes.length === 0 ? (
                        <StatusPill tone="neutral">Sin cuestionarios</StatusPill>
                      ) : sectionStatus.quizzesOk ? (
                        <StatusPill tone="ok"><span aria-hidden="true">&#10003;</span> Completo</StatusPill>
                      ) : (
                        <StatusPill tone="warn"><span aria-hidden="true">&#9888;</span> Con errores</StatusPill>
                      )}
                      <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-medium text-[var(--c-muted)]">{quizCountLabel}</span>
                    </>
                  }
                />

                {/* WO-3 — Escala de notas del módulo. Aplica a la calificación
                    de todos los cuestionarios formales del módulo. Si no se
                    elige, se usa la escala 0–100 por defecto (comportamiento
                    histórico, reconciliado con el umbral). */}
                <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-muted)] sm:max-w-sm">
                  <span className="flex items-center gap-1.5">📏 Escala de notas</span>
                  <select
                    aria-label="Escala de notas del módulo"
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                    value={form.scoringSystemId ?? DEFAULT_SCORING_SYSTEM_ID}
                    onChange={(e) => updateForm("scoringSystemId", e.target.value)}
                  >
                    {SCORING_SYSTEMS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <span className="font-normal text-[var(--c-muted)]">
                    Con qué escala se muestra la nota final al alumno.
                  </span>
                </label>

                <div className="flex flex-wrap items-start gap-3">
                  {/* Sprint 10A: abrir selector de plantilla en lugar de
                      redirigir directamente a crear una nueva. */}
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text-on-dark)] hover:opacity-90 transition-opacity"
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
                                className="inline-flex items-center gap-1 rounded-full bg-[var(--c-success-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--c-success)]"
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
                            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--c-info-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--c-info)]">
                              ⚡ Generado
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--c-bg)] px-2 py-0.5 text-[11px] font-semibold text-[var(--c-muted)]">
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
                                    ? "border-[var(--c-danger)] bg-[var(--c-danger-soft)]"
                                    : "border-[var(--c-border)] bg-[var(--c-bg)] focus:border-[var(--c-primary)]"
                                }`}
                                value={quiz.title}
                                onChange={(event) =>
                                  updateQuiz(quiz.id, { title: event.target.value })
                                }
                                onBlur={() => validateQuizTitle(quiz.id, quiz.title)}
                              />
                              {quizBlurErrors[quiz.id]?.map((err) => (
                                <span key={err} className="mt-1 block text-xs text-[var(--c-danger)]">
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
                                <p className="text-xs text-[var(--c-warning)] mt-1">
                                  Este cuestionario contará para la nota final del alumno.
                                </p>
                              )}
                              {quiz.type === "practica" && (
                                <p className="text-xs text-[var(--c-muted)] mt-1">
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
                              className="rounded-md border border-[color-mix(in_srgb,var(--c-danger)_30%,transparent)] bg-[var(--c-danger-soft)] px-2.5 py-1 text-xs font-medium text-[var(--c-danger)] transition-all hover:bg-[color-mix(in_srgb,var(--c-danger)_18%,var(--c-surface))] hover:border-[color-mix(in_srgb,var(--c-danger)_45%,transparent)]"
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
                          <span className="ml-1 font-normal text-[var(--c-muted)]">(opcional)</span>
                          <textarea
                            className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                            rows={2}
                            placeholder="Ej: Leé cada pregunta con atención. Tenés 30 minutos."
                            value={quiz.instructions ?? ""}
                            onChange={(e) => updateQuiz(quiz.id, { instructions: e.target.value })}
                          />
                        </label>

                        {/* F4-04 — panel de configuración de evaluación (timer,
                            intentos, política, fullscreen, ocultarPuntos).
                            Se renderiza para todos los tipos; el componente
                            hace gating por tipo (sin timer para práctica).
                            El componente lee los campos del quiz y dispara
                            los callbacks con el valor nuevo. */}
                        <EvaluacionConfigEditor quiz={quiz} updateQuiz={updateQuiz} />

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
                                <span className="ml-1 font-normal text-[var(--c-muted)]">
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

                        {/* WO-2 / F4-03 — Cuestionario por posiciones: pool de
                            variantes por posición (alternativas), tema y puntaje.
                            Reemplaza al editor de composición viejo. Migra lazy
                            los quizzes guardados con `composition`. */}
                        <QuizPosicionesEditor
                          quiz={quiz}
                          onChange={(patch) => updateQuiz(quiz.id, patch)}
                          materiaHint={form.subject || undefined}
                          returnTo={moduloReturnTo}
                        />
                        </div>
                      </div>
                      );
                    })}
                  </div>
                )}
                </div>
              </section>

              {/* ── Barra inferior sticky: resumen + acción global ── */}
              {validationErrors.length > 0 ? (
                <ul role="alert" aria-live="assertive" className="list-disc space-y-1 rounded-xl border border-[color-mix(in_srgb,var(--c-danger)_30%,transparent)] bg-[var(--c-danger-soft)] py-3 pl-9 pr-4 text-sm text-[var(--c-danger)]">
                  {validationErrors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              ) : null}
              <div className="sticky bottom-0 -mx-4 mt-2 border-t border-[var(--c-border)] bg-[color-mix(in_srgb,var(--c-surface)_92%,transparent)] px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2">
                  {/* Resumen de estado del módulo */}
                  <div className="flex flex-wrap items-center gap-2" aria-live="polite">
                    {sectionStatus.generalOk ? (
                      <StatusPill tone="ok"><span aria-hidden="true">&#10003;</span> Listo para guardar</StatusPill>
                    ) : (
                      <StatusPill tone="warn"><span aria-hidden="true">&#9888;</span> Falta completar información general</StatusPill>
                    )}
                    {!isEvaluacionMode && (
                      <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-medium text-[var(--c-muted)]">
                        {theoryItems.length} recurso{theoryItems.length === 1 ? "" : "s"}
                      </span>
                    )}
                    <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-medium text-[var(--c-muted)]">
                      {quizCountLabel}
                    </span>
                  </div>

                  <div className="ml-auto flex items-center gap-3">
                    {message ? (
                      <span
                        className={`text-sm ${
                          status === "saved"
                            ? "text-[var(--c-success)]"
                            : status === "error"
                              ? "text-[var(--c-danger)]"
                              : "text-[var(--c-muted)]"
                        }`}
                      >
                        {message}
                      </span>
                    ) : null}
                    <button
                      type="submit"
                      className="rounded-xl bg-[var(--c-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--c-text-on-dark)] hover:opacity-90 disabled:opacity-50 transition-opacity"
                      disabled={status === "saving"}
                    >
                      {status === "saving"
                        ? "Guardando..."
                        : isEditing
                          ? "Guardar cambios"
                          : "Crear módulo"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
            </div>
          </div>
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
            <span className="text-xs text-[var(--c-muted)]">
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
        <p className="text-xs text-[var(--c-muted)]">Buscando...</p>
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
                <span className="text-[var(--c-muted)] ml-1">({book.id})</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-[var(--c-muted)]">Sin resultados.</p>
      )}
      <div className="flex gap-3 pt-1 border-t border-[var(--c-border)]">
        <Link
          to="/editor"
          className="text-xs text-[var(--c-primary)] hover:underline"
        >
          + Crear nuevo documento
        </Link>
        <button type="button" className="text-xs text-[var(--c-muted)] hover:text-[var(--c-muted)]" onClick={onClose}>
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
            <span className="text-xs text-[var(--c-muted)]">
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
        <p className="text-xs text-[var(--c-muted)]">Buscando...</p>
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
                <span className="text-[var(--c-muted)] ml-1">({doc.id})</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-[var(--c-muted)]">Sin resultados.</p>
      )}
      <div className="pt-1 border-t border-[var(--c-border)]">
        <button type="button" className="text-xs text-[var(--c-muted)] hover:text-[var(--c-muted)]" onClick={onClose}>
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

/**
 * F4-04 — Sub-componente que monta `<EvaluacionConfig>` dentro de la tarjeta
 * del quiz en el editor. Resuelve la config desde los campos del quiz
 * (con `parseEvaluacionConfig` para aplicar defaults del tipo) y conecta
 * cada callback con `updateQuiz`.
 *
 * El campo `settings` JSON no se persiste en el form state (es derivado):
 * los campos viven top-level en el quiz (`quiz.maxIntentos`, etc.) y el
 * PUT de `modulos.ts` los agrupa en `settings`. La separación es
 * intencional: el form es plano, el storage es JSON.
 */
function EvaluacionConfigEditor({
  quiz,
  updateQuiz
}: {
  quiz: ModuleQuiz;
  updateQuiz: (quizId: string, patch: Partial<ModuleQuiz>) => void;
}) {
  // `parseEvaluacionConfig` espera un JSON, pero como los campos viven
  // top-level en el form, sintetizamos un "settings" virtual para
  // delegar la resolución de defaults en una sola función.
  const virtualSettings = JSON.stringify({
    type: quiz.type,
    maxIntentos: quiz.maxIntentos,
    politicaNota: quiz.politicaNota,
    politicaSorteo: quiz.politicaSorteo,
    timerSegundos: quiz.timerSegundos,
    fullscreenOnStart: quiz.fullscreenOnStart,
    ocultarPuntos: quiz.ocultarPuntos,
    // WO-9 — modo de presentación + tamaño de página. Se sintetizan
    // también en el "settings" virtual para que `parseEvaluacionConfig`
    // resuelva los defaults por tipo de forma centralizada.
    modoPresentacion: quiz.modoPresentacion,
    preguntasPorPagina: quiz.preguntasPorPagina
  });
  const config = parseEvaluacionConfig(virtualSettings, quiz.type);

  return (
    <EvaluacionConfig
      tipo={quiz.type}
      config={config}
      onChangeTimerSegundos={(next) => updateQuiz(quiz.id, { timerSegundos: next })}
      onChangeMaxIntentos={(next) => updateQuiz(quiz.id, { maxIntentos: next })}
      onChangePoliticaNota={(next) => updateQuiz(quiz.id, { politicaNota: next })}
      onChangePoliticaSorteo={(next) => updateQuiz(quiz.id, { politicaSorteo: next })}
      onChangeFullscreenOnStart={(next) =>
        updateQuiz(quiz.id, { fullscreenOnStart: next })
      }
      onChangeOcultarPuntos={(next) => updateQuiz(quiz.id, { ocultarPuntos: next })}
      // WO-9 — wireado del modo de presentación + tamaño de página.
      onChangeModoPresentacion={(next) => updateQuiz(quiz.id, { modoPresentacion: next })}
      onChangePreguntasPorPagina={(next) => updateQuiz(quiz.id, { preguntasPorPagina: next })}
    />
  );
}
