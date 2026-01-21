const tareas = [
  {
    titulo: "Resolver fracciones",
    curso: "Matemática interactiva",
    vence: "Hoy",
  },
  {
    titulo: "Comprensión lectora",
    curso: "Lectura crítica",
    vence: "Mañana",
  },
  {
    titulo: "Experimento guiado",
    curso: "Ciencias en acción",
    vence: "Viernes",
  },
  {
    titulo: "Construir línea de tiempo del siglo XX",
    curso: "Historia contemporánea",
    vence: "Lunes",
  },
  {
    titulo: "Comparar mapas históricos 1914 vs 1919",
    curso: "Historia moderna",
    vence: "Martes",
  },
  {
    titulo: "Interpretar gráfico de población histórica",
    curso: "Historia y sociedad",
    vence: "Miércoles",
  },
  {
    titulo: "Mapa conceptual de la Revolución Francesa",
    curso: "Historia universal",
    vence: "Jueves",
  },
  {
    titulo: "Explorar tour virtual de sitio histórico",
    curso: "Patrimonio cultural",
    vence: "Sábado",
  },
];

export default function Tareas() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Tareas pendientes</h1>
        <p className="text-base text-slate-600">
          Mantén tu progreso al día revisando las actividades asignadas por tus profesores.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Agenda de la semana</h2>
        <div className="mt-4 space-y-3">
          {tareas.map((tarea) => (
            <div
              key={tarea.titulo}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{tarea.titulo}</p>
                <p className="text-xs text-slate-500">Curso: {tarea.curso}</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Vence: {tarea.vence}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
