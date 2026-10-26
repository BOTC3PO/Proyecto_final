import { describe, it, expect } from "vitest";
import { migrateAnotaciones, migrateMapaConfig } from "../mapa.migrate";
import type { MapaAnotacion, MapaConfig } from "../types";

describe("migrateMapaConfig", () => {
  it("adds default layer to legacy config without capas", () => {
    const legacy: MapaConfig = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      anotaciones: [
        { id: "a1", tipo: "marcador", lat: 0, lon: 0, etiqueta: "X" },
      ],
    };
    const migrated = migrateMapaConfig(legacy);
    expect(migrated.capas).toHaveLength(1);
    expect(migrated.capas?.[0].id).toBe("default");
    expect(migrated.anotaciones[0].capaId).toBe("default");
  });

  it("is idempotent when called twice", () => {
    const legacy: MapaConfig = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      anotaciones: [],
    };
    const once = migrateMapaConfig(legacy);
    const twice = migrateMapaConfig(once);
    expect(twice).toEqual(once);
  });

  it("preserves existing capas if present", () => {
    const config: MapaConfig = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      capas: [{ id: "x", nombre: "X", color: "#000", visible: true }],
      anotaciones: [
        { id: "a1", tipo: "marcador", lat: 0, lon: 0, etiqueta: "Y", capaId: "x" },
      ],
    };
    const migrated = migrateMapaConfig(config);
    expect(migrated.capas?.[0].id).toBe("x");
  });

  it("assigns first capa to anotaciones without capaId", () => {
    const config: MapaConfig = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      capas: [{ id: "x", nombre: "X", color: "#000", visible: true }],
      anotaciones: [
        { id: "a1", tipo: "marcador", lat: 0, lon: 0, etiqueta: "Y" },
      ],
    };
    const migrated = migrateMapaConfig(config);
    expect(migrated.anotaciones[0].capaId).toBe("x");
  });

  it("migrates legacy flecha → ruta with flechaFinal=true", () => {
    const config: MapaConfig = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      capas: [{ id: "x", nombre: "X", color: "#000", visible: true }],
      anotaciones: [
        {
          id: "f1",
          tipo: "flecha",
          desde: [-60, -34],
          hasta: [-58, -32],
          etiqueta: "ida",
          color: "#f59e0b",
          capaId: "x",
          grosor: 3,
        },
      ],
    };
    const migrated = migrateMapaConfig(config);
    const a = migrated.anotaciones[0];
    expect(a.tipo).toBe("ruta");
    if (a.tipo === "ruta") {
      expect(a.puntos).toEqual([[-60, -34], [-58, -32]]);
      expect(a.flechaFinal).toBe(true);
      expect(a.etiqueta).toBe("ida");
      expect(a.color).toBe("#f59e0b");
      expect(a.capaId).toBe("x");
      expect(a.grosor).toBe(3);
    }
  });
});

describe("migrateAnotaciones (flecha → ruta)", () => {
  it("convierte una flecha en ruta con flechaFinal y conserva campos", () => {
    const flecha: MapaAnotacion = {
      id: "f1",
      tipo: "flecha",
      desde: [0, 0],
      hasta: [1, 1],
    };
    const out = migrateAnotaciones([flecha]);
    expect(out).toHaveLength(1);
    expect(out[0].tipo).toBe("ruta");
    const r = out[0] as Extract<MapaAnotacion, { tipo: "ruta" }>;
    expect(r.puntos).toEqual([[0, 0], [1, 1]]);
    expect(r.flechaFinal).toBe(true);
  });

  it("preserva el orden [lon, lat] en `puntos` (misma convención que `zona.puntos`)", () => {
    const flecha: MapaAnotacion = {
      id: "f2",
      tipo: "flecha",
      desde: [-60, -34],
      hasta: [-58, -32],
    };
    const out = migrateAnotaciones([flecha]);
    const r = out[0] as Extract<MapaAnotacion, { tipo: "ruta" }>;
    expect(r.puntos[0]).toEqual([-60, -34]);
    expect(r.puntos[1]).toEqual([-58, -32]);
  });

  it("no toca anotaciones que no son flecha (idempotente)", () => {
    const ruta: MapaAnotacion = {
      id: "r1",
      tipo: "ruta",
      puntos: [[0, 0], [1, 1]],
      flechaFinal: true,
    };
    const marcador: MapaAnotacion = {
      id: "m1",
      tipo: "marcador",
      lat: 0,
      lon: 0,
      etiqueta: "x",
    };
    const texto: MapaAnotacion = {
      id: "t1",
      tipo: "texto",
      lat: 0,
      lon: 0,
      contenido: "hola",
    };
    const out = migrateAnotaciones([ruta, marcador, texto]);
    expect(out).toEqual([ruta, marcador, texto]);
  });

  it("migrar dos veces produce el mismo resultado (idempotente)", () => {
    const flecha: MapaAnotacion = {
      id: "f1",
      tipo: "flecha",
      desde: [0, 0],
      hasta: [1, 1],
      color: "#f59e0b",
    };
    const once = migrateAnotaciones([flecha]);
    const twice = migrateAnotaciones(once);
    expect(twice).toEqual(once);
  });

  it("migrateMapaConfig es idempotente sobre configs con flechas", () => {
    const config: MapaConfig = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      anotaciones: [
        { id: "f1", tipo: "flecha", desde: [0, 0], hasta: [1, 1] },
        { id: "f2", tipo: "flecha", desde: [2, 2], hasta: [3, 3] },
      ],
    };
    const once = migrateMapaConfig(config);
    const twice = migrateMapaConfig(once);
    expect(twice).toEqual(once);
  });

  it("preserva capas con geojson embebido (round-trip)", () => {
    const gj = {
      type: "FeatureCollection" as const,
      features: [{ type: "Feature" as const, geometry: { type: "Point" as const, coordinates: [0, 0] as [number, number] }, properties: {} }],
    };
    const config: MapaConfig = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      capas: [
        { id: "c1", nombre: "Mi capa", color: "#000", visible: true, geojson: { nombre: "lugares.geojson", data: gj } },
      ],
      anotaciones: [],
    };
    const once = migrateMapaConfig(config);
    const twice = migrateMapaConfig(once);
    expect(twice).toEqual(once);
    expect(once.capas?.[0].geojson?.data).toEqual(gj);
  });
});
