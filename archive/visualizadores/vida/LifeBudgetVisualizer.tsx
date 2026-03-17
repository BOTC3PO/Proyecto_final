import type { LifeBudgetSpec } from "../types";

type Props = { spec: LifeBudgetSpec };

const VIEW_W = 560;
const VIEW_H = 300;

const AUTO_PALETTE = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
  "#84cc16",
  "#ec4899",
  "#14b8a6",
];

// ── Pie chart helpers ─────────────────────────────────────────────────────────

function polarToXY(cx: number, cy: number, r: number, angleDeg: number): [number, number] {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function buildPieSlice(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
): string {
  const [x1, y1] = polarToXY(cx, cy, r, startDeg);
  const [x2, y2] = polarToXY(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

export default function LifeBudgetVisualizer({ spec }: Props) {
  const { monthlyIncome, expenses, savings, currency = "$" } = spec;

  const expenseList = expenses ?? [];
  const savingsPlanned = savings?.planned ?? 0;

  // Build pie slices
  type Slice = { label: string; value: number; color: string; actual?: number };
  const slices: Slice[] = [
    ...expenseList.map((e, i) => ({
      label: e.category,
      value: e.planned,
      color: e.color ?? AUTO_PALETTE[i % AUTO_PALETTE.length],
      actual: e.actual,
    })),
    ...(savingsPlanned > 0
      ? [{ label: "Savings", value: savingsPlanned, color: "#10b981", actual: savings?.actual }]
      : []),
  ];

  const totalSlice = slices.reduce((s, c) => s + c.value, 0) || 1;

  // Pie positioning
  const pieCX = 135;
  const pieCY = 140;
  const pieR = 100;

  let angle = 0;
  const slicesWithAngles = slices.map((s) => {
    const deg = (s.value / totalSlice) * 360;
    const start = angle;
    const end = angle + deg;
    angle = end;
    return { ...s, startDeg: start, endDeg: end, midDeg: (start + end) / 2 };
  });

  // Bar chart positioning
  const barAreaX = 290;
  const barAreaY = 30;
  const barAreaH = 220;
  const barAreaW = 240;
  const barCount = expenseList.length + (savingsPlanned > 0 ? 1 : 0);
  const barGroupH = barCount > 0 ? Math.min(28, barAreaH / barCount) : 28;
  const barMaxValue = Math.max(...slices.map((s) => Math.max(s.value, s.actual ?? 0)), 1);

  const totalExpenses = expenseList.reduce((s, e) => s + (e.actual ?? e.planned), 0);
  const balance = monthlyIncome - totalExpenses - (savings?.actual ?? savingsPlanned);
  const balanceColor = balance >= 0 ? "#10b981" : "#ef4444";

  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} xmlns="http://www.w3.org/2000/svg" aria-label={spec.title ?? "Budget"}>
      {/* Title */}
      {spec.title && (
        <text x={VIEW_W / 2} y="18" textAnchor="middle" fontSize="13" fontWeight="600" fill="#374151">
          {spec.title}
        </text>
      )}

      {/* ── PIE CHART ── */}
      {slicesWithAngles.map((s, i) => {
        const sliceDeg = s.endDeg - s.startDeg;
        if (sliceDeg < 0.5) return null;
        const [lx, ly] = polarToXY(pieCX, pieCY, pieR * 0.65, s.midDeg);
        const showLabel = sliceDeg > 20;
        return (
          <g key={i}>
            <path
              d={buildPieSlice(pieCX, pieCY, pieR, s.startDeg, s.endDeg)}
              fill={s.color}
              stroke="white"
              strokeWidth="1.5"
              opacity="0.9"
            />
            {showLabel && (
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="8"
                fill="white"
                fontWeight="600"
              >
                {Math.round((s.value / totalSlice) * 100)}%
              </text>
            )}
          </g>
        );
      })}

      {/* Pie legend */}
      {slicesWithAngles.map((s, i) => {
        const legendY = 28 + i * 18;
        if (legendY > VIEW_H - 30) return null;
        return (
          <g key={`leg-${i}`}>
            <rect x="10" y={legendY - 6} width="10" height="10" rx="2" fill={s.color} />
            <text x="24" y={legendY + 2} fontSize="8.5" fill="#4b5563">
              {s.label}
            </text>
          </g>
        );
      })}

      {/* ── BAR CHART ── */}
      <text x={barAreaX + barAreaW / 2} y={barAreaY - 8} textAnchor="middle" fontSize="10" fontWeight="600" fill="#374151">
        Planned vs Actual
      </text>

      {slices.map((s, i) => {
        const y = barAreaY + i * barGroupH;
        const plannedW = (s.value / barMaxValue) * (barAreaW - 70);
        const actualW = s.actual !== undefined ? (s.actual / barMaxValue) * (barAreaW - 70) : null;
        const barH = Math.max(5, barGroupH * 0.32);
        const labelX = barAreaX + barAreaW - 68;

        return (
          <g key={`bar-${i}`}>
            {/* Category label */}
            <text x={barAreaX} y={y + barH + 2} fontSize="8" fill="#6b7280">
              {s.label.length > 12 ? s.label.slice(0, 11) + "…" : s.label}
            </text>
            {/* Planned bar */}
            <rect
              x={labelX}
              y={y}
              width={plannedW}
              height={barH}
              fill={s.color}
              opacity="0.5"
              rx="1"
            />
            {/* Actual bar */}
            {actualW !== null && (
              <rect
                x={labelX}
                y={y + barH + 1}
                width={actualW}
                height={barH}
                fill={s.color}
                opacity="0.9"
                rx="1"
              />
            )}
            {/* Value label */}
            <text x={labelX + plannedW + 3} y={y + barH - 1} fontSize="8" fill="#9ca3af">
              {currency}{s.value}
            </text>
          </g>
        );
      })}

      {/* Bar legend */}
      <g>
        <rect x={barAreaX} y={barAreaY + barCount * barGroupH + 8} width="10" height="6" fill="#9ca3af" opacity="0.5" rx="1" />
        <text x={barAreaX + 13} y={barAreaY + barCount * barGroupH + 14} fontSize="8" fill="#6b7280">
          Planned
        </text>
        <rect x={barAreaX + 60} y={barAreaY + barCount * barGroupH + 8} width="10" height="6" fill="#9ca3af" opacity="0.9" rx="1" />
        <text x={barAreaX + 73} y={barAreaY + barCount * barGroupH + 14} fontSize="8" fill="#6b7280">
          Actual
        </text>
      </g>

      {/* ── BALANCE INDICATOR ── */}
      <rect
        x={barAreaX}
        y={VIEW_H - 32}
        width={barAreaW}
        height={26}
        rx="4"
        fill={balance >= 0 ? "#ecfdf5" : "#fef2f2"}
        stroke={balanceColor}
        strokeWidth="1"
        opacity="0.8"
      />
      <text
        x={barAreaX + barAreaW / 2}
        y={VIEW_H - 14}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={balanceColor}
      >
        Balance: {balance >= 0 ? "+" : ""}
        {currency}
        {balance.toFixed(0)}
      </text>

      {/* Income label */}
      <text x={pieCX} y={pieCY + pieR + 18} textAnchor="middle" fontSize="9" fill="#6b7280">
        Income: {currency}{monthlyIncome}
      </text>
    </svg>
  );
}
