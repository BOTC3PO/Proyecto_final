/**
 * PLAN-CUESTIONARIOS — "Mis cuestionarios".
 *
 * Página índice del sistema de cuestionarios (Tiza): lista los quizzes
 * sueltos del docente Y los que viven dentro de sus módulos
 * (`GET /api/quizzes?scope=todos`). Cada cuestionario se abre en el
 * editor Tiza (`/plantillas/nueva?quizId=…`), donde la plantilla-config
 * "Configuraciones" edita título/tipo/visibilidad/evaluación (PLAN-Z).
 *
 * Las PLANTILLAS son otra cosa (piezas individuales, `/plantillas`):
 * esta página es sólo de cuestionarios.
 */

import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  crearQuizSuelto,
  listarCuestionarios,
  type CuestionarioListItem,
  type QuizMetaTipo,
} from "../domain/quiz/quizPreguntasApi";

const TIPO_LABEL: Record<QuizMetaTipo, string> = {
  practica: "Práctica",
  formal: "Evaluación formal",
  evaluacion: "Evaluación formal", // alias legacy de "formal"
  competencia: "Competencia",
};

const TIPO_BADGE: Record<QuizMetaTipo, string> = {
  practica: "bg-[var(--c-info-soft,#dbeafe)] text-[var(--c-info,#2563eb)]",
  formal: "bg-[var(--c-warning-soft,#fef3c7)] text-[var(--c-warning,#b45309)]",
  evaluacion: "bg-[var(--c-warning-soft,#fef3c7)] text-[var(--c-warning,#b45309)]",
  competencia: "bg-[var(--c-success-soft,#dcfce7)] text-[var(--c-success,#15803d)]",
};

function tizaHref(quizId: string): string {
  return `/plantillas/nueva?quizId=${encodeURIComponent(quizId)}&returnTo=${encodeURIComponent("/cuestionarios")}`;
}

function CuestionarioCard({ item }: { item: CuestionarioListItem }) {
  const updated = new Date(item.updatedAt);
  return (
    <article
      className="rounded-xl border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-4 shadow-sm hover:shadow transition-shadow"
      data-testid="cuestionario-card"
    >
      <header className="flex items-start justify-between gap-3">
        <Link to={tizaHref(item.id)} className="flex-1 min-w-0 group" data-testid="cuestionario-card-link">
          <h3 className="font-semibold text-sm truncate group-hover:text-[var(--c-primary,#3b82f6)]">
            {item.title}
          </h3>
          {item.materia && (
            <p className="text-xs text-[var(--c-muted,#64748b)]">{item.materia}</p>
          )}
        </Link>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
            TIPO_BADGE[item.type] ?? "bg-[var(--c-bg,#f8fafc)] text-[var(--c-muted,#64748b)]"
          }`}
        >
          {TIPO_LABEL[item.type] ?? item.type}
        </span>
      </header>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[var(--c-muted,#64748b)]">
        <span>
          {item.cantidadPreguntas === 0
            ? "Sin preguntas"
            : `${item.cantidadPreguntas} pregunta${item.cantidadPreguntas === 1 ? "" : "s"}`}
        </span>
        <span aria-hidden="true">·</span>
        {item.moduleId ? (
          <Link
            to={`/modulos/${item.moduleId}/editar`}
            className="text-[var(--c-primary,#3b82f6)] hover:underline"
            data-testid="cuestionario-modulo-link"
          >
            📦 {item.moduleTitle ?? "Módulo"}
          </Link>
        ) : (
          <span data-testid="cuestionario-suelto-badge">Suelto (sin módulo)</span>
        )}
      </div>
      <footer className="mt-3 flex items-center justify-between text-[10px] text-[var(--c-muted,#64748b)]">
        <span>Actualizado {updated.toLocaleDateString()}</span>
        <Link
          to={tizaHref(item.id)}
          className="rounded-md bg-[var(--c-primary,#3b82f6)] px-2 py-1 text-[10px] font-medium text-white hover:opacity-90"
        >
          Abrir en el editor
        </Link>
      </footer>
    </article>
  );
}

export default function CuestionariosIndex() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CuestionarioListItem[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    listarCuestionarios()
      .then((res) => {
        setItems(res);
        setStatus("ready");
      })
      .catch((err) => {
        setStatus("error");
        setErrorMessage(err instanceof Error ? err.message : "Error de carga");
      });
  }, []);

  // Filtro local por título/materia/módulo — la lista es del propio
  // docente, no hace falta paginar/filtrar server-side todavía.
  const visibles = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return items;
    return items.filter(
      (it) =>
        it.title.toLowerCase().includes(needle) ||
        it.materia.toLowerCase().includes(needle) ||
        (it.moduleTitle ?? "").toLowerCase().includes(needle),
    );
  }, [items, q]);

  const handleNuevo = async () => {
    setCreating(true);
    try {
      const { id } = await crearQuizSuelto();
      navigate(tizaHref(id));
    } catch (err) {
      setCreating(false);
      window.alert(
        err instanceof Error ? err.message : "No se pudo crear el cuestionario.",
      );
    }
  };

  return (
    <main className="min-h-screen bg-[var(--c-bg,#f8fafc)] p-6" data-testid="cuestionarios-index">
      <div className="mx-auto max-w-6xl space-y-4">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold">Cuestionarios</h1>
            <p className="mt-0.5 text-xs text-[var(--c-muted,#64748b)]">
              Tus cuestionarios sueltos y los de tus módulos. Las plantillas
              (piezas individuales) viven en{" "}
              <Link to="/plantillas" className="text-[var(--c-primary,#3b82f6)] hover:underline">
                Plantillas
              </Link>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={() => void handleNuevo()}
            disabled={creating}
            className="rounded-md bg-[var(--c-primary,#3b82f6)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
            data-testid="nuevo-cuestionario"
          >
            {creating ? "Creando…" : "+ Nuevo cuestionario"}
          </button>
        </header>

        <section className="flex flex-wrap gap-2">
          <input
            type="search"
            placeholder="Buscar por título, materia o módulo…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="flex-1 min-w-[12rem] rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-3 py-1.5 text-sm"
          />
        </section>

        {status === "loading" && (
          <p className="text-sm text-[var(--c-muted,#64748b)] animate-pulse">Cargando…</p>
        )}
        {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}
        {status === "ready" && visibles.length === 0 && (
          <div className="rounded-xl border-2 border-dashed border-[var(--c-border,#e2e8f0)] py-10 text-center">
            <p className="text-sm text-[var(--c-muted,#64748b)]">
              {items.length === 0
                ? "Todavía no creaste cuestionarios."
                : "Ningún cuestionario coincide con la búsqueda."}
            </p>
            {items.length === 0 && (
              <button
                type="button"
                onClick={() => void handleNuevo()}
                disabled={creating}
                className="mt-3 inline-block text-sm text-[var(--c-primary,#3b82f6)] hover:underline disabled:opacity-60"
              >
                Crear el primero →
              </button>
            )}
          </div>
        )}
        {status === "ready" && visibles.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((it) => (
              <CuestionarioCard key={it.id} item={it} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
