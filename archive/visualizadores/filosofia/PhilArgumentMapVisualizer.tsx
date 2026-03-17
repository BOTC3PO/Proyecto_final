import type { PhilArgumentMapSpec } from "../types";

interface NodeLayout {
  id: string;
  text: string;
  type: "premise" | "objection" | "rebuttal" | "conclusion";
  x: number;
  y: number;
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + "…";
}

function buildLayout(spec: PhilArgumentMapSpec): NodeLayout[] {
  const allNodes = spec.nodes ?? [];
  if (allNodes.length === 0) return [];

  // Build depth map using parentId
  const depthMap = new Map<string, number>();
  const childrenMap = new Map<string, string[]>();

  // Initialize
  for (const node of allNodes) {
    childrenMap.set(node.id, []);
  }

  for (const node of allNodes) {
    if (node.parentId) {
      const arr = childrenMap.get(node.parentId);
      if (arr) arr.push(node.id);
    }
  }

  // BFS from roots (nodes without parentId or parentId pointing to claim)
  const queue: Array<{ id: string; depth: number }> = [];
  for (const node of allNodes) {
    if (!node.parentId || node.parentId === spec.claim?.id) {
      depthMap.set(node.id, 1);
      queue.push({ id: node.id, depth: 1 });
    }
  }

  let head = 0;
  while (head < queue.length) {
    const { id, depth } = queue[head++];
    const children = childrenMap.get(id) ?? [];
    for (const childId of children) {
      if (!depthMap.has(childId)) {
        depthMap.set(childId, depth + 1);
        queue.push({ id: childId, depth: depth + 1 });
      }
    }
  }

  // Fallback: any node still without a depth
  for (const node of allNodes) {
    if (!depthMap.has(node.id)) {
      depthMap.set(node.id, 1);
    }
  }

  // Group by depth
  const byDepth = new Map<number, string[]>();
  for (const [id, depth] of depthMap.entries()) {
    const arr = byDepth.get(depth) ?? [];
    arr.push(id);
    byDepth.set(depth, arr);
  }

  const nodeMap = new Map(allNodes.map((n) => [n.id, n]));
  const layouts: NodeLayout[] = [];
  const svgWidth = 560;
  const padding = 40;

  for (const [depth, ids] of byDepth.entries()) {
    const y = depth * 80 + 40;
    const count = ids.length;
    const usableWidth = svgWidth - padding * 2;
    ids.forEach((id, i) => {
      const x =
        count === 1
          ? svgWidth / 2
          : padding + (usableWidth / (count - 1)) * i;
      const node = nodeMap.get(id);
      if (node) {
        layouts.push({ id, text: node.text, type: node.type, x, y });
      }
    });
  }

  return layouts;
}

const NODE_STYLES: Record<
  "premise" | "objection" | "rebuttal" | "conclusion",
  { fill: string; stroke: string }
> = {
  premise: { fill: "#f0fdf4", stroke: "#16a34a" },
  objection: { fill: "#fef2f2", stroke: "#ef4444" },
  rebuttal: { fill: "#faf5ff", stroke: "#a855f7" },
  conclusion: { fill: "#eff6ff", stroke: "#2563eb" },
};

export default function PhilArgumentMapVisualizer({
  spec,
}: {
  spec: PhilArgumentMapSpec;
}) {
  if (!spec) return null;

  const nodeLayouts = buildLayout(spec);
  const layoutMap = new Map(nodeLayouts.map((n) => [n.id, n]));

  // Claim node position
  const claimX = 280;
  const claimY = 40;

  const relations = spec.relations ?? [];

  return (
    <svg
      viewBox="0 0 560 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <marker
          id="arrowhead-green"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
        </marker>
        <marker
          id="arrowhead-red"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
        </marker>
      </defs>

      {/* Relations */}
      {relations.map((rel) => {
        const fromNode =
          rel.fromId === spec.claim?.id
            ? { x: claimX, y: claimY }
            : layoutMap.get(rel.fromId);
        const toNode =
          rel.toId === spec.claim?.id
            ? { x: claimX, y: claimY }
            : layoutMap.get(rel.toId);

        if (!fromNode || !toNode) return null;

        const isSupports = rel.kind === "supports";
        return (
          <line
            key={rel.id}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke={isSupports ? "#16a34a" : "#dc2626"}
            strokeWidth={1.5}
            strokeDasharray={isSupports ? undefined : "5 3"}
            markerEnd={
              isSupports ? "url(#arrowhead-green)" : "url(#arrowhead-red)"
            }
          />
        );
      })}

      {/* Claim node */}
      {spec.claim && (
        <g transform={`translate(${claimX - 80}, ${claimY - 24})`}>
          <rect
            width={160}
            height={48}
            rx={6}
            fill="#1e293b"
          />
          <text
            x={80}
            y={20}
            textAnchor="middle"
            fill="white"
            fontSize={11}
            fontWeight="600"
          >
            {truncate(spec.claim.text, 22)}
          </text>
          <text
            x={80}
            y={35}
            textAnchor="middle"
            fill="#94a3b8"
            fontSize={9}
          >
            claim
          </text>
        </g>
      )}

      {/* Argument nodes */}
      {nodeLayouts.map((node) => {
        const style = NODE_STYLES[node.type] ?? NODE_STYLES.premise;
        return (
          <g
            key={node.id}
            transform={`translate(${node.x - 70}, ${node.y - 24})`}
          >
            <rect
              width={140}
              height={48}
              rx={6}
              fill={style.fill}
              stroke={style.stroke}
              strokeWidth={1.5}
            />
            <text
              x={70}
              y={20}
              textAnchor="middle"
              fill="#1e293b"
              fontSize={10}
              fontWeight="500"
            >
              {truncate(node.text, 22)}
            </text>
            <text
              x={70}
              y={35}
              textAnchor="middle"
              fill={style.stroke}
              fontSize={9}
            >
              {node.type}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
