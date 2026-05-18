import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  fetchAdminUsuarios,
  fetchAdminModulosCompletados,
  promoteUsuario,
  banUsuario,
  advertenciaUsuario,
  type AdminUsuario,
  type AdminModulosCompletados,
} from "../services/admin";

type ModulosMap = Record<string, AdminModulosCompletados>;

type ModerarModal =
  | { type: "ban"; usuario: AdminUsuario }
  | { type: "warn"; usuario: AdminUsuario }
  | { type: "promote"; usuario: AdminUsuario; requiresGovernance?: boolean }
  | null;

const ROLE_LABELS: Record<string, string> = {
  ADMIN: "Admin",
  USER: "Alumno",
  TEACHER: "Docente",
  PARENT: "Padre",
  DIRECTIVO: "Directivo",
  GUEST: "Invitado",
};

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState<AdminUsuario[]>([]);
  const [modulos, setModulos] = useState<ModulosMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [modal, setModal] = useState<ModerarModal>(null);
  const [actionMsg, setActionMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [banMotivo, setBanMotivo] = useState("");
  const [banDias, setBanDias] = useState("1");
  const [warnMotivo, setWarnMotivo] = useState("");
  const [warnSeveridad, setWarnSeveridad] = useState("baja");

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
        setActionMsg(`${modal.usuario.nombre} promovido a ADMIN correctamente.`);
        setModal(null);
        loadUsuarios(q);
      } else if (result.requiresGovernance) {
        setModal({ ...modal, requiresGovernance: true });
      }
    } catch (e: unknown) {
      setActionMsg(`Error: ${(e as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleBan = async () => {
    if (!modal || modal.type !== "ban") return;
    if (!banMotivo.trim()) { setActionMsg("El motivo es requerido."); return; }
    setSubmitting(true);
    setActionMsg(null);
    try {
      await banUsuario(modal.usuario.id, banMotivo, Number(banDias));
      setActionMsg(`Usuario ${modal.usuario.nombre} baneado por ${banDias} día(s).`);
      setModal(null);
      setBanMotivo(""); setBanDias("1");
      loadUsuarios(q);
    } catch (e: unknown) {
      setActionMsg(`Error: ${(e as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleWarn = async () => {
    if (!modal || modal.type !== "warn") return;
    if (!warnMotivo.trim()) { setActionMsg("El motivo es requerido."); return; }
    setSubmitting(true);
    setActionMsg(null);
    try {
      await advertenciaUsuario(modal.usuario.id, warnMotivo, warnSeveridad);
      setActionMsg(`Advertencia enviada a ${modal.usuario.nombre}.`);
      setModal(null);
      setWarnMotivo(""); setWarnSeveridad("baja");
      loadUsuarios(q);
    } catch (e: unknown) {
      setActionMsg(`Error: ${(e as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Gestión de usuarios</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">Busca, modera y gestiona los usuarios de la plataforma.</p>
        </div>

        {actionMsg && (
          <div className={`rounded-xl border px-4 py-3 text-sm ${actionMsg.startsWith("Error") ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
            {actionMsg}
          </div>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Buscar por nombre, usuario o email…"
            className="flex-1 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-4 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
          />
          <button
            type="button"
            onClick={() => setQ(searchInput)}
            className="rounded-xl bg-[var(--c-primary)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-colors"
          >
            Buscar
          </button>
          {q && (
            <button
              type="button"
              onClick={() => { setSearchInput(""); setQ(""); }}
              className="rounded-xl border border-[var(--c-border)] px-4 py-2 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
            >
              Limpiar
            </button>
          )}
        </div>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--c-border)]">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">
              Usuarios{q && <span className="ml-2 text-sm font-normal text-[var(--c-muted)]">"{q}"</span>}
            </h2>
            <span className="text-sm text-[var(--c-muted)]">{loading ? "…" : `${usuarios.length} resultado(s)`}</span>
          </div>

          {loading && (
            <div className="space-y-3 p-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-16 animate-pulse rounded-xl bg-[var(--c-border)]" />
              ))}
            </div>
          )}
          {!loading && error && <p className="p-6 text-sm text-[var(--c-danger)]">Error: {error}</p>}
          {!loading && !error && usuarios.length === 0 && (
            <p className="p-6 text-sm text-[var(--c-muted)]">No se encontraron usuarios.</p>
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
                          {ROLE_LABELS[u.rol] ?? u.rol}
                        </span>
                        {u.isBanned && (
                          <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">Baneado</span>
                        )}
                        {u.warningCount > 0 && (
                          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                            {u.warningCount} advertencia{u.warningCount !== 1 ? "s" : ""}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-[var(--c-muted)]">
                        @{u.username}{u.email ? ` · ${u.email}` : ""}
                      </p>
                      {m && (
                        <p className="mt-1 text-xs text-[var(--c-muted)]">
                          Módulos completados:{" "}
                          <span className="font-medium text-violet-700">{m.publicos} públicos</span>
                          {" / "}
                          <span className="font-medium text-[var(--c-muted)]">{m.privados} privados</span>
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {u.rol !== "ADMIN" && (
                        <button
                          onClick={() => setModal({ type: "promote", usuario: u })}
                          className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-semibold text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                        >
                          Promover a Admin
                        </button>
                      )}
                      <button
                        onClick={() => setModal({ type: "warn", usuario: u })}
                        className="rounded-lg border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-50 transition-colors"
                      >
                        Advertir
                      </button>
                      <button
                        onClick={() => setModal({ type: "ban", usuario: u })}
                        className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50 transition-colors"
                      >
                        {u.isBanned ? "Re-banear" : "Banear"}
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
              <h3 className="text-lg font-semibold text-[var(--c-text)]">Promover a Administrador</h3>
              {modal.requiresGovernance ? (
                <>
                  <p className="mt-3 text-sm text-[var(--c-muted)]">
                    Solo el administrador principal puede promover directamente. Crea una propuesta de gobernanza para que sea votada.
                  </p>
                  <div className="mt-5 flex gap-3">
                    <Link
                      to="/gobernanza"
                      className="flex-1 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-center text-sm font-semibold text-white hover:opacity-90 transition-colors"
                      onClick={() => setModal(null)}
                    >
                      Ir a Gobernanza
                    </Link>
                    <button
                      onClick={() => setModal(null)}
                      className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="mt-3 text-sm text-[var(--c-muted)]">
                    ¿Estás seguro de que quieres promover a <strong>{modal.usuario.nombre}</strong> al rol de Administrador?
                  </p>
                  <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
                    Esta acción le dará acceso completo a todas las funciones de administración.
                  </p>
                  {actionMsg && <p className="mt-2 text-sm text-[var(--c-danger)]">{actionMsg}</p>}
                  <div className="mt-5 flex gap-3">
                    <button
                      onClick={handlePromote}
                      disabled={submitting}
                      className="flex-1 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
                    >
                      {submitting ? "Procesando…" : "Confirmar promoción"}
                    </button>
                    <button
                      onClick={() => { setModal(null); setActionMsg(null); }}
                      className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {modal?.type === "ban" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">Banear usuario</h3>
              <p className="mt-1 text-sm text-[var(--c-muted)]">Usuario: <strong>{modal.usuario.nombre}</strong></p>
              <div className="mt-4 space-y-4">
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">Motivo *</span>
                  <input
                    type="text"
                    value={banMotivo}
                    onChange={(e) => setBanMotivo(e.target.value)}
                    placeholder="Ej: Contenido inapropiado"
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">Duración (días, 0 = permanente)</span>
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
                  onClick={() => { setModal(null); setActionMsg(null); setBanMotivo(""); setBanDias("1"); }}
                  className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {modal?.type === "warn" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">Enviar advertencia</h3>
              <p className="mt-1 text-sm text-[var(--c-muted)]">Usuario: <strong>{modal.usuario.nombre}</strong></p>
              <div className="mt-4 space-y-4">
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">Motivo *</span>
                  <input
                    type="text"
                    value={warnMotivo}
                    onChange={(e) => setWarnMotivo(e.target.value)}
                    placeholder="Ej: Lenguaje ofensivo"
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[var(--c-muted)]">Severidad</span>
                  <select
                    value={warnSeveridad}
                    onChange={(e) => setWarnSeveridad(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  >
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
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
                  onClick={() => { setModal(null); setActionMsg(null); setWarnMotivo(""); setWarnSeveridad("baja"); }}
                  className="flex-1 rounded-xl border border-[var(--c-border)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
