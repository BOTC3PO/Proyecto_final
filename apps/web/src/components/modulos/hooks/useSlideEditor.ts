import { useState } from "react";
import type { Slide, ThemeKey, AccentColor } from "../TheorySlideEditor";

function makeSlideId() {
  return `slide-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function defaultSlide(): Slide {
  return { id: makeSlideId(), layout: "top", heading: "", body: "" };
}

function duplicateSlide(s: Slide): Slide {
  return { ...s, id: makeSlideId(), heading: s.heading ? `${s.heading} (copia)` : "" };
}

/**
 * Manages slide list state for TheorySlideEditor.
 * Extracted from the main component to separate state from layout.
 */
export function useSlideEditor(
  initialSlides: Slide[],
  initialTheme: ThemeKey,
  initialAccentColor?: AccentColor,
) {
  const [slides, setSlides] = useState<Slide[]>(
    initialSlides.length > 0 ? initialSlides : [defaultSlide()],
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theme, setTheme] = useState<ThemeKey>(initialTheme);
  const [accentColor, setAccentColor] = useState<AccentColor | undefined>(initialAccentColor);

  const addSlide = () => {
    setSlides((prev) => {
      const next = [...prev, defaultSlide()];
      setCurrentIndex(next.length - 1);
      return next;
    });
  };

  const updateSlide = (id: string, patch: Partial<Omit<Slide, "id">>) => {
    setSlides((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  };

  const removeSlide = (id: string) => {
    setSlides((prev) => {
      if (prev.length === 1) return prev;
      const next = prev.filter((s) => s.id !== id);
      setCurrentIndex((idx) => Math.min(idx, next.length - 1));
      return next;
    });
  };

  const dupSlide = (index: number) => {
    setSlides((prev) => {
      const copy = duplicateSlide(prev[index]);
      const next = [...prev];
      next.splice(index + 1, 0, copy);
      setCurrentIndex(index + 1);
      return next;
    });
  };

  const moveSlide = (from: number, to: number) => {
    setSlides((prev) => {
      if (to < 0 || to >= prev.length) return prev;
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      setCurrentIndex(to);
      return next;
    });
  };

  return {
    slides,
    currentIndex,
    theme,
    accentColor,
    setCurrentIndex,
    setTheme,
    setAccentColor,
    addSlide,
    updateSlide,
    removeSlide,
    dupSlide,
    moveSlide,
  };
}
