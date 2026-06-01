/**
 * Combobox de palabras del diccionario (WO09): autocompletado operable por
 * teclado (patrón ARIA combobox/listbox) y aviso de validación no bloqueante.
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import PalabraCombobox from "../PalabraCombobox";
import type { LookupResult } from "../../../services/diccionario";

function Harness({
  fetchPrefix,
  fetchLookup,
  onLookup,
}: {
  fetchPrefix?: (q: string) => Promise<string[]>;
  fetchLookup?: (w: string) => Promise<LookupResult | null>;
  onLookup?: (w: string, e: unknown) => void;
}) {
  const [value, setValue] = useState("");
  return (
    <PalabraCombobox
      label="Palabra 1"
      value={value}
      onChange={setValue}
      fetchPrefix={fetchPrefix ?? (async () => [])}
      fetchLookup={fetchLookup ?? (async () => null)}
      onLookup={onLookup}
    />
  );
}

describe("PalabraCombobox", () => {
  it("expone el patrón ARIA combobox/listbox con nombre accesible", () => {
    render(<Harness />);
    const input = screen.getByRole("combobox", { name: "Palabra 1" });
    expect(input).toHaveAttribute("aria-autocomplete", "list");
    expect(input).toHaveAttribute("aria-expanded", "false");
  });

  it("autocompleta y permite elegir una opción por teclado", async () => {
    const user = userEvent.setup();
    render(
      <Harness fetchPrefix={async () => ["gato", "gata", "gatear"]} />,
    );
    const input = screen.getByRole("combobox", { name: "Palabra 1" });
    await user.type(input, "gat");

    // las sugerencias aparecen tras el debounce
    await screen.findByRole("option", { name: "gato" });
    expect(input).toHaveAttribute("aria-expanded", "true");

    // ↓ resalta la primera y Enter la elige
    await user.keyboard("{ArrowDown}{Enter}");
    expect((input as HTMLInputElement).value).toBe("gato");
    // al elegir se cierra el listbox (sus opciones salen del árbol accesible)
    expect(screen.queryByRole("option")).not.toBeInTheDocument();
    expect(input).toHaveAttribute("aria-expanded", "false");
  });

  it("avisa (sin bloquear) cuando la palabra no existe", async () => {
    const user = userEvent.setup();
    render(
      <Harness fetchLookup={async () => ({ found: false })} />,
    );
    const input = screen.getByRole("combobox", { name: "Palabra 1" });
    await user.type(input, "gaot");

    await screen.findByRole("status");
    expect(screen.getByRole("status")).toHaveTextContent(/no está en el diccionario/i);
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("no avisa si el diccionario no está disponible (lookup null)", async () => {
    const user = userEvent.setup();
    render(<Harness fetchLookup={async () => null} />);
    const input = screen.getByRole("combobox", { name: "Palabra 1" });
    await user.type(input, "gato");
    await new Promise((r) => setTimeout(r, 350));
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("reporta la entrada encontrada vía onLookup", async () => {
    const user = userEvent.setup();
    const onLookup = vi.fn();
    render(
      <Harness
        fetchLookup={async () => ({
          found: true,
          entry: { word: "gato", definitions: ["m. Mamífero."] },
        })}
        onLookup={onLookup}
      />,
    );
    await user.type(
      screen.getByRole("combobox", { name: "Palabra 1" }),
      "gato",
    );
    await waitFor(() =>
      expect(onLookup).toHaveBeenCalledWith("gato", {
        word: "gato",
        definitions: ["m. Mamífero."],
      }),
    );
  });
});
