import type { AlgebraCalculoSpec } from "../types";

type AlgebraCalculoVisualizerProps = {
  spec: AlgebraCalculoSpec;
};

export default function AlgebraCalculoVisualizer({ spec }: AlgebraCalculoVisualizerProps) {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Álgebra & Cálculo</p>
        <h3 className="text-lg font-semibold text-slate-900">{spec.title ?? "Procedimientos y fórmulas"}</h3>
        {spec.description && <p className="text-sm text-slate-600">{spec.description}</p>}
      </header>
      <div className="space-y-3">
        {spec.topics.map((topic) => (
          <article key={topic.id} className="rounded-md border border-slate-100 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-900">{topic.label}</h4>
              {topic.formula && (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                  {topic.formula}
                </span>
              )}
            </div>
            {topic.steps && topic.steps.length > 0 && (
              <ol className="mt-3 list-decimal space-y-1 pl-4 text-xs text-slate-600">
                {topic.steps.map((step, index) => (
                  <li key={`${topic.id}-step-${index}`}>{step}</li>
                ))}
              </ol>
            )}
            {topic.notes && <p className="mt-2 text-xs text-slate-500">{topic.notes}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
