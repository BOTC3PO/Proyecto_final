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
    // FIX-DICT-SELECTOR: el nombre viene del JSON de 198 ediciones de
    // Wiktionary (apps/web/src/data/wiktionary-editions.json). Para `fr`,
    // el campo `english` del JSON es "français" (nombre nativo, no "Français"
    // con capital como en el hardcode anterior). Usamos match case-insensitive
    // para ser tolerantes a cómo el JSON lo escriba.
    const frOption = Array.from(select.options).find((o) => o.value === "fr");
    expect(frOption?.textContent?.toLowerCase()).toMatch(/français/);
    // Para `la`, el JSON dice "Latina" (forma latinizada del nombre).
    const laOption = Array.from(select.options).find((o) => o.value === "la");
    expect(laOption?.textContent?.toLowerCase()).toMatch(/latina/);
  });

  it("si el código no está en LANG_NAMES (ni en el JSON de 198 ediciones), muestra el código tal cual (fallback, nunca rompe)", async () => {
    // FIX-DICT-SELECTOR: con el JSON de 198 ediciones, "oc" SÍ está
    // (occitano). Usamos un código ficticio "xx" que NO está en ninguna
    // tabla — el option debe mostrar "xx (xx)" (fallback).
    const fetchLanguages = vi.fn(async () => ["xx"]);
    render(
      <LangSelector value="xx" onChange={() => {}} fetchLanguagesFn={fetchLanguages} />
    );
    await waitFor(() => {
      expect(screen.getByTestId("lang-selector")).toBeInTheDocument();
    });
    const select = screen.getByTestId("lang-selector") as HTMLSelectElement;
    const xxOption = Array.from(select.options).find((o) => o.value === "xx");
    expect(xxOption?.textContent).toMatch(/xx/);
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

// ─── FIX-DICT-SELECTOR: catálogo de 198 ediciones ─────────────────────────────

describe("FIX-DICT-SELECTOR: catálogo de 198 ediciones de Wiktionary", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("displayLangName devuelve el nombre nativo para idiomas del JSON", async () => {
    const { displayLangName } = await import("../../../services/diccionario");
    // `fr` → "français" (nombre nativo, del JSON campo `english`).
    // Comparamos lowercase para ser tolerantes a cómo el JSON lo escribe.
    expect(displayLangName("fr").toLowerCase()).toBe("français");
    expect(displayLangName("la").toLowerCase()).toBe("latina");
    expect(displayLangName("es").toLowerCase()).toBe("español");
    expect(displayLangName("pt").toLowerCase()).toBe("português");
  });

  it("displayLangName cae al código para idiomas no en el JSON (fallback)", async () => {
    const { displayLangName } = await import("../../../services/diccionario");
    // "xx" no está en las 198 ediciones → fallback al código tal cual.
    expect(displayLangName("xx")).toBe("xx");
    expect(displayLangName("zz")).toBe("zz");
  });

  it("LANG_NAMES tiene 198 entradas (las ediciones de Wiktionary)", async () => {
    const { LANG_NAMES } = await import("../../../services/diccionario");
    expect(Object.keys(LANG_NAMES).length).toBe(198);
  });

  it("el selector ofrece SOLO los idiomas del endpoint, NO los 198 del catálogo", async () => {
    // Candado crítico del diseño de 3 capas:
    //  - El endpoint dice QUÉ hay (3 idiomas en este caso).
    //  - El JSON dice CÓMO se muestra (198 nombres legibles).
    //  - El selector ofrece los 3 del endpoint, no los 198.
    const fetchLanguages = vi.fn(async () => ["fr", "la", "pt"]);
    render(
      <LangSelector value="fr" onChange={() => {}} fetchLanguagesFn={fetchLanguages} />
    );
    await waitFor(() => {
      expect(screen.getByTestId("lang-selector")).toBeInTheDocument();
    });
    const select = screen.getByTestId("lang-selector") as HTMLSelectElement;
    const optionValues = Array.from(select.options).map((o) => o.value);
    expect(optionValues).toEqual(["fr", "la", "pt"]);
    // NO debe haber 198 opciones — sólo 3.
    expect(optionValues.length).toBe(3);
  });
});
