/**
 * PLAN-M — OnboardingTema reenvía `?returnTo=` a /login, tanto al elegir un
 * tema ("Continuar") como al saltar el paso ("Saltar por ahora").
 */
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";

import OnboardingTema from "../OnboardingTema";

function LocationProbe() {
  const loc = useLocation();
  return <div data-testid="location-probe">{loc.pathname}{loc.search}</div>;
}

function renderPage(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/onboarding/tema" element={<OnboardingTema />} />
        <Route path="/login" element={<LocationProbe />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("OnboardingTema — reenvío de returnTo (PLAN-M)", () => {
  it("«Continuar»: reenvía returnTo a /login", () => {
    renderPage("/onboarding/tema?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1");
    fireEvent.click(screen.getByRole("button", { name: /^Continuar con/i }));

    expect(screen.getByTestId("location-probe")).toHaveTextContent(
      "/login?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1",
    );
  });

  it("«Saltar por ahora»: también reenvía returnTo a /login", () => {
    renderPage("/onboarding/tema?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1");
    fireEvent.click(screen.getByRole("button", { name: /Saltar por ahora/i }));

    expect(screen.getByTestId("location-probe")).toHaveTextContent(
      "/login?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1",
    );
  });

  it("sin returnTo: navega a /login sin agregar el query param", () => {
    renderPage("/onboarding/tema");
    fireEvent.click(screen.getByRole("button", { name: /Saltar por ahora/i }));

    expect(screen.getByTestId("location-probe")).toHaveTextContent("/login");
    expect(screen.getByTestId("location-probe")).not.toHaveTextContent("returnTo");
  });
});
