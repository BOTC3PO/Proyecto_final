import { useState } from "react";
import type { LineChartSpec, VectorDiagramSpec, StaticImageSpec, TimelineSpec, LatexSpec } from "../../generadoresV2/core/types";

interface HerramientaPickerProps {
  isOpen: boolean;
  onSelect: (detail: string | undefined) => void;
  onClose: () => void;
}

type ToolType = "line-chart" | "vector-diagram" | "latex" | "static-image" | "timeline";

const TOOLS: Array<{ type: ToolType; label: string; description: string }> = [
  { type: "line-chart",      label: "Gráfico de líneas",  description: "Series temporales, física, economía" },
  { type: "vector-diagram",  label: "Diagrama de vectores", description: "Fuerzas, física" },
  { type: "latex",           label: "Fórmula LaTeX",      description: "Cualquier expresión matemática" },
  { type: "static-image",   label: "Imagen",              description: "URL de imagen de contexto" },
  { type: "timeline",        label: "Línea de tiempo",    description: "Historia, biología" },
];

// ── Sub-forms ─────────────────────────────────────────────────────────────────

function LineChartForm({ onConfirm }: { onConfirm: (spec: LineChartSpec) => void }) {
  const [title, setTitle] = useState("");
  const [xLabel, setXLabel] = useState("");
  const [yLabel, setYLabel] = useState("");
  const [csvData, setCsvData] = useState("0,0\n1,1\n2,4\n3,9");

  const handleConfirm = () => {
    const points = csvData
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [x, y] = line.split(",").map(Number);
        return { x: x ?? 0, y: y ?? 0 };
      });

    onConfirm({
      kind: "line-chart",
      title: title || undefined,
      xLabel: xLabel || undefined,
      yLabel: yLabel || undefined,
      series: [{ id: "s1", label: yLabel || "Serie 1", points }],
    });
  };

  return (
    <div className="space-y-3">
      <input
        className="input-field"
        placeholder="Título (opcional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        <input
          className="input-field"
          placeholder="Eje X (ej: tiempo)"
          value={xLabel}
          onChange={(e) => setXLabel(e.target.value)}
        />
        <input
          className="input-field"
          placeholder="Eje Y (ej: posición)"
          value={yLabel}
          onChange={(e) => setYLabel(e.target.value)}
        />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">Datos (x,y — una por línea)</p>
        <textarea
          className="input-field font-mono text-xs"
          rows={5}
          value={csvData}
          onChange={(e) => setCsvData(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleConfirm} className="btn-primary w-full">
        Confirmar gráfico
      </button>
    </div>
  );
}

function VectorForm({ onConfirm }: { onConfirm: (spec: VectorDiagramSpec) => void }) {
  const [rows, setRows] = useState([
    { id: "v1", label: "F1", dx: "1", dy: "0" },
    { id: "v2", label: "F2", dx: "0", dy: "1" },
  ]);

  const addRow = () =>
    setRows((prev) => [
      ...prev,
      { id: `v${prev.length + 1}`, label: `F${prev.length + 1}`, dx: "0", dy: "0" },
    ]);

  const updateRow = (i: number, field: string, value: string) => {
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, [field]: value } : r)));
  };

  const handleConfirm = () => {
    onConfirm({
      kind: "vector-diagram",
      vectors: rows.map((r) => ({
        id: r.id,
        label: r.label,
        dx: Number(r.dx) || 0,
        dy: Number(r.dy) || 0,
      })),
    });
  };

  return (
    <div className="space-y-3">
      {rows.map((row, i) => (
        <div key={row.id} className="grid grid-cols-4 gap-2 items-center">
          <input
            className="input-field col-span-2"
            placeholder="Etiqueta"
            value={row.label}
            onChange={(e) => updateRow(i, "label", e.target.value)}
          />
          <input
            className="input-field"
            placeholder="dx"
            type="number"
            value={row.dx}
            onChange={(e) => updateRow(i, "dx", e.target.value)}
          />
          <input
            className="input-field"
            placeholder="dy"
            type="number"
            value={row.dy}
            onChange={(e) => updateRow(i, "dy", e.target.value)}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addRow}
        className="text-xs text-blue-600 hover:underline"
      >
        + Agregar vector
      </button>
      <button type="button" onClick={handleConfirm} className="btn-primary w-full">
        Confirmar diagrama
      </button>
    </div>
  );
}

function LatexForm({ onConfirm }: { onConfirm: (spec: LatexSpec) => void }) {
  const [content, setContent] = useState("E = mc^2");
  const [displayMode, setDisplayMode] = useState(true);

  return (
    <div className="space-y-3">
      <textarea
        className="input-field font-mono text-sm"
        rows={4}
        placeholder="LaTeX source, ej: E = mc^2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label className="flex items-center gap-2 text-xs text-gray-600">
        <input
          type="checkbox"
          checked={displayMode}
          onChange={(e) => setDisplayMode(e.target.checked)}
        />
        Modo bloque (displayMode)
      </label>
      <button
        type="button"
        onClick={() => onConfirm({ kind: "latex", content, displayMode })}
        className="btn-primary w-full"
      >
        Confirmar fórmula
      </button>
    </div>
  );
}

function StaticImageForm({ onConfirm }: { onConfirm: (spec: StaticImageSpec) => void }) {
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");

  return (
    <div className="space-y-3">
      <input
        className="input-field"
        placeholder="URL de la imagen"
        value={src}
        onChange={(e) => setSrc(e.target.value)}
      />
      <input
        className="input-field"
        placeholder="Texto alternativo"
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
      />
      <button
        type="button"
        disabled={!src}
        onClick={() => onConfirm({ kind: "static-image", src, alt })}
        className="btn-primary w-full disabled:opacity-50"
      >
        Confirmar imagen
      </button>
    </div>
  );
}

function TimelineForm({ onConfirm }: { onConfirm: (spec: { kind: "timeline"; title?: string; events: { id: string; title: string; date: string; description?: string }[] }) => void }) {
  const [title, setTitle] = useState("");
  const [events, setEvents] = useState([
    { id: "e1", date: "1900", title: "Evento 1", description: "" },
  ]);

  const addEvent = () =>
    setEvents((prev) => [
      ...prev,
      { id: `e${prev.length + 1}`, date: "", title: "", description: "" },
    ]);

  const updateEvent = (i: number, field: string, value: string) => {
    setEvents((prev) => prev.map((e, idx) => (idx === i ? { ...e, [field]: value } : e)));
  };

  const handleConfirm = () => {
    onConfirm({
      kind: "timeline",
      title: title || undefined,
      events: events.map((e) => ({
        id: e.id,
        date: e.date,
        title: e.title,
        description: e.description || undefined,
      })),
    });
  };

  return (
    <div className="space-y-3">
      <input
        className="input-field"
        placeholder="Título (opcional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {events.map((ev, i) => (
        <div key={ev.id} className="space-y-1 rounded border border-gray-200 p-2">
          <div className="grid grid-cols-2 gap-2">
            <input
              className="input-field"
              placeholder="Fecha / año"
              value={ev.date}
              onChange={(e) => updateEvent(i, "date", e.target.value)}
            />
            <input
              className="input-field"
              placeholder="Título del evento"
              value={ev.title}
              onChange={(e) => updateEvent(i, "title", e.target.value)}
            />
          </div>
          <input
            className="input-field"
            placeholder="Descripción (opcional)"
            value={ev.description}
            onChange={(e) => updateEvent(i, "description", e.target.value)}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addEvent}
        className="text-xs text-blue-600 hover:underline"
      >
        + Agregar evento
      </button>
      <button type="button" onClick={handleConfirm} className="btn-primary w-full">
        Confirmar línea de tiempo
      </button>
    </div>
  );
}

// ── Main modal ─────────────────────────────────────────────────────────────────

export default function HerramientaPicker({ isOpen, onSelect, onClose }: HerramientaPickerProps) {
  const [selectedTool, setSelectedTool] = useState<ToolType | null>(null);

  if (!isOpen) return null;

  const handleSpec = (spec: object) => {
    onSelect(JSON.stringify({ spec }));
    setSelectedTool(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-800">
            {selectedTool
              ? TOOLS.find((t) => t.type === selectedTool)?.label ?? "Herramienta"
              : "Agregar herramienta interactiva"}
          </h2>
          <button
            type="button"
            onClick={() => (selectedTool ? setSelectedTool(null) : onClose())}
            className="text-xs text-gray-500 hover:text-gray-800"
          >
            {selectedTool ? "← Volver" : "Cerrar"}
          </button>
        </div>

        <div className="p-5">
          {!selectedTool ? (
            <div className="grid grid-cols-1 gap-2">
              {TOOLS.map((tool) => (
                <button
                  key={tool.type}
                  type="button"
                  onClick={() => setSelectedTool(tool.type)}
                  className="flex items-start gap-3 rounded-lg border border-gray-200 p-3 text-left hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">{tool.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{tool.description}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <style>{`
                .input-field {
                  width: 100%;
                  border: 1px solid #d1d5db;
                  border-radius: 6px;
                  padding: 6px 10px;
                  font-size: 13px;
                  outline: none;
                }
                .input-field:focus {
                  border-color: #3b82f6;
                }
                .btn-primary {
                  background: #3b82f6;
                  color: white;
                  border: none;
                  border-radius: 8px;
                  padding: 8px 16px;
                  font-size: 13px;
                  font-weight: 600;
                  cursor: pointer;
                }
                .btn-primary:hover {
                  opacity: 0.9;
                }
              `}</style>

              {selectedTool === "line-chart" && (
                <LineChartForm onConfirm={handleSpec} />
              )}
              {selectedTool === "vector-diagram" && (
                <VectorForm onConfirm={handleSpec} />
              )}
              {selectedTool === "latex" && (
                <LatexForm onConfirm={handleSpec} />
              )}
              {selectedTool === "static-image" && (
                <StaticImageForm onConfirm={handleSpec} />
              )}
              {selectedTool === "timeline" && (
                <TimelineForm onConfirm={handleSpec} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
