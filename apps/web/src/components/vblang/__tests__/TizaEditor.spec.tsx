/**
 * Tests del "＋ Añadir bloque" de Tiza (fix bloques nativos post Etapa 1+2).
 *
 * Cubre las 4 opciones no-dataset del menú (Pista, Pasos de resolución,
 * Restricción, Variante de enunciado): cada una debe agregar CONTENIDO REAL
 * al AST (visible en el DSL serializado), no sólo cerrar el menú. También
 * cubre que cada bloque agregado se puede ver/editar/borrar, y que "Dataset
 * externo" sigue deshabilitado sin efecto.
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { parse, serialize, type Plantilla } from "@vb/vblang";
import {
  TizaQuestionCard,
  TizaPropertyGrid,
  type LiveValues,
} from "../TizaEditor";

const EMPTY_LIVE: LiveValues = {};

/** Harness controlado sobre `TizaQuestionCard`, mismo flujo que la página real
 *  (serialize → reparse), que expone el DSL para asserts. */
function CardHarness({ initial }: { initial: string }) {
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
      <pre data-testid="dsl">{serialize(plantilla)}</pre>
    </>
  );
}

/** Idem sobre `TizaPropertyGrid` (donde viven pistas/pasos/restricciones editables). */
function GridHarness({ initial }: { initial: string }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  const onChange = (next: Plantilla) => setPlantilla(parse(serialize(next)));
  return (
    <>
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

const BASE = 'enunciado: "Cuanto es 1 + 1?"\nrespuesta: 2\n';

async function openAddBlockMenu(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole("button", { name: /añadir bloque/i }));
}

describe("Tiza · menú ＋ Añadir bloque", () => {
  it("lista las 5 opciones y sólo Dataset externo está deshabilitado", async () => {
    const user = userEvent.setup();
    render(<CardHarness initial={BASE} />);
    await openAddBlockMenu(user);

    const menu = screen.getByRole("menu");
    for (const label of ["Pista", "Pasos de resolución", "Restricción", "Variante de enunciado"]) {
      expect(within(menu).getByRole("menuitem", { name: new RegExp(label, "i") })).toBeEnabled();
    }
    expect(
      within(menu).getByRole("menuitem", { name: /dataset externo/i }),
    ).toBeDisabled();
  });

  it("Pista agrega una pista real al DSL", async () => {
    const user = userEvent.setup();
    render(<CardHarness initial={BASE} />);
    await openAddBlockMenu(user);
    await user.click(screen.getByRole("menuitem", { name: /pista\b/i }));

    expect(dsl()).toContain("pistas:");
    expect(dsl()).toContain("Nueva pista…");
  });

  it("Pasos de resolución agrega un paso real, visible en el DSL y en la tarjeta", async () => {
    const user = userEvent.setup();
    render(<CardHarness initial={BASE} />);
    await openAddBlockMenu(user);
    await user.click(screen.getByRole("menuitem", { name: /pasos de resolución/i }));

    expect(dsl()).toContain("pasos:");
    expect(dsl()).toContain("Nuevo paso…");
    expect(screen.getByText("Nuevo paso…")).toBeInTheDocument();
  });

  it("Restricción agrega una fórmula real (no una frase que no parsearía)", async () => {
    const user = userEvent.setup();
    render(<CardHarness initial={BASE} />);
    await openAddBlockMenu(user);
    await user.click(screen.getByRole("menuitem", { name: /restricción\b/i }));

    expect(dsl()).toContain("restricciones:");
    expect(dsl()).toContain("true");
  });

  it("Variante de enunciado migra el enunciado único a variantes y agrega una segunda", async () => {
    const user = userEvent.setup();
    render(<CardHarness initial={BASE} />);
    await openAddBlockMenu(user);
    await user.click(screen.getByRole("menuitem", { name: /variante de enunciado/i }));

    // enunciado (singular) se migró a enunciados (plural): la primera variante
    // conserva el texto original, la segunda es la agregada por el menú.
    expect(dsl()).not.toMatch(/^enunciado:/m);
    expect(dsl()).toContain("enunciados:");
    expect(dsl()).toContain("Cuanto es 1 + 1?");
    expect(dsl()).toContain("Nueva variante…");

    // Clic de nuevo: agrega una TERCERA variante sin volver a migrar (ya
    // activo — no reaparece el enunciado singular ni se pierde ninguna).
    await openAddBlockMenu(user);
    await user.click(screen.getByRole("menuitem", { name: /variante de enunciado/i }));
    expect(dsl()).not.toMatch(/^enunciado:/m);
    const matches = dsl().match(/Nueva variante…/g) ?? [];
    expect(matches).toHaveLength(2);
  });

  it("Dataset externo sigue deshabilitado: clickearlo no cambia el DSL", async () => {
    const user = userEvent.setup();
    render(<CardHarness initial={BASE} />);
    const before = dsl();
    await openAddBlockMenu(user);
    await user.click(screen.getByRole("menuitem", { name: /dataset externo/i }));
    expect(dsl()).toBe(before);
  });
});

describe("Tiza · bloques agregados se pueden editar/borrar", () => {
  it("pasos: editar texto y borrar desde el property grid", async () => {
    const user = userEvent.setup();
    const withPasos = 'enunciado: "x"\nrespuesta: 1\npasos:\n  - "Primero"\n';
    render(<GridHarness initial={withPasos} />);

    const input = screen.getByDisplayValue("Primero");
    await user.clear(input);
    await user.type(input, "Editado");
    input.blur();
    expect(dsl()).toContain("Editado");

    await user.click(screen.getByRole("button", { name: /quitar paso 1/i }));
    expect(dsl()).not.toContain("pasos:");
  });

  it("restricciones: editar y borrar desde el property grid", async () => {
    const user = userEvent.setup();
    const withRestric = 'enunciado: "x"\nvariables:\n  a: random(1, 9)\nrespuesta: a\nrestricciones:\n  - a != 0\n';
    render(<GridHarness initial={withRestric} />);

    expect(screen.getByDisplayValue("a != 0")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /quitar restricción 1/i }));
    expect(dsl()).not.toContain("restricciones:");
  });

  it("variantes de enunciado: editar y borrar desde la tarjeta", async () => {
    const user = userEvent.setup();
    const withVariantes =
      'enunciados:\n  - "Primera"\n  - "Segunda"\nrespuesta: 1\n';
    render(<CardHarness initial={withVariantes} />);

    expect(screen.getByDisplayValue("Primera")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Segunda")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /quitar variante 2/i }));
    expect(dsl()).not.toContain("Segunda");
    expect(dsl()).toContain("enunciados:");
  });
});

/* WO-tiza-config (Fase 3) — dificultad/puntaje por pregunta + datalist de
   pools en el property grid (la parte de rol/maxRepeticiones/poolId ya
   estaba cubierta por Etapa 2). */
import type { QuizPreguntaMeta } from "../TizaEditor";

function QuizMetaHarness({ pools }: { pools?: string[] }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(BASE));
  const [meta, setMeta] = useState<QuizPreguntaMeta>({ rol: "obligatoria" });
  return (
    <>
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={(next) => setPlantilla(parse(serialize(next)))}
        selection={{ kind: "pregunta" }}
        onSelectQuestion={() => {}}
        live={EMPTY_LIVE}
        quizMeta={meta}
        onChangeQuizMeta={setMeta}
        poolsDisponibles={pools}
      />
      <pre data-testid="meta-json">{JSON.stringify(meta)}</pre>
    </>
  );
}

const metaJson = () => screen.getByTestId("meta-json").textContent ?? "";

describe("Tiza · quizMeta Fase 3 (dificultad/puntaje/pools)", () => {
  it("dificultad y puntaje se editan desde el property grid y llegan al quizMeta", async () => {
    const user = userEvent.setup();
    render(<QuizMetaHarness />);

    await user.selectOptions(
      screen.getByTestId("quiz-meta-dificultad-select"),
      "avanzado",
    );
    expect(metaJson()).toContain('"dificultad":"avanzado"');

    const puntaje = screen.getByTestId("quiz-meta-puntaje-input");
    await user.clear(puntaje);
    await user.type(puntaje, "2.5");
    expect(metaJson()).toContain('"puntaje":2.5');

    // Volver a "Sin asignar" limpia la dificultad (no queda un valor fantasma).
    await user.selectOptions(screen.getByTestId("quiz-meta-dificultad-select"), "");
    expect(metaJson()).not.toContain('"dificultad"');
  });

  it("con rol relleno, el input de pool sugiere las pools existentes (datalist)", async () => {
    const user = userEvent.setup();
    render(<QuizMetaHarness pools={["pool-a", "pool-b"]} />);

    await user.selectOptions(screen.getByTestId("quiz-meta-rol-select"), "relleno");

    const input = screen.getByTestId("quiz-meta-pool-id-input");
    const datalist = screen.getByTestId("quiz-meta-pool-datalist");
    expect(input.getAttribute("list")).toBe(datalist.id);
    const options = Array.from(datalist.querySelectorAll("option")).map((o) =>
      o.getAttribute("value"),
    );
    expect(options).toEqual(["pool-a", "pool-b"]);
  });
});

/* WO-tiza-config (Fase 4) — generador asistido en el editor visual de Tiza.
   El motor DSL ya existía (@vb/vblang, VBLang.md §9); esto cubre el dropdown
   nuevo del property grid: setear/quitar `generador:` de verdad en el DSL. */
describe("Tiza · generador asistido (Fase 4)", () => {
  it("elegir un generador escribe `generador:` en el DSL; quitarlo vuelve a la base por tipo", async () => {
    const user = userEvent.setup();
    render(<GridHarness initial={BASE} />);

    const picker = screen.getByTestId("vblang-form-generador-picker");
    const opciones = within(picker)
      .getAllByRole("option")
      .map((o) => (o as HTMLOptionElement).value)
      .filter((v) => v.split("/").length >= 3); // "<materia>/<archivo>/<subtipo>" fijo
    expect(opciones.length).toBeGreaterThan(0);

    await user.selectOptions(picker, opciones[0]);
    expect(dsl()).toContain(`generador: ${opciones[0]}`);

    await user.selectOptions(picker, "");
    expect(dsl()).not.toContain("generador:");
    // `applyTipo` re-sembró la base por tipo (respuesta editable de nuevo).
    expect(dsl()).toContain("respuesta:");
  });
});

/* PLAN-E §6 — "áreas en blanco con más de una plantilla". Causa real: el
   índice de variable seleccionada queda obsoleto si la plantilla activa
   cambia (undo/redo o cambio de pregunta en el rail) sin que algo reajuste
   `selection`; `VariablePropertyGrid` hacía `return null` en ese caso y el
   panel de propiedades quedaba en blanco en lugar de volver a la pregunta. */
function StaleVariableHarness() {
  const withVar = 'enunciado: "{a} + 1?"\nvariables:\n  a: aleatorio(1, 5)\nrespuesta: a + 1\n';
  const withoutVar = 'enunciado: "1 + 1?"\nrespuesta: 2\n';
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(withVar));
  const [selection, setSelection] = useState<{ kind: "pregunta" } | { kind: "variable"; index: number }>({
    kind: "pregunta",
  });
  return (
    <>
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={(next) => setPlantilla(parse(serialize(next)))}
        selection={selection}
        onSelectQuestion={() => setSelection({ kind: "pregunta" })}
        live={EMPTY_LIVE}
      />
      <button
        type="button"
        data-testid="select-variable"
        onClick={() => setSelection({ kind: "variable", index: 0 })}
      >
        Seleccionar variable
      </button>
      <button
        type="button"
        data-testid="simulate-undo"
        onClick={() => setPlantilla(parse(withoutVar))}
      >
        Simular undo (quita la variable)
      </button>
    </>
  );
}

describe("Tiza · PLAN-E §6 — property grid no queda en blanco", () => {
  it("si la variable seleccionada desaparece (undo/rail), vuelve a la vista de pregunta", async () => {
    const user = userEvent.setup();
    render(<StaleVariableHarness />);

    expect(screen.getByText(/tipo de pregunta/i)).toBeInTheDocument();

    await user.click(screen.getByTestId("select-variable"));
    expect(screen.getByText(/variable · a/i)).toBeInTheDocument();

    await user.click(screen.getByTestId("simulate-undo"));
    // Antes del fix: el panel quedaba vacío (VariablePropertyGrid → null).
    expect(screen.getByText(/tipo de pregunta/i)).toBeInTheDocument();
  });
});

/* PLAN-E §11 — el chip "Usar en enunciado" del property grid de variable
   decía "copiar" pero no tenía ningún onClick: era texto estático, no un
   control clicable como el resto de los chips de variables. */
describe("Tiza · PLAN-E §11 — chip de variable copia al portapapeles", () => {
  it("clickear el chip copia `{nombre}` y muestra confirmación", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    const withVar = 'enunciado: "{a} + 1?"\nvariables:\n  a: aleatorio(1, 5)\nrespuesta: a + 1\n';
    render(
      <TizaPropertyGrid
        plantilla={parse(withVar)}
        onChange={() => {}}
        selection={{ kind: "variable", index: 0 }}
        onSelectQuestion={() => {}}
        live={EMPTY_LIVE}
      />,
    );

    const chip = screen.getByTestId("variable-copy-chip");
    expect(chip.tagName).toBe("BUTTON");
    await user.click(chip);

    expect(writeText).toHaveBeenCalledWith("{a}");
    expect(screen.getByText("¡copiado!")).toBeInTheDocument();
  });
});
