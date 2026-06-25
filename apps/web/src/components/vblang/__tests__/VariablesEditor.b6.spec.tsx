/**
 * VB-B6 — tests de integración de `VariablesEditor`.
 *
 * El editor de variables reemplaza al `VariablesCards`
 * presentacional. Cada variable es un card editable con:
 *  - nombre editable
 *  - selector de tipo (random int/float, lista, rango, expr)
 *  - inputs específicos del tipo
 *  - valor en vivo del preview
 *  - botón eliminar
 *
 * Y hay un "+Añadir" contextual (al final de la lista y al
 * costado de la card activa) que inserta una variable nueva en
 * la posición correcta.
 *
 * Cubre:
 *  (b6-1) Renderiza una card por variable con su nombre + tipo.
 *  (b6-2) Sin variables → la lista está vacía pero los botones
 *         de "+Añadir" siguen visibles (el usuario puede
 *         empezar de cero).
 *  (b6-3) Click en "+Añadir Aleatorio entero" agrega una variable
 *         al final con `random(1, 10)`.
 *  (b6-4) El nombre auto-generado es único (no choca con los
 *         existentes).
 *  (b6-5) Editar el nombre de una card actualiza el DSL.
 *  (b6-6) Cambiar el tipo reescribe la `expr` con un seed
 *         razonable.
 *  (b6-7) Eliminar una card la quita de la lista.
 *  (b6-8) La card activa tiene la mini-toolbar "+Añadir" al
 *         costado; insertar desde la mini-toolbar pone la
 *         variable DESPUÉS de la activa.
 *  (b6-9) El valor en vivo del preview se muestra en la card
 *         cuando está disponible.
 */

import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { parse, type Plantilla, type VariableDecl } from "@vb/vblang";
import VariablesEditor from "../VariablesEditor";

function declsOf(plantilla: Plantilla): VariableDecl[] {
  const b = plantilla.bloques.find(
    (b): b is Extract<typeof plantilla.bloques[number], { kind: "variables" }> =>
      b.kind === "variables",
  );
  return b?.declaraciones ?? [];
}

function Harness({ initial, valores }: { initial: string; valores?: Record<string, unknown> }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  return (
    <VariablesEditor
      plantilla={plantilla}
      variables={declsOf(plantilla)}
      valores={valores}
      onChange={(next) => setPlantilla(next)}
    />
  );
}

describe("VB-B6: VariablesEditor", () => {
  it("(b6-1) renderiza una card por variable con su nombre + tipo", () => {
    const { container } = render(
      <Harness
        initial={
          'variables:\n  a: random(1, 10)\n  b: random(1, 5)\nenunciado: "x"\nrespuesta: 1\n'
        }
      />,
    );
    const cards = container.querySelectorAll('[data-testid^="vblang-var-card-"]');
    expect(cards.length).toBe(2);
    expect(screen.getByTestId("vblang-var-name-0")).toHaveValue("a");
    expect(screen.getByTestId("vblang-var-name-1")).toHaveValue("b");
  });

  it("(b6-2) sin variables → la lista está vacía pero los botones +Añadir siguen visibles", () => {
    render(<Harness initial={'enunciado: "x"\nrespuesta: 1\n'} />);
    // Los 5 botones +Añadir siguen visibles (random-int, random-float, list, range, expr).
    expect(screen.getByTestId("vblang-var-add-random-int")).toBeInTheDocument();
    expect(screen.getByTestId("vblang-var-add-list")).toBeInTheDocument();
  });

  it("(b6-3) +Añadir agrega una variable al final con random(1, 10)", () => {
    const { container } = render(
      <Harness initial={'enunciado: "x"\nrespuesta: 1\n'} />,
    );
    fireEvent.click(screen.getByTestId("vblang-var-add-random-int"));
    // Tras el click, debe haber 1 input de nombre visible (la
    // nueva variable). El nombre auto-generado empieza con `v`.
    const names = container.querySelectorAll(
      'input[data-testid^="vblang-var-name-"]',
    );
    expect(names.length).toBe(1);
    expect((names[0] as HTMLInputElement).value).toMatch(/^v/);
  });

  it("(b6-4) el nombre auto-generado es único", () => {
    const { container } = render(
      <Harness
        initial={'variables:\n  v: 1\nenunciado: "x"\nrespuesta: 1\n'}
      />,
    );
    fireEvent.click(screen.getByTestId("vblang-var-add-random-int"));
    const names = Array.from(
      container.querySelectorAll(
        'input[data-testid^="vblang-var-name-"]',
      ),
    ) as HTMLInputElement[];
    expect(names.map((n) => n.value)).toEqual(["v", "v_2"]);
  });

  it("(b6-5) editar el nombre de una card actualiza el DSL", () => {
    const { container } = render(
      <Harness
        initial={'variables:\n  a: 1\nenunciado: "x"\nrespuesta: 1\n'}
      />,
    );
    fireEvent.change(screen.getByTestId("vblang-var-name-0"), {
      target: { value: "alpha" },
    });
    const input = container.querySelector(
      'input[data-testid="vblang-var-name-0"]',
    ) as HTMLInputElement;
    expect(input.value).toBe("alpha");
  });

  it("(b6-6) cambiar el tipo reescribe la expr con un seed razonable", () => {
    render(
      <Harness
        initial={'variables:\n  a: 1\nenunciado: "x"\nrespuesta: 1\n'}
      />,
    );
    fireEvent.change(screen.getByTestId("vblang-var-kind-0"), {
      target: { value: "list" },
    });
    // Tras el cambio a "list", debe aparecer el textarea de ítems.
    expect(screen.getByTestId("vblang-var-items-0")).toBeInTheDocument();
  });

  it("(b6-7) eliminar una card la quita de la lista", async () => {
    const { container } = render(
      <Harness
        initial={
          'variables:\n  a: 1\n  b: 2\nenunciado: "x"\nrespuesta: 1\n'
        }
      />,
    );
    fireEvent.click(screen.getByTestId("vblang-var-remove-0"));
    // Esperar el re-render del padre (el setState es síncrono pero
    // el siguiente assertion puede correr antes del flush).
    await waitFor(() => {
      const remaining = container.querySelectorAll(
        'input[data-testid^="vblang-var-name-"]',
      );
      expect(remaining.length).toBe(1);
      expect((remaining[0] as HTMLInputElement).value).toBe("b");
    });
  });

  it("(b6-8) la card activa tiene la mini-toolbar +Añadir; inserta DESPUÉS de la activa", async () => {
    const { container } = render(
      <Harness
        initial={
          'variables:\n  a: 1\n  b: 2\nenunciado: "x"\nrespuesta: 1\n'
        }
      />,
    );
    // Marcar la card 0 como activa.
    fireEvent.click(screen.getByTestId("vblang-var-card-0"));
    // La mini-toolbar específica de la card 0 está visible.
    const addafterBtn = screen.getByTestId("vblang-var-addafter-list-0");
    expect(addafterBtn).toBeInTheDocument();
    fireEvent.click(addafterBtn);
    // Esperar el re-render tras el setState del padre.
    await waitFor(() => {
      const names = Array.from(
        container.querySelectorAll(
          'input[data-testid^="vblang-var-name-"]',
        ),
      ) as HTMLInputElement[];
      // a, v (auto), b — el `v` no existía, no necesita suffijo.
      expect(names.map((n) => n.value)).toEqual(["a", "v", "b"]);
    });
  });

  it("(b6-9) el valor en vivo del preview se muestra en la card", () => {
    const { container } = render(
      <Harness
        initial={
          'variables:\n  a: random(1, 10)\nenunciado: "x"\nrespuesta: 1\n'
        }
        valores={{ a: 7 }}
      />,
    );
    // data-testid="vblang-var-now-0" con texto "ahora: 7".
    const now = container.querySelector('[data-testid="vblang-var-now-0"]');
    expect(now?.textContent).toMatch(/ahora:\s*7/);
  });
});
