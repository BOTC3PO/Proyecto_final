import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EnterpriseFamilias from "../EnterpriseFamilias";

const apiGet = vi.fn();
const crearCodigoPadre = vi.fn();
const listarCodigosPadre = vi.fn();
vi.mock("../../lib/api", () => ({ apiGet: (...a: unknown[]) => apiGet(...a) }));
vi.mock("../../services/codigosPadre", () => ({
  crearCodigoPadre: (...a: unknown[]) => crearCodigoPadre(...a),
  listarCodigosPadre: (...a: unknown[]) => listarCodigosPadre(...a),
  anularCodigoPadre: vi.fn(),
}));

describe("Familias (K8): la escuela emite el código de invitación", () => {
  beforeEach(() => {
    apiGet.mockReset(); crearCodigoPadre.mockReset(); listarCodigosPadre.mockReset();
    apiGet.mockResolvedValue({ staff: [
      { id: "a1", name: "Ana Alumna", role: "USER" },
      { id: "d1", name: "Dora Docente", role: "TEACHER" },
    ] });
  });

  it("lista solo a los alumnos y muestra el código generado", async () => {
    crearCodigoPadre.mockResolvedValue({ id: "c1", codigo: "ABCDE-FGHJK", expiresAt: new Date(Date.now() + 7 * 86_400_000).toISOString() });
    render(<EnterpriseFamilias />);
    expect(await screen.findByText("Ana Alumna")).toBeTruthy();
    expect(screen.queryByText("Dora Docente")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /generar código/i }));
    await waitFor(() => expect(crearCodigoPadre).toHaveBeenCalledWith("a1"));
    expect((await screen.findByTestId("codigo-nuevo")).textContent).toBe("ABCDE-FGHJK");
  });

  it("filtra por nombre", async () => {
    apiGet.mockResolvedValue({ staff: [{ id: "a1", name: "Ana Alumna", role: "USER" }, { id: "a2", name: "Beto Alumno", role: "USER" }] });
    render(<EnterpriseFamilias />);
    await screen.findByText("Ana Alumna");
    fireEvent.change(screen.getByPlaceholderText(/buscar alumno/i), { target: { value: "beto" } });
    expect(screen.queryByText("Ana Alumna")).toBeNull();
    expect(screen.getByText("Beto Alumno")).toBeTruthy();
  });
});
