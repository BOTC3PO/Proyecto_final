/**
 * Capa de render de anotaciones del mapa (zonas, flechas, marcadores).
 *
 * Extraída de `MapaStandalone` (WO11) para reutilizarla tal cual en el editor
 * completo `MapaEditorFull` sin duplicar el patrón de dibujo. Es puramente
 * presentacional: recibe las anotaciones ya filtradas/coloreadas y un proyector
 * lon/lat → x/y, y delega la selección al padre.
 */
import type { MapaAnotacion } from "./types";

export type Projector = (lon: number, lat: number) => [number, number];

/** Convierte una lista de puntos [lon,lat] a la cadena `points` de un polyline. */
export function pointsToPolyline(
  points: [number, number][],
  project: Projector,
): string {
  return points.map(([lon, lat]) => project(lon, lat).join(",")).join(" ");
}

export type AnnotationLayerProps = {
  anotaciones: MapaAnotacion[];
  project: Projector;
  selectedId: string | null;
  onSelect: (id: string) => void;
  editable: boolean;
};

export function AnnotationLayer({ anotaciones, project, selectedId, onSelect, editable }: AnnotationLayerProps) {
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

export default AnnotationLayer;
