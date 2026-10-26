/**
 * PLAN tiza-autoria-avanzada §3 — agregar, borrar y subtipo decimal.
 *
 * Tiza no tenía ninguna forma de agregar una variable (ADD_ITEMS no la incluía
 * y no había una sola llamada a `addVariable`), ni de borrarla, y el selector de
 * subtipo mostraba `random` y `random_float` como la misma opción "Aleatorio
 * (entero)". Todo eso obligaba a ir a modo Código.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { parse, serialize, type Plantilla } from "@vb/vblang";
import { TizaQuestionCard, TizaPropertyGrid, type LiveValues } from "../TizaEditor";

const EMPTY_LIVE: LiveValues = {};
const SIN_VARIABLES = 'enunciado: "Cuánto es 2 + 2?"\nrespuesta: 4\ntipo: input\n';
const CON_VARIABLES =
  'variables:\n  a: random(1, 10)\n  b: random(1, 5)\nenunciado: "{a} + {b}?"\nrespuesta: a + b\ntipo: input\n';

/** Tarjeta + property grid, con la selección compartida como en la página. */
function Harness({ initial }: { initial: string }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  const [selection, setSelection] = useState<
    { kind: "pregunta" } | { kind: "variable"; index: number }
  >({ kind: "pregunta" });
  const onChange = (next: Plantilla) => setPlantilla(parse(serialize(next)));
  return (
    <>
      <TizaQuestionCard
        plantilla={plantilla}
        onChange={onChange}
        selection={selection}
        onSelectQuestion={() => setSelection({ kind: "pregunta" })}
        onSelectVariable={(index) => setSelection({ kind: "variable", index })}
        live={EMPTY_LIVE}
      />
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={onChange}
        selection={selection}
        onSelectQuestion={() => setSelection({ kind: "pregunta" })}
        live={EMPTY_LIVE}
      />
      <pre data-testid="dsl">{serialize(plantilla)}</pre>
    </>
  );
}

const dsl = () => screen.getByTestId("dsl").textContent ?? "";

async function abrirMenu(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole("button", { name: /Añadir bloque|Add block/i }));
}

describe("§3 · agregar variable desde Tiza", () => {
  it("crea el bloque `variables:` cuando no existía", async () => {
    const user = userEvent.setup();
    render(<Harness initial={SIN_VARIABLES} />);
    expect(dsl()).not.toContain("variables:");

    await abrirMenu(user);
    await user.click(screen.getByTestId("tiza-add-variable"));

    expect(dsl()).toContain("variables:");
    expect(dsl()).toContain("v: random(1, 10)");
  });

  it("no pisa una variable existente: desambigua el nombre", async () => {
    const user = userEvent.setup();
    render(<Harness initial={CON_VARIABLES} />);
    await abrirMenu(user);
    await user.click(screen.getByTestId("tiza-add-variable"));
    await abrirMenu(user);
    await user.click(screen.getByTestId("tiza-add-variable"));

    expect(dsl()).toContain("v: random(1, 10)");
    expect(dsl()).toContain("v_2: random(1, 10)");
    // Y las que ya estaban siguen ahí.
    expect(dsl()).toContain("a: random(1, 10)");
    expect(dsl()).toContain("b: random(1, 5)");
  });

  it("queda seleccionada para editarla de inmediato", async () => {
    const user = userEvent.setup();
    render(<Harness initial={SIN_VARIABLES} />);
    await abrirMenu(user);
    await user.click(screen.getByTestId("tiza-add-variable"));
    expect(screen.getByTestId("tiza-variable-nombre-input")).toHaveValue("v");
  });
});

describe("§3 · borrar variable desde Tiza", () => {
  it("la quita del DSL y vuelve a la pregunta", async () => {
    const user = userEvent.setup();
    render(<Harness initial={CON_VARIABLES} />);
    // Seleccionar `b` (segunda variable) desde la tarjeta.
    await user.click(screen.getByRole("button", { name: /^b/ }));
    await user.click(screen.getByTestId("tiza-variable-eliminar"));

    expect(dsl()).toContain("a: random(1, 10)");
    expect(dsl()).not.toContain("b: random(1, 5)");
    // Volvió a la pregunta: el property grid de variable ya no está.
    expect(screen.queryByTestId("tiza-variable-nombre-input")).toBeNull();
  });

  it("borrar la última quita el bloque `variables:` entero", async () => {
    const user = userEvent.setup();
    render(
      <Harness initial={'variables:\n  a: random(1, 10)\nenunciado: "{a}?"\nrespuesta: 1\ntipo: input\n'} />,
    );
    await user.click(screen.getByRole("button", { name: /^a/ }));
    await user.click(screen.getByTestId("tiza-variable-eliminar"));
    expect(dsl()).not.toContain("variables:");
  });
});

describe("§3 · subtipo Aleatorio (decimal)", () => {
  const subtipo = () => screen.getAllByRole("combobox").find((c) =>
    Array.from((c as HTMLSelectElement).options).some((o) => o.value === "random_float"),
  ) as HTMLSelectElement;

  it("el selector lo ofrece y escribe `random_float`", async () => {
    const user = userEvent.setup();
    render(<Harness initial={CON_VARIABLES} />);
    await user.click(screen.getByRole("button", { name: /^a/ }));

    await user.selectOptions(subtipo(), "random_float");
    expect(dsl()).toContain("a: random_float(0, 1)");
  });

  it("una variable `random_float` existente se clasifica como decimal, no como entero", async () => {
    const user = userEvent.setup();
    render(
      <Harness initial={'variables:\n  a: random_float(0.5, 2.5)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'} />,
    );
    await user.click(screen.getByRole("button", { name: /^a/ }));
    expect(subtipo().value).toBe("random_float");
    // Y sus bordes decimales NO disparan el aviso del subtipo entero (§8).
    expect(screen.queryByTestId("tiza-bordes-decimales")).toBeNull();
  });

  it("editar un borde conserva `random_float` (no lo convierte a entero)", async () => {
    const user = userEvent.setup();
    render(
      <Harness initial={'variables:\n  a: random_float(0, 1)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'} />,
    );
    await user.click(screen.getByRole("button", { name: /^a/ }));
    const nums = Array.from(
      document.querySelectorAll('input[type="number"]'),
    ) as HTMLInputElement[];
    await user.clear(nums[1]);
    await user.type(nums[1], "2.5");
    await user.tab();
    expect(dsl()).toContain("random_float(0, 2.5)");
  });
});
