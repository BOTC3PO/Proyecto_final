import { useState } from "react";
import { Plus, Settings } from "lucide-react";
import type { VisualSpec } from "../../../visualizadores/types";
import { TOOL_PARAM_SCHEMAS } from "../TheorySlideEditor";
import HerramientaPicker from "../HerramientaPicker";
import ToolParamEditor from "./ToolParamEditor";
import ToolPreview from "./ToolPreview";

type Props = {
  spec: VisualSpec | undefined;
  onChange: (spec: VisualSpec | undefined) => void;
};

/**
 * Self-contained tool selector + parameter editor + preview.
 *
 * Manages the HerramientaPicker modal internally.
 * Does NOT call normalizeSpec — that happens inside ToolPreview.
 */
export default function ToolEditor({ spec, onChange }: Props) {
  const [pickerOpen, setPickerOpen] = useState(false);

  const handlePickerSelect = (detail: string) => {
    try {
      const parsed = JSON.parse(detail) as { spec: VisualSpec };
      onChange(parsed.spec);
    } catch {
      // ignore malformed picker output
    }
    setPickerOpen(false);
  };

  const hasParams = spec ? (TOOL_PARAM_SCHEMAS[spec.kind] ?? []).length > 0 : false;
  const hasArrayEditor =
    spec?.kind === "social-choropleth" || spec?.kind === "social-population-pyramid";
  const showPreview = Boolean(spec) && (hasParams || hasArrayEditor);

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      {/* ── Picker modal ── */}
      <HerramientaPicker
        isOpen={pickerOpen}
        onSelect={handlePickerSelect}
        onClose={() => setPickerOpen(false)}
      />

      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Settings size={13} className="text-gray-400" />
          <p className="text-xs font-medium text-gray-600">Herramienta interactiva</p>
        </div>

        {spec ? (
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-400 font-mono">{spec.kind}</span>
            <button
              type="button"
              className="text-xs text-blue-600 hover:underline"
              onClick={() => setPickerOpen(true)}
            >
              Cambiar
            </button>
            <button
              type="button"
              className="text-xs text-red-400 hover:underline"
              onClick={() => onChange(undefined)}
            >
              Quitar
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 border border-blue-200 rounded px-2 py-1 bg-white hover:bg-blue-50"
            onClick={() => setPickerOpen(true)}
          >
            <Plus size={11} />
            Agregar herramienta
          </button>
        )}
      </div>

      {/* ── Parameter editor ── */}
      {spec ? (
        <>
          <ToolParamEditor spec={spec} onChange={onChange} />

          {/* ── Inline preview (only shown when there are editable params) ── */}
          {showPreview && (
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Vista previa
              </p>
              <ToolPreview spec={spec} />
            </div>
          )}
        </>
      ) : (
        <p className="text-xs text-gray-400">
          Agregá una herramienta interactiva para mostrarla dentro de esta diapositiva.
          La herramienta reemplaza el cuerpo de texto.
        </p>
      )}
    </div>
  );
}
