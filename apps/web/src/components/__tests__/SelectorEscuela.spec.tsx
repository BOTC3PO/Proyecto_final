/**
 * PLAN-multirol Fase 2 — selector de escuela.
 *
 * Lo que se protege acá:
 *   - No aparece cuando la persona pertenece a UNA sola escuela (el caso
 *     normal): no debe gastar espacio en el shell de nadie.
 *   - Aparece con dos o más, muestra los roles de cada una (que es el dato
 *     que importa: el mismo humano entra como profesor a una y como alumno
 *     a otra) y marca la activa.
 *   - Al elegir otra, llama a `cambiarEscuela` con esa escuela.
 */
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";

const fetchMisEscuelasMock = vi.fn();
vi.mock("../../services/mis-escuelas", () => ({
  fetchMisEscuelas: () => fetchMisEscuelasMock(),
  cambiarEscuelaActiva: vi.fn(),
}));

const cambiarEscuelaMock = vi.fn();
let usuarioActual: { id: string; name: string; role: string; schoolId: string | null } | null = null;

vi.mock("../../auth/use-auth", () => ({
  useAuth: () => ({ user: usuarioActual, cambiarEscuela: cambiarEscuelaMock }),
}));

vi.mock("../../i18n/I18nContext", () => ({
  useI18n: () => ({ t: (k: string) => k }),
}));

// El primitivo `Menu` real gestiona foco y portales; acá sólo interesa el
// contenido, así que se renderiza abierto.
vi.mock("../../ui", () => ({
  Menu: ({ trigger, children }: {
    trigger: (p: Record<string, unknown>) => ReactNode;
    children: (api: { close: () => void }) => ReactNode;
  }) => (
    <div>
      {trigger({ onClick: () => {}, "aria-expanded": true })}
      {children({ close: () => {} })}
    </div>
  ),
}));

import SelectorEscuela from "../SelectorEscuela";

const ESCUELAS = [
  { escuelaId: "esc-a", nombre: "Escuela A", roles: ["TEACHER"] },
  { escuelaId: "esc-b", nombre: "Escuela B", roles: ["USER"] },
];

describe("SelectorEscuela", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    usuarioActual = { id: "juan", name: "Juan", role: "TEACHER", schoolId: "esc-a" };
  });

  it("no se renderiza con una sola escuela", async () => {
    fetchMisEscuelasMock.mockResolvedValue({ items: [ESCUELAS[0]] });
    const { container } = render(<SelectorEscuela />);
    await waitFor(() => expect(fetchMisEscuelasMock).toHaveBeenCalled());
    expect(container).toBeEmptyDOMElement();
  });

  it("no se renderiza si el listado falla (no rompe el shell)", async () => {
    fetchMisEscuelasMock.mockRejectedValue(new Error("boom"));
    const { container } = render(<SelectorEscuela />);
    await waitFor(() => expect(fetchMisEscuelasMock).toHaveBeenCalled());
    expect(container).toBeEmptyDOMElement();
  });

  it("con dos escuelas lista ambas con sus roles y marca la activa", async () => {
    fetchMisEscuelasMock.mockResolvedValue({ items: ESCUELAS });
    render(<SelectorEscuela />);

    const opcionA = await screen.findByTestId("selector-escuela-esc-a");
    const opcionB = await screen.findByTestId("selector-escuela-esc-b");

    expect(opcionA).toHaveAttribute("aria-current", "true");
    expect(opcionB).not.toHaveAttribute("aria-current");
    // Los roles vienen de claves de i18n ya existentes (el mock de `t`
    // devuelve la clave): profesor en una, alumno en la otra.
    expect(opcionA.textContent).toContain("perfil.docente");
    expect(opcionB.textContent).toContain("matrizProgreso.alumno");
  });

  it("elegir otra escuela llama a cambiarEscuela con esa escuela", async () => {
    fetchMisEscuelasMock.mockResolvedValue({ items: ESCUELAS });
    cambiarEscuelaMock.mockResolvedValue(undefined);
    render(<SelectorEscuela />);

    const opcionB = await screen.findByTestId("selector-escuela-esc-b");
    await userEvent.click(opcionB);

    await waitFor(() => expect(cambiarEscuelaMock).toHaveBeenCalledWith("esc-b"));
  });

  it("elegir la escuela activa no dispara ningún cambio", async () => {
    fetchMisEscuelasMock.mockResolvedValue({ items: ESCUELAS });
    render(<SelectorEscuela />);

    const opcionA = await screen.findByTestId("selector-escuela-esc-a");
    await userEvent.click(opcionA);

    expect(cambiarEscuelaMock).not.toHaveBeenCalled();
  });
});
