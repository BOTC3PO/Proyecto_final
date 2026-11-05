import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Descargas from "../Descargas";

const apiGetPublic = vi.fn();
vi.mock("../../lib/api", () => ({
  API_BASE_URL: "https://api.ejemplo.test/",
  apiGetPublic: (...a: unknown[]) => apiGetPublic(...a),
}));
vi.mock("../../i18n/I18nContext", () => ({ useI18n: () => ({ t: (k: string) => k, lang: "es" }) }));

const archivo = (archivo: string, plataforma: string, arquitectura: string | null) => ({ archivo, plataforma, arquitectura, bytes: 140e6, sha256: "ab".repeat(32) });

describe("Descargas (L8): instaladores de la app sin conexión", () => {
  beforeEach(() => apiGetPublic.mockReset());

  it("agrupa por sistema, en orden, con enlaces a la API y la arquitectura", async () => {
    apiGetPublic.mockResolvedValue({
      version: "0.1.0",
      archivos: [
        archivo("virtualbook-0.1.0-linux-navegador-i386.tar.gz", "linux-navegador", "i386"),
        archivo("virtualbook-0.1.0-windows-x64.exe", "windows", "x64"),
        archivo("virtualbook-0.1.0-android.apk", "android", "arm"),
      ],
    });
    render(<Descargas />);
    const titulos = (await screen.findAllByRole("heading", { level: 2 })).map((h) => h.textContent);
    expect(titulos).toEqual(["descargas.android.titulo", "descargas.windows.titulo", "descargas.linuxNavegador.titulo"]);
    const enlaces = screen.getAllByRole("link", { name: "descargas.descargar" }).map((a) => a.getAttribute("href"));
    expect(enlaces).toContain("https://api.ejemplo.test/api/offline/descargas/archivo/virtualbook-0.1.0-windows-x64.exe");
    expect(screen.getByText(/\.tar\.gz · descargas\.arq32/)).toBeTruthy();
    expect(screen.getByText(/\.exe · descargas\.arq64/)).toBeTruthy();
    expect(apiGetPublic).toHaveBeenCalledWith("/api/offline/descargas");
  });

  it("sin descargas publicadas lo dice; si la API falla, avisa", async () => {
    apiGetPublic.mockResolvedValueOnce({ version: null, archivos: [] });
    const { unmount } = render(<Descargas />);
    expect(await screen.findByText("descargas.vacio")).toBeTruthy();
    unmount();
    apiGetPublic.mockRejectedValueOnce(new Error("red"));
    render(<Descargas />);
    expect((await screen.findByRole("alert")).textContent).toBe("descargas.error");
  });
});
