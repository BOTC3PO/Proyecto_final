import type { FuncionesGraficoSpec } from "../types";

type FuncionesGraficoVisualizerProps = {
  spec: FuncionesGraficoSpec;
};

export default function FuncionesGraficoVisualizer({ spec }: FuncionesGraficoVisualizerProps) {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Funciones</p>
        <h3 className="text-lg font-semibold text-slate-900">{spec.title ?? "Funciones y gráficas"}</h3>
        {spec.description && <p className="text-sm text-slate-600">{spec.description}</p>}
      </header>
      <div className="space-y-3">
        {spec.functions.map((entry) => (
          <div
            key={entry.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-slate-100 bg-slate-50 px-4 py-3"
          >
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">{entry.expression}</p>
              {(entry.domain || entry.notes) && (
                <p className="text-xs text-slate-500">
                  {[entry.domain ? `Dominio: ${entry.domain}` : null, entry.notes].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: entry.color ?? "#2563EB" }}
            >
              {entry.color ?? "#2563EB"}
            </span>
          </div>
        ))}
      </div>
      {spec.variables && spec.variables.length > 0 && (
        <div className="rounded-md border border-dashed border-slate-200 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Variables</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            {spec.variables.map((variable) => (
              <li key={variable.symbol}>
                <span className="font-semibold text-slate-900">{variable.symbol}</span>
                {variable.description && <span className="text-slate-500"> — {variable.description}</span>}
                {variable.value !== undefined && (
                  <span className="text-slate-500"> ({variable.value})</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
