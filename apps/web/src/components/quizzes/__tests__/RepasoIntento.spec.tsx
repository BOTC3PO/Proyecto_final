import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const apiGet = vi.fn();
vi.mock("../../../lib/api", () => ({ apiGet: (...a: unknown[]) => apiGet(...a) }));

import RepasoIntento, { etiquetaDeGrupo, mensajeInicial, tonoDe, type Repaso } from "../RepasoIntento";
import { I18nContext } from "../../../i18n/I18nContext";
import { CATALOGS, LANGUAGES } from "../../../i18n";
import es from "../../../i18n/es.json";
import en from "../../../i18n/en.json";

const catalogo = (c: Record<string, string>) => (k: string) => c[k] ?? k;
const tEs = catalogo(es as Record<string, string>);

const grupo = (titulo: string, correctas: number, total: number, extra: Record<string, unknown> = {}) => ({
  tipo: "tema" as const, id: `cont-m--${titulo}`, titulo, moduloId: `cont-m--${titulo}`, correctas, total, porcentaje: Math.round((100 * correctas) / total), ...extra,
});
const repaso = (over: Partial<Repaso> = {}): Repaso => {
  const flojo = grupo("Teorema del seno", 0, 2);
  const bien = grupo("Razones trigonométricas", 2, 2);
  return {
    disponible: true, porcentaje: 50, umbral: 60, aprobado: false, score: 2, maxScore: 4,
    porGrupo: [flojo, bien], recomendados: [flojo],
    preguntas: [
      { id: "q1", prompt: "¿Cuánto es 2 + 3?", correcta: false, pendiente: false, explicacion: "Se suman los dos números.", grupo: "tema:x" },
      { id: "q2", prompt: "¿Cuánto es 1 + 1?", correcta: true, pendiente: false, explicacion: null, grupo: "tema:y" },
    ],
    ...over,
  };
};
const ver = (props: Record<string, unknown> = {}, c: Record<string, string> | null = null) => {
  const arbol = <MemoryRouter><RepasoIntento attemptId="a1" {...props} /></MemoryRouter>;
  return render(c ? <I18nContext.Provider value={{ lang: "en", setLang: () => {}, availableLanguages: LANGUAGES, t: catalogo(c) }}>{arbol}</I18nContext.Provider> : arbol);
};

describe("RepasoIntento", () => {
  beforeEach(() => { apiGet.mockReset(); });
  afterEach(() => cleanup());

  it("muestra en qué temas falló, recomienda repasar el flojo y lista las preguntas falladas con su explicación", async () => {
    apiGet.mockResolvedValue(repaso());
    ver();
    expect(await screen.findByText("En qué temas fallaste")).toBeTruthy();
    expect(apiGet).toHaveBeenCalledWith("/api/quiz-attempts/a1/repaso");
    const lista = screen.getByRole("list", { name: "Resultado por tema" });
    expect(within(lista).getByText("Teorema del seno")).toBeTruthy();
    expect(within(lista).getByText(/0 de 2 · 0 %/)).toBeTruthy();
    expect(within(lista).getByText(/2 de 2 · 100 %/)).toBeTruthy();
    expect(screen.getByText(/Todavía no llegás al 60 %/)).toBeTruthy();
    const abrir = screen.getByRole("link", { name: /abrir el tema/i });
    expect(abrir.getAttribute("href")).toBe(`/modulos/${encodeURIComponent("cont-m--Teorema del seno")}`);
    expect(screen.getByText("Preguntas para revisar (1)")).toBeTruthy();
    expect(screen.getByText("Se suman los dos números.")).toBeTruthy();
    expect(screen.queryByText("¿Cuánto es 1 + 1?")).toBeNull(); // las acertadas no se listan
  });

  it("con ocultarPuntos no muestra porcentajes ni cuentas, pero sí qué repasar", async () => {
    apiGet.mockResolvedValue(repaso());
    ver({ ocultarPuntos: true });
    await screen.findByText("En qué temas fallaste");
    expect(screen.queryByRole("list", { name: "Resultado por tema" })).toBeNull();
    expect(screen.queryByText(/ de 2 · /)).toBeNull();
    expect(screen.getByRole("link", { name: /abrir el tema/i })).toBeTruthy();
  });

  it("no renderiza nada si el intento no tiene detalle por tema", async () => {
    apiGet.mockResolvedValue(repaso({ disponible: false, porGrupo: [], recomendados: [], preguntas: [] }));
    const { container } = ver();
    await waitFor(() => expect(apiGet).toHaveBeenCalled());
    expect(container.querySelector("[data-testid=repaso-intento]")).toBeNull();
  });

  it("no renderiza nada (ni rompe) si falla la carga", async () => {
    apiGet.mockImplementation(() => Promise.reject(new Error("sin conexión")));
    const { container } = ver();
    await waitFor(() => expect(apiGet).toHaveBeenCalled());
    await new Promise((r) => setTimeout(r, 0));
    expect(container.querySelector("[data-testid=repaso-intento]")).toBeNull();
  });

  it("en un examen de idiomas habla de partes, no de temas, y no ofrece abrir temas", async () => {
    const lectura = { tipo: "seccion" as const, id: "reading", titulo: "reading", moduloId: null, correctas: 1, total: 4, porcentaje: 25 };
    apiGet.mockResolvedValue(repaso({ porGrupo: [lectura], recomendados: [] }));
    ver();
    expect(await screen.findByText("En qué parte fallaste")).toBeTruthy();
    expect(screen.getByText("Lectura")).toBeTruthy();
    expect(screen.queryByRole("link", { name: /abrir el tema/i })).toBeNull();
  });
});

describe("reglas del repaso", () => {
  it("el color sigue el umbral y el 80 %", () => {
    expect(tonoDe(59, 60)).toBe("danger");
    expect(tonoDe(60, 60)).toBe("warning");
    expect(tonoDe(79, 60)).toBe("warning");
    expect(tonoDe(80, 60)).toBe("success");
  });
  it("el mensaje distingue desaprobado, aprobado con temas flojos y aprobado limpio", () => {
    const base = { umbral: 60, porGrupo: [grupo("A", 1, 1)] };
    expect(mensajeInicial({ ...base, aprobado: false, recomendados: [] }, false, tEs)).toMatch(/No es un final/);
    expect(mensajeInicial({ ...base, aprobado: true, recomendados: [grupo("B", 0, 1)] }, false, tEs)).toMatch(/afianzar/);
    expect(mensajeInicial({ ...base, aprobado: true, recomendados: [] }, false, tEs)).toMatch(/Bien hecho/);
  });
  it("traduce las secciones de idiomas y deja el resto igual", () => {
    expect(etiquetaDeGrupo({ tipo: "seccion", titulo: "listening" }, tEs)).toBe("Comprensión auditiva");
    expect(etiquetaDeGrupo({ tipo: "tema", titulo: "listening" }, tEs)).toBe("listening");
  });
});

describe("idiomas del repaso", () => {
  it("se muestra en el idioma elegido", async () => {
    apiGet.mockResolvedValue(repaso());
    ver({}, en as Record<string, string>);
    expect(await screen.findByText("Topics where you missed questions")).toBeTruthy();
    expect(screen.getByText(/You haven't reached 60% yet/)).toBeTruthy();
    expect(screen.getByText("0 of 2 · 0%")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Open the topic" })).toBeTruthy();
    expect(screen.getByText("Questions to review (1)")).toBeTruthy();
  });

  it("los 15 catálogos traducen cada texto y conservan los marcadores {umbral}, {correctas}, {total}, {porcentaje} y {n}", () => {
    const claves = Object.keys(es).filter((k) => k.startsWith("repaso."));
    expect(claves.length).toBe(17);
    const marcadores = (txt: string) => (txt.match(/\{[a-z]+\}/g) ?? []).sort().join();
    const problemas: string[] = [];
    for (const [lang, cat] of Object.entries(CATALOGS)) {
      for (const k of claves) {
        const v = (cat as Record<string, string>)[k];
        if (!v || !v.trim()) { problemas.push(`${lang}: falta ${k}`); continue; }
        if (marcadores(v) !== marcadores((es as Record<string, string>)[k])) problemas.push(`${lang}: ${k} cambió los marcadores`);
        // En idiomas con otra escritura, un texto igual al español es una traducción que falta (en los latinos puede coincidir).
        if (["ja", "ko", "zh", "ar", "hi", "ru"].includes(lang) && v === (es as Record<string, string>)[k]) problemas.push(`${lang}: ${k} quedó sin traducir`);
      }
    }
    expect(problemas).toEqual([]);
  });
});
