/**
 * FIX-FORMAS-RENDERER — el `ShapeBlockRenderer` buscaba el shape por
 * `shapeId` SOLO dentro de `block.collection` (la colección "activa"
 * del bloque). Si el docente agregaba una forma desde la pestaña
 * "Física" y luego cambiaba la colección activa, o si el bloque se
 * guardaba con la colección desincronizada, la forma desaparecía del
 * canvas. La herramienta "Formas" quedaba inutilizable — bug 7.7
 * de `docs/qa/test-parte-3-profesor.md`.
 *
 * FIX: el renderer ahora busca el shape en TODAS las colecciones
 * (igual que el editor), garantizando que cualquier forma agregada
 * se renderice sin importar la colección activa del bloque.
 */

import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { ShapeBlockRenderer } from "../ShapeBlockRenderer";
import { COLLECTIONS } from "../../shapes/collections";

describe("FIX-FORMAS-RENDERER: búsqueda cross-colección", () => {
  it("(a) renderiza una forma cuya shapeId está en una colección distinta a block.collection", () => {
    // Tomamos un shape de la colección 'fisica' (bombilla, capacitor, etc.)
    const fisicaShape = COLLECTIONS.fisica.shapes[0];
    expect(fisicaShape).toBeDefined();
    // El bloque dice ser de colección 'basica' pero la forma es de 'fisica'.
    const block = {
      type: "shape" as const,
      id: "blk-1",
      title: "Mi canvas",
      collection: "basica" as const,
      canvasWidth: 800,
      canvasHeight: 500,
      items: [
        { id: "item-1", shapeId: fisicaShape.id, x: 20, y: 20 },
      ],
      connectors: [],
    };
    const { container } = render(<ShapeBlockRenderer block={block} />);
    // FIX: el renderer inyecta el `shape.svg` con `dangerouslySetInnerHTML`
    // dentro de un div por item. Antes del fix, el shape NO se inyectaba
    // (el `find` filtraba por colección y devolvía undefined). El test
    // falla sin el fix: la búsqueda cross-colección encuentra el shape
    // y lo inyecta en el DOM.
    //
    // Validamos:
    //  - Hay al menos 2 `<svg>` (1 connectors layer + 1 forma).
    //  - Algún viewBox `0 0 60 60` (el canónico de los shapes del
    //    catálogo) está presente.
    const html = container.innerHTML;
    const svgCount = (html.match(/<svg /g) ?? []).length;
    expect(svgCount).toBeGreaterThanOrEqual(2);
    expect(html).toMatch(/viewBox="0 0 60 60"/);
  });

  it("(b) renderiza mezcla de shapes de distintas colecciones", () => {
    const basica = COLLECTIONS.basica.shapes[0];
    const electrica = COLLECTIONS.electrica.shapes[0];
    const logica = COLLECTIONS.logica.shapes[0];
    const block = {
      type: "shape" as const,
      id: "blk-2",
      title: "Mix",
      collection: "basica" as const,
      canvasWidth: 800,
      canvasHeight: 500,
      items: [
        { id: "i1", shapeId: basica.id, x: 10, y: 10 },
        { id: "i2", shapeId: electrica.id, x: 100, y: 10 },
        { id: "i3", shapeId: logica.id, x: 200, y: 10 },
      ],
      connectors: [],
    };
    const { container } = render(<ShapeBlockRenderer block={block} />);
    // FIX: 3 shapes embebidos + 1 connectors layer = al menos 4 <svg>.
    const svgCount = (container.innerHTML.match(/<svg /g) ?? []).length;
    expect(svgCount).toBeGreaterThanOrEqual(4);
  });

  it("(c) si el shapeId no existe en NINGUNA colección, se omite sin romper", () => {
    // Bloque con un item cuyo shapeId no existe en ninguna colección.
    // El renderer debe filtrarlo (no explotar). Como `items.length` no
    // es 0 (sigue habiendo 1 item registrado), el renderer cae al
    // branch con items; simplemente el item fantasma no se pinta. Esto
    // es el comportamiento del editor: si alguien edita un shapeId
    // inexistente, el item queda en la lista pero no se visualiza.
    const block = {
      type: "shape" as const,
      id: "blk-3",
      title: "Hueco",
      collection: "basica" as const,
      canvasWidth: 800,
      canvasHeight: 500,
      items: [
        { id: "i1", shapeId: "no-existe", x: 0, y: 0 },
      ],
      connectors: [],
    };
    const { container } = render(<ShapeBlockRenderer block={block} />);
    // No debe haber ningún svg de shape (sólo el connectors layer vacío).
    const html = container.innerHTML;
    const shapeSvgs = (html.match(/<svg viewBox="0 0 60 60"/g) ?? []).length;
    expect(shapeSvgs).toBe(0);
    // El contenedor del canvas sigue presente (buscamos por la
    // presencia de un `<svg>` con marker de arrow-renderer, único
    // del renderer, no del editor).
    expect(container.querySelector("#arrow-renderer")).toBeTruthy();
  });

  it("(d) placeholder 'Sin formas agregadas' cuando el bloque está vacío", () => {
    const block = {
      type: "shape" as const,
      id: "blk-4",
      title: "Vacío",
      collection: "basica" as const,
      canvasWidth: 800,
      canvasHeight: 500,
      items: [],
      connectors: [],
    };
    const { container } = render(<ShapeBlockRenderer block={block} />);
    expect(container.textContent).toContain("Sin formas agregadas");
  });
});
