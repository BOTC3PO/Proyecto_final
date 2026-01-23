export default function Terminos() {
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900 text-center">Términos y condiciones</h1>
          <p className="text-gray-600">
            Revisá los lineamientos de uso de la plataforma, el alcance de los servicios y las buenas prácticas
            recomendadas para docentes, estudiantes y familias.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Uso responsable del contenido educativo y de las herramientas interactivas.</li>
            <li>Respeto por la privacidad y la convivencia dentro de las aulas virtuales.</li>
            <li>Compromiso con la integridad académica y el cuidado de la comunidad.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
