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

function mercatorY(lat: number): number {
  const clamped = Math.max(-85, Math.min(85, lat));
  return Math.log(Math.tan(Math.PI / 4 + (clamped * Math.PI) / 360));
}

function buildProjection(
  features: CountryFeature[],
  width: number,
  height: number,
) {
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

// ── Geographic map ─────────────────────────────────────────────────────────────

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
  // "change mode": ID of the region being reassigned to a different country
  const [changeModeId, setChangeModeId] = useState<string | null>(null);
  // Country search
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

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

  // Zoom ratio: 1 = full view, <1 = zoomed in
  const zoomRatio = vb.w / MAP_W;

  // Build ISO A3 → {region, fillColor} lookup
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

  // Non-passive wheel zoom
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

  // Projection
  const { projectPoint, featurePath } = useMemo(() => {
    if (landFeatures.length === 0) return { projectPoint: null, featurePath: null };
    return buildProjection(landFeatures, MAP_W, MAP_H);
  }, [landFeatures]);

  // Searchable country list from loaded features (when onRegionsChange is active)
  const countryList = useMemo(() => {
    if (!onRegionsChange || landFeatures.length === 0) return [];
    return landFeatures
      .map((f) => ({
        iso: f.properties?.ISO_A3 as string | undefined,
        nameEs: (f.properties?.NAME_ES ?? f.properties?.NAME ?? f.properties?.ISO_A3 ?? "") as string,
        nameEn: (f.properties?.NAME ?? "") as string,
        lat: (f.properties?.LABEL_Y ?? 0) as number,
        lng: (f.properties?.LABEL_X ?? 0) as number,
      }))
      .filter((c) => c.iso && c.iso !== "-99")
      .sort((a, b) => a.nameEs.localeCompare(b.nameEs, "es"));
  }, [landFeatures, onRegionsChange]);

  const filteredCountries = useMemo(() => {
    if (!search.trim()) return countryList.slice(0, 8);
    const q = search.toLowerCase().trim();
    return countryList
      .filter((c) => c.nameEs.toLowerCase().includes(q) || c.nameEn.toLowerCase().includes(q))
      .slice(0, 8);
  }, [countryList, search]);

  const selected = regions.find((r) => r.id === selectedId) ?? null;

  // Add or replace a country region
  const applyCountry = (
    iso: string,
    nameEs: string,
    lat: number,
    lng: number,
    replaceId?: string | null,
  ) => {
    if (!onRegionsChange) return;
    if (replaceId) {
      // Replace existing region's country info, keep its value
      const newRegions = regions.map((r) =>
        r.id === replaceId
          ? { ...r, label: nameEs, isoA3: iso, coordinates: [lat, lng] as [number, number] }
          : r,
      );
      onRegionsChange(newRegions);
      setSelectedId(replaceId);
    } else {
      // Add new region
      const newRegion = {
        id: `r-${Date.now()}`,
        label: nameEs,
        value: safeMin + range / 2,
        coordinates: [lat, lng] as [number, number],
        isoA3: iso,
      };
      onRegionsChange([...regions, newRegion]);
      setSelectedId(newRegion.id);
    }
    setChangeModeId(null);
    setSearch("");
    setSearchFocused(false);
  };

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

  const onMouseUp = () => { dragRef.current = null; };

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

      {/* Country search (edit mode only) */}
      {onRegionsChange && (
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
            placeholder={
              changeModeId
                ? `Buscá un país para reemplazar "${selected?.label ?? ""}"`
                : "Buscá un país para agregar…"
            }
            className={`w-full text-sm border rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 ${
              changeModeId
                ? "border-amber-400 focus:ring-amber-200 bg-amber-50"
                : "border-slate-200 focus:ring-blue-200"
            }`}
          />
          {changeModeId && (
            <button
              type="button"
              onClick={() => setChangeModeId(null)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs"
            >
              Cancelar
            </button>
          )}
          {searchFocused && (search.trim() || filteredCountries.length > 0) && (
            <div className="absolute z-20 top-full mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
              {filteredCountries.length === 0 ? (
                <p className="px-3 py-2 text-xs text-slate-400">Sin resultados</p>
              ) : (
                filteredCountries.map((c) => {
                  const alreadyAdded = !!isoRegionMap.get(c.iso ?? "");
                  return (
                    <button
                      key={c.iso}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        if (!c.iso) return;
                        applyCountry(c.iso, c.nameEs, c.lat, c.lng, changeModeId);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-sm hover:bg-blue-50 flex items-center justify-between ${
                        alreadyAdded && !changeModeId ? "opacity-40" : ""
                      }`}
                    >
                      <span className="font-medium text-slate-800">{c.nameEs}</span>
                      <span className="text-[10px] text-slate-400 ml-2">{c.iso}</span>
                    </button>
                  );
                })
              )}
            </div>
          )}
        </div>
      )}

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

        {mapStatus === "ready" && featurePath && projectPoint && (
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

              {/* Land polygons */}
              {landFeatures.map((f, i) => {
                const iso = f.properties?.ISO_A3 as string | undefined;
                const match = iso ? isoRegionMap.get(iso) : undefined;
                const isSelected = match && selectedId === match.region.id;
                const isChanging = match && changeModeId === match.region.id;
                const canAdd = !match && !!onRegionsChange;
                const canChange = !!onRegionsChange;
                return (
                  <path
                    key={i}
                    d={featurePath(f)}
                    fill={
                      isChanging
                        ? "#fef3c7"
                        : match
                        ? match.fillColor
                        : "#d1d5db"
                    }
                    stroke={isSelected ? "#1e293b" : isChanging ? "#f59e0b" : "#94a3b8"}
                    strokeWidth={isSelected ? 1.2 : isChanging ? 1.5 : 0.4}
                    style={{ cursor: (match || canAdd || canChange) ? "pointer" : "default" }}
                    onClick={() => {
                      if (dragDeltaRef.current >= 4) return;
                      if (changeModeId) {
                        // Replace mode: reassign changeModeId region to clicked country
                        const name = (f.properties?.NAME_ES ?? f.properties?.NAME ?? iso ?? "País") as string;
                        const lat = (f.properties?.LABEL_Y ?? 0) as number;
                        const lng = (f.properties?.LABEL_X ?? 0) as number;
                        if (iso && iso !== "-99") {
                          applyCountry(iso, name, lat, lng, changeModeId);
                        }
                        return;
                      }
                      if (match) {
                        setSelectedId(match.region.id);
                        return;
                      }
                      if (!onRegionsChange) return;
                      const name = (f.properties?.NAME_ES ?? f.properties?.NAME ?? iso ?? "País") as string;
                      const lat = (f.properties?.LABEL_Y ?? 0) as number;
                      const lng = (f.properties?.LABEL_X ?? 0) as number;
                      if (iso && iso !== "-99") {
                        applyCountry(iso, name, lat, lng, null);
                      }
                    }}
                  >
                    {match && !changeModeId && (
                      <title>{match.region.label}: {formatValue(match.region.value, unit)}</title>
                    )}
                    {changeModeId && (
                      <title>
                        {match
                          ? `Clic para cambiar ${regions.find(r => r.id === changeModeId)?.label ?? ""} → ${(f.properties?.NAME_ES ?? f.properties?.NAME ?? iso) as string}`
                          : `Clic para cambiar → ${(f.properties?.NAME_ES ?? f.properties?.NAME ?? iso) as string}`}
                      </title>
                    )}
                    {canAdd && iso && iso !== "-99" && !changeModeId && (
                      <title>Clic para agregar {(f.properties?.NAME_ES ?? f.properties?.NAME ?? iso) as string}</title>
                    )}
                  </path>
                );
              })}

              {/* Country name labels on colored polygons */}
              {landFeatures.map((f, i) => {
                const iso = f.properties?.ISO_A3 as string | undefined;
                const match = iso ? isoRegionMap.get(iso) : undefined;
                if (!match) return null;
                const labelX = f.properties?.LABEL_X as number | undefined;
                const labelY = f.properties?.LABEL_Y as number | undefined;
                if (labelX == null || labelY == null) return null;
                const [px, py] = projectPoint(labelX, labelY);
                // Scale font size with zoom (bigger when zoomed in)
                const fontSize = Math.max(3, Math.min(9, 7 * (MAP_W / vb.w) * 0.5));
                const label = match.region.label;
                // Only show if font is large enough to be readable
                if (fontSize < 3.5) return null;
                return (
                  <text
                    key={`label-${i}`}
                    x={px}
                    y={py}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={fontSize}
                    fontWeight="600"
                    fill="#1e293b"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth={fontSize * 0.35}
                    paintOrder="stroke"
                    style={{ pointerEvents: "none" }}
                  >
                    {label.length > 12 ? label.slice(0, 10) + "…" : label}
                  </text>
                );
              })}

              {/* Region markers (circles) — radius scales with zoom */}
              {regions
                .filter((r) => r.coordinates && projectPoint)
                .map((r) => {
                  const [lat, lng] = r.coordinates!;
                  const [px, py] = projectPoint!(lng, lat);
                  const t = Math.max(0, Math.min(1, (r.value - safeMin) / range));
                  const fillColor = r.color ?? lerpColor(colorFrom, colorTo, t);
                  const isSelected = r.id === selectedId;
                  // Radius scales inversely with zoom to keep constant screen size
                  const baseR = isSelected ? 12 : 8;
                  const radius = Math.max(2, baseR * zoomRatio);
                  return (
                    <g key={r.id} style={{ cursor: "pointer" }} onClick={() => {
                      if (dragDeltaRef.current < 4) setSelectedId(r.id);
                    }}>
                      <circle cx={px + 0.5 * zoomRatio} cy={py + 0.5 * zoomRatio} r={radius} fill="rgba(0,0,0,0.15)" />
                      <circle
                        cx={px} cy={py} r={radius}
                        fill={fillColor}
                        stroke={isSelected ? "#1e293b" : "#fff"}
                        strokeWidth={Math.max(0.5, (isSelected ? 2 : 1.5) * zoomRatio)}
                      />
                      {radius > 5 && (
                        <text
                          x={px} y={py + radius * 0.25}
                          textAnchor="middle" fontSize={Math.max(2, radius * 0.55)}
                          fontWeight="700" fill="#fff"
                          stroke="rgba(0,0,0,0.4)" strokeWidth={radius * 0.08} paintOrder="stroke"
                          style={{ pointerEvents: "none" }}
                        >
                          {r.label.split(" ").pop()?.slice(0, 4).toUpperCase()}
                        </text>
                      )}
                    </g>
                  );
                })}
            </svg>

            {/* Zoom controls */}
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

            {onRegionsChange && !changeModeId && (
              <div className="absolute bottom-2 left-2 bg-white/80 rounded px-2 py-1 text-[10px] text-slate-400 pointer-events-none">
                Arrastrá · Rueda para zoom · Clic en país gris para agregar
              </div>
            )}
            {changeModeId && (
              <div className="absolute bottom-2 left-2 bg-amber-50/95 border border-amber-200 rounded px-2 py-1 text-[10px] text-amber-700 pointer-events-none font-medium">
                Hacé clic en cualquier país para reasignar "{selected?.label}"
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
        <div className={`rounded-xl border p-3 flex items-start gap-3 ${
          changeModeId ? "border-amber-300 bg-amber-50" : "border-slate-100 bg-slate-50"
        }`}>
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
              {selected.isoA3 && (
                <span className="text-[11px] text-slate-400">{selected.isoA3}</span>
              )}
            </div>
          </div>
          {onRegionsChange && (
            <div className="flex flex-col gap-1 flex-shrink-0">
              <button
                type="button"
                title={changeModeId ? "Cancelar cambio de país" : "Cambiar país"}
                className={`text-xs px-2 py-0.5 rounded border transition-colors ${
                  changeModeId
                    ? "border-amber-400 text-amber-700 bg-amber-100 hover:bg-amber-200"
                    : "border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600"
                }`}
                onClick={() => setChangeModeId(changeModeId ? null : selected.id)}
              >
                {changeModeId ? "Cancelar" : "Cambiar país"}
              </button>
              <button
                type="button"
                className="text-slate-400 hover:text-red-500 transition-colors text-xl leading-none text-center"
                title="Quitar región"
                onClick={() => {
                  onRegionsChange(regions.filter((r) => r.id !== selected.id));
                  setSelectedId(null);
                  setChangeModeId(null);
                }}
              >
                ×
              </button>
            </div>
          )}
        </div>
      )}

      {/* Region list */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {regions.map((region) => {
          const t = Math.max(0, Math.min(1, (region.value - safeMin) / range));
          const fillColor = region.color ?? lerpColor(colorFrom, colorTo, t);
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => { setSelectedId(region.id); setChangeModeId(null); }}
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
  const hasGeoData = spec.regions.some((r) => r.coordinates || r.isoA3);
  if (hasGeoData) return <ChoroplethMap spec={spec} onRegionsChange={onRegionsChange} />;
  return <ChoroplethBlocks spec={spec} />;
}
