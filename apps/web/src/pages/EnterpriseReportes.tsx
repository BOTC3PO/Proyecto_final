import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import {
  fetchEscuelaReporte, fetchBoletin, fetchProgresoReporte,
  type EscuelaResponse, type BoletinResponse,
  type ProgresoResponse,
} from "../services/reportes-v2";

export default function EnterpriseReportes() {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [escuela, setEscuela] = useState<EscuelaResponse | null>(null);
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [aulaId, setAulaId] = useState("");
  const [boletin, setBoletin] = useState<BoletinResponse | null>(null);
  const [progreso, setProgreso] = useState<ProgresoResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [aulaLoading, setAulaLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar indicadores globales y lista de aulas
  useEffect(() => {
    if (!schoolId) return;
    let active = true;
    Promise.all([
      fetchEscuelaReporte(),
      apiGet<{ items: Classroom[] }>(
        `/api/aulas?schoolId=${encodeURIComponent(schoolId)}`
      ),
    ])
      .then(([esc, aulasData]) => {
        if (!active) return;
        setEscuela(esc);
        const items = aulasData.items ?? [];
        setAulas(items);
        if (items[0]) setAulaId(items[0].id);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [schoolId]);

  // Cargar boletín y progreso cuando cambia el aula
  useEffect(() => {
    if (!aulaId) return;
    let active = true;
    setAulaLoading(true);
    Promise.all([fetchBoletin(aulaId), fetchProgresoReporte(aulaId)])
      .then(([b, p]) => {
        if (!active) return;
        setBoletin(b);
        setProgreso(p);
      })
      .catch(() => {})
      .finally(() => { if (!active) return; setAulaLoading(false); });
    return () => { active = false; };
  }, [aulaId]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Reportes</h1>
        <p className="text-base text-slate-600">
          Métricas globales e informes por aula.
        </p>
      </header>

      {error && <p className="text-sm text-red-500">Error: {error}</p>}

      {/* Indicadores globales */}
      {loading ? (
        <div className="grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl bg-slate-100" />
          ))}
        </div>
      ) : escuela && (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Aulas activas", value: escuela.indicadores.totalAulas, color: "text-blue-700" },
            { label: "Usuarios", value: escuela.indicadores.totalUsuarios, color: "text-violet-700" },
            { label: "Actividades", value: escuela.indicadores.totalActividades, color: "text-amber-700" },
            { label: "Módulos completados", value: escuela.indicadores.progresoCompletado, color: "text-emerald-700" },
            { label: "Progreso total", value: `${escuela.indicadores.porcentajeCompletado}%`, color: "text-slate-700" },
          ].map((item) => (
            <div key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className={`mt-1 text-3xl font-bold ${item.color}`}>
                {item.value}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Selector de aula + reportes */}
      {aulas.length > 0 && (
        <>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-700">
              Ver reporte de aula:
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

          {aulaLoading && (
            <div className="space-y-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="h-20 animate-pulse rounded-2xl bg-slate-100" />
              ))}
            </div>
          )}

          {/* Progreso del aula */}
          {!aulaLoading && progreso && progreso.modulos.length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Progreso por módulo
              </h2>
              {progreso.modulos.map((mod) => (
                <div key={mod.moduloId}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">{mod.titulo}</span>
                    <span className="text-slate-400">{mod.porcentaje}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div
                      className={`h-2 rounded-full ${
                        mod.porcentaje >= 75 ? "bg-emerald-500"
                        : mod.porcentaje >= 40 ? "bg-amber-400"
                        : "bg-slate-300"
                      }`}
                      style={{ width: `${mod.porcentaje}%` }}
                    />
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Boletín resumido */}
          {!aulaLoading && boletin && boletin.alumnos.length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Boletín — {boletin.aulaNombre}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 pr-4 font-semibold text-slate-600">
                        Alumno
                      </th>
                      <th className="text-center py-2 px-4 font-semibold text-slate-600">
                        Promedio
                      </th>
                      <th className="text-center py-2 pl-4 font-semibold text-slate-600">
                        Evaluaciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {boletin.alumnos.map((a) => (
                      <tr key={a.alumnoId}>
                        <td className="py-2 pr-4 text-slate-800">{a.nombre}</td>
                        <td className="py-2 px-4 text-center">
                          {a.promedioGeneral !== null ? (
                            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                              a.promedioGeneral >= 7
                                ? "bg-emerald-100 text-emerald-700"
                                : a.promedioGeneral >= 4
                                ? "bg-amber-100 text-amber-700"
                                : "bg-red-100 text-red-600"
                            }`}>
                              {a.promedioGeneral}
                            </span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="py-2 pl-4 text-center text-slate-500">
                          {a.totalEvaluaciones}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}
