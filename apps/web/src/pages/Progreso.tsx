const avances = [
  {
    modulo: "Introducción a fracciones",
    progreso: "80%",
  },
  {
    modulo: "Lectura crítica: ideas principales",
    progreso: "65%",
  },
  {
    modulo: "Laboratorio de ciencias",
    progreso: "90%",
  },
];

export default function Progreso() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Progreso del estudiante</h1>
        <p className="text-base text-slate-600">
          Revisa tu avance por módulos y detecta las áreas donde necesitas reforzar contenidos.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {avances.map((avance) => (
          <article
            key={avance.modulo}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{avance.modulo}</h2>
            <p className="mt-2 text-sm text-slate-500">Avance total</p>
            <p className="mt-1 text-2xl font-semibold text-blue-600">{avance.progreso}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
        <h2 className="text-xl font-semibold text-emerald-900">Sugerencia personalizada</h2>
        <p className="mt-2 text-sm text-emerald-800">
          Completa el módulo de lectura crítica para desbloquear nuevos desafíos de comprensión.
        </p>
      </section>
    </main>
  );
}
