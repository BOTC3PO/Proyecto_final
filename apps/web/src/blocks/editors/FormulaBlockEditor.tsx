import katex from "katex"
import "katex/dist/katex.min.css"
import type { FormulaBlock } from "../types"

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--c-primary)] font-mono"

export function FormulaBlockEditor({
  block,
  onUpdate,
}: {
  block: FormulaBlock
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
    <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        Fuente LaTeX
        <input
          type="text"
          className={inputCls}
          value={block.content}
          onChange={(e) => onUpdate({ content: e.target.value })}
          placeholder="E = mc^2"
        />
      </label>
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        Título
        <input
          type="text"
          className={inputCls.replace("font-mono", "")}
          placeholder="Ej: Teorema de Pitágoras"
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </label>
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        Descripción (alt) *
        <input
          type="text"
          className={inputCls.replace("font-mono", "")}
          placeholder="Texto leído por TTS"
          value={block.alt}
          onChange={(e) => onUpdate({ alt: e.target.value })}
          required
        />
      </label>
      <label className="flex items-center gap-2 text-xs text-[var(--c-muted)] cursor-pointer">
        <input
          type="checkbox"
          checked={block.displayMode}
          onChange={(e) => onUpdate({ displayMode: e.target.checked })}
        />
        Modo bloque (centrado)
      </label>
      <div className="min-h-[40px] flex items-center justify-center p-3 bg-[var(--c-surface-3)] rounded border border-[var(--c-border)]">
        {error ? (
          <span className="text-xs text-[var(--c-danger)] font-mono">
            {block.content || "Fórmula vacía"}
          </span>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  )
}
