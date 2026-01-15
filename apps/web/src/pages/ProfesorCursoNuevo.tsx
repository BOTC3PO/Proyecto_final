import { Link } from "react-router-dom";

export default function ProfesorCursoNuevo() {
  return (
    <main className="flex-1">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white p-6 shadow">
          <h1 className="text-2xl font-semibold text-gray-900">Crear clase o sección</h1>
          <p className="mt-2 text-sm text-gray-600">
            Completa la información básica para registrar una nueva clase. Puedes editar los detalles más adelante.
          </p>
          <form className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm">
              <span className="font-medium text-gray-700">Nombre de la clase</span>
              <input
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Ej. Matemáticas 1°A"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium text-gray-700">Sección</span>
              <input
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Ej. A"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium text-gray-700">Descripción</span>
              <textarea
                className="min-h-[120px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Agrega una descripción para la clase..."
              />
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
                type="button"
              >
                Guardar clase
              </button>
              <Link
                className="inline-flex items-center justify-center text-sm text-gray-600 hover:underline"
                to="/profesor/cursos"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
