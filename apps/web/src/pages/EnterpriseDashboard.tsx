const indicadores = [
  { label: "Usuarios activos", value: "1,240" },
  { label: "Cursos corporativos", value: "48" },
  { label: "Satisfacción", value: "92%" },
];

export default function EnterpriseDashboard() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Enterprise</p>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard corporativo</h1>
        <p className="text-base text-slate-600">
          Consolida métricas clave y el estado general de los programas de capacitación.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {indicadores.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Próximas acciones</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Revisar el reporte mensual con líderes de área.</li>
          <li>• Actualizar el catálogo de cursos para el próximo trimestre.</li>
          <li>• Programar sesiones de onboarding para nuevos equipos.</li>
        </ul>
      </section>
    </main>
  );
}
