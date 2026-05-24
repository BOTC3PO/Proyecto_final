import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import AnalisisSintacticoRenderer from "../AnalisisSintacticoRenderer";

const ETIQUETAS = [
  { palabra: "gato", etiqueta: "sustantivo" },
  { palabra: "negro", etiqueta: "adjetivo" },
  { palabra: "corre", etiqueta: "verbo" },
];

describe("AnalisisSintacticoRenderer", () => {
  it("renderiza un select por palabra en etiquetasPedidas", () => {
    render(
      <AnalisisSintacticoRenderer
        textoAnalizar="el gato negro corre"
        etiquetasPedidas={ETIQUETAS}
      />,
    );
    expect(screen.getByTestId("analisis-sintactico-select-gato")).toBeTruthy();
    expect(screen.getByTestId("analisis-sintactico-select-negro")).toBeTruthy();
    expect(screen.getByTestId("analisis-sintactico-select-corre")).toBeTruthy();
    // "el" no está en etiquetasPedidas → no debería tener select
    expect(
      screen.queryByTestId("analisis-sintactico-select-el"),
    ).toBeNull();
  });

  it("opciones del select son la union de etiquetas pedidas", () => {
    render(
      <AnalisisSintacticoRenderer
        textoAnalizar="gato negro"
        etiquetasPedidas={ETIQUETAS}
      />,
    );
    const select = screen.getByTestId(
      "analisis-sintactico-select-gato",
    ) as HTMLSelectElement;
    const optionValues = Array.from(select.options).map((o) => o.value);
    expect(optionValues).toContain("sustantivo");
    expect(optionValues).toContain("adjetivo");
    expect(optionValues).toContain("verbo");
  });

  it("cambiar un select dispara onChange con la asignación completa", () => {
    const onChange = vi.fn();
    render(
      <AnalisisSintacticoRenderer
        textoAnalizar="gato negro"
        etiquetasPedidas={ETIQUETAS}
        asignaciones={{}}
        onChange={onChange}
      />,
    );
    fireEvent.change(screen.getByTestId("analisis-sintactico-select-gato"), {
      target: { value: "sustantivo" },
    });
    expect(onChange).toHaveBeenCalledWith({ gato: "sustantivo" });
  });
});
