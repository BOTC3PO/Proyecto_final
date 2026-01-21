import type { PhysicsForcesVectorSpec } from "../types";

type PhysicsForcesVectorVisualizerProps = {
  spec: PhysicsForcesVectorSpec;
};

const canvas = {
  width: 520,
  height: 320,
  center: { x: 260, y: 180 },
  maxArrowLength: 130,
};

const toRadians = (angleDeg: number) => (angleDeg * Math.PI) / 180;

const getVectorDelta = (magnitude: number, angleDeg: number, scale: number) => {
  const radians = toRadians(angleDeg);
  return {
    x: Math.cos(radians) * magnitude * scale,
    y: -Math.sin(radians) * magnitude * scale,
  };
};

const formatMagnitude = (value: number) => {
  if (Number.isInteger(value)) {
    return value.toString();
  }
  return value.toFixed(2);
};

export default function PhysicsForcesVectorVisualizer({
  spec,
}: PhysicsForcesVectorVisualizerProps) {
  const maxMagnitude = Math.max(
    1,
    ...spec.vectors.map((vector) => Math.abs(vector.magnitude)),
  );
  const scale = canvas.maxArrowLength / maxMagnitude;
  const unitLabel = spec.unit ? ` ${spec.unit}` : "";
  const showAxes = spec.options?.showAxes ?? true;

  const bodyWidth = spec.body?.width ?? 70;
  const bodyHeight = spec.body?.height ?? 48;
  const bodyColor = spec.body?.color ?? "#E2E8F0";
  const bodyShape = spec.body?.shape ?? "rect";

  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Fuerzas y vectores
        </p>
        <h3 className="text-lg font-semibold text-slate-900">
          {spec.title ?? "Diagrama de fuerzas"}
        </h3>
        {spec.description && (
          <p className="text-sm text-slate-600">{spec.description}</p>
        )}
      </header>

      <svg
        viewBox={`0 0 ${canvas.width} ${canvas.height}`}
        className="w-full"
        role="img"
        aria-label={spec.title ?? "Diagrama de fuerzas"}
      >
        <defs>
          {spec.vectors.map((vector) => {
            const markerId = `arrow-${vector.id}`;
            return (
              <marker
                key={markerId}
                id={markerId}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path
                  d="M 0 0 L 10 5 L 0 10 z"
                  fill={vector.color ?? "#2563EB"}
                />
              </marker>
            );
          })}
        </defs>

        {showAxes && (
          <>
            <line
              x1={canvas.center.x - 160}
              y1={canvas.center.y}
              x2={canvas.center.x + 160}
              y2={canvas.center.y}
              className="stroke-slate-200"
              strokeDasharray="4 4"
            />
            <line
              x1={canvas.center.x}
              y1={canvas.center.y - 140}
              x2={canvas.center.x}
              y2={canvas.center.y + 140}
              className="stroke-slate-200"
              strokeDasharray="4 4"
            />
          </>
        )}

        {bodyShape === "circle" ? (
          <circle
            cx={canvas.center.x}
            cy={canvas.center.y}
            r={Math.min(bodyWidth, bodyHeight) / 2}
            fill={bodyColor}
            stroke="#CBD5F5"
            strokeWidth={2}
          />
        ) : (
          <rect
            x={canvas.center.x - bodyWidth / 2}
            y={canvas.center.y - bodyHeight / 2}
            width={bodyWidth}
            height={bodyHeight}
            rx={10}
            fill={bodyColor}
            stroke="#CBD5F5"
            strokeWidth={2}
          />
        )}

        {spec.body?.label && (
          <text
            x={canvas.center.x}
            y={canvas.center.y + bodyHeight / 2 + 18}
            textAnchor="middle"
            className="fill-slate-500 text-[11px]"
          >
            {spec.body.label}
          </text>
        )}

        {spec.vectors.map((vector) => {
          const delta = getVectorDelta(vector.magnitude, vector.angleDeg, scale);
          const endX = canvas.center.x + delta.x;
          const endY = canvas.center.y + delta.y;
          const markerId = `arrow-${vector.id}`;
          const showComponents =
            vector.showComponents ?? spec.options?.showComponents ?? false;
          const componentX = {
            x: endX,
            y: canvas.center.y,
          };
          const componentY = {
            x: endX,
            y: endY,
          };
          const labelOffset = 12;

          return (
            <g key={vector.id}>
              {showComponents && (
                <>
                  <line
                    x1={canvas.center.x}
                    y1={canvas.center.y}
                    x2={componentX.x}
                    y2={componentX.y}
                    stroke={vector.color ?? "#2563EB"}
                    strokeWidth={1.6}
                    strokeDasharray="6 4"
                    opacity={0.6}
                  />
                  <line
                    x1={componentX.x}
                    y1={componentX.y}
                    x2={componentY.x}
                    y2={componentY.y}
                    stroke={vector.color ?? "#2563EB"}
                    strokeWidth={1.6}
                    strokeDasharray="6 4"
                    opacity={0.6}
                  />
                  {(vector.componentLabels?.x ?? "Fx") && (
                    <text
                      x={componentX.x + (delta.x >= 0 ? labelOffset : -labelOffset)}
                      y={componentX.y - 6}
                      textAnchor={delta.x >= 0 ? "start" : "end"}
                      className="fill-slate-500 text-[10px]"
                    >
                      {vector.componentLabels?.x ?? "Fx"}
                    </text>
                  )}
                  {(vector.componentLabels?.y ?? "Fy") && (
                    <text
                      x={componentY.x + (delta.x >= 0 ? labelOffset : -labelOffset)}
                      y={componentY.y - (delta.y <= 0 ? 6 : -6)}
                      textAnchor={delta.x >= 0 ? "start" : "end"}
                      className="fill-slate-500 text-[10px]"
                    >
                      {vector.componentLabels?.y ?? "Fy"}
                    </text>
                  )}
                </>
              )}
              <line
                x1={canvas.center.x}
                y1={canvas.center.y}
                x2={endX}
                y2={endY}
                stroke={vector.color ?? "#2563EB"}
                strokeWidth={2.6}
                markerEnd={`url(#${markerId})`}
              />
              <text
                x={endX + (delta.x >= 0 ? labelOffset : -labelOffset)}
                y={endY + (delta.y >= 0 ? labelOffset : -labelOffset)}
                textAnchor={delta.x >= 0 ? "start" : "end"}
                className="fill-slate-700 text-[11px] font-semibold"
              >
                {vector.label ? `${vector.label} · ` : ""}
                {formatMagnitude(vector.magnitude)}
                {unitLabel}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        {spec.vectors.map((vector) => (
          <div
            key={`${vector.id}-legend`}
            className="flex items-center gap-3 rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
          >
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: vector.color ?? "#2563EB" }}
            />
            <div>
              <p className="font-semibold text-slate-800">
                {vector.label ?? "Vector"}
              </p>
              <p className="text-xs text-slate-500">
                Magnitud: {formatMagnitude(vector.magnitude)}
                {unitLabel} · Ángulo: {vector.angleDeg}°
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
