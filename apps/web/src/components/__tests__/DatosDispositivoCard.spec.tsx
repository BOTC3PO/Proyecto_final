import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import DatosDispositivoCard from "../DatosDispositivoCard";

const { apiRequest, logout, navigate, ApiError } = vi.hoisted(() => ({
  apiRequest: vi.fn(),
  logout: vi.fn(),
  navigate: vi.fn(),
  ApiError: class ApiError extends Error {
    constructor(message: string, public status: number, public payload?: unknown) {
      super(message);
    }
  },
}));
vi.mock("../../lib/api", () => ({
  ApiError,
  apiGet: vi.fn(),
  apiRequest: (...a: unknown[]) => apiRequest(...a),
}));
vi.mock("../../auth/use-auth", () => ({ useAuth: () => ({ logout }) }));
Object.defineProperty(window, "location", { value: { ...window.location, replace: navigate }, writable: true });

describe("DatosDispositivoCard (L8)", () => {
  beforeEach(() => {
    apiRequest.mockReset();
    logout.mockReset();
    navigate.mockReset();
  });

  it("avisa lo que no se subió y recién después borra igual", async () => {
    apiRequest.mockRejectedValueOnce(new ApiError("Hay cosas sin subir", 409, { code: "PENDIENTES", pendientes: 3 }));
    apiRequest.mockResolvedValueOnce({ ok: true });
    render(<DatosDispositivoCard tipo="plataforma" />);
    expect(screen.getByText(/se descarga o se da de baja desde la web/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Borrar este perfil del dispositivo" }));
    fireEvent.change(screen.getByLabelText("Contraseña del perfil"), { target: { value: "clave" } });
    fireEvent.click(screen.getByRole("button", { name: "Borrar el perfil" }));
    expect(await screen.findByText(/Hay 3 cambios sin subir/)).toBeTruthy();
    expect(logout).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Borrar igual" }));
    await waitFor(() => expect(logout).toHaveBeenCalled());
    expect(JSON.parse(apiRequest.mock.calls[1][1].body)).toEqual({ password: "clave", descartarPendientes: true });
    expect(apiRequest.mock.calls[1][1].method).toBe("DELETE");
    expect(navigate).toHaveBeenCalledWith("/login");
  });

  it("con la contraseña equivocada muestra el error y no cierra la sesión", async () => {
    apiRequest.mockRejectedValueOnce(new ApiError("La contraseña no es correcta.", 401, { code: "CONTRASENA_INCORRECTA" }));
    render(<DatosDispositivoCard tipo="local" />);
    fireEvent.click(screen.getByRole("button", { name: "Borrar este perfil del dispositivo" }));
    fireEvent.change(screen.getByLabelText("Contraseña del perfil"), { target: { value: "otra" } });
    fireEvent.click(screen.getByRole("button", { name: "Borrar el perfil" }));
    expect(await screen.findByText("La contraseña no es correcta.")).toBeTruthy();
    expect(logout).not.toHaveBeenCalled();
  });
});
