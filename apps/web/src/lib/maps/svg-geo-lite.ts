import type { CountryFeature } from "./topojson-lite";

type Point = [number, number];

function collectPoints(features: CountryFeature[]): Point[] {
  const points: Point[] = [];
  features.forEach((feature) => {
    if (feature.geometry.type === "Polygon") {
      feature.geometry.coordinates.forEach((ring) => {
        ring.forEach((point) => points.push(point as Point));
      });
      return;
    }

    feature.geometry.coordinates.forEach((polygon) => {
      polygon.forEach((ring) => {
        ring.forEach((point) => points.push(point as Point));
      });
    });
  });
  return points;
}

function computeBounds(features: CountryFeature[]) {
  const allPoints = collectPoints(features);
  const longitudes = allPoints.map((point) => point[0]);
  const latitudes = allPoints.map((point) => point[1]);
  return {
    minLon: Math.min(...longitudes),
    maxLon: Math.max(...longitudes),
    minLat: Math.max(-85, Math.min(...latitudes)),
    maxLat: Math.min(85, Math.max(...latitudes)),
  };
}

export function createMercatorPathGenerator(
  features: CountryFeature[],
  width: number,
  height: number
): (feature: CountryFeature) => string {
  const { minLon, maxLon, minLat, maxLat } = computeBounds(features);

  const project = ([lon, lat]: Point): Point => {
    const x = ((lon - minLon) / (maxLon - minLon)) * width;
    const clampedLat = Math.max(-85, Math.min(85, lat));
    const mercY = Math.log(Math.tan(Math.PI / 4 + (clampedLat * Math.PI) / 360));
    const minMercY = Math.log(Math.tan(Math.PI / 4 + (minLat * Math.PI) / 360));
    const maxMercY = Math.log(Math.tan(Math.PI / 4 + (maxLat * Math.PI) / 360));
    const y = ((maxMercY - mercY) / (maxMercY - minMercY)) * height;
    return [x, y];
  };

  const ringToPath = (ring: number[][]) => {
    const commands = ring.map((point, index) => {
      const [x, y] = project(point as Point);
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    });
    return `${commands.join(" ")} Z`;
  };

  return (feature: CountryFeature) => {
    if (feature.geometry.type === "Polygon") {
      return feature.geometry.coordinates.map((ring) => ringToPath(ring as number[][])).join(" ");
    }
    return feature.geometry.coordinates
      .map((polygon) =>
        polygon.map((ring) => ringToPath(ring as number[][])).join(" ")
      )
      .join(" ");
  };
}

/** Projects geographic [lon, lat] to SVG [x, y] using the same Mercator logic. */
export function createProjector(
  features: CountryFeature[],
  width: number,
  height: number
): (lon: number, lat: number) => [number, number] {
  const { minLon, maxLon, minLat, maxLat } = computeBounds(features);
  const minMercY = Math.log(Math.tan(Math.PI / 4 + (minLat * Math.PI) / 360));
  const maxMercY = Math.log(Math.tan(Math.PI / 4 + (maxLat * Math.PI) / 360));

  return (lon: number, lat: number): [number, number] => {
    const x = ((lon - minLon) / (maxLon - minLon)) * width;
    const clampedLat = Math.max(-85, Math.min(85, lat));
    const mercY = Math.log(Math.tan(Math.PI / 4 + (clampedLat * Math.PI) / 360));
    const y = ((maxMercY - mercY) / (maxMercY - minMercY)) * height;
    return [x, y];
  };
}

/** Converts SVG [x, y] back to geographic [lon, lat] (inverse Mercator). */
export function createInverseProjector(
  features: CountryFeature[],
  width: number,
  height: number
): (x: number, y: number) => [number, number] {
  const { minLon, maxLon, minLat, maxLat } = computeBounds(features);
  const minMercY = Math.log(Math.tan(Math.PI / 4 + (minLat * Math.PI) / 360));
  const maxMercY = Math.log(Math.tan(Math.PI / 4 + (maxLat * Math.PI) / 360));

  return (x: number, y: number): [number, number] => {
    const lon = (x / width) * (maxLon - minLon) + minLon;
    const mercY = maxMercY - (y / height) * (maxMercY - minMercY);
    const lat = (Math.atan(Math.exp(mercY)) - Math.PI / 4) * 360 / Math.PI;
    return [lon, lat];
  };
}
