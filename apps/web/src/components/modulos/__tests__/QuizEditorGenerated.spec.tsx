/**
 * Tests de la sección "Enunciados personalizados" (Tarea 04) en QuizEditorGenerated.
 * - Render: la sección existe colapsada por defecto.
 * - Al abrirla se ven 0 inputs y un botón "Agregar variante".
 * - Tras 2 clicks en "Agregar variante" + tipeo, onChange recibe
 *   params.enunciadoTemplates con 2 strings (filtrado: vacíos se descartan).
 */
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

vi.mock("../../lib/api", () => ({
  apiGet: vi.fn().mockRejectedValue(new Error("no api in test")),
}));

import QuizEditorGenerated from "../QuizEditorGenerated";

type Change = {
  generatorId?: string;
  generatorVersion?: number;
  params?: Record<string, unknown>;
  count?: number;
};

function Harness({ onChange }: { onChange: (next: Change) => void }) {
  const [params, setParams] = useState<Record<string, unknown>>({});
  return (
    <>
      <QuizEditorGenerated
        generatorId=""
        generatorVersion={1}
        params={params}
        count={3}
        onChange={(next) => {
          if (next.params) setParams((prev) => ({ ...prev, ...next.params }));
          onChange(next);
        }}
      />
      <pre data-testid="params">{JSON.stringify(params)}</pre>
    </>
  );
}

describe("QuizEditorGenerated - Enunciados personalizados (Tarea 04)", () => {
  it("la sección existe, está colapsada por defecto y se puede expandir", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Harness onChange={onChange} />);

    const toggle = screen.getByRole("button", {
      name: /enunciados personalizados \(opcional\)/i,
    });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    // Texto de ayuda fijo presente.
    expect(
      screen.getByText(/usá .*variable.* para interpolar valores del ejercicio/i)
    ).toBeTruthy();
  });

  it("agregar 2 variantes + tipeo propaga params.enunciadoTemplates con 2 strings", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Harness onChange={onChange} />);

    // Abrir la sección.
    await user.click(
      screen.getByRole("button", { name: /enunciados personalizados \(opcional\)/i })
    );

    // 0 variantes inicialmente: no hay inputs etiquetados "Variante de enunciado N".
    expect(screen.queryByLabelText(/variante de enunciado 1/i)).toBeNull();

    // Agregar 2.
    const addBtn = screen.getByRole("button", { name: /agregar variante/i });
    await user.click(addBtn);
    await user.click(addBtn);

    // Inputs editables. Usamos fireEvent.change porque user.type interpreta
    // su segundo argumento como key descriptor (formato {a}, {Enter}) y
    // nuestras plantillas usan {variable|formato} que rompería ese parser.
    const input1 = screen.getByLabelText(/variante de enunciado 1/i);
    const input2 = screen.getByLabelText(/variante de enunciado 2/i);
    fireEvent.change(input1, { target: { value: "Calculá la {operacion|suma}" } });
    fireEvent.change(input2, { target: { value: "Resolvé {ejercicio|1}" } });

    // Ultima llamada a onChange debe traer params.enunciadoTemplates con 2 strings.
    const lastCall = onChange.mock.calls.at(-1)?.[0] as Change | undefined;
    expect(lastCall).toBeTruthy();
    expect(lastCall?.params).toBeTruthy();
    expect(lastCall?.params?.enunciadoTemplates).toEqual([
      "Calculá la {operacion|suma}",
      "Resolvé {ejercicio|1}",
    ]);
  });

  it("si se eliminan todas las variantes, params.enunciadoTemplates se omite", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Harness onChange={onChange} />);

    await user.click(
      screen.getByRole("button", { name: /enunciados personalizados \(opcional\)/i })
    );

    // Agregar 1 variante y tipear.
    await user.click(screen.getByRole("button", { name: /agregar variante/i }));
    fireEvent.change(screen.getByLabelText(/variante de enunciado 1/i), {
      target: { value: "X" },
    });

    // Ahora eliminar la fila: debe quedar length 0 y la clave se omite.
    await user.click(screen.getByRole("button", { name: /eliminar variante 1/i }));

    const calls = onChange.mock.calls.map((c) => c[0] as Change);
    const last = calls.at(-1);
    expect(last).toBeTruthy();
    expect(last?.params).toBeTruthy();
    expect(
      Object.prototype.hasOwnProperty.call(last!.params!, "enunciadoTemplates")
    ).toBe(false);
  });
});
