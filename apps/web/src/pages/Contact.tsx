export default function Contact(){return(
<main className="flex-1">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="bg-white shadow-lg rounded-xl">
        <div className="p-8 sm:p-10">
          <h1 className="text-center text-2xl font-semibold text-blue-600">Contacto</h1>

          <form className="mt-8 space-y-6" action="#" method="post">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="user">
                Correo Electrónico o Usuario público
              </label>
              <input id="user" name="user" type="text"
                     className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="msg">Mensaje</label>
              <textarea id="msg" name="msg" rows="5"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>

            <button type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2.5 shadow">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  </main>) }