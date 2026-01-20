import type { ConceptMapSpec, ConceptNode } from "../types";

type ConceptMapVisualizerProps = {
  spec: ConceptMapSpec;
};

type Position = {
  x: number;
  y: number;
};

type LayoutResult = {
  positions: Map<string, Position>;
  width: number;
  height: number;
};

const NODE_WIDTH = 170;
const NODE_HEIGHT = 62;
const LEVEL_GAP = 120;
const SIDE_PADDING = 70;
const TOP_PADDING = 50;

const splitLabel = (label: string) => {
  const words = label.split(" ").filter(Boolean);
  if (words.length <= 2) {
    return [label];
  }

  const midpoint = Math.ceil(words.length / 2);
  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
};

const createHierarchyLayout = (nodes: ConceptNode[], links: ConceptMapSpec["links"]) => {
  const positions = new Map<string, Position>();
  const incomingCounts = new Map(nodes.map((node) => [node.id, 0]));
  const outgoing = new Map<string, string[]>();

  links.forEach((link) => {
    if (!incomingCounts.has(link.sourceId) || !incomingCounts.has(link.targetId)) {
      return;
    }
    incomingCounts.set(link.targetId, (incomingCounts.get(link.targetId) ?? 0) + 1);
    const existing = outgoing.get(link.sourceId) ?? [];
    existing.push(link.targetId);
    outgoing.set(link.sourceId, existing);
  });

  const roots = nodes.filter((node) => (incomingCounts.get(node.id) ?? 0) === 0);
  const depthMap = new Map<string, number>();
  const queue: Array<{ id: string; depth: number }> = [];

  roots.forEach((node) => {
    depthMap.set(node.id, 0);
    queue.push({ id: node.id, depth: 0 });
  });

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) continue;
    const neighbors = outgoing.get(current.id) ?? [];
    neighbors.forEach((neighbor) => {
      const nextDepth = current.depth + 1;
      if (!depthMap.has(neighbor) || (depthMap.get(neighbor) ?? 0) > nextDepth) {
        depthMap.set(neighbor, nextDepth);
        queue.push({ id: neighbor, depth: nextDepth });
      }
    });
  }

  let maxDepth = 0;
  const levelMap = new Map<number, ConceptNode[]>();
  nodes.forEach((node) => {
    const depth = depthMap.get(node.id) ?? 0;
    maxDepth = Math.max(maxDepth, depth);
    const bucket = levelMap.get(depth) ?? [];
    bucket.push(node);
    levelMap.set(depth, bucket);
  });

  const width = Math.max(800, SIDE_PADDING * 2 + NODE_WIDTH * 2);
  const height = TOP_PADDING * 2 + maxDepth * LEVEL_GAP + NODE_HEIGHT;

  Array.from(levelMap.entries()).forEach(([depth, levelNodes]) => {
    const step = width / (levelNodes.length + 1);
    levelNodes.forEach((node, index) => {
      const x = step * (index + 1);
      const y = TOP_PADDING + depth * LEVEL_GAP;
      positions.set(node.id, { x, y });
    });
  });

  return { positions, width, height };
};

const createRadialLayout = (nodes: ConceptNode[]) => {
  const positions = new Map<string, Position>();
  const radius = 220;
  const width = 2 * (radius + SIDE_PADDING);
  const height = 2 * (radius + TOP_PADDING);
  const centerX = width / 2;
  const centerY = height / 2;

  nodes.forEach((node, index) => {
    const angle = (index / nodes.length) * Math.PI * 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    positions.set(node.id, { x, y });
  });

  return { positions, width, height };
};

export default function ConceptMapVisualizer({ spec }: ConceptMapVisualizerProps) {
  const layout = spec.links.length
    ? createHierarchyLayout(spec.nodes, spec.links)
    : createRadialLayout(spec.nodes);

  return (
    <section className="space-y-4">
      {spec.title && <h3 className="text-lg font-semibold">{spec.title}</h3>}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <svg
          role="img"
          aria-label="Mapa conceptual"
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          className="h-full w-full"
        >
          <defs>
            <marker
              id="concept-arrow"
              viewBox="0 0 10 10"
              refX="10"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
            </marker>
          </defs>
          {spec.links.map((link) => {
            const source = layout.positions.get(link.sourceId);
            const target = layout.positions.get(link.targetId);
            if (!source || !target) {
              return null;
            }
            const startY = source.y + NODE_HEIGHT / 2;
            const endY = target.y - NODE_HEIGHT / 2;
            const midX = (source.x + target.x) / 2;
            const midY = (startY + endY) / 2;

            return (
              <g key={link.id}>
                <line
                  x1={source.x}
                  y1={startY}
                  x2={target.x}
                  y2={endY}
                  stroke="#64748b"
                  strokeWidth={2}
                  markerEnd="url(#concept-arrow)"
                />
                <rect
                  x={midX - 45}
                  y={midY - 14}
                  width={90}
                  height={24}
                  rx={12}
                  fill="#f8fafc"
                  stroke="#e2e8f0"
                />
                <text
                  x={midX}
                  y={midY + 4}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#475569"
                >
                  {link.relation}
                </text>
              </g>
            );
          })}
          {spec.nodes.map((node) => {
            const position = layout.positions.get(node.id);
            if (!position) {
              return null;
            }
            const lines = splitLabel(node.label);
            const startX = position.x - NODE_WIDTH / 2;
            const startY = position.y - NODE_HEIGHT / 2;
            return (
              <g key={node.id}>
                <rect
                  x={startX}
                  y={startY}
                  width={NODE_WIDTH}
                  height={NODE_HEIGHT}
                  rx={16}
                  fill="#f1f5f9"
                  stroke="#cbd5f5"
                  strokeWidth={1.5}
                />
                {lines.map((line, index) => (
                  <text
                    key={`${node.id}-${line}`}
                    x={position.x}
                    y={position.y - 6 + index * 16}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#1e293b"
                    fontWeight={600}
                  >
                    {line}
                  </text>
                ))}
                {node.description && (
                  <text
                    x={position.x}
                    y={position.y + 22}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#64748b"
                  >
                    {node.description}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
