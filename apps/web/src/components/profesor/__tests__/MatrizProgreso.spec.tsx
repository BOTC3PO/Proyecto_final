/**
 * Tests de MatrizProgreso (Tarea 18).
 *
 * Verifica:
 *  - Render con respuesta mock de 2 alumnos × 3 modulos muestra 6 celdas
 *    con los estados correctos (3 status reales + 3 null = gris).
 *  - Fila de resumen con % por modulo.
 *  - Estado loading visible mientras no resuelve.
 *  - Estado error con boton Reintentar.
 *  - Aula sin alumnos muestra mensaje claro.
 *  - El servicio fetchAulaMatriz manda el aulaId en query.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MatrizProgreso from "../MatrizProgreso";

const mockGet = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockGet(...args),
}));

const MOCK_RESPONSE = {
  modulos: [
    { id: "m-1", title: "Suma de fracciones" },
    { id: "m-2", title: "Lectura comprensiva" },
    { id: "m-3", title: "Historia argentina" },
  ],
  alumnos: [
    {
      id: "a-1",
      name: "Ana",
      progresos: {
        "m-1": "completado",
        "m-2": "en_progreso",
        "m-3": null,
      } as Record<string, string | null>,
    },
    {
      id: "a-2",
      name: "Bruno",
      progresos: {
        "m-1": "iniciado",
        "m-2": null,
        "m-3": "completado",
      } as Record<string, string | null>,
    },
  ],
};

beforeEach(() => {
  mockGet.mockReset();
});

describe("MatrizProgreso", () => {
  it("muestra 2 filas y 3 columnas y 6 celdas con data-status correcto", async () => {
    mockGet.mockResolvedValueOnce(MOCK_RESPONSE);
    render(<MatrizProgreso classroomId="aula-1" />);
    await waitFor(() => {
      expect(screen.getByTestId("matriz-progreso")).toBeInTheDocument();
    });
    // 6 celdas (2 alumnos × 3 modulos)
    for (const alumno of MOCK_RESPONSE.alumnos) {
      for (const modulo of MOCK_RESPONSE.modulos) {
        const cell = screen.getByTestId(
          `matriz-progreso-celda-${alumno.id}-${modulo.id}`,
        );
        expect(cell).toBeInTheDocument();
        const expected = alumno.progresos[modulo.id] ?? "none";
        expect(cell.getAttribute("data-status")).toBe(expected);
      }
    }
  });

  it("renderiza la fila de resumen con % de completado por modulo", async () => {
    mockGet.mockResolvedValueOnce(MOCK_RESPONSE);
    render(<MatrizProgreso classroomId="aula-1" />);
    await waitFor(() => {
      expect(screen.getByTestId("matriz-progreso-pct-m-1")).toBeInTheDocument();
    });
    // m-1: 1 de 2 = 50%
    expect(screen.getByTestId("matriz-progreso-pct-m-1").textContent).toBe("50%");
    // m-2: 0 de 2 = 0%
    expect(screen.getByTestId("matriz-progreso-pct-m-2").textContent).toBe("0%");
    // m-3: 1 de 2 = 50%
    expect(screen.getByTestId("matriz-progreso-pct-m-3").textContent).toBe("50%");
  });

  it("muestra estado loading mientras la promesa no resuelve", () => {
    mockGet.mockReturnValue(new Promise(() => {})); // nunca resuelve
    render(<MatrizProgreso classroomId="aula-1" />);
    expect(screen.getByTestId("matriz-progreso-loading")).toBeInTheDocument();
  });

  it("muestra error con boton Reintentar", async () => {
    mockGet.mockRejectedValueOnce(new Error("network down"));
    render(<MatrizProgreso classroomId="aula-1" />);
    await waitFor(() => {
      expect(screen.getByTestId("matriz-progreso-error")).toBeInTheDocument();
    });
    expect(screen.getByText(/network down/)).toBeInTheDocument();
    // Reintentar dispara otro fetch
    mockGet.mockResolvedValueOnce(MOCK_RESPONSE);
    fireEvent.click(screen.getByRole("button", { name: /reintentar/i }));
    await waitFor(() => {
      expect(screen.getByTestId("matriz-progreso")).toBeInTheDocument();
    });
  });

  it("aula sin alumnos muestra mensaje claro", async () => {
    mockGet.mockResolvedValueOnce({
      modulos: [{ id: "m-1", title: "Solo" }],
      alumnos: [],
    });
    render(<MatrizProgreso classroomId="aula-1" />);
    await waitFor(() => {
      expect(screen.getByTestId("matriz-progreso-vacio")).toBeInTheDocument();
    });
    expect(screen.getByTestId("matriz-progreso-vacio").textContent).toMatch(
      /no tiene alumnos/,
    );
  });

  it("aula sin modulos asignados muestra mensaje claro", async () => {
    mockGet.mockResolvedValueOnce({
      modulos: [],
      alumnos: [{ id: "a-1", name: "Ana", progresos: {} }],
    });
    render(<MatrizProgreso classroomId="aula-1" />);
    await waitFor(() => {
      expect(screen.getByTestId("matriz-progreso-vacio")).toBeInTheDocument();
    });
    expect(screen.getByTestId("matriz-progreso-vacio").textContent).toMatch(
      /no tiene m\u00f3dulos asignados/,
    );
  });

  it("el servicio fetchAulaMatriz manda el aulaId en query", async () => {
    mockGet.mockResolvedValueOnce(MOCK_RESPONSE);
    render(<MatrizProgreso classroomId="aula-xyz" />);
    await waitFor(() => {
      expect(mockGet).toHaveBeenCalledWith(
        "/api/progreso/aula-matriz?aulaId=aula-xyz",
      );
    });
  });

  it("las celdas tienen aria-label con nombre del alumno y modulo", async () => {
    mockGet.mockResolvedValueOnce(MOCK_RESPONSE);
    render(<MatrizProgreso classroomId="aula-1" />);
    await waitFor(() => {
      expect(screen.getByTestId("matriz-progreso")).toBeInTheDocument();
    });
    const cell = screen.getByTestId("matriz-progreso-celda-a-1-m-1");
    expect(cell.getAttribute("aria-label")).toBe(
      "Ana · Suma de fracciones: Completado",
    );
    // Celda con null
    const cellNull = screen.getByTestId("matriz-progreso-celda-a-1-m-3");
    expect(cellNull.getAttribute("aria-label")).toBe(
      "Ana · Historia argentina: sin progreso",
    );
  });
});
