import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";

type ActividadAula = {
  id: string;
  tipo: "clase" | "evaluacion" | "evento";
  titulo: string;
  fecha: string;
  when: string;
  descripcion?: string;
};

export default function ProfesorAsistencia() {
  const { user } = useAuth();
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [aulaId, setAulaId] = useState("");
  const [actividades, setActividades] = useState<ActividadAula[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar aulas del profesor
  useEffect(() => {
    if (!user?.id) return;
    apiGet<{ items: Classroom[] }>("/api/aulas")
      .then((data) => {
        const items = data.items ?? [];
        setAulas(items);
        if (items[0]) setAulaId(getAulaId(items[0]));
      })
      .catch(() => {});
  }, [user?.id]);

  // Cargar actividades tipo "clase" del aula seleccionada
  useEffect(() => {
    if (!aulaId) return;
    let active = true;
    setLoading(true);
    setError(null);
    apiGet<{ items: ActividadAula[] }>(
      `/api/aula/actividades?classroomId=${encodeURIComponent(aulaId)}`
    )
      .then((data) => {
        if (!active) return;
        setActividades(
          (data.items ?? []).filter((a) => a.tipo === "clase")
        );
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [aulaId]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-[var(--c-text)]">Asistencia</h1>
          <p className="text-base text-[var(--c-muted)]">
            Clases registradas por aula. La lista de presentes
            está disponible en la app mobile.
          </p>
        </header>

        {aulas.length > 1 && (
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-[var(--c-text)]">
              Aula:
            </label>
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

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">
            Clases registradas
          </h2>
          <div className="mt-4 space-y-3">
            {loading && (
              <p className="text-sm text-[var(--c-muted)] animate-pulse">
                Cargando clases...
              </p>
            )}
            {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
            {!loading && !error && actividades.length === 0 && (
              <div className="rounded-xl border-2 border-dashed border-[var(--c-border)] py-8 text-center">
                <p className="text-sm text-[var(--c-muted)]">
                  No hay clases registradas para este aula.
                </p>
                <Link
                  to="/profesor/calendario"
                  className="mt-2 inline-block text-sm font-semibold text-[var(--c-primary)] hover:underline"
                >
                  Agregar actividades →
                </Link>
              </div>
            )}
            {!loading && !error && actividades.map((act) => (
              <div key={act.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-[var(--c-border)] px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--c-text)]">
                    {act.titulo}
                  </p>
                  {act.descripcion && (
                    <p className="text-xs text-[var(--c-muted)]">{act.descripcion}</p>
                  )}
                </div>
                <span className="shrink-0 text-xs text-[var(--c-muted)]">
                  {act.when}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
          <p className="text-sm text-blue-700">
            📱 La lista de presentes con control por alumno estará
            disponible en la app mobile.
          </p>
        </div>
      </div>
  );
}
