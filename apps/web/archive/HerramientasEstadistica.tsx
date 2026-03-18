import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "./visualizadores/graficos/VisualizerRenderer";
import type { StatDistributionSpec, StatRegressionSpec } from "./visualizadores/types";

type Tool = "distribution" | "regression";

type DataPoint = { x: number; y: number };
type AnnotationRow = { x: number; label: string; color: string };

const DEFAULT_POINTS: DataPoint[] = [
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

function computeRegression(points: DataPoint[]) {
  const n = points.length;
  if (n === 0) return { slope: 0, intercept: 0, r2: 0 };
  const sumX = points.reduce((s, p) => s + p.x, 0);
  const sumY = points.reduce((s, p) => s + p.y, 0);
  const sumXY = points.reduce((s, p) => s + p.x * p.y, 0);
  const sumX2 = points.reduce((s, p) => s + p.x * p.x, 0);

  const denom = n * sumX2 - sumX * sumX;
  const slope = denom === 0 ? 0 : (n * sumXY - sumX * sumY) / denom;
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

  // ── Distribution state ──────────────────────────────────────────────────
  const [distTitle, setDistTitle] = useState("Distribucion de probabilidad");
  const [mean, setMean] = useState(0);
  const [stdDev, setStdDev] = useState(1);
  const [distType, setDistType] = useState<"normal" | "binomial" | "uniform">("normal");
  const [samples, setSamples] = useState(50);
  const [annotations, setAnnotations] = useState<AnnotationRow[]>([
    { x: 0, label: "mu = 0", color: "#2563eb" },
    { x: 1, label: "mu + sigma", color: "#7c3aed" },
    { x: -1, label: "mu - sigma", color: "#7c3aed" },
  ]);

  // ── Regression state ────────────────────────────────────────────────────
  const [regTitle, setRegTitle] = useState("Regresion lineal");
  const [dataPoints, setDataPoints] = useState<DataPoint[]>(DEFAULT_POINTS);

  // ── Distribution spec ───────────────────────────────────────────────────

  const distributionSpec = useMemo<StatDistributionSpec>(() => {
    const curve = Array.from({ length: samples }, (_, i) => {
      const x = -4 + i * (8 / samples) + mean;
      const y =
        (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * ((x - mean) / stdDev) ** 2);
      return { x: parseFloat(x.toFixed(3)), y: parseFloat(y.toFixed(5)) };
    });

    return {
      kind: "stat-distribution",
      title: distTitle || "Distribucion de probabilidad",
      description: `Distribucion ${distType} con media ${mean} y desviacion estandar ${stdDev}.`,
      distributionType: distType,
      parameters: { mean, stdDev },
      samples,
      curve,
      annotations: annotations.map((a) => ({
        x: a.x,
        label: a.label,
        color: a.color,
      })),
    };
  }, [distTitle, mean, stdDev, distType, samples, annotations]);

  // ── Regression spec ─────────────────────────────────────────────────────

  const regressionSpec = useMemo<StatRegressionSpec>(() => {
    const { slope, intercept, r2 } = computeRegression(dataPoints);

    const xMin = dataPoints.length > 0 ? Math.min(...dataPoints.map((p) => p.x)) : 0;
    const xMax = dataPoints.length > 0 ? Math.max(...dataPoints.map((p) => p.x)) : 1;
    const yMax = dataPoints.length > 0 ? Math.max(...dataPoints.map((p) => p.y)) : 1;
    const line = [
      { x: xMin, y: slope * xMin + intercept },
      { x: xMax, y: slope * xMax + intercept },
    ];

    const residuals = dataPoints.map((p) => ({
      x: p.x,
      observed: p.y,
      predicted: parseFloat((slope * p.x + intercept).toFixed(3)),
    }));

    return {
      kind: "stat-regression",
      title: regTitle || "Regresion lineal",
      description: `Pendiente: ${slope.toFixed(3)}, Intercepto: ${intercept.toFixed(3)}, R² = ${r2.toFixed(4)}`,
      points: dataPoints,
      regression: {
        type: "linear",
        coefficients: [intercept, slope],
        r2: parseFloat(r2.toFixed(4)),
        line,
      },
      axes: {
        x: { label: "Variable X", min: 0, max: Math.ceil(xMax + 2) },
        y: { label: "Variable Y", min: 0, max: Math.ceil(yMax + 2) },
      },
      residuals,
    };
  }, [regTitle, dataPoints]);

  // ── Data point helpers ──────────────────────────────────────────────────

  const updatePoint = (index: number, field: "x" | "y", value: number) => {
    setDataPoints((prev) => {
      const n = [...prev];
      n[index] = { ...n[index], [field]: value };
      return n;
    });
  };

  const addPoint = () => {
    setDataPoints((prev) => {
      const lastX = prev.length > 0 ? prev[prev.length - 1].x + 1 : 1;
      return [...prev, { x: lastX, y: 0 }];
    });
  };

  const removePoint = (index: number) => {
    setDataPoints((prev) => prev.filter((_, i) => i !== index));
  };

  // ── Annotation helpers ──────────────────────────────────────────────────

  const updateAnnotation = (index: number, field: keyof AnnotationRow, value: string | number) => {
    setAnnotations((prev) => {
      const n = [...prev];
      n[index] = { ...n[index], [field]: value };
      return n;
    });
  };

  const addAnnotation = () => {
    setAnnotations((prev) => [...prev, { x: mean, label: "Nueva", color: "#64748b" }]);
  };

  const removeAnnotation = (index: number) => {
    setAnnotations((prev) => prev.filter((_, i) => i !== index));
  };

  const tools: Array<{ id: Tool; label: string }> = [
    { id: "distribution", label: "Distribucion" },
    { id: "regression", label: "Regresion" },
  ];

  const { slope, intercept, r2 } = useMemo(() => computeRegression(dataPoints), [dataPoints]);

  return (
    <div className="space-y-6 px-6 py-8">
      <div>
        <Link
          to="/herramientas"
          className="text-sm text-blue-600 hover:underline"
        >
          &larr; Volver a herramientas
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Estadistica</h1>
        <p className="text-sm text-slate-600">
          Explora distribuciones de probabilidad y regresion lineal de forma interactiva.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === tool.id
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-700"
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {/* ── DISTRIBUCION ── */}
      {activeTool === "distribution" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parametros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Titulo</label>
              <input
                type="text"
                value={distTitle}
                onChange={(e) => setDistTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Media (mu)</label>
                <span className="text-xs text-blue-700 font-mono">{mean}</span>
              </div>
              <input
                type="range" min={-5} max={5} step={0.1} value={mean}
                onChange={(e) => setMean(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Desviacion estandar (sigma)</label>
                <span className="text-xs text-blue-700 font-mono">{stdDev}</span>
              </div>
              <input
                type="range" min={0.5} max={4} step={0.1} value={stdDev}
                onChange={(e) => setStdDev(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Tipo de distribucion</label>
              <select
                value={distType}
                onChange={(e) => setDistType(e.target.value as "normal" | "binomial" | "uniform")}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              >
                <option value="normal">Normal</option>
                <option value="binomial">Binomial</option>
                <option value="uniform">Uniforme</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Muestras</label>
                <span className="text-xs text-blue-700 font-mono">{samples}</span>
              </div>
              <input
                type="range" min={10} max={200} step={1} value={samples}
                onChange={(e) => setSamples(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            {/* Editable annotations */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Anotaciones</label>
                <button
                  type="button"
                  onClick={addAnnotation}
                  className="text-xs text-blue-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">Pos. X</th>
                      <th className="text-left px-2 py-1.5 font-medium">Etiqueta</th>
                      <th className="text-left px-2 py-1.5 font-medium">Color</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {annotations.map((a, i) => (
                      <tr key={i} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            type="number" step="any"
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                            value={a.x}
                            onChange={(e) => updateAnnotation(i, "x", Number(e.target.value))}
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                            value={a.label}
                            onChange={(e) => updateAnnotation(i, "label", e.target.value)}
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            type="color"
                            value={a.color}
                            onChange={(e) => updateAnnotation(i, "color", e.target.value)}
                            className="h-6 w-6 rounded border border-slate-200 cursor-pointer p-0"
                          />
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => removeAnnotation(i)}
                            className="text-red-400 hover:text-red-600 text-sm leading-none px-1"
                          >
                            x
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setDistTitle("Distribucion de probabilidad");
                setMean(0);
                setStdDev(1);
                setDistType("normal");
                setSamples(50);
                setAnnotations([
                  { x: 0, label: "mu = 0", color: "#2563eb" },
                  { x: 1, label: "mu + sigma", color: "#7c3aed" },
                  { x: -1, label: "mu - sigma", color: "#7c3aed" },
                ]);
              }}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Restablecer valores
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={distributionSpec} />
          </section>
        </div>
      )}

      {/* ── REGRESION ── */}
      {activeTool === "regression" && (
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parametros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Titulo</label>
              <input
                type="text"
                value={regTitle}
                onChange={(e) => setRegTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-blue-50 p-2 text-center">
                <div className="text-[10px] text-slate-500">Pendiente</div>
                <div className="text-sm font-semibold text-blue-700">{slope.toFixed(3)}</div>
              </div>
              <div className="rounded-lg bg-purple-50 p-2 text-center">
                <div className="text-[10px] text-slate-500">Intercepto</div>
                <div className="text-sm font-semibold text-purple-700">{intercept.toFixed(3)}</div>
              </div>
              <div className="rounded-lg bg-green-50 p-2 text-center">
                <div className="text-[10px] text-slate-500">R2</div>
                <div className="text-sm font-semibold text-green-700">{r2.toFixed(4)}</div>
              </div>
            </div>

            {/* Editable data points */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Puntos de datos ({dataPoints.length})</label>
                <button
                  type="button"
                  onClick={addPoint}
                  className="text-xs text-blue-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-y-auto max-h-60 rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead className="sticky top-0">
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">#</th>
                      <th className="text-left px-2 py-1.5 font-medium">X</th>
                      <th className="text-left px-2 py-1.5 font-medium">Y</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {dataPoints.map((p, i) => (
                      <tr key={i} className="border-t border-slate-100">
                        <td className="px-2 py-0.5 text-slate-400">{i + 1}</td>
                        <td className="px-1 py-0.5">
                          <input
                            type="number" step="any"
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                            value={p.x}
                            onChange={(e) => updatePoint(i, "x", Number(e.target.value))}
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            type="number" step="any"
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                            value={p.y}
                            onChange={(e) => updatePoint(i, "y", Number(e.target.value))}
                          />
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => removePoint(i)}
                            className="text-red-400 hover:text-red-600 text-sm leading-none px-1"
                          >
                            x
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setRegTitle("Regresion lineal");
                setDataPoints(DEFAULT_POINTS);
              }}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Restablecer datos
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={regressionSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
