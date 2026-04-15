import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";

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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Calificaciones</h1>
        <p className="text-base text-slate-600">
          Resultados de evaluaciones formales por aula.
        </p>
      </header>

      {aulas.length > 1 && (
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-slate-700">Aula:</label>
          <select
            value={aulaId}
            onChange={(e) => setAulaId(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            {aulas.map((a) => (
              <option key={getAulaId(a)} value={getAulaId(a)}>{a.name}</option>
            ))}
          </select>
        </div>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Evaluaciones formales
        </h2>
        {loading && (
          <p className="mt-4 text-sm text-slate-400 animate-pulse">
            Cargando calificaciones...
          </p>
        )}
        {error && <p className="mt-4 text-sm text-red-500">Error: {error}</p>}
        {!loading && !error && Object.keys(byQuiz).length === 0 && (
          <p className="mt-4 text-sm text-slate-500">
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
              className="mt-4 rounded-xl border border-slate-100 p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-800">
                  {titulo}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500">
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
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs">
                    <span className="text-slate-600">
                      {a.completedAt ?? a.createdAt
                        ? new Date(a.completedAt ?? a.createdAt ?? "").toLocaleDateString("es-AR")
                        : "—"}
                    </span>
                    <span className={`font-semibold ${
                      a.score != null ? "text-slate-800" : "text-slate-400"
                    }`}>
                      {a.score != null
                        ? `${a.score}${a.maxScore ? `/${a.maxScore}` : ""}`
                        : "Sin puntaje"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
