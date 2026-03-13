import { useEffect, useMemo, useRef, useState } from "react";
import { topologyToFeatures, type TopologyLike, type CountryFeature } from "../../lib/maps/topojson-lite";
import type { SocialChoroplethSpec } from "../types";

type Props = {
  spec: SocialChoroplethSpec;
  onRegionsChange?: (regions: SocialChoroplethSpec["regions"]) => void;
};

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

// ── Mercator projection helper ────────────────────────────────────────────────
// Matches the math in lib/maps/svg-geo-lite so markers align with land paths.

function mercatorY(lat: number): number {
  const clamped = Math.max(-85, Math.min(85, lat));
  return Math.log(Math.tan(Math.PI / 4 + (clamped * Math.PI) / 360));
}

function buildProjection(
  features: CountryFeature[],
  width: number,
  height: number,
) {
  // Collect all points from the land features to compute bounds
  const lons: number[] = [];
  const lats: number[] = [];
  for (const f of features) {
    const rings =
      f.geometry.type === "Polygon"
        ? f.geometry.coordinates
        : f.geometry.coordinates.flat();
    for (const ring of rings) {
      for (const pt of ring as number[][]) {
        if (!pt || pt.length < 2) continue;
        lons.push(pt[0]);
        lats.push(pt[1]);
      }
    }
  }
  const minLon = lons.reduce((a, b) => Math.min(a, b), Infinity);
  const maxLon = lons.reduce((a, b) => Math.max(a, b), -Infinity);
  const minLat = Math.max(-85, lats.reduce((a, b) => Math.min(a, b), Infinity));
  const maxLat = Math.min(85, lats.reduce((a, b) => Math.max(a, b), -Infinity));
  const minMercY = mercatorY(minLat);
  const maxMercY = mercatorY(maxLat);

  const projectPoint = (lon: number, lat: number): [number, number] => {
    const x = ((lon - minLon) / (maxLon - minLon)) * width;
    const y = ((maxMercY - mercatorY(lat)) / (maxMercY - minMercY)) * height;
    return [x, y];
  };

  const ringToPath = (ring: number[][]) => {
    const cmds = ring.map((pt, i) => {
      const [x, y] = projectPoint(pt[0], pt[1]);
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    });
    return `${cmds.join(" ")} Z`;
  };

  const featurePath = (feature: CountryFeature) => {
    if (feature.geometry.type === "Polygon") {
      return feature.geometry.coordinates.map((r) => ringToPath(r as number[][])).join(" ");
    }
    return feature.geometry.coordinates
      .map((poly) => poly.map((r) => ringToPath(r as number[][])).join(" "))
      .join(" ");
  };

  return { projectPoint, featurePath };
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

// ── Geographic map (same approach as GeografiaMapaSelector) ───────────────────

const LAND_URL = "/api/maps/political/earth/countries_110m.topo.json";
const MAP_W = 560;
const MAP_H = 320;

type Viewbox = { x: number; y: number; w: number; h: number };
const INITIAL_VB: Viewbox = { x: 0, y: 0, w: MAP_W, h: MAP_H };

function ChoroplethMap({ spec, onRegionsChange }: Props) {
  const { regions = [], scale, variable, unit, title, description } = spec;
  const [landFeatures, setLandFeatures] = useState<CountryFeature[]>([]);
  const [mapStatus, setMapStatus] = useState<"loading" | "ready" | "error">("loading");
  const [selectedId, setSelectedId] = useState<string | null>(regions[0]?.id ?? null);

  // Pan/zoom state
  const [vb, setVb] = useState<Viewbox>(INITIAL_VB);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{ startX: number; startY: number; startVb: Viewbox } | null>(null);
  const dragDeltaRef = useRef(0);
  const isDragging = useRef(false);

  const safeMin = scale?.min ?? 0;
  const safeMax = scale?.max ?? 1;
  const colorFrom = scale?.colors?.[0] ?? "#bfdbfe";
  const colorTo = scale?.colors?.[1] ?? "#1d4ed8";
  const range = safeMax - safeMin || 1;

  // Build ISO A3 → {region, fillColor} lookup for polygon coloring
  const isoRegionMap = useMemo(() => {
    const map = new Map<string, { region: (typeof regions)[0]; fillColor: string }>();
    regions.forEach((r) => {
      if (r.isoA3) {
        const t = Math.max(0, Math.min(1, (r.value - safeMin) / range));
        map.set(r.isoA3, { region: r, fillColor: r.color ?? lerpColor(colorFrom, colorTo, t) });
      }
    });
    return map;
  }, [regions, safeMin, range, colorFrom, colorTo]);

  useEffect(() => {
    let active = true;
    setMapStatus("loading");
    fetch(LAND_URL)
      .then((r) => {
        // HTTP 304 (Not Modified) means the browser will serve the cached copy —
        // treat it as valid. Only reject on genuine error statuses.
        if (!r.ok && r.status !== 304) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<TopologyLike>;
      })
      .then((topo) => {
        if (!active) return;
        setLandFeatures(topologyToFeatures(topo));
        setMapStatus("ready");
      })
      .catch((err) => {
        if (!active) return;
        console.error("[ChoroplethMap] Error al cargar el mapa base:", err);
        setMapStatus("error");
      });
    return () => { active = false; };
  }, []);

  // Non-passive wheel event for zoom centered at cursor
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      setVb((prev) => {
        const factor = e.deltaY > 0 ? 1.15 : 1 / 1.15;
        const rect = el.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * prev.w + prev.x;
        const my = ((e.clientY - rect.top) / rect.height) * prev.h + prev.y;
        const newW = Math.min(MAP_W, Math.max(MAP_W / 20, prev.w * factor));
        const newH = Math.min(MAP_H, Math.max(MAP_H / 20, prev.h * factor));
        return {
          x: mx - (mx - prev.x) * (newW / prev.w),
          y: my - (my - prev.y) * (newH / prev.h),
          w: newW,
          h: newH,
        };
      });
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  // Build projection and path generator from land features
  const { projectPoint, featurePath } = useMemo(() => {
    if (landFeatures.length === 0) return { projectPoint: null, featurePath: null };
    return buildProjection(landFeatures, MAP_W, MAP_H);
  }, [landFeatures]);

  // Project region markers
  const projectedRegions = useMemo(() => {
    if (!projectPoint) return [];
    return regions
      .filter((r) => r.coordinates)
      .map((r) => {
        const [lat, lng] = r.coordinates!;
        const [px, py] = projectPoint(lng, lat);
        const t = Math.max(0, Math.min(1, (r.value - safeMin) / range));
        return { ...r, px, py, fillColor: r.color ?? lerpColor(colorFrom, colorTo, t) };
      });
  }, [regions, projectPoint, safeMin, range, colorFrom, colorTo]);

  const selected = regions.find((r) => r.id === selectedId) ?? null;

  // Pan handlers
  const onMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    dragRef.current = { startX: e.clientX, startY: e.clientY, startVb: vb };
    dragDeltaRef.current = 0;
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    const delta = Math.abs(dx) + Math.abs(dy);
    dragDeltaRef.current = Math.max(dragDeltaRef.current, delta);
    if (delta > 3) isDragging.current = true;
    const scaleX = dragRef.current.startVb.w / (svgRef.current?.clientWidth ?? MAP_W);
    const scaleY = dragRef.current.startVb.h / (svgRef.current?.clientHeight ?? MAP_H);
    setVb({
      ...dragRef.current.startVb,
      x: dragRef.current.startVb.x - dx * scaleX,
      y: dragRef.current.startVb.y - dy * scaleY,
    });
  };

  const onMouseUp = () => {
    dragRef.current = null;
  };

  // Zoom buttons
  const zoomBy = (factor: number) => {
    setVb((prev) => {
      const cx = prev.x + prev.w / 2;
      const cy = prev.y + prev.h / 2;
      const newW = Math.min(MAP_W, Math.max(MAP_W / 20, prev.w * factor));
      const newH = Math.min(MAP_H, Math.max(MAP_H / 20, prev.h * factor));
      return { x: cx - newW / 2, y: cy - newH / 2, w: newW, h: newH };
    });
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
      {(title || description) && (
        <header>
          {title && <h2 className="text-base font-semibold text-slate-900">{title}</h2>}
          {description && <p className="text-sm text-slate-500">{description}</p>}
        </header>
      )}

      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        {variable}{unit ? ` (${unit})` : ""}
      </p>

      {/* SVG Map */}
      <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
        {mapStatus === "loading" && (
          <div className="flex items-center justify-center h-48 text-sm text-slate-400">
            Cargando mapa…
          </div>
        )}

        {mapStatus === "error" && (
          <div className="flex items-center justify-center h-48 text-sm text-red-500">
            No se pudo cargar el mapa base. Verificá que la API esté ejecutándose.
          </div>
        )}

        {mapStatus === "ready" && featurePath && (
          <>
            <svg
              ref={svgRef}
              viewBox={`${vb.x.toFixed(2)} ${vb.y.toFixed(2)} ${vb.w.toFixed(2)} ${vb.h.toFixed(2)}`}
              className="w-full"
              style={{ display: "block", cursor: isDragging.current ? "grabbing" : "grab", userSelect: "none" }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              {/* Ocean */}
              <rect x={vb.x} y={vb.y} width={vb.w} height={vb.h} fill="#e8eef7" />

              {/* Land — colored if region has isoA3 matching this country */}
              {landFeatures.map((f, i) => {
                const iso = f.properties?.ISO_A3 as string | undefined;
                const match = iso ? isoRegionMap.get(iso) : undefined;
                const isSelected = match && selectedId === match.region.id;
                const canAdd = !match && !!onRegionsChange;
                return (
                  <path
                    key={i}
                    d={featurePath(f)}
                    fill={match ? match.fillColor : "#d1d5db"}
                    stroke={isSelected ? "#1e293b" : "#94a3b8"}
                    strokeWidth={isSelected ? 1.2 : 0.4}
                    style={{ cursor: (match || canAdd) ? "pointer" : "default" }}
                    onClick={() => {
                      if (dragDeltaRef.current >= 4) return;
                      if (match) {
                        setSelectedId(match.region.id);
                        return;
                      }
                      if (!onRegionsChange) return;
                      // Add country as new region
                      const name = (f.properties?.NAME_ES ?? f.properties?.NAME ?? iso ?? "País") as string;
                      const lat = (f.properties?.LABEL_Y ?? 0) as number;
                      const lng = (f.properties?.LABEL_X ?? 0) as number;
                      const newRegion = {
                        id: `r-${Date.now()}`,
                        label: name,
                        value: safeMin + range / 2,
                        coordinates: [lat, lng] as [number, number],
                        isoA3: iso,
                      };
                      onRegionsChange([...regions, newRegion]);
                      setSelectedId(newRegion.id);
                    }}
                  >
                    {match && (
                      <title>{match.region.label}: {formatValue(match.region.value, unit)}</title>
                    )}
                    {canAdd && iso && (
                      <title>Clic para agregar {(f.properties?.NAME_ES ?? f.properties?.NAME ?? iso) as string}</title>
                    )}
                  </path>
                );
              })}

              {/* Region markers */}
              {projectedRegions.map((r) => {
                const isSelected = r.id === selectedId;
                const radius = isSelected ? 12 : 8;
                return (
                  <g key={r.id} style={{ cursor: "pointer" }} onClick={() => {
                    if (dragDeltaRef.current < 4) setSelectedId(r.id);
                  }}>
                    <circle cx={r.px + 0.5} cy={r.py + 0.5} r={radius} fill="rgba(0,0,0,0.15)" />
                    <circle
                      cx={r.px} cy={r.py} r={radius}
                      fill={r.fillColor}
                      stroke={isSelected ? "#1e293b" : "#fff"}
                      strokeWidth={isSelected ? 2 : 1.5}
                    />
                    <text
                      x={r.px} y={r.py + 3}
                      textAnchor="middle" fontSize={isSelected ? 6.5 : 5.5}
                      fontWeight="700" fill="#fff"
                      style={{ pointerEvents: "none", textShadow: "0 0 2px rgba(0,0,0,0.7)" }}
                    >
                      {r.label.split(" ").pop()?.slice(0, 5).toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Zoom controls overlay */}
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              <button
                type="button"
                onClick={() => zoomBy(1 / 1.5)}
                className="w-7 h-7 rounded bg-white/90 border border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900 shadow-sm text-sm font-bold leading-none flex items-center justify-center"
                title="Acercar"
              >+</button>
              <button
                type="button"
                onClick={() => zoomBy(1.5)}
                className="w-7 h-7 rounded bg-white/90 border border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900 shadow-sm text-sm font-bold leading-none flex items-center justify-center"
                title="Alejar"
              >−</button>
              <button
                type="button"
                onClick={() => setVb(INITIAL_VB)}
                className="w-7 h-7 rounded bg-white/90 border border-slate-200 text-slate-500 hover:bg-white hover:text-slate-900 shadow-sm text-xs leading-none flex items-center justify-center"
                title="Restablecer vista"
              >⊙</button>
            </div>

            {onRegionsChange && (
              <div className="absolute bottom-2 left-2 bg-white/80 rounded px-2 py-1 text-[10px] text-slate-400 pointer-events-none">
                Arrastrá para mover · Rueda para zoom · Clic en país gris para agregar
              </div>
            )}
          </>
        )}
      </div>

      {/* Color scale legend */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-slate-400 font-mono">{formatValue(safeMin, unit)}</span>
        <div className="flex-1 h-2.5 rounded-full" style={{ background: `linear-gradient(to right, ${colorFrom}, ${colorTo})` }} />
        <span className="text-[11px] text-slate-400 font-mono">{formatValue(safeMax, unit)}</span>
      </div>

      {/* Selected region detail */}
      {selected && (
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-start gap-3">
          <span
            className="inline-block w-4 h-4 rounded-full flex-shrink-0 border border-white shadow mt-0.5"
            style={{
              backgroundColor: selected.color ?? lerpColor(colorFrom, colorTo, Math.max(0, Math.min(1, (selected.value - safeMin) / range))),
            }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800">{selected.label}</p>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="text-xs text-slate-500">{variable}:</span>
              {onRegionsChange ? (
                <input
                  type="number"
                  step="0.01"
                  className="w-24 text-xs border border-slate-200 rounded px-1.5 py-0.5 focus:outline-none focus:border-blue-400"
                  value={selected.value}
                  onChange={(e) => {
                    const newVal = parseFloat(e.target.value);
                    if (!isNaN(newVal)) {
                      onRegionsChange(regions.map((r) => r.id === selected.id ? { ...r, value: newVal } : r));
                    }
                  }}
                />
              ) : (
                <span className="text-xs font-medium text-slate-700">{formatValue(selected.value, unit)}</span>
              )}
              {selected.coordinates && (
                <span className="text-[11px] text-slate-400">
                  · {selected.coordinates[0].toFixed(1)}°, {selected.coordinates[1].toFixed(1)}°
                </span>
              )}
            </div>
          </div>
          {onRegionsChange && (
            <button
              type="button"
              className="text-slate-400 hover:text-red-500 transition-colors text-xl leading-none flex-shrink-0"
              title="Quitar región"
              onClick={() => {
                onRegionsChange(regions.filter((r) => r.id !== selected.id));
                setSelectedId(null);
              }}
            >
              ×
            </button>
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

export default function SocialChoroplethVisualizer({ spec, onRegionsChange }: Props) {
  // Use the geographic map if any region has coordinates OR an ISO A3 code
  const hasGeoData = spec.regions.some((r) => r.coordinates || r.isoA3);
  if (hasGeoData) return <ChoroplethMap spec={spec} onRegionsChange={onRegionsChange} />;
  return <ChoroplethBlocks spec={spec} />;
}
