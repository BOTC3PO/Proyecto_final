/**
 * Tests del editor schema-driven (WO06): armar tipos de punta a punta, editar
 * listas accesibles, add-on PNG con alt obligatorio, y preservación read-only.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
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
});
