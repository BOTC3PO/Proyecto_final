import type { ChartBlock, TableBlock, BlockDocument } from "../types"
import { ChartBlockRenderer } from "../renderers/ChartBlockRenderer"

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

const inputCls =
  "w-full text-xs border border-slate-200 rounded px-1.5 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400"

export const CHART_TYPE_OPTIONS: Array<{ value: ChartBlock["chartType"]; label: string; icon: string }> = [
  { value: "bar", label: "Barras", icon: "▦" },
  { value: "line", label: "Línea", icon: "⟋" },
  { value: "pie", label: "Torta", icon: "◑" },
  { value: "scatter", label: "Puntos", icon: "⁙" },
  { value: "area", label: "Área", icon: "◿" },
  { value: "histogram", label: "Hist.", icon: "∏" },
  { value: "bar-stacked", label: "Apilado", icon: "≡" },
  { value: "bar-grouped", label: "Agrupado", icon: "∥" },
]

export function InlineChartTypeToolbar({
  chartType,
  onUpdate,
}: {
  chartType: ChartBlock["chartType"]
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  return (
    <div
      className="flex flex-wrap gap-1 p-2 border-b border-slate-100 bg-slate-50 rounded-t-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {CHART_TYPE_OPTIONS.map(({ value, label, icon }) => (
        <button
          key={value}
          onClick={(e) => {
            e.stopPropagation()
            onUpdate({ chartType: value })
          }}
          className={cx(
            "flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors border",
            chartType === value
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
          )}
          title={label}
        >
          <span className="font-mono">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}

export function ChartBlockEditor({
  block,
  doc,
  onUpdate,
}: {
  block: ChartBlock
  doc: BlockDocument
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  const tableBlocks = doc.blocks.filter((b) => b.type === "table") as TableBlock[]
  const source = block.sourceTableId ? "table" : "manual"
  const isMultiSeries =
    block.chartType === "bar" ||
    block.chartType === "line" ||
    block.chartType === "area" ||
    block.chartType === "bar-stacked" ||
    block.chartType === "bar-grouped" ||
    block.chartType === "area-stacked"

  const updateDatasetLabel = (i: number, label: string) => {
    const datasets = (block.data?.datasets ?? []).map((ds, idx) =>
      idx === i ? { ...ds, label } : ds
    )
    onUpdate({ data: { ...block.data, datasets } })
  }

  const updateDatasetValues = (i: number, raw: string) => {
    const values = raw
      .split(",")
      .map((s) => Number(s.trim()))
      .filter((n) => !isNaN(n))
    const datasets = (block.data?.datasets ?? []).map((ds, idx) =>
      idx === i ? { ...ds, values } : ds
    )
    onUpdate({ data: { ...block.data, datasets } })
  }

  const updateDatasetColor = (i: number, color: string) => {
    const datasets = (block.data?.datasets ?? []).map((ds, idx) =>
      idx === i ? { ...ds, color } : ds
    )
    onUpdate({ data: { ...block.data, datasets } })
  }

  const addDataset = () => {
    const datasets = [...(block.data?.datasets ?? []), { label: "", values: [] }]
    onUpdate({ data: { ...block.data, datasets } })
  }

  const removeDataset = (i: number) => {
    const datasets = (block.data?.datasets ?? []).filter((_, idx) => idx !== i)
    onUpdate({ data: { ...block.data, datasets } })
  }

  const updateLabels = (raw: string) => {
    const labels = raw.split(",").map((s) => s.trim())
    onUpdate({ data: { ...block.data, labels } })
  }

  return (
    <div className="space-y-2">
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Título</label>
        <input
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>
      <p className="text-xs text-slate-400 italic">
        Cambiá el tipo de gráfico desde la toolbar del bloque en el canvas.
      </p>
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Fuente</label>
        <div className="flex gap-3">
          <label className="flex items-center gap-1 text-xs text-gray-600 cursor-pointer">
            <input
              type="radio"
              checked={source === "manual"}
              onChange={() => onUpdate({ sourceTableId: undefined })}
            />
            Manual
          </label>
          <label className="flex items-center gap-1 text-xs text-gray-600 cursor-pointer">
            <input
              type="radio"
              checked={source === "table"}
              onChange={() => {
                const first = tableBlocks[0]
                if (first) onUpdate({ sourceTableId: first.id })
              }}
              disabled={tableBlocks.length === 0}
            />
            Tabla
          </label>
        </div>
      </div>

      {source === "table" && tableBlocks.length > 0 ? (
        <>
          <div>
            <label className="text-xs font-medium text-gray-600 block mb-1">Tabla fuente</label>
            <select
              className={inputCls}
              value={block.sourceTableId ?? ""}
              onChange={(e) => onUpdate({ sourceTableId: e.target.value })}
            >
              {tableBlocks.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title || t.id}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 block mb-1">
              Col. eje X (índice)
            </label>
            <input
              type="number"
              className={inputCls}
              min={0}
              value={block.xColumn ?? 0}
              onChange={(e) => onUpdate({ xColumn: Number(e.target.value) })}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <label className="text-xs font-medium text-gray-600 block mb-1">
              Etiquetas (separadas por coma)
            </label>
            <input
              className={inputCls}
              value={block.data?.labels.join(", ") ?? ""}
              onChange={(e) => updateLabels(e.target.value)}
              placeholder="A, B, C"
            />
          </div>
          {(block.data?.datasets ?? []).map((ds, i) => (
            <div key={i} className="space-y-1 border border-slate-100 rounded p-2">
              <div className="flex items-center gap-1">
                <input
                  className={inputCls + " flex-1"}
                  value={ds.label}
                  onChange={(e) => updateDatasetLabel(i, e.target.value)}
                  placeholder="Nombre de serie"
                />
                {isMultiSeries && (
                  <input
                    type="color"
                    className="w-6 h-6 rounded border border-slate-200 cursor-pointer p-0.5 shrink-0"
                    value={ds.color ?? "#6366f1"}
                    onChange={(e) => updateDatasetColor(i, e.target.value)}
                    title="Color de serie"
                  />
                )}
                {isMultiSeries && (block.data?.datasets ?? []).length > 1 && (
                  <button
                    onClick={() => removeDataset(i)}
                    className="text-red-400 hover:text-red-600 px-1 text-sm shrink-0"
                    title="Eliminar serie"
                  >
                    ×
                  </button>
                )}
              </div>
              <input
                className={inputCls}
                defaultValue={ds.values.join(", ")}
                onBlur={(e) => updateDatasetValues(i, e.target.value)}
                placeholder="0, 0, 0"
              />
            </div>
          ))}
          {isMultiSeries && (
            <button
              onClick={addDataset}
              className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded w-full"
            >
              + Agregar serie
            </button>
          )}
        </>
      )}

      <div className="rounded-lg border border-slate-100 bg-slate-50 p-2">
        <ChartBlockRenderer block={block} doc={doc} />
      </div>
    </div>
  )
}
