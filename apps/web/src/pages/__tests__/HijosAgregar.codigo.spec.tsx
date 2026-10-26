import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HijosAgregar from "../HijosAgregar";

const apiPost = vi.fn();
vi.mock("../../lib/api", () => ({
  apiPost: (...a: unknown[]) => apiPost(...a),
  ApiError: class ApiError extends Error {},
}));
vi.mock("../../i18n/I18nContext", () => ({ useI18n: () => ({ t: (k: string) => k, lang: "es" }) }));

describe("HijosAgregar (K8): se vincula con el código de la escuela", () => {
  beforeEach(() => apiPost.mockReset());

  it("no manda nada si el código es demasiado corto", async () => {
    render(<HijosAgregar />);
    fireEvent.change(screen.getByLabelText(/código de invitación/i), { target: { value: "ABC" } });
    fireEvent.click(screen.getByRole("button", { name: /vincular/i }));
    expect(await screen.findByRole("alert")).toBeTruthy();
    expect(apiPost).not.toHaveBeenCalled();
  });

  it("canjea el código y avisa", async () => {
    apiPost.mockResolvedValue({ ok: true });
    render(<HijosAgregar />);
    fireEvent.change(screen.getByLabelText(/código de invitación/i), { target: { value: "abcde-fghjk" } });
    fireEvent.click(screen.getByRole("button", { name: /vincular/i }));
    await waitFor(() => expect(apiPost).toHaveBeenCalledWith("/api/hijos/canjear", { codigo: "ABCDE-FGHJK" }));
    expect(await screen.findByRole("status")).toBeTruthy();
  });
});
