import { BioGeneticsSpec } from "../types";

interface Props {
  spec: BioGeneticsSpec;
}

const VIEW_W = 560;
const VIEW_H = 300;

export default function BioGeneticsVisualizer({ spec }: Props) {
  const {
    cross,
    parent1Alleles,
    parent2Alleles,
    punnettSquare,
    phenotypeRatio,
    genotypeRatio,
    notes,
    title,
  } = spec;

  const gridSize = cross === "dihybrid" ? 4 : 2;

  // Layout
  const headerSize = cross === "dihybrid" ? 36 : 40;
  const availableWidth = VIEW_W - 80; // left margin for row headers
  const availableHeight = 160; // fixed area for grid
  const cellW = availableWidth / gridSize;
  const cellH = availableHeight / gridSize;
  const gridLeft = 80;
  const gridTop = 50;

  // Info area
  const infoTop = gridTop + availableHeight + 10;

  function isDominant(cell: { alleles: string; dominant?: boolean }): boolean {
    if (cell.dominant !== undefined) return cell.dominant;
    // Heuristic: dominant if has at least one uppercase allele
    return /[A-Z]/.test(cell.alleles);
  }

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title ?? "Punnett Square"}
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
          {title ?? (cross === "dihybrid" ? "Dihybrid Cross" : "Monohybrid Cross")}
        </text>

        {/* Cross type label */}
        <text
          x={VIEW_W / 2}
          y={30}
          textAnchor="middle"
          fontSize={9}
          fill="#64748b"
        >
          {cross === "dihybrid" ? "Dihybrid (4×4)" : "Monohybrid (2×2)"}
        </text>

        {/* Parent 1 column headers (top) */}
        {parent1Alleles.slice(0, gridSize).map((allele, ci) => (
          <g key={`col-${ci}`}>
            <rect
              x={gridLeft + ci * cellW}
              y={gridTop - headerSize}
              width={cellW}
              height={headerSize}
              fill="#dbeafe"
              stroke="#93c5fd"
              strokeWidth={1}
            />
            <text
              x={gridLeft + ci * cellW + cellW / 2}
              y={gridTop - headerSize / 2 + 4}
              textAnchor="middle"
              fontSize={cross === "dihybrid" ? 10 : 13}
              fontWeight="700"
              fill="#1d4ed8"
            >
              {allele}
            </text>
          </g>
        ))}

        {/* Parent 2 row headers (left) */}
        {parent2Alleles.slice(0, gridSize).map((allele, ri) => (
          <g key={`row-${ri}`}>
            <rect
              x={gridLeft - headerSize}
              y={gridTop + ri * cellH}
              width={headerSize}
              height={cellH}
              fill="#fce7f3"
              stroke="#f9a8d4"
              strokeWidth={1}
            />
            <text
              x={gridLeft - headerSize / 2}
              y={gridTop + ri * cellH + cellH / 2 + 4}
              textAnchor="middle"
              fontSize={cross === "dihybrid" ? 10 : 13}
              fontWeight="700"
              fill="#be185d"
            >
              {allele}
            </text>
          </g>
        ))}

        {/* Corner empty cell */}
        <rect
          x={gridLeft - headerSize}
          y={gridTop - headerSize}
          width={headerSize}
          height={headerSize}
          fill="#e2e8f0"
          stroke="#cbd5e1"
          strokeWidth={1}
        />

        {/* Punnett cells */}
        {punnettSquare.slice(0, gridSize).map((row, ri) =>
          row.slice(0, gridSize).map((cell, ci) => {
            const dominant = isDominant(cell);
            const fillColor = dominant ? "#dcfce7" : "#f1f5f9";
            const borderColor = dominant ? "#86efac" : "#e2e8f0";
            const textColor = dominant ? "#15803d" : "#475569";
            const fontSize = cross === "dihybrid" ? (cell.alleles.length > 4 ? 8 : 9) : 13;

            return (
              <g key={`cell-${ri}-${ci}`}>
                <rect
                  x={gridLeft + ci * cellW}
                  y={gridTop + ri * cellH}
                  width={cellW}
                  height={cellH}
                  fill={fillColor}
                  stroke={borderColor}
                  strokeWidth={1}
                />
                <text
                  x={gridLeft + ci * cellW + cellW / 2}
                  y={gridTop + ri * cellH + cellH / 2 + fontSize / 3}
                  textAnchor="middle"
                  fontSize={fontSize}
                  fontWeight="600"
                  fill={textColor}
                >
                  {cell.alleles}
                </text>
              </g>
            );
          })
        )}

        {/* Legend */}
        <g transform={`translate(${gridLeft + gridSize * cellW + 12}, ${gridTop})`}>
          <rect x={0} y={0} width={12} height={12} fill="#dcfce7" stroke="#86efac" strokeWidth={1} rx={2} />
          <text x={16} y={10} fontSize={8} fill="#475569">Dominant</text>
          <rect x={0} y={18} width={12} height={12} fill="#f1f5f9" stroke="#e2e8f0" strokeWidth={1} rx={2} />
          <text x={16} y={28} fontSize={8} fill="#475569">Recessive</text>
        </g>

        {/* Ratios and notes */}
        <g transform={`translate(10, ${infoTop})`}>
          {phenotypeRatio && (
            <text fontSize={9} fill="#475569">
              <tspan fontWeight="700">Phenotype ratio: </tspan>
              {phenotypeRatio}
            </text>
          )}
          {genotypeRatio && (
            <text y={phenotypeRatio ? 13 : 0} fontSize={9} fill="#475569">
              <tspan fontWeight="700">Genotype ratio: </tspan>
              {genotypeRatio}
            </text>
          )}
          {notes && notes.length > 0 && (
            <text
              y={(phenotypeRatio ? 13 : 0) + (genotypeRatio ? 13 : 0)}
              fontSize={8}
              fill="#94a3b8"
            >
              {notes[0].length > 100 ? notes[0].slice(0, 97) + "..." : notes[0]}
            </text>
          )}
        </g>
      </svg>
    </div>
  );
}
