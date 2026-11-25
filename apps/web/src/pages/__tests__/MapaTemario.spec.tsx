import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MapaTemario from "../MapaTemario";
import type { DatosMapa } from "../../lib/mapaTemario";

vi.mock("../../i18n/I18nContext", () => ({ useI18n: () => ({ t: (k: string) => k, lang: "es" }) }));
const usuario = vi.fn();
vi.mock("../../auth/use-auth", () => ({ useAuth: () => ({ user: usuario() }) }));
const apiGet = vi.fn();
vi.mock("../../lib/api", () => ({ apiGet: (...a: unknown[]) => apiGet(...a) }));

const DATOS: DatosMapa = {
  formato: 1,
  caminos: [
    {
      id: "numerico",
      titulo: "Numérico",
      secciones: [
        { id: "general", titulo: null, modulos: ["a", "b"] },
        { id: "economia", titulo: "Economía", modulos: ["c", "e"] },
      ],
    },
    { id: "materia-ciudadania-digital", materia: "ciudadania-digital", secciones: [{ id: "general", titulo: null, modulos: ["z"] }] },
  ],
  modulos: {
    a: { t: "Conteo", m: "matematica" },
    b: { t: "Porcentaje", m: "matematica", d: ["a"] },
    c: { t: "Interés simple", m: "economia", d: ["b"] },
    e: { t: "Examen de economía", m: "economia", x: 1, d: ["c"] },
    z: { t: "Huella digital", m: "ciudadania-digital" },
  },
};

function montar(ruta = "/mapa-temario") {
  return render(
    <MemoryRouter initialEntries={[ruta]}>
      <MapaTemario />
    </MemoryRouter>,
  );
}

describe("MapaTemario", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, json: async () => DATOS })));
    usuario.mockReturnValue(null);
    apiGet.mockReset();
    Element.prototype.scrollTo = vi.fn();
  });
  afterEach(() => vi.unstubAllGlobals());

  it("lista los caminos (el de materia con su nombre) y dibuja la primera sección", async () => {
    montar();
    expect(await screen.findByRole("heading", { level: 2, name: "Numérico" })).toBeTruthy();
    const nav = screen.getByRole("navigation", { name: "mapaTemario.caminos" });
    expect(within(nav).getByRole("button", { name: /Ciudadanía digital/ })).toBeTruthy();
    const lienzo = screen.getByTestId("lienzo-mapa");
    expect(within(lienzo).getByRole("button", { name: /Conteo/ })).toBeTruthy();
    expect(within(lienzo).queryByRole("button", { name: /Interés simple/ })).toBeNull();
    expect(screen.getAllByRole("tab")).toHaveLength(2);
    expect(apiGet).not.toHaveBeenCalled(); // sin sesión no pide progreso
  });

  it("los prerrequisitos de otra sección se listan y llevan a su sección", async () => {
    montar("/mapa-temario?camino=numerico&seccion=economia");
    await screen.findByText("mapaTemario.vieneDe");
    fireEvent.click(screen.getByRole("button", { name: "Porcentaje" }));
    const lienzo = screen.getByTestId("lienzo-mapa");
    expect(within(lienzo).getByRole("button", { name: /Porcentaje/ }).getAttribute("aria-pressed")).toBe("true");
  });

  it("elegir un módulo muestra su resumen y el enlace; la búsqueda lleva al módulo", async () => {
    montar();
    const lienzo = await screen.findByTestId("lienzo-mapa");
    fireEvent.click(within(lienzo).getByRole("button", { name: /Porcentaje/ }));
    expect(screen.getByRole("link", { name: "mapaTemario.abrir" }).getAttribute("href")).toBe("/modulos/b");
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "interes" } });
    fireEvent.click(screen.getByRole("button", { name: /Interés simple/ }));
    expect(screen.getByRole("tab", { name: /Economía/ }).getAttribute("aria-selected")).toBe("true");
  });

  it("con sesión pinta el progreso y cuenta los completados", async () => {
    usuario.mockReturnValue({ id: "u1" });
    apiGet.mockResolvedValue({ items: [{ moduloId: "a", status: "completado" }, { moduloId: "b", status: "en_progreso" }] });
    montar();
    expect((await screen.findAllByText(/mapaTemario\.hechos/)).length).toBe(2); // uno por camino
    expect(apiGet).toHaveBeenCalledWith("/api/progreso?usuarioId=u1");
    const lienzo = screen.getByTestId("lienzo-mapa");
    expect(within(lienzo).getByRole("button", { name: /Conteo/ }).className).toMatch(/green/);
  });

  it("si el archivo no carga, avisa", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 404 })));
    montar();
    expect((await screen.findByRole("alert")).textContent).toBe("mapaTemario.error");
  });
});
