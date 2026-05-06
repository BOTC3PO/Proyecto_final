import { useEffect, useRef, useState } from "react";
import { useAuth } from "../auth/use-auth";
import {
  fetchHilos, fetchHilo, enviarMensaje,
  fetchAvisos, crearAviso, marcarAvisoLeido,
  buscarUsuarios,
  type Hilo, type MensajeDirecto, type Aviso,
  type UsuarioBusqueda,
} from "../services/mensajeria";

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
  const canPublish = ["DIRECTIVO", "TEACHER", "ADMIN"].includes(
    user?.role ?? ""
  );

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

  const bottomRef = useRef<HTMLDivElement>(null);

  // Cargar hilos al montar
  useEffect(() => {
    fetchHilos()
      .then(setHilos)
      .catch(() => {})
      .finally(() => setHilosLoading(false));
  }, []);

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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-0 px-6 py-10">
      <header className="mb-6 space-y-1">
        <h1 className="text-3xl font-bold text-[var(--c-text)]">Mensajería</h1>
        <p className="text-base text-[var(--c-muted)]">
          Mensajes y avisos de tu escuela.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[var(--c-border)] mb-6">
        {[
          { key: "mensajes", label: "💬 Mensajes" },
          { key: "avisos", label: "📢 Avisos" },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key as Tab)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
              tab === t.key
                ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Tab Mensajes ── */}
      {tab === "mensajes" && (
        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">

          {/* Sidebar de hilos */}
          <aside className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setMostrarNuevo((v) => !v)}
              className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm
                font-semibold text-white hover:opacity-90 transition-colors"
            >
              + Nuevo mensaje
            </button>

            {/* Formulario nuevo mensaje */}
            {mostrarNuevo && (
              <div className="rounded-2xl border border-[var(--c-border)]
                bg-[var(--c-surface)] p-4 space-y-3 shadow-sm">
                <input
                  type="text"
                  placeholder="Buscar por nombre o @usuario..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full rounded-lg border border-[var(--c-border)]
                    px-3 py-2 text-sm focus:outline-none
                    focus:ring-2 focus:ring-blue-300"
                />
                {buscando && (
                  <p className="text-xs text-[var(--c-muted)] animate-pulse">
                    Buscando...
                  </p>
                )}
                {resultados.length > 0 && !destinatario && (
                  <ul className="space-y-1">
                    {resultados.map((u) => (
                      <li key={u.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setDestinatario(u);
                            setBusqueda(u.nombre);
                            setResultados([]);
                          }}
                          className="w-full text-left rounded-lg px-3 py-2
                            text-sm hover:bg-[var(--c-bg)] border border-[var(--c-border)]"
                        >
                          <span className="font-medium">{u.nombre}</span>
                          <span className="ml-2 text-xs text-[var(--c-muted)]">
                            {ROLE_LABELS[u.role] ?? u.role}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {destinatario && (
                  <>
                    <p className="text-xs text-emerald-600 font-medium">
                      Para: {destinatario.nombre}
                    </p>
                    <textarea
                      rows={3}
                      placeholder="Escribí tu mensaje..."
                      value={nuevoMsg}
                      onChange={(e) => setNuevoMsg(e.target.value)}
                      className="w-full rounded-lg border border-[var(--c-border)]
                        px-3 py-2 text-sm focus:outline-none
                        focus:ring-2 focus:ring-blue-300"
                    />
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleNuevoMensaje}
                        disabled={enviando || !nuevoMsg.trim()}
                        className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5
                          text-xs font-semibold text-white
                          hover:opacity-90 disabled:opacity-50"
                      >
                        {enviando ? "Enviando..." : "Enviar"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setDestinatario(null);
                          setBusqueda("");
                        }}
                        className="rounded-lg border border-[var(--c-border)]
                          px-3 py-1.5 text-xs text-[var(--c-muted)]
                          hover:bg-[var(--c-bg)]"
                      >
                        Cancelar
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Lista de hilos */}
            <div className="space-y-1 mt-1">
              {hilosLoading && (
                <p className="text-sm text-[var(--c-muted)] animate-pulse px-2">
                  Cargando conversaciones...
                </p>
              )}
              {!hilosLoading && hilos.length === 0 && (
                <p className="text-sm text-[var(--c-muted)] px-2">
                  Sin conversaciones aún.
                </p>
              )}
              {hilos.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setHiloActivo(h.id)}
                  className={`w-full text-left rounded-xl px-4 py-3
                    transition-colors ${
                    hiloActivo === h.id
                      ? "bg-blue-50 border border-blue-200"
                      : "bg-[var(--c-surface)] border border-[var(--c-border)] hover:bg-[var(--c-bg)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--c-text)] truncate">
                      {h.otroNombre}
                    </p>
                    {h.noLeidos > 0 && (
                      <span className="shrink-0 rounded-full bg-blue-600
                        px-2 py-0.5 text-xs font-bold text-white">
                        {h.noLeidos}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--c-muted)] mt-0.5 truncate">
                    {h.ultimoMsg ?? "Sin mensajes"}
                  </p>
                </button>
              ))}
            </div>
          </aside>

          {/* Panel de mensajes */}
          <div className="flex flex-col rounded-2xl border border-[var(--c-border)]
            bg-[var(--c-surface)] shadow-sm overflow-hidden min-h-[400px]">
            {!hiloActivo ? (
              <div className="flex flex-1 items-center justify-center
                text-sm text-[var(--c-muted)]">
                Seleccioná una conversación o iniciá una nueva.
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-2
                  max-h-[500px]">
                  {mensajesLoading && (
                    <p className="text-sm text-[var(--c-muted)] animate-pulse">
                      Cargando mensajes...
                    </p>
                  )}
                  {mensajes.map((m) => {
                    const esMio = m.sender_id === user?.id;
                    return (
                      <div key={m.id}
                        className={`flex ${esMio ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[75%] rounded-2xl px-4 py-2
                          text-sm ${
                          esMio
                            ? "bg-blue-600 text-white rounded-br-sm"
                            : "bg-slate-100 text-slate-800 rounded-bl-sm"
                        }`}>
                          <p>{m.body}</p>
                          <p className={`text-[10px] mt-1 ${
                            esMio ? "text-blue-200" : "text-slate-400"
                          }`}>
                            {new Date(m.created_at).toLocaleTimeString(
                              "es-AR", { hour: "2-digit", minute: "2-digit" }
                            )}
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
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        void handleEnviar();
                      }
                    }}
                    className="flex-1 rounded-xl border border-[var(--c-border)]
                      px-3 py-2 text-sm focus:outline-none
                      focus:ring-2 focus:ring-blue-300"
                  />
                  <button
                    type="button"
                    onClick={handleEnviar}
                    disabled={enviando || !body.trim()}
                    className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm
                      font-semibold text-white hover:opacity-90
                      disabled:opacity-50 transition-colors"
                  >
                    {enviando ? "..." : "Enviar"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Tab Avisos ── */}
      {tab === "avisos" && (
        <div className="space-y-6">

          {/* Formulario para publicar aviso — solo roles autorizados */}
          {canPublish && (
            <section className="rounded-2xl border border-[var(--c-border)]
              bg-[var(--c-surface)] p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-[var(--c-text)]">
                Publicar aviso
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="flex flex-col gap-1 text-sm
                  font-medium text-[var(--c-text)] sm:col-span-2">
                  Título
                  <input
                    type="text"
                    value={avisoTitulo}
                    onChange={(e) => setAvisoTitulo(e.target.value)}
                    placeholder="Ej: Reunión de padres el viernes"
                    className="rounded-lg border border-[var(--c-border)] px-3 py-2
                      text-sm focus:outline-none focus:ring-2
                      focus:ring-blue-300"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm
                  font-medium text-[var(--c-text)] sm:col-span-2">
                  Mensaje
                  <textarea
                    rows={3}
                    value={avisoCuerpo}
                    onChange={(e) => setAvisoCuerpo(e.target.value)}
                    placeholder="Detalle del aviso..."
                    className="rounded-lg border border-[var(--c-border)] px-3 py-2
                      text-sm focus:outline-none focus:ring-2
                      focus:ring-blue-300"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm
                  font-medium text-[var(--c-text)]">
                  Destinatarios
                  <select
                    value={avisoDestino}
                    onChange={(e) => setAvisoDestino(e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] px-3 py-2
                      text-sm"
                  >
                    {Object.entries(DESTINO_LABELS).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePublicarAviso}
                  disabled={
                    publicando ||
                    !avisoTitulo.trim() ||
                    !avisoCuerpo.trim()
                  }
                  className="rounded-xl bg-[var(--c-primary)] px-5 py-2.5 text-sm
                    font-semibold text-white hover:opacity-90
                    disabled:opacity-50 transition-colors"
                >
                  {publicando ? "Publicando..." : "Publicar aviso"}
                </button>
                {avisoMsg && (
                  <p className={`text-sm ${
                    avisoMsg.startsWith("✓")
                      ? "text-emerald-600" : "text-red-500"
                  }`}>
                    {avisoMsg}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Lista de avisos */}
          <section className="space-y-3">
            {avisosLoading && (
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i}
                    className="h-20 animate-pulse rounded-2xl bg-[var(--c-border)]"/>
                ))}
              </div>
            )}
            {!avisosLoading && avisos.length === 0 && (
              <p className="text-sm text-[var(--c-muted)]">
                No hay avisos publicados.
              </p>
            )}
            {avisos.map((aviso) => (
              <article
                key={aviso.id}
                onClick={() => !aviso.leido && handleLeerAviso(aviso.id)}
                className={`rounded-2xl border p-5 shadow-sm cursor-pointer
                  transition-colors ${
                  aviso.leido
                    ? "border-[var(--c-border)] bg-[var(--c-surface)]"
                    : "border-blue-200 bg-blue-50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {!aviso.leido && (
                        <span className="h-2 w-2 rounded-full
                          bg-[var(--c-primary)] shrink-0" />
                      )}
                      <h3 className="text-base font-semibold
                        text-[var(--c-text)]">
                        {aviso.titulo}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-[var(--c-muted)]">
                      {aviso.cuerpo}
                    </p>
                  </div>
                  <div className="text-right shrink-0 space-y-1">
                    <span className="block rounded-full bg-[var(--c-bg)]
                      px-2 py-0.5 text-xs font-medium text-[var(--c-muted)]">
                      {DESTINO_LABELS[aviso.destino] ?? aviso.destino}
                    </span>
                    <span className="block text-xs text-[var(--c-muted)]">
                      {new Date(aviso.created_at).toLocaleDateString(
                        "es-AR", { day: "numeric", month: "short" }
                      )}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
