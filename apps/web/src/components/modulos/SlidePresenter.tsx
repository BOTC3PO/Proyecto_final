import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Slide, PresentationTheme } from "./TheorySlideEditor";

// ─── Theme config ─────────────────────────────────────────────────────────────

type ThemeConfig = {
  container: string;
  slide: string;
  title: string;
  body: string;
  nav: string;
  dot: string;
  dotActive: string;
  code: string;
  quote: string;
  divider: string;
};

const THEMES: Record<PresentationTheme, ThemeConfig> = {
  minimal: {
    container: "bg-gray-100",
    slide: "bg-white border border-gray-200 shadow-lg",
    title: "text-gray-900 font-semibold",
    body: "text-gray-700",
    nav: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40",
    dot: "bg-gray-300 hover:bg-gray-400",
    dotActive: "bg-gray-700 scale-125",
    code: "bg-gray-50 border border-gray-200 text-gray-800",
    quote: "border-l-4 border-gray-300 text-gray-600 italic pl-6 bg-transparent",
    divider: "bg-gray-200",
  },
  academic: {
    container: "bg-indigo-50",
    slide: "bg-white border-t-4 border-t-indigo-600 shadow-lg",
    title: "text-indigo-900 font-bold",
    body: "text-slate-700",
    nav: "bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40",
    dot: "bg-indigo-300 hover:bg-indigo-400",
    dotActive: "bg-indigo-700 scale-125",
    code: "bg-slate-800 text-emerald-400",
    quote: "border-l-4 border-indigo-400 text-indigo-800 italic pl-6 bg-indigo-50 py-2 rounded-r-lg",
    divider: "bg-indigo-200",
  },
  dark: {
    container: "bg-gray-950",
    slide: "bg-gray-900 border border-gray-700 shadow-2xl",
    title: "text-white font-semibold",
    body: "text-gray-300",
    nav: "bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-40",
    dot: "bg-gray-600 hover:bg-gray-500",
    dotActive: "bg-white scale-125",
    code: "bg-black border border-gray-700 text-cyan-400",
    quote: "border-l-4 border-cyan-500 text-gray-300 italic pl-6 bg-gray-800 py-2 rounded-r-lg",
    divider: "bg-gray-700",
  },
  colorful: {
    container: "bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50",
    slide: "bg-white shadow-2xl border-0 ring-1 ring-purple-100",
    title: "text-purple-700 font-bold",
    body: "text-gray-700",
    nav: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 disabled:opacity-40",
    dot: "bg-purple-300 hover:bg-purple-400",
    dotActive: "bg-purple-700 scale-125",
    code: "bg-purple-50 border border-purple-200 text-purple-900",
    quote: "border-l-4 border-pink-400 text-purple-800 italic pl-6 bg-pink-50 py-2 rounded-r-lg",
    divider: "bg-purple-200",
  },
};

// ─── Slide content renderer ───────────────────────────────────────────────────

function SlideContent({ slide, cfg }: { slide: Slide; cfg: ThemeConfig }) {
  const layout = slide.layout ?? "title-text";

  switch (layout) {
    case "title-only":
      return (
        <div className="flex flex-col items-center justify-center h-full text-center px-8">
          <h2 className={`text-4xl md:text-5xl leading-tight ${cfg.title}`}>{slide.title}</h2>
        </div>
      );

    case "code":
      return (
        <div className="flex flex-col gap-4 h-full min-h-0">
          {slide.title ? (
            <h2 className={`text-2xl flex-shrink-0 ${cfg.title}`}>{slide.title}</h2>
          ) : null}
          {slide.language ? (
            <p className="text-xs opacity-60 -mt-2 flex-shrink-0">{slide.language}</p>
          ) : null}
          <pre className={`flex-1 rounded-lg p-5 overflow-auto text-sm leading-relaxed font-mono min-h-0 ${cfg.code}`}>
            <code>{slide.body}</code>
          </pre>
        </div>
      );

    case "quote":
      return (
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-12 gap-4">
          {slide.title ? (
            <h2 className={`text-lg flex-shrink-0 opacity-70 ${cfg.title}`}>{slide.title}</h2>
          ) : null}
          <blockquote className={`text-xl md:text-3xl leading-relaxed w-full ${cfg.quote}`}>
            {slide.body}
          </blockquote>
        </div>
      );

    case "image-caption":
      return (
        <div className="flex flex-col gap-4 h-full min-h-0">
          {slide.title ? (
            <h2 className={`text-2xl flex-shrink-0 ${cfg.title}`}>{slide.title}</h2>
          ) : null}
          {slide.imageUrl ? (
            <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl min-h-0">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="max-h-full max-w-full object-contain rounded-xl"
              />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center rounded-xl border-2 border-dashed border-current opacity-20">
              <span className="text-sm">Sin imagen</span>
            </div>
          )}
          {slide.body ? (
            <p className={`text-sm text-center flex-shrink-0 opacity-80 ${cfg.body}`}>{slide.body}</p>
          ) : null}
        </div>
      );

    case "two-columns":
      return (
        <div className="flex flex-col gap-4 h-full min-h-0">
          {slide.title ? (
            <h2 className={`text-2xl flex-shrink-0 ${cfg.title}`}>{slide.title}</h2>
          ) : null}
          <div className="flex gap-6 flex-1 min-h-0">
            <div className={`flex-1 text-sm leading-relaxed overflow-auto whitespace-pre-wrap min-h-0 ${cfg.body}`}>
              {slide.leftColumn}
            </div>
            <div className={`w-px flex-shrink-0 ${cfg.divider}`} />
            <div className={`flex-1 text-sm leading-relaxed overflow-auto whitespace-pre-wrap min-h-0 ${cfg.body}`}>
              {slide.rightColumn}
            </div>
          </div>
        </div>
      );

    default: // title-text
      return (
        <div className="flex flex-col gap-4 h-full min-h-0">
          {slide.title ? (
            <h2 className={`text-2xl md:text-3xl flex-shrink-0 ${cfg.title}`}>{slide.title}</h2>
          ) : null}
          <div className={`flex-1 text-sm md:text-base leading-relaxed overflow-auto whitespace-pre-wrap min-h-0 ${cfg.body}`}>
            {slide.body}
          </div>
        </div>
      );
  }
}

// ─── SlidePresenter ───────────────────────────────────────────────────────────

type Props = {
  slides: Slide[];
  theme: PresentationTheme;
  title: string;
  onClose: () => void;
};

export default function SlidePresenter({ slides, theme, title, onClose }: Props) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const cfg = THEMES[theme] ?? THEMES.minimal;
  const transitioning = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning.current || index < 0 || index >= slides.length) return;
      transitioning.current = true;
      setVisible(false);
      setTimeout(() => {
        setCurrent(index);
        setVisible(true);
        transitioning.current = false;
      }, 180);
    },
    [slides.length],
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, onClose]);

  // Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const slide = slides[current];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col ${cfg.container}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 flex-shrink-0 bg-black/25 backdrop-blur-sm">
        <span className="text-xs font-medium text-white/80 truncate max-w-xs">{title}</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/60 tabular-nums">
            {current + 1} / {slides.length}
          </span>
          <button
            type="button"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            onClick={onClose}
            title="Cerrar (Esc)"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Slide area */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-10 min-h-0">
        <div
          className={`w-full max-w-4xl rounded-2xl p-8 md:p-12 transition-opacity duration-200 ${cfg.slide} ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: "min(72vh, 560px)" }}
        >
          {slide ? <SlideContent slide={slide} cfg={cfg} /> : null}
        </div>
      </div>

      {/* Navigation bar */}
      <div className="flex items-center justify-center gap-4 pb-6 flex-shrink-0">
        <button
          type="button"
          className={`p-2 rounded-full transition-colors ${cfg.nav}`}
          onClick={goPrev}
          disabled={current === 0}
          title="Anterior (←)"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-1.5 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? cfg.dotActive : cfg.dot
              }`}
              onClick={() => goTo(i)}
              title={`Diapositiva ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={`p-2 rounded-full transition-colors ${cfg.nav}`}
          onClick={goNext}
          disabled={current === slides.length - 1}
          title="Siguiente (→ o Espacio)"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-2 right-4 text-xs text-white/30 hidden md:block pointer-events-none">
        ← → para navegar · Esc para salir
      </div>
    </div>
  );
}
