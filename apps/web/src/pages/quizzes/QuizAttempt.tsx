import { useEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction, type TouchEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { apiGet, apiPost, apiPatch, ApiError } from "../../lib/api";
import {
  recordAnswer,
  flush as flushOutbox,
  clearAttempt as clearOutbox,
  type OutboxItem,
} from "../../lib/attemptOutbox";
import { useCountdown } from "../../hooks/useCountdown";
import { useFlushOnHidden } from "../../hooks/useFlushOnHidden";
import { useFullscreen } from "../../hooks/useFullscreen";
import { useFlushCounter } from "../../hooks/useFlushCounter";
import { useIsNarrowViewport } from "../../hooks/useIsNarrowViewport";
import Cronometro from "../../components/quizzes/Cronometro";
import type {
  ModoPresentacion,
  ModuleQuizQuestion,
} from "../../domain/module/module.types";
import {
  MODO_PRESENTACION_DEFAULT,
  PREGUNTAS_POR_PAGINA_DEFAULT as PREG_PAG_DEFAULT,
} from "../../domain/module/module.types";
import VisualizerRenderer from "../../stubs/VisualizerRenderer";
import type { VisualSpec } from "../../generadoresV2/core/types";
import type { GeneratorDescriptor, Ejercicio } from "../../generadoresV2/core/types";
import PostSubmitResult from "../../components/quizzes/PostSubmitResult";
import { DeterministicPrng } from "../../generadoresV2/core/prng";
import { ejercicioToQuestion } from "../../domain/quiz/ejercicioToQuestion";
import {
  parseComposition,
  selectPoolIndices,
  pickVariante,
  resolveSubtipoPool,
  type QuizComposition,
} from "../../domain/quiz/composition";
import { runPlantilla } from "../../vblang/runPlantilla";
import { precargarDataset } from "../../vblang/datasetCache";
import { extractDatasetName } from "../../vblang/utils";
import { parse as parsePlantilla } from "@vb/vblang";
import { getPlantilla } from "../../domain/vblang/plantillaApi";
import OrdenarRenderer from "../../components/quiz-renderers/OrdenarRenderer";
import MarcarMapaRenderer from "../../components/quiz-renderers/MarcarMapaRenderer";
import AnalisisSintacticoRenderer from "../../components/quiz-renderers/AnalisisSintacticoRenderer";
import IdentificarPalabrasRenderer from "../../components/quiz-renderers/IdentificarPalabrasRenderer";
import AnalisisSpansRenderer from "../../components/quiz-renderers/AnalisisSpansRenderer";
import { buildCorrectasFromEtiquetas } from "../../domain/quiz/checkAnswerSpecial";
import {
  Card,
  Button,
  Alert,
  Badge,
  Spinner,
  Radio,
  RadioGroup,
  Checkbox,
  Input,
  Textarea,
  Divider,
} from "../../ui";
import Progress from "../../ui/Progress";

function parseVisualContext(detail: string | undefined): VisualSpec | null {
  if (!detail) return null;
  try {
    const parsed = JSON.parse(detail) as { spec?: VisualSpec };
    if (parsed && typeof parsed === "object" && parsed.spec) {
      return parsed.spec;
    }
  } catch {
    // not valid JSON
  }
  return null;
}

// Sprint 9B: las respuestas pueden ser strings, listas (mc-multi, identificar_palabras,
// ordenar) o records (analisis_sintactico → { palabra: etiqueta }).
type AttemptAnswerValue = string | string[] | Record<string, string>;

type QuizAttemptResponse = {
  id?: string;
  attemptId?: string;
  moduleId?: string;
  quizId?: string;
  quizTitle?: string;
  status?: string;
  /** WO-T2a — score/maxScore persistidos, para el resumen en modo revisión. */
  score?: number;
  maxScore?: number;
  questions?: ModuleQuizQuestion[];
  answers?: Record<string, AttemptAnswerValue> | Array<Record<string, unknown>>;
  quiz?: {
    title?: string;
    questions?: ModuleQuizQuestion[];
  };
  generatorId?: string;
  seed?: string | number;
  count?: number;
  params?: Record<string, unknown>;
  instructions?: string;
  displayCount?: number;
  quizType?: string;
  composition?: QuizComposition;
  /**
   * F4-03 — Si es `true`, el render post-submit del alumno NO muestra
   * el `Puntaje: X / Y` ni el porcentaje en el `message` del backend;
   * sólo la nota. Default `false` (mostrar).
   */
  ocultarPuntos?: boolean;
  /**
   * F4-04 — Timer per-cuestionario (segundos). Si está presente y > 0,
   * el runner inicia un cronómetro que auto-envía al llegar a 0.
   * `null`/`undefined` = sin timer. Antes de F4-04 era hardcodeado a
   * 10 min exclusivo del modo competencia.
   */
  timerSegundos?: number | null;
  /**
   * WO-3b — deadline absoluto (ISO), calculado server-side desde
   * `startedAt + timerSegundos`. PLAN-Q §2.3: ancla la cuenta regresiva al
   * reloj real en vez de sólo contar ticks de `setInterval` — un
   * `setInterval` se pausa/atrasa con la pantalla apagada o la app en
   * segundo plano en el teléfono, y `timerSegundos` solo no distingue un
   * intento recién arrancado de uno reanudado con tiempo ya consumido.
   */
  deadline?: string | null;
  /**
   * F4-04 — Si es `true`, el botón "Iniciar evaluación" llama a
   * `document.documentElement.requestFullscreen()` antes de cargar el
   * quiz. Default `false`.
   */
  fullscreenOnStart?: boolean;
  /**
   * WO-9 — Modo de presentación del cuestionario. Default `lista` (preserva
   * el comportamiento previo). Sólo el reproductor del alumno lo lee.
   */
  modoPresentacion?: ModoPresentacion;
  /**
   * WO-9 — Tamaño de página cuando `modoPresentacion === "paginado"`.
   * Default 5.
   */
  preguntasPorPagina?: number;
};

type SubmitResponse = {
  status?: string;
  score?: number;
  maxScore?: number;
  feedback?: string;
  message?: string;
  /** WO07 — cantidad de preguntas abiertas que quedaron pendientes de corrección. */
  pendingManual?: number;
  /** WO14 — nota en la escala de la escuela ("—" si no hay nota). */
  notaDisplay?: string | null;
  /** WO14 — equivalente 1–10 de la nota; null si no hay nota. */
  notaCanonical10?: number | null;
  porcentaje?: number;
  aprobado?: boolean;
};

type RankingEntry = {
  posicion: number;
  usuarioId: string;
  nombre: string;
  score: number;
  maxScore: number;
  tiempoSeg: number;
};

const resolveAttemptId = (attempt: QuizAttemptResponse | null) =>
  attempt?.attemptId ?? attempt?.id ?? "";

const normalizeAnswers = (
  answers: QuizAttemptResponse["answers"]
): Record<string, AttemptAnswerValue> => {
  if (!answers) return {};
  if (!Array.isArray(answers)) {
    return answers as Record<string, AttemptAnswerValue>;
  }
  return answers.reduce<Record<string, AttemptAnswerValue>>((acc, entry) => {
    if (!entry || typeof entry !== "object") return acc;
    const record = entry as { questionId?: string; id?: string; answer?: unknown; value?: unknown };
    const key = typeof record.questionId === "string" ? record.questionId : record.id;
    if (!key) return acc;
    const value = record.answer ?? record.value;
    if (
      typeof value === "string" ||
      Array.isArray(value) ||
      (value !== null && typeof value === "object")
    ) {
      acc[key] = value as AttemptAnswerValue;
    }
    return acc;
  }, {});
};

export default function QuizAttempt() {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState<QuizAttemptResponse | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, AttemptAnswerValue>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "submitted" | "error">(
    "idle"
  );
  // PLAN-D §2 — estado visible del autosave (F5-01 ya guarda cada respuesta
  // en el server; esto sólo refleja ese guardado en la UI, no cambia la
  // lógica de persistencia).
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "queued">("idle");
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [result, setResult] = useState<SubmitResponse | null>(null);
  const [openPasos, setOpenPasos] = useState<Record<string, boolean>>({});
  const [generatedQuestions, setGeneratedQuestions] =
    useState<ModuleQuizQuestion[]>([]);
  const [tiempoInicio, setTiempoInicio] = useState<number | null>(null);
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const [rankingLoading, setRankingLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [fullscreenWarning, setFullscreenWarning] = useState(false);

  useEffect(() => {
    if (!attemptId) return;
    let active = true;
    setStatus("loading");
    setErrorMessage(null);
    apiGet<QuizAttemptResponse>(`/api/quiz-attempts/${attemptId}`)
      .then((data) => {
        if (!active) return;
        setAttempt(data);
        setAnswers(normalizeAnswers(data.answers));
        setStatus("ready");
        // WO-T2a — modo revisión: un intento que ya no está `in_progress`
        // (submitted/pending_review/graded/aborted/expired) se abre en
        // read-only, sin timer ni gate de fullscreen, mostrando el
        // resultado persistido en vez de esperar un submit nuevo.
        const finished = data.status !== undefined && data.status !== "in_progress";
        if (finished) {
          setSubmitStatus("submitted");
          setResult({ score: data.score, maxScore: data.maxScore });
          setTiempoInicio(null);
          setHasStarted(true);
          setFullscreenWarning(false);
          return;
        }
        const timerSeg = typeof data.timerSegundos === "number" && data.timerSegundos > 0
          ? data.timerSegundos
          : null;
        if (timerSeg !== null) {
          setTiempoInicio(Date.now());
        } else {
          setTiempoInicio(null);
        }
        if (data.fullscreenOnStart === true) {
          setHasStarted(false);
        } else {
          setHasStarted(true);
        }
        setFullscreenWarning(false);
      })
      .catch((error) => {
        if (!active) return;
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "No se pudo cargar el intento."
        );
      });
    return () => {
      active = false;
    };
  }, [attemptId]);

  useEffect(() => {
    if (!attempt) return;
    const genId = attempt.generatorId;
    const seed = attempt.seed;
    const count = attempt.count ?? 10;
    const serverQuestions = attempt.questions ?? attempt.quiz?.questions ?? [];
    if (!genId || serverQuestions.length > 0) return;

    if (genId.startsWith("plantilla:")) {
      const plantillaId = genId.slice("plantilla:".length);
      let cancelled = false;
      void getPlantilla(plantillaId)
        .then(async (p) => {
          if (cancelled) return;
          try {
            const ast = parsePlantilla(p.codigoDsl);
            const ds = extractDatasetName(ast);
            if (ds) await precargarDataset(ds);
          } catch {
            // ignorar
          }
          if (cancelled) return;
          const baseSeed = seed !== undefined && seed !== null ? String(seed) : "0";
          const out: ModuleQuizQuestion[] = [];
          const errores: string[] = [];
          const maxIntentos = count * 3;
          let intentos = 0;
          while (out.length < count && intentos < maxIntentos) {
            try {
              const q = runPlantilla(p.codigoDsl, {
                seed: `${baseSeed}-${intentos}`,
              });
              out.push(q);
            } catch (err) {
              errores.push(err instanceof Error ? err.message : String(err));
            }
            intentos++;
          }
          if (out.length < count) {
            console.warn(
              `Plantilla ${plantillaId} generó solo ${out.length}/${count} preguntas tras ${intentos} intentos. Errores:`,
              errores.slice(0, 5),
            );
          }
          setGeneratedQuestions(out);
        })
        .catch(() => {});
      return () => {
        cancelled = true;
      };
    }

    const [materia] = genId.split("/");

    const loadGeneratorModule = (mat: string) => {
      switch (mat) {
        case "biologia":
          return import("../../generadoresV2/biologia/index");
        case "informatica":
          return import("../../generadoresV2/informatica/index");
        case "fisica":
          return import("../../generadoresV2/fisica/index");
        case "matematicas":
          return import("../../generadoresV2/matematicas/index");
        case "quimica":
          return import("../../generadoresV2/quimica/index");
        case "economia":
          return import("../../generadoresV2/economia/index");
        default:
          return Promise.reject(new Error(`Generador no encontrado: ${mat}`));
      }
    };

    loadGeneratorModule(materia).then((mod) => {
        const prng = new DeterministicPrng(seed ?? 0);
        const descriptores: GeneratorDescriptor[] =
          typeof (mod as Record<string, unknown>).getDescriptores === "function"
            ? ((mod as Record<string, unknown>).getDescriptores as (p: typeof prng) => GeneratorDescriptor[])(prng)
            : typeof (mod as Record<string, unknown>)[`getDescriptores${materia.charAt(0).toUpperCase() + materia.slice(1)}`] === "function"
            ? ((mod as Record<string, unknown>)[`getDescriptores${materia.charAt(0).toUpperCase() + materia.slice(1)}`] as (p: typeof prng) => GeneratorDescriptor[])(prng)
            : [];
        const descriptor = descriptores.find((d) => d.id === genId);
        if (!descriptor) return;
        const params = attempt.params ?? {};
        const enunciadosPersonalizados = params.enunciadosPersonalizados as Record<string, string> | undefined;
        const pool = resolveSubtipoPool(descriptor.subtipos, params);
        const ejercicios: Ejercicio[] = Array.from({ length: count }, () => {
          const st = pool[prng.int(0, pool.length - 1)];
          const template = enunciadosPersonalizados?.[st];
          return descriptor.generate(undefined, prng, st, template);
        });
        setGeneratedQuestions(ejercicios.map(ejercicioToQuestion));
      })
      .catch(() => {});
  }, [attempt]);

  useEffect(() => {
    const id = resolveAttemptId(attempt);
    if (!id || submitStatus === "submitted") return;
    const onOnline = () => {
      void flushOutbox(async (item: OutboxItem) => {
        try {
          await apiPost(`/api/quiz-attempts/${id}/answer`, {
            questionId: item.questionId,
            response: item.response,
          });
          return { ok: true };
        } catch (err) {
          if (err instanceof ApiError && err.status === 409) return { ok: false, terminal: true };
          return { ok: false };
        }
      }, id);
    };
    window.addEventListener("online", onOnline);
    return () => window.removeEventListener("online", onOnline);
  }, [attempt, submitStatus]);

  const formatTiempo = (seg: number) => {
    const m = Math.floor(seg / 60);
    const s = seg % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const composition: QuizComposition | null = useMemo(
    () => (attempt?.composition ? parseComposition(attempt.composition) : null),
    [attempt?.composition],
  );

  const presentedQuestions = useMemo(() => {
    if (!attempt) return [] as ModuleQuizQuestion[];
    const raw = attempt.questions ?? attempt.quiz?.questions ?? [];
    let server: ModuleQuizQuestion[];
    if (Array.isArray(raw)) {
      server = raw as ModuleQuizQuestion[];
    } else if (typeof raw === "string") {
      try {
        const parsed = JSON.parse(raw);
        server = Array.isArray(parsed) ? (parsed as ModuleQuizQuestion[]) : [];
      } catch {
        server = [];
      }
    } else {
      server = [];
    }
    const pool = server.length > 0 ? server : generatedQuestions;
    const seed = attempt.seed ?? "0";

    let presented: ModuleQuizQuestion[];
    if (composition) {
      const indices = selectPoolIndices(pool.length, composition, seed);
      presented = indices.map((i) => pool[i]);
      if (composition.variantes && composition.variantes.length > 0) {
        presented = presented.map((q, i) => {
          const variante = pickVariante(composition.variantes, seed, i);
          return variante ? { ...q, prompt: variante } : q;
        });
      }
      return presented;
    }

    const display = attempt.displayCount;
    if (!display || display >= pool.length) return pool;
    const seedVal = typeof attempt.seed === "number"
      ? attempt.seed
      : String(attempt.seed ?? "0").split("").reduce(
          (h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 0
        ) >>> 0;
    let state = seedVal;
    const rand = () => {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 0x100000000;
    };
    const indices = Array.from({ length: pool.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, display).map((i) => pool[i]);
  }, [attempt, generatedQuestions, composition]);

  const eligeAlumno = composition?.seleccion === "elige_alumno";
  const [chosenQuestionId, setChosenQuestionId] = useState<string | null>(null);

  const [slideIndex, setSlideIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const modoPresentacionServidor: ModoPresentacion =
    attempt?.modoPresentacion ?? MODO_PRESENTACION_DEFAULT;
  const isNarrowViewport = useIsNarrowViewport();
  // PLAN-Q §2.1 — en el teléfono, sugerir "una por pantalla" cuando el
  // docente no configuró nada explícito (quedó en "lista", el default de
  // WO-9). No pisa "paginado" (elegido a propósito) y el alumno puede
  // volver a la lista con el toggle — preferencia de sesión, no se
  // persiste ni cambia la config del profesor.
  const [modoOverride, setModoOverride] = useState<ModoPresentacion | null>(null);
  const sugerenciaMobileDisponible =
    modoPresentacionServidor === "lista" &&
    isNarrowViewport &&
    !eligeAlumno &&
    presentedQuestions.length > 1;
  const modoPresentacion: ModoPresentacion =
    modoOverride ??
    (sugerenciaMobileDisponible ? "una_por_pantalla" : modoPresentacionServidor);
  const preguntasPorPagina =
    typeof attempt?.preguntasPorPagina === "number" && attempt.preguntasPorPagina >= 1
      ? Math.floor(attempt.preguntasPorPagina)
      : PREG_PAG_DEFAULT;

  const questions = useMemo(() => {
    if (!eligeAlumno) return presentedQuestions;
    if (!chosenQuestionId) return [] as ModuleQuizQuestion[];
    return presentedQuestions.filter((q) => q.id === chosenQuestionId);
  }, [eligeAlumno, chosenQuestionId, presentedQuestions]);

  const title = attempt?.quizTitle ?? attempt?.quiz?.title ?? "Quiz";

  useEffect(() => {
    if (questions.length === 0) return;
    if (slideIndex >= questions.length) setSlideIndex(questions.length - 1);
    if (pageIndex * preguntasPorPagina >= questions.length && pageIndex > 0) {
      setPageIndex(Math.floor((questions.length - 1) / preguntasPorPagina));
    }
  }, [questions.length, slideIndex, pageIndex, preguntasPorPagina]);

  const visibleQuestions = useMemo(() => {
    if (modoPresentacion === "una_por_pantalla") {
      return questions.slice(slideIndex, slideIndex + 1);
    }
    if (modoPresentacion === "paginado") {
      const start = pageIndex * preguntasPorPagina;
      return questions.slice(start, start + preguntasPorPagina);
    }
    return questions;
  }, [questions, modoPresentacion, slideIndex, pageIndex, preguntasPorPagina]);

  const totalPaginas = Math.max(
    1,
    Math.ceil(questions.length / preguntasPorPagina),
  );
  const preguntaGlobal = (index: number) => {
    if (modoPresentacion === "una_por_pantalla") return slideIndex + 1;
    if (modoPresentacion === "paginado") return pageIndex * preguntasPorPagina + index + 1;
    return index + 1;
  };
  const goPrev = () => {
    if (modoPresentacion === "una_por_pantalla") {
      setSlideIndex((i) => Math.max(0, i - 1));
    } else if (modoPresentacion === "paginado") {
      setPageIndex((i) => Math.max(0, i - 1));
    }
  };
  const goNext = () => {
    if (modoPresentacion === "una_por_pantalla") {
      setSlideIndex((i) => Math.min(questions.length - 1, i + 1));
    } else if (modoPresentacion === "paginado") {
      setPageIndex((i) => Math.min(totalPaginas - 1, i + 1));
    }
  };
  const goTo = (i: number) => {
    if (modoPresentacion === "una_por_pantalla") {
      setSlideIndex(Math.max(0, Math.min(questions.length - 1, i)));
    } else if (modoPresentacion === "paginado") {
      setPageIndex(Math.max(0, Math.min(totalPaginas - 1, i)));
    }
  };

  // PLAN-Q §2.2 — swipe horizontal en modo "una por pantalla" (gesto
  // esperado en teléfono, antes sólo flechas/botones). Umbral 50px y
  // exige que el desplazamiento sea más horizontal que vertical, para no
  // interceptar un scroll vertical de la pregunta.
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const handleSlideTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    touchStartRef.current = t ? { x: t.clientX, y: t.clientY } : null;
  };
  const handleSlideTouchEnd = (e: TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    const t = e.changedTouches[0];
    if (!start || !t) return;
    const deltaX = t.clientX - start.x;
    const deltaY = t.clientY - start.y;
    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    if (deltaX < 0) goNext();
    else goPrev();
  };

  // PLAN-D §2 — accesibilidad: navegar entre preguntas/páginas con las
  // flechas del teclado, sin interferir con la edición de texto (se
  // ignora si el foco está en un input/textarea/select).
  const goPrevRef = useRef(goPrev);
  goPrevRef.current = goPrev;
  const goNextRef = useRef(goNext);
  goNextRef.current = goNext;
  useEffect(() => {
    if (modoPresentacion === "lista") return;
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrevRef.current();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNextRef.current();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modoPresentacion]);

  const handleAnswerChange = (questionId: string, value: AttemptAnswerValue) => {
    // WO-T2a — defensa en profundidad: en modo revisión los inputs ya están
    // disabled, pero no se debe persistir ninguna respuesta nueva.
    if (submitStatus === "submitted") return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    const id = resolveAttemptId(attempt);
    if (id && (typeof value === "string" || Array.isArray(value))) {
      recordAnswer(id, questionId, value);
      setSaveStatus("saving");
      apiPost(`/api/quiz-attempts/${id}/answer`, {
        questionId,
        response: value,
      })
        .then(() => setSaveStatus("saved"))
        .catch(() => setSaveStatus("queued"));
    }
  };

  const handleToggleCheckbox = (questionId: string, option: string, checked: boolean) => {
    // WO-T2a — ver nota en `handleAnswerChange`.
    if (submitStatus === "submitted") return;
    let next: string[] = [];
    setAnswers((prev) => {
      const current = prev[questionId];
      const currentList = Array.isArray(current) ? current : [];
      next = checked
        ? Array.from(new Set([...currentList, option]))
        : currentList.filter((item) => item !== option);
      return { ...prev, [questionId]: next };
    });
    const id = resolveAttemptId(attempt);
    if (id) {
      recordAnswer(id, questionId, next);
      setSaveStatus("saving");
      apiPost(`/api/quiz-attempts/${id}/answer`, {
        questionId,
        response: next,
      })
        .then(() => setSaveStatus("saved"))
        .catch(() => setSaveStatus("queued"));
    }
  };

  const handleSubmit = async () => {
    if (!attemptId) return;
    setSubmitStatus("submitting");
    setSubmitMessage(null);
    try {
      const id = resolveAttemptId(attempt);
      if (id) {
        await flushOutbox(async (item: OutboxItem) => {
          try {
            await apiPost(`/api/quiz-attempts/${id}/answer`, {
              questionId: item.questionId,
              response: item.response,
            });
            return { ok: true };
          } catch (err) {
            if (err instanceof ApiError && err.status === 409) return { ok: false, terminal: true };
            return { ok: false };
          }
        }, id);
      }
      const presentedIds = questions.map((q) => q.id);
      const presentedSet = new Set(presentedIds);
      const submitGenerated =
        generatedQuestions.length > 0
          ? generatedQuestions
              .filter((q) => presentedSet.has(q.id))
              .map((q) => ({
                id: q.id,
                answerKey: q.answerKey,
                points: q.points,
                toleranciaRelativa: q.toleranciaRelativa,
                toleranciaAbsoluta: q.toleranciaAbsoluta,
                ...(q.correccion ? { correccion: q.correccion } : {}),
                ...(q.manualGrading ? { manualGrading: q.manualGrading } : {}),
                ...(q.questionType === "abierta" ? { prompt: q.prompt } : {}),
                // PLAN-E §21 — sin esto, el path no-autoritativo corrige
                // proporcional como todo-o-nada.
                ...(q.puntajeParcial ? { puntajeParcial: q.puntajeParcial } : {}),
              }))
          : undefined;
      const response = await apiPost<SubmitResponse>(
        `/api/quiz-attempts/${attemptId}/submit`,
        {
          answers,
          presentedIds,
          ...(submitGenerated ? { generatedQuestions: submitGenerated } : {}),
        }
      );
      setResult(response);
      setSubmitStatus("submitted");
      setSubmitMessage(response.message ?? "Respuestas enviadas para corrección.");
      if (id) clearOutbox(id);
      const esCompetenciaParaRanking = attempt?.quizType === "competencia";
      if (esCompetenciaParaRanking && tiempoInicio) {
        const tiempoSeg = Math.floor((Date.now() - tiempoInicio) / 1000);
        const quizId = attempt?.quizId ?? "";
        const moduloId = attempt?.moduleId ?? "";
        void apiPost(`/api/quiz-attempts/${attemptId}/competencia`, {
          score: response?.score ?? 0,
          maxScore: response?.maxScore ?? 0,
          tiempoSeg,
          quizId,
          moduloId,
        });
        setRankingLoading(true);
        apiGet<{ ranking: RankingEntry[] }>(
          `/api/quiz-attempts/competencia/${quizId}/ranking`
        )
          .then((data) => setRanking(data.ranking ?? []))
          .catch(() => {})
          .finally(() => setRankingLoading(false));
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error ? error.message : "No se pudo enviar el intento."
      );
    }
  };

  // WO-T2a — en modo revisión (intento ya finalizado) el cronómetro no debe
  // correr: no hay nada que enviar, y `onExpire` dispararía un submit sobre
  // un intento ya cerrado.
  const isFinishedAttempt = attempt?.status !== undefined && attempt.status !== "in_progress";
  const timerSegundosValue =
    !isFinishedAttempt && typeof attempt?.timerSegundos === "number" && attempt.timerSegundos > 0
      ? attempt.timerSegundos
      : null;
  const fullscreenEnabled = attempt?.fullscreenOnStart === true;

  // PLAN-Q §2.3 — segundos restantes ANCLADOS a `attempt.deadline` (reloj
  // real), no sólo a `timerSegundos` (duración total, ciega a cuánto ya
  // pasó si el intento se reanuda) ni a los ticks acumulados de
  // `setInterval` (que se atrasan con la pantalla apagada / la app en
  // segundo plano). `resyncTick` fuerza un recálculo cuando la pestaña
  // vuelve a estar visible; useCountdown ya resetea su estado interno
  // cada vez que `initialSeconds` cambia, así que reusarlo alcanza — no
  // hace falta tocar ese hook.
  const [resyncTick, setResyncTick] = useState(0);
  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === "visible") setResyncTick((n) => n + 1);
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);
  const remainingFromDeadline = useMemo(() => {
    if (timerSegundosValue === null || !attempt?.deadline) return null;
    const ms = new Date(attempt.deadline).getTime() - Date.now();
    if (Number.isNaN(ms)) return null;
    return Math.max(0, Math.round(ms / 1000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerSegundosValue, attempt?.deadline, resyncTick]);
  const countdownInitialSeconds = remainingFromDeadline ?? timerSegundosValue;

  const countdown = useCountdown({
    initialSeconds: countdownInitialSeconds,
    onExpire: () => {
      if (submitStatus !== "submitted" && submitStatus !== "submitting") {
        void handleSubmit();
      }
    },
  });

  useFlushOnHidden(() => {
    const id = resolveAttemptId(attempt);
    if (!id || submitStatus === "submitted") return;
    void flushOutbox(async (item: OutboxItem) => {
      try {
        await apiPost(`/api/quiz-attempts/${id}/answer`, {
          questionId: item.questionId,
          response: item.response,
        });
        return { ok: true };
      } catch (err) {
        if (err instanceof ApiError && err.status === 409) return { ok: false, terminal: true };
        return { ok: false };
      }
    }, id);
  });

  const fullscreen = useFullscreen({
    enabled: fullscreenEnabled,
    onFallback: () => setFullscreenWarning(true),
  });

  const tabSwitchCounter = useFlushCounter({
    enabled: hasStarted && submitStatus !== "submitted",
  });

  useEffect(() => {
    if (!hasStarted || submitStatus === "submitted") return;
    const id = resolveAttemptId(attempt);
    if (!id || tabSwitchCounter.count === 0) return;
    void apiPatch(`/api/quiz-attempts/${id}`, {
      tabSwitchCount: tabSwitchCounter.count
    }).catch(() => {});
  }, [tabSwitchCounter.count, hasStarted, submitStatus, attempt]);

  // ── Answered-count for progress indicator ────────────────────────────────
  const answeredCount = useMemo(
    () => questions.filter((q) => {
      const a = answers[q.id];
      if (a === undefined || a === null) return false;
      if (typeof a === "string") return a.trim().length > 0;
      if (Array.isArray(a)) return a.length > 0;
      return Object.keys(a).length > 0;
    }).length,
    [questions, answers],
  );

  // ── Loading state ────────────────────────────────────────────────────────
  if (status === "loading") {
    return (
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--c-bg)",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-3)",
        }}>
          <Spinner size="lg" label="Cargando intento" />
          <p style={{ fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
            Cargando intento...
          </p>
        </div>
      </main>
    );
  }

  // PLAN-Q §2.2 — teclado numérico en el teléfono para preguntas "input"
  // cuya respuesta correcta es un número (ej. cinemática: "v * t"). No hay
  // un campo explícito de tipo de dato en ModuleQuizQuestion; se infiere
  // de answerKey, que no afecta la corrección (sigue comparando strings).
  function esRespuestaNumerica(answerKey: string | string[] | undefined): boolean {
    const val = Array.isArray(answerKey) ? answerKey[0] : answerKey;
    return typeof val === "string" && val.trim() !== "" && !Number.isNaN(Number(val));
  }

  // ── Render question ──────────────────────────────────────────────────────
  function renderPregunta(
    question: ModuleQuizQuestion,
    indexGlobal: number,
    inputsDisabledLocal: boolean,
    submitStatusLocal: "idle" | "submitting" | "submitted" | "error",
    openPasosLocal: Record<string, boolean>,
    setOpenPasosLocal: Dispatch<SetStateAction<Record<string, boolean>>>,
    handleAnswerChangeLocal: (questionId: string, value: AttemptAnswerValue) => void,
    handleToggleCheckboxLocal: (questionId: string, option: string, checked: boolean) => void,
    answersLocal: Record<string, AttemptAnswerValue>,
  ) {
    const selected = answersLocal[question.id] ?? "";
    const hasOptions = Array.isArray(question.options) && question.options.length > 0;
    const questionType = question.questionType ?? (hasOptions ? "mc" : "input");
    // PLAN-E §21 Parte A: el flag `multiple` sobrevive la sanitización (el
    // answerKey del alumno es un canario string, no un array).
    const isMulti =
      hasOptions && (question.multiple === true || Array.isArray(question.answerKey));
    return (
      <>
        {parseVisualContext(question.visualContext) ? (
          <Card variant="flat" padding="none" style={{ overflow: "hidden" }}>
            <div style={{
              padding: "var(--space-2) var(--space-3)",
              borderBottom: "1px solid var(--c-border)",
              background: "var(--c-info-soft)",
            }}>
              <Badge variant="info" size="sm">Herramienta interactiva</Badge>
            </div>
            {/* PLAN-Q §2.2 — visuales con ancho fijo (ej. circuit 360px, vector-diagram
                300px) scrollean DENTRO de la tarjeta en viewport angosto, nunca empujan
                la página entera. El overflow:hidden de la Card recorta las esquinas, no
                el contenido: el scroll vive en este div interno. */}
            <div style={{ padding: "var(--space-3)", background: "var(--c-surface)", overflowX: "auto" }}>
              <VisualizerRenderer spec={parseVisualContext(question.visualContext)!} />
            </div>
          </Card>
        ) : null}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
          <p style={{
            margin: 0,
            fontSize: "var(--text-xs)",
            fontWeight: "var(--fw-medium)",
            color: "var(--c-muted)",
          }}>
            Pregunta {indexGlobal}
          </p>
          <p style={{
            margin: 0,
            fontSize: "var(--text-base)",
            lineHeight: "var(--lh-relaxed)",
            color: "var(--c-text)",
          }}>
            {question.prompt}
          </p>
        </div>
        {questionType === "ordenar" ? (
          <OrdenarRenderer
            items={question.items ?? []}
            value={Array.isArray(selected) ? (selected as string[]) : undefined}
            onChange={(orden) => handleAnswerChangeLocal(question.id, orden)}
            disabled={inputsDisabledLocal}
            correctOrder={
              submitStatusLocal === "submitted" && Array.isArray(question.answerKey)
                ? (question.answerKey as string[])
                : undefined
            }
          />
        ) : questionType === "marcar_mapa" ? (
          <MarcarMapaRenderer
            mapaId={question.mapaId ?? ""}
            selectedKey={typeof selected === "string" ? selected : undefined}
            correctKey={
              submitStatusLocal === "submitted"
                ? (question.modoRespuestaMapa === "nombre"
                  ? question.respuestaNombreCorrecta
                  : question.respuestaIsoCorrecta)
                : undefined
            }
            onSelect={(key) => handleAnswerChangeLocal(question.id, key)}
            disabled={inputsDisabledLocal}
            paisIso={question.paisIso}
            modoRespuesta={question.modoRespuestaMapa ?? "iso"}
            encuadre={question.encuadre}
          />
        ) : questionType === "analisis_sintactico" ? (
          <AnalisisSintacticoRenderer
            textoAnalizar={question.textoAnalizar ?? ""}
            etiquetasPedidas={question.etiquetasPedidas ?? []}
            asignaciones={
              selected && typeof selected === "object" && !Array.isArray(selected)
                ? (selected as Record<string, string>)
                : undefined
            }
            onChange={(asign) => handleAnswerChangeLocal(question.id, asign)}
            disabled={inputsDisabledLocal}
            correctas={
              submitStatusLocal === "submitted"
                ? buildCorrectasFromEtiquetas(question.etiquetasPedidas)
                : undefined
            }
          />
        ) : questionType === "identificar_palabras" ? (
          <IdentificarPalabrasRenderer
            textoAnalizar={question.textoAnalizar ?? ""}
            marcadas={Array.isArray(selected) ? (selected as string[]) : undefined}
            onChange={(marcadas) => handleAnswerChangeLocal(question.id, marcadas)}
            disabled={inputsDisabledLocal}
            correctas={
              submitStatusLocal === "submitted" && Array.isArray(question.answerKey)
                ? (question.answerKey as string[])
                : undefined
            }
          />
        ) : questionType === "analisis_spans" ? (
          <AnalisisSpansRenderer
            textoAnalizar={question.textoAnalizar ?? ""}
            etiquetasDisponibles={question.etiquetasDisponibles ?? []}
            value={Array.isArray(selected) ? (selected as string[]) : undefined}
            onChange={(spans) => handleAnswerChangeLocal(question.id, spans)}
            disabled={inputsDisabledLocal}
            correctas={
              submitStatusLocal === "submitted" && Array.isArray(question.answerKey)
                ? (question.answerKey as string[])
                : undefined
            }
          />
        ) : questionType === "abierta" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            <Textarea
              rows={4}
              value={typeof selected === "string" ? selected : ""}
              onChange={(event) => handleAnswerChangeLocal(question.id, event.target.value)}
              placeholder="Escribí tu respuesta"
              disabled={inputsDisabledLocal}
              aria-label={`Respuesta para pregunta ${indexGlobal}`}
            />
            {question.correccion === "manual" ? (
              <Alert variant="warning" role="status">
                {submitStatusLocal === "submitted"
                  ? "Pendiente de corrección por el profesor."
                  : "Esta pregunta la corrige tu profesor (puntaje parcial)."}
              </Alert>
            ) : (
              <p style={{
                margin: 0,
                fontSize: "var(--text-xs)",
                color: "var(--c-muted)",
              }}>
                Pregunta informativa: no afecta tu nota.
              </p>
            )}
          </div>
        ) : questionType === "input" ? (
          <Textarea
            rows={3}
            value={typeof selected === "string" ? selected : ""}
            onChange={(event) => handleAnswerChangeLocal(question.id, event.target.value)}
            placeholder="Escribí tu respuesta"
            disabled={inputsDisabledLocal}
            aria-label={`Respuesta para pregunta ${indexGlobal}`}
          />
        ) : questionType === "vf" ? (
          <RadioGroup
            aria-label={`Opciones para pregunta ${indexGlobal}`}
            value={typeof selected === "string" ? selected : null}
            onValueChange={(val) => handleAnswerChangeLocal(question.id, val)}
          >
            {["Verdadero", "Falso"].map((option) => (
              <Radio
                key={option}
                value={option}
                label={option}
                disabled={inputsDisabledLocal}
                style={{ minHeight: "44px" }}
              />
            ))}
          </RadioGroup>
        ) : hasOptions ? (
          isMulti ? (
            <div
              role="group"
              aria-label={`Opciones para pregunta ${indexGlobal}`}
              style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
            >
              {question.options?.map((option) => (
                <Checkbox
                  key={option}
                  label={option}
                  checked={Array.isArray(selected) && selected.includes(option)}
                  onChange={(event) => {
                    handleToggleCheckboxLocal(question.id, option, event.target.checked);
                  }}
                  disabled={inputsDisabledLocal}
                  style={{ minHeight: "44px" }}
                />
              ))}
            </div>
          ) : (
            <RadioGroup
              aria-label={`Opciones para pregunta ${indexGlobal}`}
              value={typeof selected === "string" ? selected : null}
              onValueChange={(val) => handleAnswerChangeLocal(question.id, val)}
            >
              {question.options?.map((option) => (
                <Radio
                  key={option}
                  value={option}
                  label={option}
                  disabled={inputsDisabledLocal}
                  style={{ minHeight: "44px" }}
                />
              ))}
            </RadioGroup>
          )
        ) : (
          <Input
            type="text"
            inputMode={esRespuestaNumerica(question.answerKey) ? "decimal" : "text"}
            autoComplete="off"
            autoCapitalize={esRespuestaNumerica(question.answerKey) ? "off" : "sentences"}
            value={typeof selected === "string" ? selected : ""}
            onChange={(event) => handleAnswerChangeLocal(question.id, event.target.value)}
            placeholder="Escribí tu respuesta"
            disabled={inputsDisabledLocal}
            aria-label={`Respuesta para pregunta ${indexGlobal}`}
          />
        )}
        {submitStatusLocal === "submitted" && question.pasos && question.pasos.length > 0 && (
          <div style={{ marginTop: "var(--space-2)" }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setOpenPasosLocal((prev) => ({ ...prev, [question.id]: !prev[question.id] }))
              }
              aria-expanded={!!openPasosLocal[question.id]}
            >
              {openPasosLocal[question.id] ? "Ocultar resolución" : "Ver resolución"}
            </Button>
            {openPasosLocal[question.id] && (
              <ol style={{
                margin: 0,
                marginTop: "var(--space-2)",
                paddingLeft: "var(--space-5)",
                fontSize: "var(--text-xs)",
                lineHeight: "var(--lh-relaxed)",
                color: "var(--c-muted)",
                background: "var(--c-info-soft)",
                borderRadius: "var(--r-md)",
                padding: "var(--space-3)",
                border: "1px solid var(--c-border)",
                listStyle: "decimal",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-1)",
              }}>
                {question.pasos.map((paso, pi) => (
                  <li key={pi}>{paso}</li>
                ))}
              </ol>
            )}
          </div>
        )}
      </>
    );
  }

  // ── Error state ──────────────────────────────────────────────────────────
  if (status === "error") {
    return (
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--c-bg)",
      }}>
        <Card variant="elevated" padding="lg" style={{ maxWidth: "28rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Alert variant="danger" title="Error">
              No se pudo cargar el intento.
            </Alert>
            {errorMessage && (
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
                {errorMessage}
              </p>
            )}
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              Volver
            </Button>
          </div>
        </Card>
      </main>
    );
  }

  if (!attempt) {
    return (
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--c-bg)",
      }}>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
          No se encontró el intento solicitado.
        </p>
      </main>
    );
  }

  const resolvedAttemptId = resolveAttemptId(attempt);
  const esCompetencia = attempt?.quizType === "competencia";
  const inputsDisabled =
    countdown.isExpired || submitStatus === "submitting" || submitStatus === "submitted";

  // ── Fullscreen gate ──────────────────────────────────────────────────────
  if (!hasStarted) {
    return (
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--c-bg)",
      }}>
        <Card variant="elevated" padding="lg" style={{ maxWidth: "28rem", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <h1 style={{
              margin: 0,
              fontSize: "var(--text-xl)",
              fontWeight: "var(--fw-semibold)",
              lineHeight: "var(--lh-tight)",
              color: "var(--c-text)",
            }}>
              {title}
            </h1>
            <p style={{
              margin: 0,
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-relaxed)",
              color: "var(--c-muted)",
            }}>
              Esta evaluación requiere pantalla completa. Al hacer click en
              "Empezar evaluación" tu navegador entrará en modo pantalla
              completa.
            </p>
            <ul style={{
              margin: 0,
              paddingLeft: "var(--space-4)",
              fontSize: "var(--text-xs)",
              color: "var(--c-muted)",
              lineHeight: "var(--lh-relaxed)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-1)",
            }}>
              <li>El tiempo corre desde el momento en que empezás.</li>
              <li>Si cambiás de pestaña, tus respuestas se guardan automáticamente.</li>
              <li>Al agotarse el tiempo, el intento se envía solo.</li>
            </ul>
            {fullscreenWarning && (
              <Alert
                variant="warning"
                role="status"
                data-testid="fullscreen-fallback"
              >
                No se pudo entrar a pantalla completa. La evaluación continúa
                igual, pero te recomendamos no cambiar de pestaña.
              </Alert>
            )}
            <div style={{ display: "flex", gap: "var(--space-3)" }}>
              <Button
                variant="primary"
                data-testid="empezar-evaluacion"
                onClick={async () => {
                  if (fullscreenEnabled) {
                    await fullscreen.request();
                  }
                  setHasStarted(true);
                }}
                style={{ flex: 1 }}
              >
                Empezar evaluación
              </Button>
              <Link
                to="/modulos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "var(--space-2) var(--space-4)",
                  fontSize: "var(--text-base)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: "var(--fw-medium)",
                  color: "var(--c-text)",
                  borderRadius: "var(--r-md)",
                  border: "1px solid var(--c-border)",
                  textDecoration: "none",
                  background: "transparent",
                }}
              >
                Cancelar
              </Link>
            </div>
          </div>
        </Card>
      </main>
    );
  }

  // ── Main quiz view ───────────────────────────────────────────────────────
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--c-bg)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div style={{
        maxWidth: "56rem",
        margin: "0 auto",
        padding: "var(--space-6) var(--space-4)",
      }}
        className="sm:px-6 lg:px-8"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          {/* Header */}
          <header
            role="banner"
            style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
          >
            <Link
              to="/modulos"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--c-primary)",
                textDecoration: "none",
                fontWeight: "var(--fw-medium)",
              }}
              aria-label="Volver a módulos"
            >
              &larr; Volver a módulos
            </Link>
            <h1 style={{
              margin: 0,
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--fw-bold)",
              lineHeight: "var(--lh-tight)",
              color: "var(--c-text)",
            }}>
              {title}
            </h1>
            <p style={{
              margin: 0,
              fontSize: "var(--text-xs)",
              color: "var(--c-muted)",
            }}>
              Intento: {resolvedAttemptId}
            </p>
            {isFinishedAttempt && (
              <Alert variant="info" role="status" data-testid="review-mode-banner">
                Estás revisando un intento ya enviado. Las respuestas no se pueden modificar.
              </Alert>
            )}
            {fullscreenWarning && (
              <Alert
                variant="warning"
                role="status"
                data-testid="fullscreen-fallback-banner"
              >
                Pantalla completa no disponible. Tus respuestas se guardan
                automáticamente al cambiar de pestaña.
              </Alert>
            )}
            <Cronometro
              remaining={countdown.remaining}
              expired={countdown.isExpired}
            />
          </header>

          {/* Quiz body */}
          <Card variant="raised" padding="lg">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              {/* Quiz type banners */}
              {attempt?.quizType === "formal" && (
                <Alert variant="warning" role="status">
                  Evaluación formal — cuenta para tu nota
                </Alert>
              )}
              {attempt?.quizType === "practica" && (
                <Alert variant="info" role="status">
                  Práctica — no afecta tu nota
                </Alert>
              )}
              {attempt?.instructions && (
                <Alert variant="info" role="none">
                  {attempt.instructions}
                </Alert>
              )}

              {/* Progress bar */}
              {questions.length > 0 && submitStatus !== "submitted" && (
                <Progress
                  value={answeredCount}
                  max={questions.length}
                  variant={answeredCount === questions.length ? "success" : "primary"}
                  size="sm"
                  label={`${answeredCount} de ${questions.length} respondidas`}
                  aria-label="Progreso del cuestionario"
                />
              )}

              {/* PLAN-D §2 — estado del autosave. Sólo se muestra una vez que
                  hubo al menos un intento de guardado (idle = todavía no
                  respondió nada). */}
              {submitStatus !== "submitted" && saveStatus !== "idle" && (
                <p
                  role="status"
                  aria-live="polite"
                  data-testid="quiz-save-status"
                  style={{
                    margin: 0,
                    fontSize: "var(--text-xs)",
                    color:
                      saveStatus === "queued" ? "var(--c-warning)" : "var(--c-muted)",
                  }}
                >
                  {saveStatus === "saving" && "Guardando…"}
                  {saveStatus === "saved" && "Guardado"}
                  {saveStatus === "queued" &&
                    "Guardado localmente — se sincronizará cuando vuelva la conexión."}
                </p>
              )}

              {/* elige_alumno selector */}
              {eligeAlumno && presentedQuestions.length > 0 && (
                <fieldset style={{
                  border: "1px solid var(--c-border)",
                  borderRadius: "var(--r-lg)",
                  padding: "var(--space-4)",
                  margin: 0,
                  background: "var(--c-surface)",
                }}>
                  <legend style={{
                    padding: "0 var(--space-1)",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--fw-semibold)",
                    color: "var(--c-text)",
                  }}>
                    Elegí qué ejercicio querés responder
                  </legend>
                  <p style={{
                    margin: 0,
                    marginBottom: "var(--space-2)",
                    fontSize: "var(--text-xs)",
                    color: "var(--c-muted)",
                  }}>
                    Solo el ejercicio que elijas cuenta para tu nota.
                  </p>
                  <RadioGroup
                    aria-label="Elección de ejercicio"
                    value={chosenQuestionId}
                    onValueChange={setChosenQuestionId}
                    name="elige-alumno-choice"
                  >
                    {presentedQuestions.map((q) => (
                      <Radio key={q.id} value={q.id} label={q.prompt} />
                    ))}
                  </RadioGroup>
                </fieldset>
              )}

              {/* PLAN-Q §2.1 — toggle de la sugerencia mobile (una por
                  pantalla vs lista completa). Sólo aparece cuando la
                  sugerencia aplica; es preferencia de sesión, no persiste. */}
              {(sugerenciaMobileDisponible || modoOverride) && (
                <button
                  type="button"
                  data-testid="quiz-modo-mobile-toggle"
                  onClick={() =>
                    setModoOverride((cur) =>
                      (cur ?? (sugerenciaMobileDisponible ? "una_por_pantalla" : modoPresentacionServidor)) ===
                      "una_por_pantalla"
                        ? "lista"
                        : "una_por_pantalla",
                    )
                  }
                  style={{
                    alignSelf: "flex-start",
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontSize: "var(--text-xs)",
                    color: "var(--c-primary)",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {modoPresentacion === "una_por_pantalla"
                    ? "Ver todas las preguntas en una lista"
                    : "Ver de a una pregunta por pantalla"}
                </button>
              )}

              {/* Questions */}
              {questions.length === 0 ? (
                <p style={{
                  margin: 0,
                  fontSize: "var(--text-sm)",
                  color: "var(--c-muted)",
                }}>
                  {eligeAlumno && presentedQuestions.length > 0
                    ? "Elegí un ejercicio de la lista para empezar a responder."
                    : "Este intento no tiene preguntas asignadas todavía."}
                </p>
              ) : (
                <div
                  data-testid="quiz-presentation"
                  data-modo-presentacion={modoPresentacion}
                  style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
                >
                  {modoPresentacion !== "una_por_pantalla" ? (
                    <ol
                      data-testid="quiz-questions-list"
                      style={{
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--space-5)",
                      }}
                    >
                      {visibleQuestions.map((question, index) => (
                        <li
                          key={question.id}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "var(--space-3)",
                            paddingBottom: "var(--space-5)",
                            borderBottom: index < visibleQuestions.length - 1
                              ? "1px solid var(--c-border)"
                              : undefined,
                          }}
                        >
                          {renderPregunta(question, preguntaGlobal(index), inputsDisabled, submitStatus, openPasos, setOpenPasos, handleAnswerChange, handleToggleCheckbox, answers)}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <div
                      data-testid="quiz-slide"
                      data-slide-index={slideIndex}
                      onTouchStart={handleSlideTouchStart}
                      onTouchEnd={handleSlideTouchEnd}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--space-3)",
                        padding: "var(--space-4)",
                        border: "1px solid var(--c-border)",
                        borderRadius: "var(--r-lg)",
                        background: "var(--c-surface)",
                        touchAction: "pan-y",
                      }}
                    >
                      {visibleQuestions[0] ? (
                        renderPregunta(
                          visibleQuestions[0],
                          preguntaGlobal(0),
                          inputsDisabled,
                          submitStatus,
                          openPasos,
                          setOpenPasos,
                          handleAnswerChange,
                          handleToggleCheckbox,
                          answers,
                        )
                      ) : null}
                    </div>
                  )}

                  {/* Navigation */}
                  {modoPresentacion !== "lista" && (
                    <nav
                      aria-label="Navegación entre preguntas"
                      data-testid="quiz-nav"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "var(--space-2)",
                        borderTop: "1px solid var(--c-border)",
                        paddingTop: "var(--space-4)",
                      }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={goPrev}
                        disabled={
                          modoPresentacion === "una_por_pantalla"
                            ? slideIndex === 0
                            : pageIndex === 0
                        }
                        data-testid="quiz-nav-prev"
                        aria-label="Pregunta anterior"
                      >
                        <ChevronLeft size={16} aria-hidden="true" /> Anterior
                      </Button>
                      {modoPresentacion === "una_por_pantalla" ? (
                        <div
                          data-testid="quiz-nav-dots"
                          role="tablist"
                          aria-label="Indicador de pregunta"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--space-2)",
                          }}
                        >
                          {questions.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              role="tab"
                              aria-label={`Ir a la pregunta ${i + 1}`}
                              aria-selected={i === slideIndex}
                              aria-current={i === slideIndex ? "step" : undefined}
                              onClick={() => goTo(i)}
                              style={{
                                border: "none",
                                cursor: "pointer",
                                borderRadius: "var(--r-xl)",
                                transition: "all 200ms ease",
                                height: "0.5rem",
                                width: i === slideIndex ? "1.5rem" : "0.5rem",
                                background: i === slideIndex ? "var(--c-primary)" : "var(--c-border)",
                                padding: 0,
                              }}
                              data-testid={`quiz-nav-dot-${i}`}
                            />
                          ))}
                        </div>
                      ) : (
                        <div
                          data-testid="quiz-nav-pages"
                          role="tablist"
                          aria-label="Indicador de página"
                          style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}
                        >
                          {Array.from({ length: totalPaginas }, (_, i) => (
                            <button
                              key={i}
                              type="button"
                              role="tab"
                              aria-label={`Ir a la página ${i + 1}`}
                              aria-selected={i === pageIndex}
                              aria-current={i === pageIndex ? "page" : undefined}
                              onClick={() => goTo(i)}
                              style={{
                                minWidth: "28px",
                                borderRadius: "var(--r-md)",
                                padding: "var(--space-1) var(--space-2)",
                                fontSize: "var(--text-xs)",
                                fontFamily: "var(--font-sans)",
                                fontVariantNumeric: "tabular-nums",
                                fontWeight: "var(--fw-medium)",
                                cursor: "pointer",
                                border: i === pageIndex ? "none" : "1px solid var(--c-border)",
                                background: i === pageIndex ? "var(--c-primary)" : "transparent",
                                color: i === pageIndex ? "var(--c-text-on-dark)" : "var(--c-text)",
                              }}
                              data-testid={`quiz-nav-page-${i}`}
                            >
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={goNext}
                        disabled={
                          modoPresentacion === "una_por_pantalla"
                            ? slideIndex === questions.length - 1
                            : pageIndex === totalPaginas - 1
                        }
                        data-testid="quiz-nav-next"
                        aria-label="Siguiente pregunta"
                      >
                        Siguiente <ChevronRight size={16} aria-hidden="true" />
                      </Button>
                    </nav>
                  )}
                </div>
              )}

              {/* Submit area */}
              <Divider spacing="none" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                }}
                aria-live="polite"
              >
                <Button
                  variant="primary"
                  data-testid="enviar-respuestas"
                  onClick={handleSubmit}
                  disabled={inputsDisabled || questions.length === 0}
                  style={{
                    alignSelf: "flex-start",
                    background: submitStatus === "submitted" ? "var(--c-success)" : undefined,
                    borderColor: submitStatus === "submitted" ? "var(--c-success)" : undefined,
                  }}
                >
                  {submitStatus === "submitting" ? (
                    <>
                      <Spinner size="sm" label={null} />
                      Enviando...
                    </>
                  ) : countdown.isExpired
                    ? "Tiempo agotado — enviar"
                    : submitStatus === "submitted"
                      ? "Respuestas enviadas"
                      : "Enviar respuestas"}
                </Button>
                {submitMessage && (
                  <Alert
                    variant={submitStatus === "error" ? "danger" : "success"}
                    role={submitStatus === "error" ? "alert" : "status"}
                  >
                    {submitMessage}
                  </Alert>
                )}
                <PostSubmitResult
                  result={result}
                  {...(attempt?.ocultarPuntos ? { ocultarPuntos: true } : {})}
                />
              </div>
            </div>
          </Card>

          {/* Competition ranking */}
          {esCompetencia && ranking.length > 0 && (
            <Card variant="raised" padding="lg">
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <h2 style={{
                  margin: 0,
                  fontSize: "var(--text-lg)",
                  fontWeight: "var(--fw-semibold)",
                  color: "var(--c-text)",
                }}>
                  Tabla de posiciones
                </h2>
                {rankingLoading ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <Spinner size="sm" label={null} />
                    <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
                      Cargando ranking...
                    </p>
                  </div>
                ) : (
                  <div
                    role="list"
                    aria-label="Ranking de competencia"
                    style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
                  >
                    {ranking.map((entry) => {
                      const variant: "warning" | "neutral" | "danger" =
                        entry.posicion === 1 ? "warning"
                          : entry.posicion <= 3 ? "neutral"
                          : "neutral";
                      return (
                        <Card
                          key={entry.usuarioId}
                          role="listitem"
                          variant="flat"
                          padding="sm"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--space-3)",
                            ...(entry.posicion <= 3
                              ? {
                                  background: entry.posicion === 1
                                    ? "var(--c-warning-soft)"
                                    : "var(--c-surface-3)",
                                }
                              : {}),
                          }}
                        >
                          <Badge
                            variant={variant}
                            size="sm"
                            style={{
                              width: "var(--space-6)",
                              justifyContent: "center",
                              fontWeight: "var(--fw-bold)",
                            }}
                          >
                            {entry.posicion}°
                          </Badge>
                          <span style={{
                            flex: 1,
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--fw-medium)",
                            color: "var(--c-text)",
                          }}>
                            {entry.nombre}
                          </span>
                          <Badge variant="primary" size="sm">
                            {entry.score}/{entry.maxScore}
                          </Badge>
                          <span style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--c-muted)",
                            fontVariantNumeric: "tabular-nums",
                          }}>
                            {formatTiempo(entry.tiempoSeg)}
                          </span>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
