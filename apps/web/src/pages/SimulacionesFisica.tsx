import { useMemo, useState } from "react";
import type { GeneradorParametros } from "../generador/core/types";
import { CaidaLibreGenerator } from "../generador/fisica/CaidaLibre";
import { crearCalculadoraFisica } from "../generador/fisica/calculadora";
import { createPrng } from "../generador/core/prng";
import FreeFallSimulationVisualizer from "../visualizadores/fisica/FreeFallSimulationVisualizer";
import type { PhysicsSimulationSpec } from "../visualizadores/types";

const redondear = (valor: number, decimales = 2) =>
  Number(valor.toFixed(decimales));

const generarSerie = (
  altura: number,
  g: number,
  masa: number,
  coeficiente: number,
  usarResistencia: boolean,
  dt: number,
) => {
  let tiempo = 0;
  let velocidad = 0;
  let posicion = altura;
  const serieAltura: Array<{ t: number; value: number }> = [];
  const serieVelocidad: Array<{ t: number; value: number }> = [];
  const maxTiempo = 20;

  while (posicion > 0 && tiempo <= maxTiempo) {
    serieAltura.push({ t: redondear(tiempo, 3), value: redondear(posicion, 3) });
    serieVelocidad.push({ t: redondear(tiempo, 3), value: redondear(velocidad, 3) });

    const resistencia = usarResistencia ? (coeficiente / masa) * velocidad : 0;
    const aceleracion = g - resistencia;
    velocidad += aceleracion * dt;
    posicion = Math.max(0, posicion - velocidad * dt);
    tiempo += dt;
  }

  return {
    serieAltura,
    serieVelocidad,
    tiempoImpacto: tiempo,
    velocidadImpacto: velocidad,
  };
};

export default function SimulacionesFisica() {
  const calculadoraFisica = useMemo(() => crearCalculadoraFisica(), []);
  const prng = useMemo(() => createPrng("simulacion-fisica"), []);
  const ejercicioBase = useMemo(() => {
    const generador = new CaidaLibreGenerator(prng);
    const parametros: GeneradorParametros = {
      materia: "fisica",
      categoria: "caida_libre",
      nivel: "intermedio",
    };
    return generador.generarEjercicio(parametros, calculadoraFisica);
  }, [calculadoraFisica, prng]);

  const gBase = ejercicioBase.datos.g as number;
  const tiempoBase = ejercicioBase.datos.tiempo as number;
  const alturaBase = redondear(0.5 * gBase * tiempoBase ** 2, 2);

  const [altura, setAltura] = useState(alturaBase);
  const [g, setG] = useState(gBase);
  const [masa, setMasa] = useState(2);
  const [coeficiente, setCoeficiente] = useState(0.15);
  const [usarResistencia, setUsarResistencia] = useState(true);
  const [dt, setDt] = useState(0.05);

  const simulacion = useMemo(
    () => generarSerie(altura, g, masa, coeficiente, usarResistencia, dt),
    [altura, g, masa, coeficiente, usarResistencia, dt],
  );

  const tiempoTeorico = Math.sqrt((2 * altura) / g);
  const velocidadTeorica = calculadoraFisica.calcular({
    tipo: "caida_libre",
    payload: { g, tiempo: tiempoTeorico },
  }).resultado;

  const spec = useMemo<PhysicsSimulationSpec>(
    () => ({
      kind: "physics-simulation",
      title: "Caída libre con resistencia",
      description:
        "Compara la caída libre ideal con un modelo sencillo de resistencia lineal al movimiento.",
      model: {
        id: "caida-libre-lineal",
        label: "Caída libre (resistencia lineal)",
        equation: "a = g − (k/m) · v",
        assumptions: [
          "Se asume resistencia proporcional a la velocidad (modelo lineal).",
          "La aceleración gravitatoria permanece constante durante el movimiento.",
          "Se integra con un paso de tiempo constante (Euler explícito).",
        ],
      },
      parameters: [
        {
          id: "altura",
          label: "Altura inicial",
          input: "number",
          unit: "m",
          min: 5,
          max: 120,
          step: 1,
          value: altura,
        },
        {
          id: "gravedad",
          label: "Gravedad",
          input: "number",
          unit: "m/s²",
          min: 1,
          max: 15,
          step: 0.1,
          value: g,
        },
        {
          id: "masa",
          label: "Masa",
          input: "number",
          unit: "kg",
          min: 0.5,
          max: 10,
          step: 0.1,
          value: masa,
        },
        {
          id: "coeficiente",
          label: "Coeficiente de resistencia",
          input: "number",
          unit: "1/s",
          min: 0,
          max: 1,
          step: 0.01,
          value: coeficiente,
        },
        {
          id: "resistencia",
          label: "Usar resistencia del aire",
          input: "boolean",
          value: usarResistencia,
        },
        {
          id: "dt",
          label: "Paso de simulación",
          input: "number",
          unit: "s",
          min: 0.01,
          max: 0.2,
          step: 0.01,
          value: dt,
        },
      ],
      outputs: [
        {
          id: "tiempo-impacto",
          label: "Tiempo de impacto",
          unit: "s",
          value: redondear(simulacion.tiempoImpacto, 2),
        },
        {
          id: "velocidad-impacto",
          label: "Velocidad de impacto",
          unit: "m/s",
          value: redondear(simulacion.velocidadImpacto, 2),
          description: usarResistencia
            ? "Resultado con resistencia lineal activada."
            : "Resultado ideal (sin resistencia).",
        },
        {
          id: "energia-cinetica",
          label: "Energía cinética final",
          unit: "J",
          value: redondear(0.5 * masa * simulacion.velocidadImpacto ** 2, 2),
        },
        {
          id: "velocidad-teorica",
          label: "Velocidad teórica sin resistencia",
          unit: "m/s",
          value: redondear(velocidadTeorica, 2),
          description: "Cálculo con el motor existente (v = g · t).",
        },
        {
          id: "velocidad-base",
          label: "Velocidad base (generador)",
          value: ejercicioBase.respuestaCorrecta,
          description:
            "Valor reutilizado del generador de ejercicios de caída libre.",
        },
      ],
      series: [
        {
          id: "altura-serie",
          label: "Altura vs tiempo",
          unit: "m",
          data: simulacion.serieAltura,
          color: "#2563eb",
        },
        {
          id: "velocidad-serie",
          label: "Velocidad vs tiempo",
          unit: "m/s",
          data: simulacion.serieVelocidad,
          color: "#f97316",
        },
      ],
      notes: [
        "La resistencia lineal es una aproximación útil para velocidades moderadas.",
        "Puedes comparar con el resultado base del generador para validar.",
      ],
    }),
    [
      altura,
      g,
      masa,
      coeficiente,
      usarResistencia,
      dt,
      simulacion,
      velocidadTeorica,
      ejercicioBase.respuestaCorrecta,
    ],
  );

  return (
    <div className="space-y-6 px-6 py-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Laboratorio de simulaciones
        </h1>
        <p className="text-sm text-slate-600">
          Ajusta los parámetros para explorar modelos físicos y compara con
          resultados generados automáticamente.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">
          Controles de la simulación
        </h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-600">
            <span className="font-medium text-slate-700">Altura inicial (m)</span>
            <input
              type="range"
              min={5}
              max={120}
              step={1}
              value={altura}
              onChange={(event) => setAltura(Number(event.target.value))}
              className="w-full accent-blue-600"
            />
            <input
              type="number"
              min={5}
              max={120}
              step={1}
              value={altura}
              onChange={(event) => setAltura(Number(event.target.value))}
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            />
          </label>

          <label className="space-y-2 text-sm text-slate-600">
            <span className="font-medium text-slate-700">Gravedad (m/s²)</span>
            <input
              type="range"
              min={1}
              max={15}
              step={0.1}
              value={g}
              onChange={(event) => setG(Number(event.target.value))}
              className="w-full accent-blue-600"
            />
            <input
              type="number"
              min={1}
              max={15}
              step={0.1}
              value={g}
              onChange={(event) => setG(Number(event.target.value))}
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            />
          </label>

          <label className="space-y-2 text-sm text-slate-600">
            <span className="font-medium text-slate-700">Masa (kg)</span>
            <input
              type="range"
              min={0.5}
              max={10}
              step={0.1}
              value={masa}
              onChange={(event) => setMasa(Number(event.target.value))}
              className="w-full accent-blue-600"
            />
            <input
              type="number"
              min={0.5}
              max={10}
              step={0.1}
              value={masa}
              onChange={(event) => setMasa(Number(event.target.value))}
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            />
          </label>

          <label className="space-y-2 text-sm text-slate-600">
            <span className="font-medium text-slate-700">
              Coeficiente de resistencia (1/s)
            </span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={coeficiente}
              onChange={(event) => setCoeficiente(Number(event.target.value))}
              className="w-full accent-blue-600"
            />
            <input
              type="number"
              min={0}
              max={1}
              step={0.01}
              value={coeficiente}
              onChange={(event) => setCoeficiente(Number(event.target.value))}
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            />
          </label>

          <label className="flex items-center gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={usarResistencia}
              onChange={(event) => setUsarResistencia(event.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />
            <span className="font-medium text-slate-700">
              Usar resistencia del aire
            </span>
          </label>

          <label className="space-y-2 text-sm text-slate-600">
            <span className="font-medium text-slate-700">
              Paso de simulación (s)
            </span>
            <input
              type="range"
              min={0.01}
              max={0.2}
              step={0.01}
              value={dt}
              onChange={(event) => setDt(Number(event.target.value))}
              className="w-full accent-blue-600"
            />
            <input
              type="number"
              min={0.01}
              max={0.2}
              step={0.01}
              value={dt}
              onChange={(event) => setDt(Number(event.target.value))}
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
        </div>
      </section>

      <FreeFallSimulationVisualizer spec={spec} />
    </div>
  );
}
