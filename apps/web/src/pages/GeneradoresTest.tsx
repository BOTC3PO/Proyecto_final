import { useEffect, useMemo, useState } from "react";
import type {
  Calculator,
  CalculoRequest,
  CalculoResponse,
  Dificultad as DificultadCore,
  GeneradorParametros,
} from "../generador/core/types";
import type { Dificultad as DificultadMath } from "../generador/matematicas/generic";
import type { Dificultad as DificultadQuimica } from "../generador/quimica/generico";
import type { Dificultad as DificultadEconomia } from "../generador/economia/generico";
import { GENERATORS_BY_TEMA } from "../generador/matematicas";
import { GENERADORES_QUIMICA } from "../generador/quimica/indexQuimica";
import { GENERADORES_ECONOMIA_POR_CLAVE } from "../generador/economia/indexEconomia";
import { GENERADORES_FISICA } from "../generador/fisica/indexFisica";
import VisualizerRenderer from "../visualizadores/graficos/VisualizerRenderer";
import type { VisualSpec } from "../visualizadores/types";
import {
  DIFICULTADES_POR_MATERIA,
  type MateriaUI,
} from "../generador/core/dificultades";

const redondear = (valor: number, decimales = 4) =>
  Number(valor.toFixed(decimales));

const mapDificultadCoreABasica = (
  dificultad: DificultadCore
): DificultadQuimica => {
  switch (dificultad) {
    case "basico":
      return "facil";
    case "intermedio":
      return "media";
    case "avanzado":
    case "Legendario":
    case "Divino":
      return "dificil";
    default:
      return "media";
  }
};

const crearCalculadoraFisica = (): Calculator => ({
  calcular: (req: CalculoRequest): CalculoResponse => {
    const pasos: string[] = [];
    const { tipo, payload } = req;

    const respuesta = (resultado: number, detalle?: string) => {
      if (detalle) pasos.push(detalle);
      return { resultado: redondear(resultado), pasos };
    };

    switch (tipo) {
      case "MRU_distancia": {
        const { velocidad, tiempo } = payload;
        return respuesta(velocidad * tiempo, "d = v · t");
      }
      case "MRUV_velocidad_final": {
        const { v0, aceleracion, tiempo } = payload;
        return respuesta(v0 + aceleracion * tiempo, "vf = v0 + a · t");
      }
      case "relacion_distancia_tiempo_distancia": {
        const { velocidad, tiempo } = payload;
        return respuesta(velocidad * tiempo, "d = v · t");
      }
      case "relacion_distancia_tiempo_velocidad": {
        const { distancia, tiempo } = payload;
        return respuesta(distancia / tiempo, "v = d / t");
      }
      case "relacion_distancia_tiempo_tiempo": {
        const { distancia, velocidad } = payload;
        return respuesta(distancia / velocidad, "t = d / v");
      }
      case "caida_libre": {
        const { g, tiempo } = payload;
        return respuesta(g * tiempo, "v = g · t");
      }
      case "conversion_unidades": {
        const { valor, factor } = payload;
        return respuesta(valor * factor, "valor × factor");
      }
      case "conversion_C_a_F": {
        const { temperatura } = payload;
        return respuesta(temperatura * (9 / 5) + 32, "°F = (°C × 9/5) + 32");
      }
      case "conversion_F_a_C": {
        const { temperatura } = payload;
        return respuesta((temperatura - 32) * (5 / 9), "°C = (°F − 32) × 5/9");
      }
      case "ley_ohm_calcular_V": {
        const { corriente, resistencia } = payload;
        return respuesta(corriente * resistencia, "V = I · R");
      }
      case "ley_ohm_calcular_I": {
        const { voltaje, resistencia } = payload;
        return respuesta(voltaje / resistencia, "I = V / R");
      }
      case "ley_ohm_calcular_R": {
        const { voltaje, corriente } = payload;
        return respuesta(voltaje / corriente, "R = V / I");
      }
      case "potencia_electrica": {
        const { voltaje, corriente } = payload;
        return respuesta(voltaje * corriente, "P = V · I");
      }
      case "resistencia_serie": {
        const { resistencias } = payload as { resistencias: number[] };
        const total = resistencias.reduce((acc, val) => acc + val, 0);
        return respuesta(total, "R = ΣRi");
      }
      case "resistencia_paralelo": {
        const { resistencias } = payload as { resistencias: number[] };
        const inversa = resistencias.reduce((acc, val) => acc + 1 / val, 0);
        return respuesta(1 / inversa, "1/R = Σ(1/Ri)");
      }
      case "consumo_electrico": {
        const { potencia, tiempo } = payload;
        return respuesta((potencia * tiempo) / 1000, "kWh = (W × h) / 1000");
      }
      case "peso": {
        const { masa, g } = payload;
        return respuesta(masa * g, "P = m · g");
      }
      case "suma_fuerzas": {
        const { fuerzas } = payload as { fuerzas: number[] };
        const total = fuerzas.reduce((acc, val) => acc + val, 0);
        return respuesta(total, "ΣF = F1 + F2 + ...");
      }
      case "friccion": {
        const { masa, coeficiente, g } = payload;
        return respuesta(masa * coeficiente * g, "F = μ · m · g");
      }
      case "ley_hooke": {
        const { constante, deformacion } = payload;
        return respuesta(constante * deformacion, "F = k · x");
      }
      case "plano_inclinado": {
        const { masa, angulo, g } = payload;
        const rad = (angulo * Math.PI) / 180;
        return respuesta(masa * g * Math.sin(rad), "F = m · g · sin(θ)");
      }
      case "trabajo_mecanico": {
        const { fuerza, distancia } = payload;
        return respuesta(fuerza * distancia, "W = F · d");
      }
      case "potencia_mecanica": {
        const { trabajo, tiempo } = payload;
        return respuesta(trabajo / tiempo, "P = W / t");
      }
      case "energia_potencial": {
        const { masa, g, altura } = payload;
        return respuesta(masa * g * altura, "Ep = m · g · h");
      }
      case "energia_cinetica": {
        const { masa, velocidad } = payload;
        return respuesta(0.5 * masa * velocidad ** 2, "Ec = 1/2 · m · v²");
      }
      case "conservacion_energia": {
        const { g, altura } = payload;
        return respuesta(Math.sqrt(2 * g * altura), "v = √(2 · g · h)");
      }
      case "movimiento_vertical_altura_max": {
        const { v0, g } = payload;
        return respuesta((v0 ** 2) / (2 * g), "h = v0² / (2 · g)");
      }
      case "movimiento_horizontal_alcance": {
        const { altura, velocidad, g } = payload;
        const tiempo = Math.sqrt((2 * altura) / g);
        return respuesta(velocidad * tiempo, "x = v · √(2h/g)");
      }
      case "calor": {
        const { masa, calorEspecifico, deltaT } = payload;
        return respuesta(masa * 1000 * calorEspecifico * deltaT, "Q = m · c · ΔT");
      }
      case "cambio_estado": {
        const { masa, calorLatente } = payload;
        return respuesta(masa * calorLatente, "Q = m · L");
      }
      case "dilatacion_lineal": {
        const { longitud, coeficiente, deltaT } = payload;
        const deltaL = longitud * coeficiente * deltaT;
        return respuesta(deltaL * 100, "ΔL = L0 · α · ΔT");
      }
      case "ecuacion_lentes": {
        const { distanciaObjeto, distanciaFocal } = payload;
        const inverso = 1 / distanciaFocal - 1 / distanciaObjeto;
        return respuesta(1 / inverso, "1/f = 1/do + 1/di");
      }
      case "indice_refraccion": {
        const { c, velocidadMedio } = payload;
        return respuesta(c / velocidadMedio, "n = c / v");
      }
      case "velocidad_medio": {
        const { c, indiceMedio } = payload;
        return respuesta(c / indiceMedio, "v = c / n");
      }
      case "calcular_frecuencia": {
        const { periodo } = payload;
        return respuesta(1 / periodo, "f = 1 / T");
      }
      case "calcular_periodo": {
        const { frecuencia } = payload;
        return respuesta(1 / frecuencia, "T = 1 / f");
      }
      case "velocidad_ondas": {
        const { frecuencia, longitud } = payload;
        return respuesta(frecuencia * longitud, "v = f · λ");
      }
      case "longitud_onda": {
        const { velocidad, frecuencia } = payload;
        return respuesta(velocidad / frecuencia, "λ = v / f");
      }
      case "optica_geometrica_reflexion": {
        const { anguloIncidencia } = payload;
        return respuesta(anguloIncidencia, "θr = θi");
      }
      case "optica_geometrica_incidencia": {
        const { anguloReflexion } = payload;
        return respuesta(anguloReflexion, "θi = θr");
      }
      case "presion": {
        const { fuerza, area } = payload;
        return respuesta(fuerza / area, "P = F / A");
      }
      case "presion_hidrostatica": {
        const { densidad, g, profundidad } = payload;
        return respuesta(densidad * g * profundidad, "P = ρ · g · h");
      }
      case "caudal": {
        const { volumen, tiempo } = payload;
        return respuesta(volumen / tiempo, "Q = V / t");
      }
      case "densidad": {
        const { masa, volumen } = payload;
        return respuesta(masa / volumen, "ρ = m / V");
      }
      case "masa_desde_densidad": {
        const { densidad, volumen } = payload;
        return respuesta(densidad * volumen, "m = ρ · V");
      }
      default:
        return {
          resultado: NaN,
          pasos: [`Tipo de cálculo no soportado: ${tipo}`],
        };
    }
  },
});

export default function GeneradoresTest() {
  const [materia, setMateria] = useState<MateriaUI>("matematica");
  const [generadorSeleccionado, setGeneradorSeleccionado] = useState("");
  const [dificultad, setDificultad] = useState(
    DIFICULTADES_POR_MATERIA.matematica[1]
  );
  const [modoRespuesta, setModoRespuesta] = useState<"quiz" | "completar">(
    "quiz"
  );
  const [resultado, setResultado] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  const opcionesGenerador = useMemo(() => {
    switch (materia) {
      case "matematica":
        return Object.keys(GENERATORS_BY_TEMA)
          .map((id) => Number(id))
          .sort((a, b) => a - b)
          .map((id) => ({
            value: id.toString(),
            label: `Tema ${id}`,
          }));
      case "quimica":
        return Object.keys(GENERADORES_QUIMICA)
          .map((id) => Number(id))
          .sort((a, b) => a - b)
          .map((id) => ({
            value: id.toString(),
            label: `Tema ${id}`,
          }));
      case "economia":
        return Object.keys(GENERADORES_ECONOMIA_POR_CLAVE)
          .sort()
          .map((clave) => ({ value: clave, label: clave }));
      case "fisica":
      default:
        return GENERADORES_FISICA.map((generador) => ({
          value: generador.id,
          label: generador.id,
        }));
    }
  }, [materia]);

  useEffect(() => {
    setGeneradorSeleccionado(opcionesGenerador[0]?.value ?? "");
    setDificultad(DIFICULTADES_POR_MATERIA[materia][1] ?? "intermedio");
  }, [materia, opcionesGenerador]);

  const calculadoraFisica = useMemo(() => crearCalculadoraFisica(), []);

  const generarEjercicio = () => {
    setError(null);

    try {
      switch (materia) {
        case "matematica": {
          const generador = GENERATORS_BY_TEMA[Number(generadorSeleccionado)];
          if (!generador) throw new Error("Generador de matemáticas no disponible.");
          setResultado(
            generador(dificultad as DificultadMath, { modo: modoRespuesta })
          );
          break;
        }
        case "quimica": {
          const generador = GENERADORES_QUIMICA[Number(generadorSeleccionado)];
          if (!generador) throw new Error("Generador de química no disponible.");
          setResultado(generador(mapDificultadCoreABasica(dificultad)));
          break;
        }
        case "economia": {
          const generador =
            GENERADORES_ECONOMIA_POR_CLAVE[generadorSeleccionado];
          if (!generador) throw new Error("Generador de economía no disponible.");
          setResultado(generador(dificultad as DificultadEconomia));
          break;
        }
        case "fisica": {
          const generador = GENERADORES_FISICA.find(
            (item) => item.id === generadorSeleccionado
          );
          if (!generador) throw new Error("Generador de física no disponible.");

          const params: GeneradorParametros = {
            materia: "fisica",
            categoria: generador.categorias[0] ?? "general",
            nivel: dificultad as DificultadCore,
          };

          setResultado(generador.generarEjercicio(params, calculadoraFisica));
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

  const resumen = resultado as
    | {
        enunciado?: string;
        opciones?: string[];
        respuestaCorrecta?: string;
        explicacionPasoAPaso?: string[];
        explicacion?: string;
        tituloTema?: string;
        visual?: VisualSpec;
      }
    | undefined;

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
              >
                {opcionesGenerador.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
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
            {resumen?.enunciado ? (
              <>
                <div>
                  <p className="text-sm text-gray-500">Enunciado</p>
                  <p className="mt-1 text-gray-900 whitespace-pre-wrap">
                    {resumen.enunciado}
                  </p>
                </div>
                {resumen.opciones && resumen.opciones.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-500">Opciones</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-800">
                      {resumen.opciones.map((opcion, index) => (
                        <li key={`${opcion}-${index}`}>
                          {index + 1}. {opcion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {resumen.respuestaCorrecta && (
                  <div>
                    <p className="text-sm text-gray-500">Respuesta correcta</p>
                    <p className="mt-1 font-medium text-gray-900">
                      {resumen.respuestaCorrecta}
                    </p>
                  </div>
                )}
                {resumen.explicacionPasoAPaso &&
                  resumen.explicacionPasoAPaso.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-500">Pasos sugeridos</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-700">
                        {resumen.explicacionPasoAPaso.map((paso, index) => (
                          <li key={`${paso}-${index}`}>• {paso}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                {resumen.explicacion && (
                  <div>
                    <p className="text-sm text-gray-500">Explicación</p>
                    <p className="mt-1 text-sm text-gray-700">
                      {resumen.explicacion}
                    </p>
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
