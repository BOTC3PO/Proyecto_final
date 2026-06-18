import { useEffect, useState } from "react";
import { solicitarCambioRol } from "../services/roles";
import { apiGet } from "../lib/api";
import { useTheme, THEME_OPTIONS } from "../theme/ThemeContext";
import EsperandoPago from "../components/EsperandoPago";
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

const THEME_SWATCH_COLORS: Record<string, string> = {
  "clasico-vb":  "#2563eb",
  "clasico":     "#1e40af",
  "minimal":     "#1a1a18",
  "aurora":      "#7c3aed",
  "bosque":      "#15803d",
  "nocturno":    "#1e293b",
  "nocturno-vb": "#0f172a",
  "vibrante":    "#e11d48",
  "galaxy":      "#4f46e5",
  "sunset":      "#f97316",
  "ocean":       "#0891b2",
  "candy":       "#ec4899",
  "neon":        "#22d3ee",
  "admin":       "#6b7280",
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
  const [activeTab, setActiveTab] = useState<"perfil" | "progreso" | "logros" | "suscripcion" | "apariencia">("perfil");
  const { theme, setTheme, availableThemes } = useTheme();

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

  return (
    <div className="page-root min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Estado de carga global */}
        {loading && (
          <div className="space-y-3">
            <div className="h-24 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse" />
            <div className="h-48 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse" />
          </div>
        )}
        {error && <p className="text-sm text-[var(--c-danger)]">{error}</p>}

        {!loading && !error && perfil && (
          <>
            {/* Card de usuario — siempre visible */}
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--c-primary)] flex items-center justify-center text-white text-xl font-semibold flex-shrink-0 select-none">
                {perfil.fullName.split(" ").filter(Boolean).map((p) => p[0]).join("").slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-base font-semibold text-[var(--c-text)] truncate">{perfil.fullName}</p>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${ROLE_COLORS[perfil.role] ?? "bg-gray-100 text-gray-600"}`}>
                    {ROLE_LABELS[perfil.role] ?? perfil.role}
                  </span>
                  {perfil.isBanned && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[color-mix(in_srgb,var(--c-danger)_12%,transparent)] text-[var(--c-danger)]">
                      Suspendido
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--c-muted)] mt-0.5">@{perfil.username}</p>
                <p className="text-xs text-[var(--c-muted)]">{perfil.email}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 border-b border-[var(--c-border)]">
              {([
                { key: "perfil",      label: "Datos" },
                { key: "progreso",    label: "Progreso" },
                { key: "logros",      label: "Logros" },
                ...(perfil?.role !== 'ADMIN'
                  ? [{ key: "suscripcion" as const, label: "Suscripción" }]
                  : []),
                ...(availableThemes.length > 1
                  ? [{ key: "apariencia" as const, label: "Apariencia" }]
                  : []),
              ] as { key: "perfil" | "progreso" | "logros" | "suscripcion" | "apariencia"; label: string }[]).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === key
                      ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                      : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ── TAB: DATOS ── */}
            {activeTab === "perfil" && (
              <div className="space-y-3">
                {/* FIX-TEST4-ROLE-02 — antes un USER adulto no
                    tenía forma de auto-solicitar un cambio de rol.
                    Ahora hay un banner arriba de los datos
                    personales con un selector y un botón. El
                    back valida que sea mayor de 18 años y que
                    el rol no sea el actual. */}
                <RoleSolicitudBanner
                  currentRole={perfil.role}
                />
                {[
                  { label: "Nombre completo", value: perfil.fullName },
                  { label: "Usuario",         value: `@${perfil.username}` },
                  { label: "Email",           value: perfil.email },
                  { label: "Miembro desde",   value: perfil.createdAt
                      ? new Date(perfil.createdAt).toLocaleDateString("es-AR")
                      : "—" },
                  { label: "Módulos completados", value: `${perfil.modulosCompletados.total} (${perfil.modulosCompletados.publicos} públicos · ${perfil.modulosCompletados.privados} privados)` },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                    <p className="text-xs text-[var(--c-muted)]">{label}</p>
                    <p className="text-sm font-medium text-[var(--c-text)] text-right">{value}</p>
                  </div>
                ))}
                {perfil.warningCount > 0 && (
                  <div className="bg-[color-mix(in_srgb,var(--c-warning)_8%,transparent)] border border-[color-mix(in_srgb,var(--c-warning)_25%,transparent)] rounded-xl px-4 py-3">
                    <p className="text-xs font-medium text-[var(--c-warning)]">
                      {perfil.warningCount} advertencia{perfil.warningCount > 1 ? "s" : ""} registrada{perfil.warningCount > 1 ? "s" : ""}
                    </p>
                  </div>
                )}

                {/* Hijos vinculados (solo PARENT) */}
                {perfil.role === "PARENT" && (
                  <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4">
                    <p className="text-sm font-medium text-[var(--c-text)] mb-3">Hijos vinculados</p>
                    {perfil.hijos.length === 0 ? (
                      <p className="text-xs text-[var(--c-muted)]">
                        No tenés hijos vinculados.{" "}
                        <a href="/hijos/agregar" className="text-[var(--c-primary)] underline">Agregar un hijo</a>
                      </p>
                    ) : (
                      <div className="space-y-2">
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
                  </div>
                )}
              </div>
            )}

            {/* ── TAB: PROGRESO ── */}
            {activeTab === "progreso" && (
              <div className="space-y-3">
                {progresoStatus === "loading" && (
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-14 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse" />
                    ))}
                  </div>
                )}
                {progresoStatus === "ready" && fortalezas.length === 0 && (
                  <div className="rounded-xl border border-dashed border-[var(--c-border)] p-10 text-center">
                    <p className="text-sm text-[var(--c-muted)]">Sin datos de progreso por materia todavía.</p>
                  </div>
                )}
                {fortalezas.map((f) => (
                  <div key={f.materia} className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-[var(--c-text)]">{f.materia}</p>
                      <span className="text-xs font-semibold text-[var(--c-primary)]">{f.porcentaje}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[var(--c-border)] rounded-full">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${f.porcentaje}%`,
                          background: f.porcentaje === 100 ? "var(--c-success)" : "var(--c-primary)",
                        }}
                      />
                    </div>
                    <p className="text-xs text-[var(--c-muted)] mt-1.5">
                      {f.completados} de {f.total} módulos
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* ── TAB: LOGROS ── */}
            {activeTab === "logros" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {logros.length === 0 && (
                  <div className="col-span-2 rounded-xl border border-dashed border-[var(--c-border)] p-10 text-center">
                    <p className="text-sm text-[var(--c-muted)]">Sin logros disponibles todavía.</p>
                  </div>
                )}
                {logros.map((logro) => (
                  <div
                    key={logro.id}
                    className={`rounded-xl border p-4 flex items-start gap-3 ${
                      logro.obtenido
                        ? "border-[var(--c-border)] bg-[var(--c-surface)]"
                        : "border-[var(--c-border)] bg-[var(--c-surface)] opacity-40"
                    }`}
                  >
                    <span className="text-2xl flex-shrink-0">{logro.icono}</span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--c-text)]">{logro.label}</p>
                      <p className="text-xs text-[var(--c-muted)] mt-0.5">{logro.descripcion}</p>
                      {!logro.obtenido && (
                        <p className="text-[10px] text-[var(--c-muted)] mt-1">No obtenido</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── TAB: SUSCRIPCIÓN ── */}
            {activeTab === "suscripcion" && perfil?.role !== 'ADMIN' && (
              <div className="space-y-4">
                {suscLoading && (
                  <div className="h-24 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse" />
                )}

                {!suscLoading && suscripcion && (
                  <>
                    {/* Esperando confirmación de un pago recién iniciado.
                        Al volver de MercadoPago la suscripción queda "pendiente";
                        la acreditación real llega por webhook → polleamos hasta activa. */}
                    {(suscripcion.personal?.estado === "pendiente" ||
                      suscripcion.escuela?.estado === "pendiente") && (
                      <EsperandoPago
                        estaConfirmado={(e) =>
                          e.personal?.estado === "activa" ||
                          e.escuela?.estado === "activa"
                        }
                        onConfirmado={(e) => {
                          setSuscripcion(e);
                          setSuscAccion("ok");
                          setSuscMsg(null);
                          fetchHistorialPagos().then(setHistorial).catch(() => {});
                        }}
                      />
                    )}

                    {/* Suscripción personal */}
                    {suscripcion.personal && (
                      <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-[var(--c-text)]">Suscripción personal</p>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            suscripcion.personal.estado === "activa"
                              ? "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]"
                              : "bg-[color-mix(in_srgb,var(--c-muted)_15%,transparent)] text-[var(--c-muted)]"
                          }`}>
                            {suscripcion.personal.estado}
                          </span>
                        </div>
                        <p className="text-2xl font-semibold text-[var(--c-text)] capitalize">{suscripcion.personal.plan}</p>
                        <p className="text-xs text-[var(--c-muted)]">
                          Vence: {new Date(suscripcion.personal.periodo_fin).toLocaleDateString("es-AR")}
                        </p>
                        {suscripcion.personal.estado === "activa" && (
                          <div className="flex gap-3 pt-1">
                            <button
                              disabled={suscAccion === "loading"}
                              onClick={() => handleCancelar(suscripcion.personal!.id)}
                              className="rounded-xl border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-muted)] hover:text-[var(--c-danger)] hover:border-[var(--c-danger)] transition-colors disabled:opacity-40"
                            >
                              Cancelar
                            </button>
                            {!suscripcion.personal.reembolso_solicitado && (
                              <button
                                disabled={suscAccion === "loading"}
                                onClick={() => handleReembolso(suscripcion.personal!.id)}
                                className="rounded-xl border border-[var(--c-border)] px-3 py-1.5 text-xs text-[var(--c-muted)] hover:bg-[var(--c-bg)] disabled:opacity-40"
                              >
                                Solicitar reembolso
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Suscripción escuela */}
                    {suscripcion.escuela && (
                      <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-[var(--c-text)]">Suscripción escuela</p>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            suscripcion.escuela.estado === "activa"
                              ? "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]"
                              : "bg-[color-mix(in_srgb,var(--c-muted)_15%,transparent)] text-[var(--c-muted)]"
                          }`}>
                            {suscripcion.escuela.estado}
                          </span>
                        </div>
                        <p className="text-2xl font-semibold text-[var(--c-text)] capitalize">{suscripcion.escuela.plan}</p>
                        <p className="text-xs text-[var(--c-muted)]">
                          Vence: {new Date(suscripcion.escuela.periodo_fin).toLocaleDateString("es-AR")}
                        </p>
                      </div>
                    )}

                    {/* Multiplicador */}
                    {suscripcion.multiplicador && (
                      <div className="bg-[color-mix(in_srgb,var(--c-success)_8%,transparent)] border border-[color-mix(in_srgb,var(--c-success)_20%,transparent)] rounded-xl px-4 py-3">
                        <p className="text-xs font-semibold text-[var(--c-success)]">Multiplicador activo</p>
                        <p className="text-xs text-[var(--c-muted)] mt-0.5">+15% de monedas en la economía del aula</p>
                      </div>
                    )}

                    {/* Límites */}
                    {limites && (
                      <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4">
                        <p className="text-xs font-medium text-[var(--c-muted)] mb-2">Límites del plan</p>
                        <div className="grid grid-cols-2 gap-1.5 text-xs text-[var(--c-text)]">
                          <span>Profesores: hasta {limites.max_profesores}</span>
                          <span>Directivos: hasta {limites.max_directivos}</span>
                          <span>Aulas activas: hasta {limites.max_aulas}</span>
                          <span>Alumnos/aula: hasta {limites.max_alumnos_por_aula}</span>
                        </div>
                      </div>
                    )}

                    {/* Formulario suscribirse */}
                    {!suscripcion.personal && suscripcion.paymentsEnabled && (
                      <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 space-y-3">
                        <p className="text-sm font-medium text-[var(--c-text)]">Activar suscripción</p>
                        <input
                          type="email"
                          placeholder="Tu email de MercadoPago"
                          className="w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-primary)]"
                          value={payerEmail}
                          onChange={(e) => setPayerEmail(e.target.value)}
                        />
                        <div className="flex flex-wrap gap-2">
                          {perfil.role === "USER" && (
                            <button
                              disabled={suscAccion === "loading"}
                              onClick={() => handleSuscribir("alumno")}
                              className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
                            >
                              Alumno — $1.000/mes
                            </button>
                          )}
                          {perfil.role === "TEACHER" && (
                            <button
                              disabled={suscAccion === "loading"}
                              onClick={() => handleSuscribir("profesor")}
                              className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
                            >
                              Expandir aulas — $150/mes
                            </button>
                          )}
                          {perfil.role === "DIRECTIVO" && (
                            <button
                              disabled={suscAccion === "loading"}
                              onClick={() => handleSuscribir("escuela")}
                              className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
                            >
                              Escuela — desde $300/mes
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {!suscripcion.paymentsEnabled && (
                      <p className="text-sm text-[var(--c-muted)]">
                        Los pagos están deshabilitados en este sistema. Contactá al administrador para gestionar tu suscripción.
                      </p>
                    )}

                    {suscMsg && (
                      <p className={`text-xs ${suscAccion === "error" ? "text-[var(--c-danger)]" : "text-[var(--c-success)]"}`}>
                        {suscMsg}
                      </p>
                    )}

                    {/* Historial de pagos */}
                    {historial.length > 0 && (
                      <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4">
                        <p className="text-sm font-medium text-[var(--c-text)] mb-3">Historial de pagos</p>
                        <div className="space-y-2">
                          {historial.slice(0, 5).map((pago) => (
                            <div key={pago.id} className="flex items-center justify-between text-xs">
                              <span className="text-[var(--c-muted)]">
                                {new Date(pago.created_at).toLocaleDateString("es-AR")}
                              </span>
                              <span className="text-[var(--c-text)] font-medium">
                                ${pago.monto.toLocaleString("es-AR")} {pago.moneda}
                              </span>
                              <span className={`rounded-full px-2 py-0.5 font-semibold ${
                                pago.estado === "pagado"
                                  ? "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]"
                                  : pago.estado === "reembolsado"
                                  ? "bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)]"
                                  : "bg-[color-mix(in_srgb,var(--c-muted)_15%,transparent)] text-[var(--c-muted)]"
                              }`}>
                                {pago.estado}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
            {/* ── TAB: APARIENCIA ── */}
            {activeTab === "apariencia" && availableThemes.length > 1 && (
              <div className="space-y-3">
                <p className="text-sm text-[var(--c-muted)]">
                  Elegí el tema visual de la plataforma.
                </p>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {THEME_OPTIONS.filter((opt) => availableThemes.some((t) => t.id === opt.id)).map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setTheme(opt.id)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                        theme === opt.id
                          ? "border-[var(--c-primary)] bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] ring-1 ring-[var(--c-primary)]"
                          : "border-[var(--c-border)] bg-[var(--c-surface)] hover:border-[var(--c-primary)]"
                      }`}
                    >
                      <span
                        className="w-6 h-6 rounded-full shrink-0 border border-black/10"
                        style={{ backgroundColor: THEME_SWATCH_COLORS[opt.id] ?? "#888" }}
                      />
                      <span className="text-sm font-medium text-[var(--c-text)]">{opt.name}</span>
                      {theme === opt.id && (
                        <span className="ml-auto text-xs font-semibold text-[var(--c-primary)]">Activo</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

// FIX-TEST4-ROLE-02 — banner que permite a un USER adulto
// solicitar un cambio de rol. El back valida la edad y la
// idempotencia (no duplica solicitudes pendientes).
function RoleSolicitudBanner({ currentRole }: { currentRole: string }) {
  const [open, setOpen] = useState(false);
  const [targetRole, setTargetRole] = useState<"TEACHER" | "PARENT" | "DIRECTIVO" | "ADMIN">("TEACHER");
  const [motivo, setMotivo] = useState("");
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  // Solo USER puede pedir (los demás roles no necesitan pedir).
  if (currentRole !== "USER") return null;

  const handleSubmit = async () => {
    setSending(true);
    setMsg(null);
    try {
      const res = await solicitarCambioRol({ targetRole, motivo });
      setMsg({
        kind: "ok",
        text: res.alreadyPending
          ? "Ya tenés una solicitud pendiente. El admin la revisará pronto."
          : "✓ Solicitud enviada. El admin la revisará pronto."
      });
      setOpen(false);
      setMotivo("");
    } catch (err) {
      setMsg({
        kind: "err",
        text: err instanceof Error ? err.message : "No se pudo enviar la solicitud."
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-xl border-2 border-[var(--c-primary)] bg-[color-mix(in_srgb,var(--c-primary)_5%,transparent)] p-4 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--c-text)]">
            ¿Querés cambiar tu rol?
          </p>
          <p className="text-xs text-[var(--c-muted)] mt-1">
            Si tenés más de 18 años y querés ser docente, padre/madre o directivo,
            podés solicitarlo acá. El admin revisará tu pedido.
          </p>
        </div>
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 transition-opacity shrink-0"
            data-testid="perfil-solicitar-rol"
          >
            Solicitar
          </button>
        )}
      </div>

      {open && (
        <div className="space-y-2">
          <label className="grid gap-1 text-xs font-medium text-[var(--c-text)]">
            Rol deseado
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value as "TEACHER" | "PARENT" | "DIRECTIVO" | "ADMIN")}
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
            >
              <option value="TEACHER">Docente</option>
              <option value="PARENT">Padre/Madre</option>
              <option value="DIRECTIVO">Directivo de escuela</option>
              <option value="ADMIN">Administrador</option>
            </select>
          </label>
          <label className="grid gap-1 text-xs font-medium text-[var(--c-text)]">
            Motivo (opcional)
            <textarea
              rows={2}
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              placeholder="Contale al admin por qué querés este rol."
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
            />
          </label>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => { setOpen(false); setMsg(null); }}
              disabled={sending}
              className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] disabled:opacity-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={sending}
              className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {sending ? "Enviando..." : "Enviar solicitud"}
            </button>
          </div>
        </div>
      )}

      {msg && (
        <p
          className={`text-xs ${
            msg.kind === "ok" ? "text-[var(--c-success)]" : "text-[var(--c-danger)]"
          }`}
        >
          {msg.text}
        </p>
      )}
    </div>
  );
}
