import { useMemo } from "react"
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
} from "recharts"
import type { ChartBlock, BlockDocument, TableBlock } from "../types"

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

export function ChartBlockRenderer({ block, doc }: Props) {
  const { chartData, seriesKeys, seriesColors } = useMemo(() => {
    const data = buildFromTable(block, doc) ?? buildFromData(block)
    if (!data || data.length === 0) {
      return { chartData: [], seriesKeys: [], seriesColors: [] }
    }

    const keys = Object.keys(data[0]).filter((k) => k !== "x")
    const colors =
      block.data?.datasets.map((ds, i) => ds.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]) ??
      keys.map((_, i) => DEFAULT_COLORS[i % DEFAULT_COLORS.length])

    return { chartData: data, seriesKeys: keys, seriesColors: colors }
  }, [block, doc])

  if (chartData.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded border border-gray-200 bg-gray-50 text-gray-400">
        Sin datos
      </div>
    )
  }

  const title = block.title && (
    <p className="mb-1 text-sm font-semibold text-gray-700">{block.title}</p>
  )

  if (block.chartType === "pie") {
    const labels = block.data?.labels ?? []
    const datasets = block.data?.datasets ?? []
    const pieData = labels.map((label, i) => ({
      name: label,
      value: Number(datasets[0]?.values[i] ?? 0),
    }))
    const pieColors =
      datasets[0]?.color
        ? [datasets[0].color]
        : DEFAULT_COLORS

    return (
      <div>
        {title}
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" label>
              {pieData.map((_, i) => (
                <Cell key={i} fill={pieColors[i % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }

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
      </div>
    )
  }

  // default: bar
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
    </div>
  )
}
