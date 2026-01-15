import React, { useEffect, useMemo, useState } from "react";
import { Bell, Clock3, GraduationCap, Trophy, UserCircle2 } from "lucide-react";
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
  <div className="bg-white rounded-2xl shadow flex flex-wrap items-center gap-4 p-6">
    <div className="w-14 h-14 rounded-full bg-blue-600 text-white grid place-content-center font-semibold select-none">
      {student.initials}
    </div>
    <div className="flex-1 min-w-[200px]">
      <h2 className="text-xl font-semibold">{student.name}</h2>
      <p className="text-gray-600">{student.role}</p>
    </div>
    <div className="flex items-center gap-5 text-gray-800">
      <button className="p-2" title="Notificaciones">
        <Bell className="h-6 w-6" />
      </button>
      <a className="flex items-center gap-2 hover:underline" href="#">
        <UserCircle2 className="h-6 w-6" />
        Perfil
      </a>
    </div>
  </div>
);

const InfoCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
  <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
    <div className="h-12 w-12 rounded-full border border-gray-200 grid place-content-center text-gray-700">
      {icon}
    </div>
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
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full border border-gray-200 grid place-content-center text-gray-700">
          <GraduationCap className="h-6 w-6" />
        </div>
        <p className="text-gray-600">{label}</p>
      </div>
      <div className="mt-4 h-3 w-80 max-w-full bg-gray-200 rounded">
        <div className="h-3 bg-gray-400 rounded" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
};

export const StudentDashboard: React.FC<DashboardProps> = ({ student, nextClass }) => {
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
        const total = modulesResponse.items.length || 1;
        const completedCount = modulesResponse.items.filter((module) => completedSet.has(module.id)).length;
        setCompletedModules(completedCount);
        setProgressPercent(Math.round((completedCount / total) * 100));
      })
      .catch(() => {
        if (!active) return;
        const completedCount = MVP_MODULES.filter((module) => module.progressPercent && module.progressPercent >= 100).length;
        setCompletedModules(completedCount);
        setProgressPercent(Math.round((completedCount / (MVP_MODULES.length || 1)) * 100));
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
          <div className="space-y-5">
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
            <ProgressBar percent={progressPercent} label={progressLabel} />
          </div>
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
