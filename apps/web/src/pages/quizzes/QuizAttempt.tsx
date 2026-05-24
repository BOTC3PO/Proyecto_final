import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiGet, apiPost } from "../../lib/api";
import type { ModuleQuizQuestion } from "../../domain/module/module.types";
import VisualizerRenderer from "../../stubs/VisualizerRenderer";
import type { VisualSpec } from "../../generadoresV2/core/types";
import type { GeneratorDescriptor, Ejercicio } from "../../generadoresV2/core/types";
import { DeterministicPrng } from "../../generadoresV2/core/prng";
import { ejercicioToQuestion } from "../../domain/quiz/ejercicioToQuestion";
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
};

type SubmitResponse = {
  status?: string;
  score?: number;
  maxScore?: number;
  feedback?: string;
  message?: string;
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
        if (data.quizType === "competencia") {
          setModoCompetencia(true);
          // Timer de 10 minutos por defecto
          const duracionSeg = 10 * 60;
          setTiempoRestante(duracionSeg);
          setTiempoInicio(Date.now());
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
          for (let i = 0; i < count; i++) {
            try {
              // El tipo ModuleQuizQuestion del paquete @vb/vblang difiere en
              // `visualSpec: unknown` vs el de apps/web. Son estructuralmente
              // compatibles, así que casteamos a través de unknown.
              const q = runPlantilla(p.codigoDsl, {
                seed: `${baseSeed}-${i}`,
              }) as unknown as ModuleQuizQuestion;
              out.push(q);
            } catch {
              // Si una seed concreta falla, salteamos esa pregunta — el resto
              // del quiz sigue siendo jugable.
            }
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
        const ejercicios: Ejercicio[] = Array.from({ length: count }, () => {
          const st = descriptor.subtipos[Math.floor(Math.random() * descriptor.subtipos.length)];
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

  const formatTiempo = (seg: number) => {
    const m = Math.floor(seg / 60);
    const s = seg % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const questions = useMemo(() => {
    if (!attempt) return [] as ModuleQuizQuestion[];
    const server = attempt.questions ?? attempt.quiz?.questions ?? [];
    const pool = server.length > 0 ? server : generatedQuestions;
    const display = attempt.displayCount;
    if (!display || display >= pool.length) return pool;
    // Selección determinística basada en el seed
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
  }, [attempt, generatedQuestions]);

  const title = attempt?.quizTitle ?? attempt?.quiz?.title ?? "Quiz";

  const handleAnswerChange = (questionId: string, value: AttemptAnswerValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleToggleCheckbox = (questionId: string, option: string, checked: boolean) => {
    setAnswers((prev) => {
      const current = prev[questionId];
      const currentList = Array.isArray(current) ? current : [];
      const next = checked
        ? Array.from(new Set([...currentList, option]))
        : currentList.filter((item) => item !== option);
      return { ...prev, [questionId]: next };
    });
  };

  const handleSubmit = async () => {
    if (!attemptId) return;
    setSubmitStatus("submitting");
    setSubmitMessage(null);
    try {
      const response = await apiPost<SubmitResponse>(
        `/api/quiz-attempts/${attemptId}/submit`,
        {
          answers,
          ...(generatedQuestions.length > 0 && {
            generatedQuestions: generatedQuestions.map((q) => ({
              id: q.id,
              answerKey: q.answerKey,
            })),
          }),
        }
      );
      setResult(response);
      setSubmitStatus("submitted");
      setSubmitMessage(response.message ?? "Respuestas enviadas para corrección.");
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

          {questions.length === 0 ? (
            <p className="text-sm text-gray-500">
              Este intento no tiene preguntas asignadas todavía.
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
            {result && (result.score !== undefined || result.maxScore !== undefined) ? (
              <p className="text-sm text-gray-600">
                Puntaje: {result.score ?? "-"} / {result.maxScore ?? "-"}
              </p>
            ) : null}
            {result?.feedback ? (
              <p className="text-sm text-gray-600">{result.feedback}</p>
            ) : null}
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
