import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const apiGet = vi.fn();
const apiPost = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...a: unknown[]) => apiGet(...a),
  apiPost: (...a: unknown[]) => apiPost(...a),
  ApiError: class ApiError extends Error {},
}));

import CanjearTickets from "../CanjearTickets";

const estado = (over: Record<string, unknown> = {}) => ({
  tickets: { comprados: 2, canjeados: 0, disponibles: 2, maximoCanjeable: 2, restantesCanjeables: 2, ...over },
  ticketsEnEsteIntento: 0,
  puedeCanjear: true,
});

describe("CanjearTickets", () => {
  beforeEach(() => {
    apiGet.mockReset();
    apiPost.mockReset();
  });

  it("sin tickets no renderiza nada", async () => {
    apiGet.mockResolvedValue({ tickets: null, ticketsEnEsteIntento: 0, puedeCanjear: false });
    const { container } = render(<CanjearTickets attemptId="a1" />);
    await waitFor(() => expect(apiGet).toHaveBeenCalled());
    expect(container.firstChild).toBeNull();
  });

  it("ofrece canjear hasta los restantes y canjea la cantidad elegida", async () => {
    apiGet.mockResolvedValueOnce(estado());
    apiPost.mockResolvedValue({ ok: true });
    apiGet.mockResolvedValueOnce(estado({ canjeados: 1, disponibles: 1, restantesCanjeables: 1 }));
    const onCanjeado = vi.fn();
    render(<CanjearTickets attemptId="a1" onCanjeado={onCanjeado} />);

    fireEvent.click(await screen.findByRole("button", { name: /canjear 1 ticket/i }));
    expect(screen.getByRole("button", { name: /canjear 2 tickets/i })).toBeTruthy();

    await waitFor(() => expect(apiPost).toHaveBeenCalledWith("/api/quiz-attempts/a1/canjear-tickets", { tickets: 1 }));
    expect(await screen.findByText(/Canjeaste 1 ticket/)).toBeTruthy();
    await waitFor(() => expect(onCanjeado).toHaveBeenCalled());
  });

  it("si ya canjeó el máximo no muestra botones", async () => {
    apiGet.mockResolvedValue(estado({ canjeados: 2, disponibles: 0, restantesCanjeables: 0 }));
    const { container } = render(<CanjearTickets attemptId="a1" />);
    await waitFor(() => expect(apiGet).toHaveBeenCalled());
    expect(container.querySelector("button")).toBeNull();
  });
});
