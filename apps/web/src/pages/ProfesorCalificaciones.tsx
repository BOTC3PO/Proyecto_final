const evaluaciones = [
  {
    grupo: "8° Básico A",
    pendientes: 12,
    ultimaEntrega: "Ayer",
  },
  {
    grupo: "8° Básico B",
    pendientes: 8,
    ultimaEntrega: "Hoy",
  },
  {
    grupo: "7° Básico",
    pendientes: 5,
    ultimaEntrega: "Hace 2 días",
  },
];

export default function ProfesorCalificaciones() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Calificaciones</h1>
        <p className="text-base text-slate-600">
          Da seguimiento a entregas pendientes y comparte retroalimentación oportuna.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Entregas por grupo</h2>
        <div className="mt-4 space-y-3">
          {evaluaciones.map((item) => (
            <div
              key={item.grupo}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.grupo}</p>
                <p className="text-xs text-slate-500">Última entrega: {item.ultimaEntrega}</p>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                {item.pendientes} pendientes
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
