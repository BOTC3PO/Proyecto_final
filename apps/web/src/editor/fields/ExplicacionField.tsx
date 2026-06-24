import type { Plantilla } from "@vb/vblang";
import BufferedText from "../BufferedText";
import {
  readExplicacion,
  writeExplicacion,
} from "../../components/vblang/plantillaAst";
import { useFieldError } from "../LintContext";

export type ExplicacionFieldProps = {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

export default function ExplicacionField({ plantilla, onChange }: ExplicacionFieldProps) {
  const text = readExplicacion(plantilla);

  return (
    <BufferedText
      label="Explicación"
      help="Texto que se muestra al alumno tras responder. Podés usar {variable} para interpolar."
      multiline
      rows={3}
      value={text}
      placeholder="Ej.: La respuesta correcta es {respuesta} porque…"
      externalError={useFieldError("explicacion")}
      commit={(next) => {
        onChange(writeExplicacion(plantilla, next));
        return true;
      }}
    />
  );
}
