import { useEffect, useRef, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { useIsStaff } from "../auth/use-roles";
import { apiGet } from "../lib/api";
import {
  fetchHilos, fetchHilo, enviarMensaje,
  fetchAvisos, crearAviso, marcarAvisoLeido,
  buscarUsuarios,
  type Hilo, type MensajeDirecto, type Aviso,
  type UsuarioBusqueda,
} from "../services/mensajeria";

const parseDate = (raw: unknown): Date | null => {
  if (!raw) return null;
  if (raw instanceof Date) return raw;
  if (typeof raw === "number") return new Date(raw);
  if (typeof raw === "string") {
    const normalized =
      raw.endsWith("Z") || raw.includes("+") || raw.includes("-", 10)
        ? raw
        : raw + "Z";
    const d = new Date(normalized);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
};

const ROLE_LABELS: Record<string, string> = {
  USER: "Alumno", TEACHER: "Profesor",
  DIRECTIVO: "Directivo", PARENT: "Padre/Madre",
  ADMIN: "Admin",
};

const DESTINO_LABELS: Record<string, string> = {
  todos: "Toda la escuela",
  padres: "Padres",
  alumnos: "Alumnos",
  profesores: "Profesores",
};

type Tab = "mensajes" | "avisos";

export default function Mensajeria() {
  const { user } = useAuth();
  // MULTIROL-02: canPublish = staff (DIRECTIVO/TEACHER/ADMIN en
  // cualquier slot de roles[]).
  const canPublish = useIsStaff();

  // Tabs
  const [tab, setTab] = useState<Tab>("mensajes");

  // Hilos
  const [hilos, setHilos] = useState<Hilo[]>([]);
  const [hilosLoading, setHilosLoading] = useState(true);
  const [hiloActivo, setHiloActivo] = useState<string | null>(null);
  const [mensajes, setMensajes] = useState<MensajeDirecto[]>([]);
  const [mensajesLoading, setMensajesLoading] = useState(false);
  const [body, setBody] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Nuevo mensaje
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState<UsuarioBusqueda[]>([]);
  const [destinatario, setDestinatario] =
    useState<UsuarioBusqueda | null>(null);
  const [nuevoMsg, setNuevoMsg] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [mostrarNuevo, setMostrarNuevo] = useState(false);

  // Avisos
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [avisosLoading, setAvisosLoading] = useState(false);
  const [avisoTitulo, setAvisoTitulo] = useState("");
  const [avisoCuerpo, setAvisoCuerpo] = useState("");
  const [avisoDestino, setAvisoDestino] = useState("todos");
  const [publicando, setPublicando] = useState(false);
  const [avisoMsg, setAvisoMsg] = useState<string | null>(null);
  const [escuelas, setEscuelas] = useState<Array<{ id: string; nombre: string }>>([]);
  const [escuelaSeleccionada, setEscuelaSeleccionada] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);

  // Cargar hilos al montar
  useEffect(() => {
    fetchHilos()
      .then(setHilos)
      .catch(() => {})
      .finally(() => setHilosLoading(false));
  }, []);

  // Cargar escuelas del usuario (para selector de aviso)
  useEffect(() => {
    if (!canPublish) return;
    apiGet<{ items: Array<{ id: string; name: string }> }>('/api/escuelas')
      .then((data) =>
        setEscuelas((data.items ?? []).map((e) => ({ id: e.id, nombre: e.name })))
      )
      .catch(() => setEscuelas([]));
  }, [canPublish]);

  // Cargar avisos al cambiar tab
  useEffect(() => {
    if (tab !== "avisos") return;
    setAvisosLoading(true);
    fetchAvisos()
      .then(setAvisos)
      .catch(() => {})
      .finally(() => setAvisosLoading(false));
  }, [tab]);

  // Cargar mensajes al cambiar hilo activo
  useEffect(() => {
    if (!hiloActivo) return;
    let active = true;
    setMensajesLoading(true);
    fetchHilo(hiloActivo)
      .then((data) => {
        if (!active) return;
        setMensajes(data.mensajes);
        // Marcar hilo como leído en la lista
        setHilos((prev) =>
          prev.map((h) =>
            h.id === hiloActivo ? { ...h, noLeidos: 0 } : h
          )
        );
      })
      .catch(() => {})
      .finally(() => { if (!active) return; setMensajesLoading(false); });
    return () => { active = false; };
  }, [hiloActivo]);

  // Scroll al último mensaje
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  // Buscar usuarios con debounce
  useEffect(() => {
    if (busqueda.length < 2) { setResultados([]); return; }
    const t = setTimeout(() => {
      setBuscando(true);
      buscarUsuarios(busqueda)
        .then(setResultados)
        .catch(() => {})
        .finally(() => setBuscando(false));
    }, 300);
    return () => clearTimeout(t);
  }, [busqueda]);

  const handleEnviar = async () => {
    if (!hiloActivo || !body.trim() || enviando) return;
    const hilo = hilos.find((h) => h.id === hiloActivo);
    if (!hilo) return;
    setEnviando(true);
    try {
      await enviarMensaje(hilo.otroId, body.trim());
      const now = new Date().toISOString();
      setMensajes((prev) => [...prev, {
        id: `tmp-${Date.now()}`,
        hilo_id: hiloActivo,
        sender_id: user?.id ?? "",
        body: body.trim(),
        leido: 0,
        created_at: now,
      }]);
      setHilos((prev) =>
        prev.map((h) =>
          h.id === hiloActivo
            ? { ...h, ultimoMsg: body.trim().slice(0, 80), ultimoAt: now }
            : h
        )
      );
      setBody("");
    } catch { /* ignorar */ }
    finally { setEnviando(false); }
  };

  const handleNuevoMensaje = async () => {
    if (!destinatario || !nuevoMsg.trim()) return;
    setEnviando(true);
    try {
      const result = await enviarMensaje(destinatario.id, nuevoMsg.trim());
      // Refrescar hilos y abrir el nuevo
      const updatedHilos = await fetchHilos();
      setHilos(updatedHilos);
      setHiloActivo(result.hiloId);
      setMostrarNuevo(false);
      setDestinatario(null);
      setBusqueda("");
      setNuevoMsg("");
    } catch { /* ignorar */ }
    finally { setEnviando(false); }
  };

  const handlePublicarAviso = async () => {
    if (!avisoTitulo.trim() || !avisoCuerpo.trim()) return;
    setPublicando(true);
    setAvisoMsg(null);
    try {
      await crearAviso({
        titulo: avisoTitulo.trim(),
        cuerpo: avisoCuerpo.trim(),
        destino: avisoDestino,
      });
      setAvisoTitulo("");
      setAvisoCuerpo("");
      setAvisoMsg("✓ Aviso publicado correctamente.");
      const updated = await fetchAvisos();
      setAvisos(updated);
    } catch (err) {
      setAvisoMsg(
        err instanceof Error ? err.message : "No se pudo publicar."
      );
    } finally {
      setPublicando(false);
    }
  };

  const handleLeerAviso = async (avisoId: string) => {
    await marcarAvisoLeido(avisoId).catch(() => {});
    setAvisos((prev) =>
      prev.map((a) => a.id === avisoId ? { ...a, leido: 1 } : a)
    );
  };

  return (
    <div className="page-root min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Encabezado */}
        <div>
          <h1 className="text-2xl font-semibold text-[var(--c-text)]">Mensajes</h1>
          <p className="text-sm text-[var(--c-muted)] mt-1">
            Mensajes directos y avisos de tu escuela.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-[var(--c-border)]">
          {(["mensajes", "avisos"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition-colors ${
                tab === t
                  ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                  : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
              }`}
            >
              {t === "mensajes" ? "Mensajes" : "Avisos"}
            </button>
          ))}
        </div>

        {/* ── TAB MENSAJES ── */}
        {tab === "mensajes" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[520px]">

            {/* Lista de hilos */}
            <div className="lg:col-span-1 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-medium text-[var(--c-muted)] uppercase tracking-wide">Conversaciones</p>
                <button
                  onClick={() => setMostrarNuevo((v) => !v)}
                  className="text-xs text-[var(--c-primary)] hover:underline"
                >
                  + Nuevo
                </button>
              </div>

              {/* Formulario nuevo mensaje */}
              {mostrarNuevo && (
                <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-3 space-y-2 mb-2">
                  <input
                    type="text"
                    placeholder="Buscar usuario..."
                    className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-1.5 text-sm placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-primary)]"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                  {buscando && <p className="text-xs text-[var(--c-muted)]">Buscando...</p>}
                  {resultados.length > 0 && !destinatario && (
                    <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] overflow-hidden">
                      {resultados.map((r) => (
                        <button
                          key={r.id}
                          onClick={() => { setDestinatario(r); setBusqueda(r.nombre); setResultados([]); }}
                          className="w-full text-left px-3 py-2 text-sm text-[var(--c-text)] hover:bg-[var(--c-surface)] transition-colors"
                        >
                          {r.nombre}
                          <span className="ml-1 text-xs text-[var(--c-muted)]">
                            · {ROLE_LABELS[r.role] ?? r.role}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                  {destinatario && (
                    <>
                      <p className="text-xs text-[var(--c-success)] font-medium">Para: {destinatario.nombre}</p>
                      <textarea
                        placeholder="Escribí tu mensaje..."
                        rows={2}
                        className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-1.5 text-sm placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-primary)] resize-none"
                        value={nuevoMsg}
                        onChange={(e) => setNuevoMsg(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <button
                          disabled={enviando || !nuevoMsg.trim()}
                          onClick={handleNuevoMensaje}
                          className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
                        >
                          {enviando ? "Enviando..." : "Enviar"}
                        </button>
                        <button
                          onClick={() => { setDestinatario(null); setBusqueda(""); }}
                          className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs text-[var(--c-muted)] hover:bg-[var(--c-bg)]"
                        >
                          Cancelar
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {hilosLoading && (
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-14 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse" />
                  ))}
                </div>
              )}

              {!hilosLoading && hilos.length === 0 && (
                <div className="rounded-xl border border-dashed border-[var(--c-border)] p-8 text-center">
                  <p className="text-xs text-[var(--c-muted)]">Sin conversaciones todavía.</p>
                </div>
              )}

              {hilos.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setHiloActivo(h.id)}
                  className={`w-full text-left rounded-xl border px-3 py-2.5 transition-all ${
                    hiloActivo === h.id
                      ? "border-[var(--c-primary)] bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)]"
                      : "border-[var(--c-border)] bg-[var(--c-surface)] hover:border-[var(--c-primary)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-[var(--c-text)] truncate">{h.otroNombre}</p>
                    {h.noLeidos > 0 && (
                      <span className="text-[10px] font-bold rounded-full bg-[var(--c-primary)] text-white px-1.5 py-0.5 flex-shrink-0">
                        {h.noLeidos}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--c-muted)] mt-0.5 truncate">{h.ultimoMsg ?? "Sin mensajes"}</p>
                </button>
              ))}
            </div>

            {/* Ventana de chat */}
            <div className="lg:col-span-2 flex flex-col rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
              {!hiloActivo ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <p className="text-sm text-[var(--c-muted)]">Seleccioná una conversación</p>
                </div>
              ) : (
                <>
                  {/* Mensajes */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[360px] max-h-[420px]">
                    {mensajesLoading && <p className="text-xs text-[var(--c-muted)]">Cargando...</p>}
                    {mensajes.map((m) => {
                      const esMio = m.sender_id === user?.id;
                      return (
                        <div key={m.id} className={`flex ${esMio ? "justify-end" : "justify-start"}`}>
                          <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                            esMio
                              ? "bg-[var(--c-primary)] text-white rounded-br-sm"
                              : "bg-[var(--c-bg)] text-[var(--c-text)] border border-[var(--c-border)] rounded-bl-sm"
                          }`}>
                            <p>{m.body}</p>
                            <p className={`text-[10px] mt-1 ${esMio ? "text-white/60" : "text-[var(--c-muted)]"}`}>
                              {(parseDate(m.created_at) ?? new Date()).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                    <div ref={bottomRef} />
                  </div>

                  {/* Input de respuesta */}
                  <div className="border-t border-[var(--c-border)] p-3 flex gap-2">
                    <input
                      type="text"
                      placeholder="Escribí un mensaje..."
                      className="flex-1 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-primary)]"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          void handleEnviar();
                        }
                      }}
                    />
                    <button
                      type="button"
                      disabled={enviando || !body.trim()}
                      onClick={handleEnviar}
                      className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40 hover:opacity-90 transition-opacity"
                    >
                      {enviando ? "..." : "Enviar"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ── TAB AVISOS ── */}
        {tab === "avisos" && (
          <div className="space-y-4">

            {/* Formulario de nuevo aviso — solo para TEACHER/DIRECTIVO/ADMIN */}
            {canPublish && (
              <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 space-y-3">
                <p className="text-sm font-medium text-[var(--c-text)]">Publicar aviso</p>
                <input
                  type="text"
                  placeholder="Título"
                  className="w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-primary)]"
                  value={avisoTitulo}
                  onChange={(e) => setAvisoTitulo(e.target.value)}
                />
                <textarea
                  placeholder="Mensaje..."
                  rows={3}
                  className="w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-primary)] resize-none"
                  value={avisoCuerpo}
                  onChange={(e) => setAvisoCuerpo(e.target.value)}
                />
                <div className="flex items-center gap-2 flex-wrap">
                  {escuelas.length > 1 && (
                    <select
                      value={escuelaSeleccionada}
                      onChange={(e) => setEscuelaSeleccionada(e.target.value)}
                      className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    >
                      <option value="">Todas mis escuelas</option>
                      {escuelas.map((e) => (
                        <option key={e.id} value={e.id}>{e.nombre}</option>
                      ))}
                    </select>
                  )}
                  <select
                    className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none"
                    value={avisoDestino}
                    onChange={(e) => setAvisoDestino(e.target.value)}
                  >
                    {Object.entries(DESTINO_LABELS).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                  <button
                    disabled={publicando || !avisoTitulo.trim() || !avisoCuerpo.trim()}
                    onClick={handlePublicarAviso}
                    className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40 hover:opacity-90 transition-opacity"
                  >
                    {publicando ? "Publicando..." : "Publicar"}
                  </button>
                </div>
                {avisoMsg && (
                  <p className={`text-xs ${avisoMsg.startsWith("✓") ? "text-[var(--c-success)]" : "text-[var(--c-danger)]"}`}>
                    {avisoMsg}
                  </p>
                )}
              </div>
            )}

            {/* Lista de avisos */}
            {avisosLoading && (
              <div className="space-y-2">
                {[1, 2].map((i) => (
                  <div key={i} className="h-20 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse" />
                ))}
              </div>
            )}

            {!avisosLoading && avisos.length === 0 && (
              <div className="rounded-xl border border-dashed border-[var(--c-border)] p-12 text-center">
                <p className="text-sm text-[var(--c-muted)]">No hay avisos publicados.</p>
              </div>
            )}

            {avisos.map((aviso) => (
              <div
                key={aviso.id}
                className={`rounded-xl border bg-[var(--c-surface)] p-4 space-y-1 ${
                  aviso.leido ? "border-[var(--c-border)] opacity-70" : "border-[var(--c-primary)]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-[var(--c-text)]">{aviso.titulo}</p>
                  <span className="text-[10px] text-[var(--c-muted)] flex-shrink-0">
                    {DESTINO_LABELS[aviso.destino] ?? aviso.destino}
                  </span>
                </div>
                <p className="text-xs text-[var(--c-muted)]">{aviso.cuerpo}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-[var(--c-muted)]">
                    {(parseDate(aviso.created_at) ?? new Date()).toLocaleDateString("es-AR")}
                  </span>
                  {!aviso.leido && (
                    <button
                      onClick={() => handleLeerAviso(aviso.id)}
                      className="text-[10px] text-[var(--c-primary)] hover:underline"
                    >
                      Marcar como leído
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
