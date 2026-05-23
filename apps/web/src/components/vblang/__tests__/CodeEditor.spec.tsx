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
});
