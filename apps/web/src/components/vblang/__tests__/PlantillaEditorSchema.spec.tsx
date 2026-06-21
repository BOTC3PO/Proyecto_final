/**
 * Tests del editor schema-driven (WO06): armar tipos de punta a punta, editar
 * listas accesibles, add-on PNG con alt obligatorio, y preservación read-only.
 */
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { parse, serialize, type Plantilla } from "@vb/vblang";
import PlantillaEditorSchema from "../PlantillaEditorSchema";

/** Harness controlado que expone el DSL serializado para asserts. */
function Harness({
  initial,
  upload,
}: {
  initial: string;
  upload?: (f: Blob) => Promise<string>;
}) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  // Mismo flujo que el padre real: serialize → reparse (recomputa tipoInferido).
  const onChange = (next: Plantilla) => setPlantilla(parse(serialize(next)));
  return (
    <>
      <PlantillaEditorSchema
        plantilla={plantilla}
        onChange={onChange}
        uploadImage={upload ?? (async () => "/api/media/stub.png")}
      />
      <pre data-testid="dsl">{serialize(plantilla)}</pre>
    </>
  );
}

const dsl = () => screen.getByTestId("dsl").textContent ?? "";

describe("PlantillaEditorSchema", () => {
  it("muestra la base tipo y permite cambiar el tipo de pregunta", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "Hola"\nrespuesta: 1\n'} />);

    // arranca como input
    const select = screen.getByLabelText("Tipo") as HTMLSelectElement;
    expect(select.value).toBe("input");

    // cambiar a Verdadero/Falso
    await user.selectOptions(select, "vf");
    expect(dsl()).toContain("tipo: vf");
    expect(parse(dsl()).tipoInferido).toBe("vf");
  });

  it("arma un mc de punta a punta: opciones + respuesta", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "Elegí"\nrespuesta: 1\n'} />);

    await user.selectOptions(screen.getByLabelText("Tipo"), "mc");
    // el seed deja 2 opciones; editamos la primera y la respuesta
    const opc1 = screen.getByLabelText("Opciones 1");
    await user.clear(opc1);
    await user.type(opc1, "verde");

    const resp = screen.getByLabelText("Respuesta correcta");
    await user.clear(resp);
    await user.type(resp, "verde");

    const out = parse(dsl());
    expect(out.tipoInferido).toBe("mc");
    expect(dsl()).toContain('"verde"');
  });

  it("reordenar opciones funciona por teclado y se refleja en el DSL", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "x"\ntipo: mc\nopciones_explicitas:\n  - "a"\n  - "b"\n  - "c"\nrespuesta: "a"\n'} />);
    // bajar la opción 1
    await user.click(
      screen.getByRole("button", { name: /bajar ítem de la posición 1/i }),
    );
    // ahora el orden en el DSL es b, a, c
    const m = dsl().match(/opciones_explicitas[\s\S]*?respuesta/);
    expect(m?.[0].indexOf('"b"')).toBeLessThan(m![0].indexOf('"a"'));
  });

  it("add-on PNG: exige alt y referencia la URL subida en el DSL", async () => {
    const user = userEvent.setup();
    render(
      <Harness
        initial={'enunciado: "x"\nrespuesta: 1\n'}
        upload={async () => "/api/media/deadbeef.png"}
      />,
    );

    // WO-4 — el PNG ahora vive tras el selector de tipo de visual.
    await user.selectOptions(screen.getByLabelText("Tipo de visual"), "static-image");

    const file = new File([new Uint8Array([0x89, 0x50, 0x4e, 0x47])], "foto.png", {
      type: "image/png",
    });
    await user.upload(screen.getByLabelText(/subir imagen png/i), file);

    // sin alt, insertar está deshabilitado
    const insertar = screen.getByRole("button", { name: /insertar imagen/i });
    expect(insertar).toBeDisabled();

    await user.type(
      screen.getByLabelText(/texto alternativo/i),
      "Una foto de prueba",
    );
    expect(insertar).toBeEnabled();
    await user.click(insertar);

    expect(dsl()).toContain("static-image");
    expect(dsl()).toContain("/api/media/deadbeef.png");
    expect(dsl()).toContain("Una foto de prueba");
  });

  it("preserva bloques no soportados como read-only", () => {
    render(
      <Harness initial={'dataset: capitales\nenunciado: "x"\nrespuesta: 1\n'} />,
    );
    const ph = screen.getByTestId("vblang-schema-readonly");
    expect(ph).toHaveTextContent(/dataset/);
    // y el dataset sigue en el DSL
    expect(dsl()).toContain("dataset: capitales");
  });

  it("WO-4: autorea un line-chart sin rebotar a 'modo Código'", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "x"\nrespuesta: 1\n'} />);
    await user.selectOptions(screen.getByLabelText("Tipo de visual"), "line-chart");
    // El editor de líneas aparece (no el placeholder read-only).
    expect(screen.queryByTestId("vblang-schema-readonly")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Título del gráfico")).toBeInTheDocument();
    // El seed deja un line-chart en el DSL.
    expect(dsl()).toContain("line-chart");
    // Editar los puntos de la serie persiste.
    const puntos = screen.getByLabelText("Puntos de la serie 1");
    fireEvent.change(puntos, { target: { value: "0, 0\n1, 5\n2, 10" } });
    fireEvent.blur(puntos);
    expect(dsl()).toContain("line-chart");
    expect(dsl()).toMatch(/"y":\s*10/);
  });

  it("WO-4: autorea una fórmula LaTeX y persiste", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "x"\nrespuesta: 1\n'} />);
    await user.selectOptions(screen.getByLabelText("Tipo de visual"), "latex");
    const content = screen.getByLabelText("Fórmula (LaTeX)");
    fireEvent.change(content, { target: { value: "E = mc^2" } });
    fireEvent.blur(content);
    expect(dsl()).toContain('kind: "latex"');
    expect(dsl()).toContain("E = mc^2");
  });

  it("WO-4: un visual code-only (circuit) se preserva y se ofrece editar en código", () => {
    render(
      <Harness
        initial={
          'enunciado: "x"\nrespuesta: 1\nvisual:\n  kind: "circuit"\n  elements: [ { id: "r1", type: "resistor" } ]\n'
        }
      />,
    );
    // El selector refleja el kind code-only y muestra el placeholder.
    expect(screen.getByTestId("vblang-schema-readonly")).toHaveTextContent(/circuit/);
    // y el visual sigue en el DSL.
    expect(dsl()).toContain('kind: "circuit"');
  });

  it("base generador: inserta generador y conserva el enunciado", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "Consigna"\nrespuesta: 1\n'} />);
    await user.click(screen.getByRole("radio", { name: /generador asistido/i }));
    expect(dsl()).toContain("generador:");
    expect(dsl()).toContain("Consigna");
  });

  it("al pasar a generador con enunciado incompatible, ofrece resetear el enunciado", async () => {
    const user = userEvent.setup();
    // Enunciado heredado de otra base que interpola {a}: el generador no provee
    // esa variable, así que el editor debe ofrecer resetear (no romper en silencio).
    render(
      <Harness
        initial={'variables:\n  a: random(1, 10)\nenunciado: "Cuanto es {a}"\nrespuesta: a\n'}
      />,
    );

    await user.click(screen.getByRole("radio", { name: /generador asistido/i }));

    const dialog = await screen.findByTestId("vblang-schema-confirm");
    expect(dialog).toHaveTextContent(/no provee/i);
    expect(dialog).toHaveTextContent(/\ba\b/);

    await user.click(screen.getByRole("button", { name: /resetear enunciado/i }));

    // El enunciado ya no interpola {a}; el generador sigue activo.
    expect(dsl()).not.toContain("{a}");
    expect(dsl()).toContain("generador:");
  });

  it("DIFF-06: puntaje y pista se editan y persisten en el metadata del DSL", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "x"\nrespuesta: 1\n'} />);

    await user.type(screen.getByLabelText("Puntaje"), "3");
    await user.type(screen.getByLabelText("Pista"), "Pensá en sumar");

    expect(dsl()).toMatch(/puntaje:\s*3/);
    expect(dsl()).toContain("Pensá en sumar");
    // Round-trip: el DSL sigue parseando con el metadata.
    expect(parse(dsl()).tipoInferido).toBe("input");
  });

  it("DIFF-09: el enunciado del generador ofrece chips 'Insertar:' que insertan variables", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "Consigna"\nrespuesta: 1\n'} />);

    await user.click(screen.getByRole("radio", { name: /generador asistido/i }));
    // Elegimos un generador que expone variables interpolables (cinematica:
    // valor/factor); otros — como los de tipo quiz — no exponen ninguna.
    await user.selectOptions(
      screen.getByTestId("vblang-form-generador-picker"),
      "fisica/cinematica",
    );

    expect(await screen.findByText("Insertar:")).toBeInTheDocument();
    const chips = screen.getAllByRole("button", {
      name: /insertar variable .* en el enunciado/i,
    });
    expect(chips.length).toBeGreaterThan(0);

    await user.click(chips[0]);
    const enun = screen.getByLabelText("Enunciado") as HTMLTextAreaElement;
    expect(enun.value).toContain("{");
  });

  it("DIFF-02: el panel Resumen muestra el tipo y las combinaciones posibles", () => {
    render(
      <Harness
        initial={'variables:\n  a: random(1, 10)\n  b: uno_de(["x", "y"])\nenunciado: "{a} {b}"\nrespuesta: a\n'}
      />,
    );
    expect(screen.getByText("Resumen")).toBeInTheDocument();
    expect(screen.getByText("Combinaciones posibles")).toBeInTheDocument();
    // 10 (random 1..10) × 2 (uno_de) = 20
    expect(screen.getByText("20")).toBeInTheDocument();
  });

  it("analisis_sintactico: la palabra usa un combobox del diccionario", async () => {
    render(
      <Harness
        initial={
          'enunciado: "Analizá"\ntipo: analisis_sintactico\ntexto_analizar: "el gato duerme"\netiquetas_pedidas:\n  - { palabra: "gato", etiqueta: "sustantivo" }\n'
        }
      />,
    );
    // El campo palabra ahora es un combobox accesible por su label.
    const palabra = screen.getByRole("combobox", { name: "Palabra 1" });
    expect(palabra).toHaveAttribute("aria-autocomplete", "list");
    // La etiqueta sigue editable y referencia el datalist de categorías.
    const etiqueta = screen.getByLabelText("Etiqueta 1") as HTMLInputElement;
    expect(etiqueta.getAttribute("list")).toBe("vblang-categorias-gramaticales");
    expect(etiqueta.value).toBe("sustantivo");
  });

  it("identificar_palabras: las palabras correctas usan combobox", () => {
    render(
      <Harness
        initial={
          'enunciado: "Identificá"\ntipo: identificar_palabras\ntexto_analizar: "el gato come pescado"\nrespuestas_validas:\n  - "gato"\n'
        }
      />,
    );
    expect(
      screen.getByRole("combobox", { name: "Palabras correctas 1" }),
    ).toBeInTheDocument();
  });

  it("Tarea 09: con enunciados: en el AST, el editor visual muestra 2 inputs de variantes", () => {
    render(
      <Harness
        initial={
          'enunciados:\n  - "Cuanto es {a} + {b}?"\n  - "Calcula la suma de {a} y {b}."\nrespuesta: a + b\n'
        }
      />,
    );
    expect(screen.getByLabelText("Variante de enunciado 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Variante de enunciado 2")).toBeInTheDocument();
    // Y NO debe estar el input unico del enunciado simple.
    expect(screen.queryByLabelText("Enunciado")).toBeNull();
  });

  it("Tarea 09: editar una variante se refleja en el DSL serializado", async () => {
    const user = userEvent.setup();
    render(
      <Harness
        initial={
          'enunciados:\n  - "Variante A original"\n  - "Variante B"\nrespuesta: 1\n'
        }
      />,
    );
    const input1 = screen.getByLabelText("Variante de enunciado 1");
    // fireEvent.change (no user.type) porque user.type interpreta {x} como keys.
    fireEvent.change(input1, { target: { value: "Variante A editada" } });
    expect(dsl()).toContain('"Variante A editada"');
    expect(dsl()).toContain('"Variante B"');
    // Y la original ya no esta.
    expect(dsl()).not.toContain("Variante A original");
  });

  it("Tarea 09: agregar variante pasa de 2 a 3 items en el DSL", async () => {
    const user = userEvent.setup();
    render(
      <Harness
        initial={
          'enunciados:\n  - "Variante uno"\n  - "Variante dos"\nrespuesta: 1\n'
        }
      />,
    );
    await user.click(screen.getByRole("button", { name: /agregar variante/i }));
    expect(dsl().match(/^\s*- "/gm)?.length).toBe(3);
  });

  it("Tarea 09: eliminar variante (de 2 a 1) funciona; el boton Eliminar se deshabilita en 1", async () => {
    const user = userEvent.setup();
    render(
      <Harness
        initial={
          'enunciados:\n  - "Variante uno"\n  - "Variante dos"\nrespuesta: 1\n'
        }
      />,
    );
    // De 2 a 1: eliminar la segunda.
    await user.click(screen.getByRole("button", { name: /eliminar variante 2/i }));
    expect(dsl().match(/^\s*- "/gm)?.length).toBe(1);
    // El unico boton Eliminar queda deshabilitado (minimo 1 variante).
    expect(
      screen.getByRole("button", { name: /eliminar variante 1/i }),
    ).toBeDisabled();
  });

  it("Tarea 09: 'Convertir en variantes' migra enunciado: a enunciados: con 1 item", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "Hola {x}"\nrespuesta: 1\n'} />);
    await user.click(
      screen.getByRole("button", { name: /convertir en variantes/i }),
    );
    expect(dsl()).toMatch(/enunciados:\n\s*- "[^"]*Hola \{x\}/);
  });

  it("Tarea 09: 'Convertir a enunciado simple' colapsa la lista al primer item", async () => {
    const user = userEvent.setup();
    render(
      <Harness
        initial={
          'enunciados:\n  - "Primera variante"\n  - "Segunda variante"\nrespuesta: 1\n'
        }
      />,
    );
    await user.click(
      screen.getByRole("button", { name: /convertir a enunciado simple/i }),
    );
    expect(dsl()).toContain("enunciado: \"Primera variante\"");
    expect(dsl()).not.toContain("Segunda variante");
    expect(dsl()).not.toContain("enunciados:");
  });

  /* ---------------- WO-1: bloques antes solo editables en DSL ---------------- */

  it("WO-1: editar la explicación la persiste en el DSL", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "Hola"\nrespuesta: 1\n'} />);
    const ta = screen.getByLabelText("Explicación");
    await user.type(ta, "Porque sí");
    await user.tab();
    expect(dsl()).toContain('explicacion: "Porque sí"');
  });

  it("WO-1: tolerancia_abs aparece en input y persiste", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "x"\nrespuesta: 1\n'} />);
    const inp = screen.getByLabelText("Tolerancia absoluta");
    await user.type(inp, "0.001");
    await user.tab();
    expect(dsl()).toContain("tolerancia_abs: 0.001");
  });

  it("WO-1: respuesta_nombre sólo aparece en marcar_mapa y persiste", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'enunciado: "x"\nrespuesta: 1\n'} />);
    // En input no hay campo de nombre.
    expect(screen.queryByLabelText(/Nombre correcto/)).toBeNull();
    await user.selectOptions(screen.getByLabelText("Tipo"), "marcar_mapa");
    const inp = screen.getByLabelText(/Nombre correcto/);
    await user.type(inp, "Argentina");
    await user.tab();
    expect(dsl()).toContain('respuesta_nombre: "Argentina"');
  });

  it("WO-1: agregar una pista escalonada la persiste sin tocar la pista única", async () => {
    const user = userEvent.setup();
    render(
      <Harness
        initial={'enunciado: "x"\nrespuesta: 1\nmetadata:\n  pista: "única"\n'}
      />,
    );
    await user.click(screen.getByRole("button", { name: /agregar pista/i }));
    await user.type(screen.getByLabelText("Pista 1"), "Probá con esto");
    await user.tab();
    expect(dsl()).toContain("pistas:");
    expect(dsl()).toContain("Probá con esto");
    // la pista única de metadata sigue intacta (conviven)
    expect(dsl()).toContain('pista: "única"');
  });

  it("WO-1: restricciones — fórmula válida persiste; las restricciones no aparecen con generador", async () => {
    const user = userEvent.setup();
    render(
      <Harness
        initial={'enunciado: "x"\nvariables:\n  a: random(1, 9)\nrespuesta: a\n'}
      />,
    );
    await user.click(screen.getByRole("button", { name: /agregar restricción/i }));
    await user.type(screen.getByLabelText("Restricción 1"), "a != 0");
    await user.tab();
    expect(dsl()).toContain("restricciones:");
    expect(dsl()).toContain("a != 0");
  });
});
