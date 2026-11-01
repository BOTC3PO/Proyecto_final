/**
 * Teoría del temario → HTML seguro. El contenido está escrito en Markdown (títulos, negritas, listas,
 * tablas, citas, código) con fórmulas LaTeX entre `$…$` (en línea) o `$$…$$` (en bloque).
 *
 * El signo `$` también se usa para montos en pesos ("$500", "$ 1.200"): ver `reemplazarFormulasEnLinea`.
 * El código entre comillas invertidas se protege antes de buscar fórmulas (p. ej. `grep "^$"`).
 */
import { marked } from "marked"
import katex from "katex"
import DOMPurify from "dompurify"
import { reemplazarFormulasEnLinea } from "./teoriaTextoPlano"

const DISPLAY = /\$\$([\s\S]+?)\$\$/g
const CODE = /```[\s\S]*?```|`[^`\n]*`/g

function formula(tex: string, displayMode: boolean): string {
  try {
    return katex.renderToString(tex.trim(), { displayMode, throwOnError: false, output: "html" })
  } catch {
    return tex
  }
}

export function markdownTeoriaAHtml(texto: string): string {
  const codigos: string[] = []
  const formulas: string[] = []
  let s = texto.replace(CODE, (m) => `VBCODIGO${codigos.push(m) - 1}X`)
  s = s.replace(DISPLAY, (_, tex: string) => `\n\nVBFORMULA${formulas.push(formula(tex, true)) - 1}X\n\n`)
  s = reemplazarFormulasEnLinea(s, (tex) => `VBFORMULA${formulas.push(formula(tex, false)) - 1}X`)
  s = s.replace(/VBCODIGO(\d+)X/g, (_, i: string) => codigos[Number(i)])
  let html: string
  try {
    const r = marked.parse(s, { gfm: true, breaks: false })
    html = typeof r === "string" ? r : ""
  } catch {
    html = s.split(/\n{2,}/).map((p) => `<p>${p.replace(/</g, "&lt;")}</p>`).join("")
  }
  html = html.replace(/VBFORMULA(\d+)X/g, (_, i: string) => formulas[Number(i)] ?? "")
  return DOMPurify.sanitize(html)
}
