/**
 * PLAN-M — borrador de mapa demo→cuenta (localStorage, TTL 48h).
 */
import { describe, expect, it, vi, afterEach } from "vitest";
import { saveDraft, loadDraft, clearDraft } from "../mapa-draft";
import type { MapaConfig } from "../../../components/modulos/standalone/types";

function cfg(): MapaConfig {
  return {
    tool: "mapa",
    titulo: "Mi mapa demo",
    modo: "political",
    escala: "110m",
    capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
    anotaciones: [{ id: "m1", tipo: "marcador", lat: 10, lon: 20, etiqueta: "Casa" }],
  };
}

afterEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("mapa-draft (PLAN-M)", () => {
  it("round-trip: guardar y restaurar devuelve la misma config (capas, anotaciones, título)", () => {
    saveDraft(cfg());
    expect(loadDraft()).toEqual(cfg());
  });

  it("sin borrador guardado, devuelve null", () => {
    expect(loadDraft()).toBeNull();
  });

  it("borrador expirado (>48h) no se restaura y queda limpio", () => {
    const now = Date.now();
    vi.spyOn(Date, "now").mockReturnValue(now);
    saveDraft(cfg());

    vi.spyOn(Date, "now").mockReturnValue(now + 49 * 60 * 60 * 1000);
    expect(loadDraft()).toBeNull();
    // Segunda lectura también null: la expiración limpió el storage, no sólo la ignoró esta vez.
    expect(loadDraft()).toBeNull();
  });

  it("borrador dentro del TTL (47h) sí se restaura", () => {
    const now = Date.now();
    vi.spyOn(Date, "now").mockReturnValue(now);
    saveDraft(cfg());

    vi.spyOn(Date, "now").mockReturnValue(now + 47 * 60 * 60 * 1000);
    expect(loadDraft()).toEqual(cfg());
  });

  it("config demasiado grande no se guarda (degrada con aviso, no falla en silencio)", () => {
    const huge = cfg();
    huge.anotaciones = Array.from({ length: 100000 }, (_, i) => ({
      id: `a${i}`,
      tipo: "marcador" as const,
      lat: 0,
      lon: 0,
      etiqueta: "x".repeat(50),
    }));
    expect(saveDraft(huge)).toBe(false);
    expect(loadDraft()).toBeNull();
  });

  it("clearDraft borra el borrador", () => {
    saveDraft(cfg());
    clearDraft();
    expect(loadDraft()).toBeNull();
  });
});
