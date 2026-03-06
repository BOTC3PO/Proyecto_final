import { useState } from "react";
import { X, Plus, Trash2, Copy, ChevronUp, ChevronDown, Play } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SlideLayout =
  | "title-text"
  | "title-only"
  | "image-caption"
  | "two-columns"
  | "code"
  | "quote";

export type PresentationTheme = "minimal" | "academic" | "dark" | "colorful";

export type Slide = {
  id: string;
  layout?: SlideLayout;
  title: string;
  body: string;
  imageUrl?: string;
  leftColumn?: string;
  rightColumn?: string;
  language?: string;
};

// ─── Serialization ────────────────────────────────────────────────────────────

/** Serialize slides + theme to a JSON string stored in `detail`. */
export function slidesToDetail(slides: Slide[], theme: PresentationTheme = "minimal"): string {
  return JSON.stringify({ version: 2, theme, slides });
}

/**
 * Deserialize slides from `detail`. Returns just the Slide array.
 * Supports both old format (plain array) and new format (versioned object).
 */
export function detailToSlides(detail: string): Slide[] {
  try {
    const parsed = JSON.parse(detail);
    if (Array.isArray(parsed)) return parsed as Slide[];
    if (parsed?.version === 2 && Array.isArray(parsed.slides)) return parsed.slides as Slide[];
  } catch {
    // not JSON — not a presentation
  }
  return [];
}

/** Deserialize slides AND theme from `detail`. */
export function detailToPresentation(detail: string): { slides: Slide[]; theme: PresentationTheme } {
  try {
    const parsed = JSON.parse(detail);
    if (Array.isArray(parsed)) return { slides: parsed as Slide[], theme: "minimal" };
    if (parsed?.version === 2) {
      return {
        slides: Array.isArray(parsed.slides) ? (parsed.slides as Slide[]) : [],
        theme: (parsed.theme as PresentationTheme) ?? "minimal",
      };
    }
  } catch {
    // not JSON
  }
  return { slides: [], theme: "minimal" };
}

// ─── Constants ────────────────────────────────────────────────────────────────

const LAYOUT_OPTIONS: { value: SlideLayout; label: string; description: string }[] = [
  { value: "title-text",    label: "Título + Texto",     description: "Texto libre con encabezado" },
  { value: "title-only",    label: "Solo título",        description: "Diapositiva de sección o portada" },
  { value: "image-caption", label: "Imagen + Pie",       description: "Imagen con título y leyenda" },
  { value: "two-columns",   label: "Dos columnas",       description: "Contenido en paralelo" },
  { value: "code",          label: "Bloque de código",   description: "Código con resaltado" },
  { value: "quote",         label: "Cita destacada",     description: "Frase o cita importante" },
];

export const THEME_OPTIONS: { value: PresentationTheme; label: string; color: string }[] = [
  { value: "minimal",   label: "Minimal",    color: "#f8fafc" },
  { value: "academic",  label: "Académico",  color: "#4338ca" },
  { value: "dark",      label: "Oscuro",     color: "#111827" },
  { value: "colorful",  label: "Colorido",   color: "#a855f7" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const makeSlideId = () => `slide-${Date.now()}-${Math.random().toString(16).slice(2)}`;

function defaultSlide(): Slide {
  return { id: makeSlideId(), layout: "title-text", title: "", body: "" };
}

function duplicateSlide(slide: Slide): Slide {
  return { ...slide, id: makeSlideId(), title: slide.title ? `${slide.title} (copia)` : "" };
}

// ─── Component props ──────────────────────────────────────────────────────────

type Props = {
  presentationTitle: string;
  initialSlides: Slide[];
  initialTheme?: PresentationTheme;
  onDone: (slides: Slide[], theme: PresentationTheme) => void;
  onClose: () => void;
};

// ─── Slide field editor ───────────────────────────────────────────────────────

function SlideFieldEditor({
  slide,
  onChange,
}: {
  slide: Slide;
  onChange: (patch: Partial<Omit<Slide, "id">>) => void;
}) {
  const layout = slide.layout ?? "title-text";

  const titleInput = (
    <input
      className="text-2xl font-semibold border-0 border-b-2 border-gray-200 pb-2 outline-none focus:border-blue-400 bg-transparent placeholder-gray-300 w-full"
      placeholder="Título de la diapositiva"
      value={slide.title}
      onChange={(e) => onChange({ title: e.target.value })}
    />
  );

  const bodyTextarea = (placeholder: string, rows = 12) => (
    <textarea
      className="w-full border border-gray-200 rounded-lg p-4 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 leading-relaxed"
      placeholder={placeholder}
      rows={rows}
      value={slide.body}
      onChange={(e) => onChange({ body: e.target.value })}
    />
  );

  switch (layout) {
    case "title-only":
      return (
        <div className="flex flex-col gap-4">
          {titleInput}
          <p className="text-xs text-gray-400 italic">
            Esta diapositiva muestra solo el título — ideal para separadores de sección.
          </p>
        </div>
      );

    case "image-caption":
      return (
        <div className="flex flex-col gap-4">
          {titleInput}
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">URL de imagen</label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
              placeholder="https://ejemplo.com/imagen.png"
              value={slide.imageUrl ?? ""}
              onChange={(e) => onChange({ imageUrl: e.target.value })}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Pie de imagen (opcional)</label>
            {bodyTextarea("Descripción o leyenda de la imagen...", 4)}
          </div>
        </div>
      );

    case "two-columns":
      return (
        <div className="flex flex-col gap-4">
          {titleInput}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Columna izquierda</label>
              <textarea
                className="w-full border border-gray-200 rounded-lg p-3 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 leading-relaxed"
                placeholder="Contenido de la columna izquierda..."
                rows={10}
                value={slide.leftColumn ?? ""}
                onChange={(e) => onChange({ leftColumn: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Columna derecha</label>
              <textarea
                className="w-full border border-gray-200 rounded-lg p-3 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 leading-relaxed"
                placeholder="Contenido de la columna derecha..."
                rows={10}
                value={slide.rightColumn ?? ""}
                onChange={(e) => onChange({ rightColumn: e.target.value })}
              />
            </div>
          </div>
        </div>
      );

    case "code":
      return (
        <div className="flex flex-col gap-4">
          {titleInput}
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Lenguaje (opcional)</label>
            <input
              className="w-48 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
              placeholder="javascript, python, java..."
              value={slide.language ?? ""}
              onChange={(e) => onChange({ language: e.target.value })}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Código</label>
            <textarea
              className="w-full border border-gray-200 rounded-lg p-4 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 font-mono leading-relaxed bg-gray-50"
              placeholder={"// Escribí tu código aquí..."}
              rows={14}
              value={slide.body}
              onChange={(e) => onChange({ body: e.target.value })}
            />
          </div>
        </div>
      );

    case "quote":
      return (
        <div className="flex flex-col gap-4">
          {titleInput}
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Cita o frase destacada</label>
            {bodyTextarea("Escribí la cita o frase que querés destacar...", 8)}
          </div>
        </div>
      );

    default: // title-text
      return (
        <div className="flex flex-col gap-4">
          {titleInput}
          {bodyTextarea(
            "Contenido de la diapositiva...\n\nPodés usar texto libre, listas con guiones (-) o numeradas.",
            14,
          )}
        </div>
      );
  }
}

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
  const [theme, setTheme] = useState<PresentationTheme>(initialTheme);
  const [showThemePicker, setShowThemePicker] = useState(false);

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

  const currentTheme = THEME_OPTIONS.find((t) => t.value === theme) ?? THEME_OPTIONS[0];

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50 flex-shrink-0 gap-2">
        <h2 className="text-sm font-semibold text-gray-900 truncate max-w-xs flex-shrink-0">
          {presentationTitle || "Presentación"}
        </h2>

        <div className="flex items-center gap-2 flex-wrap justify-end">
          {/* Theme picker */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-xs hover:bg-gray-100"
              onClick={() => setShowThemePicker((v) => !v)}
            >
              <span
                className="w-3 h-3 rounded-full border border-gray-300 flex-shrink-0"
                style={{ background: currentTheme.color }}
              />
              {currentTheme.label}
            </button>
            {showThemePicker && (
              <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-2 min-w-36">
                {THEME_OPTIONS.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs text-left hover:bg-gray-50 ${
                      theme === t.value ? "font-semibold text-blue-600" : "text-gray-700"
                    }`}
                    onClick={() => {
                      setTheme(t.value);
                      setShowThemePicker(false);
                    }}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-gray-300 flex-shrink-0"
                      style={{ background: t.color }}
                    />
                    {t.label}
                  </button>
                ))}
              </div>
            )}
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
        {/* Slide list sidebar */}
        <div className="w-52 border-r border-gray-200 overflow-y-auto bg-gray-50 flex-shrink-0">
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
                className="w-full text-left px-3 py-2.5 pr-8"
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="text-xs text-gray-400">Diap. {index + 1}</p>
                  <span className="text-xs text-gray-300">·</span>
                  <p className="text-xs text-gray-400 truncate">
                    {LAYOUT_OPTIONS.find((l) => l.value === (slide.layout ?? "title-text"))?.label ?? "Texto"}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-700 truncate">
                  {slide.title || "Sin título"}
                </p>
              </button>

              {/* Slide actions (shown on hover) */}
              <div className="absolute right-1 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col gap-0.5">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-700 p-0.5 disabled:opacity-30"
                  onClick={() => moveSlide(index, index - 1)}
                  disabled={index === 0}
                  title="Mover arriba"
                >
                  <ChevronUp size={12} />
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-blue-600 p-0.5"
                  onClick={() => dupSlide(index)}
                  title="Duplicar diapositiva"
                >
                  <Copy size={12} />
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-700 p-0.5 disabled:opacity-30"
                  onClick={() => moveSlide(index, index + 1)}
                  disabled={index === slides.length - 1}
                  title="Mover abajo"
                >
                  <ChevronDown size={12} />
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="w-full flex items-center justify-center gap-1 py-3 text-xs text-gray-400 hover:text-blue-600 hover:bg-blue-50 border-b border-gray-100"
            onClick={addSlide}
          >
            <Plus size={12} />
            Agregar diapositiva
          </button>
        </div>

        {/* Slide editor */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full p-8 flex flex-col gap-6 min-h-full">
            {currentSlide ? (
              <>
                {/* Layout selector */}
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-2">Tipo de diapositiva</p>
                  <div className="flex flex-wrap gap-1.5">
                    {LAYOUT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        title={opt.description}
                        className={`px-2.5 py-1 rounded-md text-xs border transition-colors ${
                          (currentSlide.layout ?? "title-text") === opt.value
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"
                        }`}
                        onClick={() => updateSlide(currentSlide.id, { layout: opt.value })}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Layout-specific fields */}
                <SlideFieldEditor
                  slide={currentSlide}
                  onChange={(patch) => updateSlide(currentSlide.id, patch)}
                />

                {/* Delete button */}
                {slides.length > 1 && (
                  <button
                    type="button"
                    className="self-start flex items-center gap-1 text-xs text-red-500 hover:underline"
                    onClick={() => removeSlide(currentSlide.id)}
                  >
                    <Trash2 size={12} />
                    Eliminar diapositiva
                  </button>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>

      {/* Click outside to close theme picker */}
      {showThemePicker && (
        <div
          className="fixed inset-0 z-[9]"
          onClick={() => setShowThemePicker(false)}
        />
      )}
    </div>
  );
}
