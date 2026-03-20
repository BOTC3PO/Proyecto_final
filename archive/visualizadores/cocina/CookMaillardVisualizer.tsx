import type { CookMaillardSpec } from "../types";

type CookMaillardVisualizerProps = {
  spec: CookMaillardSpec;
};

const VIEW_W = 560;
const VIEW_H = 240;
const MARGIN = { top: 20, right: 20, bottom: 20, left: 20 };

const STRIP_Y = 40;
const STRIP_H = 40;
const STRIP_X = MARGIN.left;
const STRIP_W = VIEW_W - MARGIN.left - MARGIN.right;

const ZONE_LABEL_Y = STRIP_Y + STRIP_H + 16;
const COMPOUND_PANEL_Y = STRIP_Y + STRIP_H + 80;

export default function CookMaillardVisualizer({
  spec,
}: CookMaillardVisualizerProps) {
  const {
    title,
    description,
    temperature,
    reactionZones,
    currentZoneId,
    colorProgression,
    flavorCompounds,
  } = spec;

  // Determine overall temperature range from zones
  const allMins = reactionZones.map((z) => z.minTemp);
  const allMaxs = reactionZones.map((z) => z.maxTemp);
  const tempMin = allMins.length > 0 ? Math.min(...allMins) : 0;
  const tempMax = allMaxs.length > 0 ? Math.max(...allMaxs) : 300;
  const tempSpan = tempMax - tempMin > 0 ? tempMax - tempMin : 1;

  const tempToX = (t: number): number =>
    STRIP_X + ((t - tempMin) / tempSpan) * STRIP_W;

  // Clamp temperature marker within strip
  const clampedTemp = Math.min(Math.max(temperature, tempMin), tempMax);
  const markerX = tempToX(clampedTemp);

  // Find current zone
  const currentZone =
    currentZoneId !== undefined
      ? reactionZones.find((z) => z.id === currentZoneId)
      : reactionZones.find(
          (z) => temperature >= z.minTemp && temperature <= z.maxTemp,
        );

  // Active flavor compounds at current temperature
  const activeCompounds = (flavorCompounds ?? []).filter((c) => {
    const aboveMin =
      c.formsAbove !== undefined ? temperature >= c.formsAbove : true;
    const belowMax =
      c.formsBelow !== undefined ? temperature <= c.formsBelow : true;
    return aboveMin && belowMax;
  });

  // Build gradient stops from colorProgression or use default Maillard colors
  const gradientStops =
    colorProgression.length > 0
      ? colorProgression.map((cp) => ({
          offset: `${(((cp.temp - tempMin) / tempSpan) * 100).toFixed(1)}%`,
          color: cp.color,
        }))
      : [
          { offset: "0%", color: "#FFFBEB" },
          { offset: "30%", color: "#FDE68A" },
          { offset: "55%", color: "#D97706" },
          { offset: "75%", color: "#92400E" },
          { offset: "90%", color: "#3B1F0A" },
          { offset: "100%", color: "#111111" },
        ];

  // Zone boundary positions for labels
  const zoneBoundaries = reactionZones.map((z) => ({
    ...z,
    x1: tempToX(z.minTemp),
    x2: tempToX(z.maxTemp),
    midX: tempToX((z.minTemp + z.maxTemp) / 2),
  }));

  const gradientId = "maillard-gradient";

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
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full"
        role="img"
        aria-label={title ?? "Reacción de Maillard"}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientStops.map((stop, i) => (
              <stop key={i} offset={stop.offset} stopColor={stop.color} />
            ))}
          </linearGradient>
          {/* Clip path so bars don't overflow */}
          <clipPath id="strip-clip">
            <rect
              x={STRIP_X}
              y={STRIP_Y}
              width={STRIP_W}
              height={STRIP_H}
              rx={8}
            />
          </clipPath>
        </defs>

        {/* Temperature range labels */}
        <text
          x={STRIP_X}
          y={STRIP_Y - 6}
          fontSize={9}
          fill="#94A3B8"
          textAnchor="start"
        >
          {tempMin}°C
        </text>
        <text
          x={STRIP_X + STRIP_W}
          y={STRIP_Y - 6}
          fontSize={9}
          fill="#94A3B8"
          textAnchor="end"
        >
          {tempMax}°C
        </text>

        {/* Color gradient strip */}
        <rect
          x={STRIP_X}
          y={STRIP_Y}
          width={STRIP_W}
          height={STRIP_H}
          rx={8}
          fill={`url(#${gradientId})`}
          stroke="#D1D5DB"
          strokeWidth={1}
        />

        {/* Zone boundary tick marks */}
        {zoneBoundaries.map((zone) => (
          <g key={`tick-${zone.id}`}>
            <line
              x1={zone.x1}
              y1={STRIP_Y + STRIP_H}
              x2={zone.x1}
              y2={STRIP_Y + STRIP_H + 6}
              stroke="#94A3B8"
              strokeWidth={1}
            />
          </g>
        ))}
        {/* Final boundary tick */}
        {zoneBoundaries.length > 0 && (
          <line
            x1={zoneBoundaries[zoneBoundaries.length - 1].x2}
            y1={STRIP_Y + STRIP_H}
            x2={zoneBoundaries[zoneBoundaries.length - 1].x2}
            y2={STRIP_Y + STRIP_H + 6}
            stroke="#94A3B8"
            strokeWidth={1}
          />
        )}

        {/* Zone labels below strip */}
        {zoneBoundaries.map((zone) => (
          <text
            key={`label-${zone.id}`}
            x={zone.midX}
            y={ZONE_LABEL_Y}
            fontSize={9}
            fill={zone.id === currentZone?.id ? "#1E293B" : "#94A3B8"}
            fontWeight={zone.id === currentZone?.id ? "700" : "400"}
            textAnchor="middle"
          >
            {zone.label}
          </text>
        ))}

        {/* Temperature tick marks on strip bottom for zones */}
        {zoneBoundaries.map((zone) => (
          <text
            key={`temp-label-${zone.id}`}
            x={zone.x1}
            y={ZONE_LABEL_Y + 12}
            fontSize={8}
            fill="#CBD5E1"
            textAnchor="middle"
          >
            {zone.minTemp}°
          </text>
        ))}

        {/* Current temperature marker line */}
        <line
          x1={markerX}
          y1={STRIP_Y - 6}
          x2={markerX}
          y2={STRIP_Y + STRIP_H + 6}
          stroke="#1E293B"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        {/* Marker triangle indicator */}
        <polygon
          points={`${markerX - 5},${STRIP_Y - 6} ${markerX + 5},${STRIP_Y - 6} ${markerX},${STRIP_Y}`}
          fill="#1E293B"
        />
        {/* Marker temperature label */}
        <rect
          x={markerX - 22}
          y={STRIP_Y + STRIP_H + 10}
          width={44}
          height={16}
          rx={4}
          fill="#1E293B"
        />
        <text
          x={markerX}
          y={STRIP_Y + STRIP_H + 22}
          fontSize={10}
          fontWeight="700"
          fill="#FFFFFF"
          textAnchor="middle"
        >
          {temperature}°C
        </text>

        {/* Current zone prominent label */}
        {currentZone && (
          <>
            <rect
              x={MARGIN.left}
              y={COMPOUND_PANEL_Y - 16}
              width={STRIP_W}
              height={24}
              rx={6}
              fill={currentZone.color}
              opacity={0.15}
              stroke={currentZone.color}
              strokeWidth={1}
              strokeOpacity={0.5}
            />
            <text
              x={MARGIN.left + 10}
              y={COMPOUND_PANEL_Y}
              fontSize={12}
              fontWeight="700"
              fill={currentZone.color}
            >
              Zona actual: {currentZone.label}
            </text>
            <text
              x={MARGIN.left + STRIP_W - 4}
              y={COMPOUND_PANEL_Y}
              fontSize={9}
              fill="#64748B"
              textAnchor="end"
            >
              {currentZone.minTemp}–{currentZone.maxTemp}°C
            </text>
          </>
        )}

        {/* Zone description */}
        {currentZone?.description && (
          <text
            x={MARGIN.left + 10}
            y={COMPOUND_PANEL_Y + 16}
            fontSize={9}
            fill="#64748B"
          >
            {currentZone.description}
          </text>
        )}

        {/* Flavor compounds panel */}
        {activeCompounds.length > 0 && (
          <>
            <text
              x={MARGIN.left}
              y={COMPOUND_PANEL_Y + 36}
              fontSize={9}
              fontWeight="600"
              fill="#94A3B8"
            >
              COMPUESTOS ACTIVOS A {temperature}°C
            </text>
            {activeCompounds.map((compound, idx) => {
              const colIdx = idx % 3;
              const rowIdx = Math.floor(idx / 3);
              const cx = MARGIN.left + colIdx * (STRIP_W / 3);
              const cy = COMPOUND_PANEL_Y + 50 + rowIdx * 20;
              return (
                <g key={`compound-${compound.name}`}>
                  <circle cx={cx + 5} cy={cy - 3} r={3} fill="#F59E0B" />
                  <text
                    x={cx + 13}
                    y={cy}
                    fontSize={9}
                    fill="#1E293B"
                  >
                    {compound.name}
                  </text>
                  {compound.description && (
                    <title>{compound.description}</title>
                  )}
                </g>
              );
            })}
          </>
        )}

        {/* No active compounds message */}
        {flavorCompounds !== undefined && activeCompounds.length === 0 && (
          <text
            x={MARGIN.left}
            y={COMPOUND_PANEL_Y + 50}
            fontSize={9}
            fill="#94A3B8"
          >
            Sin compuestos de sabor activos a esta temperatura
          </text>
        )}
      </svg>

      {/* Legend: zone color chips */}
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
        {reactionZones.map((zone) => (
          <div key={zone.id} className="flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: zone.color }}
            />
            <span
              className={
                zone.id === currentZone?.id ? "font-semibold text-slate-900" : ""
              }
            >
              {zone.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
