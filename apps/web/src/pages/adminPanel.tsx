import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAdminStats,
  fetchEconomiaConfig,
  updateEconomiaConfig,
  type AdminStats,
  type EconomiaConfig,
} from "../services/admin";

export default function AdminPanel() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [config, setConfig] = useState<EconomiaConfig | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingConfig, setLoadingConfig] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Formulario economía
  const [emisionDiaria, setEmisionDiaria] = useState("");
  const [recompensaMaxima, setRecompensaMaxima] = useState("");
  const [recompensaDiaria, setRecompensaDiaria] = useState("");
  const [inflacionTasa, setInflacionTasa] = useState("");
  const [inflacionActiva, setInflacionActiva] = useState(false);
  const [deflacionTasa, setDeflacionTasa] = useState("");
  const [deflacionActiva, setDeflacionActiva] = useState(false);

  useEffect(() => {
    let active = true;
    fetchAdminStats()
      .then((data) => { if (active) { setStats(data); setError(null); } })
      .catch((e: Error) => { if (active) setError(e.message); })
      .finally(() => { if (active) setLoadingStats(false); });
    fetchEconomiaConfig()
      .then((data) => {
        if (!active) return;
        setConfig(data);
        setEmisionDiaria(String(data.limites.emisionDiaria));
        setRecompensaMaxima(String(data.limites.recompensaMaxima));
        setRecompensaDiaria(String(data.limites.recompensaDiaria));
        setInflacionTasa(String(data.inflacion.tasa));
        setInflacionActiva(data.inflacion.activa);
        setDeflacionTasa(String(data.deflacion.tasa));
        setDeflacionActiva(data.deflacion.activa);
      })
      .catch((e: Error) => { if (active) setError(e.message); })
      .finally(() => { if (active) setLoadingConfig(false); });
    return () => { active = false; };
  }, []);

  const handleSaveConfig = async () => {
    setSaving(true);
    setSaveMsg(null);
    try {
      const updated = await updateEconomiaConfig({
        limites: {
          emisionDiaria: Number(emisionDiaria),
          recompensaMaxima: Number(recompensaMaxima),
          recompensaDiaria: Number(recompensaDiaria),
        },
        inflacion: { tasa: Number(inflacionTasa), activa: inflacionActiva },
        deflacion: { tasa: Number(deflacionTasa), activa: deflacionActiva },
      });
      setConfig(updated);
      setSaveMsg("Configuración guardada correctamente.");
    } catch (e: unknown) {
      setSaveMsg(`Error: ${(e as Error).message}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Administración</p>
        <h1 className="text-3xl font-bold text-slate-900">Panel de control global</h1>
        <p className="text-base text-slate-600">
          Supervisión de la plataforma: métricas globales y configuración de economía.
        </p>
      </header>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {/* Stats globales */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {loadingStats
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 animate-pulse rounded-2xl bg-slate-100" />
            ))
          : ([
              { label: "Usuarios totales", value: stats?.totalUsuarios ?? 0, color: "text-blue-700" },
              { label: "Escuelas activas", value: stats?.escuelasActivas ?? 0, color: "text-emerald-700" },
              { label: "Módulos públicos", value: stats?.modulosPublicos ?? 0, color: "text-violet-700" },
              { label: "Eventos moderación (30d)", value: stats?.eventosModeracion ?? 0, color: "text-amber-700" },
            ] as Array<{ label: string; value: number; color: string }>).map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className={`mt-1 text-3xl font-bold ${item.color}`}>{item.value}</p>
              </div>
            ))}
      </section>

      {/* Accesos rápidos */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Accesos rápidos</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/admin/usuarios"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Gestionar usuarios
          </Link>
          <Link
            to="/admin/materias"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Materias
          </Link>
          <Link
            to="/admin/moderacion"
            className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 transition-colors"
          >
            Moderación
          </Link>
          <Link
            to="/modulos/crear"
            className="rounded-full border border-violet-200 px-4 py-2 text-sm font-semibold text-violet-700 hover:bg-violet-50 transition-colors"
          >
            Crear módulo público
          </Link>
          <Link
            to="/admin/reportes"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Reportes globales
          </Link>
          <Link
            to="/gobernanza"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Gobernanza
          </Link>
        </div>
      </section>

      {/* Configuración de economía global */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Configuración de economía global</h2>
        {config && (
          <p className="mt-1 text-xs text-slate-400">
            Moneda: {config.moneda.nombre} ({config.moneda.simbolo}) · Última actualización:{" "}
            {new Date(config.updatedAt).toLocaleDateString("es")}
          </p>
        )}

        {loadingConfig ? (
          <div className="mt-4 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 animate-pulse rounded-xl bg-slate-100" />
            ))}
          </div>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {/* Límites */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-700">Límites de emisión y recompensas</h3>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-slate-500">Emisión diaria máxima</span>
                <input
                  type="number"
                  min={0}
                  value={emisionDiaria}
                  onChange={(e) => setEmisionDiaria(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-slate-500">Recompensa máxima por acción</span>
                <input
                  type="number"
                  min={0}
                  value={recompensaMaxima}
                  onChange={(e) => setRecompensaMaxima(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-slate-500">Recompensa diaria máxima por usuario</span>
                <input
                  type="number"
                  min={0}
                  value={recompensaDiaria}
                  onChange={(e) => setRecompensaDiaria(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
            </div>

            {/* Inflación / Deflación */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-700">Inflación y deflación</h3>
              <div className="flex items-center gap-3">
                <input
                  id="inflacion-activa"
                  type="checkbox"
                  checked={inflacionActiva}
                  onChange={(e) => setInflacionActiva(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-blue-600"
                />
                <label htmlFor="inflacion-activa" className="text-sm text-slate-700">Inflación activa</label>
              </div>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-slate-500">Tasa de inflación (0–1)</span>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step={0.01}
                  value={inflacionTasa}
                  onChange={(e) => setInflacionTasa(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="deflacion-activa"
                  type="checkbox"
                  checked={deflacionActiva}
                  onChange={(e) => setDeflacionActiva(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-blue-600"
                />
                <label htmlFor="deflacion-activa" className="text-sm text-slate-700">Deflación activa</label>
              </div>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-slate-500">Tasa de deflación (0–1)</span>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step={0.01}
                  value={deflacionTasa}
                  onChange={(e) => setDeflacionTasa(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
            </div>
          </div>
        )}

        {saveMsg && (
          <p className={`mt-4 text-sm ${saveMsg.startsWith("Error") ? "text-red-600" : "text-emerald-600"}`}>
            {saveMsg}
          </p>
        )}

        {!loadingConfig && (
          <div className="mt-6">
            <button
              onClick={handleSaveConfig}
              disabled={saving}
              className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {saving ? "Guardando…" : "Guardar configuración"}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
