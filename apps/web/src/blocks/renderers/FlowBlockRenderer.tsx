import { useMemo } from "react"
import type { FlowBlock } from "../types"

interface Props {
  block: FlowBlock
}

const NODE_W = 150
const NODE_H = 52
const PADDING = 20

/** Parte una etiqueta en líneas de a lo sumo `max` caracteres (sin cortar palabras). */
export function dividirEtiqueta(label: string, max = 22): string[] {
  const out: string[] = []
  let cur = ""
  for (const w of label.split(/\s+/).filter(Boolean)) {
    if (cur && (cur + " " + w).length > max) {
      out.push(cur)
      cur = w
    } else cur = cur ? cur + " " + w : w
  }
  if (cur) out.push(cur)
  return out.length ? out : [""]
}

/** Punto donde el segmento centro→centro sale del borde del nodo (así la flecha se ve y no queda tapada por el nodo). */
export function puntoEnBorde(
  n: { x: number; y: number; shape?: "rect" | "diamond" | "circle" },
  hacia: { cx: number; cy: number },
): { x: number; y: number } {
  const cx = n.x + NODE_W / 2
  const cy = n.y + NODE_H / 2
  const dx = hacia.cx - cx
  const dy = hacia.cy - cy
  if (dx === 0 && dy === 0) return { x: cx, y: cy }
  const hw = NODE_W / 2
  const hh = NODE_H / 2
  let t: number
  if (n.shape === "circle") t = Math.min(hw, hh) / Math.hypot(dx, dy)
  else if (n.shape === "diamond") t = 1 / (Math.abs(dx) / hw + Math.abs(dy) / hh)
  else t = Math.min(dx !== 0 ? hw / Math.abs(dx) : Infinity, dy !== 0 ? hh / Math.abs(dy) : Infinity)
  return { x: cx + dx * t, y: cy + dy * t }
}

export function FlowBlockRenderer({ block }: Props) {
  const { svgHeight, svgWidth, nodeMap } = useMemo(() => {
    const map = new Map(block.nodes.map((n) => [n.id, n]))
    const maxY = block.nodes.reduce((acc, n) => Math.max(acc, n.y), 0)
    const maxX = block.nodes.reduce((acc, n) => Math.max(acc, n.x), 0)
    return { svgHeight: maxY + NODE_H + PADDING * 2, svgWidth: maxX + NODE_W + PADDING * 2, nodeMap: map }
  }, [block.nodes])

  function getNodeCenter(id: string): { cx: number; cy: number } | null {
    const n = nodeMap.get(id)
    if (!n) return null
    return { cx: n.x + NODE_W / 2, cy: n.y + NODE_H / 2 }
  }

  return (
    <div>
      {block.title && (
        <p className="mb-1 text-sm font-semibold text-[var(--c-text)]">{block.title}</p>
      )}
      <svg
        viewBox={`${-PADDING} ${-PADDING} ${svgWidth} ${svgHeight}`}
        width="100%"
        style={{ display: "block", maxWidth: svgWidth, height: "auto" }}
        aria-label={block.title ?? "Diagrama de flujo"}
      >
        {/* Edges */}
        {block.edges.map((edge) => {
          const from = getNodeCenter(edge.fromId)
          const to = getNodeCenter(edge.toId)
          if (!from || !to) return null
          const a = puntoEnBorde(nodeMap.get(edge.fromId)!, to)
          const b = puntoEnBorde(nodeMap.get(edge.toId)!, from)
          const mx = (a.x + b.x) / 2
          const my = (a.y + b.y) / 2
          return (
            <g key={edge.id}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
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
                  stroke="white"
                  strokeWidth={3}
                  paintOrder="stroke"
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
            refX={8}
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
                {(() => {
                  const ls = dividirEtiqueta(node.label)
                  return ls.map((l, i) => (
                    <tspan key={i} x={cx} y={cy + (i - (ls.length - 1) / 2) * 14}>
                      {l}
                    </tspan>
                  ))
                })()}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
