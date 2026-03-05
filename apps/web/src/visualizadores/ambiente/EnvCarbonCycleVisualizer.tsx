import type { EnvCarbonCycleSpec } from "../types";

type Props = { spec: EnvCarbonCycleSpec };

const VIEW_W = 560;
const VIEW_H = 340;

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

function reservoirRadius(amount: number): number {
  return clamp(20 + Math.sqrt(amount) * 1.5, 20, 60);
}

function scaleX(cx: number) {
  return cx * VIEW_W;
}

function scaleY(cy: number) {
  return cy * VIEW_H;
}


export default function EnvCarbonCycleVisualizer({ spec }: Props) {
  const { reservoirs = [], fluxes = [], humanFlux, title, description } = spec;

  const reservoirMap = new Map(reservoirs.map((r) => [r.id, r]));

  const defaultColors: Record<string, string> = {
    atmosfera: "#93C5FD",
    oceano: "#1D4ED8",
    ocean: "#1D4ED8",
    suelo: "#78350F",
    soil: "#78350F",
    plantas: "#16A34A",
    plants: "#16A34A",
    vegetacion: "#16A34A",
    fosiles: "#44403C",
    fossil: "#44403C",
    combustibles: "#44403C",
  };

  function resolveColor(r: (typeof reservoirs)[0]): string {
    if (r.color) return r.color;
    const key = r.id.toLowerCase();
    for (const [k, v] of Object.entries(defaultColors)) {
      if (key.includes(k)) return v;
    }
    return "#94A3B8";
  }

  // Collect unique arrow marker ids needed
  const markerIds: Array<{ id: string; color: string }> = [];
  const markerSet = new Set<string>();

  function ensureMarker(id: string, color: string) {
    if (!markerSet.has(id)) {
      markerSet.add(id);
      markerIds.push({ id, color });
    }
  }

  fluxes.forEach((f) => {
    if (f.highlighted) {
      ensureMarker("marker-highlighted", "#EF4444");
    } else {
      ensureMarker("marker-slate", "#64748B");
    }
  });
  if (humanFlux) {
    ensureMarker("marker-human", "#F97316");
  }

  return (
    <section className="space-y-3 rounded-lg border border-slate-200 bg-white p-5">
      {(title || description) && (
        <header className="space-y-1">
          {title && (
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-slate-600">{description}</p>
          )}
        </header>
      )}
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full"
        aria-label="Ciclo del carbono"
      >
        <defs>
          {/* slate marker */}
          <marker
            id="marker-slate"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#64748B" />
          </marker>
          {/* highlighted marker (red) */}
          <marker
            id="marker-highlighted"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#EF4444" />
          </marker>
          {/* human flux marker (orange) */}
          <marker
            id="marker-human"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#F97316" />
          </marker>
        </defs>

        {/* Draw flux arrows */}
        {fluxes.map((flux) => {
          const from = reservoirMap.get(flux.fromId);
          const to = reservoirMap.get(flux.toId);
          if (!from || !to) return null;

          const x1 = scaleX(from.cx);
          const y1 = scaleY(from.cy);
          const x2 = scaleX(to.cx);
          const y2 = scaleY(to.cy);

          const rFrom = reservoirRadius(from.amount);
          const rTo = reservoirRadius(to.amount);

          // Offset line start/end by radius
          const dx = x2 - x1;
          const dy = y2 - y1;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const ux = dx / dist;
          const uy = dy / dist;

          const sx = x1 + ux * (rFrom + 2);
          const sy = y1 + uy * (rFrom + 2);
          const ex = x2 - ux * (rTo + 8);
          const ey = y2 - uy * (rTo + 8);

          const strokeW = clamp(1 + flux.amount * 0.3, 1, 8);
          const isHighlighted = flux.highlighted;
          const strokeColor = isHighlighted ? "#EF4444" : (flux.color ?? "#64748B");
          const markerId = isHighlighted ? "marker-highlighted" : "marker-slate";

          return (
            <g key={flux.id}>
              <line
                x1={sx}
                y1={sy}
                x2={ex}
                y2={ey}
                stroke={strokeColor}
                strokeWidth={strokeW}
                markerEnd={`url(#${markerId})`}
                opacity={0.8}
              />
              {flux.label && (
                <text
                  x={(sx + ex) / 2}
                  y={(sy + ey) / 2 - 4}
                  textAnchor="middle"
                  fontSize={9}
                  fill={strokeColor}
                  fontWeight="500"
                >
                  {flux.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Human flux dashed arrow */}
        {humanFlux && (() => {
          const from = reservoirMap.get(humanFlux.fromId);
          if (!from) return null;

          // Draw as downward arrow from reservoir
          const cx = scaleX(from.cx);
          const cy = scaleY(from.cy);
          const rFrom = reservoirRadius(from.amount);
          const targetY = clamp(cy + rFrom + 40, 0, VIEW_H - 20);

          return (
            <g key="human-flux">
              <line
                x1={cx + rFrom + 5}
                y1={cy}
                x2={cx + rFrom + 5}
                y2={targetY}
                stroke="#F97316"
                strokeWidth={2}
                strokeDasharray="6 3"
                markerEnd="url(#marker-human)"
              />
              <text
                x={cx + rFrom + 9}
                y={cy + (targetY - cy) / 2}
                fontSize={9}
                fill="#F97316"
                fontWeight="600"
              >
                {humanFlux.label ?? `+${humanFlux.amount} GtC`}
              </text>
            </g>
          );
        })()}

        {/* Reservoir circles */}
        {reservoirs.map((r) => {
          const cx = scaleX(r.cx);
          const cy = scaleY(r.cy);
          const radius = r.radius ?? reservoirRadius(r.amount);
          const fill = resolveColor(r);

          return (
            <g key={r.id}>
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill={fill}
                fillOpacity={0.85}
                stroke="#1E293B"
                strokeWidth={1.5}
              />
              {/* amount text */}
              <text
                x={cx}
                y={cy + 4}
                textAnchor="middle"
                fontSize={radius > 30 ? 11 : 9}
                fontWeight="700"
                fill="#fff"
              >
                {r.amount >= 1000
                  ? `${(r.amount / 1000).toFixed(1)}k`
                  : r.amount}
              </text>
              {/* label below */}
              <text
                x={cx}
                y={cy + radius + 13}
                textAnchor="middle"
                fontSize={10}
                fontWeight="600"
                fill="#1E293B"
              >
                {r.label}
              </text>
              {/* unit */}
              <text
                x={cx}
                y={cy + radius + 24}
                textAnchor="middle"
                fontSize={8}
                fill="#64748B"
              >
                {r.unit ?? "GtC"}
              </text>
            </g>
          );
        })}

        {/* Legend */}
        <g transform={`translate(10, ${VIEW_H - 28})`}>
          <line x1={0} y1={6} x2={20} y2={6} stroke="#64748B" strokeWidth={1.5} />
          <text x={24} y={10} fontSize={9} fill="#64748B">Flujo natural</text>
          <line x1={80} y1={6} x2={100} y2={6} stroke="#EF4444" strokeWidth={2} />
          <text x={104} y={10} fontSize={9} fill="#64748B">Flujo destacado</text>
          <line x1={170} y1={6} x2={190} y2={6} stroke="#F97316" strokeWidth={2} strokeDasharray="4 2" />
          <text x={194} y={10} fontSize={9} fill="#64748B">Flujo humano</text>
        </g>
      </svg>
    </section>
  );
}
