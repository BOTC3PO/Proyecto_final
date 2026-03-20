import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { topologyToFeatures } from "../../../lib/maps/topojson-lite";
import type { CountryFeature, TopologyLike } from "../../../lib/maps/topojson-lite";
import {
  createMercatorPathGenerator,
  createProjector,
  createInverseProjector,
} from "../../../lib/maps/svg-geo-lite";
import type { MapaConfig, MapaAnotacion } from "./types";

const MAP_WIDTH = 960;
const MAP_HEIGHT = 520;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function genId() {
  return Math.random().toString(36).slice(2, 10);
}

function pointsToPolyline(points: [number, number][], project: (lon: number, lat: number) => [number, number]): string {
  return points.map(([lon, lat]) => project(lon, lat).join(",")).join(" ");
}

// ─── Annotation renderers ────────────────────────────────────────────────────

type AnnotationLayerProps = {
  anotaciones: MapaAnotacion[];
  project: (lon: number, lat: number) => [number, number];
  selectedId: string | null;
  onSelect: (id: string) => void;
  editable: boolean;
};

function AnnotationLayer({ anotaciones, project, selectedId, onSelect, editable }: AnnotationLayerProps) {
  const zonas = anotaciones.filter((a) => a.tipo === "zona") as Extract<MapaAnotacion, { tipo: "zona" }>[];
  const flechas = anotaciones.filter((a) => a.tipo === "flecha") as Extract<MapaAnotacion, { tipo: "flecha" }>[];
  const marcadores = anotaciones.filter((a) => a.tipo === "marcador") as Extract<MapaAnotacion, { tipo: "marcador" }>[];

  return (
    <g>
      {/* Arrow marker defs */}
      <defs>
        {flechas.map((f) => {
          const color = f.color ?? "#f59e0b";
          return (
            <marker
              key={`marker-def-${f.id}`}
              id={`arrow-${f.id}`}
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill={color} />
            </marker>
          );
        })}
      </defs>

      {/* Zones */}
      {zonas.map((z) => {
        const color = z.color ?? "#3b82f6";
        const pts = z.puntos.map(([lon, lat]) => project(lon, lat).join(",")).join(" ");
        const cx = z.puntos.reduce((s, [lon]) => s + lon, 0) / z.puntos.length;
        const cy = z.puntos.reduce((s, [, lat]) => s + lat, 0) / z.puntos.length;
        const [labelX, labelY] = project(cx, cy);
        return (
          <g key={z.id} style={{ cursor: editable ? "pointer" : "default" }} onClick={editable ? () => onSelect(z.id) : undefined}>
            <polygon
              points={pts}
              fill={color}
              fillOpacity={0.25}
              stroke={color}
              strokeWidth={selectedId === z.id ? 2.5 : 1.5}
              strokeDasharray={selectedId === z.id ? undefined : "4 2"}
            />
            {z.etiqueta && (
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={11}
                fill={color}
                stroke="white"
                strokeWidth={3}
                paintOrder="stroke"
                fontWeight="600"
              >
                {z.etiqueta}
              </text>
            )}
          </g>
        );
      })}

      {/* Arrows */}
      {flechas.map((f) => {
        const color = f.color ?? "#f59e0b";
        const [x1, y1] = project(f.desde[0], f.desde[1]);
        const [x2, y2] = project(f.hasta[0], f.hasta[1]);
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        return (
          <g key={f.id} style={{ cursor: editable ? "pointer" : "default" }} onClick={editable ? () => onSelect(f.id) : undefined}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth={selectedId === f.id ? 3 : 2}
              markerEnd={`url(#arrow-${f.id})`}
            />
            {/* Invisible wider line for easier click */}
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="transparent" strokeWidth={12} />
            {f.etiqueta && (
              <text
                x={midX}
                y={midY - 6}
                textAnchor="middle"
                fontSize={11}
                fill={color}
                stroke="white"
                strokeWidth={3}
                paintOrder="stroke"
                fontWeight="600"
              >
                {f.etiqueta}
              </text>
            )}
          </g>
        );
      })}

      {/* Markers */}
      {marcadores.map((m) => {
        const color = m.color ?? "#ef4444";
        const [px, py] = project(m.lon, m.lat);
        return (
          <g key={m.id} style={{ cursor: editable ? "pointer" : "default" }} onClick={editable ? () => onSelect(m.id) : undefined}>
            <circle
              cx={px}
              cy={py}
              r={selectedId === m.id ? 8 : 6}
              fill={color}
              stroke="white"
              strokeWidth={1.5}
            />
            {m.etiqueta && (
              <text
                x={px}
                y={py + 16}
                textAnchor="middle"
                fontSize={11}
                fill={color}
                stroke="white"
                strokeWidth={3}
                paintOrder="stroke"
                fontWeight="600"
              >
                {m.etiqueta}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}

// ─── Edit panel ───────────────────────────────────────────────────────────────

type EditPanelProps = {
  anotacion: MapaAnotacion;
  onChange: (updated: MapaAnotacion) => void;
  onDelete: () => void;
  onClose: () => void;
};

function EditPanel({ anotacion, onChange, onDelete, onClose }: EditPanelProps) {
  return (
    <div className="w-56 shrink-0 rounded-xl border border-slate-200 bg-white p-4 shadow-md space-y-3 text-sm">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-slate-700 capitalize">
          {anotacion.tipo === "marcador" ? "Marcador" : anotacion.tipo === "zona" ? "Zona" : "Flecha"}
        </span>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xs">✕</button>
      </div>

      <label className="block space-y-1">
        <span className="text-xs text-slate-500">Etiqueta</span>
        <input
          className="w-full rounded border border-slate-300 px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={"etiqueta" in anotacion ? (anotacion.etiqueta ?? "") : ""}
          onChange={(e) => {
            if (anotacion.tipo === "marcador") onChange({ ...anotacion, etiqueta: e.target.value });
            else if (anotacion.tipo === "zona") onChange({ ...anotacion, etiqueta: e.target.value });
            else onChange({ ...anotacion, etiqueta: e.target.value });
          }}
        />
      </label>

      <label className="block space-y-1">
        <span className="text-xs text-slate-500">Color</span>
        <input
          type="color"
          className="h-8 w-full cursor-pointer rounded border border-slate-300"
          value={anotacion.color ?? (anotacion.tipo === "marcador" ? "#ef4444" : anotacion.tipo === "zona" ? "#3b82f6" : "#f59e0b")}
          onChange={(e) => onChange({ ...anotacion, color: e.target.value })}
        />
      </label>

      <button
        onClick={onDelete}
        className="w-full rounded border border-red-200 bg-red-50 py-1 text-xs font-medium text-red-600 hover:bg-red-100"
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
};

type ActiveTool = "marcador" | "zona" | "flecha";

export default function MapaStandalone({ config, editable = false, onChange }: Props) {
  const [features, setFeatures] = useState<CountryFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<ActiveTool>("marcador");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pendingZona, setPendingZona] = useState<[number, number][] | null>(null);
  const [pendingFlecha, setPendingFlecha] = useState<[number, number] | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [localConfig, setLocalConfig] = useState<MapaConfig>(config);

  useEffect(() => {
    setLocalConfig(config);
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
  const svgCursor = !editable ? "default" : activeTool === "marcador" ? "crosshair" : "crosshair";

  return (
    <div className="flex flex-col gap-3">
      {/* Toolbar — editor only */}
      {editable && (
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          {/* Modo */}
          <label className="flex items-center gap-1.5 text-xs text-slate-600">
            Modo
            <select
              className="rounded border border-slate-300 bg-white px-2 py-1 text-xs focus:outline-none"
              value={localConfig.modo}
              onChange={(e) => update({ ...localConfig, modo: e.target.value as MapaConfig["modo"] })}
            >
              <option value="political">Político</option>
              <option value="physical">Físico</option>
            </select>
          </label>

          {/* Escala */}
          <label className="flex items-center gap-1.5 text-xs text-slate-600">
            Escala
            <select
              className="rounded border border-slate-300 bg-white px-2 py-1 text-xs focus:outline-none"
              value={localConfig.escala}
              onChange={(e) => update({ ...localConfig, escala: e.target.value as MapaConfig["escala"] })}
            >
              <option value="110m">110m (ligero)</option>
              <option value="50m">50m (detallado)</option>
            </select>
          </label>

          <div className="h-5 w-px bg-slate-300" />

          {/* Tool buttons */}
          {(["marcador", "zona", "flecha"] as ActiveTool[]).map((tool) => (
            <button
              key={tool}
              type="button"
              className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${
                activeTool === tool
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:bg-slate-100"
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
              className="rounded-lg border border-emerald-500 bg-emerald-500 px-3 py-1 text-xs font-medium text-white"
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
            <span className="text-xs text-amber-600 font-medium">Click para definir destino…</span>
          )}

          <div className="ml-auto">
            <button
              type="button"
              className="rounded-lg border border-red-200 bg-white px-3 py-1 text-xs font-medium text-red-500 hover:bg-red-50"
              onClick={clearAll}
            >
              Limpiar todo
            </button>
          </div>
        </div>
      )}

      {/* Map + side panel */}
      <div className="flex gap-3 items-start">
        <div className="flex-1 min-w-0 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
          {loading ? (
            <div
              className="flex items-center justify-center bg-slate-100 text-slate-400 text-sm"
              style={{ width: "100%", aspectRatio: `${MAP_WIDTH}/${MAP_HEIGHT}` }}
            >
              Cargando mapa…
            </div>
          ) : (
            <svg
              ref={svgRef}
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              style={{ display: "block", width: "100%", cursor: svgCursor }}
              onClick={handleSvgClick}
              onDoubleClick={handleSvgDoubleClick}
            >
              {/* Ocean background */}
              <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="#e8eef7" />

              {/* Countries */}
              {pathGenerator && features.map((feature, idx) => {
                const name = feature.properties?.NAME as string | undefined;
                const isHovered = hoveredCountry === name;
                return (
                  <path
                    key={idx}
                    d={pathGenerator(feature)}
                    fill={isHovered ? "#fde68a" : "#d1d5db"}
                    stroke="#475569"
                    strokeWidth={0.4}
                    onMouseEnter={() => setHoveredCountry(name ?? null)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  />
                );
              })}

              {/* Country name tooltip */}
              {hoveredCountry && (
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
                  {hoveredCountry}
                </text>
              )}

              {/* Annotations */}
              {project && (
                <AnnotationLayer
                  anotaciones={localConfig.anotaciones}
                  project={project}
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                  editable={editable}
                />
              )}

              {/* Pending zona preview */}
              {editable && activeTool === "zona" && pendingZona && pendingZona.length > 0 && project && (
                <polyline
                  points={pointsToPolyline(pendingZona, project)}
                  fill="none"
                  stroke="#3b82f6"
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
                  fill="#f59e0b"
                  stroke="white"
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
        <p className="text-xs text-slate-400">
          {activeTool === "marcador" && "Click en el mapa para colocar un marcador. Click sobre un marcador para editarlo."}
          {activeTool === "zona" && "Clicks sucesivos para agregar puntos. Doble-click o botón «Cerrar zona» para terminar."}
          {activeTool === "flecha" && "Primer click = origen, segundo click = destino."}
        </p>
      )}
    </div>
  );
}
