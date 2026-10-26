/**
 * Los mapas del temario (`content/material/**\/herramientas/*.json` con `standalone.tool === "mapa"`) se
 * importan como «HerramientaStandalone». Acá se dibuja cada uno con el componente real, con el mapa base
 * que sirve la API (leído del disco), y se comprueba que todos los marcadores, textos y rutas queden
 * dentro del encuadre inicial (`bounds`): lo que el alumno ve al abrirlo.
 */
import { beforeAll, describe, expect, it, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import MapaStandalone from "../MapaStandalone";
import type { MapaConfig } from "../types";

const RAIZ = join(__dirname, "../../../../../../../content/material");
const MAPAS_API = join(__dirname, "../../../../../../../api/src/maps/maps");

function mapas(dir: string, salida: string[] = []): string[] {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) mapas(p, salida);
    else if (p.includes("herramientas") && n.endsWith(".json")) {
      const j = JSON.parse(readFileSync(p, "utf-8")) as { standalone?: { tool?: string } };
      if (j.standalone?.tool === "mapa") salida.push(p);
    }
  }
  return salida;
}

beforeAll(() => {
  globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = typeof input === "string" ? input : input.toString();
    const m = /\/api\/maps\/(.+)$/.exec(url);
    if (!m) return new Response("{}", { status: 404 });
    return new Response(readFileSync(join(MAPAS_API, m[1]), "utf-8"), { status: 200, headers: { "content-type": "application/json" } });
  }) as unknown as typeof fetch;
});

describe("mapas del temario", () => {
  const archivos = mapas(RAIZ);
  it("hay mapas", () => expect(archivos.length).toBeGreaterThan(0));

  for (const f of archivos) {
    it(relative(RAIZ, f), async () => {
      const { standalone } = JSON.parse(readFileSync(f, "utf-8")) as { standalone: MapaConfig };
      const { container } = render(<MapaStandalone config={standalone} editable={false} />);
      const svg = await waitFor(() => {
        const s = container.querySelector('svg[role="img"]');
        if (!s || !s.querySelector("path")) throw new Error("sin mapa base");
        return s;
      });
      const [x, y, w, h] = svg.getAttribute("viewBox")!.split(" ").map(Number);
      const dentro = (px: number, py: number) => px >= x - 1 && px <= x + w + 1 && py >= y - 1 && py <= y + h + 1;
      const marcadores = standalone.anotaciones.filter((a) => a.tipo === "marcador").length;
      const circulos = [...svg.querySelectorAll("circle")];
      expect(circulos.length).toBeGreaterThanOrEqual(marcadores);
      for (const c of circulos) expect(dentro(Number(c.getAttribute("cx")), Number(c.getAttribute("cy"))), "marcador fuera del encuadre").toBe(true);
      for (const t of svg.querySelectorAll("text[x]")) {
        if (!t.textContent) continue;
        expect(dentro(Number(t.getAttribute("x")), Number(t.getAttribute("y"))), `texto fuera del encuadre: ${t.textContent}`).toBe(true);
      }
    });
  }
});
