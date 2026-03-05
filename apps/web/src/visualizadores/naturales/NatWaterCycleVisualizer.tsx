import type { NatWaterCycleSpec } from "../types";

type NatWaterCycleVisualizerProps = {
  spec: NatWaterCycleSpec;
};

const VIEW_WIDTH = 560;
const VIEW_HEIGHT = 340;

const STAGE_COLOR_DEFAULTS: Record<string, string> = {
  evaporation: "#60a5fa",   // blue-400
  evaporacion: "#60a5fa",
  condensation: "#cbd5e1",  // slate-300
  condensacion: "#cbd5e1",
  precipitation: "#2563eb", // blue-600
  precipitacion: "#2563eb",
  runoff: "#22d3ee",        // cyan-500
  escorrentia: "#22d3ee",
  infiltration: "#f59e0b",  // amber-500
  infiltracion: "#f59e0b",
  accumulation: "#1e40af",  // blue-800
  acumulacion: "#1e40af",
};

function getStageColor(stage: { id: string; color?: string }): string {
  if (stage.color) return stage.color;
  const key = stage.id.toLowerCase();
  for (const [pattern, color] of Object.entries(STAGE_COLOR_DEFAULTS)) {
    if (key.includes(pattern)) return color;
  }
  return "#94a3b8";
}


function buildArrowId(fluxId: string): string {
  return `arrow-${fluxId.replace(/[^a-zA-Z0-9]/g, "-")}`;
}

export default function NatWaterCycleVisualizer({
  spec,
}: NatWaterCycleVisualizerProps) {
  const stages = spec.stages ?? [];
  const fluxes = spec.fluxes ?? [];
  const humanImpact = spec.humanImpactFactor ?? 0;

  // Build stage lookup by id
  const stageById = new Map(stages.map((s) => [s.id, s]));

  const title = spec.title ?? "Ciclo del Agua";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Ciclo del Agua
          </p>
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          {spec.description && (
            <p className="mt-1 text-sm text-slate-600">{spec.description}</p>
          )}
        </div>
      </header>

      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="w-full"
        role="img"
        aria-label={title}
      >
        <defs>
          {/* Arrow markers for each flux */}
          {fluxes.map((flux) => {
            const arrowColor = flux.color ?? "#64748b";
            const markerId = buildArrowId(flux.id);
            return (
              <marker
                key={markerId}
                id={markerId}
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill={arrowColor} />
              </marker>
            );
          })}
        </defs>

        {/* Background */}
        <rect width={VIEW_WIDTH} height={VIEW_HEIGHT - (humanImpact > 0 ? 50 : 0)} fill="#f0f9ff" rx={8} />

        {/* Flux arrows */}
        {fluxes.map((flux) => {
          const from = stageById.get(flux.fromId);
          const to = stageById.get(flux.toId);
          if (!from || !to) return null;

          const fromCx = from.cx;
          const fromCy = from.cy;
          const toCx = to.cx;
          const toCy = to.cy;
          const fromR = from.radius ?? 30;
          const toR = to.radius ?? 30;

          // Compute direction vector
          const dx = toCx - fromCx;
          const dy = toCy - fromCy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const ux = dx / dist;
          const uy = dy / dist;

          // Start/end points on circle edges
          const x1 = fromCx + ux * (fromR + 2);
          const y1 = fromCy + uy * (fromR + 2);
          const x2 = toCx - ux * (toR + 10);
          const y2 = toCy - uy * (toR + 10);

          const strokeW = 1 + (flux.rate ?? 1) * 2;
          const arrowColor = flux.color ?? "#64748b";
          const markerId = buildArrowId(flux.id);

          // Midpoint for label
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;

          return (
            <g key={flux.id}>
              <line
                x1={x1.toFixed(2)}
                y1={y1.toFixed(2)}
                x2={x2.toFixed(2)}
                y2={y2.toFixed(2)}
                stroke={arrowColor}
                strokeWidth={strokeW}
                markerEnd={`url(#${markerId})`}
                opacity={0.75}
              />
              {flux.label && (
                <text
                  x={mx.toFixed(2)}
                  y={(my - 6).toFixed(2)}
                  textAnchor="middle"
                  fontSize={8}
                  fill="#475569"
                >
                  {flux.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Stage circles */}
        {stages.map((stage) => {
          const r = stage.radius ?? 30;
          const baseColor = getStageColor(stage);
          const isActive = stage.active === true;
          const fillColor = isActive ? baseColor : baseColor;
          const strokeColor = isActive ? "#1e293b" : "#94a3b8";
          const strokeWidth = isActive ? 3 : 1.5;
          const fillOpacity = isActive ? 1 : 0.65;

          return (
            <g key={stage.id}>
              {/* Active glow ring */}
              {isActive && (
                <circle
                  cx={stage.cx}
                  cy={stage.cy}
                  r={r + 6}
                  fill="none"
                  stroke={baseColor}
                  strokeWidth={3}
                  opacity={0.35}
                />
              )}
              <circle
                cx={stage.cx}
                cy={stage.cy}
                r={r}
                fill={fillColor}
                fillOpacity={fillOpacity}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              {/* Stage label */}
              <text
                x={stage.cx}
                y={stage.cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={9}
                fontWeight={isActive ? "700" : "500"}
                fill={isActive ? "#ffffff" : "#1e293b"}
              >
                {stage.label.length > 12
                  ? stage.label.slice(0, 11) + "…"
                  : stage.label}
              </text>
              {/* Description below if present */}
              {stage.description && (
                <text
                  x={stage.cx}
                  y={stage.cy + r + 12}
                  textAnchor="middle"
                  fontSize={7}
                  fill="#64748b"
                >
                  {stage.description.length > 18
                    ? stage.description.slice(0, 17) + "…"
                    : stage.description}
                </text>
              )}
            </g>
          );
        })}

        {/* Human impact bar at bottom */}
        {humanImpact > 0 && (
          <g>
            <rect
              x={0}
              y={VIEW_HEIGHT - 46}
              width={VIEW_WIDTH}
              height={46}
              fill="#fff7ed"
              rx={0}
            />
            <text
              x={12}
              y={VIEW_HEIGHT - 28}
              fontSize={9}
              fontWeight="600"
              fill="#b45309"
            >
              Impacto humano
            </text>
            {/* Progress bar track */}
            <rect
              x={12}
              y={VIEW_HEIGHT - 20}
              width={320}
              height={10}
              rx={5}
              fill="#fde68a"
            />
            {/* Progress bar fill */}
            <rect
              x={12}
              y={VIEW_HEIGHT - 20}
              width={Math.min(1, humanImpact) * 320}
              height={10}
              rx={5}
              fill="#ef4444"
            />
            <text
              x={340}
              y={VIEW_HEIGHT - 12}
              fontSize={9}
              fill="#b45309"
            >
              {(humanImpact * 100).toFixed(0)}%
            </text>
            <text
              x={12}
              y={VIEW_HEIGHT - 4}
              fontSize={7}
              fill="#92400e"
            >
              Factor de impacto elevado — actividad humana altera el ciclo natural
            </text>
          </g>
        )}
      </svg>
    </section>
  );
}
