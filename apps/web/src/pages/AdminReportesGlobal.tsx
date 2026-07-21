import { useEffect, useState } from "react";
import { fetchAdminReportesGlobal, type AdminReportesGlobal } from "../services/admin";
import { useI18n } from "../i18n/I18nContext";

export default function AdminReportesGlobal() {
  const { t, lang } = useI18n();
  const [data, setData] = useState<AdminReportesGlobal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dias, setDias] = useState(30);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchAdminReportesGlobal(dias)
      .then((d) => { if (active) { setData(d); setError(null); } })
      .catch((e: Error) => { if (active) setError(e.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [dias]);

  const TIPO_LABEL_KEY: Record<string, string> = {
    ban: "adminReportesGlobal.ban",
    advertencia: "adminReportesGlobal.advertencia",
    role_change: "adminReportesGlobal.cambioDeRol",
  };
  const ROLE_LABEL_KEY: Record<string, string> = {
    ADMIN: "adminUsuarios.admin",
    USER: "matrizProgreso.alumno",
    TEACHER: "perfil.docente",
    PARENT: "adminUsuarios.padre",
    DIRECTIVO: "comun.directivo",
    GUEST: "comun.invitado",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("adminReportesGlobal.reportesGlobales")}</h1>
            <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("adminReportesGlobal.estadisticasDeActividadDeLa")}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--c-muted)]">{t("adminReportesGlobal.periodo")}</span>
            {[7, 30, 90].map((d) => (
              <button
                key={d}
                onClick={() => setDias(d)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  dias === d
                    ? "bg-[var(--c-primary)] text-white"
                    : "border border-[var(--c-border)] text-[var(--c-text)] hover:bg-[var(--c-bg)]"
                }`}
              >
                {d}d
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
        )}

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-32 animate-pulse rounded-xl bg-[var(--c-border)]" />
            ))}
          </div>
        ) : data && (
          <>
            <section className="grid gap-4 sm:grid-cols-3">
              {[
                { label: `${t("adminReportesGlobal.nuevosUsuarios")} (${dias}d)`, value: data.registro.total, color: "text-blue-700" },
                { label: t("adminReportesGlobal.usuariosActivosTotal"), value: data.usuarios.activos, color: "text-emerald-700" },
                { label: t("adminReportesGlobal.usuariosInactivos"), value: data.usuarios.inactivos, color: "text-[var(--c-muted)]" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--c-muted)] mb-1">{item.label}</p>
                  <p className={`text-2xl font-semibold ${item.color}`}>{item.value}</p>
                </div>
              ))}
            </section>

            {Object.keys(data.registro.porRol).length > 0 && (
              <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
                <div className="px-4 py-3 border-b border-[var(--c-border)]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">
                    {t("adminReportesGlobal.nuevosRegistrosPorRol")} — {dias} {dias === 1 ? t("comun.dia") : t("comun.dias")}
                  </p>
                </div>
                <div className="p-4 flex flex-wrap gap-3">
                  {Object.entries(data.registro.porRol).map(([rol, count]) => (
                    <div key={rol} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] px-4 py-2">
                      <p className="text-xs text-[var(--c-muted)]">{ROLE_LABEL_KEY[rol] ? t(ROLE_LABEL_KEY[rol]) : rol}</p>
                      <p className="text-xl font-bold text-[var(--c-text)]">{count as number}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.topModulos.length > 0 && (
              <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
                <div className="px-4 py-3 border-b border-[var(--c-border)]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("adminReportesGlobal.modulosMasCompletados")}</p>
                </div>
                <div className="p-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--c-border)] text-left">
                        <th className="px-4 py-2 text-[10px] uppercase tracking-widest text-[var(--c-muted)] font-semibold">{t("adminReportesGlobal.modulo")}</th>
                        <th className="px-4 py-2 text-right text-[10px] uppercase tracking-widest text-[var(--c-muted)] font-semibold">{t("adminReportesGlobal.completados")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.topModulos.map((m, i) => (
                        <tr key={m.moduloId} className="border-b border-[var(--c-border)]">
                          <td className="py-2 px-4 text-[var(--c-text)]">
                            <span className="mr-2 text-xs text-[var(--c-muted)]">#{i + 1}</span>
                            {m.titulo}
                          </td>
                          <td className="py-2 px-4 text-right font-semibold text-[var(--c-primary)]">{m.completados}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
              <div className="px-4 py-3 border-b border-[var(--c-border)]">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("adminReportesGlobal.eventosDeModeracionRecientes")}</p>
              </div>
              <div className="p-4">
              {data.eventosModeracion.length === 0 ? (
                <p className="text-sm text-[var(--c-muted)]">{t("adminReportesGlobal.noHayEventosDeModeracion")}</p>
              ) : (
                <div className="space-y-2">
                  {data.eventosModeracion.map((e, i) => (
                    <div key={i} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--c-border)] px-4 py-3">
                      <div>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          e.tipo === "ban" ? "bg-red-100 text-red-700" :
                          e.tipo === "advertencia" ? "bg-amber-100 text-amber-700" :
                          "bg-[var(--c-bg)] text-[var(--c-muted)]"
                        }`}>
                          {TIPO_LABEL_KEY[e.tipo] ? t(TIPO_LABEL_KEY[e.tipo]) : e.tipo}
                        </span>
                        {e.motivo && <span className="ml-2 text-sm text-[var(--c-muted)]">{e.motivo}</span>}
                      </div>
                      {e.createdAt && (
                        <span className="text-xs text-[var(--c-muted)]">
                          {new Date(e.createdAt).toLocaleDateString(lang)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              </div>
            </section>
          </>
        )}
      </div>
  );
}
