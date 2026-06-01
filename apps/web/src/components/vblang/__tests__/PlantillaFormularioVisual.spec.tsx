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
import type {
  Plantilla,
  VariablesBloque,
  TipoBloque,
  OpcionesBloque,
  GeneradorBloque,
} from "@vb/vblang";
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
function findOpciones(p: Plantilla): OpcionesBloque | undefined {
  return p.bloques.find((b) => b.kind === "opciones") as OpcionesBloque | undefined;
}
function findGenerador(p: Plantilla): GeneradorBloque | undefined {
  return p.bloques.find((b) => b.kind === "generador") as GeneradorBloque | undefined;
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
      (el) => el.tagName === "INPUT" && el.getAttribute("inputmode") === "decimal",
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

  /* ---------- Bug 1: mínimo negativo ---------- */

  it("tipear -5 en min via change+blur emite onChange con random(-5, 10)", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    const minInputs = screen.getAllByDisplayValue("1") as HTMLInputElement[];
    const minNumInput = minInputs.find(
      (el) => el.tagName === "INPUT" && el.getAttribute("inputmode") === "decimal",
    )!;
    fireEvent.change(minNumInput, { target: { value: "-5" } });
    fireEvent.blur(minNumInput);
    expect(onChange).toHaveBeenCalled();
    const last = onChange.mock.calls[onChange.mock.calls.length - 1][0] as Plantilla;
    const declA = findVariables(last)!.declaraciones.find((d) => d.nombre === "a")!;
    expect(declA.expr.kind).toBe("fun_call");
    if (declA.expr.kind === "fun_call") {
      expect(declA.expr.args[0]).toMatchObject({ kind: "num", value: -5 });
    }
  });

  it("tipear solo '-' no dispara onChange (estado intermedio)", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    const minInputs = screen.getAllByDisplayValue("1") as HTMLInputElement[];
    const minNumInput = minInputs.find(
      (el) => el.tagName === "INPUT" && el.getAttribute("inputmode") === "decimal",
    )!;
    // "-" es un estado intermedio de tipeo: ni error ni commit.
    fireEvent.change(minNumInput, { target: { value: "-" } });
    // onChange should NOT have been called because "-" is not yet a number
    expect(onChange).not.toHaveBeenCalled();
    // Tampoco debe aparecer un error visible (regla "nunca forzar a código").
    expect(screen.queryByText(/Número inválido/i)).toBeNull();
    // El buffer mantiene el "-" para que el usuario siga tipeando.
    expect(minNumInput.value).toBe("-");
  });

  it("tipear '-' y luego '-5' commitea random(-5, 10) (negativo char-a-char)", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    const minInputs = screen.getAllByDisplayValue("1") as HTMLInputElement[];
    const minNumInput = minInputs.find(
      (el) => el.tagName === "INPUT" && el.getAttribute("inputmode") === "decimal",
    )!;
    fireEvent.change(minNumInput, { target: { value: "-" } });
    expect(onChange).not.toHaveBeenCalled();
    fireEvent.change(minNumInput, { target: { value: "-5" } });
    expect(onChange).toHaveBeenCalled();
    const last = onChange.mock.calls[onChange.mock.calls.length - 1][0] as Plantilla;
    const declA = findVariables(last)!.declaraciones.find((d) => d.nombre === "a")!;
    if (declA.expr.kind === "fun_call") {
      expect(declA.expr.args[0]).toMatchObject({ kind: "num", value: -5 });
    }
  });

  it("min > max muestra warning visible", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    const { rerender } = render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    const minInputs = screen.getAllByDisplayValue("1") as HTMLInputElement[];
    const minNumInput = minInputs.find(
      (el) => el.tagName === "INPUT" && el.getAttribute("inputmode") === "decimal",
    )!;
    fireEvent.change(minNumInput, { target: { value: "15" } });
    expect(onChange).toHaveBeenCalled();
    // Re-render with the updated plantilla to see the warning
    const next = onChange.mock.calls[onChange.mock.calls.length - 1][0] as Plantilla;
    rerender(
      <PlantillaFormularioVisual plantilla={next} onChange={onChange} />,
    );
    expect(screen.getByText(/min > max/i)).toBeTruthy();
  });

  /* ---------- Bug 2: tipo migration ---------- */

  it("cambiar tipo input→mc agrega bloque opciones con cantidad 4", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    fireEvent.change(screen.getByTestId("vblang-form-tipo"), {
      target: { value: "mc" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    const next = onChange.mock.calls[0][0] as Plantilla;
    expect(findTipo(next)?.valor).toBe("mc");
    expect(findOpciones(next)?.cantidad).toBe(4);
  });

  it("cambiar mc→vf con opciones muestra confirmación, confirmar borra opciones", () => {
    const MC_DSL = `variables:
  a: random(1, 10)
enunciado: "Pregunta {a}"
respuesta: a
tipo: mc
opciones: 4
opciones_explicitas: ["uno", "dos", "tres", "cuatro"]
`;
    const plantilla = parsePlantilla(MC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    fireEvent.change(screen.getByTestId("vblang-form-tipo"), {
      target: { value: "vf" },
    });
    // onChange should NOT have been called yet — confirmation dialog should appear
    expect(onChange).not.toHaveBeenCalled();
    const dialog = screen.getByTestId("vblang-form-confirm-tipo-change");
    expect(dialog).toBeTruthy();
    // Click Continuar
    const continuar = screen.getByText("Continuar");
    fireEvent.click(continuar);
    expect(onChange).toHaveBeenCalledTimes(1);
    const next = onChange.mock.calls[0][0] as Plantilla;
    expect(findTipo(next)?.valor).toBe("vf");
    expect(findOpciones(next)).toBeUndefined();
    expect(
      next.bloques.find((b) => b.kind === "opciones_explicitas"),
    ).toBeUndefined();
  });

  it("cancelar la confirmación de cambio destructivo NO modifica el AST", () => {
    const MC_DSL = `variables:
  a: random(1, 10)
enunciado: "Pregunta {a}"
respuesta: a
tipo: mc
opciones: 4
opciones_explicitas: ["uno", "dos", "tres", "cuatro"]
`;
    const plantilla = parsePlantilla(MC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    fireEvent.change(screen.getByTestId("vblang-form-tipo"), {
      target: { value: "vf" },
    });
    expect(screen.getByTestId("vblang-form-confirm-tipo-change")).toBeTruthy();
    fireEvent.click(screen.getByText("Cancelar"));
    expect(onChange).not.toHaveBeenCalled();
  });

  /* ---------- Bug 3: generador ---------- */

  it("encender generador pide confirmación, limpia bloques en conflicto y deja AST válido", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    const { rerender } = render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    const toggle = screen.getByTestId("vblang-form-generador-toggle");
    fireEvent.click(toggle);
    // BASIC_DSL tiene variables/enunciado/respuesta → debe confirmar antes de borrar.
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByTestId("vblang-form-confirm-tipo-change")).toBeTruthy();
    fireEvent.click(screen.getByText("Continuar"));

    expect(onChange).toHaveBeenCalledTimes(1);
    let next = onChange.mock.calls[0][0] as Plantilla;
    const gen = findGenerador(next);
    expect(gen).toBeDefined();
    // Se elige un generador real por defecto (no queda vacío e inválido).
    expect(gen!.id).not.toBe("");
    // Los bloques en conflicto se removieron; el enunciado queda vacío.
    expect(findVariables(next)).toBeUndefined();
    expect(next.bloques.find((b) => b.kind === "respuesta")).toBeUndefined();
    const enun = next.bloques.find((b) => b.kind === "enunciado");
    expect(enun).toBeDefined();

    // Re-render con generador activo: se puede cambiar el id desde el picker.
    rerender(
      <PlantillaFormularioVisual plantilla={next} onChange={onChange} />,
    );
    const picker = screen.getByTestId("vblang-form-generador-picker") as HTMLSelectElement;
    const otherOption = Array.from(picker.options).find(
      (o) => o.value !== "" && o.value !== gen!.id,
    );
    if (otherOption) {
      fireEvent.change(picker, { target: { value: otherOption.value } });
      expect(onChange).toHaveBeenCalledTimes(2);
      next = onChange.mock.calls[1][0] as Plantilla;
      expect(findGenerador(next)!.id).toBe(otherOption.value);
    }
  });

  it("apagar el generador re-agrega una respuesta para mantener el AST parseable", () => {
    const GEN_DSL = `generador: fisica/cinematica/MRU\nenunciado: ""\n`;
    const plantilla = parsePlantilla(GEN_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    fireEvent.click(screen.getByTestId("vblang-form-generador-toggle"));
    expect(onChange).toHaveBeenCalledTimes(1);
    const next = onChange.mock.calls[0][0] as Plantilla;
    expect(findGenerador(next)).toBeUndefined();
    // Sin generador, el parser exige un campo de respuesta: debe estar presente.
    expect(next.bloques.find((b) => b.kind === "respuesta")).toBeDefined();
  });

  /* ---------- Bug 4: cambiar shape de variable ---------- */

  it("cambiar shape de literal-num a random produce random(1,10)", () => {
    const LITERAL_DSL = `variables:
  a: 5
enunciado: "Valor de a: {a}"
respuesta: a
tipo: input
`;
    const plantilla = parsePlantilla(LITERAL_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    const shapeSelect = screen.getByTestId("vblang-form-variable-shape-0") as HTMLSelectElement;
    expect(shapeSelect.value).toBe("literal-num");
    fireEvent.change(shapeSelect, { target: { value: "random" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    const next = onChange.mock.calls[0][0] as Plantilla;
    const declA = findVariables(next)!.declaraciones.find((d) => d.nombre === "a")!;
    expect(declA.expr.kind).toBe("fun_call");
    if (declA.expr.kind === "fun_call") {
      expect(declA.expr.name).toBe("random");
      expect(declA.expr.args).toHaveLength(2);
      expect(declA.expr.args[0]).toMatchObject({ kind: "num", value: 1 });
      expect(declA.expr.args[1]).toMatchObject({ kind: "num", value: 10 });
    }
  });

  /* ---------- Bug 5: rename validation ---------- */

  it("renombrar a nombre inválido (1a) muestra error y NO cambia AST", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    const nameInput = screen.getByDisplayValue("a") as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "1a" } });
    // Should show error text
    expect(screen.getByText(/Nombre inválido/i)).toBeTruthy();
    // onChange should NOT have been called
    expect(onChange).not.toHaveBeenCalled();
  });

  it("renombrar a nombre duplicado muestra error y NO cambia AST", () => {
    const plantilla = parsePlantilla(BASIC_DSL);
    const onChange = vi.fn();
    render(
      <PlantillaFormularioVisual plantilla={plantilla} onChange={onChange} />,
    );
    // Rename b to a (duplicate)
    const nameInputB = screen.getByDisplayValue("b") as HTMLInputElement;
    fireEvent.change(nameInputB, { target: { value: "a" } });
    expect(screen.getByText(/Nombre duplicado/i)).toBeTruthy();
    expect(onChange).not.toHaveBeenCalled();
  });
});
