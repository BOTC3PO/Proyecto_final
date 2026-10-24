/**
 * PLAN-G §2 — TTS completo + modo foco en ModuloDetail.
 *
 * Cubre:
 *  - extractTtsSegments conserva el blockId de origen (para resaltar el
 *    párrafo leído) y extractTextForTts sigue siendo su proyección.
 *  - Al iniciar la lectura aparecen los controles Pausar/Detener y el
 *    selector de velocidad; Pausar llama a speechSynthesis.pause().
 *  - La utterance usa el idioma del diccionario (es → es-AR).
 *  - El botón "Modo foco" oculta la grilla de info y los quizzes, y Esc
 *    lo desactiva.
 *  - El bloque que se está leyendo queda resaltado (ring) y aparece en
 *    el índice lateral.
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: { id: "u1", name: "Test", role: "STUDENT" } }),
}));

const mockApiGet = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockApiGet(...args),
  apiPost: vi.fn(async () => ({})),
}));

// Mock de window.speechSynthesis (no existe en jsdom).
const mockSpeak = vi.fn();
const mockPause = vi.fn();
const mockResume = vi.fn();
const mockCancel = vi.fn();

class FakeUtterance {
  text: string;
  lang = "";
  rate = 1;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(text: string) {
    this.text = text;
  }
}

beforeEach(() => {
  vi.clearAllMocks();
  Object.defineProperty(window, "speechSynthesis", {
    configurable: true,
    value: { speak: mockSpeak, pause: mockPause, resume: mockResume, cancel: mockCancel },
  });
  (window as unknown as { SpeechSynthesisUtterance: unknown }).SpeechSynthesisUtterance =
    FakeUtterance;
  mockApiGet.mockImplementation(async (path: string) => {
    if (path.startsWith("/api/modulos/")) {
      return {
        id: "mod-1",
        title: "Módulo TTS",
        description: "Descripción del módulo",
        subject: "Test",
        category: "Test",
        level: "basico",
        durationMinutes: 30,
        visibility: "publico",
        dependencies: [],
        quizzes: [],
        theoryItems: [
          { id: "t1", title: "Sección uno", type: "Texto", detail: "Primer párrafo de teoría." },
          { id: "t2", title: "Sección dos", type: "Texto", detail: "Segundo párrafo de teoría." },
        ],
      };
    }
    if (path === "/api/dictionary/languages") return { languages: ["es"] };
    return {};
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

// Importar DESPUÉS de los mocks.
import ModuloDetail, { extractTtsSegments, extractTextForTts } from "../ModuloDetail";

const renderAt = () =>
  render(
    <MemoryRouter initialEntries={["/modulos/mod-1"]}>
      <Routes>
        <Route path="/modulos/:id" element={<ModuloDetail />} />
      </Routes>
    </MemoryRouter>
  );

describe("PLAN-G §2: extractTtsSegments", () => {
  const module = {
    title: "Título",
    description: "Desc",
    theoryBlocks: [
      { id: "b1", title: "Intro", type: "Texto", detail: "Contenido uno." },
    ],
  };

  it("conserva el blockId del bloque de origen", () => {
    const segs = extractTtsSegments(module);
    expect(segs[0]).toEqual({ text: "Título" });
    expect(segs[1]).toEqual({ text: "Desc" });
    expect(segs[2]).toEqual({ text: "Intro", blockId: "b1" });
    expect(segs[3]).toEqual({ text: "Contenido uno.", blockId: "b1" });
  });

  it("extractTextForTts sigue siendo la proyección de los segmentos", () => {
    expect(extractTextForTts(module)).toEqual(["Título", "Desc", "Intro", "Contenido uno."]);
  });
});

describe("PLAN-G §2: controles TTS en ModuloDetail", () => {
  it("iniciar lectura muestra Pausar/Detener/velocidad; Pausar llama a pause()", async () => {
    renderAt();
    const leer = await screen.findByRole("button", { name: /leer en voz alta/i }, { timeout: 3000 });
    fireEvent.click(leer);

    const pausar = await screen.findByRole("button", { name: /pausar lectura/i });
    expect(screen.getByRole("button", { name: /detener lectura/i })).toBeInTheDocument();
    expect(screen.getByTitle(/velocidad de lectura/i)).toBeInTheDocument();

    fireEvent.click(pausar);
    expect(mockPause).toHaveBeenCalled();
    // Ahora el botón ofrece reanudar.
    expect(screen.getByRole("button", { name: /reanudar lectura/i })).toBeInTheDocument();
  });

  it("la utterance usa es-AR cuando el idioma del diccionario es 'es'", async () => {
    renderAt();
    const leer = await screen.findByRole("button", { name: /leer en voz alta/i }, { timeout: 3000 });
    fireEvent.click(leer);
    await waitFor(() => expect(mockSpeak).toHaveBeenCalled());
    const utterance = mockSpeak.mock.calls[0][0] as FakeUtterance;
    expect(utterance.lang).toBe("es-AR");
  });

  it("resalta el bloque leído cuando el TTS avanza hasta un bloque de teoría", async () => {
    renderAt();
    const leer = await screen.findByRole("button", { name: /leer en voz alta/i }, { timeout: 3000 });
    fireEvent.click(leer);
    await waitFor(() => expect(mockSpeak).toHaveBeenCalled());

    // Avanzar: título → descripción → título del bloque t1.
    for (let i = 0; i < 2; i++) {
      const u = mockSpeak.mock.calls[i][0] as FakeUtterance;
      u.onend?.();
    }
    await waitFor(() => {
      const wrapper = document.getElementById("teoria-t1");
      expect(wrapper?.className).toContain("ring-2");
    });
  });

  it("con 2+ items de teoría hay un índice lateral con sus títulos", async () => {
    renderAt();
    await screen.findByRole("button", { name: /leer en voz alta/i }, { timeout: 3000 });
    const nav = screen.getByRole("navigation", { name: /índice de teoría/i });
    expect(nav.textContent).toContain("Sección uno");
    expect(nav.textContent).toContain("Sección dos");
  });
});

describe("PLAN-G §2: modo foco", () => {
  it("activa/desactiva ocultando info y quizzes; Esc lo desactiva", async () => {
    renderAt();
    const focoBtn = await screen.findByRole("button", { name: /modo foco/i }, { timeout: 3000 });

    // Antes: la sección de quizzes está visible.
    expect(screen.getByText("Quizzes")).toBeVisible();

    fireEvent.click(focoBtn);
    expect(screen.getByRole("button", { name: /salir del foco/i })).toBeInTheDocument();
    // La sección de quizzes queda oculta (hidden).
    expect(screen.getByText("Quizzes").closest("section")?.className).toContain("hidden");
    // La teoría sigue visible.
    expect(screen.getByText("Primer párrafo de teoría.")).toBeVisible();

    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => {
      expect(screen.getByText("Quizzes").closest("section")?.className).not.toContain("hidden");
    });
  });
});
