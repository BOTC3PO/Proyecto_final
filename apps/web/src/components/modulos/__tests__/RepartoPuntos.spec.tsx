/**
 * F4-03 — Panel "Reparto por sección" (`RepartoPuntos`).
 *
 * Cubre los criterios de la tarea:
 *  - Mostrar el total.
 *  - Mostrar el reparto por sección.
 *  - Variante compact.
 *  - Empty state (sin posiciones o sin puntaje > 0).
 *  - Modo "armar" (sin acertadas) vs modo "resultado del alumno" (con acertadas).
 */

import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import RepartoPuntos from "../RepartoPuntos";
import { parseCuestionario } from "../../../domain/quiz/posiciones";

function cuestionarioDosSecciones() {
  return parseCuestionario({
    temas: [
      { id: "algebra", nombre: "Álgebra" },
      { id: "geo", nombre: "Geometría" }
    ],
    posiciones: [
      {
        tipo: "fijo",
        temaPrincipal: "algebra",
        puntaje: 3,
        variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q1" } }]
      },
      {
        tipo: "obligatorio",
        temaPrincipal: "algebra",
        puntaje: 2,
        variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q2" } }]
      },
      {
        tipo: "fijo",
        temaPrincipal: "geo",
        puntaje: 5,
        variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q3" } }]
      }
    ]
  });
}

describe("RepartoPuntos", () => {
  it("vacío: sin posiciones muestra el status 'no tiene posiciones'", () => {
    const vacio = parseCuestionario({ temas: [], posiciones: [] });
    render(<RepartoPuntos cuestionario={vacio} />);
    expect(screen.getByRole("status")).toHaveTextContent(
      /El cuestionario no tiene posiciones/
    );
  });

  it("total: muestra la suma de puntajes de las posiciones con > 0", () => {
    const c = cuestionarioDosSecciones();
    render(<RepartoPuntos cuestionario={c} />);
    const panel = screen.getByTestId("reparto-table");
    expect(within(panel).getByText(/Total:/)).toBeInTheDocument();
    // 3 + 2 + 5 = 10
    expect(within(panel).getByText("10")).toBeInTheDocument();
  });

  it("reparto: muestra una fila por sección con puntos y %", () => {
    const c = cuestionarioDosSecciones();
    render(<RepartoPuntos cuestionario={c} />);
    const panel = screen.getByTestId("reparto-table");

    // Álgebra: 3 + 2 = 5 puntos. 5/10 = 50%.
    expect(within(panel).getByText("Álgebra")).toBeInTheDocument();
    // Geometría: 5 puntos. 5/10 = 50%.
    expect(within(panel).getByText("Geometría")).toBeInTheDocument();
    // 50% aparece dos veces (Álgebra y Geometría).
    const cincuentas = within(panel).getAllByText("50%");
    expect(cincuentas.length).toBe(2);
  });

  it("ordena las secciones de mayor a menor puntaje", () => {
    const c = parseCuestionario({
      temas: [
        { id: "algebra", nombre: "Álgebra" },
        { id: "geo", nombre: "Geometría" }
      ],
      posiciones: [
        {
          tipo: "fijo",
          temaPrincipal: "algebra",
          puntaje: 1,
          variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q1" } }]
        },
        {
          tipo: "fijo",
          temaPrincipal: "geo",
          puntaje: 5,
          variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q2" } }]
        },
        {
          tipo: "fijo",
          temaPrincipal: "algebra",
          puntaje: 3,
          variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q3" } }]
        }
      ]
    });
    const { container } = render(<RepartoPuntos cuestionario={c} />);
    const filas = container.querySelectorAll("tbody tr");
    // Álgebra: 1 + 3 = 4. Geometría: 5. Geometría va primero.
    expect(filas.length).toBe(2);
    expect(filas[0].textContent).toMatch(/Geometr|geometr/i);
    expect(filas[1].textContent).toMatch(/lgebra/i);
  });

  it("con acertadas: muestra columnas Score y Ratio", () => {
    const c = cuestionarioDosSecciones();
    const acertadas = new Set<number>([1, 3]); // pos 1 (álgebra) y pos 3 (geo)
    render(<RepartoPuntos cuestionario={c} acertadas={acertadas} />);
    const panel = screen.getByTestId("reparto-table");
    expect(within(panel).getByText("Score")).toBeInTheDocument();
    expect(within(panel).getByText("Ratio")).toBeInTheDocument();
    // Álgebra: score 3, maxScore 5 → ratio 60%.
    // Geometría: score 5, maxScore 5 → ratio 100%.
    expect(within(panel).getByText("60%")).toBeInTheDocument();
    expect(within(panel).getByText("100%")).toBeInTheDocument();
  });

  it("sin acertadas: NO muestra columnas Score y Ratio", () => {
    const c = cuestionarioDosSecciones();
    render(<RepartoPuntos cuestionario={c} />);
    const panel = screen.getByTestId("reparto-table");
    expect(within(panel).queryByText("Score")).not.toBeInTheDocument();
    expect(within(panel).queryByText("Ratio")).not.toBeInTheDocument();
  });

  it("todas las posiciones con puntaje 0 → mensaje 'ninguna posición tiene puntaje'", () => {
    const c = parseCuestionario({
      temas: [{ id: "algebra", nombre: "Álgebra" }],
      posiciones: [
        {
          tipo: "fijo",
          temaPrincipal: "algebra",
          puntaje: 0,
          variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q1" } }]
        }
      ]
    });
    render(<RepartoPuntos cuestionario={c} />);
    expect(
      screen.getByText(/Ninguna posición tiene puntaje/)
    ).toBeInTheDocument();
  });

  it("variant='compact': una sola línea con el total y secciones", () => {
    const c = cuestionarioDosSecciones();
    render(<RepartoPuntos cuestionario={c} variant="compact" />);
    const compact = screen.getByTestId("reparto-compact");
    expect(compact.textContent).toMatch(/Total:.*10.*puntos/);
    expect(compact.textContent).toMatch(/2 secciones/);
    expect(compact.textContent).toMatch(/3 posiciones/);
  });

  it("variant='compact' con 1 sola sección: singulariza la palabra", () => {
    const c = parseCuestionario({
      temas: [{ id: "algebra", nombre: "Álgebra" }],
      posiciones: [
        {
          tipo: "fijo",
          temaPrincipal: "algebra",
          puntaje: 1,
          variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q1" } }]
        }
      ]
    });
    render(<RepartoPuntos cuestionario={c} variant="compact" />);
    const compact = screen.getByTestId("reparto-compact");
    expect(compact.textContent).toMatch(/1 sección/);
    expect(compact.textContent).toMatch(/1 posición/);
    expect(compact.textContent).toMatch(/1 punto/);
  });
});
