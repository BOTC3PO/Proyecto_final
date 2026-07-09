import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { I18nProvider, useI18n } from "../I18nContext";
import { CATALOGS } from "../index";
import es from "../es.json";
import en from "../en.json";

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

  it("paridad de claves entre es.json y en.json (informativo: agregar un idioma = copiar y traducir)", () => {
    const esKeys = Object.keys(es).sort();
    const enKeys = Object.keys(en).sort();
    const missingInEn = esKeys.filter((k) => !enKeys.includes(k));
    const missingInEs = enKeys.filter((k) => !esKeys.includes(k));
    expect({ missingInEn, missingInEs }).toEqual({ missingInEn: [], missingInEs: [] });
  });
});
