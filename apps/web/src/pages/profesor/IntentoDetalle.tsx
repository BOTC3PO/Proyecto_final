/**
 * F5-03 — Vista docente de un intento: detalle + panel de eventos.
 *
 * El docente llega a esta página desde la lista de calificaciones
 * (futuro: un link "Ver detalle" por fila) o por URL directa. La
 * página muestra:
 *  - Datos básicos del intento (score, maxScore, status, fechas).
 *  - El panel `AttemptEventsPanel` con los flags informativos.
 *
 * PRIVACIDAD: la página NO muestra timestamps, URLs visitadas, ni
 * qué app se abrió — sólo contadores agregados. El navegador no
 * expone esa información, y F5-03 mantiene esa garantía.
 */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiGet } from "../../lib/api";
import AttemptEventsPanel from "../../components/profesor/AttemptEventsPanel";
import {
  summarizeAttemptEvents,
  type AttemptEventsSummary
} from "../../domain/quiz/attemptEvents";

type StaffAttempt = {
  id: string;
  moduleId?: string;
  quizId: string;
  userId: string;
  status: string;
  score: number | null;
  maxScore: number | null;
  submittedAt?: string;
  startedAt?: string;
  grading: Record<string, unknown>;
  events: AttemptEventsSummary;
};

export default function ProfesorIntentoDetalle() {
  const { attemptId } = useParams();
  const [attempt, setAttempt] = useState<StaffAttempt | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!attemptId) return;
    let active = true;
    setStatus("loading");
    apiGet<StaffAttempt>(`/api/quiz-attempts/${attemptId}/staff`)
      .then((data) => {
        if (!active) return;
        // El backend ya devuelve `events` resumido, pero también
        // recomputamos del grading por si la versión vieja del backend
        // no lo incluía (defensa en profundidad).
        setAttempt({
          ...data,
          events: data.events ?? summarizeAttemptEvents(data.grading)
        });
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "No se pudo cargar el intento."
        );
      });
    return () => {
      active = false;
    };
  }, [attemptId]);

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Cargando intento...</p>
      </main>
    );
  }

  if (status === "error" || !attempt) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow space-y-3 max-w-md">
          <p className="text-gray-700">No se pudo cargar el intento.</p>
          <p className="text-sm text-gray-500">{errorMessage}</p>
          <Link
            to="/profesor/calificaciones"
            className="text-blue-600 text-sm hover:underline"
          >
            ← Volver a calificaciones
          </Link>
        </div>
      </main>
    );
  }

  const submitted = attempt.submittedAt
    ? new Date(attempt.submittedAt).toLocaleString()
    : "—";
  const started = attempt.startedAt
    ? new Date(attempt.startedAt).toLocaleString()
    : "—";

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <header className="space-y-2">
          <Link
            to="/profesor/calificaciones"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Volver a calificaciones
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">
            Intento {attempt.id}
          </h1>
          <p className="text-sm text-gray-500">
            Alumno: <code className="text-xs">{attempt.userId}</code>
          </p>
        </header>

        <section className="bg-white rounded-xl shadow p-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-xs font-medium text-gray-500">Score</p>
            <p className="text-lg font-semibold text-gray-900">
              {attempt.score ?? "—"}/{attempt.maxScore ?? "—"}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Estado</p>
            <p className="text-lg font-semibold text-gray-900">{attempt.status}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Inicio</p>
            <p className="text-sm text-gray-700">{started}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Entrega</p>
            <p className="text-sm text-gray-700">{submitted}</p>
          </div>
        </section>

        <AttemptEventsPanel grading={attempt.grading} />

        <p className="text-[11px] text-gray-400">
          La nota del intento es independiente de los eventos
          informativos registrados en este panel. La decisión de dar
          peso a esos eventos es del docente; el sistema no penaliza
          automáticamente.
        </p>
      </div>
    </main>
  );
}
