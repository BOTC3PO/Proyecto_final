/**
 * F4-03 — Bloque post-submit del reproductor del alumno (`PostSubmitResult`).
 *
 * Cubre los criterios de la tarea:
 *  - El render del puntaje está gateado por `ocultarPuntos`.
 *  - El render de la nota NO está gateado (siempre se muestra).
 *  - El `message` del backend puede contener el porcentaje — el gate
 *    es responsabilidad del backend (F4-03 sanea el message cuando
 *    `ocultarPuntos=true`).
 *  - Sin `result`, no se renderiza nada.
 */

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PostSubmitResult from "../PostSubmitResult";

describe("PostSubmitResult — F4-03 ocultarPuntos", () => {
  it("sin result, no renderiza nada", () => {
    const { container } = render(<PostSubmitResult result={null} />);
    expect(container.firstChild).toBeNull();
  });

  it("con result y sin ocultarPuntos, muestra Puntaje y Nota", () => {
    const result = {
      score: 7,
      maxScore: 10,
      notaDisplay: "Aprobado",
      notaCanonical10: 7,
      porcentaje: 70,
      message: "¡Aprobado! Nota: Aprobado (70%)."
    };
    render(<PostSubmitResult result={result} />);
    expect(screen.getByTestId("post-submit-score")).toHaveTextContent("Puntaje: 7 / 10");
    expect(screen.getByTestId("post-submit-grade")).toHaveTextContent("Nota: Aprobado");
    expect(screen.getByTestId("post-submit-grade")).toHaveTextContent("(7/10)");
    expect(screen.getByTestId("post-submit-message")).toHaveTextContent(
      /¡Aprobado!.*\(70%\)/
    );
  });

  it("con ocultarPuntos=true, NO muestra el Puntaje pero SÍ la Nota", () => {
    const result = {
      score: 7,
      maxScore: 10,
      notaDisplay: "Aprobado",
      notaCanonical10: 7,
      porcentaje: 70,
      message: "¡Aprobado! Nota: Aprobado (70%)."
    };
    render(<PostSubmitResult result={result} ocultarPuntos={true} />);
    expect(screen.queryByTestId("post-submit-score")).not.toBeInTheDocument();
    expect(screen.getByTestId("post-submit-grade")).toHaveTextContent("Nota: Aprobado");
    // El message viene del backend; el componente NO lo modifica, lo confía
    // en que el backend ya lo saneó cuando ocultarPuntos=true.
    expect(screen.getByTestId("post-submit-message")).toBeInTheDocument();
  });

  it("con ocultarPuntos=true y sin score, no muestra el Puntaje y sí la Nota", () => {
    // Caso de un intento con maxScore=0: el backend no devuelve score ni
    // maxScore. El componente no debe inventar un "Puntaje: - / -".
    const result = {
      notaDisplay: "—",
      notaCanonical10: null,
      message: "Este quiz no tiene ítems puntuables, no hay nota."
    };
    render(<PostSubmitResult result={result} ocultarPuntos={true} />);
    expect(screen.queryByTestId("post-submit-score")).not.toBeInTheDocument();
    // notaDisplay = "—" → no se renderiza el bloque de nota.
    expect(screen.queryByTestId("post-submit-grade")).not.toBeInTheDocument();
    // El message sí se renderiza.
    expect(screen.getByTestId("post-submit-message")).toBeInTheDocument();
  });

  it("nota sin canonical10: no muestra el sufijo '(/10)'", () => {
    const result = {
      score: 5,
      maxScore: 10,
      notaDisplay: "5/10",
      notaCanonical10: null
    };
    render(<PostSubmitResult result={result} />);
    const grade = screen.getByTestId("post-submit-grade");
    expect(grade).toHaveTextContent("Nota: 5/10");
    expect(grade).not.toHaveTextContent("(null/10)");
  });

  it("nota con '—' (placeholder) no se renderiza", () => {
    const result = {
      score: 0,
      maxScore: 0,
      notaDisplay: "—",
      notaCanonical10: null
    };
    render(<PostSubmitResult result={result} />);
    expect(screen.queryByTestId("post-submit-grade")).not.toBeInTheDocument();
  });
});

describe("PostSubmitResult — F5-04 rango de nota provisoria", () => {
  it("con pendingManual>0: muestra el rango en lugar de la nota única", () => {
    const result = {
      score: 1,
      maxScore: 4,
      pendingManual: 1,
      notaMinDisplay: "2",
      notaMinCanonical10: 3.7,
      notaMaxDisplay: "8",
      notaMaxCanonical10: 8.2,
      message: "Respuestas enviadas. 1 pregunta(s) abierta(s) quedan pendientes de corrección por el profesor."
    };
    render(<PostSubmitResult result={result} />);
    expect(screen.getByTestId("post-submit-grade-range")).toBeInTheDocument();
    expect(screen.getByTestId("post-submit-grade-range").textContent).toContain(
      "Tu nota está entre 2 y 8."
    );
    expect(screen.getByTestId("post-submit-grade-range").textContent).toContain(
      "1 pregunta pendiente de corrección por el profesor."
    );
    // NO debe mostrar la nota única: sería contradictorio con el rango.
    expect(screen.queryByTestId("post-submit-grade")).not.toBeInTheDocument();
  });

  it("con pendingManual>0 y ocultarPuntos=true: NO muestra Puntaje pero SÍ el rango", () => {
    const result = {
      score: 5,
      maxScore: 10,
      pendingManual: 2,
      notaMinDisplay: "50",
      notaMaxDisplay: "100",
      message: "Respuestas enviadas."
    };
    render(<PostSubmitResult result={result} ocultarPuntos={true} />);
    expect(screen.queryByTestId("post-submit-score")).not.toBeInTheDocument();
    expect(screen.getByTestId("post-submit-grade-range")).toBeInTheDocument();
  });

  it("con pendingManual>0 y singular: 1 pregunta pendiente", () => {
    const result = {
      score: 7,
      maxScore: 10,
      pendingManual: 1,
      notaMinDisplay: "70",
      notaMaxDisplay: "100"
    };
    render(<PostSubmitResult result={result} />);
    const range = screen.getByTestId("post-submit-grade-range");
    expect(range.textContent).toMatch(/1 pregunta pendiente(?!s)/);
  });

  it("con pendingManual>0 y plural: N preguntas pendientes", () => {
    const result = {
      score: 5,
      maxScore: 12,
      pendingManual: 3,
      notaMinDisplay: "40",
      notaMaxDisplay: "100"
    };
    render(<PostSubmitResult result={result} />);
    const range = screen.getByTestId("post-submit-grade-range");
    expect(range.textContent).toContain("3 preguntas pendientes");
  });

  it("con pendingManual=0 (graded): vuelve a mostrar la nota única, NO el rango", () => {
    // Cuando el docente corrigió el último item, el server pasa allGraded=true
    // y el cliente recibe notaDisplay única + pendingManual=undefined/0.
    const result = {
      score: 3,
      maxScore: 4,
      notaDisplay: "Aprobado",
      notaCanonical10: 7.8
    };
    render(<PostSubmitResult result={result} />);
    expect(screen.getByTestId("post-submit-grade")).toHaveTextContent("Nota: Aprobado");
    expect(screen.queryByTestId("post-submit-grade-range")).not.toBeInTheDocument();
  });
});
