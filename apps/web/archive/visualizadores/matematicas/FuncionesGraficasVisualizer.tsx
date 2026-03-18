import type { FuncionesGraficasSpec } from "../types";

type FuncionesGraficasVisualizerProps = {
  spec: FuncionesGraficasSpec;
};

const typeLabels: Record<FuncionesGraficasSpec["functions"][number]["type"], string> = {
  lineal: "Lineal",
  cuadratica: "Cuadrática",
  parametrica: "Paramétrica",
};

export default function FuncionesGraficasVisualizer({
  spec,
}: FuncionesGraficasVisualizerProps) {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Funciones gráficas
        </p>
        <h3 className="text-lg font-semibold text-slate-900">
          {spec.title ?? "Funciones y curvas"}
        </h3>
        {spec.description && (
          <p className="text-sm text-slate-600">{spec.description}</p>
        )}
      </header>

      <div className="rounded-md border border-dashed border-slate-200 p-4 text-sm text-slate-600">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Ejes
        </p>
        <p className="mt-2">
          Eje X: {spec.axes.x.label ?? "x"} ({spec.axes.x.min} → {spec.axes.x.max})
        </p>
        <p>
          Eje Y: {spec.axes.y.label ?? "y"} ({spec.axes.y.min} → {spec.axes.y.max})
        </p>
      </div>

      <div className="space-y-3">
        {spec.functions.map((func) => (
          <article
            key={func.id}
            className="rounded-md border border-slate-100 bg-slate-50 p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {func.expression}
                </p>
                <p className="text-xs text-slate-500">
                  {typeLabels[func.type]} · Dominio [{func.domain.start}, {func.domain.end}]
                </p>
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: func.color ?? "#2563EB" }}
              >
                {func.color ?? "#2563EB"}
              </span>
            </div>
            {func.parametric && (
              <p className="mt-2 text-xs text-slate-500">
                x(t) = {func.parametric.x} · y(t) = {func.parametric.y} · {func.parametric.parameter} ∈ [{func.parametric.range.start},{" "}
                {func.parametric.range.end}]
              </p>
            )}
            {func.keyPoints && func.keyPoints.length > 0 && (
              <ul className="mt-2 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
                {func.keyPoints.map((point, index) => (
                  <li
                    key={`${func.id}-point-${index}`}
                    className="rounded-md bg-white px-3 py-2 shadow-sm"
                  >
                    ({point.x}, {point.y})
                    {point.label && (
                      <span className="text-slate-500"> · {point.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {func.notes && <p className="mt-2 text-xs text-slate-500">{func.notes}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
