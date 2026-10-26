/**
 * Smoke test del editor de diapositivas rediseñado (WYSIWYG + inspector).
 *
 * Verifica que monta, que el lienzo expone los campos editables (contenteditable
 * con role=textbox), que el toggle de tema actualiza las CSS vars del lienzo
 * (--slide-bg) en vivo, y que las pestañas del inspector (Diseño/Contenido/Notas)
 * son recorribles. No hay tests previos para este componente.
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import TheorySlideEditor, { type Slide } from "../TheorySlideEditor";

function renderEditor(slides?: Slide[]) {
  const onDone = vi.fn();
  const onClose = vi.fn();
  const initial: Slide[] =
    slides ?? [{ id: "s1", layout: "top", heading: "Hola", body: "cuerpo" }];
  render(
    <TheorySlideEditor
      presentationTitle="Mi presentación"
      initialSlides={initial}
      initialTheme="minimal"
      onDone={onDone}
      onClose={onClose}
    />,
  );
  return { onDone, onClose };
}

describe("TheorySlideEditor (WYSIWYG)", () => {
  it("monta y muestra el lienzo con título/subtítulo/cuerpo editables", () => {
    renderEditor();
    expect(screen.getByLabelText("Lienzo de la diapositiva")).toBeInTheDocument();
    // Campos editables in-situ como textbox accesible.
    expect(screen.getByRole("textbox", { name: "Título de la diapositiva" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Subtítulo" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Cuerpo de texto" })).toBeInTheDocument();
  });

  it("el inspector tiene las pestañas Diseño / Contenido / Notas y cambian de panel", () => {
    renderEditor();
    const tablist = screen.getByRole("tablist", { name: "Inspector de diapositiva" });
    const tabs = within(tablist).getAllByRole("tab");
    expect(tabs.map((t) => t.textContent)).toEqual(["Diseño", "Contenido", "Notas"]);
    // Diseño activa por defecto: muestra la distribución de contenido.
    expect(screen.getByRole("radiogroup", { name: "Distribución del contenido" })).toBeInTheDocument();
    // Cambiar a Notas: aparece el textarea de notas del orador.
    fireEvent.click(within(tablist).getByRole("tab", { name: "Notas" }));
    expect(screen.getByLabelText("Notas del orador")).toBeInTheDocument();
  });

  it("el toggle de tema actualiza la CSS var --slide-bg del lienzo en vivo", () => {
    renderEditor();
    const canvas = screen
      .getByLabelText("Lienzo de la diapositiva")
      .querySelector(".vb-slide-canvas") as HTMLElement;
    expect(canvas.style.getPropertyValue("--slide-bg")).toBe("#ffffff"); // minimal
    fireEvent.click(screen.getByRole("button", { name: "Tema Oscuro" }));
    expect(canvas.style.getPropertyValue("--slide-bg")).toBe("#0f172a"); // dark
  });

  it("editar el cuerpo en el lienzo no rompe el render (contenteditable)", () => {
    renderEditor();
    const body = screen.getByRole("textbox", { name: "Cuerpo de texto" });
    fireEvent.input(body, { target: { textContent: "nuevo cuerpo" } });
    // El componente sigue montado y el lienzo presente.
    expect(screen.getByLabelText("Lienzo de la diapositiva")).toBeInTheDocument();
  });
});

// G3 Fase 2: cambiar el tipo de contenido con contenido configurado pedía
// (bug: no pedía) confirmación antes de destruir blockSpec/body sin undo.
describe("TheorySlideEditor — confirmación antes de descartar contenido", () => {
  const SLIDE_CON_BLOQUE: Slide = {
    id: "s1",
    layout: "top",
    heading: "Hola",
    blockSpec: { id: "b1", type: "table", headers: ["A"], rows: [["x"]] },
  };

  function irAContenido() {
    const tablist = screen.getByRole("tablist", { name: "Inspector de diapositiva" });
    fireEvent.click(within(tablist).getByRole("tab", { name: "Contenido" }));
  }

  it("cancelar el confirm al pasar a Texto conserva el bloque", () => {
    const confirmSpy = vi.fn(() => false);
    vi.stubGlobal("confirm", confirmSpy);
    renderEditor([SLIDE_CON_BLOQUE]);
    irAContenido();
    fireEvent.click(screen.getByRole("button", { name: "Texto" }));
    expect(confirmSpy).toHaveBeenCalled();
    expect(screen.getByText(/Bloque gráfico — Tabla/)).toBeInTheDocument();
    vi.unstubAllGlobals();
  });

  it("aceptar el confirm al pasar a Texto descarta el bloque", () => {
    vi.stubGlobal("confirm", vi.fn(() => true));
    renderEditor([SLIDE_CON_BLOQUE]);
    irAContenido();
    fireEvent.click(screen.getByRole("button", { name: "Texto" }));
    expect(screen.queryByText(/Bloque gráfico — Tabla/)).not.toBeInTheDocument();
    vi.unstubAllGlobals();
  });

  it("elegir un bloque con texto en el cuerpo pide confirmación y cancelar lo conserva", () => {
    const confirmSpy = vi.fn(() => false);
    vi.stubGlobal("confirm", confirmSpy);
    renderEditor(); // slide con body "cuerpo"
    irAContenido();
    fireEvent.click(screen.getByRole("button", { name: "Bloque" }));
    fireEvent.click(screen.getByRole("button", { name: "Tabla" }));
    expect(confirmSpy).toHaveBeenCalled();
    // El cuerpo sigue editable (el bloque NO reemplazó al texto).
    expect(screen.getByRole("textbox", { name: "Cuerpo de texto" })).toBeInTheDocument();
    vi.unstubAllGlobals();
  });

  it("los botones de reordenar/duplicar existen en el DOM sin hover (accesibles)", () => {
    renderEditor();
    expect(screen.getByRole("button", { name: "Mover diapositiva 1 arriba" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Duplicar diapositiva 1" })).toBeInTheDocument();
  });
});
