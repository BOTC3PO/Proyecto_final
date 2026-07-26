/**
 * PLAN casos-limite §8 (aviso) / §11 (renombrar) / §12 (lista por líneas).
 *
 * §11 era más grave de lo que decía el plan: no era sólo que Tiza no dejara
 * renombrar (el campo era `readOnly`), es que los editores que SÍ dejaban
 * renombrar usaban `updateVariable`, que cambia la declaración y deja las
 * referencias apuntando al nombre viejo → la plantilla moría con "variable
 * indefinida: a". El `readOnly` de Tiza tapaba el problema.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { compile, generate, parse, serialize, type Plantilla } from "@vb/vblang";
import { TizaPropertyGrid, type LiveValues } from "../TizaEditor";
import { renameVariable } from "../plantillaFields";

const EMPTY_LIVE: LiveValues = {};

function VarHarness({ initial }: { initial: string }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  return (
    <>
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={(next) => setPlantilla(parse(serialize(next)))}
        selection={{ kind: "variable", index: 0 }}
        onSelectQuestion={() => {}}
        live={EMPTY_LIVE}
      />
      <pre data-testid="dsl">{serialize(plantilla)}</pre>
    </>
  );
}

const dsl = () => screen.getByTestId("dsl").textContent ?? "";

/** ¿La plantilla serializada genera sin errores? */
function genera(texto: string): string | null {
  try {
    return generate(compile(parse(texto)), { seed: 1 }).enunciado;
  } catch (e) {
    return `ERROR: ${(e as Error).message}`;
  }
}

describe("§11 · renameVariable reescribe las referencias", () => {
  const CON_REFS =
    'variables:\n  a: random(1, 5)\n  c: a * 2\nenunciado: "Cuánto es {a} x 2?"\nrespuesta: c\ntipo: input\n';

  it("renombra la declaración, el enunciado y las expresiones", () => {
    const next = renameVariable(parse(CON_REFS), 0, "precio")!;
    const texto = serialize(next);
    expect(texto).toContain("precio: random(1, 5)");
    expect(texto).toContain("c: precio * 2");
    expect(texto).toContain("{precio}");
    expect(texto).not.toMatch(/\ba\b/);
    // Lo que importa: la plantilla sigue generando.
    expect(genera(texto)).not.toMatch(/^ERROR/);
  });

  it("rechaza un nombre inválido, vacío o ya usado", () => {
    const p = parse(CON_REFS);
    expect(renameVariable(p, 0, "")).toBeNull();
    expect(renameVariable(p, 0, "2x")).toBeNull();
    expect(renameVariable(p, 0, "con espacio")).toBeNull();
    expect(renameVariable(p, 0, "c")).toBeNull(); // ya existe
    expect(renameVariable(p, 9, "z")).toBeNull(); // índice fuera de rango
  });

  it("renombrar al mismo nombre es un no-op", () => {
    const p = parse(CON_REFS);
    expect(serialize(renameVariable(p, 0, "a")!)).toBe(serialize(p));
  });

  it("no toca funciones ni variables de bucle homónimas", () => {
    // `largo` es una función, no una variable: no se renombra.
    const p = parse(
      'variables:\n  largo: 3\n  b: largo + 1\nenunciado: "{largo}?"\nrespuesta: b\ntipo: input\n',
    );
    const texto = serialize(renameVariable(p, 0, "n")!);
    expect(texto).toContain("n: 3");
    expect(texto).toContain("b: n + 1");
    expect(texto).toContain("{n}");
  });

  it("el campo Nombre de Tiza renombra de verdad (ya no es readOnly)", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={CON_REFS} />);
    const input = screen.getByTestId("tiza-variable-nombre-input") as HTMLInputElement;
    expect(input.readOnly).toBe(false);

    await user.clear(input);
    await user.type(input, "precio");
    await user.tab();

    expect(dsl()).toContain("precio: random(1, 5)");
    expect(dsl()).toContain("{precio}");
    expect(genera(dsl())).not.toMatch(/^ERROR/);
  });

  it("un nombre rechazado avisa y no cambia el DSL", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={CON_REFS} />);
    const input = screen.getByTestId("tiza-variable-nombre-input");

    await user.clear(input);
    await user.type(input, "c"); // ya existe
    await user.tab();

    expect(screen.getByTestId("tiza-nombre-invalido")).toBeTruthy();
    expect(dsl()).toContain("a: random(1, 5)");
  });
});

describe("§12 · lista con un ítem por línea", () => {
  const LISTA =
    'variables:\n  a: uno_de(["Buenos Aires", "La Rioja"])\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n';

  it("muestra los ítems uno por línea, no separados por coma", () => {
    render(<VarHarness initial={LISTA} />);
    const ta = screen.getByTestId("tiza-lista-opciones") as HTMLTextAreaElement;
    expect(ta.value).toBe("Buenos Aires\nLa Rioja");
  });

  it("permite un ítem CON coma interna (lo que antes era imposible)", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={LISTA} />);
    const ta = screen.getByTestId("tiza-lista-opciones");

    await user.clear(ta);
    await user.type(ta, "Buenos Aires, Argentina{enter}Córdoba, Argentina");
    await user.tab();

    expect(dsl()).toContain('"Buenos Aires, Argentina"');
    expect(dsl()).toContain('"Córdoba, Argentina"');
    // Y sigue siendo una lista de DOS ítems, no de cuatro.
    const ta2 = screen.getByTestId("tiza-lista-opciones") as HTMLTextAreaElement;
    expect(ta2.value.split("\n")).toHaveLength(2);
  });

  it("el round-trip no parte los valores con coma", async () => {
    const user = userEvent.setup();
    render(
      <VarHarness
        initial={'variables:\n  a: uno_de(["Rosario, Santa Fe", "Tandil"])\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'}
      />,
    );
    const ta = screen.getByTestId("tiza-lista-opciones") as HTMLTextAreaElement;
    expect(ta.value).toBe("Rosario, Santa Fe\nTandil");
    // Tocar la lista y confirmar no debe destruir el ítem con coma.
    await user.click(ta);
    await user.tab();
    expect(dsl()).toContain('"Rosario, Santa Fe"');
  });
});

describe("§8 · aviso de bordes decimales en el subtipo entero", () => {
  const aviso = () => screen.queryByTestId("tiza-bordes-decimales");

  it("avisa cuando un borde tiene decimales", () => {
    render(<VarHarness initial={'variables:\n  a: random(1.2, 4.8)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'} />);
    expect(aviso()).toBeTruthy();
  });

  it("no avisa con bordes enteros, ni negativos", () => {
    render(<VarHarness initial={'variables:\n  a: random(-10, -1)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'} />);
    expect(aviso()).toBeNull();
  });
});
