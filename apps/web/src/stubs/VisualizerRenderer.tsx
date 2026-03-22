import type { VisualSpec } from "../../generadoresV2/core/types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

interface VisualizerRendererProps {
  spec: VisualSpec | undefined;
}

export default function VisualizerRenderer({ spec }: VisualizerRendererProps) {
  if (!spec) return null;

  if (spec.kind === "static-image") {
    return (
      <img
        src={spec.src}
        alt={spec.alt}
        style={{ maxWidth: spec.width ?? "100%", maxHeight: spec.height ?? 400 }}
        className="rounded border border-gray-200"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }

  if (spec.kind === "line-chart") {
    // Build recharts data: merge all series points by x value
    const xSet = new Set<number>();
    for (const s of spec.series) {
      for (const p of s.points) xSet.add(p.x);
    }
    const xValues = Array.from(xSet).sort((a, b) => a - b);
    const data = xValues.map((x) => {
      const row: Record<string, number> = { x };
      for (const s of spec.series) {
        const pt = s.points.find((p) => p.x === x);
        if (pt !== undefined) row[s.id] = pt.y;
      }
      return row;
    });

    const COLORS = ["#2563eb", "#dc2626", "#16a34a", "#d97706", "#7c3aed"];

    return (
      <div className="w-full">
        {spec.title && (
          <p className="mb-2 text-center text-sm font-semibold text-gray-700">{spec.title}</p>
        )}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 4, right: 16, bottom: 24, left: 16 }}>
            <XAxis
              dataKey="x"
              label={
                spec.xLabel
                  ? {
                      value: spec.xUnit ? `${spec.xLabel} (${spec.xUnit})` : spec.xLabel,
                      position: "insideBottom",
                      offset: -12,
                    }
                  : undefined
              }
            />
            <YAxis
              label={
                spec.yLabel
                  ? {
                      value: spec.yUnit ? `${spec.yLabel} (${spec.yUnit})` : spec.yLabel,
                      angle: -90,
                      position: "insideLeft",
                    }
                  : undefined
              }
            />
            <Tooltip />
            <Legend verticalAlign="top" />
            {spec.series.map((s, i) => (
              <Line
                key={s.id}
                type="monotone"
                dataKey={s.id}
                name={s.label}
                stroke={s.color ?? COLORS[i % COLORS.length]}
                dot={false}
              />
            ))}
            {spec.annotations?.map((ann) => (
              <ReferenceLine
                key={ann.id}
                x={ann.x}
                y={ann.y}
                label={{ value: ann.label, fontSize: 11 }}
                stroke={ann.color ?? "#6b7280"}
                strokeDasharray="4 2"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (spec.kind === "vector-diagram") {
    const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];
    const CX = 150;
    const CY = 150;
    const MAX_PX = 120;

    const maxLen = spec.vectors.reduce((m, v) => {
      const len = Math.sqrt(v.dx * v.dx + v.dy * v.dy);
      return len > m ? len : m;
    }, 0);
    const scale = maxLen > 0 ? MAX_PX / maxLen : 1;

    const arrowHead = (sx: number, sy: number, ex: number, ey: number, color: string) => {
      const angle = Math.atan2(ey - sy, ex - sx);
      const size = 10;
      const p1x = ex - size * Math.cos(angle - Math.PI / 7);
      const p1y = ey - size * Math.sin(angle - Math.PI / 7);
      const p2x = ex - size * Math.cos(angle + Math.PI / 7);
      const p2y = ey - size * Math.sin(angle + Math.PI / 7);
      return (
        <polygon
          points={`${ex},${ey} ${p1x},${p1y} ${p2x},${p2y}`}
          fill={color}
        />
      );
    };

    return (
      <svg
        width={300}
        height={300}
        viewBox="0 0 300 300"
        className="rounded border border-gray-200 bg-white"
      >
        {/* Axes */}
        <line x1={CX} y1={10} x2={CX} y2={290} stroke="#e5e7eb" strokeWidth={1} />
        <line x1={10} y1={CY} x2={290} y2={CY} stroke="#e5e7eb" strokeWidth={1} />

        {spec.vectors.map((v, i) => {
          const color = v.color ?? COLORS[i % COLORS.length];
          // SVG y-axis is inverted: positive dy goes up → negate dy
          const ex = CX + v.dx * scale;
          const ey = CY - v.dy * scale;

          const angle = Math.atan2(ey - CY, ex - CX);
          const labelX = ex + 8 * Math.cos(angle);
          const labelY = ey + 8 * Math.sin(angle);

          return (
            <g key={v.id}>
              <line
                x1={CX}
                y1={CY}
                x2={ex}
                y2={ey}
                stroke={color}
                strokeWidth={2}
              />
              {arrowHead(CX, CY, ex, ey, color)}
              <text
                x={labelX}
                y={labelY}
                fontSize={11}
                fill={color}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {v.label}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

  if (spec.kind === "circuit") {
    return (
      <div className="flex items-center justify-center rounded border border-gray-200 bg-gray-50 p-6 text-sm text-gray-500">
        Visualización {spec.kind} — pendiente de implementar
      </div>
    );
  }

  return null;
}
