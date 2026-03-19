import type { BlockDocument } from "./types"
import { TextBlockRenderer } from "./renderers/TextBlockRenderer"
import { LatexBlockRenderer } from "./renderers/LatexBlockRenderer"
import { TableBlockRenderer } from "./renderers/TableBlockRenderer"
import { ChartBlockRenderer } from "./renderers/ChartBlockRenderer"
import { FlowBlockRenderer } from "./renderers/FlowBlockRenderer"
import { MathBlockRenderer } from "./renderers/MathBlockRenderer"
import { ShapeBlockRenderer } from "./renderers/ShapeBlockRenderer"

interface Props {
  doc: BlockDocument
}

export function BlockRenderer({ doc }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {doc.blocks.map((block) => {
        switch (block.type) {
          case "text":
            return <TextBlockRenderer key={block.id} block={block} />
          case "latex":
            return <LatexBlockRenderer key={block.id} block={block} />
          case "table":
            return <TableBlockRenderer key={block.id} block={block} />
          case "chart":
            return <ChartBlockRenderer key={block.id} block={block} doc={doc} />
          case "flow":
            return <FlowBlockRenderer key={block.id} block={block} />
          case "math":
            return <MathBlockRenderer key={block.id} block={block} />
          case "shape":
            return <ShapeBlockRenderer key={block.id} block={block} />
          default:
            return <div key={(block as { id: string }).id} />
        }
      })}
    </div>
  )
}
