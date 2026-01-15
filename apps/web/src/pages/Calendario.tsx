export default function Calendario() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Calendario</h1>
          <p className="text-gray-600">
            Organiza clases, evaluaciones y eventos próximos desde un solo lugar.
          </p>
        </div>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700">
          + Agendar evento
        </button>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Hoy</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold">Matemáticas 1°A</p>
                <p className="text-gray-500">10:30 - 11:15 · Aula 2</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">Clase</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold">Revisión de tareas</p>
                <p className="text-gray-500">12:00 - 12:30 · Sala virtual</p>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-600">Gestión</span>
            </li>
          </ul>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Esta semana</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold">Laboratorio ciencias 2°B</p>
                <p className="text-gray-500">Miércoles · 09:00 · Laboratorio</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-600">Práctica</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold">Evaluación diagnóstica</p>
                <p className="text-gray-500">Viernes · 08:00 · Aula 4</p>
              </div>
              <span className="rounded-full bg-purple-50 px-3 py-1 text-xs text-purple-600">Evaluación</span>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
