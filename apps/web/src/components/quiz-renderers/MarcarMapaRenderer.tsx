/**
 * MarcarMapaRenderer — renderer del tipo `marcar_mapa` (Sprint 9B).
 *
 * Reusa el sistema de mapas de MapaStandalone.tsx (TopoJSON cargado vía
 * `/api/maps/...`). Cada feature trae `ISO_A3` en sus properties, que es lo
 * que el adapter del paquete @vb/vblang setea en `respuestaIsoCorrecta`.
 *
 * Estados visuales por país:
 *   - default      → gris claro, hover azul claro.
 *   - selected     → borde azul grueso + fill azul claro.
 *   - post-submit + correctIso === iso          → verde.
 *   - post-submit + iso === selected !== correct → rojo.
 *
 * Si `mapaId` no se reconoce el componente muestra un placeholder con
 * mensaje claro (no rompe el quiz).
 */

import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import { topologyToFeatures } from "../../lib/maps/topojson-lite";
import type { CountryFeature, TopologyLike } from "../../lib/maps/topojson-lite";
import { createMercatorPathGenerator } from "../../lib/maps/svg-geo-lite";
import { useViewBoxZoom } from "../../lib/maps/useViewBoxZoom";

/** Umbral en píxeles: si el mouse se movió más de esto entre pointerdown y
 *  click, se considera pan y NO se dispara `onSelect`. */
const PAN_THRESHOLD_PX = 4;

const MAP_WIDTH = 960;
const MAP_HEIGHT = 520;

interface MarcarMapaRendererProps {
  /** Identificador lógico del mapa (ej. "politico_mundo"). */
  mapaId: string;
  /** Disparado cuando el alumno hace click en un país (ISO A3). */
  onSelect?: (iso: string) => void;
  /** ISO seleccionado actualmente por el alumno. */
  selectedIso?: string;
  /** ISO correcto (sólo definido post-submit) para pintar verde/rojo. */
  correctIso?: string;
  /** Bloquea clicks (post-submit). */
  disabled?: boolean;
}

/**
 * Mapea el `mapaId` lógico al URL del TopoJSON expuesto por la API.
 * Si el id no se reconoce devuelve null y mostramos placeholder.
 */
function mapaIdToUrl(mapaId: string): string | null {
  switch (mapaId) {
    case "politico_mundo":
    case "political":
    case "world":
      return "/api/maps/political/earth/countries_110m.topo.json";
    case "politico_mundo_detallado":
      return "/api/maps/political/earth/countries_50m.topo.json";
    default:
      return null;
  }
}

function isoOf(feature: CountryFeature): string | null {
  const p = feature.properties as Record<string, unknown> | undefined;
  const iso = p?.ISO_A3 ?? p?.ADM0_A3 ?? p?.SOV_A3;
  return typeof iso === "string" && iso.length === 3 && iso !== "-99" ? iso : null;
}

function nameOf(feature: CountryFeature): string {
  const p = feature.properties as Record<string, unknown> | undefined;
  const n = p?.NAME ?? p?.ADMIN ?? "(sin nombre)";
  return typeof n === "string" ? n : "(sin nombre)";
}

export default function MarcarMapaRenderer({
  mapaId,
  onSelect,
  selectedIso,
  correctIso,
  disabled = false,
}: MarcarMapaRendererProps) {
  const [features, setFeatures] = useState<CountryFeature[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [hovered, setHovered] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  // Punto de partida del pointerdown; si el pointerup se aleja más de
  // PAN_THRESHOLD_PX, marcamos `wasPan = true` para que el `onClick` del
  // path no se considere selección de país.
  const downAt = useRef<{ x: number; y: number } | null>(null);
  const wasPan = useRef(false);

  // M7: zoom + pan vía hook compartido. El pan es siempre activo (no hay
  // herramienta "select" en el renderer del alumno).
  const {
    viewBox,
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
    active: true,
  });

  // Wrappers que también registran `downAt` y `wasPan` para distinguir
  // click de pan.
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

  const url = useMemo(() => mapaIdToUrl(mapaId), [mapaId]);

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

  if (!url) {
    return (
      <div
        className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800"
        data-testid="marcar-mapa-error"
      >
        Mapa <code className="font-mono">{mapaId}</code> no reconocido. (Mapas
        disponibles: <code className="font-mono">politico_mundo</code>.)
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
            const iso = isoOf(feature);
            const name = nameOf(feature);
            const isHovered = hovered === iso;
            const isSelected = !!selectedIso && iso === selectedIso;
            const isCorrect = !!correctIso && iso === correctIso;
            const isWrong = isSelected && !!correctIso && iso !== correctIso;

            let fill = "#d1d5db";
            let stroke = "#475569";
            let strokeWidth = 0.4;

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
                key={iso ?? idx}
                d={pathGenerator(feature)}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                vectorEffect="non-scaling-stroke"
                data-iso={iso ?? ""}
                data-testid={iso ? `marcar-mapa-country-${iso}` : undefined}
                onMouseEnter={() => setHovered(iso)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  if (disabled || !iso) return;
                  // Si veníamos de un pan (umbral >4px), no contamos
                  // el click como selección de país.
                  if (wasPan.current) {
                    wasPan.current = false;
                    return;
                  }
                  onSelect?.(iso);
                }}
              >
                <title>
                  {name}
                  {iso ? ` (${iso})` : ""}
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
            {features.find((f) => isoOf(f) === hovered) ? nameOf(features.find((f) => isoOf(f) === hovered)!) : hovered}
          </text>
        )}
      </svg>

      {/* Botones de zoom (M7) — overlay esquina superior derecha. */}
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
    </div>
  );
}
