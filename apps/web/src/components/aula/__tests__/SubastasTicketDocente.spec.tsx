import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const apiGet = vi.fn();
const apiPost = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...a: unknown[]) => apiGet(...a),
  apiPost: (...a: unknown[]) => apiPost(...a),
  ApiError: class ApiError extends Error {
    payload?: unknown;
    status: number;
    constructor(message: string, status: number, payload?: unknown) {
      super(message);
      this.status = status;
      this.payload = payload;
    }
  },
}));

import SubastasTicketDocente from "../SubastasTicketDocente";

const estado = (over: Record<string, unknown> = {}) => ({
  limite: 5, creadas: 2, restantes: 3, puedeCrear: true, alumnosAula: 10, monedasAula: 1000, precioInicial: 25, ...over,
});
const modulos = [{ id: "m1", title: "Parcial 1" }];

function responder(e: Record<string, unknown>, items: unknown[] = []) {
  apiGet.mockImplementation(async (url: string) =>
    url.includes("/estado") ? e : { items }
  );
}

describe("SubastasTicketDocente", () => {
  beforeEach(() => {
    apiGet.mockReset();
    apiPost.mockReset();
  });

  it("muestra cuántas subastas lleva y el precio inicial calculado", async () => {
    responder(estado());
    render(<SubastasTicketDocente aulaId="a1" modulos={modulos} />);
    expect(await screen.findByText(/2 de 5/)).toBeTruthy();
    expect(screen.getByText(/25 🪙/)).toBeTruthy();
  });

  it("crea una subasta con la fecha elegida", async () => {
    responder(estado());
    apiPost.mockResolvedValue({ precioInicial: 25, creadas: 3, limite: 5 });
    render(<SubastasTicketDocente aulaId="a1" modulos={modulos} />);
    await screen.findByText(/2 de 5/);
    const boton = screen.getByRole("button", { name: /crear subasta/i }) as HTMLButtonElement;
    expect(boton.disabled).toBe(true); // falta la fecha
    fireEvent.change(document.querySelector('input[type="date"]')!, { target: { value: "2099-12-31" } });
    expect(boton.disabled).toBe(false);
    fireEvent.click(boton);
    await waitFor(() => expect(apiPost).toHaveBeenCalled());
    const [url, body] = apiPost.mock.calls[0] as [string, { aulaId: string; moduloId: string; fechaExamen: string }];
    expect(url).toBe("/api/economia/subastas-ticket");
    expect(body.aulaId).toBe("a1");
    expect(body.moduloId).toBe("m1");
    expect(body.fechaExamen.startsWith("2099-12-31") || body.fechaExamen.startsWith("2100-01-01")).toBe(true);
    expect(await screen.findByText(/Subasta creada \(3 de 5\)/)).toBeTruthy();
  });

  it("al llegar al límite el botón queda bloqueado", async () => {
    responder(estado({ creadas: 5, restantes: 0, puedeCrear: false }));
    render(<SubastasTicketDocente aulaId="a1" modulos={modulos} />);
    await screen.findByText(/límite alcanzado/);
    fireEvent.change(document.querySelector('input[type="date"]')!, { target: { value: "2099-12-31" } });
    expect((screen.getByRole("button", { name: /crear subasta/i }) as HTMLButtonElement).disabled).toBe(true);
  });

  it("lista las subastas del módulo y permite cerrar las abiertas", async () => {
    responder(estado(), [
      { id: "s1", modo: "ticket", aulaId: "a1", moduloId: "m1", nombre: "Ticket 1", estado: "anunciado", precioInicial: 25 },
      { id: "s2", modo: "ticket", aulaId: "a1", moduloId: "m1", nombre: "Ticket 2", estado: "cerrado", precioInicial: 25 },
      { id: "x", modo: "ticket", aulaId: "otra", moduloId: "m1", nombre: "Ajena", estado: "anunciado" },
    ]);
    apiPost.mockResolvedValue({ ok: true });
    render(<SubastasTicketDocente aulaId="a1" modulos={modulos} />);
    await screen.findByText("Ticket 1");
    expect(screen.queryByText("Ajena")).toBeNull();
    const cerrar = screen.getAllByRole("button", { name: /cerrar subasta/i });
    expect(cerrar).toHaveLength(1); // solo la abierta
    fireEvent.click(cerrar[0]);
    await waitFor(() => expect(apiPost).toHaveBeenCalledWith("/api/economia/examenes/s1/cerrar", {}));
  });

  it("sin módulos asignados lo explica", () => {
    render(<SubastasTicketDocente aulaId="a1" modulos={[]} />);
    expect(screen.getByText(/Asigná un módulo/)).toBeTruthy();
  });
});
