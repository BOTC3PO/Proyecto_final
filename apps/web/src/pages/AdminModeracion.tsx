import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nContext";
import {
  fetchClasesPublicas,
  fetchMensajesReportados,
  banUsuario,
  advertenciaUsuario,
  type ClasePublica,
  type MensajeReportado,
} from "../services/admin";

type BanModal = { userId: string; nombre: string } | null;
type WarnModal = { userId: string; nombre: string } | null;

export default function AdminModeracion() {
  const { t, lang } = useI18n();
  const [clases, setClases] = useState<ClasePublica[]>([]);
  const [mensajes, setMensajes] = useState<MensajeReportado[]>([]);
  const [loadingClases, setLoadingClases] = useState(true);
  const [loadingMensajes, setLoadingMensajes] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [banModal, setBanModal] = useState<BanModal>(null);
  const [warnModal, setWarnModal] = useState<WarnModal>(null);
  const [banMotivo, setBanMotivo] = useState("");
  const [banDias, setBanDias] = useState("1");
  const [warnMotivo, setWarnMotivo] = useState("");
  const [warnSeveridad, setWarnSeveridad] = useState("baja");
  const [submitting, setSubmitting] = useState(false);
  const [actionMsg, setActionMsg] = useState<string | null>(null);

  const loadData = () => {
    setLoadingClases(true);
    setLoadingMensajes(true);
    fetchClasesPublicas()
      .then(setClases)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoadingClases(false));
    fetchMensajesReportados()
      .then(setMensajes)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoadingMensajes(false));
  };

  useEffect(() => { loadData(); }, []);

  const handleBan = async () => {
    if (!banModal || !banMotivo.trim()) { setActionMsg("El motivo es requerido."); return; }
    setSubmitting(true);
    setActionMsg(null);
    try {
      await banUsuario(banModal.userId, banMotivo, Number(banDias));
      setActionMsg(`Usuario baneado correctamente.`);
      setBanModal(null); setBanMotivo(""); setBanDias("1");
    } catch (e: unknown) {
      setActionMsg(`Error: ${(e as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleWarn = async () => {
    if (!warnModal || !warnMotivo.trim()) { setActionMsg("El motivo es requerido."); return; }
    setSubmitting(true);
    setActionMsg(null);
    try {
      await advertenciaUsuario(warnModal.userId, warnMotivo, warnSeveridad);
      setActionMsg(`Advertencia enviada correctamente.`);
      setWarnModal(null); setWarnMotivo(""); setWarnSeveridad("baja");
    } catch (e: unknown) {
      setActionMsg(`Error: ${(e as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("nav.moderacion")}</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("adminModeracion.supervisaElContenidoPublicoDe")}</p>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
        )}
        {actionMsg && (
          <div className={`rounded-xl border px-4 py-3 text-sm ${actionMsg.startsWith("Error") ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
            {actionMsg}
            <button onClick={() => setActionMsg(null)} className="ml-3 text-xs underline">{t("comun.cerrar")}</button>
          </div>
        )}

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
          <div className="border-b border-[var(--c-border)] px-6 py-4">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">{t("adminModeracion.aulasPublicas")}</h2>
            <p className="mt-0.5 text-xs text-[var(--c-muted)]">{t("adminModeracion.ultimasAulasConAccesoPublico")}</p>
          </div>
          {loadingClases ? (
            <div className="space-y-3 p-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-12 animate-pulse rounded-xl bg-[var(--c-border)]" />
              ))}
            </div>
          ) : clases.length === 0 ? (
            <p className="p-6 text-sm text-[var(--c-muted)]">{t("adminModeracion.noHayAulasPublicasActivas")}</p>
          ) : (
            <div className="divide-y divide-[var(--c-border)]">
              {clases.map((c) => (
                <div key={c._id} className="flex flex-wrap items-center justify-between gap-2 px-6 py-3">
                  <div>
                    <p className="text-sm font-medium text-[var(--c-text)]">{c.nombre ?? c.name ?? c._id}</p>
                    {c.updatedAt && (
                      <p className="text-xs text-[var(--c-muted)]">
                        Actualizado: {new Date(c.updatedAt).toLocaleDateString(lang)}
                      </p>
                    )}
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">{t("comun.publica")}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
          <div className="border-b border-[var(--c-border)] px-6 py-4">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">{t("adminModeracion.mensajesReportados")}</h2>
            <p className="mt-0.5 text-xs text-[var(--c-muted)]">{t("adminModeracion.mensajesMarcadosComoInapropiadosPor")}</p>
          </div>
          {loadingMensajes ? (
            <div className="space-y-3 p-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-12 animate-pulse rounded-xl bg-[var(--c-border)]" />
              ))}
            </div>
          ) : mensajes.length === 0 ? (
            <p className="p-6 text-sm text-[var(--c-muted)]">{t("adminModeracion.noHayMensajesReportados")}</p>
          ) : (
            <div className="divide-y divide-[var(--c-border)]">
              {mensajes.map((m) => (
                <div key={m._id} className="flex flex-wrap items-start justify-between gap-2 px-6 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-[var(--c-text)] line-clamp-2">{m.cuerpo ?? m.body ?? "(sin contenido)"}</p>
                    {m.tipo && <p className="mt-0.5 text-xs text-[var(--c-muted)]">Tipo: {m.tipo}</p>}
                    {m.createdAt && (
                      <p className="text-xs text-[var(--c-muted)]">{new Date(m.createdAt).toLocaleDateString(lang)}</p>
                    )}
                  </div>
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">{t("adminModeracion.reportado")}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--c-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("adminModeracion.accionRapidaPorIdDe")}</p>
            <p className="text-xs text-[var(--c-muted)] mt-0.5">{t("adminModeracion.aplicaUnBanOAdvertencia")}<a href="/admin/usuarios" className="text-[var(--c-primary)] underline">{t("adminModeracion.gestionDeUsuarios")}</a>.
            </p>
          </div>
          <div className="p-4 flex flex-wrap gap-3">
            <button
              onClick={() => setBanModal({ userId: "", nombre: "usuario por ID" })}
              className="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 transition-colors"
            >{t("adminModeracion.banearPorId")}</button>
            <button
              onClick={() => setWarnModal({ userId: "", nombre: "usuario por ID" })}
              className="rounded-xl border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 transition-colors"
            >{t("adminModeracion.advertirPorId")}</button>
          </div>
        </section>

        {banModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">{t("adminModeracion.banearUsuario")}</h3>
              <div className="mt-4 space-y-3">
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">{t("adminModeracion.idDelUsuario")}</span>
                  <input
                    type="text"
                    value={banModal.userId}
                    onChange={(e) => setBanModal({ ...banModal, userId: e.target.value })}
                    placeholder={t("adminModeracion.idDelUsuario2")}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">{t("adminModeracion.motivo")}</span>
                  <input
                    type="text"
                    value={banMotivo}
                    onChange={(e) => setBanMotivo(e.target.value)}
                    placeholder={t("adminModeracion.ejContenidoInapropiado")}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">{t("adminModeracion.duracionDiasPermanente")}</span>
                  <input
                    type="number"
                    min={0}
                    value={banDias}
                    onChange={(e) => setBanDias(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
              </div>
              {actionMsg && <p className="mt-2 text-sm text-[var(--c-danger)]">{actionMsg}</p>}
              <div className="mt-5 flex gap-3">
                <button
                  onClick={handleBan}
                  disabled={submitting}
                  className="flex-1 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50 transition-colors"
                >
                  {submitting ? "Aplicando…" : "Aplicar ban"}
                </button>
                <button
                  onClick={() => { setBanModal(null); setActionMsg(null); setBanMotivo(""); setBanDias("1"); }}
                  className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >{t("comun.cancelar")}</button>
              </div>
            </div>
          </div>
        )}

        {warnModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">{t("adminModeracion.enviarAdvertencia")}</h3>
              <div className="mt-4 space-y-3">
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">{t("adminModeracion.idDelUsuario")}</span>
                  <input
                    type="text"
                    value={warnModal.userId}
                    onChange={(e) => setWarnModal({ ...warnModal, userId: e.target.value })}
                    placeholder={t("adminModeracion.idDelUsuario2")}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">{t("adminModeracion.motivo")}</span>
                  <input
                    type="text"
                    value={warnMotivo}
                    onChange={(e) => setWarnMotivo(e.target.value)}
                    placeholder={t("adminModeracion.ejLenguajeOfensivo")}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">{t("adminModeracion.severidad")}</span>
                  <select
                    value={warnSeveridad}
                    onChange={(e) => setWarnSeveridad(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  >
                    <option value="baja">{t("adminModeracion.baja")}</option>
                    <option value="media">{t("adminModeracion.media")}</option>
                    <option value="alta">{t("adminModeracion.alta")}</option>
                  </select>
                </label>
              </div>
              {actionMsg && <p className="mt-2 text-sm text-[var(--c-danger)]">{actionMsg}</p>}
              <div className="mt-5 flex gap-3">
                <button
                  onClick={handleWarn}
                  disabled={submitting}
                  className="flex-1 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-600 disabled:opacity-50 transition-colors"
                >
                  {submitting ? "Enviando…" : "Enviar advertencia"}
                </button>
                <button
                  onClick={() => { setWarnModal(null); setActionMsg(null); setWarnMotivo(""); setWarnSeveridad("baja"); }}
                  className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >{t("comun.cancelar")}</button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
