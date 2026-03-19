import type { ShapeBlock } from "../types"
import { COLLECTIONS } from "../shapes/collections"

interface Props {
  block: ShapeBlock
}

export function ShapeBlockRenderer({ block }: Props) {
  const width = block.canvasWidth ?? 800
  const height = block.canvasHeight ?? 500
  const collection = COLLECTIONS[block.collection]
  const connectors = block.connectors ?? []

  const itemCenter = (itemId: string) => {
    const item = block.items.find((i) => i.id === itemId)
    if (!item) return { x: 0, y: 0 }
    return { x: item.x + 30, y: item.y + 30 }
  }

  if (block.items.length === 0 && connectors.length === 0) {
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
      {/* SVG layer for connectors */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <defs>
          <marker
            id="arrow-renderer"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
          </marker>
        </defs>
        {connectors.map((connector) => {
          const from = itemCenter(connector.fromId)
          const to = itemCenter(connector.toId)
          const mx = (from.x + to.x) / 2
          const my = (from.y + to.y) / 2
          return (
            <g key={connector.id}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#475569"
                strokeWidth={1.5}
                strokeDasharray={connector.style === "dashed" ? "5,5" : undefined}
                markerEnd={connector.style === "arrow" ? "url(#arrow-renderer)" : undefined}
              />
              {connector.label && (
                <text
                  x={mx}
                  y={my - 4}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#475569"
                  fontFamily="sans-serif"
                >
                  {connector.label}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {/* Shape items */}
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
                outline: item.color ? `2px solid ${item.color}` : undefined,
                outlineOffset: item.color ? "2px" : undefined,
                borderRadius: item.color ? 4 : undefined,
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
