/**
 * PLAN-O — secciones "Estilo" (cuadrícula/leyenda) y "Ejes" (etiquetas x/y)
 * del inspector de bloques Gráfico. Sólo aplican a los tipos "cartesianos"
 * que ChartBlockRenderer dibuja con CartesianGrid/XAxis/YAxis (bar, line,
 * area, sus variantes apiladas/agrupadas, y timeseries) — pie/scatter/
 * histogram/etc. no tienen ejes tradicionales y no muestran estas secciones.
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ChartBlockEditor } from "../ChartBlockEditor";
import type { ChartBlock, BlockDocument } from "../../types";

vi.mock("../../renderers/ChartBlockRenderer", () => ({
  ChartBlockRenderer: () => <div data-testid="chart-preview" />,
}));

const emptyDoc: BlockDocument = { version: 1, blocks: [] };

function barBlock(overrides: Partial<ChartBlock> = {}): ChartBlock {
  return {
    id: "c1",
    type: "chart",
    chartType: "bar",
    data: { labels: ["A", "B"], datasets: [{ label: "Serie 1", values: [1, 2] }] },
    ...overrides,
  };
}

describe("ChartBlockEditor — Estilo y Ejes (PLAN-O)", () => {
  it("tipo cartesiano (bar): muestra Estilo y Ejes", () => {
    render(<ChartBlockEditor block={barBlock()} doc={emptyDoc} onUpdate={vi.fn()} />);

    expect(screen.getByText("Estilo")).toBeInTheDocument();
    expect(screen.getByText("Cuadrícula")).toBeInTheDocument();
    expect(screen.getByText("Leyenda")).toBeInTheDocument();
    expect(screen.getByText("Ejes")).toBeInTheDocument();
    expect(screen.getByLabelText("Etiqueta eje X")).toBeInTheDocument();
    expect(screen.getByLabelText("Etiqueta eje Y")).toBeInTheDocument();
  });

  it("tipo sin ejes (torta): no muestra Estilo ni Ejes", () => {
    render(
      <ChartBlockEditor
        block={barBlock({ chartType: "pie" })}
        doc={emptyDoc}
        onUpdate={vi.fn()}
      />
    );

    expect(screen.queryByText("Ejes")).not.toBeInTheDocument();
    expect(screen.queryByText("Cuadrícula")).not.toBeInTheDocument();
  });

  it("Cuadrícula y Leyenda arrancan tildadas por defecto (showGrid/showLegend undefined)", () => {
    render(<ChartBlockEditor block={barBlock()} doc={emptyDoc} onUpdate={vi.fn()} />);

    expect(screen.getByLabelText("Cuadrícula")).toBeChecked();
    expect(screen.getByLabelText("Leyenda")).toBeChecked();
  });

  it("destildar Cuadrícula llama a onUpdate con showGrid: false", () => {
    const onUpdate = vi.fn();
    render(<ChartBlockEditor block={barBlock()} doc={emptyDoc} onUpdate={onUpdate} />);

    fireEvent.click(screen.getByLabelText("Cuadrícula"));
    expect(onUpdate).toHaveBeenCalledWith({ showGrid: false });
  });

  it("destildar Leyenda llama a onUpdate con showLegend: false", () => {
    const onUpdate = vi.fn();
    render(<ChartBlockEditor block={barBlock()} doc={emptyDoc} onUpdate={onUpdate} />);

    fireEvent.click(screen.getByLabelText("Leyenda"));
    expect(onUpdate).toHaveBeenCalledWith({ showLegend: false });
  });

  it("escribir en Etiqueta eje X/Y llama a onUpdate con xAxisLabel/yAxisLabel", () => {
    const onUpdate = vi.fn();
    render(<ChartBlockEditor block={barBlock()} doc={emptyDoc} onUpdate={onUpdate} />);

    fireEvent.change(screen.getByLabelText("Etiqueta eje X"), { target: { value: "tiempo (s)" } });
    expect(onUpdate).toHaveBeenCalledWith({ xAxisLabel: "tiempo (s)" });

    fireEvent.change(screen.getByLabelText("Etiqueta eje Y"), { target: { value: "velocidad (m/s)" } });
    expect(onUpdate).toHaveBeenCalledWith({ yAxisLabel: "velocidad (m/s)" });
  });

  it("timeseries también cuenta como tipo con ejes", () => {
    render(
      <ChartBlockEditor
        block={barBlock({ chartType: "timeseries" })}
        doc={emptyDoc}
        onUpdate={vi.fn()}
      />
    );

    expect(screen.getByText("Ejes")).toBeInTheDocument();
  });

  it("Etiquetas de valor arranca destildada y tildar llama con showValues: true", () => {
    const onUpdate = vi.fn();
    render(<ChartBlockEditor block={barBlock()} doc={emptyDoc} onUpdate={onUpdate} />);

    const checkbox = screen.getByLabelText("Etiquetas de valor");
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(onUpdate).toHaveBeenCalledWith({ showValues: true });
  });

  it("Grosor de línea: aparece sólo en tipos con trazo y llama con strokeWidth", () => {
    const onUpdate = vi.fn();
    const { rerender } = render(
      <ChartBlockEditor block={barBlock({ chartType: "line" })} doc={emptyDoc} onUpdate={onUpdate} />
    );

    const slider = screen.getByLabelText("Grosor de línea");
    fireEvent.change(slider, { target: { value: "3.5" } });
    expect(onUpdate).toHaveBeenCalledWith({ strokeWidth: 3.5 });

    rerender(<ChartBlockEditor block={barBlock()} doc={emptyDoc} onUpdate={onUpdate} />);
    expect(screen.queryByLabelText("Grosor de línea")).not.toBeInTheDocument();
  });
});

describe("ChartBlockEditor — tabla de datos editable (PLAN-O corrección)", () => {
  it("modo manual: una fila por etiqueta y una columna por serie", () => {
    render(<ChartBlockEditor block={barBlock()} doc={emptyDoc} onUpdate={vi.fn()} />);

    expect(screen.getByLabelText("Etiqueta de la fila 1")).toHaveValue("A");
    expect(screen.getByLabelText("Etiqueta de la fila 2")).toHaveValue("B");
    expect(screen.getByLabelText("Valor de la serie 1, fila 1")).toHaveValue("1");
    expect(screen.getByLabelText("Valor de la serie 1, fila 2")).toHaveValue("2");
    expect(screen.getByText("+ Agregar fila")).toBeInTheDocument();
  });

  it("editar una celda (blur) llama a onUpdate con el valor puesto en su fila", () => {
    const onUpdate = vi.fn();
    render(<ChartBlockEditor block={barBlock()} doc={emptyDoc} onUpdate={onUpdate} />);

    fireEvent.blur(screen.getByLabelText("Valor de la serie 1, fila 2"), {
      target: { value: "9" },
    });
    expect(onUpdate).toHaveBeenCalledWith({
      data: {
        labels: ["A", "B"],
        datasets: [{ label: "Serie 1", values: [1, 9] }],
      },
    });
  });

  it("+ Agregar fila agrega etiqueta vacía y un 0 en cada serie (con padding)", () => {
    const onUpdate = vi.fn();
    // Serie 2 más corta a propósito: el padding tiene que emparejarla.
    const block = barBlock({
      data: {
        labels: ["A", "B"],
        datasets: [
          { label: "S1", values: [1, 2] },
          { label: "S2", values: [5] },
        ],
      },
    });
    render(<ChartBlockEditor block={block} doc={emptyDoc} onUpdate={onUpdate} />);

    fireEvent.click(screen.getByText("+ Agregar fila"));
    expect(onUpdate).toHaveBeenCalledWith({
      data: {
        labels: ["A", "B", ""],
        datasets: [
          { label: "S1", values: [1, 2, 0] },
          { label: "S2", values: [5, 0, 0] },
        ],
      },
    });
  });

  it("eliminar una fila la saca de las etiquetas y de todas las series", () => {
    const onUpdate = vi.fn();
    const block = barBlock({
      data: {
        labels: ["A", "B"],
        datasets: [
          { label: "S1", values: [1, 2] },
          { label: "S2", values: [5, 6] },
        ],
      },
    });
    render(<ChartBlockEditor block={block} doc={emptyDoc} onUpdate={onUpdate} />);

    fireEvent.click(screen.getByLabelText("Eliminar fila 1"));
    expect(onUpdate).toHaveBeenCalledWith({
      data: {
        labels: ["B"],
        datasets: [
          { label: "S1", values: [2] },
          { label: "S2", values: [6] },
        ],
      },
    });
  });
});
