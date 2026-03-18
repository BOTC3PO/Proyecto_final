import { useMemo } from "react"
import katex from "katex"
import "katex/dist/katex.min.css"
import type { LatexBlock } from "../types"

interface Props {
  block: LatexBlock
}

export function LatexBlockRenderer({ block }: Props) {
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
      <span className="font-mono text-sm text-red-600">{block.content}</span>
    )
  }

  if (block.displayMode) {
    return (
      <div
        className="flex justify-center py-2"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />
}
