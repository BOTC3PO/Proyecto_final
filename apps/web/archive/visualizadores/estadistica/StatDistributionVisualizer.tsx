import type { StatDistributionSpec } from "../types";

type StatDistributionVisualizerProps = {
  spec: StatDistributionSpec;
};

type Range = { min: number; max: number };

const VIEW_WIDTH = 560;
const VIEW_HEIGHT = 260;
const MARGIN = { top: 20, right: 20, bottom: 40, left: 50 };
const PLOT_W = VIEW_WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = VIEW_HEIGHT - MARGIN.top - MARGIN.bottom;

const createScale = (domain: Range, range: Range) => (value: number) => {
  const ratio = (value - domain.min) / (domain.max - domain.min);
  return range.min + ratio * (range.max - range.min);
};

const getRange = (values: number[]): Range => {
  if (values.length === 0) return { min: 0, max: 1 };
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) return { min: min - 1, max: max + 1 };
  return { min, max };
};

const buildCurvePath = (
  points: Array<{ x: number; y: number }>,
  xScale: (v: number) => number,
  yScale: (v: number) => number,
): string => {
  if (points.length === 0) return "";
  return points
    .map((pt, i) => `${i === 0 ? "M" : "L"} ${xScale(pt.x).toFixed(2)} ${yScale(pt.y).toFixed(2)}`)
    .join(" ");
};

const Y_TICK_COUNT = 5;
const X_TICK_COUNT = 6;

export default function StatDistributionVisualizer({
  spec,
}: StatDistributionVisualizerProps) {
  const { distributionType, parameters, curve, histogram, annotations } = spec;

  // X domain from curve data
  const xValues = curve.map((pt) => pt.x);
  const xDomain = xValues.length > 0 ? getRange(xValues) : { min: 0, max: 1 };

  // Y domain: include both curve y values and histogram normalised heights
  const curveYMax = curve.length > 0 ? Math.max(...curve.map((pt) => pt.y)) : 1;
  const histYMax =
    histogram && histogram.length > 0
      ? Math.max(...histogram.map((b) => b.count))
      : 0;

  // For histogram bars we normalise count -> density so they align with the PDF.
  // Bin width estimated from consecutive histogram entries or 1.
  const binWidth =
    histogram && histogram.length > 1
      ? histogram[1].x - histogram[0].x
      : 1;
  const histDensityMax = histYMax / (binWidth > 0 ? binWidth : 1);

  const yMax = Math.max(curveYMax, histDensityMax) * 1.1 || 1;
  const yDomain: Range = { min: 0, max: yMax };

  const xScale = createScale(xDomain, { min: MARGIN.left, max: MARGIN.left + PLOT_W });
  const yScale = createScale(yDomain, { min: MARGIN.top + PLOT_H, max: MARGIN.top });

  const curvePath = buildCurvePath(curve, xScale, yScale);

  // Y axis ticks
  const yTicks = Array.from({ length: Y_TICK_COUNT + 1 }, (_, i) =>
    yDomain.min + (i / Y_TICK_COUNT) * (yDomain.max - yDomain.min),
  );

  // X axis ticks
  const xStep = (xDomain.max - xDomain.min) / X_TICK_COUNT;
  const xTicks = Array.from({ length: X_TICK_COUNT + 1 }, (_, i) =>
    xDomain.min + i * xStep,
  );

  // Normal distribution stat lines
  const mean = parameters.mean ?? 0;
  const stdDev = parameters.stdDev ?? 1;
  const showStatLines = distributionType === "normal";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {(spec.title || spec.description) && (
        <header className="mb-3">
          {spec.title && (
            <h2 className="text-base font-semibold text-slate-900">{spec.title}</h2>
          )}
          {spec.description && (
            <p className="text-sm text-slate-500">{spec.description}</p>
          )}
        </header>
      )}

      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="w-full"
        role="img"
        aria-label={spec.title ?? "Distribución estadística"}
      >
        {/* Plot area background */}
        <rect
          x={MARGIN.left}
          y={MARGIN.top}
          width={PLOT_W}
          height={PLOT_H}
          className="fill-slate-50"
          rx={4}
        />

        {/* Y grid lines + ticks */}
        {yTicks.map((val) => {
          const y = yScale(val);
          return (
            <g key={`y-${val}`}>
              <line
                x1={MARGIN.left}
                y1={y}
                x2={MARGIN.left + PLOT_W}
                y2={y}
                stroke="#E2E8F0"
                strokeWidth={1}
              />
              <text
                x={MARGIN.left - 6}
                y={y + 4}
                textAnchor="end"
                fontSize={9}
                className="fill-slate-500"
              >
                {val < 0.01 && val > 0 ? val.toExponential(1) : val.toFixed(3)}
              </text>
            </g>
          );
        })}

        {/* X axis ticks */}
        {xTicks.map((val) => {
          const x = xScale(val);
          return (
            <g key={`x-${val}`}>
              <line
                x1={x}
                y1={MARGIN.top + PLOT_H}
                x2={x}
                y2={MARGIN.top + PLOT_H + 4}
                stroke="#94A3B8"
                strokeWidth={1}
              />
              <text
                x={x}
                y={MARGIN.top + PLOT_H + 16}
                textAnchor="middle"
                fontSize={9}
                className="fill-slate-500"
              >
                {val % 1 === 0 ? val.toFixed(0) : val.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* Histogram bars */}
        {histogram && histogram.map((bin) => {
          const density = bin.count / (binWidth > 0 ? binWidth : 1);
          const barX = xScale(bin.x - binWidth / 2);
          const barX2 = xScale(bin.x + binWidth / 2);
          const barW = Math.max(1, barX2 - barX - 1);
          const barH = MARGIN.top + PLOT_H - yScale(density);
          const barY = yScale(density);
          return (
            <rect
              key={`hist-${bin.x}`}
              x={barX}
              y={barY}
              width={barW}
              height={Math.max(0, barH)}
              className="fill-blue-200"
              opacity={0.8}
            />
          );
        })}

        {/* Normal distribution stat lines: mean and ±1σ */}
        {showStatLines && (
          <>
            <line
              x1={xScale(mean)}
              y1={MARGIN.top}
              x2={xScale(mean)}
              y2={MARGIN.top + PLOT_H}
              stroke="#2563EB"
              strokeWidth={1.5}
              strokeDasharray="6 3"
            />
            <text
              x={xScale(mean) + 4}
              y={MARGIN.top + 12}
              fontSize={9}
              className="fill-blue-700"
            >
              μ={mean.toFixed(2)}
            </text>
            {xDomain.min <= mean - stdDev && mean - stdDev <= xDomain.max && (
              <>
                <line
                  x1={xScale(mean - stdDev)}
                  y1={MARGIN.top}
                  x2={xScale(mean - stdDev)}
                  y2={MARGIN.top + PLOT_H}
                  stroke="#93C5FD"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
                <text
                  x={xScale(mean - stdDev) + 3}
                  y={MARGIN.top + 22}
                  fontSize={8}
                  className="fill-blue-400"
                >
                  -1σ
                </text>
              </>
            )}
            {xDomain.min <= mean + stdDev && mean + stdDev <= xDomain.max && (
              <>
                <line
                  x1={xScale(mean + stdDev)}
                  y1={MARGIN.top}
                  x2={xScale(mean + stdDev)}
                  y2={MARGIN.top + PLOT_H}
                  stroke="#93C5FD"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
                <text
                  x={xScale(mean + stdDev) + 3}
                  y={MARGIN.top + 22}
                  fontSize={8}
                  className="fill-blue-400"
                >
                  +1σ
                </text>
              </>
            )}
          </>
        )}

        {/* Annotation vertical lines */}
        {annotations && annotations.map((ann) => {
          const ax = xScale(ann.x);
          const color = ann.color ?? "#7C3AED";
          return (
            <g key={`ann-${ann.label}-${ann.x}`}>
              <line
                x1={ax}
                y1={MARGIN.top}
                x2={ax}
                y2={MARGIN.top + PLOT_H}
                stroke={color}
                strokeWidth={1.5}
                strokeDasharray="5 3"
              />
              <text
                x={ax + 4}
                y={MARGIN.top + PLOT_H - 6}
                fontSize={9}
                fill={color}
              >
                {ann.label}
              </text>
            </g>
          );
        })}

        {/* PDF/PMF curve */}
        {curvePath && (
          <path
            d={curvePath}
            fill="none"
            stroke="#2563EB"
            strokeWidth={2}
            strokeLinejoin="round"
          />
        )}

        {/* Axes */}
        <line
          x1={MARGIN.left}
          y1={MARGIN.top + PLOT_H}
          x2={MARGIN.left + PLOT_W}
          y2={MARGIN.top + PLOT_H}
          stroke="#94A3B8"
          strokeWidth={1}
        />
        <line
          x1={MARGIN.left}
          y1={MARGIN.top}
          x2={MARGIN.left}
          y2={MARGIN.top + PLOT_H}
          stroke="#94A3B8"
          strokeWidth={1}
        />

        {/* Y axis label */}
        <text
          x={14}
          y={MARGIN.top + PLOT_H / 2}
          textAnchor="middle"
          fontSize={9}
          className="fill-slate-500"
          transform={`rotate(-90 14 ${MARGIN.top + PLOT_H / 2})`}
        >
          Probabilidad / Densidad
        </text>

        {/* X axis label */}
        <text
          x={MARGIN.left + PLOT_W / 2}
          y={VIEW_HEIGHT - 4}
          textAnchor="middle"
          fontSize={9}
          className="fill-slate-500"
        >
          Valor
        </text>

        {/* Distribution type badge */}
        <text
          x={MARGIN.left + PLOT_W - 4}
          y={MARGIN.top + 14}
          textAnchor="end"
          fontSize={10}
          className="fill-slate-400"
        >
          {distributionType === "normal"
            ? `N(μ=${mean}, σ=${stdDev})`
            : distributionType === "binomial"
            ? `B(n=${parameters.n}, p=${parameters.p})`
            : `U(${parameters.min}, ${parameters.max})`}
        </text>
      </svg>

      {/* Legend */}
      <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-6 rounded-sm bg-blue-200 opacity-80" />
          <span>Histograma</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-0.5 w-6"
            style={{ backgroundColor: "#2563EB" }}
          />
          <span>Curva PDF/PMF</span>
        </div>
        {showStatLines && (
          <>
            <div className="flex items-center gap-1.5">
              <span
                className="inline-block h-0.5 w-6 border-t-2 border-dashed border-blue-600"
              />
              <span>Media (μ)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="inline-block h-0.5 w-6 border-t-2 border-dashed border-blue-300"
              />
              <span>±1σ</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
