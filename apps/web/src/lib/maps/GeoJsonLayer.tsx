/**
 * Render de una capa GeoJSON embebida en una `MapaCapa` (M5).
 *
 * Se posiciona usando el mismo projector que el mapa base (Mundo entero en
 * coordenadas lon/lat, igual que los países del TopoJSON). Eso significa que
 * el contenido se proyecta sobre la misma porción del mundo que el resto del
 * mapa — si los datos están en el extent del mapa mundi, caen donde deben.
 *
 * Acepta Point, LineString, Polygon, MultiPoint, MultiLineString y
 * MultiPolygon. Polígonos se rellenan con `fillOpacity 0.25`; el resto se
 * dibuja con stroke del color de la capa.
 */
import type { GeoJsonFeature, GeoJsonFeatureCollection, GeoJsonGeometry } from "../../components/modulos/standalone/types";

export type Projector = (lon: number, lat: number) => [number, number];

export type GeoJsonLayerProps = {
  data: GeoJsonFeatureCollection;
  color: string;
  project: Projector;
  /** Si es false, no se dibuja nada. Útil para ocultar una capa entera. */
  visible: boolean;
  /** ITEM-45.a — factor de `escalaPorZoom` (1 = sin zoom). Ver AnnotationLayer. */
  zoom?: number;
};

/** Convierte un anillo de puntos [lon,lat] a la cadena `points` de un polyline/polygon. */
function ringToPoints(ring: number[][], project: Projector): string {
  return ring.map(([lon, lat]) => project(lon, lat).join(",")).join(" ");
}

function drawGeometry(
  geom: GeoJsonGeometry,
  project: Projector,
): { kind: "polygon"; path: string } | { kind: "line"; path: string } | { kind: "point"; x: number; y: number } | null {
  switch (geom.type) {
    case "Polygon": {
      const path = geom.coordinates.map((ring) => ringToPoints(ring, project)).join(" ");
      return { kind: "polygon", path };
    }
    case "MultiPolygon": {
      const path = geom.coordinates
        .map((poly) => poly.map((ring) => ringToPoints(ring, project)).join(" "))
        .join(" ");
      return { kind: "polygon", path };
    }
    case "LineString": {
      return { kind: "line", path: ringToPoints(geom.coordinates, project) };
    }
    case "MultiLineString": {
      const path = geom.coordinates.map((line) => ringToPoints(line, project)).join(" ");
      return { kind: "line", path };
    }
    case "Point": {
      const [x, y] = project(geom.coordinates[0], geom.coordinates[1]);
      return { kind: "point", x, y };
    }
    case "MultiPoint": {
      // Lo manejamos afuera (un punto por geometry).
      return null;
    }
    default:
      return null;
  }
}

export function GeoJsonLayer({ data, color, project, visible, zoom = 1 }: GeoJsonLayerProps) {
  if (!visible) return null;
  const elementos: { tipo: "polygon" | "line" | "point"; path?: string; cx?: number; cy?: number }[] = [];
  data.features.forEach((f: GeoJsonFeature) => {
    if (f.geometry.type === "MultiPoint") {
      f.geometry.coordinates.forEach(([lon, lat]) => {
        const [cx, cy] = project(lon, lat);
        elementos.push({ tipo: "point", cx, cy });
      });
      return;
    }
    const draw = drawGeometry(f.geometry, project);
    if (!draw) return;
    if (draw.kind === "polygon") elementos.push({ tipo: "polygon", path: draw.path });
    else if (draw.kind === "line") elementos.push({ tipo: "line", path: draw.path });
    else elementos.push({ tipo: "point", cx: draw.x, cy: draw.y });
  });
  return (
    <g aria-hidden="true" data-gj-layer="">
      {elementos.map((el, idx) => {
        if (el.tipo === "polygon") {
          return (
            <polygon
              key={idx}
              points={el.path}
              fill={color}
              fillOpacity={0.25}
              stroke={color}
              strokeOpacity={0.8}
              strokeWidth={1 * zoom}
              data-gj="polygon"
            />
          );
        }
        if (el.tipo === "line") {
          return (
            <polyline
              key={idx}
              points={el.path}
              fill="none"
              stroke={color}
              strokeOpacity={0.9}
              strokeWidth={1.5 * zoom}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-gj="line"
            />
          );
        }
        return (
          <circle
            key={idx}
            cx={el.cx}
            cy={el.cy}
            r={2.5 * zoom}
            fill={color}
            stroke="var(--c-surface)"
            strokeWidth={0.5 * zoom}
            data-gj="point"
          />
        );
      })}
    </g>
  );
}

export default GeoJsonLayer;
