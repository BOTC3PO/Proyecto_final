import { useEffect, useState } from "react";
import { fetchCalendario, type CalendarioData } from "../services/calendario";

export default function Calendario() {
  const [data, setData] = useState<CalendarioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchCalendario()
      .then((response) => {
        if (!active) return;
        setData(response);
        setError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

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
            {loading && <p className="text-sm text-gray-500">Cargando calendario...</p>}
            {error && <p className="text-sm text-red-600">Error: {error}</p>}
            {!loading &&
              !error &&
              data?.weeklySchedule.map((day) => (
              <div key={day.day} className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                <p className="text-sm font-semibold text-gray-700">{day.day}</p>
                <div className="mt-2 space-y-2">
                  {day.blocks.map((block) => (
                    <div
                      key={block.id}
                      className="flex flex-col gap-1 rounded-md bg-white p-3 text-sm text-gray-700 shadow-sm"
                    >
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
            {!loading && !error && data?.weeklySchedule.length === 0 && (
              <p className="text-sm text-gray-500">No hay bloques semanales.</p>
            )}
          </div>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Agenda de hoy</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            {loading && <li className="text-sm text-gray-500">Cargando agenda...</li>}
            {error && <li className="text-sm text-red-600">Error: {error}</li>}
            {!loading &&
              !error &&
              data?.agenda.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500">
                      {item.time} · {item.location}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs ${item.tone}`}>{item.type}</span>
                </li>
              ))}
            {!loading && !error && data?.agenda.length === 0 && (
              <li className="text-sm text-gray-500">No hay eventos para hoy.</li>
            )}
          </ul>
          <div className="mt-6 rounded-lg border border-dashed border-gray-200 bg-gray-50 p-3 text-xs text-gray-500">
            <p className="font-semibold text-gray-600">Siguientes recordatorios</p>
            <ul className="mt-2 space-y-1">
              {loading && <li>Cargando recordatorios...</li>}
              {!loading &&
                !error &&
                data?.reminders.map((reminder) => (
                  <li key={reminder}>{reminder}</li>
                ))}
              {!loading && !error && data?.reminders.length === 0 && (
                <li>No hay recordatorios programados.</li>
              )}
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
