import type { BlockDocument } from "./types"
import { TextBlockRenderer } from "./renderers/TextBlockRenderer"
import { LatexBlockRenderer } from "./renderers/LatexBlockRenderer"
import { TableBlockRenderer } from "./renderers/TableBlockRenderer"
import { ChartBlockRenderer } from "./renderers/ChartBlockRenderer"
import { FlowBlockRenderer } from "./renderers/FlowBlockRenderer"
import { MathBlockRenderer } from "./renderers/MathBlockRenderer"
import { ShapeBlockRenderer } from "./renderers/ShapeBlockRenderer"
import { AudioBlockRenderer } from "./renderers/AudioBlockRenderer"
import { VideoBlockRenderer } from "./renderers/VideoBlockRenderer"
import { PdfBlockRenderer } from "./renderers/PdfBlockRenderer"
import { LinkBlockRenderer } from "./renderers/LinkBlockRenderer"
import { FormulaBlockRenderer } from "./renderers/FormulaBlockRenderer"

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
          case "image":
            return <div key={block.id} />
          case "audio":
            return <AudioBlockRenderer key={block.id} block={block} />
          case "video":
            return <VideoBlockRenderer key={block.id} block={block} />
          case "pdf":
            return <PdfBlockRenderer key={block.id} block={block} />
          case "link":
            return <LinkBlockRenderer key={block.id} block={block} />
          case "formula":
            return <FormulaBlockRenderer key={block.id} block={block} />
          default:
            return <div key={(block as { id: string }).id} />
        }
      })}
    </div>
  )
}
