/**
 * editor/fields/GeneradorField.tsx — base "generador asistido", sobre primitivos.
 *
 * Reconstruye el chrome de la base generador del editor viejo
 * (`PlantillaEditorSchema` ~1359) REUTILIZANDO los subsistemas existentes:
 *   • `GeneradorPicker` (componente viejo, sin tocar) para elegir el generador.
 *   • `applyGenerador` / `getGeneradorProvidedVars` (lógica pura) para mutar el
 *     AST y conocer las variables que el generador provee al enunciado.
 *   • `readDificultad` / `writeDificultad` para el control de dificultad
 *     (`metadata: dificultad`).
 *
 * Las variables que provee el generador se insertan en el enunciado vía
 * `onInsertVariable` (el `GeneradorPicker` en modo "formulario" las ofrece como
 * tokens clicables); el resto del editor (la sección Enunciado) las consume.
 */
import type { Plantilla } from "@vb/vblang";
import { Field, Select } from "../../ui";
import GeneradorPicker from "../../components/vblang/GeneradorPicker";
import { getBlock } from "../../components/vblang/plantillaAst";
import {
  applyGenerador,
  readDificultad,
  writeDificultad,
} from "../../components/vblang/plantillaFields";

/** Opciones de dificultad (escriben `metadata: dificultad`). "" = al azar. */
const DIFICULTADES: { value: string; label: string }[] = [
  { value: "", label: "Al azar" },
  { value: "basico", label: "Básico" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
];

export type GeneradorFieldProps = {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  /** Inserta `{var}` en el enunciado al tocar una variable provista. */
  onInsertVariable?: (token: string) => void;
};

export default function GeneradorField({
  plantilla,
  onChange,
  onInsertVariable,
}: GeneradorFieldProps) {
  const generadorId = getBlock(plantilla, "generador")?.id ?? "";
  const dificultad = readDificultad(plantilla);

  return (
    <>
      {/* Componente reusado tal cual; el chrome alrededor es de `ui/`. */}
      <GeneradorPicker
        value={generadorId}
        onChange={(id) => onChange(applyGenerador(plantilla, id))}
        docsVariant="formulario"
        onInsertVariable={onInsertVariable}
      />

      <Field label="Dificultad" help="Nivel que el generador apunta a producir.">
        <Select
          value={dificultad}
          onChange={(e) => onChange(writeDificultad(plantilla, e.target.value))}
        >
          {DIFICULTADES.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </Select>
      </Field>
    </>
  );
}
