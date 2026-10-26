import { describe, expect, it } from "vitest";
import { mapaBaseUrl } from "../base-url";

describe("mapaBaseUrl", () => {
  it("political 110m → countries_110m", () => {
    expect(mapaBaseUrl("political", "110m")).toBe(
      "/api/maps/political/earth/countries_110m.topo.json",
    );
  });

  it("political 50m → countries_50m", () => {
    expect(mapaBaseUrl("political", "50m")).toBe(
      "/api/maps/political/earth/countries_50m.topo.json",
    );
  });

  it("physical 110m → land_110m (no countries_)", () => {
    expect(mapaBaseUrl("physical", "110m")).toBe(
      "/api/maps/physical/earth/land_110m.topo.json",
    );
  });

  it("physical 50m → land_50m (no countries_)", () => {
    expect(mapaBaseUrl("physical", "50m")).toBe(
      "/api/maps/physical/earth/land_50m.topo.json",
    );
  });
});
