/**
 * F4-01 — Lienzo de posiciones (vista del docente).
 *
 * Cubre los criterios de la tarea:
 *  - Render de un cuestionario con posiciones mixtas (fija + pool): numeración
 *    1..N, indicador de tipo de slot y variantes correctas.
 *  - Expandir / colapsar una posición.
 *  - Agrupación visual por tema (mismo color/atributo por tema).
 */

import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PosicionesCanvas from "../PosicionesCanvas";
import { parseCuestionario } from "../../../domain/quiz/posiciones";

function cuestionarioMixto() {
  return parseCuestionario({
    temas: [
      { id: "algebra", nombre: "Álgebra" },
      { id: "geo", nombre: "Geometría" },
    ],
    posiciones: [
      {
        tipo: "fijo",
        temaPrincipal: "algebra",
        puntaje: 1,
        variantes: [{ letra: "a", origen: { origen: "banco", questionId: "fija-1" } }],
      },
      {
        tipo: "obligatorio",
        temaPrincipal: "algebra",
        puntaje: 2,
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "p2-a" } },
          { letra: "b", origen: { origen: "plantilla", plantillaId: "pl-9", plantillaVersion: 3 } },
          { letra: "c", origen: { origen: "generador", generatorId: "gen-x" } },
        ],
      },
      {
        tipo: "relleno",
        temaPrincipal: "geo",
        puntaje: 2,
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "p3-a" } },
          { letra: "b", origen: { origen: "banco", questionId: "p3-b" } },
        ],
      },
    ],
  });
}

describe("PosicionesCanvas", () => {
  it("renderiza la numeración 1..N y el indicador de tipo de slot", () => {
    render(<PosicionesCanvas cuestionario={cuestionarioMixto()} />);

    // Numeración accesible 1..3.
    expect(screen.getByRole("button", { name: /^Posición 1\./ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Posición 2\./ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Posición 3\./ })).toBeInTheDocument();

    // Indicadores de tipo de slot.
    expect(screen.getByText("Fija")).toBeInTheDocument();
    expect(screen.getByText("Pool")).toBeInTheDocument();
    expect(screen.getByText("Relleno")).toBeInTheDocument();
  });

  it("oculta las variantes hasta expandir y las muestra al expandir", async () => {
    const user = userEvent.setup();
    render(<PosicionesCanvas cuestionario={cuestionarioMixto()} />);

    // Colapsado: el origen de las variantes de la posición 2 no está visible.
    expect(screen.queryByText(/Plantilla · pl-9/)).not.toBeInTheDocument();

    const toggle2 = screen.getByRole("button", { name: /^Posición 2\./ });
    expect(toggle2).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle2);
    expect(toggle2).toHaveAttribute("aria-expanded", "true");

    // Las 3 variantes correctas aparecen con su origen.
    const panel = screen.getByRole("list", { name: /Variantes de la posición 2/ });
    expect(within(panel).getByText(/Banco · p2-a/)).toBeInTheDocument();
    expect(within(panel).getByText(/Plantilla · pl-9 v3/)).toBeInTheDocument();
    expect(within(panel).getByText(/Generador · gen-x/)).toBeInTheDocument();
  });

  it("colapsa de nuevo al volver a hacer click", async () => {
    const user = userEvent.setup();
    render(<PosicionesCanvas cuestionario={cuestionarioMixto()} />);
    const toggle2 = screen.getByRole("button", { name: /^Posición 2\./ });

    await user.click(toggle2);
    expect(screen.getByText(/Plantilla · pl-9/)).toBeInTheDocument();

    await user.click(toggle2);
    expect(screen.queryByText(/Plantilla · pl-9/)).not.toBeInTheDocument();
    expect(toggle2).toHaveAttribute("aria-expanded", "false");
  });

  it("agrupa visualmente por tema: mismo tema → mismo atributo y color", () => {
    const { container } = render(<PosicionesCanvas cuestionario={cuestionarioMixto()} />);

    const algebra = container.querySelectorAll('[data-tema="algebra"]');
    const geo = container.querySelectorAll('[data-tema="geo"]');
    expect(algebra.length).toBe(2); // posiciones 1 y 2
    expect(geo.length).toBe(1); // posición 3

    // Las posiciones del mismo tema comparten color de acento; distinto del otro tema.
    const colorAlgebra = (algebra[0] as HTMLElement).style.borderLeftColor;
    expect((algebra[1] as HTMLElement).style.borderLeftColor).toBe(colorAlgebra);
    expect((geo[0] as HTMLElement).style.borderLeftColor).not.toBe(colorAlgebra);
  });

  it("expone reordenar y editar variante vía callbacks", async () => {
    const user = userEvent.setup();
    const onReorder = vi.fn();
    const onEditVariante = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onReorder={onReorder}
        onEditVariante={onEditVariante}
      />,
    );

    // La primera posición no puede subir; la última no puede bajar.
    expect(screen.getByRole("button", { name: /Mover la posición 1 hacia arriba/ })).toBeDisabled();
    expect(screen.getByRole("button", { name: /Mover la posición 3 hacia abajo/ })).toBeDisabled();

    await user.click(screen.getByRole("button", { name: /Mover la posición 2 hacia abajo/ }));
    expect(onReorder).toHaveBeenCalledWith(2, "abajo");

    // Editar una variante de la posición 1 (fija).
    await user.click(screen.getByRole("button", { name: /^Posición 1\./ }));
    await user.click(screen.getByRole("button", { name: /^Editar$/ }));
    expect(onEditVariante).toHaveBeenCalledWith(1, "a");
  });
});
