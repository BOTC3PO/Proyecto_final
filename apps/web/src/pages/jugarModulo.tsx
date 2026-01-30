import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiGet, apiPost } from "../lib/api";
import type { Module, ModuleQuiz } from "../domain/module/module.types";
import type { Book } from "../domain/book/book.types";
import BookReader from "../bookEditor/BookReader";

type BookResourceState =
  | { status: "loading" }
  | { status: "ready"; record: { id: string; title: string; book: Book } }
  | { status: "error"; message: string };

const QUIZ_TYPE_LABELS: Record<ModuleQuiz["type"], string> = {
  practica: "Práctica",
  evaluacion: "Evaluación",
  competencia: "Competencia",
};

export default function JugarModulo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [module, setModule] = useState<Module | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [progressStatus, setProgressStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [progressMessage, setProgressMessage] = useState("");
  const [unlockedCount, setUnlockedCount] = useState<number | null>(null);
  const progressStartedRef = useRef(false);
  const [bookStates, setBookStates] = useState<Record<string, BookResourceState>>({});
  const [selectedLevel, setSelectedLevel] = useState("");
  const [startStatus, setStartStatus] = useState<
    Record<string, { status: "idle" | "loading" | "error"; message?: string }>
  >({});

  useEffect(() => {
    if (!id) return;
    let active = true;
    setStatus("loading");
    apiGet<Module>(`/api/modulos/${id}`)
      .then((data) => {
        if (!active) return;
        setModule(data);
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setErrorMessage(error instanceof Error ? error.message : "No se pudo cargar el módulo.");
        setStatus("error");
      });
    return () => {
      active = false;
    };
  }, [id]);

  useEffect(() => {
    if (!module) return;
    const availableLevels = module.levels?.map((level) => level.level) ?? [];
    const fallbackLevel = module.level ?? availableLevels[0] ?? "";
    setSelectedLevel((prev) => (prev && availableLevels.includes(prev) ? prev : fallbackLevel));
  }, [module]);

  useEffect(() => {
    if (!module || progressStartedRef.current || !user?.id) return;
    progressStartedRef.current = true;
    const payload = {
      usuarioId: user.id,
      moduloId: module.id,
      status: "en_progreso",
      updatedAt: new Date().toISOString()
    };
    apiPost("/api/progreso", payload).catch(() => {
      progressStartedRef.current = false;
    });
  }, [module, user?.id]);

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
        quizId,
        userId: user.id
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

  const activeLevelData = useMemo(
    () => module?.levels?.find((level) => level.level === selectedLevel) ?? module?.levels?.[0],
    [module, selectedLevel],
  );
  const levelResources = activeLevelData?.resources ?? module?.resources ?? [];
  const levelQuizzes = activeLevelData?.quizzes ?? [];

  useEffect(() => {
    if (!levelResources.length) return;
    const bookResources = levelResources.filter((resource) => resource.type === "book");
    if (bookResources.length === 0) return;
    setBookStates((prev) => {
      const next = { ...prev };
      bookResources.forEach((resource) => {
        if (!next[resource.id]) {
          next[resource.id] = { status: "loading" };
        }
      });
      return next;
    });
    bookResources.forEach((resource) => {
      apiGet<{ id: string; title: string; book: Book }>(`/api/libros/${resource.id}`)
        .then((record) => {
          setBookStates((prev) => ({
            ...prev,
            [resource.id]: { status: "ready", record }
          }));
        })
        .catch(() => {
          setBookStates((prev) => ({
            ...prev,
            [resource.id]: {
              status: "error",
              message: "No se encontró el libro asociado."
            }
          }));
        });
    });
  }, [levelResources]);

  const buildTextDownloadUrl = (content: string, mimeType: string) =>
    `data:${mimeType};charset=utf-8,${encodeURIComponent(content)}`;

  const formatJsonContent = (content?: string) => {
    if (!content) return null;
    try {
      return JSON.stringify(JSON.parse(content), null, 2);
    } catch (error) {
      return content;
    }
  };

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Cargando módulo...</p>
      </main>
    );
  }

  if (status === "error" || !module) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-700">No se pudo cargar el módulo.</p>
          <p className="mt-2 text-sm text-gray-500">{errorMessage}</p>
          <Link className="mt-4 inline-block text-blue-600 hover:underline" to="/menualumno">
            Volver al menú
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <header className="flex flex-col gap-2">
          <p className="text-sm text-gray-500">{module.subject} · {module.category}</p>
          <h1 className="text-3xl font-semibold">{module.title}</h1>
          <p className="text-gray-600">{module.description}</p>
          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              Nivel:
              {module.levels && module.levels.length > 0 ? (
                <select
                  className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs"
                  value={selectedLevel}
                  onChange={(event) => setSelectedLevel(event.target.value)}
                >
                  {module.levels.map((level) => (
                    <option key={level.level} value={level.level}>
                      {level.level}
                    </option>
                  ))}
                </select>
              ) : (
                <span className="font-medium">{module.level}</span>
              )}
            </span>
            <span>Duración: {module.durationMinutes} min</span>
            <span>Visibilidad: {module.visibility}</span>
          </div>
        </header>

        <section className="bg-white rounded-xl shadow p-6 space-y-3">
          <h2 className="text-lg font-semibold">Teoría</h2>
          <p className="text-sm text-gray-700">
            {module.description || "Este módulo todavía no tiene teoría cargada."}
          </p>
        </section>

        <section className="bg-white rounded-xl shadow p-6 space-y-3">
          <h2 className="text-lg font-semibold">Quizzes</h2>
          {levelQuizzes.length > 0 ? (
            <ul className="space-y-2 text-sm text-gray-700">
              {levelQuizzes.map((quiz) => (
                <li key={quiz.id} className="rounded-md border border-gray-200 p-3 space-y-3">
                  <div>
                    <p className="font-medium">{quiz.title}</p>
                    <p className="text-xs text-gray-500">
                      Tipo: {QUIZ_TYPE_LABELS[quiz.type]} · Visibilidad:{" "}
                      {quiz.visibility === "publico" ? "Público" : "Escuela específica"}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white disabled:bg-slate-300"
                      onClick={() => handleStartAttempt(quiz.id)}
                      disabled={startStatus[quiz.id]?.status === "loading"}
                    >
                      {startStatus[quiz.id]?.status === "loading" ? "Iniciando..." : "Empezar"}
                    </button>
                    {startStatus[quiz.id]?.status === "error" ? (
                      <span className="text-xs text-red-600">
                        {startStatus[quiz.id]?.message ?? "No se pudo iniciar el quiz."}
                      </span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No hay cuestionarios definidos para este nivel.</p>
          )}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="rounded-md bg-green-600 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:bg-gray-300"
              onClick={async () => {
                if (!user?.id) {
                  setProgressStatus("error");
                  setProgressMessage("Necesitás iniciar sesión para guardar el progreso.");
                  return;
                }
                setProgressStatus("saving");
                setProgressMessage("");
                try {
                  await apiPost("/api/progreso", {
                    usuarioId: user.id,
                    moduloId: module.id,
                    status: "completado",
                    score: 100,
                    attempts: 1,
                    completedAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  });
                  const progress = await apiGet<{ unlocks: Array<{ isLocked: boolean }> }>(
                    `/api/progreso?usuarioId=${user.id}`
                  );
                  const newlyUnlocked = progress.unlocks.filter((unlock) => !unlock.isLocked).length;
                  setUnlockedCount(newlyUnlocked);
                  setProgressStatus("saved");
                  setProgressMessage("Progreso guardado. ¡Módulo completado!");
                } catch (error) {
                  setProgressStatus("error");
                  setProgressMessage(
                    error instanceof Error ? error.message : "No se pudo guardar el progreso."
                  );
                }
              }}
              disabled={progressStatus === "saving"}
            >
              {progressStatus === "saving" ? "Guardando..." : "Marcar como completado"}
            </button>
            {progressMessage ? (
              <span
                className={`text-sm ${
                  progressStatus === "error" ? "text-red-600" : "text-green-600"
                }`}
              >
                {progressMessage}
              </span>
            ) : null}
            {progressStatus === "saved" && unlockedCount !== null ? (
              <span className="text-sm text-gray-600">
                Módulos desbloqueados: {unlockedCount}.
              </span>
            ) : null}
            {progressStatus === "saved" ? (
              <Link className="text-sm text-blue-600 hover:underline" to="/menualumno">
                Volver al menú para ver los desbloqueos
              </Link>
            ) : null}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6 space-y-3">
          <h2 className="text-lg font-semibold">Recursos</h2>
          {levelResources.length > 0 ? (
            <ul className="space-y-2 text-sm text-gray-700">
              {levelResources.map((resource, index) => {
                const bookState = bookStates[resource.id];
                return (
                  <li key={`${resource.type}-${index}`}>
                    {resource.type === "book" && (
                      <div className="space-y-2">
                        <span className="block text-sm font-medium">
                          Libro asociado: {resource.title ?? resource.id}
                        </span>
                        {bookState?.status === "loading" ? (
                          <p className="text-xs text-gray-500">Cargando libro...</p>
                        ) : bookState?.status === "error" ? (
                          <p className="text-xs text-red-600">{bookState.message}</p>
                        ) : bookState?.status === "ready" ? (
                          <BookReader book={bookState.record.book} />
                        ) : (
                          <p className="text-xs text-gray-500">Libro no disponible.</p>
                        )}
                      </div>
                    )}
                    {resource.type === "pdf" && (
                      <a className="text-blue-600 hover:underline" href={resource.url} target="_blank" rel="noreferrer">
                        {resource.title}
                      </a>
                    )}
                    {resource.type === "link" && (
                      <a className="text-blue-600 hover:underline" href={resource.url} target="_blank" rel="noreferrer">
                        {resource.title}
                      </a>
                    )}
                    {resource.type === "doc" && (
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium">{resource.title}</span>
                        <a
                          className="text-blue-600 hover:underline text-sm"
                          href={resource.url}
                          download={resource.fileName ?? resource.title}
                        >
                          Descargar documento
                        </a>
                      </div>
                    )}
                    {resource.type === "txt" && (
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-medium">{resource.title}</span>
                          {resource.url ? (
                            <a
                              className="text-blue-600 hover:underline text-sm"
                              href={resource.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Abrir archivo
                            </a>
                          ) : resource.content ? (
                            <a
                              className="text-blue-600 hover:underline text-sm"
                              href={buildTextDownloadUrl(resource.content, "text/plain")}
                              download={resource.fileName ?? `${resource.title}.txt`}
                            >
                              Descargar TXT
                            </a>
                          ) : null}
                        </div>
                        {resource.content && (
                          <pre className="rounded-md border border-slate-200 bg-slate-50 p-3 text-xs whitespace-pre-wrap">
                            {resource.content}
                          </pre>
                        )}
                      </div>
                    )}
                    {resource.type === "bookJson" && (
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-medium">{resource.title}</span>
                          {resource.url ? (
                            <a
                              className="text-blue-600 hover:underline text-sm"
                              href={resource.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Abrir JSON
                            </a>
                          ) : resource.content ? (
                            <a
                              className="text-blue-600 hover:underline text-sm"
                              href={buildTextDownloadUrl(resource.content, "application/json")}
                              download={resource.fileName ?? `${resource.title}.json`}
                            >
                              Descargar JSON
                            </a>
                          ) : null}
                        </div>
                        {resource.content && (
                          <pre className="rounded-md border border-slate-200 bg-slate-50 p-3 text-xs whitespace-pre-wrap">
                            {formatJsonContent(resource.content)}
                          </pre>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No hay recursos adicionales para este módulo.</p>
          )}
        </section>
      </div>
    </main>
  );
}
