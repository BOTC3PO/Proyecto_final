import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  getSubjectCapabilities,
  type ModuleQuiz,
  type ModuleQuizVisibility,
} from "../domain/module/module.types";
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

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const exercisesJsonExample = `{
  "preguntas": [
    {
      "enunciado": "¿Cuál es la fórmula de la velocidad media?",
      "questionType": "mc",
      "options": [
        "v = d / t",
        "v = t / d",
        "v = d * t"
      ],
      "answerKey": "v = d / t",
      "explanation": "Se calcula como distancia dividida por tiempo."
    }
  ]
}`;

const validateExercisesJson = (value: unknown) => {
  const errors: string[] = [];
  const preguntas = Array.isArray(value)
    ? value
    : isRecord(value) && Array.isArray(value.preguntas)
      ? value.preguntas
      : null;

  if (!preguntas) {
    return {
      isValid: false,
      errors: ["El JSON debe ser un array de preguntas o un objeto con la clave preguntas."],
    };
  }

  if (preguntas.length === 0) {
    errors.push("Debe incluir al menos una pregunta.");
  }

  preguntas.forEach((pregunta, index) => {
    if (!isRecord(pregunta)) {
      errors.push(`preguntas[${index}] debe ser un objeto con enunciado, respuestas y solucion.`);
      return;
    }
    if (!isNonEmptyString(pregunta.enunciado)) {
      errors.push(`preguntas[${index}].enunciado debe ser un texto no vacío.`);
    }
    const questionType = isNonEmptyString(pregunta.questionType) ? pregunta.questionType.trim() : "";
    const rawOptions = Array.isArray(pregunta.options)
      ? pregunta.options
      : Array.isArray(pregunta.opciones)
        ? pregunta.opciones
        : Array.isArray(pregunta.respuestas)
          ? pregunta.respuestas
          : null;
    const requiresOptions = questionType !== "input";
    if (requiresOptions) {
      if (!rawOptions || rawOptions.length < 2) {
        errors.push(`preguntas[${index}].options debe ser un array con al menos 2 opciones.`);
      } else {
        rawOptions.forEach((respuesta, respuestaIndex) => {
          const isStringOption = isNonEmptyString(respuesta);
          const isObjectOption = isRecord(respuesta) && isNonEmptyString(respuesta.texto);
          if (!isStringOption && !isObjectOption) {
            errors.push(
              `preguntas[${index}].options[${respuestaIndex}] debe ser un texto o un objeto con texto.`,
            );
          }
        });
      }
    }
    const answerKey = pregunta.answerKey ?? pregunta.solucion;
    if (
      !(typeof answerKey === "string" && answerKey.trim()) &&
      !(typeof answerKey === "number" && Number.isFinite(answerKey)) &&
      !(Array.isArray(answerKey) && answerKey.every((value) => isNonEmptyString(value)))
    ) {
      errors.push(`preguntas[${index}].answerKey debe ser un texto o un array válido.`);
    }
  });

  return { isValid: errors.length === 0, errors };
};

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
  const [exerciseImportStatus, setExerciseImportStatus] = useState<{
    status: "idle" | "valid" | "error";
    message: string;
    errors?: string[];
  }>({ status: "idle", message: "" });
  const [exerciseFileName, setExerciseFileName] = useState("");
  const exerciseFileInputRef = useRef<HTMLInputElement | null>(null);
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

  const handleExerciseFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setExerciseImportStatus({ status: "idle", message: "" });
    setExerciseFileName("");
    try {
      const raw = await file.text();
      const parsed = JSON.parse(raw) as unknown;
      const validation = validateExercisesJson(parsed);
      if (!validation.isValid) {
        setExerciseImportStatus({
          status: "error",
          message: "El archivo no coincide con el esquema de planilla.",
          errors: validation.errors,
        });
        if (exerciseFileInputRef.current) {
          exerciseFileInputRef.current.value = "";
        }
        return;
      }
      setExerciseFileName(file.name);
      setExerciseImportStatus({
        status: "valid",
        message: "Planilla válida. Lista para importar preguntas.",
      });
    } catch (error) {
      setExerciseImportStatus({
        status: "error",
        message: "No se pudo leer el archivo JSON.",
        errors: [error instanceof Error ? error.message : "JSON inválido."],
      });
      if (exerciseFileInputRef.current) {
        exerciseFileInputRef.current.value = "";
      }
    }
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
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold">Importar JSON</h3>
                <input
                  type="file"
                  accept=".json"
                  className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                  ref={exerciseFileInputRef}
                  onChange={handleExerciseFileChange}
                />
                <p className="text-xs text-gray-500">
                  Incluye en cada pregunta: enunciado, opciones (si aplica) y respuesta correcta.
                </p>
                {exerciseImportStatus.status === "valid" && (
                  <p className="text-xs text-emerald-600">
                    {exerciseImportStatus.message} {exerciseFileName ? `(${exerciseFileName})` : ""}
                  </p>
                )}
                {exerciseImportStatus.status === "error" && (
                  <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-700 space-y-2">
                    <p className="font-semibold">{exerciseImportStatus.message}</p>
                    <ul className="list-disc pl-4 space-y-1">
                      {exerciseImportStatus.errors?.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <details className="rounded-md border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-600">
                  <summary className="cursor-pointer font-medium">Ver ejemplo de planilla válida</summary>
                  <pre className="mt-2 whitespace-pre-wrap font-mono">{exercisesJsonExample}</pre>
                </details>
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
                      Usa la semilla definida en <span className="font-mono">generador/basic/seed.ts</span> o ingresa
                      una personalizada para reproducir exámenes.
                    </p>
                    <input
                      disabled={generatorInputsDisabled}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Semilla (opcional)"
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
            <Link className="text-sm text-blue-600 hover:underline" to="/profesor/crear-modulo">
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
