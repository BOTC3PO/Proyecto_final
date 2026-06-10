/**
 * Tarjeta "Continuar donde dejaste" (Tarea 21).
 *
 * Solo para el rol alumno. Recibe la lista de modulos del aula (la misma
 * `classProgress` que ya carga aula.tsx) y elige uno para continuar:
 *   1. Primer modulo con progressPercent > 0 && < 100 && !isLocked.
 *   2. Si no hay, primer modulo no bloqueado con progressPercent === 0.
 *   3. Si no hay candidatos, retorna null.
 *
 * Al hacer click en "Continuar" navega a la ruta del detalle del modulo
 * (la misma que usa la lista de modulos del aula: /modulos/:id).
 */

import { Link } from "react-router-dom";
import type { ClassModuleProgress } from "../pages/aula";

export type ContinuarCardProps = {
  modules: ClassModuleProgress[];
};

export function pickContinueTarget(
  modules: ClassModuleProgress[],
): ClassModuleProgress | null {
  const notLocked = modules.filter((m) => !m.isLocked);
  const inProgress = notLocked.find(
    (m) => m.progressPercent > 0 && m.progressPercent < 100,
  );
  if (inProgress) return inProgress;
  return notLocked.find((m) => m.progressPercent === 0) ?? null;
}

export default function ContinuarCard({ modules }: ContinuarCardProps) {
  const target = pickContinueTarget(modules);
  if (!target) return null;
  return (
    <div
      className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4"
      data-testid="continuar-card"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">
        Continuar donde dejaste
      </p>
      <h3 className="mt-1 text-base font-semibold text-[var(--c-text)]">
        {target.title}
      </h3>
      <div
        className="mt-3 h-1.5 rounded bg-[var(--c-border)]"
        role="progressbar"
        aria-valuenow={target.progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progreso de ${target.title}`}
        data-testid="continuar-progress"
      >
        <div
          className="h-1.5 rounded bg-[var(--c-primary)]"
          style={{ width: `${target.progressPercent}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-[var(--c-muted)]">
        {target.progressPercent === 0
          ? "Sin iniciar"
          : `${target.progressPercent}% completado`}
      </p>
      <Link
        to={`/modulos/${target.id}`}
        data-testid="continuar-link"
        className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-primary)]"
      >
        Continuar →
      </Link>
    </div>
  );
}
