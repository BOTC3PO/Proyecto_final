import { useMemo } from "react"
import { marked } from "marked"
import DOMPurify from 'dompurify'
import type { TextBlock } from "../types"

interface Props {
  block: TextBlock
}

export function TextBlockRenderer({ block }: Props) {
  const html = useMemo(() => {
    try {
      const result = marked(block.content)
      const raw = typeof result === "string" ? result : ""
      return DOMPurify.sanitize(raw)
    } catch {
      return DOMPurify.sanitize(
        block.content
          .split("\n")
          .map((line) => `<p>${line}</p>`)
          .join("")
      )
    }
  }, [block.content])

  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
