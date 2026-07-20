import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { useIsTeacher } from "../../auth/use-roles";
import { apiGet, apiPost, apiDelete, ApiError } from "../../lib/api";
import type { ModuleQuiz, Module } from "../../domain/module/module.types";
import { Modal, Button, Spinner, Alert, Menu } from "../../ui";
import { batchGetPlantillas } from "../../domain/vblang/plantillaApi";
import PlantillaSelectorModal from "../../components/vblang/PlantillaSelectorModal";
import type { PlantillaListItem } from "../../domain/vblang/plantilla.types";
import {
  crearQuizEnModulo,
  listarQuizzesSueltos,
  usarQuizEnModulo,
  getQuizMeta,
  saveQuizPreguntas,
  type QuizSuelto,
} from "../../domain/quiz/quizPreguntasApi";
import TheoryItemCard, { type TheoryItem } from "../../components/modulos/TheoryItemCard";
import TheorySlideEditor from "../../components/modulos/TheorySlideEditor";
import QuizEditorManual from "../../components/modulos/QuizEditorManual";
import QuizEditorGenerated from "../../components/modulos/QuizEditorGenerated";
import QuizGeneratedPreview from "../../components/modulos/QuizGeneratedPreview";
import QuizPosicionesEditor from "../../components/modulos/QuizPosicionesEditor";
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
import { InsertarMaterialGuardado } from "../../components/materiales/InsertarMaterialGuardado";
import { useI18n } from "../../i18n/I18nContext";
import { makeValidityMessageHandlers } from "../../lib/formValidationMessages";

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

const THEORY_TYPE_LABEL_KEY: Record<string, string> = {
  Video: "theoryItemCard.video",
  Texto: "theorySlideEditor.texto",
  "Presentación": "comun.presentacion",
  Enlace: "theoryItemCard.enlace",
  Libro: "theoryItemCard.libro",
  Documento: "theoryItemCard.documento",
  Herramienta: "quizAttempt.herramientaInteractiva",
  HerramientaStandalone: "theoryItemCard.herramientaStandalone",
  TuesdayJS: "theoryItemCard.tuesdayjs",
};

export default function ModuloEditor() {
  const { t } = useI18n();
  const { onInvalid, onInput } = makeValidityMessageHandlers(t);
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
    materias,
    isEditing,
    theoryItems,
    newTheoryItem,
    setNewTheoryItem,
    handleAddTheoryItem,
    insertMaterialTheoryItem,
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
    depModuleNames,
    handleSubmit,
    // FIX-TEST4-MOD-02 — flag de carga inicial. Mientras es
    // true, mostramos un skeleton en lugar del form vacío (que
    // mostraba los datos del servidor con un frame de delay).
    isModuleLoading,
    // WO-13 — provenance del módulo que se está editando. Si está
    // poblado, mostramos un banner persistente "Estás editando
    // una copia de…". La copia se creó al guardar (copy-on-write
    // transparente) o al duplicar explícitamente.
    clonedFrom,
  } = useModuloEditor(id, user, navigate);

  // UX-02: asociar cada error de validación de campo con su control vía
  // aria-describedby/aria-invalid. Los mensajes son deterministas (ver
  // useModuloPersistence), así que el mapeo string→campo es estable.
  const FIELD_ERROR_MSG = {
    title: t("moduloEditor.elTituloEsObligatorio"),
    description: t("moduloEditor.laDescripcionEsObligatoria"),
    subject: t("moduloEditor.laMateriaEsObligatoria"),
    level: t("moduloEditor.elNivelEsObligatorio"),
  } as const;
  const fieldErr = (f: keyof typeof FIELD_ERROR_MSG) =>
    validationErrors.includes(FIELD_ERROR_MSG[f]);

  // PLAN-CUESTIONARIOS — el effect FIX-MODULO-QUIZ-IMPORT que consumía
  // `location.state.importedQuiz` se retiró junto con los editores
  // clásicos V1/V2 (desconectados del router): nada navega de vuelta
  // con ese state ya.

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
      label: t("profesorAulas.general"),
      status: {
        status: sectionStatus.generalOk ? "ok" : "incomplete",
        label: sectionStatus.generalOk ? "Completa" : "Incompleta",
      },
    },
    {
      id: "sec-teoria",
      label: t("moduloDetail.teoria"),
      status: {
        status: sectionStatus.theoryOk ? "ok" : "incomplete",
        label: sectionStatus.theoryOk ? "Completa" : "Incompleta",
      },
    },
    {
      id: "sec-herramientas",
      label: t("moduloEditor.herramientas"),
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
      label: t("nav.cuestionarios"),
      status: {
        status: sectionStatus.quizzesOk ? "ok" : "incomplete",
        label: sectionStatus.quizzesOk ? "Completa" : "Incompleta",
      },
    },
    {
      id: "sec-dependencias",
      label: t("moduloEditor.dependencias"),
      status: {
        status: "incomplete", // no hay flag propio: siempre se muestra como opcional
        label: t("profesorCalendario.opcional"),
      },
    },
  ];

  // ─── PLAN-CORRECCIONES C2 — reusar un cuestionario "suelto" (sin módulo)
  // ya armado desde /plantillas/nueva. Sólo tiene sentido con el módulo ya
  // guardado (`id` real): "usar-en-modulo" clona el quiz contra ese id en
  // el server de inmediato (no queda en el borrador local como el resto de
  // `quizzes[]`), así que reusarlo desde un módulo todavía sin guardar no
  // tendría dónde clonar. El original sigue suelto — reusable de nuevo.
  // Tarea 13 — el editor de generador (`QuizEditorGenerated`) es legacy:
  // sólo tiene sentido para quizzes viejos con `generatorId` real (no para
  // los nativos de Tiza, que siempre traen `mode: "generated"` como marca
  // heredada pero editan sus preguntas en Tiza). Se esconde detrás de
  // "Más acciones" en vez de mostrarse siempre — antes aparecía inline en
  // TODAS las tarjetas de cuestionario, incluidas las nativas donde es
  // pura confusión (nunca hace nada).
  const [quizGeneradorLegacyOpen, setQuizGeneradorLegacyOpen] = useState<Record<string, boolean>>({});
  const [quizSueltoModalOpen, setQuizSueltoModalOpen] = useState(false);
  const [quizzesSueltos, setQuizzesSueltos] = useState<QuizSuelto[]>([]);
  const [quizzesSueltosStatus, setQuizzesSueltosStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >("idle");
  const [usandoQuizSueltoId, setUsandoQuizSueltoId] = useState<string | null>(null);

  const openQuizSueltoModal = () => {
    setQuizSueltoModalOpen(true);
    setQuizzesSueltosStatus("loading");
    listarQuizzesSueltos()
      .then((items) => {
        setQuizzesSueltos(items);
        setQuizzesSueltosStatus("ready");
      })
      .catch(() => setQuizzesSueltosStatus("error"));
  };

  const handleUsarQuizSuelto = async (quizSueltoId: string) => {
    if (!id) return;
    setUsandoQuizSueltoId(quizSueltoId);
    try {
      const clon = await usarQuizEnModulo(quizSueltoId, id);
      const meta = await getQuizMeta(clon.id);
      const nuevoQuiz: ModuleQuiz = {
        id: clon.id,
        title: meta.title || "Cuestionario sin título",
        type: meta.type === "evaluacion" ? "formal" : (meta.type as ModuleQuiz["type"]),
        status: "draft",
        version: 1,
        visibility: meta.visibility,
        mode: "generated",
        tienePreguntasNativas: true,
      };
      handleImportQuizzes([nuevoQuiz]);
      setQuizSueltoModalOpen(false);
    } catch {
      setQuizzesSueltosStatus("error");
    } finally {
      setUsandoQuizSueltoId(null);
    }
  };

  // PLAN-CUESTIONARIOS — "Crear cuestionario": el módulo crea un quiz
  // Tiza vacío YA adosado (POST /api/quizzes con moduleId) y la tarjeta
  // aparece en la lista con las reglas de cuestionario (tipo/visibilidad/
  // evaluación) y el link "Preguntas nativas en Tiza →" para escribir las
  // preguntas. Sólo con módulo guardado (`id` real), igual que
  // "Usar cuestionario existente".
  const [creandoCuestionario, setCreandoCuestionario] = useState(false);
  const [crearCuestionarioError, setCrearCuestionarioError] = useState(false);

  const handleCrearCuestionario = async () => {
    if (!id) return;
    setCreandoCuestionario(true);
    setCrearCuestionarioError(false);
    try {
      const creado = await crearQuizEnModulo(id);
      const meta = await getQuizMeta(creado.id);
      const nuevoQuiz: ModuleQuiz = {
        id: creado.id,
        title: meta.title || "Cuestionario sin título",
        type: meta.type === "evaluacion" ? "formal" : (meta.type as ModuleQuiz["type"]),
        status: "draft",
        version: 1,
        visibility: meta.visibility,
        mode: "generated",
        tienePreguntasNativas: true,
      };
      handleImportQuizzes([nuevoQuiz]);
    } catch {
      setCrearCuestionarioError(true);
    } finally {
      setCreandoCuestionario(false);
    }
  };

  // PLAN-Y bis — "Cuestionario desde plantilla": mismo resultado que
  // "Crear cuestionario" (un quiz Tiza nativo adosado al módulo) pero
  // arrancando con la plantilla elegida YA importada como su primera
  // pregunta. Reemplaza al viejo "Usar plantilla VBLang" (que creaba el
  // quiz legacy `generatorId: plantilla:X`): ahora la plantilla entra al
  // modelo `preguntas` (con su `plantillaId`), el mismo que lee el runtime.
  const [plantillaModalOpen, setPlantillaModalOpen] = useState(false);
  const [importandoPlantilla, setImportandoPlantilla] = useState(false);

  const handleCrearDesdePlantilla = async (plantilla: PlantillaListItem) => {
    if (!id) return;
    setImportandoPlantilla(true);
    setCrearCuestionarioError(false);
    try {
      const creado = await crearQuizEnModulo(id);
      await saveQuizPreguntas(creado.id, {
        cantidadGlobal: 1,
        preguntas: [{ plantillaId: plantilla.id, tipo: "obligatoria" }],
      });
      const meta = await getQuizMeta(creado.id);
      const nuevoQuiz: ModuleQuiz = {
        id: creado.id,
        title: meta.title || "Cuestionario sin título",
        type: meta.type === "evaluacion" ? "formal" : (meta.type as ModuleQuiz["type"]),
        status: "draft",
        version: 1,
        visibility: meta.visibility,
        mode: "generated",
        tienePreguntasNativas: true,
      };
      handleImportQuizzes([nuevoQuiz]);
      setPlantillaModalOpen(false);
    } catch {
      setCrearCuestionarioError(true);
    } finally {
      setImportandoPlantilla(false);
    }
  };
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
    return [{ id: `${quiz.id}-empty`, label: t("moduloEditor.sinPreguntasConfiguradas") }];
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

      {/* PLAN-Y bis — selector de plantilla del banco. Al elegir, crea un
          cuestionario Tiza con la plantilla como pregunta (modelo nativo). */}
      {plantillaModalOpen ? (
        <PlantillaSelectorModal
          onClose={() => setPlantillaModalOpen(false)}
          onSelect={(plantilla) => void handleCrearDesdePlantilla(plantilla)}
          materiaHint={form.subject || undefined}
          createReturnTo={moduloReturnTo}
        />
      ) : null}

      {/* PLAN-CORRECCIONES C2 — picker de cuestionarios "sueltos" (sin
          módulo) del docente, para reusarlos en éste. */}
      <Modal
        open={quizSueltoModalOpen}
        onClose={() => setQuizSueltoModalOpen(false)}
        title={t("moduloEditor.usarCuestionarioExistente")}
        size="md"
      >
        {quizzesSueltosStatus === "loading" ? (
          <div className="flex justify-center py-6">
            <Spinner />
          </div>
        ) : quizzesSueltosStatus === "error" ? (
          <Alert variant="danger">{t("moduloEditor.noSePudieronCargarTus")}</Alert>
        ) : quizzesSueltos.length === 0 ? (
          <p className="text-sm text-[var(--c-muted)]">{t("moduloEditor.noTenesCuestionariosSueltosTodavia")}</p>
        ) : (
          <ul className="flex flex-col gap-2" data-testid="quiz-suelto-list">
            {quizzesSueltos.map((q) => (
              <li
                key={q.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2"
              >
                <span className="text-sm text-[var(--c-text)]">{q.title}</span>
                <Button
                  variant="primary"
                  size="sm"
                  disabled={usandoQuizSueltoId !== null}
                  onClick={() => void handleUsarQuizSuelto(q.id)}
                  data-testid={`usar-quiz-suelto-${q.id}`}
                >
                  {usandoQuizSueltoId === q.id ? "Agregando…" : "Usar"}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Modal>

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
              aria-label={t("moduloEditor.editorDeMapa")}
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
          <nav className="crumb" aria-label={t("plantillaEditor.migasDePan")}>
            <Link to="/modulos" className="hover:text-[var(--c-text)]">{t("nav.modulos")}</Link>
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
            aria-label={t("moduloEditor.abrirVistaAlumno")}
            data-testid="vista-alumno-open"
            className="rounded-md border border-[var(--c-primary)] px-3 py-1 text-xs font-semibold text-[var(--c-primary)] hover:bg-[var(--c-primary)] hover:text-white"
          >{t("moduloEditor.vistaAlumno")}</button>
        </header>
        <a href="#main-content" className="skip-link">{t("moduloEditor.saltarAlContenido")}</a>
        <div id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 outline-none">
          <div className="lg:grid lg:grid-cols-[180px_1fr] lg:gap-6">
            <EditorSectionNav sections={sectionNavItems} />
            <div className="min-w-0">
          {/* WO-13 — banner de procedencia. Sólo aparece si el módulo
              que se está editando es una copia (creada por
              copy-on-write al guardar, o explícitamente con el
              botón "Duplicar"). Le recuerda al docente que está
              editando SU copia, no el original. */}
          {clonedFrom && (
            <div
              role="status"
              aria-live="polite"
              data-testid="modulo-copied-from-banner"
              className="mb-4 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900"
            >
              <span aria-hidden="true" className="text-base">📋</span>
              <div className="min-w-0 flex-1">
                <p className="font-medium">
                  Estás editando una copia
                  {clonedFrom.title ? ` de “${clonedFrom.title}”` : ""}.
                </p>
                <p className="mt-0.5 text-xs text-amber-800/80">{t("moduloEditor.elOriginalQuedoIntactoEsta")}</p>
              </div>
            </div>
          )}
          <div className="mb-6">
            <p className="text-sm text-[var(--c-muted)]">{t("moduloEditor.cargaTeoriaCuestionariosManualesO")}</p>
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
              <p className="text-center text-sm text-[var(--c-muted)]">{t("moduloDetail.cargandoModulo")}</p>
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
                    <span aria-hidden="true">📋 </span>{t("moduloEditor.seRestauroUnBorradorDe")}</p>
                  <button
                    type="button"
                    onClick={() => {
                      sessionStorage.removeItem('modulo-draft:new');
                      setDraftRestored(false);
                      window.location.reload();
                    }}
                    className="text-xs text-[var(--c-muted)] hover:text-[var(--c-danger)] transition-colors flex-shrink-0"
                  >{t("moduloEditor.descartarBorrador")}</button>
                </div>
              )}
              {/* ── Información general ── */}
              <section id="sec-general" className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-5">
                <CardHeader
                  icon={<span>&#9881;</span>}
                  title={t("moduloEditor.informacionGeneral")}
                  subtitle={t("moduloEditor.tituloMateriaYNivelDel")}
                  headingId="sec-general-heading"
                  right={
                    sectionStatus.generalOk ? (
                      <StatusPill tone="ok"><span aria-hidden="true">&#10003;</span>{t("moduloEditor.completo")}</StatusPill>
                    ) : (
                      <StatusPill tone="warn"><span aria-hidden="true">&#9888;</span>{t("moduloEditor.incompleto")}</StatusPill>
                    )
                  }
                />
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-[var(--c-text)]">
                    <span className="mb-1.5 flex items-center gap-1.5">&#128221; {t("comun.titulo")}</span>
                    <input
                      id="modulo-field-title"
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      value={form.title}
                      onChange={(event) => updateForm("title", event.target.value)}
                      required
                      onInvalid={onInvalid}
                      onInput={onInput}
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
                    <span className="mb-1.5 flex items-center gap-1.5">&#128193; {t("modulosList.categoria")}</span>
                    <select
                      value={form.category}
                      onChange={(e) => updateForm("category", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                    >
                      <option value="sin-categoria">{t("moduloEditor.sinCategoria")}</option>
                      <option value="evaluacion">{t("profesorAulaConfiguracion.evaluacion")}</option>
                      <option value="competencia">{t("moduloEditor.competencia")}</option>
                    </select>
                  </label>
                </div>

                <label className="block text-sm font-medium text-[var(--c-text)]">
                  <span className="mb-1.5 flex items-center gap-1.5">&#128196; {t("comun.descripcion")}</span>
                  <textarea
                    id="modulo-field-description"
                    className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                    rows={3}
                    value={form.description}
                    onChange={(event) => updateForm("description", event.target.value)}
                    required
                    onInvalid={onInvalid}
                    onInput={onInput}
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
                    <span className="mb-1.5 flex items-center gap-1.5">&#128218; {t("comun.materia")}</span>
                    <select
                      id="modulo-field-subject"
                      className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      value={form.subject}
                      onChange={(event) => handleSubjectChange(event.target.value)}
                      required
                      onInvalid={onInvalid}
                      onInput={onInput}
                      aria-invalid={fieldErr("subject") || undefined}
                      aria-describedby={fieldErr("subject") ? "modulo-err-subject" : undefined}
                    >
                      <option value="">{t("moduloEditor.elegirMateria")}</option>
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
                      placeholder={t("moduloEditor.ej1AnoSecundario")}
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
                    <span className="mb-1.5 flex items-center gap-1.5">&#9202; {t("moduloEditor.duracionMin")}</span>
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
                      <option value="publico">{t("profesorEvaluaciones.publico")}</option>
                      <option value="privado">{t("moduloEditor.privadoSoloVos")}</option>
                      <option value="escuela">{t("sidebar.escuela")}</option>
                    </select>
                  </div>
                </div>

                {/* PLAN-X §7 — descatalogado: oculto de los listados generales
                    sin borrarse. Sigue visible para vos, para alumnos
                    invitados y para cualquier aula donde lo asignes. */}
                <label className="flex items-start gap-2.5 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 text-sm text-[var(--c-text)]">
                  <input
                    type="checkbox"
                    className="mt-0.5"
                    checked={form.descatalogado}
                    onChange={(event) => updateForm("descatalogado", event.target.checked)}
                    data-testid="modulo-field-descatalogado"
                  />
                  <span>
                    <span className="font-medium flex items-center gap-1.5">&#128065;&#8203;&#128683; Descatalogado</span>
                    <span className="mt-0.5 block text-xs text-[var(--c-muted)]">{t("moduloEditor.noApareceEnLosListados")}</span>
                  </span>
                </label>

                {isEditing && form.descatalogado ? (
                  <ModuloInvitadosPanel moduloId={id!} />
                ) : null}

                {/* School picker — only shown when visibility = "escuela" */}
                {form.visibility === "escuela" ? (
                  <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 space-y-3">
                    <p className="flex items-center gap-2 text-xs font-semibold text-[var(--c-text)]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--c-warning-soft)] text-[var(--c-warning)] text-[10px]">&#127979;</span>{t("moduloEditor.aQueEscuelaAplicaEsta")}</p>
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
                        >{t("moduloEditor.cambiar")}</button>
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
                            placeholder={t("moduloEditor.buscarEscuela")}
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
                          <p className="text-xs text-[var(--c-muted)] animate-pulse">{t("mensajeria.buscando")}</p>
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
                  title={t("moduloDetail.teoria")}
                  subtitle={t("moduloEditor.recursosDeEstudioTextosVideos")}
                  headingId="sec-teoria-heading"
                  right={
                    <>
                      {sectionStatus.theoryOk ? (
                        <StatusPill tone="ok"><span aria-hidden="true">&#10003;</span>{t("moduloEditor.completo")}</StatusPill>
                      ) : (
                        <StatusPill tone="warn"><span aria-hidden="true">&#9888;</span>{t("moduloEditor.sinRecursos")}</StatusPill>
                      )}
                      <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-medium text-[var(--c-muted)]">{theoryItems.length} recursos</span>
                    </>
                  }
                />

                {/* New theory item form */}
                <div className="space-y-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--c-muted)]">{t("moduloEditor.agregarRecurso")}</p>
                    {/* PLAN-G §1 (item 25) — insertar un material guardado (copia snapshot, no vínculo vivo). */}
                    <InsertarMaterialGuardado onInsert={insertMaterialTheoryItem} />
                  </div>
                  <div className="grid gap-3 md:grid-cols-[1fr_180px]">
                    <input
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                      placeholder={t("moduloEditor.tituloDelRecurso")}
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
                          {THEORY_TYPE_LABEL_KEY[opt.value] ? t(THEORY_TYPE_LABEL_KEY[opt.value]) : opt.label}
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
                      >{t("moduloEditor.abrirEditorDeBloques")}</button>
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
                        <option value="">{t("moduloEditor.seleccionarHerramienta")}</option>
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
                                aria-label={t("moduloEditor.abrirEditorDeMapa")}
                                className="rounded-md border border-[var(--c-primary)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-hover)]"
                                onClick={() =>
                                  setMapaEditing({ herramientaId: "new", config: cfg })
                                }
                              >
                                <svg className="inline-block w-4 h-4 mr-1.5 align-text-bottom" viewBox="0 0 24 24" aria-hidden="true">
                                  <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v16M15 6v16"/>
                                </svg>{t("moduloEditor.abrirEditorDeMapa")}</button>
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
                        aria-label={t("moduloEditor.urlDelVideo")}
                        type="url"
                        value={newTheoryItem.detail}
                        onChange={(event) =>
                          setNewTheoryItem((prev) => ({ ...prev, detail: event.target.value }))
                        }
                      />
                      <p className="text-xs text-[var(--c-muted)]">{t("moduloEditor.soportaYoutubeVimeoOUn")}</p>
                    </div>
                  ) : isDocumentoType(newTheoryItem.type) ? (
                    <div className="space-y-1">
                      <input
                        className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:border-[var(--c-primary)] focus:outline-none"
                        placeholder="https://... (PDF, DOC, etc.)"
                        aria-label={t("moduloEditor.urlDelDocumento")}
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
                      aria-label={t("moduloEditor.urlDelEnlace")}
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
                      placeholder={t("moduloEditor.escribiElContenidoDelTexto")}
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
                    <span className="text-base leading-none">+</span>{t("moduloEditor.agregarRecurso")}</button>
                </div>

                {/* Existing theory items */}
                {theoryItems.length === 0 ? (
                  <div role="status" className="rounded-xl border-2 border-dashed border-[var(--c-border)] py-8 text-center">
                    <p className="text-sm text-[var(--c-muted)]">{t("moduloEditor.noHayElementosTeoricosCargados")}</p>
                    <p className="mt-1 text-xs text-[var(--c-muted)]">{t("moduloEditor.usaElFormularioDeArriba")}</p>
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
                              title={t("moduloEditor.moverArriba")}
                              aria-label={t("moduloEditor.moverRecursoHaciaArriba")}
                              disabled={itemIdx === 0}
                              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-sm text-[var(--c-muted)] transition-colors hover:bg-[var(--c-surface)] hover:text-[var(--c-text)] disabled:cursor-not-allowed disabled:opacity-30"
                              onClick={() => moveTheoryItem(item.id, "up")}
                            >
                              <span aria-hidden="true">▲</span>
                            </button>
                            <button
                              type="button"
                              title={t("moduloEditor.moverAbajo")}
                              aria-label={t("moduloEditor.moverRecursoHaciaAbajo")}
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
                          <div className="min-w-0 flex-1 space-y-3">
                            <TheoryItemCard item={item} />
                            <div className="flex flex-col gap-2">
                              <input
                                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-xs transition-colors focus:border-[var(--c-primary)] focus:outline-none"
                                placeholder={t("comun.titulo")}
                                aria-label={t("moduloEditor.tituloDelRecurso")}
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
                                  >{t("moduloEditor.editarPresentacion")}</button>
                                </div>
                              ) : isVideoType(item.type) ? (
                                <div className="space-y-1">
                                  <input
                                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-2 text-xs w-full focus:border-[var(--c-primary)] focus:outline-none"
                                    placeholder="https://youtu.be/... o https://vimeo.com/..."
                                    aria-label={t("moduloEditor.urlDelVideo")}
                                    type="url"
                                    value={item.detail}
                                    onChange={(event) =>
                                      updateTheoryItem(item.id, { detail: event.target.value })
                                    }
                                  />
                                  <p className="text-[11px] text-[var(--c-muted)]">{t("moduloEditor.youtubeVimeoOEnlaceDirecto")}</p>
                                </div>
                              ) : isDocumentoType(item.type) ? (
                                <div className="space-y-1">
                                  <input
                                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-2 text-xs w-full focus:border-[var(--c-primary)] focus:outline-none"
                                    placeholder="https://... (PDF, DOC, etc.)"
                                    aria-label={t("moduloEditor.urlDelDocumento")}
                                    type="url"
                                    value={item.detail}
                                    onChange={(event) =>
                                      updateTheoryItem(item.id, { detail: event.target.value })
                                    }
                                  />
                                  <p className="text-[11px] text-[var(--c-muted)]">{t("moduloEditor.pdfVisorIntegradoOtrosFormatos")}</p>
                                </div>
                              ) : isLinkType(item.type) ? (
                                <input
                                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-2 text-xs w-full focus:border-[var(--c-primary)] focus:outline-none"
                                  placeholder="https://..."
                                  aria-label={t("moduloEditor.urlDelEnlace")}
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
                                  >{t("moduloEditor.abrirEditorDeBloques")}</button>
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
                                    <option value="">{t("moduloEditor.seleccionarHerramienta")}</option>
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
                                            aria-label={t("moduloEditor.abrirEditorDeMapa")}
                                            className="rounded-md border border-[var(--c-primary)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-hover)]"
                                            onClick={() =>
                                              setMapaEditing({ herramientaId: item.id, config: cfg })
                                            }
                                          >
                                            <svg className="inline-block w-4 h-4 mr-1.5 align-text-bottom" viewBox="0 0 24 24" aria-hidden="true">
                                              <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v16M15 6v16"/>
                                            </svg>{t("moduloEditor.abrirEditorDeMapa")}</button>
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
                                  if (window.confirm(t("moduloEditor.eliminarEsteRecursoDeTeoria"))) {
                                    removeTheoryItem(item.id);
                                  }
                                }}
                              >{t("comun.eliminar")}</button>
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
                  title={t("moduloEditor.dependencias")}
                  headingId="sec-dependencias-heading"
                  subtitle={t("moduloEditor.indicaSiEsteModuloRequiere")}
                  right={<StatusPill tone="neutral">{t("profesorCalendario.opcional")}</StatusPill>}
                />

                {form.dependencies.length > 0 ? (
                  <ul className="space-y-2">
                    {form.dependencies.map((dep) => (
                      <li
                        key={dep.id}
                        className="flex items-center gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] px-4 py-3 transition-colors hover:border-[var(--c-primary)]/30"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--c-border)] text-[10px] font-bold text-[var(--c-muted)]">&#128279;</span>
                        <span className="flex-1 truncate text-xs text-[var(--c-text)]">
                          {depModuleNames[dep.id] === null ? (
                            <span className="italic text-[var(--c-muted)]">{t("moduloEditor.moduloEliminado")}<span className="font-mono">({dep.id})</span>
                            </span>
                          ) : (
                            depModuleNames[dep.id] ?? dep.id
                          )}
                        </span>
                        <select
                          className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2.5 py-1.5 text-xs focus:border-[var(--c-primary)] focus:outline-none"
                          value={dep.type}
                          onChange={(e) =>
                            updateDependencyType(dep.id, e.target.value as "required" | "unlocks")
                          }
                        >
                          <option value="required">{t("moduloEditor.requeridoAntes")}</option>
                          <option value="unlocks">{t("moduloEditor.desbloqueaAlTerminar")}</option>
                        </select>
                        <button
                          type="button"
                          className="rounded-md border border-[color-mix(in_srgb,var(--c-danger)_30%,transparent)] bg-[var(--c-danger-soft)] px-2 py-1 text-xs font-medium text-[var(--c-danger)] transition-all hover:bg-[color-mix(in_srgb,var(--c-danger)_18%,var(--c-surface))] hover:border-[color-mix(in_srgb,var(--c-danger)_45%,transparent)]"
                          onClick={() => removeDependency(dep.id)}
                        >{t("comun.quitar")}</button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div role="status" className="rounded-xl border-2 border-dashed border-[var(--c-border)] py-6 text-center">
                    <p className="text-sm text-[var(--c-muted)]">{t("moduloEditor.sinDependenciasConfiguradas")}</p>
                  </div>
                )}

                {depPickerOpen ? (
                  <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 space-y-3">
                    <input
                      className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-xs focus:border-[var(--c-primary)] focus:outline-none"
                      placeholder={t("moduloEditor.buscarModuloPorTitulo")}
                      value={depSearch}
                      autoFocus
                      onChange={(e) => {
                        setDepSearch(e.target.value);
                        searchModules(e.target.value);
                      }}
                    />
                    {depLoading ? (
                      <p className="text-xs text-[var(--c-muted)] animate-pulse">{t("mensajeria.buscando")}</p>
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
                    >{t("comun.cancelar")}</button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="w-full rounded-xl border-2 border-dashed border-[var(--c-border)] px-4 py-3 text-xs font-medium text-[var(--c-muted)] transition-colors hover:border-[var(--c-primary)] hover:text-[var(--c-primary)]"
                    onClick={() => {
                      setDepPickerOpen(true);
                      searchModules("");
                    }}
                  >{t("moduloEditor.agregarDependencia")}</button>
                )}
                </div>
              </section>
              </>)}

              {isEvaluacionMode && (
              <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-warning)_30%,transparent)] bg-[var(--c-warning-soft)] px-5 py-4 flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">📝</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--c-text)]">{t("moduloEditor.modoEvaluacion")}</p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">{t("moduloEditor.elModuloEstaConfiguradoComo")}</p>
                </div>
              </div>
              )}

              {/* ── Cuestionarios ── */}
              <section id="sec-cuestionarios" className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="p-6 space-y-5">
                <CardHeader
                  icon={<span>&#10068;</span>}
                  title={t("nav.cuestionarios")}
                  headingId="sec-cuestionarios-heading"
                  subtitle="Evaluaciones manuales, generadas o desde plantillas VBLang."
                  right={
                    <>
                      {quizzes.length === 0 ? (
                        <StatusPill tone="neutral">{t("moduloEditor.sinCuestionarios")}</StatusPill>
                      ) : (
                        <>
                          {sectionStatus.quizzesOk ? (
                            <StatusPill tone="ok"><span aria-hidden="true">&#10003;</span>{t("moduloEditor.completo")}</StatusPill>
                          ) : (
                            <StatusPill tone="warn"><span aria-hidden="true">&#9888;</span>{t("moduloEditor.conErrores")}</StatusPill>
                          )}
                          <span className="rounded-full bg-[var(--c-bg)] px-3 py-1 text-xs font-medium text-[var(--c-muted)]">{quizCountLabel}</span>
                        </>
                      )}
                    </>
                  }
                />

                {/* WO-3 — Escala de notas del módulo. Aplica a la calificación
                    de todos los cuestionarios formales del módulo. Si no se
                    elige, se usa la escala 0–100 por defecto (comportamiento
                    histórico, reconciliado con el umbral). */}
                <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-muted)] sm:max-w-sm">
                  <span className="flex items-center gap-1.5">{t("moduloEditor.escalaDeNotas")}</span>
                  <select
                    aria-label={t("moduloEditor.escalaDeNotasDelModulo")}
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
                  <span className="font-normal text-[var(--c-muted)]">{t("moduloEditor.conQueEscalaSeMuestra")}</span>
                </label>

                <div className="flex flex-wrap items-start gap-3">
                  {/* PLAN-Y bis — módulo NUEVO (sin `id`): los botones de
                      crear/importar cuestionarios necesitan un módulo guardado
                      (server-first). En vez de dejar la sección sin botones,
                      mostramos uno que guarda el módulo (submit del form);
                      tras guardar se navega a su editor y aparecen los tres. */}
                  {!id ? (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text-on-dark)] hover:opacity-90 transition-opacity"
                      data-testid="guardar-para-cuestionarios"
                    >
                      <span className="text-base leading-none">💾</span>{t("moduloEditor.guardarModuloParaAgregarCuestionarios")}</button>
                  ) : null}

                  {/* PLAN-CUESTIONARIOS — acción primaria: el módulo CREA el
                      cuestionario (reglas de cuestionario + preguntas en
                      Tiza). Sólo con módulo guardado, igual que
                      "Usar cuestionario existente". */}
                  {id ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text-on-dark)] hover:opacity-90 transition-opacity disabled:opacity-60"
                      data-testid="crear-cuestionario"
                      disabled={creandoCuestionario}
                      onClick={() => void handleCrearCuestionario()}
                    >
                      <span className="text-base leading-none">➕</span>
                      {creandoCuestionario ? "Creando…" : "Crear cuestionario"}
                    </button>
                  ) : null}

                  {/* PLAN-Y bis — "Cuestionario desde plantilla": crea un quiz
                      Tiza nativo (como "Crear cuestionario") con la plantilla
                      elegida YA importada como su primera pregunta (modelo
                      `preguntas`). Reemplaza al viejo "Usar plantilla VBLang"
                      (quiz legacy `generatorId: plantilla:X`). Sólo con módulo
                      guardado (`crearQuizEnModulo` necesita un id real). */}
                  {id ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors disabled:opacity-60"
                      data-testid="open-plantilla-selector"
                      disabled={importandoPlantilla}
                      onClick={() => setPlantillaModalOpen(true)}
                    >
                      <span className="text-base leading-none">🧩</span>
                      {importandoPlantilla ? "Importando…" : "Cuestionario desde plantilla"}
                    </button>
                  ) : null}

                  {/* PLAN-CORRECCIONES C2 — sólo con el módulo ya guardado
                      (clona contra un id real de inmediato, no hay borrador
                      local a donde "agregar" sin eso). */}
                  {id ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                      data-testid="open-quiz-suelto-selector"
                      onClick={openQuizSueltoModal}
                    >
                      <span className="text-base leading-none">🔁</span>{t("moduloEditor.usarCuestionarioExistente")}</button>
                  ) : null}

                </div>

                {crearCuestionarioError && (
                  <Alert variant="danger">{t("moduloEditor.noSePudoCrearEl")}</Alert>
                )}

                {/* PLAN-CUESTIONARIOS — el entry point "⚡ Generados (legacy)"
                    (editor clásico V1) se retiró: los editores V1/V2 quedaron
                    desconectados del router. */}

                {/* Leyenda explicativa */}
                <div className="flex flex-wrap gap-3 text-xs text-[var(--c-muted)]">
                  {!id && (
                    <span>{t("moduloEditor.guardaElModuloParaPoder")}</span>
                  )}
                  <span>{t("moduloEditor.dentroDeUnCuestionarioPodes")}</span>
                </div>

                {quizzes.length === 0 ? (
                  <div role="status" className="rounded-xl border-2 border-dashed border-[var(--c-border)] py-8 text-center">
                    <p className="text-sm text-[var(--c-muted)]">{t("moduloEditor.noHayCuestionariosConfigurados")}</p>
                    <p className="mt-1 text-xs text-[var(--c-muted)]">{t("moduloEditor.usaLosBotonesDeArriba")}</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {quizzes.map((quiz) => {
                      const quizGenId = quiz.generatorId ?? "";
                      // WO-tiza-config (Fase 5) — si el quiz usa preguntas
                      // nativas (`settings.preguntas`, el modelo que lee el
                      // runtime), el badge legacy por `generatorId` queda
                      // desincronizado (bug 1b del informe QA 2026-07-01):
                      // no se muestra "Editar plantilla →" y la entrada
                      // principal pasa a ser "Preguntas nativas en Tiza →".
                      const tienePreguntasNativas = quiz.tienePreguntasNativas === true;
                      // Un quiz legacy (generatorId="plantilla:X") puede haber
                      // sido editado después con QuizPosicionesEditor
                      // (settings.posiciones, lo que de verdad sortea
                      // quiz-sorteo.ts) — ahí el badge "Plantilla VBLang" +
                      // "Editar plantilla →" quedaría apuntando a una sola
                      // plantilla aunque el contenido real sea multi-posición.
                      const tienePosiciones = (quiz.posiciones?.posiciones?.length ?? 0) > 0;
                      const esPlantilla =
                        !tienePreguntasNativas && !tienePosiciones && quizGenId.startsWith("plantilla:");
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
                          {tienePreguntasNativas ? (
                            <span
                              className="inline-flex items-center gap-1 rounded-full bg-[var(--c-success-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--c-success)]"
                              data-testid="quiz-badge-preguntas-nativas"
                            >{t("moduloEditor.preguntasNativasTiza")}</span>
                          ) : esPlantilla ? (
                            <>
                              <span
                                className="inline-flex items-center gap-1 rounded-full bg-[var(--c-success-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--c-success)]"
                                data-testid="quiz-badge-plantilla"
                              >{t("moduloEditor.plantillaVblang")}</span>
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
                                >{t("moduloEditor.editarPlantilla")}</Link>
                              )}
                            </>
                          ) : quiz.mode === "generated" ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--c-info-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--c-info)]">{t("moduloEditor.generado")}</span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--c-bg)] px-2 py-0.5 text-[11px] font-semibold text-[var(--c-muted)]">{t("moduloEditor.manual")}</span>
                          )}
                          {/* Etapa 2 (Tiza — preguntas nativas) — sólo para
                              módulos YA guardados: un quiz recién agregado en
                              esta sesión todavía no existe en el servidor
                              (se crea junto con el módulo al guardar), así
                              que abrirlo en Tiza con su `quizId` fallaría
                              con 404. Se agrega en la lista de quizzes
                              existentes, no en el flujo de "crear nuevo". */}
                          {id && (
                            <Link
                              to={`/plantillas/nueva?quizId=${encodeURIComponent(quiz.id)}&returnTo=${encodeURIComponent(moduloReturnTo)}`}
                              className="text-xs text-[var(--c-primary)] hover:underline"
                              data-testid="quiz-tiza-preguntas-link"
                            >{t("moduloEditor.editarEnTizaPreguntasY")}</Link>
                          )}
                        </div>

                        {/* PLAN-Y — la config (título/tipo/visibilidad/
                            instrucciones/evaluación) se edita SOLO en Tiza
                            (Configuraciones). Acá queda un resumen
                            read-only: editarla en dos lados hacía que el
                            guardado del módulo pisara lo guardado en Tiza. */}
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="min-w-0 flex-1" data-testid="quiz-config-resumen">
                            <p className="truncate text-sm font-semibold text-[var(--c-text)]">
                              {quiz.title.trim() || "Cuestionario sin título"}
                            </p>
                            <p className="mt-1 text-xs text-[var(--c-muted)]">
                              {quiz.type === "practica"
                                ? "Práctica — no cuenta para la nota"
                                : quiz.type === "competencia"
                                  ? "Competencia"
                                  : "Evaluación formal — cuenta para la nota"}
                              {" · "}
                              {quiz.visibility === "escuela" ? "Escuela" : "Público"}
                              {typeof quiz.timerSegundos === "number" && quiz.timerSegundos > 0
                                ? ` · Timer: ${Math.round(quiz.timerSegundos / 60)} min`
                                : ""}
                              {typeof quiz.maxIntentos === "number" && quiz.maxIntentos > 0
                                ? ` · Intentos: ${quiz.maxIntentos}`
                                : ""}
                            </p>
                            <p className="mt-1 text-xs text-[var(--c-muted)]">
                              {id && !quiz.localOnly
                                ? "El título, tipo, visibilidad, instrucciones y evaluación se configuran en Tiza."
                                : "Guardá el módulo para configurar este cuestionario en Tiza."}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <button
                              type="button"
                              className="rounded-md border border-[color-mix(in_srgb,var(--c-danger)_30%,transparent)] bg-[var(--c-danger-soft)] px-2.5 py-1 text-xs font-medium text-[var(--c-danger)] transition-all hover:bg-[color-mix(in_srgb,var(--c-danger)_18%,var(--c-surface))] hover:border-[color-mix(in_srgb,var(--c-danger)_45%,transparent)]"
                              onClick={() => {
                                if (window.confirm(t("moduloEditor.eliminarEsteCuestionarioYTodas"))) {
                                  removeQuiz(quiz.id);
                                }
                              }}
                            >{t("moduloEditor.eliminarCuestionario")}</button>
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
                            {quiz.mode === "generated" && !tienePreguntasNativas ? (
                              <Menu
                                align="end"
                                panelWidth="220px"
                                trigger={(props) => (
                                  <button
                                    type="button"
                                    {...props}
                                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                                    data-testid="quiz-mas-acciones"
                                  >{t("moduloEditor.masAcciones")}</button>
                                )}
                              >
                                {({ close }) => (
                                  <button
                                    type="button"
                                    role="menuitem"
                                    data-testid="quiz-configurar-generador-legacy"
                                    className="w-full px-3 py-2 text-left text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)]"
                                    onClick={() => {
                                      setQuizGeneradorLegacyOpen((prev) => ({ ...prev, [quiz.id]: !prev[quiz.id] }));
                                      close();
                                    }}
                                  >{t("moduloEditor.configurarGeneradorLegacy")}</button>
                                )}
                              </Menu>
                            ) : null}
                          </div>
                        </div>

                        {quizPreviewOpen[quiz.id] ? (
                          <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 text-xs text-[var(--c-muted)]">
                            <p className="mb-2 font-semibold">{t("moduloEditor.vistaPreviaDelEstudianteNo")}</p>
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

                        {tienePreguntasNativas ? null : quiz.mode === "generated" ? (
                          quizGeneradorLegacyOpen[quiz.id] ? (
                            <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
                              <QuizEditorGenerated
                                generatorId={quiz.generatorId ?? ""}
                                generatorVersion={quiz.generatorVersion ?? 1}
                                params={(quiz.params as Record<string, unknown>) ?? {}}
                                count={quiz.count ?? 0}
                                onChange={(next) => updateQuiz(quiz.id, { ...next })}
                                showPreview={isTeacher}
                              />
                            </div>
                          ) : null
                        ) : (
                          <>
                            <QuizEditorManual
                              questions={quiz.questions ?? []}
                              onChange={(next) => updateQuiz(quiz.id, { questions: next })}
                            />
                            {(quiz.mode === "manual" || quiz.mode === undefined) && (quiz.questions?.length ?? 0) > 0 ? (
                              <label className="text-xs font-medium text-[var(--c-muted)]">{t("moduloEditor.preguntasPorExamen")}<span className="ml-1 font-normal text-[var(--c-muted)]">
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
                      <StatusPill tone="ok"><span aria-hidden="true">&#10003;</span>{t("moduloEditor.listoParaGuardar")}</StatusPill>
                    ) : (
                      <StatusPill tone="warn"><span aria-hidden="true">&#9888;</span>{t("moduloEditor.faltaCompletarInformacionGeneral")}</StatusPill>
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
  const { t } = useI18n();
  if (!isOpen) {
    return (
      <div className="flex items-center gap-3">
        {selectedId ? (
          <>
            <span className="text-xs text-[var(--c-muted)]">{t("moduloEditor.libro")}<strong>{selectedTitle || selectedId}</strong>
            </span>
            <button type="button" className="text-xs text-[var(--c-primary)] hover:underline" onClick={onOpenPicker}>{t("moduloEditor.cambiar")}</button>
          </>
        ) : (
          <button
            type="button"
            className="w-full rounded-lg border border-dashed border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-muted)] hover:border-[var(--c-primary)] hover:text-[var(--c-primary)] text-left transition-colors"
            onClick={onOpenPicker}
          >{t("moduloEditor.seleccionarDocumento")}</button>
        )}
        <Link
          to="/editor"
          className="text-xs text-[var(--c-primary)] hover:underline whitespace-nowrap"
        >{t("moduloEditor.crearNuevo")}</Link>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 space-y-2">
      <p className="text-xs text-[var(--c-muted)] mt-0.5 mb-3">{t("moduloEditor.paraContenidoSimpleUsaLos")}</p>
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-2 py-1.5 text-xs focus:border-[var(--c-primary)] focus:outline-none"
          placeholder={t("moduloEditor.buscarLibroPorTitulo")}
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(search)}
          autoFocus
        />
      </div>
      {loading ? (
        <p className="text-xs text-[var(--c-muted)]">{t("mensajeria.buscando")}</p>
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
        <p className="text-xs text-[var(--c-muted)]">{t("profesorAulaConfiguracion.sinResultados")}</p>
      )}
      <div className="flex gap-3 pt-1 border-t border-[var(--c-border)]">
        <Link
          to="/editor"
          className="text-xs text-[var(--c-primary)] hover:underline"
        >{t("moduloEditor.crearNuevoDocumento")}</Link>
        <button type="button" className="text-xs text-[var(--c-muted)] hover:text-[var(--c-muted)]" onClick={onClose}>{t("comun.cancelar")}</button>
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
  const { t } = useI18n();
  if (!isOpen) {
    return (
      <div className="flex items-center gap-3">
        {selectedId ? (
          <>
            <span className="text-xs text-[var(--c-muted)]">{t("moduloEditor.documento")}<strong>{selectedId}</strong>
            </span>
            <button type="button" className="text-xs text-[var(--c-primary)] hover:underline" onClick={onOpenPicker}>{t("moduloEditor.cambiar")}</button>
          </>
        ) : (
          <button
            type="button"
            className="w-full rounded-lg border border-dashed border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-muted)] hover:border-[var(--c-primary)] hover:text-[var(--c-primary)] text-left transition-colors"
            onClick={onOpenPicker}
          >{t("moduloEditor.seleccionarDocumentoTuesdayjs")}</button>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 space-y-2">
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-2 py-1.5 text-xs focus:border-[var(--c-primary)] focus:outline-none"
          placeholder={t("moduloEditor.buscarDocumentoPorTitulo")}
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(search)}
          autoFocus
        />
      </div>
      {loading ? (
        <p className="text-xs text-[var(--c-muted)]">{t("mensajeria.buscando")}</p>
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
        <p className="text-xs text-[var(--c-muted)]">{t("profesorAulaConfiguracion.sinResultados")}</p>
      )}
      <div className="pt-1 border-t border-[var(--c-border)]">
        <button type="button" className="text-xs text-[var(--c-muted)] hover:text-[var(--c-muted)]" onClick={onClose}>{t("comun.cancelar")}</button>
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

// PLAN-X §7 — gestión de invitados de un módulo descatalogado. Sólo el
// dueño puede llamar estos endpoints (403 server-side si no lo es); el
// panel sólo se muestra en el editor del propio módulo, así que en la
// práctica siempre es el dueño quien lo ve.
type InvitadoItem = { usuarioId: string; name: string };
type UsuarioCandidato = { id: string; username: string };

function ModuloInvitadosPanel({ moduloId }: { moduloId: string }) {
  const { t } = useI18n();
  const [invitados, setInvitados] = useState<InvitadoItem[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [candidatos, setCandidatos] = useState<UsuarioCandidato[]>([]);
  const [search, setSearch] = useState("");
  const [inviting, setInviting] = useState<string | null>(null);

  const loadInvitados = () => {
    setStatus("loading");
    apiGet<{ items: InvitadoItem[] }>(`/api/modulos/${moduloId}/invitados`)
      .then((data) => {
        setInvitados(data.items ?? []);
        setStatus("ready");
      })
      .catch((error) => {
        setStatus("error");
        setErrorMessage(error instanceof Error ? error.message : t("moduloEditor.noSePudoCargarLa2"));
      });
  };

  useEffect(() => {
    loadInvitados();
    apiGet<{ items: UsuarioCandidato[] }>("/api/usuarios")
      .then((data) => setCandidatos(data.items ?? []))
      .catch(() => setCandidatos([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduloId]);

  const invitedIds = useMemo(() => new Set(invitados.map((i) => i.usuarioId)), [invitados]);
  const matches = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return [];
    return candidatos
      .filter((u) => !invitedIds.has(u.id) && u.username.toLowerCase().includes(term))
      .slice(0, 8);
  }, [search, candidatos, invitedIds]);

  const invitar = async (usuarioId: string) => {
    setInviting(usuarioId);
    try {
      await apiPost(`/api/modulos/${moduloId}/invitados`, { usuarioId });
      setSearch("");
      loadInvitados();
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : t("moduloEditor.noSePudoInvitarAl")
      );
    } finally {
      setInviting(null);
    }
  };

  const desinvitar = async (usuarioId: string) => {
    try {
      await apiDelete(`/api/modulos/${moduloId}/invitados/${usuarioId}`);
      setInvitados((prev) => prev.filter((i) => i.usuarioId !== usuarioId));
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : t("moduloEditor.noSePudoQuitarLa")
      );
    }
  };

  return (
    <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 space-y-3">
      <p className="flex items-center gap-2 text-xs font-semibold text-[var(--c-text)]">{t("moduloEditor.alumnosInvitados")}<span className="rounded-full bg-[var(--c-surface)] px-2 py-0.5 text-[10px] text-[var(--c-muted)]">
          {invitados.length}
        </span>
      </p>
      <p className="text-xs text-[var(--c-muted)]">{t("moduloEditor.losAlumnosInvitadosVenEste")}</p>

      {errorMessage && (
        <p className="text-xs text-[var(--c-danger)]">{errorMessage}</p>
      )}

      <div className="relative">
        <input
          className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2 text-xs transition-colors focus:border-[var(--c-primary)] focus:outline-none"
          placeholder={t("moduloEditor.buscarAlumnoPorUsuario")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          data-testid="modulo-invitar-search"
        />
        {matches.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] shadow-sm">
            {matches.map((u) => (
              <li key={u.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-xs hover:bg-[var(--c-bg)]"
                  onClick={() => invitar(u.id)}
                  disabled={inviting === u.id}
                >
                  <span>{u.username}</span>
                  <span className="text-[var(--c-primary)]">
                    {inviting === u.id ? "Invitando..." : "Invitar"}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === "loading" ? (
        <p className="text-xs text-[var(--c-muted)]">{t("moduloEditor.cargandoInvitados")}</p>
      ) : status === "error" ? (
        <p className="text-xs text-[var(--c-danger)]">{t("moduloEditor.noSePudoCargarLa")}</p>
      ) : invitados.length === 0 ? (
        <p className="text-xs text-[var(--c-muted)]">{t("moduloEditor.todaviaNoInvitasteANadie")}</p>
      ) : (
        <ul className="space-y-1.5" data-testid="modulo-invitados-list">
          {invitados.map((i) => (
            <li
              key={i.usuarioId}
              className="flex items-center justify-between rounded-md bg-[var(--c-surface)] px-2.5 py-1.5 text-xs"
            >
              <span>{i.name}</span>
              <button
                type="button"
                className="text-[var(--c-danger)] hover:underline"
                onClick={() => desinvitar(i.usuarioId)}
              >{t("comun.quitar")}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
