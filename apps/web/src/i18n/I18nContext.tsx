import { createContext, useContext, useState, type ReactNode } from "react";
import { CATALOGS, LANGUAGES, DEFAULT_LANGUAGE, type LanguageId } from "./index";

const STORAGE_KEY = "vb-lang";

type I18nContextValue = {
  lang: LanguageId;
  setLang: (id: LanguageId) => void;
  availableLanguages: typeof LANGUAGES;
  t: (key: string) => string;
};

function translate(lang: LanguageId, key: string): string {
  const value = CATALOGS[lang]?.[key] ?? CATALOGS[DEFAULT_LANGUAGE]?.[key];
  if (value === undefined) {
    // Clave faltante hasta en español: NUNCA mostrar la key pelada en
    // producción sería peor que un warning en consola — esto es un bug
    // de es.json, no un idioma incompleto.
    console.warn(`[i18n] clave faltante: ${key}`);
    return key;
  }
  return value;
}

export const I18nContext = createContext<I18nContextValue>({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  availableLanguages: LANGUAGES,
  t: (key) => translate(DEFAULT_LANGUAGE, key),
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageId>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as LanguageId;
      if (stored && CATALOGS[stored]) return stored;
    } catch { /* ignore */ }
    return DEFAULT_LANGUAGE;
  });

  const setLang = (id: LanguageId) => {
    if (!CATALOGS[id]) return;
    setLangState(id);
    try { localStorage.setItem(STORAGE_KEY, id); } catch { /* ignore */ }
  };

  const t = (key: string) => translate(lang, key);

  return (
    <I18nContext.Provider value={{ lang, setLang, availableLanguages: LANGUAGES, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
