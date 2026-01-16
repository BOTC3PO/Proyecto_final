const cursos = [
  {
    titulo: "Matemática interactiva",
    estado: "En revisión",
    estudiantes: 120,
  },
  {
    titulo: "Lectura crítica",
    estado: "Publicado",
    estudiantes: 86,
  },
  {
    titulo: "Ciencias en acción",
    estado: "Borrador",
    estudiantes: 42,
  },
];

export default function AdminCursos() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Gestión de cursos</h1>
        <p className="text-base text-slate-600">
          Revisa la calidad del contenido, activa nuevas rutas y monitorea el impacto en los
          estudiantes.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {cursos.map((curso) => (
          <article
            key={curso.titulo}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{curso.titulo}</h2>
            <p className="mt-2 text-sm text-slate-500">Estado: {curso.estado}</p>
            <p className="mt-1 text-sm text-slate-500">Estudiantes activos: {curso.estudiantes}</p>
            <button className="mt-4 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
              Ver detalles
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
