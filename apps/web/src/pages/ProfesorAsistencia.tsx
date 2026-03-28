import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";

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
        const misAulas = (data.items ?? []).filter(
          (a) => a.createdBy === user.id ||
            a.teacherIds?.includes(user.id)
        );
        setAulas(misAulas);
        if (misAulas[0]) setAulaId(misAulas[0].id);
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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Asistencia</h1>
        <p className="text-base text-slate-600">
          Clases registradas por aula. La lista de presentes
          está disponible en la app mobile.
        </p>
      </header>

      {/* Selector de aula */}
      {aulas.length > 1 && (
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-slate-700">
            Aula:
          </label>
          <select
            value={aulaId}
            onChange={(e) => setAulaId(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            {aulas.map((a) => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
        </div>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Clases registradas
        </h2>
        <div className="mt-4 space-y-3">
          {loading && (
            <p className="text-sm text-slate-400 animate-pulse">
              Cargando clases...
            </p>
          )}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
          {!loading && !error && actividades.length === 0 && (
            <div className="rounded-xl border-2 border-dashed border-slate-200 py-8 text-center">
              <p className="text-sm text-slate-500">
                No hay clases registradas para este aula.
              </p>
              <Link
                to={`/profesor/aulas/${aulaId}/configuracion`}
                className="mt-2 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Agregar actividades →
              </Link>
            </div>
          )}
          {!loading && !error && actividades.map((act) => (
            <div key={act.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {act.titulo}
                </p>
                {act.descripcion && (
                  <p className="text-xs text-slate-500">{act.descripcion}</p>
                )}
              </div>
              <span className="shrink-0 text-xs text-slate-400">
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
    </main>
  );
}
