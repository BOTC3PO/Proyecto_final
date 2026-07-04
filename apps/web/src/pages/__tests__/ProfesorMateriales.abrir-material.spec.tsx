/**
 * PLAN-G §1 (item 25) — botón "Abrir" para materiales guardados
 * (origen: "material") en ProfesorMateriales.
 *
 * Cubre:
 *  (a) un item con origen "material" muestra "Abrir" (no "Descargar" ni
 *      "Compartir", que sólo aplican a módulos por ahora).
 *  (b) click en "Abrir" navega a la ruta del editor correspondiente al
 *      `tipo`, con `?materialId=`.
 *  (c) un item con origen "modulo" (comportamiento de siempre) sigue
 *      mostrando "Descargar" y "Compartir", no "Abrir".
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../auth/use-auth", () => ({
  useAuth: () => ({
    user: { id: "u1", name: "Docente", role: "TEACHER", schoolId: "s1" },
  }),
}));

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return { ...actual, useNavigate: () => mockNavigate };
});

const mockGet = vi.fn();
vi.mock("../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../lib/api")>();
  return {
    ...actual,
    apiGet: (...args: unknown[]) => mockGet(...args),
    getAuthToken: () => "token-xyz",
  };
});

import ProfesorMateriales from "../ProfesorMateriales";

const materialItem = {
  id: "mat-1",
  titulo: "Mapa de prueba",
  materia: "Sin materia",
  tipo: "mapa" as const,
  autor: "u1",
  ownerUserId: "u1",
  escuelaId: "s1",
  compartido: false,
  createdAt: "2026-07-04T00:00:00.000Z",
  origen: "material" as const,
};

const moduloItem = {
  id: "mod-1",
  titulo: "Cuestionario de prueba",
  materia: "Matemáticas",
  tipo: "cuestionario" as const,
  autor: "u1",
  ownerUserId: "u1",
  escuelaId: "s1",
  compartido: false,
  createdAt: "2026-06-01T00:00:00.000Z",
  origen: "modulo" as const,
};

beforeEach(() => {
  vi.clearAllMocks();
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

describe("PLAN-G §1: Abrir un material guardado", () => {
  it("(a)+(c) un item 'material' muestra Abrir (no Descargar/Compartir); un item 'modulo' sigue con Descargar/Compartir", async () => {
    mockGet.mockResolvedValue({ items: [materialItem, moduloItem] });
    renderPage();

    // Ambos items son propios (ownerUserId === user.id) y ninguno está
    // compartido, así que sólo aparecen en el tab "Mis materiales".
    fireEvent.click(await screen.findByText("Mis materiales"));

    expect(await screen.findByTestId("abrir-mat-1")).toBeTruthy();
    expect(screen.queryByTestId("compartir-mat-1")).toBeNull();

    expect(screen.queryByTestId("abrir-mod-1")).toBeNull();
    expect(await screen.findByTestId("compartir-mod-1")).toBeTruthy();
  });

  it("(b) click en Abrir navega a la ruta del editor con ?materialId=", async () => {
    mockGet.mockResolvedValue({ items: [materialItem] });
    renderPage();
    fireEvent.click(await screen.findByText("Mis materiales"));

    const abrirBtn = await screen.findByTestId("abrir-mat-1");
    fireEvent.click(abrirBtn);

    expect(mockNavigate).toHaveBeenCalledWith("/herramientas/mapa-editor?materialId=mat-1");
  });
});
