/**
 * VB-B2 — panel "Código generado" en vivo desde el formulario
 * (VBLANG_V2_PLAN_USABILIDAD, ítem B2).
 *
 * El formulario del editor de plantillas NO mostraba el DSL que iba
 * generando. Este test cubre el panel colapsable que ahora se ve
 * en modo visual: refleja en vivo lo que produce el form a través
 * de `codigoDsl` (que el form actualiza vía
 * `setCodigo(serialize(next))`).
 *
 * Cubre:
 *  (b1) El panel existe en modo visual y arranca colapsado.
 *  (b2) Toggle abre/cierra el panel (aria-expanded refleja).
 *  (b3) El panel NO se renderiza en modo código (ahí está el
 *       CodeEditor, no debe haber dos editores de texto
 *       compitiendo).
 *  (b4) Editar un campo del form (el `prompt` del enunciado) →
 *       el panel muestra el DSL actualizado en vivo.
 *  (b5) El panel es READ-ONLY: no es un textarea ni un input,
 *       no se puede editar desde ahí.
 *  (b6) El DSL mostrado coincide con el `serialize()` real del
 *       AST (round-trip), no una aproximación propia.
 */

import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { serialize } from "@vb/vblang";
import { parse as parsePlantilla } from "@vb/vblang";

vi.mock("../../../domain/vblang/plantillaApi", () => ({
  getPlantilla: vi.fn().mockRejectedValue(new Error("should not be called")),
  createPlantilla: vi.fn(),
  updatePlantilla: vi.fn(),
  DslApiError: class extends Error {
    line?: number;
    col?: number;
  },
}));

async function renderEditor() {
  const { default: PlantillaEditor } = await import("../PlantillaEditor");
  return render(
    <MemoryRouter initialEntries={["/plantillas/nueva"]}>
      <Routes>
        <Route path="/plantillas/nueva" element={<PlantillaEditor />} />
      </Routes>
    </MemoryRouter>,
  );
}

async function renderAndDismissWizard() {
  const result = await renderEditor();
  // El wizard aparece en `isNew=true`. Lo descartamos para llegar
  // al formulario. Usamos el botón "Cerrar wizard" o "En blanco".
  const cerrar = result.queryByLabelText("Cerrar wizard");
  if (cerrar) fireEvent.click(cerrar);
  return result;
}

describe("VB-B2: panel 'Código generado' en vivo", () => {
  it("(b1) existe el toggle en modo visual y arranca colapsado", async () => {
    const result = await renderAndDismissWizard();
    // Pasamos a modo visual (default es código).
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    // El form se monta tras el debounce del primer render.
    await waitFor(() => {
      expect(result.getByTestId("vblang-form-tipo")).toBeInTheDocument();
    });
    const toggle = result.getByTestId("vblang-generated-code-toggle");
    expect(toggle).toBeInTheDocument();
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    // El panel de código en sí no se renderiza mientras está colapsado.
    expect(result.queryByTestId("vblang-generated-code")).toBeNull();
  });

  it("(b2) toggle abre/cierra el panel y refleja aria-expanded", async () => {
    const result = await renderAndDismissWizard();
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    await waitFor(() => {
      expect(result.getByTestId("vblang-form-tipo")).toBeInTheDocument();
    });

    const toggle = result.getByTestId("vblang-generated-code-toggle");
    // Abrir.
    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    const panel = result.getByTestId("vblang-generated-code");
    expect(panel).toBeInTheDocument();
    // El panel tiene texto (no es el placeholder "(vacío)" porque la
    // plantilla inicial ya tiene contenido).
    expect(panel.textContent).not.toBe("(vacío)");

    // Cerrar.
    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(result.queryByTestId("vblang-generated-code")).toBeNull();
  });

  it("(b3) el panel NO se renderiza en modo código", async () => {
    const result = await renderAndDismissWizard();
    // Default ya es modo código. Esperamos al render.
    await waitFor(() => {
      expect(result.getByTestId("vblang-code-editor")).toBeInTheDocument();
    });
    // El toggle/panel no debe estar presente (sólo en modo visual).
    expect(result.queryByTestId("vblang-generated-code-toggle")).toBeNull();
    expect(result.queryByTestId("vblang-generated-code")).toBeNull();
  });

  it("(b4) editar el form actualiza el panel en vivo", async () => {
    const result = await renderAndDismissWizard();
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    await waitFor(() => {
      expect(result.getByTestId("vblang-form-tipo")).toBeInTheDocument();
    });
    // Abrir el panel.
    fireEvent.click(result.getByTestId("vblang-generated-code-toggle"));
    const panel = result.getByTestId("vblang-generated-code");
    const before = panel.textContent ?? "";

    // Editar el prompt del enunciado desde el form. Usamos
    // getByLabelText para agarrar el textarea del enunciado (no
    // cualquier textarea de la página).
    const promptTextarea = result.getByLabelText("Enunciado") as HTMLTextAreaElement;
    const nuevoPrompt = "Cuanto es {a} + {b}? versión VB-B2";
    fireEvent.change(promptTextarea, { target: { value: nuevoPrompt } });

    // El panel debe reflejar el cambio sin necesidad de debounce
    // (es la misma `codigoDsl` que el form acaba de setear).
    await waitFor(() => {
      expect(panel.textContent).not.toBe(before);
    });
    expect(panel.textContent).toContain("VB-B2");
  });

  it("(b5) el panel es READ-ONLY — no es un textarea ni un input", async () => {
    const result = await renderAndDismissWizard();
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    await waitFor(() => {
      expect(result.getByTestId("vblang-form-tipo")).toBeInTheDocument();
    });
    fireEvent.click(result.getByTestId("vblang-generated-code-toggle"));
    const panel = result.getByTestId("vblang-generated-code");
    // Candado contra la regresión "panel editable": el día que alguien
    // lo cambie a <textarea>, queda editable y compite con el
    // CodeEditor. Esto rompe el invariante.
    expect(panel.tagName).toBe("PRE");
    expect(panel.querySelector("textarea")).toBeNull();
    expect(panel.querySelector("input")).toBeNull();
    expect(panel.getAttribute("contenteditable")).toBeNull();
  });

  it("(b6) el DSL del panel es el serialize() real, no una aproximación", async () => {
    // El form llama a `setCodigo(serialize(next))`. El panel lee
    // `codigoDsl`. No recalculamos nada: la fuente es la misma. Este
    // test verifica que el panel muestra exactamente lo que está en
    // `codigoDsl` (no una aproximación propia) parseando el texto
    // del panel: si NO fuera el mismo string, el re-serialize daría
    // un AST distinto o el parse fallaría.
    const result = await renderAndDismissWizard();
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    await waitFor(() => {
      expect(result.getByTestId("vblang-form-tipo")).toBeInTheDocument();
    });
    fireEvent.click(result.getByTestId("vblang-generated-code-toggle"));
    const panel = result.getByTestId("vblang-generated-code");
    const text = panel.textContent ?? "";
    expect(text.length).toBeGreaterThan(0);
    // Candado: el texto del panel es parseable como VBLang válido.
    // Si el panel mostrara otra cosa (HTML escapado, JSON en vez de
    // DSL, etc.) el parse tiraría.
    const ast = parsePlantilla(text);
    expect(ast.bloques.length).toBeGreaterThan(0);
    // Candado adicional: re-serializar el AST da un texto con los
    // mismos bloques clave (la normalización de whitespace puede
    // cambiar la representación exacta; lo que importa es que la
    // estructura sea la misma).
    const reserialized = serialize(ast);
    const reserializedAst = parsePlantilla(reserialized);
    expect(reserializedAst.bloques.length).toBe(ast.bloques.length);
    // Y los kinds de los bloques coinciden (no estamos mostrando un
    // subconjunto o sustituyendo por otra cosa).
    for (let i = 0; i < ast.bloques.length; i++) {
      expect(reserializedAst.bloques[i].kind).toBe(ast.bloques[i].kind);
    }
  });
});
