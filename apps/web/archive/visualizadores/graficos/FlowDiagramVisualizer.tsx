import type { FlowSpec, FlowStep } from "../types";

type FlowDiagramVisualizerProps = {
  spec: FlowSpec;
};

type Position = {
  x: number;
  y: number;
};

const NODE_WIDTH = 170;
const NODE_HEIGHT = 70;
const LEVEL_GAP = 220;
const ROW_GAP = 120;
const SIDE_PADDING = 80;
const TOP_PADDING = 60;

const splitLabel = (label: string) => {
  const words = label.split(" ").filter(Boolean);
  if (words.length <= 2) {
    return [label];
  }

  const midpoint = Math.ceil(words.length / 2);
  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
};

const getStartNodes = (steps: FlowStep[], incomingCounts: Map<string, number>) => {
  const explicitStarts = steps.filter((step) => step.type === "start");
  if (explicitStarts.length) {
    return explicitStarts;
  }
  return steps.filter((step) => (incomingCounts.get(step.id) ?? 0) === 0);
};

const createFlowLayout = (steps: FlowStep[], connections: FlowSpec["connections"]) => {
  const positions = new Map<string, Position>();
  const incomingCounts = new Map(steps.map((step) => [step.id, 0]));
  const outgoing = new Map<string, string[]>();

  connections.forEach((connection) => {
    if (!incomingCounts.has(connection.fromId) || !incomingCounts.has(connection.toId)) {
      return;
    }
    incomingCounts.set(connection.toId, (incomingCounts.get(connection.toId) ?? 0) + 1);
    const existing = outgoing.get(connection.fromId) ?? [];
    existing.push(connection.toId);
    outgoing.set(connection.fromId, existing);
  });

  const depthMap = new Map<string, number>();
  const queue: Array<{ id: string; depth: number }> = [];

  getStartNodes(steps, incomingCounts).forEach((node) => {
    depthMap.set(node.id, 0);
    queue.push({ id: node.id, depth: 0 });
  });

  if (!queue.length && steps.length) {
    depthMap.set(steps[0].id, 0);
    queue.push({ id: steps[0].id, depth: 0 });
  }

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
  const levelMap = new Map<number, FlowStep[]>();
  steps.forEach((step) => {
    const depth = depthMap.get(step.id) ?? 0;
    maxDepth = Math.max(maxDepth, depth);
    const bucket = levelMap.get(depth) ?? [];
    bucket.push(step);
    levelMap.set(depth, bucket);
  });

  const maxNodes = Math.max(1, ...Array.from(levelMap.values()).map((group) => group.length));
  const width = SIDE_PADDING * 2 + maxDepth * LEVEL_GAP + NODE_WIDTH;
  const height = TOP_PADDING * 2 + (maxNodes - 1) * ROW_GAP + NODE_HEIGHT;

  Array.from(levelMap.entries()).forEach(([depth, levelNodes]) => {
    const offset = (maxNodes - levelNodes.length) * ROW_GAP * 0.5;
    levelNodes.forEach((node, index) => {
      const x = SIDE_PADDING + depth * LEVEL_GAP;
      const y = TOP_PADDING + offset + index * ROW_GAP;
      positions.set(node.id, { x, y });
    });
  });

  return { positions, width, height };
};

const getNodeStyle = (type?: FlowStep["type"]) => {
  switch (type) {
    case "start":
      return { fill: "#dbeafe", stroke: "#3b82f6", text: "#1e3a8a" };
    case "end":
      return { fill: "#fee2e2", stroke: "#f87171", text: "#7f1d1d" };
    case "decision":
      return { fill: "#fef9c3", stroke: "#facc15", text: "#854d0e" };
    default:
      return { fill: "#f1f5f9", stroke: "#94a3b8", text: "#1f2937" };
  }
};

export default function FlowDiagramVisualizer({ spec }: FlowDiagramVisualizerProps) {
  const layout = createFlowLayout(spec.steps, spec.connections);

  return (
    <section className="space-y-4">
      {spec.title && <h3 className="text-lg font-semibold">{spec.title}</h3>}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <svg
          role="img"
          aria-label="Diagrama de flujo"
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          className="h-full w-full"
        >
          <defs>
            <marker
              id="flow-arrow"
              viewBox="0 0 10 10"
              refX="10"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
            </marker>
          </defs>
          {spec.connections.map((connection) => {
            const source = layout.positions.get(connection.fromId);
            const target = layout.positions.get(connection.toId);
            if (!source || !target) {
              return null;
            }
            const startX = source.x + NODE_WIDTH / 2;
            const startY = source.y;
            const endX = target.x - NODE_WIDTH / 2;
            const endY = target.y;
            const midX = (startX + endX) / 2;
            const midY = (startY + endY) / 2;
            return (
              <g key={connection.id}>
                <path
                  d={`M ${startX} ${startY} C ${startX + 40} ${startY}, ${endX - 40} ${endY}, ${endX} ${endY}`}
                  fill="none"
                  stroke="#64748b"
                  strokeWidth={2}
                  markerEnd="url(#flow-arrow)"
                />
                {connection.label && (
                  <g>
                    <rect
                      x={midX - 40}
                      y={midY - 14}
                      width={80}
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
                      {connection.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
          {spec.steps.map((step) => {
            const position = layout.positions.get(step.id);
            if (!position) {
              return null;
            }
            const style = getNodeStyle(step.type);
            const lines = splitLabel(step.label);
            const startX = position.x - NODE_WIDTH / 2;
            const startY = position.y - NODE_HEIGHT / 2;

            return (
              <g key={step.id}>
                {step.type === "decision" ? (
                  <polygon
                    points={`${position.x} ${startY} ${startX + NODE_WIDTH} ${position.y} ${position.x} ${startY + NODE_HEIGHT} ${startX} ${position.y}`}
                    fill={style.fill}
                    stroke={style.stroke}
                    strokeWidth={2}
                  />
                ) : (
                  <rect
                    x={startX}
                    y={startY}
                    width={NODE_WIDTH}
                    height={NODE_HEIGHT}
                    rx={step.type === "start" || step.type === "end" ? 999 : 16}
                    fill={style.fill}
                    stroke={style.stroke}
                    strokeWidth={2}
                  />
                )}
                {lines.map((line, index) => (
                  <text
                    key={`${step.id}-${line}`}
                    x={position.x}
                    y={position.y - 6 + index * 16}
                    textAnchor="middle"
                    fontSize="12"
                    fill={style.text}
                    fontWeight={600}
                  >
                    {line}
                  </text>
                ))}
                {step.description && (
                  <text
                    x={position.x}
                    y={position.y + 22}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#64748b"
                  >
                    {step.description}
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
