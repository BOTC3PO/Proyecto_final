export default function Calendario() {
  const agenda = [
    {
      title: "Matemáticas 1°A",
      time: "10:30 - 11:15",
      location: "Aula 2",
      type: "Clase",
      tone: "bg-blue-50 text-blue-600"
    },
    {
      title: "Revisión de tareas",
      time: "12:00 - 12:30",
      location: "Sala virtual",
      type: "Gestión",
      tone: "bg-amber-50 text-amber-600"
    },
    {
      title: "Tutoría grupal",
      time: "15:00 - 15:40",
      location: "Aula 1",
      type: "Acompañamiento",
      tone: "bg-emerald-50 text-emerald-600"
    }
  ];

  const weeklySchedule = [
    {
      day: "Lunes",
      blocks: [
        { time: "08:00 - 09:30", title: "Lengua 2°B", location: "Aula 3" },
        { time: "10:30 - 11:15", title: "Matemáticas 1°A", location: "Aula 2" }
      ]
    },
    {
      day: "Martes",
      blocks: [
        { time: "09:00 - 10:00", title: "Laboratorio ciencias 2°B", location: "Lab 1" },
        { time: "11:30 - 12:15", title: "Proyecto interdisciplinario", location: "Aula 4" }
      ]
    },
    {
      day: "Miércoles",
      blocks: [
        { time: "08:00 - 09:00", title: "Evaluación diagnóstica", location: "Aula 4" },
        { time: "12:30 - 13:15", title: "Reunión de coordinación", location: "Sala docentes" }
      ]
    },
    {
      day: "Jueves",
      blocks: [
        { time: "09:45 - 10:30", title: "Historia 3°A", location: "Aula 5" },
        { time: "13:00 - 14:00", title: "Taller creativo", location: "Sala multiuso" }
      ]
    },
    {
      day: "Viernes",
      blocks: [
        { time: "08:30 - 09:15", title: "Lectura guiada 1°B", location: "Biblioteca" },
        { time: "11:00 - 12:00", title: "Cierre semanal", location: "Auditorio" }
      ]
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Agenda del aula</h1>
          <p className="text-gray-600">Visualiza tu cronograma semanal y las próximas actividades.</p>
        </div>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700">
          + Agendar evento
        </button>
      </div>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Cronograma semanal</h2>
            <span className="text-xs text-gray-400">Lunes a viernes</span>
          </div>
          <div className="mt-4 space-y-4">
            {weeklySchedule.map((day) => (
              <div key={day.day} className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                <p className="text-sm font-semibold text-gray-700">{day.day}</p>
                <div className="mt-2 space-y-2">
                  {day.blocks.map((block) => (
                    <div key={`${day.day}-${block.title}`} className="flex flex-col gap-1 rounded-md bg-white p-3 text-sm text-gray-700 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{block.title}</span>
                        <span className="text-xs text-gray-500">{block.time}</span>
                      </div>
                      <span className="text-xs text-gray-500">{block.location}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Agenda de hoy</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            {agenda.map((item) => (
              <li key={item.title} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-500">
                    {item.time} · {item.location}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs ${item.tone}`}>{item.type}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-dashed border-gray-200 bg-gray-50 p-3 text-xs text-gray-500">
            <p className="font-semibold text-gray-600">Siguientes recordatorios</p>
            <ul className="mt-2 space-y-1">
              <li>Enviar recordatorio de evaluación (mañana · 07:30).</li>
              <li>Compartir material de taller creativo (jueves · 14:30).</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
