import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiGet, apiPost } from "../lib/api";
import type { Module } from "../domain/module/module.types";
import type { Book } from "../domain/book/book.types";
import BookReader from "../bookEditor/BookReader";
import { GENERADORES_BASIC } from "../generador/basic";
import type { QuizInstance } from "../generador/basic";
import { GENERATORS_BY_TEMA } from "../generador/matematicas";
import type { Exercise as MathExercise, GeneradorConfig } from "../generador/matematicas/generic";
import { GENERADORES_QUIMICA } from "../generador/quimica/indexQuimica";
import type { Exercise as QuimicaExercise } from "../generador/quimica/generico";
import { GENERADORES_ECONOMIA_POR_CLAVE } from "../generador/economia/indexEconomia";
import type { Exercise as EconomiaExercise } from "../generador/economia/generico";
import { GENERADORES_FISICA_POR_ID } from "../generador/fisica/indexFisica";
import VisualizerRenderer from "../visualizadores/graficos/VisualizerRenderer";
import type { VisualSpec } from "../visualizadores/types";

type GeneratedQuiz =
  | { kind: "math"; exercise: MathExercise }
  | { kind: "quimica"; exercise: QuimicaExercise }
  | { kind: "economia"; exercise: EconomiaExercise }
  | { kind: "basic"; exercise: QuizInstance }
  | { kind: "unsupported"; message: string };

type BookResourceState =
  | { status: "loading" }
  | { status: "ready"; record: { id: string; title: string; book: Book } }
  | { status: "error"; message: string };

const buildGeneratorInfo = (id: string) => {
  const raw = id.trim();
  const hasPrefix = raw.includes(":");
  if (!hasPrefix) {
    return { materia: "matematicas", key: raw };
  }
  const [materia, ...rest] = raw.split(":");
  return { materia: materia.trim(), key: rest.join(":").trim() };
};

const renderExercise = (quiz: GeneratedQuiz) => {
  if (quiz.kind === "unsupported") {
    return <p className="text-sm text-gray-500">{quiz.message}</p>;
  }

  if (quiz.kind === "basic") {
    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">{quiz.exercise.metadata.title}</p>
        <ol className="space-y-2 list-decimal list-inside">
          {quiz.exercise.questions.map((question) => (
            <li key={question.id} className="text-sm text-gray-700">
              {question.prompt}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  const exercise = quiz.exercise;

  const renderVisual = (visualSpec?: VisualSpec) => {
    if (!visualSpec) return null;
    const title =
      "title" in visualSpec && visualSpec.title
        ? visualSpec.title
        : "Visualización";
    return (
      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
        <div className="mt-3">
          <VisualizerRenderer spec={visualSpec} />
        </div>
      </div>
    );
  };

  if (exercise.tipo === "numeric") {
    return (
      <div className="space-y-2">
        <p className="text-sm text-gray-700">{exercise.enunciado}</p>
        <p className="text-xs text-gray-500">
          Resultado esperado: <span className="font-medium">{String(exercise.resultado)}</span>
        </p>
        {"visualSpec" in exercise ? renderVisual(exercise.visualSpec) : null}
      </div>
    );
  }

  if (exercise.tipo === "completar") {
    return (
      <div className="space-y-2">
        <p className="text-sm text-gray-700">{exercise.enunciado}</p>
        <p className="text-xs text-gray-500">
          Respuesta: <span className="font-medium">{exercise.respuestaCorrecta}</span>
        </p>
        {"visualSpec" in exercise ? renderVisual(exercise.visualSpec) : null}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-700">{exercise.enunciado}</p>
      <ul className="list-disc list-inside text-sm text-gray-600">
        {exercise.opciones?.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
      {"visualSpec" in exercise ? renderVisual(exercise.visualSpec) : null}
    </div>
  );
};

export default function JugarModulo() {
  const { id } = useParams();
  const [module, setModule] = useState<Module | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [progressStatus, setProgressStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [progressMessage, setProgressMessage] = useState("");
  const [unlockedCount, setUnlockedCount] = useState<number | null>(null);
  const progressStartedRef = useRef(false);
  const [bookStates, setBookStates] = useState<Record<string, BookResourceState>>({});

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
    if (!module || progressStartedRef.current) return;
    progressStartedRef.current = true;
    const payload = {
      usuarioId: "demo-alumno",
      moduloId: module.id,
      status: "en_progreso",
      updatedAt: new Date().toISOString()
    };
    apiPost("/api/progreso", payload).catch(() => {
      progressStartedRef.current = false;
    });
  }, [module]);

  useEffect(() => {
    if (!module?.resources) return;
    const bookResources = module.resources.filter((resource) => resource.type === "book");
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
  }, [module]);

  const generatedQuiz = useMemo<GeneratedQuiz | null>(() => {
    if (!module?.generatorRef) return null;

    const { materia, key } = buildGeneratorInfo(module.generatorRef.id);
    const difficulty = module.generatorRef.config?.dificultad ?? module.generatorRef.config?.difficulty;

    if (materia === "matematicas") {
      const tema = Number(key);
      const generador = Number.isNaN(tema) ? undefined : GENERATORS_BY_TEMA[tema];
      if (!generador) {
        return { kind: "unsupported", message: "No hay generador configurado para este tema." };
      }
      const exercise = generador(
        difficulty as MathExercise["dificultad"] | undefined,
        module.generatorRef.config as GeneradorConfig | undefined
      );
      return { kind: "math", exercise };
    }

    if (materia === "quimica") {
      const tema = Number(key);
      const generador = Number.isNaN(tema) ? undefined : GENERADORES_QUIMICA[tema];
      if (!generador) {
        return { kind: "unsupported", message: "No hay generador de química con ese ID." };
      }
      const exercise = generador(difficulty as QuimicaExercise["dificultad"] | undefined);
      return { kind: "quimica", exercise };
    }

    if (materia === "economia") {
      const generador = GENERADORES_ECONOMIA_POR_CLAVE[key];
      if (!generador) {
        return { kind: "unsupported", message: "No hay generador de economía con esa clave." };
      }
      const exercise = generador(difficulty as EconomiaExercise["dificultad"] | undefined);
      return { kind: "economia", exercise };
    }

    if (materia === "basic") {
      const generador = GENERADORES_BASIC[key];
      if (!generador) {
        return { kind: "unsupported", message: "No hay generador básico con esa clave." };
      }
      const exercise = generador.generate(module.generatorRef.config as Record<string, unknown> | undefined);
      return { kind: "basic", exercise };
    }

    if (materia === "fisica") {
      const generador = GENERADORES_FISICA_POR_ID[key];
      if (generador) {
        return { kind: "unsupported", message: `Generador físico ${generador.id} listo. Falta el motor de cálculo.` };
      }
    }

    return { kind: "unsupported", message: "No se pudo resolver el generador configurado." };
  }, [module]);

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
            <span>Nivel: {module.level}</span>
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
          {generatedQuiz ? (
            renderExercise(generatedQuiz)
          ) : (
            <p className="text-sm text-gray-500">No hay generador configurado para este módulo.</p>
          )}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="rounded-md bg-green-600 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:bg-gray-300"
              onClick={async () => {
                setProgressStatus("saving");
                setProgressMessage("");
                try {
                  await apiPost("/api/progreso", {
                    usuarioId: "demo-alumno",
                    moduloId: module.id,
                    status: "completado",
                    score: 100,
                    attempts: 1,
                    completedAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  });
                  const progress = await apiGet<{ unlocks: Array<{ isLocked: boolean }> }>(
                    "/api/progreso?usuarioId=demo-alumno"
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
          {module.resources && module.resources.length > 0 ? (
            <ul className="space-y-2 text-sm text-gray-700">
              {module.resources.map((resource, index) => (
                <li key={`${resource.type}-${index}`}>
                  {resource.type === "book" && (
                    <div className="space-y-2">
                      <span className="block text-sm font-medium">
                        Libro asociado: {resource.title ?? resource.id}
                      </span>
                      {bookStates[resource.id]?.status === "loading" ? (
                        <p className="text-xs text-gray-500">Cargando libro...</p>
                      ) : bookStates[resource.id]?.status === "error" ? (
                        <p className="text-xs text-red-600">{bookStates[resource.id].message}</p>
                      ) : bookStates[resource.id]?.status === "ready" ? (
                        <BookReader book={bookStates[resource.id].record.book} />
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
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No hay recursos adicionales para este módulo.</p>
          )}
        </section>
      </div>
    </main>
  );
}
