import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type { StatDistributionSpec, StatRegressionSpec } from "../../visualizadores/types";

type Tool = "distribution" | "regression";

const FIXED_POINTS: Array<{ x: number; y: number }> = [
  { x: 1, y: 2.1 },
  { x: 2, y: 3.8 },
  { x: 3, y: 5.2 },
  { x: 4, y: 6.9 },
  { x: 5, y: 8.1 },
  { x: 6, y: 9.4 },
  { x: 7, y: 11.3 },
  { x: 8, y: 12.5 },
  { x: 9, y: 13.8 },
  { x: 10, y: 15.2 },
  { x: 11, y: 16.7 },
  { x: 12, y: 18.1 },
  { x: 13, y: 19.6 },
  { x: 14, y: 21.0 },
  { x: 15, y: 22.4 },
  { x: 16, y: 23.9 },
  { x: 17, y: 25.1 },
  { x: 18, y: 26.8 },
  { x: 19, y: 28.0 },
  { x: 20, y: 29.5 },
];

function computeRegression(points: Array<{ x: number; y: number }>) {
  const n = points.length;
  const sumX = points.reduce((s, p) => s + p.x, 0);
  const sumY = points.reduce((s, p) => s + p.y, 0);
  const sumXY = points.reduce((s, p) => s + p.x * p.y, 0);
  const sumX2 = points.reduce((s, p) => s + p.x * p.x, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  const yMean = sumY / n;
  const ssTot = points.reduce((s, p) => s + (p.y - yMean) ** 2, 0);
  const ssRes = points.reduce((s, p) => {
    const predicted = slope * p.x + intercept;
    return s + (p.y - predicted) ** 2;
  }, 0);
  const r2 = ssTot === 0 ? 1 : 1 - ssRes / ssTot;

  return { slope, intercept, r2 };
}

export default function HerramientasEstadistica() {
  const [activeTool, setActiveTool] = useState<Tool>("distribution");

  // Distribution parameters
  const [mean, setMean] = useState(0);
  const [stdDev, setStdDev] = useState(1);
  const [distType, setDistType] = useState<"normal" | "binomial" | "uniform">("normal");

  const distributionSpec = useMemo<StatDistributionSpec>(() => {
    const curve = Array.from({ length: 50 }, (_, i) => {
      const x = -4 + i * 0.16 + mean;
      const y =
        (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * ((x - mean) / stdDev) ** 2);
      return { x: parseFloat(x.toFixed(3)), y: parseFloat(y.toFixed(5)) };
    });

    return {
      kind: "stat-distribution",
      title: "Distribución de probabilidad",
      description: `Distribución ${distType} con media ${mean} y desviación estándar ${stdDev}.`,
      distributionType: distType,
      parameters: {
        mean,
        stdDev,
      },
      samples: 50,
      curve,
      annotations: [
        { x: mean, label: `μ = ${mean}`, color: "#2563eb" },
        { x: mean + stdDev, label: `μ + σ`, color: "#7c3aed" },
        { x: mean - stdDev, label: `μ − σ`, color: "#7c3aed" },
      ],
    };
  }, [mean, stdDev, distType]);

  const regressionSpec = useMemo<StatRegressionSpec>(() => {
    const { slope, intercept, r2 } = computeRegression(FIXED_POINTS);

    const xMin = 1;
    const xMax = 20;
    const line = [
      { x: xMin, y: slope * xMin + intercept },
      { x: xMax, y: slope * xMax + intercept },
    ];

    const residuals = FIXED_POINTS.map((p) => ({
      x: p.x,
      observed: p.y,
      predicted: parseFloat((slope * p.x + intercept).toFixed(3)),
    }));

    return {
      kind: "stat-regression",
      title: "Regresión lineal",
      description: `Pendiente: ${slope.toFixed(3)}, Intercepto: ${intercept.toFixed(3)}, R² = ${r2.toFixed(4)}`,
      points: FIXED_POINTS,
      regression: {
        type: "linear",
        coefficients: [intercept, slope],
        r2: parseFloat(r2.toFixed(4)),
        line,
      },
      axes: {
        x: { label: "Variable X", min: 0, max: 22 },
        y: { label: "Variable Y", min: 0, max: 32 },
      },
      residuals,
    };
  }, []);

  const tools: Array<{ id: Tool; label: string }> = [
    { id: "distribution", label: "Distribución" },
    { id: "regression", label: "Regresión" },
  ];

  return (
    <div className="space-y-6 px-6 py-8">
      <div className="flex items-center gap-3">
        <Link
          to="/herramientas"
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          &larr; Volver a herramientas
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Estadística</h1>
        <p className="text-sm text-slate-600">
          Explora distribuciones de probabilidad y regresión lineal de forma interactiva.
        </p>
      </header>

      <div className="flex gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === tool.id
                ? "bg-blue-600 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {activeTool === "distribution" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Parámetros de la distribución
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Media (μ): {mean}
                </span>
                <input
                  type="range"
                  min={-5}
                  max={5}
                  step={0.1}
                  value={mean}
                  onChange={(e) => setMean(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Desviación estándar (σ): {stdDev}
                </span>
                <input
                  type="range"
                  min={0.5}
                  max={4}
                  step={0.1}
                  value={stdDev}
                  onChange={(e) => setStdDev(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Tipo de distribución
                </span>
                <select
                  value={distType}
                  onChange={(e) =>
                    setDistType(e.target.value as "normal" | "binomial" | "uniform")
                  }
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="normal">Normal</option>
                  <option value="binomial">Binomial</option>
                  <option value="uniform">Uniforme</option>
                </select>
              </label>
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={distributionSpec} />
          </div>
        </>
      )}

      {activeTool === "regression" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Regresión lineal
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Dataset fijo de 20 puntos. La línea de regresión se calcula
              automáticamente usando mínimos cuadrados ordinarios.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {(() => {
                const { slope, intercept, r2 } = computeRegression(FIXED_POINTS);
                return (
                  <>
                    <div className="rounded-lg bg-blue-50 p-3 text-center">
                      <div className="text-xs text-slate-500">Pendiente</div>
                      <div className="text-lg font-semibold text-blue-700">
                        {slope.toFixed(3)}
                      </div>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-3 text-center">
                      <div className="text-xs text-slate-500">Intercepto</div>
                      <div className="text-lg font-semibold text-purple-700">
                        {intercept.toFixed(3)}
                      </div>
                    </div>
                    <div className="rounded-lg bg-green-50 p-3 text-center">
                      <div className="text-xs text-slate-500">R²</div>
                      <div className="text-lg font-semibold text-green-700">
                        {r2.toFixed(4)}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={regressionSpec} />
          </div>
        </>
      )}
    </div>
  );
}
