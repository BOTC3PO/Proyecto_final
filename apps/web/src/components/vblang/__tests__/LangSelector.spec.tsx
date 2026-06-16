/**
 * QA-FIX-10 — LangSelector: poblar el dropdown con los idiomas
 * REALES del endpoint, mostrar el nombre legible, caer al fallback
 * si el código no está en la tabla, mostrar estado claro si el
 * diccionario no está disponible.
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import LangSelector from "../LangSelector";

describe("LangSelector — QA-FIX-10", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("muestra 'Cargando idiomas…' durante el fetch", () => {
    // fetchLanguages que nunca resuelve en este test → status: loading
    const never = () => new Promise<string[] | null>(() => {});
    render(<LangSelector value="es" onChange={() => {}} fetchLanguagesFn={never} />);
    expect(screen.getByText(/Cargando idiomas/i)).toBeInTheDocument();
  });

  it("pobla el <select> con los idiomas del endpoint y muestra el nombre legible", async () => {
    const fetchLanguages = vi.fn(async () => ["fr", "la", "pt"]);
    render(
      <LangSelector value="fr" onChange={() => {}} fetchLanguagesFn={fetchLanguages} />
    );
    await waitFor(() => {
      expect(screen.getByTestId("lang-selector")).toBeInTheDocument();
    });
    const select = screen.getByTestId("lang-selector") as HTMLSelectElement;
    // El select tiene 3 opciones, en el orden que devolvió el endpoint.
    const options = Array.from(select.options).map((o) => o.value);
    expect(options).toEqual(["fr", "la", "pt"]);
    // El option de "fr" muestra el nombre legible (Français), no el código crudo.
    const frOption = Array.from(select.options).find((o) => o.value === "fr");
    expect(frOption?.textContent).toMatch(/Français/);
    // El option de "la" muestra "Latín".
    const laOption = Array.from(select.options).find((o) => o.value === "la");
    expect(laOption?.textContent).toMatch(/Latín/);
  });

  it("si el código no está en LANG_NAMES, muestra el código tal cual (fallback, nunca rompe)", async () => {
    // "oc" (occitano) NO está en LANG_NAMES — el option debe mostrar "oc (oc)".
    const fetchLanguages = vi.fn(async () => ["oc"]);
    render(
      <LangSelector value="oc" onChange={() => {}} fetchLanguagesFn={fetchLanguages} />
    );
    await waitFor(() => {
      expect(screen.getByTestId("lang-selector")).toBeInTheDocument();
    });
    const select = screen.getByTestId("lang-selector") as HTMLSelectElement;
    const ocOption = Array.from(select.options).find((o) => o.value === "oc");
    expect(ocOption?.textContent).toMatch(/oc/);
  });

  it("cambiar el <select> notifica onChange con el nuevo código", async () => {
    const fetchLanguages = vi.fn(async () => ["fr", "la", "pt"]);
    const onChange = vi.fn();
    render(
      <LangSelector value="fr" onChange={onChange} fetchLanguagesFn={fetchLanguages} />
    );
    await waitFor(() => {
      expect(screen.getByTestId("lang-selector")).toBeInTheDocument();
    });
    const select = screen.getByTestId("lang-selector") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "la" } });
    expect(onChange).toHaveBeenCalledWith("la");
  });

  it("al primer fetch con lista que incluye 'es', aplica 'es' como default si el value controlado no es válido", async () => {
    // value="xx" (no está en la lista) → debe aplicar pickDefaultLang
    // (que prefiere 'es' si está, si no el primero).
    const fetchLanguages = vi.fn(async () => ["fr", "es", "pt"]);
    const onChange = vi.fn();
    render(
      <LangSelector value="xx" onChange={onChange} fetchLanguagesFn={fetchLanguages} />
    );
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("es");
    });
  });

  it("al primer fetch sin 'es', aplica el primero de la lista como default", async () => {
    const fetchLanguages = vi.fn(async () => ["fr", "la", "pt"]);
    const onChange = vi.fn();
    render(
      <LangSelector value="" onChange={onChange} fetchLanguagesFn={fetchLanguages} />
    );
    await waitFor(() => {
      // "fr" es el primero alfabéticamente.
      expect(onChange).toHaveBeenCalledWith("fr");
    });
  });

  it("si fetchLanguages devuelve null (servicio no disponible), muestra 'Diccionario no disponible'", async () => {
    const fetchLanguages = vi.fn(async () => null);
    render(
      <LangSelector value="es" onChange={() => {}} fetchLanguagesFn={fetchLanguages} />
    );
    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/Diccionario no disponible/i);
    });
    // El <select> no se renderiza — sólo el mensaje.
    expect(screen.queryByTestId("lang-selector")).not.toBeInTheDocument();
  });

  it("si fetchLanguages devuelve [] (schema válido pero sin idiomas), muestra 'Diccionario no disponible'", async () => {
    const fetchLanguages = vi.fn(async () => []);
    render(
      <LangSelector value="es" onChange={() => {}} fetchLanguagesFn={fetchLanguages} />
    );
    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/Diccionario no disponible/i);
    });
  });
});
