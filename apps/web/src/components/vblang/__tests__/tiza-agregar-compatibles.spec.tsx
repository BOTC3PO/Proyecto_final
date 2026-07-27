/**
 * Menú "Añadir bloque" derivado del TIPO de pregunta.
 *
 * Antes la lista era fija: ofrecía lo mismo para los 11 tipos y dejaba afuera
 * dos bloques que el runtime soporta y ninguna interfaz mostraba:
 *
 *  - `opciones: N` — para `mc` con respuesta NUMÉRICA, `generate.ts` genera
 *    `N-1` distractores numéricos con el PRNG. Es la alternativa a listar
 *    `opciones_explicitas` a mano. Ningún schema lo declara, así que no
 *    aparecía en Tiza ni en el editor clásico.
 *  - `tolerancia_abs` — sólo tiene sentido en tipos con `tolerancia`. El editor
 *    clásico lo tenía (`ToleranciaAbsField`); Tiza no.
 */
import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import {
  ALL_QUESTION_TYPES,
  parse,
  serialize,
  type Plantilla,
  type TipoPregunta,
} from "@vb/vblang";
import { TizaQuestionCard, TizaPropertyGrid, type LiveValues } from "../TizaEditor";
import { applyTipo } from "../plantillaFields";

const EMPTY_LIVE: LiveValues = {};
const BASE = 'enunciado: "x"\nrespuesta: 1\ntipo: input\n';

function Harness({ initial }: { initial: string }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  const onChange = (next: Plantilla) => setPlantilla(parse(serialize(next)));
  return (
    <>
      <TizaQuestionCard
        plantilla={plantilla}
        onChange={onChange}
        selection={{ kind: "pregunta" }}
        onSelectQuestion={() => {}}
        onSelectVariable={() => {}}
        live={EMPTY_LIVE}
      />
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={onChange}
        selection={{ kind: "pregunta" }}
        onSelectQuestion={() => {}}
        live={EMPTY_LIVE}
      />
      <pre data-testid="dsl">{serialize(plantilla)}</pre>
    </>
  );
}

const dsl = () => screen.getByTestId("dsl").textContent ?? "";
const dslDe = (tipo: TipoPregunta) => serialize(applyTipo(parse(BASE), tipo));

async function abrirMenu(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole("button", { name: /Añadir bloque|Add block/i }));
  return screen.getByRole("menu");
}

describe("compatibilidad por tipo", () => {
  it("`opciones: N` sólo se ofrece en mc", async () => {
    const user = userEvent.setup();
    for (const tipo of ALL_QUESTION_TYPES) {
      const { unmount } = render(<Harness initial={dslDe(tipo)} />);
      const menu = await abrirMenu(user);
      const presente = within(menu).queryByTestId("tiza-add-opciones_cantidad") !== null;
      expect(presente, `opciones en ${tipo}`).toBe(tipo === "mc");
      unmount();
    }
  });

  it("`tolerancia_abs` sólo se ofrece donde el schema declara `tolerancia`", async () => {
    const user = userEvent.setup();
    for (const tipo of ALL_QUESTION_TYPES) {
      const { unmount } = render(<Harness initial={dslDe(tipo)} />);
      const menu = await abrirMenu(user);
      const presente = within(menu).queryByTestId("tiza-add-tolerancia_abs") !== null;
      // Hoy sólo `input` declara tolerancia.
      expect(presente, `tolerancia_abs en ${tipo}`).toBe(tipo === "input");
      unmount();
    }
  });

  it("los ítems agnósticos del tipo se ofrecen siempre", async () => {
    const user = userEvent.setup();
    for (const tipo of ALL_QUESTION_TYPES) {
      const { unmount } = render(<Harness initial={dslDe(tipo)} />);
      const menu = await abrirMenu(user);
      for (const id of ["variable", "pista", "pasos", "restric", "variante", "dataset"]) {
        expect(within(menu).getByTestId(`tiza-add-${id}`), `${id} en ${tipo}`).toBeTruthy();
      }
      unmount();
    }
  });
});

describe("no se ofrece dos veces lo que ya está", () => {
  it("`opciones: N` desaparece del menú después de agregarlo", async () => {
    const user = userEvent.setup();
    render(<Harness initial={dslDe("mc")} />);

    let menu = await abrirMenu(user);
    await user.click(within(menu).getByTestId("tiza-add-opciones_cantidad"));
    expect(dsl()).toContain("opciones: 4");

    menu = await abrirMenu(user);
    expect(within(menu).queryByTestId("tiza-add-opciones_cantidad")).toBeNull();
  });

  it("`tolerancia_abs` desaparece del menú después de agregarlo", async () => {
    const user = userEvent.setup();
    render(<Harness initial={BASE} />);

    let menu = await abrirMenu(user);
    await user.click(within(menu).getByTestId("tiza-add-tolerancia_abs"));
    expect(dsl()).toContain("tolerancia_abs: 0.01");

    menu = await abrirMenu(user);
    expect(within(menu).queryByTestId("tiza-add-tolerancia_abs")).toBeNull();
  });
});

describe("los controles nuevos editan de verdad", () => {
  it("la cantidad de opciones se edita y persiste", async () => {
    const user = userEvent.setup();
    render(<Harness initial={dslDe("mc")} />);
    const menu = await abrirMenu(user);
    await user.click(within(menu).getByTestId("tiza-add-opciones_cantidad"));

    const input = screen.getByTestId("tiza-opciones-cantidad-input") as HTMLInputElement;
    // `clear()` deja el campo vacío, que a propósito NO borra el bloque (si lo
    // borrara, el control desaparecería a mitad de la edición).
    await user.clear(input);
    expect(dsl()).toContain("opciones: 4");
    await user.type(input, "5");
    await user.tab();
    expect(dsl()).toContain("opciones: 5");
  });

  it("una cantidad inválida no se guarda (mínimo 2, entero)", async () => {
    const user = userEvent.setup();
    render(<Harness initial={dslDe("mc")} />);
    const menu = await abrirMenu(user);
    await user.click(within(menu).getByTestId("tiza-add-opciones_cantidad"));

    const input = screen.getByTestId("tiza-opciones-cantidad-input");
    await user.clear(input);
    await user.type(input, "1");
    await user.tab();
    // Sigue el valor anterior: 1 opción no es un multiple choice.
    expect(dsl()).toContain("opciones: 4");
  });

  it("la tolerancia absoluta se edita y persiste", async () => {
    const user = userEvent.setup();
    render(<Harness initial={BASE} />);
    const menu = await abrirMenu(user);
    await user.click(within(menu).getByTestId("tiza-add-tolerancia_abs"));

    const input = screen.getByTestId("tiza-tolerancia-abs-input");
    await user.clear(input);
    await user.type(input, "0.5");
    await user.tab();
    expect(dsl()).toContain("tolerancia_abs: 0.5");
  });

  it("el botón × quita el bloque y vuelve a ofrecerlo en el menú", async () => {
    const user = userEvent.setup();
    render(<Harness initial={dslDe("mc")} />);
    let menu = await abrirMenu(user);
    await user.click(within(menu).getByTestId("tiza-add-opciones_cantidad"));
    expect(dsl()).toContain("opciones: 4");

    await user.click(screen.getByTestId("tiza-opciones-cantidad-quitar"));
    expect(dsl()).not.toContain("opciones: 4");
    menu = await abrirMenu(user);
    expect(within(menu).getByTestId("tiza-add-opciones_cantidad")).toBeTruthy();
  });

  it("avisa que las opciones de la lista le ganan a la cantidad", async () => {
    const user = userEvent.setup();
    render(<Harness initial={dslDe("mc")} />);
    const menu = await abrirMenu(user);
    await user.click(within(menu).getByTestId("tiza-add-opciones_cantidad"));
    // `applyTipo("mc")` siembra `opciones_explicitas`, así que conviven.
    expect(screen.getByText(/tienen prioridad|take priority/i)).toBeTruthy();
  });
});
