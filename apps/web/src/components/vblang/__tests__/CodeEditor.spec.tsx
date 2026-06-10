/**
 * Tests de CodeEditor.
 */

import { describe, it, expect, vi } from "vitest";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
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

  /* ---------- Tarea 11: autocompletado de builtins/variables/constantes ---------- */

  function nextTick() {
    return new Promise<void>((r) => requestAnimationFrame(() => r()));
  }

  async function typePrefix(
    container: HTMLElement,
    value: string,
    prefix: string,
  ): Promise<HTMLTextAreaElement> {
    const ta = container.querySelector("textarea") as HTMLTextAreaElement;
    const newValue = value + prefix;
    await act(async () => {
      fireEvent.change(ta, { target: { value: newValue } });
      // Recolocar el caret al final.
      ta.setSelectionRange(newValue.length, newValue.length);
      // Doble rAF: el primero dispara `recomputeSuggestions` (cambia el state
      // para abrir el popup), el segundo garantiza que React commit'eó.
      await nextTick();
      await nextTick();
    });
    return ta;
  }

  it("sugiere builtins con prefijo de 2+ caracteres (ej. 'ra' -> 'random')", async () => {
    const { container } = render(
      <CodeEditor value="respuesta: " onChange={() => {}} />,
    );
    await typePrefix(container, "respuesta: ", "ra");
    const list = screen.getByTestId("vblang-suggestions");
    expect(list).toBeInTheDocument();
    // random es builtin, random_float tambien (empieza con 'ra').
    const items = within(list).getAllByRole("option");
    // El primer item debe ser 'random'.
    const firstName = within(items[0]).getByText("random");
    expect(firstName).toBeInTheDocument();
    // Tambien debe aparecer 'random_float'.
    expect(within(list).getByText("random_float")).toBeInTheDocument();
  });

  it("variables declaradas tienen prioridad sobre builtins (ej. 'masa' + prefijo 'ma')", async () => {
    const { container } = render(
      <CodeEditor
        value="variables:\n  masa: 5\nrespuesta: "
        onChange={() => {}}
        declaredVariables={["masa"]}
      />,
    );
    await typePrefix(container, "variables:\n  masa: 5\nrespuesta: ", "ma");
    const list = screen.getByTestId("vblang-suggestions");
    const items = within(list).getAllByRole("option");
    // 'masa' declarada aparece ANTES que 'mayusculas' (builtin).
    const firstName = within(items[0]).getByText("masa");
    expect(firstName).toBeInTheDocument();
    // 'masa' debe estar marcado con kind=var (badge al lado del nombre).
    expect(items[0].textContent).toMatch(/var/);
  });

  it("Escape cierra el popup y deja el caret en el editor", async () => {
    const onChange = vi.fn();
    const { container } = render(
      <CodeEditor value="respuesta: " onChange={onChange} />,
    );
    await typePrefix(container, "respuesta: ", "ra");
    expect(screen.queryByTestId("vblang-suggestions")).toBeInTheDocument();

    const ta = container.querySelector("textarea") as HTMLTextAreaElement;
    fireEvent.keyDown(ta, { key: "Escape" });
    // Despues del Escape, el popup debe estar cerrado.
    await nextTick();
    expect(screen.queryByTestId("vblang-suggestions")).toBeNull();
    // El editor sigue en pie.
    expect(ta).toBeInTheDocument();
  });

  it("Enter con el popup cerrado inserta salto de linea (no llama onChange con sugerencia)", async () => {
    const onChange = vi.fn();
    const { container } = render(
      <CodeEditor value="algo" onChange={onChange} />,
    );
    const ta = container.querySelector("textarea") as HTMLTextAreaElement;
    ta.setSelectionRange(4, 4);
    // Sin popup, Enter no debe llamar onChange con una sugerencia: es el
    // comportamiento nativo del textarea (salto de linea). Nuestro handler
    // no hace preventDefault cuando el popup esta cerrado, asi que onChange
    // no debe ser invocado desde React (lo hace el navegador, no React).
    fireEvent.keyDown(ta, { key: "Enter" });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("Enter con el popup abierto acepta la sugerencia y dispara onChange", async () => {
    const onChange = vi.fn();
    const { container } = render(
      <CodeEditor value="respuesta: " onChange={onChange} />,
    );
    await typePrefix(container, "respuesta: ", "ra");
    const ta = container.querySelector("textarea") as HTMLTextAreaElement;
    // La primera sugerencia es 'random'.
    fireEvent.keyDown(ta, { key: "Enter" });
    // El último llamado a onChange debe haber sido la aceptación.
    const lastCall = onChange.mock.calls.at(-1)?.[0] as string;
    expect(lastCall).toBe("respuesta: random");
  });
});
