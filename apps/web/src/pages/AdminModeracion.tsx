import { useEffect, useState } from "react";
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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Moderación</h1>
        <p className="text-base text-slate-600">
          Supervisa el contenido público de la plataforma y aplica acciones de moderación.
        </p>
      </header>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}
      {actionMsg && (
        <div className={`rounded-xl border px-4 py-3 text-sm ${actionMsg.startsWith("Error") ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
          {actionMsg}
          <button onClick={() => setActionMsg(null)} className="ml-3 text-xs underline">Cerrar</button>
        </div>
      )}

      {/* Aulas públicas */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Aulas públicas</h2>
          <p className="mt-0.5 text-xs text-slate-400">Últimas aulas con acceso público en la plataforma.</p>
        </div>
        {loadingClases ? (
          <div className="space-y-3 p-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-12 animate-pulse rounded-xl bg-slate-100" />
            ))}
          </div>
        ) : clases.length === 0 ? (
          <p className="p-6 text-sm text-slate-500">No hay aulas públicas activas.</p>
        ) : (
          <div className="divide-y divide-slate-100">
            {clases.map((c) => (
              <div key={c._id} className="flex flex-wrap items-center justify-between gap-2 px-6 py-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">{c.nombre ?? c.name ?? c._id}</p>
                  {c.updatedAt && (
                    <p className="text-xs text-slate-400">
                      Actualizado: {new Date(c.updatedAt).toLocaleDateString("es")}
                    </p>
                  )}
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                  Pública
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Mensajes reportados */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Mensajes reportados</h2>
          <p className="mt-0.5 text-xs text-slate-400">Mensajes marcados como inapropiados por otros usuarios.</p>
        </div>
        {loadingMensajes ? (
          <div className="space-y-3 p-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-12 animate-pulse rounded-xl bg-slate-100" />
            ))}
          </div>
        ) : mensajes.length === 0 ? (
          <p className="p-6 text-sm text-slate-500">No hay mensajes reportados.</p>
        ) : (
          <div className="divide-y divide-slate-100">
            {mensajes.map((m) => (
              <div key={m._id} className="flex flex-wrap items-start justify-between gap-2 px-6 py-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-700 line-clamp-2">{m.cuerpo ?? m.body ?? "(sin contenido)"}</p>
                  {m.tipo && <p className="mt-0.5 text-xs text-slate-400">Tipo: {m.tipo}</p>}
                  {m.createdAt && (
                    <p className="text-xs text-slate-400">{new Date(m.createdAt).toLocaleDateString("es")}</p>
                  )}
                </div>
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">
                  Reportado
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Acción rápida por ID de usuario */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Acción rápida por ID de usuario</h2>
        <p className="mt-1 text-sm text-slate-500">
          Aplica un ban o advertencia directamente ingresando el ID del usuario.
          Para buscar usuarios usa <a href="/admin/usuarios" className="text-blue-600 underline">Gestión de usuarios</a>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => setBanModal({ userId: "", nombre: "usuario por ID" })}
            className="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 transition-colors"
          >
            Banear por ID
          </button>
          <button
            onClick={() => setWarnModal({ userId: "", nombre: "usuario por ID" })}
            className="rounded-xl border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 transition-colors"
          >
            Advertir por ID
          </button>
        </div>
      </section>

      {/* Modal Ban */}
      {banModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">Banear usuario</h3>
            <div className="mt-4 space-y-3">
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-600">ID del usuario *</span>
                <input
                  type="text"
                  value={banModal.userId}
                  onChange={(e) => setBanModal({ ...banModal, userId: e.target.value })}
                  placeholder="ID del usuario"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-600">Motivo *</span>
                <input
                  type="text"
                  value={banMotivo}
                  onChange={(e) => setBanMotivo(e.target.value)}
                  placeholder="Ej: Contenido inapropiado"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-600">Duración (días, 0 = permanente)</span>
                <input
                  type="number"
                  min={0}
                  value={banDias}
                  onChange={(e) => setBanDias(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                />
              </label>
            </div>
            {actionMsg && <p className="mt-2 text-sm text-red-600">{actionMsg}</p>}
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
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Advertencia */}
      {warnModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">Enviar advertencia</h3>
            <div className="mt-4 space-y-3">
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-600">ID del usuario *</span>
                <input
                  type="text"
                  value={warnModal.userId}
                  onChange={(e) => setWarnModal({ ...warnModal, userId: e.target.value })}
                  placeholder="ID del usuario"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-600">Motivo *</span>
                <input
                  type="text"
                  value={warnMotivo}
                  onChange={(e) => setWarnMotivo(e.target.value)}
                  placeholder="Ej: Lenguaje ofensivo"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-600">Severidad</span>
                <select
                  value={warnSeveridad}
                  onChange={(e) => setWarnSeveridad(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <option value="baja">Baja</option>
                  <option value="media">Media</option>
                  <option value="alta">Alta</option>
                </select>
              </label>
            </div>
            {actionMsg && <p className="mt-2 text-sm text-red-600">{actionMsg}</p>}
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
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
