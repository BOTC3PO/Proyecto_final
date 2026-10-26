/**
 * editor/LangContext.ts — idioma del diccionario, transversal al editor nuevo.
 *
 * Réplica del `LangContext` del editor viejo: un solo idioma compartido por
 * todos los `PalabraCombobox` del template (etiquetas de análisis sintáctico y
 * respuestas-palabra de identificar_palabras). El `LangSelector` del shell lo
 * fija; los campos lo consumen con `useLang()`.
 */
import { createContext, useContext } from "react";

export const LangContext = createContext<string>("es");

/** Idioma actual del diccionario (default "es"). */
export function useLang(): string {
  return useContext(LangContext);
}
