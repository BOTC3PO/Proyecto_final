/**
 * FIX-CALIFICACIONES — `apps/web/src/pages/ProfesorCalificaciones.tsx:48`
 * hardcodeaba `?moduleId=&` (string vacío) en la URL, que el back
 * rechazaba con `400 ZodError` por el `z.string().min(1)` del schema.
 * Resultado: la pantalla de calificaciones no cargaba (error
 * genérico). El fix en el back (`api/src/schema/quiz-attempt.ts`)
 * preprocesa `""` → `undefined` y soporta `aulaId` solo. El fix en
 * el front omite `moduleId` y `quizType` (el back no los filtra y
 * la página agrupa por quiz, mostrando promedios). Ver también
 * `api/tests/integracion/quiz-attempts-calificaciones.test.ts`.
 *
 * Cubre:
 *  (f1) La URL del GET /api/quiz-attempts NO contiene `moduleId=&`.
 *  (f2) El GET se llama sólo con `aulaId` y `limit` (no `moduleId`).
 *  (f3) Si el back responde 200 con items, la página los renderiza
 *       (link "Ver detalle" presente).
 *  (f4) Si el back responde 200 sin items, muestra el empty state
 *       ("No hay evaluaciones formales...").
 *  (f5) Si el back responde 400, la página muestra el error
 *       capturado (no queda colgada en loading). Candado: el handler
 *       del error del componente sigue funcionando.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
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
  id: "u-teacher-fc",
  name: "Docente Demo",
  role: "TEACHER" as const,
  schoolId: "s-1",
};

function setupUser(user: typeof TEACHER_USER | null) {
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user,
    loginAs: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  });
}

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
  apiGetMock.mockReset();
  apiPostMock.mockReset();
  // apiGet puede ser llamado varias veces (cargar aulas + cargar attempts +
  // componente CorreccionesPendientes). El default resuelve vacío.
  apiGetMock.mockResolvedValue({ items: [] });
  apiPostMock.mockResolvedValue({});
});

describe("FIX-CALIFICACIONES: ProfesorCalificaciones.tsx URL y render", () => {
  it("(f1) NO envía `moduleId=&` en la URL del GET /api/quiz-attempts", async () => {
    setupUser(TEACHER_USER);
    // Primer GET: cargar aulas. Devolvemos un aula para que `aulaId`
    // se setee.
    apiGetMock.mockImplementation((url: string) => {
      if (url === "/api/aulas") {
        return Promise.resolve({
          items: [
            { _id: "aula-fc-1", id: "aula-fc-1", name: "5°B", schoolId: "s-1" }
          ]
        });
      }
      return Promise.resolve({ items: [] });
    });
    renderCalificaciones();
    // Espera a que se llame al endpoint de attempts (segundo apiGet).
    await waitFor(() => {
      const calls = apiGetMock.mock.calls.map((c) => c[0]);
      const attemptsCalls = calls.filter(
        (url): url is string => typeof url === "string" && url.startsWith("/api/quiz-attempts")
      );
      expect(attemptsCalls.length).toBeGreaterThan(0);
    });
    // Verificar que NINGUNA llamada incluye "moduleId=" (ni vacío, ni con valor).
    const allCalls = apiGetMock.mock.calls.map((c) => c[0]);
    for (const url of allCalls) {
      if (typeof url === "string" && url.startsWith("/api/quiz-attempts")) {
        expect(url).not.toMatch(/moduleId=/);
      }
    }
  });

  it("(f2) El GET a /api/quiz-attempts lleva aulaId y limit, sin moduleId/quizType", async () => {
    setupUser(TEACHER_USER);
    apiGetMock.mockImplementation((url: string) => {
      if (url === "/api/aulas") {
        return Promise.resolve({
          items: [
            { _id: "aula-fc-2", id: "aula-fc-2", name: "5°A", schoolId: "s-1" }
          ]
        });
      }
      return Promise.resolve({ items: [] });
    });
    renderCalificaciones();
    await waitFor(() => {
      const calls = apiGetMock.mock.calls
        .map((c) => c[0])
        .filter(
          (u): u is string =>
            typeof u === "string" && u.startsWith("/api/quiz-attempts") && !u.includes("pending-grading")
        );
      expect(calls.length).toBeGreaterThan(0);
    });
    const attemptsCall = apiGetMock.mock.calls
      .map((c) => c[0])
      .find(
        (u): u is string =>
          typeof u === "string" && u.startsWith("/api/quiz-attempts") && !u.includes("pending-grading")
      ) as string;
    // Candado: la URL del fix tiene aulaId + limit, SIN moduleId ni quizType.
    expect(attemptsCall).toMatch(/aulaId=aula-fc-2/);
    expect(attemptsCall).toMatch(/limit=50/);
    expect(attemptsCall).not.toMatch(/moduleId/);
    expect(attemptsCall).not.toMatch(/quizType/);
  });

  it("(f3) Renderiza los intentos cuando el back devuelve 200 con items", async () => {
    setupUser(TEACHER_USER);
    apiGetMock.mockImplementation((url: string) => {
      if (url === "/api/aulas") {
        return Promise.resolve({
          items: [{ _id: "aula-fc-3", id: "aula-fc-3", name: "5°C" }]
        });
      }
      if (typeof url === "string" && url.startsWith("/api/quiz-attempts") && !url.includes("pending-grading")) {
        return Promise.resolve({
          items: [
            {
              id: "att-1",
              quizId: "quiz-x",
              quizTitle: "Parcial 1",
              status: "submitted",
              score: 8,
              maxScore: 10,
              userId: "u-1",
              submittedAt: "2024-06-01T10:30:00.000Z"
            }
          ]
        });
      }
      return Promise.resolve({ items: [] });
    });
    renderCalificaciones();
    await waitFor(() => {
      expect(screen.getByText("Parcial 1")).toBeInTheDocument();
    });
    // "Ver detalle" link debe estar.
    expect(screen.getAllByTestId("ver-detalle-intento").length).toBeGreaterThan(0);
  });

  it("(f4) Muestra el empty state si el back responde 200 sin items", async () => {
    setupUser(TEACHER_USER);
    apiGetMock.mockImplementation((url: string) => {
      if (url === "/api/aulas") {
        return Promise.resolve({
          items: [{ _id: "aula-fc-4", id: "aula-fc-4", name: "5°D" }]
        });
      }
      return Promise.resolve({ items: [] });
    });
    renderCalificaciones();
    await waitFor(() => {
      expect(
        screen.getByText(/No hay evaluaciones formales completadas/i)
      ).toBeInTheDocument();
    });
  });

  it("(f5) Si el back responde 400, la página muestra el error (no queda en loading)", async () => {
    setupUser(TEACHER_USER);
    apiGetMock.mockImplementation((url: string) => {
      if (url === "/api/aulas") {
        return Promise.resolve({
          items: [{ _id: "aula-fc-5", id: "aula-fc-5", name: "5°E" }]
        });
      }
      if (typeof url === "string" && url.startsWith("/api/quiz-attempts") && !url.includes("pending-grading")) {
        return Promise.reject(new Error("400 ZodError"));
      }
      return Promise.resolve({ items: [] });
    });
    renderCalificaciones();
    await waitFor(() => {
      // El catch del useEffect setea el error en `errorMessage`.
      expect(screen.getByText(/Error: 400 ZodError/i)).toBeInTheDocument();
    });
  });
});
