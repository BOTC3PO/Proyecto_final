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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-slate-900">Reportes globales</h1>
          <p className="text-base text-slate-600">
            Estadísticas de actividad de la plataforma.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">Período:</span>
          {[7, 30, 90].map((d) => (
            <button
              key={d}
              onClick={() => setDias(d)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                dias === d
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200 text-slate-700 hover:bg-slate-50"
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
            <div key={i} className="h-32 animate-pulse rounded-2xl bg-slate-100" />
          ))}
        </div>
      ) : data && (
        <>
          {/* Stats de usuarios */}
          <section className="grid gap-4 sm:grid-cols-3">
            {[
              { label: `Nuevos usuarios (${dias}d)`, value: data.registro.total, color: "text-blue-700" },
              { label: "Usuarios activos (total)", value: data.usuarios.activos, color: "text-emerald-700" },
              { label: "Usuarios inactivos", value: data.usuarios.inactivos, color: "text-slate-500" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className={`mt-1 text-3xl font-bold ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </section>

          {/* Registros por rol */}
          {Object.keys(data.registro.porRol).length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Nuevos registros por rol ({dias} días)</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {Object.entries(data.registro.porRol).map(([rol, count]) => (
                  <div key={rol} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-2">
                    <p className="text-xs text-slate-500">{rol}</p>
                    <p className="text-xl font-bold text-slate-800">{count as number}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Top módulos */}
          {data.topModulos.length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Módulos más completados</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 text-left text-xs text-slate-500">
                      <th className="pb-2 font-semibold">Módulo</th>
                      <th className="pb-2 text-right font-semibold">Completados</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.topModulos.map((m, i) => (
                      <tr key={m.moduloId} className="border-b border-slate-50">
                        <td className="py-2 text-slate-700">
                          <span className="mr-2 text-xs text-slate-400">#{i + 1}</span>
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

          {/* Eventos de moderación recientes */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Eventos de moderación recientes</h2>
            {data.eventosModeracion.length === 0 ? (
              <p className="mt-3 text-sm text-slate-500">No hay eventos de moderación en este período.</p>
            ) : (
              <div className="mt-4 space-y-2">
                {data.eventosModeracion.map((e, i) => (
                  <div key={i} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-100 px-4 py-3">
                    <div>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        e.tipo === "ban" ? "bg-red-100 text-red-700" :
                        e.tipo === "advertencia" ? "bg-amber-100 text-amber-700" :
                        "bg-slate-100 text-slate-600"
                      }`}>
                        {TIPO_LABELS[e.tipo] ?? e.tipo}
                      </span>
                      {e.motivo && <span className="ml-2 text-sm text-slate-600">{e.motivo}</span>}
                    </div>
                    {e.createdAt && (
                      <span className="text-xs text-slate-400">
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
    </main>
  );
}
