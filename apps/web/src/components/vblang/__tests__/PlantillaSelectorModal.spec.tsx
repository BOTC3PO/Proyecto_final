/**
 * Tests de PlantillaSelectorModal (Sprint 10A — Bloque B).
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PlantillaSelectorModal from "../PlantillaSelectorModal";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  );
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

const listPlantillasMock = vi.fn();
vi.mock("../../../domain/vblang/plantillaApi", () => ({
  listPlantillas: (...args: unknown[]) => listPlantillasMock(...args),
}));

const FAKE_ITEM = {
  id: "p-1",
  nombre: "Suma básica",
  descripcion: "Plantilla de prueba",
  materia: "matematicas",
  visibility: "privada" as const,
  publicAprobado: false,
  ownerUserId: "u-1",
  version: 3,
  createdAt: "2026-05-01T00:00:00.000Z",
  updatedAt: "2026-05-10T00:00:00.000Z",
};

function renderModal(overrides: { onSelect?: (i: unknown) => void } = {}) {
  const onClose = vi.fn();
  const onSelect = overrides.onSelect ?? vi.fn();
  const result = render(
    <MemoryRouter>
      <PlantillaSelectorModal onClose={onClose} onSelect={onSelect} />
    </MemoryRouter>,
  );
  return { ...result, onClose, onSelect };
}

describe("PlantillaSelectorModal", () => {
  beforeEach(() => {
    navigateMock.mockReset();
    listPlantillasMock.mockReset();
  });

  it("muestra los items que devuelve listPlantillas", async () => {
    listPlantillasMock.mockResolvedValue({ items: [FAKE_ITEM], total: 1 });
    renderModal();
    await waitFor(() =>
      expect(screen.getByText(/Suma básica/)).toBeInTheDocument(),
    );
    expect(listPlantillasMock).toHaveBeenCalled();
  });

  it("click en una plantilla dispara onSelect con el item", async () => {
    listPlantillasMock.mockResolvedValue({ items: [FAKE_ITEM], total: 1 });
    const { onSelect } = renderModal();
    await waitFor(() =>
      expect(screen.getByTestId("plantilla-option-p-1")).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByTestId("plantilla-option-p-1"));
    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: "p-1", nombre: "Suma básica" }),
    );
  });

  it("click en + Crear nueva plantilla navega a /plantillas/nueva", async () => {
    listPlantillasMock.mockResolvedValue({ items: [], total: 0 });
    renderModal();
    await waitFor(() =>
      expect(
        screen.getByTestId("plantilla-selector-create-new"),
      ).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByTestId("plantilla-selector-create-new"));
    expect(navigateMock).toHaveBeenCalledWith("/plantillas/nueva");
  });
});
