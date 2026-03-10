export type TopologyLike = {
  type: "Topology";
  transform?: {
    scale: [number, number];
    translate: [number, number];
  };
  arcs: [number, number][][];
  objects: Record<string, TopologyObject>;
};

type TopologyObject = {
  type: "GeometryCollection";
  geometries: TopologyGeometry[];
};

type TopologyGeometry = {
  type: "Polygon" | "MultiPolygon";
  arcs: number[][] | number[][][];
  properties?: Record<string, unknown>;
};

export type CountryFeature = {
  type: "Feature";
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
  properties?: Record<string, unknown>;
};

function decodeArc(topology: TopologyLike, arcIndex: number): number[][] {
  const normalized = arcIndex >= 0 ? arcIndex : ~arcIndex;
  const encoded = topology.arcs[normalized] ?? [];

  let points: number[][];
  if (topology.transform) {
    // Coordinates are delta-encoded integers; apply quantization transform.
    const [sx, sy] = topology.transform.scale;
    const [tx, ty] = topology.transform.translate;
    let x = 0;
    let y = 0;
    points = encoded.map(([dx, dy]) => {
      x += dx;
      y += dy;
      return [x * sx + tx, y * sy + ty];
    });
  } else {
    // Coordinates are already absolute geographic values (no delta encoding).
    points = encoded.map(([x, y]) => [x, y]);
  }

  return arcIndex >= 0 ? points : points.slice().reverse();
}

function stitchRing(topology: TopologyLike, arcIndexes: number[]): number[][] {
  const ring: number[][] = [];
  arcIndexes.forEach((arcIndex, idx) => {
    const arc = decodeArc(topology, arcIndex);
    if (idx === 0) ring.push(...arc);
    else ring.push(...arc.slice(1));
  });
  return ring;
}

export function topologyToFeatures(topology: TopologyLike): CountryFeature[] {
  const objectName = Object.keys(topology.objects)[0];
  const object = objectName ? topology.objects[objectName] : null;
  if (!object || object.type !== "GeometryCollection") return [];

  return object.geometries
    .filter((geometry) => geometry.type === "Polygon" || geometry.type === "MultiPolygon")
    .map((geometry) => {
      if (geometry.type === "Polygon") {
        return {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: (geometry.arcs as number[][]).map((ring) => stitchRing(topology, ring)),
          },
          properties: geometry.properties,
        } satisfies CountryFeature;
      }

      return {
        type: "Feature",
        geometry: {
          type: "MultiPolygon",
          coordinates: (geometry.arcs as number[][][]).map((polygon) =>
            polygon.map((ring) => stitchRing(topology, ring))
          ),
        },
        properties: geometry.properties,
      } satisfies CountryFeature;
    });
}
