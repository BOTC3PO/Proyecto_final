import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../lib/api";

type BancoItem = {
  quizId: string;
  title: string;
  materia?: string;
  tipo: string;
  origen: "admin" | "escuela";
  questionCount: number;
  generatorId?: string;
  previewQuestions: { prompt: string; questionType: string }[];
};

type BancoResponse = {
  items: BancoItem[];
  total: number;
};

type CreationMode = "manual" | "automatico";
type Visibility = "publico" | "privado" | "solo-aula";
type GenerationType = "banco" | "ia" | "plantilla" | "mixto";

type QuizItem = {
  id: string;
  titulo: string;
  escuela: string;
  tipo: string;
  modoCreacion: CreationMode;
  visibilidad: Visibility;
  tipoGeneracion: GenerationType;
  preguntas: number;
  duracionMin: number;
  ultimaActualizacion: string;
};

const QUIZ_TIPOS = new Set<string>(["practica", "evaluacion", "competencia", "formal"]);

const inferModoCreacion = (item: BancoItem): CreationMode =>
  item.previewQuestions.length > 0 ? "manual" : "automatico";

const inferVisibilidad = (origen: BancoItem["origen"]): Visibility =>
  origen === "escuela" ? "solo-aula" : "publico";

const inferTipoGeneracion = (item: BancoItem): GenerationType => {
  if (item.generatorId) return "ia";
  if (item.previewQuestions.length > 0) return "banco";
  return "mixto";
};

const normalizeItem = (item: BancoItem): QuizItem => ({
  id: item.quizId,
  titulo: item.title || "(sin título)",
  escuela: item.materia || "—",
  tipo: QUIZ_TIPOS.has(item.tipo) ? item.tipo : "practica",
  modoCreacion: inferModoCreacion(item),
  visibilidad: inferVisibilidad(item.origen),
  tipoGeneracion: inferTipoGeneracion(item),
  preguntas: item.questionCount,
  duracionMin: 0,
  ultimaActualizacion: new Date().toISOString().slice(0, 10),
});

const labelMap = {
  tipo: {
    practica: "Práctica",
    evaluacion: "Evaluación",
    competencia: "Competencia",
    formal: "Formal",
  },
  modoCreacion: {
    manual: "Manual",
    automatico: "Automático",
  },
  visibilidad: {
    publico: "Público",
    privado: "Privado",
    "solo-aula": "Solo aula",
  },
  tipoGeneracion: {
    banco: "Banco de preguntas",
    ia: "Generación con IA",
    plantilla: "Plantilla",
    mixto: "Mixto",
  },
};

export default function ProfesorEvaluaciones() {
  const [quizzes, setQuizzes] = useState<QuizItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSchool, setSelectedSchool] = useState("all");
  // FIX-TEST4-PROF-03 — antes el default era "all" y la página
  // mostraba prácticas, evaluaciones y competencias mezcladas.
  // El tester esperaba que esta página esté reservada a
  // evaluaciones formales. Cambiamos el default a "evaluacion"
  // y la copy del header.
  const [selectedType, setSelectedType] = useState("evaluacion");
  const [selectedCreation, setSelectedCreation] = useState("all");
  const [selectedVisibility, setSelectedVisibility] = useState("all");
  const [selectedGeneration, setSelectedGeneration] = useState("all");

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);
    apiGet<BancoResponse>("/api/quizzes/banco?origen=todos&limit=100")
      .then((data) => {
        if (!isMounted) return;
        setQuizzes((data.items ?? []).map(normalizeItem));
      })
      .catch((err: Error) => {
        if (!isMounted) return;
        setError(err.message || "No se pudieron cargar los cuestionarios.");
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const schools = useMemo(() => {
    return ["all", ...Array.from(new Set(quizzes.map((quiz) => quiz.escuela).filter((s) => s && s !== "—")))];
  }, [quizzes]);

  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((quiz) => {
      if (selectedSchool !== "all" && quiz.escuela !== selectedSchool) return false;
      if (selectedType !== "all" && quiz.tipo !== selectedType) return false;
      if (selectedCreation !== "all" && quiz.modoCreacion !== selectedCreation) return false;
      if (selectedVisibility !== "all" && quiz.visibilidad !== selectedVisibility) return false;
      if (selectedGeneration !== "all" && quiz.tipoGeneracion !== selectedGeneration) return false;
      return true;
    });
  }, [
    quizzes,
    selectedSchool,
    selectedType,
    selectedCreation,
    selectedVisibility,
    selectedGeneration,
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Evaluaciones</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">
          {/* FIX-TEST4-PROF-03 — esta página está reservada a
              evaluaciones formales. Las prácticas van a
              `/profesor/calificaciones` y las competencias tienen
              su propio panel en el panel principal. */}
          Cuestionarios formales de evaluación. Las prácticas y competencias se gestionan desde el panel principal.
        </p>
      </div>

      <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--c-border)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">Filtros</p>
        </div>
        <div className="p-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <label className="grid gap-2 text-sm font-medium text-[var(--c-text)]">
            Escuela
            <select
              className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              value={selectedSchool}
              onChange={(event) => setSelectedSchool(event.target.value)}
            >
              {schools.map((school) => (
                <option key={school} value={school}>
                  {school === "all" ? "Todas" : school}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-[var(--c-text)]">
            Tipo
            <select
              className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
            >
              {/* FIX-TEST4-PROF-03 — esta página se enfoca en
                  evaluaciones. La opción "Todos" sigue disponible
                  para que el docente pueda ver el resto si lo
                  necesita. */}
              <option value="all">Todos</option>
              <option value="evaluacion">Evaluación</option>
              <option value="formal">Formal</option>
              <option value="practica">Práctica</option>
              <option value="competencia">Competencia</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-[var(--c-text)]">
            Modo de creación
            <select
              className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              value={selectedCreation}
              onChange={(event) => setSelectedCreation(event.target.value)}
            >
              <option value="all">Todos</option>
              <option value="manual">Manual</option>
              <option value="automatico">Automático</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-[var(--c-text)]">
            Visibilidad
            <select
              className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              value={selectedVisibility}
              onChange={(event) => setSelectedVisibility(event.target.value)}
            >
              <option value="all">Todas</option>
              <option value="publico">Público</option>
              <option value="privado">Privado</option>
              <option value="solo-aula">Solo aula</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-[var(--c-text)]">
            Tipo de generación
            <select
              className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              value={selectedGeneration}
              onChange={(event) => setSelectedGeneration(event.target.value)}
            >
              <option value="all">Todos</option>
              <option value="banco">Banco de preguntas</option>
              <option value="ia">Generación con IA</option>
              <option value="plantilla">Plantilla</option>
              <option value="mixto">Mixto</option>
            </select>
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold text-[var(--c-text)]">Cuestionarios</p>
          <span className="text-sm text-[var(--c-muted)]">
            {filteredQuizzes.length} resultados
          </span>
        </div>

        {isLoading ? (
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 rounded-xl animate-pulse bg-[var(--c-border)]" />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">
            {error}
          </div>
        ) : filteredQuizzes.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[var(--c-border)] bg-[var(--c-surface)] p-6 text-sm text-[var(--c-muted)]">
            No se encontraron cuestionarios con los filtros seleccionados.
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredQuizzes.map((quiz) => (
              <article
                key={quiz.id}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-5 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-[var(--c-text)]">{quiz.titulo}</h3>
                    <p className="text-sm text-[var(--c-muted)]">{quiz.escuela}</p>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {(labelMap.tipo as Record<string, string>)[quiz.tipo] ?? quiz.tipo}
                  </span>
                </div>
                <div className="grid gap-3 text-sm text-[var(--c-muted)] sm:grid-cols-2">
                  <div>
                    <p className="font-medium text-[var(--c-text)]">Creación</p>
                    <p>{labelMap.modoCreacion[quiz.modoCreacion]}</p>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--c-text)]">Visibilidad</p>
                    <p>{labelMap.visibilidad[quiz.visibilidad]}</p>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--c-text)]">Generación</p>
                    <p>{labelMap.tipoGeneracion[quiz.tipoGeneracion]}</p>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--c-text)]">Contenido</p>
                    <p>
                      {quiz.preguntas} preguntas
                      {quiz.duracionMin ? ` · ${quiz.duracionMin} min` : ""}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--c-muted)]">
                    Origen: {quiz.visibilidad === "publico" ? "Banco admin" : "Mi escuela"}
                  </p>
                  <Link
                    to={`/profesor/intentos/quizzes/${quiz.id}`}
                    className="text-xs text-[var(--c-primary)] hover:underline"
                  >
                    Ver detalle →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
