import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";
import {
  fetchBoletin, fetchAsistencia, fetchProgresoReporte,
  type BoletinResponse, type AsistenciaResponse,
  type ProgresoResponse,
} from "../services/reportes-v2";

type Tab = "boletin" | "asistencia" | "progreso" | "riesgo";

type AlumnoRiesgo = {
  alumnoId: string;
  nombre: string;
  porcentajeProgreso: number;
  intentosFallidos: number;
  modulosCompletados: number;
  modulosTotal: number;
};

export default function ProfesorReportes() {
  const { user } = useAuth();
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [aulaId, setAulaId] = useState("");
  const [tab, setTab] = useState<Tab>("boletin");
  const [boletin, setBoletin] = useState<BoletinResponse | null>(null);
  const [asistencia, setAsistencia] = useState<AsistenciaResponse | null>(null);
  const [progreso, setProgreso] = useState<ProgresoResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [riesgo, setRiesgo] = useState<AlumnoRiesgo[]>([]);
  const [riesgoLoading, setRiesgoLoading] = useState(false);

  useEffect(() => {
    if (!user?.id) return;
    apiGet<{ items: Classroom[] }>("/api/aulas")
      .then((data) => {
        // El backend ya filtra por membresía
        const items = data.items ?? [];
        setAulas(items);
        if (items[0]) setAulaId(getAulaId(items[0]));
      })
      .catch(() => {});
  }, [user?.id]);

  useEffect(() => {
    if (!aulaId) return;
    let active = true;
    setLoading(true);
    setError(null);
    setBoletin(null);
    setAsistencia(null);
    setProgreso(null);

    Promise.all([
      fetchBoletin(aulaId),
      fetchAsistencia(aulaId),
      fetchProgresoReporte(aulaId),
    ])
      .then(([b, a, p]) => {
        if (!active) return;
        setBoletin(b);
        setAsistencia(a);
        setProgreso(p);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [aulaId]);

  useEffect(() => {
    if (tab !== "riesgo" || !aulaId) return;
    let active = true;
    setRiesgoLoading(true);
    apiGet<{ items: AlumnoRiesgo[] }>(
      `/api/pedagogico/riesgo/${aulaId}`
    )
      .then((data) => { if (!active) return; setRiesgo(data.items ?? []); })
      .catch(() => {})
      .finally(() => { if (!active) return; setRiesgoLoading(false); });
    return () => { active = false; };
  }, [tab, aulaId]);

  const handleExportar = () => {
    const data = tab === "boletin" ? boletin
      : tab === "asistencia" ? asistencia : progreso;
    if (!data) return;
    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reporte-${tab}-${aulaId}-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Reportes</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">Boletín, asistencia y progreso de tu aula.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {aulas.length > 1 && (
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-[var(--c-text)]">Aula:</label>
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
          <button
            type="button"
            onClick={handleExportar}
            disabled={loading || (!boletin && !asistencia && !progreso)}
            className="rounded-xl border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] disabled:opacity-50 transition-colors"
          >
            ⬇ Exportar JSON
          </button>
        </div>

        <div className="flex gap-1 border-b border-[var(--c-border)]">
          {[
            { key: "boletin", label: "📋 Boletín" },
            { key: "asistencia", label: "📅 Asistencia" },
            { key: "progreso", label: "📊 Progreso" },
            { key: "riesgo", label: "⚠ En riesgo" },
          ].map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key as Tab)}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                tab === t.key
                  ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                  : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {error && (
          <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>
        )}

        {loading && (
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-20 animate-pulse rounded-xl bg-[var(--c-border)]" />
            ))}
          </div>
        )}

        {!loading && tab === "boletin" && boletin && (
          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--c-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">Boletín</p>
              <p className="text-xs text-[var(--c-muted)] mt-0.5">
                {boletin.alumnos.length} alumnos · Generado {new Date(boletin.generadoEn).toLocaleDateString("es-AR")}
              </p>
            </div>
            <div className="p-4 space-y-3">
            {boletin.alumnos.length === 0 && (
              <p className="text-sm text-[var(--c-muted)]">Sin alumnos con evaluaciones.</p>
            )}
            {boletin.alumnos.map((alumno) => (
              <article key={alumno.alumnoId}
                className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[var(--c-text)]">{alumno.nombre}</p>
                    <p className="text-xs text-[var(--c-muted)]">@{alumno.username}</p>
                  </div>
                  {alumno.promedioGeneral !== null && (
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${
                      alumno.promedioGeneral >= 7
                        ? "bg-emerald-100 text-emerald-700"
                        : alumno.promedioGeneral >= 4
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-600"
                    }`}>
                      {alumno.promedioGeneral}
                    </span>
                  )}
                </div>
                {alumno.materias.length > 0 && (
                  <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {alumno.materias.map((m) => (
                      <div key={m.materia}
                        className="rounded-lg bg-[var(--c-bg)] px-3 py-2 text-xs">
                        <p className="font-medium text-[var(--c-text)]">{m.materia}</p>
                        <p className="text-[var(--c-muted)] mt-0.5">
                          Promedio: <span className="font-semibold">{m.promedio}</span>
                          {" · "}{m.evaluaciones} eval.
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {alumno.materias.length === 0 && (
                  <p className="mt-2 text-xs text-[var(--c-muted)]">
                    Sin evaluaciones formales completadas.
                  </p>
                )}
              </article>
            ))}
            </div>
          </section>
        )}

        {!loading && tab === "asistencia" && asistencia && (
          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--c-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">Asistencia</p>
            </div>
            <div className="p-4 space-y-3">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Clases", value: asistencia.resumen.totalClases, color: "text-blue-700 bg-blue-50" },
                { label: "Evaluaciones", value: asistencia.resumen.totalEvaluaciones, color: "text-amber-700 bg-amber-50" },
                { label: "Eventos", value: asistencia.resumen.totalEventos, color: "text-violet-700 bg-violet-50" },
              ].map((item) => (
                <div key={item.label}
                  className={`rounded-xl p-5 text-center ${item.color}`}>
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className="text-sm font-medium mt-1">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {asistencia.actividades.length === 0 && (
                <p className="text-sm text-[var(--c-muted)]">Sin actividades registradas.</p>
              )}
              {asistencia.actividades.map((act) => (
                <div key={act.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-[var(--c-border)] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      act.tipo === "evaluacion"
                        ? "bg-amber-100 text-amber-700"
                        : act.tipo === "evento"
                        ? "bg-violet-100 text-violet-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {act.tipo === "evaluacion" ? "📝" : act.tipo === "evento" ? "📅" : "📖"}
                    </span>
                    <p className="text-sm font-medium text-[var(--c-text)]">{act.titulo}</p>
                  </div>
                  <span className="text-xs text-[var(--c-muted)] shrink-0">
                    {act.fechaFormateada}
                  </span>
                </div>
              ))}
            </div>
            </div>
          </section>
        )}

        {!loading && tab === "progreso" && progreso && (
          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--c-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">Progreso</p>
            </div>
            <div className="p-4 space-y-3">
            {progreso.modulos.length === 0 && (
              <p className="text-sm text-[var(--c-muted)]">Sin módulos asignados al aula.</p>
            )}
            {progreso.modulos.map((mod) => (
              <article key={mod.moduloId}
                className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[var(--c-text)]">{mod.titulo}</p>
                    <p className="text-xs text-[var(--c-muted)]">{mod.materia}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    mod.porcentaje >= 75
                      ? "bg-emerald-100 text-emerald-700"
                      : mod.porcentaje >= 40
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    {mod.porcentaje}%
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-[var(--c-border)]">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      mod.porcentaje >= 75 ? "bg-emerald-500"
                      : mod.porcentaje >= 40 ? "bg-amber-400"
                      : "bg-slate-300"
                    }`}
                    style={{ width: `${mod.porcentaje}%` }}
                  />
                </div>
                <div className="mt-2 flex gap-4 text-xs text-[var(--c-muted)]">
                  <span className="text-emerald-600 font-medium">
                    {mod.completados} completados
                  </span>
                  <span className="text-amber-600 font-medium">
                    {mod.enProgreso} en progreso
                  </span>
                  <span>{mod.sinIniciar} sin iniciar</span>
                </div>
              </article>
            ))}
            </div>
          </section>
        )}

        {!loading && tab === "riesgo" && (
          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--c-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">En riesgo</p>
            </div>
            <div className="p-4 space-y-3">
            {riesgoLoading && (
              <div className="space-y-2">
                {[1,2,3].map(i => <div key={i} className="h-12 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
              </div>
            )}
            {!riesgoLoading && riesgo.length === 0 && (
              <div className="rounded-xl border border-emerald-200
                bg-emerald-50 p-6 text-center">
                <p className="text-emerald-700 font-semibold">
                  ✓ Ningún alumno en riesgo
                </p>
                <p className="text-sm text-emerald-600 mt-1">
                  Todos tienen buen progreso y pocos intentos fallidos.
                </p>
              </div>
            )}
            {!riesgoLoading && riesgo.map((alumno) => (
              <article key={alumno.alumnoId}
                className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[var(--c-text)]">
                      {alumno.nombre}
                    </p>
                    <div className="mt-1 flex gap-3 text-xs text-[var(--c-muted)]">
                      <span>
                        Progreso: {alumno.porcentajeProgreso}%
                      </span>
                      <span>
                        Intentos fallidos: {alumno.intentosFallidos}
                      </span>
                      <span>
                        {alumno.modulosCompletados}/{alumno.modulosTotal} módulos
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-200
                    px-3 py-1 text-xs font-semibold text-amber-800">
                    Necesita ayuda
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-amber-100">
                  <div
                    className="h-2 rounded-full bg-amber-500 transition-all"
                    style={{ width: `${alumno.porcentajeProgreso}%` }}
                  />
                </div>
              </article>
            ))}
            </div>
          </section>
        )}
      </div>
  );
}
