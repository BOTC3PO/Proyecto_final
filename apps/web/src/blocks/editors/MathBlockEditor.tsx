import type { MathBlock } from "../types"
import { MathBlockRenderer } from "../renderers/MathBlockRenderer"

interface Props {
  block: MathBlock
  onChange: (patch: Partial<MathBlock>) => void
  onRemove: () => void
}

const inputCls =
  "border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"

export function MathBlockEditor({ block, onChange, onRemove }: Props) {
  const addFunction = () => {
    onChange({
      functions: [
        ...block.functions,
        { id: crypto.randomUUID(), expression: "", color: "#2563eb" },
      ],
    })
  }

  const removeFunction = (id: string) => {
    onChange({ functions: block.functions.filter((f) => f.id !== id) })
  }

  const updateFunction = (
    id: string,
    patch: Partial<MathBlock["functions"][number]>
  ) => {
    onChange({
      functions: block.functions.map((f) => (f.id === id ? { ...f, ...patch } : f)),
    })
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700">Función f(x)</span>
        <button
          type="button"
          onClick={onRemove}
          className="rounded border border-red-200 bg-red-50 px-2 py-0.5 text-xs text-red-600 hover:bg-red-100"
        >
          Eliminar bloque
        </button>
      </div>

      {/* Title */}
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Título (opcional)
        </label>
        <input
          className={`${inputCls} w-full`}
          placeholder="Título del gráfico"
          value={block.title ?? ""}
          onChange={(e) => onChange({ title: e.target.value || undefined })}
        />
      </div>

      {/* X range */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">x mín</label>
          <input
            type="number"
            className={`${inputCls} w-full`}
            value={block.xMin}
            onChange={(e) => onChange({ xMin: Number(e.target.value) })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">x máx</label>
          <input
            type="number"
            className={`${inputCls} w-full`}
            value={block.xMax}
            onChange={(e) => onChange({ xMax: Number(e.target.value) })}
          />
        </div>
      </div>

      {/* Y range (optional) */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            y mín (auto)
          </label>
          <input
            type="number"
            className={`${inputCls} w-full`}
            placeholder="auto"
            value={block.yMin ?? ""}
            onChange={(e) =>
              onChange({ yMin: e.target.value === "" ? undefined : Number(e.target.value) })
            }
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            y máx (auto)
          </label>
          <input
            type="number"
            className={`${inputCls} w-full`}
            placeholder="auto"
            value={block.yMax ?? ""}
            onChange={(e) =>
              onChange({ yMax: e.target.value === "" ? undefined : Number(e.target.value) })
            }
          />
        </div>
      </div>

      {/* Samples */}
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Muestras</label>
        <input
          type="number"
          className={`${inputCls} w-32`}
          min={10}
          max={2000}
          value={block.samples ?? 400}
          onChange={(e) => onChange({ samples: Number(e.target.value) })}
        />
      </div>

      {/* Checkboxes */}
      <div className="flex gap-4">
        <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={block.showGrid ?? true}
            onChange={(e) => onChange({ showGrid: e.target.checked })}
          />
          Cuadrícula
        </label>
        <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={block.showLegend ?? true}
            onChange={(e) => onChange({ showLegend: e.target.checked })}
          />
          Leyenda
        </label>
      </div>

      {/* Functions */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-700">Funciones</span>
          <button
            type="button"
            onClick={addFunction}
            className="text-xs px-2 py-0.5 rounded border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            + Agregar función
          </button>
        </div>
        <div className="space-y-2">
          {block.functions.map((fn) => (
            <div
              key={fn.id}
              className="flex items-center gap-2 rounded border border-gray-200 bg-gray-50 px-2 py-2"
            >
              <input
                className={`${inputCls} flex-1`}
                placeholder="sin(x)"
                value={fn.expression}
                onChange={(e) => updateFunction(fn.id, { expression: e.target.value })}
              />
              <input
                className={`${inputCls} w-24`}
                placeholder="Etiqueta"
                value={fn.label ?? ""}
                onChange={(e) =>
                  updateFunction(fn.id, { label: e.target.value || undefined })
                }
              />
              <input
                type="color"
                className="h-7 w-8 rounded border border-gray-200 cursor-pointer"
                value={fn.color ?? "#2563eb"}
                onChange={(e) => updateFunction(fn.id, { color: e.target.value })}
              />
              <button
                type="button"
                onClick={() => removeFunction(fn.id)}
                className="text-red-400 hover:text-red-600 text-sm px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Live preview */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
        <MathBlockRenderer block={block} />
      </div>
    </div>
  )
}
