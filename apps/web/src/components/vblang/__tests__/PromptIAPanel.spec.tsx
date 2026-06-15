/**
 * F7-02 — Drawer "Copiar prompt para IA".
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { generarReferenciaDsl } from "@vb/vblang";
import PromptIAPanel from "../PromptIAPanel";

describe("PromptIAPanel", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
      configurable: true,
    });
  });

  it("no renderiza nada si open=false", () => {
    const { container } = render(
      <PromptIAPanel open={false} onClose={() => {}} onInsert={() => {}} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("copia un prompt que incluye la referencia DSL y la descripción", async () => {
    render(<PromptIAPanel open onClose={() => {}} onInsert={() => {}} />);

    fireEvent.change(screen.getByLabelText("Descripción del ejercicio"), {
      target: { value: "Un ejercicio sobre la tabla periódica." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Copiar prompt para IA" }));

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    });
    const copiado = (navigator.clipboard.writeText as ReturnType<typeof vi.fn>).mock
      .calls[0][0] as string;
    expect(copiado).toContain(generarReferenciaDsl());
    expect(copiado).toContain("Un ejercicio sobre la tabla periódica.");
    expect(copiado).toMatch(/SOLO con código VBLang válido/);

    expect(await screen.findByRole("button", { name: "✓ Copiado" })).toBeInTheDocument();
  });

  it("insertar limpia los fences de markdown y llama a onInsert", () => {
    const onInsert = vi.fn();
    render(<PromptIAPanel open onClose={() => {}} onInsert={onInsert} />);

    fireEvent.change(screen.getByLabelText("Respuesta de la IA"), {
      target: { value: '```vblang\nenunciado: "hola"\nrespuesta: 1\ntipo: input\n```' },
    });
    fireEvent.click(screen.getByRole("button", { name: "Insertar en el editor" }));

    expect(onInsert).toHaveBeenCalledWith('enunciado: "hola"\nrespuesta: 1\ntipo: input');
  });

  it("el botón insertar está deshabilitado sin respuesta", () => {
    render(<PromptIAPanel open onClose={() => {}} onInsert={() => {}} />);
    expect(screen.getByRole("button", { name: "Insertar en el editor" })).toBeDisabled();
  });

  it("cerrar invoca onClose", () => {
    const onClose = vi.fn();
    render(<PromptIAPanel open onClose={onClose} onInsert={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: "Cerrar" }));
    expect(onClose).toHaveBeenCalled();
  });
});
