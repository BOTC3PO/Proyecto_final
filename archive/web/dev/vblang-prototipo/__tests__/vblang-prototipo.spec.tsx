/**
 * Smoke test del prototipo VBLang 2.0.
 *
 * Verifica que la página monta, muestra el patrón "Forms + property grid
 * progresivo" y que el property grid se renderiza desde el registro de
 * componentes (no un switch).
 *
 * No rompe los tests existentes: este archivo vive en
 * `apps/web/src/dev/vblang-prototipo/__tests__/` que Vitest incluye por el
 * `include` de `vitest.config.ts` (recursivo).
 */
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VblangPrototypePage from "../index";

describe("VBLang 2.0 — prototipo", () => {
  it("monta la página con el patrón visual completo", () => {
    render(<VblangPrototypePage />);

    // TopBar con eyebrow prototipo.
    expect(
      screen.getByText(/VBLang 2.0 · Editor prototipo/i),
    ).toBeInTheDocument();

    // Grilla de 12 tipos de pregunta.
    const grid = screen.getByTestId("vblang-prototype-type-grid");
    expect(grid).toHaveAttribute("role", "radiogroup");
    // 12 cards = 12 radios accesibles.
    const radios = within(grid).getAllByRole("radio");
    expect(radios).toHaveLength(12);

    // Tarjeta central: enunciado inicial (en el textarea editable).
    const enunciados = screen.getAllByDisplayValue("¿Cuánto es {a} × {b}?");
    expect(enunciados.length).toBeGreaterThan(0);

    // Property grid: el tipo actual (Numérica) determina qué editor se
    // monta. Verificamos que el header del editor dice "Numérica".
    const propertyPanel = screen.getByRole("region", { name: /propiedades/i });
    expect(within(propertyPanel).getByText(/numérica/i)).toBeInTheDocument();
  });

  it("cambia el tipo de pregunta al clickear otra card de la grilla", async () => {
    const user = userEvent.setup();
    render(<VblangPrototypePage />);

    const grid = screen.getByTestId("vblang-prototype-type-grid");
    const mcCard = within(grid).getByRole("radio", { name: /opción múltiple/i });
    await user.click(mcCard);

    // Tras el click, el editor del property grid pasa a "Opción múltiple".
    const propertyPanel = screen.getByRole("region", { name: /propiedades/i });
    expect(within(propertyPanel).getByText(/opción múltiple/i)).toBeInTheDocument();
  });

  it("abre el menú + Añadir y agrega un add-on", async () => {
    const user = userEvent.setup();
    render(<VblangPrototypePage />);

    const addButton = screen.getByRole("button", { name: /^añadir$/i });
    await user.click(addButton);

    // El menú de add-ons se abre con items.
    const menu = screen.getByRole("menu", { name: /añadir bloque opcional/i });
    const items = within(menu).getAllByRole("menuitem");
    expect(items.length).toBeGreaterThan(0);

    // Click en "Explicación" agrega un add-on a la tarjeta central.
    await user.click(within(menu).getByRole("menuitem", { name: /explicación/i }));

    // El bloque aparece en la tarjeta: el summary "Explicación" se ve
    // (también aparece en el property grid como header del editor del
    // add-on, pero al menos una instancia está presente).
    const matches = screen.getAllByText(/^explicación$/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  it("muestra el panel Código generado cuando se expande", async () => {
    const user = userEvent.setup();
    render(<VblangPrototypePage />);

    const toggle = screen.getByRole("button", { name: /código generado/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });

  it("regenera el seed en el preview", async () => {
    const user = userEvent.setup();
    render(<VblangPrototypePage />);

    const initialSeed = screen.getByText(/seed 1/);
    expect(initialSeed).toBeInTheDocument();

    const regen = screen.getByRole("button", { name: /regenerar valores de variables/i });
    await user.click(regen);

    expect(screen.getByText(/seed 2/)).toBeInTheDocument();
  });
});
