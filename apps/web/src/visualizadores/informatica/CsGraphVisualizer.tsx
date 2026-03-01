import type { CsGraphSpec } from "../types";

interface Props {
  spec: CsGraphSpec;
}

const VIEW_W = 560;
const VIEW_H = 340;
const NODE_RADIUS = 20;

export default function CsGraphVisualizer({ spec }: Props) {
  const { nodes, edges, directed, weighted, title, algorithm, traversalOrder } = spec;

  if (!nodes || nodes.length === 0) {
    return (
      <div className="w-full">
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} xmlns="http://www.w3.org/2000/svg">
          <rect width={VIEW_W} height={VIEW_H} fill="#f8fafc" rx={8} />
          <text x={VIEW_W / 2} y={VIEW_H / 2} textAnchor="middle" fontSize={14} fill="#94a3b8">
            No graph data
          </text>
        </svg>
      </div>
    );
  }

  // Scale node positions from spec coordinate space to viewBox
  const nodeXs = nodes.map((n) => n.x);
  const nodeYs = nodes.map((n) => n.y);
  const minX = Math.min(...nodeXs);
  const maxX = Math.max(...nodeXs);
  const minY = Math.min(...nodeYs);
  const maxY = Math.max(...nodeYs);

  const padding = 50;
  const scaleX =
    maxX !== minX
      ? (VIEW_W - padding * 2) / (maxX - minX)
      : 1;
  const scaleY =
    maxY !== minY
      ? (VIEW_H - padding * 2 - 30) / (maxY - minY)
      : 1;

  function sx(x: number) {
    return maxX !== minX ? padding + (x - minX) * scaleX : VIEW_W / 2;
  }
  function sy(y: number) {
    return maxY !== minY ? padding + (y - minY) * scaleY : VIEW_H / 2 - 15;
  }

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  const algorithmLabels: Record<string, string> = {
    bfs: "BFS",
    dfs: "DFS",
    dijkstra: "Dijkstra",
    none: "",
  };

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title ?? "Graph Visualizer"}
      >
        {/* Arrow marker for directed graphs */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#6366f1" />
          </marker>
          <marker
            id="arrowhead-default"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
          </marker>
        </defs>

        {/* Background */}
        <rect width={VIEW_W} height={VIEW_H} fill="#f8fafc" rx={8} />

        {/* Title */}
        {title && (
          <text
            x={VIEW_W / 2}
            y={16}
            textAnchor="middle"
            fontSize={12}
            fontWeight="600"
            fill="#1e293b"
          >
            {title}
          </text>
        )}

        {/* Algorithm label */}
        {algorithm && algorithm !== "none" && (
          <text x={12} y={16} fontSize={10} fill="#6366f1" fontWeight="500">
            {algorithmLabels[algorithm] ?? algorithm}
          </text>
        )}

        {/* Edges */}
        {edges.map((edge) => {
          const from = nodeMap.get(edge.fromId);
          const to = nodeMap.get(edge.toId);
          if (!from || !to) return null;

          const x1 = sx(from.x);
          const y1 = sy(from.y);
          const x2 = sx(to.x);
          const y2 = sy(to.y);

          // Shorten line so arrow meets the node circle edge
          const dx = x2 - x1;
          const dy = y2 - y1;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const shortenBy = NODE_RADIUS + (directed ? 8 : 0);
          const ex = x2 - (dx / dist) * shortenBy;
          const ey = y2 - (dy / dist) * shortenBy;
          const sx2 = x1 + (dx / dist) * NODE_RADIUS;
          const sy2 = y1 + (dy / dist) * NODE_RADIUS;

          const isHighlighted = !!edge.highlighted;
          const strokeColor = isHighlighted ? "#6366f1" : "#94a3b8";
          const markerId = isHighlighted ? "arrowhead" : "arrowhead-default";

          // Midpoint for weight label
          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;

          return (
            <g key={edge.id}>
              <line
                x1={sx2}
                y1={sy2}
                x2={ex}
                y2={ey}
                stroke={strokeColor}
                strokeWidth={isHighlighted ? 2.5 : 1.5}
                markerEnd={directed ? `url(#${markerId})` : undefined}
              />
              {weighted && edge.weight !== undefined && (
                <g>
                  <rect
                    x={midX - 10}
                    y={midY - 8}
                    width={20}
                    height={12}
                    fill="white"
                    rx={2}
                    opacity={0.85}
                  />
                  <text
                    x={midX}
                    y={midY + 1}
                    textAnchor="middle"
                    fontSize={9}
                    fill="#475569"
                    fontWeight="500"
                  >
                    {edge.weight}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const cx = sx(node.x);
          const cy = sy(node.y);
          const isVisited = !!node.visited;
          const fillColor = isVisited ? "#4f46e5" : "#e2e8f0"; // indigo-600 or slate-200
          const textColor = isVisited ? "#ffffff" : "#1e293b";
          const strokeColor = node.color ?? (isVisited ? "#3730a3" : "#94a3b8");

          return (
            <g key={node.id}>
              <circle
                cx={cx}
                cy={cy}
                r={NODE_RADIUS}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={2}
              />
              <text
                x={cx}
                y={cy + 4}
                textAnchor="middle"
                fontSize={11}
                fontWeight="600"
                fill={textColor}
              >
                {node.label.length > 4 ? node.label.slice(0, 4) : node.label}
              </text>
            </g>
          );
        })}

        {/* Traversal order display */}
        {traversalOrder && traversalOrder.length > 0 && (
          <g transform={`translate(10, ${VIEW_H - 20})`}>
            <text fontSize={9} fill="#64748b" fontWeight="500">
              Traversal:{" "}
              {traversalOrder.map((id, i) => {
                const nd = nodeMap.get(id);
                return (nd?.label ?? id) + (i < traversalOrder.length - 1 ? " → " : "");
              })}
            </text>
          </g>
        )}

        {/* Graph type label */}
        <g transform={`translate(${VIEW_W - 10}, ${VIEW_H - 20})`}>
          <text
            fontSize={9}
            fill="#94a3b8"
            textAnchor="end"
          >
            {directed ? "Directed" : "Undirected"}{weighted ? " · Weighted" : ""}
          </text>
        </g>
      </svg>
    </div>
  );
}
