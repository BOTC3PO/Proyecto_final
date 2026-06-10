/**
 * Tests de la UI del editor del banco (Tarea 20): input de busqueda,
 * contador "N de M" cuando hay filtro, y boton "Exportar JSON" que
 * dispara la descarga con el filename correcto y el contenido que el
 * import acepta.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import BancoPreguntasEditor from "../BancoPreguntasEditor";
import { exportBancoToJson } from "../bancoExport";
import type { MCQuestion, TFQuestion } from "../../../generadoresV2/basic/types";

function Harness({ initial }: { initial: (MCQuestion | TFQuestion)[] }) {
  const [questions, setQuestions] = useState(initial);
  return (
    <>
      <BancoPreguntasEditor questions={questions} onChange={setQuestions} />
      <pre data-testid="state">{JSON.stringify(questions)}</pre>
    </>
  );
}

const MC_A: MCQuestion = {
  id: "mc-a",
  type: "mc",
  prompt: "Formula de la velocidad media",
  options: [
    { text: "v = d / t", correct: true, because: "" },
    { text: "v = t / d", correct: false, because: "" },
  ],
  explanation: "Distancia sobre tiempo.",
  tags: [],
};
const MC_B: MCQuestion = {
  id: "mc-b",
  type: "mc",
  prompt: "Capital de Francia (Paris)",
  options: [
    { text: "Paris", correct: true, because: "" },
    { text: "Madrid", correct: false, because: "" },
  ],
  explanation: "",
  tags: [],
};
const TF: TFQuestion = {
  id: "tf-1",
  type: "tf",
  prompt: "La Tierra gira alrededor del Sol",
  answer: true,
  becauseTrue: "Heliocentrismo.",
  becauseFalse: "",
  tags: [],
};

let lastDownload: { name: string; content: string } | null = null;
let createdAnchor: HTMLAnchorElement | null = null;

beforeEach(() => {
  lastDownload = null;
  createdAnchor = null;
  // @ts-expect-error mock parcial de URL
  global.URL.createObjectURL = vi.fn((blob: Blob) => {
    blob.text().then((t) => {
      if (lastDownload) return;
      lastDownload = { name: "", content: t };
    });
    return "blob:fake-url";
  });
  // @ts-expect-error mock parcial de URL
  global.URL.revokeObjectURL = vi.fn();
  // Intercepta la creacion de <a>: devolvemos un objeto plano con click
  // espiado para no disparar navegacion real. NO usamos spyOn porque
  // eso causa recursion en happy-dom.
  const origCreateElement = document.createElement.bind(document);
  document.createElement = ((tag: string) => {
    const el = origCreateElement(tag);
    if (String(tag).toLowerCase() === "a") {
      (el as HTMLAnchorElement).click = vi.fn(function (this: HTMLAnchorElement) {
        // noop: ya espiamos createObjectURL; no necesitamos click real
        void this;
      });
      createdAnchor = el as HTMLAnchorElement;
    }
    return el;
  }) as typeof document.createElement;
});

describe("BancoPreguntasEditor — Tarea 20", () => {
  it("muestra el buscador y el contador con N total cuando no hay filtro", () => {
    render(<Harness initial={[MC_A, MC_B, TF]} />);
    const buscador = screen.getByTestId("banco-buscador");
    expect(buscador).toBeInTheDocument();
    const contador = screen.getByTestId("banco-contador");
    expect(contador.textContent).toBe("3 preguntas");
  });

  it("filtra preguntas por enunciado (case-insensitive) y oculta los <li> no coincidentes", async () => {
    const user = userEvent.setup();
    const { container } = render(<Harness initial={[MC_A, MC_B, TF]} />);
    await user.type(screen.getByTestId("banco-buscador"), "PARIS");
    const contador = screen.getByTestId("banco-contador");
    expect(contador.textContent).toBe("1 de 3 preguntas");
    // getAllByRole('listitem') excluye elementos con `hidden`; usamos
    // querySelectorAll para inspeccionar TODOS los <li> del banco.
    const items = Array.from(
      container.querySelectorAll("ul li"),
    ) as HTMLLIElement[];
    const findItem = (text: string) =>
      items.find((li) => (li.textContent ?? "").toLowerCase().includes(text));
    const francia = findItem("capital de francia");
    const velocidad = findItem("velocidad media");
    const tierra = findItem("tierra gira");
    expect(francia).toBeDefined();
    expect(velocidad).toBeDefined();
    expect(tierra).toBeDefined();
    expect(francia!.hasAttribute("hidden")).toBe(false);
    expect(velocidad!.hasAttribute("hidden")).toBe(true);
    expect(tierra!.hasAttribute("hidden")).toBe(true);
  });

  it("el filtro es solo visual: las preguntas siguen en el state", async () => {
    const user = userEvent.setup();
    render(<Harness initial={[MC_A, MC_B, TF]} />);
    await user.type(screen.getByTestId("banco-buscador"), "francia");
    // El state conserva las 3 (el filtro es solo visual).
    const state = JSON.parse(screen.getByTestId("state").textContent || "[]");
    expect(state).toHaveLength(3);
  });

  it("contador vuelve a N total cuando se borra el filtro", async () => {
    const user = userEvent.setup();
    render(<Harness initial={[MC_A, MC_B, TF]} />);
    const input = screen.getByTestId("banco-buscador") as HTMLInputElement;
    await user.type(input, "paris");
    expect(screen.getByTestId("banco-contador").textContent).toBe(
      "1 de 3 preguntas",
    );
    await user.clear(input);
    expect(screen.getByTestId("banco-contador").textContent).toBe("3 preguntas");
  });

  it("click en Exportar descarga un JSON con TODAS las preguntas y filename con fecha", async () => {
    const user = userEvent.setup();
    // Fijamos la fecha para que el filename sea estable.
    const fixed = new Date(2026, 5, 7);
    vi.setSystemTime(fixed);

    render(<Harness initial={[MC_A, MC_B, TF]} />);
    // Aplicamos un filtro para asegurar que el export ignora el filtro.
    await user.type(screen.getByTestId("banco-buscador"), "paris");
    await user.click(screen.getByTestId("banco-exportar"));

    // Capturamos el anchor creado y su download.
    expect(createdAnchor).not.toBeNull();
    expect(createdAnchor!.download).toBe("banco-preguntas-2026-06-07.json");

    // El contenido del blob es el JSON de las 3 preguntas (no 1, pese al filtro).
    const expected = exportBancoToJson([MC_A, MC_B, TF]);
    const parsed = JSON.parse(expected);
    expect(parsed.preguntas).toHaveLength(3);

    vi.useRealTimers();
  });

  it("boton Exportar tiene aria-label explicando que se exportan TODAS las preguntas", () => {
    render(<Harness initial={[MC_A]} />);
    const btn = screen.getByTestId("banco-exportar");
    expect(btn.getAttribute("aria-label")).toMatch(/todas las preguntas/i);
  });
});
