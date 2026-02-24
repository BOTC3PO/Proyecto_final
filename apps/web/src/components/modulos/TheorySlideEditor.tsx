import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

export type Slide = {
  id: string;
  title: string;
  body: string;
};

type Props = {
  presentationTitle: string;
  initialSlides: Slide[];
  onDone: (slides: Slide[]) => void;
  onClose: () => void;
};

const makeSlideId = () => `slide-${Date.now()}-${Math.random().toString(16).slice(2)}`;

export function slidesToDetail(slides: Slide[]): string {
  return JSON.stringify(slides);
}

export function detailToSlides(detail: string): Slide[] {
  try {
    const parsed = JSON.parse(detail);
    if (Array.isArray(parsed)) return parsed as Slide[];
  } catch {
    // not JSON — not a presentation
  }
  return [];
}

export default function TheorySlideEditor({ presentationTitle, initialSlides, onDone, onClose }: Props) {
  const [slides, setSlides] = useState<Slide[]>(
    initialSlides.length > 0 ? initialSlides : [{ id: makeSlideId(), title: "", body: "" }],
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex] ?? null;

  const addSlide = () => {
    const newSlide: Slide = { id: makeSlideId(), title: "", body: "" };
    const next = [...slides, newSlide];
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
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50 flex-shrink-0">
        <h2 className="text-sm font-semibold text-gray-900 truncate max-w-xs">
          {presentationTitle || "Presentación"}
        </h2>
        <div className="flex items-center gap-2">
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
            onClick={() => onDone(slides)}
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
        <div className="w-48 border-r border-gray-200 overflow-y-auto bg-gray-50 flex-shrink-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`group relative border-b border-gray-100 ${
                currentIndex === index ? "bg-blue-50 border-l-2 border-l-blue-500" : "hover:bg-gray-100"
              }`}
            >
              <button
                type="button"
                className="w-full text-left px-3 py-3 pr-8"
                onClick={() => setCurrentIndex(index)}
              >
                <p className="text-xs text-gray-400 mb-0.5">Diap. {index + 1}</p>
                <p className="text-sm font-medium text-gray-700 truncate">
                  {slide.title || "Sin título"}
                </p>
              </button>
              {slides.length > 1 && (
                <div className="absolute right-1 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col gap-0.5">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-700 px-1"
                    onClick={() => moveSlide(index, index - 1)}
                    disabled={index === 0}
                    title="Mover arriba"
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-700 px-1"
                    onClick={() => moveSlide(index, index + 1)}
                    disabled={index === slides.length - 1}
                    title="Mover abajo"
                  >
                    ▼
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Slide editor */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full p-8 flex flex-col gap-4 min-h-full">
            {currentSlide ? (
              <>
                <input
                  className="text-2xl font-semibold border-0 border-b-2 border-gray-200 pb-2 outline-none focus:border-blue-400 bg-transparent placeholder-gray-300"
                  placeholder="Título de la diapositiva"
                  value={currentSlide.title}
                  onChange={(e) => updateSlide(currentSlide.id, { title: e.target.value })}
                />
                <textarea
                  className="flex-1 min-h-72 border border-gray-200 rounded-lg p-4 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 font-mono leading-relaxed"
                  placeholder={"Contenido de la diapositiva...\n\nPodés usar texto libre, listas con guiones (-) o numeradas."}
                  rows={16}
                  value={currentSlide.body}
                  onChange={(e) => updateSlide(currentSlide.id, { body: e.target.value })}
                />
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
    </div>
  );
}
