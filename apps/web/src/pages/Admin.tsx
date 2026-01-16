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

      <section className="grid gap-4 md:grid-cols-3">
        {["Usuarios", "Cursos", "Reportes"].map((item) => (
          <article
            key={item}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">
              Gestiona solicitudes, permisos y métricas clave relacionadas con {item.toLowerCase()}.
            </p>
          </article>
        ))}
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
