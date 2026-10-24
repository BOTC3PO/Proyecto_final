/**
 * Tests de SnippetBar.
 *
 * El componente es "tonto": cada botón sólo dispara onInsert(text). Cubrimos:
 * - Renderiza los 7 snippets por defecto.
 * - Cada botón tiene aria-label descriptivo.
 * - Al hacer click, onInsert recibe la plantilla correspondiente (incluyendo
 *   el salto de línea final).
 */

import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SnippetBar, { VBLANG_SNIPPETS } from "../SnippetBar";

describe("SnippetBar", () => {
  it("renderiza los 7 snippets por defecto y cada uno tiene aria-label", () => {
    const onInsert = vi.fn();
    render(<SnippetBar onInsert={onInsert} />);

    for (const s of VBLANG_SNIPPETS) {
      expect(
        screen.getByRole("button", { name: s.aria }),
        `snippet "${s.id}" deberia estar visible`,
      ).toBeInTheDocument();
    }
  });

  it("click en un snippet invoca onInsert con su plantilla (incluyendo el \\n final)", async () => {
    const onInsert = vi.fn();
    const user = userEvent.setup();
    render(<SnippetBar onInsert={onInsert} />);

    await user.click(
      screen.getByRole("button", { name: /insertar bloque variables/i }),
    );
    expect(onInsert).toHaveBeenCalledTimes(1);
    expect(onInsert).toHaveBeenCalledWith(VBLANG_SNIPPETS[0].template);
    expect(VBLANG_SNIPPETS[0].template.endsWith("\n")).toBe(true);

    await user.click(
      screen.getByRole("button", { name: /insertar bloque enunciados/i }),
    );
    expect(onInsert).toHaveBeenCalledTimes(2);
    const enunciados = VBLANG_SNIPPETS.find((s) => s.id === "enunciados");
    expect(enunciados?.template).toContain("- \"...\"");
  });

  it("toolbar accesible y mensajes en espanol", () => {
    const onInsert = vi.fn();
    render(<SnippetBar onInsert={onInsert} />);
    expect(
      screen.getByRole("toolbar", { name: /insertar bloque del dsl/i }),
    ).toBeInTheDocument();
  });
});
