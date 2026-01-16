const asistencias = [
  {
    curso: "Matemática interactiva",
    presente: 28,
    total: 30,
  },
  {
    curso: "Lectura crítica",
    presente: 22,
    total: 24,
  },
  {
    curso: "Ciencias en acción",
    presente: 16,
    total: 18,
  },
];

export default function ProfesorAsistencia() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Asistencia</h1>
        <p className="text-base text-slate-600">
          Controla la asistencia diaria y detecta rápidamente a los estudiantes con inasistencias.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {asistencias.map((item) => (
          <article
            key={item.curso}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.curso}</h2>
            <p className="mt-2 text-sm text-slate-500">Presentes hoy</p>
            <p className="mt-1 text-2xl font-semibold text-emerald-600">
              {item.presente}/{item.total}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
