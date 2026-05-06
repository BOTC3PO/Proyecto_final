import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";
import {
  fetchEstadoSuscripcion, fetchHistorialPagos,
  fetchLimites, iniciarSuscripcion,
  cancelarSuscripcion, solicitarReembolso,
  type EstadoSuscripcion, type PagoHistorial,
  type LimitesEscuela,
} from "../services/suscripciones";

type PerfilData = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: string;
  escuelaId: string | null;
  createdAt: string | null;
  isBanned: boolean;
  warningCount: number;
  modulosCompletados: { publicos: number; privados: number; total: number };
  hijos: Array<{ id: string; nombre: string; usuario: string }>;
};

type ProgressItem = {
  moduloId: string;
  status: "iniciado" | "en_progreso" | "completado";
};

type ModuloBasico = {
  id: string;
  title: string;
  subject?: string;
  category?: string;
};

type FortalezaMateria = {
  materia: string;
  completados: number;
  total: number;
  porcentaje: number;
};

type Logro = {
  id: string;
  label: string;
  descripcion: string;
  icono: string;
  obtenido: boolean;
};

const ROLE_LABELS: Record<string, string> = {
  ADMIN: "Administrador",
  USER: "Alumno",
  TEACHER: "Docente",
  PARENT: "Padre/Madre",
  DIRECTIVO: "Directivo",
  GUEST: "Invitado",
};

const ROLE_COLORS: Record<string, string> = {
  ADMIN: "bg-blue-100 text-blue-800",
  USER: "bg-emerald-100 text-emerald-800",
  TEACHER: "bg-violet-100 text-violet-800",
  PARENT: "bg-amber-100 text-amber-800",
  DIRECTIVO: "bg-slate-100 text-slate-800",
  GUEST: "bg-gray-100 text-gray-600",
};

export default function Perfil() {
  const [perfil, setPerfil] = useState<PerfilData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fortalezas, setFortalezas] =
    useState<FortalezaMateria[]>([]);
  const [logros, setLogros] = useState<Logro[]>([]);
  const [progresoStatus, setProgresoStatus] =
    useState<"idle" | "loading" | "ready">("idle");
  const [suscripcion, setSuscripcion] =
    useState<EstadoSuscripcion | null>(null);
  const [historial, setHistorial] = useState<PagoHistorial[]>([]);
  const [limites, setLimites] = useState<LimitesEscuela | null>(null);
  const [suscLoading, setSuscLoading] = useState(true);
  const [payerEmail, setPayerEmail] = useState("");
  const [suscAccion, setSuscAccion] =
    useState<"idle" | "loading" | "error" | "ok">("idle");
  const [suscMsg, setSuscMsg] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    apiGet<PerfilData>("/api/perfil")
      .then((data) => { if (active) { setPerfil(data); setError(null); } })
      .catch((e: Error) => { if (active) setError(e.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!perfil?.id) return;
    let active = true;
    setProgresoStatus("loading");

    Promise.all([
      apiGet<{ items: ModuloBasico[] }>("/api/modulos"),
      apiGet<{ items: ProgressItem[] }>(
        `/api/progreso?usuarioId=${perfil.id}`
      ),
    ])
      .then(([modulosRes, progressRes]) => {
        if (!active) return;

        const completadosIds = new Set(
          progressRes.items
            .filter((p) => p.status === "completado")
            .map((p) => p.moduloId)
        );

        // Agrupar por materia
        const porMateria = new Map<string, { total: number; completados: number }>();
        for (const m of modulosRes.items) {
          const materia = m.subject ?? m.category ?? "General";
          const entry = porMateria.get(materia) ?? { total: 0, completados: 0 };
          entry.total += 1;
          if (completadosIds.has(m.id)) entry.completados += 1;
          porMateria.set(materia, entry);
        }

        const fortalezasCalc: FortalezaMateria[] = Array.from(porMateria.entries())
          .map(([materia, { total, completados }]) => ({
            materia,
            completados,
            total,
            porcentaje: total === 0 ? 0 : Math.round((completados / total) * 100),
          }))
          .filter((f) => f.completados > 0)
          .sort((a, b) => b.porcentaje - a.porcentaje);

        setFortalezas(fortalezasCalc);

        // Calcular logros
        const totalCompletados = completadosIds.size;
        const logrosCalc: Logro[] = [
          {
            id: "primer-modulo",
            label: "Primer paso",
            descripcion: "Completaste tu primer módulo.",
            icono: "🎯",
            obtenido: totalCompletados >= 1,
          },
          {
            id: "cinco-modulos",
            label: "En camino",
            descripcion: "Completaste 5 módulos.",
            icono: "📚",
            obtenido: totalCompletados >= 5,
          },
          {
            id: "diez-modulos",
            label: "Estudioso",
            descripcion: "Completaste 10 módulos.",
            icono: "🏆",
            obtenido: totalCompletados >= 10,
          },
          {
            id: "veinticinco-modulos",
            label: "Experto",
            descripcion: "Completaste 25 módulos.",
            icono: "⭐",
            obtenido: totalCompletados >= 25,
          },
          // Logros por materia — uno por cada materia con 100%
          ...fortalezasCalc
            .filter((f) => f.porcentaje === 100 && f.total >= 3)
            .map((f) => ({
              id: `dominio-${f.materia.toLowerCase()}`,
              label: `Dominio de ${f.materia}`,
              descripcion: `Completaste todos los módulos de ${f.materia}.`,
              icono: "🎓",
              obtenido: true,
            })),
          // Logro por materia con más del 75%
          ...fortalezasCalc
            .filter((f) => f.porcentaje >= 75 && f.total >= 2)
            .map((f) => ({
              id: `avanzado-${f.materia.toLowerCase()}`,
              label: `Avanzado en ${f.materia}`,
              descripcion: `Superaste el 75% de los módulos de ${f.materia}.`,
              icono: "💡",
              obtenido: true,
            })),
        ];

        setLogros(logrosCalc);
        setProgresoStatus("ready");
      })
      .catch(() => {
        if (!active) return;
        setProgresoStatus("ready");
      });

    return () => { active = false; };
  }, [perfil?.id]);

  useEffect(() => {
    let active = true;
    Promise.all([
      fetchEstadoSuscripcion(),
      fetchHistorialPagos(),
      fetchLimites(),
    ])
      .then(([estado, hist, lim]) => {
        if (!active) return;
        setSuscripcion(estado);
        setHistorial(hist);
        setLimites(lim.limites);
      })
      .catch(() => {})
      .finally(() => { if (!active) return; setSuscLoading(false); });
    return () => { active = false; };
  }, [perfil?.id]);

  const handleSuscribir = async (
    tipo: "escuela" | "profesor" | "alumno"
  ) => {
    if (!payerEmail.trim()) {
      setSuscMsg("Ingresá tu email de MercadoPago.");
      return;
    }
    setSuscAccion("loading");
    setSuscMsg(null);
    try {
      const result = await iniciarSuscripcion({
        tipo,
        payerEmail: payerEmail.trim(),
        backUrl: window.location.href,
      });
      window.location.href = result.initPoint;
    } catch (err) {
      setSuscAccion("error");
      setSuscMsg(
        err instanceof Error ? err.message : "No se pudo iniciar el pago."
      );
    }
  };

  const handleCancelar = async (suscripcionId: string) => {
    setSuscAccion("loading");
    try {
      const result = await cancelarSuscripcion(suscripcionId);
      setSuscMsg(result.mensaje);
      setSuscAccion("ok");
      const updated = await fetchEstadoSuscripcion();
      setSuscripcion(updated);
    } catch {
      setSuscAccion("error");
      setSuscMsg("No se pudo cancelar.");
    }
  };

  const handleReembolso = async (suscripcionId: string) => {
    setSuscAccion("loading");
    try {
      const result = await solicitarReembolso(suscripcionId);
      setSuscMsg(result.mensaje);
      setSuscAccion("ok");
    } catch {
      setSuscAccion("error");
      setSuscMsg("No se pudo solicitar el reembolso.");
    }
  };

  if (loading) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
        <div className="space-y-4">
          <div className="h-8 w-48 animate-pulse rounded-xl bg-[var(--c-border)]" />
          <div className="h-40 animate-pulse rounded-2xl bg-[var(--c-border)]" />
          <div className="h-32 animate-pulse rounded-2xl bg-[var(--c-border)]" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Error al cargar el perfil: {error}
        </div>
      </main>
    );
  }

  if (!perfil) return null;

  const initials = perfil.fullName
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-[var(--c-text)]">Mi perfil</h1>
        <p className="text-base text-[var(--c-muted)]">Información de tu cuenta y actividad en la plataforma.</p>
      </header>

      {/* Tarjeta de identidad */}
      <section className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-5">
          {/* Avatar */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
            {initials || "?"}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-semibold text-[var(--c-text)]">{perfil.fullName}</h2>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${ROLE_COLORS[perfil.role] ?? "bg-slate-100 text-slate-700"}`}>
                {ROLE_LABELS[perfil.role] ?? perfil.role}
              </span>
              {perfil.isBanned && (
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                  Cuenta suspendida
                </span>
              )}
            </div>
            <p className="mt-0.5 text-sm text-[var(--c-muted)]">@{perfil.username}</p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs text-[var(--c-muted)]">Correo electrónico</p>
            <p className="text-sm font-medium text-[var(--c-text)]">{perfil.email || "—"}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--c-muted)]">Miembro desde</p>
            <p className="text-sm font-medium text-[var(--c-text)]">
              {perfil.createdAt
                ? new Date(perfil.createdAt).toLocaleDateString("es", { year: "numeric", month: "long", day: "numeric" })
                : "—"}
            </p>
          </div>
          {perfil.escuelaId && (
            <div>
              <p className="text-xs text-[var(--c-muted)]">Escuela</p>
              <p className="text-sm font-medium text-[var(--c-text)]">{perfil.escuelaId}</p>
            </div>
          )}
          {perfil.warningCount > 0 && (
            <div>
              <p className="text-xs text-slate-400">Advertencias</p>
              <p className="text-sm font-medium text-amber-700">
                {perfil.warningCount} advertencia{perfil.warningCount !== 1 ? "s" : ""}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Actividad en módulos */}
      <section className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[var(--c-text)]">Módulos completados</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="rounded-xl bg-violet-50 p-4 text-center">
            <p className="text-2xl font-bold text-violet-700">{perfil.modulosCompletados.publicos}</p>
            <p className="mt-1 text-xs text-violet-600">Públicos</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-center">
            <p className="text-2xl font-bold text-slate-700">{perfil.modulosCompletados.privados}</p>
            <p className="mt-1 text-xs text-slate-500">Privados / Escuela</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4 text-center">
            <p className="text-2xl font-bold text-blue-700">{perfil.modulosCompletados.total}</p>
            <p className="mt-1 text-xs text-blue-600">Total</p>
          </div>
        </div>
        {perfil.modulosCompletados.total === 0 && (
          <p className="mt-3 text-sm text-[var(--c-muted)]">
            Aún no has completado ningún módulo. ¡Explora los{" "}
            <a href="/modulos" className="text-[var(--c-primary)] underline">módulos disponibles</a>!
          </p>
        )}
      </section>

      {/* Fortalezas por materia (solo para USER) */}
      {perfil.role === "USER" && progresoStatus === "ready" &&
        fortalezas.length > 0 && (
        <section className="rounded-2xl border border-[var(--c-border)]
          bg-[var(--c-surface)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">
            En qué sos bueno
          </h2>
          <p className="mt-1 text-sm text-[var(--c-muted)]">
            Materias donde más avanzaste.
          </p>
          <div className="mt-4 space-y-3">
            {fortalezas.slice(0, 5).map((f) => (
              <div key={f.materia}>
                <div className="flex items-center justify-between
                  text-sm mb-1">
                  <span className="font-medium text-[var(--c-text)]">
                    {f.materia}
                  </span>
                  <span className="text-[var(--c-muted)] text-xs">
                    {f.completados}/{f.total} módulos ·{" "}
                    {f.porcentaje}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-[var(--c-border)]">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      f.porcentaje === 100
                        ? "bg-emerald-500"
                        : f.porcentaje >= 75
                        ? "bg-blue-500"
                        : f.porcentaje >= 50
                        ? "bg-violet-400"
                        : "bg-amber-400"
                    }`}
                    style={{ width: `${f.porcentaje}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Logros (solo para USER) */}
      {perfil.role === "USER" && progresoStatus === "ready" && (
        <section className="rounded-2xl border border-[var(--c-border)]
          bg-[var(--c-surface)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">
            Logros
          </h2>
          <p className="mt-1 text-sm text-[var(--c-muted)]">
            Hitos alcanzados en tu recorrido.
          </p>
          {logros.length === 0 ? (
            <p className="mt-3 text-sm text-[var(--c-muted)]">
              Completá módulos para desbloquear logros.
            </p>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {logros.map((logro) => (
                <div
                  key={logro.id}
                  className={`flex items-center gap-3 rounded-xl
                    border p-3 ${
                    logro.obtenido
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-[var(--c-border)] bg-[var(--c-bg)] opacity-40"
                  }`}
                >
                  <span className="text-2xl">{logro.icono}</span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--c-text)]">
                      {logro.label}
                    </p>
                    <p className="text-xs text-[var(--c-muted)]">
                      {logro.descripcion}
                    </p>
                  </div>
                  {logro.obtenido && (
                    <span className="ml-auto text-xs font-semibold
                      text-emerald-600">
                      ✓
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Hijos vinculados (solo para PARENT) */}
      {perfil.role === "PARENT" && (
        <section className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">Hijos vinculados</h2>
          {perfil.hijos.length === 0 ? (
            <p className="mt-3 text-sm text-[var(--c-muted)]">
              No tienes hijos vinculados.{" "}
              <a href="/hijos/agregar" className="text-[var(--c-primary)] underline">Agregar un hijo</a>
            </p>
          ) : (
            <div className="mt-4 space-y-2">
              {perfil.hijos.map((h) => (
                <div key={h.id} className="flex items-center justify-between rounded-xl border border-[var(--c-border)] px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-[var(--c-text)]">{h.nombre}</p>
                    <p className="text-xs text-[var(--c-muted)]">@{h.usuario}</p>
                  </div>
                  <a
                    href="/hijos"
                    className="rounded-lg border border-[var(--c-border)] px-3 py-1 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                  >
                    Ver progreso
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Panel de suscripción */}
      <section className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-[var(--c-text)]">
          Suscripción
        </h2>

        {suscLoading && (
          <p className="text-sm text-[var(--c-muted)] animate-pulse">
            Cargando suscripción...
          </p>
        )}

        {!suscLoading && suscripcion && (
          <>
            {/* Estado actual */}
            <div className="grid gap-3 sm:grid-cols-2">
              {suscripcion.personal && (
                <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
                  <p className="text-xs font-semibold uppercase text-[var(--c-muted)]">
                    Suscripción personal
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--c-text)] capitalize">
                    {suscripcion.personal.plan} —{" "}
                    <span className={`font-semibold ${
                      suscripcion.personal.estado === "activa"
                        ? "text-emerald-600"
                        : "text-slate-500"
                    }`}>
                      {suscripcion.personal.estado}
                    </span>
                  </p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">
                    Vence:{" "}
                    {new Date(suscripcion.personal.periodo_fin)
                      .toLocaleDateString("es-AR")}
                  </p>
                  {suscripcion.personal.estado === "activa" && (
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleCancelar(suscripcion.personal!.id)}
                        disabled={suscAccion === "loading"}
                        className="text-xs text-red-500 hover:underline disabled:opacity-50"
                      >
                        Cancelar
                      </button>
                      {!suscripcion.personal.reembolso_solicitado && (
                        <button
                          type="button"
                          onClick={() => handleReembolso(suscripcion.personal!.id)}
                          disabled={suscAccion === "loading"}
                          className="text-xs text-slate-500 hover:underline disabled:opacity-50"
                        >
                          Solicitar reembolso
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {suscripcion.escuela && (
                <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
                  <p className="text-xs font-semibold uppercase text-[var(--c-muted)]">
                    Suscripción escuela
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--c-text)] capitalize">
                    {suscripcion.escuela.plan} —{" "}
                    <span className={`font-semibold ${
                      suscripcion.escuela.estado === "activa"
                        ? "text-emerald-600" : "text-slate-500"
                    }`}>
                      {suscripcion.escuela.estado}
                    </span>
                  </p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">
                    Vence:{" "}
                    {new Date(suscripcion.escuela.periodo_fin)
                      .toLocaleDateString("es-AR")}
                  </p>
                </div>
              )}

              {suscripcion.multiplicador && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-semibold uppercase text-emerald-600">
                    Multiplicador activo
                  </p>
                  <p className="mt-1 text-sm text-emerald-700">
                    +15% de monedas en la economía del aula
                  </p>
                </div>
              )}
            </div>

            {/* Límites de escuela */}
            {limites && (
              <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
                <p className="text-xs font-semibold uppercase text-[var(--c-muted)] mb-2">
                  Límites actuales
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-[var(--c-muted)]">
                  <span>Profesores: hasta {limites.max_profesores}</span>
                  <span>Directivos: hasta {limites.max_directivos}</span>
                  <span>Aulas activas: hasta {limites.max_aulas}</span>
                  <span>Alumnos/aula: hasta {limites.max_alumnos_por_aula}</span>
                </div>
              </div>
            )}

            {/* Formulario para suscribirse */}
            {!suscripcion.personal && suscripcion.paymentsEnabled && (
              <div className="space-y-3">
                <p className="text-sm font-medium text-[var(--c-text)]">
                  Activar suscripción
                </p>
                <input
                  type="email"
                  placeholder="Tu email de MercadoPago"
                  value={payerEmail}
                  onChange={(e) => setPayerEmail(e.target.value)}
                  className="w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <div className="flex flex-wrap gap-2">
                  {perfil.role === "USER" && (
                    <button
                      type="button"
                      disabled={suscAccion === "loading"}
                      onClick={() => handleSuscribir("alumno")}
                      className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
                    >
                      Alumno — $1.000/mes
                    </button>
                  )}
                  {perfil.role === "TEACHER" && (
                    <button
                      type="button"
                      disabled={suscAccion === "loading"}
                      onClick={() => handleSuscribir("profesor")}
                      className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
                    >
                      Expandir aulas — $150/mes
                    </button>
                  )}
                  {perfil.role === "DIRECTIVO" && (
                    <button
                      type="button"
                      disabled={suscAccion === "loading"}
                      onClick={() => handleSuscribir("escuela")}
                      className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
                    >
                      Escuela — desde $300/mes
                    </button>
                  )}
                </div>
              </div>
            )}

            {!suscripcion.paymentsEnabled && (
              <p className="text-sm text-[var(--c-muted)]">
                Los pagos están deshabilitados en este sistema.
                Contactá al administrador para gestionar tu suscripción.
              </p>
            )}

            {suscMsg && (
              <p className={`text-sm ${
                suscAccion === "error" ? "text-red-600" : "text-emerald-600"
              }`}>
                {suscMsg}
              </p>
            )}

            {/* Historial de pagos */}
            {historial.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase text-[var(--c-muted)]">
                  Historial de pagos
                </p>
                {historial.slice(0, 5).map((pago) => (
                  <div key={pago.id}
                    className="flex items-center justify-between rounded-lg border border-[var(--c-border)] px-3 py-2 text-xs text-[var(--c-muted)]">
                    <span>
                      {new Date(pago.created_at).toLocaleDateString("es-AR")}
                    </span>
                    <span className="font-medium">
                      ${pago.monto.toLocaleString("es-AR")} {pago.moneda}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 font-semibold ${
                      pago.estado === "pagado"
                        ? "bg-emerald-100 text-emerald-700"
                        : pago.estado === "reembolsado"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-500"
                    }`}>
                      {pago.estado}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
