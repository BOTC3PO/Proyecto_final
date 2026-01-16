export default function Explorar() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Explorar</p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Descubre rutas de aprendizaje diseñadas para avanzar rápido.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Encuentra módulos recomendados, profesores destacados y experiencias interactivas para
          reforzar tus habilidades desde un solo lugar.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Módulos recomendados",
            description:
              "Contenido curado según tu nivel para empezar con actividades que sí importan.",
          },
          {
            title: "Aprendizaje guiado",
            description:
              "Sigue rutas con objetivos claros y micro-retos para mantener el avance constante.",
          },
          {
            title: "Comunidad activa",
            description:
              "Conecta con profesores y alumnos, comparte recursos y participa en retos.",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{card.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-xl font-semibold">¿Listo para empezar?</h2>
        <p className="mt-2 text-sm text-slate-200">
          Crea tu cuenta y desbloquea recomendaciones personalizadas basadas en tu progreso.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
            Crear cuenta
          </button>
          <button className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold">
            Ver catálogo
          </button>
        </div>
      </section>
    </main>
  );
}
