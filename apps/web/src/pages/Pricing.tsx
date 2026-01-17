export default function Pricing() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 py-8">
      <header className="flex flex-col gap-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Planes y precios
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Elegí el plan ideal para tu institución
        </h1>
        <p className="text-base text-slate-600 sm:text-lg">
          Accedé a experiencias educativas con reportes en tiempo real, aulas
          colaborativas y soporte dedicado.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Plan Premium
              </p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-semibold text-slate-900">
                  $29.000
                </span>
                <span className="text-base text-slate-500">/ mes</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Incluye hasta 500 estudiantes activos y actualizaciones
                prioritarias.
              </p>
            </div>

            <ul className="grid gap-3 text-sm text-slate-600">
              {[
                "Aulas colaborativas con recursos interactivos",
                "Reportes avanzados con métricas por curso",
                "Soporte premium por WhatsApp y correo",
                "Capacitaciones mensuales para docentes",
                "Integraciones con Google Classroom",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Solicitar demo premium
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              Ideal para instituciones
            </h2>
            <p className="text-sm text-slate-600">
              Sumá acompañamiento estratégico, implementación guiada y mejoras
              continuas para escalar tu programa educativo.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
            <p className="font-semibold text-slate-900">Incluye</p>
            <p className="mt-2">
              Configuración inicial, onboarding docente y seguimiento trimestral.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Métodos de pago
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Elegí la alternativa que mejor se adapte a tu equipo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mercado Pago",
                description: "Pagá con tarjeta, transferencia o dinero en cuenta.",
              },
              {
                title: "Bitcoin Lightning",
                description: "Cobros instantáneos con comisiones bajas.",
              },
              {
                title: "Cryptomus",
                description: "Aceptá pagos cripto y conversión automática.",
              },
              {
                title: "Transferencia bancaria",
                description: "Facturación mensual con CBU o alias.",
              },
              {
                title: "Tarjeta corporativa",
                description: "Disponible para compras recurrentes del equipo.",
              },
            ].map((method) => (
              <div
                key={method.title}
                className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {method.title}
                </p>
                <p className="text-sm text-slate-600">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span>
              ¿Necesitás un método personalizado? Escribinos y lo coordinamos.
            </span>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-900 transition hover:border-slate-400">
              Hablar con ventas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
