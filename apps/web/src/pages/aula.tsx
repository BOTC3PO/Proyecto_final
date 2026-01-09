import {
  MVP_LEADERBOARD,
  MVP_MODULES,
  MVP_PUBLICATIONS,
  MVP_UPCOMING_ACTIVITIES,
} from "../mvp/mvpData";

const teacherTools = [
  "Informes y Estadísticas",
  "Rendimiento por módulo",
  "Progreso individual",
  "Informe mensual",
  "Alertas de rendimiento",
  "Gestionar módulos",
  "Configurar juegos",
  "Ver estadísticas",
  "Ajustes TTS",
];

export default function aula() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-blue-600 text-white rounded-xl h-28 relative">
          <div className="absolute left-5 bottom-3 text-sm">Prof. Juan Pérez | Código de clase: MAT3A-2024</div>
          <button className="absolute right-5 bottom-3 bg-white text-blue-700 px-4 py-1.5 rounded-md shadow">
            Gestionar
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-content-center">JP</div>
                <input
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Escribe una novedad..."
                />
                <button className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-md">Publicar</button>
              </div>
              <div className="flex items-center gap-3 mt-3 text-gray-600">
                <button className="p-2 hover:bg-gray-100 rounded">📎</button>
                <button className="p-2 hover:bg-gray-100 rounded">🖼️</button>
              </div>
            </div>

            <div className="space-y-4">
              {MVP_PUBLICATIONS.map((publication) => (
                <article key={publication.id} className="bg-white rounded-xl shadow p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-content-center">
                      {publication.authorInitials}
                    </div>
                    <div className="font-semibold">{publication.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-gray-800">{publication.body}</p>
                  {publication.links && (
                    <div className="flex gap-6 mt-3">
                      {publication.links.map((link) => (
                        <a key={link.label} className="text-blue-600 hover:underline" href={link.href}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-2">{publication.publishedAtLabel}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">🏆 Top Estudiantes</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {MVP_LEADERBOARD.map((entry, index) => (
                  <li key={entry.id} className="flex justify-between">
                    <span>
                      {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"} {entry.name}
                    </span>
                    <span>{entry.points} pts</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">Progreso de la clase</h3>
              <div className="mt-3 space-y-3 text-sm">
                {MVP_MODULES.map((module) => (
                  <div key={module.id}>
                    <div className="flex justify-between">
                      <span>{module.title}</span>
                      <span>{module.progressPercent ? `${module.progressPercent}%` : "Bloqueado"}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className={`h-2 rounded ${
                          module.progressPercent && module.progressPercent > 60
                            ? "bg-green-500"
                            : module.progressPercent && module.progressPercent > 0
                            ? "bg-blue-500"
                            : "bg-gray-400"
                        }`}
                        style={{ width: `${module.progressPercent ?? 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">Próximas actividades</h3>
              <ul className="mt-3 text-sm space-y-2">
                {MVP_UPCOMING_ACTIVITIES.map((activity) => (
                  <li key={activity.id}>
                    {activity.label} — <span className="text-gray-600">{activity.when}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">Herramientas del profesor</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {teacherTools.map((tool) => (
                  <li key={tool}>
                    <a className="hover:underline" href="#">
                      {tool}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
