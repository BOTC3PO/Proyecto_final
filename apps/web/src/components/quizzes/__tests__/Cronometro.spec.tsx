/**
 * F5-02 — Tests del componente Cronometro.
 *
 * Cubre: render condicional, formato MM:SS, umbrales de color
 * (verde/ámbar/rojo), estado expirado, accesibilidad (role/aria).
 */

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cronometro, formatTiempo } from "../Cronometro";

describe("Cronometro", () => {
  it("no renderiza nada si remaining=null y expired=false", () => {
    const { container } = render(<Cronometro remaining={null} expired={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("renderiza el chip verde con formato MM:SS cuando remaining > 180", () => {
    render(<Cronometro remaining={300} expired={false} />);
    const el = screen.getByTestId("cronometro");
    expect(el.textContent).toContain("05:00");
    expect(el.className).toContain("bg-emerald-100");
    expect(el.getAttribute("role")).toBe("timer");
    expect(el.getAttribute("aria-live")).toBe("polite");
  });

  it("renderiza el chip ámbar cuando 60 < remaining <= 180", () => {
    render(<Cronometro remaining={120} expired={false} />);
    const el = screen.getByTestId("cronometro");
    expect(el.textContent).toContain("02:00");
    expect(el.className).toContain("bg-amber-100");
    expect(el.className).not.toContain("animate-pulse");
  });

  it("renderiza el chip rojo pulsante cuando remaining <= 60", () => {
    render(<Cronometro remaining={30} expired={false} />);
    const el = screen.getByTestId("cronometro");
    expect(el.textContent).toContain("00:30");
    expect(el.className).toContain("bg-red-100");
    expect(el.className).toContain("animate-pulse");
  });

  it("renderiza el banner 'Tiempo agotado' cuando expired=true", () => {
    render(<Cronometro remaining={0} expired={true} />);
    const el = screen.getByTestId("cronometro-expired");
    expect(el.textContent).toContain("Tiempo agotado");
    expect(el.className).toContain("bg-red-100");
    expect(el.getAttribute("role")).toBe("alert");
  });
});

describe("formatTiempo", () => {
  it("formatea segundos a MM:SS con padding", () => {
    expect(formatTiempo(0)).toBe("00:00");
    expect(formatTiempo(7)).toBe("00:07");
    expect(formatTiempo(60)).toBe("01:00");
    expect(formatTiempo(125)).toBe("02:05");
    expect(formatTiempo(3600)).toBe("60:00");
  });

  it("clampa valores negativos a 00:00", () => {
    expect(formatTiempo(-5)).toBe("00:00");
  });

  it("acepta floats truncando a entero", () => {
    expect(formatTiempo(59.9)).toBe("00:59");
  });
});
