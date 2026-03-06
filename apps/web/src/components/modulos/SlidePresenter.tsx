import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import anime from "animejs/lib/anime.es.js";
import {
  type Slide,
  type ThemeKey,
  type ThemeConfig,
  type LayoutPreset,
  type AccentColor,
  type AccentConfig,
  THEMES,
  ACCENT_COLORS,
  layoutContainerClass,
} from "./TheorySlideEditor";

// ─── Overlay class resolver ───────────────────────────────────────────────────

function overlayClass(slide: Slide, cfg: ThemeConfig): string | null {
  if (!slide.bgImage || !slide.bgOverlay || slide.bgOverlay === "none") return null;
  return slide.bgOverlay === "dark" ? cfg.overlayDark : cfg.overlayMedium;
}

// ─── Body text renderer (handles bullet lines with accent markers) ─────────────

function BodyText({
  text,
  className,
  accentCfg,
  hasBgOverlay,
}: {
  text: string;
  className: string;
  accentCfg: AccentConfig | null;
  hasBgOverlay: boolean;
}) {
  const lines = text.split("\n");
  const bulletRegex = /^(\s*[-•*]\s+)(.*)/;
  const hasAnyBullet = lines.some((l) => bulletRegex.test(l));

  if (!hasAnyBullet) {
    return <p className={`overflow-auto whitespace-pre-wrap flex-1 min-h-0 ${className}`}>{text}</p>;
  }

  return (
    <div className={`overflow-auto flex-1 min-h-0 ${className}`}>
      {lines.map((line, i) => {
        const match = bulletRegex.exec(line);
        if (match) {
          const bulletStyle = accentCfg && !hasBgOverlay ? { color: accentCfg.swatch } : undefined;
          return (
            <div key={i} className="flex gap-2 items-start" data-sa>
              <span className="flex-shrink-0 mt-0.5 font-bold" style={bulletStyle}>•</span>
              <span>{match[2]}</span>
            </div>
          );
        }
        return line.trim() ? (
          <p key={i} className="mt-1" data-sa>{line}</p>
        ) : (
          <div key={i} className="h-2" />
        );
      })}
    </div>
  );
}

// ─── Per-slide content renderer ───────────────────────────────────────────────

function SlideContent({
  slide,
  cfg,
  accentCfg,
}: {
  slide: Slide;
  cfg: ThemeConfig;
  accentCfg: AccentConfig | null;
}) {
  const hasBg = Boolean(slide.bgImage);
  const hasBgOverlay = hasBg && slide.bgOverlay !== "none";

  // Text zone classes — when there's a bg image we force white text for legibility
  const headingCls = hasBgOverlay
    ? "text-4xl font-bold leading-tight text-white drop-shadow"
    : cfg.heading;
  const subtitleCls = hasBgOverlay
    ? "text-xl font-medium text-white/80 drop-shadow"
    : cfg.subtitle;
  const bodyCls = hasBgOverlay
    ? "text-base leading-relaxed text-white/90"
    : cfg.body;

  // Accent style applied to heading via inline style (overrides Tailwind color safely)
  const headingAccentStyle =
    accentCfg && !hasBgOverlay ? { color: accentCfg.swatch } : undefined;

  if (slide.layout === "quote") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 h-full px-4">
        <div
          className="text-6xl leading-none font-serif select-none opacity-20"
          style={headingAccentStyle}
          aria-hidden
        >
          &ldquo;
        </div>
        <blockquote
          className={`text-3xl italic font-serif leading-relaxed text-center ${
            hasBgOverlay ? "text-white drop-shadow" : cfg.heading.replace(/text-4xl/, "text-3xl")
          }`}
          style={headingAccentStyle}
          data-sa
        >
          {slide.heading}
        </blockquote>
        {slide.subtitle ? (
          <cite className={`text-sm not-italic ${subtitleCls}`} data-sa>
            — {slide.subtitle}
          </cite>
        ) : null}
      </div>
    );
  }

  if (slide.layout === "split") {
    return (
      <>
        {slide.heading ? (
          <h2 className={headingCls} style={headingAccentStyle} data-sa>
            {slide.heading}
          </h2>
        ) : null}
        {slide.subtitle ? (
          <p className={subtitleCls} data-sa>{slide.subtitle}</p>
        ) : null}
        <div className="grid grid-cols-[1fr_1px_1fr] gap-6 flex-1 min-h-0">
          <div className={`overflow-auto whitespace-pre-wrap min-h-0 ${bodyCls}`} data-sa>
            {slide.leftColumn ?? slide.body}
          </div>
          <div className="bg-current opacity-15" />
          <div className={`overflow-auto whitespace-pre-wrap min-h-0 ${bodyCls}`} data-sa>
            {slide.rightColumn}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {slide.heading ? (
        <h2 className={headingCls} style={headingAccentStyle} data-sa>
          {slide.heading}
        </h2>
      ) : null}
      {slide.subtitle ? (
        <p className={subtitleCls} data-sa>{slide.subtitle}</p>
      ) : null}

      {slide.isCode && slide.body ? (
        <div className="flex-1 flex flex-col gap-1 min-h-0" data-sa>
          {slide.language ? (
            <span className="text-xs opacity-50 flex-shrink-0">{slide.language}</span>
          ) : null}
          <pre className={`flex-1 rounded-xl p-5 overflow-auto text-sm leading-relaxed font-mono min-h-0 ${cfg.code}`}>
            <code>{slide.body}</code>
          </pre>
        </div>
      ) : slide.body ? (
        <BodyText
          text={slide.body}
          className={bodyCls}
          accentCfg={accentCfg}
          hasBgOverlay={hasBgOverlay}
        />
      ) : null}
    </>
  );
}

// ─── SlidePresenter ───────────────────────────────────────────────────────────

type Props = {
  slides: Slide[];
  theme: ThemeKey;
  title: string;
  accentColor?: AccentColor;
  onClose: () => void;
};

export default function SlidePresenter({ slides, theme, title, accentColor, onClose }: Props) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const transitioning = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cfg: ThemeConfig = THEMES[theme] ?? THEMES.minimal;
  const accentCfg: AccentConfig | null = accentColor ? (ACCENT_COLORS[accentColor] ?? null) : null;

  const goTo = useCallback(
    (index: number) => {
      if (transitioning.current || index < 0 || index >= slides.length) return;
      transitioning.current = true;
      setVisible(false);
      setTimeout(() => {
        setCurrent(index);
        setVisible(true);
        transitioning.current = false;
      }, 200);
    },
    [slides.length],
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Anime.js stagger animation for slide elements on each slide change
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const elements = container.querySelectorAll("[data-sa]");
    if (!elements.length) return;

    // Set initial hidden state before animating
    anime.set(elements, { opacity: 0, translateY: 14 });

    // Wait for the fade-in transition to start, then stagger elements in
    const timer = setTimeout(() => {
      anime({
        targets: Array.from(elements),
        opacity: [0, 1],
        translateY: [14, 0],
        duration: 380,
        delay: anime.stagger(75),
        easing: "easeOutQuart",
      });
    }, 160);

    return () => clearTimeout(timer);
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      else if (e.key === "Escape") { onClose(); }
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
    if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  const slide = slides[current];
  const layout: LayoutPreset = slide?.layout ?? "top";
  const hasBg = Boolean(slide?.bgImage);
  const overlay = slide ? overlayClass(slide, cfg) : null;
  const progressPct = slides.length > 1 ? ((current + 1) / slides.length) * 100 : 100;
  const barColor = accentCfg ? accentCfg.bar : "bg-indigo-500";
  const activeDotClass = accentCfg ? accentCfg.bar + " scale-125" : cfg.dotActive;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col ${hasBg ? "bg-black" : cfg.slide}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top bar */}
      <div className={`flex items-center justify-between px-4 py-2 flex-shrink-0 ${cfg.topBar} bg-opacity-90 backdrop-blur-sm`}>
        <span className="text-xs font-medium text-white/80 truncate max-w-xs">{title}</span>
        <div className="flex items-center gap-3">
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
          className={`w-full max-w-4xl rounded-2xl overflow-hidden relative transition-opacity duration-300 ${cfg.slide} ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: "min(72vh, 560px)" }}
        >
          {/* Background image */}
          {hasBg ? (
            <img
              src={slide.bgImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : null}

          {/* Overlay */}
          {overlay ? (
            <div className={`absolute inset-0 ${overlay}`} />
          ) : null}

          {/* Content */}
          <div
            ref={contentRef}
            className={`relative z-10 p-8 md:p-12 ${layoutContainerClass(layout)}`}
          >
            {slide ? <SlideContent slide={slide} cfg={cfg} accentCfg={accentCfg} /> : null}
          </div>

          {/* Progress bar — bottom of slide card */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 z-20">
            <div
              className={`h-full transition-all duration-300 ${barColor}`}
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Slide counter — bottom-right of slide card */}
          <span className="absolute bottom-3 right-4 text-xs text-slate-400 z-20 tabular-nums select-none">
            {current + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="flex items-center justify-center gap-4 pb-6 flex-shrink-0">
        <button
          type="button"
          className={`p-2 rounded-full transition-colors ${cfg.navButton}`}
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
                i === current ? activeDotClass : cfg.dotInactive
              }`}
              onClick={() => goTo(i)}
              title={`Diapositiva ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={`p-2 rounded-full transition-colors ${cfg.navButton}`}
          onClick={goNext}
          disabled={current === slides.length - 1}
          title="Siguiente (→ o Espacio)"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Keyboard hint */}
      <p className="absolute bottom-2 right-4 text-xs text-white/25 hidden md:block pointer-events-none select-none">
        ← → para navegar · Esc para salir
      </p>
    </div>
  );
}
