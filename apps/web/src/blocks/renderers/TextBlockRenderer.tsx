import TextoTeoria from "../../components/modulos/TextoTeoria"
import type { TextBlock } from "../types"

interface Props {
  block: TextBlock
}

/** Texto en Markdown con fórmulas `$…$` (mismo renderer que la teoría del módulo). */
export function TextBlockRenderer({ block }: Props) {
  return <TextoTeoria texto={block.content} />
}
