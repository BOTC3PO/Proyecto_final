import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BlockRenderer } from "../../BlockRenderer";

const doc = {
  version: 1 as const,
  blocks: [{ id: "i", type: "image" as const, url: "https://upload.wikimedia.org/x.png", alt: "Una imagen", caption: "Autoría, CC0", width: "full" as const }],
};

describe("bloque image", () => {
  it("se dibuja con su texto alternativo y su pie (antes devolvía un div vacío)", () => {
    render(<BlockRenderer doc={doc} />);
    const img = screen.getByAltText("Una imagen") as HTMLImageElement;
    expect(img.src).toBe("https://upload.wikimedia.org/x.png");
    expect(screen.getByText("Autoría, CC0")).toBeTruthy();
  });

  it("si la imagen no carga, avisa en vez de dejar un hueco", () => {
    render(<BlockRenderer doc={doc} />);
    fireEvent.error(screen.getByAltText("Una imagen"));
    expect(screen.getByText(/No se pudo cargar la imagen/)).toBeTruthy();
  });
});
