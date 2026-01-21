import type { ChartSpec, ChartSeries } from "../types";

const palette = ["#38BDF8", "#F97316", "#34D399", "#A78BFA", "#F43F5E", "#FBBF24"];

const chartDimensions = {
  width: 640,
  height: 320,
  padding: { top: 24, right: 28, bottom: 48, left: 52 },
};

const formatAxisLabel = (label?: string, unit?: string) => {
  if (!label && !unit) return "";
  if (label && unit) return `${label} (${unit})`;
  return label ?? unit ?? "";
};

const resolveSeriesColor = (series: ChartSeries, index: number) =>
  series.color ?? palette[index % palette.length];

const toCategoryList = (spec: ChartSpec) => {
  const seen = new Set<string>();
  const categories: string[] = [];
  spec.series.forEach((serie) => {
    serie.data.forEach((point) => {
      const label = String(point.x);
      if (!seen.has(label)) {
        seen.add(label);
        categories.push(label);
      }
    });
  });
  return categories;
};

const extractMax = (spec: ChartSpec) => {
  const values = spec.series.flatMap((serie) => serie.data.map((point) => point.y));
  const maxValue = Math.max(0, ...values);
  return maxValue === 0 ? 1 : maxValue;
};

function BarChart({ spec }: { spec: ChartSpec }) {
  const categories = toCategoryList(spec);
  const maxValue = extractMax(spec);
  const seriesCount = spec.series.length;
  const { width, height, padding } = chartDimensions;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const groupWidth = categories.length > 0 ? chartWidth / categories.length : chartWidth;
  const barWidth = seriesCount > 0 ? Math.min(36, groupWidth / (seriesCount + 1)) : 0;
  const barOffset = seriesCount > 0 ? (groupWidth - barWidth * seriesCount) / 2 : 0;
  const axisLabel = formatAxisLabel(spec.yAxis?.label, spec.yAxis?.unit);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-80 w-full"
      role="img"
      aria-label="Gráfico de barras"
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
        const value = (maxValue / 4) * index;
        const y = padding.top + chartHeight - (value / maxValue) * chartHeight;
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
      {categories.map((category, categoryIndex) => {
        const groupX = padding.left + groupWidth * categoryIndex;
        return (
          <g key={category}>
            {spec.series.map((serie, serieIndex) => {
              const point = serie.data.find((entry) => String(entry.x) === category);
              const value = point?.y ?? 0;
              const barHeight = (value / maxValue) * chartHeight;
              const x = groupX + barOffset + serieIndex * barWidth;
              const y = padding.top + chartHeight - barHeight;
              return (
                <rect
                  key={`${serie.id}-${category}`}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx={4}
                  fill={resolveSeriesColor(serie, serieIndex)}
                />
              );
            })}
            <text
              x={groupX + groupWidth / 2}
              y={height - padding.bottom + 18}
              textAnchor="middle"
              className="fill-slate-600 text-[10px]"
            >
              {category}
            </text>
          </g>
        );
      })}
      {axisLabel && (
        <text
          x={padding.left - 36}
          y={padding.top + chartHeight / 2}
          textAnchor="middle"
          className="fill-slate-500 text-[10px]"
          transform={`rotate(-90 ${padding.left - 36} ${padding.top + chartHeight / 2})`}
        >
          {axisLabel}
        </text>
      )}
    </svg>
  );
}

function LineChart({ spec }: { spec: ChartSpec }) {
  const { width, height, padding } = chartDimensions;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxValue = extractMax(spec);
  const allX = spec.series.flatMap((serie) => serie.data.map((point) => point.x));
  const isNumeric = allX.length > 0 && allX.every((value) => typeof value === "number");
  const categories = isNumeric ? [] : toCategoryList(spec);
  const minX = isNumeric ? Math.min(...(allX as number[])) : 0;
  const maxX = isNumeric ? Math.max(...(allX as number[])) : categories.length - 1;
  const rangeX = minX === maxX ? 1 : maxX - minX;
  const axisLabel = formatAxisLabel(spec.xAxis?.label, spec.xAxis?.unit);

  const resolveX = (value: string | number, index: number) => {
    if (isNumeric) {
      return padding.left + ((Number(value) - minX) / rangeX) * chartWidth;
    }
    return padding.left + (index / Math.max(1, categories.length - 1)) * chartWidth;
  };

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-80 w-full" role="img" aria-label="Gráfico de líneas">
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
      {spec.markers?.map((marker, markerIndex) => {
        const markerIndexInCategory = categories.indexOf(String(marker.x));
        if (!isNumeric && markerIndexInCategory < 0) {
          return null;
        }
        const x = resolveX(marker.x, isNumeric ? markerIndex : markerIndexInCategory);
        const markerColor = marker.color ?? "#94A3B8";
        return (
          <g key={`${marker.label}-${String(marker.x)}`}>
            <line
              x1={x}
              y1={padding.top}
              x2={x}
              y2={height - padding.bottom}
              stroke={markerColor}
              strokeDasharray="4 4"
            />
            <text
              x={x + 6}
              y={padding.top + 12}
              className="fill-slate-500 text-[10px]"
            >
              {marker.label}
            </text>
            {marker.note && (
              <text
                x={x + 6}
                y={padding.top + 26}
                className="fill-slate-400 text-[9px]"
              >
                {marker.note}
              </text>
            )}
          </g>
        );
      })}
      {Array.from({ length: 5 }).map((_, index) => {
        const value = (maxValue / 4) * index;
        const y = padding.top + chartHeight - (value / maxValue) * chartHeight;
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
      {spec.series.map((serie, serieIndex) => {
        const points = serie.data.map((point, index) => {
          const xIndex = isNumeric ? index : categories.indexOf(String(point.x));
          const x = resolveX(point.x, xIndex);
          const y = padding.top + chartHeight - (point.y / maxValue) * chartHeight;
          return { x, y, label: String(point.x), value: point.y };
        });
        const path = points
          .map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`)
          .join(" ");
        return (
          <g key={serie.id}>
            <path
              d={path}
              fill="none"
              stroke={resolveSeriesColor(serie, serieIndex)}
              strokeWidth={2}
            />
            {points.map((point) => (
              <circle
                key={`${serie.id}-${point.label}`}
                cx={point.x}
                cy={point.y}
                r={4}
                fill={resolveSeriesColor(serie, serieIndex)}
              />
            ))}
          </g>
        );
      })}
      {!isNumeric &&
        categories.map((category, index) => (
          <text
            key={category}
            x={resolveX(category, index)}
            y={height - padding.bottom + 18}
            textAnchor="middle"
            className="fill-slate-600 text-[10px]"
          >
            {category}
          </text>
        ))}
      {axisLabel && (
        <text
          x={padding.left + chartWidth / 2}
          y={height - 12}
          textAnchor="middle"
          className="fill-slate-500 text-[10px]"
        >
          {axisLabel}
        </text>
      )}
    </svg>
  );
}

function PieChart({ spec }: { spec: ChartSpec }) {
  const serie = spec.series[0];
  const { width, height } = chartDimensions;
  const radius = Math.min(width, height) / 2 - 24;
  const centerX = width / 2;
  const centerY = height / 2;

  if (!serie) {
    return <div className="text-sm text-slate-500">No hay datos disponibles.</div>;
  }

  const total = serie.data.reduce((sum, point) => sum + point.y, 0) || 1;
  let cumulativeAngle = -90;

  const slices = serie.data.map((point, index) => {
    const value = point.y;
    const sliceAngle = (value / total) * 360;
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + sliceAngle;
    cumulativeAngle += sliceAngle;

    const startRadians = (Math.PI / 180) * startAngle;
    const endRadians = (Math.PI / 180) * endAngle;
    const largeArc = sliceAngle > 180 ? 1 : 0;
    const startX = centerX + radius * Math.cos(startRadians);
    const startY = centerY + radius * Math.sin(startRadians);
    const endX = centerX + radius * Math.cos(endRadians);
    const endY = centerY + radius * Math.sin(endRadians);
    const path = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY} Z`;

    const midAngle = startAngle + sliceAngle / 2;
    const labelRadians = (Math.PI / 180) * midAngle;
    const labelX = centerX + radius * 0.7 * Math.cos(labelRadians);
    const labelY = centerY + radius * 0.7 * Math.sin(labelRadians);
    const percent = Math.round((value / total) * 100);

    return {
      id: `${serie.id}-${String(point.x)}`,
      label: String(point.x),
      value,
      path,
      color: resolveSeriesColor(serie, index),
      labelX,
      labelY,
      percent,
    };
  });

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-80 w-full" role="img" aria-label="Gráfico circular">
      {slices.map((slice) => (
        <path key={slice.id} d={slice.path} fill={slice.color} />
      ))}
      {slices.map((slice) => (
        <text
          key={`${slice.id}-label`}
          x={slice.labelX}
          y={slice.labelY}
          textAnchor="middle"
          className="fill-white text-[10px] font-semibold"
        >
          {slice.percent}%
        </text>
      ))}
    </svg>
  );
}

function Legend({ spec }: { spec: ChartSpec }) {
  if (spec.chartType === "pie") {
    const serie = spec.series[0];
    if (!serie) return null;
    return (
      <div className="flex flex-wrap gap-3 text-xs text-slate-600">
        {serie.data.map((point, index) => (
          <div key={`${serie.id}-${String(point.x)}`} className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: resolveSeriesColor(serie, index) }} />
            <span>
              {point.x}: {point.y}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3 text-xs text-slate-600">
      {spec.series.map((serie, index) => (
        <div key={serie.id} className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: resolveSeriesColor(serie, index) }} />
          <span>{serie.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function ChartsVisualizer({ spec }: { spec: ChartSpec }) {
  return (
    <section className="space-y-4">
      {spec.title && <h3 className="text-lg font-semibold text-slate-900">{spec.title}</h3>}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        {spec.chartType === "bar" && <BarChart spec={spec} />}
        {spec.chartType === "line" && <LineChart spec={spec} />}
        {spec.chartType === "pie" && <PieChart spec={spec} />}
        {spec.chartType !== "bar" && spec.chartType !== "line" && spec.chartType !== "pie" && (
          <div className="py-10 text-center text-sm text-slate-500">
            Este tipo de gráfico aún no está disponible.
          </div>
        )}
        <div className="mt-4 border-t border-slate-100 pt-3">
          <Legend spec={spec} />
        </div>
      </div>
    </section>
  );
}
