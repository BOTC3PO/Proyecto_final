/**
 * FIX-COMPARTIR-SCOPE (front) — antes el botón "Compartir" hacía
 * un POST directo a `/api/materiales/:id/compartir` y eso siempre
 * cambiaba el `visibility` del material a 'escuela' sin pedirle
 * nada al docente. Bug 3.1 de `docs/qa/test-parte-3-profesor.md`.
 *
 * El fix abre un modal con tres opciones (`privado` / `escuela` /
 * `publico`) y manda el `scope` elegido en el body del POST. El
 * back ahora acepta el scope y persiste el valor correspondiente.
 *
 * Cubre:
 *  (a) El modal NO se abre solo con un click en "Compartir" — se
 *      abre tras el click y muestra las tres opciones.
 *  (b) Confirmar con la opción `escuela` por defecto manda el
 *      `scope: "escuela"` correcto.
 *  (c) Cambiar la opción a `privado` y confirmar manda
 *      `scope: "privado"`.
 *  (d) El label del botón cambia a "Cambiar alcance" si el material
 *      ya está compartido.
 *  (e) Cancelar el modal NO dispara el POST.
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../auth/use-auth", () => ({
  useAuth: () => ({
    user: { id: "u1", name: "Docente", role: "TEACHER", schoolId: "s1" },
  }),
}));

const mockPost = vi.fn();
const mockGet = vi.fn();
vi.mock("../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../lib/api")>();
  return {
    ...actual,
    apiGet: (...args: unknown[]) => mockGet(...args),
    apiPost: (...args: unknown[]) => mockPost(...args),
    getAuthToken: () => "token-xyz",
  };
});

import ProfesorMateriales from "../ProfesorMateriales";

const baseItem = {
  id: "mat-1",
  titulo: "Cuestionario de prueba",
  materia: "Matemáticas",
  tipo: "cuestionario" as const,
  autor: "u1",
  // C3 (PLAN-CORRECCIONES): FIX-TEST4-PROF-04 cambió el filtro de "Mis
  // materiales" de `autor === user.id` a `ownerUserId === user.id`
  // (ProfesorMateriales.tsx:116) — este fixture nunca se actualizó, así
  // que el tab "propios" quedaba siempre vacío y "compartir-mat-1" no
  // aparecía nunca.
  ownerUserId: "u1",
  escuelaId: "s1",
  compartido: false,
  createdAt: "2026-06-01T00:00:00.000Z",
  questions: 5,
};

beforeEach(() => {
  vi.clearAllMocks();
  mockGet.mockResolvedValue({ items: [baseItem] });
  mockPost.mockResolvedValue({ ok: true, scope: "escuela" });
});

afterEach(() => {
  vi.restoreAllMocks();
});

function renderPage() {
  return render(
    <MemoryRouter>
      <ProfesorMateriales />
    </MemoryRouter>,
  );
}

describe("FIX-COMPARTIR-SCOPE: modal de alcance al compartir", () => {
  it("(a) click en 'Compartir' abre el modal con las 3 opciones", async () => {
    renderPage();
    // Vamos al tab "propios" para que aparezca el botón Compartir.
    const propiosTab = await screen.findByRole("button", { name: /mis materiales/i });
    await userEvent.click(propiosTab);
    const compartirBtn = await screen.findByTestId("compartir-mat-1");
    await userEvent.click(compartirBtn);
    const dialog = await screen.findByRole("dialog");
    expect(within(dialog).getByTestId("compartir-scope-privado")).toBeInTheDocument();
    expect(within(dialog).getByTestId("compartir-scope-escuela")).toBeInTheDocument();
    expect(within(dialog).getByTestId("compartir-scope-publico")).toBeInTheDocument();
  });

  it("(b) confirmar con la opción por defecto (escuela) manda scope='escuela'", async () => {
    renderPage();
    const propiosTab = await screen.findByRole("button", { name: /mis materiales/i });
    await userEvent.click(propiosTab);
    const compartirBtn = await screen.findByTestId("compartir-mat-1");
    await userEvent.click(compartirBtn);
    const confirmar = await screen.findByTestId("compartir-confirmar");
    await userEvent.click(confirmar);
    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith(
        "/api/materiales/mat-1/compartir",
        expect.objectContaining({ scope: "escuela" }),
      );
    });
  });

  it("(c) cambiar a 'privado' y confirmar manda scope='privado'", async () => {
    renderPage();
    const propiosTab = await screen.findByRole("button", { name: /mis materiales/i });
    await userEvent.click(propiosTab);
    await userEvent.click(await screen.findByTestId("compartir-mat-1"));
    await userEvent.click(await screen.findByTestId("compartir-scope-privado"));
    await userEvent.click(await screen.findByTestId("compartir-confirmar"));
    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith(
        "/api/materiales/mat-1/compartir",
        expect.objectContaining({ scope: "privado" }),
      );
    });
  });

  it("(d) el botón dice 'Cambiar alcance' si el material ya está compartido", async () => {
    mockGet.mockResolvedValue({
      items: [{ ...baseItem, compartido: true }],
    });
    renderPage();
    const propiosTab = await screen.findByRole("button", { name: /mis materiales/i });
    await userEvent.click(propiosTab);
    const btn = await screen.findByTestId("compartir-mat-1");
    expect(btn.textContent).toMatch(/cambiar alcance/i);
  });

  it("(e) cancelar NO dispara el POST", async () => {
    renderPage();
    const propiosTab = await screen.findByRole("button", { name: /mis materiales/i });
    await userEvent.click(propiosTab);
    await userEvent.click(await screen.findByTestId("compartir-mat-1"));
    const dialog = await screen.findByRole("dialog");
    const cancelar = within(dialog).getByRole("button", { name: /cancelar/i });
    await userEvent.click(cancelar);
    expect(mockPost).not.toHaveBeenCalled();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
