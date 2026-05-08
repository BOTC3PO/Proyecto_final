import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAdminStats,
  fetchEconomiaConfig,
  updateEconomiaConfig,
  type AdminStats,
  type EconomiaConfig,
} from "../services/admin";

const adminSections = [
  {
    label: 'Usuarios',
    to: '/admin/usuarios',
    desc: 'Busca, modera y gestiona roles de los usuarios de la plataforma.',
  },
  {
    label: 'Materias',
    to: '/admin/materias',
    desc: 'Crea, edita y activa/desactiva materias disponibles en la plataforma.',
  },
  {
    label: 'Módulos públicos',
    to: '/modulos',
    desc: 'Explora y crea módulos de aprendizaje de acceso público.',
  },
  {
    label: 'Moderación',
    to: '/admin/moderacion',
    desc: 'Gestiona aulas públicas, mensajes reportados, bans y advertencias.',
  },
  {
    label: 'Reportes',
    to: '/admin/reportes',
    desc: 'Estadísticas globales de la plataforma: usuarios, módulos y moderación.',
  },
  {
    label: 'Gobernanza',
    to: '/gobernanza',
    desc: 'Propuestas de cambio y votaciones colaborativas entre administradores.',
  },
];

export default function Admin() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [config, setConfig] = useState<EconomiaConfig | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingConfig, setLoadingConfig] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--c-muted)]">Admin</p>
          <h1 className="text-3xl font-bold text-[var(--c-text)] md:text-4xl">Panel administrativo</h1>
          <p className="max-w-2xl text-base text-[var(--c-muted)]">
            Supervisión global de la plataforma: usuarios, módulos públicos, moderación y configuración.
          </p>
        </header>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
        )}

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {adminSections.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 shadow-sm hover:border-[var(--c-primary)] hover:shadow-md transition-all"
            >
              <h2 className="text-lg font-semibold text-[var(--c-text)]">{item.label}</h2>
              <p className="mt-2 text-sm text-[var(--c-muted)]">{item.desc}</p>
              <span className="mt-4 inline-block text-xs font-semibold text-[var(--c-primary)]">Ver →</span>
            </Link>
          ))}
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loadingStats
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-24 animate-pulse rounded-xl bg-[var(--c-border)]" />
              ))
            : ([
                { label: "Usuarios totales", value: stats?.totalUsuarios ?? 0, color: "text-blue-700" },
                { label: "Escuelas activas", value: stats?.escuelasActivas ?? 0, color: "text-emerald-700" },
                { label: "Módulos públicos", value: stats?.modulosPublicos ?? 0, color: "text-violet-700" },
                { label: "Eventos moderación (30d)", value: stats?.eventosModeracion ?? 0, color: "text-amber-700" },
              ] as Array<{ label: string; value: number; color: string }>).map((item) => (
                <div key={item.label} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 shadow-sm">
                  <p className="text-sm text-[var(--c-muted)]">{item.label}</p>
                  <p className={`mt-1 text-3xl font-bold ${item.color}`}>{item.value}</p>
                </div>
              ))}
        </section>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">Accesos rápidos</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/admin/usuarios"
              className="rounded-full border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
            >
              Gestionar usuarios
            </Link>
            <Link
              to="/admin/materias"
              className="rounded-full border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
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
              className="rounded-full border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
            >
              Reportes globales
            </Link>
            <Link
              to="/gobernanza"
              className="rounded-full border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
            >
              Gobernanza
            </Link>
            <Link
              to="/admin/generadores"
              className="rounded-full border border-violet-200 px-4 py-2 text-sm font-semibold text-violet-700 hover:bg-violet-50 transition-colors"
            >
              Generadores y sugerencias
            </Link>
            <Link
              to="/alumno"
              className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              Ver como alumno
            </Link>
          </div>
        </section>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">Configuración de economía global</h2>
          {config && (
            <p className="mt-1 text-xs text-[var(--c-muted)]">
              Moneda: {config.moneda.nombre} ({config.moneda.simbolo}) · Última actualización:{" "}
              {new Date(config.updatedAt).toLocaleDateString("es")}
            </p>
          )}

          {loadingConfig ? (
            <div className="mt-4 space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-10 animate-pulse rounded-xl bg-[var(--c-border)]" />
              ))}
            </div>
          ) : (
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--c-text)]">Límites de emisión y recompensas</h3>
                <label className="flex flex-col gap-1">
                  <span className="text-xs text-[var(--c-muted)]">Emisión diaria máxima</span>
                  <input
                    type="number"
                    min={0}
                    value={emisionDiaria}
                    onChange={(e) => setEmisionDiaria(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs text-[var(--c-muted)]">Recompensa máxima por acción</span>
                  <input
                    type="number"
                    min={0}
                    value={recompensaMaxima}
                    onChange={(e) => setRecompensaMaxima(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs text-[var(--c-muted)]">Recompensa diaria máxima por usuario</span>
                  <input
                    type="number"
                    min={0}
                    value={recompensaDiaria}
                    onChange={(e) => setRecompensaDiaria(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--c-text)]">Inflación y deflación</h3>
                <div className="flex items-center gap-3">
                  <input
                    id="inflacion-activa"
                    type="checkbox"
                    checked={inflacionActiva}
                    onChange={(e) => setInflacionActiva(e.target.checked)}
                    className="h-4 w-4 rounded border-[var(--c-border)] text-[var(--c-primary)]"
                  />
                  <label htmlFor="inflacion-activa" className="text-sm text-[var(--c-text)]">Inflación activa</label>
                </div>
                <label className="flex flex-col gap-1">
                  <span className="text-xs text-[var(--c-muted)]">Tasa de inflación (0–1)</span>
                  <input
                    type="number"
                    min={0}
                    max={1}
                    step={0.01}
                    value={inflacionTasa}
                    onChange={(e) => setInflacionTasa(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="deflacion-activa"
                    type="checkbox"
                    checked={deflacionActiva}
                    onChange={(e) => setDeflacionActiva(e.target.checked)}
                    className="h-4 w-4 rounded border-[var(--c-border)] text-[var(--c-primary)]"
                  />
                  <label htmlFor="deflacion-activa" className="text-sm text-[var(--c-text)]">Deflación activa</label>
                </div>
                <label className="flex flex-col gap-1">
                  <span className="text-xs text-[var(--c-muted)]">Tasa de deflación (0–1)</span>
                  <input
                    type="number"
                    min={0}
                    max={1}
                    step={0.01}
                    value={deflacionTasa}
                    onChange={(e) => setDeflacionTasa(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
              </div>
            </div>
          )}

          {saveMsg && (
            <p className={`mt-4 text-sm ${saveMsg.startsWith("Error") ? "text-[var(--c-danger)]" : "text-emerald-600"}`}>
              {saveMsg}
            </p>
          )}

          {!loadingConfig && (
            <div className="mt-6">
              <button
                onClick={handleSaveConfig}
                disabled={saving}
                className="rounded-xl bg-[var(--c-primary)] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
              >
                {saving ? "Guardando…" : "Guardar configuración"}
              </button>
            </div>
          )}
        </section>
      </div>
  );
}
