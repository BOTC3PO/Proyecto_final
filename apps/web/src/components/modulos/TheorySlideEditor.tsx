import { useState } from "react";
import { X, Plus, Trash2, Copy, ChevronUp, ChevronDown } from "lucide-react";

// ─── Layout presets ───────────────────────────────────────────────────────────

export type LayoutPreset = "centered" | "top" | "split" | "bottom-text";

export const LAYOUT_META: Record<LayoutPreset, { label: string; description: string }> = {
  centered:      { label: "Centrado",      description: "Contenido centrado vertical y horizontalmente" },
  top:           { label: "Desde arriba",  description: "Contenido fluye desde la parte superior" },
  split:         { label: "Dos columnas",  description: "Texto dividido en dos columnas" },
  "bottom-text": { label: "Texto al pie",  description: "Contenido anclado abajo — ideal con imagen de fondo" },
};

export function layoutContainerClass(layout: LayoutPreset): string {
  switch (layout) {
    case "centered":     return "flex flex-col items-center justify-center text-center gap-5 h-full";
    case "top":          return "flex flex-col justify-start gap-5 h-full";
    case "split":        return "flex flex-col gap-5 h-full";
    case "bottom-text":  return "flex flex-col justify-end gap-4 h-full";
  }
}

// ─── Theme definitions (all Tailwind classes hardcoded here for scanner) ───────

export type ThemeKey = "minimal" | "dark" | "warm" | "ocean" | "contrast";
/** Backward-compat alias used by ModuloEditor */
export type PresentationTheme = ThemeKey;

export type ThemeConfig = {
  label: string;
  swatch: string;
  /** Outer slide container — bg color + base text color */
  slide: string;
  /** Big title: text-4xl font-bold */
  heading: string;
  /** Subtitle: text-xl font-medium */
  subtitle: string;
  /** Body text: text-base leading-relaxed */
  body: string;
  /** Code block container */
  code: string;
  /** Navigation prev/next buttons */
  navButton: string;
  /** Dot indicator (inactive) */
  dotInactive: string;
  /** Dot indicator (active) */
  dotActive: string;
  /** Presenter top bar background */
  topBar: string;
  /** Dark bg overlay for background images */
  overlayDark: string;
  /** Subtle bg overlay for background images */
  overlayMedium: string;
};

export const THEMES: Record<ThemeKey, ThemeConfig> = {
  minimal: {
    label: "Minimal",
    swatch: "#f8fafc",
    slide: "bg-white text-slate-900",
    heading: "text-4xl font-bold leading-tight text-slate-900",
    subtitle: "text-xl font-medium text-slate-500",
    body: "text-base leading-relaxed text-slate-700",
    code: "bg-slate-50 border border-slate-200 text-slate-800",
    navButton: "bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40",
    dotInactive: "bg-slate-300 hover:bg-slate-400",
    dotActive: "bg-slate-700 scale-125",
    topBar: "bg-slate-800",
    overlayDark: "bg-black/50",
    overlayMedium: "bg-black/25",
  },
  dark: {
    label: "Oscuro",
    swatch: "#0f172a",
    slide: "bg-slate-900 text-white",
    heading: "text-4xl font-bold leading-tight text-white",
    subtitle: "text-xl font-medium text-slate-400",
    body: "text-base leading-relaxed text-slate-300",
    code: "bg-black border border-slate-700 text-cyan-400",
    navButton: "bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-40",
    dotInactive: "bg-slate-600 hover:bg-slate-500",
    dotActive: "bg-white scale-125",
    topBar: "bg-black",
    overlayDark: "bg-black/60",
    overlayMedium: "bg-black/30",
  },
  warm: {
    label: "Cálido",
    swatch: "#fef3c7",
    slide: "bg-amber-50 text-stone-900",
    heading: "text-4xl font-bold leading-tight text-stone-900",
    subtitle: "text-xl font-medium text-amber-700",
    body: "text-base leading-relaxed text-stone-700",
    code: "bg-stone-100 border border-stone-200 text-stone-800",
    navButton: "bg-amber-200 hover:bg-amber-300 text-stone-800 disabled:opacity-40",
    dotInactive: "bg-amber-300 hover:bg-amber-400",
    dotActive: "bg-stone-700 scale-125",
    topBar: "bg-stone-800",
    overlayDark: "bg-stone-900/50",
    overlayMedium: "bg-stone-900/25",
  },
  ocean: {
    label: "Océano",
    swatch: "#0c4a6e",
    slide: "bg-sky-950 text-sky-50",
    heading: "text-4xl font-bold leading-tight text-sky-50",
    subtitle: "text-xl font-medium text-sky-300",
    body: "text-base leading-relaxed text-sky-100",
    code: "bg-sky-900 border border-sky-700 text-emerald-400",
    navButton: "bg-sky-800 hover:bg-sky-700 text-sky-50 disabled:opacity-40",
    dotInactive: "bg-sky-700 hover:bg-sky-600",
    dotActive: "bg-sky-200 scale-125",
    topBar: "bg-sky-950",
    overlayDark: "bg-sky-950/60",
    overlayMedium: "bg-sky-950/30",
  },
  contrast: {
    label: "Alto contraste",
    swatch: "#ffffff",
    slide: "bg-white text-black border-4 border-black",
    heading: "text-4xl font-black leading-tight text-black",
    subtitle: "text-xl font-bold text-black",
    body: "text-base leading-relaxed text-black",
    code: "bg-gray-100 border-2 border-black text-black",
    navButton: "bg-black hover:bg-gray-800 text-white disabled:opacity-40",
    dotInactive: "bg-gray-400 hover:bg-gray-500",
    dotActive: "bg-black scale-125",
    topBar: "bg-black",
    overlayDark: "bg-black/50",
    overlayMedium: "bg-black/25",
  },
};

// ─── Slide type ───────────────────────────────────────────────────────────────

export type Slide = {
  id: string;
  layout: LayoutPreset;
  /** Big heading — rendered as text-4xl font-bold */
  heading: string;
  /** Medium subtitle — rendered as text-xl font-medium */
  subtitle?: string;
  /** Body text or code content — rendered as text-base */
  body?: string;
  /** Left column text (split layout) */
  leftColumn?: string;
  /** Right column text (split layout) */
  rightColumn?: string;
  /** Background image URL */
  bgImage?: string;
  /** Overlay intensity on top of background image */
  bgOverlay?: "none" | "medium" | "dark";
  /** Render body in a monospace code block */
  isCode?: boolean;
  /** Code language label (e.g. "javascript") */
  language?: string;
};

// ─── Serialization ────────────────────────────────────────────────────────────

/** Maps old SlideLayout string values to the new LayoutPreset system */
function legacyLayoutToPreset(raw?: string): LayoutPreset {
  const valid: LayoutPreset[] = ["centered", "top", "split", "bottom-text"];
  if (raw && valid.includes(raw as LayoutPreset)) return raw as LayoutPreset;
  const map: Record<string, LayoutPreset> = {
    "title-text":    "top",
    "title-only":    "centered",
    "image-caption": "bottom-text",
    "two-columns":   "split",
    code:            "top",
    quote:           "centered",
  };
  return map[raw ?? ""] ?? "top";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeSlide(raw: Record<string, any>): Slide {
  const layout = legacyLayoutToPreset(String(raw.layout ?? ""));
  return {
    id: String(raw.id ?? makeSlideId()),
    layout,
    // Support old "title" field
    heading: String(raw.heading ?? raw.title ?? ""),
    subtitle: raw.subtitle ? String(raw.subtitle) : undefined,
    body: raw.body ? String(raw.body) : undefined,
    leftColumn: raw.leftColumn ? String(raw.leftColumn) : undefined,
    rightColumn: raw.rightColumn ? String(raw.rightColumn) : undefined,
    bgImage: raw.bgImage ? String(raw.bgImage) : undefined,
    bgOverlay: (["none", "medium", "dark"].includes(String(raw.bgOverlay ?? ""))
      ? raw.bgOverlay
      : "none") as Slide["bgOverlay"],
    // Preserve old "code" layout as isCode flag
    isCode: Boolean(raw.isCode) || String(raw.layout) === "code",
    language: raw.language ? String(raw.language) : undefined,
  };
}

function normalizeTheme(raw?: unknown): ThemeKey {
  return (raw && Object.keys(THEMES).includes(String(raw)) ? raw : "minimal") as ThemeKey;
}

export function slidesToDetail(slides: Slide[], theme: ThemeKey = "minimal"): string {
  return JSON.stringify({ version: 3, theme, slides });
}

/** Returns just the Slide array — backward-compat helper. */
export function detailToSlides(detail: string): Slide[] {
  return detailToPresentation(detail).slides;
}

/** Returns both slides and theme. Handles all serialization versions. */
export function detailToPresentation(detail: string): { slides: Slide[]; theme: ThemeKey } {
  try {
    const parsed = JSON.parse(detail);
    if (Array.isArray(parsed)) {
      return { slides: parsed.map(normalizeSlide), theme: "minimal" };
    }
    if (parsed && typeof parsed === "object" && Array.isArray(parsed.slides)) {
      return {
        slides: parsed.slides.map(normalizeSlide),
        theme: normalizeTheme(parsed.theme),
      };
    }
  } catch {
    // not JSON — not a presentation
  }
  return { slides: [], theme: "minimal" };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function makeSlideId() {
  return `slide-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function defaultSlide(): Slide {
  return { id: makeSlideId(), layout: "top", heading: "", body: "" };
}

function duplicateSlide(s: Slide): Slide {
  return { ...s, id: makeSlideId(), heading: s.heading ? `${s.heading} (copia)` : "" };
}

// ─── Layout preview icon ──────────────────────────────────────────────────────

function LayoutIcon({ preset }: { preset: LayoutPreset }) {
  switch (preset) {
    case "centered":
      return (
        <div className="flex flex-col items-center justify-center gap-1 h-full">
          <div className="w-8 h-1.5 rounded bg-current opacity-80" />
          <div className="w-6 h-1 rounded bg-current opacity-40" />
          <div className="w-10 h-0.5 rounded bg-current opacity-25" />
          <div className="w-8 h-0.5 rounded bg-current opacity-25" />
        </div>
      );
    case "top":
      return (
        <div className="flex flex-col justify-start gap-1 h-full py-1">
          <div className="w-8 h-1.5 rounded bg-current opacity-80" />
          <div className="w-6 h-1 rounded bg-current opacity-40" />
          <div className="w-10 h-0.5 rounded bg-current opacity-25" />
          <div className="w-8 h-0.5 rounded bg-current opacity-25" />
        </div>
      );
    case "split":
      return (
        <div className="flex flex-col gap-1 h-full py-1">
          <div className="w-8 h-1.5 rounded bg-current opacity-80" />
          <div className="flex gap-1 flex-1 pt-0.5">
            <div className="flex-1 flex flex-col gap-0.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-0.5 rounded bg-current opacity-30" />
              ))}
            </div>
            <div className="w-px bg-current opacity-20" />
            <div className="flex-1 flex flex-col gap-0.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-0.5 rounded bg-current opacity-30" />
              ))}
            </div>
          </div>
        </div>
      );
    case "bottom-text":
      return (
        <div className="flex flex-col justify-end gap-1 h-full py-1">
          <div className="w-8 h-1.5 rounded bg-current opacity-80" />
          <div className="w-6 h-1 rounded bg-current opacity-40" />
          <div className="w-10 h-0.5 rounded bg-current opacity-25" />
        </div>
      );
  }
}

// ─── Editor form ──────────────────────────────────────────────────────────────

type EditorFormProps = {
  slide: Slide;
  onChange: (patch: Partial<Omit<Slide, "id">>) => void;
};

function SlideEditorForm({ slide, onChange }: EditorFormProps) {
  const isSplit = slide.layout === "split";

  const headingInput = (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-xs font-medium text-gray-500">Título principal</label>
        <span className="text-[10px] text-gray-300 font-mono">text-4xl font-bold</span>
      </div>
      <input
        className="w-full border-0 border-b-2 border-gray-200 pb-2 text-2xl font-bold leading-tight outline-none focus:border-blue-400 bg-transparent placeholder-gray-200 text-gray-800"
        placeholder="Título de la diapositiva"
        value={slide.heading}
        onChange={(e) => onChange({ heading: e.target.value })}
      />
    </div>
  );

  return (
    <div className="flex flex-col gap-7">
      {/* ── Layout picker ── */}
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">Distribución del contenido</p>
        <div className="grid grid-cols-4 gap-2">
          {(Object.keys(LAYOUT_META) as LayoutPreset[]).map((preset) => (
            <button
              key={preset}
              type="button"
              title={LAYOUT_META[preset].description}
              className={`flex flex-col gap-2 p-3 rounded-lg border transition-colors text-gray-600 ${
                slide.layout === preset
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }`}
              style={{ height: 72 }}
              onClick={() => onChange({ layout: preset })}
            >
              <div className="flex-1 min-h-0 w-full">
                <LayoutIcon preset={preset} />
              </div>
              <span className="text-[10px] font-medium leading-none text-center">
                {LAYOUT_META[preset].label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Background image ── */}
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">Imagen de fondo (opcional)</p>
        <input
          type="url"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
          placeholder="https://ejemplo.com/imagen.jpg"
          value={slide.bgImage ?? ""}
          onChange={(e) => onChange({ bgImage: e.target.value || undefined })}
        />
        {slide.bgImage ? (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-gray-500 flex-shrink-0">Capa de color:</span>
            {(["none", "medium", "dark"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                className={`px-2.5 py-1 rounded-md text-xs border transition-colors ${
                  (slide.bgOverlay ?? "none") === opt
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-200 text-gray-600 hover:border-blue-300"
                }`}
                onClick={() => onChange({ bgOverlay: opt })}
              >
                {{ none: "Ninguna", medium: "Suave", dark: "Oscura" }[opt]}
              </button>
            ))}
            <img
              src={slide.bgImage}
              alt=""
              className="ml-auto h-8 w-14 object-cover rounded border border-gray-200 flex-shrink-0"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
        ) : null}
      </div>

      {/* ── Content fields ── */}
      {isSplit ? (
        <>
          {headingInput}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">Columna izquierda</label>
              <textarea
                className="w-full border border-gray-200 rounded-lg p-3 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 leading-relaxed"
                placeholder="Contenido de la columna izquierda..."
                rows={12}
                value={slide.leftColumn ?? ""}
                onChange={(e) => onChange({ leftColumn: e.target.value || undefined })}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">Columna derecha</label>
              <textarea
                className="w-full border border-gray-200 rounded-lg p-3 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 leading-relaxed"
                placeholder="Contenido de la columna derecha..."
                rows={12}
                value={slide.rightColumn ?? ""}
                onChange={(e) => onChange({ rightColumn: e.target.value || undefined })}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {headingInput}

          <div>
            <div className="flex items-baseline justify-between mb-1.5">
              <label className="text-xs font-medium text-gray-500">Subtítulo</label>
              <span className="text-[10px] text-gray-300 font-mono">text-xl font-medium</span>
            </div>
            <input
              className="w-full border-0 border-b border-gray-200 pb-1.5 text-lg font-medium leading-snug outline-none focus:border-blue-400 bg-transparent placeholder-gray-200 text-slate-500"
              placeholder="Subtítulo o descripción secundaria (opcional)"
              value={slide.subtitle ?? ""}
              onChange={(e) => onChange({ subtitle: e.target.value || undefined })}
            />
          </div>

          <div>
            <div className="flex items-baseline justify-between mb-1.5">
              <label className="text-xs font-medium text-gray-500">
                {slide.isCode ? "Código" : "Cuerpo de texto"}
              </label>
              <span className="text-[10px] text-gray-300 font-mono">text-base leading-relaxed</span>
            </div>
            <textarea
              className={`w-full border border-gray-200 rounded-lg p-4 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 leading-relaxed ${
                slide.isCode ? "font-mono bg-gray-50" : ""
              }`}
              placeholder={
                slide.isCode
                  ? "// Escribí tu código aquí..."
                  : "Contenido de la diapositiva...\n\nPodés usar texto libre, listas con guiones (-) o numeradas."
              }
              rows={10}
              value={slide.body ?? ""}
              onChange={(e) => onChange({ body: e.target.value || undefined })}
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={slide.isCode ?? false}
                onChange={(e) => onChange({ isCode: e.target.checked })}
              />
              <span className="text-xs text-gray-600">Mostrar como bloque de código</span>
            </label>
            {slide.isCode ? (
              <input
                className="border border-gray-200 rounded px-2.5 py-1 text-xs outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                placeholder="lenguaje (js, python...)"
                value={slide.language ?? ""}
                onChange={(e) => onChange({ language: e.target.value || undefined })}
              />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Component props ──────────────────────────────────────────────────────────

type Props = {
  presentationTitle: string;
  initialSlides: Slide[];
  initialTheme?: ThemeKey;
  onDone: (slides: Slide[], theme: ThemeKey) => void;
  onClose: () => void;
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function TheorySlideEditor({
  presentationTitle,
  initialSlides,
  initialTheme = "minimal",
  onDone,
  onClose,
}: Props) {
  const [slides, setSlides] = useState<Slide[]>(
    initialSlides.length > 0 ? initialSlides : [defaultSlide()],
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theme, setTheme] = useState<ThemeKey>(initialTheme);

  const currentSlide = slides[currentIndex] ?? null;

  const addSlide = () => {
    const next = [...slides, defaultSlide()];
    setSlides(next);
    setCurrentIndex(next.length - 1);
  };

  const updateSlide = (id: string, patch: Partial<Omit<Slide, "id">>) => {
    setSlides((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  };

  const removeSlide = (id: string) => {
    if (slides.length === 1) return;
    const next = slides.filter((s) => s.id !== id);
    setSlides(next);
    setCurrentIndex((prev) => Math.min(prev, next.length - 1));
  };

  const dupSlide = (index: number) => {
    const copy = duplicateSlide(slides[index]);
    const next = [...slides];
    next.splice(index + 1, 0, copy);
    setSlides(next);
    setCurrentIndex(index + 1);
  };

  const moveSlide = (from: number, to: number) => {
    if (to < 0 || to >= slides.length) return;
    const next = [...slides];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    setSlides(next);
    setCurrentIndex(to);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50 flex-shrink-0 gap-3">
        <h2 className="text-sm font-semibold text-gray-900 truncate min-w-0">
          {presentationTitle || "Presentación"}
        </h2>

        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Theme swatches */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400 mr-0.5">Tema:</span>
            {(Object.entries(THEMES) as [ThemeKey, ThemeConfig][]).map(([key, cfg]) => (
              <button
                key={key}
                type="button"
                title={cfg.label}
                className={`w-5 h-5 rounded-full border-2 transition-all flex-shrink-0 ${
                  theme === key
                    ? "border-blue-500 scale-125 shadow-sm"
                    : "border-gray-300 hover:scale-110 hover:border-gray-400"
                }`}
                style={{ background: cfg.swatch }}
                onClick={() => setTheme(key)}
              />
            ))}
          </div>

          <button
            type="button"
            className="flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-xs hover:bg-gray-100"
            onClick={addSlide}
          >
            <Plus size={12} />
            Diapositiva
          </button>

          <button
            type="button"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
            onClick={() => onDone(slides, theme)}
          >
            Listo
          </button>

          <button
            type="button"
            className="p-1.5 rounded-md hover:bg-gray-200 text-gray-500"
            onClick={onClose}
            title="Cerrar sin guardar"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — slide list */}
        <div className="w-52 border-r border-gray-200 overflow-y-auto bg-gray-50 flex-shrink-0 flex flex-col">
          <div className="flex-1">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`group relative border-b border-gray-100 ${
                  currentIndex === index
                    ? "bg-blue-50 border-l-2 border-l-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <button
                  type="button"
                  className="w-full text-left px-3 py-2.5 pr-9"
                  onClick={() => setCurrentIndex(index)}
                >
                  {/* Mini layout preview + index */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] text-gray-400 tabular-nums">{index + 1}</span>
                    <span className="text-[10px] text-gray-300">·</span>
                    <span className="text-[10px] text-gray-400 truncate">
                      {LAYOUT_META[slide.layout].label}
                    </span>
                    {slide.bgImage ? (
                      <span className="text-[10px] text-blue-400 ml-auto flex-shrink-0" title="Tiene imagen de fondo">⬚</span>
                    ) : null}
                  </div>
                  <p className="text-sm font-medium text-gray-700 truncate leading-snug">
                    {slide.heading || <span className="text-gray-300 italic">Sin título</span>}
                  </p>
                  {slide.subtitle ? (
                    <p className="text-xs text-gray-400 truncate">{slide.subtitle}</p>
                  ) : null}
                </button>

                {/* Action buttons on hover */}
                <div className="absolute right-1 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col gap-0.5">
                  <button
                    type="button"
                    title="Mover arriba"
                    className="p-0.5 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                    disabled={index === 0}
                    onClick={() => moveSlide(index, index - 1)}
                  >
                    <ChevronUp size={12} />
                  </button>
                  <button
                    type="button"
                    title="Duplicar"
                    className="p-0.5 text-gray-400 hover:text-blue-600"
                    onClick={() => dupSlide(index)}
                  >
                    <Copy size={12} />
                  </button>
                  <button
                    type="button"
                    title="Mover abajo"
                    className="p-0.5 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                    disabled={index === slides.length - 1}
                    onClick={() => moveSlide(index, index + 1)}
                  >
                    <ChevronDown size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-1 py-3 text-xs text-gray-400 hover:text-blue-600 hover:bg-blue-50 border-t border-gray-200 flex-shrink-0"
            onClick={addSlide}
          >
            <Plus size={12} />
            Agregar diapositiva
          </button>
        </div>

        {/* Editor panel */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full p-8 flex flex-col gap-8 min-h-full">
            {currentSlide ? (
              <>
                <SlideEditorForm
                  slide={currentSlide}
                  onChange={(patch) => updateSlide(currentSlide.id, patch)}
                />

                {slides.length > 1 ? (
                  <button
                    type="button"
                    className="self-start flex items-center gap-1 text-xs text-red-500 hover:underline"
                    onClick={() => removeSlide(currentSlide.id)}
                  >
                    <Trash2 size={12} />
                    Eliminar diapositiva
                  </button>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
