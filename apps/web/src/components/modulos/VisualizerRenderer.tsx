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

  if (spec.kind === "latex") {
    // Dynamic katex import — falls back to <pre> if not available
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const katex = require("katex") as { renderToString: (s: string, opts?: object) => string };
      const html = katex.renderToString(spec.content, {
        displayMode: spec.displayMode ?? true,
        throwOnError: false,
      });
      return (
        <div
          className="katex-wrapper overflow-x-auto p-2"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      return (
        <pre className="text-sm font-mono bg-gray-50 p-2 rounded overflow-x-auto">
          {spec.content}
        </pre>
      );
    }
  }

  if (spec.kind === "line-chart") {
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
        <polygon points={`${ex},${ey} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      );
    };

    return (
      <svg
        width={300}
        height={300}
        viewBox="0 0 300 300"
        className="rounded border border-gray-200 bg-white"
      >
        <line x1={CX} y1={10} x2={CX} y2={290} stroke="#e5e7eb" strokeWidth={1} />
        <line x1={10} y1={CY} x2={290} y2={CY} stroke="#e5e7eb" strokeWidth={1} />

        {spec.vectors.map((v, i) => {
          const color = v.color ?? COLORS[i % COLORS.length];
          const ex = CX + v.dx * scale;
          const ey = CY - v.dy * scale;
          const angle = Math.atan2(ey - CY, ex - CX);
          const labelX = ex + 8 * Math.cos(angle);
          const labelY = ey + 8 * Math.sin(angle);

          return (
            <g key={v.id}>
              <line x1={CX} y1={CY} x2={ex} y2={ey} stroke={color} strokeWidth={2} />
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

  if (spec.kind === "timeline") {
    return (
      <div className="p-3 space-y-2">
        {spec.title && (
          <p className="text-sm font-semibold text-gray-700">{spec.title}</p>
        )}
        <ol className="relative border-l border-gray-300 space-y-3 pl-4">
          {spec.events.map((ev) => (
            <li key={ev.id} className="relative">
              <span className="absolute -left-[18px] top-1 w-3 h-3 rounded-full bg-[var(--c-primary)] border-2 border-white" />
              <p className="text-xs font-semibold text-gray-700">
                {ev.date} — {ev.title}
              </p>
              {ev.description && (
                <p className="text-xs text-gray-500 mt-0.5">{ev.description}</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (spec.kind === "circuit") {
    // TODO post-expo: implementar el render del diagrama de circuito. Hasta
    // entonces mostramos un placeholder explícito (no un hueco roto) para que
    // no aparezca como una herramienta fallida en la demo.
    return (
      <div
        role="note"
        className="flex flex-col items-center justify-center gap-1 rounded border border-dashed border-gray-300 bg-gray-50 p-6 text-center"
      >
        <span className="text-sm font-medium text-gray-600">
          Visualización de circuito
        </span>
        <span className="text-xs text-gray-500">
          Próximamente — este tipo de visual todavía no se renderiza.
        </span>
      </div>
    );
  }

  return null;
}
