/**
 * pages/PlantillaEditorTiza.tsx — Editor de plantillas VBLang sobre el shell
 * "Tiza" (WO-V2c · centro limpio WO-V3a).
 *
 * Reusa TODA la lógica del editor standalone V1 (`PlantillaEditor.tsx`:
 * undo/redo, guardado con guard anti-duplicado, importar JSON, metadatos,
 * compilación/preview/validación, carga por id, toast, wizard) sobre el chrome
 * limpio del prototipo Tiza (`PlantillaEditorShell`), con la misma disposición
 * que la demo (`/demo/tiza`):
 *
 *   • Top bar mínimo: Volver · breadcrumb · acento · tema · toggle
 *     Form/Ambos/Código · Vista del alumno · Guardar. Los secundarios
 *     (Importar JSON, Ejemplos, Referencia, Copiar prompt, Datasets) viven en
 *     un menú de overflow "⋯ Más" (átomo `Menu`).
 *   • Columna izquierda: rail CUESTIONARIO (working set de preguntas en
 *     memoria: elegir / agregar / quitar) + navegador de secciones de la
 *     pregunta activa. "Guardar" persiste la pregunta activa como su propia
 *     plantilla; las preguntas sin guardar muestran un punto en el rail.
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
import { getQuizPreguntas, saveQuizPreguntas } from "../domain/quiz/quizPreguntasApi";
import {
  validarCuestionarioPreguntas,
  type CuestionarioPreguntas,
  type PreguntaQuiz,
} from "../domain/quiz/preguntas";
import PlantillaEditorClasico from "./PlantillaEditor";

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
 * id de su plantilla. "Guardar" persiste la pregunta activa como su propia
 * plantilla (no existe una entidad "cuestionario" que las agrupe). */
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
  const [loadStatus, setLoadStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >(isNew && !quizId ? "ready" : "loading");
  // Etapa 2 (Tiza — preguntas nativas) — cuántas preguntas ve el alumno en
  // total. Sólo tiene sentido con `quizId` presente; `null` en modo
  // standalone (no se muestra el campo ni se persiste nada).
  const [cantidadGlobal, setCantidadGlobal] = useState<number | null>(null);
  const [toastState, setToastState] = useState<{
    message: string;
    actions?: ToastAction[];
  } | null>(null);
  // WO-V3a — modo único del shell (Form / Ambos / Código). Default "split"
  // (Ambos), como la demo y el prototipo: tarjeta + drawer de código.
  const [codeMode, setCodeMode] = useState<"form" | "split" | "code">("split");
  const [selection, setSelection] = useState<TizaSelection>({ kind: "pregunta" });
  const [showTizaCode, setShowTizaCode] = useState(false);
  const [referenciaOpen, setReferenciaOpen] = useState(false);
  const [promptIAOpen, setPromptIAOpen] = useState(false);
  const [ejemplosOpen, setEjemplosOpen] = useState(false);
  const [datasetsOpen, setDatasetsOpen] = useState(false);
  // Metadatos plegables (panel derecho). Abiertos al crear (nombre obligatorio).
  const [metaOpen, setMetaOpen] = useState(isNew);
  // Sección activa del navegador (rail) cuando la selección es la pregunta.
  const [activeSection, setActiveSection] = useState<string>("tiza-sec-enunciado");
  const [wizardDismissed, setWizardDismissed] = useState(!isNew);

  const editorRef = useRef<CodeEditorHandle | null>(null);
  const lastDeclaredRef = useRef<string[]>([]);
  const lastValidPlantillaRef = useRef<Plantilla | null>(null);

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
      const payload = {
        nombre: metadata.nombre.trim(),
        descripcion: metadata.descripcion.trim() || undefined,
        materia: metadata.materia.trim() || undefined,
        tags: metadata.tags.length > 0 ? metadata.tags : undefined,
        codigoDsl,
        visibility: metadata.visibility,
      };
      if (!payload.nombre) {
        setSaveStatus("error");
        setSaveMessage("El nombre es obligatorio.");
        return;
      }
      // Se guarda la pregunta ACTIVA como su propia plantilla. Al crear NO se
      // navega (eso destruiría el working set); se fija el id en memoria.
      let savedPlantillaId = active.plantillaId;
      if (active.plantillaId == null) {
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
                label: "Volver al módulo",
                primary: true,
                onClick: () => navigate(returnTo),
              },
              { label: "Seguir editando", onClick: () => setToastState(null) },
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
                label: "Volver al módulo",
                primary: true,
                onClick: () => navigate(returnTo),
              },
              { label: "Seguir editando", onClick: () => setToastState(null) },
            ],
          });
        }
      }

      // Etapa 2 (Tiza — preguntas nativas) — con `quizId`, además de la
      // plantilla se actualiza su entrada `PreguntaQuiz` en el
      // `CuestionarioPreguntas` del quiz. UN solo PUT con el cuestionario
      // completo derivado del working set (no un endpoint por pregunta):
      // el rail ya tiene el estado completo en memoria. Si esto falla NO
      // se deshace el guardado de la plantilla (ya persistida) — se avisa
      // aparte, no se pierde el trabajo del docente.
      if (quizId && cantidadGlobal !== null) {
        const nextQuestions = questions.map((q) =>
          q.key === active.key
            ? { ...q, plantillaId: savedPlantillaId, savedCodigo: payload.codigoDsl }
            : q,
        );
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

  if (loadStatus === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-[var(--c-muted,#64748b)] animate-pulse">
          Cargando plantilla…
        </p>
      </main>
    );
  }
  if (loadStatus === "error") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p role="alert" className="text-sm text-[var(--c-danger)]">
          No se pudo cargar la plantilla.
        </p>
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
    setSelection({ kind: "pregunta" });
    setActiveSection("tiza-sec-enunciado");
    setMetaOpen(true);
    setSaveStatus("idle");
    setSaveMessage(null);
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
      {/* Etapa 2 (Tiza — preguntas nativas) — cabecera con `cantidadGlobal`,
          sólo con `quizId` presente. Aviso inline si los límites de alguna
          pool no alcanzan (validación LOCAL, sin red — `cuestionarioValidacion`). */}
      {quizId && cantidadGlobal !== null ? (
        <div style={{ padding: "0 8px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5 }}>
            <span style={{ color: "var(--c-text-2)", fontWeight: 600 }}>
              Cantidad de preguntas
            </span>
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
                width: 60,
                border: "1px solid var(--c-border)",
                borderRadius: "var(--r-md)",
                padding: "5px 8px",
                color: "var(--c-text)",
                background: "var(--c-surface-2)",
                fontSize: 12.5,
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
        const isActive = q.key === active.key;
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
              {unsaved ? (
                <span
                  aria-hidden="true"
                  title="Cambios sin guardar"
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
                title="Quitar pregunta"
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
        <span aria-hidden="true">＋</span> Nueva pregunta
      </button>
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
          >
            Variables
          </div>
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
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>↶</span>
        Deshacer
      </OverflowItem>
      <OverflowItem
        onClick={() => {
          redo();
          close();
        }}
        disabled={!canRedo}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>↷</span>
        Rehacer
      </OverflowItem>
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
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>↥</span>
        Importar JSON
      </OverflowItem>
      <OverflowItem
        onClick={() => {
          setReferenciaOpen(true);
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>≡</span>
        Referencia VBLang
      </OverflowItem>
      <OverflowItem
        onClick={() => {
          setPromptIAOpen(true);
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>✦</span>
        Copiar prompt para IA
      </OverflowItem>
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
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>☰</span>
        Ejemplos
      </OverflowItem>
      <OverflowItem
        onClick={() => {
          setDatasetsOpen(true);
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>⊞</span>
        Datasets
      </OverflowItem>
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
      <p>
        El código tiene errores. Arreglalos en modo Código para usar el
        formulario.
      </p>
      <button
        type="button"
        onClick={() => setCodeMode("code")}
        className="rounded-md border border-[var(--c-border,#e2e8f0)] px-3 py-1 text-xs"
      >
        Volver a Código
      </button>
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
          <span className="flex-1">
            El código tiene errores — estás viendo la última versión válida.
            Si editás desde el formulario, el código con errores se reemplaza.
          </span>
          <button
            type="button"
            data-testid="vblang-form-ver-errores"
            onClick={() => setCodeMode("code")}
            className="shrink-0 rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] px-2 py-1 text-xs font-medium"
          >
            Ver errores
          </button>
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
              >
                modo Código
              </button>
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
      <a href="#vblang-panel" className="skip-link">
        Saltar al editor
      </a>
      <div
        id="vblang-panel"
        tabIndex={-1}
        role="tabpanel"
        className="editor-shell__scroll outline-none"
        style={{ flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column" }}
      >
        {codeMode === "code" ? codeArea : cardArea}
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
              breadcrumb={[
                "Plantillas",
                isNew ? "Nueva plantilla" : metadata.nombre || "Plantilla",
              ]}
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
                  {railSections}
                </>
              }
              renderCenterFull={renderCenterFull}
              renderAux={
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
                        {metadata.nombre || "Sin nombre"}
                      </span>
                    </button>
                    {metaOpen ? (
                      <div style={{ padding: "0 16px 14px", maxHeight: "40vh", overflowY: "auto" }}>
                        <MetadataPanel
                          value={metadata}
                          onChange={setMetadata}
                          disabled={saveStatus === "saving"}
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
                    />
                  </div>
                </div>
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
        title="Cargar un ejemplo"
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
        title="Datasets disponibles"
        size="md"
      >
        <DatasetExplorer inline />
      </Modal>

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
