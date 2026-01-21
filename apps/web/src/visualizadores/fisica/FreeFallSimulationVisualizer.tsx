import type { PhysicsSimulationSpec } from "../types";

type FreeFallSimulationVisualizerProps = {
  spec: PhysicsSimulationSpec;
};

type SeriesPoint = { t: number; value: number };

type Range = {
  min: number;
  max: number;
};

const chartSize = {
  width: 520,
  height: 200,
  margin: { top: 18, right: 24, bottom: 30, left: 46 },
};

const formatValue = (value: number | string | boolean) => {
  if (typeof value === "number") {
    return Number.isInteger(value) ? value.toString() : value.toFixed(2);
  }
  if (typeof value === "boolean") {
    return value ? "Sí" : "No";
  }
  return value;
};

const getRange = (data: SeriesPoint[]): Range => {
  if (data.length === 0) {
    return { min: 0, max: 1 };
  }
  const values = data.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) {
    return { min: min - 1, max: max + 1 };
  }
  const padding = (max - min) * 0.08;
  return { min: min - padding, max: max + padding };
};

const getTimeRange = (data: SeriesPoint[]): Range => {
  if (data.length === 0) {
    return { min: 0, max: 1 };
  }
  const times = data.map((point) => point.t);
  const min = Math.min(...times);
  const max = Math.max(...times);
  if (min === max) {
    return { min: Math.max(0, min - 1), max: max + 1 };
  }
  return { min, max };
};

const createScale = (
  domain: Range,
  range: Range,
): ((value: number) => number) => {
  return (value) => {
    const ratio = (value - domain.min) / (domain.max - domain.min);
    return range.min + ratio * (range.max - range.min);
  };
};

const buildLinePath = (
  data: SeriesPoint[],
  xScale: (v: number) => number,
  yScale: (v: number) => number,
) => {
  return data
    .map((point, index) => {
      const command = index === 0 ? "M" : "L";
      return `${command} ${xScale(point.t)} ${yScale(point.value)}`;
    })
    .join(" ");
};

export default function FreeFallSimulationVisualizer({
  spec,
}: FreeFallSimulationVisualizerProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="space-y-2">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Simulación física
            </p>
            <h2 className="text-xl font-semibold text-slate-900">
              {spec.title ?? "Simulación"}
            </h2>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            {spec.model.label}
          </div>
        </div>
        {spec.description && (
          <p className="text-sm text-slate-600">{spec.description}</p>
        )}
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-800">Modelo</h3>
            <div className="mt-2 space-y-2 text-sm text-slate-600">
              {spec.model.equation && (
                <p className="font-medium text-slate-700">
                  Ecuación: {spec.model.equation}
                </p>
              )}
              {spec.model.assumptions && spec.model.assumptions.length > 0 && (
                <ul className="list-disc space-y-1 pl-5">
                  {spec.model.assumptions.map((assumption) => (
                    <li key={assumption}>{assumption}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-800">
              Parámetros actuales
            </h3>
            <dl className="mt-3 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              {spec.parameters.map((parameter) => (
                <div key={parameter.id}>
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    {parameter.label}
                  </dt>
                  <dd className="font-semibold text-slate-700">
                    {formatValue(parameter.value)}
                    {parameter.unit ? ` ${parameter.unit}` : ""}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-800">Salidas</h3>
            <dl className="mt-3 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              {spec.outputs.map((output) => (
                <div key={output.id}>
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    {output.label}
                  </dt>
                  <dd className="font-semibold text-slate-700">
                    {formatValue(output.value)}
                    {output.unit ? ` ${output.unit}` : ""}
                  </dd>
                  {output.description && (
                    <p className="mt-1 text-xs text-slate-500">
                      {output.description}
                    </p>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-4">
          {(spec.series ?? []).map((serie) => {
            const timeRange = getTimeRange(serie.data);
            const valueRange = getRange(serie.data);
            const xScale = createScale(timeRange, {
              min: chartSize.margin.left,
              max: chartSize.width - chartSize.margin.right,
            });
            const yScale = createScale(valueRange, {
              min: chartSize.height - chartSize.margin.bottom,
              max: chartSize.margin.top,
            });
            const path = buildLinePath(serie.data, xScale, yScale);

            return (
              <div
                key={serie.id}
                className="rounded-xl border border-slate-100 bg-white p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-slate-800">
                    {serie.label}
                  </h4>
                  {serie.unit && (
                    <span className="text-xs text-slate-500">
                      Unidad: {serie.unit}
                    </span>
                  )}
                </div>
                <svg
                  viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}
                  className="mt-3 w-full"
                  role="img"
                  aria-label={serie.label}
                >
                  <rect
                    x={chartSize.margin.left}
                    y={chartSize.margin.top}
                    width={
                      chartSize.width -
                      chartSize.margin.left -
                      chartSize.margin.right
                    }
                    height={
                      chartSize.height -
                      chartSize.margin.top -
                      chartSize.margin.bottom
                    }
                    className="fill-slate-50"
                    rx={6}
                  />
                  <path
                    d={path}
                    fill="none"
                    stroke={serie.color ?? "#2563eb"}
                    strokeWidth={2}
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      {spec.notes && spec.notes.length > 0 && (
        <footer className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-800">
            Observaciones
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {spec.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </footer>
      )}
    </section>
  );
}
