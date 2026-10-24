/**
 * Los diagramas del temario (`content/material/**\/herramientas/*.json`) se importan como ítems "Herramienta":
 * acá se comprueba que cada uno sea un BlockDocument válido y que la web lo pueda dibujar.
 */
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { BlockRenderer } from "../BlockRenderer";
import { COLLECTIONS } from "../shapes/collections";
import type { Block, BlockDocument } from "../types";

const RAIZ = join(__dirname, "../../../../../content/material");

function archivos(dir: string, salida: string[] = []): string[] {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) archivos(p, salida);
    else if (p.includes(`${join("", "herramientas")}`) && n.endsWith(".json")) salida.push(p);
  }
  return salida;
}
const todos = archivos(RAIZ);
const formas = new Set(Object.values(COLLECTIONS).flatMap((c) => c.shapes.map((s) => s.id)));

describe("diagramas del temario", () => {
  it("hay diagramas", () => expect(todos.length).toBeGreaterThan(100));

  for (const f of todos) {
    it(relative(RAIZ, f), () => {
      const j = JSON.parse(readFileSync(f, "utf-8")) as { titulo: string; blocks: Block[] };
      expect(j.titulo.length).toBeGreaterThan(3);
      expect(j.blocks.length).toBeGreaterThan(0);
      const ids = j.blocks.map((b) => b.id);
      expect(new Set(ids).size).toBe(ids.length);
      for (const b of j.blocks) {
        if (b.type === "flow") {
          const nodos = new Set(b.nodes.map((n) => n.id));
          expect(nodos.size).toBe(b.nodes.length);
          for (const e of b.edges) {
            expect(nodos.has(e.fromId) && nodos.has(e.toId)).toBe(true);
          }
        }
        if (b.type === "shape") for (const it of b.items) expect(formas.has(it.shapeId)).toBe(true);
        if (b.type === "table") for (const r of b.rows) expect(r.length).toBe(b.headers.length);
        if (b.type === "chart") expect(b.data!.datasets.every((d) => d.values.length === b.data!.labels.length)).toBe(true);
      }
      const doc: BlockDocument = { version: 1, blocks: j.blocks };
      const { container } = render(<BlockRenderer doc={doc} />);
      expect(container.innerHTML.length).toBeGreaterThan(50);
    });
  }
});
