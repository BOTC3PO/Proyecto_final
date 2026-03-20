import type { StatRegressionSpec } from "../types";

type StatRegressionVisualizerProps = {
  spec: StatRegressionSpec;
};

type Range = { min: number; max: number };

const VIEW_WIDTH = 560;
const VIEW_HEIGHT = 280;
const MARGIN = { top: 20, right: 24, bottom: 40, left: 50 };
const PLOT_W = VIEW_WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = VIEW_HEIGHT - MARGIN.top - MARGIN.bottom;

const createScale = (domain: Range, range: Range) => (value: number) => {
  const span = domain.max - domain.min;
  if (span === 0) return (range.min + range.max) / 2;
  return range.min + ((value - domain.min) / span) * (range.max - range.min);
};

const buildLinePath = (
  points: Array<{ x: number; y: number }>,
  xScale: (v: number) => number,
  yScale: (v: number) => number,
): string => {
  if (points.length === 0) return "";
  return points
    .map(
      (pt, i) =>
        `${i === 0 ? "M" : "L"} ${xScale(pt.x).toFixed(2)} ${yScale(pt.y).toFixed(2)}`,
    )
    .join(" ");
};

const formatCoefficient = (val: number): string => {
  if (Math.abs(val) < 0.001) return val.toExponential(2);
  return val.toFixed(4);
};

const buildEquationLabel = (type: "linear" | "quadratic", coefficients: number[]): string => {
  if (type === "linear") {
    const [b, a] = coefficients.length >= 2 ? coefficients : [0, 1];
    const sign = (a ?? 0) >= 0 ? "+" : "-";
    return `ŷ = ${formatCoefficient(b ?? 0)} ${sign} ${formatCoefficient(Math.abs(a ?? 0))}x`;
  }
  // quadratic: a + bx + cx²
  const [a, b, c] = coefficients;
  const b0 = a ?? 0;
  const b1 = b ?? 0;
  const b2 = c ?? 0;
  const sign1 = b1 >= 0 ? "+" : "-";
  const sign2 = b2 >= 0 ? "+" : "-";
  return `ŷ = ${formatCoefficient(b0)} ${sign1} ${formatCoefficient(Math.abs(b1))}x ${sign2} ${formatCoefficient(Math.abs(b2))}x²`;
};

const Y_TICKS = 5;
const X_TICKS = 6;

export default function StatRegressionVisualizer({
  spec,
}: StatRegressionVisualizerProps) {
  const { points, regression, axes, residuals } = spec;

  const xDomain: Range = { min: axes.x.min, max: axes.x.max };
  const yDomain: Range = { min: axes.y.min, max: axes.y.max };

  const xScale = createScale(xDomain, { min: MARGIN.left, max: MARGIN.left + PLOT_W });
  const yScale = createScale(yDomain, { min: MARGIN.top + PLOT_H, max: MARGIN.top });

  const regressionPath = buildLinePath(regression.line, xScale, yScale);

  const yTicks = Array.from({ length: Y_TICKS + 1 }, (_, i) =>
    yDomain.min + (i / Y_TICKS) * (yDomain.max - yDomain.min),
  );
  const xStep = (xDomain.max - xDomain.min) / X_TICKS;
  const xTicks = Array.from({ length: X_TICKS + 1 }, (_, i) => xDomain.min + i * xStep);

  const equationLabel = buildEquationLabel(regression.type, regression.coefficients);

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
        aria-label={spec.title ?? "Regresión estadística"}
      >
        {/* Plot background */}
        <rect
          x={MARGIN.left}
          y={MARGIN.top}
          width={PLOT_W}
          height={PLOT_H}
          className="fill-slate-50"
          rx={4}
        />

        {/* Y grid + ticks */}
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
                {val % 1 === 0 ? val.toFixed(0) : val.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* X ticks */}
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

        {/* Residual dashed lines from observed point to regression line */}
        {residuals &&
          residuals.map((res) => {
            const cx = xScale(res.x);
            const cy = yScale(res.observed);
            const py = yScale(res.predicted);
            return (
              <line
                key={`res-${res.x}`}
                x1={cx}
                y1={cy}
                x2={cx}
                y2={py}
                stroke="#94A3B8"
                strokeWidth={1}
                strokeDasharray="3 3"
              />
            );
          })}

        {/* Regression line */}
        {regressionPath && (
          <path
            d={regressionPath}
            fill="none"
            stroke="#DC2626"
            strokeWidth={2}
            strokeLinejoin="round"
          />
        )}

        {/* Scatter points */}
        {points.map((pt, i) => {
          const cx = xScale(pt.x);
          const cy = yScale(pt.y);
          return (
            <g key={`pt-${i}-${pt.x}-${pt.y}`}>
              <circle cx={cx} cy={cy} r={5} className="fill-slate-600" />
              {pt.label && (
                <text
                  x={cx + 7}
                  y={cy + 4}
                  fontSize={8}
                  className="fill-slate-500"
                >
                  {pt.label}
                </text>
              )}
            </g>
          );
        })}

        {/* R² and equation displayed in upper right */}
        <rect
          x={MARGIN.left + PLOT_W - 140}
          y={MARGIN.top + 6}
          width={136}
          height={36}
          rx={4}
          className="fill-white"
          stroke="#E2E8F0"
          strokeWidth={1}
        />
        <text
          x={MARGIN.left + PLOT_W - 10}
          y={MARGIN.top + 20}
          textAnchor="end"
          fontSize={11}
          fontWeight="600"
          className="fill-slate-700"
        >
          R² = {regression.r2.toFixed(4)}
        </text>
        <text
          x={MARGIN.left + PLOT_W - 10}
          y={MARGIN.top + 35}
          textAnchor="end"
          fontSize={9}
          className="fill-slate-500"
        >
          {equationLabel}
        </text>

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
          {axes.y.label ?? "Y"}
        </text>

        {/* X axis label */}
        <text
          x={MARGIN.left + PLOT_W / 2}
          y={VIEW_HEIGHT - 4}
          textAnchor="middle"
          fontSize={9}
          className="fill-slate-500"
        >
          {axes.x.label ?? "X"}
        </text>
      </svg>

      {/* Legend */}
      <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14">
            <circle cx="7" cy="7" r="5" className="fill-slate-600" />
          </svg>
          <span>Observaciones</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-0.5 w-6"
            style={{ backgroundColor: "#DC2626" }}
          />
          <span>Línea de regresión</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-0.5 w-6 border-t border-dashed border-slate-400"
          />
          <span>Residuales</span>
        </div>
      </div>
    </section>
  );
}
