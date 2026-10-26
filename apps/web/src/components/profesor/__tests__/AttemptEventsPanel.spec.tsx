/**
 * F5-03 — Tests del panel de eventos del intento (vista del docente).
 *
 * Cubre: estado limpio (✓), tab switches (N veces), canario disparado,
 * ambos a la vez, nota de privacidad, colapsar/expandir.
 */

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AttemptEventsPanel } from "../AttemptEventsPanel";

describe("AttemptEventsPanel", () => {
  it("renderiza estado limpio cuando no hay eventos", () => {
    render(<AttemptEventsPanel grading={null} />);
    expect(screen.getByTestId("attempt-events-clean")).toBeInTheDocument();
    expect(screen.getByText("Sin eventos registrados")).toBeInTheDocument();
  });

  it("renderiza estado limpio con grading vacío", () => {
    render(<AttemptEventsPanel grading={{}} />);
    expect(screen.getByTestId("attempt-events-clean")).toBeInTheDocument();
  });

  it("muestra 'Salió N veces' cuando tabSwitchCount > 0", () => {
    render(
      <AttemptEventsPanel grading={{ events: { tabSwitchCount: 3 } }} />
    );
    expect(screen.getByTestId("attempt-events-tab-switches")).toBeInTheDocument();
    expect(screen.getByText("Salió de la pestaña 3 veces")).toBeInTheDocument();
  });

  it("singular para count=1", () => {
    render(
      <AttemptEventsPanel grading={{ events: { tabSwitchCount: 1 } }} />
    );
    expect(screen.getByText("Salió de la pestaña 1 vez")).toBeInTheDocument();
  });

  it("muestra 'Canario disparado' cuando canaryTriggered=true", () => {
    render(<AttemptEventsPanel grading={{ canaryTriggered: true }} />);
    expect(screen.getByTestId("attempt-events-canary")).toBeInTheDocument();
    expect(
      screen.getByText(/Canario disparado/)
    ).toBeInTheDocument();
  });

  it("muestra AMBOS cuando hay switches y canario", () => {
    render(
      <AttemptEventsPanel
        grading={{ canaryTriggered: true, events: { tabSwitchCount: 5 } }}
      />
    );
    expect(screen.getByTestId("attempt-events-tab-switches")).toBeInTheDocument();
    expect(screen.getByTestId("attempt-events-canary")).toBeInTheDocument();
  });

  it("siempre muestra la nota de privacidad", () => {
    render(<AttemptEventsPanel grading={null} />);
    expect(screen.getByTestId("attempt-events-privacy-note")).toBeInTheDocument();
    expect(screen.getByTestId("attempt-events-privacy-note").textContent).toContain(
      "nunca qué pestaña o app se abrió"
    );
  });

  it("botón colapsar/expandir oculta el contenido pero deja el header", async () => {
    const user = userEvent.setup();
    render(<AttemptEventsPanel grading={null} />);
    expect(screen.getByTestId("attempt-events-clean")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Colapsar/i }));
    expect(screen.queryByTestId("attempt-events-clean")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Expandir/i })).toBeInTheDocument();
  });
});
