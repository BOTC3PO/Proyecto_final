/**
 * Tests integrados de la barra de acciones en `pages/aula.tsx` (Tarea 16).
 *
 * Mockeamos los servicios externos + auth context para verificar que la
 * barra se muestra cuando `user.role === "TEACHER"` y el aula está
 * disponible, y NO se muestra para alumnos.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../../services/aulas", () => ({
  fetchClassroomDetail: vi.fn().mockResolvedValue({
    _id: "aula-1",
    id: "aula-1",
    name: "5°B",
    status: "activa",
    teacherId: "u-1",
    inviteCode: "ABC123",
    grade: "5°",
    section: "B",
    schoolId: "s-1",
    members: ["u-1", "u-2"],
  }),
}));

vi.mock("../../services/publicaciones", () => ({
  fetchPublications: vi.fn().mockResolvedValue([]),
  createPublication: vi.fn(),
}));

vi.mock("../../services/leaderboard", () => ({
  fetchLeaderboard: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../services/actividades", () => ({
  fetchUpcomingActivities: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../services/resource-links", () => ({
  fetchResourceLinks: vi.fn().mockResolvedValue({ items: [] }),
}));

vi.mock("../../services/subastas", () => ({
  fetchSubastasActivas: vi.fn().mockResolvedValue([]),
  fetchMisPujas: vi.fn().mockResolvedValue([]),
  crearPuja: vi.fn(),
}));

vi.mock("../../lib/api", () => ({
  apiGet: vi.fn().mockImplementation((url: string) => {
    if (url.includes("/progreso")) {
      return Promise.resolve({ items: [], unlocks: [] });
    }
    return Promise.resolve({ items: [] });
  }),
  apiPost: vi.fn().mockResolvedValue({}),
}));

import Aula from "../aula";
import { useAuth } from "../../auth/use-auth";
import { fetchClassroomDetail } from "../../services/aulas";

const TEACHER_USER = {
  id: "u-1",
  name: "Docente Demo",
  role: "TEACHER" as const,
  schoolId: "s-1",
};

const STUDENT_USER = {
  id: "u-2",
  name: "Alumno Demo",
  role: "USER" as const,
  schoolId: "s-1",
};

const MOCK_CLASSROOM = {
  _id: "aula-1",
  id: "aula-1",
  name: "5°B",
  status: "activa",
  teacherId: "u-1",
  inviteCode: "ABC123",
  grade: "5°",
  section: "B",
  schoolId: "s-1",
  members: ["u-1", "u-2"],
};

function setupUser(user: typeof TEACHER_USER | typeof STUDENT_USER | null) {
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user,
    loginAs: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  });
}

function setupClassroom() {
  (fetchClassroomDetail as unknown as ReturnType<typeof vi.fn>).mockResolvedValue(
    MOCK_CLASSROOM,
  );
}
// Por defecto, fetchClassroomDetail ya esta mockeado en el factory.
// setupClassroom() es opcional en este test.

function renderAula() {
  return render(
    <MemoryRouter initialEntries={["/clases/aula-1?id=aula-1"]}>
      <Routes>
        <Route path="/clases/:aulaId" element={<Aula />} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("aula.tsx — barra de acciones del docente (Tarea 16)", () => {
  it("muestra la barra con 3 acciones cuando el usuario es TEACHER del aula", async () => {
    setupUser(TEACHER_USER);
    setupClassroom();
    renderAula();
    // esperamos a que se resuelva fetchClassroomDetail + render
    await waitFor(
      () => {
        expect(fetchClassroomDetail).toHaveBeenCalled();
        expect(screen.getByTestId("aula-publication-form")).toBeInTheDocument();
        expect(screen.getByTestId("aula-actions-bar")).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
    expect(screen.getByTestId("aula-action-asistencia")).toBeInTheDocument();
    expect(screen.getByTestId("aula-action-publicar")).toBeInTheDocument();
    expect(screen.getByTestId("aula-action-estadisticas")).toBeInTheDocument();
  });

  it("no muestra la barra cuando el usuario es USER (alumno)", async () => {
    setupUser(STUDENT_USER);
    setupClassroom();
    renderAula();
    // Esperá a que cargue el aula.
    await waitFor(() => {
      expect(
        screen.getByTestId("aula-publication-form"),
      ).toBeInTheDocument();
    });
    expect(screen.queryByTestId("aula-actions-bar")).not.toBeInTheDocument();
    // Tarea 18: la matriz de progreso tampoco debe verse para alumnos.
    expect(screen.queryByTestId("progreso-curso-details")).not.toBeInTheDocument();
  });

  it("no muestra la barra cuando no hay usuario logueado", () => {
    setupUser(null);
    setupClassroom();
    renderAula();
    expect(screen.queryByTestId("aula-actions-bar")).not.toBeInTheDocument();
  });
});
