import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import OrdenarRenderer from "../OrdenarRenderer";

describe("OrdenarRenderer", () => {
  it("renderiza una card por item con el label en orden inicial", () => {
    render(<OrdenarRenderer items={["uno", "dos", "tres"]} />);
    const list = screen.getByTestId("ordenar-list");
    const items = list.querySelectorAll('[data-testid^="ordenar-card-"]');
    expect(items).toHaveLength(3);
    expect(items[0].textContent).toContain("uno");
    expect(items[1].textContent).toContain("dos");
    expect(items[2].textContent).toContain("tres");
  });

  it("respeta `value` controlado si se pasa", () => {
    render(
      <OrdenarRenderer
        items={["a", "b", "c"]}
        value={["c", "a", "b"]}
      />,
    );
    const items = screen
      .getByTestId("ordenar-list")
      .querySelectorAll('[data-testid^="ordenar-card-"]');
    expect(items[0].textContent).toContain("c");
    expect(items[1].textContent).toContain("a");
    expect(items[2].textContent).toContain("b");
  });

  it("acepta onChange y disabled como props (smoke)", () => {
    const onChange = vi.fn();
    render(
      <OrdenarRenderer
        items={["x", "y"]}
        onChange={onChange}
        disabled
      />,
    );
    // disabled no rompe, render OK
    expect(screen.getByTestId("ordenar-list")).toBeTruthy();
  });

  it("post-submit pinta verde/rojo según correctOrder", () => {
    render(
      <OrdenarRenderer
        items={["a", "b", "c"]}
        value={["a", "c", "b"]}
        disabled
        correctOrder={["a", "b", "c"]}
      />,
    );
    const cardA = screen.getByTestId("ordenar-card-a");
    const cardC = screen.getByTestId("ordenar-card-c");
    // a en posición 0 → correcta → emerald
    expect(cardA.className).toMatch(/emerald/);
    // c en posición 1 (correcta es b) → rojo
    expect(cardC.className).toMatch(/red/);
  });
});
