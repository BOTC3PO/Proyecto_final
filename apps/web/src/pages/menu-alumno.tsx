import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Award, Clock3, GraduationCap, Trophy } from "lucide-react";
import { useAuth } from "../auth/use-auth";
import { usePrimaryRole } from "../auth/use-roles";
import { apiGet } from "../lib/api";
import type { Module } from "../domain/module/module.types";
import { fetchTareas, type TareaResumen } from "../services/tareas";
import { useI18n } from "../i18n/I18nContext";

interface Student {
  name: string;
  initials: string;
  role: string;
}

interface NextClassInfo {
  title: string;
  time: string;
}

interface DashboardProps {
  student: Student;
  nextClass: NextClassInfo;
}

type ProgressItem = {
  moduloId: string;
  status: "iniciado" | "en_progreso" | "completado";
};

type ProgressUnlock = {
  moduloId: string;
  isLocked: boolean;
  missingDependencies: string[];
};

type ProgressResponse = {
  items: ProgressItem[];
  unlocks: ProgressUnlock[];
};

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string | number;
  label: string;
  hint?: string;
  hintColor?: "success" | "warning" | "muted";
}> = ({ icon, value, label, hint, hintColor = "muted" }) => {
  const hintClass = {
    success: "text-[var(--c-success)]",
    warning: "text-[var(--c-warning)]",
    muted:   "text-[var(--c-muted)]",
  }[hintColor];
  return (
    <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4">
      <div className="text-[var(--c-muted)] text-lg mb-2">{icon}</div>
      <p className="text-2xl font-semibold text-[var(--c-text)]">{value}</p>
      <p className="text-xs text-[var(--c-muted)] mt-1">{label}</p>
      {hint && <p className={`text-[10px] mt-1.5 ${hintClass}`}>{hint}</p>}
    </div>
  );
};

const ModuloRow: React.FC<{
  nombre: string;
  meta: string;
  pct: number;
  icon: React.ReactNode;
}> = ({ nombre, meta, pct, icon }) => {
  const pctColor = pct === 100
    ? "text-[var(--c-success)]"
    : pct > 0
    ? "text-[var(--c-accent)]"
    : "text-[var(--c-muted)]";
  const barColor = pct === 100
    ? "var(--c-success)"
    : pct > 0
    ? "var(--c-accent)"
    : "var(--c-border)";
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-[var(--c-border)] last:border-0 last:pb-0">
      <div className="w-8 h-8 rounded-lg bg-[var(--c-bg)] flex items-center justify-center text-[var(--c-muted)] flex-shrink-0 text-sm">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[var(--c-text)] truncate">{nombre}</p>
        <p className="text-xs text-[var(--c-muted)]">{meta}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className={`text-xs font-semibold ${pctColor}`}>{pct}%</p>
        <div className="w-14 h-0.5 bg-[var(--c-border)] rounded mt-1.5">
          <div
            className="h-full rounded"
            style={{ width: `${pct}%`, background: barColor }}
          />
        </div>
      </div>
    </div>
  );
};

const TareaRow: React.FC<{ tarea: TareaResumen }> = ({ tarea }) => {
  const vence = new Date(tarea.vence);
  const hoy = new Date();
  hoy.setHours(23, 59, 59, 0);
  const finSemana = new Date(hoy);
  finSemana.setDate(finSemana.getDate() + 7);

  const urgente = vence <= hoy;
  const estaSemana = !urgente && vence <= finSemana;

  const dotColor = urgente
    ? "bg-[var(--c-danger)]"
    : estaSemana
    ? "bg-[var(--c-warning)]"
    : "bg-[var(--c-success)]";
  const badgeCls = urgente
    ? "bg-[color-mix(in_srgb,var(--c-danger)_12%,transparent)] text-[var(--c-danger)]"
    : estaSemana
    ? "bg-[color-mix(in_srgb,var(--c-warning)_12%,transparent)] text-[var(--c-warning)]"
    : "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]";
  const badgeLabel = urgente ? "Urgente" : estaSemana ? "Esta semana" : "Sin urgencia";

  return (
    <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl px-3.5 py-2.5 flex items-center gap-2.5">
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[var(--c-text)] truncate">{tarea.titulo}</p>
        <p className="text-xs text-[var(--c-muted)]">{tarea.curso} · Vence {tarea.vence}</p>
      </div>
      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${badgeCls}`}>
        {badgeLabel}
      </span>
    </div>
  );
};

export const StudentDashboard: React.FC<DashboardProps> = ({ student, nextClass }) => {
  const { t } = useI18n();
  const { user } = useAuth();
  const [completedModules, setCompletedModules] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [modulesCount, setModulesCount] = useState(0);
  const [progressStatus, setProgressStatus] = useState<"loading" | "ready" | "error">("loading");
  const [progressError, setProgressError] = useState<string | null>(null);
  const [tareas, setTareas] = useState<TareaResumen[]>([]);
  const [tareasLoading, setTareasLoading] = useState(true);
  const [coins, setCoins] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    if (!user?.id) {
      setCompletedModules(0);
      setProgressPercent(0);
      setModulesCount(0);
      setProgressStatus("error");
      setProgressError("No se encontró un alumno autenticado.");
      return () => { active = false; };
    }
    setProgressStatus("loading");
    setProgressError(null);
    Promise.all([
      apiGet<{ items: Module[] }>("/api/modulos"),
      apiGet<ProgressResponse>(`/api/progreso?usuarioId=${user.id}`)
    ])
      .then(([modulesResponse, progressResponse]) => {
        if (!active) return;
        const completedSet = new Set(
          progressResponse.items.filter((item) => item.status === "completado").map((item) => item.moduloId)
        );
        const total = modulesResponse.items.length;
        const completedCount = modulesResponse.items.filter((module) => completedSet.has(module.id)).length;
        setCompletedModules(completedCount);
        setModulesCount(total);
        setProgressPercent(total === 0 ? 0 : Math.round((completedCount / total) * 100));
        setProgressStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setCompletedModules(0);
        setModulesCount(0);
        setProgressPercent(0);
        setProgressStatus("error");
        setProgressError(
          error instanceof Error ? error.message : "No se pudo cargar el progreso."
        );
      });
    return () => { active = false; };
  }, [user?.id]);

  useEffect(() => {
    let active = true;
    fetchTareas()
      .then((data) => { if (active) setTareas(data); })
      .catch(() => {})
      .finally(() => { if (active) setTareasLoading(false); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!user?.id) return;
    let active = true;
    apiGet<{ saldo: number }>(`/api/economia/saldos?usuarioId=${user.id}`)
      .then((res) => { if (active) setCoins(res.saldo); })
      .catch(() => {});
    return () => { active = false; };
  }, [user?.id]);

  const tareasUrgentes = useMemo(
    () => tareas.filter((t) => {
      const vence = new Date(t.vence);
      const hoy = new Date();
      hoy.setHours(23, 59, 59, 0);
      return vence <= hoy;
    }).length,
    [tareas]
  );

  return (
    <div className="page-root min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Saludo */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--c-muted)] mb-1">
            {new Date().toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </p>
          <h1 className="text-2xl font-semibold text-[var(--c-text)]">{t("menualumno.bienvenido")}<span className="text-[var(--c-primary)]">{student.name}</span>
          </h1>
          <p className="text-sm text-[var(--c-muted)] mt-1">
            Alumno · {completedModules} módulos completados
          </p>
        </div>

        {/* Próxima clase */}
        <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl px-5 py-4 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--c-success)]" />
              <span className="text-[10px] uppercase tracking-widest text-[var(--c-primary)] font-medium">{t("menuProfesor.proximaClase")}</span>
            </div>
            <p className="text-base font-semibold text-[var(--c-text)]">{nextClass.title}</p>
            <p className="text-xs text-[var(--c-muted)] mt-0.5">{t("common.hoy")}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-3xl font-semibold text-[var(--c-text)] tracking-tight">{nextClass.time}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard
            icon={<Trophy className="w-5 h-5" />}
            value={completedModules}
            label="Módulos completados"
            hint={progressStatus === "loading" ? "Cargando..." : `de ${modulesCount} en total`}
            hintColor="muted"
          />
          <StatCard
            icon={<GraduationCap className="w-5 h-5" />}
            value={`${progressPercent}%`}
            label="Progreso general"
            hint={progressPercent >= 50 ? "En camino" : "Seguí así"}
            hintColor={progressPercent >= 50 ? "success" : "warning"}
          />
          <StatCard
            icon={<Clock3 className="w-5 h-5" />}
            value={tareas.length}
            label="Tareas pendientes"
            hint={tareasUrgentes > 0 ? `${tareasUrgentes} vence${tareasUrgentes > 1 ? "n" : ""} hoy` : "Al día"}
            hintColor={tareasUrgentes > 0 ? "warning" : "success"}
          />
          <StatCard
            icon={<Award className="w-5 h-5" />}
            value={coins !== null ? coins.toLocaleString("es-AR") : "—"}
            label="Monedas"
            hint="Ciclo económico activo"
            hintColor="muted"
          />
        </div>

        {/* Dos columnas: módulos + tareas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Módulos */}
          <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-[var(--c-text)]">{t("menualumno.misModulos")}</p>
              <Link to="/modulos" className="text-xs text-[var(--c-primary)] hover:underline">{t("menualumno.verTodos")}</Link>
            </div>
            {progressStatus === "loading" && (
              <p className="text-xs text-[var(--c-muted)] py-4 text-center">{t("comun.cargando2")}</p>
            )}
            {progressStatus === "error" && (
              <p className="text-xs text-[var(--c-danger)] py-4 text-center">{progressError}</p>
            )}
            {progressStatus === "ready" && modulesCount === 0 && (
              <p className="text-xs text-[var(--c-muted)] py-4 text-center">{t("profesorAulaConfiguracion.sinModulosAsignados")}</p>
            )}
            {progressStatus === "ready" && modulesCount > 0 && (
              <div>
                <ModuloRow
                  nombre="Módulos completados"
                  meta={`${completedModules} de ${modulesCount}`}
                  pct={progressPercent}
                  icon={<Trophy className="w-4 h-4" />}
                />
              </div>
            )}
          </div>

          {/* Tareas */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-[var(--c-text)]">{t("tareas.tareasPendientes")}</p>
              <Link to="/tareas" className="text-xs text-[var(--c-primary)] hover:underline">{t("menuProfesor.verTodas")}</Link>
            </div>
            {tareasLoading && (
              <p className="text-xs text-[var(--c-muted)]">{t("comun.cargando2")}</p>
            )}
            {!tareasLoading && tareas.length === 0 && (
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl px-4 py-6 text-center">
                <p className="text-xs text-[var(--c-muted)]">{t("tareas.noHayTareasPendientes")}</p>
              </div>
            )}
            {!tareasLoading && tareas.length > 0 && (
              <div className="flex flex-col gap-2">
                {tareas.slice(0, 3).map((t) => (
                  <TareaRow key={t.id} tarea={t} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const { t } = useI18n();
  const { user } = useAuth();
  // FIX-BUG-ALU-02 — antes el role se hardcodeaba a "Alumno"
  // y el dashboard mostraba módulos completados del staff
  // (no del alumno). Ahora detectamos el rol real y, si es
  // staff en vista alumno, mostramos un banner "Vista previa"
  // para que el docente entienda que está viendo SU propio
  // progreso, no el de un alumno.
  const primary = usePrimaryRole();
  const isStaffView = primary !== null && primary !== "USER" && primary !== "PARENT";
  if (!user) return null;
  const initials = (user.name ?? "")
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "?";
  // Para USER real, mostramos "Alumno". Para staff en preview,
  // mostramos el rol real para que entienda que está viendo
  // SU cuenta.
  const roleLabel = isStaffView ? (primary ?? "Staff") : "Alumno";
  return (
    <>
      {isStaffView && (
        <div
          data-testid="menu-alumno-preview-banner"
          className="sticky top-0 z-30 bg-amber-50 border-b border-amber-200 px-4 py-2 text-center text-xs text-amber-800"
          role="status"
        >
          👀 Estás viendo la vista previa de alumno. Los datos
          que ves son tuyos como {roleLabel.toLowerCase()}, no
          los de un alumno real.{" "}
          <Link
            to={primary === "TEACHER" ? "/profesor" : primary === "DIRECTIVO" ? "/enterprise" : "/admin"}
            className="font-semibold underline"
          >{t("menualumno.volverATuPanel")}</Link>
        </div>
      )}
      <StudentDashboard
        student={{ name: user.name, initials, role: roleLabel }}
        nextClass={{ title: "—", time: "—" }}
      />
    </>
  );
}
