/**
 * QA-FIX-02 — Descarga de material didáctico (Q7).
 *
 * Verifica el cambio del front en ProfesorMateriales:
 *   - El botón "Descargar" es un <button>, NO un <a href download>.
 *   - El click NO navega a una URL que carecería del header Authorization.
 *   - El click dispara un fetch autenticado a /api/materiales/:id/download.
 *   - La respuesta se ofrece como blob y se descarga con el filename
 *     del header Content-Disposition del back.
 *
 * Contexto Q7: el síntoma original era un <a href download> que NO
 * enviaba Authorization, y un back sin endpoint ni Content-Disposition
 * → 401 + descarga como "download.json". Esta página lockea el fix.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { useAuth } from "../../auth/use-auth";

const mockGet = vi.fn();
const mockPost = vi.fn();

vi.mock("../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockGet(...args),
  apiPost: (...args: unknown[]) => mockPost(...args),
  getAuthToken: () => "test-token",
}));

vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

const mockCreateObjectURL = vi.fn(() => "blob:fake-url");
const mockRevokeObjectURL = vi.fn();
let lastBlobDownloadName: string | null = null;

beforeEach(() => {
  if (typeof URL.createObjectURL !== "function" || mockCreateObjectURL.mock.calls.length === 0) {
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: mockCreateObjectURL,
    });
  }
  if (typeof URL.revokeObjectURL !== "function") {
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: mockRevokeObjectURL,
    });
  }
  lastBlobDownloadName = null;
  // Espía clicks en anchors programáticos para capturar el nombre.
  const origClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function (this: HTMLAnchorElement) {
    lastBlobDownloadName = this.download ?? null;
    // No llamar a origClick para no navegar (jsdom abriría blob:fake-url).
    void origClick;
  };
});

import ProfesorMateriales from "../ProfesorMateriales";

const TEACHER = {
  id: "teacher-1",
  name: "Docente Demo",
  role: "TEACHER" as const,
  schoolId: "escuela-1",
};

const ITEMS = [
  {
    id: "mat-1",
    titulo: "Sumas y Restas",
    materia: "Matemática",
    tipo: "cuestionario" as const,
    autor: "teacher-1",
    escuelaId: "escuela-1",
    compartido: true,
    createdAt: "2024-01-01T00:00:00Z",
  },
];

function setup() {
  mockGet.mockResolvedValue({ items: ITEMS });
  mockPost.mockResolvedValue({ ok: true });
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user: TEACHER,
    loginAs: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  });
  return render(
    <MemoryRouter>
      <ProfesorMateriales />
    </MemoryRouter>,
  );
}

describe("QA-FIX-02: ProfesorMateriales descarga (Q7)", () => {
  it("renderiza 'Descargar' como <button>, NO como <a href download>", async () => {
    setup();
    const btn = await screen.findByRole("button", { name: /descargar/i });
    expect(btn.tagName).toBe("BUTTON");
    // Candado: el bug original era un <a href="/api/materiales/.../download" download>;
    // si vuelve a aparecer, este test rompe antes de cualquier otra aserción.
    expect(btn.getAttribute("href")).toBeNull();
  });

  it("click en 'Descargar' llama a fetch con Authorization Bearer", async () => {
    const realFetch = global.fetch;
    const fetchMock = vi.fn(async () => {
      return new Response(JSON.stringify({}), {
        status: 200,
        headers: { "content-disposition": 'attachment; filename="Sumas_y_Restas.json"' },
      });
    });
    global.fetch = fetchMock as unknown as typeof fetch;
    try {
      setup();
      const btn = await screen.findByRole("button", { name: /descargar/i });
      fireEvent.click(btn);
      await waitFor(() => {
        expect(fetchMock).toHaveBeenCalledTimes(1);
      });
      const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
      expect(url).toBe("/api/materiales/mat-1/download");
      const headers = (init.headers ?? {}) as Record<string, string>;
      expect(headers.Authorization).toBe("Bearer test-token");
    } finally {
      global.fetch = realFetch;
    }
  });

  it("click en 'Descargar' usa el filename del header Content-Disposition", async () => {
    const realFetch = global.fetch;
    const fetchMock = vi.fn(async () => {
      return new Response(JSON.stringify({}), {
        status: 200,
        headers: { "content-disposition": 'attachment; filename="Sumas_y_Restas.json"' },
      });
    });
    global.fetch = fetchMock as unknown as typeof fetch;
    try {
      setup();
      const btn = await screen.findByRole("button", { name: /descargar/i });
      fireEvent.click(btn);
      await waitFor(() => {
        expect(lastBlobDownloadName).toBe("Sumas_y_Restas.json");
      });
    } finally {
      global.fetch = realFetch;
    }
  });

  it("click en 'Descargar' muestra mensaje de error si el back responde no-OK", async () => {
    const realFetch = global.fetch;
    const fetchMock = vi.fn(async () => {
      return new Response(JSON.stringify({ error: "forbidden" }), { status: 403 });
    });
    global.fetch = fetchMock as unknown as typeof fetch;
    try {
      setup();
      const btn = await screen.findByRole("button", { name: /descargar/i });
      fireEvent.click(btn);
      const errMsg = await screen.findByText(/error al descargar/i);
      expect(errMsg).toBeInTheDocument();
    } finally {
      global.fetch = realFetch;
    }
  });
});
