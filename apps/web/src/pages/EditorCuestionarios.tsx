import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  getSubjectCapabilities,
  type ModuleQuiz,
  type ModuleQuizVisibility,
} from "../domain/module/module.types";
import QuizImportJson from "../components/modulos/QuizImportJson";
import { MVP_GENERATOR_CATEGORIES } from "../mvp/mvpData";

const SUBJECTS = [
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

const makeQuizId = (value: string) => {
  const base = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
  return `${base || "cuestionario"}-${Date.now()}`;
};

export default function EditorCuestionarios() {
  const [quizName, setQuizName] = useState("");
  const [quizId, setQuizId] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [quizType, setQuizType] = useState<ModuleQuiz["type"]>("evaluacion");
  const [quizVisibility, setQuizVisibility] = useState<ModuleQuizVisibility>("publico");
  const [competitionRules, setCompetitionRules] = useState("");
  const [competitionRulesVisibility, setCompetitionRulesVisibility] =
    useState<ModuleQuizVisibility>("publico");
  const [statusMessage, setStatusMessage] = useState("");
  const subjectCapabilities = useMemo(() => getSubjectCapabilities(subject), [subject]);

  const autoQuizHelperText = subjectCapabilities.supportsAutoQuizzes
    ? "Disponible para materias con generadores. Podés crear variantes automáticas desde esta pantalla."
    : subjectCapabilities.autoQuizDisabledReason ??
      "Disponible solo para materias con generadores automáticos.";
  const generatorAvailabilityMessage = subjectCapabilities.supportsGenerators
    ? "Disponible: podés definir semillas, generar bancos y usar el generador MVP."
    : subjectCapabilities.generatorDisabledReason ??
      "Disponible solo para materias con generadores automáticos.";
  const generatorInputsDisabled = !subjectCapabilities.supportsGenerators;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextId = quizId.trim() || makeQuizId(quizName);
    setQuizId(nextId);
    setStatusMessage(`Listo. Usá el ID ${nextId} para vincular este cuestionario a un módulo.`);
  };

  return (
    <main className="flex-1 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <header className="space-y-2">
          <p className="text-sm text-blue-600 font-semibold">Editor de cuestionarios</p>
          <h1 className="text-3xl font-semibold">Nuevo cuestionario</h1>
          <p className="text-sm text-gray-600">
            Configurá los datos, el contenido y la generación automática. Al final vas a obtener un ID para
            vincular este cuestionario a un módulo.
          </p>
        </header>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre del cuestionario <span className="text-red-500">*</span>
              </label>
              <input
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ej: Práctica de ecuaciones lineales"
                value={quizName}
                onChange={(event) => setQuizName(event.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Materia <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                >
                  {SUBJECTS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ID del cuestionario</label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Se genera automáticamente al guardar"
                  value={quizId}
                  onChange={(event) => setQuizId(event.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Copiá este ID para pegarlo en el módulo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Tipo de cuestionario</label>
                <select
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white"
                  value={quizType}
                  onChange={(event) => {
                    const nextType = event.target.value as ModuleQuiz["type"];
                    setQuizType(nextType);
                    if (nextType !== "competencia") {
                      setCompetitionRules("");
                      setCompetitionRulesVisibility("publico");
                    }
                  }}
                >
                  <option value="evaluacion">Evaluación</option>
                  <option value="practica">Práctica</option>
                  <option value="competencia">Competencia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Visibilidad</label>
                <select
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white"
                  value={quizVisibility}
                  onChange={(event) => setQuizVisibility(event.target.value as ModuleQuizVisibility)}
                >
                  <option value="publico">Público</option>
                  <option value="escuela">Solo una escuela</option>
                </select>
              </div>
            </div>

            {quizType === "competencia" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Reglas de competencia</label>
                  <textarea
                    rows={3}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={competitionRules}
                    onChange={(event) => setCompetitionRules(event.target.value)}
                    placeholder="Describe criterios, puntajes o dinámicas para la competencia."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Visibilidad de reglas</label>
                  <select
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white"
                    value={competitionRulesVisibility}
                    onChange={(event) =>
                      setCompetitionRulesVisibility(event.target.value as ModuleQuizVisibility)
                    }
                  >
                    <option value="publico">Público</option>
                    <option value="escuela">Solo una escuela</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    Define quién puede leer las reglas del desafío.
                  </p>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Modo de creación</label>
              {subjectCapabilities.supportsAutoQuizzes ? (
                <>
                  <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white">
                    <option>Generar automáticamente</option>
                    <option>Escribir consignas manualmente</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500">{autoQuizHelperText}</p>
                </>
              ) : (
                <p className="mt-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                  {autoQuizHelperText}
                </p>
              )}
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Contenido del cuestionario</h2>
              <p className="text-sm text-gray-600">
                Podés importar un banco de preguntas, crear consignas manuales y revisar la vista del alumno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <QuizImportJson />

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

          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Generación automática</h2>
              <p className="text-sm text-gray-600">
                Complementá tu banco con generadores, semillas y configuraciones rápidas.
              </p>
            </div>

            <div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
              <p className="font-semibold text-slate-700">Disponibilidad de generación automática</p>
              <p>{generatorAvailabilityMessage}</p>
            </div>

            {subjectCapabilities.supportsGenerators ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 space-y-3">
                    <h3 className="text-sm font-semibold">Semilla y cantidad</h3>
                    <p className="text-xs text-gray-600">
                      Usa la semilla provista por el backend para reproducir exámenes de forma determinística.
                    </p>
                    <input
                      disabled={generatorInputsDisabled}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Semilla del backend"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        disabled={generatorInputsDisabled}
                        type="number"
                        min={1}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                        placeholder="Preguntas a responder"
                      />
                      <input
                        disabled={generatorInputsDisabled}
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
                      disabled={generatorInputsDisabled}
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Notas para gerencia / revisión del examen generado..."
                    />
                    <button
                      disabled={generatorInputsDisabled}
                      type="button"
                      className="rounded-md border px-3 py-2 text-sm disabled:opacity-60"
                    >
                      Generar preguntas y guardar resultados
                    </button>
                    <p className="text-xs text-gray-500">
                      Recomendación: generar varias veces para aumentar la aleatoriedad.
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
                  <h3 className="text-sm font-semibold">Generador MVP (opcional)</h3>
                  <p className="text-xs text-gray-600">
                    Generador rápido para crear actividades basadas en categorías MVP.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Categoría MVP</label>
                      <select
                        disabled={generatorInputsDisabled}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                      >
                        {MVP_GENERATOR_CATEGORIES.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nivel sugerido</label>
                      <select
                        disabled={generatorInputsDisabled}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                      >
                        <option>Básico</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                      </select>
                    </div>
                  </div>

                  <textarea
                    disabled={generatorInputsDisabled}
                    placeholder="Descripción breve del generador o configuración base..."
                    rows={3}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <input
                      disabled={generatorInputsDisabled}
                      placeholder="Número de muestra / versión"
                      className="rounded-md border border-gray-300 px-3 py-2"
                    />
                    <button
                      disabled={generatorInputsDisabled}
                      type="button"
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm text-left disabled:opacity-60"
                    >
                      Configurar generador
                    </button>
                    <button
                      disabled={generatorInputsDisabled}
                      type="button"
                      className="bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-2 text-sm disabled:opacity-60"
                    >
                      Crear preguntas desde generador
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
                La materia seleccionada no permite generación automática. Podés continuar con consignas manuales o
                importaciones.
              </div>
            )}
          </section>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Guardar cuestionario
            </button>
            <Link className="text-sm text-blue-600 hover:underline" to="/modulos/crear">
              Volver al creador de módulos
            </Link>
          </div>

          {statusMessage && (
            <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
