import type { CircuitComponent, CircuitConnection, CircuitMeasurement, CircuitNode, CircuitSpec } from "../types";

type CircuitVisualizerProps = {
  spec: CircuitSpec;
};

const defaultLayout = {
  width: 520,
  height: 220,
};

const resolveLayout = (layout?: CircuitSpec["layout"]) => ({
  width: layout?.width ?? defaultLayout.width,
  height: layout?.height ?? defaultLayout.height,
});

const mapNodes = (nodes: CircuitNode[], layout: { width: number; height: number }) => {
  if (nodes.length === 0) {
    return new Map<string, { x: number; y: number }>();
  }
  const hasPositions = nodes.every((node) => node.position);
  if (hasPositions) {
    return new Map(
      nodes.map((node) => [
        node.id,
        {
          x: node.position!.x * layout.width,
          y: node.position!.y * layout.height,
        },
      ]),
    );
  }
  const gap = layout.width / (nodes.length + 1);
  return new Map(
    nodes.map((node, index) => [
      node.id,
      { x: gap * (index + 1), y: layout.height / 2 },
    ]),
  );
};

const getNodePoint = (nodeMap: Map<string, { x: number; y: number }>, nodeId: string) => {
  return nodeMap.get(nodeId) ?? { x: 0, y: 0 };
};

const renderComponentSymbol = (component: CircuitComponent, x: number, y: number) => {
  switch (component.type) {
    case "battery":
      return (
        <>
          <line x1={x - 10} y1={y - 12} x2={x - 10} y2={y + 12} className="stroke-slate-700" strokeWidth={2} />
          <line x1={x + 8} y1={y - 8} x2={x + 8} y2={y + 8} className="stroke-slate-700" strokeWidth={2} />
        </>
      );
    case "resistor":
      return (
        <rect
          x={x - 16}
          y={y - 8}
          width={32}
          height={16}
          rx={3}
          className="fill-white stroke-slate-700"
          strokeWidth={2}
        />
      );
    case "switch":
      return (
        <>
          <line x1={x - 12} y1={y} x2={x} y2={y} className="stroke-slate-700" strokeWidth={2} />
          <line x1={x} y1={y} x2={x + 12} y2={y - 8} className="stroke-slate-700" strokeWidth={2} />
        </>
      );
    default:
      return (
        <circle cx={x} cy={y} r={4} className="fill-slate-700" />
      );
  }
};

const CircuitConnectionLine = ({
  connection,
  nodeMap,
}: {
  connection: CircuitConnection;
  nodeMap: Map<string, { x: number; y: number }>;
}) => {
  const from = getNodePoint(nodeMap, connection.fromNodeId);
  const to = getNodePoint(nodeMap, connection.toNodeId);
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      className="stroke-slate-300"
      strokeWidth={2}
      strokeDasharray={connection.style === "dashed" ? "4 4" : undefined}
    />
  );
};

const CircuitComponentLine = ({
  component,
  nodeMap,
}: {
  component: CircuitComponent;
  nodeMap: Map<string, { x: number; y: number }>;
}) => {
  const from = getNodePoint(nodeMap, component.fromNodeId);
  const to = getNodePoint(nodeMap, component.toNodeId);
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  return (
    <g>
      <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} className="stroke-slate-600" strokeWidth={2} />
      {renderComponentSymbol(component, midX, midY)}
      {component.label && (
        <text x={midX} y={midY - 14} textAnchor="middle" className="fill-slate-600 text-[10px]">
          {component.label}
        </text>
      )}
      {component.value !== undefined && (
        <text x={midX} y={midY + 24} textAnchor="middle" className="fill-slate-500 text-[10px]">
          {component.value} {component.unit}
        </text>
      )}
    </g>
  );
};

const MeasurementBadge = ({ measurement }: { measurement: CircuitMeasurement }) => (
  <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
    <div className="font-semibold text-slate-700">{measurement.label ?? measurement.type}</div>
    <div>
      {measurement.value} {measurement.unit}
    </div>
  </div>
);

export default function CircuitVisualizer({ spec }: CircuitVisualizerProps) {
  const layout = resolveLayout(spec.layout);
  const nodeMap = mapNodes(spec.nodes, layout);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold text-slate-800">{spec.title ?? "Circuito eléctrico"}</h4>
          {spec.description && (
            <p className="mt-1 text-xs text-slate-500">{spec.description}</p>
          )}
        </div>
      </div>
      <svg
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        className="mt-4 w-full"
        role="img"
        aria-label={spec.title ?? "Circuito eléctrico"}
      >
        <rect
          x={12}
          y={12}
          width={layout.width - 24}
          height={layout.height - 24}
          rx={10}
          className="fill-slate-50"
        />
        {spec.connections?.map((connection) => (
          <CircuitConnectionLine key={connection.id} connection={connection} nodeMap={nodeMap} />
        ))}
        {spec.components.map((component) => (
          <CircuitComponentLine key={component.id} component={component} nodeMap={nodeMap} />
        ))}
        {spec.nodes.map((node) => {
          const point = getNodePoint(nodeMap, node.id);
          return (
            <g key={node.id}>
              <circle cx={point.x} cy={point.y} r={4} className="fill-slate-700" />
              {node.label && (
                <text x={point.x} y={point.y + 16} textAnchor="middle" className="fill-slate-500 text-[10px]">
                  {node.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {spec.measurements && spec.measurements.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {spec.measurements.map((measurement) => (
            <MeasurementBadge key={measurement.id} measurement={measurement} />
          ))}
        </div>
      )}
    </div>
  );
}
