/**
 * PLAN-X §3 — un PARENT puro veía el botón "Empezar" en la tarjeta del
 * quiz y recién descubría el bloqueo (403 server-side, PLAN-J §3c #6)
 * al hacer click. Ahora se reemplaza por un mensaje informativo.
 *
 * Cubre:
 *  - PARENT puro (roles: ["PARENT"]): no ve "Empezar", ve el mensaje.
 *  - PARENT+USER (retiene su capacidad de alumno): sigue viendo "Empezar"
 *    (regresión — no debe romper multi-rol).
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

beforeEach(() => {
  vi.clearAllMocks();
  Object.defineProperty(window, "speechSynthesis", {
    configurable: true,
    value: { speak: vi.fn(), pause: vi.fn(), resume: vi.fn(), cancel: vi.fn() },
  });
  mockApiGet.mockImplementation(async (path: string) => {
    if (path.startsWith("/api/modulos/")) {
      return {
        id: "mod-px3",
        title: "Módulo con quiz",
        description: "Descripción",
        subject: "Test",
        category: "Test",
        level: "basico",
        durationMinutes: 10,
        visibility: "publico",
        dependencies: [],
        theoryItems: [],
        quizzes: [
          {
            id: "quiz-px3",
            title: "Quiz de prueba",
            type: "practica",
            mode: "manual",
            questions: [{ id: "q1", prompt: "¿?", questionType: "input", answerKey: "x" }],
          },
        ],
      };
    }
    if (path.startsWith("/api/quiz-attempts")) return { items: [] };
    if (path === "/api/dictionary/languages") return { languages: ["es"] };
    return {};
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

import ModuloDetail from "../ModuloDetail";

const renderAt = () =>
  render(
    <MemoryRouter initialEntries={["/modulos/mod-px3"]}>
      <Routes>
        <Route path="/modulos/:id" element={<ModuloDetail />} />
      </Routes>
    </MemoryRouter>
  );

describe("PLAN-X §3: botón de rendir oculto para PARENT puro", () => {
  it("PARENT puro no ve 'Empezar', ve el mensaje informativo", async () => {
    mockUser = { id: "parent-1", roles: ["PARENT"] };
    renderAt();
    await screen.findByText("Quiz de prueba");
    expect(
      screen.getByText(/como familiar podés ver este cuestionario pero no rendirlo/i)
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /^empezar$/i })).not.toBeInTheDocument();
  });

  it("PARENT+USER retiene su capacidad de alumno y sigue viendo 'Empezar'", async () => {
    mockUser = { id: "parent-2", roles: ["PARENT", "USER"] };
    renderAt();
    await screen.findByText("Quiz de prueba");
    expect(screen.getByRole("button", { name: /empezar/i })).toBeInTheDocument();
    expect(
      screen.queryByText(/como familiar podés ver este cuestionario pero no rendirlo/i)
    ).not.toBeInTheDocument();
  });
});
