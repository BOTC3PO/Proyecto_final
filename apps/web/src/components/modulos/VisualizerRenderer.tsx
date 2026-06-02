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
    return <CircuitDiagram elements={spec.elements} />;
  }

  return null;
}

// ─── Circuit diagram ──────────────────────────────────────────────────────────

type CircuitElement = { id: string; type: string; value?: number; unit?: string };

/** Normaliza el tipo de elemento a una de las familias de símbolo que dibujamos. */
function circuitSymbolKind(
  type: string,
): "resistor" | "battery" | "lamp" | "capacitor" | "switch" | "generic" {
  const t = type
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  if (/(resist|\br\b|ohm)/.test(t)) return "resistor";
  if (/(bater|battery|pila|fuente|fem|\bv\b|volt)/.test(t)) return "battery";
  if (/(lamp|bombill|luz|led|foco)/.test(t)) return "lamp";
  if (/(capacit|condens|\bc\b|farad)/.test(t)) return "capacitor";
  if (/(interrupt|switch|llave)/.test(t)) return "switch";
  return "generic";
}

/**
 * Diagrama esquemático de un circuito en serie. Dibuja un lazo rectangular de
 * cable y coloca cada elemento sobre el borde superior con su símbolo y la
 * etiqueta (valor + unidad). Es deliberadamente sencillo pero suficiente para
 * representar circuitos en serie de física básica.
 */
function CircuitDiagram({ elements }: { elements: CircuitElement[] }) {
  const W = 360;
  const H = 220;
  const margin = 40;
  const top = 50;
  const bottom = H - 40;
  const left = margin;
  const right = W - margin;
  const stroke = "#334155";

  const label = (el: CircuitElement) => {
    const v = el.value != null ? `${el.value}${el.unit ? ` ${el.unit}` : ""}` : "";
    return v ? `${el.type} (${v})` : el.type;
  };

  const ariaLabel =
    elements.length > 0
      ? `Circuito en serie con ${elements.length} elementos: ${elements.map(label).join(", ")}.`
      : "Circuito sin elementos.";

  // Posiciones equiespaciadas sobre el borde superior.
  const slotW = (right - left) / Math.max(1, elements.length);
  const symbolHalf = 26;

  const drawSymbol = (kind: ReturnType<typeof circuitSymbolKind>, cx: number) => {
    const y = top;
    const a = cx - symbolHalf;
    const b = cx + symbolHalf;
    switch (kind) {
      case "resistor":
        return (
          <polyline
            points={`${a},${y} ${a + 6},${y - 8} ${a + 16},${y + 8} ${a + 26},${y - 8} ${a + 36},${y + 8} ${a + 46},${y - 8} ${b},${y}`}
            fill="none"
            stroke={stroke}
            strokeWidth={2}
          />
        );
      case "battery":
        return (
          <g stroke={stroke} strokeWidth={2}>
            <line x1={cx - 6} y1={y - 12} x2={cx - 6} y2={y + 12} />
            <line x1={cx + 4} y1={y - 6} x2={cx + 4} y2={y + 6} />
          </g>
        );
      case "lamp":
        return (
          <g fill="none" stroke={stroke} strokeWidth={2}>
            <circle cx={cx} cy={y} r={12} />
            <line x1={cx - 8} y1={y - 8} x2={cx + 8} y2={y + 8} />
            <line x1={cx - 8} y1={y + 8} x2={cx + 8} y2={y - 8} />
          </g>
        );
      case "capacitor":
        return (
          <g stroke={stroke} strokeWidth={2}>
            <line x1={cx - 5} y1={y - 12} x2={cx - 5} y2={y + 12} />
            <line x1={cx + 5} y1={y - 12} x2={cx + 5} y2={y + 12} />
          </g>
        );
      case "switch":
        return (
          <g stroke={stroke} strokeWidth={2} fill={stroke}>
            <circle cx={a} cy={y} r={2.5} />
            <circle cx={b} cy={y} r={2.5} />
            <line x1={a} y1={y} x2={b - 4} y2={y - 12} />
          </g>
        );
      default:
        return (
          <rect x={cx - 18} y={y - 10} width={36} height={20} fill="none" stroke={stroke} strokeWidth={2} rx={2} />
        );
    }
  };

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={ariaLabel}
      className="rounded border border-gray-200 bg-white"
    >
      {/* Lazo de cable */}
      <g stroke={stroke} strokeWidth={2} fill="none">
        <line x1={left} y1={top} x2={left} y2={bottom} />
        <line x1={left} y1={bottom} x2={right} y2={bottom} />
        <line x1={right} y1={bottom} x2={right} y2={top} />
        {/* Tramos del borde superior entre elementos */}
        {elements.length === 0 && <line x1={left} y1={top} x2={right} y2={top} />}
        {elements.map((el, i) => {
          const cx = left + slotW * (i + 0.5);
          const prevEnd = i === 0 ? left : left + slotW * (i - 0.5) + symbolHalf;
          return (
            <line key={`wire-${el.id}`} x1={prevEnd} y1={top} x2={cx - symbolHalf} y2={top} />
          );
        })}
        {elements.length > 0 && (
          <line
            x1={left + slotW * (elements.length - 0.5) + symbolHalf}
            y1={top}
            x2={right}
            y2={top}
          />
        )}
      </g>

      {/* Símbolos + etiquetas */}
      {elements.map((el, i) => {
        const cx = left + slotW * (i + 0.5);
        return (
          <g key={el.id}>
            {drawSymbol(circuitSymbolKind(el.type), cx)}
            <text x={cx} y={top - 18} textAnchor="middle" fontSize={10} fill="#475569" fontWeight="600">
              {el.type}
            </text>
            {el.value != null && (
              <text x={cx} y={top + 24} textAnchor="middle" fontSize={10} fill="#64748b">
                {el.value}
                {el.unit ? ` ${el.unit}` : ""}
              </text>
            )}
          </g>
        );
      })}

      {elements.length === 0 && (
        <text x={W / 2} y={H / 2} textAnchor="middle" fontSize={12} fill="#94a3b8">
          Circuito vacío
        </text>
      )}
    </svg>
  );
}
