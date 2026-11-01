import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const apiGet = vi.fn();
const apiPost = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...a: unknown[]) => apiGet(...a),
  apiPost: (...a: unknown[]) => apiPost(...a),
  ApiError: class ApiError extends Error {},
}));

import ReventaTickets from "../ReventaTickets";

const opciones = {
  companeros: [{ id: "u2", nombre: "María G." }],
  modulos: [{ moduloId: "m1", titulo: "Fracciones", libres: 2, ofertasPendientes: 0 }],
  comisionPorcentaje: 10,
};
const responder = (ofertas: unknown[] = [], ops: unknown = opciones) =>
  apiGet.mockImplementation((url: string) =>
    Promise.resolve(url.includes("/opciones") ? ops : { items: ofertas })
  );

describe("ReventaTickets (J8)", () => {
  beforeEach(() => {
    apiGet.mockReset();
    apiPost.mockReset();
  });

  it("sin tickets ni ofertas no muestra nada", async () => {
    responder([], { ...opciones, modulos: [] });
    const { container } = render(<ReventaTickets aulaId="a1" />);
    await waitFor(() => expect(apiGet).toHaveBeenCalled());
    expect(container.firstChild).toBeNull();
  });

  it("muestra al compañero con nombre reducido, calcula el neto y envía la oferta", async () => {
    responder();
    apiPost.mockResolvedValue({ id: "r1" });
    render(<ReventaTickets aulaId="a1" />);
    expect(await screen.findByRole("option", { name: "María G." })).toBeTruthy();
    fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "50" } });
    expect(screen.getByText(/45/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /ofrecer/i }));
    await waitFor(() =>
      expect(apiPost).toHaveBeenCalledWith("/api/economia/tickets/reventa", { aulaId: "a1", moduloId: "m1", receptorId: "u2", precio: 50 })
    );
  });

  it("el comprador ve la oferta y puede aceptarla", async () => {
    responder([{ id: "r9", aulaId: "a1", moduloId: "m1", moduloTitulo: "Fracciones", monto: 30, neto: 27, comision: 3, soyVendedor: false, contraparte: "Juan P." }]);
    apiPost.mockResolvedValue({ ok: true });
    render(<ReventaTickets aulaId="a1" />);
    expect(await screen.findByText(/Juan P\..*Fracciones.*30/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /aceptar/i }));
    await waitFor(() => expect(apiPost).toHaveBeenCalledWith("/api/economia/tickets/reventa/r9/aceptar", {}));
  });
});
