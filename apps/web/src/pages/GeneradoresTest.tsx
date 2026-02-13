import { useEffect, useMemo, useState } from "react";
import type {
  Dificultad as DificultadCore,
  GeneradorParametros,
} from "../generador/core/types";
import type { GeneratedQuestionDTO } from "../generador/core/generated-question";
import type { Dificultad as DificultadMath } from "../generador/matematicas/generic";
import type { Dificultad as DificultadQuimica } from "../generador/quimica/generico";
import type { Dificultad as DificultadEconomia } from "../generador/economia/generico";
import { GENERADORES_MATEMATICAS_POR_TEMA, GENERATORS_BY_TEMA } from "../generador/matematicas";
import { GENERADORES_QUIMICA_DESCRIPTORES, GENERADORES_QUIMICA } from "../generador/quimica/indexQuimica";
import { GENERADORES_ECONOMIA_DESCRIPTORES, GENERADORES_ECONOMIA_POR_CLAVE } from "../generador/economia/indexEconomia";
import { createGeneradoresFisica } from "../generador/fisica/indexFisica";
import { crearCalculadoraFisica } from "../generador/fisica/calculadora";
import { createPrng } from "../generador/core/prng";
import VisualizerRenderer from "../visualizadores/graficos/VisualizerRenderer";
import type { VisualSpec } from "../visualizadores/types";
import { listarVisualizadores, obtenerVisualizador } from "../visualizadores/catalogoApi";
import {
  DIFICULTADES_POR_MATERIA,
  type MateriaUI,
} from "../generador/core/dificultades";
import { adaptMathExercise } from "../generador/matematicas/adapters";
import { adaptEconomiaExercise } from "../generador/economia/adapters";
import { adaptQuimicaExercise } from "../generador/quimica/adapters";
import { fetchActivePrompts, type PromptRecord } from "../services/prompts";
import { precargarCatalogoTemaPorId as precargarCatalogoQuimicaPorId } from "../generador/quimica/catalogoApi";
import { precargarCatalogoTemaPorId as precargarCatalogoMatematicasPorId } from "../generador/matematicas/catalogoApi";

type PromptTemplateKind = "TEXT" | "PARAM_LIMITS";

type PromptGeneratorConfig = {
  id: string;
  label: string;
  promptText: string;
  templateKind: PromptTemplateKind;
  metadata?: Record<string, unknown>;
  paramLimits?: Record<string, unknown>;
};

type VisualizadorEjemplo = {
  id: string;
  title: string;
  description: string;
  spec: VisualSpec;
  invalidSpec?: boolean;
};

const isVisualSpec = (value: unknown): value is VisualSpec => {
  if (!value || typeof value !== "object") return false;
  const kind = (value as { kind?: unknown }).kind;
  return typeof kind === "string";
};

const PROMPTS_TARGET_TYPE = "exercise_generator";

const ensurePromptTemplateKind = (value: unknown): PromptTemplateKind =>
  value === "PARAM_LIMITS" ? "PARAM_LIMITS" : "TEXT";

const toRecord = (value: unknown): Record<string, unknown> | undefined =>
  value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;

const parsePromptConfig = (
  materia: MateriaUI,
  prompt: PromptRecord,
  generatorExists: (id: string) => boolean
): PromptGeneratorConfig | null => {
  const params = toRecord(prompt.paramsSchema) ?? {};
  const templateKind = ensurePromptTemplateKind(params.templateKind);
  const configuredId =
    params.generatorId ?? params.generatorKey ?? params.id ?? prompt.title;
  const id = String(configuredId ?? "").trim();
  if (!id || !generatorExists(id)) return null;
  const configuredLabel = String(params.label ?? "").trim();
  const defaultLabel =
    materia === "economia" || materia === "fisica" ? id : `Tema ${id}`;

  return {
    id,
    label: configuredLabel || defaultLabel,
    promptText: prompt.bodyText,
    templateKind,
    metadata: toRecord(params.metadata),
    paramLimits: toRecord(params.paramLimits),
  };
};

const applyPromptToQuestion = (
  question: GeneratedQuestionDTO,
  promptConfig: PromptGeneratorConfig
): GeneratedQuestionDTO => ({
  ...question,
  prompt: promptConfig.promptText?.trim() || question.prompt,
  metadata: {
    ...(question.metadata ?? {}),
    ...(promptConfig.metadata ?? {}),
  },
  data: {
    ...(question.data ?? {}),
    ...(promptConfig.templateKind === "PARAM_LIMITS"
      ? { paramLimits: promptConfig.paramLimits ?? {} }
      : {}),
  },
});

const mapDificultadCoreABasica = (
  dificultad: DificultadCore
): DificultadQuimica => {
  switch (dificultad) {
    case "basico":
      return "facil";
    case "intermedio":
      return "media";
    case "avanzado":
      return "dificil";
    default:
      return "media";
  }
};

export default function GeneradoresTest() {
  const [materia, setMateria] = useState<MateriaUI>("matematica");
  const [generadorSeleccionado, setGeneradorSeleccionado] = useState("");
  const [dificultad, setDificultad] = useState(
    DIFICULTADES_POR_MATERIA.matematica[1]
  );
  const [modoRespuesta, setModoRespuesta] = useState<"quiz" | "completar">(
    "quiz"
  );
  const [resultado, setResultado] = useState<GeneratedQuestionDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [seed, setSeed] = useState("");
  const [promptOptions, setPromptOptions] = useState<PromptGeneratorConfig[]>([]);
  const [promptsLoading, setPromptsLoading] = useState(false);
  const [promptsError, setPromptsError] = useState<string | null>(null);
  const [quimicaPreloadLoading, setQuimicaPreloadLoading] = useState(false);
  const [quimicaPreloadError, setQuimicaPreloadError] = useState<string | null>(null);
  const [matematicaPreloadLoading, setMatematicaPreloadLoading] = useState(false);
  const [matematicaPreloadError, setMatematicaPreloadError] = useState<string | null>(null);
  const [visualizadoresEjemplo, setVisualizadoresEjemplo] = useState<VisualizadorEjemplo[]>([]);
  const [visualizadoresLoading, setVisualizadoresLoading] = useState(false);
  const [visualizadoresError, setVisualizadoresError] = useState<string | null>(null);

  const listingPrng = useMemo(() => createPrng(seed || "listado-generadores"), [seed]);
  const prng = useMemo(() => (seed ? createPrng(seed) : null), [seed]);
  const generadoresFisica = useMemo(() => createGeneradoresFisica(listingPrng), [listingPrng]);
  const generadoresFisicaSeeded = useMemo(
    () => (prng ? createGeneradoresFisica(prng) : []),
    [prng]
  );

  const opcionesGenerador = useMemo(() => {
    return promptOptions.map((promptOption) => ({
      value: promptOption.id,
      label: promptOption.label,
    }));
  }, [promptOptions]);

  const promptConfigSeleccionado = useMemo(
    () => promptOptions.find((option) => option.id === generadorSeleccionado) ?? null,
    [promptOptions, generadorSeleccionado]
  );

  useEffect(() => {
    const generatorExists = (id: string) => {
      switch (materia) {
        case "matematica":
          return Boolean(GENERATORS_BY_TEMA[Number(id)]);
        case "quimica":
          return Boolean(GENERADORES_QUIMICA[Number(id)]);
        case "economia":
          return Boolean(GENERADORES_ECONOMIA_POR_CLAVE[id]);
        case "fisica":
        default:
          return generadoresFisica.some((generador) => generador.id === id);
      }
    };

    const loadPrompts = async () => {
      setPromptsLoading(true);
      setPromptsError(null);
      setPromptOptions([]);

      const targetId = `generadores:${materia}`;
      try {
        const prompts = await fetchActivePrompts(PROMPTS_TARGET_TYPE, targetId);
        const options = prompts
          .map((prompt) => parsePromptConfig(materia, prompt, generatorExists))
          .filter((prompt): prompt is PromptGeneratorConfig => Boolean(prompt))
          .sort((a, b) => a.label.localeCompare(b.label));

        if (options.length === 0) {
          throw new Error(
            `No hay prompts activos configurados para ${targetId}. Ejecutá la seed/migración para poblar /api/prompts.`
          );
        }

        setPromptOptions(options);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Error desconocido al listar prompts.";
        setPromptsError(message);
      } finally {
        setPromptsLoading(false);
      }
    };

    void loadPrompts();
  }, [materia, generadoresFisica]);

  useEffect(() => {
    let active = true;

    const cargarVisualizadores = async () => {
      setVisualizadoresLoading(true);
      setVisualizadoresError(null);

      try {
        const listado = await listarVisualizadores();
        const detalles = await Promise.all(
          listado.map(async (item): Promise<VisualizadorEjemplo> => {
            try {
              const detalle = (await obtenerVisualizador(item.id)) as unknown;
              if (!detalle || typeof detalle !== "object") {
                return {
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  spec: { kind: "timeline", events: [] as const },
                  invalidSpec: true,
                };
              }

              const parsed = detalle as {
                id?: unknown;
                title?: unknown;
                description?: unknown;
                spec?: unknown;
              };

              if (!isVisualSpec(parsed.spec)) {
                return {
                  id: typeof parsed.id === "string" ? parsed.id : item.id,
                  title: typeof parsed.title === "string" ? parsed.title : item.title,
                  description:
                    typeof parsed.description === "string" ? parsed.description : item.description,
                  spec: { kind: "timeline", events: [] as const },
                  invalidSpec: true,
                };
              }

              return {
                id: typeof parsed.id === "string" ? parsed.id : item.id,
                title: typeof parsed.title === "string" ? parsed.title : item.title,
                description:
                  typeof parsed.description === "string" ? parsed.description : item.description,
                spec: parsed.spec,
              };
            } catch (_error) {
              return {
                id: item.id,
                title: item.title,
                description: item.description,
                spec: { kind: "timeline", events: [] as const },
                invalidSpec: true,
              };
            }
          })
        );

        if (!active) return;
        setVisualizadoresEjemplo(detalles);
      } catch (_error) {
        if (!active) return;
        setVisualizadoresError("No se pudieron cargar ejemplos");
        setVisualizadoresEjemplo([]);
      } finally {
        if (!active) return;
        setVisualizadoresLoading(false);
      }
    };

    void cargarVisualizadores();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    setGeneradorSeleccionado(opcionesGenerador[0]?.value ?? "");
    setDificultad(DIFICULTADES_POR_MATERIA[materia][1] ?? "intermedio");
  }, [materia, opcionesGenerador]);

  const calculadoraFisica = useMemo(() => crearCalculadoraFisica(), []);


  useEffect(() => {
    if (materia !== "quimica") {
      setQuimicaPreloadError(null);
      setQuimicaPreloadLoading(false);
      return;
    }

    const idTema = Number(generadorSeleccionado);
    if (!Number.isInteger(idTema) || idTema <= 0) {
      setQuimicaPreloadError(null);
      setQuimicaPreloadLoading(false);
      return;
    }

    let active = true;
    setQuimicaPreloadLoading(true);
    setQuimicaPreloadError(null);

    void precargarCatalogoQuimicaPorId(idTema)
      .catch((error: unknown) => {
        if (!active) return;
        setQuimicaPreloadError(
          error instanceof Error
            ? error.message
            : "No se pudo precargar consignas de química."
        );
      })
      .finally(() => {
        if (!active) return;
        setQuimicaPreloadLoading(false);
      });

    return () => {
      active = false;
    };
  }, [materia, generadorSeleccionado]);

  useEffect(() => {
    if (materia !== "matematica") {
      setMatematicaPreloadError(null);
      setMatematicaPreloadLoading(false);
      return;
    }

    const idTema = Number(generadorSeleccionado);
    if (!Number.isInteger(idTema) || idTema <= 0) {
      setMatematicaPreloadError(null);
      setMatematicaPreloadLoading(false);
      return;
    }

    let active = true;
    setMatematicaPreloadLoading(true);
    setMatematicaPreloadError(null);

    void precargarCatalogoMatematicasPorId(idTema)
      .catch((error: unknown) => {
        if (!active) return;
        setMatematicaPreloadError(
          error instanceof Error
            ? error.message
            : "No se pudo precargar límites de matemáticas."
        );
      })
      .finally(() => {
        if (!active) return;
        setMatematicaPreloadLoading(false);
      });

    return () => {
      active = false;
    };
  }, [materia, generadorSeleccionado]);

  const generarEjercicio = () => {
    setError(null);

    try {
      if (promptsLoading) {
        throw new Error("Esperá a que finalice la carga de prompts activos.");
      }
      if (promptsError) {
        throw new Error(promptsError);
      }
      if (!promptConfigSeleccionado) {
        throw new Error(
          `Falta configuración de prompts activos para ${materia}. Ejecutá la seed/migración.`
        );
      }
      if (!seed) {
        throw new Error("Se requiere una semilla provista por el backend.");
      }
      if (!prng) {
        throw new Error("No se pudo inicializar el PRNG con la semilla.");
      }

      switch (materia) {
        case "matematica": {
          const descriptor =
            GENERADORES_MATEMATICAS_POR_TEMA[Number(generadorSeleccionado)];
          if (!descriptor) throw new Error("Generador de matemáticas no disponible.");
          if (matematicaPreloadLoading) {
            throw new Error("Esperá a que finalice la precarga de límites de matemáticas.");
          }
          const exercise = descriptor.generate(
            dificultad as DificultadMath,
            { modo: modoRespuesta },
            prng
          );
          const question = adaptMathExercise(exercise).question;
          setResultado(applyPromptToQuestion(question, promptConfigSeleccionado));
          break;
        }
        case "quimica": {
          const descriptor =
            GENERADORES_QUIMICA_DESCRIPTORES[Number(generadorSeleccionado)];
          if (!descriptor) throw new Error("Generador de química no disponible.");
          if (quimicaPreloadLoading) {
            throw new Error("Esperá a que finalice la precarga de consignas de química.");
          }
          if (quimicaPreloadError) {
            throw new Error(quimicaPreloadError);
          }
          const exercise = descriptor.generate(mapDificultadCoreABasica(dificultad), prng);
          const question = adaptQuimicaExercise(exercise).question;
          setResultado(applyPromptToQuestion(question, promptConfigSeleccionado));
          break;
        }
        case "economia": {
          const descriptor =
            GENERADORES_ECONOMIA_DESCRIPTORES[generadorSeleccionado];
          if (!descriptor) throw new Error("Generador de economía no disponible.");
          const exercise = descriptor.generate(dificultad as DificultadEconomia, prng);
          const question = adaptEconomiaExercise(exercise).question;
          setResultado(applyPromptToQuestion(question, promptConfigSeleccionado));
          break;
        }
        case "fisica": {
          const generator = generadoresFisicaSeeded.find(
            (item) => item.id === generadorSeleccionado
          );
          if (!generator) throw new Error("Generador de física no disponible.");

          const params: GeneradorParametros = {
            materia: "fisica",
            categoria: generadoresFisica.find(
              (item) => item.id === generadorSeleccionado
            )?.categorias[0] ?? "general",
            nivel: dificultad as DificultadCore,
          };

          const question = generator.generateRenderable(params, calculadoraFisica).question;
          setResultado(applyPromptToQuestion(question, promptConfigSeleccionado));
          break;
        }
        default:
          throw new Error("Materia no soportada.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido.");
      setResultado(null);
    }
  };

  const resultadoFormateado = resultado
    ? JSON.stringify(resultado, null, 2)
    : "Selecciona un generador y presiona \"Generar ejercicio\".";

  const resumen = resultado;

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            Laboratorio de generadores
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Probá los generadores por materia, ajustá la dificultad y revisá la
            salida en formato estructurado.
          </p>
        </header>

        <section className="bg-white rounded-xl shadow p-6 space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Ejemplos de visualizadores
              </h2>
              <p className="text-sm text-gray-600">
                Datos simulados para validar la UI de cada visualizador.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Vista de prueba
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {visualizadoresLoading && (
              <p className="text-sm text-slate-500">Cargando ejemplos...</p>
            )}
            {visualizadoresError && (
              <p className="text-sm text-red-600">{visualizadoresError}</p>
            )}
            {visualizadoresEjemplo.map((ejemplo) => (
              <div
                key={ejemplo.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {ejemplo.title}
                    </h3>
                    <p className="text-sm text-gray-600">{ejemplo.description}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">
                    {ejemplo.spec.kind}
                  </span>
                </div>
                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                  {ejemplo.invalidSpec ? (
                    <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                      spec inválido
                    </span>
                  ) : (
                    <VisualizerRenderer spec={ejemplo.spec} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Materia
              </label>
              <select
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                value={materia}
                onChange={(event) =>
                  setMateria(event.target.value as MateriaUI)
                }
              >
                <option value="matematica">Matemática</option>
                <option value="quimica">Química</option>
                <option value="economia">Economía</option>
                <option value="fisica">Física</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Generador
              </label>
              <select
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                value={generadorSeleccionado}
                onChange={(event) => setGeneradorSeleccionado(event.target.value)}
                disabled={promptsLoading || Boolean(promptsError) || opcionesGenerador.length === 0}
              >
                {opcionesGenerador.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {promptsLoading ? (
                <p className="mt-1 text-xs text-gray-500">Cargando prompts activos…</p>
              ) : null}
              {promptsError ? (
                <p className="mt-1 text-xs text-red-600">
                  Error de configuración: {promptsError}
                </p>
              ) : null}
              {materia === "quimica" && quimicaPreloadLoading ? (
                <p className="mt-1 text-xs text-gray-500">Precargando consignas de química…</p>
              ) : null}
              {materia === "quimica" && quimicaPreloadError ? (
                <p className="mt-1 text-xs text-red-600">Error de consignas: {quimicaPreloadError}</p>
              ) : null}
              {materia === "matematica" && matematicaPreloadLoading ? (
                <p className="mt-1 text-xs text-gray-500">Precargando límites de matemáticas…</p>
              ) : null}
              {materia === "matematica" && matematicaPreloadError ? (
                <p className="mt-1 text-xs text-amber-600">Límites no disponibles, se usarán valores por defecto: {matematicaPreloadError}</p>
              ) : null}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Semilla (backend)
              </label>
              <input
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                value={seed}
                onChange={(event) => setSeed(event.target.value)}
                placeholder="Seed provisto por el backend"
              />
              <p className="mt-1 text-xs text-gray-500">
                Esta semilla controla todos los sorteos determinísticos.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dificultad
              </label>
              <select
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                value={dificultad}
                onChange={(event) =>
                  setDificultad(event.target.value as DificultadCore)
                }
              >
                {DIFICULTADES_POR_MATERIA[materia].map((nivel) => (
                  <option key={nivel} value={nivel}>
                    {nivel}
                  </option>
                ))}
              </select>
            </div>

            {materia === "matematica" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Modo de respuesta
                </label>
                <select
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                  value={modoRespuesta}
                  onChange={(event) =>
                    setModoRespuesta(event.target.value as "quiz" | "completar")
                  }
                >
                  <option value="quiz">Multiple choice</option>
                  <option value="completar">Completar</option>
                </select>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={generarEjercicio}
              disabled={promptsLoading || Boolean(promptsError) || !promptConfigSeleccionado}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
            >
              Generar ejercicio
            </button>

            {error ? (
              <p className="text-sm text-red-600">{error}</p>
            ) : (
              <p className="text-sm text-gray-500">
                Consejo: podés repetir para validar variaciones del mismo tema.
              </p>
            )}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Vista previa</h2>
            {resumen?.prompt ? (
              <>
                <div>
                  <p className="text-sm text-gray-500">Enunciado</p>
                  <p className="mt-1 text-gray-900 whitespace-pre-wrap">
                    {resumen.prompt}
                  </p>
                </div>
                {resumen.options && resumen.options.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-500">Opciones</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-800">
                      {resumen.options.map((opcion, index) => (
                        <li key={`${opcion.id}-${index}`}>
                          {index + 1}. {opcion.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {resumen.visual && (
                  <div>
                    <p className="text-sm text-gray-500">Visualización</p>
                    <div className="mt-2 rounded-lg border border-slate-200 bg-white p-4">
                      <VisualizerRenderer spec={resumen.visual} />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-gray-500">
                Todavía no hay un ejercicio generado.
              </p>
            )}
          </div>

          <div className="bg-slate-900 rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              Resultado (JSON)
            </h2>
            <pre className="text-xs text-emerald-200 whitespace-pre-wrap break-words">
              {resultadoFormateado}
            </pre>
          </div>
        </section>
      </div>
    </main>
  );
}
