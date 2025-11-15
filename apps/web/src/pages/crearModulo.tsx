export default function CrearModulo() {
  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-center text-3xl font-semibold">Crear Módulo</h1>

        <form className="mt-8 space-y-6 bg-white rounded-xl shadow p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Título del módulo
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descripción del módulo
            </label>
            <textarea
              rows={5}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Área de Estudio
            </label>
            {/* mejor defaultValue si no vas a manejar onChange */}
            <input
              defaultValue="Matemáticas"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Módulo Público</span>
            </label>

            <input
              placeholder="Cantidad Máxima de preguntas por ronda"
              className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            />

            <input
              placeholder="Multiplicador"
              className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            />

            <input
              placeholder="Nivel Máximo"
              className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
            <input
              placeholder="Cuestionario"
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />

            <textarea
              placeholder="Introduce el contenido"
              rows={3}
              className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2"
            ></textarea>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <input
                placeholder="número de muestra"
                className="rounded-md border border-gray-300 px-3 py-2"
              />
              <button
                type="button"
                className="rounded-md border border-gray-300 px-3 py-2 text-left"
              >
                Generador de problemas
              </button>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-2"
              >
                Crear preguntas/configurar Generador
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <button
                type="button"
                className="rounded-md border border-gray-300 px-3 py-2"
              >
                Pregunta opción múltiple
              </button>
              <button
                type="button"
                className="rounded-md border border-gray-300 px-3 py-2"
              >
                Seleccionar tipo de actividad
              </button>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-2"
              >
                Añadir Sección
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Contenido del módulo</h2>
            <div className="mt-2 h-32 rounded-md border border-dashed border-gray-300 grid place-content-center text-gray-500">
              — vacío —
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <button
              type="button"
              className="rounded-md border px-4 py-2"
            >
              Guardar como borrador
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2"
            >
              Crear módulo
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
