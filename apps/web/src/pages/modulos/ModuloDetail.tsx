import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiGet } from "../../lib/api";
import type {
  Module,
  ModuleQuiz,
  ModuleTheoryBlock,
  ModuleVisibility,
} from "../../domain/module/module.types";

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

export default function ModuloDetail() {
  const { id } = useParams();
  const [module, setModule] = useState<ModuloDetailResponse | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      <main className="p-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600">
          Cargando módulo...
        </div>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="p-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-sm text-red-700">
          {errorMessage ?? "Ocurrió un error inesperado."}
        </div>
      </main>
    );
  }

  if (!module) {
    return (
      <main className="p-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600">
          No se encontró información del módulo.
        </div>
      </main>
    );
  }

  const visibilityLabel = module.visibility
    ? VISIBILITY_LABELS[module.visibility]
    : "Sin definir";
  const levelLabel = module.level ?? module.difficultyLevel ?? "Sin nivel";

  return (
    <main className="p-6 space-y-6">
      <header className="space-y-2">
        <Link to="/modulos" className="text-sm font-semibold text-indigo-600 hover:underline">
          ← Volver al listado
        </Link>
        <h1 className="text-2xl font-semibold text-slate-900">{module.title}</h1>
        <p className="text-sm text-slate-600">{module.description}</p>
      </header>

      <section className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold text-slate-700">Materia</h2>
          <p className="text-sm text-slate-600">{module.subject || module.category}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-700">Nivel</h2>
          <p className="text-sm text-slate-600">{levelLabel}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-700">Duración</h2>
          <p className="text-sm text-slate-600">{module.durationMinutes} minutos</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-700">Visibilidad</h2>
          <p className="text-sm text-slate-600">{visibilityLabel}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-700">Autor</h2>
          <p className="text-sm text-slate-600">{module.authorName ?? module.createdBy}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-700">Última actualización</h2>
          <p className="text-sm text-slate-600">
            {new Date(module.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Teoría</h2>
        {theoryItems.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
            Este módulo todavía no tiene elementos de teoría.
          </div>
        ) : (
          <div className="grid gap-3">
            {theoryItems.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-slate-800">{item.title}</h3>
                  <p className="text-xs font-medium text-slate-500">Tipo: {item.type}</p>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Quizzes</h2>
        {quizzes.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
            Este módulo todavía no tiene quizzes configurados.
          </div>
        ) : (
          <div className="grid gap-3">
            {quizzes.map((quiz) => (
              <article
                key={quiz.id}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-800">{quiz.title}</h3>
                <p className="text-xs font-medium text-slate-500">
                  Tipo: {QUIZ_TYPE_LABELS[quiz.type]}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
