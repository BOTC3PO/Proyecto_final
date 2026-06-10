import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const presetAulaId = searchParams.get("aulaId") ?? "";
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
        // Si viene ?aulaId= y el docente tiene acceso, preseleccionamos esa.
        if (presetAulaId) {
          const match = items.find((a) => getAulaId(a) === presetAulaId);
          if (match) {
            setAulaId(presetAulaId);
            return;
          }
        }
        if (items[0]) setAulaId(getAulaId(items[0]));
      })
      .catch(() => {});
  }, [user?.id, presetAulaId]);

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Asistencia</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">Clases registradas por aula.</p>
        </div>

        {aulas.length > 1 && (
          <div className="flex items-center gap-3">
            <label className="text-xs font-medium text-[var(--c-muted)] uppercase tracking-wide">
              Aula
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

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--c-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">Clases registradas</p>
          </div>
          <div className="p-4 space-y-3">
            {loading && (
              <div className="space-y-2">
                {[1,2,3].map(i => <div key={i} className="h-12 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
              </div>
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

        <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3">
          <p className="text-sm text-[var(--c-muted)]">
            📱 La lista de presentes con control por alumno estará disponible en la app mobile.
          </p>
        </div>
      </div>
  );
}
