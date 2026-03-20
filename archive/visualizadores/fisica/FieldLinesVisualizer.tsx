import type { FieldLine, FieldLinesSpec, FieldSource } from "../types";

type FieldLinesVisualizerProps = {
  spec: FieldLinesSpec;
};

const defaultLayout = {
  width: 520,
  height: 240,
};

const resolveLayout = (layout?: FieldLinesSpec["layout"]) => ({
  width: layout?.width ?? defaultLayout.width,
  height: layout?.height ?? defaultLayout.height,
});

const toPath = (line: FieldLine, layout: { width: number; height: number }) => {
  return line.points
    .map((point, index) => {
      const x = point.x * layout.width;
      const y = point.y * layout.height;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
};

const SourceMarker = ({ source, layout }: { source: FieldSource; layout: { width: number; height: number } }) => {
  const x = source.position.x * layout.width;
  const y = source.position.y * layout.height;
  const label = source.label ?? (source.polarity === "negativa" ? "-" : "+");
  const isMagnet = source.type === "iman";
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={16}
        className={isMagnet ? "fill-indigo-100 stroke-indigo-500" : "fill-rose-100 stroke-rose-500"}
        strokeWidth={2}
      />
      <text x={x} y={y + 4} textAnchor="middle" className="fill-slate-700 text-sm font-semibold">
        {label}
      </text>
    </g>
  );
};

export default function FieldLinesVisualizer({ spec }: FieldLinesVisualizerProps) {
  const layout = resolveLayout(spec.layout);
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold text-slate-800">{spec.title ?? "Líneas de campo"}</h4>
          {spec.description && <p className="mt-1 text-xs text-slate-500">{spec.description}</p>}
        </div>
      </div>
      <svg
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        className="mt-4 w-full"
        role="img"
        aria-label={spec.title ?? "Líneas de campo"}
      >
        <rect x={12} y={12} width={layout.width - 24} height={layout.height - 24} rx={12} className="fill-slate-50" />
        {spec.lines.map((line) => (
          <path
            key={line.id}
            d={toPath(line, layout)}
            className="fill-none stroke-sky-400"
            strokeWidth={line.strength ? Math.max(1, line.strength) : 2}
          />
        ))}
        {spec.sources.map((source) => (
          <SourceMarker key={source.id} source={source} layout={layout} />
        ))}
      </svg>
    </div>
  );
}
