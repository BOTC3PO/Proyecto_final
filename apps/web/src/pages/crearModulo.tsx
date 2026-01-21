import { useState } from "react";
import { Link } from "react-router-dom";
import { apiPost } from "../lib/api";
import type { ModuleResource } from "../domain/module/module.types";
import { MVP_GENERATOR_CATEGORIES, MVP_MODULES } from "../mvp/mvpData";

type QuizVisibility = "publico" | "escuela";

type TheoryItem = {
  id: string;
  title: string;
  type: string;
  detail: string;
};

type QuizBlock = {
  id: string;
  title: string;
  type: "practica" | "evaluacion";
  visibility: QuizVisibility;
};

export default function CrearModulo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("Matemáticas");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("Básico");
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [saveMessage, setSaveMessage] = useState("");
  const [visibilidad, setVisibilidad] = useState<"publico" | "privado">("publico");
  const [theoryItems, setTheoryItems] = useState<TheoryItem[]>([]);
  const [newTheoryTitle, setNewTheoryTitle] = useState("");
  const [newTheoryType, setNewTheoryType] = useState("Video");
  const [newTheoryDetail, setNewTheoryDetail] = useState("");
  const [quizBlocks, setQuizBlocks] = useState<QuizBlock[]>([
    {
      id: "quiz-basico",
      title: "Cuestionario principal",
      type: "evaluacion",
      visibility: "escuela",
    },
    {
      id: "quiz-practica",
      title: "Cuestionario de práctica",
      type: "practica",
      visibility: "publico",
    },
  ]);
  const [newQuizTitle, setNewQuizTitle] = useState("");
  const [newQuizType, setNewQuizType] = useState<QuizBlock["type"]>("evaluacion");
  const [newQuizVisibility, setNewQuizVisibility] = useState<QuizVisibility>("publico");
  const [requiredDependencies, setRequiredDependencies] = useState<string[]>([]);
  const [customDependency, setCustomDependency] = useState("");
  const [customDependencies, setCustomDependencies] = useState<string[]>([]);
  const [bookResources, setBookResources] = useState<ModuleResource[]>([]);
  const [bookResourceId, setBookResourceId] = useState("");
  const [bookResourceTitle, setBookResourceTitle] = useState("");

  // En un futuro acá podes traer estas listas desde la API
  const materias = [
    "Matemáticas",
    "Lengua y Literatura",
    "Ciencias Naturales",
    "Ciencias Sociales",
    "Historia",
    "Geografía",
    "Física",
    "Química",
    "Biología",
    "Inglés",
    "Informática / TIC",
    "Educación Física",
    "Arte / Plástica",
    "Música",
    "Formación Ética y Ciudadana",
    "Economía",
    "Otro",
  ];

  const categoriasEjemplo = [
    "Aritmética básica",
    "Álgebra",
    "Geometría",
    "Lectura comprensiva",
    "Comprensión de textos",
    "Ciencias naturales generales",
    "Laboratorio",
    "Historia Argentina",
    "Historia Mundial",
    "Historia · Gráficos y datos históricos",
    "Historia · Líneas de tiempo",
    "Historia · Mapas históricos",
    "Historia · Organigramas y mapas conceptuales",
    "Historia · Recursos multimedia e interactivos",
    "Geografía de Argentina",
    "Geografía del Mundo",
    "Gramática",
    "Ortografía",
    "Lógica",
    "Programación",
    "Resolución de problemas",
    "Otro",
  ];

  const nivelesDificultad = ["Básico", "Intermedio", "Avanzado"];

  const scoringSystems = [
    "Sistema A: 1-10 con aprobación 6",
    "Sistema B: 0-100 con aprobación 60",
    "Sistema C: aprobado / desaprobado",
  ];

  const makeModuleId = (value: string) => {
    const base = value
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    return `${base || "modulo"}-${Date.now()}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaveStatus("saving");
    setSaveMessage("");
    try {
      const dependencies = [...requiredDependencies, ...customDependencies].filter(Boolean);
      const payload = {
        id: makeModuleId(title),
        title,
        description,
        subject,
        category,
        level,
        durationMinutes,
        visibility: visibilidad,
        dependencies,
        generatorRef: null,
        resources: bookResources,
        createdBy: "demo-docente",
        updatedAt: new Date().toISOString()
      };
      await apiPost("/api/modulos", payload);
      setSaveStatus("saved");
      setSaveMessage("Módulo guardado correctamente.");
    } catch (error) {
      setSaveStatus("error");
      setSaveMessage("No se pudo guardar el módulo. Revisá los campos requeridos.");
    }
  };

  const handleAddTheory = () => {
    if (!newTheoryTitle.trim()) return;
    const nextItem: TheoryItem = {
      id: `theory-${Date.now()}`,
      title: newTheoryTitle.trim(),
      type: newTheoryType,
      detail: newTheoryDetail.trim() || "Sin detalle adicional.",
    };
    setTheoryItems((prev) => [...prev, nextItem]);
    setNewTheoryTitle("");
    setNewTheoryDetail("");
    setNewTheoryType("Video");
  };

  const handleRemoveTheory = (id: string) => {
    setTheoryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateTheory = (id: string, field: keyof TheoryItem, value: string) => {
    setTheoryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleAddQuiz = () => {
    if (!newQuizTitle.trim()) return;
    const nextQuiz: QuizBlock = {
      id: `quiz-${Date.now()}`,
      title: newQuizTitle.trim(),
      type: newQuizType,
      visibility: newQuizVisibility,
    };
    setQuizBlocks((prev) => [...prev, nextQuiz]);
    setNewQuizTitle("");
    setNewQuizType("evaluacion");
    setNewQuizVisibility("publico");
  };

  const handleRemoveQuiz = (id: string) => {
    setQuizBlocks((prev) => prev.filter((quiz) => quiz.id !== id));
  };

  const handleUpdateQuiz = (id: string, field: keyof QuizBlock, value: QuizBlock[keyof QuizBlock]) => {
    setQuizBlocks((prev) =>
      prev.map((quiz) => (quiz.id === id ? { ...quiz, [field]: value } : quiz)),
    );
  };

  const handleToggleDependency = (moduleId: string) => {
    setRequiredDependencies((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId],
    );
  };

  const handleAddCustomDependency = () => {
    const trimmed = customDependency.trim();
    if (!trimmed || customDependencies.includes(trimmed)) return;
    setCustomDependencies((prev) => [...prev, trimmed]);
    setCustomDependency("");
  };

  const handleRemoveCustomDependency = (dependency: string) => {
    setCustomDependencies((prev) => prev.filter((item) => item !== dependency));
  };

  const handleAddBookResource = () => {
    const trimmed = bookResourceId.trim();
    if (!trimmed) return;
    const next: ModuleResource = {
      type: "book",
      id: trimmed,
      title: bookResourceTitle.trim() || undefined
    };
    setBookResources((prev) => [...prev, next]);
    setBookResourceId("");
    setBookResourceTitle("");
  };

  const handleRemoveBookResource = (id: string) => {
    setBookResources((prev) =>
      prev.filter((resource) => resource.type !== "book" || resource.id !== id)
    );
  };

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-center text-3xl font-semibold">Crear Módulo</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Configura módulos públicos o privados con teoría en partes, cuestionarios configurables y
            consigna/importaciones para docentes.
          </p>
        </header>

        <form className="mt-6 space-y-8 bg-white rounded-xl shadow p-6" onSubmit={handleSubmit}>
          {/* 1. Información general */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Información general</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Título del módulo <span className="text-red-500">*</span>
              </label>
              <input
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ej: Introducción a las fracciones"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Descripción <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Describe el contenido, objetivos y actividades del módulo..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Materia principal <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                >
                  {materias.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">Acepta cualquier materia que se dicte en la escuela.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Categoría / Tema <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
                  {categoriasEjemplo.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nivel de dificultad <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                  value={level}
                  onChange={(event) => setLevel(event.target.value)}
                >
                  {nivelesDificultad.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Duración estimada (minutos) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 30"
                  value={durationMinutes}
                  onChange={(event) => setDurationMinutes(Number(event.target.value))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Edad/Curso recomendado</label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 5° grado primaria"
                />
              </div>
            </div>
          </section>

          {/* 2. Dependencias y desbloqueo */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Dependencias y desbloqueo</h2>
            <p className="text-sm text-gray-600">
              Define los módulos previos que los alumnos deben completar antes de acceder a este contenido. Esto
              permite que el profesor determine, por ejemplo, que primero deben saber contar antes de sumar.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Módulos obligatorios</h3>
                <p className="text-xs text-gray-500">
                  Selecciona los módulos que se deben aprobar para desbloquear este nuevo módulo.
                </p>
                <div className="space-y-2">
                  {MVP_MODULES.map((module) => (
                    <label key={module.id} className="flex items-start gap-2 text-sm">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4"
                        checked={requiredDependencies.includes(module.id)}
                        onChange={() => handleToggleDependency(module.id)}
                      />
                      <span>
                        <span className="font-medium">{module.title}</span>
                        <span className="block text-xs text-gray-500">
                          {module.category} · {module.level}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Requisitos personalizados</h3>
                <p className="text-xs text-gray-500">
                  Agrega condiciones adicionales (por ejemplo, “Saber contar hasta 100”).
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={customDependency}
                    onChange={(event) => setCustomDependency(event.target.value)}
                    placeholder="Ej: Saber contar hasta 100"
                  />
                  <button
                    type="button"
                    className="rounded-md border px-4 py-2 text-sm"
                    onClick={handleAddCustomDependency}
                  >
                    Agregar
                  </button>
                </div>
                {customDependencies.length > 0 ? (
                  <ul className="space-y-2">
                    {customDependencies.map((dependency) => (
                      <li key={dependency} className="flex items-center justify-between text-sm">
                        <span>{dependency}</span>
                        <button
                          type="button"
                          className="text-xs text-red-500 hover:underline"
                          onClick={() => handleRemoveCustomDependency(dependency)}
                        >
                          Quitar
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-500">Todavía no agregaste requisitos personalizados.</p>
                )}
              </div>
            </div>
          </section>

          {/* 3. Estructura del módulo */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Estructura del módulo</h2>
            <p className="text-sm text-gray-600">
              Define las partes de teoría (cada bloque es una página) y recursos de apoyo que integran el módulo.
              Puedes agregarlas de forma dinámica según la necesidad del contenido.
            </p>

            <div className="grid gap-3">
              {theoryItems.length === 0 ? (
                <div className="border rounded-lg p-4 text-sm text-gray-600 bg-gray-50">
                  Todavía no hay partes de teoría agregadas. Usa los botones de abajo para sumar videos, texto,
                  enlaces o experiencias de TuesdayJS.
                </div>
              ) : (
                theoryItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 flex flex-col gap-2 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-gray-500">Tipo: {item.type}</p>
                      </div>
                      <button
                        type="button"
                        className="text-xs text-red-500 hover:underline"
                        onClick={() => handleRemoveTheory(item.id)}
                      >
                        Quitar bloque
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                        value={item.title}
                        onChange={(event) => handleUpdateTheory(item.id, "title", event.target.value)}
                        placeholder="Título del bloque"
                      />
                      <select
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                        value={item.type}
                        onChange={(event) => handleUpdateTheory(item.id, "type", event.target.value)}
                      >
                        <option>Video</option>
                        <option>Texto</option>
                        <option>Enlace</option>
                        <option>TuesdayJS</option>
                      </select>
                      <input
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                        value={item.detail}
                        onChange={(event) => handleUpdateTheory(item.id, "detail", event.target.value)}
                        placeholder="Detalle rápido"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border rounded-lg p-4 space-y-3">
              <h3 className="text-sm font-semibold">Agregar nueva parte de teoría</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={newTheoryTitle}
                  onChange={(event) => setNewTheoryTitle(event.target.value)}
                  placeholder="Título (ej: Video introductorio)"
                />
                <select
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                  value={newTheoryType}
                  onChange={(event) => setNewTheoryType(event.target.value)}
                >
                  <option>Video</option>
                  <option>Texto</option>
                  <option>Enlace</option>
                  <option>TuesdayJS</option>
                </select>
                <input
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={newTheoryDetail}
                  onChange={(event) => setNewTheoryDetail(event.target.value)}
                  placeholder="Detalle / nota"
                />
              </div>
              <button type="button" className="rounded-md border px-4 py-2 text-sm" onClick={handleAddTheory}>
                + Agregar parte de teoría
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                + Agregar recurso interactivo
              </button>
            </div>

            <div className="border rounded-lg p-4 space-y-3">
              <h3 className="text-sm font-semibold">Libros del editor</h3>
              <p className="text-xs text-gray-600">
                Guarda un libro en el editor y pega su ID aquí para asociarlo al módulo.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  className="rounded-md border px-4 py-2 text-sm text-blue-600 hover:bg-blue-50"
                  to="/editor"
                >
                  Añadir libro desde editor
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={bookResourceId}
                  onChange={(event) => setBookResourceId(event.target.value)}
                  placeholder="ID del libro (ej: book-matematica-01)"
                />
                <input
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={bookResourceTitle}
                  onChange={(event) => setBookResourceTitle(event.target.value)}
                  placeholder="Título opcional"
                />
                <button
                  type="button"
                  className="rounded-md border px-4 py-2 text-sm"
                  onClick={handleAddBookResource}
                >
                  Agregar libro
                </button>
              </div>
              {bookResources.length > 0 ? (
                <ul className="space-y-2 text-sm">
                  {bookResources.map((resource) =>
                    resource.type === "book" ? (
                      <li key={resource.id} className="flex items-center justify-between">
                        <span>{resource.title ?? resource.id}</span>
                        <button
                          type="button"
                          className="text-xs text-red-500 hover:underline"
                          onClick={() => handleRemoveBookResource(resource.id)}
                        >
                          Quitar
                        </button>
                      </li>
                    ) : null
                  )}
                </ul>
              ) : (
                <p className="text-xs text-gray-500">Todavía no agregaste libros al módulo.</p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold">TuesdayJS / Novela visual</h3>
                <p className="text-xs text-gray-600">
                  Importa el JSON de TuesdayJS para insertarlo como página del módulo.
                </p>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-xs"
                  placeholder="Pega el JSON exportado..."
                />
              </div>
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold">Enlaces, videos y texto</h3>
                <div className="space-y-2">
                  <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="URL del video / enlace"
                  />
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Texto o guion de la teoría"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Cuestionarios apilados */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Cuestionarios apilados</h2>
            <p className="text-sm text-gray-600">
              Los cuestionarios son páginas igual que los videos o textos, pero con opciones extra (tipo, visibilidad,
              consignas). La generación aleatoria solo se habilita para Matemáticas, Física, Química y Economía.
            </p>

            <div className="grid gap-3">
              {quizBlocks.map((quiz) => (
                <div key={quiz.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{quiz.title}</p>
                      <p className="text-xs text-gray-500">
                        Tipo: {quiz.type === "evaluacion" ? "Evaluación" : "Práctica"} · Visibilidad: {" "}
                        {quiz.visibility === "publico" ? "Público" : "Escuela específica"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="text-xs text-red-500 hover:underline"
                        onClick={() => handleRemoveQuiz(quiz.id)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Visibilidad del cuestionario</label>
                      <select
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                        value={quiz.visibility}
                        onChange={(event) =>
                          handleUpdateQuiz(quiz.id, "visibility", event.target.value as QuizVisibility)
                        }
                      >
                        <option value="publico">Público</option>
                        <option value="escuela">Solo una escuela</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Escuela asignada</label>
                      <input
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                        placeholder="Buscar institución"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Modo de creación</label>
                      <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white">
                        <option>Generar automáticamente (materias seleccionadas)</option>
                        <option>Escribir consignas manualmente</option>
                      </select>
                      <p className="mt-1 text-[11px] text-gray-500">
                        Disponible para materias con generadores: Matemáticas, Física, Química y Economía.
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Tipo de cuestionario</label>
                      <select
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                        value={quiz.type}
                        onChange={(event) =>
                          handleUpdateQuiz(quiz.id, "type", event.target.value as QuizBlock["type"])
                        }
                      >
                        <option value="practica">Práctica</option>
                        <option value="evaluacion">Evaluación</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Título del cuestionario</label>
                    <input
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      value={quiz.title}
                      onChange={(event) => handleUpdateQuiz(quiz.id, "title", event.target.value)}
                      placeholder="Título del cuestionario"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="w-full border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Agregar cuestionario</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={newQuizTitle}
                    onChange={(event) => setNewQuizTitle(event.target.value)}
                    placeholder="Título del cuestionario"
                  />
                  <select
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                    value={newQuizType}
                    onChange={(event) => setNewQuizType(event.target.value as QuizBlock["type"])}
                  >
                    <option value="evaluacion">Evaluación</option>
                    <option value="practica">Práctica</option>
                  </select>
                  <select
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                    value={newQuizVisibility}
                    onChange={(event) => setNewQuizVisibility(event.target.value as QuizVisibility)}
                  >
                    <option value="publico">Público</option>
                    <option value="escuela">Solo una escuela</option>
                  </select>
                </div>
                <button type="button" className="rounded-md border px-4 py-2 text-sm" onClick={handleAddQuiz}>
                  + Agregar cuestionario
                </button>
              </div>
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                Importar cuestionario existente
              </button>
            </div>
          </section>

          {/* 5. Consignas y banco de preguntas */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Consignas y banco de preguntas</h2>
            <p className="text-sm text-gray-600">
              Las consignas y el banco de preguntas son la misma función: cada pregunta es una página con
              enunciado, respuestas y solución. Puedes cargar JSON o editar manualmente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold">Importar JSON</h3>
                <input
                  type="file"
                  accept=".json"
                  className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-xs text-gray-500">Incluye en cada pregunta: enunciado, respuestas y solución.</p>
              </div>

              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold">Descargar JSON base</h3>
                <p className="text-xs text-gray-600">
                  Genera un archivo base con estructura vacía para completar offline.
                </p>
                <button type="button" className="rounded-md border px-3 py-2 text-sm">
                  Descargar plantilla JSON
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Nueva pregunta (opción múltiple)</h3>
                <input
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Enunciado"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Respuesta A"
                  />
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Respuesta B"
                  />
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Respuesta C"
                  />
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Respuesta D"
                  />
                </div>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white">
                  <option>Respuesta correcta</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <textarea
                    rows={2}
                    className="rounded-md border border-gray-300 px-3 py-2 text-xs"
                    placeholder="Explicación (por qué es correcta)"
                  />
                  <textarea
                    rows={2}
                    className="rounded-md border border-gray-300 px-3 py-2 text-xs"
                    placeholder="Ayuda / pista (sin revelar la respuesta)"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Previsualización del alumno</h3>
                <div className="rounded-md border border-gray-200 p-3 bg-gray-50 space-y-2">
                  <p className="text-sm font-medium">¿Cuál es la fórmula de la velocidad media?</p>
                  <ul className="text-sm space-y-1">
                    <li>A) v = d / t</li>
                    <li>B) v = t / d</li>
                    <li>C) v = d * t</li>
                    <li>D) v = t - d</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] rounded-full bg-green-100 px-2 py-1 text-green-700">
                      Resultado esperado
                    </span>
                    <span className="text-[11px] rounded-full bg-yellow-100 px-2 py-1 text-yellow-700">
                      Ayuda disponible
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <p>
                      <span className="font-semibold">Explicación:</span> La velocidad media se calcula como
                      distancia sobre tiempo.
                    </p>
                    <p>
                      <span className="font-semibold">Ayuda:</span> Recordá que las magnitudes deben estar en el
                      mismo sistema de unidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                + Agregar pregunta opción múltiple
              </button>
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                + Agregar pregunta respuesta abierta
              </button>
            </div>
          </section>

          {/* 6. Generación automática y semillas */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Generación automática y semillas</h2>
            <p className="text-sm text-gray-600">
              Usa la semilla definida en <span className="font-mono">generador/basic/seed.ts</span> o ingresa una
              personalizada para reproducir exámenes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Semilla y cantidad</h3>
                <input
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Semilla (opcional)"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="number"
                    min={1}
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Preguntas a responder"
                  />
                  <input
                    type="number"
                    min={1}
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Preguntas generadas"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Ejemplo: el alumno responde 100 preguntas y se generan 200 para lograr aleatoriedad.
                </p>
              </div>

              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Generar ahora y guardar</h3>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Notas para gerencia / revisión del examen generado..."
                />
                <button type="button" className="rounded-md border px-3 py-2 text-sm">
                  Generar preguntas y guardar resultados
                </button>
                <p className="text-xs text-gray-500">
                  Recomendación: generar varias veces para aumentar la aleatoriedad.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Sistema de puntuación y aprobación */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Sistema de puntuación y aprobación</h2>
            <p className="text-sm text-gray-600">
              Configura el sistema de calificación, la escala y la cantidad de preguntas por punto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Sistema de calificación</label>
                <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white">
                  {scoringSystems.map((system) => (
                    <option key={system}>{system}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cantidad de preguntas por punto</label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Ej: 3 preguntas = 1 punto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Aprobación mínima</label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Ej: 6 / 60 / Aprobado"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Máximo para nota 6</label>
                <input
                  type="number"
                  min={1}
                  max={80}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Máximo 80%"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Regla de promoción</label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Ej: 70% o más"
                />
              </div>
            </div>
          </section>

          {/* 8. Contenidos especiales */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Contenidos especiales</h2>
            <p className="text-sm text-gray-600">
              Agrega libros, PDFs o módulos especiales para materias específicas (lengua, geografía, biología).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold">Libros y documentos</h3>
                <div className="flex flex-wrap gap-2">
                  <button type="button" className="rounded-md border px-3 py-2 text-sm">
                    Añadir libro desde editor
                  </button>
                  <button type="button" className="rounded-md border px-3 py-2 text-sm">
                    Subir PDF / DOC
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  Puedes incluir un cuestionario como módulo especial para lengua.
                </p>
              </div>

              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold">Funciones específicas por materia</h3>
                <div className="space-y-2 text-xs text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    Activar mapa interactivo (selección de ubicación)
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    Subir imagen de esqueleto/hueso para marcar partes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    Reservar espacio para futuras funciones del módulo
                  </label>
                </div>
                <p className="text-[11px] text-gray-500">
                  Estas funciones pueden habilitarse ahora y completarse en una iteración posterior.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Sistema de nivel y recompensas */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Sistema de nivel y recompensas</h2>
            <p className="text-sm text-gray-600">
              Solo aplica a módulos con generación aleatoria en materias con generadores. Al completar el módulo se
              otorga experiencia, sube el nivel y aumenta la dificultad con lógica tipo RPG o competencia por puntos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nivel máximo otorgado</label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Experiencia máxima</label>
                <input
                  type="number"
                  min={0}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 150"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Cantidad máx. de preguntas por ronda</label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Multiplicador de experiencia</label>
                <input
                  type="number"
                  step="0.1"
                  min={0}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 1.5"
                />
              </div>
            </div>
          </section>

          {/* 10. Generador MVP */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Generador MVP (opcional)</h2>
            <p className="text-sm text-gray-600">
              Generador rápido para crear actividades basadas en categorías MVP.
            </p>

            <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
              <h3 className="text-sm font-semibold">Generador de problemas / actividades</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Categoría MVP</label>
                  <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">
                    {MVP_GENERATOR_CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nivel sugerido</label>
                  <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                  </select>
                </div>
              </div>

              <textarea
                placeholder="Descripción breve del generador o configuración base..."
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <input
                  placeholder="Número de muestra / versión"
                  className="rounded-md border border-gray-300 px-3 py-2"
                />
                <button type="button" className="rounded-md border border-gray-300 px-3 py-2 text-sm text-left">
                  Configurar generador
                </button>
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-2 text-sm"
                >
                  Crear preguntas desde generador
                </button>
              </div>
            </div>
          </section>

          {/* 11. Visibilidad y permisos */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Visibilidad y permisos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <span className="block text-sm font-medium text-gray-700">
                  Tipo de módulo <span className="text-red-500">*</span>
                </span>

                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="radio"
                    name="visibilidad"
                    value="publico"
                    checked={visibilidad === "publico"}
                    onChange={() => setVisibilidad("publico")}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>
                    <span className="font-medium">Público</span>
                    <span className="block text-xs text-gray-500">
                      Cualquier usuario (profesores, estudiantes e invitados) puede usarlo y se puede insertar en
                      cualquier aula virtual.
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="radio"
                    name="visibilidad"
                    value="privado"
                    checked={visibilidad === "privado"}
                    onChange={() => setVisibilidad("privado")}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>
                    <span className="font-medium">Privado</span>
                    <span className="block text-xs text-gray-500">
                      Solo el profesor creador, administradores/profesores invitados y usuarios que cumplan condiciones
                      (institución, aula, invitación explícita).
                    </span>
                  </span>
                </label>
              </div>

              {/* Config extra sólo si es privado */}
              {visibilidad === "privado" && (
                <div className="space-y-3 border rounded-lg p-4 bg-gray-50">
                  <h3 className="text-sm font-semibold">Permisos para módulos privados</h3>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">Institución / escuela</label>
                    <input
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Seleccionar institución / escuela"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Profesores / administradores invitados
                    </label>
                    <input
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Buscar por nombre, correo o alias"
                    />
                    <p className="mt-1 text-[11px] text-gray-500">
                      Estos usuarios podrán usar el módulo en sus aulas virtuales.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">Restricción de alumnos</label>
                    <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white">
                      <option>Solo alumnos de mi institución</option>
                      <option>Solo alumnos de mis cursos</option>
                      <option>Alumnos invitados explícitamente</option>
                      <option>Combinación de las anteriores (definida por backend)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs text-gray-500">
              El sistema también registrará el progreso de los usuarios (nivel alcanzado, experiencia acumulada,
              estado completo/incompleto y favoritos) fuera de este formulario.
            </p>
          </section>

          {/* 12. Acciones finales */}
          <section className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Nota: podrías mostrar este botón solo en modo edición */}
            <button
              type="button"
              className="text-sm text-red-600 hover:text-red-700 border border-red-200 hover:border-red-400 rounded-md px-4 py-2"
            >
              Marcar módulo como eliminado
            </button>

            <div className="flex flex-wrap justify-center gap-3">
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                Guardar como borrador
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 text-sm font-medium disabled:opacity-70"
                disabled={saveStatus === "saving"}
              >
                {saveStatus === "saving" ? "Guardando..." : "Crear módulo"}
              </button>
            </div>
          </section>
          {saveStatus !== "idle" && (
            <p
              className={`text-sm ${
                saveStatus === "saved" ? "text-emerald-600" : saveStatus === "error" ? "text-red-600" : "text-gray-600"
              }`}
            >
              {saveMessage}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
