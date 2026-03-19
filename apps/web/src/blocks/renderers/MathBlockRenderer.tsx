import { useMemo } from "react"
import { evaluate } from "mathjs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import type { MathBlock } from "../types"

const DEFAULT_COLORS = ["#2563eb", "#16a34a", "#dc2626", "#9333ea", "#ea580c", "#0891b2"]

interface Props {
  block: MathBlock
}

export function MathBlockRenderer({ block }: Props) {
  const {
    functions,
    xMin,
    xMax,
    yMin,
    yMax,
    samples = 400,
    showGrid = true,
    showLegend = true,
    title,
  } = block

  const { chartData, errors, computedYDomain } = useMemo(() => {
    const errors: Record<string, string> = {}
    const points: Record<string, number | null>[] = []
    const allValidValues: number[] = []

    for (let i = 0; i <= samples; i++) {
      const x = xMin + (i / samples) * (xMax - xMin)
      const point: Record<string, number | null> = { x }

      for (const fn of functions) {
        try {
          const result: unknown = evaluate(fn.expression, { x })
          if (typeof result === "number" && isFinite(result) && !isNaN(result)) {
            // Filter discontinuity spikes (e.g. tan near π/2 + nπ)
            if (Math.abs(result) > 1000) {
              point[fn.id] = null
            } else {
              point[fn.id] = result
              allValidValues.push(result)
            }
          } else {
            point[fn.id] = null
          }
        } catch (err) {
          if (!errors[fn.id]) {
            errors[fn.id] = err instanceof Error ? err.message : "Error de evaluación"
          }
          point[fn.id] = null
        }
      }

      points.push(point)
    }

    // Compute Y domain from percentile 5–95 to avoid outlier-induced flattening
    let computedYDomain: [number, number] | null = null
    if (allValidValues.length > 1) {
      const sorted = [...allValidValues].sort((a, b) => a - b)
      const p5 = sorted[Math.max(0, Math.floor(sorted.length * 0.05))]
      const p95 = sorted[Math.min(sorted.length - 1, Math.ceil(sorted.length * 0.95) - 1)]
      if (p5 !== p95) computedYDomain = [p5, p95]
    }

    return { chartData: points, errors, computedYDomain }
  }, [functions, xMin, xMax, samples])

  const yDomain: [number | "auto", number | "auto"] =
    yMin !== undefined && yMax !== undefined
      ? [yMin, yMax]
      : computedYDomain !== null
      ? computedYDomain
      : ["auto", "auto"]

  return (
    <div>
      {title && (
        <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />}
          <XAxis
            dataKey="x"
            type="number"
            domain={[xMin, xMax]}
            tickFormatter={(v: number) => v.toFixed(1)}
            tick={{ fontSize: 10 }}
          />
          <YAxis domain={yDomain} tick={{ fontSize: 10 }} />
          <Tooltip
            formatter={(value: unknown, name: unknown) => {
              const num = Number(value)
              const fn = functions.find((f) => f.id === String(name))
              return [
                Number.isFinite(num) ? num.toFixed(4) : String(value),
                fn?.label ?? fn?.expression ?? String(name),
              ] as [string, string]
            }}
            labelFormatter={(label: unknown) => `x = ${Number(label).toFixed(3)}`}
          />
          {showLegend && (
            <Legend
              formatter={(value: string) => {
                const fn = functions.find((f) => f.id === value)
                return fn?.label ?? fn?.expression ?? value
              }}
            />
          )}
          {functions.map((fn, idx) => (
            <Line
              key={fn.id}
              dataKey={fn.id}
              stroke={fn.color ?? DEFAULT_COLORS[idx % DEFAULT_COLORS.length]}
              dot={false}
              strokeWidth={2}
              connectNulls={false}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      {Object.keys(errors).length > 0 && (
        <div className="mt-1 space-y-0.5">
          {Object.entries(errors).map(([id, msg]) => {
            const fn = functions.find((f) => f.id === id)
            return (
              <p key={id} className="text-xs text-red-500">
                Error en &ldquo;{fn?.expression ?? id}&rdquo;: {msg}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}
