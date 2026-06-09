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
