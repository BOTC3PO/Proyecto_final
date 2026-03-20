import type { OpticsRaySpec } from "../types";

type OpticsRayVisualizerProps = {
  spec: OpticsRaySpec;
};

type Range = {
  min: number;
  max: number;
};

type Point = {
  x: number;
  y: number;
};

const canvas = {
  width: 640,
  height: 320,
  margin: { top: 20, right: 24, bottom: 40, left: 48 },
};

const buildScale = (domain: Range, range: Range) => {
  return (value: number) => {
    const ratio = (value - domain.min) / (domain.max - domain.min || 1);
    return range.min + ratio * (range.max - range.min);
  };
};

const buildPath = (points: Point[]) => {
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
};

const renderElement = (
  element: OpticsRaySpec["element"],
  xScale: (value: number) => number,
  yScale: (value: number) => number,
) => {
  const positionX = element.positionX ?? 0;
  const height = element.height ?? 8;
  const centerX = xScale(positionX);
  const top = yScale(height / 2);
  const bottom = yScale(-height / 2);

  if (element.type.startsWith("lente")) {
    return (
      <g>
        <rect
          x={centerX - 6}
          y={top}
          width={12}
          height={bottom - top}
          rx={6}
          className="fill-blue-100 stroke-blue-500"
          strokeWidth={2}
        />
        {element.type === "lente-divergente" && (
          <line
            x1={centerX - 10}
            y1={top}
            x2={centerX + 10}
            y2={bottom}
            className="stroke-blue-400"
            strokeDasharray="4 3"
            strokeWidth={1.5}
          />
        )}
      </g>
    );
  }

  const mirrorColor = "#0F172A";
  return (
    <g>
      <line
        x1={centerX}
        x2={centerX}
        y1={top}
        y2={bottom}
        stroke={mirrorColor}
        strokeWidth={3}
      />
      {element.type !== "espejo-plano" && (
        <path
          d={`M ${centerX} ${top} Q ${centerX + (element.type === "espejo-concavo" ? -10 : 10)} ${
            (top + bottom) / 2
          } ${centerX} ${bottom}`}
          fill="none"
          stroke={mirrorColor}
          strokeWidth={1.5}
        />
      )}
    </g>
  );
};

const renderArrow = (
  base: Point,
  height: number,
  color: string,
  label?: string,
  dashed?: boolean,
) => {
  const arrowHeight = height;
  const arrowTop = { x: base.x, y: base.y - arrowHeight };
  return (
    <g>
      <line
        x1={base.x}
        y1={base.y}
        x2={arrowTop.x}
        y2={arrowTop.y}
        stroke={color}
        strokeWidth={2}
        strokeDasharray={dashed ? "4 4" : undefined}
      />
      <polygon
        points={`${arrowTop.x - 4},${arrowTop.y + 6} ${arrowTop.x + 4},${arrowTop.y + 6} ${arrowTop.x},${arrowTop.y}`}
        fill={color}
        opacity={dashed ? 0.5 : 1}
      />
      {label && (
        <text
          x={arrowTop.x + 6}
          y={arrowTop.y - 6}
          className="fill-slate-600 text-[11px]"
        >
          {label}
        </text>
      )}
    </g>
  );
};

export default function OpticsRayVisualizer({ spec }: OpticsRayVisualizerProps) {
  const xRange = spec.layout?.xRange ?? { min: -10, max: 10 };
  const yRange = spec.layout?.yRange ?? { min: -6, max: 6 };

  const xScale = buildScale(xRange, {
    min: canvas.margin.left,
    max: canvas.width - canvas.margin.right,
  });
  const yScale = buildScale(yRange, {
    min: canvas.height - canvas.margin.bottom,
    max: canvas.margin.top,
  });

  const axisY = yScale(0);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <h4 className="text-sm font-semibold text-slate-800">
          {spec.title ?? "Óptica geométrica"}
        </h4>
        {spec.description && (
          <p className="text-xs text-slate-500">{spec.description}</p>
        )}
      </div>
      <svg
        viewBox={`0 0 ${canvas.width} ${canvas.height}`}
        className="mt-3 w-full"
        role="img"
        aria-label={spec.title ?? "Óptica geométrica"}
      >
        <rect
          x={canvas.margin.left}
          y={canvas.margin.top}
          width={canvas.width - canvas.margin.left - canvas.margin.right}
          height={canvas.height - canvas.margin.top - canvas.margin.bottom}
          rx={8}
          className="fill-slate-50"
        />
        <line
          x1={canvas.margin.left}
          x2={canvas.width - canvas.margin.right}
          y1={axisY}
          y2={axisY}
          className="stroke-slate-200"
        />
        {renderElement(spec.element, xScale, yScale)}
        {spec.focalPoints?.left && (
          <g>
            <circle
              cx={xScale(spec.focalPoints.left.x)}
              cy={axisY}
              r={4}
              className="fill-orange-400"
            />
            {spec.focalPoints.left.label && (
              <text
                x={xScale(spec.focalPoints.left.x)}
                y={axisY + 16}
                textAnchor="middle"
                className="fill-slate-500 text-[11px]"
              >
                {spec.focalPoints.left.label}
              </text>
            )}
          </g>
        )}
        {spec.focalPoints?.right && (
          <g>
            <circle
              cx={xScale(spec.focalPoints.right.x)}
              cy={axisY}
              r={4}
              className="fill-orange-400"
            />
            {spec.focalPoints.right.label && (
              <text
                x={xScale(spec.focalPoints.right.x)}
                y={axisY + 16}
                textAnchor="middle"
                className="fill-slate-500 text-[11px]"
              >
                {spec.focalPoints.right.label}
              </text>
            )}
          </g>
        )}
        {renderArrow(
          {
            x: xScale(spec.object.position.x),
            y: yScale(spec.object.position.y),
          },
          Math.abs(yScale(spec.object.position.y) - yScale(spec.object.position.y + spec.object.height)),
          "#2563EB",
          spec.object.label ?? "Objeto",
        )}
        {spec.image &&
          renderArrow(
            {
              x: xScale(spec.image.position.x),
              y: yScale(spec.image.position.y),
            },
            Math.abs(yScale(spec.image.position.y) - yScale(spec.image.position.y + spec.image.height)),
            "#F97316",
            spec.image.label ?? "Imagen",
            spec.image.virtual,
          )}
        {spec.rays.map((ray) => (
          <g key={ray.id}>
            <path
              d={buildPath(
                ray.points.map((point) => ({
                  x: xScale(point.x),
                  y: yScale(point.y),
                })),
              )}
              fill="none"
              stroke={ray.color ?? "#0F172A"}
              strokeWidth={2}
              strokeDasharray={ray.dashed ? "6 4" : undefined}
            />
            {ray.label && ray.points.length > 0 && (
              <text
                x={xScale(ray.points[ray.points.length - 1].x) + 6}
                y={yScale(ray.points[ray.points.length - 1].y) - 6}
                className="fill-slate-600 text-[11px]"
              >
                {ray.label}
              </text>
            )}
          </g>
        ))}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
        <span className="rounded-full bg-slate-100 px-2 py-1">
          Elemento: {spec.element.label ?? spec.element.type}
        </span>
        {spec.focalPoints?.left && (
          <span className="rounded-full bg-orange-50 px-2 py-1 text-orange-700">
            Foco izquierdo
          </span>
        )}
        {spec.focalPoints?.right && (
          <span className="rounded-full bg-orange-50 px-2 py-1 text-orange-700">
            Foco derecho
          </span>
        )}
      </div>
    </div>
  );
}
