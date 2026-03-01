import type { BioCellDiagramSpec } from "../types";

interface Props {
  spec: BioCellDiagramSpec;
}

const VIEW_W = 560;
const VIEW_H = 380;

// Spec coordinate space: 0-600 x 0-400
const SPEC_W = 600;
const SPEC_H = 400;

// Cell boundary in viewBox
const CELL_CX = VIEW_W / 2;
const CELL_CY = 170;
const CELL_RX = 240;
const CELL_RY = 150;

function scaleX(x: number): number {
  return (x / SPEC_W) * VIEW_W;
}

function scaleY(y: number): number {
  return (y / SPEC_H) * (VIEW_H - 80); // leave room at bottom for info panel
}

function scaleR(r: number, specDim: number, viewDim: number): number {
  return (r / specDim) * viewDim;
}

export default function BioCellDiagramVisualizer({ spec }: Props) {
  const { cellType, organelles, highlightedOrganelleId, title, description } = spec;

  const effectiveHighlightId =
    highlightedOrganelleId ??
    organelles.find((o) => o.highlighted)?.id ??
    null;

  const highlightedOrganelle = effectiveHighlightId
    ? organelles.find((o) => o.id === effectiveHighlightId)
    : null;

  const cellTypeColors: Record<string, { fill: string; stroke: string }> = {
    animal: { fill: "#fef9c3", stroke: "#ca8a04" },
    plant: { fill: "#dcfce7", stroke: "#16a34a" },
    bacteria: { fill: "#e0f2fe", stroke: "#0284c7" },
  };
  const cellColors = cellTypeColors[cellType] ?? cellTypeColors.animal;

  // Default organelle colors by type pattern
  function defaultOrganelleColor(label: string): string {
    const l = label.toLowerCase();
    if (l.includes("nucleus") || l.includes("núcleo")) return "#c7d2fe";
    if (l.includes("mitochon")) return "#fca5a5";
    if (l.includes("chloro") || l.includes("cloro")) return "#86efac";
    if (l.includes("ribosom") || l.includes("riboso")) return "#fdba74";
    if (l.includes("vacuol") || l.includes("vacuola")) return "#a5f3fc";
    if (l.includes("golgi") || l.includes("aparato")) return "#f9a8d4";
    if (l.includes("reticul")) return "#d8b4fe";
    return "#cbd5e1";
  }

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title ?? `${cellType} cell diagram`}
      >
        {/* Background */}
        <rect width={VIEW_W} height={VIEW_H} fill="#f8fafc" rx={8} />

        {/* Title */}
        <text
          x={VIEW_W / 2}
          y={16}
          textAnchor="middle"
          fontSize={12}
          fontWeight="600"
          fill="#1e293b"
        >
          {title ?? `${cellType.charAt(0).toUpperCase() + cellType.slice(1)} Cell`}
        </text>

        {/* Cell type subtitle */}
        <text
          x={VIEW_W / 2}
          y={30}
          textAnchor="middle"
          fontSize={9}
          fill="#64748b"
        >
          {cellType.charAt(0).toUpperCase() + cellType.slice(1)} Cell
        </text>

        {/* Cell boundary ellipse */}
        <ellipse
          cx={CELL_CX}
          cy={CELL_CY}
          rx={CELL_RX}
          ry={CELL_RY}
          fill={cellColors.fill}
          stroke={cellColors.stroke}
          strokeWidth={2.5}
          strokeDasharray={cellType === "bacteria" ? "6 3" : undefined}
        />

        {/* Organelles */}
        {organelles.map((org) => {
          const isHighlighted = org.id === effectiveHighlightId;
          const baseColor = org.color ?? defaultOrganelleColor(org.label);
          const fillColor = isHighlighted ? baseColor : baseColor + "cc";
          const strokeColor = isHighlighted ? baseColor : "#94a3b8";
          const strokeW = isHighlighted ? 3 : 1;

          const cx = scaleX(org.cx);
          const cy = scaleY(org.cy) + 40; // offset from title area
          const rx = scaleR(org.rx, SPEC_W, VIEW_W * 0.8);
          const ry = scaleR(org.ry, SPEC_H, CELL_RY * 2 * 0.9);

          return (
            <g key={org.id}>
              {/* Glow for highlighted */}
              {isHighlighted && (
                <ellipse
                  cx={cx}
                  cy={cy}
                  rx={rx + 4}
                  ry={ry + 4}
                  fill="none"
                  stroke={baseColor}
                  strokeWidth={6}
                  opacity={0.3}
                />
              )}
              <ellipse
                cx={cx}
                cy={cy}
                rx={rx}
                ry={ry}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeW}
              />
              {/* Label */}
              <text
                x={cx}
                y={cy + ry + 11}
                textAnchor="middle"
                fontSize={isHighlighted ? 9 : 8}
                fontWeight={isHighlighted ? "700" : "400"}
                fill={isHighlighted ? "#1e293b" : "#475569"}
              >
                {org.label.length > 18 ? org.label.slice(0, 16) + "…" : org.label}
              </text>
            </g>
          );
        })}

        {/* Info panel at bottom */}
        <rect
          x={10}
          y={VIEW_H - 70}
          width={VIEW_W - 20}
          height={62}
          fill="#f1f5f9"
          rx={6}
          stroke="#e2e8f0"
          strokeWidth={1}
        />
        {highlightedOrganelle ? (
          <g transform={`translate(18, ${VIEW_H - 56})`}>
            <text fontSize={10} fontWeight="700" fill="#1e293b">
              {highlightedOrganelle.label}
            </text>
            <text y={14} fontSize={9} fill="#475569">
              {highlightedOrganelle.description
                ? highlightedOrganelle.description.length > 100
                  ? highlightedOrganelle.description.slice(0, 97) + "..."
                  : highlightedOrganelle.description
                : "No description available."}
            </text>
          </g>
        ) : (
          <g transform={`translate(18, ${VIEW_H - 56})`}>
            <text fontSize={9} fill="#94a3b8">
              {description ?? "Hover or highlight an organelle to see its description."}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
