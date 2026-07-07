/**
 * PLAN-M — Register.tsx reenvía `?returnTo=` a `/onboarding/tema` (rol USER)
 * o directo a `/login` (resto de roles), para que el puente demo→cuenta del
 * editor de mapas (u otro flujo similar) sepa a dónde volver tras
 * registrarse. El plan original asumía que este reenvío ya existía; no era
 * el caso (grep no encontró ningún uso de returnTo en auth) — este test
 * cubre el cableado nuevo.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";

vi.mock("../../services/registro", () => ({
  fetchRegistroOpciones: vi.fn().mockResolvedValue({
    meses: ["enero", "febrero"],
    tiposProfesor: ["primaria", "secundaria"],
  }),
}));

const mockPost = vi.fn();
vi.mock("../../lib/api", () => ({
  apiPost: (...args: unknown[]) => mockPost(...args),
}));

import Register from "../Register";

function LocationProbe() {
  const loc = useLocation();
  return <div data-testid="location-probe">{loc.pathname}{loc.search}</div>;
}

function renderRegister(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding/tema" element={<LocationProbe />} />
        <Route path="/login" element={<LocationProbe />} />
      </Routes>
    </MemoryRouter>,
  );
}

function fillCommonFields(role: string) {
  // Nombre Completo / Usuario / Email no tienen <label> asociado (gap de a11y
  // preexistente, fuera de alcance acá) — se identifican por orden.
  const textboxes = screen.getAllByRole("textbox");
  fireEvent.change(textboxes[0], { target: { value: "Ana Test" } });
  fireEvent.change(textboxes[1], { target: { value: "ana-test" } });
  fireEvent.change(textboxes[2], { target: { value: "ana@test.com" } });

  fireEvent.change(screen.getByLabelText("Rol"), { target: { value: role } });

  const passwords = document.querySelectorAll('input[type="password"]');
  fireEvent.change(passwords[0], { target: { value: "secreto123" } });
  fireEvent.change(passwords[1], { target: { value: "secreto123" } });

  const checkboxes = screen.getAllByRole("checkbox");
  fireEvent.click(checkboxes[1]); // termsAccepted (la única que valida handleSubmit)
}

beforeEach(() => {
  mockPost.mockReset();
  mockPost.mockResolvedValue({ id: "u-1" });
});

describe("Register — reenvío de returnTo (PLAN-M)", () => {
  it("rol USER: reenvía returnTo a /onboarding/tema", async () => {
    renderRegister("/register?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1");
    fillCommonFields("USER");

    fireEvent.click(screen.getByRole("button", { name: /^registrarse$/i }));

    await waitFor(() =>
      expect(screen.getByTestId("location-probe")).toHaveTextContent(
        "/onboarding/tema?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1",
      ),
    );
  });

  it("rol PARENT: reenvía returnTo directo a /login", async () => {
    renderRegister("/register?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1");
    fillCommonFields("PARENT");

    fireEvent.click(screen.getByRole("button", { name: /^registrarse$/i }));

    await waitFor(() =>
      expect(screen.getByTestId("location-probe")).toHaveTextContent(
        "/login?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1",
      ),
    );
  });

  it("sin returnTo: navega sin agregar el query param", async () => {
    renderRegister("/register");
    fillCommonFields("PARENT");

    fireEvent.click(screen.getByRole("button", { name: /^registrarse$/i }));

    await waitFor(() => expect(screen.getByTestId("location-probe")).toHaveTextContent("/login"));
    expect(screen.getByTestId("location-probe")).not.toHaveTextContent("returnTo");
  });
});
