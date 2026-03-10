import { useEffect, useRef, useState, useMemo } from "react";
import { geoMercator, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
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
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  return `rgb(${c(r1 + (r2 - r1) * t)},${c(g1 + (g2 - g1) * t)},${c(b1 + (b2 - b1) * t)})`;
}

function formatValue(v: number, unit?: string): string {
  let s: string;
  if (Math.abs(v) >= 1_000_000) s = `${(v / 1_000_000).toFixed(1)}M`;
  else if (Math.abs(v) >= 1_000) s = `${(v / 1_000).toFixed(1)}k`;
  else if (!Number.isInteger(v)) s = v.toFixed(2);
  else s = String(v);
  return unit ? `${s} ${unit}` : s;
}

// ── Fallback block chart (no coordinates) ─────────────────────────────────────

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
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelectedId(region.id)}
              className={`rounded-xl p-3 text-left transition-shadow ${
                selectedId === region.id ? "ring-2 ring-slate-700 shadow-md" : "hover:shadow-sm"
              }`}
              style={{ backgroundColor: fillColor }}
            >
              <p className="text-xs font-bold text-white drop-shadow">{region.label}</p>
              <p className="text-[11px] text-white/90 drop-shadow mt-0.5">{formatValue(region.value, unit)}</p>
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2 pt-1">
        <span className="text-[11px] text-slate-400 font-mono">{formatValue(safeMin, unit)}</span>
        <div className="flex-1 h-2 rounded-full" style={{ background: `linear-gradient(to right, ${colorFrom}, ${colorTo})` }} />
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

// ── Real geographic map ───────────────────────────────────────────────────────

const LAND_URL = "/api/maps/physical/earth/land_110m.topo.json";

type TopoJson = {
  type: "Topology";
  objects: Record<string, unknown>;
  arcs: number[][][];
  transform?: { scale: [number, number]; translate: [number, number] };
};

const MAP_W = 560;
const MAP_H = 320;

function ChoroplethMap({ spec }: Props) {
  const { regions = [], scale, variable, unit, title, description } = spec;
  const [topo, setTopo] = useState<TopoJson | null>(null);
  const [topoError, setTopoError] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(regions[0]?.id ?? null);
  const [zoom, setZoom] = useState(1);
  const svgRef = useRef<SVGSVGElement>(null);

  const safeMin = scale?.min ?? 0;
  const safeMax = scale?.max ?? 1;
  const colorFrom = scale?.colors?.[0] ?? "#bfdbfe";
  const colorTo = scale?.colors?.[1] ?? "#1d4ed8";
  const range = safeMax - safeMin || 1;

  useEffect(() => {
    let cancelled = false;
    fetch(LAND_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<TopoJson>;
      })
      .then((data) => { if (!cancelled) setTopo(data); })
      .catch(() => { if (!cancelled) setTopoError(true); });
    return () => { cancelled = true; };
  }, []);

  // Build projection centered on regions
  const regionsWithCoords = regions.filter((r) => r.coordinates);

  const projection = useMemo(() => {
    if (regionsWithCoords.length === 0) return geoMercator().scale(80).translate([MAP_W / 2, MAP_H / 1.5]);
    const lats = regionsWithCoords.map((r) => r.coordinates![0]);
    const lngs = regionsWithCoords.map((r) => r.coordinates![1]);
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    const latSpan = Math.max(20, Math.max(...lats) - Math.min(...lats));
    const lngSpan = Math.max(20, Math.max(...lngs) - Math.min(...lngs));
    const baseScale = Math.min(MAP_W / lngSpan, MAP_H / latSpan) * 50;
    return geoMercator()
      .center([centerLng, centerLat])
      .scale(baseScale * zoom)
      .translate([MAP_W / 2, MAP_H / 2]);
  }, [regionsWithCoords, zoom]);

  const pathGen = useMemo(() => geoPath(projection), [projection]);

  // Convert TopoJSON land to SVG path
  const landPath = useMemo(() => {
    if (!topo) return null;
    try {
      const firstObject = Object.values(topo.objects)[0];
      const geo = feature(topo as Parameters<typeof feature>[0], firstObject as Parameters<typeof feature>[1]);
      return pathGen(geo as GeoPermissibleObjects) ?? null;
    } catch {
      return null;
    }
  }, [topo, pathGen]);

  // Project region markers
  const projectedRegions = useMemo(() =>
    regionsWithCoords.map((r) => {
      const [lat, lng] = r.coordinates!;
      const pt = projection([lng, lat]);
      const t = Math.max(0, Math.min(1, (r.value - safeMin) / range));
      return {
        ...r,
        px: pt?.[0] ?? 0,
        py: pt?.[1] ?? 0,
        fillColor: r.color ?? lerpColor(colorFrom, colorTo, t),
        t,
      };
    }),
    [regionsWithCoords, projection, safeMin, range, colorFrom, colorTo],
  );

  const selected = regions.find((r) => r.id === selectedId) ?? null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
      {(title || description) && (
        <header>
          {title && <h2 className="text-base font-semibold text-slate-900">{title}</h2>}
          {description && <p className="text-sm text-slate-500">{description}</p>}
        </header>
      )}

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          {variable}{unit ? ` (${unit})` : ""}
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.3, +(z - 0.25).toFixed(2)))}
            className="rounded border border-slate-200 px-2 py-0.5 text-xs text-slate-500 hover:bg-slate-50"
          >−</button>
          <span className="text-[11px] text-slate-400 w-10 text-center">{zoom.toFixed(2)}×</span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(6, +(z + 0.25).toFixed(2)))}
            className="rounded border border-slate-200 px-2 py-0.5 text-xs text-slate-500 hover:bg-slate-50"
          >+</button>
        </div>
      </div>

      {/* SVG Map */}
      <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className="w-full"
          style={{ display: "block" }}
        >
          {/* Ocean background */}
          <rect width={MAP_W} height={MAP_H} fill="#cdd9e8" />

          {/* Land from TopoJSON */}
          {landPath && (
            <path d={landPath} fill="#e8ede4" stroke="#b0bec5" strokeWidth={0.5} />
          )}
          {!topo && !topoError && (
            <text x={MAP_W / 2} y={MAP_H / 2} textAnchor="middle" fontSize={11} fill="#94a3b8">
              Cargando mapa…
            </text>
          )}
          {topoError && (
            <text x={MAP_W / 2} y={MAP_H / 2} textAnchor="middle" fontSize={11} fill="#ef4444">
              No se pudo cargar el mapa base
            </text>
          )}

          {/* Region markers */}
          {projectedRegions.map((r) => {
            const isSelected = r.id === selectedId;
            const radius = isSelected ? 14 : 10;
            return (
              <g key={r.id} style={{ cursor: "pointer" }} onClick={() => setSelectedId(r.id)}>
                {/* Shadow */}
                <circle cx={r.px + 1} cy={r.py + 1} r={radius} fill="rgba(0,0,0,0.18)" />
                {/* Fill */}
                <circle cx={r.px} cy={r.py} r={radius} fill={r.fillColor} stroke={isSelected ? "#1e293b" : "#fff"} strokeWidth={isSelected ? 2.5 : 1.5} />
                {/* Label */}
                <text
                  x={r.px}
                  y={r.py + 3.5}
                  textAnchor="middle"
                  fontSize={isSelected ? 7 : 6}
                  fontWeight="700"
                  fill="#fff"
                  style={{ pointerEvents: "none", textShadow: "0 0 2px rgba(0,0,0,0.8)" }}
                >
                  {r.label.split(" ").slice(-1)[0].slice(0, 4).toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>
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
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-3">
          <span
            className="inline-block w-4 h-4 rounded-full flex-shrink-0 border border-white shadow"
            style={{
              backgroundColor: selected.color ?? lerpColor(
                colorFrom, colorTo,
                Math.max(0, Math.min(1, (selected.value - safeMin) / range)),
              ),
            }}
          />
          <div>
            <p className="text-sm font-semibold text-slate-800">{selected.label}</p>
            <p className="text-xs text-slate-500">{variable}: <span className="font-medium text-slate-700">{formatValue(selected.value, unit)}</span>
              {selected.coordinates && (
                <span className="ml-2 text-slate-400">· {selected.coordinates[0].toFixed(2)}°, {selected.coordinates[1].toFixed(2)}°</span>
              )}
            </p>
          </div>
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
                selectedId === region.id ? "border-slate-700 bg-slate-50" : "border-slate-100 hover:border-slate-300"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: fillColor }} />
              <span className="text-slate-700 font-medium truncate">{region.label}</span>
              <span className="ml-auto text-slate-400 shrink-0">{formatValue(region.value)}</span>
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
  if (hasCoordinates) return <ChoroplethMap spec={spec} />;
  return <ChoroplethBlocks spec={spec} />;
}
