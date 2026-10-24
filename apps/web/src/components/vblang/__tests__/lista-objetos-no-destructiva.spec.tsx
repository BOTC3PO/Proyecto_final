/**
 * PLAN tiza-autoria-avanzada §0 — editar una lista NO debe destruirla.
 *
 * Repro del pase en vivo, con la plantilla de ejemplo oficial del wizard
 * ("Mark on map — A country's capital"): `paises` es un array de OBJETOS y el
 * enunciado usa `{pais.capital}`. Tiza la catalogaba como "Lista de opciones" y
 * ofrecía el textarea; con una tecla, cada objeto volvía como string escapado y
 * encima se agregaba un wrapper `uno_de(...)` que el array no tenía.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { parse, serialize, type Plantilla } from "@vb/vblang";
import { TizaPropertyGrid, type LiveValues } from "../TizaEditor";
import {
  listaEditableComoTexto,
  listItemExprs,
  withListItems,
} from "../plantillaFields";
import { getBlock } from "../plantillaAst";

const EMPTY_LIVE: LiveValues = {};

/** La plantilla de ejemplo del wizard, tal cual. */
const MAPA =
  'mapa: world_countries\n' +
  'variables:\n' +
  '  paises: [{ nombre: "Argentina", iso: "ARG", capital: "Buenos Aires" }, { nombre: "Brasil", iso: "BRA", capital: "Brasilia" }]\n' +
  '  pais: uno_de(paises)\n' +
  'enunciado: "Hacé click en el país cuya capital es {pais.capital}."\n' +
  'tipo: marcar_mapa\n' +
  'respuesta_iso: pais.iso\n';

const LISTA_SIMPLE =
  'variables:\n  a: uno_de(["rojo", "azul"])\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n';
const ARRAY_DESNUDO =
  'variables:\n  a: ["rojo", "azul"]\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n';

function exprDe(dsl: string, i: number) {
  return getBlock(parse(dsl), "variables")!.declaraciones[i]!.expr;
}

function VarHarness({ initial, index = 0 }: { initial: string; index?: number }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  return (
    <>
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={(next) => setPlantilla(parse(serialize(next)))}
        selection={{ kind: "variable", index }}
        onSelectQuestion={() => {}}
        live={EMPTY_LIVE}
      />
      <pre data-testid="dsl">{serialize(plantilla)}</pre>
    </>
  );
}

const dsl = () => screen.getByTestId("dsl").textContent ?? "";

describe("listaEditableComoTexto", () => {
  it("acepta listas de strings y de números", () => {
    expect(listaEditableComoTexto(exprDe(LISTA_SIMPLE, 0))).toBe(true);
    expect(listaEditableComoTexto(exprDe(ARRAY_DESNUDO, 0))).toBe(true);
    expect(
      listaEditableComoTexto(
        exprDe('variables:\n  a: uno_de([-1, 2, 3.5])\nenunciado: "{a}"\nrespuesta: a\ntipo: input\n', 0),
      ),
    ).toBe(true);
  });

  it("rechaza una lista de objetos y una referencia a otra variable", () => {
    expect(listaEditableComoTexto(exprDe(MAPA, 0))).toBe(false); // [{...}, {...}]
    expect(listaEditableComoTexto(exprDe(MAPA, 1))).toBe(false); // uno_de(paises)
  });

  it("listItemExprs cubre las tres formas del DSL", () => {
    expect(listItemExprs(exprDe(ARRAY_DESNUDO, 0))).toHaveLength(2);
    expect(listItemExprs(exprDe(LISTA_SIMPLE, 0))).toHaveLength(2);
    expect(listItemExprs(exprDe(MAPA, 1))).toHaveLength(1); // uno_de(paises)
    expect(listItemExprs(exprDe('variables:\n  a: 1\nenunciado: "x"\nrespuesta: a\ntipo: input\n', 0))).toBeNull();
  });
});

describe("withListItems conserva la forma", () => {
  it("un `uno_de([...])` sigue siendo `uno_de([...])`", () => {
    const next = withListItems(exprDe(LISTA_SIMPLE, 0), ["verde"]);
    expect(next.kind).toBe("fun_call");
    if (next.kind === "fun_call") expect(next.name).toBe("uno_de");
  });

  it("un array desnudo sigue desnudo (no le aparece un wrapper)", () => {
    const next = withListItems(exprDe(ARRAY_DESNUDO, 0), ["verde"]);
    expect(next.kind).toBe("array");
  });
});

describe("Tiza · §0 no ofrece el editor cuando destruiría la lista", () => {
  it("con objetos muestra el aviso y NO el textarea", () => {
    render(<VarHarness initial={MAPA} index={0} />);
    expect(screen.queryByTestId("tiza-lista-opciones")).toBeNull();
    expect(screen.getByTestId("tiza-lista-no-editable")).toBeTruthy();
    // El valor sigue a la vista para que el docente sepa qué tiene.
    expect(screen.getByTestId("tiza-lista-no-editable-valor").textContent).toContain("Argentina");
  });

  it("con `uno_de(otraVariable)` tampoco lo ofrece (antes mostraba vacío)", () => {
    render(<VarHarness initial={MAPA} index={1} />);
    expect(screen.queryByTestId("tiza-lista-opciones")).toBeNull();
    expect(screen.getByTestId("tiza-lista-no-editable")).toBeTruthy();
  });

  it("la plantilla del mapa queda intacta (el bug destruía los objetos)", () => {
    render(<VarHarness initial={MAPA} index={0} />);
    expect(dsl()).toContain('{ nombre: "Argentina", iso: "ARG", capital: "Buenos Aires" }');
    expect(dsl()).toContain("pais: uno_de(paises)");
    expect(dsl()).not.toContain('\\"'); // sin strings escapados
  });

  it("una lista de strings SÍ se sigue editando, conservando `uno_de`", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={LISTA_SIMPLE} />);
    const ta = screen.getByTestId("tiza-lista-opciones");
    await user.clear(ta);
    await user.type(ta, "rojo{enter}azul{enter}verde");
    await user.tab();
    expect(dsl()).toContain('uno_de(["rojo", "azul", "verde"])');
  });

  it("un array desnudo editado no gana un `uno_de`", async () => {
    const user = userEvent.setup();
    render(<VarHarness initial={ARRAY_DESNUDO} />);
    const ta = screen.getByTestId("tiza-lista-opciones");
    await user.clear(ta);
    await user.type(ta, "rojo{enter}verde");
    await user.tab();
    expect(dsl()).toContain('a: ["rojo", "verde"]');
    expect(dsl()).not.toContain("uno_de");
  });
});
