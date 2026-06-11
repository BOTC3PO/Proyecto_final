/**
 * Capa de render de anotaciones del mapa (zonas, flechas/rutas, marcadores, texto).
 *
 * Extraída de `MapaStandalone` (WO11) para reutilizarla tal cual en el editor
 * completo `MapaEditorFull` sin duplicar el patrón de dibujo. Es puramente
 * presentacional: recibe las anotaciones ya filtradas/coloreadas y un proyector
 * lon/lat → x/y, y delega la selección al padre.
 *
 * Soporta los 5 tipos de `MapaAnotacion`:
 *   - `zona`     → `<polygon>` (color + `opacidadRelleno` opcional).
 *   - `flecha`   → `<line>` con marker. Hoy mantenida para configs previas
 *                  que aún no pasaron por la migración; el editor produce
 *                  `ruta` con `flechaFinal: true`.
 *   - `ruta`     → `<polyline>` con marker-end si `flechaFinal`.
 *   - `marcador` → `<circle>` + etiqueta, escalable con `tamano`.
 *   - `texto`    → `<text>` posicionado en lon/lat, con `tamano` y color.
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
  const rutas = anotaciones.filter((a) => a.tipo === "ruta") as Extract<MapaAnotacion, { tipo: "ruta" }>[];
  const marcadores = anotaciones.filter((a) => a.tipo === "marcador") as Extract<MapaAnotacion, { tipo: "marcador" }>[];
  const textos = anotaciones.filter((a) => a.tipo === "texto") as Extract<MapaAnotacion, { tipo: "texto" }>[];

  return (
    <g>
      {/* Arrow marker defs — uno por anotación con flecha visible, para poder
          colorear el marker de acuerdo al color de la anotación. */}
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
        {rutas.filter((r) => r.flechaFinal).map((r) => {
          const color = r.color ?? "#f59e0b";
          return (
            <marker
              key={`marker-def-${r.id}`}
              id={`arrow-${r.id}`}
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
        const fillOpacity = z.opacidadRelleno ?? 0.25;
        const strokeWidth = z.grosor ?? (selectedId === z.id ? 2.5 : 1.5);
        const pts = z.puntos.map(([lon, lat]) => project(lon, lat).join(",")).join(" ");
        const cx = z.puntos.reduce((s, [lon]) => s + lon, 0) / z.puntos.length;
        const cy = z.puntos.reduce((s, [, lat]) => s + lat, 0) / z.puntos.length;
        const [labelX, labelY] = project(cx, cy);
        return (
          <g key={z.id} style={{ cursor: editable ? "pointer" : "default" }} onClick={editable ? () => onSelect(z.id) : undefined}>
            <polygon
              points={pts}
              fill={color}
              fillOpacity={fillOpacity}
              stroke={color}
              strokeWidth={strokeWidth}
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

      {/* Arrows (legacy: configs previas a la migración flecha→ruta) */}
      {flechas.map((f) => {
        const color = f.color ?? "#f59e0b";
        const strokeWidth = f.grosor ?? (selectedId === f.id ? 3 : 2);
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
              strokeWidth={strokeWidth}
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

      {/* Rutas multipunto (2+ puntos). Con `flechaFinal` agrega marker al final. */}
      {rutas.map((r) => {
        if (r.puntos.length < 2) return null;
        const color = r.color ?? "#f59e0b";
        const strokeWidth = r.grosor ?? (selectedId === r.id ? 3 : 2);
        const pts = pointsToPolyline(r.puntos, project);
        const midIndex = Math.floor(r.puntos.length / 2);
        const [midLon, midLat] = r.puntos[midIndex];
        const [midX, midY] = project(midLon, midLat);
        return (
          <g key={r.id} style={{ cursor: editable ? "pointer" : "default" }} onClick={editable ? () => onSelect(r.id) : undefined}>
            <polyline
              points={pts}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd={r.flechaFinal ? `url(#arrow-${r.id})` : undefined}
            />
            {/* Invisible wider line for easier click */}
            <polyline points={pts} fill="none" stroke="transparent" strokeWidth={12} />
            {r.etiqueta && (
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
                {r.etiqueta}
              </text>
            )}
          </g>
        );
      })}

      {/* Markers (pin + etiqueta). `tamano` escala radio del pin y tamaño de label. */}
      {marcadores.map((m) => {
        const color = m.color ?? "#ef4444";
        const tamano = m.tamano ?? 1;
        const radio = (selectedId === m.id ? 8 : 6) * tamano;
        const fontSize = 11 * tamano;
        const labelOffsetY = 16 * tamano;
        const [px, py] = project(m.lon, m.lat);
        return (
          <g key={m.id} style={{ cursor: editable ? "pointer" : "default" }} onClick={editable ? () => onSelect(m.id) : undefined}>
            <circle
              cx={px}
              cy={py}
              r={radio}
              fill={color}
              stroke="white"
              strokeWidth={1.5}
            />
            {m.etiqueta && (
              <text
                x={px}
                y={py + labelOffsetY}
                textAnchor="middle"
                fontSize={fontSize}
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

      {/* Texto independiente (etiqueta en lon/lat, sin pin). */}
      {textos.map((t) => {
        const color = t.color ?? "#1a1a1a";
        const fontSize = t.tamano ?? 14;
        const [px, py] = project(t.lon, t.lat);
        return (
          <g key={t.id} style={{ cursor: editable ? "pointer" : "default" }} onClick={editable ? () => onSelect(t.id) : undefined}>
            <text
              x={px}
              y={py}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={fontSize}
              fill={color}
              stroke="white"
              strokeWidth={3}
              paintOrder="stroke"
              fontWeight="600"
            >
              {t.contenido}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export default AnnotationLayer;
