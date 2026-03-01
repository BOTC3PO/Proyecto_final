import { CsBinaryTreeSpec } from "../types";

interface Props {
  spec: CsBinaryTreeSpec;
}

const VIEW_W = 560;
const VIEW_H = 320;
const NODE_R = 22;

interface LayoutNode {
  id: string;
  value: number | string;
  x: number;
  y: number;
  parentId?: string;
  highlighted?: boolean;
  visited?: boolean;
}

function buildLayout(
  nodes: CsBinaryTreeSpec["nodes"]
): LayoutNode[] {
  if (!nodes || nodes.length === 0) return [];

  // Check if any node has explicit x/y coordinates
  const hasExplicitCoords = nodes.some((n) => n.x !== undefined && n.y !== undefined);

  if (hasExplicitCoords) {
    // Scale from 0-560 x 0-320 space proportionally
    const xs = nodes.filter((n) => n.x !== undefined).map((n) => n.x as number);
    const ys = nodes.filter((n) => n.y !== undefined).map((n) => n.y as number);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const padH = 50;
    const padV = 40;

    return nodes.map((n) => ({
      id: n.id,
      value: n.value,
      parentId: n.parentId,
      highlighted: n.highlighted,
      visited: n.visited,
      x:
        n.x !== undefined
          ? maxX !== minX
            ? padH + ((n.x - minX) / (maxX - minX)) * (VIEW_W - padH * 2)
            : VIEW_W / 2
          : VIEW_W / 2,
      y:
        n.y !== undefined
          ? maxY !== minY
            ? padV + ((n.y - minY) / (maxY - minY)) * (VIEW_H - padV * 2 - 40)
            : padV
          : padV,
    }));
  }

  // Auto-layout: level-by-level using parent-child structure
  // Find root (node with no parentId)
  const parentIds = new Set(nodes.map((n) => n.parentId).filter(Boolean));
  const roots = nodes.filter((n) => !n.parentId);
  const root = roots[0];
  if (!root) return [];

  // Build children map
  const childrenMap = new Map<string, CsBinaryTreeSpec["nodes"]>();
  for (const node of nodes) {
    if (node.parentId) {
      if (!childrenMap.has(node.parentId)) childrenMap.set(node.parentId, []);
      childrenMap.get(node.parentId)!.push(node);
    }
  }

  // BFS to assign levels and positions
  const levelWidth = VIEW_W - 60;
  const levelHeight = 60;
  const topPad = 40;

  // Collect levels
  const levels: Array<Array<CsBinaryTreeSpec["nodes"][number]>> = [];
  let currentLevel = [root];
  while (currentLevel.length > 0) {
    levels.push(currentLevel);
    const nextLevel: Array<CsBinaryTreeSpec["nodes"][number]> = [];
    for (const n of currentLevel) {
      const children = childrenMap.get(n.id) ?? [];
      // Sort: left before right
      const sorted = [...children].sort((a, b) => {
        if (a.side === "left" && b.side !== "left") return -1;
        if (b.side === "left" && a.side !== "left") return 1;
        return 0;
      });
      nextLevel.push(...sorted);
    }
    currentLevel = nextLevel;
  }

  const result: LayoutNode[] = [];
  for (let li = 0; li < levels.length; li++) {
    const level = levels[li];
    const count = level.length;
    const y = topPad + li * levelHeight;
    for (let ni = 0; ni < count; ni++) {
      const node = level[ni];
      const x = 30 + (levelWidth / (count + 1)) * (ni + 1);
      result.push({
        id: node.id,
        value: node.value,
        parentId: node.parentId,
        highlighted: node.highlighted,
        visited: node.visited,
        x,
        y,
      });
    }
  }
  return result;
}

export default function CsBinaryTreeVisualizer({ spec }: Props) {
  const { nodes, traversalOrder, visitedSequence, isBST, title, description } = spec;

  const layoutNodes = buildLayout(nodes);
  const layoutMap = new Map(layoutNodes.map((n) => [n.id, n]));

  const traversalLabel =
    traversalOrder === "inorder"
      ? "In-order"
      : traversalOrder === "preorder"
      ? "Pre-order"
      : traversalOrder === "postorder"
      ? "Post-order"
      : traversalOrder === "levelorder"
      ? "Level-order"
      : null;

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title ?? "Binary Tree Visualizer"}
      >
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
            {isBST ? " (BST)" : ""}
          </text>
        )}

        {/* Edges */}
        {layoutNodes.map((node) => {
          if (!node.parentId) return null;
          const parent = layoutMap.get(node.parentId);
          if (!parent) return null;
          return (
            <line
              key={`edge-${node.id}`}
              x1={parent.x}
              y1={parent.y}
              x2={node.x}
              y2={node.y}
              stroke="#94a3b8"
              strokeWidth={1.5}
            />
          );
        })}

        {/* Nodes */}
        {layoutNodes.map((node) => {
          const isVisited = !!node.visited;
          const isHighlighted = !!node.highlighted;
          const fillColor = isHighlighted
            ? "#818cf8"
            : isVisited
            ? "#4f46e5"
            : "#e2e8f0";
          const textColor = isVisited || isHighlighted ? "#ffffff" : "#1e293b";
          const strokeColor = isHighlighted
            ? "#4338ca"
            : isVisited
            ? "#3730a3"
            : "#94a3b8";

          const label = String(node.value);
          const fontSize = label.length > 3 ? 9 : label.length > 2 ? 10 : 12;

          return (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={NODE_R}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={2}
              />
              <text
                x={node.x}
                y={node.y + fontSize / 3}
                textAnchor="middle"
                fontSize={fontSize}
                fontWeight="600"
                fill={textColor}
              >
                {label.length > 5 ? label.slice(0, 5) : label}
              </text>
            </g>
          );
        })}

        {/* Empty state */}
        {layoutNodes.length === 0 && (
          <text
            x={VIEW_W / 2}
            y={VIEW_H / 2}
            textAnchor="middle"
            fontSize={14}
            fill="#94a3b8"
          >
            No tree data
          </text>
        )}

        {/* Traversal sequence at bottom */}
        {visitedSequence && visitedSequence.length > 0 && (
          <g transform={`translate(10, ${VIEW_H - 22})`}>
            <text fontSize={9} fill="#64748b" fontWeight="500">
              {traversalLabel ? `${traversalLabel}: ` : "Visited: "}
              {visitedSequence
                .map((id) => {
                  const n = layoutMap.get(id);
                  return n ? String(n.value) : id;
                })
                .join(" → ")}
            </text>
          </g>
        )}

        {/* Description */}
        {description && !visitedSequence?.length && (
          <text
            x={10}
            y={VIEW_H - 8}
            fontSize={9}
            fill="#94a3b8"
          >
            {description.length > 90 ? description.slice(0, 87) + "..." : description}
          </text>
        )}
      </svg>
    </div>
  );
}
