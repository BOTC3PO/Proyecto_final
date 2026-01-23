import { useEffect, useMemo, useState } from "react";

type QuizKind = "practica" | "evaluacion" | "competencia";
type CreationMode = "manual" | "automatico";
type Visibility = "publico" | "privado" | "solo-aula";
type GenerationType = "banco" | "ia" | "plantilla" | "mixto";

type QuizItem = {
  id: string;
  titulo: string;
  escuela: string;
  tipo: QuizKind;
  modoCreacion: CreationMode;
  visibilidad: Visibility;
  tipoGeneracion: GenerationType;
  preguntas: number;
  duracionMin: number;
  ultimaActualizacion: string;
};

const mockQuizzes: QuizItem[] = [
  {
    id: "quiz-001",
    titulo: "Álgebra lineal - práctica guiada",
    escuela: "Ingeniería",
    tipo: "practica",
    modoCreacion: "manual",
    visibilidad: "solo-aula",
    tipoGeneracion: "plantilla",
    preguntas: 12,
    duracionMin: 25,
    ultimaActualizacion: "2024-05-04"
  },
  {
    id: "quiz-002",
    titulo: "Evaluación parcial - historia",
    escuela: "Humanidades",
    tipo: "evaluacion",
    modoCreacion: "automatico",
    visibilidad: "privado",
    tipoGeneracion: "ia",
    preguntas: 20,
    duracionMin: 40,
    ultimaActualizacion: "2024-05-10"
  },
  {
    id: "quiz-003",
    titulo: "Competencia de lectura crítica",
    escuela: "Humanidades",
    tipo: "competencia",
    modoCreacion: "manual",
    visibilidad: "publico",
    tipoGeneracion: "banco",
    preguntas: 15,
    duracionMin: 30,
    ultimaActualizacion: "2024-04-18"
  },
  {
    id: "quiz-004",
    titulo: "Práctica de laboratorio de química",
    escuela: "Ciencias",
    tipo: "practica",
    modoCreacion: "automatico",
    visibilidad: "solo-aula",
    tipoGeneracion: "mixto",
    preguntas: 10,
    duracionMin: 20,
    ultimaActualizacion: "2024-05-02"
  },
  {
    id: "quiz-005",
    titulo: "Evaluación diagnóstica de economía",
    escuela: "Negocios",
    tipo: "evaluacion",
    modoCreacion: "manual",
    visibilidad: "privado",
    tipoGeneracion: "plantilla",
    preguntas: 18,
    duracionMin: 35,
    ultimaActualizacion: "2024-03-27"
  },
  {
    id: "quiz-006",
    titulo: "Competencia intercolegial - matemáticas",
    escuela: "Ingeniería",
    tipo: "competencia",
    modoCreacion: "automatico",
    visibilidad: "publico",
    tipoGeneracion: "ia",
    preguntas: 25,
    duracionMin: 45,
    ultimaActualizacion: "2024-05-12"
  }
];

const fetchQuizzes = async () => {
  return new Promise<QuizItem[]>((resolve) => {
    setTimeout(() => resolve(mockQuizzes), 400);
  });
};

const labelMap = {
  tipo: {
    practica: "Práctica",
    evaluacion: "Evaluación",
    competencia: "Competencia"
  },
  modoCreacion: {
    manual: "Manual",
    automatico: "Automático"
  },
  visibilidad: {
    publico: "Público",
    privado: "Privado",
    "solo-aula": "Solo aula"
  },
  tipoGeneracion: {
    banco: "Banco de preguntas",
    ia: "Generación con IA",
    plantilla: "Plantilla",
    mixto: "Mixto"
  }
};

export default function ProfesorEvaluaciones() {
  const [quizzes, setQuizzes] = useState<QuizItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSchool, setSelectedSchool] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCreation, setSelectedCreation] = useState("all");
  const [selectedVisibility, setSelectedVisibility] = useState("all");
  const [selectedGeneration, setSelectedGeneration] = useState("all");

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setIsLoading(true);
      const items = await fetchQuizzes();
      if (isMounted) {
        setQuizzes(items);
        setIsLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const schools = useMemo(() => {
    return ["all", ...Array.from(new Set(quizzes.map((quiz) => quiz.escuela)))];
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
    selectedGeneration
  ]);

  return (
    <main className="p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Evaluaciones</h1>
        <p className="text-gray-600">
          Explora y filtra tus cuestionarios para prácticas, evaluaciones y competencias.
        </p>
      </header>

      <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
          <p className="text-sm text-gray-500">
            Ajusta los criterios para encontrar el cuestionario indicado.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <label className="grid gap-2 text-sm font-medium text-gray-700">
            Escuela
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
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
          <label className="grid gap-2 text-sm font-medium text-gray-700">
            Tipo
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
            >
              <option value="all">Todos</option>
              <option value="practica">Práctica</option>
              <option value="evaluacion">Evaluación</option>
              <option value="competencia">Competencia</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-gray-700">
            Modo de creación
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
              value={selectedCreation}
              onChange={(event) => setSelectedCreation(event.target.value)}
            >
              <option value="all">Todos</option>
              <option value="manual">Manual</option>
              <option value="automatico">Automático</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-gray-700">
            Visibilidad
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
              value={selectedVisibility}
              onChange={(event) => setSelectedVisibility(event.target.value)}
            >
              <option value="all">Todas</option>
              <option value="publico">Público</option>
              <option value="privado">Privado</option>
              <option value="solo-aula">Solo aula</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-gray-700">
            Tipo de generación
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
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
          <h2 className="text-lg font-semibold text-gray-900">Cuestionarios</h2>
          <span className="text-sm text-gray-500">
            {filteredQuizzes.length} resultados
          </span>
        </div>

        {isLoading ? (
          <div className="rounded-lg border border-dashed border-gray-200 bg-white p-6 text-sm text-gray-500">
            Cargando cuestionarios...
          </div>
        ) : filteredQuizzes.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 bg-white p-6 text-sm text-gray-500">
            No se encontraron cuestionarios con los filtros seleccionados.
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredQuizzes.map((quiz) => (
              <article
                key={quiz.id}
                className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-gray-900">{quiz.titulo}</h3>
                    <p className="text-sm text-gray-500">{quiz.escuela}</p>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {labelMap.tipo[quiz.tipo]}
                  </span>
                </div>
                <div className="grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
                  <div>
                    <p className="font-medium text-gray-700">Creación</p>
                    <p>{labelMap.modoCreacion[quiz.modoCreacion]}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Visibilidad</p>
                    <p>{labelMap.visibilidad[quiz.visibilidad]}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Generación</p>
                    <p>{labelMap.tipoGeneracion[quiz.tipoGeneracion]}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Contenido</p>
                    <p>
                      {quiz.preguntas} preguntas · {quiz.duracionMin} min
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Última actualización: {quiz.ultimaActualizacion}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
