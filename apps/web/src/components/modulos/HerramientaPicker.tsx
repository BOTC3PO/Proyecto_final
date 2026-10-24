/**
 * Picker de herramientas interactivas para diapositivas/preguntas (Módulos).
 *
 * Migrado al sistema de diseño D.2 (WO10 · sub-sesión A):
 *  - Controles de formulario vía `Input` / `Textarea` / `Select` / `Button` de
 *    `components/ui` → cada campo lleva **nombre accesible real** (label visible
 *    o `aria-label`), nunca solo `placeholder` (WCAG 3.3.2 / 4.1.2).
 *  - La entrada de datos cruda (CSV en `<textarea>`) se reemplazó por **listas
 *    repetibles editables** reusando `AccessibleList` (WO06): reordenar/agregar/
 *    eliminar por teclado, con validación inline de cada valor numérico.
 *  - El modal expone `role="dialog"` + `aria-modal`, se etiqueta con su título,
 *    cierra con `Escape` y mueve el foco al panel al abrir.
 */
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { LineChartSpec, VectorDiagramSpec, StaticImageSpec, LatexSpec } from "../../generadoresV2/core/types";
import { Button, Input, Textarea } from "../ui";
import { AccessibleList } from "../vblang/AccessibleList";
import { useI18n } from "../../i18n/I18nContext";

interface HerramientaPickerProps {
  isOpen: boolean;
  onSelect: (detail: string | undefined) => void;
  onClose: () => void;
}

type ToolType = "line-chart" | "vector-diagram" | "latex" | "static-image" | "timeline";

const TOOLS: Array<{ type: ToolType; labelKey: string; descriptionKey: string }> = [
  { type: "line-chart",      labelKey: "herramientaPicker.graficoDeLineas",   descriptionKey: "herramientaPicker.seriesTemporalesFisicaEconomia" },
  { type: "vector-diagram",  labelKey: "herramientaPicker.diagramaDeVectores", descriptionKey: "herramientaPicker.fuerzasFisica" },
  { type: "latex",           labelKey: "herramientaPicker.formulaLatex",      descriptionKey: "herramientaPicker.cualquierExpresionMatematica" },
  { type: "static-image",    labelKey: "herramientaPicker.imagen",            descriptionKey: "herramientaPicker.urlDeImagenDeContexto" },
  { type: "timeline",        labelKey: "herramientaPicker.lineaDeTiempo",     descriptionKey: "herramientaPicker.historiaBiologia" },
];

// ── Helpers de validación ──────────────────────────────────────────────────────

/** ¿La cadena representa un número válido (no vacía, no NaN)? */
function isNumeric(s: string): boolean {
  return s.trim() !== "" && !Number.isNaN(Number(s));
}

// ── Sub-forms ─────────────────────────────────────────────────────────────────

type PointRow = { x: string; y: string };

function LineChartForm({ onConfirm }: { onConfirm: (spec: LineChartSpec) => void }) {
  const { t } = useI18n();
  const [title, setTitle] = useState("");
  const [xLabel, setXLabel] = useState("");
  const [yLabel, setYLabel] = useState("");
  const [points, setPoints] = useState<PointRow[]>([
    { x: "0", y: "0" },
    { x: "1", y: "1" },
    { x: "2", y: "4" },
    { x: "3", y: "9" },
  ]);

  const hasErrors = points.some((p) => !isNumeric(p.x) || !isNumeric(p.y));

  const handleConfirm = () => {
    onConfirm({
      kind: "line-chart",
      title: title || undefined,
      xLabel: xLabel || undefined,
      yLabel: yLabel || undefined,
      series: [
        {
          id: "s1",
          label: yLabel || t("plantillaEditorSchema.serie1"),
          points: points.map((p) => ({ x: Number(p.x), y: Number(p.y) })),
        },
      ],
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <Input label={t("comun.titulo")} hint={t("profesorCalendario.opcional")} value={title} onChange={(e) => setTitle(e.target.value)} />
      <div className="grid grid-cols-2 gap-2">
        <Input label={t("herramientaPicker.ejeX")} placeholder={t("herramientaPicker.ejTiempo")} value={xLabel} onChange={(e) => setXLabel(e.target.value)} />
        <Input label={t("herramientaPicker.ejeY")} placeholder={t("herramientaPicker.ejPosicion")} value={yLabel} onChange={(e) => setYLabel(e.target.value)} />
      </div>

      <AccessibleList<PointRow>
        label={t("herramientaPicker.puntosXY")}
        addLabel={t("herramientaPicker.agregarPunto")}
        itemNoun="punto"
        minItems={1}
        items={points}
        onChange={setPoints}
        createItem={() => ({ x: "", y: "" })}
        renderItem={(point, index, onItemChange) => (
          <div className="grid grid-cols-2 gap-2">
            <Input
              aria-label={`${t("herramientaPicker.xDelPunto")} ${index + 1}`}
              inputMode="decimal"
              placeholder="x"
              value={point.x}
              error={isNumeric(point.x) ? undefined : t("herramientaPicker.numeroInvalido")}
              onChange={(e) => onItemChange({ ...point, x: e.target.value })}
            />
            <Input
              aria-label={`${t("herramientaPicker.yDelPunto")} ${index + 1}`}
              inputMode="decimal"
              placeholder="y"
              value={point.y}
              error={isNumeric(point.y) ? undefined : t("herramientaPicker.numeroInvalido")}
              onChange={(e) => onItemChange({ ...point, y: e.target.value })}
            />
          </div>
        )}
      />

      <Button type="button" onClick={handleConfirm} disabled={hasErrors} className="w-full">
        {t("herramientaPicker.confirmarGrafico")}
      </Button>
    </div>
  );
}

type VectorRow = { id: string; label: string; dx: string; dy: string };

function VectorForm({ onConfirm }: { onConfirm: (spec: VectorDiagramSpec) => void }) {
  const { t } = useI18n();
  const [rows, setRows] = useState<VectorRow[]>([
    { id: "v1", label: "F1", dx: "1", dy: "0" },
    { id: "v2", label: "F2", dx: "0", dy: "1" },
  ]);

  const hasErrors = rows.some((r) => !isNumeric(r.dx) || !isNumeric(r.dy));

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
    <div className="flex flex-col gap-3">
      <AccessibleList<VectorRow>
        label={t("plantillaEditorSchema.vectores")}
        addLabel={t("plantillaEditorSchema.agregarVector")}
        itemNoun="vector"
        minItems={1}
        items={rows}
        onChange={setRows}
        createItem={() => ({ id: crypto.randomUUID(), label: "", dx: "0", dy: "0" })}
        renderItem={(row, index, onItemChange) => (
          <div className="grid grid-cols-4 gap-2">
            <Input
              className="col-span-2"
              aria-label={`${t("herramientaPicker.etiquetaDelVector")} ${index + 1}`}
              placeholder={t("herramientaPicker.etiqueta")}
              value={row.label}
              onChange={(e) => onItemChange({ ...row, label: e.target.value })}
            />
            <Input
              aria-label={`dx ${t("herramientaPicker.delVector")} ${index + 1}`}
              inputMode="decimal"
              placeholder="dx"
              value={row.dx}
              error={isNumeric(row.dx) ? undefined : t("herramientaPicker.invalido")}
              onChange={(e) => onItemChange({ ...row, dx: e.target.value })}
            />
            <Input
              aria-label={`dy ${t("herramientaPicker.delVector")} ${index + 1}`}
              inputMode="decimal"
              placeholder="dy"
              value={row.dy}
              error={isNumeric(row.dy) ? undefined : t("herramientaPicker.invalido")}
              onChange={(e) => onItemChange({ ...row, dy: e.target.value })}
            />
          </div>
        )}
      />

      <Button type="button" onClick={handleConfirm} disabled={hasErrors} className="w-full">
        {t("herramientaPicker.confirmarDiagrama")}
      </Button>
    </div>
  );
}

function LatexForm({ onConfirm }: { onConfirm: (spec: LatexSpec) => void }) {
  const { t } = useI18n();
  const [content, setContent] = useState("E = mc^2");
  const [displayMode, setDisplayMode] = useState(true);
  const checkboxId = useId();

  return (
    <div className="flex flex-col gap-3">
      <Textarea
        label={t("herramientaPicker.codigoLatex")}
        className="font-mono"
        rows={4}
        placeholder={t("herramientaPicker.ejEMc2")}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label htmlFor={checkboxId} className="flex items-center gap-2 text-xs text-[var(--c-text-3)]">
        <input
          id={checkboxId}
          type="checkbox"
          checked={displayMode}
          onChange={(e) => setDisplayMode(e.target.checked)}
        />
        {t("herramientaPicker.modoBloqueDisplaymode")}
      </label>
      <Button
        type="button"
        onClick={() => onConfirm({ kind: "latex", content, displayMode })}
        disabled={content.trim() === ""}
        className="w-full"
      >
        {t("herramientaPicker.confirmarFormula")}
      </Button>
    </div>
  );
}

function StaticImageForm({ onConfirm }: { onConfirm: (spec: StaticImageSpec) => void }) {
  const { t } = useI18n();
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");

  const srcError = src.trim() !== "" && !/^https?:\/\/|^\//.test(src.trim())
    ? t("herramientaPicker.debeSerUnaUrlValida")
    : undefined;

  return (
    <div className="flex flex-col gap-3">
      <Input
        label={t("herramientaPicker.urlDeLaImagen")}
        type="url"
        required
        placeholder="https://ejemplo.com/imagen.jpg"
        value={src}
        error={srcError}
        onChange={(e) => setSrc(e.target.value)}
      />
      <Input
        label={t("herramientaPicker.textoAlternativo")}
        hint={t("herramientaPicker.describeLaImagenParaLectores")}
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
      />
      <Button
        type="button"
        disabled={!src.trim() || !!srcError}
        onClick={() => onConfirm({ kind: "static-image", src, alt })}
        className="w-full"
      >
        {t("herramientaPicker.confirmarImagen")}
      </Button>
    </div>
  );
}

type TimelineEventRow = { id: string; date: string; title: string; description: string };
type TimelineSpecLite = {
  kind: "timeline";
  title?: string;
  events: { id: string; title: string; date: string; description?: string }[];
};

function TimelineForm({ onConfirm }: { onConfirm: (spec: TimelineSpecLite) => void }) {
  const { t } = useI18n();
  const [title, setTitle] = useState("");
  const [events, setEvents] = useState<TimelineEventRow[]>([
    { id: "e1", date: "1900", title: "Evento 1", description: "" },
  ]);

  const hasErrors = events.some((e) => e.title.trim() === "" || e.date.trim() === "");

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
    <div className="flex flex-col gap-3">
      <Input label={t("comun.titulo")} hint={t("profesorCalendario.opcional")} value={title} onChange={(e) => setTitle(e.target.value)} />

      <AccessibleList<TimelineEventRow>
        label={t("comun.eventos")}
        addLabel={t("profesorCalendario.agregarEvento")}
        itemNoun="evento"
        minItems={1}
        items={events}
        onChange={setEvents}
        createItem={() => ({ id: crypto.randomUUID(), date: "", title: "", description: "" })}
        renderItem={(ev, index, onItemChange) => (
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <Input
                aria-label={`${t("herramientaPicker.fechaOAnoDelEvento")} ${index + 1}`}
                required
                placeholder={t("herramientaPicker.fechaAno")}
                value={ev.date}
                error={ev.date.trim() === "" ? t("herramientaPicker.requerido") : undefined}
                onChange={(e) => onItemChange({ ...ev, date: e.target.value })}
              />
              <Input
                aria-label={`${t("herramientaPicker.tituloDelEvento")} ${index + 1}`}
                required
                placeholder={t("herramientaPicker.tituloDelEvento")}
                value={ev.title}
                error={ev.title.trim() === "" ? t("herramientaPicker.requerido") : undefined}
                onChange={(e) => onItemChange({ ...ev, title: e.target.value })}
              />
            </div>
            <Input
              aria-label={`${t("herramientaPicker.descripcionDelEvento")} ${index + 1}`}
              placeholder={t("comun.descripcionOpcional")}
              value={ev.description}
              onChange={(e) => onItemChange({ ...ev, description: e.target.value })}
            />
          </div>
        )}
      />

      <Button type="button" onClick={handleConfirm} disabled={hasErrors} className="w-full">
        {t("herramientaPicker.confirmarLineaDeTiempo")}
      </Button>
    </div>
  );
}

// ── Main modal ─────────────────────────────────────────────────────────────────

export default function HerramientaPicker({ isOpen, onSelect, onClose }: HerramientaPickerProps) {
  const { t } = useI18n();
  const [selectedTool, setSelectedTool] = useState<ToolType | null>(null);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  // Cerrar con Escape y mover el foco al panel al abrir.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        if (selectedTool) setSelectedTool(null);
        else onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, selectedTool, onClose]);

  const heading = useMemo(
    () =>
      selectedTool
        ? t(TOOLS.find((tool) => tool.type === selectedTool)?.labelKey ?? "herramientaPicker.herramienta")
        : t("herramientaPicker.agregarHerramientaInteractiva"),
    [selectedTool, t],
  );

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
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[var(--r-lg)] border border-[var(--c-border)] bg-[var(--c-surface)] shadow-[var(--shadow-2,0_10px_40px_rgba(0,0,0,0.2))] outline-none"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--c-border)] px-5 py-4">
          <h2 id={titleId} className="text-sm font-semibold text-[var(--c-text)]">
            {heading}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => (selectedTool ? setSelectedTool(null) : onClose())}
          >
            {selectedTool ? t("notFound.volver") : t("comun.cerrar")}
          </Button>
        </div>

        <div className="p-5">
          {!selectedTool ? (
            <ul role="list" className="grid grid-cols-1 gap-2">
              {TOOLS.map((tool) => (
                <li key={tool.type}>
                  <button
                    type="button"
                    onClick={() => setSelectedTool(tool.type)}
                    className="flex w-full items-start gap-3 rounded-[var(--r-md)] border border-[var(--c-border)] p-3 text-left transition-colors motion-reduce:transition-none hover:border-[var(--c-primary)] hover:bg-[var(--c-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
                  >
                    <div>
                      <p className="text-sm font-medium text-[var(--c-text)]">{t(tool.labelKey)}</p>
                      <p className="mt-0.5 text-xs text-[var(--c-text-3)]">{t(tool.descriptionKey)}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              {selectedTool === "line-chart" && <LineChartForm onConfirm={handleSpec} />}
              {selectedTool === "vector-diagram" && <VectorForm onConfirm={handleSpec} />}
              {selectedTool === "latex" && <LatexForm onConfirm={handleSpec} />}
              {selectedTool === "static-image" && <StaticImageForm onConfirm={handleSpec} />}
              {selectedTool === "timeline" && <TimelineForm onConfirm={handleSpec} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
