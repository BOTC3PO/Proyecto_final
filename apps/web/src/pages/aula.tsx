import { useEffect, useMemo, useState } from "react";
import {
  MVP_LEADERBOARD,
  MVP_MODULES,
  MVP_PUBLICATIONS,
  MVP_UPCOMING_ACTIVITIES,
} from "../mvp/mvpData";
import { apiGet } from "../lib/api";
import type { Module } from "../domain/module/module.types";
import { useAuth } from "../auth/use-auth";

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

type ClassModuleProgress = {
  id: string;
  title: string;
  progressPercent: number;
  isLocked: boolean;
};

const teacherTools = [
  "Informes y Estadísticas",
  "Rendimiento por módulo",
  "Progreso individual",
  "Informe mensual",
  "Alertas de rendimiento",
  "Gestionar módulos",
  "Configurar juegos",
  "Ver estadísticas",
  "Ajustes TTS",
];

export default function aula() {
  const { user } = useAuth();
  const [classProgress, setClassProgress] = useState<ClassModuleProgress[]>(() =>
    MVP_MODULES.map((module) => ({
      id: module.id,
      title: module.title,
      progressPercent: module.progressPercent ?? 0,
      isLocked: module.progressPercent === 0,
    }))
  );

  useEffect(() => {
    let active = true;
    const usuarioId = "demo-alumno";
    Promise.all([apiGet<{ items: Module[] }>("/api/modulos"), apiGet<ProgressResponse>(`/api/progreso?usuarioId=${usuarioId}`)])
      .then(([modulesResponse, progressResponse]) => {
        if (!active) return;
        const completedSet = new Set(
          progressResponse.items.filter((item) => item.status === "completado").map((item) => item.moduloId)
        );
        const inProgressSet = new Set(
          progressResponse.items.filter((item) => item.status === "en_progreso").map((item) => item.moduloId)
        );
        const lockMap = new Map(progressResponse.unlocks.map((unlock) => [unlock.moduloId, unlock.isLocked]));
        const mapped = modulesResponse.items.map((module) => ({
          id: module.id,
          title: module.title,
          isLocked: lockMap.get(module.id) ?? false,
          progressPercent: completedSet.has(module.id) ? 100 : inProgressSet.has(module.id) ? 50 : 0,
        }));
        setClassProgress(mapped);
      })
      .catch(() => {
        if (!active) return;
        setClassProgress(
          MVP_MODULES.map((module) => ({
            id: module.id,
            title: module.title,
            progressPercent: module.progressPercent ?? 0,
            isLocked: Boolean(module.progressPercent === 0),
          }))
        );
      });
    return () => {
      active = false;
    };
  }, []);

  const roleLabel = useMemo(() => {
    if (!user) return "Invitado";
    if (user.role === "TEACHER") return "Docente";
    if (user.role === "USER") return "Estudiante";
    if (user.role === "PARENT") return "Familia";
    return "Invitado";
  }, [user]);

  const accessLabel = useMemo(() => {
    if (user?.role === "USER") return "estudiante";
    if (user?.role === "PARENT") return "familiar";
    return "visitante";
  }, [user]);

  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-blue-600 text-white rounded-xl h-28 relative">
          <div className="absolute left-5 bottom-3 text-sm">
            {roleLabel} • Prof. Juan Pérez | Código de clase: MAT3A-2024
          </div>
          {user?.role === "TEACHER" ? (
            <button className="absolute right-5 bottom-3 bg-white text-blue-700 px-4 py-1.5 rounded-md shadow">
              Gestionar
            </button>
          ) : (
            <div className="absolute right-5 bottom-3 rounded-md bg-blue-500/60 px-3 py-1.5 text-xs">
              Acceso {accessLabel}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-content-center">JP</div>
                <input
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Escribe una novedad..."
                />
                <button className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-md">Publicar</button>
              </div>
              <div className="flex items-center gap-3 mt-3 text-gray-600">
                <button className="p-2 hover:bg-gray-100 rounded">📎</button>
                <button className="p-2 hover:bg-gray-100 rounded">🖼️</button>
              </div>
            </div>

            <div className="space-y-4">
              {MVP_PUBLICATIONS.map((publication) => (
                <article key={publication.id} className="bg-white rounded-xl shadow p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-content-center">
                      {publication.authorInitials}
                    </div>
                    <div className="font-semibold">{publication.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-gray-800">{publication.body}</p>
                  {publication.links && (
                    <div className="flex gap-6 mt-3">
                      {publication.links.map((link) => (
                        <a key={link.label} className="text-blue-600 hover:underline" href={link.href}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-2">{publication.publishedAtLabel}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">🏆 Top Estudiantes</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {MVP_LEADERBOARD.map((entry, index) => (
                  <li key={entry.id} className="flex justify-between">
                    <span>
                      {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"} {entry.name}
                    </span>
                    <span>{entry.points} pts</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">Progreso de la clase</h3>
              <div className="mt-3 space-y-3 text-sm">
                {classProgress.map((module) => (
                  <div key={module.id}>
                    <div className="flex justify-between items-center">
                      <span>{module.title}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          module.isLocked
                            ? "bg-gray-100 text-gray-500"
                            : module.progressPercent >= 100
                            ? "bg-green-100 text-green-700"
                            : module.progressPercent > 0
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {module.isLocked
                          ? "Bloqueado"
                          : module.progressPercent >= 100
                          ? "Completado"
                          : module.progressPercent > 0
                          ? "En progreso"
                          : "Sin iniciar"}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className={`h-2 rounded ${
                          module.isLocked
                            ? "bg-gray-400"
                            : module.progressPercent >= 100
                            ? "bg-green-500"
                            : module.progressPercent > 0
                            ? "bg-blue-500"
                            : "bg-gray-400"
                        }`}
                        style={{ width: `${module.progressPercent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">Próximas actividades</h3>
              <ul className="mt-3 text-sm space-y-2">
                {MVP_UPCOMING_ACTIVITIES.map((activity) => (
                  <li key={activity.id}>
                    {activity.label} — <span className="text-gray-600">{activity.when}</span>
                  </li>
                ))}
              </ul>
            </div>

            {user?.role === "TEACHER" && (
              <div className="bg-white rounded-xl shadow p-4">
                <h3 className="text-lg font-semibold">Herramientas del profesor</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {teacherTools.map((tool) => (
                    <li key={tool}>
                      <a className="hover:underline" href="#">
                        {tool}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
