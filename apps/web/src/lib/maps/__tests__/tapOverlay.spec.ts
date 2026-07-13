import { describe, expect, it } from "vitest";
import { needsTapOverlay, tapOverlayRadius } from "../tapOverlay";

describe("needsTapOverlay", () => {
  const fullWorld = { w: 960, h: 520 };

  it("una feature grande (país como Brasil) no necesita overlay", () => {
    expect(needsTapOverlay({ w: 120, h: 100 }, fullWorld)).toBe(false);
  });

  it("una feature minúscula (CABA a escala nacional) sí necesita overlay", () => {
    expect(needsTapOverlay({ w: 3, h: 2 }, fullWorld)).toBe(true);
  });

  it("se autocorrige al hacer zoom: la misma feature deja de necesitarlo con viewBox chico", () => {
    const zoomedIn = { w: 60, h: 32.5 };
    expect(needsTapOverlay({ w: 3, h: 2 }, zoomedIn)).toBe(false);
  });

  it("bbox o viewBox inválidos (0 o negativos) no rompen, devuelven false", () => {
    expect(needsTapOverlay({ w: 0, h: 0 }, fullWorld)).toBe(false);
    expect(needsTapOverlay({ w: 5, h: 5 }, { w: 0, h: 0 })).toBe(false);
  });
});

describe("tapOverlayRadius", () => {
  it("escala con el lado mayor del viewBox visible", () => {
    expect(tapOverlayRadius({ w: 960, h: 520 })).toBeCloseTo(960 * 0.018);
    expect(tapOverlayRadius({ w: 60, h: 32.5 })).toBeCloseTo(60 * 0.018);
  });
});
