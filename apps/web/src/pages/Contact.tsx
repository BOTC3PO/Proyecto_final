export default function Contact() {
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-8">
          <header className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Contacto</p>
            <h1 className="text-3xl font-semibold text-gray-900">Estamos para ayudarte</h1>
            <p className="text-gray-600">
              Nuestro equipo responde consultas sobre implementación, soporte técnico y acompañamiento pedagógico.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="space-y-6" action="#" method="post">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="user">
                  Correo electrónico o usuario público
                </label>
                <input
                  id="user"
                  name="user"
                  type="text"
                  placeholder="soporte@educrea.com o @colegioandino"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="msg">
                  Mensaje
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={5}
                  placeholder="Contanos cómo podemos ayudarte y el contexto de tu institución."
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 py-2.5 font-semibold text-white shadow hover:bg-blue-700"
              >
                Enviar mensaje
              </button>
            </form>

            <aside className="space-y-6 rounded-xl border border-blue-100 bg-blue-50/40 p-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Canales directos</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Horario de atención: lunes a viernes, 8:30 a 18:00 (GMT-3).
                </p>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Soporte:</span> soporte@educrea.com
                </p>
                <p>
                  <span className="font-semibold">Ventas:</span> alianzas@educrea.com
                </p>
                <p>
                  <span className="font-semibold">Teléfono:</span> +54 11 4588 2200
                </p>
                <p>
                  <span className="font-semibold">Oficina:</span> Av. Corrientes 1234, CABA, Argentina
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 text-sm text-gray-600 shadow-sm">
                También podés escribirnos desde el campus y recibir respuesta prioritaria si sos parte de un plan
                institucional.
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
