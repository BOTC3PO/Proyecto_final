import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { AnnotationLayer } from "../AnnotationLayer";
import type { MapaAnotacion } from "../types";

/** Proyector identidad: pasa lon/lat tal cual a coords SVG. */
const projectId = (lon: number, lat: number): [number, number] => [lon, lat];

describe("AnnotationLayer", () => {
  it("renderiza una anotación de tipo texto como <text>", () => {
    const anotaciones: MapaAnotacion[] = [
      { id: "t1", tipo: "texto", lat: 10, lon: 20, contenido: "Hola mundo" },
    ];
    const { container } = render(
      <svg>
        <AnnotationLayer
          anotaciones={anotaciones}
          project={projectId}
          selectedId={null}
          onSelect={() => {}}
          editable={false}
        />
      </svg>,
    );
    const text = container.querySelector("text");
    expect(text).toBeTruthy();
    expect(text?.textContent).toBe("Hola mundo");
    expect(text?.getAttribute("font-size")).toBe("14");
  });

  it("respeta tamano y color personalizados en texto", () => {
    const anotaciones: MapaAnotacion[] = [
      { id: "t1", tipo: "texto", lat: 0, lon: 0, contenido: "X", tamano: 22, color: "#ff0000" },
    ];
    const { container } = render(
      <svg>
        <AnnotationLayer
          anotaciones={anotaciones}
          project={projectId}
          selectedId={null}
          onSelect={() => {}}
          editable={false}
        />
      </svg>,
    );
    const text = container.querySelector("text");
    expect(text?.getAttribute("font-size")).toBe("22");
    expect(text?.getAttribute("fill")).toBe("#ff0000");
  });

  it("renderiza una ruta de 2 puntos como <polyline>", () => {
    const anotaciones: MapaAnotacion[] = [
      { id: "r1", tipo: "ruta", puntos: [[0, 0], [10, 10]] },
    ];
    const { container } = render(
      <svg>
        <AnnotationLayer
          anotaciones={anotaciones}
          project={projectId}
          selectedId={null}
          onSelect={() => {}}
          editable={false}
        />
      </svg>,
    );
    // Hay dos <polyline>: el visible y el invisible (para hit-testing).
    const polylines = container.querySelectorAll("polyline");
    expect(polylines).toHaveLength(2);
    const visible = polylines[0];
    expect(visible.getAttribute("points")).toBe("0,0 10,10");
  });

  it("una ruta con flechaFinal registra un marker SVG y le apunta con marker-end", () => {
    const anotaciones: MapaAnotacion[] = [
      { id: "r1", tipo: "ruta", puntos: [[0, 0], [10, 10]], flechaFinal: true },
    ];
    const { container } = render(
      <svg>
        <AnnotationLayer
          anotaciones={anotaciones}
          project={projectId}
          selectedId={null}
          onSelect={() => {}}
          editable={false}
        />
      </svg>,
    );
    const marker = container.querySelector(`marker#arrow-r1`);
    expect(marker).toBeTruthy();
    const visible = container.querySelectorAll("polyline")[0];
    expect(visible.getAttribute("marker-end")).toBe("url(#arrow-r1)");
  });

  it("una ruta con < 2 puntos no se renderiza", () => {
    const anotaciones: MapaAnotacion[] = [
      { id: "r1", tipo: "ruta", puntos: [[0, 0]] },
    ];
    const { container } = render(
      <svg>
        <AnnotationLayer
          anotaciones={anotaciones}
          project={projectId}
          selectedId={null}
          onSelect={() => {}}
          editable={false}
        />
      </svg>,
    );
    expect(container.querySelectorAll("polyline")).toHaveLength(0);
  });
});
