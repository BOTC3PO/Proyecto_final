import { useMemo } from "react"
import "katex/dist/katex.min.css"
import { markdownTeoriaAHtml } from "../../lib/markdownTeoria"

/** Teoría con formato: Markdown + fórmulas (ver `markdownTeoriaAHtml`). Los estilos están en `.vb-md` (index.css). */
export default function TextoTeoria({ texto, className = "" }: { texto: string; className?: string }) {
  const html = useMemo(() => markdownTeoriaAHtml(texto), [texto])
  return <div className={`vb-md ${className}`} dangerouslySetInnerHTML={{ __html: html }} />
}
