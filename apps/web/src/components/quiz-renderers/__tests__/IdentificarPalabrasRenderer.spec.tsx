import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import IdentificarPalabrasRenderer from "../IdentificarPalabrasRenderer";

describe("IdentificarPalabrasRenderer", () => {
  it("renderiza cada palabra como botón clickeable", () => {
    render(<IdentificarPalabrasRenderer textoAnalizar="el gato negro" />);
    expect(screen.getByTestId("identificar-word-el")).toBeTruthy();
    expect(screen.getByTestId("identificar-word-gato")).toBeTruthy();
    expect(screen.getByTestId("identificar-word-negro")).toBeTruthy();
  });

  it("click toggle agrega a marcadas vía onChange", () => {
    const onChange = vi.fn();
    render(
      <IdentificarPalabrasRenderer
        textoAnalizar="el gato"
        marcadas={[]}
        onChange={onChange}
      />,
    );
    fireEvent.click(screen.getByTestId("identificar-word-gato"));
    expect(onChange).toHaveBeenCalledWith(["gato"]);
  });

  it("click sobre palabra ya marcada la saca", () => {
    const onChange = vi.fn();
    render(
      <IdentificarPalabrasRenderer
        textoAnalizar="el gato"
        marcadas={["gato"]}
        onChange={onChange}
      />,
    );
    fireEvent.click(screen.getByTestId("identificar-word-gato"));
    expect(onChange).toHaveBeenCalledWith([]);
  });

  it("post-submit marca correctas/incorrectas/perdidas", () => {
    render(
      <IdentificarPalabrasRenderer
        textoAnalizar="el gato negro"
        marcadas={["gato", "el"]}
        disabled
        correctas={["gato", "negro"]}
      />,
    );
    expect(
      screen.getByTestId("identificar-word-gato").getAttribute("data-state"),
    ).toBe("correct");
    expect(
      screen.getByTestId("identificar-word-el").getAttribute("data-state"),
    ).toBe("wrong");
    expect(
      screen.getByTestId("identificar-word-negro").getAttribute("data-state"),
    ).toBe("missed");
  });
});
