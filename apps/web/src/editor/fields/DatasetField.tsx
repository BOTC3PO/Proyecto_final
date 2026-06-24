/**
 * editor/fields/DatasetField.tsx — bloque `dataset:`, sobre primitivos.
 *
 * Autorea el bloque `dataset: "<nombre>"` (alimenta preguntas/timelines
 * data-driven, PlantillaEditorSchema ~1062) REUTILIZANDO el explorador
 * existente:
 *   • `DatasetExplorer` (componente viejo, sin tocar) — popover de sólo lectura
 *     que lista los datasets disponibles (vía `datasetApi.listDatasets`), para
 *     resolver "¿qué nombres existen?" sin salir del editor.
 *   • El bloque se escribe/limpia con los helpers de bloque genéricos
 *     (`withBlock`/`withoutBlock`), igual que el resto de bloques simples.
 *
 * Chrome (input + layout) sobre primitivos; la lógica de datasets se consume,
 * no se reescribe.
 */
import type { CSSProperties } from "react";
import type { Plantilla } from "@vb/vblang";
import BufferedText from "../BufferedText";
import {
  DUMMY_LOC,
  getBlock,
  withBlock,
  withoutBlock,
} from "../../components/vblang/plantillaAst";
import DatasetExplorer from "../../components/vblang/DatasetExplorer";

/** Nombre del dataset referenciado, o "" si no hay bloque. */
function readDataset(p: Plantilla): string {
  return getBlock(p, "dataset")?.nombre ?? "";
}

/** Escribe (o quita, con "") el bloque `dataset:`. */
function writeDataset(p: Plantilla, nombre: string): Plantilla {
  return nombre.trim() === ""
    ? withoutBlock(p, "dataset")
    : withBlock(p, { kind: "dataset", nombre: nombre.trim(), loc: DUMMY_LOC });
}

const rowStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: "var(--space-2)",
};

export type DatasetFieldProps = {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

export default function DatasetField({ plantilla, onChange }: DatasetFieldProps) {
  return (
    <div style={rowStyle}>
      <div style={{ flex: 1 }}>
        <BufferedText
          label="Dataset"
          help='Nombre del dataset que alimenta esta plantilla. Vacío = sin dataset.'
          placeholder="ej.: paises_del_mundo"
          value={readDataset(plantilla)}
          commit={(text) => {
            onChange(writeDataset(plantilla, text));
            return true;
          }}
        />
      </div>
      {/* Explorador reusado tal cual: browse de los nombres disponibles. */}
      <DatasetExplorer />
    </div>
  );
}
