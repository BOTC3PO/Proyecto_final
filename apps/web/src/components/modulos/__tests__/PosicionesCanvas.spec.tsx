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
import { fireEvent, render, screen, within } from "@testing-library/react";
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

/**
 * F4-02 — Botón "+ Añadir" contextual.
 *
 * Cubre los criterios de la tarea:
 *  - Menú contextual con nueva posición fija/variante/relleno.
 *  - Inserción relativa al elemento activo, no siempre al final.
 *  - Empty state con botón de alta inicial.
 *  - Escape limpia el activo.
 *  - Quitar posición / variante (callbacks opcionales).
 */
describe("PosicionesCanvas — F4-02 añadir contextual", () => {
  it("muestra + Añadir posición en el empty state cuando hay callback de alta", () => {
    const onAddPosicion = vi.fn();
    const vacio = parseCuestionario({ temas: [], posiciones: [] });
    render(<PosicionesCanvas cuestionario={vacio} onAddPosicion={onAddPosicion} />);

    const btn = screen.getByRole("button", { name: /Añadir la primera posición/ });
    expect(btn).toBeInTheDocument();
  });

  it("click en + Añadir posición del empty state invoca onAddPosicion sin despuesDe", async () => {
    const user = userEvent.setup();
    const onAddPosicion = vi.fn();
    const vacio = parseCuestionario({ temas: [], posiciones: [] });
    render(<PosicionesCanvas cuestionario={vacio} onAddPosicion={onAddPosicion} />);

    await user.click(screen.getByRole("button", { name: /Añadir la primera posición/ }));
    expect(onAddPosicion).toHaveBeenCalledWith({ tipo: "fijo" });
    expect(onAddPosicion.mock.calls[0][0].despuesDe).toBeUndefined();
  });

  it("el menú contextual aparece al activar una posición y lista las 3 inserciones de posición + variante", async () => {
    const user = userEvent.setup();
    const onAddPosicion = vi.fn();
    const onAddVariante = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onAddPosicion={onAddPosicion}
        onAddVariante={onAddVariante}
      />,
    );

    // Sin activo, no hay menú contextual.
    expect(screen.queryByRole("region", { name: /Insertar contenido relativo/ })).not.toBeInTheDocument();

    // Activo = posición 2 (al hacer click en la cabecera).
    await user.click(screen.getByRole("button", { name: /^Posición 2\./ }));

    const menu = screen.getByRole("region", { name: /Insertar contenido relativo a la posición 2/ });
    expect(menu).toBeInTheDocument();

    // Las 3 inserciones de posición + la de variante (el aria-label del
    // botón del menú es "Añadir variante a la posición N" — el "aquí" está
    // sólo en el texto visible).
    expect(within(menu).getByRole("button", { name: /Posición fija/ })).toBeInTheDocument();
    expect(within(menu).getByRole("button", { name: /Posición de pool/ })).toBeInTheDocument();
    expect(within(menu).getByRole("button", { name: /Posición de relleno/ })).toBeInTheDocument();
    expect(within(menu).getByRole("button", { name: /Añadir variante a la posición 2/ })).toBeInTheDocument();
  });

  it("+ Variante en una posición la inserta en ESA posición (callback con numero)", async () => {
    const user = userEvent.setup();
    const onAddVariante = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onAddVariante={onAddVariante}
      />,
    );

    // Activo = posición 1 (la cabecera también toggle, pero sólo necesitamos
    // setear el activo — no necesitamos expandir para añadir variante).
    await user.click(screen.getByRole("button", { name: /^Posición 1\./ }));
    const menu = screen.getByRole("region", { name: /Insertar contenido relativo a la posición 1/ });
    await user.click(within(menu).getByRole("button", { name: /Añadir variante a la posición 1/ }));
    expect(onAddVariante).toHaveBeenCalledWith(1);
  });

  it("+ Variante en la posición 2 invoca onAddVariante(2), no (1) ni (3)", async () => {
    const user = userEvent.setup();
    const onAddVariante = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onAddVariante={onAddVariante}
      />,
    );

    // Activo = posición 2.
    await user.click(screen.getByRole("button", { name: /^Posición 2\./ }));
    const menu = screen.getByRole("region", { name: /Insertar contenido relativo a la posición 2/ });
    await user.click(within(menu).getByRole("button", { name: /Añadir variante a la posición 2/ }));

    expect(onAddVariante).toHaveBeenCalledWith(2);
    expect(onAddVariante).not.toHaveBeenCalledWith(1);
    expect(onAddVariante).not.toHaveBeenCalledWith(3);
  });

  it("el menú de + Posición se invoca con despuesDe: numeroActivo cuando hay activo", async () => {
    const user = userEvent.setup();
    const onAddPosicion = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onAddPosicion={onAddPosicion}
      />,
    );

    // Activo = posición 2.
    await user.click(screen.getByRole("button", { name: /^Posición 2\./ }));
    const menu = screen.getByRole("region", { name: /Insertar contenido relativo a la posición 2/ });

    // Las 3 inserciones de posición.
    await user.click(within(menu).getByRole("button", { name: /Posición fija/ }));
    expect(onAddPosicion).toHaveBeenLastCalledWith({ despuesDe: 2, tipo: "fijo" });

    await user.click(within(menu).getByRole("button", { name: /Posición de pool/ }));
    expect(onAddPosicion).toHaveBeenLastCalledWith({ despuesDe: 2, tipo: "obligatorio" });

    await user.click(within(menu).getByRole("button", { name: /Posición de relleno/ }));
    expect(onAddPosicion).toHaveBeenLastCalledWith({ despuesDe: 2, tipo: "relleno" });

    expect(onAddPosicion).toHaveBeenCalledTimes(3);
  });

  it("Escape cierra el menú contextual (limpia el activo)", async () => {
    const user = userEvent.setup();
    const onAddPosicion = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onAddPosicion={onAddPosicion}
      />,
    );

    await user.click(screen.getByRole("button", { name: /^Posición 1\./ }));
    expect(screen.getByRole("region", { name: /Insertar contenido relativo a la posición 1/ })).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("region", { name: /Insertar contenido relativo/ })).not.toBeInTheDocument();
  });

  it("el botón × del menú también lo cierra", async () => {
    const user = userEvent.setup();
    const onAddPosicion = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onAddPosicion={onAddPosicion}
      />,
    );

    await user.click(screen.getByRole("button", { name: /^Posición 1\./ }));
    const menu = screen.getByRole("region", { name: /Insertar contenido relativo a la posición 1/ });

    await user.click(within(menu).getByRole("button", { name: /Cerrar menú/ }));
    expect(screen.queryByRole("region", { name: /Insertar contenido relativo/ })).not.toBeInTheDocument();
  });

  it("+ Añadir posición global (al final) se invoca sin despuesDe", async () => {
    const user = userEvent.setup();
    const onAddPosicion = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onAddPosicion={onAddPosicion}
      />,
    );

    await user.click(screen.getByRole("button", { name: /Añadir una posición al final/ }));
    expect(onAddPosicion).toHaveBeenCalledWith({ tipo: "fijo" });
    expect(onAddPosicion.mock.calls[0][0].despuesDe).toBeUndefined();
  });

  it("quitar posición y quitar variante invocan los callbacks con (numero) y (numero, letra)", async () => {
    const user = userEvent.setup();
    const onRemovePosicion = vi.fn();
    const onRemoveVariante = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onRemovePosicion={onRemovePosicion}
        onRemoveVariante={onRemoveVariante}
      />,
    );

    // Sin activo, no se ve la opción "Quitar posición" (es contextual al activo).
    expect(screen.queryByRole("button", { name: /Quitar la posición/ })).not.toBeInTheDocument();

    // Activo = posición 2.
    await user.click(screen.getByRole("button", { name: /^Posición 2\./ }));
    const menu = screen.getByRole("region", { name: /Insertar contenido relativo a la posición 2/ });
    await user.click(within(menu).getByRole("button", { name: /Quitar la posición 2/ }));
    expect(onRemovePosicion).toHaveBeenCalledWith(2);

    // Quitar variante: la posición 2 tiene 3 variantes (a, b, c). Botón por fila.
    const panel = screen.getByRole("list", { name: /Variantes de la posición 2/ });
    await user.click(within(panel).getByRole("button", { name: /Quitar la variante b de la posición 2/ }));
    expect(onRemoveVariante).toHaveBeenCalledWith(2, "b");
  });

  it("no renderiza ningún botón de alta si no se pasan callbacks", () => {
    render(<PosicionesCanvas cuestionario={cuestionarioMixto()} />);
    // Sin callbacks, no aparece el botón + Añadir posición (ni global, ni contextual).
    expect(screen.queryByRole("button", { name: /Añadir una posición al final/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Añadir variante/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Insertar contenido relativo/ })).not.toBeInTheDocument();
  });
});

/**
 * F4-03 — Edición de puntaje por posición y tipo de slot.
 *
 * Cubre los criterios de la tarea:
 *  - Cambiar puntaje de una posición invoca onChangePuntaje(numero, nuevoPuntaje).
 *  - El input está disponible si y solo si onChangePuntaje se pasa.
 *  - Cambiar tipo invoca onChangeTipo(numero, nuevoTipo).
 *  - Sin los callbacks, no hay input/select (no-regresión).
 */
describe("PosicionesCanvas — F4-03 puntaje por sección", () => {
  it("sin onChangePuntaje, NO renderiza el input de puntaje (no-regresión)", () => {
    render(<PosicionesCanvas cuestionario={cuestionarioMixto()} />);
    expect(screen.queryByLabelText(/Puntaje de la posición/)).not.toBeInTheDocument();
    // En cambio, sigue mostrando el "1 punto" / "2 puntos" como texto.
    expect(screen.getByText("1 punto")).toBeInTheDocument();
    // Hay 2 posiciones con 2 puntos (pos 2 y pos 3). Verificamos que aparece
    // al menos una.
    expect(screen.getAllByText("2 puntos").length).toBeGreaterThanOrEqual(1);
  });

  it("con onChangePuntaje, renderiza un input por posición con su puntaje actual", () => {
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onChangePuntaje={() => {}}
      />,
    );
    const input1 = screen.getByLabelText("Puntaje de la posición 1") as HTMLInputElement;
    const input2 = screen.getByLabelText("Puntaje de la posición 2") as HTMLInputElement;
    const input3 = screen.getByLabelText("Puntaje de la posición 3") as HTMLInputElement;
    expect(input1.value).toBe("1");
    expect(input2.value).toBe("2");
    expect(input3.value).toBe("2");
  });

  it("cambiar el puntaje invoca onChangePuntaje(numero, nuevoPuntaje)", async () => {
    const user = userEvent.setup();
    const onChangePuntaje = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onChangePuntaje={onChangePuntaje}
      />,
    );

    const input2 = screen.getByLabelText("Puntaje de la posición 2");
    // Forzamos el value y disparamos onChange (happy-dom requiere el set).
    await user.click(input2);
    // Limpia y tipea "5".
    fireEvent.change(input2, { target: { value: "5" } });
    expect(onChangePuntaje).toHaveBeenCalledWith(2, 5);
  });

  it("cambiar el puntaje de la posición 1 NO afecta el input de la posición 2", async () => {
    const user = userEvent.setup();
    const onChangePuntaje = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onChangePuntaje={onChangePuntaje}
      />,
    );

    const input1 = screen.getByLabelText("Puntaje de la posición 1");
    fireEvent.change(input1, { target: { value: "10" } });
    expect(onChangePuntaje).toHaveBeenLastCalledWith(1, 10);
    expect(onChangePuntaje).not.toHaveBeenCalledWith(2, expect.anything());
  });

  it("input vacío no invoca onChangePuntaje (commit al perder foco o Enter)", () => {
    const onChangePuntaje = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onChangePuntaje={onChangePuntaje}
      />,
    );
    const input1 = screen.getByLabelText("Puntaje de la posición 1");
    fireEvent.change(input1, { target: { value: "" } });
    expect(onChangePuntaje).not.toHaveBeenCalled();
  });

  it("input con valor negativo no invoca onChangePuntaje (rechazo)", () => {
    const onChangePuntaje = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onChangePuntaje={onChangePuntaje}
      />,
    );
    const input1 = screen.getByLabelText("Puntaje de la posición 1");
    fireEvent.change(input1, { target: { value: "-3" } });
    expect(onChangePuntaje).not.toHaveBeenCalled();
  });

  it("cambiar el tipo en el select de la posición 2 invoca onChangeTipo(2, 'relleno')", async () => {
    const user = userEvent.setup();
    const onChangeTipo = vi.fn();
    render(
      <PosicionesCanvas
        cuestionario={cuestionarioMixto()}
        onChangeTipo={onChangeTipo}
      />,
    );
    const select2 = screen.getByLabelText("Tipo de la posición 2") as HTMLSelectElement;
    expect(select2.value).toBe("obligatorio");
    fireEvent.change(select2, { target: { value: "relleno" } });
    expect(onChangeTipo).toHaveBeenCalledWith(2, "relleno");
  });

  it("sin onChangeTipo, sigue mostrando el Pill (no-regresión)", () => {
    render(<PosicionesCanvas cuestionario={cuestionarioMixto()} />);
    expect(screen.getByText("Fija")).toBeInTheDocument();
    expect(screen.getByText("Pool")).toBeInTheDocument();
    expect(screen.getByText("Relleno")).toBeInTheDocument();
    expect(screen.queryByLabelText(/Tipo de la posición/)).not.toBeInTheDocument();
  });
});
