import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { I18nProvider, useI18n } from "../I18nContext";
import { CATALOGS } from "../index";
import es from "../es.json";

describe("i18n", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("t() resuelve la clave en el idioma activo", () => {
    const { result } = renderHook(() => useI18n(), { wrapper: I18nProvider });
    expect(result.current.lang).toBe("es");
    expect(result.current.t("nav.panel")).toBe("Panel");
  });

  it("cae a español si la clave falta en el idioma activo", () => {
    const original = (CATALOGS.en as Record<string, string>)["nav.panel"];
    delete (CATALOGS.en as Record<string, string>)["nav.panel"];
    try {
      const { result } = renderHook(() => useI18n(), { wrapper: I18nProvider });
      act(() => result.current.setLang("en"));
      expect(result.current.t("nav.panel")).toBe(es["nav.panel"]);
    } finally {
      (CATALOGS.en as Record<string, string>)["nav.panel"] = original;
    }
  });

  it("cambiar de idioma re-renderiza sin recarga (t() refleja el nuevo idioma)", () => {
    const { result } = renderHook(() => useI18n(), { wrapper: I18nProvider });
    expect(result.current.t("nav.panel")).toBe("Panel");
    act(() => result.current.setLang("en"));
    expect(result.current.lang).toBe("en");
    expect(result.current.t("nav.panel")).toBe("Dashboard");
  });

  it("persiste el idioma elegido en localStorage", () => {
    const { result } = renderHook(() => useI18n(), { wrapper: I18nProvider });
    act(() => result.current.setLang("en"));
    expect(localStorage.getItem("vb-lang")).toBe("en");
  });

  it("paridad de claves de TODOS los catálogos contra es.json (agregar un idioma = copiar y traducir)", () => {
    const esKeys = new Set(Object.keys(es));
    const report: Record<string, { faltan: string[]; sobran: string[] }> = {};
    for (const [langId, catalog] of Object.entries(CATALOGS)) {
      if (langId === "es") continue;
      const keys = new Set(Object.keys(catalog));
      const faltan = [...esKeys].filter((k) => !keys.has(k));
      const sobran = [...keys].filter((k) => !esKeys.has(k));
      if (faltan.length || sobran.length) report[langId] = { faltan, sobran };
    }
    expect(report).toEqual({});
  });
});
