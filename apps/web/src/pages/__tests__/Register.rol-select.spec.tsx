/**
 * PLAN-J §2.8 (item 8) — el <select> de Rol comparaba mayúsculas
 * ("TEACHER") pero los <option value> eran minúsculas ("teacher"): el
 * estado interno quedaba bien (por eso "Tipo de Profesor" aparecía) pero
 * el <select> no encontraba el option correspondiente y volvía a mostrar
 * el placeholder — pura confusión visual. Fix: <option value> en el
 * mismo casing (mayúsculas) que setea handleRoleChange.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../services/registro", () => ({
  fetchRegistroOpciones: vi.fn().mockResolvedValue({
    meses: ["enero", "febrero"],
    tiposProfesor: ["primaria", "secundaria"],
  }),
}));

import Register from "../Register";

function renderRegister() {
  return render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>,
  );
}

describe("Register — select de Rol", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("al elegir Profesor, el select refleja la selección (no vuelve al placeholder)", async () => {
    renderRegister();
    const select = screen.getByLabelText("Rol") as HTMLSelectElement;

    fireEvent.change(select, { target: { value: "TEACHER" } });

    await waitFor(() => {
      expect(select.value).toBe("TEACHER");
    });
    expect(screen.getByText("Tipo de Profesor")).toBeInTheDocument();
  });

  it("al elegir Usuario, el select refleja la selección", async () => {
    renderRegister();
    const select = screen.getByLabelText("Rol") as HTMLSelectElement;

    fireEvent.change(select, { target: { value: "USER" } });

    await waitFor(() => {
      expect(select.value).toBe("USER");
    });
  });

  it("al elegir Padre/Madre, el select refleja la selección", async () => {
    renderRegister();
    const select = screen.getByLabelText("Rol") as HTMLSelectElement;

    fireEvent.change(select, { target: { value: "PARENT" } });

    await waitFor(() => {
      expect(select.value).toBe("PARENT");
    });
  });
});
