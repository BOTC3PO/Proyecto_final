import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";
import { useI18n } from "../i18n/I18nContext";
import {
  fetchEscuelaReporte, fetchBoletin, fetchProgresoReporte,
  type EscuelaResponse, type BoletinResponse,
  type ProgresoResponse,
} from "../services/reportes-v2";

export default function EnterpriseReportes() {
  const { t } = useI18n();
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

  useEffect(() => {
    if (!schoolId) {
      setError('Tu cuenta no tiene una escuela asignada. Contactá al administrador.');
      setLoading(false);
      return;
    }
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
        if (items[0]) setAulaId(getAulaId(items[0]));
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [schoolId]);

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("nav.reportes")}</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("enterpriseReportes.metricasGlobalesEInformesPor")}</p>
      </div>

      {error && (
        <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] px-4 py-3 text-sm text-[var(--c-danger)]">
          {error}
        </div>
      )}

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-24 animate-pulse rounded-xl bg-[var(--c-border)]" />
            ))}
          </div>
        ) : escuela && (
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: t("enterpriseReportes.aulasActivas"), value: escuela.indicadores.totalAulas, color: "text-blue-700" },
              { label: t("nav.usuarios"), value: escuela.indicadores.totalUsuarios, color: "text-violet-700" },
              { label: t("enterpriseReportes.actividades"), value: escuela.indicadores.totalActividades, color: "text-amber-700" },
              { label: t("comun.modulosCompletados"), value: escuela.indicadores.progresoCompletado, color: "text-emerald-700" },
              { label: t("enterpriseReportes.progresoTotal"), value: `${escuela.indicadores.porcentajeCompletado}%`, color: "text-[var(--c-text)]" },
            ].map((item) => (
              <div key={item.label}
                className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
                <p className="text-sm text-[var(--c-muted)]">{item.label}</p>
                <p className={`mt-1 text-3xl font-bold ${item.color}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </section>
        )}

        {aulas.length > 0 && (
          <>
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-[var(--c-text)]">{t("enterpriseReportes.verReporteDeAula")}</label>
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

            {aulaLoading && (
              <div className="space-y-3">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="h-20 animate-pulse rounded-xl bg-[var(--c-border)]" />
                ))}
              </div>
            )}

            {!aulaLoading && progreso && progreso.modulos.length > 0 && (
              <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
                <div className="px-4 py-3 border-b border-[var(--c-border)]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("enterpriseReportes.progresoPorModulo")}</p>
                </div>
                <div className="p-4 space-y-3">
                {progreso.modulos.map((mod) => (
                  <div key={mod.moduloId}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-[var(--c-text)]">{mod.titulo}</span>
                      <span className="text-[var(--c-muted)]">{mod.porcentaje}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[var(--c-border)]">
                      <div
                        className={`h-2 rounded-full ${
                          mod.porcentaje >= 75 ? "bg-emerald-500"
                          : mod.porcentaje >= 40 ? "bg-amber-400"
                          : "bg-[var(--c-border)]"
                        }`}
                        style={{ width: `${mod.porcentaje}%` }}
                      />
                    </div>
                  </div>
                ))}
                </div>
              </section>
            )}

            {!aulaLoading && boletin && boletin.alumnos.length > 0 && (
              <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
                <div className="px-4 py-3 border-b border-[var(--c-border)]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">
                    Boletín — {boletin.aulaNombre}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--c-border)]">
                        <th className="px-4 py-2 text-left text-[10px] uppercase tracking-widest text-[var(--c-muted)] font-semibold">{t("enterpriseCobros.alumno")}</th>
                        <th className="px-4 py-2 text-center text-[10px] uppercase tracking-widest text-[var(--c-muted)] font-semibold">{t("enterpriseReportes.promedio")}</th>
                        <th className="px-4 py-2 text-center text-[10px] uppercase tracking-widest text-[var(--c-muted)] font-semibold">{t("nav.evaluaciones")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--c-border)]">
                      {boletin.alumnos.map((a) => (
                        <tr key={a.alumnoId}>
                          <td className="py-2 px-4 text-[var(--c-text)]">{a.nombre}</td>
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
                              <span className="text-[var(--c-muted)]">—</span>
                            )}
                          </td>
                          <td className="py-2 px-4 text-center text-[var(--c-muted)]">
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
      </div>
  );
}
