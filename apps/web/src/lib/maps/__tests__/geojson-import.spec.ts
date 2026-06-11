import { describe, expect, it } from "vitest";
import { GEOJSON_MAX_BYTES, validarGeoJsonText } from "../geojson-import";

describe("validarGeoJsonText", () => {
  it("acepta un FeatureCollection válido con Point", () => {
    const text = JSON.stringify({
      type: "FeatureCollection",
      features: [
        { type: "Feature", geometry: { type: "Point", coordinates: [0, 0] }, properties: {} },
      ],
    });
    const r = validarGeoJsonText(text, text.length);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.data.features).toHaveLength(1);
      expect(r.advertencias).toHaveLength(0);
    }
  });

  it("acepta un FeatureCollection válido con Polygon y LineString", () => {
    const text = JSON.stringify({
      type: "FeatureCollection",
      features: [
        { type: "Feature", geometry: { type: "Polygon", coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]] }, properties: {} },
        { type: "Feature", geometry: { type: "LineString", coordinates: [[0, 0], [2, 2]] }, properties: {} },
      ],
    });
    const r = validarGeoJsonText(text, text.length);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.data.features).toHaveLength(2);
  });

  it("rechaza JSON inválido", () => {
    const r = validarGeoJsonText("{not json", 10);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/JSON/);
  });

  it("rechaza si type no es FeatureCollection", () => {
    const r = validarGeoJsonText(JSON.stringify({ type: "Feature", geometry: { type: "Point", coordinates: [0, 0] } }), 50);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/FeatureCollection/);
  });

  it("rechaza si features está vacío", () => {
    const r = validarGeoJsonText(JSON.stringify({ type: "FeatureCollection", features: [] }), 50);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/feature/);
  });

  it("rechaza si ninguna feature tiene geometría soportada", () => {
    const r = validarGeoJsonText(JSON.stringify({
      type: "FeatureCollection",
      features: [{ type: "Feature", geometry: { type: "Point", coordinates: [0] }, properties: {} }],
    }), 80);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/soportada/);
  });

  it("rechaza geometrías no soportadas (ej. GeometryCollection)", () => {
    const r = validarGeoJsonText(JSON.stringify({
      type: "FeatureCollection",
      features: [{ type: "Feature", geometry: { type: "GeometryCollection", geometries: [] }, properties: {} }],
    }), 100);
    expect(r.ok).toBe(false);
  });

  it("advierte (no rechaza) archivos > 300 KB", () => {
    const features = [];
    // Construir un Polygon con muchos puntos y un `properties` inflado para
    // superar los 300 KB serializado sin tocar la lógica de validación.
    const ring: number[][] = [];
    for (let i = 0; i < 20000; i++) ring.push([i * 0.001, i * 0.001]);
    features.push({ type: "Feature", geometry: { type: "Polygon", coordinates: [ring] }, properties: { name: "x".repeat(1000) } });
    const text = JSON.stringify({ type: "FeatureCollection", features });
    expect(text.length).toBeGreaterThan(300 * 1024);
    const r = validarGeoJsonText(text, text.length);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.advertencias.length).toBeGreaterThan(0);
  });

  it("rechaza archivos > 2 MB", () => {
    const r = validarGeoJsonText("{}", GEOJSON_MAX_BYTES + 1);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/2 MB/);
  });

  it("descarta features inválidas y conserva las válidas", () => {
    const r = validarGeoJsonText(JSON.stringify({
      type: "FeatureCollection",
      features: [
        { type: "Feature", geometry: { type: "Point", coordinates: [0, 0] }, properties: {} },
        { type: "Feature", geometry: { type: "Point", coordinates: [1] }, properties: {} }, // inválida
      ],
    }), 100);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.data.features).toHaveLength(1);
      expect(r.advertencias[0]).toMatch(/descartada/);
    }
  });
});
