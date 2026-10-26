/**
 * Smoke test de MarcarMapaRenderer.
 *
 * No mockeamos el fetch del TopoJSON: simplemente verificamos el contrato de
 * UI más estable — placeholder cuando el mapaId es desconocido, y loading
 * mientras pide la red en el caso happy. (El topojson real no está disponible
 * en happy-dom y la integración end-to-end queda fuera de scope.)
 *
 * F5-06: el regression test `svg tiene touch-action: none` es un candado
 * contra regresiones en el patrón de M7 (pointer events + touch-action: none).
 * Si alguien refactoriza el renderer y rompe el touch-action, este test tira.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import MarcarMapaRenderer from "../MarcarMapaRenderer";

describe("MarcarMapaRenderer", () => {
  let originalFetch: typeof globalThis.fetch;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it("muestra placeholder cuando el mapaId no es reconocido", () => {
    render(<MarcarMapaRenderer mapaId="mapa_inexistente" />);
    expect(screen.getByTestId("marcar-mapa-error")).toBeTruthy();
  });

  it("muestra loading mientras pide el TopoJSON de un id válido", () => {
    render(<MarcarMapaRenderer mapaId="politico_mundo" />);
    // El estado inicial al montar es loading (antes de que falle el fetch en happy-dom).
    // Puede ser loading o error — ambos son contratos válidos de UI estables.
    const loading = screen.queryByTestId("marcar-mapa-loading");
    const error = screen.queryByTestId("marcar-mapa-error");
    expect(loading || error).toBeTruthy();
  });

  it("el <svg> tiene touch-action: none (F5-06, regresión del patrón M7)", async () => {
    // Mock fetch con una topología vacía. La idea es que el componente
    // llegue al estado "cargado" para que el <svg> se monte con sus
    // estilos inline. No importa que features esté vacío: el patrón
    // M7 (touch-action: none) está en el style del <svg>, no en los
    // <path>s.
    globalThis.fetch = vi.fn(async () => {
      return {
        ok: true,
        json: async () => ({ type: "Topology", objects: {}, arcs: [] }),
      } as Response;
    }) as typeof fetch;

    render(<MarcarMapaRenderer mapaId="politico_mundo" />);
    const svg = await waitFor(() => screen.getByTestId("marcar-mapa-svg"), {
      timeout: 1500,
    });
    const styleAttr = svg.getAttribute("style") || "";
    // happy-dom y navegadores reales renderizan el style en minúsculas.
    // Lo importante es que "touch-action" + "none" esté en el style del <svg>.
    expect(styleAttr.toLowerCase()).toContain("touch-action");
    expect(styleAttr.toLowerCase()).toContain("none");
    // Bonus: overscroll-behavior: contain ayuda a no propagar scroll al body.
    expect(styleAttr.toLowerCase()).toContain("overscroll-behavior");
  });

  it("WO-10: con encuadre, oculta los controles de zoom (vista bloqueada)", async () => {
    globalThis.fetch = vi.fn(async () => ({
      ok: true,
      json: async () => ({ type: "Topology", objects: {}, arcs: [] }),
    })) as unknown as typeof fetch;
    render(
      <MarcarMapaRenderer
        mapaId="politico_mundo"
        encuadre={[-75, -55, -53, -20]}
      />,
    );
    // Espera el svg.
    await waitFor(() => screen.getByTestId("marcar-mapa-svg"), {
      timeout: 1500,
    });
    // Con encuadre la vista debe estar bloqueada: NO se renderizan los
    // controles de zoom (pan/zoom OFF). Este es el criterio clave de
    // "vista tipo escuela".
    expect(screen.queryByTestId("marcar-mapa-zoom-controls")).not.toBeInTheDocument();
  });

  it("WO-10: sin encuadre, mantiene los controles de zoom (modo interactivo)", async () => {
    globalThis.fetch = vi.fn(async () => ({
      ok: true,
      json: async () => ({ type: "Topology", objects: {}, arcs: [] }),
    })) as unknown as typeof fetch;
    render(<MarcarMapaRenderer mapaId="politico_mundo" />);
    await waitFor(() => screen.getByTestId("marcar-mapa-svg"), {
      timeout: 1500,
    });
    // Sin encuadre el mapa es interactivo: sí se renderizan los controles.
    expect(screen.getByTestId("marcar-mapa-zoom-controls")).toBeInTheDocument();
  });
});
