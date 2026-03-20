import type { EnergyAuxChartSpec, EnergyChartSeries, EnergyChartSpec } from "../types";

type EnergyChartVisualizerProps = {
  spec: EnergyChartSpec;
};

type Range = {
  min: number;
  max: number;
};

const chartSize = {
  width: 560,
  height: 260,
  margin: { top: 24, right: 32, bottom: 40, left: 54 },
};

const tickCount = 4;

const getRange = (values: number[]): Range => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) {
    return { min: min - 1, max: max + 1 };
  }
  const padding = (max - min) * 0.08;
  return { min: min - padding, max: max + padding };
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

const buildLinePath = (
  data: Array<{ x: number; y: number }>,
  xScale: (v: number) => number,
  yScale: (v: number) => number,
) => {
  return data
    .map((point, index) => {
      const command = index === 0 ? "M" : "L";
      return `${command} ${xScale(point.x)} ${yScale(point.y)}`;
    })
    .join(" ");
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
          x={axis === "x" ? scale(tick) : chartSize.margin.left - 12}
          y={axis === "x" ? chartSize.height - chartSize.margin.bottom + 22 : scale(tick) + 4}
          textAnchor={axis === "x" ? "middle" : "end"}
          className="fill-slate-400 text-[10px]"
        >
          {tick.toFixed(1)}
        </text>
      ))}
    </>
  );
};

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2 text-xs text-slate-600">
    <span
      className="h-2.5 w-2.5 rounded-full"
      style={{ backgroundColor: color }}
    />
    <span>{label}</span>
  </div>
);

const getSeriesLineColor = (series: EnergyChartSeries) =>
  series.color ??
  (series.energyType === "Ep"
    ? "#38BDF8"
    : series.energyType === "Ec"
      ? "#F97316"
      : "#22C55E");

const EnergyChartPanel = ({
  spec,
  conservationText,
}: {
  spec: EnergyChartSpec;
  conservationText: string;
}) => {
  const seriesWithData = spec.series.filter((serie) => serie.data.length > 0);
  const xValues = seriesWithData.flatMap((serie) => serie.data.map((point) => point.x));
  const yValues = seriesWithData.flatMap((serie) => serie.data.map((point) => point.y));
  const xRange = getRange(xValues);
  const yRange = getRange(yValues);
  const xScale = createScale(xRange, {
    min: chartSize.margin.left,
    max: chartSize.width - chartSize.margin.right,
  });
  const yScale = createScale(yRange, {
    min: chartSize.height - chartSize.margin.bottom,
    max: chartSize.margin.top,
  });

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold text-slate-800">
            {spec.title ?? "Energía mecánica"}
          </h4>
          <p className="text-xs text-slate-500">{conservationText}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {spec.series.map((serie) => (
            <LegendItem
              key={serie.id}
              color={getSeriesLineColor(serie)}
              label={serie.label}
            />
          ))}
        </div>
      </div>
      <svg
        viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}
        className="mt-3 w-full"
        role="img"
        aria-label={spec.title ?? "Energía mecánica"}
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
        <AxisTicks range={xRange} scale={xScale} axis="x" />
        <AxisTicks range={yRange} scale={yScale} axis="y" />
        {spec.series.map((serie) => (
          <path
            key={serie.id}
            d={buildLinePath(serie.data, xScale, yScale)}
            className="fill-none"
            stroke={getSeriesLineColor(serie)}
            strokeWidth={2.5}
          />
        ))}
        <text
          x={chartSize.width / 2}
          y={chartSize.height - 6}
          textAnchor="middle"
          className="fill-slate-500 text-[11px]"
        >
          {spec.axes.x.label ?? "Variable"} {spec.axes.x.unit ? `(${spec.axes.x.unit})` : ""}
        </text>
        <text
          x={16}
          y={chartSize.margin.top - 10}
          className="fill-slate-500 text-[11px]"
        >
          {spec.axes.y.label ?? "Energía"} {spec.axes.y.unit ? `(${spec.axes.y.unit})` : ""}
        </text>
      </svg>
    </div>
  );
};

const AuxChartPanel = ({ chart }: { chart: EnergyAuxChartSpec }) => {
  const xRange = getRange(chart.data.map((point) => point.x));
  const yRange = getRange(chart.data.map((point) => point.y));
  const xScale = createScale(xRange, {
    min: chartSize.margin.left,
    max: chartSize.width - chartSize.margin.right,
  });
  const yScale = createScale(yRange, {
    min: chartSize.height - chartSize.margin.bottom,
    max: chartSize.margin.top,
  });
  const color = chart.color ?? "#6366F1";

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-sm font-semibold text-slate-800">
          {chart.title ?? "Diagrama termodinámico"}
        </h4>
      </div>
      <svg
        viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}
        className="mt-3 w-full"
        role="img"
        aria-label={chart.title ?? "Diagrama termodinámico"}
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
        <AxisTicks range={xRange} scale={xScale} axis="x" />
        <AxisTicks range={yRange} scale={yScale} axis="y" />
        <path
          d={buildLinePath(chart.data, xScale, yScale)}
          className="fill-none"
          stroke={color}
          strokeWidth={2.5}
        />
        <text
          x={chartSize.width / 2}
          y={chartSize.height - 6}
          textAnchor="middle"
          className="fill-slate-500 text-[11px]"
        >
          {chart.xAxis.label ?? "Variable"} {chart.xAxis.unit ? `(${chart.xAxis.unit})` : ""}
        </text>
        <text
          x={16}
          y={chartSize.margin.top - 10}
          className="fill-slate-500 text-[11px]"
        >
          {chart.yAxis.label ?? ""} {chart.yAxis.unit ? `(${chart.yAxis.unit})` : ""}
        </text>
      </svg>
    </div>
  );
};

const getConservationSummary = (spec: EnergyChartSpec) => {
  const totalSeries =
    (spec.totalSeriesId &&
      spec.series.find((serie) => serie.id === spec.totalSeriesId)) ||
    spec.series.find((serie) => serie.energyType === "Etotal");
  if (!totalSeries || totalSeries.data.length < 2) {
    return "Sin datos suficientes para evaluar conservación.";
  }
  const values = totalSeries.data.map((point) => point.y);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  const variation = average === 0 ? 0 : Math.abs(max - min) / Math.abs(average);
  const tolerance = spec.conservation?.tolerance ?? 0.03;
  const conserved = variation <= tolerance;
  const variationPct = (variation * 100).toFixed(2);
  const status = conserved ? "Conservada" : "No conservada";
  const note = spec.conservation?.note ? ` ${spec.conservation.note}` : "";
  return `Energía total: ${status} (ΔE ≈ ${variationPct}%).${note}`;
};

export default function EnergyChartVisualizer({
  spec,
}: EnergyChartVisualizerProps) {
  const conservationText = getConservationSummary(spec);
  const auxCharts = [
    spec.thermodynamic?.pv,
    spec.thermodynamic?.ts,
  ].filter(Boolean) as EnergyAuxChartSpec[];

  return (
    <section className="space-y-5 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Energía
        </p>
        <h3 className="text-lg font-semibold text-slate-900">
          {spec.title ?? "Energía mecánica"}
        </h3>
        {spec.description && (
          <p className="text-sm text-slate-600">{spec.description}</p>
        )}
        <p className="text-xs text-slate-500">
          Eje X: {spec.axes.x.label ?? "Variable"} ({spec.axes.x.variable})
        </p>
      </header>

      <EnergyChartPanel spec={spec} conservationText={conservationText} />

      {auxCharts.length > 0 && (
        <div className="grid gap-4 lg:grid-cols-2">
          {auxCharts.map((chart) => (
            <AuxChartPanel key={chart.title ?? chart.xAxis.label ?? "aux"} chart={chart} />
          ))}
        </div>
      )}
    </section>
  );
}
