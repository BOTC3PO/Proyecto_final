import { useEffect, useState } from "react";
import { fetchAdminReportesGlobal, type AdminReportesGlobal } from "../services/admin";

export default function AdminReportesGlobal() {
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

  const TIPO_LABELS: Record<string, string> = {
    ban: "Ban",
    advertencia: "Advertencia",
    role_change: "Cambio de rol",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-[var(--c-text)]">Reportes globales</h1>
            <p className="text-base text-[var(--c-muted)]">
              Estadísticas de actividad de la plataforma.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[var(--c-muted)]">Período:</span>
            {[7, 30, 90].map((d) => (
              <button
                key={d}
                onClick={() => setDias(d)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  dias === d
                    ? "bg-[var(--c-primary)] text-white"
                    : "border border-[var(--c-border)] text-[var(--c-text)] hover:bg-[var(--c-bg)]"
                }`}
              >
                {d}d
              </button>
            ))}
          </div>
        </header>

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
                { label: `Nuevos usuarios (${dias}d)`, value: data.registro.total, color: "text-blue-700" },
                { label: "Usuarios activos (total)", value: data.usuarios.activos, color: "text-emerald-700" },
                { label: "Usuarios inactivos", value: data.usuarios.inactivos, color: "text-[var(--c-muted)]" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 shadow-sm">
                  <p className="text-sm text-[var(--c-muted)]">{item.label}</p>
                  <p className={`mt-1 text-3xl font-bold ${item.color}`}>{item.value}</p>
                </div>
              ))}
            </section>

            {Object.keys(data.registro.porRol).length > 0 && (
              <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[var(--c-text)]">Nuevos registros por rol ({dias} días)</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {Object.entries(data.registro.porRol).map(([rol, count]) => (
                    <div key={rol} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] px-4 py-2">
                      <p className="text-xs text-[var(--c-muted)]">{rol}</p>
                      <p className="text-xl font-bold text-[var(--c-text)]">{count as number}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.topModulos.length > 0 && (
              <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[var(--c-text)]">Módulos más completados</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--c-border)] text-left text-xs text-[var(--c-muted)]">
                        <th className="pb-2 font-semibold">Módulo</th>
                        <th className="pb-2 text-right font-semibold">Completados</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.topModulos.map((m, i) => (
                        <tr key={m.moduloId} className="border-b border-[var(--c-border)]">
                          <td className="py-2 text-[var(--c-text)]">
                            <span className="mr-2 text-xs text-[var(--c-muted)]">#{i + 1}</span>
                            {m.titulo}
                          </td>
                          <td className="py-2 text-right font-semibold text-violet-700">{m.completados}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[var(--c-text)]">Eventos de moderación recientes</h2>
              {data.eventosModeracion.length === 0 ? (
                <p className="mt-3 text-sm text-[var(--c-muted)]">No hay eventos de moderación en este período.</p>
              ) : (
                <div className="mt-4 space-y-2">
                  {data.eventosModeracion.map((e, i) => (
                    <div key={i} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--c-border)] px-4 py-3">
                      <div>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          e.tipo === "ban" ? "bg-red-100 text-red-700" :
                          e.tipo === "advertencia" ? "bg-amber-100 text-amber-700" :
                          "bg-[var(--c-bg)] text-[var(--c-muted)]"
                        }`}>
                          {TIPO_LABELS[e.tipo] ?? e.tipo}
                        </span>
                        {e.motivo && <span className="ml-2 text-sm text-[var(--c-muted)]">{e.motivo}</span>}
                      </div>
                      {e.createdAt && (
                        <span className="text-xs text-[var(--c-muted)]">
                          {new Date(e.createdAt).toLocaleDateString("es")}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
  );
}
