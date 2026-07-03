/**
 * PLAN-A §3 — ProfesorAsistencia ahora toma asistencia de verdad (antes
 * sólo listaba actividades de calendario tipo "clase" y decía "la lista
 * de presentes... estará disponible en la app mobile").
 *
 * Cubre:
 *  1. Carga la planilla del aula seleccionada y muestra un alumno por
 *     fila con su estado (null → "Sin marcar").
 *  2. Marcar un estado y guardar llama a `guardarPlanillaAsistencia`
 *     con los registros correctos.
 *  3. "Marcar todos presentes" pone `presente` a todos los alumnos.
 */
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { useAuth } from "../../auth/use-auth";

// El componente usa `new Date().toISOString().slice(0, 10)` como
// default del selector de fecha — la calculamos igual acá para no
// hardcodear una fecha fija ni pelear con fake timers + waitFor.
const hoyIso = () => new Date().toISOString().slice(0, 10);

const mockGet = vi.fn();

vi.mock("../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockGet(...args),
  apiPost: vi.fn(),
  apiPut: vi.fn(),
  apiDelete: vi.fn(),
  getAuthToken: () => "test-token",
}));

vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

const mockFetchPlanilla = vi.fn();
const mockGuardarPlanilla = vi.fn();

vi.mock("../../services/asistencia", () => ({
  fetchPlanillaAsistencia: (...args: unknown[]) => mockFetchPlanilla(...args),
  guardarPlanillaAsistencia: (...args: unknown[]) => mockGuardarPlanilla(...args),
}));

import ProfesorAsistencia from "../ProfesorAsistencia";

const TEACHER = {
  id: "teacher-1",
  name: "Docente Demo",
  role: "TEACHER" as const,
  schoolId: "escuela-1",
};

const AULA = { id: "aula-1", name: "5° A" };

function setup() {
  mockGet.mockImplementation((path: string) => {
    if (typeof path === "string" && path.startsWith("/api/aulas")) {
      return Promise.resolve({ items: [AULA] });
    }
    return Promise.resolve({ items: [] });
  });
  mockFetchPlanilla.mockResolvedValue({
    aulaId: AULA.id,
    fecha: hoyIso(),
    alumnos: [
      { alumnoId: "alu-1", nombre: "Ana Alumna", estado: null, notas: null },
      { alumnoId: "alu-2", nombre: "Beto Alumno", estado: "ausente", notas: "Avisó" },
    ],
  });
  mockGuardarPlanilla.mockResolvedValue({ ok: true, count: 2 });
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user: TEACHER,
    loginAs: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  });
  return render(
    <MemoryRouter>
      <ProfesorAsistencia />
    </MemoryRouter>,
  );
}

describe("ProfesorAsistencia", () => {
  it("carga la planilla y muestra un alumno por fila con su estado", async () => {
    setup();
    await waitFor(() => {
      expect(screen.getByText("Ana Alumna")).toBeTruthy();
    });
    expect(screen.getByText("Beto Alumno")).toBeTruthy();
    const filas = screen.getAllByTestId("asistencia-fila");
    expect(filas).toHaveLength(2);
  });

  it("guarda la planilla con los registros marcados", async () => {
    setup();
    await waitFor(() => screen.getByText("Ana Alumna"));

    const selects = screen.getAllByRole("combobox");
    // El primer <select> es el de aula (si hubiera más de una) — acá
    // sólo hay una aula, así que no se renderiza selector de aula, y
    // los <select> son los de estado por fila, en orden de aparición.
    fireEvent.change(selects[0], { target: { value: "presente" } });

    fireEvent.click(screen.getByText("Guardar asistencia"));

    await waitFor(() => {
      expect(mockGuardarPlanilla).toHaveBeenCalledWith(
        "aula-1",
        hoyIso(),
        expect.arrayContaining([
          { alumnoId: "alu-1", estado: "presente", notas: null },
          { alumnoId: "alu-2", estado: "ausente", notas: "Avisó" },
        ]),
      );
    });
    expect(await screen.findByText("Asistencia guardada.")).toBeTruthy();
  });

  it("Marcar todos presentes pone presente a todas las filas", async () => {
    setup();
    await waitFor(() => screen.getByText("Ana Alumna"));

    fireEvent.click(screen.getByText("Marcar todos presentes"));

    const selects = screen.getAllByRole("combobox") as HTMLSelectElement[];
    for (const select of selects) {
      expect(select.value).toBe("presente");
    }
  });
});
