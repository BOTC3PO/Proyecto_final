import { useMemo, useState } from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
} from "recharts"
import type { ChartBlock, BlockDocument, TableBlock } from "../types"
import {
  mean,
  median,
  mode,
  variance,
  stdDev,
  frequencyTable,
  quartiles,
  zScore,
  linearRegression,
  correlation,
  summaryStats,
  histogram,
} from "../stats/statsEngine"

interface Props {
  block: ChartBlock
  doc: BlockDocument
}

const DEFAULT_COLORS = [
  "#6366f1",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#3b82f6",
  "#ec4899",
  "#14b8a6",
]

type ChartEntry = Record<string, string | number>

// ── Boxplot types & shape ─────────────────────────────────────────────────

type BoxEntry = {
  name: string
  min: number
  q1: number
  q2: number
  q3: number
  max: number
  color: string
  _v: number
}

type BoxShapeProps = {
  x: number
  y: number
  width: number
  height: number
  fill: string
  payload: BoxEntry
  yAxis: { scale: (value: number) => number }
}

function BoxPlotShape({ x, width, payload, yAxis }: BoxShapeProps) {
  const { q1, q2, q3, min, max, color } = payload
  const toY = yAxis.scale

  const yQ3 = toY(q3)
  const yQ2 = toY(q2)
  const yQ1 = toY(q1)
  const yMax = toY(max)
  const yMin = toY(min)

  const cx = x + width / 2
  const capHalf = width * 0.25
  const boxLeft = x + width * 0.15
  const boxWidth = width * 0.7

  return (
    <g>
      {/* IQR Box */}
      <rect
        x={boxLeft}
        y={yQ3}
        width={boxWidth}
        height={yQ1 - yQ3}
        fill={color}
        fillOpacity={0.7}
        stroke={color}
        strokeWidth={1.5}
      />
      {/* Median line */}
      <line
        x1={boxLeft}
        y1={yQ2}
        x2={boxLeft + boxWidth}
        y2={yQ2}
        stroke={color}
        strokeWidth={2.5}
      />
      {/* Upper whisker stem (Q3 → max) */}
      <line x1={cx} y1={yQ3} x2={cx} y2={yMax} stroke={color} strokeWidth={1.5} />
      {/* Upper cap */}
      <line x1={cx - capHalf} y1={yMax} x2={cx + capHalf} y2={yMax} stroke={color} strokeWidth={1.5} />
      {/* Lower whisker stem (Q1 → min) */}
      <line x1={cx} y1={yQ1} x2={cx} y2={yMin} stroke={color} strokeWidth={1.5} />
      {/* Lower cap */}
      <line x1={cx - capHalf} y1={yMin} x2={cx + capHalf} y2={yMin} stroke={color} strokeWidth={1.5} />
    </g>
  )
}

function buildFromTable(
  block: ChartBlock,
  doc: BlockDocument
): ChartEntry[] | null {
  if (!block.sourceTableId) return null
  const tableBlock = doc.blocks.find(
    (b): b is TableBlock => b.type === "table" && b.id === block.sourceTableId
  )
  if (!tableBlock) return null

  const xCol = block.xColumn ?? 0
  const yCols = block.yColumns ?? [1]

  return tableBlock.rows.map((row) => {
    const entry: ChartEntry = { x: row[xCol] ?? "" }
    yCols.forEach((col) => {
      entry[tableBlock.headers[col] ?? `col${col}`] = Number(row[col]) || 0
    })
    return entry
  })
}

function buildFromData(block: ChartBlock): ChartEntry[] | null {
  if (!block.data) return null
  return block.data.labels.map((label, i) => {
    const entry: ChartEntry = { x: label }
    block.data!.datasets.forEach((ds) => {
      entry[ds.label] = ds.values[i] ?? 0
    })
    return entry
  })
}

function fmt(n: number): string {
  return parseFloat(n.toFixed(6)).toString()
}

function getProcessSteps(block: ChartBlock): string[] {
  const datasets = block.data?.datasets ?? []
  if (datasets.length === 0) return []
  const values1 = datasets[0]?.values ?? []
  const values2 = datasets[1]?.values ?? []
  const xVals1 = datasets[0]?.xValues ?? values1

  if (values1.length === 0) return []

  switch (block.statFunction) {
    case "mean":
      return mean(values1).steps
    case "median":
      return median(values1).steps
    case "mode":
      return mode(values1).steps
    case "variance":
      return variance(values1).steps
    case "stddev":
      return stdDev(values1).steps
    case "frequency": {
      const table = frequencyTable(values1)
      return [
        "Valor | Frecuencia | Frec. relativa | Frec. acumulada",
        ...table.map(
          (r) =>
            `${r.value} | ${r.frequency} | ${(r.relativeFreq * 100).toFixed(2)}% | ${(r.cumulativeFreq * 100).toFixed(2)}%`
        ),
      ]
    }
    case "quartiles":
      return quartiles(values1).steps
    case "zscore":
      return zScore(values1).steps
    case "regression": {
      if (xVals1.length === 0 || values2.length === 0)
        return ["Se necesitan dos series de datos para la regresión."]
      return linearRegression(xVals1, values2).steps
    }
    case "correlation": {
      if (xVals1.length === 0 || values2.length === 0)
        return ["Se necesitan dos series de datos para la correlación."]
      return correlation(xVals1, values2).steps
    }
    case "summary": {
      const stats = summaryStats(values1)
      return [
        `Media: ${fmt(stats.mean)}`,
        `Mediana: ${fmt(stats.median)}`,
        `Moda: ${stats.mode.join(", ")}`,
        `Desviación estándar: ${fmt(stats.stdDev)}`,
        `Varianza: ${fmt(stats.variance)}`,
        `Mínimo: ${stats.min}  |  Máximo: ${stats.max}`,
        `Rango: ${fmt(stats.range)}`,
        `Q1: ${fmt(stats.q1)}  |  Q3: ${fmt(stats.q3)}  |  IQR: ${fmt(stats.iqr)}`,
      ]
    }
    default:
      return []
  }
}

function StatsPanel({ values }: { values: number[] }) {
  if (values.length === 0) return null
  const stats = summaryStats(values)
  const rows: [string, string][] = [
    ["Media", fmt(stats.mean)],
    ["Mediana", fmt(stats.median)],
    ["Moda", stats.mode.join(", ")],
    ["Desv. estándar", fmt(stats.stdDev)],
    ["Mín", String(stats.min)],
    ["Máx", String(stats.max)],
    ["Q1", fmt(stats.q1)],
    ["Q3", fmt(stats.q3)],
    ["IQR", fmt(stats.iqr)],
  ]
  return (
    <div className="mt-2 overflow-x-auto">
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr className="bg-slate-50">
            {rows.map(([label]) => (
              <th
                key={label}
                className="border border-slate-100 px-2 py-1 text-left font-semibold text-slate-600"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rows.map(([label, val]) => (
              <td
                key={label}
                className="border border-slate-100 px-2 py-1 text-slate-700"
              >
                {val}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function ProcessPanel({ steps }: { steps: string[] }) {
  const [open, setOpen] = useState(false)
  if (steps.length === 0) return null
  return (
    <div className="mt-2 rounded border border-slate-200">
      <button
        type="button"
        className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
        onClick={() => setOpen((v) => !v)}
      >
        <span>Proceso de cálculo</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="border-t border-slate-100 px-3 py-2 space-y-0.5">
          {steps.map((step, i) => (
            <p key={i} className="text-xs font-mono text-slate-600">
              {step}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export function ChartBlockRenderer({ block, doc }: Props) {
  const { chartData, seriesKeys, seriesColors } = useMemo(() => {
    if (
      block.chartType === "scatter" ||
      block.chartType === "histogram" ||
      block.chartType === "boxplot"
    ) {
      return { chartData: [], seriesKeys: [], seriesColors: [] }
    }
    const data = buildFromTable(block, doc) ?? buildFromData(block)
    if (!data || data.length === 0) {
      return { chartData: [], seriesKeys: [], seriesColors: [] }
    }

    const keys = Object.keys(data[0]).filter((k) => k !== "x")
    const colors =
      block.data?.datasets.map(
        (ds, i) => ds.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]
      ) ?? keys.map((_, i) => DEFAULT_COLORS[i % DEFAULT_COLORS.length])

    return { chartData: data, seriesKeys: keys, seriesColors: colors }
  }, [block, doc])

  const title = block.title && (
    <p className="mb-1 text-sm font-semibold text-gray-700">{block.title}</p>
  )

  // ── Scatter ──────────────────────────────────────────────────────────────
  if (block.chartType === "scatter") {
    const datasets = block.data?.datasets ?? []
    const colors = datasets.map(
      (ds, i) => ds.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]
    )

    const scatterData = datasets.map((ds) =>
      (ds.xValues ?? []).map((x, j) => ({ x, y: ds.values[j] ?? 0 }))
    )

    const hasNoData = scatterData.every((d) => d.length === 0)

    const processSteps = block.showProcess ? getProcessSteps(block) : []

    if (hasNoData) {
      return (
        <div className="flex h-[300px] items-center justify-center rounded border border-gray-200 bg-gray-50 text-gray-400">
          Sin datos
        </div>
      )
    }

    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" name="X" />
            <YAxis dataKey="y" type="number" name="Y" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            {datasets.map((ds, i) => (
              <Scatter
                key={i}
                name={ds.label}
                data={scatterData[i]}
                fill={colors[i]}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
        {block.showStats && datasets.length >= 2 && (() => {
          const ys1 = datasets[0].values
          const ys2 = datasets[1].values
          const minLen = Math.min(ys1.length, ys2.length)
          if (minLen < 2) return null
          const corrResult = correlation(ys1.slice(0, minLen), ys2.slice(0, minLen))
          const regResult = linearRegression(ys1.slice(0, minLen), ys2.slice(0, minLen))
          return (
            <div className="mt-2 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-100 px-2 py-1 text-left font-semibold text-slate-600">Correlación (r)</th>
                    <th className="border border-slate-100 px-2 py-1 text-left font-semibold text-slate-600">Pendiente</th>
                    <th className="border border-slate-100 px-2 py-1 text-left font-semibold text-slate-600">Intercepto</th>
                    <th className="border border-slate-100 px-2 py-1 text-left font-semibold text-slate-600">R²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-100 px-2 py-1 text-slate-700">{fmt(corrResult.result)}</td>
                    <td className="border border-slate-100 px-2 py-1 text-slate-700">{fmt(regResult.slope)}</td>
                    <td className="border border-slate-100 px-2 py-1 text-slate-700">{fmt(regResult.intercept)}</td>
                    <td className="border border-slate-100 px-2 py-1 text-slate-700">{fmt(regResult.r2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        })()}
        {block.showProcess && processSteps.length > 0 && (
          <ProcessPanel steps={processSteps} />
        )}
      </div>
    )
  }

  // ── Histogram ────────────────────────────────────────────────────────────
  if (block.chartType === "histogram") {
    const values = block.data?.datasets[0]?.values ?? []
    const color =
      block.data?.datasets[0]?.color ?? DEFAULT_COLORS[0]

    if (values.length === 0) {
      return (
        <div className="flex h-[300px] items-center justify-center rounded border border-gray-200 bg-gray-50 text-gray-400">
          Sin datos
        </div>
      )
    }

    const bins = histogram(values, 10)
    const binChartData = bins.map((b) => ({
      x: b.range,
      Frecuencia: b.frequency,
    }))

    const processSteps = block.showProcess ? getProcessSteps(block) : []

    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={binChartData} barCategoryGap={0}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" tick={{ fontSize: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Frecuencia" fill={color} />
          </BarChart>
        </ResponsiveContainer>
        {block.showProcess && (
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-100 px-2 py-1 text-left font-semibold text-slate-600">
                    Intervalo
                  </th>
                  <th className="border border-slate-100 px-2 py-1 text-left font-semibold text-slate-600">
                    Frecuencia
                  </th>
                  <th className="border border-slate-100 px-2 py-1 text-left font-semibold text-slate-600">
                    Frecuencia relativa
                  </th>
                </tr>
              </thead>
              <tbody>
                {bins.map((b, i) => (
                  <tr key={i}>
                    <td className="border border-slate-100 px-2 py-1 font-mono text-slate-700">
                      {b.range}
                    </td>
                    <td className="border border-slate-100 px-2 py-1 text-slate-700">
                      {b.frequency}
                    </td>
                    <td className="border border-slate-100 px-2 py-1 text-slate-700">
                      {(b.relativeFreq * 100).toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {block.showStats && <StatsPanel values={values} />}
        {block.showProcess && processSteps.length > 0 && (
          <ProcessPanel steps={processSteps} />
        )}
      </div>
    )
  }

  // ── Pie ──────────────────────────────────────────────────────────────────
  if (block.chartType === "pie") {
    const labels = block.data?.labels ?? []
    const datasets = block.data?.datasets ?? []

    const renderSinglePie = (
      ds: (typeof datasets)[number],
      dsIndex: number
    ) => {
      const pieData = labels.map((label, i) => ({
        name: label,
        value: Number(ds.values[i] ?? 0),
      }))
      const sliceColors = ds.color ? [ds.color] : DEFAULT_COLORS
      return (
        <div key={dsIndex}>
          <p className="mb-1 text-xs font-semibold text-center text-gray-600">
            {ds.label}
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" label>
                {pieData.map((_, i) => (
                  <Cell key={i} fill={sliceColors[i % sliceColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )
    }

    return (
      <div>
        {title}
        {datasets.length <= 1 ? (
          renderSinglePie(datasets[0] ?? { label: "", values: [] }, 0)
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {datasets.map((ds, i) => renderSinglePie(ds, i))}
          </div>
        )}
      </div>
    )
  }

  // ── Boxplot ───────────────────────────────────────────────────────────────
  if (block.chartType === "boxplot") {
    const datasets = block.data?.datasets ?? []

    if (datasets.length === 0) {
      return (
        <div className="flex h-[300px] items-center justify-center rounded border border-gray-200 bg-gray-50 text-gray-400">
          Sin datos
        </div>
      )
    }

    const insufficientDataset = datasets.find((ds) => ds.values.length < 4)
    if (insufficientDataset) {
      return (
        <div>
          {title}
          <div className="flex h-[300px] items-center justify-center rounded border border-amber-200 bg-amber-50 text-sm text-amber-700">
            Datos insuficientes para boxplot — se necesitan al menos 4 valores por serie
          </div>
        </div>
      )
    }

    const boxData: BoxEntry[] = datasets.map((ds, i) => {
      const q = quartiles(ds.values)
      return {
        name: ds.label,
        min: Math.min(...ds.values),
        q1: q.q1,
        q2: q.q2,
        q3: q.q3,
        max: Math.max(...ds.values),
        color: ds.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
        _v: 1,
      }
    })

    const globalMin = Math.min(...boxData.map((d) => d.min))
    const globalMax = Math.max(...boxData.map((d) => d.max))
    const pad = (globalMax - globalMin) * 0.12 || 1

    const boxProcessSteps = block.showProcess ? getProcessSteps(block) : []

    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={boxData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[globalMin - pad, globalMax + pad]} />
            <Tooltip
              content={({ payload: tp }) => {
                if (!tp || tp.length === 0) return null
                const d = tp[0].payload as BoxEntry
                return (
                  <div className="rounded border border-slate-200 bg-white p-2 text-xs shadow">
                    <p className="mb-1 font-semibold text-slate-700">{d.name}</p>
                    <p className="text-slate-600">Máx: {fmt(d.max)}</p>
                    <p className="text-slate-600">Q3: {fmt(d.q3)}</p>
                    <p className="font-medium text-slate-700">Mediana: {fmt(d.q2)}</p>
                    <p className="text-slate-600">Q1: {fmt(d.q1)}</p>
                    <p className="text-slate-600">Mín: {fmt(d.min)}</p>
                  </div>
                )
              }}
            />
            <Bar
              dataKey="_v"
              shape={(props: object) => {
                const p = props as unknown as BoxShapeProps
                return <BoxPlotShape {...p} />
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
        {block.showStats && (
          <StatsPanel values={datasets[0].values} />
        )}
        {block.showProcess && <ProcessPanel steps={boxProcessSteps} />}
      </div>
    )
  }

  // ── Common: no data guard ────────────────────────────────────────────────
  if (chartData.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded border border-gray-200 bg-gray-50 text-gray-400">
        Sin datos
      </div>
    )
  }

  const firstDatasetValues = block.data?.datasets[0]?.values ?? []
  const processSteps = block.showProcess ? getProcessSteps(block) : []

  // ── Radar ─────────────────────────────────────────────────────────────────
  if (block.chartType === "radar") {
    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="x" />
            <Tooltip />
            {seriesKeys.length > 1 && <Legend />}
            {seriesKeys.map((key, i) => (
              <Radar
                key={key}
                name={key}
                dataKey={key}
                stroke={seriesColors[i]}
                fill={seriesColors[i]}
                fillOpacity={0.3}
              />
            ))}
          </RadarChart>
        </ResponsiveContainer>
        {block.showStats && <StatsPanel values={firstDatasetValues} />}
        {block.showProcess && <ProcessPanel steps={processSteps} />}
      </div>
    )
  }

  // ── Polar ─────────────────────────────────────────────────────────────────
  if (block.chartType === "polar") {
    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="x" />
            <PolarRadiusAxis />
            <Tooltip />
            {seriesKeys.length > 1 && <Legend />}
            {seriesKeys.map((key, i) => (
              <Radar
                key={key}
                name={key}
                dataKey={key}
                stroke={seriesColors[i]}
                fill={seriesColors[i]}
                fillOpacity={0.3}
              />
            ))}
          </RadarChart>
        </ResponsiveContainer>
        {block.showStats && <StatsPanel values={firstDatasetValues} />}
        {block.showProcess && <ProcessPanel steps={processSteps} />}
      </div>
    )
  }

  // ── Line ─────────────────────────────────────────────────────────────────
  if (block.chartType === "line") {
    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            {seriesKeys.map((key, i) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={seriesColors[i]}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        {block.showStats && <StatsPanel values={firstDatasetValues} />}
        {block.showProcess && <ProcessPanel steps={processSteps} />}
      </div>
    )
  }

  // ── Area ─────────────────────────────────────────────────────────────────
  if (block.chartType === "area") {
    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            {seriesKeys.map((key, i) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stroke={seriesColors[i]}
                fill={seriesColors[i]}
                fillOpacity={0.3}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
        {block.showStats && <StatsPanel values={firstDatasetValues} />}
        {block.showProcess && <ProcessPanel steps={processSteps} />}
      </div>
    )
  }

  // ── Area stacked ─────────────────────────────────────────────────────────
  if (block.chartType === "area-stacked") {
    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            {seriesKeys.map((key, i) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stroke={seriesColors[i]}
                fill={seriesColors[i]}
                fillOpacity={0.3}
                stackId="stack"
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
        {block.showStats && <StatsPanel values={firstDatasetValues} />}
        {block.showProcess && <ProcessPanel steps={processSteps} />}
      </div>
    )
  }

  // ── Bar stacked ──────────────────────────────────────────────────────────
  if (block.chartType === "bar-stacked") {
    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            {seriesKeys.map((key, i) => (
              <Bar key={key} dataKey={key} fill={seriesColors[i]} stackId="stack" />
            ))}
          </BarChart>
        </ResponsiveContainer>
        {block.showStats && <StatsPanel values={firstDatasetValues} />}
        {block.showProcess && <ProcessPanel steps={processSteps} />}
      </div>
    )
  }

  // ── Bar grouped (default bar) ────────────────────────────────────────────
  if (block.chartType === "bar-grouped" || block.chartType === "bar") {
    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            {seriesKeys.map((key, i) => (
              <Bar key={key} dataKey={key} fill={seriesColors[i]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
        {block.showStats && <StatsPanel values={firstDatasetValues} />}
        {block.showProcess && <ProcessPanel steps={processSteps} />}
      </div>
    )
  }

  return null
}
