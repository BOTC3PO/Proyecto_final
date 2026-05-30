/**
 * Pill / badge de estado (prototipo `.pill`).
 * Usa las variantes `*-soft` de los tokens para fondo suave + texto del estado.
 */
import type { ReactNode } from "react";

export type PillTone = "ok" | "warn" | "danger" | "info" | "neutral";

export interface PillProps {
  tone?: PillTone;
  children: ReactNode;
  className?: string;
}

const TONES: Record<PillTone, string> = {
  ok: "bg-[var(--c-success-soft)] text-[var(--c-success)]",
  warn: "bg-[var(--c-warning-soft)] text-[var(--c-warning)]",
  danger: "bg-[var(--c-danger-soft)] text-[var(--c-danger)]",
  info: "bg-[var(--c-info-soft)] text-[var(--c-info)]",
  neutral: "bg-[var(--c-surface-3)] text-[var(--c-text-3)]",
};

export default function Pill({ tone = "neutral", children, className = "" }: PillProps) {
  return (
    <span
      className={
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium " +
        TONES[tone] +
        " " +
        className
      }
    >
      {children}
    </span>
  );
}
