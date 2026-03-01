import { CivicBudgetSpec } from "../types";

// Auto-palette for categories without a color
const AUTO_PALETTE = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#84cc16",
  "#f97316",
  "#14b8a6",
];

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + "…";
}

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleDeg: number
): { x: number; y: number } {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function arcPath(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number
): string {
  // Clamp to avoid full-circle degenerate case
  const clampedEnd = Math.min(endDeg, startDeg + 359.99);
  const start = polarToCartesian(cx, cy, r, startDeg);
  const end = polarToCartesian(cx, cy, r, clampedEnd);
  const largeArc = clampedEnd - startDeg > 180 ? 1 : 0;
  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

export default function CivicBudgetVisualizer({
  spec,
}: {
  spec: CivicBudgetSpec;
}) {
  if (!spec) return null;

  const categories = spec.categories ?? [];
  const totalBudget = spec.totalBudget ?? 1;
  const currency = spec.currency ?? "$";
  const unit = spec.unit ?? "";

  // Compute savings slice
  const allocatedSum = categories.reduce((sum, c) => sum + (c.allocated ?? 0), 0);
  const savings = Math.max(0, totalBudget - allocatedSum);

  // Build pie slices
  type PieSlice = {
    label: string;
    value: number;
    color: string;
    percent: number;
    startDeg: number;
    endDeg: number;
    midDeg: number;
  };

  const slices: PieSlice[] = [];
  let currentDeg = 0;

  categories.forEach((cat, i) => {
    const value = cat.allocated ?? 0;
    const percent = totalBudget > 0 ? value / totalBudget : 0;
    const sweep = percent * 360;
    const color = cat.color ?? AUTO_PALETTE[i % AUTO_PALETTE.length];
    const startDeg = currentDeg;
    const endDeg = currentDeg + sweep;
    slices.push({
      label: cat.label,
      value,
      color,
      percent,
      startDeg,
      endDeg,
      midDeg: startDeg + sweep / 2,
    });
    currentDeg = endDeg;
  });

  // Savings slice
  if (savings > 0) {
    const percent = savings / totalBudget;
    const sweep = percent * 360;
    slices.push({
      label: "Ahorro",
      value: savings,
      color: "#6ee7b7",
      percent,
      startDeg: currentDeg,
      endDeg: currentDeg + sweep,
      midDeg: currentDeg + sweep / 2,
    });
  }

  // Pie chart center and radius (left half)
  const pieCx = 140;
  const pieCy = 155;
  const pieR = 90;

  // Bar chart parameters (right half)
  const barStartX = 295;
  const barAvailWidth = 240;
  const barRowHeight = 28;
  const barStartY = 55;
  const hasComparison = !!spec.comparison;

  // Max value for bar scale
  const maxAllocated = Math.max(
    ...categories.map((c) => c.allocated ?? 0),
    savings,
    hasComparison
      ? Math.max(...(spec.comparison?.categories ?? []).map((c) => c.allocated ?? 0))
      : 0,
    1
  );

  // Build comparison lookup
  const compMap = new Map<string, number>(
    (spec.comparison?.categories ?? []).map((c) => [c.id, c.allocated])
  );

  // Format number compactly
  function fmt(v: number): string {
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
    if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
    return v.toFixed(0);
  }

  const barRows = [...categories, ...(savings > 0 ? [{ id: "__savings", label: "Ahorro", allocated: savings, color: "#6ee7b7" }] : [])];

  return (
    <div>
      {/* Budget header */}
      <div className="px-4 pt-2 pb-1 flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
          {spec.title ?? "Presupuesto"}
        </span>
        <span className="ml-auto text-xs font-bold text-slate-800">
          {currency}
          {fmt(totalBudget)}
          {unit ? ` ${unit}` : ""}
        </span>
      </div>

      <svg
        viewBox="0 0 560 300"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Left: Pie chart ── */}

        {/* Divider */}
        <line x1={280} y1={10} x2={280} y2={290} stroke="#e2e8f0" strokeWidth={1} />

        {/* Section labels */}
        <text x={140} y={18} textAnchor="middle" fill="#64748b" fontSize={9} fontWeight="600">
          DISTRIBUCIÓN
        </text>
        <text x={420} y={18} textAnchor="middle" fill="#64748b" fontSize={9} fontWeight="600">
          {hasComparison ? `COMPARACIÓN: ${truncate(spec.comparison!.label, 18)}` : "DETALLE POR CATEGORÍA"}
        </text>

        {/* Pie slices */}
        {slices.map((slice, i) => (
          <path
            key={`slice-${i}`}
            d={arcPath(pieCx, pieCy, pieR, slice.startDeg, slice.endDeg)}
            fill={slice.color}
            stroke="white"
            strokeWidth={1.5}
          />
        ))}

        {/* Pie label lines and percentage text */}
        {slices
          .filter((s) => s.percent > 0.04)
          .map((slice, i) => {
            const inner = polarToCartesian(pieCx, pieCy, pieR + 6, slice.midDeg);
            const outer = polarToCartesian(pieCx, pieCy, pieR + 20, slice.midDeg);
            const textAnchor = outer.x > pieCx ? "start" : "end";
            const textX = outer.x > pieCx ? outer.x + 3 : outer.x - 3;
            return (
              <g key={`label-${i}`}>
                <line
                  x1={inner.x}
                  y1={inner.y}
                  x2={outer.x}
                  y2={outer.y}
                  stroke={slice.color}
                  strokeWidth={1}
                />
                <text
                  x={textX}
                  y={outer.y}
                  textAnchor={textAnchor}
                  fill="#374151"
                  fontSize={8}
                  fontWeight="500"
                >
                  {(slice.percent * 100).toFixed(0)}%
                </text>
              </g>
            );
          })}

        {/* Center label */}
        <text x={pieCx} y={pieCy - 4} textAnchor="middle" fill="#1e293b" fontSize={9} fontWeight="700">
          {currency}{fmt(totalBudget)}
        </text>
        <text x={pieCx} y={pieCy + 9} textAnchor="middle" fill="#64748b" fontSize={7}>
          total
        </text>

        {/* ── Right: Horizontal bar chart ── */}

        {barRows.map((cat, i) => {
          const allocated = cat.allocated ?? 0;
          const color = ("color" in cat && cat.color) ? cat.color : AUTO_PALETTE[i % AUTO_PALETTE.length];
          const barWidth = (allocated / maxAllocated) * barAvailWidth;
          const rowY = barStartY + i * barRowHeight;
          const compAllocated = compMap.get(cat.id);
          const compBarWidth = hasComparison && compAllocated != null
            ? (compAllocated / maxAllocated) * barAvailWidth
            : null;

          return (
            <g key={`bar-${cat.id}`}>
              {/* Label */}
              <text
                x={barStartX - 4}
                y={rowY + (hasComparison ? 8 : 10)}
                textAnchor="end"
                fill="#374151"
                fontSize={8}
              >
                {truncate(cat.label, 14)}
              </text>

              {/* Primary bar */}
              <rect
                x={barStartX}
                y={rowY}
                width={Math.max(barWidth, 1)}
                height={hasComparison ? 9 : 14}
                rx={2}
                fill={color}
                opacity={0.9}
              />

              {/* Comparison bar */}
              {hasComparison && compBarWidth != null && (
                <rect
                  x={barStartX}
                  y={rowY + 11}
                  width={Math.max(compBarWidth, 1)}
                  height={9}
                  rx={2}
                  fill={color}
                  opacity={0.4}
                />
              )}

              {/* Value text */}
              <text
                x={barStartX + Math.max(barWidth, 1) + 4}
                y={rowY + (hasComparison ? 8 : 10)}
                fill="#475569"
                fontSize={7}
              >
                {currency}{fmt(allocated)}
              </text>

              {/* Comparison value text */}
              {hasComparison && compAllocated != null && (
                <text
                  x={barStartX + Math.max(compBarWidth ?? 0, 1) + 4}
                  y={rowY + 18}
                  fill="#94a3b8"
                  fontSize={7}
                >
                  {currency}{fmt(compAllocated)}
                </text>
              )}
            </g>
          );
        })}

        {/* Legend for comparison */}
        {hasComparison && (
          <g transform={`translate(${barStartX}, ${barStartY + barRows.length * barRowHeight + 6})`}>
            <rect width={10} height={6} rx={1} fill="#64748b" opacity={0.9} />
            <text x={13} y={6} fill="#475569" fontSize={7}>
              Actual
            </text>
            <rect x={50} width={10} height={6} rx={1} fill="#64748b" opacity={0.4} />
            <text x={63} y={6} fill="#94a3b8" fontSize={7}>
              {truncate(spec.comparison!.label, 16)}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
