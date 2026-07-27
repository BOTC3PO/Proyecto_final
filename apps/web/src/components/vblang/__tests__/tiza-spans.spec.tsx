/**
 * PLAN tiza-autoria-avanzada §7 — `spans_pedidos` (analisis_spans).
 *
 * Era el único campo del schema que NINGUNA interfaz editaba: `itemShape:
 * "span"` no es ni `string` ni `etiqueta`, y `EditorPlantilla` saltea esas
 * listas explícitamente con un cartel ("campos aún no editables… se preservan
 * tal cual"). La capa de datos ya existía (`readSpans`/`writeSpans`); faltaba
 * la UI, que entró con `CampoSpans` en §1.
 *
 * El guard de §2 sólo verifica que el control ESTÉ. Esto verifica que EDITE.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { compile, generate, parse, serialize, type Plantilla } from "@vb/vblang";
import { TizaPropertyGrid, type LiveValues } from "../TizaEditor";

const EMPTY_LIVE: LiveValues = {};

const SPANS =
  'enunciado: "Marcá el sujeto"\n' +
  'tipo: analisis_spans\n' +
  'texto_analizar: "El perro grande corre por el parque"\n' +
  'spans_pedidos:\n' +
  '  - { desde: 0, hasta: 2, etiqueta: "sujeto" }\n';

function Harness({ initial }: { initial: string }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  return (
    <>
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={(next) => setPlantilla(parse(serialize(next)))}
        selection={{ kind: "pregunta" }}
        onSelectQuestion={() => {}}
        live={EMPTY_LIVE}
      />
      <pre data-testid="dsl">{serialize(plantilla)}</pre>
    </>
  );
}

const dsl = () => screen.getByTestId("dsl").textContent ?? "";

/** ¿La plantilla serializada sigue generando? */
function genera(texto: string): string | null {
  try {
    generate(compile(parse(texto)), { seed: 1 });
    return null;
  } catch (e) {
    return (e as Error).message;
  }
}

describe("§7 · spans editables desde Tiza", () => {
  it("muestra los spans existentes con desde/hasta/etiqueta", () => {
    render(<Harness initial={SPANS} />);
    expect((screen.getByTestId("tiza-span-desde-0") as HTMLInputElement).value).toBe("0");
    expect((screen.getByTestId("tiza-span-hasta-0") as HTMLInputElement).value).toBe("2");
    expect((screen.getByTestId("tiza-span-etiqueta-0") as HTMLInputElement).value).toBe("sujeto");
  });

  it("editar la etiqueta persiste en el DSL", async () => {
    const user = userEvent.setup();
    render(<Harness initial={SPANS} />);
    const et = screen.getByTestId("tiza-span-etiqueta-0");
    await user.clear(et);
    await user.type(et, "sujeto completo");
    await user.tab();
    expect(dsl()).toContain('etiqueta: "sujeto completo"');
    expect(genera(dsl())).toBeNull();
  });

  it("editar los índices persiste y sigue generando", async () => {
    const user = userEvent.setup();
    render(<Harness initial={SPANS} />);
    const hasta = screen.getByTestId("tiza-span-hasta-0");
    await user.clear(hasta);
    await user.type(hasta, "3");
    await user.tab();
    expect(dsl()).toContain("hasta: 3");
    expect(genera(dsl())).toBeNull();
  });

  it("agrega un span nuevo", async () => {
    const user = userEvent.setup();
    render(<Harness initial={SPANS} />);
    await user.click(screen.getByTestId("tiza-span-add"));
    expect(screen.getByTestId("tiza-span-desde-1")).toBeTruthy();

    const et = screen.getByTestId("tiza-span-etiqueta-1");
    await user.clear(et);
    await user.type(et, "predicado");
    await user.tab();
    const hasta = screen.getByTestId("tiza-span-hasta-1");
    await user.clear(hasta);
    await user.type(hasta, "6");
    await user.tab();
    const desde = screen.getByTestId("tiza-span-desde-1");
    await user.clear(desde);
    await user.type(desde, "3");
    await user.tab();

    expect(dsl()).toContain('etiqueta: "predicado"');
    expect(genera(dsl())).toBeNull();
  });

  it("borra un span cuando hay más de uno", async () => {
    const user = userEvent.setup();
    render(<Harness initial={SPANS} />);
    await user.click(screen.getByTestId("tiza-span-add"));
    expect(screen.getByTestId("tiza-span-desde-1")).toBeTruthy();

    await user.click(screen.getByTestId("tiza-span-eliminar-1"));
    expect(screen.queryByTestId("tiza-span-desde-1")).toBeNull();
    // El primero sigue.
    expect(screen.getByTestId("tiza-span-desde-0")).toBeTruthy();
  });

  it("no deja borrar el último: `spans_pedidos` es obligatorio y vacío no parsea", () => {
    render(<Harness initial={SPANS} />);
    expect(screen.getByTestId("tiza-span-eliminar-0")).toBeDisabled();
  });

  it("avisa cuando un span cae fuera del texto (el compilador lo rechaza)", async () => {
    const user = userEvent.setup();
    render(<Harness initial={SPANS} />);
    // El texto tiene 7 palabras → índices 0..6. `hasta: 9` está fuera.
    const hasta = screen.getByTestId("tiza-span-hasta-0");
    await user.clear(hasta);
    await user.type(hasta, "9");
    await user.tab();

    expect(screen.getByTestId("tiza-span-fuera-de-rango-0")).toBeTruthy();
    // Y efectivamente el runtime lo rechaza: el aviso no es decorativo.
    expect(genera(dsl())).toMatch(/fuera de rango|span/i);
  });

  it("desde > hasta también se avisa", async () => {
    const user = userEvent.setup();
    render(<Harness initial={SPANS} />);
    const desde = screen.getByTestId("tiza-span-desde-0");
    await user.clear(desde);
    await user.type(desde, "5");
    await user.tab();
    expect(screen.getByTestId("tiza-span-fuera-de-rango-0")).toBeTruthy();
  });
});
