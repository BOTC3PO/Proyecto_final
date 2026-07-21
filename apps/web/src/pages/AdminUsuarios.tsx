import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import {
  fetchAdminUsuarios,
  fetchAdminModulosCompletados,
  fetchEscuelas,
  reasignarEscuela,
  promoteUsuario,
  banUsuario,
  advertenciaUsuario,
  type AdminUsuario,
  type EscuelaResumen,
  type AdminModulosCompletados,
} from "../services/admin";

type ModulosMap = Record<string, AdminModulosCompletados>;

type ModerarModal =
  | { type: "ban"; usuario: AdminUsuario }
  | { type: "warn"; usuario: AdminUsuario }
  | { type: "promote"; usuario: AdminUsuario }
  | { type: "escuela"; usuario: AdminUsuario }
  | null;

const ROLE_LABEL_KEY: Record<string, string> = {
  ADMIN: "adminUsuarios.admin",
  USER: "matrizProgreso.alumno",
  TEACHER: "perfil.docente",
  PARENT: "adminUsuarios.padre",
  DIRECTIVO: "comun.directivo",
  GUEST: "comun.invitado",
};

export default function AdminUsuarios() {
  const { t } = useI18n();
  const [usuarios, setUsuarios] = useState<AdminUsuario[]>([]);
  const [modulos, setModulos] = useState<ModulosMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [modal, setModal] = useState<ModerarModal>(null);
  const [actionMsg, setActionMsg] = useState<string | null>(null);
  const [actionOk, setActionOk] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [banMotivo, setBanMotivo] = useState("");
  const [banDias, setBanDias] = useState("1");
  const [warnMotivo, setWarnMotivo] = useState("");
  const [warnSeveridad, setWarnSeveridad] = useState("baja");
  const [escuelas, setEscuelas] = useState<EscuelaResumen[]>([]);
  const [escuelaDraft, setEscuelaDraft] = useState("");

  useEffect(() => {
    fetchEscuelas().then(setEscuelas).catch(() => setEscuelas([]));
  }, []);

  const loadUsuarios = useCallback(async (search: string) => {
    setLoading(true);
    setError(null);
    setModulos({});
    try {
      const data = await fetchAdminUsuarios({ q: search, limit: 50 });
      setUsuarios(data);
      const slice = data.slice(0, 10);
      const results = await Promise.allSettled(
        slice.map((u) => fetchAdminModulosCompletados(u.id).then((m) => ({ id: u.id, m })))
      );
      const map: ModulosMap = {};
      for (const r of results) {
        if (r.status === "fulfilled") map[r.value.id] = r.value.m;
      }
      setModulos(map);
    } catch (e: unknown) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsuarios(q);
  }, [q, loadUsuarios]);

  const handlePromote = async () => {
    if (!modal || modal.type !== "promote") return;
    setSubmitting(true);
    setActionMsg(null);
    try {
      const result = await promoteUsuario(modal.usuario.id, "ADMIN");
      if (result.ok) {
        setActionOk(true);
        setActionMsg(`${modal.usuario.nombre} ${t("adminUsuarios.promovidoAAdminCorrectamente")}`);
        setModal(null);
        loadUsuarios(q);
      } else {
        setActionOk(false);
        setActionMsg(result.error);
      }
    } catch (e: unknown) {
      setActionOk(false);
      setActionMsg(`${t("comun.error")}: ${(e as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReasignarEscuela = async () => {
    if (!modal || modal.type !== "escuela") return;
    setSubmitting(true);
    setActionMsg(null);
    try {
      await reasignarEscuela(modal.usuario.id, escuelaDraft || null);
      setActionOk(true);
      setActionMsg(
        escuelaDraft
          ? `${modal.usuario.nombre} ${t("adminUsuarios.asignadoALaEscuelaSeleccionada")}`
          : `${modal.usuario.nombre} ${t("adminUsuarios.quedoSinEscuelaAdminDePlataforma")}`
      );
      setModal(null);
      loadUsuarios(q);
    } catch (e: unknown) {
      setActionOk(false);
      setActionMsg(`${t("comun.error")}: ${(e as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleBan = async () => {
    if (!modal || modal.type !== "ban") return;
    if (!banMotivo.trim()) { setActionOk(false); setActionMsg(t("adminUsuarios.elMotivoEsRequerido")); return; }
    setSubmitting(true);
    setActionMsg(null);
    try {
      await banUsuario(modal.usuario.id, banMotivo, Number(banDias));
      const dias = Number(banDias);
      setActionOk(true);
      setActionMsg(`${t("adminUsuarios.usuario")} ${modal.usuario.nombre} ${t("adminUsuarios.baneadoPor")} ${banDias} ${dias === 1 ? t("comun.dia") : t("comun.dias")}.`);
      setModal(null);
      setBanMotivo(""); setBanDias("1");
      loadUsuarios(q);
    } catch (e: unknown) {
      setActionOk(false);
      setActionMsg(`${t("comun.error")}: ${(e as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleWarn = async () => {
    if (!modal || modal.type !== "warn") return;
    if (!warnMotivo.trim()) { setActionOk(false); setActionMsg(t("adminUsuarios.elMotivoEsRequerido")); return; }
    setSubmitting(true);
    setActionMsg(null);
    try {
      await advertenciaUsuario(modal.usuario.id, warnMotivo, warnSeveridad);
      setActionOk(true);
      setActionMsg(`${t("adminUsuarios.advertenciaEnviadaA")} ${modal.usuario.nombre}.`);
      setModal(null);
      setWarnMotivo(""); setWarnSeveridad("baja");
      loadUsuarios(q);
    } catch (e: unknown) {
      setActionOk(false);
      setActionMsg(`${t("comun.error")}: ${(e as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("adminModeracion.gestionDeUsuarios")}</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("adminUsuarios.buscaModeraYGestionaLos")}</p>
        </div>

        {actionMsg && (
          <div className={`rounded-xl border px-4 py-3 text-sm ${actionOk ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-red-200 bg-red-50 text-red-700"}`}>
            {actionMsg}
          </div>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={t("adminUsuarios.buscarPorNombreUsuarioO")}
            className="flex-1 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-4 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
          />
          <button
            type="button"
            onClick={() => setQ(searchInput)}
            className="rounded-xl bg-[var(--c-primary)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-colors"
          >{t("adminUsuarios.buscar")}</button>
          {q && (
            <button
              type="button"
              onClick={() => { setSearchInput(""); setQ(""); }}
              className="rounded-xl border border-[var(--c-border)] px-4 py-2 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
            >{t("common.limpiar")}</button>
          )}
        </div>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--c-border)]">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">
              {t("nav.usuarios")}{q && <span className="ml-2 text-sm font-normal text-[var(--c-muted)]">"{q}"</span>}
            </h2>
            <span className="text-sm text-[var(--c-muted)]">{loading ? "…" : `${usuarios.length} ${usuarios.length === 1 ? t("comun.resultado") : t("comun.resultados")}`}</span>
          </div>

          {loading && (
            <div className="space-y-3 p-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-16 animate-pulse rounded-xl bg-[var(--c-border)]" />
              ))}
            </div>
          )}
          {!loading && error && <p className="p-6 text-sm text-[var(--c-danger)]">{t("comun.error")}: {error}</p>}
          {!loading && !error && usuarios.length === 0 && (
            <p className="p-6 text-sm text-[var(--c-muted)]">{t("adminUsuarios.noSeEncontraronUsuarios")}</p>
          )}

          {!loading && !error && usuarios.length > 0 && (
            <div className="divide-y divide-[var(--c-border)]">
              {usuarios.map((u) => {
                const m = modulos[u.id];
                return (
                  <div key={u.id} className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-[var(--c-text)]">{u.nombre}</p>
                        <span className="rounded-full bg-[var(--c-bg)] px-2 py-0.5 text-xs text-[var(--c-muted)]">
                          {ROLE_LABEL_KEY[u.rol] ? t(ROLE_LABEL_KEY[u.rol]) : u.rol}
                        </span>
                        {u.isBanned && (
                          <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">{t("adminUsuarios.baneado")}</span>
                        )}
                        {u.warningCount > 0 && (
                          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                            {u.warningCount} {u.warningCount === 1 ? t("comun.advertencia") : t("comun.advertencias")}
                          </span>
                        )}
                        <span className="rounded-full bg-[var(--c-bg)] px-2 py-0.5 text-xs text-[var(--c-muted)]">
                          {u.escuelaId ? (escuelas.find((e) => e.id === u.escuelaId)?.name ?? t("adminUsuarios.escuelaAsignada")) : t("adminUsuarios.sinEscuela")}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-[var(--c-muted)]">
                        @{u.username}{u.email ? ` · ${u.email}` : ""}
                      </p>
                      {m && (
                        <p className="mt-1 text-xs text-[var(--c-muted)]">
                          {t("comun.modulosCompletados")}:{" "}
                          <span className="font-medium text-violet-700">{m.publicos} {t("comun.publicos")}</span>
                          {" / "}
                          <span className="font-medium text-[var(--c-muted)]">{m.privados} {t("comun.privados")}</span>
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => { setEscuelaDraft(u.escuelaId ?? ""); setModal({ type: "escuela", usuario: u }); }}
                        className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                      >{t("sidebar.escuela")}</button>
                      {u.rol !== "ADMIN" && (
                        <button
                          onClick={() => setModal({ type: "promote", usuario: u })}
                          className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-semibold text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                        >{t("adminUsuarios.promoverAAdmin")}</button>
                      )}
                      <button
                        onClick={() => setModal({ type: "warn", usuario: u })}
                        className="rounded-lg border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-50 transition-colors"
                      >{t("adminUsuarios.advertir")}</button>
                      <button
                        onClick={() => setModal({ type: "ban", usuario: u })}
                        className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50 transition-colors"
                      >
                        {u.isBanned ? t("adminUsuarios.reBanear") : t("adminUsuarios.banear")}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {modal?.type === "promote" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">{t("adminUsuarios.promoverAAdministrador")}</h3>
              <p className="mt-3 text-sm text-[var(--c-muted)]">{t("adminUsuarios.estasSeguroDeQueQuieres")}<strong>{modal.usuario.nombre}</strong>{t("adminUsuarios.alRolDeAdministrador")}</p>
              <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">{t("adminUsuarios.estaAccionLeDaraAcceso")}</p>
              {actionMsg && <p className="mt-2 text-sm text-[var(--c-danger)]">{actionMsg}</p>}
              <div className="mt-5 flex gap-3">
                <button
                  onClick={handlePromote}
                  disabled={submitting}
                  className="flex-1 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
                >
                  {submitting ? t("adminUsuarios.procesando") : t("adminUsuarios.confirmarPromocion")}
                </button>
                <button
                  onClick={() => { setModal(null); setActionMsg(null); }}
                  className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >{t("comun.cancelar")}</button>
              </div>
            </div>
          </div>
        )}

        {modal?.type === "escuela" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">{t("adminUsuarios.asignarEscuela")}</h3>
              <p className="mt-1 text-sm text-[var(--c-muted)]">{t("adminUsuarios.usuario")}<strong>{modal.usuario.nombre}</strong></p>
              <label className="mt-4 flex flex-col gap-1">
                <span className="text-xs font-medium text-[var(--c-muted)]">{t("sidebar.escuela")}</span>
                <select
                  value={escuelaDraft}
                  onChange={(e) => setEscuelaDraft(e.target.value)}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                >
                  <option value="">{t("adminUsuarios.sinEscuelaAdminDePlataforma")}</option>
                  {escuelas.map((e) => (
                    <option key={e.id} value={e.id}>{e.name}</option>
                  ))}
                </select>
              </label>
              {actionMsg && <p className="mt-2 text-sm text-[var(--c-danger)]">{actionMsg}</p>}
              <div className="mt-5 flex gap-3">
                <button
                  onClick={handleReasignarEscuela}
                  disabled={submitting}
                  className="flex-1 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
                >
                  {submitting ? t("comun.guardando") : t("comun.guardar")}
                </button>
                <button
                  onClick={() => { setModal(null); setActionMsg(null); }}
                  className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >{t("comun.cancelar")}</button>
              </div>
            </div>
          </div>
        )}

        {modal?.type === "ban" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">{t("adminModeracion.banearUsuario")}</h3>
              <p className="mt-1 text-sm text-[var(--c-muted)]">{t("adminUsuarios.usuario")}<strong>{modal.usuario.nombre}</strong></p>
              <div className="mt-4 space-y-4">
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
                  {submitting ? t("adminUsuarios.aplicando") : t("adminUsuarios.aplicarBan")}
                </button>
                <button
                  onClick={() => { setModal(null); setActionMsg(null); setBanMotivo(""); setBanDias("1"); }}
                  className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >{t("comun.cancelar")}</button>
              </div>
            </div>
          </div>
        )}

        {modal?.type === "warn" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">{t("adminModeracion.enviarAdvertencia")}</h3>
              <p className="mt-1 text-sm text-[var(--c-muted)]">{t("adminUsuarios.usuario")}<strong>{modal.usuario.nombre}</strong></p>
              <div className="mt-4 space-y-4">
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
                  {submitting ? t("adminUsuarios.enviando") : t("adminUsuarios.enviarAdvertencia")}
                </button>
                <button
                  onClick={() => { setModal(null); setActionMsg(null); setWarnMotivo(""); setWarnSeveridad("baja"); }}
                  className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >{t("comun.cancelar")}</button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
