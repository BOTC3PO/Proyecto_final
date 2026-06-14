import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiGet, apiPost, ApiError } from "../../lib/api";
import {
  recordAnswer,
  flush as flushOutbox,
  clearAttempt as clearOutbox,
  type OutboxItem,
} from "../../lib/attemptOutbox";
import type { ModuleQuizQuestion } from "../../domain/module/module.types";
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
import { buildCorrectasFromEtiquetas } from "../../domain/quiz/checkAnswerSpecial";

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
   * F4-04 — Si es `true`, el botón "Iniciar evaluación" llama a
   * `document.documentElement.requestFullscreen()` antes de cargar el
   * quiz. Default `false`.
   */
  fullscreenOnStart?: boolean;
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
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [result, setResult] = useState<SubmitResponse | null>(null);
  const [openPasos, setOpenPasos] = useState<Record<string, boolean>>({});
  const [generatedQuestions, setGeneratedQuestions] =
    useState<ModuleQuizQuestion[]>([]);
  const [tiempoRestante, setTiempoRestante] =
    useState<number | null>(null);
  const [tiempoInicio, setTiempoInicio] = useState<number | null>(null);
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const [rankingLoading, setRankingLoading] = useState(false);
  const [modoCompetencia, setModoCompetencia] = useState(false);

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
        // F4-04 — timer per-cuestionario. Antes era hardcodeado a 10 min
        // exclusivo de `competencia`. Ahora se lee de
        // `data.timerSegundos` (resuelto por el backend con
        // `parseEvaluacionConfig`). Si es null, no se inicia cronómetro
        // (ni en `competencia` ni en `formal`). Default del tipo
        // competencia es 600s (10 min), preserva el comportamiento previo.
        const timerSeg = typeof data.timerSegundos === "number" && data.timerSegundos > 0
          ? data.timerSegundos
          : null;
        if (timerSeg !== null) {
          setModoCompetencia(true);
          setTiempoRestante(timerSeg);
          setTiempoInicio(Date.now());
        } else {
          setModoCompetencia(false);
          setTiempoRestante(null);
        }
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

    // ── Plantilla VBLang ───────────────────────────────────────────────────
    // Convención: generatorId === "plantilla:<plantillaId>". Levantamos el
    // codigoDsl desde la API y materializamos las N preguntas con seeds
    // derivados de `seed-<i>` para mantener determinismo por intento.
    if (genId.startsWith("plantilla:")) {
      const plantillaId = genId.slice("plantilla:".length);
      let cancelled = false;
      void getPlantilla(plantillaId)
        .then(async (p) => {
          if (cancelled) return;
          // Sprint 10A: precargar dataset si la plantilla lo necesita.
          // Si el parse falla acá, seguimos sin precargar: runPlantilla
          // va a tirar el error real en el catch de abajo.
          try {
            const ast = parsePlantilla(p.codigoDsl);
            const ds = extractDatasetName(ast);
            if (ds) await precargarDataset(ds);
          } catch {
            // ignorar — runPlantilla reportará el error real por pregunta.
          }
          if (cancelled) return;
          const baseSeed = seed !== undefined && seed !== null ? String(seed) : "0";
          const out: ModuleQuizQuestion[] = [];
          const errores: string[] = [];
          const maxIntentos = count * 3;
          let intentos = 0;
          // Reintentamos hasta 3×count seeds derivados. Esto cubre plantillas
          // con restricciones difíciles que fallan en algunas seeds: el resto
          // del quiz sigue siendo jugable mientras logremos generar `count`
          // preguntas distintas.
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
        .catch(() => {
          // Plantilla no accesible o no existe — sin questions, el quiz
          // mostrará el mensaje "Sin preguntas asignadas".
        });
      return () => {
        cancelled = true;
      };
    }

    // Importar dinámicamente el generador según el id
    // Formato del id: "materia/subtipo" ej "biologia/biologia"
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

        // Obtener el generador que coincide con el id
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
        // Pool de subtipos (task 4): se sortea entre los elegidos por el profe;
        // vacío = todos al azar. Determinístico por seed.
        const pool = resolveSubtipoPool(descriptor.subtipos, params);
        const ejercicios: Ejercicio[] = Array.from({ length: count }, () => {
          const st = pool[prng.int(0, pool.length - 1)];
          const template = enunciadosPersonalizados?.[st];
          return descriptor.generate(undefined, prng, st, template);
        });

        setGeneratedQuestions(ejercicios.map(ejercicioToQuestion));
      })
      .catch(() => {
        // El generador no está disponible en el cliente
      });
  }, [attempt]);

  useEffect(() => {
    if (!modoCompetencia || tiempoRestante === null) return;
    if (tiempoRestante <= 0) {
      // Auto-submit al llegar a 0
      void handleSubmit();
      return;
    }
    const interval = setInterval(() => {
      setTiempoRestante((prev) =>
        prev !== null ? Math.max(0, prev - 1) : null
      );
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modoCompetencia, tiempoRestante]);

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

  // Preguntas que el reproductor PRESENTA (aplica pool, selección y variantes).
  const presentedQuestions = useMemo(() => {
    if (!attempt) return [] as ModuleQuizQuestion[];
    const server = attempt.questions ?? attempt.quiz?.questions ?? [];
    const pool = server.length > 0 ? server : generatedQuestions;
    const seed = attempt.seed ?? "0";

    let presented: ModuleQuizQuestion[];
    if (composition) {
      // Política de pool configurable (Decisión 1): fijo/azar/elige_alumno.
      const indices = selectPoolIndices(pool.length, composition, seed);
      presented = indices.map((i) => pool[i]);
      // Variantes de consigna: la serie elige una por seed/posición.
      if (composition.variantes && composition.variantes.length > 0) {
        presented = presented.map((q, i) => {
          const variante = pickVariante(composition.variantes, seed, i);
          return variante ? { ...q, prompt: variante } : q;
        });
      }
      return presented;
    }

    // Fallback histórico: displayCount + barajado determinístico por seed.
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

  // Para `elige_alumno`: el alumno elige cuál responder; solo esa puntúa.
  const eligeAlumno = composition?.seleccion === "elige_alumno";
  const [chosenQuestionId, setChosenQuestionId] = useState<string | null>(null);

  // Preguntas efectivamente respondibles. En elige_alumno, solo la elegida.
  const questions = useMemo(() => {
    if (!eligeAlumno) return presentedQuestions;
    if (!chosenQuestionId) return [] as ModuleQuizQuestion[];
    return presentedQuestions.filter((q) => q.id === chosenQuestionId);
  }, [eligeAlumno, chosenQuestionId, presentedQuestions]);

  const title = attempt?.quizTitle ?? attempt?.quiz?.title ?? "Quiz";

  const handleAnswerChange = (questionId: string, value: AttemptAnswerValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    const id = resolveAttemptId(attempt);
    if (id && (typeof value === "string" || Array.isArray(value))) {
      recordAnswer(id, questionId, value);
      apiPost(`/api/quiz-attempts/${id}/answer`, {
        questionId,
        response: value,
      }).catch(() => {});
    }
  };

  const handleToggleCheckbox = (questionId: string, option: string, checked: boolean) => {
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
      apiPost(`/api/quiz-attempts/${id}/answer`, {
        questionId,
        response: next,
      }).catch(() => {});
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
      // Ids efectivamente presentados/respondibles (tras pool/selección o, en
      // elige_alumno, solo la elegida). El servidor corrige exactamente estos.
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
                // F2-04: enviar también la tolerancia absoluta para que el
                // server aplique el criterio combinado.
                toleranciaAbsoluta: q.toleranciaAbsoluta,
                // WO07 — abierta: el server necesita el modo para no auto-corregir
                // (manual queda pendiente; ninguna no puntúa) y el enunciado para
                // mostrarlo en la pantalla de corrección.
                ...(q.correccion ? { correccion: q.correccion } : {}),
                ...(q.manualGrading ? { manualGrading: q.manualGrading } : {}),
                ...(q.questionType === "abierta" ? { prompt: q.prompt } : {}),
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
      if (modoCompetencia && tiempoInicio) {
        const tiempoSeg = Math.floor((Date.now() - tiempoInicio) / 1000);
        const quizId = attempt?.quizId ?? "";
        const moduloId = attempt?.moduleId ?? "";

        // Registrar en competencia
        void apiPost(`/api/quiz-attempts/${attemptId}/competencia`, {
          score: response?.score ?? 0,
          maxScore: response?.maxScore ?? 0,
          tiempoSeg,
          quizId,
          moduloId,
        });

        // Cargar ranking
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

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Cargando intento...</p>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow space-y-3">
          <p className="text-gray-700">No se pudo cargar el intento.</p>
          <p className="text-sm text-gray-500">{errorMessage}</p>
          <button
            type="button"
            className="text-blue-600 text-sm hover:underline"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>
      </main>
    );
  }

  if (!attempt) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">No se encontró el intento solicitado.</p>
      </main>
    );
  }

  const resolvedAttemptId = resolveAttemptId(attempt);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <header className="space-y-2">
          <Link className="text-sm text-blue-600 hover:underline" to="/modulos">
            ← Volver a módulos
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500">Intento: {resolvedAttemptId}</p>
          {modoCompetencia && tiempoRestante !== null && (
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
              tiempoRestante <= 60
                ? "bg-red-100 text-red-700 animate-pulse"
                : tiempoRestante <= 180
                ? "bg-amber-100 text-amber-700"
                : "bg-emerald-100 text-emerald-700"
            }`}>
              ⏱ {formatTiempo(tiempoRestante)}
            </div>
          )}
        </header>

        <section className="bg-white rounded-xl shadow p-6 space-y-6">
          {attempt?.quizType === "formal" && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-medium text-amber-700">
              Evaluación formal — cuenta para tu nota
            </div>
          )}
          {attempt?.quizType === "practica" && (
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-500">
              Práctica — no afecta tu nota
            </div>
          )}
          {(attempt?.instructions) ? (
            <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800 leading-relaxed">
              {attempt.instructions}
            </div>
          ) : null}

          {/* elige_alumno: el alumno elige cuál ejercicio responder. */}
          {eligeAlumno && presentedQuestions.length > 0 && (
            <fieldset className="rounded-xl border border-gray-200 bg-white p-4">
              <legend className="px-1 text-sm font-semibold text-gray-800">
                Elegí qué ejercicio querés responder
              </legend>
              <p className="mb-2 text-xs text-gray-500">
                Solo el ejercicio que elijas cuenta para tu nota.
              </p>
              <div className="space-y-2">
                {presentedQuestions.map((q) => (
                  <label key={q.id} className="flex items-start gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="elige-alumno-choice"
                      checked={chosenQuestionId === q.id}
                      onChange={() => setChosenQuestionId(q.id)}
                      className="mt-1"
                    />
                    <span>{q.prompt}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {questions.length === 0 ? (
            <p className="text-sm text-gray-500">
              {eligeAlumno && presentedQuestions.length > 0
                ? "Elegí un ejercicio de la lista para empezar a responder."
                : "Este intento no tiene preguntas asignadas todavía."}
            </p>
          ) : (
            <ol className="space-y-6">
              {questions.map((question, index) => {
                const selected = answers[question.id] ?? "";
                const hasOptions = Array.isArray(question.options) && question.options.length > 0;
                const questionType = question.questionType ?? (hasOptions ? "mc" : "input");
                const isMulti = Array.isArray(question.answerKey) && hasOptions;
                return (
                  <li key={question.id} className="space-y-3">
                    {parseVisualContext(question.visualContext) ? (
                      <div className="rounded-lg border border-blue-200 bg-blue-50 overflow-hidden">
                        <div className="px-3 py-2 border-b border-blue-200">
                          <span className="text-xs font-semibold text-blue-700">Herramienta interactiva</span>
                        </div>
                        <div className="p-3 bg-white">
                          <VisualizerRenderer spec={parseVisualContext(question.visualContext)!} />
                        </div>
                      </div>
                    ) : null}
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Pregunta {index + 1}</p>
                      <p className="text-base text-gray-800">{question.prompt}</p>
                    </div>
                    {questionType === "ordenar" ? (
                      <OrdenarRenderer
                        items={question.items ?? []}
                        value={Array.isArray(selected) ? (selected as string[]) : undefined}
                        onChange={(orden) => handleAnswerChange(question.id, orden)}
                        disabled={submitStatus === "submitted"}
                        correctOrder={
                          submitStatus === "submitted" && Array.isArray(question.answerKey)
                            ? (question.answerKey as string[])
                            : undefined
                        }
                      />
                    ) : questionType === "marcar_mapa" ? (
                      <MarcarMapaRenderer
                        mapaId={question.mapaId ?? ""}
                        selectedIso={typeof selected === "string" ? selected : undefined}
                        correctIso={
                          submitStatus === "submitted"
                            ? question.respuestaIsoCorrecta
                            : undefined
                        }
                        onSelect={(iso) => handleAnswerChange(question.id, iso)}
                        disabled={submitStatus === "submitted"}
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
                        onChange={(asign) => handleAnswerChange(question.id, asign)}
                        disabled={submitStatus === "submitted"}
                        correctas={
                          submitStatus === "submitted"
                            ? buildCorrectasFromEtiquetas(question.etiquetasPedidas)
                            : undefined
                        }
                      />
                    ) : questionType === "identificar_palabras" ? (
                      <IdentificarPalabrasRenderer
                        textoAnalizar={question.textoAnalizar ?? ""}
                        marcadas={Array.isArray(selected) ? (selected as string[]) : undefined}
                        onChange={(marcadas) => handleAnswerChange(question.id, marcadas)}
                        disabled={submitStatus === "submitted"}
                        correctas={
                          submitStatus === "submitted" && Array.isArray(question.answerKey)
                            ? (question.answerKey as string[])
                            : undefined
                        }
                      />
                    ) : questionType === "abierta" ? (
                      <div className="space-y-1.5">
                        <textarea
                          className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                          rows={4}
                          value={typeof selected === "string" ? selected : ""}
                          onChange={(event) => handleAnswerChange(question.id, event.target.value)}
                          placeholder="Escribí tu respuesta"
                          disabled={submitStatus === "submitted"}
                        />
                        {question.correccion === "manual" ? (
                          <p className="text-xs font-medium text-amber-600">
                            {submitStatus === "submitted"
                              ? "⏳ Pendiente de corrección por el profesor."
                              : "Esta pregunta la corrige tu profesor (puntaje parcial)."}
                          </p>
                        ) : (
                          <p className="text-xs text-slate-500">
                            Pregunta informativa: no afecta tu nota.
                          </p>
                        )}
                      </div>
                    ) : questionType === "input" ? (
                      <textarea
                        className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        value={typeof selected === "string" ? selected : ""}
                        onChange={(event) => handleAnswerChange(question.id, event.target.value)}
                        placeholder="Escribí tu respuesta"
                      />
                    ) : questionType === "vf" ? (
                      <div className="flex flex-col gap-2">
                        {["Verdadero", "Falso"].map((option) => (
                          <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                              type="radio"
                              name={question.id}
                              value={option}
                              checked={selected === option}
                              onChange={() => handleAnswerChange(question.id, option)}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    ) : hasOptions ? (
                      <div className="flex flex-col gap-2">
                        {question.options?.map((option) => (
                          <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                              type={isMulti ? "checkbox" : "radio"}
                              name={question.id}
                              value={option}
                              checked={
                                isMulti
                                  ? Array.isArray(selected) && selected.includes(option)
                                  : selected === option
                              }
                              onChange={(event) => {
                                if (isMulti) {
                                  handleToggleCheckbox(question.id, option, event.target.checked);
                                } else {
                                  handleAnswerChange(question.id, option);
                                }
                              }}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    ) : (
                      <input
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        value={typeof selected === "string" ? selected : ""}
                        onChange={(event) => handleAnswerChange(question.id, event.target.value)}
                        placeholder="Escribí tu respuesta"
                      />
                    )}
                    {submitStatus === "submitted" && question.pasos && question.pasos.length > 0 && (
                      <div className="mt-2">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenPasos((prev) => ({ ...prev, [question.id]: !prev[question.id] }))
                          }
                          className="text-xs font-medium text-blue-600 hover:underline"
                        >
                          {openPasos[question.id] ? "Ocultar resolución" : "Ver resolución"}
                        </button>
                        {openPasos[question.id] && (
                          <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs text-gray-600 bg-blue-50 rounded-lg p-3 border border-blue-100">
                            {question.pasos.map((paso, pi) => (
                              <li key={pi}>{paso}</li>
                            ))}
                          </ol>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          )}

          <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
            <button
              type="button"
              className="self-start rounded-md bg-green-600 px-4 py-2 text-sm text-white disabled:bg-gray-300"
              onClick={handleSubmit}
              disabled={submitStatus === "submitting" || questions.length === 0}
            >
              {submitStatus === "submitting" ? "Enviando..." : "Enviar respuestas"}
            </button>
            {submitMessage ? (
              <p
                className={`text-sm ${submitStatus === "error" ? "text-red-600" : "text-green-600"}`}
              >
                {submitMessage}
              </p>
            ) : null}
            <PostSubmitResult
              result={result}
              {...(attempt?.ocultarPuntos ? { ocultarPuntos: true } : {})}
            />
          </div>
        </section>

        {modoCompetencia && ranking.length > 0 && (
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              🏆 Tabla de posiciones
            </h2>
            {rankingLoading ? (
              <p className="text-sm text-slate-400 animate-pulse">
                Cargando ranking...
              </p>
            ) : (
              <div className="space-y-2">
                {ranking.map((entry) => (
                  <div key={entry.usuarioId}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                      entry.posicion === 1
                        ? "bg-amber-50 border border-amber-200"
                        : entry.posicion === 2
                        ? "bg-slate-50 border border-slate-200"
                        : entry.posicion === 3
                        ? "bg-orange-50 border border-orange-200"
                        : "border border-slate-100"
                    }`}>
                    <span className="text-lg font-bold w-8 text-center">
                      {entry.posicion === 1 ? "🥇"
                        : entry.posicion === 2 ? "🥈"
                        : entry.posicion === 3 ? "🥉"
                        : `${entry.posicion}°`}
                    </span>
                    <span className="flex-1 text-sm font-medium text-slate-800">
                      {entry.nombre}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {entry.score}/{entry.maxScore}
                    </span>
                    <span className="text-xs text-slate-400">
                      {formatTiempo(entry.tiempoSeg)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
