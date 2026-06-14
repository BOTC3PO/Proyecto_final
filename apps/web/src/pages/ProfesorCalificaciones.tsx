import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";
import CorreccionesPendientes from "../components/profesor/CorreccionesPendientes";

type QuizAttemptResult = {
  id: string;
  quizId: string;
  quizTitle?: string;
  moduleId?: string;
  status: string;
  score?: number;
  maxScore?: number;
  quizType?: string;
  completedAt?: string;
  createdAt?: string;
  userId?: string;
};

export default function ProfesorCalificaciones() {
  const { user } = useAuth();
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [aulaId, setAulaId] = useState("");
  const [attempts, setAttempts] = useState<QuizAttemptResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user?.id) return;
    apiGet<{ items: Classroom[] }>("/api/aulas")
      .then((data) => {
        const misAulas = data.items ?? [];
        setAulas(misAulas);
        if (misAulas[0]) setAulaId(getAulaId(misAulas[0]));
      })
      .catch(() => {});
  }, [user?.id]);

  useEffect(() => {
    if (!aulaId) return;
    let active = true;
    setLoading(true);
    setError(null);
    apiGet<{ items: QuizAttemptResult[] }>(
      `/api/quiz-attempts?moduleId=&aulaId=${encodeURIComponent(aulaId)}&quizType=formal&limit=50`
    )
      .then((data) => {
        if (!active) return;
        setAttempts(data.items ?? []);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [aulaId]);

  // Agrupar por quizId
  const byQuiz = attempts.reduce<Record<string, QuizAttemptResult[]>>(
    (acc, a) => {
      if (!acc[a.quizId]) acc[a.quizId] = [];
      acc[a.quizId].push(a);
      return acc;
    },
    {}
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Calificaciones</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">Resultados de evaluaciones formales por aula.</p>
        </div>

        {aulas.length > 1 && (
          <div className="flex items-center gap-3">
            <label className="text-xs font-medium text-[var(--c-muted)] uppercase tracking-wide">Aula</label>
            <select
              value={aulaId}
              onChange={(e) => setAulaId(e.target.value)}
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
            >
              {aulas.map((a) => (
                <option key={getAulaId(a)} value={getAulaId(a)}>{a.name}</option>
              ))}
            </select>
          </div>
        )}

        <CorreccionesPendientes aulaId={aulaId || undefined} />

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--c-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">Evaluaciones formales</p>
          </div>
          <div className="p-4 space-y-3">
          {loading && (
            <div className="space-y-2">
              {[1,2,3].map(i => <div key={i} className="h-12 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
            </div>
          )}
          {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
          {!loading && !error && Object.keys(byQuiz).length === 0 && (
            <p className="text-sm text-[var(--c-muted)]">
              No hay evaluaciones formales completadas en este aula.
            </p>
          )}
          {!loading && !error && Object.entries(byQuiz).map(([quizId, lista]) => {
            const titulo = lista[0]?.quizTitle ?? quizId;
            const completados = lista.filter((a) => a.status === "completed" || a.status === "submitted");
            const promedio = completados.length > 0
              ? Math.round(completados.reduce((acc, a) => acc + (a.score ?? 0), 0) / completados.length)
              : null;
            return (
              <div key={quizId}
                className="mt-4 rounded-xl border border-[var(--c-border)] p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-[var(--c-text)]">
                    {titulo}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[var(--c-muted)]">
                    <span>{completados.length} entrega(s)</span>
                    {promedio !== null && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-700">
                        Promedio: {promedio}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-3 space-y-1.5">
                  {lista.slice(0, 10).map((a) => (
                    <div key={a.id}
                      className="flex items-center justify-between rounded-lg bg-[var(--c-bg)] px-3 py-2 text-xs">
                      <span className="text-[var(--c-muted)]">
                        {a.completedAt ?? a.createdAt
                          ? new Date(a.completedAt ?? a.createdAt ?? "").toLocaleDateString("es-AR")
                          : "—"}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className={`font-semibold ${
                          a.score != null ? "text-[var(--c-text)]" : "text-[var(--c-muted)]"
                        }`}>
                          {a.score != null
                            ? `${a.score}${a.maxScore ? `/${a.maxScore}` : ""}`
                            : "Sin puntaje"}
                        </span>
                        <Link
                          to={`/profesor/intentos/${a.id}`}
                          className="text-blue-600 hover:underline"
                          data-testid="ver-detalle-intento"
                        >
                          Ver detalle
                        </Link>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          </div>
        </section>
      </div>
  );
}
