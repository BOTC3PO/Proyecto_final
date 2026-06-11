import { describe, expect, it } from "vitest";
import { computeHint } from "../mapa-editor-hint";

describe("computeHint", () => {
  it("select: arrastrar/zoom", () => {
    const h = computeHint({ tool: "select", pendingAreaLen: 0, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: null });
    expect(h.visual).toMatch(/Arrastrá/);
  });

  it("marcador: 1 paso claro", () => {
    const h = computeHint({ tool: "marcador", pendingAreaLen: 0, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: null });
    expect(h.visual).toMatch(/Click en el mapa/);
    expect(h.aria).toBeTruthy();
  });

  it("texto: deriva al inspector", () => {
    const h = computeHint({ tool: "texto", pendingAreaLen: 0, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: null });
    expect(h.visual).toMatch(/inspector/);
    expect(h.aria).toMatch(/inspector/);
  });

  describe("ruta multipunto", () => {
    it("0 puntos: empezar", () => {
      const h = computeHint({ tool: "ruta", pendingAreaLen: 0, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: null });
      expect(h.visual).toMatch(/empezar/);
    });
    it("1 punto: agregar más", () => {
      const h = computeHint({ tool: "ruta", pendingAreaLen: 0, pendingRutaLen: 1, pendingMedir: false, medidaFijadaKm: null });
      expect(h.visual).toMatch(/mínimo 2/);
    });
    it("2+ puntos: cerrar / cancelar", () => {
      const h = computeHint({ tool: "ruta", pendingAreaLen: 0, pendingRutaLen: 2, pendingMedir: false, medidaFijadaKm: null });
      expect(h.visual).toMatch(/Doble click/);
      expect(h.visual).toMatch(/Esc/);
    });
  });

  describe("área", () => {
    it("0 puntos: empezar", () => {
      const h = computeHint({ tool: "area", pendingAreaLen: 0, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: null });
      expect(h.visual).toMatch(/empezar/);
    });
    it("1-2 puntos: agregar más (mínimo 3)", () => {
      const h1 = computeHint({ tool: "area", pendingAreaLen: 1, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: null });
      const h2 = computeHint({ tool: "area", pendingAreaLen: 2, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: null });
      expect(h1.visual).toMatch(/mínimo 3/);
      expect(h2.visual).toMatch(/mínimo 3/);
    });
    it("3+ puntos: ofrece dblclick/Enter/click-1er-punto", () => {
      const h = computeHint({ tool: "area", pendingAreaLen: 3, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: null });
      expect(h.visual).toMatch(/Doble click/);
      expect(h.visual).toMatch(/Enter/);
      expect(h.visual).toMatch(/primer punto/);
    });
  });

  describe("medir", () => {
    it("sin origen: pedir inicial", () => {
      const h = computeHint({ tool: "medir", pendingAreaLen: 0, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: null });
      expect(h.visual).toMatch(/inicial/);
    });
    it("con origen: pedir final", () => {
      const h = computeHint({ tool: "medir", pendingAreaLen: 0, pendingRutaLen: 0, pendingMedir: true, medidaFijadaKm: null });
      expect(h.visual).toMatch(/final/);
    });
    it("fijada: muestra km y Enter para guardar", () => {
      const h = computeHint({ tool: "medir", pendingAreaLen: 0, pendingRutaLen: 0, pendingMedir: false, medidaFijadaKm: 1234.5 });
      expect(h.visual).toMatch(/1\.235 km/);
      expect(h.visual).toMatch(/Enter/);
      expect(h.aria).toMatch(/1\.235/);
    });
  });
});
