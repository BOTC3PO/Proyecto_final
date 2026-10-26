/**
 * PLAN-M — Login.tsx sigue `?returnTo=` tras autenticar, con guard anti
 * open-redirect (sólo rutas same-origin que empiezan con "/"; nunca
 * "//host" protocol-relative ni una URL absoluta).
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";

const mockLogin = vi.fn();
vi.mock("../../auth/use-auth", () => ({
  useAuth: () => ({ login: mockLogin }),
}));

const mockPost = vi.fn();
vi.mock("../../lib/api", () => ({
  apiPost: (...args: unknown[]) => mockPost(...args),
}));

import Login from "../Login";

function LocationProbe() {
  const loc = useLocation();
  return <div data-testid="location-probe">{loc.pathname}{loc.search}</div>;
}

function renderLogin(initialPath = "/login") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<LocationProbe />} />
      </Routes>
    </MemoryRouter>,
  );
}

function fillAndSubmit() {
  fireEvent.change(screen.getByLabelText(/Correo Electrónico o Usuario público/i), {
    target: { value: "ana" },
  });
  fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: "secreto123" } });
  fireEvent.click(screen.getByRole("button", { name: /Iniciar Sesión/i }));
}

beforeEach(() => {
  mockLogin.mockReset();
  mockPost.mockReset();
});

describe("Login — returnTo (PLAN-M)", () => {
  it("con returnTo same-origin: navega ahí en vez del destino por rol", async () => {
    mockPost.mockResolvedValue({
      id: "u-1", username: "ana", email: "a@a.com", role: "USER", roles: ["USER"], accessToken: "tok",
    });
    renderLogin("/login?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1");
    fillAndSubmit();

    await waitFor(() =>
      expect(screen.getByTestId("location-probe")).toHaveTextContent(
        "/herramientas/mapa-editor?draft=1",
      ),
    );
  });

  it("con returnTo protocol-relative (//evil.com): lo ignora, usa el destino por rol", async () => {
    mockPost.mockResolvedValue({
      id: "u-1", username: "ana", email: "a@a.com", role: "USER", roles: ["USER"], accessToken: "tok",
    });
    renderLogin("/login?returnTo=%2F%2Fevil.com");
    fillAndSubmit();

    await waitFor(() => expect(screen.getByTestId("location-probe")).toHaveTextContent("/menualumno"));
  });

  it("sin returnTo: usa el destino por rol de siempre", async () => {
    mockPost.mockResolvedValue({
      id: "u-1", username: "ana", email: "a@a.com", role: "TEACHER", roles: ["TEACHER"], accessToken: "tok",
    });
    renderLogin("/login");
    fillAndSubmit();

    await waitFor(() => expect(screen.getByTestId("location-probe")).toHaveTextContent("/profesor"));
  });
});
