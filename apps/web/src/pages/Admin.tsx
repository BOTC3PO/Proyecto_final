import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import {
  fetchAdminStats,
  fetchEconomiaConfig,
  updateEconomiaConfig,
  type AdminStats,
  type EconomiaConfig,
} from "../services/admin";

const adminSections = [
  {
    label: "nav.usuarios",
    to: '/admin/usuarios',
    desc: "admin.buscaModeraYGestionaRoles",
  },
  {
    label: "nav.materias",
    to: '/admin/materias',
    desc: "admin.creaEditaYActivaDesactiva",
  },
  {
    label: "admin.modulosPublicos",
    to: '/modulos',
    desc: "admin.exploraYCreaModulosDe",
  },
  {
    label: "nav.moderacion",
    to: '/admin/moderacion',
    desc: "admin.gestionaAulasPublicasMensajesReportados",
  },
  {
    label: "nav.reportes",
    to: '/admin/reportes',
    desc: "admin.estadisticasGlobalesDeLaPlataforma",
  },
];

export default function Admin() {
  const { t } = useI18n();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [config, setConfig] = useState<EconomiaConfig | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingConfig, setLoadingConfig] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [saveOk, setSaveOk] = useState(true);
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
      const inflacionLimitada = Math.min(parseFloat(inflacionTasa) || 0, 0.1);
      const deflacionLimitada = Math.min(parseFloat(deflacionTasa) || 0, 0.1);
      const updated = await updateEconomiaConfig({
        limites: {
          emisionDiaria: Number(emisionDiaria),
          recompensaMaxima: Number(recompensaMaxima),
          recompensaDiaria: Number(recompensaDiaria),
        },
        inflacion: { tasa: inflacionLimitada, activa: inflacionActiva },
        deflacion: { tasa: deflacionLimitada, activa: deflacionActiva },
      });
      setConfig(updated);
      setSaveOk(true);
      setSaveMsg(t("admin.configuracionGuardadaCorrectamente"));
    } catch (e: unknown) {
      setSaveOk(false);
      setSaveMsg(`${t("comun.error")}: ${(e as Error).message}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">

      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("admin.panelAdministrativo")}</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("admin.supervisionGlobalDeLaPlataforma")}</p>
      </div>

      {error && (
        <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] px-4 py-3 text-sm text-[var(--c-danger)]">
          {error}
        </div>
      )}

      {/* Stats KPI */}
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {loadingStats
          ? [1,2,3,4].map(i => <div key={i} className="h-20 animate-pulse rounded-xl bg-[var(--c-border)]" />)
          : ([
              { label: t("admin.usuariosTotales"),  value: stats?.totalUsuarios ?? 0,      color: 'text-[var(--c-primary)]' },
              { label: t("admin.escuelasActivas"),  value: stats?.escuelasActivas ?? 0,    color: 'text-[var(--c-success)]' },
              { label: t("admin.modulosPublicos"),  value: stats?.modulosPublicos ?? 0,    color: 'text-[var(--c-accent)]'  },
              { label: t("admin.eventosMod30d"),value: stats?.eventosModeracion ?? 0,  color: 'text-[var(--c-warning)]' },
            ]).map((item) => (
              <div key={item.label} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
                <p className="text-[10px] uppercase tracking-widest text-[var(--c-muted)] mb-1">{item.label}</p>
                <p className={`text-2xl font-semibold ${item.color}`}>{item.value}</p>
              </div>
            ))
        }
      </div>

      <div className="grid gap-4 lg:grid-cols-3">

        {/* Secciones del admin como lista */}
        <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
          <p className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)] border-b border-[var(--c-border)]">{t("admin.secciones")}</p>
          {adminSections.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-start gap-3 px-4 py-3 border-b border-[var(--c-border)] last:border-0 hover:bg-[var(--c-bg)] transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--c-text)] group-hover:text-[var(--c-primary)] transition-colors">
                  {t(item.label)}
                </p>
                <p className="text-xs text-[var(--c-muted)] mt-0.5 line-clamp-1">{t(item.desc)}</p>
              </div>
              <span className="text-xs text-[var(--c-muted)] flex-shrink-0 mt-0.5">→</span>
            </Link>
          ))}
        </div>

        {/* Configuración de economía */}
        <div className="lg:col-span-2 bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("admin.configuracionDeEconomiaGlobal")}</p>
            {config && (
              <p className="text-[10px] text-[var(--c-muted)]">
                {config.moneda.nombre} ({config.moneda.simbolo})
              </p>
            )}
          </div>

          {loadingConfig ? (
            <div className="p-4 space-y-2">
              {[1,2,3,4].map(i => <div key={i} className="h-10 animate-pulse rounded-lg bg-[var(--c-border)]" />)}
            </div>
          ) : (
            <div className="p-4 grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[var(--c-text)]">{t("admin.limitesDeEmision")}</p>
                {[
                  { label: t("admin.emisionDiariaMaxima"),           value: emisionDiaria,    set: setEmisionDiaria },
                  { label: t("admin.recompensaMaximaPorAccion"),    value: recompensaMaxima, set: setRecompensaMaxima },
                  { label: t("admin.recompensaDiariaMaxPorUser"), value: recompensaDiaria, set: setRecompensaDiaria },
                ].map(({ label, value, set }) => (
                  <label key={label} className="flex flex-col gap-1">
                    <span className="text-[10px] text-[var(--c-muted)]">{label}</span>
                    <input
                      type="number" min={0} value={value}
                      onChange={(e) => set(e.target.value)}
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    />
                  </label>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-[var(--c-text)]">{t("admin.inflacionYDeflacion")}</p>
                <div className="flex items-center gap-2">
                  <input
                    id="inflacion-activa" type="checkbox"
                    checked={inflacionActiva}
                    onChange={(e) => setInflacionActiva(e.target.checked)}
                    className="h-4 w-4 rounded border-[var(--c-border)] accent-[var(--c-primary)]"
                  />
                  <label htmlFor="inflacion-activa" className="text-sm text-[var(--c-text)]">{t("admin.inflacionActiva")}</label>
                </div>
                <label className="flex flex-col gap-1">
                  <span className="text-[10px] text-[var(--c-muted)]">{t("admin.tasaDeInflacion00")}</span>
                  <input
                    type="number" min={0} max={0.1} step={0.01} value={inflacionTasa}
                    onChange={(e) => setInflacionTasa(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="deflacion-activa" type="checkbox"
                    checked={deflacionActiva}
                    onChange={(e) => setDeflacionActiva(e.target.checked)}
                    className="h-4 w-4 rounded border-[var(--c-border)] accent-[var(--c-primary)]"
                  />
                  <label htmlFor="deflacion-activa" className="text-sm text-[var(--c-text)]">{t("admin.deflacionActiva")}</label>
                </div>
                <label className="flex flex-col gap-1">
                  <span className="text-[10px] text-[var(--c-muted)]">{t("admin.tasaDeDeflacion00")}</span>
                  <input
                    type="number" min={0} max={0.1} step={0.01} value={deflacionTasa}
                    onChange={(e) => setDeflacionTasa(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
              </div>

              <div className="sm:col-span-2 flex items-center gap-3 pt-2">
                <button
                  onClick={handleSaveConfig}
                  disabled={saving}
                  className="rounded-xl bg-[var(--c-primary)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                  {saving ? t("comun.guardando") : t("admin.guardarConfiguracion")}
                </button>
                {saveMsg && (
                  <p className={`text-sm ${saveOk ? 'text-[var(--c-success)]' : 'text-[var(--c-danger)]'}`}>
                    {saveMsg}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
