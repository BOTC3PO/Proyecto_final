/**
 * Tests de la logica de 'Continuar donde dejaste' (Tarea 21) y de la
 * tarjeta como componente.
 *
 * `pickContinueTarget`:
 *  1. Primer modulo con progressPercent > 0 && < 100 && !isLocked.
 *  2. Si no, primer modulo no bloqueado con progressPercent === 0.
 *  3. Si no, null.
 *
 * Componente:
 *  - Renderiza titulo y link al detalle (/modulos/:id).
 *  - No renderiza si la lista esta vacia o todos los modulos estan
 *    bloqueados o al 100%.
 */

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ContinuarCard, { pickContinueTarget } from "../ContinuarCard";
import type { ClassModuleProgress } from "../../../pages/aula";

const M = (
  id: string,
  title: string,
  progressPercent: number,
  isLocked = false,
): ClassModuleProgress => ({ id, title, progressPercent, isLocked });

describe("pickContinueTarget", () => {
  it("elige el primer modulo en progreso (0 < x < 100) y no bloqueado", () => {
    const modules = [
      M("a", "A", 100),
      M("b", "B", 40, false), // <- candidato (in progress)
      M("c", "C", 0, false),
    ];
    expect(pickContinueTarget(modules)?.id).toBe("b");
  });

  it("si no hay en progreso, elige el primer no bloqueado con 0%", () => {
    const modules = [
      M("a", "A", 100),
      M("b", "B", 50, true), // bloqueado, se ignora
      M("c", "C", 0, false),  // <- candidato
    ];
    expect(pickContinueTarget(modules)?.id).toBe("c");
  });

  it("ignora modulos bloqueados incluso si estan en progreso", () => {
    const modules = [
      M("a", "A", 80, true), // bloqueado
      M("b", "B", 0, false),  // <- candidato
    ];
    expect(pickContinueTarget(modules)?.id).toBe("b");
  });

  it("devuelve null si todo esta al 100%", () => {
    const modules = [M("a", "A", 100), M("b", "B", 100)];
    expect(pickContinueTarget(modules)).toBeNull();
  });

  it("devuelve null si todo esta bloqueado", () => {
    const modules = [M("a", "A", 0, true), M("b", "B", 40, true)];
    expect(pickContinueTarget(modules)).toBeNull();
  });

  it("devuelve null si la lista esta vacia", () => {
    expect(pickContinueTarget([])).toBeNull();
  });

  it("prioriza in-progress (40%) por sobre sin-iniciar (0%)", () => {
    const modules = [M("a", "A", 0, false), M("b", "B", 40, false)];
    expect(pickContinueTarget(modules)?.id).toBe("b");
  });
});

describe("ContinuarCard", () => {
  function renderCard(modules: ClassModuleProgress[]) {
    return render(
      <MemoryRouter>
        <ContinuarCard modules={modules} />
      </MemoryRouter>,
    );
  }

  it("muestra la tarjeta con el modulo en progreso", () => {
    renderCard([M("m-1", "Suma de fracciones", 40)]);
    const card = screen.getByTestId("continuar-card");
    expect(card).toBeInTheDocument();
    expect(card.textContent).toContain("Suma de fracciones");
    const link = screen.getByTestId("continuar-link") as HTMLAnchorElement;
    expect(link.getAttribute("href")).toBe("/modulos/m-1");
    expect(link.textContent).toMatch(/continuar/i);
    const progress = screen.getByTestId("continuar-progress");
    expect(progress.getAttribute("aria-valuenow")).toBe("40");
  });

  it("no renderiza si todos los modulos estan al 100%", () => {
    renderCard([M("a", "A", 100), M("b", "B", 100)]);
    expect(screen.queryByTestId("continuar-card")).not.toBeInTheDocument();
  });

  it("no renderiza si todos los modulos estan bloqueados", () => {
    renderCard([M("a", "A", 0, true), M("b", "B", 40, true)]);
    expect(screen.queryByTestId("continuar-card")).not.toBeInTheDocument();
  });

  it("elige el modulo sin iniciar si no hay nada en progreso", () => {
    renderCard([M("a", "A", 100), M("b", "B", 0)]);
    expect(screen.getByTestId("continuar-card").textContent).toContain("B");
    expect(screen.getByTestId("continuar-progress").getAttribute("aria-valuenow")).toBe("0");
  });
});
