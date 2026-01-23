export default function RecuperarContrasena() {
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-6">
          <header className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">Recuperar contraseña</h1>
            <p className="text-gray-600">Ingresá tu correo y te enviaremos instrucciones para restablecerla.</p>
          </header>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="tuemail@ejemplo.com"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Enviar instrucciones
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
