import type { ArtColorWheelSpec } from "../types";

type Props = { spec: ArtColorWheelSpec };

const TWO_PI = Math.PI * 2;
const SEGMENTS = 36;
const DEG_PER_SEGMENT = 360 / SEGMENTS;

const CX = 200;
const CY = 160;
const R_OUTER = 120;
const R_INNER = 50;

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function polarToXY(cx: number, cy: number, r: number, angleDeg: number): [number, number] {
  const rad = degToRad(angleDeg - 90);
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function buildArcPath(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startDeg: number,
  endDeg: number,
): string {
  const [ox1, oy1] = polarToXY(cx, cy, rOuter, startDeg);
  const [ox2, oy2] = polarToXY(cx, cy, rOuter, endDeg);
  const [ix1, iy1] = polarToXY(cx, cy, rInner, endDeg);
  const [ix2, iy2] = polarToXY(cx, cy, rInner, startDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return [
    `M ${ox1} ${oy1}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${ox2} ${oy2}`,
    `L ${ix1} ${iy1}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${ix2} ${iy2}`,
    "Z",
  ].join(" ");
}

function normalizeHue(h: number): number {
  return ((h % 360) + 360) % 360;
}

function getHarmonyHues(selectedHue: number, harmony: ArtColorWheelSpec["harmony"]): number[] {
  const h = normalizeHue(selectedHue);
  switch (harmony) {
    case "complementary":
      return [normalizeHue(h + 180)];
    case "triadic":
      return [normalizeHue(h + 120), normalizeHue(h + 240)];
    case "analogous":
      return [normalizeHue(h - 30), normalizeHue(h + 30)];
    case "split-complementary":
      return [normalizeHue(h + 150), normalizeHue(h + 210)];
    default:
      return [];
  }
}

function hueToSegment(hue: number): number {
  return Math.round(normalizeHue(hue) / DEG_PER_SEGMENT) % SEGMENTS;
}

export default function ArtColorWheelVisualizer({ spec }: Props) {
  const { selectedHue, harmony, swatches, palette } = spec;

  const harmonyHues = getHarmonyHues(selectedHue, harmony);
  const selectedSegment = hueToSegment(selectedHue);
  const harmonySegments = new Set(harmonyHues.map(hueToSegment));

  const displaySwatches =
    swatches && swatches.length > 0
      ? swatches
      : [
          { color: `hsl(${normalizeHue(selectedHue)}, 70%, 60%)`, label: "Base", role: "base" },
          ...harmonyHues.map((h, i) => ({
            color: `hsl(${h}, 70%, 60%)`,
            label: `Harmony ${i + 1}`,
            role: "harmony",
          })),
        ];

  const swatchY = 295;
  const swatchSize = 32;
  const swatchGap = 10;
  const totalSwatchWidth = displaySwatches.length * (swatchSize + swatchGap) - swatchGap;
  const swatchStartX = (400 - totalSwatchWidth) / 2;

  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label={spec.title ?? "Color Wheel"}>
      {spec.title && (
        <text x="200" y="16" textAnchor="middle" fontSize="13" fontWeight="600" fill="#374151">
          {spec.title}
        </text>
      )}

      {/* Wheel segments */}
      {Array.from({ length: SEGMENTS }, (_, i) => {
        const hue = i * DEG_PER_SEGMENT;
        const startDeg = i * DEG_PER_SEGMENT;
        const endDeg = startDeg + DEG_PER_SEGMENT;
        const isSelected = i === selectedSegment;
        const isHarmony = harmonySegments.has(i);

        return (
          <path
            key={i}
            d={buildArcPath(CX, CY, R_OUTER, R_INNER, startDeg, endDeg)}
            fill={`hsl(${hue}, 70%, 60%)`}
            stroke={isSelected ? "#ffffff" : isHarmony ? "#ffffff" : "rgba(255,255,255,0.15)"}
            strokeWidth={isSelected ? 3 : isHarmony ? 2.5 : 0.5}
            opacity={isSelected || isHarmony ? 1 : 0.85}
          />
        );
      })}

      {/* Center circle */}
      <circle
        cx={CX}
        cy={CY}
        r={R_INNER}
        fill={`hsl(${normalizeHue(selectedHue)}, 70%, 60%)`}
        stroke="white"
        strokeWidth="2"
      />
      <text x={CX} y={CY - 4} textAnchor="middle" fontSize="10" fill="white" fontWeight="600">
        {normalizeHue(selectedHue)}°
      </text>
      <text x={CX} y={CY + 10} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.85)">
        {harmony}
      </text>

      {/* Harmony hue labels */}
      {harmonyHues.map((h, i) => {
        const [lx, ly] = polarToXY(CX, CY, R_OUTER + 16, h);
        return (
          <text key={i} x={lx} y={ly} textAnchor="middle" fontSize="9" fill="#6b7280" dominantBaseline="middle">
            {Math.round(h)}°
          </text>
        );
      })}

      {/* Palette from spec (if any) */}
      {palette && palette.length > 0 && (
        <g>
          {palette.map((p, i) => {
            const [px, py] = polarToXY(CX, CY, R_OUTER - 12, p.hue);
            return (
              <circle
                key={i}
                cx={px}
                cy={py}
                r={5}
                fill={`hsl(${p.hue}, ${p.saturation}%, ${p.lightness}%)`}
                stroke="white"
                strokeWidth="1.5"
              />
            );
          })}
        </g>
      )}

      {/* Swatches row */}
      <g>
        {displaySwatches.map((s, i) => {
          const sx = swatchStartX + i * (swatchSize + swatchGap);
          return (
            <g key={i}>
              <rect
                x={sx}
                y={swatchY - swatchSize}
                width={swatchSize}
                height={swatchSize}
                rx="4"
                fill={s.color}
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="1"
              />
              <text
                x={sx + swatchSize / 2}
                y={swatchY + 6}
                textAnchor="middle"
                fontSize="8"
                fill="#6b7280"
              >
                {s.label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
