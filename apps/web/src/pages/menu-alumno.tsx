import React from "react";

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

const ProgressBar: React.FC<{ percent: number; label?: string }> = ({ percent, label = "Progreso general de la próxima clase" }) => {
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

export const StudentDashboard: React.FC<DashboardProps> = ({ student, nextClass, completedModules, progressPercent }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-1">
        <Container className="py-6 space-y-5">
          <ProfileCard student={student} />
          <div className="grid gap-5 sm:grid-cols-2">
            <InfoCard icon="🕒" label="Próxima Clase" value={`${nextClass.title} - ${nextClass.time}`} />
            <InfoCard icon="🏆" label="Módulos completos" value={`${completedModules} Módulos`} />
          </div>
          <ProgressBar percent={progressPercent} />
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