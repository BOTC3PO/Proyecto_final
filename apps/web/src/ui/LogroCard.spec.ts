import { describe, expect, it } from "vitest";
import { getTier } from "./LogroCard";

describe("getTier", () => {
  it("bloquea por debajo de 60%", () => {
    expect(getTier(0).tier).toBe("bloqueado");
    expect(getTier(59).tier).toBe("bloqueado");
  });

  it("banda Común 60-79%, intensidad creciente dentro de la banda", () => {
    expect(getTier(60).tier).toBe("comun");
    expect(getTier(60).intensidad).toBeCloseTo(0, 5);
    expect(getTier(79).tier).toBe("comun");
    expect(getTier(79).intensidad).toBeGreaterThan(getTier(60).intensidad);
  });

  it("banda Dorado 80-94%", () => {
    expect(getTier(80).tier).toBe("dorado");
    expect(getTier(94).tier).toBe("dorado");
    expect(getTier(94).intensidad).toBeGreaterThan(getTier(80).intensidad);
  });

  it("banda Platino 95-99%, sin marcar 'perfecto'", () => {
    expect(getTier(95).tier).toBe("platino");
    expect(getTier(95).esPerfecto).toBe(false);
    expect(getTier(99).esPerfecto).toBe(false);
    expect(getTier(99).intensidad).toBeGreaterThan(getTier(95).intensidad);
  });

  it("100% exacto es Platino + esPerfecto (el remate único)", () => {
    const t = getTier(100);
    expect(t.tier).toBe("platino");
    expect(t.esPerfecto).toBe(true);
    expect(t.intensidad).toBeCloseTo(1, 5);
  });

  it("clampea valores fuera de rango", () => {
    expect(getTier(-10).tier).toBe("bloqueado");
    expect(getTier(150).tier).toBe("platino");
    expect(getTier(150).esPerfecto).toBe(true);
  });
});
