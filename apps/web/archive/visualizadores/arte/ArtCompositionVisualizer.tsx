import type { ArtCompositionSpec } from "../types";

type Props = { spec: ArtCompositionSpec };

const VIEW_W = 560;
const VIEW_H = 360;
const PADDING = { top: 36, right: 20, bottom: 20, left: 20 };

const RULE_LABELS: Record<ArtCompositionSpec["rule"], string> = {
  "rule-of-thirds": "Rule of Thirds",
  "golden-ratio": "Golden Ratio",
  symmetry: "Symmetry",
  diagonal: "Diagonal Composition",
};

export default function ArtCompositionVisualizer({ spec }: Props) {
  const { canvasWidth, canvasHeight, rule, overlayLines, zones, elements } = spec;

  const canvasAreaW = VIEW_W - PADDING.left - PADDING.right;
  const canvasAreaH = VIEW_H - PADDING.top - PADDING.bottom;

  const scale = Math.min(canvasAreaW / (canvasWidth || 1), canvasAreaH / (canvasHeight || 1));
  const scaledW = (canvasWidth || 400) * scale;
  const scaledH = (canvasHeight || 300) * scale;

  const originX = PADDING.left + (canvasAreaW - scaledW) / 2;
  const originY = PADDING.top + (canvasAreaH - scaledH) / 2;

  function sx(x: number): number {
    return originX + x * scale;
  }
  function sy(y: number): number {
    return originY + y * scale;
  }
  function sw(w: number): number {
    return w * scale;
  }
  function sh(h: number): number {
    return h * scale;
  }

  const ruleLabel = RULE_LABELS[rule] ?? rule;

  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} xmlns="http://www.w3.org/2000/svg" aria-label={spec.title ?? "Art Composition"}>
      {/* Rule label */}
      <text x={VIEW_W / 2} y="22" textAnchor="middle" fontSize="13" fontWeight="600" fill="#374151">
        {spec.title ? `${spec.title} — ` : ""}
        {ruleLabel}
      </text>

      {/* Canvas background */}
      <rect
        x={originX}
        y={originY}
        width={scaledW}
        height={scaledH}
        fill="#f9fafb"
        stroke="#d1d5db"
        strokeWidth="1.5"
        rx="2"
      />

      {/* Zones (semi-transparent overlays) */}
      {(zones ?? []).map((z, i) => (
        <g key={z.label ?? i}>
          <rect
            x={sx(z.x)}
            y={sy(z.y)}
            width={sw(z.width)}
            height={sh(z.height)}
            fill={z.color ?? "#3b82f6"}
            opacity={z.opacity ?? 0.12}
            rx="1"
          />
          {z.label && (
            <text
              x={sx(z.x) + sw(z.width) / 2}
              y={sy(z.y) + sh(z.height) / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fill={z.color ?? "#3b82f6"}
              opacity={0.7}
            >
              {z.label}
            </text>
          )}
        </g>
      ))}

      {/* Overlay lines */}
      {(overlayLines ?? []).map((line, i) => (
        <g key={line.label ?? i}>
          <line
            x1={sx(line.x1)}
            y1={sy(line.y1)}
            x2={sx(line.x2)}
            y2={sy(line.y2)}
            stroke={line.color ?? "#6366f1"}
            strokeWidth="1.5"
            strokeDasharray="6 3"
            opacity="0.75"
          />
          {line.label && (
            <text
              x={(sx(line.x1) + sx(line.x2)) / 2}
              y={(sy(line.y1) + sy(line.y2)) / 2 - 4}
              textAnchor="middle"
              fontSize="8"
              fill={line.color ?? "#6366f1"}
              opacity={0.8}
            >
              {line.label}
            </text>
          )}
        </g>
      ))}

      {/* Elements (colored rects with labels) */}
      {(elements ?? []).map((el) => (
        <g key={el.id}>
          <rect
            x={sx(el.x)}
            y={sy(el.y)}
            width={sw(el.width)}
            height={sh(el.height)}
            fill={el.color ?? "#f59e0b"}
            stroke="rgba(0,0,0,0.25)"
            strokeWidth="1"
            rx="2"
            opacity="0.85"
          />
          {el.label && (
            <text
              x={sx(el.x) + sw(el.width) / 2}
              y={sy(el.y) + sh(el.height) / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fill="white"
              fontWeight="600"
            >
              {el.label}
            </text>
          )}
        </g>
      ))}

      {/* Canvas border on top of everything */}
      <rect
        x={originX}
        y={originY}
        width={scaledW}
        height={scaledH}
        fill="none"
        stroke="#9ca3af"
        strokeWidth="1.5"
        rx="2"
      />

      {/* Dimension label */}
      <text
        x={originX + scaledW / 2}
        y={originY + scaledH + 14}
        textAnchor="middle"
        fontSize="9"
        fill="#9ca3af"
      >
        {canvasWidth} × {canvasHeight}
      </text>
    </svg>
  );
}
