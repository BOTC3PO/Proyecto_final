/**
 * Fix "las dependencias entre módulos no bloquean nada" — parte 3:
 * `ModuloDetail.tsx` (la página que el alumno realmente abre) ahora lee
 * `module.isLocked`/`module.missingDependencies` (calculados por el back,
 * GET /api/modulos/:id) y muestra un candado real, en vez de dejar
 * "Empezar" siempre clickeable como antes.
 *
 * Cubre:
 *  (a) isLocked=true: banner "Módulo bloqueado" con los títulos
 *      faltantes + "Empezar" reemplazado por el mensaje de candado.
 *  (b) isLocked=false: sin banner, "Empezar" normal.
 *  (c) isLocked=true PERO con un intento ya en curso: no se bloquea
 *      "Continuar intento" (arrancó antes de que se bloqueara).
 */
import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

let mockUser: { id: string; roles: string[] };
vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: mockUser }),
}));

const mockApiGet = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockApiGet(...args),
  apiPost: vi.fn(async () => ({})),
}));

function baseModule(overrides: Record<string, unknown> = {}) {
  return {
    id: "mod-lock",
    title: "Módulo con quiz",
    description: "Descripción",
    subject: "Test",
    category: "Test",
    level: "basico",
    durationMinutes: 10,
    visibility: "publico",
    dependencies: [{ id: "mod-previo", type: "required" }],
    isLocked: true,
    missingDependencies: [{ id: "mod-previo", title: "Módulo previo" }],
    theoryItems: [],
    quizzes: [
      {
        id: "quiz-lock",
        title: "Quiz de prueba",
        type: "practica",
        mode: "manual",
        questions: [{ id: "q1", prompt: "¿?", questionType: "input", answerKey: "x" }],
      },
    ],
    ...overrides,
  };
}

beforeEach(() => {
  vi.clearAllMocks();
  mockUser = { id: "alumno-1", roles: ["USER"] };
  Object.defineProperty(window, "speechSynthesis", {
    configurable: true,
    value: { speak: vi.fn(), pause: vi.fn(), resume: vi.fn(), cancel: vi.fn() },
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

import ModuloDetail from "../ModuloDetail";

const renderAt = () =>
  render(
    <MemoryRouter initialEntries={["/modulos/mod-lock"]}>
      <Routes>
        <Route path="/modulos/:id" element={<ModuloDetail />} />
      </Routes>
    </MemoryRouter>
  );

describe("ModuloDetail: candado real por dependencias", () => {
  it("(a) isLocked=true: banner + 'Empezar' reemplazado por el candado", async () => {
    mockApiGet.mockImplementation(async (path: string) => {
      if (path.startsWith("/api/modulos/")) return baseModule();
      if (path.startsWith("/api/quiz-attempts")) return { items: [] };
      if (path === "/api/dictionary/languages") return { languages: ["es"] };
      return {};
    });

    renderAt();

    await screen.findByText("Quiz de prueba");
    expect(screen.getAllByText(/módulo bloqueado/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/módulo previo/i)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /^empezar$/i })).not.toBeInTheDocument();
  });

  it("(b) isLocked=false: sin banner, 'Empezar' visible", async () => {
    mockApiGet.mockImplementation(async (path: string) => {
      if (path.startsWith("/api/modulos/")) {
        return baseModule({ isLocked: false, missingDependencies: [] });
      }
      if (path.startsWith("/api/quiz-attempts")) return { items: [] };
      if (path === "/api/dictionary/languages") return { languages: ["es"] };
      return {};
    });

    renderAt();

    await screen.findByText("Quiz de prueba");
    expect(screen.queryByText(/módulo bloqueado/i)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^empezar$/i })).toBeInTheDocument();
  });

  it("(c) isLocked=true con un intento ya en curso: 'Continuar intento' sigue disponible", async () => {
    mockApiGet.mockImplementation(async (path: string) => {
      if (path.startsWith("/api/modulos/")) return baseModule();
      if (path.startsWith("/api/quiz-attempts")) {
        return {
          items: [{ id: "attempt-1", quizId: "quiz-lock", status: "in_progress" }],
        };
      }
      if (path === "/api/dictionary/languages") return { languages: ["es"] };
      return {};
    });

    renderAt();

    await screen.findByText("Quiz de prueba");
    expect(await screen.findByRole("button", { name: /continuar intento/i })).toBeInTheDocument();
    expect(screen.queryByTestId("quiz-bloqueado-quiz-lock")).not.toBeInTheDocument();
  });
});
