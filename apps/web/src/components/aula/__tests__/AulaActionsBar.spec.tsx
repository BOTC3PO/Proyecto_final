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

describe("AulaActionsBar", () => {
  it("muestra las 3 acciones esperadas", () => {
    renderBar({ classroomId: "aula-1", onPublicarClick: vi.fn() });
    expect(screen.getByTestId("aula-action-asistencia")).toBeInTheDocument();
    expect(screen.getByTestId("aula-action-publicar")).toBeInTheDocument();
    expect(screen.getByTestId("aula-action-estadisticas")).toBeInTheDocument();
  });

  it("los href de Asistencia y Estadísticas llevan aulaId en query", () => {
    renderBar({ classroomId: "aula-xyz", onPublicarClick: vi.fn() });
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
    renderBar({
      classroomId: "aula/with spaces+&",
      onPublicarClick: vi.fn(),
    });
    const asistencia = screen.getByTestId("aula-action-asistencia");
    expect(asistencia.getAttribute("href")).toBe(
      "/profesor/asistencia?aulaId=aula%2Fwith%20spaces%2B%26",
    );
  });

  it("el botón Publicar invoca onPublicarClick", () => {
    const onClick = vi.fn();
    renderBar({ classroomId: "aula-1", onPublicarClick: onClick });
    fireEvent.click(screen.getByTestId("aula-action-publicar"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("si no hay classroomId, no renderiza nada", () => {
    const { container } = renderBar({
      classroomId: "",
      onPublicarClick: vi.fn(),
    });
    expect(container).toBeEmptyDOMElement();
  });

  it("la región tiene aria-label accesible", () => {
    renderBar({ classroomId: "aula-1", onPublicarClick: vi.fn() });
    expect(
      screen.getByRole("region", { name: "Acciones del aula" }),
    ).toBeInTheDocument();
  });
});
