/**
 * PLAN-F ítem 5 — el filtro de módulos de `ProfesorCalificaciones.tsx`
 * parecía "no hacer nada": el dropdown de módulos se arma con
 * `attempts.map(a => a.moduleId)` (ver `moduleOptions`), pero el back de
 * `GET /api/quiz-attempts` no devolvía `moduleId`/`moduleTitle`/`quizTitle`
 * en los items — así que la única opción posible era "Todos los módulos".
 * El fix real está en `api/src/routes/quiz-attempts.ts` (enriquece los
 * items con esos 3 campos). Este spec cubre el contrato del lado del
 * front: si el back los manda, el dropdown se puebla y elegir un módulo
 * dispara un nuevo GET con `moduleId` (y sólo se ven los intentos de ese
 * módulo).
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const { apiGetMock, apiPostMock } = vi.hoisted(() => ({
  apiGetMock: vi.fn(),
  apiPostMock: vi.fn(),
}));

vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../lib/api")>();
  return {
    ...actual,
    apiGet: apiGetMock,
    apiPost: apiPostMock,
  };
});

import ProfesorCalificaciones from "../ProfesorCalificaciones";
import { useAuth } from "../../auth/use-auth";

const TEACHER_USER = {
  id: "u-teacher-fm",
  name: "Docente Demo",
  role: "TEACHER" as const,
  schoolId: "s-1",
};

function renderCalificaciones() {
  return render(
    <MemoryRouter initialEntries={["/profesor/calificaciones"]}>
      <Routes>
        <Route path="/profesor/calificaciones" element={<ProfesorCalificaciones />} />
      </Routes>
    </MemoryRouter>
  );
}

beforeEach(() => {
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user: TEACHER_USER,
    loginAs: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  });
  apiGetMock.mockReset();
  apiPostMock.mockReset();
  apiPostMock.mockResolvedValue({});
});

describe("ProfesorCalificaciones — filtro de módulos (ítem 24 F)", () => {
  it("puebla el dropdown con los módulos que trae el back y filtra al elegir uno", async () => {
    apiGetMock.mockImplementation((url: string) => {
      if (url === "/api/aulas") {
        return Promise.resolve({
          items: [{ _id: "aula-fm-1", id: "aula-fm-1", name: "5°B", schoolId: "s-1" }],
        });
      }
      if (typeof url === "string" && url.startsWith("/api/quiz-attempts") && !url.includes("pending-grading")) {
        if (url.includes("moduleId=mod-2")) {
          return Promise.resolve({
            items: [
              {
                id: "att-2",
                quizId: "quiz-2",
                quizTitle: "Parcial de Módulo 2",
                moduleId: "mod-2",
                moduleTitle: "Módulo 2",
                status: "submitted",
                score: 7,
                maxScore: 10,
                userId: "u-1",
                submittedAt: "2024-06-02T10:00:00.000Z",
              },
            ],
          });
        }
        return Promise.resolve({
          items: [
            {
              id: "att-1",
              quizId: "quiz-1",
              quizTitle: "Parcial de Módulo 1",
              moduleId: "mod-1",
              moduleTitle: "Módulo 1",
              status: "submitted",
              score: 8,
              maxScore: 10,
              userId: "u-1",
              submittedAt: "2024-06-01T10:00:00.000Z",
            },
            {
              id: "att-2",
              quizId: "quiz-2",
              quizTitle: "Parcial de Módulo 2",
              moduleId: "mod-2",
              moduleTitle: "Módulo 2",
              status: "submitted",
              score: 7,
              maxScore: 10,
              userId: "u-1",
              submittedAt: "2024-06-02T10:00:00.000Z",
            },
          ],
        });
      }
      return Promise.resolve({ items: [] });
    });

    renderCalificaciones();

    await waitFor(() => {
      expect(screen.getByText("Parcial de Módulo 1")).toBeInTheDocument();
      expect(screen.getByText("Parcial de Módulo 2")).toBeInTheDocument();
    });

    const select = screen.getByTestId("calificaciones-filtro-modulo") as HTMLSelectElement;
    // El dropdown ahora tiene las 2 opciones reales además de "Todos".
    expect(screen.getByRole("option", { name: "Módulo 1" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Módulo 2" })).toBeInTheDocument();

    fireEvent.change(select, { target: { value: "mod-2" } });

    await waitFor(() => {
      const calls = apiGetMock.mock.calls.map((c) => c[0] as string);
      expect(calls.some((u) => u.includes("moduleId=mod-2"))).toBe(true);
    });

    await waitFor(() => {
      expect(screen.queryByText("Parcial de Módulo 1")).not.toBeInTheDocument();
      expect(screen.getByText("Parcial de Módulo 2")).toBeInTheDocument();
    });
  });
});
