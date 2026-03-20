import type { AlgebraCalculoVisualSpec } from "../types";

type AlgebraCalculoVisualVisualizerProps = {
  spec: AlgebraCalculoVisualSpec;
};

export default function AlgebraCalculoVisualVisualizer({
  spec,
}: AlgebraCalculoVisualVisualizerProps) {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Álgebra y cálculo visual
        </p>
        <h3 className="text-lg font-semibold text-slate-900">
          {spec.title ?? "Sistemas, derivadas e integrales"}
        </h3>
        {spec.description && (
          <p className="text-sm text-slate-600">{spec.description}</p>
        )}
      </header>

      <div className="space-y-3">
        {spec.systems.map((system) => (
          <article key={system.id} className="rounded-md border border-slate-100 bg-slate-50 p-4">
            <h4 className="text-sm font-semibold text-slate-900">Sistema</h4>
            <ul className="mt-2 space-y-1 text-xs text-slate-600">
              {system.equations.map((equation, index) => (
                <li key={`${system.id}-eq-${index}`}>{equation}</li>
              ))}
            </ul>
            {system.solution && (
              <p className="mt-2 text-xs text-slate-500">
                Solución: {Object.entries(system.solution).map(([key, value]) => `${key} = ${value}`).join(", ")}
              </p>
            )}
            {system.steps && system.steps.length > 0 && (
              <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs text-slate-600">
                {system.steps.map((step, index) => (
                  <li key={`${system.id}-step-${index}`}>{step}</li>
                ))}
              </ol>
            )}
          </article>
        ))}
      </div>

      <div className="space-y-3">
        {spec.derivatives.map((derivative) => (
          <article key={derivative.id} className="rounded-md border border-slate-100 bg-slate-50 p-4">
            <h4 className="text-sm font-semibold text-slate-900">Derivada</h4>
            <p className="text-xs text-slate-600">f(x) = {derivative.function}</p>
            {derivative.derivative && (
              <p className="text-xs text-slate-500">f'(x) = {derivative.derivative}</p>
            )}
            {derivative.criticalPoints && derivative.criticalPoints.length > 0 && (
              <ul className="mt-2 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
                {derivative.criticalPoints.map((point, index) => (
                  <li key={`${derivative.id}-cp-${index}`} className="rounded-md bg-white px-3 py-2 shadow-sm">
                    ({point.x}, {point.y})
                    {point.label && <span className="text-slate-500"> · {point.label}</span>}
                  </li>
                ))}
              </ul>
            )}
            {derivative.notes && <p className="mt-2 text-xs text-slate-500">{derivative.notes}</p>}
          </article>
        ))}
      </div>

      <div className="space-y-3">
        {spec.integrals.map((integral) => (
          <article key={integral.id} className="rounded-md border border-slate-100 bg-slate-50 p-4">
            <h4 className="text-sm font-semibold text-slate-900">Integral</h4>
            <p className="text-xs text-slate-600">∫ {integral.function} dx</p>
            <p className="text-xs text-slate-500">
              Límites: {integral.bounds.lower} → {integral.bounds.upper}
            </p>
            {integral.area !== undefined && (
              <p className="text-xs text-slate-500">Área: {integral.area}</p>
            )}
            {integral.notes && <p className="mt-2 text-xs text-slate-500">{integral.notes}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
