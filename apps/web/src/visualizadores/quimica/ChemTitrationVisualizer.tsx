import type {
  ChemTitrationIndicatorRange,
  ChemTitrationMilestone,
  ChemTitrationSpec,
} from "../types";

type ChemTitrationVisualizerProps = {
  spec: ChemTitrationSpec;
};

const chartDimensions = {
  width: 640,
  height: 320,
  padding: { top: 24, right: 28, bottom: 48, left: 56 },
};

const formatAxisLabel = (label?: string, unit?: string) => {
  if (!label && !unit) return "";
  if (label && unit) return `${label} (${unit})`;
  return label ?? unit ?? "";
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const getMilestoneColor = (milestone: ChemTitrationMilestone) => {
  switch (milestone.type) {
    case "equivalence":
      return "#f97316";
    case "buffer":
      return "#a78bfa";
    case "end":
      return "#22c55e";
    default:
      return "#0f172a";
  }
};

const ColorIndicator = ({
  ranges,
  currentPH,
  title,
}: {
  ranges: ChemTitrationIndicatorRange[];
  currentPH?: number;
  title?: string;
}) => {
  const rangeMin = Math.min(...ranges.map((range) => range.min));
  const rangeMax = Math.max(...ranges.map((range) => range.max));
  const normalizedCurrent =
    currentPH === undefined
      ? null
      : clamp((currentPH - rangeMin) / (rangeMax - rangeMin), 0, 1);
  const currentRange =
    currentPH === undefined
      ? undefined
      : ranges.find((range) => currentPH >= range.min && currentPH <= range.max);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold uppercase tracking-wide">
          {title ?? "Indicador de color"}
        </span>
        {currentPH !== undefined ? (
          <span className="text-slate-600">pH actual: {currentPH.toFixed(2)}</span>
        ) : null}
      </div>
      <div className="relative h-3 w-full overflow-hidden rounded-full border border-slate-200">
        <div className="flex h-full w-full">
          {ranges.map((range) => {
            const width = ((range.max - range.min) / (rangeMax - rangeMin)) * 100;
            return (
              <div
                key={range.label}
                className="h-full"
                style={{ width: `${width}%`, backgroundColor: range.color }}
              />
            );
          })}
        </div>
        {normalizedCurrent !== null ? (
          <div
            className="absolute -top-1 h-5 w-[2px] bg-slate-800"
            style={{ left: `calc(${normalizedCurrent * 100}% - 1px)` }}
          />
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2">
        {ranges.map((range) => (
          <div
            key={range.label}
            className={`flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] ${
              currentRange?.label === range.label
                ? "border-slate-400 bg-slate-100 text-slate-700"
                : "border-slate-200 text-slate-500"
            }`}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: range.color }}
            />
            <span>{range.label}</span>
          </div>
        ))}
      </div>
      {currentRange ? (
        <p className="text-xs text-slate-500">
          Color esperado: <span className="font-medium text-slate-700">{currentRange.label}</span>
        </p>
      ) : null}
    </div>
  );
};

export default function ChemTitrationVisualizer({
  spec,
}: ChemTitrationVisualizerProps) {
  const { width, height, padding } = chartDimensions;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const volumes = spec.curve.points.map((point) => point.volume);
  const pHValues = spec.curve.points.map((point) => point.pH);
  const minX = spec.axes?.x?.min ?? Math.min(...volumes);
  const maxX = spec.axes?.x?.max ?? Math.max(...volumes);
  const minY = spec.axes?.y?.min ?? 0;
  const maxY = spec.axes?.y?.max ?? 14;

  const resolveX = (volume: number) =>
    padding.left + ((volume - minX) / (maxX - minX || 1)) * chartWidth;
  const resolveY = (pH: number) =>
    padding.top + chartHeight - ((pH - minY) / (maxY - minY || 1)) * chartHeight;

  const path = spec.curve.points
    .map((point, index) => {
      const x = resolveX(point.volume);
      const y = resolveY(point.pH);
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h3 className="text-base font-semibold text-slate-800">
          {spec.title ?? "Curva de titulación"}
        </h3>
        {spec.description ? (
          <p className="text-xs text-slate-500">{spec.description}</p>
        ) : null}
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-80 w-full"
          role="img"
          aria-label="Curva de titulación pH-volumen"
        >
          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={height - padding.bottom}
            stroke="#CBD5F5"
          />
          <line
            x1={padding.left}
            y1={height - padding.bottom}
            x2={width - padding.right}
            y2={height - padding.bottom}
            stroke="#CBD5F5"
          />
          {Array.from({ length: 5 }).map((_, index) => {
            const value = minY + ((maxY - minY) / 4) * index;
            const y = resolveY(value);
            return (
              <g key={value}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#E2E8F0"
                />
                <text x={padding.left - 8} y={y + 4} textAnchor="end" className="fill-slate-500 text-[10px]">
                  {value.toFixed(0)}
                </text>
              </g>
            );
          })}
          <path d={path} fill="none" stroke={spec.curve.color ?? "#38bdf8"} strokeWidth={2} />
          {spec.milestones?.map((milestone) => {
            const x = resolveX(milestone.volume);
            const y = resolveY(milestone.pH);
            return (
              <g key={milestone.id}>
                <circle cx={x} cy={y} r={4} fill={getMilestoneColor(milestone)} />
                <text
                  x={x + 6}
                  y={y - 6}
                  className="fill-slate-600 text-[10px]"
                >
                  {milestone.label}
                </text>
              </g>
            );
          })}
          {formatAxisLabel(spec.axes?.x?.label, spec.axes?.x?.unit) && (
            <text
              x={padding.left + chartWidth / 2}
              y={height - 8}
              textAnchor="middle"
              className="fill-slate-500 text-[10px]"
            >
              {formatAxisLabel(spec.axes?.x?.label, spec.axes?.x?.unit)}
            </text>
          )}
          {formatAxisLabel(spec.axes?.y?.label, spec.axes?.y?.unit) && (
            <text
              x={padding.left - 40}
              y={padding.top + chartHeight / 2}
              textAnchor="middle"
              className="fill-slate-500 text-[10px]"
              transform={`rotate(-90 ${padding.left - 40} ${padding.top + chartHeight / 2})`}
            >
              {formatAxisLabel(spec.axes?.y?.label, spec.axes?.y?.unit)}
            </text>
          )}
        </svg>
      </section>

      {spec.indicator ? (
        <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <ColorIndicator
            ranges={spec.indicator.ranges}
            currentPH={spec.indicator.currentPH}
            title={spec.indicator.title}
          />
        </section>
      ) : null}

      {spec.notes && spec.notes.length > 0 ? (
        <ul className="list-disc space-y-1 pl-4 text-xs text-slate-500">
          {spec.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
