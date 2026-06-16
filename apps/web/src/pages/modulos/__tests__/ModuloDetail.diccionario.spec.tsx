/**
 * FIX-DICT-SELECTOR — ModuloDetail: el panel de diccionario debe
 * tener un LangSelector visible que controle el lang de las
 * llamadas a lookupPalabra/prefixPalabra.
 *
 * Antes del fix: el panel tenía `lang = "es"` hardcodeado (default
 * de los servicios). El usuario no podía cambiar de idioma aunque
 * el diccionario tuviera fr/la/pt.
 *
 * Después del fix: el panel tiene un LangSelector en el header que
 * alimenta el estado `dictLang`, y las llamadas a lookupPalabra/
 * prefixPalabra usan ese estado.
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Mocks de los servicios que usa el componente.
const mockLookup = vi.fn();
const mockPrefix = vi.fn();
vi.mock("../../../services/diccionario", async () => {
  const actual = await vi.importActual<typeof import("../../../services/diccionario")>(
    "../../../services/diccionario"
  );
  return {
    ...actual,
    lookupPalabra: (...args: unknown[]) => mockLookup(...args),
    prefixPalabra: (...args: unknown[]) => mockPrefix(...args),
  };
});

vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: { id: "u1", name: "Test", role: "STUDENT" } }),
}));

const mockApiGet = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockApiGet(...args),
  apiPost: vi.fn(async () => ({})),
}));

// Mock de window.speechSynthesis (no existe en jsdom).
if (typeof window !== "undefined" && !window.speechSynthesis) {
  (window as unknown as { speechSynthesis: { cancel: () => void } }).speechSynthesis = {
    cancel: () => {},
  };
}

// Importar DESPUÉS de los mocks.
import ModuloDetail from "../ModuloDetail";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/modulos/:id" element={<ModuloDetail />} />
      </Routes>
    </MemoryRouter>
  );

describe("FIX-DICT-SELECTOR: ModuloDetail — LangSelector en el panel de diccionario", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Default: lookup devuelve no encontrado, prefix devuelve [].
    mockLookup.mockResolvedValue({ found: false });
    mockPrefix.mockResolvedValue([]);
    // Mock del fetch del módulo: devuelve un módulo válido para que
    // el componente salga del estado "loading".
    mockApiGet.mockImplementation(async (path: string) => {
      if (path.startsWith("/api/modulos/")) {
        return {
          id: "mod-1",
          title: "Test Module",
          description: "desc",
          subject: "Test",
          category: "Test",
          level: "basico",
          durationMinutes: 30,
          visibility: "publico",
          dependencies: [],
          quizzes: [],
        };
      }
      // El LangSelector llama a /api/dictionary/languages.
      if (path === "/api/dictionary/languages") {
        return { languages: ["es", "fr", "la", "pt"] };
      }
      return {};
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("el panel de diccionario tiene un LangSelector visible", async () => {
    renderAt("/modulos/mod-1");
    // Esperar a que el módulo cargue (el componente sale del loading).
    const openButton = await screen.findByRole("button", { name: /Diccionario/i }, { timeout: 3000 });
    fireEvent.click(openButton);
    // El LangSelector (selector de idioma) debe estar presente.
    await waitFor(() => {
      expect(screen.getByTestId("lang-selector")).toBeInTheDocument();
    });
  });

  it("lookupPalabra se llama con el lang del selector", async () => {
    renderAt("/modulos/mod-1");
    const openButton = await screen.findByRole("button", { name: /Diccionario/i }, { timeout: 3000 });
    fireEvent.click(openButton);

    // Esperar a que el LangSelector cargue.
    const select = await screen.findByTestId("lang-selector");
    fireEvent.change(select, { target: { value: "fr" } });

    // Escribir en el input y buscar.
    const input = screen.getByPlaceholderText(/Buscar palabra/i);
    fireEvent.change(input, { target: { value: "chien" } });
    fireEvent.click(screen.getByRole("button", { name: /Buscar/i }));

    await waitFor(() => {
      expect(mockLookup).toHaveBeenCalled();
    });
    // Candado: el lang que llegó al servicio es "fr", no "es" hardcodeado.
    expect(mockLookup.mock.calls.some(([, lang]) => lang === "fr")).toBe(true);
  });

  it("prefixPalabra se llama con el lang del selector (autocompletado)", async () => {
    renderAt("/modulos/mod-1");
    const openButton = await screen.findByRole("button", { name: /Diccionario/i }, { timeout: 3000 });
    fireEvent.click(openButton);

    const select = await screen.findByTestId("lang-selector");
    fireEvent.change(select, { target: { value: "la" } });

    // Escribir ≥3 chars para disparar prefix.
    const input = screen.getByPlaceholderText(/Buscar palabra/i);
    fireEvent.change(input, { target: { value: "can" } });

    await waitFor(() => {
      expect(mockPrefix).toHaveBeenCalled();
    });
    // El lang "la" llegó al servicio de prefix.
    expect(mockPrefix.mock.calls.some(([, lang]) => lang === "la")).toBe(true);
  });
});
