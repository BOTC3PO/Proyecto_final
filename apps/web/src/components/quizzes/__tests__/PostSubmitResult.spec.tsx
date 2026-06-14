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
