import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { apiGet, apiPost } from "../../lib/api";
import type {
  Module,
  ModuleQuiz,
  ModuleTheoryBlock,
  ModuleVisibility,
} from "../../domain/module/module.types";
import TheoryItemCard from "../../components/modulos/TheoryItemCard";

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const mulberry32 = (seed: number) => {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const VISIBILITY_LABELS: Record<ModuleVisibility, string> = {
  publico: "Público",
  privado: "Privado",
  escuela: "Escuela",
};

const QUIZ_TYPE_LABELS: Record<ModuleQuiz["type"], string> = {
  practica: "Práctica",
  evaluacion: "Evaluación",
  competencia: "Competencia",
};

type ModuloDetailResponse = Module & {
  theoryItems?: ModuleTheoryBlock[];
  quizzes?: ModuleQuiz[];
  difficultyLevel?: string;
};

type QuizAttemptSummary = {
  id: string;
  quizId: string;
  status?: string;
  score?: number;
  maxScore?: number;
  completedAt?: string;
  createdAt?: string;
};

export default function ModuloDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [module, setModule] = useState<ModuloDetailResponse | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [startStatus, setStartStatus] = useState<
    Record<string, { status: "idle" | "loading" | "error"; message?: string }>
  >({});
  const [previewOpen, setPreviewOpen] = useState<Record<string, boolean>>({});
  const [attemptsByQuiz, setAttemptsByQuiz] = useState<Record<string, QuizAttemptSummary[]>>({});

  const handleStartAttempt = async (quizId: string) => {
    if (!module?.id) return;
    if (!user?.id) {
      setStartStatus((prev) => ({
        ...prev,
        [quizId]: {
          status: "error",
          message: "Necesitás iniciar sesión para comenzar el quiz."
        }
      }));
      return;
    }
    setStartStatus((prev) => ({ ...prev, [quizId]: { status: "loading" } }));
    try {
      const response = await apiPost<{
        attemptId?: string;
        id?: string;
        attempt?: { id?: string };
      }>("/api/quiz-attempts", {
        moduleId: module.id,
        quizId
      });
      const attemptId = response.attemptId ?? response.id ?? response.attempt?.id;
      if (!attemptId) {
        throw new Error("No se recibió el ID del intento.");
      }
      navigate(`/quiz/attempt/${attemptId}`);
    } catch (error) {
      setStartStatus((prev) => ({
        ...prev,
        [quizId]: {
          status: "error",
          message: error instanceof Error ? error.message : "No se pudo iniciar el quiz."
        }
      }));
    }
  };

  const buildPreviewItems = (quiz: ModuleQuiz) => {
    if (quiz.questions && quiz.questions.length > 0) {
      return quiz.questions.slice(0, 3).map((question, index) => ({
        id: question.id,
        label: `Pregunta ${index + 1}: ${question.prompt}`,
      }));
    }

    const total = quiz.count ?? 3;
    if (!quiz.generatorId || total <= 0) {
      return [
        {
          id: `${quiz.id}-empty`,
          label: "Este quiz no tiene preguntas ni generador configurado.",
        },
      ];
    }

    const seedSource = String(
      quiz.fixedSeed ?? `${quiz.id}:${quiz.generatorId}:${quiz.generatorVersion ?? 1}`
    );
    const random = mulberry32(hashString(seedSource));
    const previewCount = Math.min(total, 5);
    return Array.from({ length: previewCount }, (_, index) => {
      const token = Math.floor(random() * 900 + 100);
      return {
        id: `${quiz.id}-preview-${index + 1}`,
        label: `Pregunta ${index + 1} · semilla ${token}`,
      };
    });
  };

  useEffect(() => {
    if (!id) return;
    let active = true;
    setStatus("loading");
    setErrorMessage(null);
    apiGet<ModuloDetailResponse>(`/api/modulos/${id}`)
      .then((data) => {
        if (!active) return;
        setModule(data);
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setModule(null);
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "No se pudo cargar el módulo."
        );
      });
    return () => {
      active = false;
    };
  }, [id]);

  // Fetch the current user's quiz attempts for this module
  useEffect(() => {
    if (!id || !user?.id) return;
    let active = true;
    apiGet<{ items?: QuizAttemptSummary[]; attempts?: QuizAttemptSummary[] } | QuizAttemptSummary[]>(
      `/api/quiz-attempts?moduleId=${encodeURIComponent(id)}&userId=${encodeURIComponent(user.id)}`,
    )
      .then((data) => {
        if (!active) return;
        const list: QuizAttemptSummary[] = Array.isArray(data)
          ? data
          : (data.items ?? data.attempts ?? []);
        const byQuiz: Record<string, QuizAttemptSummary[]> = {};
        list.forEach((attempt) => {
          if (!attempt.quizId) return;
          if (!byQuiz[attempt.quizId]) byQuiz[attempt.quizId] = [];
          byQuiz[attempt.quizId].push(attempt);
        });
        setAttemptsByQuiz(byQuiz);
      })
      .catch(() => {
        // Silently ignore — progress display is best-effort
      });
    return () => {
      active = false;
    };
  }, [id, user?.id]);

  const theoryItems = useMemo(
    () => module?.theoryBlocks ?? module?.theoryItems ?? [],
    [module]
  );

  const quizzes = useMemo(() => {
    if (!module) return [] as ModuleQuiz[];
    const raw = [
      ...(module.quizzes ?? []),
      ...(module.levels?.flatMap((level) => level.quizzes ?? []) ?? []),
    ];
    const unique = new Map<string, ModuleQuiz>();
    raw.forEach((quiz) => {
      if (!unique.has(quiz.id)) {
        unique.set(quiz.id, quiz);
      }
    });
    return Array.from(unique.values());
  }, [module]);

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 p-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
            <svg className="h-5 w-5 animate-spin text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span className="text-sm font-medium text-slate-600">Cargando módulo...</span>
          </div>
        </div>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 p-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/80 p-6 shadow-sm backdrop-blur-sm">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-red-800">Error al cargar</p>
              <p className="mt-1 text-sm text-red-700">
                {errorMessage ?? "Ocurrió un error inesperado."}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!module) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 p-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9.75m3 0V18m-3-5.625h.008v.008H9.75v-.008ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
            </svg>
            <span className="text-sm text-slate-600">No se encontró información del módulo.</span>
          </div>
        </div>
      </main>
    );
  }

  const visibilityLabel = module.visibility
    ? VISIBILITY_LABELS[module.visibility]
    : "Sin definir";
  const levelLabel = module.level ?? module.difficultyLevel ?? "Sin nivel";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 pb-12">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-6 pb-10 pt-6">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/modulos"
            className="group mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-100 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Volver al listado
          </Link>
          <h1 className="text-2xl font-bold text-white md:text-3xl">{module.title}</h1>
          {module.description && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-indigo-100/90">
              {module.description}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-8 px-6 -mt-6">
        {/* Info Grid */}
        <section className="grid gap-4 rounded-xl border border-slate-200/60 bg-white p-6 shadow-lg shadow-slate-200/50 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Materia</p>
              <p className="mt-0.5 text-sm font-medium text-slate-800">{module.subject || module.category}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Nivel</p>
              <p className="mt-0.5 text-sm font-medium text-slate-800">{levelLabel}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Duración</p>
              <p className="mt-0.5 text-sm font-medium text-slate-800">{module.durationMinutes} minutos</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Visibilidad</p>
              <p className="mt-0.5 text-sm font-medium text-slate-800">{visibilityLabel}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Autor</p>
              <p className="mt-0.5 text-sm font-medium text-slate-800">{module.authorName ?? module.createdBy}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Última actualización</p>
              <p className="mt-0.5 text-sm font-medium text-slate-800">
                {new Date(module.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-slate-200/60" />

        {/* Theory Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900">Teoría</h2>
            <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-indigo-100 px-2 text-xs font-bold text-indigo-700">
              {theoryItems.length}
            </span>
          </div>
          {theoryItems.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 px-6 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Este módulo todavía no tiene elementos de teoría.
              </p>
            </div>
          ) : (
            <div className="grid gap-3">
              {theoryItems.map((item) => (
                <TheoryItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>

        {/* Divider */}
        <div className="border-t border-slate-200/60" />

        {/* Quizzes Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900">Quizzes</h2>
            <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-purple-100 px-2 text-xs font-bold text-purple-700">
              {quizzes.length}
            </span>
          </div>
          {quizzes.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 px-6 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Este módulo todavía no tiene quizzes configurados.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {quizzes.map((quiz) => {
                const attempts = attemptsByQuiz[quiz.id] ?? [];
                const lastAttempt = attempts[attempts.length - 1];
                const bestScore = attempts.reduce<number | null>((best, a) => {
                  if (a.score == null) return best;
                  return best == null ? a.score : Math.max(best, a.score);
                }, null);
                const hasCompleted = attempts.some((a) => a.status === "completed" || a.status === "submitted");

                return (
                  <article
                    key={quiz.id}
                    className="group rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm transition-shadow hover:shadow-md hover:shadow-slate-200/50 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-slate-800">{quiz.title}</h3>
                        <p className="mt-0.5 text-xs font-medium text-slate-500">
                          Tipo: {QUIZ_TYPE_LABELS[quiz.type]}
                        </p>
                      </div>
                      {/* Progress badge */}
                      {attempts.length > 0 ? (
                        <div className="shrink-0 text-right">
                          {hasCompleted ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/60">
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              Completado
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200/60">
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                              </span>
                              En progreso
                            </span>
                          )}
                        </div>
                      ) : null}
                    </div>

                    {/* Attempt history */}
                    {attempts.length > 0 ? (
                      <div className="rounded-lg border border-slate-100 bg-gradient-to-br from-slate-50 to-slate-50/50 p-4 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                            Tus intentos
                          </p>
                          <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-[10px] font-bold text-slate-600">
                            {attempts.length}
                          </span>
                        </div>
                        {bestScore != null && (
                          <div className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.996.178-1.768-.767-1.768-1.768 0-1.003.772-1.968 1.768-1.768A4.51 4.51 0 0 1 9 2.25a4.51 4.51 0 0 1 3.75-1.5 4.51 4.51 0 0 1 3.75 1.5 4.51 4.51 0 0 1 3.75-1.5c.996 0 1.768.765 1.768 1.768s-.772 1.946-1.768 1.768" />
                            </svg>
                            <p className="text-xs text-slate-600">
                              Mejor puntaje:{" "}
                              <span className="font-bold text-emerald-700">
                                {bestScore}
                                {lastAttempt?.maxScore != null ? ` / ${lastAttempt.maxScore}` : ""}
                              </span>
                            </p>
                          </div>
                        )}
                        <div className="mt-1 space-y-1.5">
                          {attempts.slice(-3).map((attempt, i) => (
                            <div key={attempt.id} className="flex items-center gap-2 rounded-md bg-white/70 px-2.5 py-1.5 text-xs text-slate-500 ring-1 ring-slate-100">
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-slate-100 font-mono text-[10px] font-bold text-slate-500">
                                {attempts.length - (attempts.slice(-3).length - 1 - i)}
                              </span>
                              {attempt.score != null ? (
                                <span>
                                  Puntaje: <strong className="text-slate-700">{attempt.score}{attempt.maxScore != null ? `/${attempt.maxScore}` : ""}</strong>
                                </span>
                              ) : (
                                <span className="italic text-slate-400">Sin puntaje registrado</span>
                              )}
                              {(attempt.completedAt ?? attempt.createdAt) ? (
                                <span className="ml-auto text-slate-400">
                                  {new Date(attempt.completedAt ?? attempt.createdAt ?? "").toLocaleDateString()}
                                </span>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-indigo-200 transition-all hover:from-indigo-500 hover:to-indigo-600 hover:shadow-md hover:shadow-indigo-200/50 active:scale-[0.98] disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none"
                        onClick={() => handleStartAttempt(quiz.id)}
                        disabled={startStatus[quiz.id]?.status === "loading"}
                      >
                        {startStatus[quiz.id]?.status === "loading" ? (
                          <>
                            <svg className="h-3.5 w-3.5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Iniciando...
                          </>
                        ) : attempts.length > 0 ? (
                          <>
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
                            </svg>
                            Reintentar
                          </>
                        ) : (
                          <>
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                            Empezar
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                        onClick={() =>
                          setPreviewOpen((prev) => ({ ...prev, [quiz.id]: !prev[quiz.id] }))
                        }
                      >
                        <svg className={`h-3.5 w-3.5 transition-transform ${previewOpen[quiz.id] ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        {previewOpen[quiz.id] ? "Ocultar vista previa" : "Vista previa"}
                      </button>
                      {startStatus[quiz.id]?.status === "error" ? (
                        <span className="inline-flex items-center gap-1 text-xs text-red-600">
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                          </svg>
                          {startStatus[quiz.id]?.message ?? "No se pudo iniciar el quiz."}
                        </span>
                      ) : null}
                    </div>
                    {previewOpen[quiz.id] ? (
                      <div className="rounded-lg border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-slate-50 p-4 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                          <p className="font-semibold text-indigo-700">
                            Vista previa (semilla fija, no registra intento)
                          </p>
                        </div>
                        <ul className="mt-3 space-y-1.5 pl-1">
                          {buildPreviewItems(quiz).map((item) => (
                            <li key={item.id} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                              <span>{item.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
