import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { apiGet, apiPost } from "../lib/api";
import type { ModuleQuizQuestion } from "../domain/module/module.types";
import type { GeneratorDescriptor, Ejercicio, VisualSpec, LineChartSpec, VectorDiagramSpec, TimelineSpec, LatexSpec, StaticImageSpec } from "../generadoresV2/core/types";
import { DeterministicPrng } from "../generadoresV2/core/prng";
import { getStaticCatalog, getDescriptoresFromModule } from "../generadoresV2/catalog";
import type { CatalogItem } from "../generadoresV2/catalog";
import VisualizerRenderer from "../components/modulos/VisualizerRenderer";
import BancoCuestionariosMulti, { fetchBancoQuestions, mulberry32 } from "../components/modulos/BancoCuestionariosMulti";
import { ejercicioToQuestion } from "../domain/quiz/ejercicioToQuestion";
import type { GeneradorConfig } from "../components/modulos/GeneradorSelector";

// ─── Types ────────────────────────────────────────────────────────────────────

type FuenteReceta =
  | { kind: "manual"; id: string; question: ModuleQuizQuestion }
  | { kind: "generador"; id: string; config: GeneradorConfig; label: string; preguntasGeneradas: ModuleQuizQuestion[] }
  | { kind: "banco"; id: string; quizId: string; quizTitle: string; modo: "todas" | "azar"; cantidad: number; preguntasImportadas: ModuleQuizQuestion[] };

type MobileTab = "fuentes" | "cuestionario" | "preview";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function createManualQuestion(qType: ModuleQuizQuestion["questionType"]): ModuleQuizQuestion {
  return {
    id: `q-${uid()}`,
    prompt: "",
    questionType: qType,
    focus: "manual",
    options: qType === "vf" ? ["Verdadero", "Falso"] : qType === "mc" ? ["", ""] : undefined,
    answerKey: "",
  };
}

function loadGeneratorModule(materia: string) {
  switch (materia) {
    case "biologia":    return import("../generadoresV2/biologia/index");
    case "informatica": return import("../generadoresV2/informatica/index");
    case "fisica":      return import("../generadoresV2/fisica/index");
    case "matematicas": return import("../generadoresV2/matematicas/index");
    case "quimica":     return import("../generadoresV2/quimica/index");
    case "economia":    return import("../generadoresV2/economia/index");
    default:            return Promise.reject(new Error(`Materia no encontrada: ${materia}`));
  }
}

async function generateFromConfig(config: GeneradorConfig): Promise<ModuleQuizQuestion[]> {
  const [materia] = config.generatorId.split("/");
  const mod = await loadGeneratorModule(materia);
  const prng = config.semilla
    ? new DeterministicPrng(hashString(config.semilla))
    : new DeterministicPrng(Date.now());
  const descriptores: GeneratorDescriptor[] = getDescriptoresFromModule(mod, prng);
  const descriptor = descriptores.find((d) => d.id === config.generatorId);
  if (!descriptor) throw new Error(`Generador no encontrado: ${config.generatorId}`);
  const subtiposToUse = config.subtipos.length > 0 ? config.subtipos : descriptor.subtipos;
  const ejercicios: Ejercicio[] = Array.from({ length: config.cantidad }, (_, i) => {
    const subtipo = subtiposToUse[i % subtiposToUse.length];
    const template = config.enunciadosPersonalizados?.[subtipo];
    return descriptor.generate(config.dificultad, prng, subtipo, template);
  });
  return ejercicios.map((e) => ({
    ...ejercicioToQuestion(e),
    id: `q-${uid()}-${e.id}`,
  }));
}

const BASE_VARS = ["respuesta", "subtipo", "dificultad"];

// ─── Visual Editors ───────────────────────────────────────────────────────────

function LatexEditor({ spec, onChange }: { spec: LatexSpec; onChange: (s: LatexSpec) => void }) {
  return (
    <div className="space-y-2">
      <textarea
        rows={3}
        className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs font-mono focus:outline-none focus:border-[var(--c-primary)]"
        placeholder="\frac{a}{b} = c"
        value={spec.content}
        onChange={(e) => onChange({ ...spec, content: e.target.value })}
      />
      <label className="flex items-center gap-2 text-xs text-[var(--c-text)]">
        <input
          type="checkbox"
          checked={spec.displayMode ?? true}
          onChange={(e) => onChange({ ...spec, displayMode: e.target.checked })}
          className="accent-[var(--c-primary)]"
        />
        Modo display (bloque centrado)
      </label>
      {spec.content && (
        <div className="rounded border border-[var(--c-border)] p-2">
          <VisualizerRenderer spec={spec} />
        </div>
      )}
    </div>
  );
}

function StaticImageEditor({ spec, onChange }: { spec: StaticImageSpec; onChange: (s: StaticImageSpec) => void }) {
  return (
    <div className="space-y-2">
      <input
        className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs focus:outline-none focus:border-[var(--c-primary)]"
        placeholder="https://ejemplo.com/imagen.png"
        value={spec.src}
        onChange={(e) => onChange({ ...spec, src: e.target.value })}
      />
      <input
        className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs focus:outline-none focus:border-[var(--c-primary)]"
        placeholder="Texto alternativo (requerido)"
        value={spec.alt}
        onChange={(e) => onChange({ ...spec, alt: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-2">
        <label className="text-xs text-[var(--c-text)]">
          Ancho (px, 0 = auto)
          <div className="flex items-center gap-2 mt-1">
            <input type="range" min={0} max={1200} step={20} value={spec.width ?? 0}
              onChange={(e) => onChange({ ...spec, width: Number(e.target.value) || undefined })}
              className="flex-1" />
            <span className="text-xs w-10 text-right">{spec.width ?? "auto"}</span>
          </div>
        </label>
        <label className="text-xs text-[var(--c-text)]">
          Alto (px, 0 = auto)
          <div className="flex items-center gap-2 mt-1">
            <input type="range" min={0} max={800} step={20} value={spec.height ?? 0}
              onChange={(e) => onChange({ ...spec, height: Number(e.target.value) || undefined })}
              className="flex-1" />
            <span className="text-xs w-10 text-right">{spec.height ?? "auto"}</span>
          </div>
        </label>
      </div>
      {spec.src && (
        <div className="rounded border border-[var(--c-border)] p-2">
          <VisualizerRenderer spec={spec} />
        </div>
      )}
    </div>
  );
}

function VectorDiagramEditor({ spec, onChange }: { spec: VectorDiagramSpec; onChange: (s: VectorDiagramSpec) => void }) {
  const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];
  const addVector = () => {
    const idx = spec.vectors.length;
    onChange({ ...spec, vectors: [...spec.vectors, { id: uid(), label: `v${idx + 1}`, dx: 5, dy: 5, color: COLORS[idx % COLORS.length] }] });
  };
  const updateVector = (i: number, patch: Partial<VectorDiagramSpec["vectors"][0]>) => {
    const next = spec.vectors.map((v, idx) => idx === i ? { ...v, ...patch } : v);
    onChange({ ...spec, vectors: next });
  };
  const removeVector = (i: number) => onChange({ ...spec, vectors: spec.vectors.filter((_, idx) => idx !== i) });

  return (
    <div className="space-y-2">
      <div className="space-y-2">
        {spec.vectors.map((v, i) => (
          <div key={v.id} className="rounded border border-[var(--c-border)] p-2 space-y-2">
            <div className="flex items-center gap-2">
              <input className="flex-1 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs"
                placeholder="Label" value={v.label} onChange={(e) => updateVector(i, { label: e.target.value })} />
              <input type="color" value={v.color ?? COLORS[i % COLORS.length]}
                onChange={(e) => updateVector(i, { color: e.target.value })}
                className="w-8 h-7 rounded border border-[var(--c-border)] cursor-pointer p-0" />
              <button type="button" onClick={() => removeVector(i)} className="text-xs text-red-400 hover:text-red-600">×</button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <label className="text-xs text-[var(--c-text)]">
                dx = {v.dx}
                <input type="range" min={-10} max={10} step={0.5} value={v.dx}
                  onChange={(e) => updateVector(i, { dx: Number(e.target.value) })} className="w-full mt-1" />
              </label>
              <label className="text-xs text-[var(--c-text)]">
                dy = {v.dy}
                <input type="range" min={-10} max={10} step={0.5} value={v.dy}
                  onChange={(e) => updateVector(i, { dy: Number(e.target.value) })} className="w-full mt-1" />
              </label>
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={addVector}
        className="w-full rounded border border-dashed border-[var(--c-border)] py-1.5 text-xs text-[var(--c-muted)] hover:bg-[var(--c-bg)] transition-colors">
        + Agregar vector
      </button>
      {spec.vectors.length > 0 && (
        <div className="rounded border border-[var(--c-border)] p-2">
          <VisualizerRenderer spec={spec} />
        </div>
      )}
    </div>
  );
}

function TimelineEditor({ spec, onChange }: { spec: TimelineSpec; onChange: (s: TimelineSpec) => void }) {
  const addEvent = () => {
    onChange({ ...spec, events: [...spec.events, { id: uid(), title: "", date: "", description: "" }] });
  };
  const updateEvent = (i: number, patch: Partial<TimelineSpec["events"][0]>) => {
    onChange({ ...spec, events: spec.events.map((ev, idx) => idx === i ? { ...ev, ...patch } : ev) });
  };
  const removeEvent = (i: number) => onChange({ ...spec, events: spec.events.filter((_, idx) => idx !== i) });

  return (
    <div className="space-y-2">
      <input className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs"
        placeholder="Título de la línea de tiempo" value={spec.title ?? ""}
        onChange={(e) => onChange({ ...spec, title: e.target.value })} />
      <div className="space-y-2">
        {spec.events.map((ev, i) => (
          <div key={ev.id} className="rounded border border-[var(--c-border)] p-2 space-y-1.5">
            <div className="flex items-center gap-2">
              <input className="w-24 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs"
                placeholder="Fecha" value={ev.date} onChange={(e) => updateEvent(i, { date: e.target.value })} />
              <input className="flex-1 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs"
                placeholder="Título del evento" value={ev.title} onChange={(e) => updateEvent(i, { title: e.target.value })} />
              <button type="button" onClick={() => removeEvent(i)} className="text-xs text-red-400 hover:text-red-600">×</button>
            </div>
            <textarea rows={1}
              className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs"
              placeholder="Descripción (opcional)" value={ev.description ?? ""}
              onChange={(e) => updateEvent(i, { description: e.target.value })} />
          </div>
        ))}
      </div>
      <button type="button" onClick={addEvent}
        className="w-full rounded border border-dashed border-[var(--c-border)] py-1.5 text-xs text-[var(--c-muted)] hover:bg-[var(--c-bg)] transition-colors">
        + Agregar evento
      </button>
      {spec.events.length > 0 && (
        <div className="rounded border border-[var(--c-border)] p-2">
          <VisualizerRenderer spec={spec} />
        </div>
      )}
    </div>
  );
}

function LineChartEditor({ spec, onChange }: { spec: LineChartSpec; onChange: (s: LineChartSpec) => void }) {
  const [csvModal, setCsvModal] = useState<number | null>(null);
  const [csvText, setCsvText] = useState("");
  const COLORS = ["#2563eb", "#dc2626", "#16a34a", "#d97706", "#7c3aed"];

  const addSeries = () => {
    const idx = spec.series.length;
    onChange({ ...spec, series: [...spec.series, { id: uid(), label: `Serie ${idx + 1}`, color: COLORS[idx % COLORS.length], points: [{ x: 0, y: 0 }] }] });
  };
  const updateSeries = (i: number, patch: Partial<LineChartSpec["series"][0]>) => {
    onChange({ ...spec, series: spec.series.map((s, idx) => idx === i ? { ...s, ...patch } : s) });
  };
  const removeSeries = (i: number) => onChange({ ...spec, series: spec.series.filter((_, idx) => idx !== i) });
  const addPoint = (si: number) => {
    const s = spec.series[si];
    const last = s.points[s.points.length - 1];
    updateSeries(si, { points: [...s.points, { x: (last?.x ?? 0) + 1, y: 0 }] });
  };
  const updatePoint = (si: number, pi: number, field: "x" | "y", val: number) => {
    const pts = spec.series[si].points.map((p, idx) => idx === pi ? { ...p, [field]: val } : p);
    updateSeries(si, { points: pts });
  };
  const removePoint = (si: number, pi: number) => {
    updateSeries(si, { points: spec.series[si].points.filter((_, idx) => idx !== pi) });
  };
  const pasteCSV = (si: number) => {
    const lines = csvText.trim().split("\n").filter(Boolean);
    const pts = lines.map((l) => {
      const [x, y] = l.split(/[,;\t]/).map((v) => parseFloat(v.trim()));
      return { x: isNaN(x) ? 0 : x, y: isNaN(y) ? 0 : y };
    });
    if (pts.length > 0) updateSeries(si, { points: pts });
    setCsvModal(null);
    setCsvText("");
  };
  const addAnnotation = () => {
    onChange({ ...spec, annotations: [...(spec.annotations ?? []), { id: uid(), x: 0, label: "Ref" }] });
  };
  const updateAnnotation = (i: number, patch: Partial<NonNullable<LineChartSpec["annotations"]>[0]>) => {
    onChange({ ...spec, annotations: (spec.annotations ?? []).map((a, idx) => idx === i ? { ...a, ...patch } : a) });
  };
  const removeAnnotation = (i: number) => onChange({ ...spec, annotations: (spec.annotations ?? []).filter((_, idx) => idx !== i) });

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {[
          ["Título", "title"] as const,
          ["Etiqueta X", "xLabel"] as const,
          ["Etiqueta Y", "yLabel"] as const,
          ["Unidad X", "xUnit"] as const,
          ["Unidad Y", "yUnit"] as const,
        ].map(([label, key]) => (
          <input key={key} className="rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs"
            placeholder={label} value={(spec[key] as string | undefined) ?? ""}
            onChange={(e) => onChange({ ...spec, [key]: e.target.value || undefined })} />
        ))}
      </div>

      <div className="space-y-3">
        {spec.series.map((s, si) => (
          <div key={s.id} className="rounded border border-[var(--c-border)] p-2 space-y-2">
            <div className="flex items-center gap-2">
              <input className="flex-1 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs"
                placeholder="Nombre de la serie" value={s.label}
                onChange={(e) => updateSeries(si, { label: e.target.value })} />
              <input type="color" value={s.color ?? COLORS[si % COLORS.length]}
                onChange={(e) => updateSeries(si, { color: e.target.value })}
                className="w-8 h-7 rounded border border-[var(--c-border)] cursor-pointer p-0" />
              <button type="button" onClick={() => setCsvModal(si)}
                className="text-[10px] text-[var(--c-primary)] border border-[var(--c-primary)] rounded px-1.5 py-0.5 hover:bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)]">
                CSV
              </button>
              <button type="button" onClick={() => removeSeries(si)} className="text-xs text-red-400 hover:text-red-600">×</button>
            </div>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {s.points.map((p, pi) => (
                <div key={pi} className="flex items-center gap-1">
                  <span className="text-[10px] text-[var(--c-muted)] w-4">{pi + 1}</span>
                  <input type="number" placeholder="x" value={p.x}
                    onChange={(e) => updatePoint(si, pi, "x", parseFloat(e.target.value) || 0)}
                    className="w-16 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-1.5 py-0.5 text-xs" />
                  <input type="number" placeholder="y" value={p.y}
                    onChange={(e) => updatePoint(si, pi, "y", parseFloat(e.target.value) || 0)}
                    className="w-16 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-1.5 py-0.5 text-xs" />
                  <button type="button" onClick={() => removePoint(si, pi)} className="text-[10px] text-red-400 hover:text-red-600">×</button>
                </div>
              ))}
            </div>
            <button type="button" onClick={() => addPoint(si)}
              className="text-[10px] text-[var(--c-primary)] hover:underline">+ punto</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addSeries}
        className="w-full rounded border border-dashed border-[var(--c-border)] py-1.5 text-xs text-[var(--c-muted)] hover:bg-[var(--c-bg)] transition-colors">
        + Agregar serie
      </button>

      {(spec.annotations ?? []).length > 0 && (
        <div className="space-y-1">
          <p className="text-[10px] font-semibold text-[var(--c-muted)]">ANOTACIONES</p>
          {(spec.annotations ?? []).map((ann, ai) => (
            <div key={ann.id} className="flex items-center gap-1.5">
              <input type="number" placeholder="x" value={ann.x}
                onChange={(e) => updateAnnotation(ai, { x: parseFloat(e.target.value) || 0 })}
                className="w-14 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-1.5 py-0.5 text-xs" />
              <input placeholder="Label" value={ann.label}
                onChange={(e) => updateAnnotation(ai, { label: e.target.value })}
                className="flex-1 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-1.5 py-0.5 text-xs" />
              <button type="button" onClick={() => removeAnnotation(ai)} className="text-xs text-red-400 hover:text-red-600">×</button>
            </div>
          ))}
        </div>
      )}
      <button type="button" onClick={addAnnotation}
        className="text-xs text-[var(--c-muted)] hover:text-[var(--c-text)]">+ Línea de referencia</button>

      {spec.series.some((s) => s.points.length > 0) && (
        <div className="rounded border border-[var(--c-border)] p-2">
          <VisualizerRenderer spec={spec} />
        </div>
      )}

      {csvModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-80 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 space-y-3 shadow-xl">
            <p className="text-sm font-semibold text-[var(--c-text)]">Pegar datos CSV</p>
            <p className="text-xs text-[var(--c-muted)]">Una línea por punto: x,y (o separado por ; o tab)</p>
            <textarea rows={6} className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs font-mono"
              placeholder={"0,0\n1,2\n2,4"} value={csvText} onChange={(e) => setCsvText(e.target.value)} />
            <div className="flex gap-2">
              <button type="button" onClick={() => pasteCSV(csvModal)}
                className="flex-1 rounded-lg bg-[var(--c-primary)] py-1.5 text-xs font-semibold text-white hover:opacity-90">
                Cargar
              </button>
              <button type="button" onClick={() => setCsvModal(null)}
                className="flex-1 rounded-lg border border-[var(--c-border)] py-1.5 text-xs hover:bg-[var(--c-bg)]">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function VisualEditorSection({
  spec,
  onChange,
}: {
  spec: VisualSpec | undefined;
  onChange: (s: VisualSpec | undefined) => void;
}) {
  const [enabled, setEnabled] = useState(Boolean(spec));
  const [type, setType] = useState<VisualSpec["kind"]>(spec?.kind ?? "latex");

  const defaultSpec = useCallback((k: VisualSpec["kind"]): VisualSpec => {
    if (k === "latex") return { kind: "latex", content: "", displayMode: true };
    if (k === "static-image") return { kind: "static-image", src: "", alt: "" };
    if (k === "vector-diagram") return { kind: "vector-diagram", vectors: [] };
    if (k === "timeline") return { kind: "timeline", events: [] };
    return { kind: "line-chart", series: [] };
  }, []);

  const handleToggle = (on: boolean) => {
    setEnabled(on);
    if (!on) onChange(undefined);
    else onChange(spec ?? defaultSpec(type));
  };

  const handleTypeChange = (k: VisualSpec["kind"]) => {
    setType(k);
    onChange(defaultSpec(k));
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-xs font-medium text-[var(--c-text)]">
        <input type="checkbox" checked={enabled} onChange={(e) => handleToggle(e.target.checked)}
          className="accent-[var(--c-primary)]" />
        Visual adjunto
      </label>
      {enabled && (
        <div className="space-y-2 pl-1">
          <select value={type} onChange={(e) => handleTypeChange(e.target.value as VisualSpec["kind"])}
            className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs">
            <option value="latex">Fórmula LaTeX</option>
            <option value="line-chart">Gráfico de líneas</option>
            <option value="vector-diagram">Diagrama de vectores</option>
            <option value="timeline">Línea de tiempo</option>
            <option value="static-image">Imagen estática</option>
          </select>
          {spec?.kind === "latex" && <LatexEditor spec={spec} onChange={onChange} />}
          {spec?.kind === "line-chart" && <LineChartEditor spec={spec} onChange={onChange} />}
          {spec?.kind === "vector-diagram" && <VectorDiagramEditor spec={spec} onChange={onChange} />}
          {spec?.kind === "timeline" && <TimelineEditor spec={spec} onChange={onChange} />}
          {spec?.kind === "static-image" && <StaticImageEditor spec={spec} onChange={onChange} />}
        </div>
      )}
    </div>
  );
}

// ─── Extras Section (tolerance, units, steps, visual) ────────────────────────

function ExtrasSection({
  question,
  onUpdate,
}: {
  question: ModuleQuizQuestion;
  onUpdate: (patch: Partial<ModuleQuizQuestion>) => void;
}) {
  const [open, setOpen] = useState(false);
  const isInput = question.questionType === "input";

  return (
    <div className="border-t border-[var(--c-border)] pt-2">
      <button type="button" onClick={() => setOpen((v) => !v)}
        className="text-xs text-[var(--c-muted)] hover:text-[var(--c-text)] transition-colors">
        {open ? "▲ Ocultar extras" : "▼ Mostrar extras"}
      </button>
      {open && (
        <div className="mt-2 space-y-3 pl-1">
          {isInput && (
            <>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-xs font-medium text-[var(--c-text)]">
                  <input type="checkbox" checked={question.toleranciaRelativa !== undefined}
                    onChange={(e) => onUpdate({ toleranciaRelativa: e.target.checked ? 0.05 : undefined })}
                    className="accent-[var(--c-primary)]" />
                  Tolerancia numérica
                </label>
                {question.toleranciaRelativa !== undefined && (
                  <div className="flex items-center gap-2 pl-5">
                    <input type="range" min={0} max={0.5} step={0.01} value={question.toleranciaRelativa}
                      onChange={(e) => onUpdate({ toleranciaRelativa: parseFloat(e.target.value) })}
                      className="flex-1" />
                    <span className="text-xs w-12 text-right">±{Math.round(question.toleranciaRelativa * 100)}%</span>
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-xs font-medium text-[var(--c-text)]">
                  <input type="checkbox" checked={question.unidades !== undefined}
                    onChange={(e) => onUpdate({ unidades: e.target.checked ? { respuesta: "" } : undefined })}
                    className="accent-[var(--c-primary)]" />
                  Unidades
                </label>
                {question.unidades !== undefined && (
                  <input className="ml-5 w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs"
                    placeholder="ej: kg, m/s, °C"
                    value={question.unidades?.respuesta ?? ""}
                    onChange={(e) => onUpdate({ unidades: { respuesta: e.target.value } })} />
                )}
              </div>
            </>
          )}

          <div className="space-y-1">
            <label className="flex items-center gap-2 text-xs font-medium text-[var(--c-text)]">
              <input type="checkbox" checked={(question.pasos?.length ?? 0) > 0}
                onChange={(e) => onUpdate({ pasos: e.target.checked ? [""] : [] })}
                className="accent-[var(--c-primary)]" />
              Pasos de resolución
            </label>
            {(question.pasos?.length ?? 0) > 0 && (
              <div className="pl-5 space-y-1">
                {(question.pasos ?? []).map((paso, pi) => (
                  <div key={pi} className="flex items-center gap-1">
                    <span className="text-[10px] text-[var(--c-muted)] w-4">{pi + 1}.</span>
                    <input value={paso}
                      onChange={(e) => {
                        const next = [...(question.pasos ?? [])];
                        next[pi] = e.target.value;
                        onUpdate({ pasos: next });
                      }}
                      className="flex-1 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs" />
                    <button type="button" onClick={() => onUpdate({ pasos: (question.pasos ?? []).filter((_, i) => i !== pi) })}
                      className="text-[10px] text-red-400 hover:text-red-600">×</button>
                  </div>
                ))}
                <button type="button"
                  onClick={() => onUpdate({ pasos: [...(question.pasos ?? []), ""] })}
                  className="text-xs text-[var(--c-primary)] hover:underline">+ agregar paso</button>
              </div>
            )}
          </div>

          <VisualEditorSection spec={question.visualSpec} onChange={(s) => onUpdate({ visualSpec: s })} />
        </div>
      )}
    </div>
  );
}

// ─── Question Card ────────────────────────────────────────────────────────────

function QuestionCard({
  question,
  index,
  isActive,
  onActivate,
  onUpdate,
  onRemove,
}: {
  question: ModuleQuizQuestion;
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onUpdate: (patch: Partial<ModuleQuizQuestion>) => void;
  onRemove: () => void;
}) {
  const qType = question.questionType ?? "mc";
  const showOptions = qType !== "input" && qType !== "completar";
  const isTrueFalse = qType === "vf";

  const origen = question.focus?.startsWith("banco:")
    ? "banco" : question.datos !== undefined ? "auto" : "manual";
  const badgeCls = {
    banco: "bg-emerald-100 text-emerald-800 border-emerald-200",
    auto: "bg-blue-100 text-blue-800 border-blue-200",
    manual: "bg-gray-100 text-gray-600 border-gray-200",
  }[origen];
  const badgeLabel = { banco: "Banco", auto: "Auto", manual: "Manual" }[origen];
  const subtipoLabel = question.focus?.startsWith("banco:")
    ? question.focus.replace("banco:", "").slice(0, 8)
    : question.focus?.slice(0, 10);

  return (
    <div className={`rounded-lg border transition-colors ${isActive ? "border-[var(--c-primary)]" : "border-[var(--c-border)]"}`}>
      <button
        type="button"
        className="w-full flex items-center justify-between gap-2 px-3 py-2 text-left hover:bg-[var(--c-bg)] rounded-lg transition-colors"
        onClick={onActivate}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs text-[var(--c-muted)] shrink-0">#{index + 1}</span>
          <span className={`text-[9px] font-medium border rounded px-1.5 py-0.5 shrink-0 ${badgeCls}`}>{badgeLabel}</span>
          {subtipoLabel && (
            <span className="text-[9px] text-[var(--c-muted)] bg-gray-50 rounded px-1 truncate">{subtipoLabel}</span>
          )}
          <span className="text-xs text-[var(--c-text)] truncate">
            {question.prompt || <em className="text-[var(--c-muted)]">sin enunciado</em>}
          </span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <span className="text-xs text-[var(--c-muted)]">{isActive ? "▲" : "▼"}</span>
          <button type="button" onClick={(e) => { e.stopPropagation(); onRemove(); }}
            disabled={origen !== "manual"}
            title={origen !== "manual" ? "Quitá la fuente completa para eliminar esta pregunta" : "Quitar pregunta"}
            className="text-xs text-red-400 hover:text-red-600 px-1 disabled:opacity-30 disabled:cursor-not-allowed">×</button>
        </div>
      </button>

      {isActive && (
        <div className="px-3 pb-3 space-y-2 border-t border-[var(--c-border)]">
          <textarea rows={2}
            className="w-full rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)] mt-2"
            placeholder="Enunciado de la pregunta"
            value={question.prompt}
            onChange={(e) => onUpdate({ prompt: e.target.value })} />

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-[var(--c-text)]">Tipo</label>
            <select value={qType}
              onChange={(e) => {
                const nextType = e.target.value as ModuleQuizQuestion["questionType"];
                onUpdate({
                  questionType: nextType,
                  options: nextType === "vf" ? ["Verdadero", "Falso"] : nextType === "mc" ? (question.options?.length ? question.options : ["", ""]) : undefined,
                  answerKey: "",
                });
              }}
              className="rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs">
              <option value="mc">Opción múltiple</option>
              <option value="vf">Verdadero/Falso</option>
              <option value="input">Respuesta abierta</option>
              <option value="completar">Completar</option>
            </select>
          </div>

          {qType === "input" || qType === "completar" ? (
            <input className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-sm"
              placeholder="Respuesta esperada"
              value={Array.isArray(question.answerKey) ? question.answerKey.join(", ") : (question.answerKey ?? "")}
              onChange={(e) => onUpdate({ answerKey: e.target.value })} />
          ) : showOptions && (
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-[var(--c-text)]">
                {isTrueFalse ? "Respuesta correcta" : "Opciones"}
              </p>
              {(question.options ?? []).map((opt, oi) => (
                <div key={oi} className="flex items-center gap-2">
                  <input type="radio" name={`ans-${question.id}`}
                    checked={question.answerKey === opt}
                    onChange={() => onUpdate({ answerKey: opt })} />
                  <input value={opt} disabled={isTrueFalse}
                    onChange={(e) => {
                      const opts = [...(question.options ?? [])];
                      opts[oi] = e.target.value;
                      onUpdate({ options: opts });
                    }}
                    className="flex-1 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-sm"
                    placeholder={`Opción ${oi + 1}`} />
                  {!isTrueFalse && (
                    <button type="button" onClick={() => onUpdate({ options: (question.options ?? []).filter((_, i) => i !== oi) })}
                      className="text-xs text-red-400 hover:text-red-600">×</button>
                  )}
                </div>
              ))}
              {!isTrueFalse && (
                <button type="button"
                  onClick={() => onUpdate({ options: [...(question.options ?? []), ""] })}
                  className="text-xs text-[var(--c-primary)] hover:underline">+ Agregar opción</button>
              )}
            </div>
          )}

          <textarea rows={1}
            className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-muted)] px-2 py-1.5 text-xs"
            placeholder="Explicación (opcional)"
            value={question.explanation ?? ""}
            onChange={(e) => onUpdate({ explanation: e.target.value })} />

          <ExtrasSection question={question} onUpdate={onUpdate} />
        </div>
      )}
    </div>
  );
}

// ─── Sortable wrapper ─────────────────────────────────────────────────────────

function SortableQuestion({ id, children }: { id: string; children: ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <div ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 }}>
      <div className="flex items-start gap-1">
        <button {...listeners} {...attributes}
          className="mt-2 cursor-grab active:cursor-grabbing text-gray-300 hover:text-gray-500 touch-none select-none shrink-0 px-0.5">
          ⠿
        </button>
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}

// ─── Generator Mini Panel ─────────────────────────────────────────────────────

function GeneradorMiniPanel({
  generatorId,
  subtipoId,
  variablesDisponibles,
  enunciadoAdmin,
  onAdd,
  onClose,
}: {
  generatorId: string;
  subtipoId: string;
  variablesDisponibles: string[];
  enunciadoAdmin?: string;
  onAdd: (config: GeneradorConfig, preguntas: ModuleQuizQuestion[]) => void;
  onClose: () => void;
}) {
  const [dificultad, setDificultad] = useState<GeneradorConfig["dificultad"]>("intermedio");
  const [cantidad, setCantidad] = useState(5);
  const [semilla, setSemilla] = useState("");
  const [template, setTemplate] = useState(enunciadoAdmin ?? "");
  const [previewQ, setPreviewQ] = useState<ModuleQuizQuestion | null>(null);
  const [previewStatus, setPreviewStatus] = useState<"idle" | "loading" | "ready">("idle");
  const [isAdding, setIsAdding] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const extraVars = variablesDisponibles.filter((v) => !BASE_VARS.includes(v));

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setPreviewStatus("loading");
      try {
        const config: GeneradorConfig = {
          generatorId,
          subtipos: [subtipoId],
          dificultad,
          cantidad: 1,
          semilla: semilla || undefined,
          enunciadosPersonalizados: template.trim() ? { [subtipoId]: template.trim() } : undefined,
        };
        const qs = await generateFromConfig(config);
        setPreviewQ(qs[0] ?? null);
        setPreviewStatus("ready");
      } catch {
        setPreviewStatus("idle");
      }
    }, 300);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [generatorId, subtipoId, dificultad, template, semilla]);

  const handleAdd = async () => {
    setIsAdding(true);
    try {
      const config: GeneradorConfig = {
        generatorId,
        subtipos: [subtipoId],
        dificultad,
        cantidad,
        semilla: semilla || undefined,
        enunciadosPersonalizados: template.trim() ? { [subtipoId]: template.trim() } : undefined,
      };
      const qs = await generateFromConfig(config);
      onAdd(config, qs);
    } catch {
      // silently fail; parent handles error
    } finally {
      setIsAdding(false);
    }
  };

  const insertVar = (v: string) => setTemplate((t) => t + `{${v}}`);

  return (
    <div className="mt-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-surface)] p-3 space-y-2.5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-[var(--c-primary)] font-mono">{subtipoId}</p>
        <button type="button" onClick={onClose} className="text-xs text-[var(--c-muted)] hover:text-[var(--c-text)]">✕</button>
      </div>

      <div>
        <p className="text-[10px] font-medium text-[var(--c-muted)] uppercase mb-1">Dificultad</p>
        <div className="flex gap-1">
          {(["basico", "intermedio", "avanzado"] as const).map((d) => (
            <button key={d} type="button" onClick={() => setDificultad(d)}
              className={`rounded px-2 py-0.5 text-[10px] border transition-colors ${dificultad === d ? "bg-[var(--c-primary)] text-white border-[var(--c-primary)]" : "border-[var(--c-border)] text-[var(--c-muted)] hover:bg-[var(--c-bg)]"}`}>
              {d === "basico" ? "Básico" : d === "intermedio" ? "Intermedio" : "Avanzado"}
            </button>
          ))}
        </div>
      </div>

      <label className="block text-[10px] font-medium text-[var(--c-muted)] uppercase">
        Cantidad: <span className="text-[var(--c-primary)] font-semibold normal-case text-xs">{cantidad}</span>
        <input type="range" min={1} max={20} value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))} className="w-full mt-1" />
      </label>

      <label className="block text-[10px] font-medium text-[var(--c-muted)] uppercase">
        Semilla (opcional)
        <input value={semilla} onChange={(e) => setSemilla(e.target.value)} placeholder="auto"
          className="mt-1 w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs" />
      </label>

      <div className="space-y-1">
        <p className="text-[10px] font-medium text-[var(--c-muted)] uppercase">Template enunciado (opcional)</p>
        <textarea rows={2} value={template} onChange={(e) => setTemplate(e.target.value)}
          placeholder='{respuesta} es la respuesta'
          className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs font-mono focus:outline-none focus:border-[var(--c-primary)] resize-none" />
        {variablesDisponibles.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {variablesDisponibles.map((v) => (
              <button key={v} type="button" onClick={() => insertVar(v)}
                className={`rounded px-1.5 py-0.5 text-[9px] font-mono border transition-colors ${
                  extraVars.includes(v)
                    ? "bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100"
                    : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                }`}>
                {`{${v}}`}
              </button>
            ))}
          </div>
        )}
      </div>

      {previewStatus !== "idle" && (
        <div className="rounded border border-[var(--c-border)] bg-[var(--c-bg)] p-2">
          <p className="text-[9px] font-semibold text-[var(--c-muted)] uppercase mb-1">Vista previa</p>
          {previewStatus === "loading" ? (
            <p className="text-xs text-[var(--c-muted)] animate-pulse">Generando...</p>
          ) : previewQ ? (
            <>
              {previewQ.visualSpec && <VisualizerRenderer spec={previewQ.visualSpec} />}
              <p className="text-xs text-[var(--c-text)]">{previewQ.prompt || "(sin enunciado)"}</p>
              {previewQ.options && (
                <ul className="mt-1 space-y-0.5">
                  {previewQ.options.map((opt, oi) => (
                    <li key={oi} className={`text-[10px] ${previewQ.answerKey === opt ? "font-semibold text-green-700" : "text-[var(--c-muted)]"}`}>
                      {String.fromCharCode(65 + oi)}. {opt}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : null}
        </div>
      )}

      <button type="button" onClick={handleAdd} disabled={isAdding}
        className="w-full rounded-lg bg-[var(--c-primary)] py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity">
        {isAdding ? "Generando..." : `Agregar ${cantidad} pregunta${cantidad !== 1 ? "s" : ""} a la receta`}
      </button>
    </div>
  );
}

// ─── Generators Panel ─────────────────────────────────────────────────────────

function GeneradoresPanel({
  catalog,
  onAdd,
}: {
  catalog: CatalogItem[];
  onAdd: (config: GeneradorConfig, preguntas: ModuleQuizQuestion[]) => void;
}) {
  const [search, setSearch] = useState("");
  const [activeMat, setActiveMat] = useState<string | null>(null);
  const [expandedGen, setExpandedGen] = useState<string | null>(null);
  const [miniPanel, setMiniPanel] = useState<{ genId: string; subtipoId: string } | null>(null);

  const materias = Array.from(new Set(catalog.map((c) => c.materia))).sort();

  const filtered = catalog.filter((c) => {
    if (activeMat && c.materia !== activeMat) return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return c.label.toLowerCase().includes(q)
      || c.materia.toLowerCase().includes(q)
      || c.subtipos.some((s) => s.label.toLowerCase().includes(q) || s.id.toLowerCase().includes(q));
  });

  return (
    <div className="space-y-2">
      <input className="w-full rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs focus:outline-none focus:border-[var(--c-primary)]"
        placeholder="Buscar generador o subtipo..." value={search}
        onChange={(e) => { setSearch(e.target.value); setActiveMat(null); }} />

      <div className="flex flex-wrap gap-1">
        {materias.map((m) => (
          <button key={m} type="button"
            onClick={() => { setActiveMat(activeMat === m ? null : m); setSearch(""); }}
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium border transition-colors ${activeMat === m ? "bg-[var(--c-primary)] text-white border-[var(--c-primary)]" : "bg-[var(--c-surface)] border-[var(--c-border)] text-[var(--c-muted)] hover:bg-[var(--c-bg)]"}`}>
            {m}
          </button>
        ))}
      </div>

      <div className="space-y-1 max-h-96 overflow-y-auto pr-1">
        {filtered.map((gen) => {
          const shortLabel = gen.label.includes("—") ? gen.label.split("—")[1].trim() : gen.label;
          const isOpen = expandedGen === gen.id;
          return (
            <div key={gen.id} className="rounded-lg border border-[var(--c-border)] overflow-hidden">
              <button type="button" onClick={() => setExpandedGen(isOpen ? null : gen.id)}
                className="w-full flex items-center justify-between px-2.5 py-2 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">
                <span>{shortLabel}</span>
                <span className="text-[var(--c-muted)]">{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && (
                <div className="px-2.5 pb-2.5 pt-1 space-y-1.5 border-t border-[var(--c-border)]">
                  <div className="flex flex-wrap gap-1.5">
                    {gen.subtipos.map((sub) => {
                      const isActive = miniPanel?.genId === gen.id && miniPanel?.subtipoId === sub.id;
                      const extraVarCount = (sub.variablesDisponibles ?? []).filter((v) => !BASE_VARS.includes(v)).length;
                      return (
                        <div key={sub.id} className="contents">
                          <button type="button"
                            onClick={() => setMiniPanel(isActive ? null : { genId: gen.id, subtipoId: sub.id })}
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium border transition-colors ${isActive ? "bg-[var(--c-primary)] text-white border-[var(--c-primary)]" : "bg-[var(--c-surface)] border-[var(--c-border)] text-[var(--c-muted)] hover:bg-[var(--c-bg)]"}`}>
                            {sub.label}
                            {sub.tieneGrafico && (
                              <span title="Incluye gráfico" className="bg-blue-100 text-blue-700 rounded px-1 text-[8px]">G</span>
                            )}
                            {sub.variablesDisponibles ? (
                              extraVarCount > 0
                                ? <span title="Soporta template completo" className="text-[8px]">✏️</span>
                                : <span title="Solo variables básicas: {respuesta}, {subtipo}, {dificultad}" className="text-gray-400 text-[8px]">⚠️</span>
                            ) : null}
                          </button>
                          {isActive && (
                            <div className="w-full">
                              <GeneradorMiniPanel
                                generatorId={gen.id}
                                subtipoId={sub.id}
                                variablesDisponibles={sub.variablesDisponibles ?? BASE_VARS}
                                enunciadoAdmin={gen.enunciadosPersonalizados?.[sub.id]}
                                onAdd={(config, preguntas) => { onAdd(config, preguntas); setMiniPanel(null); }}
                                onClose={() => setMiniPanel(null)}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-xs text-[var(--c-muted)] py-2">No hay generadores que coincidan.</p>
        )}
      </div>
    </div>
  );
}

// ─── Left sidebar ─────────────────────────────────────────────────────────────

function ColFuentes({
  catalog,
  onAddManual,
  onAddGenerator,
  onAddBanco,
}: {
  catalog: CatalogItem[];
  onAddManual: (qType: ModuleQuizQuestion["questionType"]) => void;
  onAddGenerator: (config: GeneradorConfig, preguntas: ModuleQuizQuestion[], label: string) => void;
  onAddBanco: (payload: { quizId: string; quizTitle: string; modo: "todas" | "azar"; cantidad: number }[]) => void;
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({ manual: true, generadores: false, bancoAdmin: false, bancoEscuela: false });
  const toggle = (k: string) => setOpen((p) => ({ ...p, [k]: !p[k] }));

  const SECTIONS = [
    { key: "manual", label: "Manual" },
    { key: "generadores", label: "Generadores automáticos" },
    { key: "bancoAdmin", label: "Banco — Global (admin)" },
    { key: "bancoEscuela", label: "Banco — Mi escuela" },
  ] as const;

  return (
    <div className="h-full overflow-y-auto space-y-1 p-3">
      <p className="text-[10px] font-semibold text-[var(--c-muted)] uppercase tracking-wide px-1 mb-2">Fuentes</p>
      {SECTIONS.map(({ key, label }) => (
        <div key={key} className="rounded-lg border border-[var(--c-border)] overflow-hidden">
          <button type="button" onClick={() => toggle(key)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">
            {label}
            <span className="text-[var(--c-muted)]">{open[key] ? "▲" : "▼"}</span>
          </button>
          {open[key] && (
            <div className="border-t border-[var(--c-border)] p-3">
              {key === "manual" && (
                <div className="space-y-2">
                  <p className="text-[10px] text-[var(--c-muted)]">Agregar pregunta en blanco</p>
                  <div className="flex flex-wrap gap-2">
                    {(["mc", "vf", "input"] as const).map((t) => (
                      <button key={t} type="button" onClick={() => onAddManual(t)}
                        className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-1.5 text-xs hover:bg-[var(--c-bg)] transition-colors">
                        {t === "mc" ? "+ Opción múltiple" : t === "vf" ? "+ V/F" : "+ Respuesta abierta"}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {key === "generadores" && (
                <GeneradoresPanel catalog={catalog}
                  onAdd={(config, preguntas) => {
                    const gen = catalog.find((c) => c.id === config.generatorId);
                    const label = gen?.label ?? config.generatorId;
                    onAddGenerator(config, preguntas, label);
                  }} />
              )}
              {(key === "bancoAdmin" || key === "bancoEscuela") && (
                <BancoCuestionariosMulti
                  origen={key === "bancoAdmin" ? "admin" : "escuela"}
                  onConfirm={onAddBanco} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Recipe chips ─────────────────────────────────────────────────────────────

function RecetaBar({
  fuentes,
  onRemove,
  onFlatten,
  onSaveBank,
}: {
  fuentes: FuenteReceta[];
  onRemove: (id: string) => void;
  onFlatten: () => void;
  onSaveBank: () => void;
}) {
  if (fuentes.length === 0) return null;

  const labelFor = (f: FuenteReceta) => {
    if (f.kind === "manual") {
      const qOrigen = f.question.focus?.startsWith("banco:") ? "banco"
        : f.question.datos !== undefined ? "auto" : "manual";
      return qOrigen === "manual" ? "Manual" : `Ex-${qOrigen}`;
    }
    if (f.kind === "generador") {
      const sub = f.config.subtipos[0] ?? "varios";
      return `${f.label.split("—")[1]?.trim() ?? f.label} × ${f.config.cantidad}`;
    }
    return `${f.quizTitle.slice(0, 20)} × ${f.cantidad === f.preguntasImportadas.length ? "todas" : f.cantidad}`;
  };

  const colorFor = (f: FuenteReceta) =>
    f.kind === "manual"
      ? "bg-gray-100 text-gray-700 border-gray-200"
      : f.kind === "generador"
      ? "bg-blue-100 text-blue-800 border-blue-200"
      : "bg-emerald-100 text-emerald-800 border-emerald-200";

  return (
    <div className="border-b border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-2 space-y-2">
      <div className="flex items-center gap-1 flex-wrap">
        <span className="text-[10px] font-semibold text-[var(--c-muted)] uppercase shrink-0">Receta:</span>
        {fuentes.map((f) => (
          <span key={f.id} className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${colorFor(f)}`}>
            {labelFor(f)}
            <button type="button" onClick={() => onRemove(f.id)} className="hover:text-red-600 ml-0.5">×</button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={onFlatten}
          className="rounded border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1 text-[10px] font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">
          Aplanar para editar
        </button>
        <button type="button" disabled
          title="Próximamente — requiere endpoint de guardado"
          className="rounded border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1 text-[10px] font-medium text-[var(--c-text)] opacity-40 cursor-not-allowed">
          Guardar en banco escuela
        </button>
      </div>
    </div>
  );
}

// ─── Preview column ───────────────────────────────────────────────────────────

function ColPreview({ question, collapsed, onToggle }: { question: ModuleQuizQuestion | null; collapsed: boolean; onToggle: () => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--c-border)]">
        <span className="text-xs font-semibold text-[var(--c-text)]">Vista del alumno</span>
        <button type="button" onClick={onToggle}
          className="text-xs text-[var(--c-muted)] hover:text-[var(--c-text)]">
          {collapsed ? "← Expandir" : "Colapsar →"}
        </button>
      </div>
      {!collapsed && (
        <div className="flex-1 overflow-y-auto p-4">
          {!question ? (
            <p className="text-sm text-[var(--c-muted)]">Seleccioná una pregunta para previsualizar.</p>
          ) : (
            <div className="space-y-3">
              {question.visualSpec && (
                <div className="rounded-lg border border-[var(--c-border)] overflow-hidden">
                  <VisualizerRenderer spec={question.visualSpec} />
                </div>
              )}
              <p className="text-sm text-[var(--c-text)] leading-relaxed">{question.prompt || <em className="text-[var(--c-muted)]">sin enunciado</em>}</p>
              {(question.questionType === "input" || question.questionType === "completar") ? (
                <div className="rounded border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-xs text-[var(--c-muted)] italic">
                  {question.questionType === "completar" ? "Completar..." : "Respuesta abierta"}
                </div>
              ) : (
                <ul className="space-y-1.5">
                  {(question.options ?? []).map((opt, oi) => (
                    <li key={oi} className={`flex items-center gap-2 text-sm ${opt === question.answerKey ? "font-semibold text-green-700" : "text-[var(--c-text)]"}`}>
                      <span className="w-6 h-6 flex items-center justify-center rounded-full border border-[var(--c-border)] text-xs text-[var(--c-muted)] shrink-0">
                        {String.fromCharCode(65 + oi)}
                      </span>
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
              {question.toleranciaRelativa !== undefined && (
                <p className="text-xs text-[var(--c-muted)]">Tolerancia: ±{Math.round(question.toleranciaRelativa * 100)}%</p>
              )}
              {(question.pasos?.length ?? 0) > 0 && (
                <details className="text-xs">
                  <summary className="cursor-pointer text-[var(--c-primary)] hover:underline">Ver resolución</summary>
                  <ol className="mt-2 pl-4 space-y-1 text-[var(--c-muted)] list-decimal">
                    {question.pasos!.map((p, pi) => <li key={pi}>{p}</li>)}
                  </ol>
                </details>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function EditorCuestionariosV2() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const moduleId = searchParams.get("moduleId");
  const returnTo = searchParams.get("returnTo");
  const isEmbedded = Boolean(moduleId && returnTo);

  const [catalog, setCatalog] = useState<CatalogItem[]>([]);
  const [questions, setQuestions] = useState<ModuleQuizQuestion[]>([]);
  const [fuentes, setFuentes] = useState<FuenteReceta[]>([]);
  const [activeQIdx, setActiveQIdx] = useState<number | null>(null);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizType, setQuizType] = useState<"practica" | "formal">("formal");
  const [quizVisibility, setQuizVisibility] = useState<"publico" | "escuela">("publico");
  const [instructions, setInstructions] = useState("");
  const [previewCollapsed, setPreviewCollapsed] = useState(false);
  const [mobileTab, setMobileTab] = useState<MobileTab>("cuestionario");
  const [exportStatus, setExportStatus] = useState<"idle" | "copied" | "saved" | "saving" | "error">("idle");

  useEffect(() => {
    apiGet<{ items: CatalogItem[] }>("/api/generators")
      .then((d) => setCatalog(d.items?.length ? d.items : getStaticCatalog()))
      .catch(() => setCatalog(getStaticCatalog()));
  }, []);

  // DnD setup
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setQuestions((qs) => {
      const from = qs.findIndex((q) => q.id === active.id);
      const to = qs.findIndex((q) => q.id === over.id);
      return arrayMove(qs, from, to);
    });
  };

  // Handlers
  const addManualQuestion = (qType: ModuleQuizQuestion["questionType"]) => {
    const q = createManualQuestion(qType);
    setFuentes((f) => [...f, { kind: "manual", id: uid(), question: q }]);
    setQuestions((qs) => {
      const next = [...qs, q];
      setActiveQIdx(next.length - 1);
      return next;
    });
    setMobileTab("cuestionario");
  };

  const addGenerator = (config: GeneradorConfig, preguntas: ModuleQuizQuestion[], label: string) => {
    const fid = uid();
    setFuentes((f) => [...f, { kind: "generador", id: fid, config, label, preguntasGeneradas: preguntas }]);
    setQuestions((qs) => [...qs, ...preguntas]);
    setMobileTab("cuestionario");
  };

  const addBanco = useCallback(async (payload: { quizId: string; quizTitle: string; modo: "todas" | "azar"; cantidad: number }[]) => {
    for (const p of payload) {
      const allQs = await fetchBancoQuestions(p.quizId).catch(() => [] as ModuleQuizQuestion[]);
      let picked: ModuleQuizQuestion[];
      if (p.modo === "todas") {
        picked = allQs;
      } else {
        const rand = mulberry32(Date.now());
        picked = [...allQs].sort(() => rand() - 0.5).slice(0, p.cantidad);
      }
      const stamped = picked.map((q) => ({ ...q, id: `q-${uid()}`, focus: `banco:${p.quizId}` }));
      setFuentes((f) => [...f, { kind: "banco", id: uid(), quizId: p.quizId, quizTitle: p.quizTitle, modo: p.modo, cantidad: stamped.length, preguntasImportadas: stamped }]);
      setQuestions((qs) => [...qs, ...stamped]);
    }
    setMobileTab("cuestionario");
  }, []);

  const removeFuente = (fid: string) => {
    const fuente = fuentes.find((f) => f.id === fid);
    if (!fuente) return;
    let ids: string[] = [];
    if (fuente.kind === "manual") ids = [fuente.question.id];
    else if (fuente.kind === "generador") ids = fuente.preguntasGeneradas.map((q) => q.id);
    else if (fuente.kind === "banco") ids = fuente.preguntasImportadas.map((q) => q.id);
    setFuentes((f) => f.filter((x) => x.id !== fid));
    setQuestions((qs) => qs.filter((q) => !ids.includes(q.id)));
    const removedSet = new Set(ids);
    setActiveQIdx((prev) => {
      if (prev === null) return null;
      const currentQs = questions;
      if (currentQs[prev] && removedSet.has(currentQs[prev].id)) return null;
      const removedBefore = currentQs.slice(0, prev).filter((q) => removedSet.has(q.id)).length;
      return prev - removedBefore;
    });
  };

  const flattenReceta = () => {
    setFuentes(questions.map((q) => ({ kind: "manual" as const, id: uid(), question: q })));
  };

  const saveToBank = async () => {
    if (questions.length === 0) return;
    setExportStatus("saving");
    try {
      await apiPost("/api/quizzes", {
        title: quizTitle.trim() || "Cuestionario sin título",
        type: quizType,
        visibility: "escuela",
        instructions: instructions.trim() || undefined,
        questions: questions.map((q) => ({
          prompt: q.prompt,
          questionType: q.questionType,
          options: q.options?.length ? q.options : undefined,
          answerKey: q.answerKey || undefined,
          explanation: q.explanation || undefined,
          toleranciaRelativa: q.toleranciaRelativa,
          unidades: q.unidades,
          pasos: q.pasos?.length ? q.pasos : undefined,
        })),
        recipe: { fuentes: fuentes.map((f) => ({ kind: f.kind })) },
      });
      setExportStatus("saved");
      setTimeout(() => setExportStatus("idle"), 2500);
    } catch {
      setExportStatus("error");
      setTimeout(() => setExportStatus("idle"), 2500);
    }
  };

  const buildExportJson = () => ({
    title: quizTitle.trim() || "Cuestionario sin título",
    type: quizType,
    visibility: quizVisibility,
    instructions: instructions.trim() || undefined,
    recipe: { fuentes: fuentes.map((f) => f.kind === "generador" ? { kind: f.kind, config: f.config } : f.kind === "banco" ? { kind: f.kind, quizId: f.quizId, modo: f.modo, cantidad: f.cantidad } : { kind: f.kind }) },
    questions: questions.map((q) => ({
      prompt: q.prompt,
      questionType: q.questionType,
      options: q.options?.length ? q.options : undefined,
      answerKey: q.answerKey || undefined,
      explanation: q.explanation || undefined,
      focus: q.focus || undefined,
      toleranciaRelativa: q.toleranciaRelativa,
      unidades: q.unidades,
      datos: q.datos,
      pasos: q.pasos?.length ? q.pasos : undefined,
      visualSpec: q.visualSpec,
    })),
  });

  const handleCopy = async () => {
    if (!questions.length) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(buildExportJson(), null, 2));
      setExportStatus("copied");
      setTimeout(() => setExportStatus("idle"), 2000);
    } catch {
      setExportStatus("error");
    }
  };

  const handleDownload = () => {
    if (!questions.length) return;
    const data = buildExportJson();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.title.replace(/\s+/g, "_").toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleAddToModule = () => {
    if (!questions.length || !returnTo) return;
    const quiz = buildExportJson();
    navigate(returnTo, {
      state: {
        importedQuiz: { ...quiz, id: `quiz-${uid()}`, status: "draft", version: 1, mode: "manual" },
      },
    });
  };

  const updateQuestion = (idx: number, patch: Partial<ModuleQuizQuestion>) => {
    setQuestions((qs) => {
      const next = [...qs];
      next[idx] = { ...next[idx], ...patch };
      return next;
    });
  };

  const removeQuestion = (idx: number) => {
    const q = questions[idx];
    setFuentes((f) => f.filter((fuente) => {
      if (fuente.kind === "manual") return fuente.question.id !== q.id;
      return true;
    }));
    setQuestions((qs) => qs.filter((_, i) => i !== idx));
    setActiveQIdx((prev) => {
      if (prev === null) return null;
      if (prev === idx) return null;
      return prev > idx ? prev - 1 : prev;
    });
  };

  const activeQuestion = activeQIdx !== null ? questions[activeQIdx] ?? null : null;

  const MOBILE_TABS: Array<{ key: MobileTab; label: string }> = [
    { key: "fuentes", label: "Fuentes" },
    { key: "cuestionario", label: `Cuestionario (${questions.length})` },
    { key: "preview", label: "Vista previa" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--c-bg)]">
      {/* ── Header ───────────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 bg-[var(--c-surface)] border-b border-[var(--c-border)]">
        <div className="flex items-center gap-2 px-4 py-2 flex-wrap">
          <Link className="text-sm text-[var(--c-primary)] hover:underline whitespace-nowrap shrink-0"
            to={returnTo ?? "/modulos/crear"}>
            {isEmbedded ? "← Módulo" : "← Volver"}
          </Link>
          <Link to="/profesor/editor-cuestionarios"
            className="hidden sm:inline-flex items-center text-[10px] text-[var(--c-muted)] hover:text-[var(--c-text)] shrink-0">
            Editor anterior
          </Link>
          <input className="flex-1 min-w-0 rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
            placeholder="Título del cuestionario..."
            value={quizTitle} onChange={(e) => setQuizTitle(e.target.value)} />
          <select value={quizType} onChange={(e) => setQuizType(e.target.value as "practica" | "formal")}
            className="rounded border border-[var(--c-border)] px-2 py-1.5 text-xs bg-[var(--c-bg)] text-[var(--c-text)]">
            <option value="formal">Evaluación</option>
            <option value="practica">Práctica</option>
          </select>
          <select value={quizVisibility} onChange={(e) => setQuizVisibility(e.target.value as "publico" | "escuela")}
            className="rounded border border-[var(--c-border)] px-2 py-1.5 text-xs bg-[var(--c-bg)] text-[var(--c-text)]">
            <option value="publico">Público</option>
            <option value="escuela">Escuela</option>
          </select>
          {!isEmbedded && (
            <button onClick={handleDownload} disabled={!questions.length}
              className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50">
              Descargar
            </button>
          )}
          <button onClick={handleCopy} disabled={!questions.length}
            className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] disabled:opacity-50">
            {exportStatus === "copied" ? "✓ Copiado" : exportStatus === "saved" ? "✓ Guardado" : exportStatus === "saving" ? "Guardando..." : exportStatus === "error" ? "Error" : "Copiar JSON"}
          </button>
          {isEmbedded && (
            <button onClick={handleAddToModule} disabled={!questions.length}
              className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50">
              Agregar al módulo
            </button>
          )}
        </div>

        {/* Mobile tabs */}
        <div className="flex xl:hidden border-t border-[var(--c-border)]">
          {MOBILE_TABS.map(({ key, label }) => (
            <button key={key} type="button" onClick={() => setMobileTab(key)}
              className={`flex-1 py-2 text-xs font-medium transition-colors ${mobileTab === key ? "bg-[var(--c-primary)] text-white" : "text-[var(--c-muted)] hover:bg-[var(--c-bg)]"}`}>
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* ── Instructions bar ────────────────────────────────────── */}
      <div className="border-b border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-1.5 hidden xl:block">
        <input className="w-full max-w-2xl rounded border border-[var(--c-border)] bg-transparent text-[var(--c-text)] px-2 py-1 text-xs focus:outline-none focus:border-[var(--c-primary)]"
          placeholder="Instrucciones para el alumno (opcional)..."
          value={instructions} onChange={(e) => setInstructions(e.target.value)} />
      </div>

      {/* ── Recipe bar ──────────────────────────────────────────── */}
      <RecetaBar fuentes={fuentes} onRemove={removeFuente} onFlatten={flattenReceta} onSaveBank={saveToBank} />

      {/* ── 3-column layout ─────────────────────────────────────── */}
      <div className="flex-1 flex overflow-hidden">
        {/* Column 1 — Fuentes (sidebar) */}
        <div className={`border-r border-[var(--c-border)] bg-[var(--c-surface)] flex-shrink-0 overflow-hidden ${mobileTab === "fuentes" ? "flex" : "hidden"} xl:flex xl:w-72 flex-col`}>
          <ColFuentes catalog={catalog}
            onAddManual={addManualQuestion}
            onAddGenerator={addGenerator}
            onAddBanco={addBanco} />
        </div>

        {/* Column 2 — Cuestionario */}
        <div className={`flex-1 flex flex-col overflow-hidden ${mobileTab === "cuestionario" ? "flex" : "hidden"} xl:flex`}>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {questions.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 text-center text-[var(--c-muted)] space-y-2">
                <p className="text-sm">El cuestionario está vacío.</p>
                <p className="text-xs">Usá el panel de Fuentes para agregar preguntas.</p>
                <button type="button" onClick={() => setMobileTab("fuentes")}
                  className="xl:hidden text-xs text-[var(--c-primary)] hover:underline">
                  Ir a Fuentes →
                </button>
              </div>
            ) : (
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={questions.map((q) => q.id)} strategy={verticalListSortingStrategy}>
                  {questions.map((q, i) => (
                    <SortableQuestion key={q.id} id={q.id}>
                      <QuestionCard
                        question={q}
                        index={i}
                        isActive={activeQIdx === i}
                        onActivate={() => {
                          setActiveQIdx(activeQIdx === i ? null : i);
                          setMobileTab("cuestionario");
                        }}
                        onUpdate={(patch) => updateQuestion(i, patch)}
                        onRemove={() => removeQuestion(i)}
                      />
                    </SortableQuestion>
                  ))}
                </SortableContext>
              </DndContext>
            )}
          </div>
          <div className="border-t border-[var(--c-border)] px-4 py-2 bg-[var(--c-surface)] flex items-center justify-between gap-2 text-xs text-[var(--c-muted)]">
            <span>{questions.length} pregunta{questions.length !== 1 ? "s" : ""}</span>
            <button type="button" onClick={() => setMobileTab("preview")} className="xl:hidden text-[var(--c-primary)] hover:underline">
              Ver preview →
            </button>
          </div>
        </div>

        {/* Column 3 — Preview */}
        <div className={`border-l border-[var(--c-border)] bg-[var(--c-surface)] ${mobileTab === "preview" ? "flex" : "hidden"} xl:flex flex-col transition-all ${previewCollapsed ? "xl:w-0 overflow-hidden" : "xl:w-96"}`}>
          <ColPreview question={activeQuestion} collapsed={previewCollapsed} onToggle={() => setPreviewCollapsed((v) => !v)} />
        </div>
      </div>
    </div>
  );
}
