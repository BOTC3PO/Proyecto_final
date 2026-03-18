import { useMemo } from "react"
import type { FlowBlock } from "../types"

interface Props {
  block: FlowBlock
}

const NODE_W = 120
const NODE_H = 48
const PADDING = 20

export function FlowBlockRenderer({ block }: Props) {
  const { svgHeight, nodeMap } = useMemo(() => {
    const map = new Map(block.nodes.map((n) => [n.id, n]))
    const maxY = block.nodes.reduce((acc, n) => Math.max(acc, n.y), 0)
    return { svgHeight: maxY + NODE_H + PADDING * 2, nodeMap: map }
  }, [block.nodes])

  function getNodeCenter(id: string): { cx: number; cy: number } | null {
    const n = nodeMap.get(id)
    if (!n) return null
    return { cx: n.x + NODE_W / 2, cy: n.y + NODE_H / 2 }
  }

  return (
    <div>
      {block.title && (
        <p className="mb-1 text-sm font-semibold text-gray-700">{block.title}</p>
      )}
      <svg
        width="100%"
        height={svgHeight}
        style={{ display: "block" }}
        aria-label={block.title ?? "Diagrama de flujo"}
      >
        {/* Edges */}
        {block.edges.map((edge) => {
          const from = getNodeCenter(edge.fromId)
          const to = getNodeCenter(edge.toId)
          if (!from || !to) return null
          const mx = (from.cx + to.cx) / 2
          const my = (from.cy + to.cy) / 2
          return (
            <g key={edge.id}>
              <line
                x1={from.cx}
                y1={from.cy}
                x2={to.cx}
                y2={to.cy}
                stroke="#6b7280"
                strokeWidth={1.5}
                markerEnd="url(#arrow)"
              />
              {edge.label && (
                <text
                  x={mx}
                  y={my - 4}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#374151"
                >
                  {edge.label}
                </text>
              )}
            </g>
          )
        })}

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrow"
            markerWidth={8}
            markerHeight={8}
            refX={6}
            refY={3}
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
          </marker>
        </defs>

        {/* Nodes */}
        {block.nodes.map((node) => {
          const fill = node.color ?? "#e0e7ff"
          const stroke = "#6366f1"
          const shape = node.shape ?? "rect"
          const cx = node.x + NODE_W / 2
          const cy = node.y + NODE_H / 2

          let shape_el: React.ReactNode
          if (shape === "circle") {
            const r = Math.min(NODE_W, NODE_H) / 2
            shape_el = (
              <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth={1.5} />
            )
          } else if (shape === "diamond") {
            const hw = NODE_W / 2
            const hh = NODE_H / 2
            const points = `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`
            shape_el = (
              <polygon points={points} fill={fill} stroke={stroke} strokeWidth={1.5} />
            )
          } else {
            shape_el = (
              <rect
                x={node.x}
                y={node.y}
                width={NODE_W}
                height={NODE_H}
                rx={6}
                fill={fill}
                stroke={stroke}
                strokeWidth={1.5}
              />
            )
          }

          return (
            <g key={node.id}>
              {shape_el}
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={12}
                fill="#1e1b4b"
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
