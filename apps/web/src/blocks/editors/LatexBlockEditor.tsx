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
      <p className="text-xs text-[var(--c-text-3)] italic">
        Editá la fórmula directamente en el bloque del canvas.
      </p>
      <label className="flex items-center gap-2 text-xs text-[var(--c-muted)] cursor-pointer">
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
        className="w-full text-sm border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-2 py-1.5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)] font-mono"
        value={block.content}
        onChange={(e) => onUpdate({ content: e.target.value })}
        onClick={(e) => e.stopPropagation()}
        aria-label="Fórmula LaTeX"
        placeholder="\sum_{i=1}^{n} x_i"
        autoFocus
      />
      <div className="min-h-[40px] flex items-center justify-center p-3 bg-[var(--c-surface-3)] rounded border border-[var(--c-border)]">
        {error ? (
          <span className="text-xs text-[var(--c-danger)] font-mono">{block.content || "Fórmula vacía"}</span>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  )
}
