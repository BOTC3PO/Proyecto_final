import type { CsSortingSpec } from "../types";

interface Props {
  spec: CsSortingSpec;
}

export default function CsSortingVisualizer({ spec }: Props) {
  const { initialArray, steps, currentStep, complexity, algorithm, title } = spec;

  // Determine which array and state to display
  const hasSteps = steps && steps.length > 0;
  const clampedStep = hasSteps
    ? Math.max(0, Math.min(currentStep, steps.length - 1))
    : -1;
  const currentStepData = hasSteps ? steps[clampedStep] : null;
  const displayArray = currentStepData ? currentStepData.array : initialArray;

  // Collect index sets for color coding
  const comparingSet = new Set<number>(currentStepData?.comparing ?? []);
  const swappedSet = new Set<number>(currentStepData?.swapped ?? []);
  const sortedSet = new Set<number>(currentStepData?.sorted ?? []);

  // Layout constants
  const viewBoxWidth = 560;
  const viewBoxHeight = 280;
  const marginTop = 20;
  const marginLeft = 40;
  const marginRight = 20;
  const marginBottom = 60;
  const chartWidth = viewBoxWidth - marginLeft - marginRight;
  const chartHeight = viewBoxHeight - marginTop - marginBottom;

  const n = displayArray.length;
  const maxVal = Math.max(...displayArray, 1);
  const barWidth = n > 0 ? chartWidth / n : chartWidth;
  const barGap = barWidth * 0.15;
  const effectiveBarWidth = barWidth - barGap;

  function getBarFill(index: number): string {
    if (!currentStepData) return "#cbd5e1"; // slate-300
    if (swappedSet.has(index)) return "#ef4444";   // red-500
    if (comparingSet.has(index)) return "#f59e0b"; // amber-500
    if (sortedSet.has(index)) return "#22c55e";    // green-500
    return "#cbd5e1"; // slate-300
  }

  const algorithmLabels: Record<string, string> = {
    bubble: "Bubble Sort",
    selection: "Selection Sort",
    insertion: "Insertion Sort",
    merge: "Merge Sort",
    quick: "Quick Sort",
  };

  const stepDescription = currentStepData?.description ?? "";
  const stepLabel = hasSteps
    ? `Step ${clampedStep + 1} / ${steps.length}`
    : "Initial Array";

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title ?? algorithmLabels[algorithm] ?? "Sorting Visualizer"}
      >
        {/* Background */}
        <rect width={viewBoxWidth} height={viewBoxHeight} fill="#f8fafc" rx={8} />

        {/* Title */}
        <text
          x={viewBoxWidth / 2}
          y={14}
          textAnchor="middle"
          fontSize={12}
          fontWeight="600"
          fill="#1e293b"
        >
          {title ?? algorithmLabels[algorithm] ?? "Sorting Visualizer"}
        </text>

        {/* Bars */}
        <g transform={`translate(${marginLeft}, ${marginTop})`}>
          {displayArray.map((val, i) => {
            const barH = n > 0 ? (val / maxVal) * chartHeight : 0;
            const x = i * barWidth + barGap / 2;
            const y = chartHeight - barH;
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width={effectiveBarWidth}
                  height={barH}
                  fill={getBarFill(i)}
                  rx={2}
                />
                {/* Value label on top of bar if bars are wide enough */}
                {effectiveBarWidth >= 18 && (
                  <text
                    x={x + effectiveBarWidth / 2}
                    y={y - 3}
                    textAnchor="middle"
                    fontSize={9}
                    fill="#475569"
                  >
                    {val}
                  </text>
                )}
              </g>
            );
          })}

          {/* X-axis baseline */}
          <line
            x1={0}
            y1={chartHeight}
            x2={chartWidth}
            y2={chartHeight}
            stroke="#94a3b8"
            strokeWidth={1}
          />
        </g>

        {/* Step info area */}
        <g transform={`translate(${marginLeft}, ${viewBoxHeight - marginBottom + 8})`}>
          <text fontSize={10} fill="#64748b" fontWeight="500">
            {stepLabel}
          </text>
          {stepDescription && (
            <text y={14} fontSize={9} fill="#475569">
              {stepDescription.length > 70
                ? stepDescription.slice(0, 67) + "..."
                : stepDescription}
            </text>
          )}
        </g>

        {/* Complexity labels */}
        <g transform={`translate(${marginLeft}, ${viewBoxHeight - 12})`}>
          <text fontSize={9} fill="#64748b">
            <tspan fontWeight="600">Time:</tspan>
            {" "}O({complexity.time}){"  "}
            <tspan fontWeight="600">Space:</tspan>
            {" "}O({complexity.space})
          </text>
        </g>

        {/* Legend */}
        <g transform={`translate(${viewBoxWidth - marginRight - 130}, ${viewBoxHeight - marginBottom + 4})`}>
          {[
            { color: "#f59e0b", label: "Comparing" },
            { color: "#ef4444", label: "Swapped" },
            { color: "#22c55e", label: "Sorted" },
            { color: "#cbd5e1", label: "Unsorted" },
          ].map(({ color, label }, i) => (
            <g key={label} transform={`translate(0, ${i * 12})`}>
              <rect x={0} y={-7} width={8} height={8} fill={color} rx={1} />
              <text x={12} y={0} fontSize={8} fill="#475569">
                {label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
