import { useEffect } from "react";

export type ShortcutHandler = (e: KeyboardEvent) => void;
export type ShortcutMap = Record<string, ShortcutHandler>;

/**
 * Registra atajos de teclado globales para el editor de mapa.
 * Ignora si el foco está en un input/textarea/select.
 *
 * Las teclas se pasan en minúscula. Para combinaciones, usar prefijos:
 *   "ctrl+z" → Ctrl+Z (Cmd+Z en macOS también)
 *   "ctrl+shift+z" → Ctrl+Shift+Z
 *   "escape" → Escape solo
 *
 * Devuelve cleanup automático al desmontar.
 */
export function useMapEditorShortcuts(shortcuts: ShortcutMap, active = true) {
  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
        if (target.isContentEditable) return;
      }
      const parts: string[] = [];
      if (e.ctrlKey || e.metaKey) parts.push("ctrl");
      if (e.shiftKey) parts.push("shift");
      if (e.altKey) parts.push("alt");
      const k = e.key.toLowerCase();
      parts.push(k === "delete" || k === "backspace" ? "delete" : k);
      const combo = parts.join("+");
      const fn = shortcuts[combo];
      if (fn) {
        e.preventDefault();
        fn(e);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [shortcuts, active]);
}
