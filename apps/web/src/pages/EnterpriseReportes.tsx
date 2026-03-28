import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";

type AulaProgreso = {
  aulaId: string;
  nombre: string;
  totalAlumnos: number;
  modulosAsignados: number;
  promedioCompletado: number;
};

export default function EnterpriseReportes() {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [reportes, setReportes] = useState<AulaProgreso[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolId) return;
    let active = true;
    apiGet<{ items: Classroom[] }>(
      `/api/aulas?schoolId=${encodeURIComponent(schoolId)}`
    )
      .then(async (data) => {
        if (!active) return;
        const aulas = data.items ?? [];
        const reportesCalc: AulaProgreso[] = await Promise.all(
          aulas.map(async (aula) => {
            try {
              const [modulosData, progresoData] = await Promise.all([
                apiGet<{ items: unknown[] }>(
                  `/api/modulos?aulaId=${encodeURIComponent(aula.id)}`
                ),
                apiGet<{ items: Array<{ status: string }> }>(
                  `/api/progreso?aulaId=${encodeURIComponent(aula.id)}`
                ),
              ]);
              const totalModulos = modulosData.items?.length ?? 0;
              const completados = progresoData.items?.filter(
                (p) => p.status === "completado"
              ).length ?? 0;
              const totalItems = progresoData.items?.length ?? 1;
              return {
                aulaId: aula.id,
                nombre: aula.name,
                totalAlumnos: aula.teacherIds?.length ?? 0,
                modulosAsignados: totalModulos,
                promedioCompletado: Math.round((completados / totalItems) * 100),
              };
            } catch {
              return {
                aulaId: aula.id,
                nombre: aula.name,
                totalAlumnos: 0,
                modulosAsignados: 0,
                promedioCompletado: 0,
              };
            }
          })
        );
        if (!active) return;
        setReportes(reportesCalc);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [schoolId]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Reportes</h1>
        <p className="text-base text-slate-600">
          Progreso por aula de tu institución.
        </p>
      </header>
      <section className="space-y-4">
        {loading && (
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-20 animate-pulse rounded-2xl bg-slate-100" />
            ))}
          </div>
        )}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading && !error && reportes.length === 0 && (
          <p className="text-sm text-slate-500">No hay aulas con datos de progreso.</p>
        )}
        {!loading && !error && reportes.map((r) => (
          <article key={r.aulaId}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-slate-900">{r.nombre}</h2>
                <div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-500">
                  <span>{r.modulosAsignados} módulos asignados</span>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                r.promedioCompletado >= 75
                  ? "bg-emerald-100 text-emerald-700"
                  : r.promedioCompletado >= 40
                  ? "bg-amber-100 text-amber-700"
                  : "bg-slate-100 text-slate-600"
              }`}>
                {r.promedioCompletado}% completado
              </span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
              <div
                className={`h-2 rounded-full transition-all ${
                  r.promedioCompletado >= 75
                    ? "bg-emerald-500"
                    : r.promedioCompletado >= 40
                    ? "bg-amber-400"
                    : "bg-slate-300"
                }`}
                style={{ width: `${r.promedioCompletado}%` }}
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
