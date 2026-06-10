/**
 * Tests de AulaActionsBar (Tarea 16).
 *
 * Verifica:
 *  - Muestra las 3 acciones (Asistencia, Anuncio, Estadísticas).
 *  - Los href de los links preservan el aulaId en query string.
 *  - El botón "Publicar anuncio" invoca onPublicarClick.
 *  - Si no hay classroomId, no se renderiza nada.
 *  - El contenedor lleva aria-label="Acciones del aula" para lectores de pantalla.
 */

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AulaActionsBar from "../AulaActionsBar";

function renderBar(props: React.ComponentProps<typeof AulaActionsBar>) {
  return render(
    <MemoryRouter initialEntries={["/clases/abc"]}>
      <AulaActionsBar {...props} />
    </MemoryRouter>,
  );
}

const DEFAULT_PROPS: React.ComponentProps<typeof AulaActionsBar> = {
  classroomId: "aula-1",
  onPublicarClick: vi.fn(),
  onAsignarModulosClick: vi.fn(),
};

describe("AulaActionsBar", () => {
  it("muestra las 4 acciones esperadas", () => {
    renderBar(DEFAULT_PROPS);
    expect(screen.getByTestId("aula-action-asistencia")).toBeInTheDocument();
    expect(screen.getByTestId("aula-action-publicar")).toBeInTheDocument();
    expect(screen.getByTestId("aula-action-asignar-modulo")).toBeInTheDocument();
    expect(screen.getByTestId("aula-action-estadisticas")).toBeInTheDocument();
  });

  it("los href de Asistencia y Estadísticas llevan aulaId en query", () => {
    renderBar({ ...DEFAULT_PROPS, classroomId: "aula-xyz" });
    const asistencia = screen.getByTestId("aula-action-asistencia");
    const estadisticas = screen.getByTestId("aula-action-estadisticas");
    expect(asistencia.getAttribute("href")).toBe(
      "/profesor/asistencia?aulaId=aula-xyz",
    );
    expect(estadisticas.getAttribute("href")).toBe(
      "/profesor/estadisticas?aulaId=aula-xyz",
    );
  });

  it("escapa caracteres especiales en el aulaId", () => {
    renderBar({ ...DEFAULT_PROPS, classroomId: "aula/with spaces+&" });
    const asistencia = screen.getByTestId("aula-action-asistencia");
    expect(asistencia.getAttribute("href")).toBe(
      "/profesor/asistencia?aulaId=aula%2Fwith%20spaces%2B%26",
    );
  });

  it("el botón Publicar invoca onPublicarClick", () => {
    const onClick = vi.fn();
    renderBar({ ...DEFAULT_PROPS, onPublicarClick: onClick });
    fireEvent.click(screen.getByTestId("aula-action-publicar"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("el botón Asignar módulo invoca onAsignarModulosClick", () => {
    const onClick = vi.fn();
    renderBar({ ...DEFAULT_PROPS, onAsignarModulosClick: onClick });
    fireEvent.click(screen.getByTestId("aula-action-asignar-modulo"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("si no hay classroomId, no renderiza nada", () => {
    const { container } = renderBar({
      ...DEFAULT_PROPS,
      classroomId: "",
    });
    expect(container).toBeEmptyDOMElement();
  });

  it("la región tiene aria-label accesible", () => {
    renderBar(DEFAULT_PROPS);
    expect(
      screen.getByRole("region", { name: "Acciones del aula" }),
    ).toBeInTheDocument();
  });
});
