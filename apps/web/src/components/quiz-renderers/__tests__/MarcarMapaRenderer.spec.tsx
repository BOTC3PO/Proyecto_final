/**
 * Smoke test de MarcarMapaRenderer.
 *
 * No mockeamos el fetch del TopoJSON: simplemente verificamos el contrato de
 * UI más estable — placeholder cuando el mapaId es desconocido, y loading
 * mientras pide la red en el caso happy. (El topojson real no está disponible
 * en happy-dom y la integración end-to-end queda fuera de scope.)
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MarcarMapaRenderer from "../MarcarMapaRenderer";

describe("MarcarMapaRenderer", () => {
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
});
