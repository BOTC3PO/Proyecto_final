import { Link } from 'react-router-dom';

const adminSections = [
  {
    label: 'Usuarios',
    to: '/admin/usuarios',
    desc: 'Gestiona solicitudes, permisos y métricas clave relacionadas con usuarios.',
  },
  {
    label: 'Cursos',
    to: '/admin/cursos',
    desc: 'Gestiona solicitudes, permisos y métricas clave relacionadas con cursos.',
  },
  {
    label: 'Materias',
    to: '/admin/materias',
    desc: 'Gestiona solicitudes, permisos y métricas clave relacionadas con materias.',
  },
  {
    label: 'Reportes',
    to: '/admin/reportes',
    desc: 'Gestiona solicitudes, permisos y métricas clave relacionadas con reportes.',
  },
  {
    label: 'Gobernanza',
    to: '/gobernanza',
    desc: 'Propuestas de cambio para generadores, enunciados y configuraciones. Votación colaborativa entre directivos, docentes y administradores.',
  },
];

export default function Admin() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Admin</p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Panel administrativo</h1>
        <p className="max-w-2xl text-base text-slate-600">
          Supervisa usuarios, cursos y reportes desde un mismo lugar. Aquí encontrarás los accesos
          rápidos para las tareas operativas del equipo.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {adminSections.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.label}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            <span className="mt-4 inline-block text-xs font-semibold text-blue-600">Ver →</span>
          </Link>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Acceso rápido</h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/admin/panel"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Panel de control
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <h2 className="text-xl font-semibold text-blue-900">Estado del sistema</h2>
        <ul className="mt-3 space-y-2 text-sm text-blue-900">
          <li>✅ Procesos en línea y sin incidencias.</li>
          <li>✅ Integraciones activas para notificaciones y pagos.</li>
          <li>⚙️ Revisión de seguridad programada para esta semana.</li>
        </ul>
      </section>
    </main>
  );
}
