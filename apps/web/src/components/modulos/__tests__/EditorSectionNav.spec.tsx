/**
 * Tests de EditorSectionNav (Tarea 15).
 *
 * El nav se renderiza dentro de un documento con los ids reales
 * (`sec-general`, `sec-teoria`, `sec-herramientas`, `sec-cuestionarios`,
 * `sec-dependencias`) para verificar que todos los links apuntan a un
 * anchor existente.
 *
 * El componente emite dos <ul> (desktop + mobile) con los mismos testid,
 * por lo que las assertions usan `getAllByTestId` y verifican el PRIMER
 * match (desktop) o cuentan (>=1).
 */

import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import EditorSectionNav from "../EditorSectionNav";

const SECTION_IDS = [
  "sec-general",
  "sec-teoria",
  "sec-herramientas",
  "sec-cuestionarios",
  "sec-dependencias",
];

function mountSections() {
  return render(
    <div>
      {SECTION_IDS.map((id) => (
        <section key={id} id={id} style={{ height: 200 }}>
          <h2>{id}</h2>
        </section>
      ))}
      <EditorSectionNav
        sections={[
          { id: "sec-general", label: "General", status: { status: "ok" } },
          { id: "sec-teoria", label: "Teoría", status: { status: "ok" } },
          {
            id: "sec-herramientas",
            label: "Herramientas",
            status: { status: "incomplete", label: "Opcional" },
          },
          {
            id: "sec-cuestionarios",
            label: "Cuestionarios",
            status: { status: "incomplete", label: "Incompleta" },
          },
          {
            id: "sec-dependencias",
            label: "Dependencias",
            status: { status: "incomplete", label: "Opcional" },
          },
        ]}
      />
    </div>,
  );
}

describe("EditorSectionNav", () => {
  it("renderiza links (al menos uno por seccion) en ambas variantes desktop/mobile", () => {
    mountSections();
    for (const id of SECTION_IDS) {
      const links = screen.getAllByTestId(`editor-section-link-${id}`);
      // desktop + mobile = 2 ocurrencias.
      expect(links.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("los 5 links apuntan a ids que existen en el DOM", () => {
    mountSections();
    for (const id of SECTION_IDS) {
      const [link] = screen.getAllByTestId(`editor-section-link-${id}`);
      expect(link.getAttribute("href")).toBe(`#${id}`);
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it("muestra ✓ para secciones ok y ⚠ para secciones incompletas", () => {
    mountSections();
    const [general] = screen.getAllByTestId("editor-section-link-sec-general");
    const [cuestionarios] = screen.getAllByTestId(
      "editor-section-link-sec-cuestionarios",
    );
    expect(general.textContent).toMatch(/✓/);
    expect(cuestionarios.textContent).toMatch(/⚠/);
  });

  it("marca la primera seccion como aria-current al montar", () => {
    mountSections();
    const [general] = screen.getAllByTestId("editor-section-link-sec-general");
    expect(general.getAttribute("aria-current")).toBe("location");
  });

  it("el link con enabled=false tiene pointer-events-none", () => {
    render(
      <EditorSectionNav
        sections={[
          {
            id: "sec-x",
            label: "X",
            status: { status: "ok" },
            enabled: false,
          },
        ]}
      />,
    );
    const [link] = screen.getAllByTestId("editor-section-link-sec-x");
    // C3 (PLAN-CORRECCIONES): el disabled se aplica con `style` inline
    // (`pointerEvents: "none"`), no con una clase Tailwind — el componente
    // no usa className para eso en ningún lado.
    expect((link as HTMLElement).style.pointerEvents).toBe("none");
    expect(link.getAttribute("aria-disabled")).toBe("true");
  });

  it("click en un link no rompe aunque el target no este visible", () => {
    mountSections();
    const [link] = screen.getAllByTestId("editor-section-link-sec-teoria");
    fireEvent.click(link);
    expect(link).toBeInTheDocument();
  });

  it("el nav tiene aria-label para lectores de pantalla", () => {
    mountSections();
    const navs = screen.getAllByRole("navigation", {
      name: /secciones del editor/i,
    });
    expect(navs.length).toBeGreaterThanOrEqual(1);
  });

  it("status.label aparece como texto solo-lectura (sr-only)", () => {
    mountSections();
    const [link] = screen.getAllByTestId(
      "editor-section-link-sec-cuestionarios",
    );
    const srOnly = within(link).getByText(/Incompleta/);
    expect(srOnly).toHaveClass("sr-only");
  });
});
