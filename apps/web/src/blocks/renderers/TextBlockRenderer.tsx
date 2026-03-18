import { useMemo } from "react"
import { marked } from "marked"
import type { TextBlock } from "../types"

interface Props {
  block: TextBlock
}

export function TextBlockRenderer({ block }: Props) {
  const html = useMemo(() => {
    try {
      const result = marked(block.content)
      return typeof result === "string" ? result : ""
    } catch {
      return block.content
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("")
    }
  }, [block.content])

  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
