import type { MusicWaveformSpec } from "../types";

type Props = { spec: MusicWaveformSpec };

const VIEW_W = 560;
const VIEW_H = 260;

const PADDING = { top: 36, right: 20, bottom: 36, left: 44 };
const PLOT_W = VIEW_W - PADDING.left - PADDING.right;
const PLOT_H = VIEW_H - PADDING.top - PADDING.bottom;

const SAMPLES = 200;

const HARMONIC_COLORS = [
  "#3b82f6",
  "#f59e0b",
  "#10b981",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
  "#84cc16",
];

function buildPolyline(
  points: Array<{ x: number; y: number }>,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  plotX: number,
  plotY: number,
  plotW: number,
  plotH: number,
): string {
  const xRange = xMax - xMin || 1;
  const yRange = yMax - yMin || 1;
  return points
    .map(({ x, y }) => {
      const px = plotX + ((x - xMin) / xRange) * plotW;
      const py = plotY + plotH - ((y - yMin) / yRange) * plotH;
      return `${px.toFixed(2)},${py.toFixed(2)}`;
    })
    .join(" ");
}

function computeHarmonicPoints(
  frequency: number,
  amplitude: number,
  phase: number,
  xMin: number,
  xMax: number,
): Array<{ x: number; y: number }> {
  const points: Array<{ x: number; y: number }> = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const x = xMin + (i / SAMPLES) * (xMax - xMin);
    const y = amplitude * Math.sin(2 * Math.PI * frequency * x + phase);
    points.push({ x, y });
  }
  return points;
}

export default function MusicWaveformVisualizer({ spec }: Props) {
  const { harmonics = [], compositeWave = [], axes, note, baseFrequency } = spec;

  const xMin = axes?.x?.min ?? 0;
  const xMax = axes?.x?.max ?? 1;
  const yMin = axes?.y?.min ?? -1;
  const yMax = axes?.y?.max ?? 1;

  const plotX = PADDING.left;
  const plotY = PADDING.top;

  // Pre-compute harmonic polylines (sample if no composite wave provided)
  const harmonicPolylines = harmonics.map((h, i) => {
    const pts = computeHarmonicPoints(
      h.frequency,
      h.amplitude,
      0,
      xMin,
      xMax,
    );
    return {
      ...h,
      color: h.color ?? HARMONIC_COLORS[i % HARMONIC_COLORS.length],
      polyline: buildPolyline(pts, xMin, xMax, yMin, yMax, plotX, plotY, PLOT_W, PLOT_H),
    };
  });

  // Composite wave polyline
  let compositePts = compositeWave;
  if (!compositePts || compositePts.length === 0) {
    // Compute composite as sum of harmonics
    const sumPoints: Array<{ x: number; y: number }> = [];
    for (let i = 0; i <= SAMPLES; i++) {
      const x = xMin + (i / SAMPLES) * (xMax - xMin);
      const y = harmonics.reduce(
        (sum, h) => sum + h.amplitude * Math.sin(2 * Math.PI * h.frequency * x),
        0,
      );
      sumPoints.push({ x, y });
    }
    compositePts = sumPoints;
  }
  const compositePolyline = buildPolyline(
    compositePts,
    xMin,
    xMax,
    yMin,
    yMax,
    plotX,
    plotY,
    PLOT_W,
    PLOT_H,
  );

  // Zero line Y coordinate
  const yRange = yMax - yMin || 1;
  const zeroY = plotY + PLOT_H - ((0 - yMin) / yRange) * PLOT_H;

  // Legend layout (right side)
  const legendX = VIEW_W - PADDING.right - 120;
  const legendStartY = PADDING.top + 4;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={spec.title ?? "Music Waveform"}
    >
      {/* Title */}
      {spec.title && (
        <text
          x={VIEW_W / 2}
          y="16"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="#374151"
        >
          {spec.title}
        </text>
      )}

      {/* Note + frequency badge */}
      {note && (
        <text x={plotX} y={PADDING.top - 10} fontSize="10" fill="#6b7280">
          Note: {note}
          {baseFrequency ? ` · ${baseFrequency} Hz` : ""}
        </text>
      )}

      {/* Plot background */}
      <rect
        x={plotX}
        y={plotY}
        width={PLOT_W}
        height={PLOT_H}
        fill="#f9fafb"
        stroke="#e5e7eb"
        strokeWidth="1"
        rx="2"
      />

      {/* Zero line (dashed) */}
      <line
        x1={plotX}
        y1={zeroY}
        x2={plotX + PLOT_W}
        y2={zeroY}
        stroke="#9ca3af"
        strokeWidth="1"
        strokeDasharray="5 3"
      />

      {/* Harmonic waves */}
      {harmonicPolylines.map((h) => (
        <polyline
          key={h.id}
          points={h.polyline}
          fill="none"
          stroke={h.color}
          strokeWidth="1"
          opacity="0.7"
        />
      ))}

      {/* Composite wave */}
      <polyline
        points={compositePolyline}
        fill="none"
        stroke="#1e3a5f"
        strokeWidth="2.5"
        opacity="0.95"
      />

      {/* X axis */}
      <line
        x1={plotX}
        y1={plotY + PLOT_H}
        x2={plotX + PLOT_W}
        y2={plotY + PLOT_H}
        stroke="#d1d5db"
        strokeWidth="1"
      />
      {/* Y axis */}
      <line
        x1={plotX}
        y1={plotY}
        x2={plotX}
        y2={plotY + PLOT_H}
        stroke="#d1d5db"
        strokeWidth="1"
      />

      {/* X axis ticks and labels */}
      {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
        const val = xMin + frac * (xMax - xMin);
        const px = plotX + frac * PLOT_W;
        return (
          <g key={frac}>
            <line x1={px} y1={plotY + PLOT_H} x2={px} y2={plotY + PLOT_H + 4} stroke="#9ca3af" strokeWidth="1" />
            <text
              x={px}
              y={plotY + PLOT_H + 13}
              textAnchor="middle"
              fontSize="8"
              fill="#9ca3af"
            >
              {val.toFixed(2)}
            </text>
          </g>
        );
      })}

      {/* Y axis ticks and labels */}
      {[0, 0.5, 1].map((frac) => {
        const val = yMin + frac * yRange;
        const py = plotY + PLOT_H - frac * PLOT_H;
        return (
          <g key={frac}>
            <line x1={plotX - 4} y1={py} x2={plotX} y2={py} stroke="#9ca3af" strokeWidth="1" />
            <text
              x={plotX - 6}
              y={py}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize="8"
              fill="#9ca3af"
            >
              {val.toFixed(1)}
            </text>
          </g>
        );
      })}

      {/* Axis labels */}
      <text
        x={plotX + PLOT_W / 2}
        y={VIEW_H - 4}
        textAnchor="middle"
        fontSize="9"
        fill="#6b7280"
      >
        {axes?.x?.label ?? "Time"}
      </text>
      <text
        x={10}
        y={plotY + PLOT_H / 2}
        textAnchor="middle"
        fontSize="9"
        fill="#6b7280"
        transform={`rotate(-90, 10, ${plotY + PLOT_H / 2})`}
      >
        {axes?.y?.label ?? "Amplitude"}
      </text>

      {/* Legend */}
      {harmonicPolylines.map((h, i) => {
        const ly = legendStartY + i * 16;
        const label = h.label ?? `Harmonic ${h.order ?? i + 1}`;
        return (
          <g key={`leg-${h.id}`}>
            <line
              x1={legendX}
              y1={ly + 4}
              x2={legendX + 18}
              y2={ly + 4}
              stroke={h.color}
              strokeWidth="1.5"
              opacity="0.8"
            />
            <text x={legendX + 22} y={ly + 8} fontSize="8" fill="#4b5563">
              {label} (A={h.amplitude})
            </text>
          </g>
        );
      })}

      {/* Composite legend entry */}
      {harmonicPolylines.length > 0 && (
        <g>
          <line
            x1={legendX}
            y1={legendStartY + harmonicPolylines.length * 16 + 4}
            x2={legendX + 18}
            y2={legendStartY + harmonicPolylines.length * 16 + 4}
            stroke="#1e3a5f"
            strokeWidth="2.5"
          />
          <text
            x={legendX + 22}
            y={legendStartY + harmonicPolylines.length * 16 + 8}
            fontSize="8"
            fill="#1e3a5f"
            fontWeight="600"
          >
            Composite
          </text>
        </g>
      )}
    </svg>
  );
}
