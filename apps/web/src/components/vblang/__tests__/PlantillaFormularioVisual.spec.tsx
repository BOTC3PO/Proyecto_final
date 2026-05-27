/**
 * Tests del editor visual de plantillas (Sprint 10B · A2).
 *
 * Verifican que el form deriva correctamente del AST y que cada interacción
 * emite un AST actualizado via `onChange`. No tocamos serialize aquí — el
 * round-trip serialize↔parse está cubierto en el package.
 */

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { parse } from "@vb/vblang";
import type { Plantilla, VariablesBloque, TipoBloque } from "@vb/vblang";
import PlantillaFormularioVisual from "../PlantillaFormularioVisual";

const BASIC_DSL = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "Cuánto es {a} + {b}?"
respuesta: a + b
tipo: input
`;

function parsePlantilla(src: string): Plantilla {
  return parse(src);
}

function findVariables(p: Plantilla): VariablesBloque | undefined {
  return p.bloques.find((b) => b.kind === "variables") as
    | VariablesBloque
    | undefined;
}
function findTipo(p: Plantilla): TipoBloque | undefined {
  return p.bloques.find((b) => b.kind === "tipo") as TipoBloque | undefined;
}

describe("PlantillaFormularioVisual", () => {
  it("renderiza secciones principales con plantilla básica", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={() => {}} />,
    );
    // Hay un select de tipo con el valor actual del AST.
    const tipoSelect = screen.getByTestId("vblang-form-tipo") as HTMLSelectElement;
    expect(tipoSelect.value).toBe("input");
    // Hay un textarea de enunciado con el texto interpolado.
    const enunciado = screen.getByTestId("vblang-form-enunciado") as HTMLTextAreaElement;
    expect(enunciado.value).toMatch(/Cuánto es \{a\} \+ \{b\}\?/);
    // Hay al menos dos filas de variables.
    expect(screen.getByDisplayValue("a")).toBeTruthy();
    expect(screen.getByDisplayValue("b")).toBeTruthy();
  });

  it("cambiar el tipo en el dropdown dispara onChange con AST actualizado", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    const tipoSelect = screen.getByTestId("vblang-form-tipo") as HTMLSelectElement;
    fireEvent.change(tipoSelect, { target: { value: "mc" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    const next = onChange.mock.calls[0][0] as Plantilla;
    expect(findTipo(next)?.valor).toBe("mc");
  });

  it("agregar variable dispara onChange con declaración nueva", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    fireEvent.click(screen.getByTestId("vblang-form-add-variable"));
    expect(onChange).toHaveBeenCalledTimes(1);
    const next = onChange.mock.calls[0][0] as Plantilla;
    const vars = findVariables(next);
    expect(vars).toBeDefined();
    // Antes había 2 variables; ahora 3.
    expect(vars!.declaraciones.length).toBe(3);
    // El nombre de la nueva no choca con las existentes.
    const nombres = vars!.declaraciones.map((d) => d.nombre);
    expect(new Set(nombres).size).toBe(3);
  });

  it("editar el min de un random(1,10) cambia el AST coherentemente", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    // Buscamos los inputs de min para la variable `a` (primer random).
    const minInputs = screen.getAllByDisplayValue("1") as HTMLInputElement[];
    // El primero que tiene type="number" corresponde al min de un random.
    const minNumInput = minInputs.find(
      (el) => el.tagName === "INPUT" && el.type === "number",
    );
    expect(minNumInput).toBeTruthy();
    fireEvent.change(minNumInput!, { target: { value: "5" } });
    expect(onChange).toHaveBeenCalled();
    const next = onChange.mock.calls[onChange.mock.calls.length - 1][0] as Plantilla;
    const declA = findVariables(next)!.declaraciones.find((d) => d.nombre === "a");
    expect(declA?.expr.kind).toBe("fun_call");
    if (declA?.expr.kind === "fun_call" && declA.expr.args[0].kind === "num") {
      expect(declA.expr.args[0].value).toBe(5);
    }
  });
});
