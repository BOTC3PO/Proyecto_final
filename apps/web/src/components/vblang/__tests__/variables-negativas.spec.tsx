/**
 * PLAN casos-limite §1/§2/§4 (negativos) + §5/§6 (edición del subtipo y rango).
 *
 * Raíz común: los editores ESCRIBEN los negativos como literal `num`, pero el
 * round-trip `serialize → parse` los devuelve como unario, y los lectores
 * chequeaban `kind === "num"`. Resultado: los límites de `random` se veían
 * vacíos y la siguiente edición los pisaba con ceros (además de `Number("")`,
 * que es 0 y pasaba el guard de finitud).
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { parse, serialize, type Plantilla } from "@vb/vblang";
import { TizaPropertyGrid, type LiveValues } from "../TizaEditor";
import VariablesEditor from "../VariablesEditor";
import { getBlock, numLiteral } from "../plantillaAst";

const EMPTY_LIVE: LiveValues = {};

function VarHarness({ initial }: { initial: string }) {
  return <Harness initial={initial} selection={{ kind: "variable", index: 0 }} />;
}

function Harness({
  initial,
  selection,
}: {
  initial: string;
  selection: { kind: "pregunta" } | { kind: "variable"; index: number };
}) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  return (
    <>
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={(next) => setPlantilla(parse(serialize(next)))}
        selection={selection}
        onSelectQuestion={() => {}}
        live={EMPTY_LIVE}
      />
      <pre data-testid="dsl">{serialize(plantilla)}</pre>
    </>
  );
}

const dsl = () => screen.getByTestId("dsl").textContent ?? "";
const nums = () =>
  Array.from(document.querySelectorAll('input[type="number"]')) as HTMLInputElement[];

describe("numLiteral", () => {
  it("lee el literal tal como vuelve del parser (unario incluido)", () => {
    const p = parse('variables:\n  a: random(-10, -1)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n');
    const expr = getBlock(p, "variables")!.declaraciones[0]!.expr;
    if (expr.kind !== "fun_call") throw new Error("esperaba random(...)");
    expect(numLiteral(expr.args[0])).toBe(-10);
    expect(numLiteral(expr.args[1])).toBe(-1);
    expect(numLiteral({ kind: "str", value: "x", loc: expr.loc })).toBeNull();
  });
});

describe("Tiza · variables negativas", () => {
  const NEG = 'variables:\n  a: random(-10, -1)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n';

  it("muestra los límites negativos en Mínimo/Máximo", () => {
    render(<VarHarness initial={NEG} />);
    expect(nums().map((i) => i.value)).toEqual(["-10", "-1"]);
  });

  it("editar un extremo conserva el otro", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={NEG} />);
    await user.clear(nums()[0]);
    await user.type(nums()[0], "-3");
    await user.tab();
    expect(dsl()).toContain("random(-3, -1)");
    expect(nums().map((i) => i.value)).toEqual(["-3", "-1"]);
  });

  it("escribir un negativo sobre un rango positivo no borra los campos", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={'variables:\n  a: random(1, 10)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'} />);
    await user.clear(nums()[0]);
    await user.type(nums()[0], "-5");
    await user.tab();
    expect(dsl()).toContain("random(-5, 10)");
    expect(nums().map((i) => i.value)).toEqual(["-5", "10"]);
  });

  it("una tolerancia negativa no se guarda y se avisa (§3)", async () => {
    const user = userEvent.setup();
    const CON_TOL =
      'variables:\n  a: random(1, 5)\nenunciado: "{a}?"\nrespuesta: a\ntolerancia: 0.5\ntipo: input\n';
    render(<Harness initial={CON_TOL} selection={{ kind: "pregunta" }} />);
    const tol = screen.getByTestId("tiza-tolerancia-input") as HTMLInputElement;

    await user.clear(tol);
    await user.type(tol, "-2");
    expect(dsl()).not.toContain("tolerancia: -2");
    expect(screen.getByText(/no puede ser negativa/i)).toBeTruthy();

    // Un valor válido vuelve a guardar y limpia el aviso.
    await user.clear(tol);
    await user.type(tol, "2");
    expect(dsl()).toContain("tolerancia: 2");
    expect(screen.queryByText(/no puede ser negativa/i)).toBeNull();
  });

  it("el campo vacío (o el '-' a medio escribir) no se comitea como 0", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={'variables:\n  a: random(1, 10)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'} />);
    await user.clear(nums()[0]);
    await user.type(nums()[0], "-"); // un input[type=number] reporta "" acá
    await user.tab();
    expect(dsl()).toContain("random(1, 10)");
  });
});

describe("Tiza · aviso de decimales sin tolerancia (§7)", () => {
  const CON_DECIMALES =
    'variables:\n  a: 1\n  b: 3\nenunciado: "{a}/{b}?"\nrespuesta: a / b\ntipo: input\n';
  const aviso = () => screen.queryByTestId("tiza-decimales-sin-tolerancia");

  function render1(live: LiveValues, dsl = CON_DECIMALES) {
    render(
      <TizaPropertyGrid
        plantilla={parse(dsl)}
        onChange={() => {}}
        selection={{ kind: "pregunta" }}
        onSelectQuestion={() => {}}
        live={live}
      />,
    );
  }

  it("avisa cuando la respuesta viva tiene decimales y no hay tolerancia", () => {
    // `0.3333` es lo que `formatoDefault` produce para 1/3.
    render1({ respuesta: "0.3333" });
    expect(aviso()).toBeTruthy();
  });

  it("no avisa si la respuesta es entera", () => {
    render1({ respuesta: "7" });
    expect(aviso()).toBeNull();
  });

  it("no avisa si la plantilla ya declara tolerancia", () => {
    render1(
      { respuesta: "0.3333", toleranciaAbs: 0.01 },
      'variables:\n  a: 1\n  b: 3\nenunciado: "{a}/{b}?"\nrespuesta: a / b\ntolerancia: 0.01\ntipo: input\n',
    );
    expect(aviso()).toBeNull();
  });

  it("no avisa sin preview (respuesta viva ausente)", () => {
    render1({});
    expect(aviso()).toBeNull();
  });
});

describe("Tiza · cambiar de subtipo (§5)", () => {
  // El property grid de variable tiene un único <select>: el de subtipo.
  const subtipo = () => screen.getByRole("combobox") as HTMLSelectElement;
  const EXPR_NEG = 'variables:\n  a: -7\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n';

  it("el ida y vuelta conserva el valor original", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={EXPR_NEG} />);
    expect(subtipo().value).toBe("expr");

    await user.selectOptions(subtipo(), "random");
    expect(dsl()).toContain("random(1, 10)");

    await user.selectOptions(subtipo(), "expr");
    expect(dsl()).toContain("a: -7");
  });

  it("el placeholder de expresión no inventa variables inexistentes", async () => {
    const user = userEvent.setup();
    // Sin valor previo que restaurar: `a + b` referenciaba una `b` que no
    // existe y rompía la plantilla en runtime apenas se tocaba el selector.
    render(<VarHarness initial={'variables:\n  a: random(1, 10)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'} />);
    await user.selectOptions(subtipo(), "expr");
    expect(dsl()).toContain("a: 0");
    expect(dsl()).not.toContain("a + b");
  });
});

describe("Tiza · rango invertido (§6)", () => {
  const aviso = () => screen.queryByTestId("tiza-rango-invertido");

  it("avisa cuando mín > máx, sin bloquear el tipeo", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={'variables:\n  a: random(1, 10)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'} />);
    expect(aviso()).toBeNull();

    await user.clear(nums()[0]);
    await user.type(nums()[0], "20");
    await user.tab();
    expect(dsl()).toContain("random(20, 10)"); // se guarda igual
    expect(aviso()).toBeTruthy();

    await user.clear(nums()[1]);
    await user.type(nums()[1], "30");
    await user.tab();
    expect(aviso()).toBeNull();
  });

  it("un rango negativo válido no dispara el aviso", () => {
    render(<VarHarness initial={'variables:\n  a: random(-10, -1)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n'} />);
    expect(aviso()).toBeNull();
  });

  // El editor clásico tiene el mismo par Mínimo/Máximo y el mismo agujero.
  it("el editor clásico también avisa", () => {
    const { rerender } = render(<ClasicoHarness dsl={'variables:\n  a: random(1, 10)\nenunciado: "x"\nrespuesta: a\n'} />);
    expect(screen.queryByTestId("vblang-var-rango-invertido-0")).toBeNull();

    rerender(<ClasicoHarness dsl={'variables:\n  a: random(10, 1)\nenunciado: "x"\nrespuesta: a\n'} />);
    expect(screen.getByTestId("vblang-var-rango-invertido-0")).toBeTruthy();
  });
});

function ClasicoHarness({ dsl }: { dsl: string }) {
  const plantilla = parse(dsl);
  const b = plantilla.bloques.find((x) => x.kind === "variables");
  return (
    <VariablesEditor
      plantilla={plantilla}
      variables={b && b.kind === "variables" ? b.declaraciones : []}
      onChange={() => {}}
    />
  );
}
