/**
 * FIX-MAPA-LEAFLET-OVERLAY — bug 6.1 de
 * `docs/qa/test-parte-3-profesor.md`.
 *
 * Al reproducir un módulo que contiene un mapa interactivo, los
 * botones de zoom (MapaStandalone) usan `position: absolute` y
 * necesitan un ancestro con `position: relative` para anclarse.
 * Antes el contenedor del lienzo era un `flex-1` plano, así que
 * los botones se posicionaban contra el body/layout y aparecían
 * ARRIBA del mapa en lugar de flotar sobre el canvas.
 *
 * FIX: agregamos `position: relative` explícito al wrapper del
 * canvas en `MapaStandalone.tsx:448`. Este test valida que el
 * contenedor tenga la clase `relative` (que CSS la mapea a
 * `position: relative`).
 */

import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, waitFor } from "@testing-library/react";
import MapaStandalone from "../MapaStandalone";

vi.mock("../../../../lib/maps/svg-geo-lite", () => ({
  projectPoliticalMap: vi.fn(async () => null),
  projectPhysicalMap: vi.fn(async () => null),
  projectTopographicMap: vi.fn(async () => null),
  inverseProjectPolitical: vi.fn(() => null),
  inverseProjectPhysical: vi.fn(() => null),
  inverseProjectTopographic: vi.fn(() => null),
}));

beforeAll(() => {
  // Mockeamos `fetch` para evitar el `ECONNREFUSED 127.0.0.1:3000`
  // en jsdom (MapaStandalone pide un TopoJSON al servidor).
  // Devolvemos un payload mínimo válido para que el componente
  // renderice el SVG en vez del panel de error.
  globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = typeof input === "string" ? input : input.toString();
    if (url.includes("/api/maps/")) {
      return new Response(
        JSON.stringify({
          type: "Topology",
          objects: { countries: { type: "GeometryCollection", geometries: [] } },
          arcs: [],
          transform: { scale: [1, 1], translate: [0, 0] },
        }),
        { status: 200, headers: { "content-type": "application/json" } },
      );
    }
    return new Response("{}", { status: 200 });
  }) as unknown as typeof fetch;
});

const baseConfig = {
  tool: "mapa" as const,
  modo: "political" as const,
  escala: "110m" as const,
  anotaciones: [],
};

describe("FIX-MAPA-LEAFLET-OVERLAY: el canvas del mapa ancla los overlays", () => {
  it("(a) el contenedor del lienzo tiene la clase 'relative' (position: relative)", async () => {
    const { container } = render(
      <MapaStandalone config={baseConfig} editable={false} />,
    );
    // FIX-MAPA-LEAFLET-OVERLAY — el wrapper del mapa debe tener la
    // clase `relative` (FIX en MapaStandalone.tsx:448). Sin esta
    // clase, los botones de zoom (position: absolute) se anclaban
    // contra el body/layout y aparecían ARRIBA del canvas.
    const wrappers = Array.from(container.querySelectorAll("div")).filter(
      (el) => el.className && /\brelative\b/.test(el.className),
    );
    // El wrapper del mapa tiene la clase `relative` que sumamos
    // nosotros; basta con que exista AL MENOS uno dentro del
    // contenedor del mapa (el que renderiza el SVG del lienzo).
    expect(wrappers.length).toBeGreaterThan(0);
    // Esperamos a que el mapa termine de cargar (cambia a
    // `mapStatus: "ready"`) y se renderice el SVG.
    await waitFor(() => {
      expect(container.querySelector("svg[role='img']")).toBeTruthy();
    });
  });

  it("(b) los botones de zoom están dentro del wrapper 'relative' del mapa", async () => {
    const { container, getByTestId } = render(
      <MapaStandalone config={baseConfig} editable={false} />,
    );
    await waitFor(() => {
      expect(getByTestId("mapa-zoom-controls")).toBeInTheDocument();
    });
    const zoomControls = getByTestId("mapa-zoom-controls");
    // El botón de zoom es un descendiente directo del wrapper
    // `relative` (FIX). Si NO lo fuera, se anclaría al body/
    // layout y se vería ARRIBA del mapa (bug 6.1).
    const wrapper = zoomControls.closest("div.relative") as HTMLElement | null;
    expect(wrapper).toBeTruthy();
  });
});
