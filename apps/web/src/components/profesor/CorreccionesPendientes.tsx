/**
 * WO07 — corrección manual de preguntas abiertas.
 *
 * Lista los intentos con ítems `abierta` en modo `manual` que quedaron
 * "pendientes de corrección" al enviarse. El profe asigna un puntaje parcial
 * (0..points) y feedback opcional por ítem; al guardar, el server recalcula la
 * nota del intento y, cuando ya no quedan pendientes, lo marca como "corregido".
 */
import { useCallback, useEffect, useState } from "react";
import { apiGet, apiPost } from "../../lib/api";

type PendingItem = {
  questionId: string;
  prompt: string;
  response: string | string[];
  points: number;
};

type PendingAttempt = {
  id: string;
  quizId: string;
  quizTitle: string;
  moduleId?: string | null;
  userId: string;
  studentName: string;
  submittedAt?: string | null;
  score?: number | null;
  maxScore?: number | null;
  items: PendingItem[];
};

type GradeResponse = {
  status?: string;
  score?: number;
  maxScore?: number;
  allGraded?: boolean;
};

const respuestaTexto = (r: string | string[]): string =>
  Array.isArray(r) ? r.join(", ") : r;

function ItemCorreccion({
  attemptId,
  item,
  onGraded,
}: {
  attemptId: string;
  item: PendingItem;
  onGraded: (questionId: string) => void;
}) {
  const [score, setScore] = useState<string>("");
  const [feedback, setFeedback] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parsed = Number(score);
  const valid = score.trim() !== "" && Number.isFinite(parsed) && parsed >= 0 && parsed <= item.points;

  const guardar = async () => {
    if (!valid) return;
    setSaving(true);
    setError(null);
    try {
      await apiPost<GradeResponse>(`/api/quiz-attempts/${attemptId}/grade`, {
        questionId: item.questionId,
        score: parsed,
        ...(feedback.trim() ? { feedback: feedback.trim() } : {}),
      });
      onGraded(item.questionId);
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo guardar la corrección.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 space-y-2">
      <p className="text-sm font-medium text-[var(--c-text)]">{item.prompt || "(sin enunciado)"}</p>
      <div className="rounded-md bg-[var(--c-surface)] border border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-text)] whitespace-pre-wrap">
        {respuestaTexto(item.response) || <span className="text-[var(--c-muted)] italic">Sin respuesta</span>}
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <label className="flex flex-col gap-0.5 text-xs text-[var(--c-muted)]">
          Puntaje (0–{item.points})
          <input
            type="number"
            min={0}
            max={item.points}
            step="any"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            aria-label={`Puntaje para "${item.prompt}"`}
            className="w-28 rounded border border-[var(--c-border)] bg-[var(--c-surface)] px-2 py-1 text-sm text-[var(--c-text)]"
          />
        </label>
        <label className="flex flex-1 flex-col gap-0.5 text-xs text-[var(--c-muted)] min-w-[12rem]">
          Feedback (opcional)
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            aria-label={`Feedback para "${item.prompt}"`}
            placeholder="Comentario para el alumno"
            className="w-full rounded border border-[var(--c-border)] bg-[var(--c-surface)] px-2 py-1 text-sm text-[var(--c-text)]"
          />
        </label>
        <button
          type="button"
          onClick={guardar}
          disabled={!valid || saving}
          className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-40"
        >
          {saving ? "Guardando…" : "Guardar corrección"}
        </button>
      </div>
      {error && <p className="text-xs text-[var(--c-danger)]">{error}</p>}
    </div>
  );
}

export default function CorreccionesPendientes({ aulaId }: { aulaId?: string }) {
  const [attempts, setAttempts] = useState<PendingAttempt[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargar = useCallback(() => {
    let active = true;
    setLoading(true);
    setError(null);
    const query = aulaId ? `?aulaId=${encodeURIComponent(aulaId)}` : "";
    apiGet<{ items: PendingAttempt[] }>(`/api/quiz-attempts/pending-grading${query}`)
      .then((data) => {
        if (!active) return;
        setAttempts(data.items ?? []);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [aulaId]);

  useEffect(() => cargar(), [cargar]);

  // Al corregir un ítem, lo sacamos del intento; si fue el último, sacamos el intento.
  const handleGraded = (attemptId: string, questionId: string) => {
    setAttempts((prev) =>
      prev
        .map((a) =>
          a.id === attemptId
            ? { ...a, items: a.items.filter((it) => it.questionId !== questionId) }
            : a
        )
        .filter((a) => a.items.length > 0)
    );
  };

  const totalPendientes = attempts.reduce((acc, a) => acc + a.items.length, 0);

  return (
    <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
      <div className="px-4 py-3 border-b border-[var(--c-border)] flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">
          Pendientes de corrección
        </p>
        {totalPendientes > 0 && (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
            {totalPendientes} pregunta(s)
          </span>
        )}
      </div>
      <div className="p-4 space-y-4">
        {loading && (
          <div className="space-y-2">
            {[1, 2].map((i) => (
              <div key={i} className="h-16 rounded-xl animate-pulse bg-[var(--c-border)]" />
            ))}
          </div>
        )}
        {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
        {!loading && !error && attempts.length === 0 && (
          <p className="text-sm text-[var(--c-muted)]">
            No hay preguntas abiertas pendientes de corrección.
          </p>
        )}
        {!loading &&
          !error &&
          attempts.map((a) => (
            <div key={a.id} className="rounded-xl border border-[var(--c-border)] p-4 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--c-text)]">{a.studentName}</h3>
                  <p className="text-xs text-[var(--c-muted)]">{a.quizTitle}</p>
                </div>
                <span className="text-xs text-[var(--c-muted)]">
                  {a.submittedAt ? new Date(a.submittedAt).toLocaleDateString("es-AR") : ""}
                </span>
              </div>
              <div className="space-y-2">
                {a.items.map((item) => (
                  <ItemCorreccion
                    key={item.questionId}
                    attemptId={a.id}
                    item={item}
                    onGraded={(qid) => handleGraded(a.id, qid)}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
