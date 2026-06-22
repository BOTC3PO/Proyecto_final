/**
 * MarcarMapaRenderer — renderer del tipo `marcar_mapa` (Sprint 9B + WO-5).
 *
 * Dos modos:
 *   1. **Países** (`mapaId` = "politico_mundo" / "world" / ...):
 *      TopoJSON global, keyea por `ISO_A3`, onSelect dispara con ISO A3.
 *   2. **Provincias** (`mapaId` = "world_states_provinces"):
 *      TopoJSON por país vía `/api/maps/provincias/:paisIso`,
 *      keyea por `iso_3166_2`, onSelect dispara con ISO 3166-2.
 *      Vista bloqueada: pan/zoom OFF, encuadre auto-fitted al país.
 *
 * Estados visuales por feature:
 *   - default      → gris claro, hover azul claro.
 *   - selected     → borde azul grueso + fill azul claro.
 *   - post-submit + correctKey === key           → verde.
 *   - post-submit + key === selected !== correct → rojo.
 */

import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import { topologyToFeatures } from "../../lib/maps/topojson-lite";
import type { CountryFeature, TopologyLike } from "../../lib/maps/topojson-lite";
import { createMercatorPathGenerator, createProjector } from "../../lib/maps/svg-geo-lite";
import { useViewBoxZoom } from "../../lib/maps/useViewBoxZoom";

const PAN_THRESHOLD_PX = 4;

const MAP_WIDTH = 960;
const MAP_HEIGHT = 520;

interface MarcarMapaRendererProps {
  mapaId: string;
  onSelect?: (key: string) => void;
  selectedKey?: string;
  correctKey?: string;
  disabled?: boolean;
  /** WO-5: código ISO del país (2 letras) para cargar provincias. */
  paisIso?: string;
  /** Modo de respuesta: "iso" compara por código ISO (default), "nombre" por name_es. */
  modoRespuesta?: "iso" | "nombre";
  /** Bounding box fijo [oeste, sur, este, norte] para lock de vista. */
  encuadre?: [number, number, number, number];
}

type MapMode = "countries" | "provinces";

function resolveMapConfig(mapaId: string, paisIso?: string): { mode: MapMode; url: string | null } {
  if (mapaId === "world_states_provinces" && paisIso) {
    return { mode: "provinces", url: `/api/maps/provincias/${paisIso}` };
  }
  switch (mapaId) {
    case "politico_mundo":
    case "political":
    case "world":
    case "world_countries":
      return { mode: "countries", url: "/api/maps/political/earth/countries_110m.topo.json" };
    case "politico_mundo_detallado":
      return { mode: "countries", url: "/api/maps/political/earth/countries_50m.topo.json" };
    default:
      return { mode: "countries", url: null };
  }
}

type AnswerMode = "iso" | "nombre";

function featureIsoKey(feature: CountryFeature, mode: MapMode): string | null {
  const p = feature.properties as Record<string, unknown> | undefined;
  if (mode === "provinces") {
    const iso = p?.iso_3166_2;
    return typeof iso === "string" && iso.length >= 3 ? iso : null;
  }
  const iso = p?.ISO_A3 ?? p?.ADM0_A3 ?? p?.SOV_A3;
  return typeof iso === "string" && iso.length === 3 && iso !== "-99" ? iso : null;
}

function featureAnswerKey(feature: CountryFeature, mode: MapMode, answerMode: AnswerMode): string | null {
  if (answerMode === "nombre") {
    const p = feature.properties as Record<string, unknown> | undefined;
    const n = mode === "provinces"
      ? (p?.name_es ?? p?.name)
      : (p?.NAME_ES ?? p?.NAME ?? p?.ADMIN);
    return typeof n === "string" && n.length > 0 ? n : null;
  }
  return featureIsoKey(feature, mode);
}

function keysMatch(a: string, b: string, answerMode: AnswerMode): boolean {
  if (answerMode === "nombre") {
    return normalizeMapName(a) === normalizeMapName(b);
  }
  return a === b;
}

function featureName(feature: CountryFeature, mode: MapMode): string {
  const p = feature.properties as Record<string, unknown> | undefined;
  if (mode === "provinces") {
    const n = p?.name_es ?? p?.name ?? "(sin nombre)";
    return typeof n === "string" ? n : "(sin nombre)";
  }
  const n = p?.NAME ?? p?.ADMIN ?? "(sin nombre)";
  return typeof n === "string" ? n : "(sin nombre)";
}

function normalizeMapName(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase();
}

export default function MarcarMapaRenderer({
  mapaId,
  onSelect,
  selectedKey,
  correctKey,
  disabled = false,
  paisIso,
  modoRespuesta = "iso",
  encuadre,
}: MarcarMapaRendererProps) {
  const [features, setFeatures] = useState<CountryFeature[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [hovered, setHovered] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const downAt = useRef<{ x: number; y: number } | null>(null);
  const wasPan = useRef(false);

  const { mode, url } = useMemo(() => resolveMapConfig(mapaId, paisIso), [mapaId, paisIso]);
  const isLocked = mode === "provinces" || !!encuadre;

  const {
    viewBox,
    setViewBox,
    handlePointerDown: hookPanDown,
    handlePointerMove: hookPanMove,
    handlePointerUp: hookPanUp,
    zoomIn,
    zoomOut,
    reset: resetZoom,
  } = useViewBoxZoom({
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    minVb: 40,
    svgRef,
    active: !isLocked,
  });

  const handlePanDown = useCallback(
    (e: PointerEvent<SVGSVGElement>) => {
      downAt.current = { x: e.clientX, y: e.clientY };
      wasPan.current = false;
      hookPanDown(e);
    },
    [hookPanDown],
  );
  const handlePanUp = useCallback(
    (e: PointerEvent<SVGSVGElement>) => {
      const d = downAt.current;
      downAt.current = null;
      if (d) {
        const dx = e.clientX - d.x;
        const dy = e.clientY - d.y;
        if (Math.hypot(dx, dy) > PAN_THRESHOLD_PX) {
          wasPan.current = true;
        }
      }
      hookPanUp(e);
    },
    [hookPanUp],
  );
  const handlePanMove = hookPanMove;

  useEffect(() => {
    if (!url) {
      setStatus("error");
      return;
    }
    let cancelled = false;
    setStatus("loading");
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((topo: TopologyLike) => {
        if (cancelled) return;
        setFeatures(topologyToFeatures(topo));
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  const pathGenerator = useMemo(
    () => (features.length ? createMercatorPathGenerator(features, MAP_WIDTH, MAP_HEIGHT) : null),
    [features],
  );

  useEffect(() => {
    if (!encuadre || features.length === 0) return;
    const proj = createProjector(features, MAP_WIDTH, MAP_HEIGHT);
    const [west, south, east, north] = encuadre;
    const [x1, y1] = proj(west, north);
    const [x2, y2] = proj(east, south);
    const pad = 10;
    const x = Math.max(0, Math.min(x1, x2) - pad);
    const y = Math.max(0, Math.min(y1, y2) - pad);
    const w = Math.min(MAP_WIDTH, Math.abs(x2 - x1) + pad * 2);
    const h = Math.min(MAP_HEIGHT, Math.abs(y2 - y1) + pad * 2);
    setViewBox({ x, y, w, h });
  }, [encuadre, features, setViewBox]);

  if (!url) {
    return (
      <div
        className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800"
        data-testid="marcar-mapa-error"
      >
        {mapaId === "world_states_provinces" && !paisIso ? (
          <>Mapa de provincias requiere un código de país (ej. <code className="font-mono">respuesta_iso: &quot;AR-C&quot;</code>).</>
        ) : (
          <>Mapa <code className="font-mono">{mapaId}</code> no reconocido. (Mapas disponibles: <code className="font-mono">politico_mundo</code>, <code className="font-mono">world_states_provinces</code>.)</>
        )}
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div
        className="flex items-center justify-center bg-slate-100 text-slate-400 text-sm rounded-lg"
        style={{ width: "100%", aspectRatio: `${MAP_WIDTH}/${MAP_HEIGHT}` }}
        data-testid="marcar-mapa-loading"
      >
        Cargando mapa…
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-800"
        data-testid="marcar-mapa-error"
      >
        No se pudo cargar el mapa.
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white relative">
      <svg
        ref={svgRef}
        viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
        style={{
          display: "block",
          width: "100%",
          cursor: disabled ? "default" : "pointer",
          touchAction: "none",
          overscrollBehavior: "contain",
        }}
        data-testid="marcar-mapa-svg"
        onPointerDown={handlePanDown}
        onPointerMove={handlePanMove}
        onPointerUp={handlePanUp}
        onPointerCancel={(e) => { hookPanUp(e); downAt.current = null; wasPan.current = false; }}
      >
        <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="#e8eef7" />
        {pathGenerator &&
          features.map((feature, idx) => {
            const key = featureAnswerKey(feature, mode, modoRespuesta);
            const stableKey = featureIsoKey(feature, mode) ?? key;
            const name = featureName(feature, mode);
            const isHovered = hovered === stableKey;
            const isSelected = !!selectedKey && !!key && keysMatch(key, selectedKey, modoRespuesta);
            const isCorrect = !!correctKey && !!key && keysMatch(key, correctKey, modoRespuesta);
            const isWrong = isSelected && !!correctKey && !!key && !keysMatch(key, correctKey, modoRespuesta);

            let fill = "#d1d5db";
            let stroke = "#475569";
            let strokeWidth = mode === "provinces" ? 0.6 : 0.4;

            if (isCorrect) {
              fill = "#86efac";
              stroke = "#15803d";
              strokeWidth = 1.5;
            } else if (isWrong) {
              fill = "#fca5a5";
              stroke = "#b91c1c";
              strokeWidth = 1.5;
            } else if (isSelected) {
              fill = "#bfdbfe";
              stroke = "#1d4ed8";
              strokeWidth = 1.5;
            } else if (isHovered && !disabled) {
              fill = "#dbeafe";
              stroke = "#3b82f6";
            }

            return (
              <path
                key={stableKey ?? idx}
                d={pathGenerator(feature)}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                vectorEffect="non-scaling-stroke"
                data-iso={stableKey ?? ""}
                data-testid={stableKey ? `marcar-mapa-feature-${stableKey}` : undefined}
                onMouseEnter={() => setHovered(stableKey)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  if (disabled || !key) return;
                  if (wasPan.current) {
                    wasPan.current = false;
                    return;
                  }
                  onSelect?.(key);
                }}
              >
                <title>
                  {name}
                  {stableKey ? ` (${stableKey})` : ""}
                </title>
              </path>
            );
          })}

        {hovered && (
          <text
            x={10}
            y={MAP_HEIGHT - 10}
            fontSize={12}
            fill="#1e293b"
            stroke="white"
            strokeWidth={3}
            paintOrder="stroke"
            fontWeight="600"
            pointerEvents="none"
          >
            {features.find((f) => (featureIsoKey(f, mode) ?? featureAnswerKey(f, mode, modoRespuesta)) === hovered)
              ? featureName(features.find((f) => (featureIsoKey(f, mode) ?? featureAnswerKey(f, mode, modoRespuesta)) === hovered)!, mode)
              : hovered}
          </text>
        )}
      </svg>

      {/* Zoom controls — hidden in locked (province) mode. */}
      {!isLocked && (
        <div
          className="pointer-events-auto absolute right-2 top-2 flex flex-col gap-0.5 rounded-lg border border-slate-200 bg-white shadow-sm"
          role="group"
          aria-label="Zoom del mapa"
          data-testid="marcar-mapa-zoom-controls"
        >
          <button
            type="button"
            onClick={zoomIn}
            aria-label="Acercar"
            title="Acercar (rueda hacia arriba)"
            className="grid h-8 w-8 place-items-center text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M12 6v12M6 12h12" />
            </svg>
          </button>
          <span className="mx-2 h-px bg-slate-200" aria-hidden="true" />
          <button
            type="button"
            onClick={zoomOut}
            aria-label="Alejar"
            title="Alejar (rueda hacia abajo)"
            className="grid h-8 w-8 place-items-center text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M6 12h12" />
            </svg>
          </button>
          <span className="mx-2 h-px bg-slate-200" aria-hidden="true" />
          <button
            type="button"
            onClick={resetZoom}
            aria-label="Restablecer zoom"
            title="Restablecer zoom (Inicio)"
            className="grid h-8 w-8 place-items-center text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-7 3.3M3 4v4h4" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
