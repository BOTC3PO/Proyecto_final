import { useState, useEffect } from "react"
import type { ChartBlock } from "../types"

function DatasetRow({
  ds,
  di,
  onUpdate,
  onRemove,
}: {
  ds: { label: string; values: number[]; color?: string }
  di: number
  onUpdate: (di: number, field: string, val: string) => void
  onRemove: (di: number) => void
}) {
  const valuesStr = ds.values.join(", ")
  const [valuesInput, setValuesInput] = useState(valuesStr)
  useEffect(() => {
    setValuesInput(valuesStr)
  }, [valuesStr])

  return (
    <div className="flex gap-1 items-center">
      <input
        className="w-28 rounded-md border border-gray-300 px-2 py-1 text-xs"
        placeholder="Nombre serie"
        value={ds.label}
        onChange={(e) => onUpdate(di, "label", e.target.value)}
      />
      <input
        className="flex-1 rounded-md border border-gray-300 px-2 py-1 text-xs font-mono"
        placeholder="Valores: 10, 20, 30"
        value={valuesInput}
        onChange={(e) => setValuesInput(e.target.value)}
        onBlur={() => {
          const clean = valuesInput
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean)
            .map((v) => Number(v) || 0)
          onUpdate(di, "values", clean.join(","))
        }}
      />
      <input
        type="color"
        className="h-7 w-8 rounded border border-gray-300 p-0.5"
        value={ds.color ?? "#6366f1"}
        onChange={(e) => onUpdate(di, "color", e.target.value)}
      />
      <button
        type="button"
        className="rounded border border-red-200 bg-red-50 px-1.5 py-1 text-xs text-red-600 hover:bg-red-100"
        onClick={() => onRemove(di)}
      >
        ✕
      </button>
    </div>
  )
}

function ScatterDatasetRow({
  ds,
  di,
  onUpdate,
  onRemove,
}: {
  ds: { label: string; values: number[]; xValues?: number[]; color?: string }
  di: number
  onUpdate: (di: number, field: string, val: string) => void
  onRemove: (di: number) => void
}) {
  const xStr = (ds.xValues ?? []).join(", ")
  const yStr = ds.values.join(", ")
  const [xInput, setXInput] = useState(xStr)
  const [yInput, setYInput] = useState(yStr)
  useEffect(() => {
    setXInput(xStr)
  }, [xStr])
  useEffect(() => {
    setYInput(yStr)
  }, [yStr])

  return (
    <div className="space-y-1 rounded border border-gray-200 p-2">
      <div className="flex gap-1 items-center">
        <input
          className="flex-1 rounded-md border border-gray-300 px-2 py-1 text-xs"
          placeholder="Nombre serie"
          value={ds.label}
          onChange={(e) => onUpdate(di, "label", e.target.value)}
        />
        <input
          type="color"
          className="h-7 w-8 rounded border border-gray-300 p-0.5"
          value={ds.color ?? "#6366f1"}
          onChange={(e) => onUpdate(di, "color", e.target.value)}
        />
        <button
          type="button"
          className="rounded border border-red-200 bg-red-50 px-1.5 py-1 text-xs text-red-600 hover:bg-red-100"
          onClick={() => onRemove(di)}
        >
          ✕
        </button>
      </div>
      <input
        className="w-full rounded-md border border-gray-300 px-2 py-1 text-xs font-mono"
        placeholder="Valores X: 1, 2, 3, 4"
        value={xInput}
        onChange={(e) => setXInput(e.target.value)}
        onBlur={() => {
          const clean = xInput
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean)
            .map((v) => Number(v) || 0)
          onUpdate(di, "xValues", clean.join(","))
        }}
      />
      <input
        className="w-full rounded-md border border-gray-300 px-2 py-1 text-xs font-mono"
        placeholder="Valores Y: 10, 20, 15, 30"
        value={yInput}
        onChange={(e) => setYInput(e.target.value)}
        onBlur={() => {
          const clean = yInput
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean)
            .map((v) => Number(v) || 0)
          onUpdate(di, "values", clean.join(","))
        }}
      />
    </div>
  )
}

export function ChartBlockEditor({
  block,
  onChange,
  onRemove,
}: {
  block: ChartBlock
  onChange: (patch: Partial<ChartBlock>) => void
  onRemove: () => void
}) {
  const data = block.data ?? { labels: [], datasets: [] }
  const [labelsInput, setLabelsInput] = useState(data.labels.join(", "))

  useEffect(() => {
    setLabelsInput(data.labels.join(", "))
  }, [data.labels.join(", ")])

  const handleLabelsBlur = () => {
    const labels = labelsInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
    onChange({ data: { ...data, labels } })
  }

  const addDataset = () => {
    onChange({
      data: {
        ...data,
        datasets: [
          ...data.datasets,
          {
            label: `Serie ${data.datasets.length + 1}`,
            values: data.labels.map(() => 0),
          },
        ],
      },
    })
  }

  const updateDataset = (di: number, field: string, val: string) => {
    const datasets = data.datasets.map((ds, i) => {
      if (i !== di) return ds
      if (field === "label") return { ...ds, label: val }
      if (field === "color") return { ...ds, color: val }
      if (field === "values") {
        const values = val.split(",").map((v) => Number(v.trim()) || 0)
        return { ...ds, values }
      }
      if (field === "xValues") {
        const xValues = val.split(",").map((v) => Number(v.trim()) || 0)
        return { ...ds, xValues }
      }
      return ds
    })
    onChange({ data: { ...data, datasets } })
  }

  const removeDataset = (di: number) => {
    onChange({
      data: {
        ...data,
        datasets: data.datasets.filter((_, i) => i !== di),
      },
    })
  }

  const isHistogram = block.chartType === "histogram"
  const isScatter = block.chartType === "scatter"

  return (
    <div className="flex gap-2">
      <div className="flex-1 space-y-2">
        {/* Título y tipo */}
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm"
            placeholder="Título del gráfico (opcional)"
            value={block.title ?? ""}
            onChange={(e) => onChange({ title: e.target.value || undefined })}
          />
          <select
            className="rounded-md border border-gray-300 px-2 py-1.5 text-sm"
            value={block.chartType}
            onChange={(e) =>
              onChange({ chartType: e.target.value as ChartBlock["chartType"] })
            }
          >
            <option value="bar">Barras</option>
            <option value="line">Líneas</option>
            <option value="pie">Torta</option>
            <option value="scatter">Dispersión</option>
            <option value="area">Área</option>
            <option value="bar-stacked">Barras apiladas</option>
            <option value="bar-grouped">Barras agrupadas</option>
            <option value="area-stacked">Área apilada</option>
            <option value="histogram">Histograma</option>
            <option value="radar">Radar</option>
            <option value="polar">Polar</option>
            <option value="boxplot">Boxplot</option>
          </select>
        </div>

        {block.chartType === "pie" && (
          <p className="text-xs text-gray-400">
            Cada serie genera una torta independiente.
          </p>
        )}
        {isHistogram && (
          <p className="text-xs text-gray-400">
            Solo se usa la primera serie de datos.
          </p>
        )}

        {/* Etiquetas (no para scatter ni histogram) */}
        {!isScatter && !isHistogram && (
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-xs"
            placeholder="Etiquetas separadas por coma: Ene, Feb, Mar"
            value={labelsInput}
            onChange={(e) => setLabelsInput(e.target.value)}
            onBlur={handleLabelsBlur}
          />
        )}

        {/* Datasets */}
        {isScatter
          ? data.datasets.map((ds, di) => (
              <ScatterDatasetRow
                key={di}
                ds={ds}
                di={di}
                onUpdate={updateDataset}
                onRemove={removeDataset}
              />
            ))
          : data.datasets.map((ds, di) => (
              <DatasetRow
                key={di}
                ds={ds}
                di={di}
                onUpdate={updateDataset}
                onRemove={removeDataset}
              />
            ))}

        {/* Agregar serie (no para histogram) */}
        {!isHistogram && (
          <button
            type="button"
            className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50"
            onClick={addDataset}
          >
            + Serie
          </button>
        )}

        {/* Opciones estadísticas */}
        <div className="border-t border-gray-100 pt-2 space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
            Opciones estadísticas
          </p>
          <label className="flex items-center gap-1.5 text-xs text-gray-600">
            <input
              type="checkbox"
              checked={block.showStats ?? false}
              onChange={(e) =>
                onChange({ showStats: e.target.checked || undefined })
              }
            />
            Mostrar estadísticas descriptivas
          </label>
          <label className="flex items-center gap-1.5 text-xs text-gray-600">
            <input
              type="checkbox"
              checked={block.showProcess ?? false}
              onChange={(e) =>
                onChange({ showProcess: e.target.checked || undefined })
              }
            />
            Mostrar proceso de cálculo
          </label>
          {block.showProcess && (
            <select
              className="rounded-md border border-gray-300 px-2 py-1 text-xs"
              value={block.statFunction ?? ""}
              onChange={(e) =>
                onChange({
                  statFunction:
                    (e.target.value as ChartBlock["statFunction"]) || undefined,
                })
              }
            >
              <option value="">Seleccionar función…</option>
              <option value="mean">Media</option>
              <option value="median">Mediana</option>
              <option value="mode">Moda</option>
              <option value="variance">Varianza</option>
              <option value="stddev">Desv. estándar</option>
              <option value="frequency">Tabla de frecuencias</option>
              <option value="quartiles">Cuartiles</option>
              <option value="zscore">Puntuaciones Z</option>
              <option value="regression">Regresión lineal</option>
              <option value="correlation">Correlación</option>
              <option value="summary">Resumen estadístico</option>
            </select>
          )}
        </div>
      </div>

      <button
        type="button"
        className="self-start rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs text-red-600 hover:bg-red-100"
        onClick={onRemove}
      >
        ✕
      </button>
    </div>
  )
}
