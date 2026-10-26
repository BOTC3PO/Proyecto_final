/**
 * Los diagramas del temario (`content/material/**\/herramientas/*.json`) se importan como ítems "Herramienta":
 * acá se comprueba que cada uno sea un BlockDocument válido y que la web lo pueda dibujar.
 */
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { evaluate } from "mathjs";
import katex from "katex";
import { BlockRenderer } from "../BlockRenderer";
import { dividirEtiqueta } from "../renderers/FlowBlockRenderer";
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
// Wikimedia limita (HTTP 429) los enlaces directos al archivo original y sólo sirve miniaturas de anchos
// estándar (otros anchos dan HTTP 400): las imágenes del temario tienen que ser /thumb/…/<ancho>px-….
const MINIATURA = /^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/[^/]+\/(?:lossy-)?(?:page\d+-)?(250|330|500|960|1280)px-[^/]+$/;

function teorias(dir: string, salida: string[] = []): string[] {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) teorias(p, salida);
    else if (n === "teoria.md") salida.push(p);
  }
  return salida;
}

const formas = new Set(Object.values(COLLECTIONS).flatMap((c) => c.shapes.map((s) => s.id)));

describe("diagramas del temario", () => {
  it("hay diagramas", () => expect(todos.length).toBeGreaterThan(100));

  for (const f of todos) {
    const crudo = JSON.parse(readFileSync(f, "utf-8")) as { standalone?: unknown };
    if (crudo.standalone) continue; // mapas y líneas de tiempo: ver el describe de abajo
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
          // El nodo mide 150×52: entran 3 renglones de ~22 caracteres (web y móvil cortan igual).
          for (const n of b.nodes) {
            const lineas = dividirEtiqueta(n.label);
            expect(lineas.length, `etiqueta larga: ${n.label}`).toBeLessThanOrEqual(3);
            expect(Math.max(...lineas.map((l) => l.length)), `palabra larga: ${n.label}`).toBeLessThanOrEqual(24);
            expect(n.x >= 0 && n.y >= 0, `coordenada negativa: ${n.label}`).toBe(true);
          }
          // Dos nodos no se pisan.
          for (const a of b.nodes) for (const c of b.nodes) {
            if (a.id < c.id) expect(Math.abs(a.x - c.x) >= 150 || Math.abs(a.y - c.y) >= 52, `se pisan: ${a.label} / ${c.label}`).toBe(true);
          }
        }
        if (b.type === "math") {
          for (const fn of b.functions) {
            const ys = Array.from({ length: 21 }, (_, k) => b.xMin + ((b.xMax - b.xMin) * k) / 20).map((x) => {
              try { return Number(evaluate(fn.expression, { x })); } catch { return NaN; }
            });
            expect(ys.some(Number.isFinite), `función que no se puede evaluar: ${fn.expression}`).toBe(true);
          }
        }
        if (b.type === "latex") expect(() => katex.renderToString(b.content, { throwOnError: true })).not.toThrow();
        if (b.type === "image") expect(b.url.startsWith("/") || MINIATURA.test(b.url), b.url).toBe(true);
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

type Anotacion = { tipo: string; lat?: number; lon?: number; puntos?: [number, number][]; desde?: [number, number]; hasta?: [number, number]; etiqueta?: string; contenido?: string };

describe("herramientas standalone del temario (mapas)", () => {
  const mapas = todos.filter((f) => (JSON.parse(readFileSync(f, "utf-8")) as { standalone?: { tool?: string } }).standalone?.tool === "mapa");
  for (const f of mapas) {
    it(relative(RAIZ, f), () => {
      const { titulo, standalone: m } = JSON.parse(readFileSync(f, "utf-8")) as {
        titulo: string;
        standalone: { tool: string; modo: string; escala: string; anotaciones: Anotacion[]; bounds?: { x: number; y: number; w: number; h: number } };
      };
      expect(titulo.length).toBeGreaterThan(3);
      expect(["political", "physical"]).toContain(m.modo);
      expect(["110m", "50m"]).toContain(m.escala);
      expect(m.anotaciones.length).toBeGreaterThan(0);
      const ok = ([lon, lat]: [number, number]) => lon >= -180 && lon <= 180 && lat >= -85 && lat <= 85;
      for (const a of m.anotaciones) {
        if (a.tipo === "marcador" || a.tipo === "texto") expect(ok([a.lon!, a.lat!]), JSON.stringify(a)).toBe(true);
        if (a.tipo === "zona") expect(a.puntos!.length >= 3 && a.puntos!.every(ok)).toBe(true);
        if (a.tipo === "ruta") expect(a.puntos!.length >= 2 && a.puntos!.every(ok)).toBe(true);
      }
      if (m.bounds) {
        const { x, y, w, h } = m.bounds;
        expect(x >= 0 && y >= 0 && w > 0 && h > 0 && x + w <= 1.0001 && y + h <= 1.0001).toBe(true);
      }
    });
  }
});

describe("imágenes enlazadas en la teoría", () => {
  it("son miniaturas de Wikimedia de ancho estándar", () => {
    const malas: string[] = [];
    for (const f of teorias(RAIZ)) {
      for (const m of readFileSync(f, "utf-8").matchAll(/https:\/\/upload\.wikimedia\.org\/[^)\s"]+/g)) {
        if (!MINIATURA.test(m[0])) malas.push(`${relative(RAIZ, f)}: ${m[0]}`);
      }
    }
    expect(malas).toEqual([]);
  });
});
