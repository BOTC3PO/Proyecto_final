import { describe, it, expect } from "vitest";
import { migrateMapaConfig } from "../mapa.migrate";
import type { MapaConfig } from "../types";

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
});
