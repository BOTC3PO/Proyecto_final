/**
 * editor/fields/EtiquetasField.tsx — pares {palabra, etiqueta} con diccionario.
 *
 * Subsistema de etiquetas (análisis sintáctico) reconstruido sobre primitivos,
 * REUTILIZANDO la lógica/los componentes existentes:
 *   • `AccessibleList` (lista repetible accesible, reorden por botones).
 *   • `PalabraCombobox` (autocompletado + validación contra el diccionario).
 *   • `diccionario` (`CATEGORIAS_GRAMATICALES`, `sugerirCategoriaGramatical`).
 *   • `readEtiquetas`/`writeEtiquetas` (capa de datos).
 *
 * El idioma del diccionario viene del `LangContext` del shell (compartido con
 * las respuestas-palabra de identificar_palabras). El lint del campo entra por
 * `LintContext` → `FieldGroup.error`.
 */
import { useId, useState, type CSSProperties } from "react";
import type { ListField, Plantilla } from "@vb/vblang";
import { Input } from "../../ui";
import FieldGroup from "../FieldGroup";
import AccessibleList from "../../components/vblang/AccessibleList";
import PalabraCombobox from "../../components/vblang/PalabraCombobox";
import {
  CATEGORIAS_GRAMATICALES,
  sugerirCategoriaGramatical,
  type EntradaDiccionario,
} from "../../services/diccionario";
import {
  readEtiquetas,
  writeEtiquetas,
  type EtiquetaRow,
} from "../../components/vblang/plantillaFields";
import { useLang } from "../LangContext";
import { useFieldError } from "../LintContext";

const CATEGORIAS_DATALIST_ID = "editor-v2-categorias-gramaticales";

export type EtiquetasFieldProps = {
  field: ListField;
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

const rowStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "var(--space-2)",
};

const cellStyle: CSSProperties = {
  minWidth: 0,
  flex: 1,
};

export default function EtiquetasField({ field, plantilla, onChange }: EtiquetasFieldProps) {
  const rows = readEtiquetas(plantilla);
  const error = useFieldError(field.key);

  return (
    <FieldGroup label={field.label} help={field.help} error={error}>
      <datalist id={CATEGORIAS_DATALIST_ID}>
        {CATEGORIAS_GRAMATICALES.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
      <AccessibleList<EtiquetaRow>
        items={rows}
        onChange={(next) => onChange(writeEtiquetas(plantilla, next))}
        createItem={() => ({ palabra: "", etiqueta: "" })}
        label={field.label}
        addLabel="Agregar etiqueta"
        itemNoun="etiqueta"
        minItems={field.minItems ?? 0}
        renderItem={(item, index, onItem) => (
          <EtiquetaRowEditor item={item} index={index} onItem={onItem} />
        )}
      />
    </FieldGroup>
  );
}

/**
 * Fila palabra → etiqueta: la palabra usa el combobox del diccionario y, al
 * resolverse, propone la categoría gramatical (autocompleta sólo si la etiqueta
 * está vacía; el autor siempre puede sobrescribir, con datalist de categorías).
 */
function EtiquetaRowEditor({
  item,
  index,
  onItem,
}: {
  item: EtiquetaRow;
  index: number;
  onItem: (next: EtiquetaRow) => void;
}) {
  const etiquetaId = useId();
  const lang = useLang();
  const [sugerida, setSugerida] = useState<string | null>(null);

  const handleLookup = (_word: string, entry: EntradaDiccionario | null) => {
    const cat = sugerirCategoriaGramatical(entry);
    setSugerida(cat);
    if (cat && item.etiqueta.trim() === "") {
      onItem({ ...item, etiqueta: cat });
    }
  };

  const mostrarSugerencia =
    sugerida !== null && sugerida !== item.etiqueta.trim();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
      <div style={rowStyle}>
        <div style={cellStyle}>
          <PalabraCombobox
            label={`Palabra ${index + 1}`}
            value={item.palabra}
            onChange={(palabra) => onItem({ ...item, palabra })}
            onLookup={handleLookup}
            placeholder="palabra"
            lang={lang}
          />
        </div>
        <div style={cellStyle}>
          <Input
            id={etiquetaId}
            list={CATEGORIAS_DATALIST_ID}
            aria-label={`Etiqueta ${index + 1}`}
            value={item.etiqueta}
            placeholder="etiqueta"
            onChange={(e) => onItem({ ...item, etiqueta: e.target.value })}
          />
        </div>
      </div>
      {mostrarSugerencia ? (
        <button
          type="button"
          onClick={() => onItem({ ...item, etiqueta: sugerida! })}
          style={{
            alignSelf: "flex-start",
            background: "none",
            border: "none",
            padding: "var(--space-0)",
            cursor: "pointer",
            fontSize: "var(--text-xs)",
            color: "var(--c-primary)",
            textDecoration: "underline",
          }}
        >
          Sugerencia del diccionario: usar «{sugerida}»
        </button>
      ) : null}
    </div>
  );
}
