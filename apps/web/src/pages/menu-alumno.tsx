import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MVP_MODULES } from "../mvp/mvpData";
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
  completedModules: number;
  progressPercent: number;
}

type ModuleCard = {
  id: string;
  title: string;
  description: string;
  level: string;
  durationMinutes: number;
  category: string;
  isLocked: boolean;
  isCompleted: boolean;
};

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
  <div className="bg-white rounded-xl shadow flex items-center gap-4 p-5">
    <div className="w-14 h-14 rounded-full bg-blue-600 text-white grid place-content-center font-semibold select-none">
      {student.initials}
    </div>
    <div className="flex-1">
      <h2 className="text-xl font-semibold">{student.name}</h2>
      <p className="text-gray-600">{student.role}</p>
    </div>
    <div className="flex items-center gap-5 text-gray-800">
      <button className="p-2" title="Notificaciones">🔔</button>
      <a className="flex items-center gap-2 hover:underline" href="#">👤 Perfil</a>
    </div>
  </div>
);

const InfoCard: React.FC<{ icon: string; label: string; value: string | number }> = ({ icon, label, value }) => (
  <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
    <div className="text-3xl">{icon}</div>
    <div>
      <p className="text-gray-500">{label}</p>
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
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex items-center gap-3">
        <div className="text-3xl">🎓</div>
        <p className="text-gray-600">{label}</p>
      </div>
      <div className="mt-3 h-3 w-80 max-w-full bg-gray-200 rounded">
        <div className="h-3 bg-gray-400 rounded" style={{ width: `${clamped}%` }} />
      </div>
      <p className="mt-2 text-sm text-gray-500">{clamped}%</p>
    </div>
  );
};

export const StudentDashboard: React.FC<DashboardProps> = ({ student, nextClass }) => {
  const [modules, setModules] = useState<ModuleCard[]>(() =>
    MVP_MODULES.map((module) => ({
      ...module,
      isLocked: false,
      isCompleted: Boolean(module.progressPercent && module.progressPercent >= 100)
    }))
  );
  const [completedModules, setCompletedModules] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    let active = true;
    const usuarioId = "demo-alumno";
    Promise.all([apiGet<{ items: Module[] }>("/api/modulos"), apiGet<ProgressResponse>(`/api/progreso?usuarioId=${usuarioId}`)])
      .then(([modulesResponse, progressResponse]) => {
        if (!active) return;
        const completedSet = new Set(
          progressResponse.items.filter((item) => item.status === "completado").map((item) => item.moduloId)
        );
        const lockMap = new Map(progressResponse.unlocks.map((unlock) => [unlock.moduloId, unlock.isLocked]));
        const mapped = modulesResponse.items.map((module) => ({
          id: module.id,
          title: module.title,
          description: module.description,
          level: module.level,
          durationMinutes: module.durationMinutes,
          category: module.category,
          isLocked: lockMap.get(module.id) ?? false,
          isCompleted: completedSet.has(module.id)
        }));
        const total = mapped.length || 1;
        const completedCount = mapped.filter((module) => module.isCompleted).length;
        setCompletedModules(completedCount);
        setProgressPercent(Math.round((completedCount / total) * 100));
        setModules(mapped);
      })
      .catch(() => {
        if (!active) return;
        const completedCount = MVP_MODULES.filter((module) => module.progressPercent && module.progressPercent >= 100).length;
        setCompletedModules(completedCount);
        setProgressPercent(Math.round((completedCount / (MVP_MODULES.length || 1)) * 100));
        setModules(
          MVP_MODULES.map((module) => ({
            ...module,
            isLocked: Boolean(module.progressPercent === 0),
            isCompleted: Boolean(module.progressPercent && module.progressPercent >= 100)
          }))
        );
      });
    return () => {
      active = false;
    };
  }, []);

  const progressLabel = useMemo(() => `${completedModules} módulos completados`, [completedModules]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-1">
        <Container className="py-6 space-y-5">
          <ProfileCard student={student} />
          <div className="grid gap-5 sm:grid-cols-2">
            <InfoCard icon="🕒" label="Próxima Clase" value={`${nextClass.title} - ${nextClass.time}`} />
            <InfoCard icon="🏆" label="Módulos completos" value={`${completedModules} Módulos`} />
          </div>
          <ProgressBar percent={progressPercent} label={progressLabel} />
          <section className="bg-white rounded-xl shadow p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Módulos recomendados</h3>
              <button className="text-sm text-blue-600 hover:underline">Ver biblioteca</button>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {modules.map((module) => (
                <article key={module.id} className="rounded-lg border border-gray-200 p-4">
                  <p className="text-xs uppercase text-gray-500">{module.category}</p>
                  <h4 className="mt-2 font-semibold">{module.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{module.description}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                    <span>{module.level}</span>
                    <span>{module.durationMinutes} min</span>
                  </div>
                  {module.isLocked ? (
                    <button
                      className="mt-4 w-full rounded-md px-3 py-2 text-sm text-white bg-gray-400 cursor-not-allowed"
                      disabled
                    >
                      Bloqueado
                    </button>
                  ) : (
                    <Link
                      className="mt-4 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm text-white"
                      to={`/modulos/${module.id}/jugar`}
                    >
                      {module.isCompleted ? "Revisar" : "Continuar"}
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
};

const demoProps: DashboardProps = {
  student: { name: "Ana García", initials: "AG", role: "Alumno" },
  nextClass: { title: "Matemáticas 1°A", time: "10:30" },
  completedModules: 3,
  progressPercent: 33,
};

export default function Page() {
  return <StudentDashboard {...demoProps} />;
}
