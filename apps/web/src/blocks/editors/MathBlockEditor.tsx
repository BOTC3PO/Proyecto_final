import { useId } from "react"
import type { MathBlock } from "../types"
import { MathBlockRenderer } from "../renderers/MathBlockRenderer"

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-1.5 py-1 outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]"
const labelCls = "text-xs font-medium text-[var(--c-muted)] block mb-1"

export function MathBlockEditor({
  block,
  onUpdate,
}: {
  block: MathBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  const titleId = useId()
  const xMinId = useId()
  const xMaxId = useId()
  const yMinId = useId()
  const yMaxId = useId()
  const samplesId = useId()

  const addFunction = () => {
    onUpdate({
      functions: [
        ...block.functions,
        { id: crypto.randomUUID(), expression: "", color: "#2563eb" },
      ],
    })
  }

  const removeFunction = (id: string) => {
    onUpdate({ functions: block.functions.filter((f) => f.id !== id) })
  }

  const updateFunction = (id: string, patch: Partial<MathBlock["functions"][number]>) => {
    onUpdate({
      functions: block.functions.map((f) => (f.id === id ? { ...f, ...patch } : f)),
    })
  }

  return (
    <div className="space-y-2">
      <div>
        <label htmlFor={titleId} className={labelCls}>Título</label>
        <input
          id={titleId}
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value || undefined })}
          placeholder="Título del gráfico"
        />
      </div>

      <div className="grid grid-cols-2 gap-1">
        <div>
          <label htmlFor={xMinId} className={labelCls}>x mín</label>
          <input
            id={xMinId}
            type="number"
            className={inputCls}
            value={block.xMin}
            onChange={(e) => onUpdate({ xMin: Number(e.target.value) })}
          />
        </div>
        <div>
          <label htmlFor={xMaxId} className={labelCls}>x máx</label>
          <input
            id={xMaxId}
            type="number"
            className={inputCls}
            value={block.xMax}
            onChange={(e) => onUpdate({ xMax: Number(e.target.value) })}
          />
        </div>
        <div>
          <label htmlFor={yMinId} className={labelCls}>y mín</label>
          <input
            id={yMinId}
            type="number"
            className={inputCls}
            placeholder="auto"
            value={block.yMin ?? ""}
            onChange={(e) =>
              onUpdate({ yMin: e.target.value === "" ? undefined : Number(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor={yMaxId} className={labelCls}>y máx</label>
          <input
            id={yMaxId}
            type="number"
            className={inputCls}
            placeholder="auto"
            value={block.yMax ?? ""}
            onChange={(e) =>
              onUpdate({ yMax: e.target.value === "" ? undefined : Number(e.target.value) })
            }
          />
        </div>
      </div>

      <div>
        <label htmlFor={samplesId} className={labelCls}>Muestras</label>
        <input
          id={samplesId}
          type="number"
          className={inputCls}
          min={10}
          max={2000}
          value={block.samples ?? 400}
          onChange={(e) => onUpdate({ samples: Number(e.target.value) })}
        />
      </div>

      <label className="flex items-center gap-2 text-xs text-[var(--c-muted)] cursor-pointer">
        <input
          type="checkbox"
          checked={block.showGrid ?? true}
          onChange={(e) => onUpdate({ showGrid: e.target.checked })}
        />
        Cuadrícula
      </label>
      <label className="flex items-center gap-2 text-xs text-[var(--c-muted)] cursor-pointer">
        <input
          type="checkbox"
          checked={block.showLegend ?? true}
          onChange={(e) => onUpdate({ showLegend: e.target.checked })}
        />
        Leyenda
      </label>

      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-[var(--c-muted)]">Funciones</span>
          <button
            type="button"
            onClick={addFunction}
            className="text-xs px-1.5 py-0.5 border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
          >
            + Agregar
          </button>
        </div>
        <div className="space-y-1 max-h-48 overflow-y-auto">
          {block.functions.map((fn, i) => (
            <div key={fn.id} className="flex items-center gap-1 text-xs">
              <input
                className="flex-1 border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-1 py-0.5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)] text-xs"
                placeholder="sin(x)"
                aria-label={`Expresión de la función ${i + 1}`}
                value={fn.expression}
                onChange={(e) => updateFunction(fn.id, { expression: e.target.value })}
              />
              <input
                type="color"
                className="h-5 w-6 rounded border border-[var(--c-border)] cursor-pointer bg-transparent"
                value={fn.color ?? "#2563eb"}
                aria-label={`Color de la función ${i + 1}`}
                onChange={(e) => updateFunction(fn.id, { color: e.target.value })}
              />
              <button
                type="button"
                onClick={() => removeFunction(fn.id)}
                className="text-[var(--c-danger)] hover:opacity-80 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
                aria-label={`Eliminar función ${i + 1}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface-3)] p-2">
        <MathBlockRenderer block={block} />
      </div>
    </div>
  )
}
