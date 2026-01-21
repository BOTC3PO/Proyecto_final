import type { PhysicsMotionChartSpec } from "../types";

type PhysicsMotionChartVisualizerProps = {
  spec: PhysicsMotionChartSpec;
};

type DataPoint = { t: number; value: number };

type Range = {
  min: number;
  max: number;
};

const chartSize = {
  width: 520,
  height: 240,
  margin: { top: 24, right: 32, bottom: 36, left: 48 },
};

const tickCount = 4;

const getRange = (data: DataPoint[]): Range => {
  const values = data.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) {
    return { min: min - 1, max: max + 1 };
  }
  const padding = (max - min) * 0.08;
  return { min: min - padding, max: max + padding };
};

const getTimeRange = (data: DataPoint[]): Range => {
  const times = data.map((point) => point.t);
  const min = Math.min(...times);
  const max = Math.max(...times);
  if (min === max) {
    return { min: Math.max(0, min - 1), max: max + 1 };
  }
  return { min, max };
};

const createScale = (
  domain: Range,
  range: Range,
): ((value: number) => number) => {
  return (value) => {
    const ratio = (value - domain.min) / (domain.max - domain.min);
    return range.min + ratio * (range.max - range.min);
  };
};

const buildLinePath = (data: DataPoint[], xScale: (v: number) => number, yScale: (v: number) => number) => {
  return data
    .map((point, index) => {
      const command = index === 0 ? "M" : "L";
      return `${command} ${xScale(point.t)} ${yScale(point.value)}`;
    })
    .join(" ");
};

const interpolateValue = (data: DataPoint[], time: number): DataPoint | null => {
  if (data.length === 0) {
    return null;
  }
  const sorted = [...data].sort((a, b) => a.t - b.t);
  if (time <= sorted[0].t) {
    return sorted[0];
  }
  if (time >= sorted[sorted.length - 1].t) {
    return sorted[sorted.length - 1];
  }
  const index = sorted.findIndex((point) => point.t >= time);
  if (index <= 0) {
    return sorted[0];
  }
  const prev = sorted[index - 1];
  const next = sorted[index];
  const ratio = (time - prev.t) / (next.t - prev.t);
  return {
    t: time,
    value: prev.value + ratio * (next.value - prev.value),
  };
};

const buildAreaPath = (data: DataPoint[],
  xScale: (v: number) => number,
  yScale: (v: number) => number,
  baseY: number,
  untilTime: number,
) => {
  const sorted = [...data].sort((a, b) => a.t - b.t);
  const points: DataPoint[] = [];
  for (const point of sorted) {
    if (point.t <= untilTime) {
      points.push(point);
    }
  }
  const interpolated = interpolateValue(sorted, untilTime);
  if (interpolated && interpolated.t > (points.at(-1)?.t ?? -Infinity)) {
    points.push(interpolated);
  }
  if (points.length === 0) {
    return "";
  }
  const linePath = buildLinePath(points, xScale, yScale);
  const lastPoint = points[points.length - 1];
  const firstPoint = points[0];
  return `${linePath} L ${xScale(lastPoint.t)} ${baseY} L ${xScale(firstPoint.t)} ${baseY} Z`;
};

const AxisTicks = ({
  range,
  scale,
  axis,
}: {
  range: Range;
  scale: (value: number) => number;
  axis: "x" | "y";
}) => {
  const ticks = Array.from({ length: tickCount + 1 }, (_, index) => {
    const ratio = index / tickCount;
    return range.min + ratio * (range.max - range.min);
  });
  return (
    <>
      {ticks.map((tick) => (
        <text
          key={`${axis}-tick-${tick}`}
          x={axis === "x" ? scale(tick) : chartSize.margin.left - 10}
          y={axis === "x" ? chartSize.height - chartSize.margin.bottom + 20 : scale(tick) + 4}
          textAnchor={axis === "x" ? "middle" : "end"}
          className="fill-slate-400 text-[10px]"
        >
          {tick.toFixed(1)}
        </text>
      ))}
    </>
  );
};

const ChartPanel = ({
  title,
  unit,
  data,
  annotation,
  areaAnnotation,
  color,
}: {
  title: string;
  unit?: string;
  data: DataPoint[];
  annotation?: PhysicsMotionChartSpec["annotations"]["slope"];
  areaAnnotation?: PhysicsMotionChartSpec["annotations"]["area"];
  color: string;
}) => {
  const timeRange = getTimeRange(data);
  const valueRange = getRange(data);
  const xScale = createScale(timeRange, {
    min: chartSize.margin.left,
    max: chartSize.width - chartSize.margin.right,
  });
  const yScale = createScale(valueRange, {
    min: chartSize.height - chartSize.margin.bottom,
    max: chartSize.margin.top,
  });
  const linePath = buildLinePath(data, xScale, yScale);

  const highlightPoint = annotation ? interpolateValue(data, annotation.time) : null;
  const areaPath = areaAnnotation
    ? buildAreaPath(data, xScale, yScale, chartSize.height - chartSize.margin.bottom, areaAnnotation.time)
    : "";

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
        {unit && (
          <span className="text-xs text-slate-500">Unidad: {unit}</span>
        )}
      </div>
      <svg
        viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}
        className="mt-3 w-full"
        role="img"
        aria-label={title}
      >
        <rect
          x={chartSize.margin.left}
          y={chartSize.margin.top}
          width={chartSize.width - chartSize.margin.left - chartSize.margin.right}
          height={chartSize.height - chartSize.margin.top - chartSize.margin.bottom}
          className="fill-slate-50"
          rx={6}
        />
        <line
          x1={chartSize.margin.left}
          y1={chartSize.height - chartSize.margin.bottom}
          x2={chartSize.width - chartSize.margin.right}
          y2={chartSize.height - chartSize.margin.bottom}
          className="stroke-slate-300"
        />
        <line
          x1={chartSize.margin.left}
          y1={chartSize.margin.top}
          x2={chartSize.margin.left}
          y2={chartSize.height - chartSize.margin.bottom}
          className="stroke-slate-300"
        />
        <AxisTicks range={timeRange} scale={xScale} axis="x" />
        <AxisTicks range={valueRange} scale={yScale} axis="y" />
        {areaPath && (
          <path d={areaPath} className="fill-amber-200/70" />
        )}
        <path d={linePath} className="fill-none" stroke={color} strokeWidth={2.5} />
        {highlightPoint && (
          <>
            <circle
              cx={xScale(highlightPoint.t)}
              cy={yScale(highlightPoint.value)}
              r={4}
              className="fill-white"
              stroke={color}
              strokeWidth={2}
            />
            <line
              x1={xScale(highlightPoint.t)}
              y1={yScale(highlightPoint.value)}
              x2={xScale(highlightPoint.t)}
              y2={chartSize.height - chartSize.margin.bottom}
              className="stroke-slate-300"
              strokeDasharray="4 4"
            />
          </>
        )}
      </svg>
      <div className="mt-3 space-y-1 text-xs text-slate-600">
        {annotation && (
          <p>
            {annotation.label ?? "Pendiente"}: {annotation.value.toFixed(2)} {annotation.unit ?? ""} en t = {annotation.time}s
          </p>
        )}
        {areaAnnotation && (
          <p>
            {areaAnnotation.label ?? "Área"}: {areaAnnotation.value.toFixed(2)} {areaAnnotation.unit ?? ""} hasta t = {areaAnnotation.time}s
          </p>
        )}
      </div>
    </div>
  );
};

export default function PhysicsMotionChartVisualizer({
  spec,
}: PhysicsMotionChartVisualizerProps) {
  return (
    <section className="space-y-5 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Cinemática
        </p>
        <h3 className="text-lg font-semibold text-slate-900">
          {spec.title ?? "Movimiento en 2 gráficas"}
        </h3>
        {spec.description && (
          <p className="text-sm text-slate-600">{spec.description}</p>
        )}
        <div className="grid gap-2 text-xs text-slate-500 md:grid-cols-2">
          <div>
            <p>Tipo: {spec.motion.type}</p>
            <p>Tiempo total: {spec.motion.time} {spec.axes.time.unit ?? "s"}</p>
          </div>
          <div>
            {spec.motion.initialVelocity !== undefined && (
              <p>v₀: {spec.motion.initialVelocity} {spec.axes.velocity.unit ?? "m/s"}</p>
            )}
            {spec.motion.acceleration !== undefined && (
              <p>a: {spec.motion.acceleration} m/s²</p>
            )}
            {spec.motion.displacement !== undefined && (
              <p>Desplazamiento: {spec.motion.displacement} {spec.axes.position.unit ?? "m"}</p>
            )}
          </div>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartPanel
          title={spec.series.position.label}
          unit={spec.axes.position.unit}
          data={spec.series.position.data}
          annotation={spec.annotations?.slope}
          color={spec.series.position.color ?? "#2563EB"}
        />
        <ChartPanel
          title={spec.series.velocity.label}
          unit={spec.axes.velocity.unit}
          data={spec.series.velocity.data}
          areaAnnotation={spec.annotations?.area}
          color={spec.series.velocity.color ?? "#F97316"}
        />
      </div>
    </section>
  );
}
