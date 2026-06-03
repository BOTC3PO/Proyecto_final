/**
 * Tests de GeneradorDocsPanel (work order 04).
 *
 * Estrategia: mockeamos `apiGet` para devolver doc de variables o rechazar
 * (generador sin doc). Verificamos que se muestran variables + ejemplos, la
 * receta de cableado, y la degradación elegante.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const apiGet = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...args: unknown[]) => apiGet(...args),
}));

import GeneradorDocsPanel from "../GeneradorDocsPanel";
import { __clearGeneradorDocsCache } from "../generadorDocsCache";

const DOCS = {
  subtipos: {
    MRU: {
      descripcion: "Movimiento Rectilíneo Uniforme: distancia = velocidad × tiempo",
      variables: {
        v: { descripcion: "Velocidad constante en m/s", ejemplo: "15" },
        t: { descripcion: "Tiempo de desplazamiento en s", ejemplo: "8" },
      },
    },
    MRUV: {
      descripcion: "Movimiento variado",
      variables: {
        a: { descripcion: "Aceleración", ejemplo: "2" },
      },
    },
  },
};

describe("GeneradorDocsPanel", () => {
  beforeEach(() => {
    apiGet.mockReset();
    __clearGeneradorDocsCache();
  });

  it("pide la doc al endpoint correcto (cat/name) ignorando el subtipo", async () => {
    apiGet.mockResolvedValue(DOCS);
    render(<GeneradorDocsPanel generadorId="fisica/cinematica/MRU" />);
    await waitFor(() => expect(apiGet).toHaveBeenCalled());
    expect(apiGet).toHaveBeenCalledWith(
      "/api/generators/fisica/cinematica/docs",
      expect.objectContaining({ signal: expect.any(AbortSignal) }),
    );
  });

  it("cachea la doc: dos paneles con el mismo cat/name la piden una sola vez", async () => {
    apiGet.mockResolvedValue(DOCS);
    const { unmount } = render(
      <GeneradorDocsPanel generadorId="fisica/cinematica/MRU" />,
    );
    await waitFor(() => expect(apiGet).toHaveBeenCalledTimes(1));
    unmount();
    // Segundo panel del mismo generador: sale del cache, sin refetch.
    render(<GeneradorDocsPanel generadorId="fisica/cinematica/MRUV" />);
    await waitFor(() =>
      expect(screen.getByText(/Movimiento variado/)).toBeInTheDocument(),
    );
    expect(apiGet).toHaveBeenCalledTimes(1);
  });

  it("variant formulario: muestra la guía del profe (sin sintaxis DSL)", async () => {
    apiGet.mockResolvedValue(DOCS);
    const onInsertVariable = vi.fn();
    render(
      <GeneradorDocsPanel
        generadorId="fisica/cinematica/MRU"
        variant="formulario"
        onInsertVariable={onInsertVariable}
      />,
    );
    await waitFor(() =>
      expect(screen.getByText(/Cómo armar este ejercicio/)).toBeInTheDocument(),
    );
    // No aparece la receta DSL.
    expect(screen.queryByText(/Cómo cablearlo en VBLang/)).toBeNull();
    // Tocar una variable la inserta como {token}.
    await userEvent.click(
      screen.getByRole("button", { name: /insertar variable v en el enunciado/i }),
    );
    expect(onInsertVariable).toHaveBeenCalledWith("{v}");
  });

  it("con subtipo fijo muestra solo ese subtipo, sus variables y ejemplos", async () => {
    apiGet.mockResolvedValue(DOCS);
    render(<GeneradorDocsPanel generadorId="fisica/cinematica/MRU" />);
    await waitFor(() =>
      expect(screen.getByText(/Movimiento Rectilíneo Uniforme/)).toBeInTheDocument(),
    );
    // Variables del subtipo MRU con su ejemplo.
    expect(screen.getAllByText("{v}").length).toBeGreaterThan(0);
    expect(screen.getByText("Velocidad constante en m/s")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();
    // No debe mostrar el otro subtipo.
    expect(screen.queryByText("Movimiento variado")).toBeNull();
  });

  it("sin subtipo fijo muestra todos los subtipos", async () => {
    apiGet.mockResolvedValue(DOCS);
    render(<GeneradorDocsPanel generadorId="fisica/cinematica" />);
    await waitFor(() =>
      expect(screen.getByText("Movimiento variado")).toBeInTheDocument(),
    );
    expect(screen.getByText(/Movimiento Rectilíneo Uniforme/)).toBeInTheDocument();
  });

  it("muestra la receta de cableado con el id y una variable de ejemplo", async () => {
    apiGet.mockResolvedValue(DOCS);
    render(<GeneradorDocsPanel generadorId="fisica/cinematica/MRU" />);
    await waitFor(() =>
      expect(screen.getByText(/Cómo cablearlo en VBLang/)).toBeInTheDocument(),
    );
    expect(
      screen.getByText("generador: fisica/cinematica/MRU"),
    ).toBeInTheDocument();
    // La interpolación de ejemplo usa la primera variable del subtipo.
    expect(screen.getAllByText("{v}").length).toBeGreaterThan(0);
  });

  it("degrada elegante cuando el generador no tiene doc (apiGet rechaza)", async () => {
    apiGet.mockRejectedValue(new Error("not found"));
    render(<GeneradorDocsPanel generadorId="custom/sin_doc" />);
    await waitFor(() =>
      expect(
        screen.getByText(/no tiene documentación de variables/i),
      ).toBeInTheDocument(),
    );
    // Aún así muestra la receta para poder usarlo.
    expect(screen.getByText(/Cómo cablearlo en VBLang/)).toBeInTheDocument();
    expect(
      screen.getAllByText("generador: custom/sin_doc").length,
    ).toBeGreaterThan(0);
  });

  it("no fetchea ni renderiza nada con id vacío", () => {
    const { container } = render(<GeneradorDocsPanel generadorId="" />);
    expect(apiGet).not.toHaveBeenCalled();
    expect(container.firstChild).toBeNull();
  });
});
