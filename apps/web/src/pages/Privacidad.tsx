export default function Privacidad() {
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900 text-center">Política de privacidad</h1>
          <p className="text-gray-600">
            Protegemos la información personal con prácticas claras, almacenamiento seguro y controles para que cada
            usuario gestione sus datos.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Recopilamos solo los datos necesarios para brindar la experiencia educativa.</li>
            <li>Implementamos medidas de seguridad para evitar accesos no autorizados.</li>
            <li>Podés solicitar actualizaciones o eliminación de tus datos cuando lo necesites.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
