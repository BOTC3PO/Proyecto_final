import { describe, expect, it } from "vitest";
import {
  SCORING_SYSTEMS,
  getScoringSystem,
  DEFAULT_SCORING_SYSTEM_ID,
} from "../../src/scoring/catalog.js";
import type { BandedScoringSystem } from "../../src/scoring/types.js";

const EXPECTED_IDS = [
  "scale-1-10",
  "scale-0-100",
  "pass-fail",
  "scale-a-f",
  "scale-s-f",
  "scale-s-a-b-c-d",
  "scale-gpa",
  "scale-canadian",
  "scale-es",
  "scale-rarity",
];

describe("scoring catalog", () => {
  it("define los 10 sistemas", () => {
    expect(SCORING_SYSTEMS).toHaveLength(10);
    expect(SCORING_SYSTEMS.map((s) => s.id).sort()).toEqual([...EXPECTED_IDS].sort());
  });

  it("getScoringSystem resuelve por id y devuelve undefined para ids desconocidos", () => {
    expect(getScoringSystem("scale-gpa")?.kind).toBe("numeric");
    expect(getScoringSystem("nope")).toBeUndefined();
    expect(getScoringSystem(undefined)).toBeUndefined();
  });

  it("el sistema por defecto existe en el catálogo", () => {
    expect(getScoringSystem(DEFAULT_SCORING_SYSTEM_ID)).toBeDefined();
  });

  const banded = SCORING_SYSTEMS.filter(
    (s): s is BandedScoringSystem => s.kind === "banded"
  );

  it.each(banded)(
    "bandas de $id son continuas, sin huecos y cubren [0,100]",
    (system) => {
      const sorted = [...system.bands].sort((a, b) => a.minPct - b.minPct);
      expect(sorted[0].minPct).toBe(0);
      expect(sorted[sorted.length - 1].maxPct).toBe(100);
      for (let i = 0; i < sorted.length - 1; i++) {
        // semiabierto y sin huecos: el techo de una banda == piso de la siguiente
        expect(sorted[i].maxPct).toBe(sorted[i + 1].minPct);
        expect(sorted[i].minPct).toBeLessThan(sorted[i].maxPct);
      }
    }
  );

  it.each(banded)(
    "la banda de aprobación por defecto de $id existe",
    (system) => {
      expect(
        system.bands.some((b) => b.display === system.defaultPassingDisplay)
      ).toBe(true);
    }
  );

  it("no almacena equivalencias como strings (canonical10 es número)", () => {
    for (const system of banded) {
      for (const band of system.bands) {
        expect(typeof band.canonical10).toBe("number");
      }
    }
  });
});
