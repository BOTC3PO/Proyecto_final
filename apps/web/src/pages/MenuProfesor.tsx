import { useEffect, useState } from "react";
import { MVP_MODULES } from "../mvp/mvpData";
import { apiGet } from "../lib/api";
import type { Module } from "../domain/module/module.types";

const quickLinks = {
  academico: [
    { label: "Módulo de Aprendizaje", href: "/profesor/modulos" },
    { label: "Aulas Virtuales", href: "/profesor/aulas" },
    { label: "Material Didáctico", href: "/profesor/materiales" },
    { label: "Evaluaciones", href: "/profesor/evaluaciones" },
  ],
  gestion: [
    { label: "Calendario", href: "/profesor/calendario" },
    { label: "Estadísticas", href: "/profesor/estadisticas" },
    { label: "Mensajes", href: "/profesor/mensajes" },
    { label: "Configuración", href: "/profesor/configuracion" },
  ],
};

const kpiCards = [
  {
    label: "Tareas por corregir",
    value: 18,
    helper: "Últimas 48 horas",
    href: "/profesor/calificaciones",
    icon: "📝"
  },
  {
    label: "Entregas atrasadas",
    value: 6,
    helper: "Pendientes de revisión",
    href: "/profesor/entregas",
    icon: "⏰"
  },
  {
    label: "Mensajes sin leer",
    value: 4,
    helper: "Nuevos esta semana",
    href: "/profesor/mensajes",
    icon: "💬"
  }
];

const weeklyPlan = [
  {
    title: "Matemáticas 1°A",
    detail: "Lunes · 10:30 - 11:15 · Aula 2",
    status: "Clase"
  },
  {
    title: "Tutoría personalizada 3°C",
    detail: "Miércoles · 09:00 - 09:40 · Sala virtual",
    status: "Tutoría"
  },
  {
    title: "Laboratorio ciencias 2°B",
    detail: "Viernes · 08:15 - 09:30 · Laboratorio",
    status: "Práctica"
  }
];

export default function menuProfesor() {
  const [modules, setModules] = useState(
    MVP_MODULES.map((module) => ({
      ...module,
      visibility: "publico",
      dependencies: []
    }))
  );

  useEffect(() => {
    let active = true;
    const ownerId = "demo-docente";
    apiGet<{ items: Module[] }>(`/api/modulos?owner=${ownerId}`)
      .then((data) => {
        if (!active) return;
        const mapped = data.items.map((module) => ({
          id: module.id,
          title: module.title,
          description: module.description,
          level: module.level,
          durationMinutes: module.durationMinutes,
          category: module.category,
          visibility: module.visibility ?? "privado",
          dependencies: module.dependencies ?? []
        }));
        setModules(mapped);
      })
      .catch(() => {
        if (!active) return;
        setModules(
          MVP_MODULES.map((module) => ({
            ...module,
            visibility: "publico",
            dependencies: []
          }))
        );
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <div className="bg-white rounded-xl shadow flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white grid place-content-center font-semibold">JP</div>
          <div className="flex-1">
            <h2 className="font-semibold">Juan Pérez</h2>
            <p className="text-gray-600">Profesor</p>
          </div>
          <div className="flex items-center gap-5">
            <button title="Notificaciones">🔔</button>
            <a className="flex items-center gap-2 hover:underline" href="#">
              👤 Perfil
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
            <div className="text-3xl">🕒</div>
            <div>
              <p className="text-gray-500">Próxima Clase</p>
              <p className="text-xl font-semibold">Matemáticas 1°A - 10:30</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
            <div className="text-3xl">👪</div>
            <div>
              <p className="text-gray-500">Estudiantes Activos</p>
              <p className="text-2xl font-bold">87 estudiantes</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎓</div>
              <p className="text-gray-600">Progreso general de la próxima clase</p>
            </div>
            <div className="mt-3 h-3 w-full bg-gray-200 rounded">
              <div className="h-3 w-1/3 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {kpiCards.map((card) => (
            <a
              key={card.label}
              className="group rounded-xl border border-transparent bg-white p-5 shadow transition hover:border-blue-200 hover:shadow-md"
              href={card.href}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{card.value}</p>
                  <p className="mt-2 text-xs text-gray-400">{card.helper}</p>
                </div>
                <span className="text-3xl">{card.icon}</span>
              </div>
              <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-blue-600 group-hover:underline">
                Ver detalle
              </span>
            </a>
          ))}
        </div>

        <section className="bg-white rounded-xl shadow p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">Planificación semanal</h3>
              <p className="text-sm text-gray-500">
                Próximas clases y actividades prioritarias.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
              href="/profesor/calendario"
            >
              Ver calendario
            </a>
          </div>
          <ul className="mt-4 divide-y divide-gray-100">
            {weeklyPlan.map((item) => (
              <li key={item.title} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">Módulos activos</h3>
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
                href="/profesor/cursos/nuevo"
              >
                + Crear clase/sección
              </a>
              <button className="text-sm text-blue-600 hover:underline">Crear módulo</button>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {modules.map((module) => (
              <article key={module.id} className="rounded-lg border border-gray-200 p-4">
                <p className="text-xs uppercase text-gray-500">{module.category}</p>
                <h4 className="mt-2 font-semibold">{module.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{module.description}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">
                    {module.visibility === "publico" ? "Publicado" : "Privado"}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">
                    Dependencias: {module.dependencies.length}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                  <span>{module.level}</span>
                  <span>{module.durationMinutes} min</span>
                </div>
                <a
                  className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm"
                  href={`/profesor/editar-modulo/${module.id}`}
                >
                  Editar módulo
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {Object.entries(quickLinks).map(([section, links]) => (
            <div key={section} className="bg-white rounded-xl shadow">
              <div className="bg-sky-600 text-white font-semibold rounded-t-xl px-4 py-2">
                {section === "academico" ? "Académico" : "Gestión"}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                {links.map((link) => (
                  <a
                    key={link.label}
                    className="h-20 grid place-content-center hover:bg-gray-50"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
