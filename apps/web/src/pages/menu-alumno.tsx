import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Award, Bell, Clock3, GraduationCap, Trophy, UserCircle2 } from "lucide-react";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Module } from "../domain/module/module.types";

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

const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const ProfileCard: React.FC<{ student: Student }> = ({ student }) => (
  <div className="bg-[var(--c-surface)] rounded-2xl shadow flex flex-wrap items-center gap-4 p-6">
    <div className="w-14 h-14 rounded-full bg-[var(--c-primary)] text-white grid place-content-center font-semibold select-none">
      {student.initials}
    </div>
    <div className="flex-1 min-w-[200px]">
      <h2 className="text-xl font-semibold">{student.name}</h2>
      <p className="text-[var(--c-muted)]">{student.role}</p>
    </div>
    <div className="flex items-center gap-5 text-[var(--c-text)]">
      <button className="p-2" title="Notificaciones" aria-label="Notificaciones">
        <Bell className="h-6 w-6" aria-hidden="true" />
      </button>
      <Link className="flex items-center gap-2 hover:underline" to="/progreso">
        <UserCircle2 className="h-6 w-6" />
        Perfil
      </Link>
    </div>
  </div>
);

const InfoCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
  <div className="bg-[var(--c-surface)] rounded-2xl shadow p-6 flex items-center gap-4">
    <div className="h-12 w-12 rounded-full border border-[var(--c-border)] grid place-content-center text-[var(--c-text)]">
      {icon}
    </div>
    <div>
      <p className="text-[var(--c-muted)]">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const ProgressBar: React.FC<{ percent: number; label?: string }> = ({
  percent,
  label = "Progreso general de la próxima clase"
}) => {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));
  return (
    <div className="bg-[var(--c-surface)] rounded-2xl shadow p-6">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full border border-[var(--c-border)] grid place-content-center text-[var(--c-text)]">
          <GraduationCap className="h-6 w-6" />
        </div>
        <p className="text-[var(--c-muted)]">{label}</p>
      </div>
      <div className="mt-4 h-3 w-80 max-w-full bg-[var(--c-border)] rounded">
        <div className="h-3 bg-[var(--c-muted)] rounded" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
};

export const StudentDashboard: React.FC<DashboardProps> = ({ student, nextClass }) => {
  const { user } = useAuth();
  const [completedModules, setCompletedModules] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [modulesCount, setModulesCount] = useState(0);
  const [progressStatus, setProgressStatus] = useState<"loading" | "ready" | "error">("loading");
  const [progressError, setProgressError] = useState<string | null>(null);
  const [benefitsStatus, setBenefitsStatus] = useState<"loading" | "active" | "inactive" | "error">("loading");
  const [benefitsError, setBenefitsError] = useState<string | null>(null);

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
    if (!user?.id) {
      setBenefitsStatus("error");
      setBenefitsError("No se encontró un alumno autenticado.");
      return () => { active = false; };
    }
    setBenefitsStatus("loading");
    setBenefitsError(null);
    apiGet<{ active: boolean }>("/api/beneficios/estado")
      .then((response) => {
        if (!active) return;
        setBenefitsStatus(response.active ? "active" : "inactive");
      })
      .catch((error) => {
        if (!active) return;
        setBenefitsStatus("error");
        setBenefitsError(error instanceof Error ? error.message : "No se pudo validar beneficios.");
      });
    return () => { active = false; };
  }, [user?.id]);

  const progressLabel = useMemo(() => `${completedModules} módulos completados`, [completedModules]);

  const benefitsValue = useMemo(() => {
    switch (benefitsStatus) {
      case "active":   return "Vigentes";
      case "inactive": return "No vigentes";
      case "error":    return "Sin información";
      case "loading":
      default:         return "Verificando...";
    }
  }, [benefitsStatus]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--c-bg)]">
      <main className="flex-1">
        <Container className="py-6 space-y-5">
          <ProfileCard student={student} />
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link className="rounded-2xl bg-[var(--c-surface)] p-4 shadow transition hover:shadow-md" to="/clases">
              <p className="text-xs uppercase tracking-wide text-[var(--c-muted)]">Aprendizaje</p>
              <p className="mt-2 text-lg font-semibold text-[var(--c-text)]">Mis clases</p>
              <p className="mt-1 text-sm text-[var(--c-muted)]">Accedé al aula y contenidos.</p>
            </Link>
            <Link className="rounded-2xl bg-[var(--c-surface)] p-4 shadow transition hover:shadow-md" to="/tareas">
              <p className="text-xs uppercase tracking-wide text-[var(--c-muted)]">Actividad</p>
              <p className="mt-2 text-lg font-semibold text-[var(--c-text)]">Tareas</p>
              <p className="mt-1 text-sm text-[var(--c-muted)]">Revisá pendientes y entregas.</p>
            </Link>
            <Link className="rounded-2xl bg-[var(--c-surface)] p-4 shadow transition hover:shadow-md" to="/encuestas">
              <p className="text-xs uppercase tracking-wide text-[var(--c-muted)]">Feedback</p>
              <p className="mt-2 text-lg font-semibold text-[var(--c-text)]">Encuestas</p>
              <p className="mt-1 text-sm text-[var(--c-muted)]">Respondé evaluaciones rápidas.</p>
            </Link>
            <Link className="rounded-2xl bg-[var(--c-surface)] p-4 shadow transition hover:shadow-md" to="/progreso">
              <p className="text-xs uppercase tracking-wide text-[var(--c-muted)]">Seguimiento</p>
              <p className="mt-2 text-lg font-semibold text-[var(--c-text)]">Progreso</p>
              <p className="mt-1 text-sm text-[var(--c-muted)]">Mirá tu avance general.</p>
            </Link>
          </section>
          <div className="space-y-5">
            {progressStatus === "loading" && (
              <p className="text-sm text-[var(--c-muted)]">Cargando progreso...</p>
            )}
            {progressStatus === "error" && progressError && (
              <p className="text-sm text-[var(--c-danger)]">{progressError}</p>
            )}
            {benefitsStatus === "error" && benefitsError && (
              <p className="text-sm text-[var(--c-danger)]">{benefitsError}</p>
            )}
            {progressStatus === "ready" && modulesCount === 0 && (
              <p className="text-sm text-[var(--c-muted)]">Todavía no tenés módulos asignados.</p>
            )}
            <InfoCard
              icon={<Clock3 className="h-6 w-6" />}
              label="Próxima Clase"
              value={`${nextClass.title} - ${nextClass.time}`}
            />
            <InfoCard
              icon={<Trophy className="h-6 w-6 text-yellow-500" />}
              label="Módulos completos"
              value={`${completedModules} Módulos`}
            />
            <InfoCard
              icon={<Award className="h-6 w-6 text-emerald-600" />}
              label="Beneficios vigentes"
              value={benefitsValue}
            />
            <ProgressBar percent={progressPercent} label={progressLabel} />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default function Page() {
  const { user } = useAuth();
  if (!user) return null;
  const initials = user.name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <StudentDashboard
      student={{ name: user.name, initials, role: "Alumno" }}
      nextClass={{ title: "—", time: "—" }}
    />
  );
}
