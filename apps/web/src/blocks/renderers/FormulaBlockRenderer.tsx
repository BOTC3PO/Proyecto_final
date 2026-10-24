import { useMemo } from "react"
import katex from "katex"
import "katex/dist/katex.min.css"
import DOMPurify from "dompurify"
import type { FormulaBlock } from "../types"

interface Props {
  block: FormulaBlock
}

export function FormulaBlockRenderer({ block }: Props) {
  const { html, error } = useMemo(() => {
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
  }, [block.content, block.displayMode])

  if (error) {
    return (
      <span className="font-mono text-sm text-red-600" role="img" aria-label={block.alt}>
        {block.content}
      </span>
    )
  }

  return (
    <figure className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-4 space-y-2">
      {block.title && (
        <p className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide">
          {block.title}
        </p>
      )}
      <div
        className="flex justify-center py-2"
        role="img"
        aria-label={block.alt}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
      />
    </figure>
  )
}
