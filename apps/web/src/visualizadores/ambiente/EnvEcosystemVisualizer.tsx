import type { EnvEcosystemSpec } from "../types";

type Props = { spec: EnvEcosystemSpec };

const VIEW_W = 560;
const VIEW_H = 320;

const PYRAMID_LEFT = 60;
const PYRAMID_RIGHT = 500;
const PYRAMID_TOP = 20;
const PYRAMID_BOTTOM = 290;

const LEVEL_COLORS = [
  "#16A34A", // green - producers
  "#F59E0B", // amber - primary consumers
  "#EF4444", // red - secondary consumers
  "#8B5CF6", // purple - tertiary consumers
  "#0EA5E9", // sky - apex
];

const BIOME_LABELS: Record<string, string> = {
  "bosque-tropical": "Bosque tropical",
  desierto: "Desierto",
  oceano: "Océano",
  pradera: "Pradera",
  tundra: "Tundra",
};

export default function EnvEcosystemVisualizer({ spec }: Props) {
  const { trophicLevels = [], energyLoss, biome, title, description } = spec;

  if (trophicLevels.length === 0) {
    return (
      <section className="rounded-lg border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">Sin niveles tróficos</p>
      </section>
    );
  }

  // Sort levels ascending (1 = producers = bottom)
  const sorted = [...trophicLevels].sort((a, b) => a.level - b.level);
  const numLevels = sorted.length;

  const pyramidH = PYRAMID_BOTTOM - PYRAMID_TOP;
  const levelH = pyramidH / numLevels;

  // Bottom level is widest, top is narrowest
  // Width narrows by energyPercent transfer
  // Base width at bottom
  const baseHalfW = (PYRAMID_RIGHT - PYRAMID_LEFT) / 2;
  const centerX = (PYRAMID_LEFT + PYRAMID_RIGHT) / 2;

  // Compute cumulative width multipliers
  // level[0] = bottom => full width
  // level[i] => multiply by energyPercent / 100 of first organism
  const widthMultipliers: number[] = [];
  let cumulative = 1.0;
  for (let i = 0; i < numLevels; i++) {
    widthMultipliers.push(cumulative);
    const nextLevel = sorted[i];
    // average energyPercent of organisms in this level
    const orgs = nextLevel.organisms;
    if (orgs.length > 0) {
      const avgPct =
        orgs.reduce((s, o) => s + o.energyPercent, 0) / orgs.length;
      cumulative *= avgPct / 100;
    } else {
      cumulative *= 0.1;
    }
  }

  // Normalize so bottom is 1
  const maxMult = widthMultipliers[0] || 1;
  const normalizedMults = widthMultipliers.map((m) => m / maxMult);

  // Build trapezoids bottom-up
  // Index 0 = bottom level = level sorted[0]
  const bands: Array<{
    level: (typeof sorted)[0];
    trapezoid: { x1: number; x2: number; x3: number; x4: number; y1: number; y2: number };
    color: string;
    idx: number;
  }> = [];

  for (let i = 0; i < numLevels; i++) {
    // i=0 is bottom band
    const bottomMult = normalizedMults[i];
    const topMult = i + 1 < numLevels ? normalizedMults[i + 1] : normalizedMults[i] * 0.5;

    const y1 = PYRAMID_BOTTOM - (i + 1) * levelH;
    const y2 = PYRAMID_BOTTOM - i * levelH;

    const halfWBottom = baseHalfW * bottomMult;
    const halfWTop = baseHalfW * topMult;

    bands.push({
      level: sorted[i],
      trapezoid: {
        x1: centerX - halfWBottom,
        x2: centerX + halfWBottom,
        x3: centerX + halfWTop,
        x4: centerX - halfWTop,
        y1,
        y2,
      },
      color:
        sorted[i].organisms[0]?.color ??
        LEVEL_COLORS[i % LEVEL_COLORS.length],
      idx: i,
    });
  }

  return (
    <section className="space-y-3 rounded-lg border border-slate-200 bg-white p-5">
      {(title || biome) && (
        <header className="space-y-1">
          <h3 className="text-base font-semibold text-slate-900">
            {title ?? BIOME_LABELS[biome] ?? biome}
          </h3>
          {description && (
            <p className="text-sm text-slate-600">{description}</p>
          )}
        </header>
      )}
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full"
        aria-label="Pirámide ecológica"
      >
        {/* Render bands bottom to top (reverse order so higher levels render on top) */}
        {[...bands].reverse().map(({ level, trapezoid: t, color }) => {
          const { x1, x2, x3, x4, y1, y2 } = t;
          const points = `${x1},${y2} ${x2},${y2} ${x3},${y1} ${x4},${y1}`;
          const midY = (y1 + y2) / 2;
          const bandW = x2 - x1;

          // Organism names
          const orgNames = level.organisms.map((o) => o.name).join(", ");
          const firstOrg = level.organisms[0];
          const energyPct = firstOrg?.energyPercent ?? 0;

          return (
            <g key={level.level}>
              <polygon
                points={points}
                fill={color}
                fillOpacity={0.75}
                stroke="#1E293B"
                strokeWidth={1.2}
              />

              {/* Organisms label inside band */}
              {bandW > 60 && (
                <text
                  x={centerX}
                  y={midY + 4}
                  textAnchor="middle"
                  fontSize={Math.max(8, Math.min(11, bandW / 12))}
                  fontWeight="600"
                  fill="#1E293B"
                  clipPath={undefined}
                >
                  {orgNames.length > 30
                    ? orgNames.slice(0, 28) + "…"
                    : orgNames}
                </text>
              )}

              {/* Level label on left */}
              <text
                x={PYRAMID_LEFT - 4}
                y={midY + 4}
                textAnchor="end"
                fontSize={9}
                fontWeight="700"
                fill="#1E293B"
              >
                {level.label}
              </text>

              {/* Energy % on right */}
              <text
                x={PYRAMID_RIGHT + 4}
                y={midY + 4}
                textAnchor="start"
                fontSize={8}
                fill="#64748B"
              >
                {energyPct}%
              </text>

              {/* Population below organism name if space */}
              {bandW > 80 && level.organisms.length === 1 && firstOrg?.population > 0 && (
                <text
                  x={centerX}
                  y={midY + 16}
                  textAnchor="middle"
                  fontSize={8}
                  fill="#374151"
                >
                  {firstOrg.population.toLocaleString()} ind.
                </text>
              )}

              {/* Energy loss annotation between levels - show above current band */}
              {level.level > 1 && energyLoss > 0 && (
                <g>
                  <line
                    x1={x4 - 8}
                    y1={y1}
                    x2={x4 - 8}
                    y2={y1 - 4}
                    stroke="#F59E0B"
                    strokeWidth={1}
                    strokeDasharray="2 2"
                  />
                  <text
                    x={x4 - 10}
                    y={y1 - 6}
                    textAnchor="end"
                    fontSize={7.5}
                    fill="#B45309"
                  >
                    -{energyLoss}% pérdida
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Title at top */}
        <text
          x={VIEW_W / 2}
          y={12}
          textAnchor="middle"
          fontSize={11}
          fontWeight="700"
          fill="#1E293B"
        >
          {BIOME_LABELS[biome] ?? biome} — Pirámide trófica
        </text>

        {/* Right axis label */}
        <text
          x={VIEW_W - 8}
          y={PYRAMID_TOP + 14}
          textAnchor="end"
          fontSize={8}
          fill="#64748B"
        >
          % energía
        </text>
      </svg>
    </section>
  );
}
