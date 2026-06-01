/**
 * Tests de accesibilidad de GeneradorPicker (A11Y-V1).
 *
 * Verifican que el <select> tiene un label asociado programáticamente y que el
 * filtro anuncia el conteo de resultados en una región aria-live.
 */

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import GeneradorPicker from "../GeneradorPicker";

describe("GeneradorPicker — accesibilidad", () => {
  it("el select tiene un label accesible asociado", () => {
    render(<GeneradorPicker value="" onChange={() => {}} />);
    // getByLabelText falla si el control no tiene nombre accesible.
    const select = screen.getByLabelText("Generador");
    expect(select.tagName).toBe("SELECT");
  });

  it("anuncia el conteo de generadores en una región aria-live", () => {
    render(<GeneradorPicker value="" onChange={() => {}} />);
    const status = screen
      .getAllByRole("status")
      .find((el) => /generador/i.test(el.textContent ?? ""));
    expect(status).toBeTruthy();
    expect(status!.getAttribute("aria-live")).toBe("polite");
    expect(status!.textContent).toMatch(/\d+\s+generador/);
  });

  it("al filtrar, el conteo anunciado se actualiza", () => {
    render(<GeneradorPicker value="" onChange={() => {}} />);
    const status = screen
      .getAllByRole("status")
      .find((el) => /generador/i.test(el.textContent ?? ""))!;
    const before = status.textContent;
    const filtro = screen.getByLabelText("Filtrar generadores");
    // Una búsqueda que casi seguro no matchea ningún generador real.
    fireEvent.change(filtro, { target: { value: "zzz-no-existe-xyz" } });
    expect(status.textContent).not.toBe(before);
    expect(status.textContent).toMatch(/^0\s+generadores/);
  });

  it("cambiar la selección dispara onChange con el id elegido", () => {
    const onChange = vi.fn();
    render(<GeneradorPicker value="" onChange={onChange} />);
    const select = screen.getByLabelText("Generador") as HTMLSelectElement;
    const opt = Array.from(select.options).find((o) => o.value !== "");
    if (opt) {
      fireEvent.change(select, { target: { value: opt.value } });
      expect(onChange).toHaveBeenCalledWith(opt.value);
    }
  });
});
