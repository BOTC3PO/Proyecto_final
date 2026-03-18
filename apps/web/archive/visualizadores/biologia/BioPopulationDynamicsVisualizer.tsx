import type { BioPopulationDynamicsSpec } from "../types";

type BioPopulationDynamicsVisualizerProps = {
  spec: BioPopulationDynamicsSpec;
};

type SeriesPoint = { t: number; value: number };

type Range = {
  min: number;
  max: number;
};

const VIEW_WIDTH = 560;
const VIEW_HEIGHT = 280;
const MARGIN = { top: 24, right: 100, bottom: 40, left: 60 };

const createScale = (
  domain: Range,
  range: Range,
): ((value: number) => number) => {
  return (value) => {
    if (domain.max === domain.min) return (range.min + range.max) / 2;
    const ratio = (value - domain.min) / (domain.max - domain.min);
    return range.min + ratio * (range.max - range.min);
  };
};

const buildLinePath = (
  data: SeriesPoint[],
  xScale: (v: number) => number,
  yScale: (v: number) => number,
): string => {
  if (data.length === 0) return "";
  return data
    .map((point, index) => {
      const command = index === 0 ? "M" : "L";
      return `${command} ${xScale(point.t).toFixed(2)} ${yScale(point.value).toFixed(2)}`;
    })
    .join(" ");
};

const getTimeRange = (allData: SeriesPoint[]): Range => {
  if (allData.length === 0) return { min: 0, max: 1 };
  const times = allData.map((p) => p.t);
  const min = Math.min(...times);
  const max = Math.max(...times);
  return min === max ? { min: Math.max(0, min - 1), max: max + 1 } : { min, max };
};

const getValueRange = (allData: SeriesPoint[]): Range => {
  if (allData.length === 0) return { min: 0, max: 1 };
  const values = allData.map((p) => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) return { min: Math.max(0, min - 1), max: max + 1 };
  const padding = (max - min) * 0.08;
  return { min: Math.max(0, min - padding), max: max + padding };
};

const DEFAULT_COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#d97706",
  "#7c3aed",
  "#0891b2",
];

export default function BioPopulationDynamicsVisualizer({
  spec,
}: BioPopulationDynamicsVisualizerProps) {
  const allData: SeriesPoint[] = spec.timeSeries.flatMap((s) => s.data);

  const timeRange = getTimeRange(allData);
  const valueRange = getValueRange(allData);

  const plotLeft = MARGIN.left;
  const plotRight = VIEW_WIDTH - MARGIN.right;
  const plotTop = MARGIN.top;
  const plotBottom = VIEW_HEIGHT - MARGIN.bottom;
  const plotWidth = plotRight - plotLeft;
  const plotHeight = plotBottom - plotTop;

  const xScale = createScale(timeRange, { min: plotLeft, max: plotRight });
  const yScale = createScale(valueRange, { min: plotBottom, max: plotTop });

  const gridLevels = 4;
  const gridLines = Array.from({ length: gridLevels }, (_, i) => {
    const frac = (i + 1) / (gridLevels + 1);
    const val = valueRange.min + frac * (valueRange.max - valueRange.min);
    const y = yScale(val);
    return { y, val };
  });

  const xTicks = 5;
  const xTickValues = Array.from({ length: xTicks + 1 }, (_, i) => {
    const frac = i / xTicks;
    const val = timeRange.min + frac * (timeRange.max - timeRange.min);
    const x = xScale(val);
    return { x, val };
  });

  const modelLabel =
    spec.model === "logistic"
      ? "Modelo Logístico"
      : spec.model === "lotka-volterra"
        ? "Lotka-Volterra"
        : "Crecimiento Exponencial";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Dinámica de Poblaciones
          </p>
          <h2 className="text-xl font-semibold text-slate-900">
            {spec.title ?? "Dinámica Poblacional"}
          </h2>
          {spec.description && (
            <p className="mt-1 text-sm text-slate-600">{spec.description}</p>
          )}
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          {modelLabel}
        </span>
      </header>

      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="w-full"
        role="img"
        aria-label={spec.title ?? "Dinámica de Poblaciones"}
      >
        {/* Plot background */}
        <rect
          x={plotLeft}
          y={plotTop}
          width={plotWidth}
          height={plotHeight}
          fill="#f8fafc"
          rx={4}
        />

        {/* Horizontal grid lines */}
        {gridLines.map(({ y, val }) => (
          <g key={val}>
            <line
              x1={plotLeft}
              y1={y}
              x2={plotRight}
              y2={y}
              stroke="#e2e8f0"
              strokeWidth={1}
            />
            <text
              x={plotLeft - 6}
              y={y}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize={9}
              fill="#94a3b8"
            >
              {val >= 1000
                ? `${(val / 1000).toFixed(1)}k`
                : val.toFixed(0)}
            </text>
          </g>
        ))}

        {/* Y axis min/max labels */}
        <text
          x={plotLeft - 6}
          y={plotBottom}
          textAnchor="end"
          dominantBaseline="middle"
          fontSize={9}
          fill="#94a3b8"
        >
          {valueRange.min >= 1000
            ? `${(valueRange.min / 1000).toFixed(1)}k`
            : valueRange.min.toFixed(0)}
        </text>
        <text
          x={plotLeft - 6}
          y={plotTop}
          textAnchor="end"
          dominantBaseline="middle"
          fontSize={9}
          fill="#94a3b8"
        >
          {valueRange.max >= 1000
            ? `${(valueRange.max / 1000).toFixed(1)}k`
            : valueRange.max.toFixed(0)}
        </text>

        {/* X axis ticks */}
        {xTickValues.map(({ x, val }) => (
          <g key={val}>
            <line
              x1={x}
              y1={plotBottom}
              x2={x}
              y2={plotBottom + 4}
              stroke="#94a3b8"
              strokeWidth={1}
            />
            <text
              x={x}
              y={plotBottom + 14}
              textAnchor="middle"
              fontSize={9}
              fill="#94a3b8"
            >
              {val.toFixed(0)}
            </text>
          </g>
        ))}

        {/* Axes */}
        <line
          x1={plotLeft}
          y1={plotTop}
          x2={plotLeft}
          y2={plotBottom}
          stroke="#cbd5e1"
          strokeWidth={1.5}
        />
        <line
          x1={plotLeft}
          y1={plotBottom}
          x2={plotRight}
          y2={plotBottom}
          stroke="#cbd5e1"
          strokeWidth={1.5}
        />

        {/* Axis labels */}
        <text
          x={(plotLeft + plotRight) / 2}
          y={VIEW_HEIGHT - 4}
          textAnchor="middle"
          fontSize={10}
          fill="#64748b"
        >
          {spec.axes.x.label ?? "Tiempo"}
        </text>
        <text
          x={10}
          y={(plotTop + plotBottom) / 2}
          textAnchor="middle"
          fontSize={10}
          fill="#64748b"
          transform={`rotate(-90, 10, ${(plotTop + plotBottom) / 2})`}
        >
          {spec.axes.y.label ?? "Población"}
        </text>

        {/* Series lines */}
        {spec.timeSeries.map((series, i) => {
          const color = series.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length];
          const path = buildLinePath(series.data, xScale, yScale);
          if (!path) return null;
          return (
            <path
              key={series.id}
              d={path}
              fill="none"
              stroke={color}
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          );
        })}

        {/* Legend */}
        {spec.timeSeries.map((series, i) => {
          const color = series.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length];
          const legendY = plotTop + 8 + i * 18;
          return (
            <g key={series.id}>
              <circle
                cx={plotRight + 10}
                cy={legendY}
                r={5}
                fill={color}
              />
              <text
                x={plotRight + 19}
                y={legendY}
                dominantBaseline="middle"
                fontSize={9}
                fill="#475569"
              >
                {series.label.length > 12
                  ? series.label.slice(0, 11) + "…"
                  : series.label}
              </text>
            </g>
          );
        })}

        {/* Model title inside chart */}
        <text
          x={plotLeft + 6}
          y={plotTop + 12}
          fontSize={9}
          fill="#94a3b8"
        >
          {modelLabel}
        </text>
      </svg>
    </section>
  );
}
