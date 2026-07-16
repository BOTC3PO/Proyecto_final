/**
 * FIX-TEMAS-SIN-COMPRAR — `setTheme` sólo validaba el set de temas
 * permitido por ROL (THEMES_BY_ROLE), nunca si el usuario había
 * comprado el tema. Perfil.tsx tiene su propio selector (no pasa por
 * el gate de compra que sí tenía TiendaTemas.tsx a mano), así que
 * cualquier tema de pago quedaba "activable" gratis desde el perfil.
 * La verificación de dueño ahora vive en ThemeContext — única fuente
 * de la verdad para cualquier selector, presente o futuro.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../ThemeContext";

vi.mock("../../auth/use-auth", () => ({
  useAuth: () => ({
    user: { id: "u1", name: "Test", role: "USER", roles: ["USER"] },
  }),
}));

const mockFetchMisItems = vi.fn();
vi.mock("../../services/tienda", () => ({
  fetchMisItems: (...args: unknown[]) => mockFetchMisItems(...args),
}));

function Probe() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={() => setTheme("aurora")}>activar aurora</button>
    </div>
  );
}

const renderProbe = () =>
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>,
  );

beforeEach(() => {
  localStorage.clear();
  mockFetchMisItems.mockReset();
});

describe("ThemeContext — no se puede activar un tema de pago sin comprarlo", () => {
  it("setTheme no activa un tema pago si el usuario no lo compró", async () => {
    mockFetchMisItems.mockResolvedValue([]);
    renderProbe();
    await waitFor(() => expect(mockFetchMisItems).toHaveBeenCalled());

    fireEvent.click(screen.getByText("activar aurora"));

    // "aurora" (price 40) no está en la lista de compras: setTheme
    // debe rechazarlo silenciosamente y quedarse en el default.
    expect(screen.getByTestId("theme").textContent).not.toBe("aurora");
  });

  it("setTheme SÍ activa un tema pago si el usuario ya lo compró", async () => {
    mockFetchMisItems.mockResolvedValue([
      { item_id: "tema-aurora", comprado_at: "2026-01-01", origen: "compra", tipo: "tema", nombre: "Aurora", asset_id: "tema-aurora" },
    ]);
    renderProbe();
    await waitFor(() => expect(mockFetchMisItems).toHaveBeenCalled());

    fireEvent.click(screen.getByText("activar aurora"));

    await waitFor(() => expect(screen.getByTestId("theme").textContent).toBe("aurora"));
  });

  it("un tema gratuito (price 0) se puede activar sin pasar por la tienda", async () => {
    mockFetchMisItems.mockResolvedValue([]);
    function FreeProbe() {
      const { theme, setTheme } = useTheme();
      return (
        <div>
          <span data-testid="theme">{theme}</span>
          <button onClick={() => setTheme("clasico")}>activar clasico</button>
        </div>
      );
    }
    render(
      <ThemeProvider>
        <FreeProbe />
      </ThemeProvider>,
    );
    await waitFor(() => expect(mockFetchMisItems).toHaveBeenCalled());

    fireEvent.click(screen.getByText("activar clasico"));

    await waitFor(() => expect(screen.getByTestId("theme").textContent).toBe("clasico"));
  });

  it("corrige un tema pago no comprado que haya quedado en localStorage antes del fix", async () => {
    localStorage.setItem("vb-theme", "aurora");
    mockFetchMisItems.mockResolvedValue([]);
    renderProbe();

    // Al montar, `theme` arranca en "aurora" (venía de localStorage);
    // una vez que termina de cargar la lista de compras (vacía), el
    // efecto de corrección debe sacarlo de un tema no comprado.
    await waitFor(() => expect(screen.getByTestId("theme").textContent).not.toBe("aurora"));
  });
});
