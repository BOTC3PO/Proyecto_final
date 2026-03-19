import type { ShapeBlock } from "../types"
import { COLLECTIONS } from "../shapes/collections"

interface Props {
  block: ShapeBlock
}

export function ShapeBlockRenderer({ block }: Props) {
  const width = block.canvasWidth ?? 800
  const height = block.canvasHeight ?? 500
  const collection = COLLECTIONS[block.collection]

  if (block.items.length === 0) {
    return (
      <div
        style={{ width, height, border: "1px solid #d1d5db", background: "white", overflow: "hidden" }}
        className="flex items-center justify-center"
      >
        <span className="text-sm text-gray-400">Sin formas agregadas</span>
      </div>
    )
  }

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        background: "white",
        border: "1px solid #d1d5db",
        overflow: "hidden",
      }}
    >
      {block.items.map((item) => {
        const shape = collection.shapes.find((s) => s.id === item.shapeId)
        if (!shape) return null
        return (
          <div
            key={item.id}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                transform: `rotate(${item.rotation ?? 0}deg)`,
              }}
              dangerouslySetInnerHTML={{ __html: shape.svg }}
            />
            {item.label && (
              <div className="text-xs text-gray-600 text-center mt-1 max-w-[60px]">
                {item.label}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
