import type { MathBlock } from "../types"
import { MathBlockRenderer } from "../renderers/MathBlockRenderer"

const inputCls =
  "w-full text-xs border border-slate-200 rounded px-1.5 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400"

export function MathBlockEditor({
  block,
  onUpdate,
}: {
  block: MathBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
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
        <label className="text-xs font-medium text-gray-600 block mb-1">Título</label>
        <input
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value || undefined })}
          placeholder="Título del gráfico"
        />
      </div>

      <div className="grid grid-cols-2 gap-1">
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">x mín</label>
          <input
            type="number"
            className={inputCls}
            value={block.xMin}
            onChange={(e) => onUpdate({ xMin: Number(e.target.value) })}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">x máx</label>
          <input
            type="number"
            className={inputCls}
            value={block.xMax}
            onChange={(e) => onUpdate({ xMax: Number(e.target.value) })}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">y mín</label>
          <input
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
          <label className="text-xs font-medium text-gray-600 block mb-1">y máx</label>
          <input
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
        <label className="text-xs font-medium text-gray-600 block mb-1">Muestras</label>
        <input
          type="number"
          className={inputCls}
          min={10}
          max={2000}
          value={block.samples ?? 400}
          onChange={(e) => onUpdate({ samples: Number(e.target.value) })}
        />
      </div>

      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
        <input
          type="checkbox"
          checked={block.showGrid ?? true}
          onChange={(e) => onUpdate({ showGrid: e.target.checked })}
        />
        Cuadrícula
      </label>
      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
        <input
          type="checkbox"
          checked={block.showLegend ?? true}
          onChange={(e) => onUpdate({ showLegend: e.target.checked })}
        />
        Leyenda
      </label>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="text-xs font-medium text-gray-600">Funciones</label>
          <button
            onClick={addFunction}
            className="text-xs px-1.5 py-0.5 border border-gray-200 bg-white text-gray-700 hover:bg-slate-50 rounded"
          >
            + Agregar
          </button>
        </div>
        <div className="space-y-1 max-h-48 overflow-y-auto">
          {block.functions.map((fn) => (
            <div key={fn.id} className="flex items-center gap-1 text-xs">
              <input
                className="flex-1 border border-slate-200 rounded px-1 py-0.5 focus:outline-none text-xs"
                placeholder="sin(x)"
                value={fn.expression}
                onChange={(e) => updateFunction(fn.id, { expression: e.target.value })}
              />
              <input
                type="color"
                className="h-5 w-6 rounded border border-slate-200 cursor-pointer"
                value={fn.color ?? "#2563eb"}
                onChange={(e) => updateFunction(fn.id, { color: e.target.value })}
              />
              <button
                onClick={() => removeFunction(fn.id)}
                className="text-red-400 hover:text-red-600 px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-100 bg-slate-50 p-2">
        <MathBlockRenderer block={block} />
      </div>
    </div>
  )
}
