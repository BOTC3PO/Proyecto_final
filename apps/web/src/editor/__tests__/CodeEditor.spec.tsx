/**
 * PLAN-E §9 — "doble texto en la barra": el overlay coloreado de
 * `editor/CodeEditor.tsx` duplicaba el `:` de las palabras clave de bloque
 * (`variables::`, `enunciado::`...) porque el regex del highlighter volvía
 * a matchear el mismo `:` en la vuelta siguiente del `while`. El textarea
 * real (transparente, recibe el input) nunca tuvo el error — sólo el
 * overlay visible — lo que desincronizaba ambas capas a medida que se
 * escribía, dando la sensación de "dos textos".
 */
import { describe, expect, it } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import CodeEditor from "../CodeEditor";

describe("editor/CodeEditor · highlighter", () => {
  it("no duplica los ':' de las palabras clave de bloque en el overlay", () => {
    const dsl = 'variables:\n  a: random(1, 10)\n\nenunciado: "Cuanto es {a}?"\nrespuesta: a\ntipo: input\n';
    const { container } = render(
      <CodeEditor value={dsl} onChange={() => {}} />,
    );
    const overlay = container.querySelector('[data-testid="code-editor"] pre');
    expect(overlay).not.toBeNull();
    expect(overlay!.textContent).not.toMatch(/::/);
    expect(overlay!.textContent).toContain("variables:");
    expect(overlay!.textContent).toContain("enunciado:");
  });

  it("el textarea ocupa todo el ancho del panel (no la franja angosta por default)", () => {
    const { getByTestId } = render(
      <CodeEditor value={"tipo: input\n"} onChange={() => {}} />,
    );
    const ta = getByTestId("code-editor-textarea") as HTMLTextAreaElement;
    expect(ta.style.width).toBe("100%");
    expect(ta.style.boxSizing).toBe("border-box");
  });

  it("el overlay sigue el scroll del textarea (si no, se ve el texto duplicado y corrido)", () => {
    const { container, getByTestId } = render(
      <CodeEditor value={"a\n".repeat(80)} onChange={() => {}} />,
    );
    const ta = getByTestId("code-editor-textarea") as HTMLTextAreaElement;
    const overlay = container.querySelector(
      '[data-testid="code-editor"] pre',
    ) as HTMLPreElement;

    ta.scrollTop = 120;
    ta.scrollLeft = 40;
    fireEvent.scroll(ta);

    expect(overlay.scrollTop).toBe(120);
    expect(overlay.scrollLeft).toBe(40);
  });
});
