/**
 * Tests del HerramientaPicker migrado a D.2 (WO10 · sub-sesión A). Verifica:
 *  - El modal expone semántica de diálogo etiquetada.
 *  - Los sub-forms usan labels reales (no solo placeholder) — WCAG 3.3.2.
 *  - La entrada cruda de datos (CSV en textarea) se reemplazó por una lista
 *    repetible editable de puntos (reusando AccessibleList de WO06).
 *  - El spec resultante se arma a partir de las filas editables.
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HerramientaPicker from "../HerramientaPicker";

describe("HerramientaPicker", () => {
  it("renderiza un diálogo accesible con título", () => {
    render(<HerramientaPicker isOpen onSelect={() => {}} onClose={() => {}} />);
    const dialog = screen.getByRole("dialog", { name: /agregar herramienta interactiva/i });
    expect(dialog).toBeTruthy();
  });

  it("el gráfico de líneas usa labels reales y una lista de puntos (sin textarea CSV)", async () => {
    const user = userEvent.setup();
    render(<HerramientaPicker isOpen onSelect={() => {}} onClose={() => {}} />);

    await user.click(screen.getByRole("button", { name: /gráfico de líneas/i }));

    // Labels reales (no placeholder) para los ejes.
    expect(screen.getByLabelText(/eje x/i)).toBeTruthy();
    expect(screen.getByLabelText(/eje y/i)).toBeTruthy();

    // La entrada cruda CSV en textarea ya no existe: los puntos son inputs por fila.
    expect(screen.queryByRole("textbox", { name: /datos/i })).toBeNull();
    expect(screen.getByLabelText(/x del punto 1/i)).toBeTruthy();
    expect(screen.getByLabelText(/y del punto 1/i)).toBeTruthy();

    // Botón de agregar punto de la lista accesible.
    expect(screen.getByRole("button", { name: /agregar punto/i })).toBeTruthy();
  });

  it("arma el spec de line-chart desde las filas editables", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<HerramientaPicker isOpen onSelect={onSelect} onClose={() => {}} />);

    await user.click(screen.getByRole("button", { name: /gráfico de líneas/i }));
    await user.click(screen.getByRole("button", { name: /confirmar gráfico/i }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    const detail = JSON.parse(onSelect.mock.calls[0][0] as string);
    expect(detail.spec.kind).toBe("line-chart");
    expect(detail.spec.series[0].points.length).toBeGreaterThan(0);
    expect(detail.spec.series[0].points[0]).toEqual({ x: 0, y: 0 });
  });

  it("deshabilita confirmar cuando un punto tiene un valor no numérico", async () => {
    const user = userEvent.setup();
    render(<HerramientaPicker isOpen onSelect={() => {}} onClose={() => {}} />);

    await user.click(screen.getByRole("button", { name: /gráfico de líneas/i }));
    const x1 = screen.getByLabelText(/x del punto 1/i);
    await user.clear(x1);
    await user.type(x1, "abc");

    expect(screen.getByRole("button", { name: /confirmar gráfico/i })).toHaveProperty(
      "disabled",
      true,
    );
  });

  it("la imagen exige texto alternativo con label real", async () => {
    const user = userEvent.setup();
    render(<HerramientaPicker isOpen onSelect={() => {}} onClose={() => {}} />);

    await user.click(screen.getByRole("button", { name: /imagen\s+url de imagen de contexto/i }));
    expect(screen.getByLabelText(/url de la imagen/i)).toBeTruthy();
    expect(screen.getByLabelText(/texto alternativo/i)).toBeTruthy();

    // Sin URL, confirmar está deshabilitado.
    expect(screen.getByRole("button", { name: /confirmar imagen/i })).toHaveProperty(
      "disabled",
      true,
    );

    const url = screen.getByLabelText(/url de la imagen/i);
    await user.type(url, "https://ejemplo.com/foto.png");
    expect(screen.getByRole("button", { name: /confirmar imagen/i })).toHaveProperty(
      "disabled",
      false,
    );
  });
});
