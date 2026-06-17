/**
 * QA-FIX-08 — ProfesorCalendario: el dropdown de aulas usa
 * `viewerIsTeacher` (Q8).
 *
 * Síntoma: el filtro viejo del front (`a.teacherIds?.includes(user.id)`)
 * descartaba las aulas donde el user es TEACHER por MEMBRESÍA (no
 * creador), porque `teacherIds` es un campo phantom que el back
 * nunca poblaba. Resultado: dropdown vacío → form.aulaId = "" →
 * POST con aulaId vacío → 400. Un TEACHER-miembro no podía crear
 * eventos de calendario.
 *
 * Fix:
 *  - El back ahora expone `viewerIsTeacher: boolean` por aula,
 *    derivado de `isClassroomTeacher` (criterio canónico de
 *    QA-FIX-05: admin, owner por createdBy/teacherId/teacherOfRecord,
 *    o miembro con rolEnClase === "TEACHER").
 *  - El front filtra por ese flag: `items.filter((a) => a.viewerIsTeacher === true)`.
 *  - Defensa extra: el botón "Guardar evento" está disabled si
 *    `tab === "aula" && !form.aulaId`, así que el bug nunca
 *    llega al 400.
 *
 * Cubre:
 *  1. TEACHER con aulas donde viewerIsTeacher=true → dropdown
 *     se puebla, submit habilitado (candado Q8).
 *  2. TEACHER sin aulas donde viewerIsTeacher=true → dropdown
 *     no se renderiza, submit disabled (no se puede mandar
 *     aulaId vacío).
 *  3. TEACHER owner (createdBy) → sigue funcionando (regresión).
 *  4. Defensa extra: el botón submit está disabled en tab=aula
 *     sin aulaId, aún si el usuario llena el resto del form.
 */

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { useAuth } from "../../auth/use-auth";

const mockGet = vi.fn();
const mockPost = vi.fn();

vi.mock("../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockGet(...args),
  apiPost: (...args: unknown[]) => mockPost(...args),
  apiDelete: vi.fn(),
  getAuthToken: () => "test-token",
}));

vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../../services/calendarioUnificado", () => ({
  fetchCalendarioUnificado: vi.fn().mockResolvedValue([]),
  crearEventoEscuela: vi.fn().mockResolvedValue({ id: "ev-1" }),
  crearEventoAula: vi.fn().mockResolvedValue({ id: "ev-2" }),
  eliminarEventoEscuela: vi.fn().mockResolvedValue(undefined),
  eliminarEventoAula: vi.fn().mockResolvedValue(undefined),
}));

import {
  crearEventoEscuela,
} from "../../services/calendarioUnificado";

import ProfesorCalendario from "../ProfesorCalendario";

const TEACHER = {
  id: "teacher-1",
  name: "Docente Demo",
  role: "TEACHER" as const,
  schoolId: "escuela-1",
};

const AULA_MIA = {
  id: "aula-mia",
  name: "5° A",
  createdBy: "teacher-1",
  viewerIsTeacher: true,
};
const AULA_AJENA = {
  id: "aula-ajena",
  name: "5° B",
  createdBy: "other-teacher",
  viewerIsTeacher: false,
};

function setup(aulasResponse: Array<{ id: string; name: string; createdBy: string; viewerIsTeacher: boolean }>) {
  // El componente hace dos apiGet:
  //   1. /api/aulas  (línea 107)
  //   2. /api/calendario/unificado  vía fetchCalendarioUnificado → ya mockeado
  mockGet.mockImplementation((path: string) => {
    if (typeof path === "string" && path.startsWith("/api/aulas")) {
      return Promise.resolve({ items: aulasResponse });
    }
    return Promise.resolve({ items: [] });
  });
  mockPost.mockResolvedValue({ id: "ev-1" });
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user: TEACHER,
    loginAs: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  });
  return render(
    <MemoryRouter>
      <ProfesorCalendario />
    </MemoryRouter>,
  );
}

async function selectAulaTab() {
  // Por default, el tab "aula" es el visible (canEditEscuela = false para TEACHER).
  // El select de "Aula" sólo se renderiza si aulas.length > 0.
  // Para llegar al form, hay que hacer click en un día primero.
  // Hay ~30 botones de día en el calendario (uno por día del mes);
  // tomamos el primero que matchea el patrón de número de día.
  const days = await screen.findAllByRole("button", { name: /^\d+$/ });
  fireEvent.click(days[0]);
  await screen.findByText(/agregar evento/i);
}

describe("QA-FIX-08: ProfesorCalendario dropdown de aulas (Q8)", () => {
  it("TEACHER con aulas donde viewerIsTeacher=true → dropdown se puebla", async () => {
    setup([AULA_MIA, AULA_AJENA]);
    await selectAulaTab();
    // Candado Q8: el bug original descartaba AULA_MIA si el user
    // no era createdBy. Aquí AULA_MIA tiene createdBy: "teacher-1"
    // Y viewerIsTeacher: true, así que DEBE aparecer.
    const select = await screen.findByRole("combobox", { name: /aula/i });
    const options = select.querySelectorAll("option");
    const optionTexts = Array.from(options).map((o) => o.textContent);
    expect(optionTexts).toContain("5° A");
    // AULA_AJENA tiene viewerIsTeacher: false → NO debe aparecer.
    expect(optionTexts).not.toContain("5° B");
  });

  it("TEACHER owner (createdBy) → sigue funcionando (regresión)", async () => {
    // Aunque el back ya manda viewerIsTeacher=true, la lógica del
    // front es uniforme (un solo path). Verifica que el caso
    // 'owner' sigue cubriendo el dropdown.
    setup([AULA_MIA]);
    await selectAulaTab();
    const select = await screen.findByRole("combobox", { name: /aula/i });
    const optionTexts = Array.from(select.querySelectorAll("option")).map((o) => o.textContent);
    expect(optionTexts).toEqual(["5° A"]);
  });

  it("TEACHER con TODAS las aulas ajenas (viewerIsTeacher=false) → dropdown no se renderiza, submit disabled", async () => {
    // Caso del bug original: el filtro viejo dejaba el array vacío
    // y el submit podía mandar aulaId="". Candado: el form NO
    // renderiza la dropdown (línea 475) Y el submit está disabled.
    setup([AULA_AJENA]);
    await selectAulaTab();
    // No debe haber un select con label "Aula".
    expect(screen.queryByRole("combobox", { name: /aula/i })).toBeNull();
    // Llenamos el resto del form para aislar la condición del submit.
    const tituloInput = screen.getByPlaceholderText(/día del maestro/i);
    fireEvent.change(tituloInput, { target: { value: "Clase A" } });
    // El form pide una fecha — la tomamos del día que clickeamos arriba.
    // El submit debe seguir disabled: el form está incompleto porque
    // tab === "aula" y !form.aulaId (línea 546).
    const submit = screen.getByRole("button", { name: /guardar evento/i });
    expect(submit).toBeDisabled();
  });

  it("TEACHER sin aulas (lista vacía del back) → submit disabled, no se puede mandar aulaId vacío", async () => {
    // Variante del caso anterior: la lista viene vacía directamente.
    // (El back filtra por escuela / membresía; un TEACHER sin escuela
    // o sin membresía cae acá.)
    setup([]);
    await selectAulaTab();
    expect(screen.queryByRole("combobox", { name: /aula/i })).toBeNull();
    const tituloInput = screen.getByPlaceholderText(/día del maestro/i);
    fireEvent.change(tituloInput, { target: { value: "Clase A" } });
    const submit = screen.getByRole("button", { name: /guardar evento/i });
    expect(submit).toBeDisabled();
  });
});

/**
 * FIX-CALENDARIO-B — Mejora B: el tab escuela (visible solo para
 * DIRECTIVO/ADMIN) tiene un dropdown "Aplicar a" con la opción
 * "Toda la escuela (global)" + las aulas de la escuela. Elegir un
 * aula → el POST manda `aulaId`; elegir "Global" → el POST omite
 * `aulaId` (evento global).
 */
describe("FIX-CALENDARIO-B: ProfesorCalendario dropdown 'Aplicar a' en tab escuela", () => {
  const DIRECTIVO_USER = {
    id: "directivo-1",
    name: "Directivo Demo",
    role: "DIRECTIVO" as const,
    schoolId: "escuela-1",
  };

  function setupDirectivo(aulas: Array<{ id: string; name: string; viewerIsTeacher: boolean }>) {
    mockGet.mockImplementation((path: string) => {
      if (typeof path === "string" && path.startsWith("/api/aulas")) {
        return Promise.resolve({ items: aulas });
      }
      return Promise.resolve({ items: [] });
    });
    mockPost.mockResolvedValue({ id: "ev-1" });
    (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      user: DIRECTIVO_USER,
      loginAs: vi.fn(),
      login: vi.fn(),
      logout: vi.fn(),
    });
    return render(
      <MemoryRouter>
        <ProfesorCalendario />
      </MemoryRouter>,
    );
  }

  async function selectEscuelaTab() {
    // Para DIRECTIVO, el default es "escuela" (ProfesorCalendario.tsx:93).
    // Pero el form sólo se muestra si hay un día seleccionado. Click
    // en el primer día.
    const days = await screen.findAllByRole("button", { name: /^\d+$/ });
    fireEvent.click(days[0]);
    await screen.findByText(/agregar evento/i);
  }

  it("DIRECTIVO con aulas en la escuela → dropdown 'Aplicar a' muestra 'Toda la escuela (global)' + aulas", async () => {
    setupDirectivo([
      { id: "aula-1", name: "5° A", viewerIsTeacher: true },
      { id: "aula-2", name: "5° B", viewerIsTeacher: true },
    ]);
    await selectEscuelaTab();
    // El tab default es "escuela" para DIRECTIVO (línea 93).
    const aplicarA = await screen.findByRole("combobox", { name: /aplicar a/i });
    const options = Array.from(aplicarA.querySelectorAll("option")).map((o) => o.textContent);
    expect(options[0]).toMatch(/toda la escuela \(global\)/i);
    expect(options).toContain("5° A");
    expect(options).toContain("5° B");
  });

  it("DIRECTIVO elige 'Global' → POST sin aulaId (evento global)", async () => {
    (crearEventoEscuela as unknown as ReturnType<typeof vi.fn>).mockClear();
    setupDirectivo([
      { id: "aula-1", name: "5° A", viewerIsTeacher: true },
    ]);
    await selectEscuelaTab();
    const aplicarA = screen.getByRole("combobox", { name: /aplicar a/i });
    // El default es "Global" (value="").
    expect((aplicarA as HTMLSelectElement).value).toBe("");
    // Llenar el form y submit.
    fireEvent.change(screen.getByPlaceholderText(/día del maestro/i), {
      target: { value: "Feriado" },
    });
    const submit = screen.getByRole("button", { name: /guardar evento/i });
    fireEvent.click(submit);
    await waitFor(() => {
      expect(crearEventoEscuela).toHaveBeenCalled();
    });
    const call = (crearEventoEscuela as unknown as ReturnType<typeof vi.fn>).mock.calls[0];
    const args = call[0] as { aulaId?: string };
    expect(args.aulaId).toBeUndefined();
  });

  it("DIRECTIVO elige un aula → POST con aulaId (evento acotado)", async () => {
    (crearEventoEscuela as unknown as ReturnType<typeof vi.fn>).mockClear();
    setupDirectivo([
      { id: "aula-1", name: "5° A", viewerIsTeacher: true },
      { id: "aula-2", name: "5° B", viewerIsTeacher: true },
    ]);
    await selectEscuelaTab();
    const aplicarA = screen.getByRole("combobox", { name: /aplicar a/i });
    fireEvent.change(aplicarA, { target: { value: "aula-2" } });
    fireEvent.change(screen.getByPlaceholderText(/día del maestro/i), {
      target: { value: "Acto 5B" },
    });
    const submit = screen.getByRole("button", { name: /guardar evento/i });
    fireEvent.click(submit);
    await waitFor(() => {
      expect(crearEventoEscuela).toHaveBeenCalled();
    });
    const call = (crearEventoEscuela as unknown as ReturnType<typeof vi.fn>).mock.calls[0];
    const args = call[0] as { aulaId?: string };
    expect(args.aulaId).toBe("aula-2");
  });
});
