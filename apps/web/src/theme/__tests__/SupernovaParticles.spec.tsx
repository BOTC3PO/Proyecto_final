import { describe, it, expect, vi, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { SupernovaParticles } from "../SupernovaParticles";

const mockMatchMedia = (matches: boolean) => {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
};

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("SupernovaParticles", () => {
  it("crea partículas cuando el usuario no pidió reducir movimiento", () => {
    mockMatchMedia(false);
    const { container } = render(<SupernovaParticles />);
    const particles = container.querySelectorAll(".vb-supernova-particle");
    expect(particles.length).toBeGreaterThan(0);
  });

  it("no crea ninguna partícula si prefers-reduced-motion está activo", () => {
    mockMatchMedia(true);
    const { container } = render(<SupernovaParticles />);
    const particles = container.querySelectorAll(".vb-supernova-particle");
    expect(particles.length).toBe(0);
  });

  it("limpia las partículas del DOM al desmontar", () => {
    mockMatchMedia(false);
    const { container, unmount } = render(<SupernovaParticles />);
    expect(container.querySelectorAll(".vb-supernova-particle").length).toBeGreaterThan(0);
    unmount();
    expect(document.querySelectorAll(".vb-supernova-particle").length).toBe(0);
  });

  it("el contenedor es decorativo y no interfiere con foco/lectores de pantalla", () => {
    mockMatchMedia(false);
    const { container } = render(<SupernovaParticles />);
    expect(container.firstElementChild?.getAttribute("aria-hidden")).toBe("true");
  });
});
