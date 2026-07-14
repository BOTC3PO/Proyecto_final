/**
 * pages/PlantillaEditorTiza.tsx — Editor de plantillas VBLang sobre el shell
 * "Tiza" (WO-V2c · centro limpio WO-V3a).
 *
 * Reusa TODA la lógica del editor standalone V1 (`PlantillaEditor.tsx`:
 * undo/redo, guardado con guard anti-duplicado, importar JSON, metadatos,
 * compilación/preview/validación, carga por id, toast, wizard) sobre el chrome
 * limpio del prototipo Tiza (`PlantillaEditorShell`), con la misma disposición
 * que la demo (archivada en `archive/web/pages/TizaDemoPage.tsx`):
 *
 *   • Top bar mínimo: Volver · breadcrumb · acento · tema · toggle
 *     Form/Ambos/Código · Vista del alumno · Guardar. Los secundarios
 *     (Importar JSON, Ejemplos, Referencia, Copiar prompt, Datasets) viven en
 *     un menú de overflow "⋯ Más" (átomo `Menu`).
 *   • Columna izquierda: rail CUESTIONARIO (working set de preguntas en
 *     memoria: elegir / agregar / quitar) + navegador de secciones de la
 *     pregunta activa. "Guardar" persiste TODO el rail (PLAN-Z fase 1):
 *     cada pregunta nueva o con DSL cambiado se guarda como su propia
 *     plantilla; las que fallan quedan marcadas en rojo en el rail.
 *   • Derecha: detalles (metadatos) plegables + property grid contextual
 *     (`TizaPropertyGrid`) + validación.
 *   • Preview del alumno colapsable al costado (no modal).
 *   • Centro (WO-V3a) según el modo del shell: la tarjeta del prototipo
 *     (`TizaQuestionCard`) en Form/Ambos —Ambos suma un drawer de código de
 *     lectura—, o el editor de código rico con panel de errores compacto en
 *     Código. Sin consola al pie ni panel de errores global de 192px: la
 *     validación se ve en el property grid y los errores de parseo, inline.
 *     Los generadores y tipos avanzados se editan en modo Código (fidelidad
 *     total); la tarjeta avisa cuando no los cubre.
 *
 * NO reescribe la lógica de campos ni el round-trip código↔formulario: reusa
 * los mismos componentes y hooks que V1. Es disposición/chrome.
 *
 * El editor clásico viejo (`PlantillaEditor.tsx`) sigue accesible vía la flag
 * `?editorClasico=1`.
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { parse, serialize, QUESTION_TYPE_SCHEMAS, type Plantilla } from "@vb/vblang";
import CodeEditor, {
  type CodeEditorHandle,
} from "../components/vblang/CodeEditor";
import {
  TizaQuestionCard,
  TizaPropertyGrid,
  TizaCodeDrawer,
  type TizaSelection,
  type QuizPreguntaMeta,
} from "../components/vblang/TizaEditor";
import DatasetExplorer from "../components/vblang/DatasetExplorer";
import EjemplosMenu from "../components/vblang/EjemplosMenu";
import PromptIAPanel from "../components/vblang/PromptIAPanel";
import ReferenciaRapida from "../components/vblang/ReferenciaRapida";
import SnippetBar from "../components/vblang/SnippetBar";
import NuevaPlantillaWizard from "../components/vblang/NuevaPlantillaWizard";
import PlantillaSelectorModal from "../components/vblang/PlantillaSelectorModal";
import type { PlantillaListItem } from "../domain/vblang/plantilla.types";
import { useEditorClasico } from "../editor/useEditorClasico";
import {
  extractDeclaredVariables,
  getBlock,
  readPistas,
  readExplicacion,
} from "../components/vblang/plantillaAst";
import { isGeneradorBase } from "../components/vblang/plantillaFields";
import Modal from "../ui/Modal";
import Toast, { type ToastAction } from "../components/Toast";
import ErrorPanel from "../components/vblang/ErrorPanel";
import PreviewPanel from "../components/vblang/PreviewPanel";
import MetadataPanel, {
  type PlantillaMetadata,
} from "../components/vblang/MetadataPanel";
import PlantillaEditorShell, {
  type AccentKey,
} from "../editor/PlantillaEditorShell";
import { useTheme } from "../theme/ThemeContext";
import { usePlantillaCompilation } from "../hooks/usePlantillaCompilation";
import { usePlantillaPreview } from "../hooks/usePlantillaPreview";
import { usePlantillaValidation } from "../hooks/usePlantillaValidation";
import {
  createPlantilla,
  getPlantilla,
  updatePlantilla,
  DslApiError,
} from "../domain/vblang/plantillaApi";
import {
  getQuizPreguntas,
  getQuizMeta,
  saveQuizPreguntas,
  patchQuizMeta,
  deleteQuiz,
  crearQuizSuelto,
  type QuizMeta,
  type QuizMetaPatch,
  type QuizMetaVisibility,
} from "../domain/quiz/quizPreguntasApi";
import QuizConfigPanel, {
  type QuizMetaSaveState,
  type QuizResumenSorteo,
} from "../components/vblang/QuizConfigPanel";
import {
  validarCuestionarioPreguntas,
  type CuestionarioPreguntas,
  type PreguntaQuiz,
} from "../domain/quiz/preguntas";
import PlantillaEditorClasico from "./PlantillaEditor";
import { useI18n } from "../i18n/I18nContext";

const INITIAL_TEMPLATE = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "Cuanto es {a} + {b}?"
respuesta: a + b
tipo: input
`;

const EMPTY_META: PlantillaMetadata = {
  nombre: "",
  descripcion: "",
  materia: "",
  tags: [],
  visibility: "privada",
};

type SaveStatus = "idle" | "saving" | "saved" | "error";

/* ---------- Historial de código (undo/redo) ---------- */
interface CodigoHist {
  past: string[];
  present: string;
  future: string[];
}
type CodigoAction =
  | { type: "set"; value: string }
  | { type: "reset"; value: string }
  | { type: "undo" }
  | { type: "redo" };

const MAX_HIST = 200;

function codigoHistReducer(s: CodigoHist, a: CodigoAction): CodigoHist {
  switch (a.type) {
    case "set":
      if (a.value === s.present) return s;
      return {
        past: [...s.past.slice(-(MAX_HIST - 1)), s.present],
        present: a.value,
        future: [],
      };
    case "reset":
      return { past: [], present: a.value, future: [] };
    case "undo":
      if (s.past.length === 0) return s;
      return {
        past: s.past.slice(0, -1),
        present: s.past[s.past.length - 1],
        future: [s.present, ...s.future],
      };
    case "redo":
      if (s.future.length === 0) return s;
      return {
        past: [...s.past, s.present],
        present: s.future[0],
        future: s.future.slice(1),
      };
  }
}

/* ---------- Working set: una pregunta del cuestionario (WO-V3a-b) ----------
 * El editor maneja una LISTA de preguntas en memoria (el rail "CUESTIONARIO").
 * Cada una tiene su propio DSL+historial, sus metadatos y, si ya se guardó, el
 * id de su plantilla. "Guardar" persiste TODO el rail (PLAN-Z fase 1): la
 * activa siempre, y toda otra pregunta nueva o con DSL distinto del último
 * guardado. Con `quizId` (o al agrupar 2+ sin quizId, C2) el cuestionario
 * completo se sube después de las plantillas. */
interface WorkQuestion {
  key: string;
  /** id de la plantilla persistida; null mientras no se guardó. */
  plantillaId: string | null;
  metadata: PlantillaMetadata;
  /** Último DSL persistido ("" si nunca se guardó). */
  savedCodigo: string;
  hist: CodigoHist;
  /**
   * Etapa 2 (Tiza — preguntas nativas) — rol de esta pregunta DENTRO del
   * cuestionario (`quizId` presente). `undefined` en modo standalone (sin
   * `quizId`): no se persiste nada de esto en ese caso. Default
   * "obligatoria" cuando hay `quizId` y la pregunta es nueva.
   */
  quizMeta?: QuizPreguntaMeta;
}

let _qSeq = 0;
function makeQuestion(
  dsl: string,
  patch?: Partial<Omit<WorkQuestion, "key" | "hist">>,
): WorkQuestion {
  return {
    key: `q${Date.now()}_${_qSeq++}`,
    plantillaId: null,
    metadata: { ...EMPTY_META },
    savedCodigo: "",
    ...patch,
    hist: { past: [], present: dsl, future: [] },
  };
}

/** WO-tiza-config — merge optimista de un `QuizMetaPatch` sobre el estado
 *  local: título/tipo/visibilidad van top-level, el resto son claves de la
 *  config de evaluación (`meta.config`). */
function aplicarMetaPatch(prev: QuizMeta, patch: QuizMetaPatch): QuizMeta {
  const { title, type, visibility, materia, nivel, tags, descripcion, ...config } = patch;
  return {
    ...prev,
    ...(title !== undefined ? { title } : {}),
    ...(type !== undefined ? { type } : {}),
    ...(visibility !== undefined ? { visibility } : {}),
    // PLAN-Z fase 3/4 — top-level, igual que title/type/visibility (NO
    // son config de evaluación).
    ...(materia !== undefined ? { materia } : {}),
    ...(nivel !== undefined ? { nivel } : {}),
    ...(tags !== undefined ? { tags } : {}),
    ...(descripcion !== undefined ? { descripcion } : {}),
    config: { ...prev.config, ...config },
  };
}

// PLAN-Z fase 3, decisión §3.2 — mapeo de visibilidad al heredar de la
// plantilla-config del cuestionario (2 valores: publico|escuela) a la
// de cada Plantilla-pregunta (3 valores: privada|escuela|publica). No
// hay equivalente de "privada" a nivel quiz — "publico" mapea a "publica".
function mapQuizVisibilityToPlantilla(v: QuizMetaVisibility): PlantillaMetadata["visibility"] {
  return v === "publico" ? "publica" : "escuela";
}

/* ---------- Botón de ítem del menú overflow ---------- */
function OverflowItem({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        width: "100%",
        textAlign: "left",
        padding: "8px 10px",
        borderRadius: "var(--r-md)",
        border: 0,
        background: "transparent",
        color: disabled ? "var(--c-text-3)" : "var(--c-text)",
        fontSize: 13,
        fontWeight: 500,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.background = "var(--c-surface-2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}

/* ---------- Ítem del navegador de secciones (rail izquierdo) ---------- */
function RailNavItem({
  icon,
  label,
  active,
  mono,
  onClick,
}: {
  icon: string;
  label: string;
  active: boolean;
  mono?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        textAlign: "left",
        padding: "8px 10px",
        borderRadius: "var(--r-md)",
        cursor: "pointer",
        background: active ? "var(--c-surface)" : "transparent",
        border: active ? "1px solid var(--c-border)" : "1px solid transparent",
        color: "var(--c-text)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 20,
          height: 20,
          flex: "0 0 auto",
          borderRadius: 6,
          background: "var(--c-accent-soft)",
          color: "var(--c-accent)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          minWidth: 0,
          flex: 1,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          ...(mono
            ? {
                fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
                color: "var(--c-accent)",
              }
            : null),
        }}
      >
        {label}
      </span>
    </button>
  );
}

export default function PlantillaEditorTiza() {
  // El editor clásico viejo queda accesible por flag inverso (sin hooks de por
  // medio: la flag se lee de la URL, estable durante la vida del componente).
  const clasico = useEditorClasico();
  if (clasico) {
    return <PlantillaEditorClasico />;
  }
  return <PlantillaEditorTizaInner />;
}

function PlantillaEditorTizaInner() {
  const { t } = useI18n();
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo");
  const isNew = !id;
  // Etapa 2 (Tiza — preguntas nativas) — `quizId` como query param, mismo
  // criterio que `returnTo` (contexto extra de esta misma página, no
  // identidad del recurso — eso sigue siendo `:id`/plantilla). Presente =
  // el editor está embebido en un cuestionario; ausente = plantilla suelta
  // standalone (comportamiento previo a Etapa 2, intacto).
  const quizId = searchParams.get("quizId");

  // El tema (claro/oscuro) lo maneja el tema global de la app, no el editor:
  // sólo observamos el actual para que el acento se pinte con el tono correcto.
  // No se expone toggle de tema acá (ver WO-V3a — correcciones).
  const { theme } = useTheme();
  const shellTheme = theme.endsWith("-dark") ? "dark" : "light";
  const [accent, setAccent] = useState<AccentKey>("azul");

  // Working set: lista de preguntas (rail CUESTIONARIO). La pregunta activa es
  // la fuente de verdad del centro/property grid/preview; las demás viven en
  // memoria hasta que se guardan (cada una como su propia plantilla).
  const [questions, setQuestions] = useState<WorkQuestion[]>(() => [
    makeQuestion(INITIAL_TEMPLATE),
  ]);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const activeIdx = Math.max(
    0,
    questions.findIndex((q) => q.key === activeKey),
  );
  const active = questions[activeIdx] ?? questions[0];

  const codigoDsl = active.hist.present;
  const savedCodigo = active.savedCodigo;
  const metadata = active.metadata;
  const canUndo = active.hist.past.length > 0;
  const canRedo = active.hist.future.length > 0;

  const updateActive = useCallback(
    (fn: (q: WorkQuestion) => WorkQuestion) =>
      setQuestions((qs) => {
        const idx = qs.findIndex((q) => q.key === activeKey);
        const i = idx >= 0 ? idx : 0;
        return qs.map((q, j) => (j === i ? fn(q) : q));
      }),
    [activeKey],
  );
  const dispatchActive = useCallback(
    (a: CodigoAction) =>
      updateActive((q) => ({ ...q, hist: codigoHistReducer(q.hist, a) })),
    [updateActive],
  );
  const setCodigo = useCallback(
    (v: string) => dispatchActive({ type: "set", value: v }),
    [dispatchActive],
  );
  const resetCodigo = useCallback(
    (v: string) => dispatchActive({ type: "reset", value: v }),
    [dispatchActive],
  );
  const undo = useCallback(() => dispatchActive({ type: "undo" }), [dispatchActive]);
  const redo = useCallback(() => dispatchActive({ type: "redo" }), [dispatchActive]);
  const setMetadata = useCallback(
    (m: PlantillaMetadata | ((p: PlantillaMetadata) => PlantillaMetadata)) =>
      updateActive((q) => ({
        ...q,
        metadata: typeof m === "function" ? m(q.metadata) : m,
      })),
    [updateActive],
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  // FIX-PLANTILLA-DUP — guard sincrónico para bloquear clicks múltiples en
  // "Guardar" (ver nota original en PlantillaEditor.tsx).
  const isSavingRef = useRef(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [dslApiError, setDslApiError] = useState<
    { message: string; line?: number; col?: number } | undefined
  >(undefined);
  // PLAN-Z fase 1 — errores de guardado por pregunta del rail (guardar-todo
  // no es todo-o-nada: las que fallan quedan marcadas y el resto se guarda).
  // Se reemplaza entero en cada Guardar, así los errores viejos no quedan.
  const [railSaveErrors, setRailSaveErrors] = useState<Record<string, string>>({});
  const [loadStatus, setLoadStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >(isNew && !quizId ? "ready" : "loading");
  // Etapa 2 (Tiza — preguntas nativas) — cuántas preguntas ve el alumno en
  // total. Sólo tiene sentido con `quizId` presente; `null` en modo
  // standalone (no se muestra el campo ni se persiste nada).
  const [cantidadGlobal, setCantidadGlobal] = useState<number | null>(null);
  // WO-tiza-config — meta del CUESTIONARIO (título/tipo/visibilidad/config de
  // evaluación; viven en `Quiz.title` + `QuizVersion.settings`, no en la
  // plantilla activa): sólo tiene sentido con `quizId`. `null` mientras carga;
  // la cabecera muestra un placeholder hasta que resuelve.
  const [quizMetaState, setQuizMetaState] = useState<QuizMeta | null>(null);
  const [metaSaveState, setMetaSaveState] = useState<QuizMetaSaveState>("idle");
  const quizTitle = quizMetaState?.title ?? null;
  const [toastState, setToastState] = useState<{
    message: string;
    actions?: ToastAction[];
  } | null>(null);
  // WO-V3a — modo único del shell (Form / Ambos / Código). Default "split"
  // (Ambos), como la demo y el prototipo: tarjeta + drawer de código.
  const [codeMode, setCodeMode] = useState<"form" | "split" | "code">("split");
  const [selection, setSelection] = useState<TizaSelection>({ kind: "pregunta" });
  // PLAN-Z fase 2 (§7) — "⚙ Configuraciones" pineada como ítem #1 del rail
  // CUESTIONARIO (sólo con `quizId`): seleccionada, el centro muestra la
  // tarjeta de configuración del cuestionario en lugar de la pregunta activa,
  // y el panel derecho un empty-state (la config no tiene property grid).
  const [configSelected, setConfigSelected] = useState(false);
  // Pools creadas desde la sección POOLS de la config que todavía no tienen
  // preguntas asignadas: una pool sólo persiste como `poolId` de alguna
  // pregunta relleno, así que hasta que se asigna vive en este estado local.
  const [poolsNuevas, setPoolsNuevas] = useState<string[]>([]);
  const [nuevoPoolNombre, setNuevoPoolNombre] = useState("");
  const [showTizaCode, setShowTizaCode] = useState(false);
  const [referenciaOpen, setReferenciaOpen] = useState(false);
  const [promptIAOpen, setPromptIAOpen] = useState(false);
  const [ejemplosOpen, setEjemplosOpen] = useState(false);
  const [datasetsOpen, setDatasetsOpen] = useState(false);
  // Metadatos plegables (panel derecho). Abiertos al crear (nombre obligatorio).
  const [metaOpen, setMetaOpen] = useState(isNew);
  // Sección activa del navegador (rail) cuando la selección es la pregunta.
  const [activeSection, setActiveSection] = useState<string>("tiza-sec-enunciado");
  // WO-tiza-config (Fase 5, bug 2 del informe QA) — el wizard de onboarding
  // ("¿plantilla en blanco o de una lista?") es para plantillas realmente
  // nuevas y sueltas. Entrar desde "Preguntas nativas en Tiza →" también usa
  // `/plantillas/nueva`, pero con `quizId`: en ese caso el wizard NO debe
  // dispararse (se está abriendo el cuestionario, no creando una plantilla).
  const [wizardDismissed, setWizardDismissed] = useState(!isNew || quizId !== null);
  // PLAN-Y bis — "Importar plantilla del banco" trae una plantilla existente
  // como pregunta del cuestionario (modelo `preguntas`, con su `plantillaId`).
  // Reemplaza al "Usar plantilla VBLang" a nivel módulo (que creaba el quiz
  // legacy `generatorId: plantilla:X`). El selector es el mismo componente.
  const [plantillaSelectorOpen, setPlantillaSelectorOpen] = useState(false);

  const editorRef = useRef<CodeEditorHandle | null>(null);
  const lastDeclaredRef = useRef<string[]>([]);
  const lastValidPlantillaRef = useRef<Plantilla | null>(null);
  // WO-tiza-config — cola del PATCH de meta del cuestionario: los cambios se
  // acumulan acá y se mandan con debounce (400ms) en un solo request; si hay
  // uno en vuelo, lo pendiente espera a que termine (evita PATCHes fuera de
  // orden pisándose entre sí).
  const pendingMetaPatchRef = useRef<QuizMetaPatch>({});
  const metaPatchTimerRef = useRef<number | null>(null);
  const metaPatchInFlightRef = useRef(false);

  useEffect(() => {
    // Etapa 2 — con `quizId` presente, la carga la maneja el effect de
    // abajo (que también resuelve `id` cuando corresponde): evita que dos
    // effects se pisen escribiendo `questions`/`activeKey`.
    if (isNew || !id || quizId) return;
    let alive = true;
    setLoadStatus("loading");
    getPlantilla(id)
      .then((p) => {
        if (!alive) return;
        // Arranca el working set con la plantilla cargada como única pregunta.
        const loaded = makeQuestion(p.codigoDsl, {
          plantillaId: id,
          savedCodigo: p.codigoDsl,
          metadata: {
            nombre: p.nombre,
            descripcion: p.descripcion ?? "",
            materia: p.materia ?? "",
            tags: p.tags ?? [],
            visibility: p.visibility,
          },
        });
        setQuestions([loaded]);
        setActiveKey(loaded.key);
        setLoadStatus("ready");
      })
      .catch(() => {
        if (!alive) return;
        setLoadStatus("error");
      });
    return () => {
      alive = false;
    };
  }, [id, isNew, quizId]);

  // Etapa 2 (Tiza — preguntas nativas) — con `quizId` presente, puebla el
  // rail con las preguntas YA linkeadas a ese cuestionario (hidratando cada
  // `PreguntaQuiz` con su plantilla vía `getPlantilla`) y arranca/activa la
  // pregunta que corresponda según `id`:
  //   - `id` presente y ya está en el cuestionario → esa queda activa.
  //   - `id` presente pero AÚN NO está en el cuestionario (plantilla
  //     standalone que se está incorporando) → se carga aparte y se agrega
  //     activa, con rol "obligatoria" por default.
  //   - `isNew` (sin `id`) → se agrega una pregunta en blanco al final,
  //     activa, con rol "obligatoria" por default (el docente la ajusta en
  //     el property grid antes de guardar).
  useEffect(() => {
    if (!quizId) return;
    let alive = true;
    setLoadStatus("loading");

    const hydrate = async (p: PreguntaQuiz): Promise<WorkQuestion | null> => {
      try {
        const plantilla = await getPlantilla(p.plantillaId);
        return makeQuestion(plantilla.codigoDsl, {
          plantillaId: p.plantillaId,
          savedCodigo: plantilla.codigoDsl,
          metadata: {
            nombre: plantilla.nombre,
            descripcion: plantilla.descripcion ?? "",
            materia: plantilla.materia ?? "",
            tags: plantilla.tags ?? [],
            visibility: plantilla.visibility,
          },
          quizMeta: {
            rol: p.tipo,
            maxRepeticiones: p.maxRepeticiones,
            poolId: p.poolId,
            // WO-tiza-config (Fase 3) — restaurar dificultad/puntaje.
            dificultad: p.dificultad,
            puntaje: p.puntaje,
          },
        });
      } catch {
        return null;
      }
    };

    (async () => {
      try {
        const cuestionario = await getQuizPreguntas(quizId);
        if (!alive) return;
        setCantidadGlobal(
          cuestionario.cantidadGlobal > 0 ? cuestionario.cantidadGlobal : 1,
        );

        const hydrated = (await Promise.all(cuestionario.preguntas.map(hydrate))).filter(
          (q): q is WorkQuestion => q !== null,
        );
        if (!alive) return;

        const yaIncluida = !isNew && id
          ? hydrated.find((q) => q.plantillaId === id)
          : undefined;

        let finalQuestions = hydrated;
        let activeQ: WorkQuestion;
        if (yaIncluida) {
          activeQ = yaIncluida;
        } else if (!isNew && id) {
          // La plantilla de la URL todavía no está linkeada a este
          // cuestionario (p. ej. se abrió directo por URL) — se agrega.
          const p = await getPlantilla(id);
          activeQ = makeQuestion(p.codigoDsl, {
            plantillaId: id,
            savedCodigo: p.codigoDsl,
            metadata: {
              nombre: p.nombre,
              descripcion: p.descripcion ?? "",
              materia: p.materia ?? "",
              tags: p.tags ?? [],
              visibility: p.visibility,
            },
            quizMeta: { rol: "obligatoria" },
          });
          finalQuestions = [...hydrated, activeQ];
        } else {
          // Nueva pregunta para sumar al cuestionario.
          activeQ = makeQuestion(INITIAL_TEMPLATE, { quizMeta: { rol: "obligatoria" } });
          finalQuestions = [...hydrated, activeQ];
        }
        if (!alive) return;
        setQuestions(finalQuestions.length > 0 ? finalQuestions : [activeQ]);
        setActiveKey(activeQ.key);
        setLoadStatus("ready");
      } catch {
        if (alive) setLoadStatus("error");
      }
    })();

    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `id`/`isNew` se leen una sola vez al montar con este `quizId`; re-ejecutar en cada cambio de `id` navegaría en un loop (guardar cambia el plantillaId activo, no debe re-disparar la carga completa del cuestionario).
  }, [quizId]);

  // WO — meta del cuestionario para la cabecera + panel de configuración de
  // DETALLES. Independiente de la carga de arriba (que hidrata el rail de
  // preguntas): sólo un GET liviano, no bloquea el resto si falla (la
  // cabecera queda con "…" y el panel de config no se muestra).
  useEffect(() => {
    if (!quizId) return;
    let alive = true;
    getQuizMeta(quizId)
      .then((meta) => {
        if (alive) setQuizMetaState(meta);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [quizId]);

  // WO-tiza-config — envía lo acumulado en `pendingMetaPatchRef` en un solo
  // PATCH. Si falla, re-encola el patch (se reintenta con el próximo cambio).
  const flushMetaPatch = useCallback(async () => {
    if (!quizId || metaPatchInFlightRef.current) return;
    const patch = pendingMetaPatchRef.current;
    if (Object.keys(patch).length === 0) return;
    pendingMetaPatchRef.current = {};
    metaPatchInFlightRef.current = true;
    setMetaSaveState("saving");
    try {
      const next = await patchQuizMeta(quizId, patch);
      if (Object.keys(pendingMetaPatchRef.current).length === 0) {
        // Sólo pisar el estado local con la respuesta si no se encolaron
        // cambios nuevos mientras el request estaba en vuelo.
        setQuizMetaState(next);
        setMetaSaveState("saved");
      } else {
        // Quedaron cambios encolados durante el vuelo: mandarlos ya (el
        // macrotask corre después del `finally`, con `inFlight` ya en false).
        window.setTimeout(() => void flushMetaPatch(), 0);
      }
    } catch {
      // Re-encolar lo fallido (lo nuevo pisa a lo viejo) SIN re-disparar:
      // se reintenta recién con el próximo cambio del usuario, para no
      // entrar en un loop de reintentos ante un error persistente.
      pendingMetaPatchRef.current = { ...patch, ...pendingMetaPatchRef.current };
      setMetaSaveState("error");
    } finally {
      metaPatchInFlightRef.current = false;
    }
  }, [quizId]);

  const queueMetaPatch = useCallback(
    (patch: QuizMetaPatch) => {
      // Optimista: reflejar el cambio en el estado local ya mismo.
      setQuizMetaState((prev) => (prev ? aplicarMetaPatch(prev, patch) : prev));
      pendingMetaPatchRef.current = { ...pendingMetaPatchRef.current, ...patch };
      if (metaPatchTimerRef.current) window.clearTimeout(metaPatchTimerRef.current);
      metaPatchTimerRef.current = window.setTimeout(() => void flushMetaPatch(), 400);
    },
    [flushMetaPatch],
  );

  // Flush best-effort al desmontar (p. ej. navegar con un cambio a <400ms).
  useEffect(
    () => () => {
      if (metaPatchTimerRef.current) window.clearTimeout(metaPatchTimerRef.current);
      void flushMetaPatch();
    },
    [flushMetaPatch],
  );

  const handleDeleteQuiz = useCallback(async () => {
    if (!quizId) return;
    if (
      !window.confirm(
        "¿Eliminar este cuestionario y todas sus preguntas? Esta acción no se puede deshacer.",
      )
    ) {
      return;
    }
    try {
      await deleteQuiz(quizId);
      navigate(returnTo || "/plantillas");
    } catch {
      setToastState({ message: "No se pudo eliminar el cuestionario. Probá de nuevo." });
    }
  }, [quizId, navigate, returnTo]);

  const compilation = usePlantillaCompilation(codigoDsl);
  const preview = usePlantillaPreview(compilation.compiled);
  const validation = usePlantillaValidation(compilation.compiled);

  /* WO-V2d — valores en vivo para read-outs de la tarjeta y el property grid. */
  const liveValues = useMemo(() => {
    const firstOk = preview.items.find((it) => !it.error && it.variables);
    const variables = firstOk?.variables ?? preview.variables0;
    const question = firstOk?.question;
    const respuesta =
      typeof question?.answerKey === "string"
        ? question.answerKey
        : Array.isArray(question?.answerKey) && question.answerKey.length > 0
          ? question.answerKey[0]
          : undefined;
    return {
      variables,
      respuesta,
      toleranciaAbs: question?.toleranciaAbsoluta,
    };
  }, [preview]);

  const declaredVariables = useMemo(() => {
    if (compilation.plantilla) {
      const list = extractDeclaredVariables(compilation.plantilla);
      lastDeclaredRef.current = list;
      return list;
    }
    return lastDeclaredRef.current;
  }, [compilation.plantilla]);

  // AST de respaldo para que el property grid del shell siempre tenga datos,
  // incluso si el código nunca compiló (caso borde).
  const fallbackAst = useMemo<Plantilla | null>(() => {
    try {
      return parse(INITIAL_TEMPLATE);
    } catch {
      return null;
    }
  }, []);

  // El formulario se alimenta de un parse SINCRÓNICO del DSL activo (no del
  // `compilation` debounced a 500ms): así los inputs no quedan "atrasados" al
  // tipear (la latencia que se veía). `compilation` se sigue usando, debounced,
  // sólo para errores/preview/validación.
  const astSync = useMemo<Plantilla | null>(() => {
    try {
      return parse(codigoDsl);
    } catch {
      return null;
    }
  }, [codigoDsl]);
  useEffect(() => {
    if (astSync) lastValidPlantillaRef.current = astSync;
  }, [astSync]);

  const astParaRenderizar =
    astSync ?? lastValidPlantillaRef.current ?? fallbackAst;

  // WO-V3a — ¿la tarjeta del prototipo cubre esta plantilla? Cubre numéricas
  // con respuesta textual y sin listas; los generadores y los tipos con
  // opciones/ítems se editan en modo Código (que es de fidelidad total).
  const tarjetaCubre = (() => {
    const p = astParaRenderizar;
    if (!p || isGeneradorBase(p)) return false;
    const schema = QUESTION_TYPE_SCHEMAS[p.tipoInferido];
    if (!schema) return false;
    const tieneRespuestaTextual = schema.fields.some(
      (f) => f.key === "respuesta" && f.kind === "text",
    );
    const tieneListas = schema.fields.some((f) => f.kind === "list");
    return tieneRespuestaTextual && !tieneListas;
  })();

  const handleGoToLocation = (line: number, col: number) => {
    editorRef.current?.focusAt(line, col);
  };

  const handleApplyFix = useCallback(
    (newCode: string) => setCodigo(newCode),
    [setCodigo],
  );

  const errorSummary = useMemo(() => {
    const parts: string[] = [];
    const pe = compilation.parseError ?? dslApiError;
    if (pe) parts.push(pe.line ? `Línea ${pe.line}: ${pe.message}` : pe.message);
    for (const e of compilation.lintReport?.errors ?? []) {
      parts.push(e.line ? `Línea ${e.line}: ${e.message}` : e.message);
    }
    if (parts.length === 0) return undefined;
    const head =
      parts.length === 1
        ? "1 error de validación."
        : `${parts.length} errores de validación.`;
    return `${head} ${parts.join(". ")}`;
  }, [compilation.parseError, compilation.lintReport, dslApiError]);

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      const data = JSON.parse(await file.text()) as Record<string, unknown>;
      if (typeof data.codigoDsl !== "string") {
        setSaveStatus("error");
        setSaveMessage('El JSON debe tener un campo "codigoDsl".');
        return;
      }
      resetCodigo(data.codigoDsl);
      setMetadata((m) => ({
        nombre: typeof data.nombre === "string" ? data.nombre : m.nombre,
        descripcion:
          typeof data.descripcion === "string"
            ? data.descripcion
            : m.descripcion,
        materia: typeof data.materia === "string" ? data.materia : m.materia,
        tags: Array.isArray(data.tags)
          ? data.tags.filter((t): t is string => typeof t === "string")
          : m.tags,
        visibility: m.visibility,
      }));
      setSaveStatus("idle");
      setSaveMessage("Plantilla importada (revisá y guardá).");
    } catch {
      setSaveStatus("error");
      setSaveMessage("No se pudo leer el archivo JSON.");
    }
  };

  const handleSave = async () => {
    if (isSavingRef.current) return;
    isSavingRef.current = true;
    setSaveStatus("saving");
    setSaveMessage(null);
    setDslApiError(undefined);
    try {
      // PLAN-Z fase 3, decisión §3.1 — en modo cuestionario (quizId),
      // descripción/materia/tags/visibilidad de CADA Plantilla-pregunta se
      // heredan silenciosamente de la plantilla-config (quizMetaState) en
      // vez del MetadataPanel por-pregunta (que en ese modo sólo edita
      // nombre — ver `compact` más arriba). Modo standalone sin cambios.
      const contenidoHeredado =
        quizId && quizMetaState
          ? {
              descripcion: quizMetaState.descripcion.trim() || undefined,
              materia: quizMetaState.materia.trim() || undefined,
              tags: quizMetaState.tags.length > 0 ? quizMetaState.tags : undefined,
              visibility: mapQuizVisibilityToPlantilla(quizMetaState.visibility),
            }
          : null;
      const payload = {
        nombre: metadata.nombre.trim(),
        ...(contenidoHeredado ?? {
          descripcion: metadata.descripcion.trim() || undefined,
          materia: metadata.materia.trim() || undefined,
          tags: metadata.tags.length > 0 ? metadata.tags : undefined,
          visibility: metadata.visibility,
        }),
        codigoDsl,
      };
      // PLAN-Z fase 2 — la pregunta en blanco auto-agregada puede quedar
      // ACTIVA (p. ej. guardando desde la plantilla-config recién abierta):
      // recibe el mismo guard que el resto del rail (no se persiste si nunca
      // se tocó) en vez de cortar TODO el guardado con "El nombre es
      // obligatorio". Sólo aplica si hay algo más que guardar; una única
      // pregunta en blanco standalone sigue exigiendo nombre.
      const activeUntouched =
        active.plantillaId == null &&
        active.hist.past.length === 0 &&
        codigoDsl === INITIAL_TEMPLATE &&
        !payload.nombre;
      const skipActive = activeUntouched && (quizId !== null || questions.length > 1);
      if (!payload.nombre && !skipActive) {
        setSaveStatus("error");
        setSaveMessage("El nombre es obligatorio.");
        return;
      }
      // Se guarda la pregunta ACTIVA como su propia plantilla. Al crear NO se
      // navega (eso destruiría el working set); se fija el id en memoria.
      let savedPlantillaId = active.plantillaId;
      if (skipActive) {
        setSaveStatus("saved");
        setSaveMessage("Guardado.");
      } else if (active.plantillaId == null) {
        const created = await createPlantilla(payload);
        savedPlantillaId = created.id;
        setSaveStatus("saved");
        setSaveMessage("Pregunta guardada.");
        updateActive((q) => ({
          ...q,
          plantillaId: created.id,
          savedCodigo: payload.codigoDsl,
        }));
        if (returnTo) {
          setToastState({
            message: "Plantilla guardada.",
            actions: [
              {
                label: t("plantillaEditor.volverAlModulo"),
                primary: true,
                onClick: () => navigate(returnTo),
              },
              { label: t("plantillaEditor.seguirEditando"), onClick: () => setToastState(null) },
            ],
          });
        }
      } else {
        await updatePlantilla(active.plantillaId, {
          ...payload,
          changelog: "Edición desde editor Tiza",
        });
        setSaveStatus("saved");
        setSaveMessage("Cambios guardados.");
        updateActive((q) => ({ ...q, savedCodigo: payload.codigoDsl }));
        if (returnTo) {
          setToastState({
            message: "Cambios guardados.",
            actions: [
              {
                label: t("plantillaEditor.volverAlModulo"),
                primary: true,
                onClick: () => navigate(returnTo),
              },
              { label: t("plantillaEditor.seguirEditando"), onClick: () => setToastState(null) },
            ],
          });
        }
      }

      // PLAN-Z fase 1 — guardar-todo: además de la activa (recién guardada
      // arriba), se persiste TODA otra pregunta del rail que sea nueva
      // (`plantillaId` null) o tenga DSL distinto del último guardado. La
      // metadata sólo se edita sobre la activa, así que "DSL dirty" cubre a
      // las no-activas. No es todo-o-nada: la que falla (DSL inválido, red)
      // queda marcada en el rail y el resto se guarda igual — no se pierde
      // el trabajo del docente.
      const railResults = new Map<string, { plantillaId: string; savedCodigo: string }>();
      const railFailures: Record<string, string> = {};
      for (const [i, q] of questions.entries()) {
        if (q.key === active.key) continue;
        const isDirty = q.plantillaId == null || q.hist.present !== q.savedCodigo;
        if (!isDirty) continue;
        // La pregunta en blanco que el editor agrega solo (hidratación con
        // quizId / "+ Nueva pregunta") no se persiste si el docente nunca
        // la tocó: sin historial, DSL inicial intacto y sin nombre.
        const untouched =
          q.plantillaId == null &&
          q.hist.past.length === 0 &&
          q.hist.present === INITIAL_TEMPLATE &&
          !q.metadata.nombre.trim();
        if (untouched) continue;
        const qPayload = {
          // Mismo fallback que la etiqueta del rail: una pregunta sin
          // nombrar no bloquea el guardado del cuestionario.
          nombre: q.metadata.nombre.trim() || `Pregunta ${i + 1}`,
          // PLAN-Z fase 3 §3.1 — mismo criterio heredado que la activa arriba.
          ...(contenidoHeredado ?? {
            descripcion: q.metadata.descripcion.trim() || undefined,
            materia: q.metadata.materia.trim() || undefined,
            tags: q.metadata.tags.length > 0 ? q.metadata.tags : undefined,
            visibility: q.metadata.visibility,
          }),
          codigoDsl: q.hist.present,
        };
        try {
          if (q.plantillaId == null) {
            const created = await createPlantilla(qPayload);
            railResults.set(q.key, { plantillaId: created.id, savedCodigo: qPayload.codigoDsl });
          } else {
            await updatePlantilla(q.plantillaId, {
              ...qPayload,
              changelog: "Edición desde editor Tiza",
            });
            railResults.set(q.key, { plantillaId: q.plantillaId, savedCodigo: qPayload.codigoDsl });
          }
        } catch (err) {
          railFailures[q.key] =
            err instanceof DslApiError
              ? `DSL inválido${err.line != null ? ` (línea ${err.line})` : ""}: ${err.message}`
              : err instanceof Error
                ? err.message
                : "No se pudo guardar.";
        }
      }
      setRailSaveErrors(railFailures);
      if (railResults.size > 0) {
        setQuestions((qs) =>
          qs.map((q) => {
            const r = railResults.get(q.key);
            return r ? { ...q, plantillaId: r.plantillaId, savedCodigo: r.savedCodigo } : q;
          }),
        );
      }
      const failedCount = Object.keys(railFailures).length;
      if (failedCount > 0) {
        const nombres = questions
          .map((q, i) => (railFailures[q.key] ? q.metadata.nombre.trim() || `Pregunta ${i + 1}` : null))
          .filter((n): n is string => n !== null);
        setSaveMessage(
          (prev) =>
            `${prev ?? "Guardado."} No se ${failedCount === 1 ? "pudo guardar" : "pudieron guardar"}: ${nombres.join(", ")} (marcadas en el rail).`,
        );
      }

      // Working set con TODOS los ids reales ya aplicados (el estado de React
      // se actualiza async; los sync de abajo necesitan el valor ahora).
      const nextQuestions = questions.map((q) => {
        if (q.key === active.key) {
          // La activa salteada por el guard queda como está (sin persistir).
          return skipActive
            ? q
            : { ...q, plantillaId: savedPlantillaId, savedCodigo: payload.codigoDsl };
        }
        const r = railResults.get(q.key);
        return r ? { ...q, plantillaId: r.plantillaId, savedCodigo: r.savedCodigo } : q;
      });

      // Etapa 2 (Tiza — preguntas nativas) — con `quizId`, además de las
      // plantillas se actualiza el `CuestionarioPreguntas` del quiz. UN solo
      // PUT con el cuestionario completo derivado del working set (no un
      // endpoint por pregunta). Si esto falla NO se deshace el guardado de
      // las plantillas (ya persistidas) — se avisa aparte.
      if (quizId && cantidadGlobal !== null) {
        try {
          await saveQuizPreguntas(quizId, {
            cantidadGlobal,
            preguntas: buildPreguntasFromQuestions(nextQuestions),
          });
        } catch {
          setSaveMessage(
            (prev) => `${prev ?? "Guardado."} (No se pudo actualizar el cuestionario; reintentá.)`,
          );
        }
      } else if (isNew && !quizId && questions.length > 1) {
        // PLAN-CORRECCIONES C2 — guardar desde /plantillas/nueva con 2+
        // preguntas y sin quizId: se materializa un quiz "suelto" (sin
        // módulo, `Quiz.moduleId` nullable) la PRIMERA vez, se le sube el
        // `CuestionarioPreguntas` completo del rail (con PLAN-Z fase 1 ya
        // vienen TODAS las preguntas guardadas, no sólo las que el docente
        // guardó una a una), y la URL pasa a `?quizId=<real>` — de ahí en
        // más los guardados siguen el camino normal de arriba, sin repetir
        // la creación (protegido también por `isSavingRef`).
        try {
          const nuevoQuiz = await crearQuizSuelto();
          await saveQuizPreguntas(nuevoQuiz.id, {
            cantidadGlobal: nextQuestions.filter((q) => q.plantillaId !== null).length,
            preguntas: buildPreguntasFromQuestions(nextQuestions),
          });
          const nextParams = new URLSearchParams(searchParams);
          nextParams.set("quizId", nuevoQuiz.id);
          navigate(`/plantillas/nueva?${nextParams.toString()}`, { replace: true });
        } catch {
          setSaveMessage(
            (prev) => `${prev ?? "Guardado."} (No se pudo agrupar las preguntas en un cuestionario; reintentá.)`,
          );
        }
      }
    } catch (err) {
      if (err instanceof DslApiError) {
        setDslApiError({ message: err.message, line: err.line, col: err.col });
        setSaveStatus("error");
        setSaveMessage("La API rechazó el código DSL.");
      } else {
        setSaveStatus("error");
        setSaveMessage(
          err instanceof Error ? err.message : "No se pudo guardar.",
        );
      }
    } finally {
      isSavingRef.current = false;
    }
  };

  // Etapa 2 (Tiza — preguntas nativas) — deriva la lista de `PreguntaQuiz`
  // persistible a partir del working set. Sólo entran las YA guardadas
  // (con `plantillaId`); una pregunta sin guardar todavía no es un enlace
  // válido del cuestionario.
  //
  // IMPORTANTE: este hook (y el siguiente) DEBEN vivir ANTES de los
  // `return` tempranos de `loadStatus` de más abajo — moverlos después
  // viola las Rules of Hooks (la cantidad de hooks cambiaría entre el
  // render "loading" y el render "ready").
  const buildPreguntasFromQuestions = useCallback(
    (qs: WorkQuestion[]): PreguntaQuiz[] =>
      qs
        .filter((q): q is WorkQuestion & { plantillaId: string } => q.plantillaId !== null)
        .map((q) => {
          const meta = q.quizMeta ?? { rol: "obligatoria" as const };
          const out: PreguntaQuiz = { plantillaId: q.plantillaId, tipo: meta.rol };
          if (meta.rol === "relleno") {
            if (meta.maxRepeticiones !== undefined) out.maxRepeticiones = meta.maxRepeticiones;
            if (meta.poolId !== undefined) out.poolId = meta.poolId;
          }
          // WO-tiza-config (Fase 3) — dificultad/puntaje por pregunta.
          if (meta.dificultad !== undefined) out.dificultad = meta.dificultad;
          if (meta.puntaje !== undefined) out.puntaje = meta.puntaje;
          return out;
        }),
    [],
  );

  // Validación LOCAL (sin red): mismo criterio que usará el backend al
  // guardar, para avisar inline apenas los límites no alcanzan (Etapa 2
  // Tarea 4). `null` en modo standalone (sin `quizId`/`cantidadGlobal`).
  const cuestionarioValidacion = useMemo(() => {
    if (!quizId || cantidadGlobal === null) return null;
    const cuestionario: CuestionarioPreguntas = {
      version: 1,
      cantidadGlobal,
      preguntas: buildPreguntasFromQuestions(questions),
    };
    return validarCuestionarioPreguntas(cuestionario);
  }, [quizId, cantidadGlobal, questions, buildPreguntasFromQuestions]);

  // WO-tiza-config (Fase 3) — poolIds ya usados en el cuestionario, para el
  // datalist del input de Pool (evita typos que parten un pool en dos).
  const poolsDisponibles = useMemo(() => {
    if (!quizId) return undefined;
    const pools = new Set<string>();
    for (const q of questions) {
      const poolId = q.quizMeta?.poolId;
      if (poolId) pools.add(poolId);
    }
    return [...pools].sort();
  }, [quizId, questions]);

  // WO-tiza-config — resumen del sorteo para la "Vista previa" del panel de
  // configuración (calculado del working set del rail, sin red).
  const resumenSorteo = useMemo<QuizResumenSorteo | null>(() => {
    if (!quizId || cantidadGlobal === null) return null;
    let obligatorias = 0;
    const pools = new Map<string | null, number>();
    for (const q of questions) {
      const meta = q.quizMeta ?? { rol: "obligatoria" as const };
      if (meta.rol === "relleno") {
        const key = meta.poolId ?? null;
        pools.set(key, (pools.get(key) ?? 0) + 1);
      } else {
        obligatorias += 1;
      }
    }
    return {
      cantidadGlobal,
      obligatorias,
      pools: [...pools.entries()].map(([id, count]) => ({ id, count })),
      validacionErrores:
        cuestionarioValidacion && !cuestionarioValidacion.ok
          ? cuestionarioValidacion.errores
          : [],
    };
  }, [quizId, cantidadGlobal, questions, cuestionarioValidacion]);

  if (loadStatus === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-[var(--c-muted,#64748b)] animate-pulse">{t("plantillaEditor.cargandoPlantilla")}</p>
      </main>
    );
  }
  if (loadStatus === "error") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p role="alert" className="text-sm text-[var(--c-danger)]">{t("plantillaEditor.noSePudoCargarLa")}</p>
      </main>
    );
  }

  const hayCambios = codigoDsl !== savedCodigo;

  /* ── estado de guardado para la barra superior (compacto, cerca de Guardar) ── */
  const topBarStatus = (
    <span
      role="status"
      aria-live="polite"
      aria-atomic="true"
      title={
        saveStatus === "saving"
          ? "Guardando…"
          : saveStatus === "error"
            ? saveMessage ?? "Error"
            : hayCambios
              ? "Cambios sin guardar"
              : "Sin cambios"
      }
      className="plantilla-shell__topbar-item plantilla-shell__save-state"
      data-state={saveStatus}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        fontWeight: 500,
        color:
          saveStatus === "error"
            ? "var(--c-danger)"
            : saveStatus === "saving"
              ? "var(--c-warning, #b45309)"
              : "var(--c-text-3)",
        whiteSpace: "nowrap",
        maxWidth: 180,
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <span
        aria-hidden="true"
        className="plantilla-shell__save-state-dot"
        data-state={saveStatus}
      />
      <span>
        {saveStatus === "saving"
          ? "Guardando…"
          : saveStatus === "saved"
            ? saveMessage ?? "Guardado"
            : saveStatus === "error"
              ? saveMessage ?? "Error"
              : hayCambios
                ? "Cambios sin guardar"
                : "Sin cambios"}
      </span>
    </span>
  );

  /* ── columna izquierda: navegador de secciones (estilo rail del prototipo) ──
     Salta a una sección de la tarjeta y fija el contexto del property grid. */
  const variablesDecl =
    (astParaRenderizar && getBlock(astParaRenderizar, "variables")?.declaraciones) || [];
  const schemaActual = astParaRenderizar
    ? QUESTION_TYPE_SCHEMAS[astParaRenderizar.tipoInferido]
    : undefined;
  const hasRespSec = !!schemaActual?.fields.some((f) => f.key === "respuesta");
  const hasPistasSec = astParaRenderizar
    ? readPistas(astParaRenderizar).length > 0
    : false;
  const hasExplicSec = astParaRenderizar
    ? readExplicacion(astParaRenderizar).trim().length > 0
    : false;

  /** Selecciona la pregunta y scrollea la tarjeta a la sección (saliendo de
   *  modo Código si hace falta). */
  const goToSection = (anchor: string) => {
    setSelection({ kind: "pregunta" });
    setActiveSection(anchor);
    if (codeMode === "code") setCodeMode("split");
    window.setTimeout(() => {
      document
        .getElementById(anchor)
        ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, 60);
  };

  /* ── rail CUESTIONARIO: working set de preguntas (elegir / agregar / quitar) ── */
  const selectQuestion = (key: string) => {
    setActiveKey(key);
    setConfigSelected(false);
    setSelection({ kind: "pregunta" });
    setActiveSection("tiza-sec-enunciado");
    // El estado de guardado es global; lo reseteamos al cambiar de pregunta.
    setSaveStatus("idle");
    setSaveMessage(null);
  };
  const addQuestion = () => {
    const nq = makeQuestion(INITIAL_TEMPLATE, {
      quizMeta: quizId ? { rol: "obligatoria" } : undefined,
    });
    setQuestions((qs) => [...qs, nq]);
    setActiveKey(nq.key);
    setConfigSelected(false);
    setSelection({ kind: "pregunta" });
    setActiveSection("tiza-sec-enunciado");
    setMetaOpen(true);
    setSaveStatus("idle");
    setSaveMessage(null);
  };
  // PLAN-Y bis — importar una plantilla existente del banco como pregunta.
  // Misma hidratación que el effect de carga (getPlantilla → makeQuestion con
  // `plantillaId`): la plantilla entra al rail con rol "obligatoria" por
  // default (el docente ajusta rol/pool/dificultad en el property grid). Si
  // ya está en el cuestionario, sólo la activa (no duplica).
  const importarPlantilla = async (item: PlantillaListItem) => {
    setPlantillaSelectorOpen(false);
    const yaEsta = questions.find((q) => q.plantillaId === item.id);
    if (yaEsta) {
      setActiveKey(yaEsta.key);
      setConfigSelected(false);
      setSelection({ kind: "pregunta" });
      return;
    }
    try {
      const p = await getPlantilla(item.id);
      const nq = makeQuestion(p.codigoDsl, {
        plantillaId: item.id,
        savedCodigo: p.codigoDsl,
        metadata: {
          nombre: p.nombre,
          descripcion: p.descripcion ?? "",
          materia: p.materia ?? "",
          tags: p.tags ?? [],
          visibility: p.visibility,
        },
        quizMeta: quizId ? { rol: "obligatoria" } : undefined,
      });
      setQuestions((qs) => [...qs, nq]);
      setActiveKey(nq.key);
      setConfigSelected(false);
      setSelection({ kind: "pregunta" });
      setActiveSection("tiza-sec-enunciado");
      setMetaOpen(true);
      setSaveStatus("idle");
      setSaveMessage(null);
    } catch {
      setToastState({ message: "No se pudo importar la plantilla. Probá de nuevo." });
    }
  };

  const removeQuestion = (key: string) => {
    const q = questions.find((x) => x.key === key);
    if (
      q &&
      q.hist.present !== q.savedCodigo &&
      !window.confirm(
        "Esta pregunta tiene cambios sin guardar. ¿Quitarla del cuestionario?",
      )
    ) {
      return;
    }
    setQuestions((qs) => (qs.length <= 1 ? qs : qs.filter((x) => x.key !== key)));
    setActiveKey((prev) => (prev === key ? null : prev));
    setSelection({ kind: "pregunta" });
  };

  const railCuestionario = (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 14 }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "var(--c-text-3)",
          padding: "4px 8px 8px",
        }}
      >
        CUESTIONARIO
      </div>
      {/* PLAN-Z fase 2 (§7) — plantilla-config pineada como ítem #1: siempre
          visible, no se borra ni se reordena. "Cantidad de preguntas" queda
          en el rail (decisión del mockup §7, no se muda a la tarjeta). */}
      {quizId ? (
        <button
          type="button"
          data-testid="rail-config-item"
          onClick={() => {
            setConfigSelected(true);
            setSaveStatus("idle");
            setSaveMessage(null);
          }}
          aria-current={configSelected ? "true" : undefined}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            width: "100%",
            textAlign: "left",
            padding: "8px 10px",
            marginBottom: 8,
            borderRadius: "var(--r-md)",
            cursor: "pointer",
            background: configSelected ? "var(--c-surface)" : "transparent",
            border: configSelected
              ? "1px solid var(--c-accent)"
              : "1px solid var(--c-border)",
            color: "var(--c-text)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 22,
              height: 22,
              flex: "0 0 auto",
              borderRadius: 6,
              background: "var(--c-accent-soft)",
              color: "var(--c-accent)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
            }}
          >
            ⚙
          </span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{t("plantillaEditorTiza.configuraciones")}</span>
        </button>
      ) : null}
      {/* Etapa 2 (Tiza — preguntas nativas) — cabecera con `cantidadGlobal`,
          sólo con `quizId` presente. Aviso inline si los límites de alguna
          pool no alcanzan (validación LOCAL, sin red — `cuestionarioValidacion`). */}
      {quizId && cantidadGlobal !== null ? (
        <div style={{ padding: "0 8px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
          {/* Una sola línea, como el mockup §7 (la etiqueta no debe partirse). */}
          <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11.5 }}>
            <span
              style={{
                color: "var(--c-text-2)",
                fontWeight: 600,
                whiteSpace: "nowrap",
                flex: 1,
                minWidth: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >{t("plantillaEditorTiza.cantidadDePreguntas")}</span>
            <input
              type="number"
              min={1}
              step={1}
              value={cantidadGlobal}
              onChange={(e) => {
                const raw = e.target.value;
                if (raw === "") return;
                const n = Number(raw);
                if (Number.isFinite(n) && n >= 1) setCantidadGlobal(Math.floor(n));
              }}
              data-testid="cantidad-global-input"
              style={{
                width: 36,
                flex: "0 0 auto",
                border: "1px solid var(--c-border)",
                borderRadius: "var(--r-md)",
                padding: "4px 6px",
                color: "var(--c-text)",
                background: "var(--c-surface-2)",
                fontSize: 12,
                textAlign: "right",
              }}
            />
          </label>
          {cuestionarioValidacion && !cuestionarioValidacion.ok ? (
            <div
              role="alert"
              data-testid="cuestionario-validacion-warning"
              style={{
                fontSize: 11.5,
                lineHeight: 1.4,
                color: "var(--c-warning-text, #92400e)",
                background: "var(--c-warning-soft, #fef3c7)",
                borderRadius: "var(--r-md)",
                padding: "6px 8px",
              }}
            >
              {cuestionarioValidacion.errores.map((err) => (
                <div key={err}>{err}</div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      {questions.map((q, i) => {
        const isActive = !configSelected && q.key === active.key;
        const unsaved = q.hist.present !== q.savedCodigo;
        const title = q.metadata.nombre.trim() || `Pregunta ${i + 1}`;
        return (
          <div key={q.key} style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <button
              type="button"
              onClick={() => selectQuestion(q.key)}
              aria-current={isActive ? "true" : undefined}
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 10px",
                borderRadius: "var(--r-md)",
                cursor: "pointer",
                textAlign: "left",
                background: isActive ? "var(--c-surface)" : "transparent",
                border: isActive
                  ? "1px solid var(--c-border)"
                  : "1px solid transparent",
                color: "var(--c-text)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 22,
                  height: 22,
                  flex: "0 0 auto",
                  borderRadius: 6,
                  background: "var(--c-accent-soft)",
                  color: "var(--c-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </span>
              <span
                style={{
                  flex: 1,
                  minWidth: 0,
                  fontSize: 13,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </span>
              {/* PLAN-Z fase 2 (§7) — el chip pasivo de pool (PLAN-E §13) se
                  retiró del rail: el mockup no lo tiene y la sección POOLS de
                  la plantilla-config muestra la membresía de todas juntas. */}
              {railSaveErrors[q.key] ? (
                // PLAN-Z fase 1 — esta pregunta falló en el último
                // guardar-todo: punto rojo con el motivo en el title.
                <span
                  role="img"
                  aria-label={`No se pudo guardar: ${railSaveErrors[q.key]}`}
                  title={`No se pudo guardar: ${railSaveErrors[q.key]}`}
                  style={{
                    width: 7,
                    height: 7,
                    flex: "0 0 auto",
                    borderRadius: 999,
                    background: "var(--c-danger, #dc2626)",
                  }}
                />
              ) : unsaved ? (
                <span
                  aria-hidden="true"
                  title={t("plantillaEditorTiza.cambiosSinGuardar")}
                  style={{
                    width: 7,
                    height: 7,
                    flex: "0 0 auto",
                    borderRadius: 999,
                    background: "var(--c-warning, #f59e0b)",
                  }}
                />
              ) : null}
            </button>
            {questions.length > 1 ? (
              <button
                type="button"
                onClick={() => removeQuestion(q.key)}
                aria-label={`Quitar pregunta ${i + 1}`}
                title={t("plantillaEditorTiza.quitarPregunta")}
                style={{
                  flex: "0 0 auto",
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  border: 0,
                  background: "transparent",
                  color: "var(--c-text-3)",
                  cursor: "pointer",
                  fontSize: 14,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            ) : null}
          </div>
        );
      })}
      <button
        type="button"
        onClick={addQuestion}
        style={{
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 10px",
          borderRadius: "var(--r-md)",
          border: "1px dashed var(--c-border)",
          background: "transparent",
          color: "var(--c-accent)",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        <span aria-hidden="true">＋</span>{t("plantillaEditorTiza.nuevaPregunta")}</button>
      {/* PLAN-Y bis — importar una plantilla existente del banco como pregunta
          del cuestionario (reemplaza al "Usar plantilla VBLang" de módulo). */}
      <button
        type="button"
        onClick={() => setPlantillaSelectorOpen(true)}
        data-testid="tiza-importar-plantilla"
        style={{
          marginTop: 4,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 10px",
          borderRadius: "var(--r-md)",
          border: "1px dashed var(--c-border)",
          background: "transparent",
          color: "var(--c-text-2)",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        <span aria-hidden="true">🧩</span>{t("plantillaEditorTiza.importarPlantillaDelBanco")}</button>
    </div>
  );

  const railSections = (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "var(--c-text-3)",
          padding: "4px 8px 8px",
        }}
      >
        SECCIONES
      </div>
      <RailNavItem
        icon="¶"
        label="Enunciado"
        active={selection.kind === "pregunta" && activeSection === "tiza-sec-enunciado"}
        onClick={() => goToSection("tiza-sec-enunciado")}
      />
      {variablesDecl.length > 0 ? (
        <>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "var(--c-text-3)",
              padding: "10px 8px 4px",
            }}
          >{t("plantillaEditorTiza.variables")}</div>
          {variablesDecl.map((v, i) => (
            <RailNavItem
              key={`${v.nombre}-${i}`}
              icon={String(i + 1)}
              label={v.nombre}
              mono
              active={selection.kind === "variable" && selection.index === i}
              onClick={() => {
                setSelection({ kind: "variable", index: i });
                if (codeMode === "code") setCodeMode("split");
                window.setTimeout(() => {
                  document
                    .getElementById("tiza-sec-variables")
                    ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
                }, 60);
              }}
            />
          ))}
          <div style={{ height: 8 }} />
        </>
      ) : null}
      {hasRespSec ? (
        <RailNavItem
          icon="="
          label="Respuesta"
          active={selection.kind === "pregunta" && activeSection === "tiza-sec-respuesta"}
          onClick={() => goToSection("tiza-sec-respuesta")}
        />
      ) : null}
      {hasPistasSec ? (
        <RailNavItem
          icon="?"
          label="Pistas"
          active={selection.kind === "pregunta" && activeSection === "tiza-sec-pistas"}
          onClick={() => goToSection("tiza-sec-pistas")}
        />
      ) : null}
      {hasExplicSec ? (
        <RailNavItem
          icon="✎"
          label="Explicación"
          active={selection.kind === "pregunta" && activeSection === "tiza-sec-explicacion"}
          onClick={() => goToSection("tiza-sec-explicacion")}
        />
      ) : null}
    </div>
  );

  /* ── PLAN-Z fase 2 (§7) — tarjeta central "Configuraciones" ──────────────
     El `QuizConfigPanel` promovido de DETALLES a plantilla-config pineada,
     más la sección POOLS (agrupa el working set por pool, un select por
     pregunta). Asignar un pool implica rol "relleno" (los pools son de
     relleno — mismo acople que el property grid); "sin pool" junta a las
     obligatorias y a las relleno de la pool implícita. */
  const etiquetaPregunta = (q: WorkQuestion, i: number) =>
    q.metadata.nombre.trim() || `Pregunta ${i + 1}`;
  const poolDe = (q: WorkQuestion) =>
    q.quizMeta?.rol === "relleno" && q.quizMeta.poolId ? q.quizMeta.poolId : null;
  const setPoolDe = (key: string, poolId: string | null) => {
    setQuestions((qs) =>
      qs.map((q): WorkQuestion => {
        if (q.key !== key) return q;
        if (poolId) {
          return { ...q, quizMeta: { ...q.quizMeta, rol: "relleno", poolId } };
        }
        if (!q.quizMeta) return q;
        const rest = { ...q.quizMeta };
        delete rest.poolId;
        return { ...q, quizMeta: rest };
      }),
    );
  };
  const agregarPool = () => {
    const nombre = nuevoPoolNombre.trim();
    if (!nombre) return;
    setPoolsNuevas((ps) =>
      ps.includes(nombre) || (poolsDisponibles ?? []).includes(nombre)
        ? ps
        : [...ps, nombre],
    );
    setNuevoPoolNombre("");
  };

  const poolNombres = [
    ...new Set([...(poolsDisponibles ?? []), ...poolsNuevas]),
  ].sort();
  const gruposPools: { id: string | null; items: { q: WorkQuestion; i: number }[] }[] =
    [null as string | null, ...poolNombres].map((id) => ({
      id,
      items: questions
        .map((q, i) => ({ q, i }))
        .filter(({ q }) => poolDe(q) === id),
    }));

  const poolsSection = (
    <div data-testid="tiza-config-pools">
      <div
        style={{
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--c-text-3)",
          marginBottom: 5,
        }}
      >{t("plantillaEditorTiza.pools")}</div>
      <div
        style={{
          border: "1px solid var(--c-border)",
          borderRadius: "var(--r-md)",
          padding: "10px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {gruposPools.map(({ id, items }) => (
          <div key={id ?? "(sin pool)"}>
            <div style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 4 }}>
              {id ?? "sin pool"}{" "}
              <span style={{ color: "var(--c-text-3)", fontWeight: 500 }}>
                ({items.length})
              </span>
            </div>
            {items.map(({ q, i }) => (
              <div
                key={q.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "3px 0 3px 8px",
                }}
              >
                <span
                  style={{
                    fontSize: 12.5,
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {etiquetaPregunta(q, i)}
                </span>
                <select
                  aria-label={`Pool de ${etiquetaPregunta(q, i)}`}
                  title='Asignar un pool convierte la pregunta en relleno (entra al sorteo); "sin pool" incluye a las obligatorias.'
                  value={poolDe(q) ?? ""}
                  onChange={(e) => setPoolDe(q.key, e.target.value || null)}
                  style={{
                    flex: "0 0 auto",
                    border: "1px solid var(--c-border)",
                    borderRadius: "var(--r-md)",
                    padding: "3px 6px",
                    fontSize: 12,
                    color: "var(--c-text)",
                    background: "var(--c-surface-2)",
                    cursor: "pointer",
                  }}
                >
                  <option value="">{t("plantillaEditorTiza.sinPool")}</option>
                  {poolNombres.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        ))}
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            placeholder={t("plantillaEditorTiza.nombreDelPool")}
            aria-label={t("plantillaEditorTiza.nombreDelPool")}
            value={nuevoPoolNombre}
            onChange={(e) => setNuevoPoolNombre(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") agregarPool();
            }}
            style={{
              flex: 1,
              minWidth: 0,
              border: "1px solid var(--c-border)",
              borderRadius: "var(--r-md)",
              padding: "6px 9px",
              fontSize: 12.5,
              color: "var(--c-text)",
              background: "var(--c-surface-2)",
            }}
          />
          <button
            type="button"
            onClick={agregarPool}
            style={{
              flex: "0 0 auto",
              border: "1px solid var(--c-border)",
              borderRadius: "var(--r-md)",
              background: "var(--c-surface-2)",
              color: "var(--c-text-2)",
              fontSize: 12,
              fontWeight: 600,
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >{t("plantillaEditorTiza.pool")}</button>
        </div>
      </div>
    </div>
  );

  const configArea = (
    <div
      className="editor-shell__scroll outline-none"
      style={{
        flex: "1 1 auto",
        minHeight: 0,
        overflowY: "auto",
        padding: "26px 30px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <section
          data-testid="tiza-config-card"
          aria-label={t("plantillaEditorTiza.configuracionesDelCuestionario")}
          style={{
            border: "1px solid var(--c-accent)",
            borderRadius: "var(--r-lg, 12px)",
            background: "var(--c-surface)",
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <header
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingBottom: 14,
              borderBottom: "1px solid var(--c-border)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 32,
                height: 32,
                flex: "0 0 auto",
                borderRadius: "var(--r-md)",
                background: "var(--c-accent-soft)",
                color: "var(--c-accent)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
              }}
            >
              ⚙
            </span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{t("plantillaEditorTiza.configuraciones")}</div>
              <div style={{ fontSize: 12, color: "var(--c-text-2)" }}>{t("plantillaEditorTiza.configuracionGeneralDelCuestionarioEvaluacion")}</div>
            </div>
          </header>
          {quizMetaState ? (
            <QuizConfigPanel
              meta={quizMetaState}
              saveState={metaSaveState}
              onPatch={queueMetaPatch}
              onDelete={() => void handleDeleteQuiz()}
              resumen={resumenSorteo}
              disabled={saveStatus === "saving"}
              pools={poolsSection}
            />
          ) : (
            <div style={{ fontSize: 12.5, color: "var(--c-text-3)" }}>{t("plantillaEditorTiza.cargandoConfiguracion")}</div>
          )}
        </section>
      </div>
    </div>
  );

  /* ── menú overflow: acciones secundarias (incluye undo/redo) ── */
  const overflowMenu = ({ close }: { close: () => void }) => (
    <>
      <OverflowItem
        onClick={() => {
          undo();
          close();
        }}
        disabled={!canUndo}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>↶</span>{t("plantillaEditor.deshacer")}</OverflowItem>
      <OverflowItem
        onClick={() => {
          redo();
          close();
        }}
        disabled={!canRedo}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>↷</span>{t("plantillaEditor.rehacer")}</OverflowItem>
      <div
        aria-hidden="true"
        style={{ height: 1, background: "var(--c-border)", margin: "4px 6px" }}
      />
      <OverflowItem
        onClick={() => {
          fileInputRef.current?.click();
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>↥</span>{t("plantillaEditor.importarJson")}</OverflowItem>
      <OverflowItem
        onClick={() => {
          setReferenciaOpen(true);
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>≡</span>{t("plantillaEditorTiza.referenciaVblang")}</OverflowItem>
      <OverflowItem
        onClick={() => {
          setPromptIAOpen(true);
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>✦</span>{t("plantillaEditor.copiarPromptParaIa")}</OverflowItem>
      <div
        aria-hidden="true"
        style={{ height: 1, background: "var(--c-border)", margin: "4px 6px" }}
      />
      <OverflowItem
        onClick={() => {
          setEjemplosOpen(true);
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>☰</span>{t("plantillaEditorTiza.ejemplos")}</OverflowItem>
      <OverflowItem
        onClick={() => {
          setDatasetsOpen(true);
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>⊞</span>{t("nav.datasets")}</OverflowItem>
    </>
  );

  /* ── WO-V3a — centro limpio (prototipo) ──────────────────────────────
     Form/Ambos = tarjeta del prototipo (TizaQuestionCard); Ambos suma el
     drawer de código de lectura. Código = editor rico + panel de errores
     compacto. Sin consola al pie ni ErrorPanel global de 192px: la
     validación vive en el property grid (renderAux) y los errores de
     parseo, inline. El toggle Form/Ambos/Código está en el top bar (shell). */

  /* Modo Código: editor rico (autocompletado + ir-al-error) + errores. */
  const codeArea = (
    <div
      style={{ flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column" }}
    >
      <SnippetBar
        onInsert={(text) => editorRef.current?.insertAtCursor(text)}
      />
      <div className="flex-1 min-h-0">
        <CodeEditor
          ref={editorRef}
          value={codigoDsl}
          onChange={setCodigo}
          declaredVariables={declaredVariables}
          errorLine={compilation.parseError?.line ?? dslApiError?.line}
          errorCol={compilation.parseError?.col ?? dslApiError?.col}
          errorSummary={errorSummary}
        />
      </div>
      {/* Errores + quick-fixes: sólo en modo Código, compacto. */}
      <div
        style={{
          flex: "0 0 auto",
          maxHeight: 192,
          borderTop: "1px solid var(--c-border)",
          background: "var(--c-surface)",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <ErrorPanel
          parseError={compilation.parseError ?? dslApiError}
          lintReport={compilation.lintReport}
          onGoToLocation={handleGoToLocation}
          currentCode={codigoDsl}
          onApplyFix={handleApplyFix}
        />
      </div>
    </div>
  );

  /* Modo Form/Ambos: tarjeta del prototipo (+ drawer de lectura en Ambos). */
  const cardArea = !astParaRenderizar ? (
    <div
      className="h-full flex flex-col items-center justify-center gap-3 p-6 text-center text-sm text-[var(--c-muted,#64748b)]"
      data-testid="vblang-form-no-disponible"
    >
      <p>{t("plantillaEditor.elCodigoTieneErroresArreglalos")}</p>
      <button
        type="button"
        onClick={() => setCodeMode("code")}
        className="rounded-md border border-[var(--c-border,#e2e8f0)] px-3 py-1 text-xs"
      >{t("plantillaEditor.volverACodigo")}</button>
    </div>
  ) : (
    <div
      className="editor-shell__scroll outline-none"
      style={{
        flex: "1 1 auto",
        minHeight: 0,
        overflowY: "auto",
        padding: "26px 30px",
      }}
    >
      {!astSync && (
        <div
          role="status"
          data-testid="vblang-form-retenido-banner"
          className="flex items-start gap-3 border-b border-[var(--c-border)] bg-[var(--c-warning-soft,#fef3c7)] text-[var(--c-text)] px-3 py-2 text-xs"
        >
          <span className="flex-1">{t("plantillaEditor.elCodigoTieneErroresEstas")}</span>
          <button
            type="button"
            data-testid="vblang-form-ver-errores"
            onClick={() => setCodeMode("code")}
            className="shrink-0 rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] px-2 py-1 text-xs font-medium"
          >{t("plantillaEditor.verErrores")}</button>
        </div>
      )}
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {!tarjetaCubre && (
          <div
            role="note"
            data-testid="tiza-card-degradacion"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 9,
              padding: "11px 13px",
              borderRadius: "var(--r-md)",
              border: "1px solid var(--c-border)",
              background: "var(--c-surface-2)",
              fontSize: 12.5,
              lineHeight: 1.45,
              color: "var(--c-text-2)",
            }}
          >
            <span
              aria-hidden="true"
              style={{ color: "var(--c-accent)", fontWeight: 700 }}
            >
              ⌖
            </span>
            <span>
              Esta plantilla usa un generador o un tipo avanzado. La tarjeta edita
              el enunciado y las variables; el resto de los campos se editan en{" "}
              <button
                type="button"
                onClick={() => setCodeMode("code")}
                style={{
                  background: "transparent",
                  border: 0,
                  padding: 0,
                  color: "var(--c-accent)",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >{t("plantillaEditorTiza.modoCodigo")}</button>
              .
            </span>
          </div>
        )}
        <TizaQuestionCard
          plantilla={astParaRenderizar}
          onChange={(next) => setCodigo(serialize(next))}
          selection={selection}
          onSelectQuestion={() => setSelection({ kind: "pregunta" })}
          onSelectVariable={(idx) => setSelection({ kind: "variable", index: idx })}
          live={liveValues}
        />
        {codeMode === "split" && (
          <TizaCodeDrawer
            code={codigoDsl}
            visible={showTizaCode}
            onToggle={() => setShowTizaCode((v) => !v)}
          />
        )}
      </div>
    </div>
  );

  /* Centro completo: skip-link + panel por modo. */
  const renderCenterFull = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        minHeight: 0,
      }}
    >
      <a href="#vblang-panel" className="skip-link">{t("plantillaEditor.saltarAlEditor")}</a>
      <div
        id="vblang-panel"
        tabIndex={-1}
        role="tabpanel"
        className="editor-shell__scroll outline-none"
        style={{ flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column" }}
      >
        {/* PLAN-Z fase 2 — la config es Form-only por construcción (§3.3):
            seleccionada, el centro muestra la tarjeta en cualquier modo. */}
        {configSelected && quizId
          ? configArea
          : codeMode === "code"
            ? codeArea
            : cardArea}
      </div>
    </div>
  );

  return (
    <>
      {isNew && !wizardDismissed && (
        <NuevaPlantillaWizard
          onPick={(dsl) => {
            resetCodigo(dsl);
            setWizardDismissed(true);
          }}
          onBlank={() => setWizardDismissed(true)}
          onClose={() => setWizardDismissed(true)}
        />
      )}

      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "var(--c-bg)",
          color: "var(--c-text)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <div style={{ flex: 1, minHeight: 0, padding: 12, display: "flex" }}>
          <div style={{ flex: 1, minHeight: 0 }}>
            <PlantillaEditorShell
              plantilla={astParaRenderizar ?? (fallbackAst as Plantilla)}
              onChange={(next) => setCodigo(serialize(next))}
              breadcrumb={
                // WO-tiza-config (Fase 5, bug 2) — con `quizId` el contexto es
                // el CUESTIONARIO, no una plantilla nueva/suelta.
                quizId
                  ? ["Cuestionarios", quizTitle ? `Cuestionario: ${quizTitle}` : "Cuestionario"]
                  : ["Plantillas", isNew ? "Nueva plantilla" : metadata.nombre || "Plantilla"]
              }
              accent={accent}
              onAccentChange={setAccent}
              theme={shellTheme}
              onBack={() => navigate(returnTo || "/plantillas")}
              backLabel="Volver"
              codeModeControlled={codeMode}
              onCodeModeChange={setCodeMode}
              codeModes={["form", "split", "code"]}
              topBarStatus={topBarStatus}
              overflowMenu={overflowMenu}
              renderRail={
                <>
                  {railCuestionario}
                  {/* SECCIONES navega la pregunta activa: sin sentido con la
                      config seleccionada (mockup §7: sólo CUESTIONARIO). */}
                  {configSelected && quizId ? null : railSections}
                </>
              }
              renderCenterFull={renderCenterFull}
              renderAux={
                configSelected && quizId ? (
                  // PLAN-Z fase 2 (§7) — la config no tiene property grid:
                  // empty-state en PROPIEDADES (detalle nuevo del mockup).
                  <div data-testid="tiza-propiedades-empty" style={{ padding: 16 }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        color: "var(--c-text-3)",
                      }}
                    >
                      PROPIEDADES
                    </div>
                    <p
                      style={{
                        marginTop: 8,
                        fontSize: 12.5,
                        lineHeight: 1.5,
                        color: "var(--c-text-2)",
                      }}
                    >{t("plantillaEditorTiza.configuracionesNoTienePropiedadesDe")}</p>
                  </div>
                ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    minHeight: 0,
                  }}
                >
                  {/* Detalles (metadatos) plegables, arriba del property grid */}
                  <div style={{ flex: "0 0 auto", borderBottom: "1px solid var(--c-border)" }}>
                    <button
                      type="button"
                      onClick={() => setMetaOpen((v) => !v)}
                      aria-expanded={metaOpen}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 9,
                        width: "100%",
                        padding: "13px 16px",
                        background: "var(--c-surface)",
                        border: 0,
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          color: "var(--c-text-3)",
                          transform: metaOpen ? "rotate(90deg)" : "none",
                          transition: "transform 120ms",
                          display: "inline-block",
                        }}
                      >
                        ›
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          color: "var(--c-text-3)",
                        }}
                      >
                        DETALLES
                      </span>
                      <span
                        data-testid="tiza-detalles-titulo"
                        style={{
                          flex: 1,
                          minWidth: 0,
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--c-text)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {quizId
                          ? `Cuestionario: ${quizTitle ?? "…"}`
                          : metadata.nombre || "Sin nombre"}
                      </span>
                    </button>
                    {metaOpen ? (
                      <div style={{ padding: "0 16px 14px", maxHeight: "40vh", overflowY: "auto" }}>
                        {/* PLAN-Z fase 2/3 — la configuración del CUESTIONARIO
                            (incl. materia/nivel/tags/descripción, fase 3) ya
                            no vive acá: se promovió a la plantilla-config
                            pineada del rail (tarjeta central). DETALLES queda
                            para el nombre de la pregunta activa (compact). */}
                        {quizId ? (
                          <div
                            style={{
                              fontSize: 11.5,
                              color: "var(--c-text-3)",
                              marginBottom: 10,
                              lineHeight: 1.4,
                            }}
                          >
                            Nombre de esta pregunta. Materia/tags/descripción
                            se editan en Configuraciones y se heredan a todas.
                          </div>
                        ) : null}
                        <MetadataPanel
                          value={metadata}
                          onChange={setMetadata}
                          disabled={saveStatus === "saving"}
                          compact={!!quizId}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div style={{ flex: 1, minHeight: 0 }}>
                    <TizaPropertyGrid
                      plantilla={astParaRenderizar ?? (fallbackAst as Plantilla)}
                      onChange={(next) => setCodigo(serialize(next))}
                      selection={selection}
                      onSelectQuestion={() => setSelection({ kind: "pregunta" })}
                      live={liveValues}
                      validation={validation}
                      quizMeta={quizId ? (active.quizMeta ?? { rol: "obligatoria" }) : undefined}
                      onChangeQuizMeta={
                        quizId
                          ? (next) => updateActive((q) => ({ ...q, quizMeta: next }))
                          : undefined
                      }
                      poolsDisponibles={poolsDisponibles}
                    />
                  </div>
                </div>
                )
              }
              renderPreviewPanel={
                <div style={{ padding: 14 }}>
                  <PreviewPanel
                    preview={preview.items}
                    onRegenerate={preview.regenerate}
                  />
                </div>
              }
              onSave={() => void handleSave()}
              saving={saveStatus === "saving"}
            />
          </div>
        </div>
      </div>

      {/* Input oculto para "Importar JSON" (a nivel página: el menú se cierra). */}
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json,.json"
        onChange={handleImportFile}
        className="hidden"
      />

      <ReferenciaRapida
        open={referenciaOpen}
        onClose={() => setReferenciaOpen(false)}
      />

      <PromptIAPanel
        open={promptIAOpen}
        onClose={() => setPromptIAOpen(false)}
        onInsert={(codigo) => {
          setCodigo(codigo);
          setPromptIAOpen(false);
        }}
      />

      {/* Ejemplos / Datasets como modales (antes se cortaban dentro del ⋯). */}
      <Modal
        open={ejemplosOpen}
        onClose={() => setEjemplosOpen(false)}
        title={t("plantillaEditorTiza.cargarUnEjemplo")}
        size="md"
      >
        <EjemplosMenu
          inline
          hasUnsavedChanges={hayCambios}
          onLoad={(dsl) => {
            setCodigo(dsl);
            setEjemplosOpen(false);
          }}
        />
      </Modal>

      <Modal
        open={datasetsOpen}
        onClose={() => setDatasetsOpen(false)}
        title={t("plantillaEditorTiza.datasetsDisponibles")}
        size="md"
      >
        <DatasetExplorer inline />
      </Modal>

      {/* PLAN-Y bis — selector de plantilla del banco (reusa el mismo modal
          que ModuloEditor). Al elegir, la plantilla entra como pregunta. */}
      {plantillaSelectorOpen && (
        <PlantillaSelectorModal
          onClose={() => setPlantillaSelectorOpen(false)}
          onSelect={(plantilla) => void importarPlantilla(plantilla)}
          materiaHint={quizMetaState?.materia || undefined}
          createReturnTo={returnTo || undefined}
        />
      )}

      {toastState && (
        <Toast
          message={toastState.message}
          actions={toastState.actions}
          onClose={() => setToastState(null)}
        />
      )}
    </>
  );
}
