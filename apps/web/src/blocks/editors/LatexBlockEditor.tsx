import katex from "katex"
import "katex/dist/katex.min.css"
import type { LatexBlock } from "../types"

export function LatexBlockEditor({
  block,
  onUpdate,
}: {
  block: LatexBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-400 italic">
        Editá la fórmula directamente en el bloque del canvas.
      </p>
      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
        <input
          type="checkbox"
          checked={block.displayMode}
          onChange={(e) => onUpdate({ displayMode: e.target.checked })}
        />
        Modo bloque (centrado)
      </label>
    </div>
  )
}

export function InlineLatexEditor({
  block,
  onUpdate,
}: {
  block: LatexBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  const { html, error } = (() => {
    try {
      return {
        html: katex.renderToString(block.content, {
          displayMode: block.displayMode,
          throwOnError: true,
        }),
        error: false,
      }
    } catch {
      return { html: block.content, error: true }
    }
  })()

  return (
    <div className="flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
      <input
        className="w-full text-sm border border-slate-200 rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-400 font-mono"
        value={block.content}
        onChange={(e) => onUpdate({ content: e.target.value })}
        onClick={(e) => e.stopPropagation()}
        placeholder="\sum_{i=1}^{n} x_i"
        autoFocus
      />
      <div className="min-h-[40px] flex items-center justify-center p-3 bg-slate-50 rounded border border-slate-100">
        {error ? (
          <span className="text-xs text-red-500 font-mono">{block.content || "Fórmula vacía"}</span>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  )
}
