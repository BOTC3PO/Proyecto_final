const reportes = [
  {
    titulo: "Desempeño por equipo",
    descripcion: "Comparativa de avance y resultados por área.",
  },
  {
    titulo: "Adopción de cursos",
    descripcion: "Participación y finalización por módulo corporativo.",
  },
  {
    titulo: "Indicadores de satisfacción",
    descripcion: "Encuestas y feedback de los usuarios finales.",
  },
];

export default function EnterpriseReportes() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Reportes</h1>
        <p className="text-base text-slate-600">
          Descarga información clave y comparte insights con los equipos directivos.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {reportes.map((reporte) => (
          <article
            key={reporte.titulo}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{reporte.titulo}</h2>
            <p className="mt-2 text-sm text-slate-600">{reporte.descripcion}</p>
            <button className="mt-4 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
              Descargar
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
