import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { solicitarCambioRol } from "../services/roles";
import { crearCuentaAlumnoPadre, crearCuentaPadreAlumno } from "../services/padres";
import { crearCuentaAlumnoStaff, vincularCuentaAlumnoStaff } from "../services/cuenta-alumno-staff";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import { useTheme, THEME_OPTIONS } from "../theme/ThemeContext";
import { resolveMateria } from "../domain/module/materia";

type TipoDestino = "ALUMNO" | "PRINCIPAL" | "PADRE" | "ALUMNO_HIJO";

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
  // FASE 5 + FASE 6 — vínculo a la cuenta espejo/vinculada.
  //   - PADRE: el destino es la cuenta de padre del alumno (FASE 6).
  //   - ALUMNO: el destino es la cuenta espejo del padre (FASE 5).
  //   - PRINCIPAL: este user es el espejo y el destino es el principal.
  //   - ALUMNO_HIJO: este user es el padre y el destino es el alumno.
  cuentaVinculada?: { destinoUsuarioId: string; tipoDestino: TipoDestino } | null;
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
  const [activeTab, setActiveTab] = useState<"perfil" | "progreso" | "logros" | "apariencia">("perfil");
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
          const materia = resolveMateria(m);
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
                ...(availableThemes.length > 1
                  ? [{ key: "apariencia" as const, label: "Apariencia" }]
                  : []),
              ] as { key: "perfil" | "progreso" | "logros" | "apariencia"; label: string }[]).map(({ key, label }) => (
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

                {/* Mi cuenta de alumno — espejo opt-in (solo PARENT) */}
                {perfil.role === "PARENT" && (
                  <MiCuentaAlumnoCard
                    tieneEspejo={perfil.cuentaVinculada?.tipoDestino === "ALUMNO"}
                  />
                )}

                {/* FASE 4 — Mi cuenta de alumno (staff): crear o vincular una
                    existente. Resuelve el caso del staff sin espejo, que al
                    "Ver como alumno" caía a /login. */}
                {(perfil.role === "TEACHER" || perfil.role === "DIRECTIVO" || perfil.role === "ADMIN") && (
                  <MiCuentaAlumnoStaffCard
                    tieneEspejo={perfil.cuentaVinculada?.tipoDestino === "ALUMNO"}
                  />
                )}

                {/* FASE 6 — Mi cuenta de padre (autoservicio, solo USER).
                    Distinta del RoleSolicitudBanner de arriba: este
                    botón CREA la cuenta de padre (no la pide al admin
                    ni reemplaza el rol USER). */}
                {perfil.role === "USER" && (
                  <MiCuentaPadreCard
                    tienePadre={perfil.cuentaVinculada?.tipoDestino === "PADRE"}
                  />
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
                      data-theme={opt.id}
                      onClick={() => setTheme(opt.id)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                        theme === opt.id
                          ? "border-[var(--c-primary)] bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] ring-1 ring-[var(--c-primary)]"
                          : "border-[var(--c-border)] bg-[var(--c-surface)] hover:border-[var(--c-primary)]"
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full shrink-0 border border-black/10"
                        style={{ backgroundColor: "var(--c-primary)" }}
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

// FASE 5 — espejo opt-in del padre. El padre NO recibe su cuenta de
// alumno en el registro: la crea acá on-demand si quiere estudiar.
// Una vez creada, "Entrar como alumno" dispara el switch (mismo
// mecanismo que el staff) y aterriza en el panel de alumno.
function MiCuentaAlumnoCard({ tieneEspejo }: { tieneEspejo: boolean }) {
  const { switchCuenta } = useAuth();
  const navigate = useNavigate();
  // Estado local: refleja si el espejo ya existe (al cargar o tras crearlo).
  const [existe, setExiste] = useState(tieneEspejo);
  const [creando, setCreando] = useState(false);
  const [entrando, setEntrando] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  const handleCrear = async () => {
    setCreando(true);
    setMsg(null);
    try {
      const res = await crearCuentaAlumnoPadre();
      setExiste(true);
      setMsg({
        kind: "ok",
        text: res.created
          ? "✓ Tu cuenta de alumno está lista. Ya podés entrar como alumno."
          : "Ya tenías una cuenta de alumno. Ya podés entrar como alumno.",
      });
    } catch (err) {
      setMsg({
        kind: "err",
        text: err instanceof Error ? err.message : "No se pudo crear la cuenta de alumno.",
      });
    } finally {
      setCreando(false);
    }
  };

  const handleEntrar = async () => {
    setEntrando(true);
    setMsg(null);
    try {
      const { landing } = await switchCuenta();
      navigate(landing);
    } catch (err) {
      setEntrando(false);
      setMsg({
        kind: "err",
        text: err instanceof Error ? err.message : "No se pudo entrar como alumno.",
      });
    }
  };

  return (
    <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 space-y-2">
      <p className="text-sm font-medium text-[var(--c-text)]">Mi cuenta de alumno</p>
      <p className="text-xs text-[var(--c-muted)]">
        Además de monitorear a tus hijos, podés tener tu propia cuenta de
        alumno para estudiar. Es opcional y separada de tu cuenta de padre.
      </p>
      <div className="pt-1">
        {existe ? (
          <button
            onClick={handleEntrar}
            disabled={entrando}
            data-testid="padre-entrar-como-alumno"
            className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {entrando ? "Entrando…" : "Entrar como alumno"}
          </button>
        ) : (
          <button
            onClick={handleCrear}
            disabled={creando}
            data-testid="padre-crear-cuenta-alumno"
            className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {creando ? "Creando…" : "Crear mi cuenta de alumno"}
          </button>
        )}
      </div>
      {msg && (
        <p className={`text-xs ${msg.kind === "ok" ? "text-[var(--c-success)]" : "text-[var(--c-danger)]"}`}>
          {msg.text}
        </p>
      )}
    </div>
  );
}

// FASE 4 — cuenta de alumno para STAFF. Resuelve el caso del staff sin
// espejo (que al "Ver como alumno" caía a /login): puede crear su cuenta
// de alumno o vincular una cuenta USER existente. Una vez que existe,
// "Entrar como alumno" dispara el switch (mismo mecanismo que el padre).
function MiCuentaAlumnoStaffCard({ tieneEspejo }: { tieneEspejo: boolean }) {
  const { switchCuenta } = useAuth();
  const navigate = useNavigate();
  const [existe, setExiste] = useState(tieneEspejo);
  const [busy, setBusy] = useState<null | "crear" | "vincular" | "entrar">(null);
  const [ident, setIdent] = useState("");
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  const handleCrear = async () => {
    setBusy("crear");
    setMsg(null);
    try {
      const res = await crearCuentaAlumnoStaff();
      setExiste(true);
      setMsg({
        kind: "ok",
        text: res.created
          ? "✓ Tu cuenta de alumno está lista. Ya podés entrar como alumno."
          : "Ya tenías una cuenta de alumno. Ya podés entrar como alumno.",
      });
    } catch (err) {
      setMsg({ kind: "err", text: err instanceof Error ? err.message : "No se pudo crear la cuenta de alumno." });
    } finally {
      setBusy(null);
    }
  };

  const handleVincular = async () => {
    if (!ident.trim()) return;
    setBusy("vincular");
    setMsg(null);
    try {
      await vincularCuentaAlumnoStaff(ident.trim());
      setExiste(true);
      setMsg({ kind: "ok", text: "✓ Cuenta de alumno vinculada. Ya podés entrar como alumno." });
    } catch (err) {
      setMsg({ kind: "err", text: err instanceof Error ? err.message : "No se pudo vincular la cuenta." });
    } finally {
      setBusy(null);
    }
  };

  const handleEntrar = async () => {
    setBusy("entrar");
    setMsg(null);
    try {
      const { landing } = await switchCuenta();
      navigate(landing);
    } catch (err) {
      setBusy(null);
      setMsg({ kind: "err", text: err instanceof Error ? err.message : "No se pudo entrar como alumno." });
    }
  };

  return (
    <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 space-y-2">
      <p className="text-sm font-medium text-[var(--c-text)]">Mi cuenta de alumno</p>
      <p className="text-xs text-[var(--c-muted)]">
        Te deja previsualizar la experiencia del estudiante. Podés crear una
        cuenta de alumno nueva o vincular una cuenta existente (por usuario o
        email).
      </p>
      {existe ? (
        <div className="pt-1">
          <button
            onClick={handleEntrar}
            disabled={busy === "entrar"}
            data-testid="staff-entrar-como-alumno"
            className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {busy === "entrar" ? "Entrando…" : "Entrar como alumno"}
          </button>
        </div>
      ) : (
        <div className="space-y-2 pt-1">
          <button
            onClick={handleCrear}
            disabled={busy === "crear"}
            data-testid="staff-crear-cuenta-alumno"
            className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {busy === "crear" ? "Creando…" : "Crear mi cuenta de alumno"}
          </button>
          <div className="flex items-center gap-2">
            <input
              value={ident}
              onChange={(e) => setIdent(e.target.value)}
              placeholder="usuario o email del alumno"
              className="flex-1 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-1.5 text-xs text-[var(--c-text)]"
            />
            <button
              onClick={handleVincular}
              disabled={busy === "vincular" || !ident.trim()}
              data-testid="staff-vincular-cuenta-alumno"
              className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-semibold text-[var(--c-text)] hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {busy === "vincular" ? "Vinculando…" : "Vincular existente"}
            </button>
          </div>
        </div>
      )}
      {msg && (
        <p className={`text-xs ${msg.kind === "ok" ? "text-[var(--c-success)]" : "text-[var(--c-danger)]"}`}>
          {msg.text}
        </p>
      )}
    </div>
  );
}

// FASE 6 — autoservicio alumno → cuenta de padre. El alumno
// adulto (USER, 18+) puede crear su cuenta de padre acá sin
// pasar por `solicitar-rol` ni esperar aprobación de admin.
// Esto es ADITIVO: el alumno conserva su rol USER y la nueva
// cuenta queda apuntada por un `CuentaVinculada` simétrico.
// Una vez creada, "Entrar como padre" dispara el switch
// (mismo mecanismo que Fases 2/3) y aterriza en /padre.
function MiCuentaPadreCard({ tienePadre }: { tienePadre: boolean }) {
  const { switchCuenta } = useAuth();
  const navigate = useNavigate();
  // Estado local: refleja si el padre ya existe (al cargar o tras crearlo).
  const [existe, setExiste] = useState(tienePadre);
  const [creando, setCreando] = useState(false);
  const [entrando, setEntrando] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  const handleCrear = async () => {
    setCreando(true);
    setMsg(null);
    try {
      const res = await crearCuentaPadreAlumno();
      setExiste(true);
      setMsg({
        kind: "ok",
        text: res.created
          ? "✓ Tu cuenta de padre está lista. Ya podés entrar como padre."
          : "Ya tenías una cuenta de padre. Ya podés entrar como padre.",
      });
    } catch (err) {
      setMsg({
        kind: "err",
        text: err instanceof Error ? err.message : "No se pudo crear la cuenta de padre.",
      });
    } finally {
      setCreando(false);
    }
  };

  const handleEntrar = async () => {
    setEntrando(true);
    setMsg(null);
    try {
      const { landing } = await switchCuenta();
      navigate(landing);
    } catch (err) {
      setEntrando(false);
      setMsg({
        kind: "err",
        text: err instanceof Error ? err.message : "No se pudo entrar como padre.",
      });
    }
  };

  return (
    <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 space-y-2">
      <p className="text-sm font-medium text-[var(--c-text)]">Mi cuenta de padre</p>
      <p className="text-xs text-[var(--c-muted)]">
        Además de estudiar, podés tener tu propia cuenta de padre
        para monitorear a tus hijos. Es opcional, separada de tu
        cuenta de alumno y se activa al instante (no requiere
        aprobación de un admin).
      </p>
      <div className="pt-1">
        {existe ? (
          <button
            onClick={handleEntrar}
            disabled={entrando}
            data-testid="alumno-entrar-como-padre"
            className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {entrando ? "Entrando…" : "Entrar como padre"}
          </button>
        ) : (
          <button
            onClick={handleCrear}
            disabled={creando}
            data-testid="alumno-crear-cuenta-padre"
            className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {creando ? "Creando…" : "Crear mi cuenta de padre"}
          </button>
        )}
      </div>
      {msg && (
        <p className={`text-xs ${msg.kind === "ok" ? "text-[var(--c-success)]" : "text-[var(--c-danger)]"}`}>
          {msg.text}
        </p>
      )}
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
