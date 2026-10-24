/**
 * editor/fields/PuntajePistaField.tsx — puntaje + pista (metadata), sobre primitivos.
 *
 * Reusa `readPuntaje`/`writePuntaje`/`readPista`/`writePista` (capa de datos).
 * Ambos usan `BufferedText` para que el round-trip del AST no pise lo que se
 * está tipeando (ej. un decimal a medio escribir).
 */
import type { CSSProperties } from "react";
import type { Plantilla } from "@vb/vblang";
import BufferedText from "../BufferedText";
import { readPista, readPuntaje, writePista, writePuntaje } from "../../components/vblang/plantillaFields";

export type PuntajePistaFieldProps = {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

const wrapStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-3)",
};

export default function PuntajePistaField({ plantilla, onChange }: PuntajePistaFieldProps) {
  const puntaje = readPuntaje(plantilla);
  const pista = readPista(plantilla);

  return (
    <div style={wrapStyle}>
      <BufferedText
        label="Puntaje"
        help="Opcional. Puntos que vale la pregunta."
        numeric
        step={0.5}
        min={0}
        placeholder="Sin puntaje"
        value={puntaje === null ? "" : String(puntaje)}
        errorMessage="Número inválido"
        commit={(text) => {
          if (text.trim() === "") {
            onChange(writePuntaje(plantilla, null));
            return true;
          }
          const n = Number(text);
          if (!Number.isFinite(n)) return false;
          onChange(writePuntaje(plantilla, n));
          return true;
        }}
      />

      <BufferedText
        label="Pista"
        help="Pista opcional para el estudiante."
        value={pista}
        commit={(text) => {
          onChange(writePista(plantilla, text));
          return true;
        }}
      />
    </div>
  );
}
