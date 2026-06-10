/**
 * Tests de CodeEditor.
 */

import { describe, it, expect, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import CodeEditor from "../CodeEditor";

function renderCE(initial = "hola") {
  const onChange = vi.fn();
  const result = render(
    <CodeEditor value={initial} onChange={onChange} />,
  );
  const ta = result.container.querySelector(
    "textarea",
  ) as HTMLTextAreaElement;
  return { ...result, onChange, ta };
}

describe("CodeEditor", () => {
  it("renderiza con el valor inicial dentro del textarea", () => {
    const { ta } = renderCE("variables:\n  a: 1");
    expect(ta.value).toContain("variables:");
    expect(ta.value).toContain("a: 1");
  });

  it("onChange dispara al tipear", () => {
    const { ta, onChange } = renderCE("a");
    fireEvent.change(ta, { target: { value: "ab" } });
    expect(onChange).toHaveBeenCalledWith("ab");
  });

  it("Tab inserta 2 espacios", () => {
    const { ta, onChange } = renderCE("xy");
    // Posicionamos el caret antes de 'y'
    ta.setSelectionRange(1, 1);
    fireEvent.keyDown(ta, { key: "Tab" });
    expect(onChange).toHaveBeenCalledWith("x  y");
  });

  it("Escape seguido de Tab NO indenta (deja salir el foco; sin trampa de teclado)", () => {
    const { ta, onChange } = renderCE("xy");
    ta.setSelectionRange(1, 1);
    fireEvent.keyDown(ta, { key: "Escape" });
    const tabEvent = fireEvent.keyDown(ta, { key: "Tab" });
    // No se insertó indentación...
    expect(onChange).not.toHaveBeenCalled();
    // ...y no se previno el default, así el foco puede moverse nativamente.
    expect(tabEvent).toBe(true);
  });

  it("tras Escape, escribir cancela el modo de escape (Tab vuelve a indentar)", () => {
    const { ta, onChange } = renderCE("xy");
    ta.setSelectionRange(1, 1);
    fireEvent.keyDown(ta, { key: "Escape" });
    // Escribir una letra cancela el modo "Tab sale".
    fireEvent.keyDown(ta, { key: "a" });
    fireEvent.keyDown(ta, { key: "Tab" });
    expect(onChange).toHaveBeenCalledWith("x  y");
  });

  /* ---------- A11Y-V2: errores asociados ---------- */

  function describedElements(
    ta: HTMLTextAreaElement,
    container: HTMLElement,
  ): HTMLElement[] {
    const ids = (ta.getAttribute("aria-describedby") ?? "").split(/\s+/).filter(Boolean);
    return ids
      .map((id) => container.querySelector(`#${CSS.escape(id)}`))
      .filter((el): el is HTMLElement => el !== null);
  }

  it("sin errorSummary no marca aria-invalid, pero describe la instrucción de teclado", () => {
    const { ta, container } = renderCE("a");
    expect(ta.getAttribute("aria-invalid")).toBeNull();
    const desc = describedElements(ta, container);
    // Sigue describiendo el editor con la instrucción para salir del foco.
    expect(desc.some((el) => /escape/i.test(el.textContent ?? ""))).toBe(true);
  });

  it("con errorSummary asocia el textarea al resumen vía aria-describedby + aria-invalid", () => {
    const onChange = vi.fn();
    const { container } = render(
      <CodeEditor
        value="variables:"
        onChange={onChange}
        errorSummary="1 error de validación. Línea 2: falta respuesta"
      />,
    );
    const ta = container.querySelector("textarea") as HTMLTextAreaElement;
    expect(ta.getAttribute("aria-invalid")).toBe("true");
    const desc = describedElements(ta, container);
    const summary = desc.find((el) => el.getAttribute("role") === "status");
    expect(summary).toBeTruthy();
    expect(summary?.getAttribute("aria-live")).toBe("polite");
    expect(summary?.textContent).toContain("Línea 2: falta respuesta");
  });

  /* ---------- Tarea 10: insertAtCursor + SnippetBar ---------- */

  it("insertAtCursor: inserta texto en el caret y notifica onChange", () => {
    const onChange = vi.fn();
    const ref = { current: null as null | { insertAtCursor: (t: string) => void } };
    const { container } = render(
      <CodeEditor value="abc" onChange={onChange} ref={ref as never} />,
    );
    const ta = container.querySelector("textarea") as HTMLTextAreaElement;
    // Caret entre 'a' y 'bc'.
    ta.setSelectionRange(1, 1);
    ref.current?.insertAtCursor("XYZ");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("aXYZbc");
  });

  it("insertAtCursor: si hay selección, reemplaza esa selección", () => {
    const onChange = vi.fn();
    const ref = { current: null as null | { insertAtCursor: (t: string) => void } };
    const { container } = render(
      <CodeEditor value="abc" onChange={onChange} ref={ref as never} />,
    );
    const ta = container.querySelector("textarea") as HTMLTextAreaElement;
    // Selección sobre 'bc' (índices 1..3).
    ta.setSelectionRange(1, 3);
    ref.current?.insertAtCursor("ZZ");
    expect(onChange).toHaveBeenCalledWith("aZZ");
  });
});
