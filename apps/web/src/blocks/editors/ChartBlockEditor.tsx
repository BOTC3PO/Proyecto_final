import { useId } from "react"
import type { ChartBlock, TableBlock, BlockDocument } from "../types"
import { ChartBlockRenderer } from "../renderers/ChartBlockRenderer"
import { Button } from "../../components/ui"

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-1.5 py-1 outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]"
const labelCls = "text-xs font-medium text-[var(--c-muted)] block mb-1"

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
      role="toolbar"
      aria-label="Tipo de gráfico"
      className="flex flex-wrap gap-1 p-2 border-b border-[var(--c-border)] bg-[var(--c-bg)] rounded-t-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {CHART_TYPE_OPTIONS.map(({ value, label, icon }) => (
        <Button
          key={value}
          variant="ghost"
          size="sm"
          pressed={chartType === value}
          aria-label={`Tipo de gráfico: ${label}`}
          title={label}
          onClick={(e) => {
            e.stopPropagation()
            onUpdate({ chartType: value })
          }}
        >
          <span className="font-mono" aria-hidden="true">{icon}</span>
          <span>{label}</span>
        </Button>
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
  const titleId = useId()
  const sourceTableId = useId()
  const xColId = useId()
  const labelsId = useId()
  const xAxisLabelId = useId()
  const yAxisLabelId = useId()
  const tableBlocks = doc.blocks.filter((b) => b.type === "table") as TableBlock[]
  const source = block.sourceTableId ? "table" : "manual"
  const isMultiSeries =
    block.chartType === "bar" ||
    block.chartType === "line" ||
    block.chartType === "area" ||
    block.chartType === "bar-stacked" ||
    block.chartType === "bar-grouped" ||
    block.chartType === "area-stacked"
  // PLAN-O — Ejes + Estilo: mismos tipos "cartesianos" que sabe dibujar
  // ChartBlockRenderer con CartesianGrid/XAxis/YAxis (ver ese archivo).
  const hasAxes = isMultiSeries || block.chartType === "timeseries"

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
        <label htmlFor={titleId} className={labelCls}>Título</label>
        <input
          id={titleId}
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>
      <p className="text-xs text-[var(--c-text-3)] italic">
        Cambiá el tipo de gráfico desde la toolbar del bloque en el canvas.
      </p>
      <div>
        <span className={labelCls}>Fuente</span>
        <div className="flex gap-3" role="radiogroup" aria-label="Fuente de datos del gráfico">
          <label className="flex items-center gap-1 text-xs text-[var(--c-muted)] cursor-pointer">
            <input
              type="radio"
              checked={source === "manual"}
              onChange={() => onUpdate({ sourceTableId: undefined })}
            />
            Manual
          </label>
          <label className="flex items-center gap-1 text-xs text-[var(--c-muted)] cursor-pointer">
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
            <label htmlFor={sourceTableId} className={labelCls}>Tabla fuente</label>
            <select
              id={sourceTableId}
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
            <label htmlFor={xColId} className={labelCls}>
              Col. eje X (índice)
            </label>
            <input
              id={xColId}
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
            <label htmlFor={labelsId} className={labelCls}>
              Etiquetas (separadas por coma)
            </label>
            <input
              id={labelsId}
              className={inputCls}
              value={block.data?.labels.join(", ") ?? ""}
              onChange={(e) => updateLabels(e.target.value)}
              placeholder="A, B, C"
            />
          </div>
          {(block.data?.datasets ?? []).map((ds, i) => (
            <div key={i} className="space-y-1 border border-[var(--c-border)] rounded p-2">
              <div className="flex items-center gap-1">
                <input
                  className={inputCls + " flex-1"}
                  value={ds.label}
                  aria-label={`Nombre de la serie ${i + 1}`}
                  onChange={(e) => updateDatasetLabel(i, e.target.value)}
                  placeholder="Nombre de serie"
                />
                {isMultiSeries && (
                  <input
                    type="color"
                    className="w-6 h-6 rounded border border-[var(--c-border)] cursor-pointer p-0.5 shrink-0 bg-transparent"
                    value={ds.color ?? "#6366f1"}
                    aria-label={`Color de la serie ${i + 1}`}
                    onChange={(e) => updateDatasetColor(i, e.target.value)}
                    title="Color de serie"
                  />
                )}
                {isMultiSeries && (block.data?.datasets ?? []).length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDataset(i)}
                    className="text-[var(--c-danger)] hover:opacity-80 px-1 text-sm shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
                    aria-label={`Eliminar serie ${i + 1}`}
                    title="Eliminar serie"
                  >
                    ×
                  </button>
                )}
              </div>
              <input
                className={inputCls}
                defaultValue={ds.values.join(", ")}
                aria-label={`Valores de la serie ${i + 1} (separados por coma)`}
                onBlur={(e) => updateDatasetValues(i, e.target.value)}
                placeholder="0, 0, 0"
              />
            </div>
          ))}
          {isMultiSeries && (
            <button
              type="button"
              onClick={addDataset}
              className="text-xs px-2 py-1 border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
            >
              + Agregar serie
            </button>
          )}
        </>
      )}

      {hasAxes && (
        <>
          <div className="pt-1 border-t border-[var(--c-border)]">
            <span className={labelCls}>Estilo</span>
            <label className="flex items-center gap-2 text-xs text-[var(--c-muted)] cursor-pointer py-0.5">
              <input
                type="checkbox"
                checked={block.showGrid !== false}
                onChange={(e) => onUpdate({ showGrid: e.target.checked })}
              />
              Cuadrícula
            </label>
            <label className="flex items-center gap-2 text-xs text-[var(--c-muted)] cursor-pointer py-0.5">
              <input
                type="checkbox"
                checked={block.showLegend !== false}
                onChange={(e) => onUpdate({ showLegend: e.target.checked })}
              />
              Leyenda
            </label>
          </div>

          <div className="pt-1 border-t border-[var(--c-border)]">
            <span className={labelCls}>Ejes</span>
            <label htmlFor={xAxisLabelId} className="text-xs text-[var(--c-muted)] block mb-1 mt-1">
              Etiqueta eje X
            </label>
            <input
              id={xAxisLabelId}
              className={inputCls}
              value={block.xAxisLabel ?? ""}
              placeholder="Ej: tiempo (s)"
              onChange={(e) => onUpdate({ xAxisLabel: e.target.value })}
            />
            <label htmlFor={yAxisLabelId} className="text-xs text-[var(--c-muted)] block mb-1 mt-2">
              Etiqueta eje Y
            </label>
            <input
              id={yAxisLabelId}
              className={inputCls}
              value={block.yAxisLabel ?? ""}
              placeholder="Ej: velocidad (m/s)"
              onChange={(e) => onUpdate({ yAxisLabel: e.target.value })}
            />
          </div>
        </>
      )}

      <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface-3)] p-2">
        <ChartBlockRenderer block={block} doc={doc} />
      </div>
    </div>
  )
}
