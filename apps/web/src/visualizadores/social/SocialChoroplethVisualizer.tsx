import { useState, useMemo } from "react";
import type { SocialChoroplethSpec } from "../types";

type Props = { spec: SocialChoroplethSpec };

// ── Color helpers ─────────────────────────────────────────────────────────────

function parseHex(hex: string): [number, number, number] {
  const s = hex.replace("#", "");
  const r = parseInt(s.slice(0, 2), 16);
  const g = parseInt(s.slice(2, 4), 16);
  const b = parseInt(s.slice(4, 6), 16);
  return [isNaN(r) ? 0 : r, isNaN(g) ? 0 : g, isNaN(b) ? 0 : b];
}

function lerpColor(hex1: string, hex2: string, t: number): string {
  const [r1, g1, b1] = parseHex(hex1);
  const [r2, g2, b2] = parseHex(hex2);
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  return `rgb(${clamp(r1 + (r2 - r1) * t)},${clamp(g1 + (g2 - g1) * t)},${clamp(b1 + (b2 - b1) * t)})`;
}

function formatValue(v: number, unit?: string): string {
  let s: string;
  if (Math.abs(v) >= 1_000_000) s = `${(v / 1_000_000).toFixed(1)}M`;
  else if (Math.abs(v) >= 1_000) s = `${(v / 1_000).toFixed(1)}k`;
  else if (!Number.isInteger(v)) s = v.toFixed(2);
  else s = String(v);
  return unit ? `${s} ${unit}` : s;
}

// ── Region block fallback (no coordinates) ────────────────────────────────────

function ChoroplethBlocks({ spec }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(spec.regions[0]?.id ?? null);
  const { regions = [], scale, variable, unit, title, description } = spec;
  const safeMin = scale?.min ?? 0;
  const safeMax = scale?.max ?? 1;
  const colorFrom = scale?.colors?.[0] ?? "#bfdbfe";
  const colorTo = scale?.colors?.[1] ?? "#1d4ed8";
  const range = safeMax - safeMin || 1;

  const selected = regions.find((r) => r.id === selectedId) ?? null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-4">
      {(title || description) && (
        <header>
          {title && <h2 className="text-base font-semibold text-slate-900">{title}</h2>}
          {description && <p className="text-sm text-slate-500">{description}</p>}
        </header>
      )}
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        {variable}{unit ? ` (${unit})` : ""}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {regions.map((region) => {
          const t = Math.max(0, Math.min(1, (region.value - safeMin) / range));
          const fillColor = region.color ?? lerpColor(colorFrom, colorTo, t);
          const isSelected = selectedId === region.id;
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelectedId(region.id)}
              className={`rounded-xl p-3 text-left transition-shadow ${
                isSelected ? "ring-2 ring-slate-700 shadow-md" : "hover:shadow-sm"
              }`}
              style={{ backgroundColor: fillColor }}
            >
              <p className="text-xs font-bold text-white drop-shadow">{region.label}</p>
              <p className="text-[11px] text-white/90 drop-shadow mt-0.5">
                {formatValue(region.value, unit)}
              </p>
            </button>
          );
        })}
      </div>
      {/* Color scale */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-[11px] text-slate-400 font-mono">{formatValue(safeMin, unit)}</span>
        <div
          className="flex-1 h-2 rounded-full"
          style={{ background: `linear-gradient(to right, ${colorFrom}, ${colorTo})` }}
        />
        <span className="text-[11px] text-slate-400 font-mono">{formatValue(safeMax, unit)}</span>
      </div>
      {selected && (
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm">
          <p className="font-semibold text-slate-800">{selected.label}</p>
          <p className="text-slate-500 text-xs mt-0.5">{variable}: {formatValue(selected.value, unit)}</p>
        </div>
      )}
    </section>
  );
}

// ── Geographic map canvas (when coordinates are present) ──────────────────────

function ChoroplethMap({ spec }: Props) {
  const { regions = [], scale, variable, unit, title, description } = spec;
  const [selectedId, setSelectedId] = useState<string | null>(regions[0]?.id ?? null);
  const [zoom, setZoom] = useState(1);

  const safeMin = scale?.min ?? 0;
  const safeMax = scale?.max ?? 1;
  const colorFrom = scale?.colors?.[0] ?? "#bfdbfe";
  const colorTo = scale?.colors?.[1] ?? "#1d4ed8";
  const range = safeMax - safeMin || 1;

  // Compute geographic bounds for projection
  const bounds = useMemo(() => {
    const withCoords = regions.filter((r) => r.coordinates);
    if (withCoords.length === 0) return { minLat: -1, maxLat: 1, minLng: -1, maxLng: 1 };
    const lats = withCoords.map((r) => r.coordinates![0]);
    const lngs = withCoords.map((r) => r.coordinates![1]);
    const padding = 5;
    return {
      minLat: Math.min(...lats) - padding,
      maxLat: Math.max(...lats) + padding,
      minLng: Math.min(...lngs) - padding,
      maxLng: Math.max(...lngs) + padding,
    };
  }, [regions]);

  function project(lat: number, lng: number): { top: string; left: string } {
    const latRange = bounds.maxLat - bounds.minLat || 1;
    const lngRange = bounds.maxLng - bounds.minLng || 1;
    const latRatio = (lat - bounds.minLat) / latRange;
    const lngRatio = (lng - bounds.minLng) / lngRange;
    const top = Math.max(4, Math.min(96, (1 - latRatio) * 100));
    const left = Math.max(4, Math.min(96, lngRatio * 100));
    return { top: `${top}%`, left: `${left}%` };
  }

  const selected = regions.find((r) => r.id === selectedId) ?? null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-4">
      {(title || description) && (
        <header>
          {title && <h2 className="text-base font-semibold text-slate-900">{title}</h2>}
          {description && <p className="text-sm text-slate-500">{description}</p>}
        </header>
      )}

      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          {variable}{unit ? ` (${unit})` : ""}
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.6, z - 0.2))}
            className="rounded border border-slate-200 px-2 py-0.5 text-xs text-slate-500 hover:bg-slate-50"
          >
            −
          </button>
          <span className="text-[11px] text-slate-400 w-10 text-center">{zoom.toFixed(1)}×</span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
            className="rounded border border-slate-200 px-2 py-0.5 text-xs text-slate-500 hover:bg-slate-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Map canvas */}
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200"
        style={{
          height: 280,
          background: "linear-gradient(135deg, #bfdbfe 0%, #dbeafe 40%, #e0f2fe 70%, #cffafe 100%)",
        }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20 pointer-events-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-slate-400" />
          ))}
        </div>
        {/* Land texture suggestion */}
        <div
          className="absolute inset-4 rounded-xl opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 45% 55%, #a7f3d0 0%, transparent 60%)" }}
        />

        {/* Markers */}
        {regions
          .filter((r) => r.coordinates)
          .map((region) => {
            const t = Math.max(0, Math.min(1, (region.value - safeMin) / range));
            const fillColor = region.color ?? lerpColor(colorFrom, colorTo, t);
            const { top, left } = project(region.coordinates![0], region.coordinates![1]);
            const isSelected = selectedId === region.id;
            const size = isSelected ? 44 : 36;

            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedId(region.id)}
                title={`${region.label}: ${formatValue(region.value, unit)}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center font-bold transition-all duration-200 rounded-full border-2 shadow-md focus:outline-none"
                style={{
                  top,
                  left,
                  width: size * zoom,
                  height: size * zoom,
                  backgroundColor: fillColor,
                  borderColor: isSelected ? "#1e293b" : "rgba(255,255,255,0.7)",
                  fontSize: Math.max(7, 8 * zoom),
                  zIndex: isSelected ? 10 : 1,
                }}
                aria-label={`${region.label}: ${formatValue(region.value, unit)}`}
              >
                <span
                  className="text-white leading-none text-center px-0.5"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                >
                  {region.label.split(" ")[0]}
                </span>
              </button>
            );
          })}
      </div>

      {/* Color scale legend */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-slate-400 font-mono">{formatValue(safeMin, unit)}</span>
        <div
          className="flex-1 h-2.5 rounded-full"
          style={{ background: `linear-gradient(to right, ${colorFrom}, ${colorTo})` }}
        />
        <span className="text-[11px] text-slate-400 font-mono">{formatValue(safeMax, unit)}</span>
      </div>

      {/* Selected region detail */}
      {selected && (
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full flex-shrink-0"
              style={{
                backgroundColor: selected.color ?? lerpColor(
                  colorFrom,
                  colorTo,
                  Math.max(0, Math.min(1, (selected.value - safeMin) / range)),
                ),
              }}
            />
            <p className="text-sm font-semibold text-slate-800">{selected.label}</p>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {variable}: <span className="font-medium text-slate-700">{formatValue(selected.value, unit)}</span>
          </p>
          {selected.coordinates && (
            <p className="text-[11px] text-slate-400 mt-0.5">
              Lat {selected.coordinates[0].toFixed(1)}, Lng {selected.coordinates[1].toFixed(1)}
            </p>
          )}
        </div>
      )}

      {/* Marker list */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {regions.map((region) => {
          const t = Math.max(0, Math.min(1, (region.value - safeMin) / range));
          const fillColor = region.color ?? lerpColor(colorFrom, colorTo, t);
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelectedId(region.id)}
              className={`flex items-center gap-1.5 rounded-lg border px-2 py-1.5 text-xs text-left transition-colors ${
                selectedId === region.id
                  ? "border-slate-700 bg-slate-50"
                  : "border-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: fillColor }}
              />
              <span className="text-slate-700 font-medium truncate">{region.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function SocialChoroplethVisualizer({ spec }: Props) {
  const hasCoordinates = spec.regions.some((r) => r.coordinates);
  if (hasCoordinates) {
    return <ChoroplethMap spec={spec} />;
  }
  return <ChoroplethBlocks spec={spec} />;
}
