import { useEffect, useMemo, useState } from "react";
import type { WaveInterferenceSpec } from "../types";

type WaveInterferenceVisualizerProps = {
  spec: WaveInterferenceSpec;
};

type Range = {
  min: number;
  max: number;
};

type Point = {
  x: number;
  y: number;
};

const chartSize = {
  width: 640,
  height: 260,
  margin: { top: 24, right: 32, bottom: 40, left: 48 },
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

export default function WaveInterferenceVisualizer({
  spec,
}: WaveInterferenceVisualizerProps) {
  const samples = spec.samples ?? 160;
  const xMin = spec.axes?.x?.min ?? 0;
  const xMax = spec.axes?.x?.max ?? Math.PI * 2;
  const baseAmplitude = spec.waves.reduce(
    (total, wave) => total + Math.abs(wave.amplitude),
    0,
  );
  const yMin = spec.axes?.y?.min ?? -Math.max(1, baseAmplitude);
  const yMax = spec.axes?.y?.max ?? Math.max(1, baseAmplitude);
  const showSuperposition = spec.superposition?.enabled ?? true;

  const [timePhase, setTimePhase] = useState(0);

  useEffect(() => {
    if (!spec.animation?.enabled) {
      return;
    }
    let frame: number;
    let lastTime = performance.now();
    const speed = spec.animation.speed ?? 1;

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      setTimePhase((prev) => prev + delta * speed);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [spec.animation?.enabled, spec.animation?.speed]);

  const { wavePaths, superpositionPath } = useMemo(() => {
    const step = (xMax - xMin) / samples;
    const pointsByWave = spec.waves.map(() => [] as Point[]);
    const superpositionPoints: Point[] = [];

    for (let index = 0; index <= samples; index += 1) {
      const xValue = xMin + step * index;
      const phaseOffset = timePhase;
      let sum = 0;

      spec.waves.forEach((wave, waveIndex) => {
        const phase = wave.phase ?? 0;
        const yValue =
          wave.amplitude *
          Math.sin(2 * Math.PI * wave.frequency * xValue + phase + phaseOffset);
        pointsByWave[waveIndex].push({ x: xValue, y: yValue });
        sum += yValue;
      });

      if (showSuperposition) {
        superpositionPoints.push({ x: xValue, y: sum });
      }
    }

    return {
      wavePaths: pointsByWave,
      superpositionPath: superpositionPoints,
    };
  }, [samples, spec.waves, showSuperposition, timePhase, xMax, xMin]);

  const xScale = buildScale(
    { min: xMin, max: xMax },
    {
      min: chartSize.margin.left,
      max: chartSize.width - chartSize.margin.right,
    },
  );
  const yScale = buildScale(
    { min: yMin, max: yMax },
    {
      min: chartSize.height - chartSize.margin.bottom,
      max: chartSize.margin.top,
    },
  );

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold text-slate-800">
            {spec.title ?? "Ondas sinusoidales"}
          </h4>
          {spec.description && (
            <p className="text-xs text-slate-500">{spec.description}</p>
          )}
        </div>
        {spec.animation?.enabled && (
          <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
            Animación activa
          </span>
        )}
      </div>
      <svg
        viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}
        className="mt-3 w-full"
        role="img"
        aria-label={spec.title ?? "Ondas"}
      >
        <rect
          x={chartSize.margin.left}
          y={chartSize.margin.top}
          width={chartSize.width - chartSize.margin.left - chartSize.margin.right}
          height={chartSize.height - chartSize.margin.top - chartSize.margin.bottom}
          rx={8}
          className="fill-slate-50"
        />
        <line
          x1={chartSize.margin.left}
          x2={chartSize.width - chartSize.margin.right}
          y1={yScale(0)}
          y2={yScale(0)}
          className="stroke-slate-200"
        />
        {wavePaths.map((points, index) => {
          const wave = spec.waves[index];
          const pathPoints = points.map((point) => ({
            x: xScale(point.x),
            y: yScale(point.y),
          }));
          return (
            <path
              key={wave.id}
              d={buildPath(pathPoints)}
              fill="none"
              stroke={wave.color ?? "#2563EB"}
              strokeWidth={2}
              opacity={0.85}
            />
          );
        })}
        {showSuperposition && superpositionPath.length > 0 && (
          <path
            d={buildPath(
              superpositionPath.map((point) => ({
                x: xScale(point.x),
                y: yScale(point.y),
              })),
            )}
            fill="none"
            stroke={spec.superposition?.color ?? "#0F172A"}
            strokeWidth={2.5}
            strokeDasharray="6 4"
          />
        )}
      </svg>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600">
        {spec.waves.map((wave) => (
          <div key={wave.id} className="flex items-center gap-2">
            <span
              className="h-2 w-6 rounded-full"
              style={{ backgroundColor: wave.color ?? "#2563EB" }}
            />
            <span>
              {wave.label ?? wave.id}: A={wave.amplitude}, f={wave.frequency},
              φ={wave.phase ?? 0}
            </span>
          </div>
        ))}
        {showSuperposition && (
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-6 rounded-full border border-slate-400"
              style={{ backgroundColor: spec.superposition?.color ?? "#0F172A" }}
            />
            <span>{spec.superposition?.label ?? "Superposición"}</span>
          </div>
        )}
      </div>
    </div>
  );
}
