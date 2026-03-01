import type { SocialChoroplethSpec } from "../types";

type Props = { spec: SocialChoroplethSpec };

const BLOCK_W = 100;
const BLOCK_H = 60;
const BLOCK_GAP = 8;
const LEGEND_W = 200;
const LEGEND_H = 14;
const MARGIN_LEFT = 20;
const MARGIN_TOP = 40; // room for title
const LEGEND_MARGIN_TOP = 16;

function parseHex(hex: string): [number, number, number] {
  const s = hex.replace("#", "");
  const r = parseInt(s.slice(0, 2), 16);
  const g = parseInt(s.slice(2, 4), 16);
  const b = parseInt(s.slice(4, 6), 16);
  return [
    isNaN(r) ? 0 : r,
    isNaN(g) ? 0 : g,
    isNaN(b) ? 0 : b,
  ];
}

function lerpColor(hex1: string, hex2: string, t: number): string {
  const [r1, g1, b1] = parseHex(hex1);
  const [r2, g2, b2] = parseHex(hex2);
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  const r = clamp(r1 + (r2 - r1) * t);
  const g = clamp(g1 + (g2 - g1) * t);
  const b = clamp(b1 + (b2 - b1) * t);
  return `rgb(${r},${g},${b})`;
}

function formatValue(v: number): string {
  if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (Math.abs(v) >= 1_000) return `${(v / 1_000).toFixed(1)}k`;
  if (!Number.isInteger(v)) return v.toFixed(1);
  return String(v);
}

export default function SocialChoroplethVisualizer({ spec }: Props) {
  const { regions = [], scale, variable, unit, title, description } = spec;

  const safeMin = scale?.min ?? 0;
  const safeMax = scale?.max ?? 1;
  const colorFrom = scale?.colors?.[0] ?? "#bfdbfe";
  const colorTo = scale?.colors?.[1] ?? "#1d4ed8";
  const range = safeMax - safeMin || 1;

  const numCols = Math.max(1, Math.ceil(Math.sqrt(regions.length)));
  const numRows = regions.length > 0 ? Math.ceil(regions.length / numCols) : 1;

  const gridW = numCols * (BLOCK_W + BLOCK_GAP) - BLOCK_GAP;
  const gridH = numRows * (BLOCK_H + BLOCK_GAP) - BLOCK_GAP;

  const legendY = MARGIN_TOP + gridH + LEGEND_MARGIN_TOP;
  const viewHeight = legendY + LEGEND_H + 30;
  const viewWidth = Math.max(560, MARGIN_LEFT * 2 + Math.max(gridW, LEGEND_W + 80));

  // Center the grid horizontally
  const gridOffsetX = MARGIN_LEFT + Math.max(0, (viewWidth - MARGIN_LEFT * 2 - gridW) / 2);

  // Center legend
  const legendX = (viewWidth - LEGEND_W) / 2;

  const gradientId = "choropleth-gradient";

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
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        className="w-full"
        role="img"
        aria-label={title ?? "Mapa coroplético"}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>

        {/* Chart title: variable + unit */}
        <text
          x={viewWidth / 2}
          y={20}
          textAnchor="middle"
          fontSize={13}
          fontWeight="bold"
          fill="#1e293b"
        >
          {variable}{unit ? ` (${unit})` : ""}
        </text>

        {/* Region blocks */}
        {regions.map((region, i) => {
          const col = i % numCols;
          const row = Math.floor(i / numCols);
          const bx = gridOffsetX + col * (BLOCK_W + BLOCK_GAP);
          const by = MARGIN_TOP + row * (BLOCK_H + BLOCK_GAP);

          // If region has explicit color use it; otherwise interpolate
          let fillColor: string;
          if (region.color) {
            fillColor = region.color;
          } else {
            const t = Math.max(0, Math.min(1, (region.value - safeMin) / range));
            fillColor = lerpColor(colorFrom, colorTo, t);
          }

          return (
            <g key={region.id}>
              <rect
                x={bx}
                y={by}
                width={BLOCK_W}
                height={BLOCK_H}
                fill={fillColor}
                rx={6}
              />
              {/* Region label */}
              <text
                x={bx + BLOCK_W / 2}
                y={by + BLOCK_H / 2 - 4}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={10}
                fontWeight="bold"
                fill="#ffffff"
                style={{ filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.6))" }}
              >
                {region.label}
              </text>
              {/* Value */}
              <text
                x={bx + BLOCK_W / 2}
                y={by + BLOCK_H / 2 + 12}
                textAnchor="middle"
                fontSize={9}
                fill="#ffffff"
                style={{ filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.5))" }}
              >
                {formatValue(region.value)}
              </text>
            </g>
          );
        })}

        {regions.length === 0 && (
          <text
            x={viewWidth / 2}
            y={MARGIN_TOP + 40}
            textAnchor="middle"
            fontSize={12}
            fill="#94a3b8"
            fontStyle="italic"
          >
            Sin datos de regiones
          </text>
        )}

        {/* Color scale legend */}
        <rect
          x={legendX}
          y={legendY}
          width={LEGEND_W}
          height={LEGEND_H}
          fill={`url(#${gradientId})`}
          rx={4}
        />
        {/* Min label */}
        <text
          x={legendX}
          y={legendY + LEGEND_H + 12}
          textAnchor="start"
          fontSize={9}
          fill="#64748b"
        >
          {formatValue(safeMin)}
        </text>
        {/* Max label */}
        <text
          x={legendX + LEGEND_W}
          y={legendY + LEGEND_H + 12}
          textAnchor="end"
          fontSize={9}
          fill="#64748b"
        >
          {formatValue(safeMax)}
        </text>
      </svg>
    </section>
  );
}
