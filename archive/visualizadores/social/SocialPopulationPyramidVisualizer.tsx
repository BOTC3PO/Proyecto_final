import type { SocialPopulationPyramidSpec } from "../types";

type Props = { spec: SocialPopulationPyramidSpec };

const VIEW_WIDTH = 560;
const VIEW_HEIGHT = 360;
const CENTER_X = 280;
const MARGIN_TOP = 40;
const MARGIN_BOTTOM = 40;
const MARGIN_LEFT = 20;
const MARGIN_RIGHT = 20;

const BAR_HEIGHT = 16;
const BAR_SPACING = 20;
const BAR_MAX_LENGTH = 120;

const DEFAULT_MALE_COLOR = "#60a5fa";   // blue-400
const DEFAULT_FEMALE_COLOR = "#fb7185"; // rose-400


export default function SocialPopulationPyramidVisualizer({ spec }: Props) {
  const { ageGroups = [], year, unit, title, description } = spec;
  const maleColor = spec.maleColor ?? DEFAULT_MALE_COLOR;
  const femaleColor = spec.femaleColor ?? DEFAULT_FEMALE_COLOR;

  const allValues = ageGroups.flatMap((g) => [g.male, g.female]);
  const maxValue = allValues.length > 0 ? Math.max(...allValues) : 1;
  const safeMax = maxValue > 0 ? maxValue : 1;

  const numGroups = ageGroups.length;
  const totalBarsHeight = numGroups * BAR_SPACING;
  const chartTop = MARGIN_TOP + 20; // extra space for legend
  const chartBottom = VIEW_HEIGHT - MARGIN_BOTTOM;
  const availableHeight = chartBottom - chartTop;

  // Center pyramid vertically if fewer bars than space allows
  const pyramidHeight = Math.min(totalBarsHeight, availableHeight);
  const startY = chartTop + Math.max(0, (availableHeight - pyramidHeight) / 2);

  // X axis ticks: 25, 50, 75, 100 percent of max
  const tickPercents = [25, 50, 75, 100];
  const xTicks = tickPercents.map((pct) => ({
    value: Math.round((safeMax * pct) / 100),
    pct,
  }));

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {(title || description) && (
        <header className="mb-3">
          {title && (
            <h2 className="text-base font-semibold text-slate-900">{title}</h2>
          )}
          {description && (
            <p className="text-sm text-slate-500">{description}</p>
          )}
        </header>
      )}

      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="w-full"
        role="img"
        aria-label={title ?? "Pirámide poblacional"}
      >
        {/* Title */}
        <text
          x={CENTER_X}
          y={16}
          textAnchor="middle"
          fontSize={13}
          fontWeight="bold"
          fill="#1e293b"
        >
          {title ?? `Pirámide Poblacional ${year}`}
        </text>

        {/* Legend top-right */}
        <g transform={`translate(${VIEW_WIDTH - MARGIN_RIGHT - 120}, 28)`}>
          <rect x={0} y={-8} width={12} height={10} fill={maleColor} rx={2} />
          <text x={16} y={0} fontSize={9} fill="#475569">
            Hombres
          </text>
          <rect x={70} y={-8} width={12} height={10} fill={femaleColor} rx={2} />
          <text x={86} y={0} fontSize={9} fill="#475569">
            Mujeres
          </text>
        </g>

        {/* Center axis line */}
        <line
          x1={CENTER_X}
          y1={chartTop}
          x2={CENTER_X}
          y2={chartBottom}
          stroke="#94a3b8"
          strokeWidth={1}
        />

        {/* X axis baseline */}
        <line
          x1={MARGIN_LEFT}
          y1={chartBottom}
          x2={VIEW_WIDTH - MARGIN_RIGHT}
          y2={chartBottom}
          stroke="#94a3b8"
          strokeWidth={1}
        />

        {/* X axis symmetric ticks */}
        {xTicks.map((tick) => {
          const offset = (tick.pct / 100) * BAR_MAX_LENGTH;
          return (
            <g key={tick.pct}>
              {/* Left side tick */}
              <line
                x1={CENTER_X - offset}
                y1={chartBottom}
                x2={CENTER_X - offset}
                y2={chartBottom + 4}
                stroke="#94a3b8"
                strokeWidth={1}
              />
              <text
                x={CENTER_X - offset}
                y={chartBottom + 14}
                textAnchor="middle"
                fontSize={8}
                fill="#64748b"
              >
                {tick.value}
              </text>
              {/* Right side tick */}
              <line
                x1={CENTER_X + offset}
                y1={chartBottom}
                x2={CENTER_X + offset}
                y2={chartBottom + 4}
                stroke="#94a3b8"
                strokeWidth={1}
              />
              <text
                x={CENTER_X + offset}
                y={chartBottom + 14}
                textAnchor="middle"
                fontSize={8}
                fill="#64748b"
              >
                {tick.value}
              </text>
            </g>
          );
        })}

        {/* Unit label below x axis */}
        {unit && (
          <text
            x={CENTER_X}
            y={VIEW_HEIGHT - 4}
            textAnchor="middle"
            fontSize={9}
            fill="#94a3b8"
          >
            {unit === "percent" ? "%" : "personas"}
          </text>
        )}

        {/* Age group bars */}
        {ageGroups.map((group, i) => {
          const barY = startY + i * BAR_SPACING;
          const maleWidth =
            safeMax > 0 ? (group.male / safeMax) * BAR_MAX_LENGTH : 0;
          const femaleWidth =
            safeMax > 0 ? (group.female / safeMax) * BAR_MAX_LENGTH : 0;

          return (
            <g key={group.label}>
              {/* Age label centered */}
              <text
                x={CENTER_X}
                y={barY + BAR_HEIGHT / 2 + 4}
                textAnchor="middle"
                fontSize={8}
                fill="#334155"
                fontWeight="600"
              >
                {group.label}
              </text>

              {/* Male bar (growing left) */}
              {maleWidth > 0 && (
                <rect
                  x={CENTER_X - maleWidth - 22}
                  y={barY}
                  width={maleWidth}
                  height={BAR_HEIGHT}
                  fill={maleColor}
                  rx={2}
                  opacity={0.85}
                />
              )}

              {/* Female bar (growing right) */}
              {femaleWidth > 0 && (
                <rect
                  x={CENTER_X + 22}
                  y={barY}
                  width={femaleWidth}
                  height={BAR_HEIGHT}
                  fill={femaleColor}
                  rx={2}
                  opacity={0.85}
                />
              )}
            </g>
          );
        })}
      </svg>
    </section>
  );
}
