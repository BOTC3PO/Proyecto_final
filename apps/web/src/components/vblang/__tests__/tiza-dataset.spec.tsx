/**
 * PLAN tiza-autoria-avanzada §4 — datasets externos en Tiza.
 *
 * El bloque `dataset:` estaba construido punta a punta (parser, compile,
 * generate vía provider, CRUD en la API, páginas web, DatasetField en el editor
 * clásico); lo único apagado era el botón de Tiza, con un `disabled` a mano y el
 * tag "pronto".
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { parse, serialize, type Plantilla } from "@vb/vblang";

const listDatasets = vi.fn();
vi.mock("../../../domain/vblang/datasetApi", () => ({
  listDatasets: (...args: unknown[]) => listDatasets(...args),
}));

const { TizaQuestionCard } = await import("../TizaEditor");
type LiveValues = import("../TizaEditor").LiveValues;

const EMPTY_LIVE: LiveValues = {};
const BASE = 'enunciado: "x"\nrespuesta: 1\ntipo: input\n';

const DATASETS = [
  {
    id: "d1",
    nombre: "paises_del_mundo",
    descripcion: "",
    visibility: "escuela",
    columnas: { nombre: "texto", capital: "texto", poblacion: "numero" },
    filasCount: 195,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "d2",
    nombre: "elementos_quimicos",
    descripcion: "",
    visibility: "publica",
    columnas: { simbolo: "texto", z: "numero" },
    filasCount: 118,
    createdAt: "",
    updatedAt: "",
  },
];

function Harness({ initial }: { initial: string }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  return (
    <>
      <TizaQuestionCard
        plantilla={plantilla}
        onChange={(next) => setPlantilla(parse(serialize(next)))}
        selection={{ kind: "pregunta" }}
        onSelectQuestion={() => {}}
        onSelectVariable={() => {}}
        live={EMPTY_LIVE}
      />
      <pre data-testid="dsl">{serialize(plantilla)}</pre>
    </>
  );
}

const dsl = () => screen.getByTestId("dsl").textContent ?? "";

beforeEach(() => {
  listDatasets.mockReset();
  listDatasets.mockResolvedValue({ items: DATASETS, total: DATASETS.length });
});

describe("§4 · el menú ya no tiene el dataset deshabilitado", () => {
  it("el ítem es clickeable y revela el picker", async () => {
    const user = userEvent.setup();
    render(<Harness initial={BASE} />);
    expect(screen.queryByTestId("tiza-dataset")).toBeNull();

    await user.click(screen.getByRole("button", { name: /Añadir bloque|Add block/i }));
    const item = screen.getByTestId("tiza-add-dataset");
    expect(item).not.toBeDisabled();
    await user.click(item);

    expect(screen.getByTestId("tiza-dataset")).toBeTruthy();
  });
});

describe("§4 · picker contra la lista real", () => {
  it("lista los datasets disponibles con su cantidad de filas", async () => {
    const user = userEvent.setup();
    render(<Harness initial={BASE} />);
    await user.click(screen.getByRole("button", { name: /Añadir bloque|Add block/i }));
    await user.click(screen.getByTestId("tiza-add-dataset"));

    const select = await waitFor(() =>
      screen.getByTestId("tiza-dataset-select") as HTMLSelectElement,
    );
    await waitFor(() => expect(select.options.length).toBeGreaterThan(1));
    const labels = Array.from(select.options).map((o) => o.textContent);
    expect(labels.join(" | ")).toContain("paises_del_mundo (195)");
    expect(labels.join(" | ")).toContain("elementos_quimicos (118)");
  });

  it("elegir uno escribe el bloque `dataset:`", async () => {
    const user = userEvent.setup();
    render(<Harness initial={BASE} />);
    await user.click(screen.getByRole("button", { name: /Añadir bloque|Add block/i }));
    await user.click(screen.getByTestId("tiza-add-dataset"));
    const select = await waitFor(() => screen.getByTestId("tiza-dataset-select"));
    await waitFor(() =>
      expect((select as HTMLSelectElement).options.length).toBeGreaterThan(1),
    );

    await user.selectOptions(select, "paises_del_mundo");
    expect(dsl()).toContain("dataset: paises_del_mundo");
  });

  it("muestra las COLUMNAS del elegido (antes había que adivinarlas)", async () => {
    render(<Harness initial={'dataset: paises_del_mundo\n' + BASE} />);
    const cols = await waitFor(() => screen.getByTestId("tiza-dataset-columnas"));
    expect(cols.textContent).toContain("nombre");
    expect(cols.textContent).toContain("capital");
    expect(cols.textContent).toContain("poblacion");
  });

  it("volver a 'Sin dataset' quita el bloque", async () => {
    const user = userEvent.setup();
    render(<Harness initial={'dataset: paises_del_mundo\n' + BASE} />);
    const select = await waitFor(() => screen.getByTestId("tiza-dataset-select"));
    await user.selectOptions(select, "");
    expect(dsl()).not.toContain("dataset:");
  });

  it("un dataset guardado que no está en la lista no se pierde", async () => {
    render(<Harness initial={'dataset: uno_borrado\n' + BASE} />);
    const select = (await waitFor(() =>
      screen.getByTestId("tiza-dataset-select"),
    )) as HTMLSelectElement;
    expect(select.value).toBe("uno_borrado");
    expect(dsl()).toContain("dataset: uno_borrado");
  });
});

describe("§4 · si la lista no carga, la autoría no se bloquea", () => {
  it("cae a un input de texto libre", async () => {
    listDatasets.mockRejectedValue(new Error("500"));
    const user = userEvent.setup();
    render(<Harness initial={BASE} />);
    await user.click(screen.getByRole("button", { name: /Añadir bloque|Add block/i }));
    await user.click(screen.getByTestId("tiza-add-dataset"));

    const input = await waitFor(() => screen.getByTestId("tiza-dataset-input"));
    await user.type(input, "a_mano");
    expect(dsl()).toContain("dataset: a_mano");
  });
});
