import { Link } from "react-router-dom";

const PLANES = {
  gratuito: {
    label: "Gratuito",
    descripcion: "Para empezar sin costo.",
    limites: [
      "5 profesores",
      "5 directivos",
      "5 aulas activas",
      "30 alumnos por aula",
    ],
    precio: null,
  },
  escuela: {
    label: "Escuela",
    descripcion: "Para instituciones que crecen.",
    extras: [
      "$300 ARS/mes por profesor o directivo adicional",
      "$1.000 ARS/mes por alumno adicional",
    ],
    precio: "Desde $300 ARS/mes",
  },
  profesor: {
    label: "Profesor",
    descripcion: "Expandí tus aulas y alumnos.",
    extras: [
      "$150 ARS/mes por expansión",
      "+5 aulas activas por expansión",
      "+30 alumnos por aula por expansión",
    ],
    precio: "Desde $150 ARS/mes",
  },
  alumno: {
    label: "Alumno",
    descripcion: "Multiplicá tus recompensas.",
    extras: [
      "+15% de monedas en economía del aula",
      "Multiplicador activo mientras dure la suscripción",
    ],
    precio: "$1.000 ARS/mes",
  },
};

export default function Pricing() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-12">
      <header className="text-center space-y-3">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Planes y precios
        </span>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Elegí el plan para tu rol
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          Todos los planes son mensuales, cancelables en cualquier momento
          y con reembolso disponible dentro de los 7 días del pago.
        </p>
      </header>

      {/* Plan gratuito */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {PLANES.gratuito.label}
            </h2>
            <p className="mt-1 text-slate-500">{PLANES.gratuito.descripcion}</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            Sin costo
          </span>
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {PLANES.gratuito.limites.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Planes de pago */}
      <div className="grid gap-6 md:grid-cols-3">
        {[PLANES.escuela, PLANES.profesor, PLANES.alumno].map((plan) => (
          <section
            key={plan.label}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-4"
          >
            <div>
              <h2 className="text-xl font-bold text-slate-900">{plan.label}</h2>
              <p className="mt-1 text-sm text-slate-500">{plan.descripcion}</p>
            </div>
            <div className="text-2xl font-bold text-blue-600">{plan.precio}</div>
            <ul className="space-y-2 flex-1">
              {plan.extras.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/perfil"
              className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Suscribirme →
            </Link>
          </section>
        ))}
      </div>

      {/* Métodos de pago */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Métodos de pago</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">MercadoPago</p>
            <p className="mt-1 text-sm text-slate-500">
              Tarjeta, transferencia o dinero en cuenta. Disponible ahora.
            </p>
            <span className="mt-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              Disponible
            </span>
          </div>
          {[
            { nombre: "Bitcoin Lightning", desc: "Pagos instantáneos con comisiones bajas." },
            { nombre: "USDC / Cryptomus", desc: "Cripto con conversión automática." },
            { nombre: "Transferencia bancaria", desc: "CBU o alias — facturación mensual." },
          ].map((m) => (
            <div key={m.nombre} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">{m.nombre}</p>
              <p className="mt-1 text-sm text-slate-500">{m.desc}</p>
              <span className="mt-2 inline-block rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-500">
                Próximamente
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Política */}
      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm text-blue-800">
        <p className="font-semibold">Política de cancelación y reembolso</p>
        <ul className="mt-2 space-y-1 text-blue-700">
          <li>• Cancelación en cualquier momento sin costo extra.</li>
          <li>• Al cancelar, el acceso se mantiene hasta el fin del período pagado.</li>
          <li>• Reembolso disponible si el reclamo se hace dentro de los 7 días del pago.</li>
        </ul>
      </section>
    </div>
  );
}
