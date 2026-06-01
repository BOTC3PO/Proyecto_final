/**
 * Tests de AccessibleList — reordenar 100% por teclado + anuncios aria-live,
 * sin drag-and-drop (WO06).
 */
import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { AccessibleList } from "../AccessibleList";

/** Wrapper con estado real: lista de strings editables. */
function Harness({ initial }: { initial: string[] }) {
  const [items, setItems] = useState<string[]>(initial);
  return (
    <AccessibleList<string>
      items={items}
      onChange={setItems}
      createItem={() => ""}
      label="Opciones"
      addLabel="Agregar opción"
      itemNoun="opción"
      minItems={1}
      renderItem={(item, index, onItemChange) => (
        <input
          aria-label={`Opción ${index + 1}`}
          value={item}
          onChange={(e) => onItemChange(e.target.value)}
        />
      )}
    />
  );
}

/** Lee el texto de los inputs en orden de aparición. */
function readOrder(): string[] {
  return screen
    .getAllByRole("textbox")
    .map((el) => (el as HTMLInputElement).value);
}

describe("AccessibleList", () => {
  it("renderiza los ítems con su contenido y número de posición", () => {
    render(<Harness initial={["a", "b", "c"]} />);
    expect(readOrder()).toEqual(["a", "b", "c"]);
    expect(screen.getByText("Opciones")).toBeInTheDocument();
  });

  it("agregar suma un ítem y lo anuncia en la región aria-live", async () => {
    const user = userEvent.setup();
    render(<Harness initial={["a"]} />);
    await user.click(screen.getByRole("button", { name: /agregar opción/i }));
    expect(readOrder()).toEqual(["a", ""]);
    expect(screen.getByRole("status")).toHaveTextContent(/agregad/i);
  });

  it("bajar reordena y lo anuncia", async () => {
    const user = userEvent.setup();
    render(<Harness initial={["a", "b", "c"]} />);
    await user.click(
      screen.getByRole("button", { name: /bajar opción de la posición 1/i }),
    );
    expect(readOrder()).toEqual(["b", "a", "c"]);
    expect(screen.getByRole("status")).toHaveTextContent(
      /posición 1 a la 2 de 3/i,
    );
  });

  it("subir reordena", async () => {
    const user = userEvent.setup();
    render(<Harness initial={["a", "b", "c"]} />);
    await user.click(
      screen.getByRole("button", { name: /subir opción de la posición 3/i }),
    );
    expect(readOrder()).toEqual(["a", "c", "b"]);
  });

  it("reordena 100% por teclado (Tab + Enter), sin mouse", async () => {
    const user = userEvent.setup();
    render(<Harness initial={["a", "b", "c"]} />);

    // Llegar por teclado al botón "bajar" del primer ítem y activarlo con Enter.
    const bajar1 = screen.getByRole("button", {
      name: /bajar opción de la posición 1/i,
    });
    bajar1.focus();
    expect(bajar1).toHaveFocus();
    await user.keyboard("{Enter}");

    expect(readOrder()).toEqual(["b", "a", "c"]);
    // El foco se conserva en el botón "bajar", ahora en la posición 2.
    expect(
      screen.getByRole("button", { name: /bajar opción de la posición 2/i }),
    ).toHaveFocus();

    // Seguir bajando con Espacio, sin tocar el mouse.
    await user.keyboard("[Space]");
    expect(readOrder()).toEqual(["b", "c", "a"]);
  });

  it("subir está deshabilitado en el primero y bajar en el último", () => {
    render(<Harness initial={["a", "b"]} />);
    expect(
      screen.getByRole("button", { name: /subir opción de la posición 1/i }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: /bajar opción de la posición 2/i }),
    ).toBeDisabled();
  });

  it("eliminar quita el ítem, lo anuncia y respeta minItems", async () => {
    const user = userEvent.setup();
    render(<Harness initial={["a", "b"]} />);
    await user.click(
      screen.getByRole("button", { name: /eliminar opción de la posición 1/i }),
    );
    expect(readOrder()).toEqual(["b"]);
    expect(screen.getByRole("status")).toHaveTextContent(/eliminad/i);
    // Con minItems=1, el último no se puede eliminar.
    expect(
      screen.getByRole("button", { name: /eliminar opción de la posición 1/i }),
    ).toBeDisabled();
  });

  it("editar un ítem propaga el cambio sin afectar el orden", async () => {
    const user = userEvent.setup();
    render(<Harness initial={["a", "b"]} />);
    const segundo = screen.getByRole("textbox", { name: /opción 2/i });
    await user.type(segundo, "X");
    expect(readOrder()).toEqual(["a", "bX"]);
  });

  it("la lista es una lista semántica con filas", () => {
    render(<Harness initial={["a", "b", "c"]} />);
    const list = screen.getByRole("list");
    expect(within(list).getAllByRole("listitem")).toHaveLength(3);
  });
});
