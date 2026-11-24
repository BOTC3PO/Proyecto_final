import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Descargas, { recomendado } from "../Descargas";

const apiGetPublic = vi.fn();
vi.mock("../../lib/api", () => ({
  API_BASE_URL: "https://api.ejemplo.test/",
  apiGetPublic: (...a: unknown[]) => apiGetPublic(...a),
}));
vi.mock("../../i18n/I18nContext", () => ({ useI18n: () => ({ t: (k: string) => k, lang: "es" }) }));
const sistema = vi.fn();
vi.mock("../../lib/detectar-sistema", () => ({ detectarEsteEquipo: () => sistema() }));

const archivo = (archivo: string, plataforma: "android" | "windows" | "linux-escritorio" | "linux-navegador" | "completo", arquitectura: string | null) => ({ archivo, plataforma, arquitectura, bytes: 140e6, sha256: "ab".repeat(32) });

const ARCHIVOS = [
  archivo("virtualbook-0.1.0-linux-navegador-i386.tar.gz", "linux-navegador", "i386"),
  archivo("virtualbook-0.1.0-windows-x64.exe", "windows", "x64"),
  archivo("virtualbook-0.1.0-windows-x86.exe", "windows", "x86"),
  archivo("virtualbook-0.1.0-android.apk", "android", "arm"),
];

const PAQUETES = {
  formato: 1,
  paquetes: [
    { id: "temario-fisica", tipo: "contenido", archivo: "temario-fisica-1.0.sqlite.gz", bytes: 5e5 },
    { id: "diccionario-es", tipo: "diccionario", idioma: "es", archivo: "diccionario-es-2026-11-04.sqlite.gz", bytes: 27e6 },
    { id: "diccionario-fr", tipo: "diccionario", idioma: "fr", archivo: "diccionario-fr-2026-11-04.sqlite.gz", bytes: 70e6 },
    { id: "diccionario-de", tipo: "diccionario", idioma: "de", archivo: "diccionario-de-2026-11-04.sqlite.gz", bytes: 45e6 },
  ],
};

function respuestas(descargas: unknown, paquetes: unknown = PAQUETES) {
  apiGetPublic.mockImplementation((ruta: string) => {
    if (ruta === "/api/offline/descargas") return descargas instanceof Error ? Promise.reject(descargas) : Promise.resolve(descargas);
    if (ruta === "/api/offline/paquetes") return paquetes instanceof Error ? Promise.reject(paquetes) : Promise.resolve(paquetes);
    return Promise.reject(new Error(ruta));
  });
}

describe("Descargas (L8): instaladores de la app sin conexión", () => {
  beforeEach(() => {
    apiGetPublic.mockReset();
    sistema.mockReset();
    sistema.mockResolvedValue({ tipo: "otro" });
  });

  it("agrupa por sistema, en orden, con enlaces a la API y la arquitectura", async () => {
    respuestas({ version: "0.1.0", archivos: ARCHIVOS });
    render(<Descargas />);
    await screen.findByText("descargas.recomendado.otro");
    const titulos = screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent);
    expect(titulos).toEqual([
      "descargas.incluye.titulo",
      "descargas.android.titulo",
      "descargas.windows.titulo",
      "descargas.linuxNavegador.titulo",
      "descargas.extras.titulo",
      "descargas.preguntas.titulo",
    ]);
    const enlaces = screen.getAllByRole("link", { name: /descargas\.descargar/ }).map((a) => a.getAttribute("href"));
    expect(enlaces).toContain("https://api.ejemplo.test/api/offline/descargas/archivo/virtualbook-0.1.0-windows-x64.exe");
    expect(screen.getByText(/\.tar\.gz · descargas\.arq32/)).toBeTruthy();
    expect(screen.getAllByText(/\.exe · descargas\.arq64/).length).toBe(1);
    expect(screen.getAllByText("descargas.comoInstalar").length).toBe(3);
    expect(apiGetPublic).toHaveBeenCalledWith("/api/offline/descargas");
  });

  it("recomienda el instalador del equipo: Windows de 32 bits y Android", async () => {
    respuestas({ version: "0.1.0", archivos: ARCHIVOS });
    sistema.mockResolvedValue({ tipo: "windows", bits: 32 });
    const { unmount } = render(<Descargas />);
    const caja = (await screen.findByText("descargas.recomendado.titulo")).parentElement!;
    expect(within(caja).getByRole("link").getAttribute("href")).toMatch(/windows-x86\.exe$/);
    unmount();
    sistema.mockResolvedValue({ tipo: "android" });
    render(<Descargas />);
    const caja2 = (await screen.findByText("descargas.recomendado.titulo")).parentElement!;
    expect(within(caja2).getByRole("link").getAttribute("href")).toMatch(/android\.apk$/);
  });

  it("en Linux pide elegir y en iPhone o Mac dice que no hay app", async () => {
    respuestas({ version: "0.1.0", archivos: ARCHIVOS });
    sistema.mockResolvedValue({ tipo: "linux" });
    const { unmount } = render(<Descargas />);
    expect(await screen.findByText("descargas.recomendado.linux")).toBeTruthy();
    unmount();
    sistema.mockResolvedValue({ tipo: "no-disponible" });
    render(<Descargas />);
    expect(await screen.findByText("descargas.recomendado.noDisponible")).toBeTruthy();
  });

  it("ofrece como extra los diccionarios que la app no trae (no el de español ni las materias)", async () => {
    respuestas({ version: "0.1.0", archivos: ARCHIVOS });
    render(<Descargas />);
    const seccion = (await screen.findByText("descargas.extras.titulo")).closest("div")!.parentElement!;
    const enlaces = within(seccion).getAllByRole("link").map((a) => a.getAttribute("href"));
    expect(enlaces).toEqual([
      "https://api.ejemplo.test/api/offline/paquetes/archivo/diccionario-de-2026-11-04.sqlite.gz",
      "https://api.ejemplo.test/api/offline/paquetes/archivo/diccionario-fr-2026-11-04.sqlite.gz",
    ]);
  });

  it("si fallan los paquetes, la página sigue sin la sección de extras", async () => {
    respuestas({ version: "0.1.0", archivos: ARCHIVOS }, new Error("red"));
    render(<Descargas />);
    await screen.findByText("descargas.android.titulo");
    expect(screen.queryByText("descargas.extras.titulo")).toBeNull();
  });

  it("sin descargas publicadas lo dice; si la API falla, avisa", async () => {
    respuestas({ version: null, archivos: [] });
    const { unmount } = render(<Descargas />);
    expect(await screen.findByText("descargas.vacio")).toBeTruthy();
    unmount();
    respuestas(new Error("red"));
    render(<Descargas />);
    expect((await screen.findByRole("alert")).textContent).toBe("descargas.error");
  });
});

describe("recomendado", () => {
  it("sin el instalador publicado no recomienda nada", () => {
    expect(recomendado({ tipo: "windows", bits: 64 }, [])).toBeNull();
    expect(recomendado({ tipo: "linux" }, ARCHIVOS)).toBeNull();
    expect(recomendado(null, ARCHIVOS)).toBeNull();
  });
});
