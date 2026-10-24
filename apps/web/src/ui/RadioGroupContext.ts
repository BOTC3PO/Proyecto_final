/**
 * ui/RadioGroupContext.ts — contexto compartido de RadioGroup.
 *
 * Vive en su propio módulo (no en Radio.tsx) para:
 *   1. Satisfacer react-refresh (un archivo = un componente exportado).
 *   2. Evitar import circular: Radio → contexto, RadioGroup → {Radio, contexto}.
 */
import { createContext } from "react";

export type RadioGroupContextValue = {
  name: string;
  value: string | null;
  onChange: (value: string) => void;
};

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);
