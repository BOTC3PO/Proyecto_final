/**
 * FIX-CONFIG — ProfesorAulaConfiguracion: carga infinita con `id` undefined.
 *
 * Causa raíz: la ruta es `profesor/aulas/:aulaId` (router.tsx:282) pero
 * el componente leía `useParams().id`, siempre undefined. El `if (!id) return`
 * en el useEffect corría ANTES del `.finally(() => setIsLoading(false))`,
 * así que el spinner quedaba para siempre sin request a la red.
 *
 * Tests:
 *  1. Con aulaId válido → fetchClassroomDetail se llama con ese id, sale
 *     del loading, muestra el form (candado: el bug del spinner infinito
 *     impedía llegar acá).
 */
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import ProfesorAulaConfiguracion from "../ProfesorAulaConfiguracion";

// Mocks de los servicios que usa el componente.
vi.mock("../../services/aulas", async () => {
  return {
    fetchClassroomDetail: vi.fn(),
    updateClassroom: vi.fn(),
    // PLAN-U §6 — co-titulares: resuelven vacío por default para no
    // romper los tests preexistentes que no ejercitan esta sección.
    fetchTitulares: vi.fn(async () => ({ owner: null, coTitulares: [] })),
    fetchTitularesCandidatos: vi.fn(async () => ({ items: [] })),
    agregarTitular: vi.fn(),
    quitarTitular: vi.fn(),
  };
});
vi.mock("../../services/actividades", async () => {
  return {
    createActivity: vi.fn(),
    deleteActivity: vi.fn(),
    fetchUpcomingActivities: vi.fn(async () => []),
  };
});
vi.mock("../../services/clase-modulos", async () => {
  return {
    fetchClaseModulos: vi.fn(async () => []),
    assignModulo: vi.fn(),
    unassignModulo: vi.fn(),
  };
});

import { fetchClassroomDetail } from "../../services/aulas";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/profesor/aulas/:aulaId" element={<ProfesorAulaConfiguracion />} />
      </Routes>
    </MemoryRouter>
  );

describe("FIX-CONFIG: ProfesorAulaConfiguracion — param correcto + no spinner infinito", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("con aulaId válido → fetchClassroomDetail se llama con ese id y sale del loading", async () => {
    // Mock que devuelve un aula válida.
    vi.mocked(fetchClassroomDetail).mockResolvedValue({
      id: "aula-1",
      name: "Aula 1",
      description: "desc",
      accessType: "privada",
      status: "ACTIVE",
      institutionId: null,
      category: null,
      members: [],
    } as never);

    renderAt("/profesor/aulas/aula-1");

    // Candado: antes del fix, el spinner quedaba para siempre. Ahora
    // el form debe aparecer.
    await waitFor(() => {
      expect(screen.getByText(/Configuración general/i)).toBeInTheDocument();
    });

    // El servicio se llamó con el id correcto (no con undefined).
    expect(fetchClassroomDetail).toHaveBeenCalledWith("aula-1");
  });
});

describe("FIX-CONFIG: ProfesorAulaConfiguracion — sin aulaId no es spinner infinito", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // vi.doMock + resetModules para que useParams devuelva undefined
    // SOLO en este test. El test anterior usa el useParams real.
    vi.resetModules();
    vi.doMock("react-router-dom", async () => {
      const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
      return {
        ...actual,
        useParams: () => ({ aulaId: undefined }),
      };
    });
  });

  afterEach(() => {
    vi.doUnmock("react-router-dom");
    vi.resetModules();
  });

  it("muestra error claro y NO queda en loading", async () => {
    // Importar DESPUÉS del doMock para que tome el useParams mockeado.
    const { default: ProfesorAulaConfiguracionSinId } = await import("../ProfesorAulaConfiguracion");
    render(
      <MemoryRouter initialEntries={["/profesor/aulas/"]}>
        <Routes>
          <Route path="/profesor/aulas/:aulaId?" element={<ProfesorAulaConfiguracionSinId />} />
        </Routes>
      </MemoryRouter>
    );

    // El spinner no debe quedar para siempre: el error aparece.
    await waitFor(() => {
      expect(screen.getByText(/Falta el identificador del aula/i)).toBeInTheDocument();
    });

    // El servicio NO se llamó (no hay id).
    expect(fetchClassroomDetail).not.toHaveBeenCalled();
  });
});
