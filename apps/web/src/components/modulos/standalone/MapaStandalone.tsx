import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { topologyToFeatures } from "../../../lib/maps/topojson-lite";
import type { CountryFeature, TopologyLike } from "../../../lib/maps/topojson-lite";
import {
  createMercatorPathGenerator,
  createProjector,
  createInverseProjector,
} from "../../../lib/maps/svg-geo-lite";
import {
  MAPA_CAPA_DEFAULT_ID,
  type MapaConfig,
  type MapaAnotacion,
  type MapaDataset,
} from "./types";
import { migrateMapaConfig } from "./mapa.migrate";
import { AnnotationLayer, pointsToPolyline } from "./AnnotationLayer";

const MAP_WIDTH = 960;
const MAP_HEIGHT = 520;

// Colores por defecto de cada anotación = dato (no chrome): el color picker
// arranca en estos valores cuando la anotación todavía no tiene color propio.
const DEFAULT_ANOTACION_COLOR: Record<MapaAnotacion["tipo"], string> = {
  marcador: "#ef4444",
  zona: "#3b82f6",
  flecha: "#f59e0b",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function genId() {
  return Math.random().toString(36).slice(2, 10);
}

// ─── Edit panel ───────────────────────────────────────────────────────────────

type EditPanelProps = {
  anotacion: MapaAnotacion;
  onChange: (updated: MapaAnotacion) => void;
  onDelete: () => void;
  onClose: () => void;
};

function EditPanel({ anotacion, onChange, onDelete, onClose }: EditPanelProps) {
  const tipoLabel =
    anotacion.tipo === "marcador" ? "Marcador" : anotacion.tipo === "zona" ? "Zona" : "Flecha";
  return (
    <div
      role="group"
      aria-label={`Editar ${tipoLabel.toLowerCase()}`}
      className="w-56 shrink-0 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 shadow-md space-y-3 text-sm"
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[var(--c-text)]">{tipoLabel}</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar panel de edición"
          className="text-[var(--c-text-3)] hover:text-[var(--c-text)] text-xs px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>

      <label className="block space-y-1">
        <span className="text-xs text-[var(--c-muted)]">Etiqueta</span>
        <input
          className="w-full rounded border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2 py-1 text-xs outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]"
          value={"etiqueta" in anotacion ? (anotacion.etiqueta ?? "") : ""}
          onChange={(e) => {
            if (anotacion.tipo === "marcador") onChange({ ...anotacion, etiqueta: e.target.value });
            else if (anotacion.tipo === "zona") onChange({ ...anotacion, etiqueta: e.target.value });
            else onChange({ ...anotacion, etiqueta: e.target.value });
          }}
        />
      </label>

      <label className="block space-y-1">
        <span className="text-xs text-[var(--c-muted)]">Color</span>
        <input
          type="color"
          className="h-8 w-full cursor-pointer rounded border border-[var(--c-border)] bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
          value={anotacion.color ?? DEFAULT_ANOTACION_COLOR[anotacion.tipo]}
          onChange={(e) => onChange({ ...anotacion, color: e.target.value })}
        />
      </label>

      <button
        type="button"
        onClick={onDelete}
        className="w-full rounded border border-[color-mix(in_srgb,var(--c-danger)_30%,transparent)] bg-[var(--c-danger-soft)] py-1 text-xs font-medium text-[var(--c-danger)] hover:bg-[color-mix(in_srgb,var(--c-danger)_20%,var(--c-surface))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
      >
        Eliminar
      </button>
    </div>
  );
}

// ─── MapaStandalone ───────────────────────────────────────────────────────────

type Props = {
  config: MapaConfig;
  editable?: boolean;
  onChange?: (config: MapaConfig) => void;
  /** Datasets disponibles a nivel módulo; capas con datasetId se rellenan desde acá. */
  datasets?: MapaDataset[];
  /** Override del aria-label del SVG raíz. */
  ariaLabel?: string;
};

type ActiveTool = "marcador" | "zona" | "flecha";

export default function MapaStandalone({ config, editable = false, onChange, datasets, ariaLabel }: Props) {
  const [features, setFeatures] = useState<CountryFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<ActiveTool>("marcador");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pendingZona, setPendingZona] = useState<[number, number][] | null>(null);
  const [pendingFlecha, setPendingFlecha] = useState<[number, number] | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [localConfig, setLocalConfig] = useState<MapaConfig>(() => migrateMapaConfig(config));

  useEffect(() => {
    setLocalConfig(migrateMapaConfig(config));
  }, [config]);

  const update = useCallback((next: MapaConfig) => {
    setLocalConfig(next);
    onChange?.(next);
  }, [onChange]);

  // Load TopoJSON
  useEffect(() => {
    setLoading(true);
    const url = `/api/maps/${localConfig.modo}/earth/countries_${localConfig.escala}.topo.json`;
    fetch(url)
      .then((r) => r.json())
      .then((topo: TopologyLike) => {
        setFeatures(topologyToFeatures(topo));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [localConfig.modo, localConfig.escala]);

  const pathGenerator = useMemo(
    () => features.length ? createMercatorPathGenerator(features, MAP_WIDTH, MAP_HEIGHT) : null,
    [features]
  );

  const project = useMemo(
    () => features.length ? createProjector(features, MAP_WIDTH, MAP_HEIGHT) : null,
    [features]
  );

  const inverseProject = useMemo(
    () => features.length ? createInverseProjector(features, MAP_WIDTH, MAP_HEIGHT) : null,
    [features]
  );

  // Get SVG coordinates from mouse event
  const getSvgCoords = useCallback((e: React.MouseEvent<SVGSVGElement>): [number, number] | null => {
    if (!svgRef.current || !inverseProject) return null;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = MAP_WIDTH / rect.width;
    const scaleY = MAP_HEIGHT / rect.height;
    const svgX = (e.clientX - rect.left) * scaleX;
    const svgY = (e.clientY - rect.top) * scaleY;
    return inverseProject(svgX, svgY);
  }, [inverseProject]);

  const handleSvgClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!editable || !inverseProject) return;
    const coords = getSvgCoords(e);
    if (!coords) return;
    const [lon, lat] = coords;

    if (activeTool === "marcador") {
      const newMarcador: MapaAnotacion = {
        id: genId(),
        tipo: "marcador",
        lat,
        lon,
        etiqueta: "",
      };
      const next = { ...localConfig, anotaciones: [...localConfig.anotaciones, newMarcador] };
      update(next);
      setSelectedId(newMarcador.id);
    } else if (activeTool === "zona") {
      setPendingZona((prev) => [...(prev ?? []), [lon, lat]]);
    } else if (activeTool === "flecha") {
      if (!pendingFlecha) {
        setPendingFlecha([lon, lat]);
      } else {
        const newFlecha: MapaAnotacion = {
          id: genId(),
          tipo: "flecha",
          desde: pendingFlecha,
          hasta: [lon, lat],
        };
        const next = { ...localConfig, anotaciones: [...localConfig.anotaciones, newFlecha] };
        update(next);
        setPendingFlecha(null);
        setSelectedId(newFlecha.id);
      }
    }
  }, [editable, inverseProject, getSvgCoords, activeTool, pendingFlecha, localConfig, update]);

  const handleSvgDoubleClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!editable || activeTool !== "zona" || !pendingZona || pendingZona.length < 3) return;
    e.preventDefault();
    const newZona: MapaAnotacion = {
      id: genId(),
      tipo: "zona",
      puntos: pendingZona,
      etiqueta: "",
    };
    const next = { ...localConfig, anotaciones: [...localConfig.anotaciones, newZona] };
    update(next);
    setPendingZona(null);
    setSelectedId(newZona.id);
  }, [editable, activeTool, pendingZona, localConfig, update]);

  // ─── Capas: visibilidad y color heredado ────────────────────────────────
  const capas = useMemo(() => localConfig.capas ?? [], [localConfig.capas]);
  const capaById = useMemo(() => new Map(capas.map((c) => [c.id, c])), [capas]);

  const visibleAnotaciones = useMemo(
    () =>
      localConfig.anotaciones.filter((a) => {
        const capa = capaById.get(a.capaId ?? MAPA_CAPA_DEFAULT_ID);
        return capa ? capa.visible : true;
      }),
    [localConfig.anotaciones, capaById],
  );

  // Marcadores virtuales generados desde datasets de capas conectadas.
  const datasetMarkers = useMemo(() => {
    if (!datasets || datasets.length === 0) return [];
    const out: MapaAnotacion[] = [];
    capas.forEach((capa) => {
      if (!capa.visible || !capa.datasetId) return;
      const ds = datasets.find((d) => d.id === capa.datasetId);
      if (!ds) return;
      ds.entries.forEach((entry) => {
        out.push({
          id: `ds:${capa.id}:${entry.id}`,
          tipo: "marcador",
          lat: entry.lat,
          lon: entry.lon,
          etiqueta: entry.etiqueta,
          color: capa.color,
          capaId: capa.id,
        });
      });
    });
    return out;
  }, [datasets, capas]);

  // Anotaciones con color resuelto: explícito > capa > undefined (default del render).
  const anotacionesParaRender = useMemo<MapaAnotacion[]>(() => {
    const merged = [...visibleAnotaciones, ...datasetMarkers];
    return merged.map((a) => {
      if (a.color) return a;
      const capa = capaById.get(a.capaId ?? MAPA_CAPA_DEFAULT_ID);
      return capa?.color ? ({ ...a, color: capa.color } as MapaAnotacion) : a;
    });
  }, [visibleAnotaciones, datasetMarkers, capaById]);

  const handleSelectAnnotation = useCallback((id: string) => {
    if (id.startsWith("ds:")) return; // dataset markers no se seleccionan
    setSelectedId(id);
  }, []);

  const selectedAnnotation = localConfig.anotaciones.find((a) => a.id === selectedId) ?? null;

  const updateAnnotation = useCallback((updated: MapaAnotacion) => {
    const next = {
      ...localConfig,
      anotaciones: localConfig.anotaciones.map((a) => (a.id === updated.id ? updated : a)),
    };
    update(next);
  }, [localConfig, update]);

  const deleteAnnotation = useCallback((id: string) => {
    const next = { ...localConfig, anotaciones: localConfig.anotaciones.filter((a) => a.id !== id) };
    update(next);
    setSelectedId(null);
  }, [localConfig, update]);

  const clearAll = useCallback(() => {
    if (!window.confirm("¿Eliminar todas las anotaciones?")) return;
    update({ ...localConfig, anotaciones: [] });
    setSelectedId(null);
    setPendingZona(null);
    setPendingFlecha(null);
  }, [localConfig, update]);

  // Cursor style based on active tool
  const svgCursor = !editable ? "default" : "crosshair";

  const selectCls =
    "rounded border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2 py-1 text-xs outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]";

  return (
    <div className="flex flex-col gap-3">
      {/* Live region para país hovereado (lector de pantalla) */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {hoveredCountry ? `País: ${hoveredCountry}` : ""}
      </div>

      {/* Toolbar — editor only */}
      {editable && (
        <div
          role="toolbar"
          aria-label="Herramientas del mapa"
          className="flex flex-wrap items-center gap-2 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface-3)] px-3 py-2"
        >
          {/* Modo */}
          <label className="flex items-center gap-1.5 text-xs text-[var(--c-muted)]">
            Modo
            <select
              className={selectCls}
              value={localConfig.modo}
              onChange={(e) => update({ ...localConfig, modo: e.target.value as MapaConfig["modo"] })}
            >
              <option value="political">Político</option>
              <option value="physical">Físico</option>
            </select>
          </label>

          {/* Escala */}
          <label className="flex items-center gap-1.5 text-xs text-[var(--c-muted)]">
            Escala
            <select
              className={selectCls}
              value={localConfig.escala}
              onChange={(e) => update({ ...localConfig, escala: e.target.value as MapaConfig["escala"] })}
            >
              <option value="110m">110m (ligero)</option>
              <option value="50m">50m (detallado)</option>
            </select>
          </label>

          <div className="h-5 w-px bg-[var(--c-border)]" aria-hidden="true" />

          {/* Tool buttons */}
          {(["marcador", "zona", "flecha"] as ActiveTool[]).map((tool) => (
            <button
              key={tool}
              type="button"
              aria-pressed={activeTool === tool}
              aria-label={tool === "marcador" ? "Herramienta marcador" : tool === "zona" ? "Herramienta zona" : "Herramienta flecha"}
              className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
                activeTool === tool
                  ? "border-[var(--c-primary)] bg-[var(--c-primary)] text-[var(--c-accent-fg)]"
                  : "border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-muted)] hover:bg-[var(--c-hover)]"
              }`}
              onClick={() => {
                setActiveTool(tool);
                setPendingZona(null);
                setPendingFlecha(null);
              }}
            >
              {tool === "marcador" ? "Marcador" : tool === "zona" ? "Zona" : "Flecha"}
            </button>
          ))}

          {activeTool === "zona" && pendingZona && pendingZona.length >= 3 && (
            <button
              type="button"
              className="rounded-lg border border-[var(--c-success)] bg-[var(--c-success)] px-3 py-1 text-xs font-medium text-[var(--c-accent-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
              onClick={() => {
                const newZona: MapaAnotacion = {
                  id: genId(),
                  tipo: "zona",
                  puntos: pendingZona,
                  etiqueta: "",
                };
                const next = { ...localConfig, anotaciones: [...localConfig.anotaciones, newZona] };
                update(next);
                setPendingZona(null);
                setSelectedId(newZona.id);
              }}
            >
              Cerrar zona ({pendingZona.length} pts)
            </button>
          )}

          {activeTool === "flecha" && pendingFlecha && (
            <span className="text-xs text-[var(--c-warning)] font-medium" aria-live="polite">Click para definir destino…</span>
          )}

          <div className="ml-auto">
            <button
              type="button"
              className="rounded-lg border border-[color-mix(in_srgb,var(--c-danger)_30%,transparent)] bg-[var(--c-surface)] px-3 py-1 text-xs font-medium text-[var(--c-danger)] hover:bg-[var(--c-danger-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
              onClick={clearAll}
            >
              Limpiar todo
            </button>
          </div>
        </div>
      )}

      {/* Map + side panel */}
      <div className="flex gap-3 items-start">
        <div className="flex-1 min-w-0 rounded-xl overflow-hidden border border-[var(--c-border)] shadow-sm">
          {loading ? (
            <div
              className="flex items-center justify-center bg-[var(--c-surface-3)] text-[var(--c-muted)] text-sm"
              style={{ width: "100%", aspectRatio: `${MAP_WIDTH}/${MAP_HEIGHT}` }}
              role="status"
            >
              Cargando mapa…
            </div>
          ) : (
            <svg
              ref={svgRef}
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              role="img"
              aria-label={ariaLabel ?? localConfig.titulo ?? "Mapa interactivo"}
              aria-describedby="mapa-desc"
              style={{ display: "block", width: "100%", cursor: svgCursor }}
              onClick={handleSvgClick}
              onDoubleClick={handleSvgDoubleClick}
            >
              <title>{localConfig.titulo ?? "Mapa interactivo"}</title>
              <desc id="mapa-desc">
                Mapa {localConfig.modo === "physical" ? "físico" : "político"} con {anotacionesParaRender.length} anotaciones.
              </desc>
              {/* Ocean background */}
              <rect width={MAP_WIDTH} height={MAP_HEIGHT} style={{ fill: "var(--c-bg)" }} />

              {/* Countries */}
              <g style={{ color: "var(--c-muted)" }}>
                {pathGenerator && features.map((feature, idx) => {
                  const name = feature.properties?.NAME as string | undefined;
                  const isHovered = hoveredCountry === name;
                  return (
                    <path
                      key={idx}
                      d={pathGenerator(feature)}
                      fill="currentColor"
                      fillOpacity={isHovered ? 0.55 : 0.28}
                      stroke="currentColor"
                      strokeOpacity={0.6}
                      strokeWidth={0.4}
                      onMouseEnter={() => setHoveredCountry(name ?? null)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    />
                  );
                })}
              </g>

              {/* Country name tooltip */}
              {hoveredCountry && (
                <text
                  x={10}
                  y={MAP_HEIGHT - 10}
                  fontSize={12}
                  style={{ fill: "var(--c-text)", stroke: "var(--c-surface)" }}
                  strokeWidth={3}
                  paintOrder="stroke"
                  fontWeight="600"
                  pointerEvents="none"
                >
                  {hoveredCountry}
                </text>
              )}

              {/* Annotations (filtered by visible capas + dataset markers) */}
              {project && (
                <AnnotationLayer
                  anotaciones={anotacionesParaRender}
                  project={project}
                  selectedId={selectedId}
                  onSelect={handleSelectAnnotation}
                  editable={editable}
                />
              )}

              {/* Pending zona preview */}
              {editable && activeTool === "zona" && pendingZona && pendingZona.length > 0 && project && (
                <polyline
                  points={pointsToPolyline(pendingZona, project)}
                  fill="none"
                  stroke="var(--c-primary)"
                  strokeWidth={1.5}
                  strokeDasharray="4 2"
                  opacity={0.7}
                />
              )}

              {/* Pending flecha preview — origin dot */}
              {editable && activeTool === "flecha" && pendingFlecha && project && (
                <circle
                  cx={project(pendingFlecha[0], pendingFlecha[1])[0]}
                  cy={project(pendingFlecha[0], pendingFlecha[1])[1]}
                  r={5}
                  fill="var(--c-warning)"
                  stroke="var(--c-surface)"
                  strokeWidth={1.5}
                />
              )}
            </svg>
          )}
        </div>

        {/* Edit panel */}
        {editable && selectedAnnotation && (
          <EditPanel
            anotacion={selectedAnnotation}
            onChange={updateAnnotation}
            onDelete={() => deleteAnnotation(selectedAnnotation.id)}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>

      {/* Hint */}
      {editable && (
        <p className="text-xs text-[var(--c-text-3)]">
          {activeTool === "marcador" && "Click en el mapa para colocar un marcador. Click sobre un marcador para editarlo."}
          {activeTool === "zona" && "Clicks sucesivos para agregar puntos. Doble-click o botón «Cerrar zona» para terminar."}
          {activeTool === "flecha" && "Primer click = origen, segundo click = destino."}
        </p>
      )}
    </div>
  );
}
