/**
 * Bandeja de verificación — lo que se protege acá es que aprobar y rechazar
 * no se confundan, y que un rechazo sin motivo no llegue nunca al back
 * (queda registrado y es lo que la escuela va a leer).
 */
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const fetchSolicitudesMock = vi.fn();
const verificarEscuelaMock = vi.fn();
vi.mock("../../services/escuela-alta", () => ({
  fetchSolicitudes: (estado: string) => fetchSolicitudesMock(estado),
  verificarEscuela: (id: string, estado: string, motivo?: string) => verificarEscuelaMock(id, estado, motivo),
}));
vi.mock("../../i18n/I18nContext", () => ({ useI18n: () => ({ t: (k: string) => k }) }));

import AdminEscuelas from "../AdminEscuelas";

const ITEM = {
  id: "esc-1",
  name: "Escuela Nueva",
  estadoVerificacion: "pendiente",
  createdAt: "2026-07-26",
  datos: { cuit: "30-1234-9" },
  directivoPrincipal: { id: "u1", fullName: "Ana Díaz", email: "ana@test" },
};

describe("AdminEscuelas", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    fetchSolicitudesMock.mockResolvedValue({ items: [ITEM] });
    verificarEscuelaMock.mockResolvedValue({ ok: true, estadoVerificacion: "verificada" });
  });

  it("lista las pendientes con el directivo que las pidió", async () => {
    render(<AdminEscuelas />);
    expect(await screen.findByTestId("solicitud-esc-1")).toBeTruthy();
    expect(screen.getByText(/Ana Díaz/)).toBeTruthy();
    expect(fetchSolicitudesMock).toHaveBeenCalledWith("pendiente");
  });

  it("verificar habilita la escuela sin pedir motivo", async () => {
    render(<AdminEscuelas />);
    await screen.findByTestId("solicitud-esc-1");
    await userEvent.click(screen.getByText("adminEscuelas.verificar"));
    await waitFor(() =>
      expect(verificarEscuelaMock).toHaveBeenCalledWith("esc-1", "verificada", undefined)
    );
  });

  it("rechazar sin motivo NO llama al back", async () => {
    window.prompt = vi.fn().mockReturnValue("   ");
    render(<AdminEscuelas />);
    await screen.findByTestId("solicitud-esc-1");
    await userEvent.click(screen.getByText("adminEscuelas.rechazar"));
    expect(verificarEscuelaMock).not.toHaveBeenCalled();
  });

  it("rechazar con motivo lo manda al back", async () => {
    window.prompt = vi.fn().mockReturnValue("CUIT inexistente");
    render(<AdminEscuelas />);
    await screen.findByTestId("solicitud-esc-1");
    await userEvent.click(screen.getByText("adminEscuelas.rechazar"));
    await waitFor(() =>
      expect(verificarEscuelaMock).toHaveBeenCalledWith("esc-1", "rechazada", "CUIT inexistente")
    );
  });
});
