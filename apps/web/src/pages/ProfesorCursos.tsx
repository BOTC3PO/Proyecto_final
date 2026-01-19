import { Link } from "react-router-dom";

const cursos = [
  {
    nombre: "Matemática interactiva",
    alumnos: 30,
    estado: "Activo",
  },
  {
    nombre: "Lectura crítica",
    alumnos: 24,
    estado: "Activo",
  },
  {
    nombre: "Ciencias en acción",
    alumnos: 18,
    estado: "Planificación",
  },
];

export default function ProfesorCursos() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Mis cursos</h1>
          <p className="text-base text-slate-600">
            Administra los cursos que impartes, revisa la participación y crea nuevas rutas.
          </p>
        </div>
        <Link
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
          to="/profesor/cursos/nuevo"
        >
          + Crear clase
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {cursos.map((curso) => (
          <article
            key={curso.nombre}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{curso.nombre}</h2>
            <p className="mt-2 text-sm text-slate-500">Alumnos: {curso.alumnos}</p>
            <p className="mt-1 text-sm text-slate-500">Estado: {curso.estado}</p>
            <button className="mt-4 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
              Ir al curso
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
