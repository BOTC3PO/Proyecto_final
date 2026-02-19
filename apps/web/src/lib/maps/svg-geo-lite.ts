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

export function createMercatorPathGenerator(
  features: CountryFeature[],
  width: number,
  height: number
): (feature: CountryFeature) => string {
  const allPoints = collectPoints(features);
  const longitudes = allPoints.map((point) => point[0]);
  const latitudes = allPoints.map((point) => point[1]);
  const minLon = Math.min(...longitudes);
  const maxLon = Math.max(...longitudes);
  const minLat = Math.max(-85, Math.min(...latitudes));
  const maxLat = Math.min(85, Math.max(...latitudes));

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
