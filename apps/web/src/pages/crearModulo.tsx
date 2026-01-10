import { useState } from "react";
import { MVP_GENERATOR_CATEGORIES } from "../mvp/mvpData";

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
  const [visibilidad, setVisibilidad] = useState<"publico" | "privado">("publico");

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

  const [theoryItems] = useState<TheoryItem[]>([]);

  const quizBlocks: QuizBlock[] = [
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
  ];

  const scoringSystems = [
    "Sistema A: 1-10 con aprobación 6",
    "Sistema B: 0-100 con aprobación 60",
    "Sistema C: aprobado / desaprobado",
  ];

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

        <form className="mt-6 space-y-8 bg-white rounded-xl shadow p-6">
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
                  defaultValue="Matemáticas"
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
                  defaultValue=""
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
                  defaultValue="Básico"
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

          {/* 2. Estructura del módulo */}
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
                      <button type="button" className="text-xs text-blue-600 hover:underline">
                        Editar bloque
                      </button>
                    </div>
                    <p className="text-xs text-gray-600">{item.detail}</p>
                  </div>
                ))
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                + Agregar parte de teoría
              </button>
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                + Agregar recurso interactivo
              </button>
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

          {/* 3. Cuestionarios apilados */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Cuestionarios apilados</h2>
            <p className="text-sm text-gray-600">
              Puedes agregar varios cuestionarios si el módulo cubre múltiples temas o etapas.
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
                      <button type="button" className="text-xs text-blue-600 hover:underline">
                        Editar configuración
                      </button>
                      <button type="button" className="text-xs text-red-500 hover:underline">
                        Quitar
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Visibilidad del cuestionario</label>
                      <select
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                        defaultValue={quiz.visibility}
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
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Tipo de cuestionario</label>
                      <select
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                        defaultValue={quiz.type}
                      >
                        <option value="practica">Práctica</option>
                        <option value="evaluacion">Evaluación</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                + Agregar cuestionario
              </button>
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                Importar cuestionario existente
              </button>
            </div>
          </section>

          {/* 4. Importación y exportación de consignas */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Consignas (importar / exportar)</h2>
            <p className="text-sm text-gray-600">
              Importa preguntas con sus respuestas desde JSON o descarga un archivo base con los parámetros vacíos.
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
          </section>

          {/* 5. Banco de preguntas y previsualización */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Banco de preguntas</h2>
            <p className="text-sm text-gray-600">
              Cada pregunta es una página. Se pueden agregar preguntas de opción múltiple o respuesta abierta.
            </p>

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
              Define las recompensas máximas de nivel y experiencia que se otorgarán al completar el módulo.
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
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 text-sm font-medium"
              >
                Crear módulo
              </button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
