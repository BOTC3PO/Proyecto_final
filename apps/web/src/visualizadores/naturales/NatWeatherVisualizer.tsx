import type { NatWeatherSpec } from "../types";

type NatWeatherVisualizerProps = {
  spec: NatWeatherSpec;
};

const VIEW_WIDTH = 560;
const VIEW_HEIGHT = 280;

// Each widget occupies a 100px-wide column, centered in its section
const WIDGET_COLS = 5;
const COL_WIDTH = VIEW_WIDTH / WIDGET_COLS; // 112px each
const WIDGET_CX = (col: number) => COL_WIDTH * col + COL_WIDTH / 2;

const SEASON_LABELS: Record<string, string> = {
  verano: "Verano",
  otono: "Otoño",
  invierno: "Invierno",
  primavera: "Primavera",
};

// ── Temperature thermometer ──────────────────────────────────────────────────
function Thermometer({ value }: { value: number }) {
  const cx = WIDGET_CX(0);
  const tubeTop = 50;
  const tubeBottom = 200;
  const tubeHeight = tubeBottom - tubeTop;
  const tubeWidth = 18;
  const bulbR = 14;
  const bulbCy = tubeBottom + bulbR - 4;

  // clamp -20..50
  const clamped = Math.max(-20, Math.min(50, value));
  const ratio = (clamped + 20) / 70; // 0..1
  const fillHeight = tubeHeight * ratio;
  const fillTop = tubeBottom - fillHeight;

  // color: cold=blue, warm=red
  const isCold = value <= 10;
  const isWarm = value >= 30;
  const fillColor = isCold ? "#3b82f6" : isWarm ? "#ef4444" : "#f97316";

  return (
    <g>
      {/* Tube outline */}
      <rect
        x={cx - tubeWidth / 2}
        y={tubeTop}
        width={tubeWidth}
        height={tubeHeight}
        rx={tubeWidth / 2}
        fill="#f1f5f9"
        stroke="#cbd5e1"
        strokeWidth={1.5}
      />
      {/* Tube fill */}
      <rect
        x={cx - tubeWidth / 2 + 3}
        y={fillTop}
        width={tubeWidth - 6}
        height={fillHeight}
        rx={4}
        fill={fillColor}
        clipPath={`url(#thermo-clip-${Math.round(value)})`}
      />
      <clipPath id={`thermo-clip-${Math.round(value)}`}>
        <rect
          x={cx - tubeWidth / 2}
          y={tubeTop}
          width={tubeWidth}
          height={tubeHeight}
          rx={tubeWidth / 2}
        />
      </clipPath>
      {/* Bulb */}
      <circle cx={cx} cy={bulbCy} r={bulbR} fill={fillColor} stroke="#cbd5e1" strokeWidth={1.5} />
      {/* Scale ticks */}
      {[-20, 0, 20, 40].map((tick) => {
        const tr = (tick + 20) / 70;
        const ty = tubeBottom - tubeHeight * tr;
        return (
          <g key={tick}>
            <line x1={cx + tubeWidth / 2} y1={ty} x2={cx + tubeWidth / 2 + 6} y2={ty} stroke="#94a3b8" strokeWidth={1} />
            <text x={cx + tubeWidth / 2 + 9} y={ty} dominantBaseline="middle" fontSize={8} fill="#94a3b8">
              {tick}°
            </text>
          </g>
        );
      })}
      {/* Value label */}
      <text x={cx} y={tubeBottom + bulbR * 2 + 12} textAnchor="middle" fontSize={11} fontWeight="600" fill="#1e293b">
        {value.toFixed(1)}°C
      </text>
      <text x={cx} y={tubeTop - 10} textAnchor="middle" fontSize={9} fill="#64748b">
        Temperatura
      </text>
    </g>
  );
}

// ── Humidity arc gauge ───────────────────────────────────────────────────────
function HumidityGauge({ value }: { value: number }) {
  const cx = WIDGET_CX(1);
  const cy = 145;
  const r = 52;
  const startAngle = -210;
  const endAngle = 30;
  const totalArc = endAngle - startAngle; // 240 deg

  const clampedVal = Math.max(0, Math.min(100, value));
  const fillFrac = clampedVal / 100;

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const arcPoint = (deg: number) => ({
    x: cx + r * Math.cos(toRad(deg)),
    y: cy + r * Math.sin(toRad(deg)),
  });

  const describeArc = (startDeg: number, endDeg: number) => {
    const s = arcPoint(startDeg);
    const e = arcPoint(endDeg);
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
  };

  const fillEndDeg = startAngle + totalArc * fillFrac;

  return (
    <g>
      {/* Track */}
      <path
        d={describeArc(startAngle, endAngle)}
        fill="none"
        stroke="#e2e8f0"
        strokeWidth={12}
        strokeLinecap="round"
      />
      {/* Fill */}
      {clampedVal > 0 && (
        <path
          d={describeArc(startAngle, fillEndDeg)}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={12}
          strokeLinecap="round"
        />
      )}
      {/* Value */}
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize={16} fontWeight="700" fill="#1e293b">
        {value.toFixed(0)}%
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fontSize={8} fill="#64748b">
        Humedad
      </text>
      {/* Labels */}
      <text x={arcPoint(startAngle).x - 4} y={arcPoint(startAngle).y + 4} fontSize={7} fill="#94a3b8" textAnchor="end">
        0
      </text>
      <text x={arcPoint(endAngle).x + 4} y={arcPoint(endAngle).y + 4} fontSize={7} fill="#94a3b8">
        100
      </text>
      <text x={cx} y={cy + 56} textAnchor="middle" fontSize={9} fill="#64748b">
        Humedad
      </text>
    </g>
  );
}

// ── Pressure horizontal bar ──────────────────────────────────────────────────
function PressureBar({ value }: { value: number }) {
  const cx = WIDGET_CX(2);
  const cy = 130;
  const barW = 80;
  const barH = 18;
  const barX = cx - barW / 2;

  const clamped = Math.max(950, Math.min(1050, value));
  const frac = (clamped - 950) / 100;
  const fillW = barW * frac;

  const markerX = barX + fillW;

  // color: low=blue, normal=green, high=orange
  const barColor = value < 990 ? "#3b82f6" : value > 1020 ? "#f97316" : "#22c55e";

  return (
    <g>
      <text x={cx} y={cy - 44} textAnchor="middle" fontSize={9} fill="#64748b">
        Presión
      </text>
      {/* Scale labels */}
      <text x={barX} y={cy - 32} fontSize={7} fill="#94a3b8">950</text>
      <text x={barX + barW} y={cy - 32} textAnchor="end" fontSize={7} fill="#94a3b8">1050</text>
      <text x={cx} y={cy - 32} textAnchor="middle" fontSize={7} fill="#94a3b8">1000</text>
      {/* Normal zone marker */}
      <line
        x1={barX + barW * 0.4}
        y1={cy - 28}
        x2={barX + barW * 0.7}
        y2={cy - 28}
        stroke="#22c55e"
        strokeWidth={3}
        strokeLinecap="round"
      />
      {/* Track */}
      <rect x={barX} y={cy - 26} width={barW} height={barH} rx={barH / 2} fill="#f1f5f9" stroke="#e2e8f0" strokeWidth={1} />
      {/* Fill */}
      {fillW > 0 && (
        <rect x={barX} y={cy - 26} width={fillW} height={barH} rx={barH / 2} fill={barColor} />
      )}
      {/* Marker line */}
      <line x1={markerX} y1={cy - 30} x2={markerX} y2={cy - 4} stroke="#1e293b" strokeWidth={2} strokeLinecap="round" />
      {/* Value */}
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize={11} fontWeight="600" fill="#1e293b">
        {value.toFixed(0)} hPa
      </text>
    </g>
  );
}

// ── Wind speed arc speedometer ───────────────────────────────────────────────
function WindSpeedometer({ value }: { value: number }) {
  const cx = WIDGET_CX(3);
  const cy = 160;
  const r = 52;
  const startAngle = -210;
  const totalArc = 240;

  const clamped = Math.max(0, Math.min(150, value));
  const frac = clamped / 150;

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const arcPoint = (deg: number) => ({
    x: cx + r * Math.cos(toRad(deg)),
    y: cy + r * Math.sin(toRad(deg)),
  });

  const describeArc = (startDeg: number, sweepDeg: number) => {
    const endDeg = startDeg + sweepDeg;
    const s = arcPoint(startDeg);
    const e = arcPoint(endDeg);
    const largeArc = sweepDeg > 180 ? 1 : 0;
    return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
  };

  const needleAngle = startAngle + totalArc * frac;
  const needleEnd = arcPoint(needleAngle);
  const windColor = value < 30 ? "#22c55e" : value < 80 ? "#f97316" : "#ef4444";

  return (
    <g>
      <text x={cx} y={cy - r - 14} textAnchor="middle" fontSize={9} fill="#64748b">
        Viento
      </text>
      {/* Track */}
      <path d={describeArc(startAngle, totalArc)} fill="none" stroke="#e2e8f0" strokeWidth={10} strokeLinecap="round" />
      {/* Fill */}
      {frac > 0 && (
        <path d={describeArc(startAngle, totalArc * frac)} fill="none" stroke={windColor} strokeWidth={10} strokeLinecap="round" />
      )}
      {/* Zone ticks */}
      {[0, 30, 80, 150].map((tick) => {
        const tf = tick / 150;
        const tDeg = startAngle + totalArc * tf;
        const inner = { x: cx + (r - 14) * Math.cos(toRad(tDeg)), y: cy + (r - 14) * Math.sin(toRad(tDeg)) };
        const outer = { x: cx + (r - 6) * Math.cos(toRad(tDeg)), y: cy + (r - 6) * Math.sin(toRad(tDeg)) };
        return (
          <line key={tick} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="#94a3b8" strokeWidth={1} />
        );
      })}
      {/* Needle */}
      <line
        x1={cx}
        y1={cy}
        x2={needleEnd.x}
        y2={needleEnd.y}
        stroke="#1e293b"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={4} fill="#1e293b" />
      {/* Value */}
      <text x={cx} y={cy + 14} textAnchor="middle" fontSize={10} fontWeight="600" fill="#1e293b">
        {value.toFixed(0)} km/h
      </text>
      {/* Scale labels */}
      <text x={arcPoint(startAngle).x - 2} y={arcPoint(startAngle).y + 4} fontSize={7} fill="#94a3b8" textAnchor="end">0</text>
      <text x={arcPoint(startAngle + totalArc).x + 2} y={arcPoint(startAngle + totalArc).y + 4} fontSize={7} fill="#94a3b8">150</text>
    </g>
  );
}

// ── Precipitation water drop column ─────────────────────────────────────────
function PrecipitationDrop({ value }: { value: number }) {
  const cx = WIDGET_CX(4);
  const dropTopY = 50;
  const dropBottomY = 200;
  const dropH = dropBottomY - dropTopY;
  const dropW = 40;

  const clamped = Math.max(0, Math.min(200, value));
  const frac = clamped / 200;
  const fillHeight = dropH * frac;
  const fillTop = dropBottomY - fillHeight;

  // Water drop SVG path (centered at cx, from dropTopY to dropBottomY)
  const halfW = dropW / 2;
  // Teardrop shape: circle bottom + pointed top
  const circleR = halfW;
  const circleCy = dropBottomY - circleR;
  const tipY = dropTopY + 10;

  const dropPath = [
    `M ${cx} ${tipY}`,
    `C ${cx - halfW * 0.6} ${tipY + 30} ${cx - halfW} ${circleCy - circleR * 0.6} ${cx - halfW} ${circleCy}`,
    `A ${circleR} ${circleR} 0 0 0 ${cx + halfW} ${circleCy}`,
    `C ${cx + halfW} ${circleCy - circleR * 0.6} ${cx + halfW * 0.6} ${tipY + 30} ${cx} ${tipY}`,
    "Z",
  ].join(" ");

  const fillClipId = `drop-fill-${Math.round(value)}`;

  return (
    <g>
      <text x={cx} y={dropTopY - 10} textAnchor="middle" fontSize={9} fill="#64748b">
        Precipitación
      </text>
      {/* Drop outline */}
      <path d={dropPath} fill="#f1f5f9" stroke="#93c5fd" strokeWidth={1.5} />
      {/* Clip for fill */}
      <defs>
        <clipPath id={fillClipId}>
          <path d={dropPath} />
        </clipPath>
      </defs>
      {/* Fill */}
      {fillHeight > 0 && (
        <rect
          x={cx - halfW}
          y={fillTop}
          width={dropW}
          height={fillHeight + circleR}
          fill="#3b82f6"
          clipPath={`url(#${fillClipId})`}
          opacity={0.8}
        />
      )}
      {/* Scale ticks on the right */}
      {[0, 50, 100, 150, 200].map((tick) => {
        const tf = tick / 200;
        const ty = dropBottomY - dropH * tf;
        return (
          <g key={tick}>
            <line x1={cx + halfW + 2} y1={ty} x2={cx + halfW + 8} y2={ty} stroke="#cbd5e1" strokeWidth={1} />
            <text x={cx + halfW + 11} y={ty} dominantBaseline="middle" fontSize={7} fill="#94a3b8">
              {tick}
            </text>
          </g>
        );
      })}
      {/* Value label */}
      <text x={cx} y={dropBottomY + 22} textAnchor="middle" fontSize={11} fontWeight="600" fill="#1e293b">
        {value.toFixed(1)} mm
      </text>
    </g>
  );
}

export default function NatWeatherVisualizer({ spec }: NatWeatherVisualizerProps) {
  const { temperature, humidity, pressure, windSpeed, precipitation } = spec.variables;
  const seasonLabel = SEASON_LABELS[spec.season] ?? spec.season;
  const title = spec.title ?? "Estado del Tiempo";
  const locationLabel = spec.location ? ` — ${spec.location}` : "";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Ciencias Naturales
          </p>
          <h2 className="text-xl font-semibold text-slate-900">
            {title}{locationLabel}
          </h2>
          {spec.description && (
            <p className="mt-1 text-sm text-slate-600">{spec.description}</p>
          )}
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          {seasonLabel}
        </span>
      </header>

      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="w-full"
        role="img"
        aria-label={title}
      >
        {/* Background */}
        <rect width={VIEW_WIDTH} height={VIEW_HEIGHT} fill="#f8fafc" rx={8} />

        {/* Season label at top center */}
        <text
          x={VIEW_WIDTH / 2}
          y={18}
          textAnchor="middle"
          fontSize={11}
          fontWeight="600"
          fill="#475569"
        >
          {seasonLabel}
        </text>

        {/* Column dividers */}
        {[1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={COL_WIDTH * i}
            y1={28}
            x2={COL_WIDTH * i}
            y2={VIEW_HEIGHT - 10}
            stroke="#e2e8f0"
            strokeWidth={1}
          />
        ))}

        {/* Widgets */}
        <Thermometer value={temperature} />
        <HumidityGauge value={humidity} />
        <PressureBar value={pressure} />
        <WindSpeedometer value={windSpeed} />
        <PrecipitationDrop value={precipitation} />
      </svg>

      {/* Active phenomena list */}
      {spec.phenomena && spec.phenomena.filter((p) => p.active).length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {spec.phenomena
            .filter((p) => p.active)
            .map((p) => (
              <span
                key={p.id}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
              >
                {p.name}
              </span>
            ))}
        </div>
      )}
    </section>
  );
}
