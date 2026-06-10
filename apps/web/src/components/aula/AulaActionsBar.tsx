/**
 * AulaActionsBar (Tarea 16 + 16b).
 *
 * Barra de acciones rápidas para el docente dueño de un aula, renderizada
 * arriba del feed en `pages/aula.tsx`. Solo se monta si `isTeacherOfClass`
 * es true (lo decide el padre).
 *
 * Acciones:
 *  1. Tomar asistencia → navega a `/profesor/asistencia?aulaId=...`
 *  2. Publicar anuncio → scroll + focus al form de publicación de la misma
 *     página (no es un <Link>, es un <button> que invoca `onPublicarClick`)
 *  3. Asignar módulo → abre `AsignarModulosModal` (no es un <Link>:
 *     invoca `onAsignarModulosClick`)
 *  4. Estadísticas → navega a `/profesor/estadisticas?aulaId=...`
 *
 * No se renderiza para alumnos, familias ni docentes invitados.
 */

import { Link } from "react-router-dom";

export type AulaActionsBarProps = {
  classroomId: string;
  onPublicarClick: () => void;
  onAsignarModulosClick: () => void;
  className?: string;
};

export default function AulaActionsBar({
  classroomId,
  onPublicarClick,
  onAsignarModulosClick,
  className = "",
}: AulaActionsBarProps) {
  if (!classroomId) return null;
  const linkCls =
    "inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-sm font-medium text-[var(--c-text)] hover:bg-[var(--c-primary-soft,#dbeafe)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-primary)] motion-reduce:transition-none";
  return (
    <div
      role="region"
      aria-label="Acciones del aula"
      data-testid="aula-actions-bar"
      className={`rounded-xl border border-[var(--c-border)] bg-[var(--c-primary-soft,#dbeafe)]/40 p-3 sm:p-4 ${className}`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)] sm:mr-2">
          Acciones del aula
        </p>
        <Link
          to={`/profesor/asistencia?aulaId=${encodeURIComponent(classroomId)}`}
          data-testid="aula-action-asistencia"
          className={linkCls}
        >
          <span aria-hidden="true">📋</span>
          Tomar asistencia
        </Link>
        <button
          type="button"
          onClick={onPublicarClick}
          data-testid="aula-action-publicar"
          className={linkCls}
        >
          <span aria-hidden="true">📢</span>
          Publicar anuncio
        </button>
        <button
          type="button"
          onClick={onAsignarModulosClick}
          data-testid="aula-action-asignar-modulo"
          className={linkCls}
        >
          <span aria-hidden="true">📚</span>
          Asignar módulo
        </button>
        <Link
          to={`/profesor/estadisticas?aulaId=${encodeURIComponent(classroomId)}`}
          data-testid="aula-action-estadisticas"
          className={linkCls}
        >
          <span aria-hidden="true">📊</span>
          Estadísticas
        </Link>
      </div>
    </div>
  );
}

