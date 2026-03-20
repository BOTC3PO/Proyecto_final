import type { GeometriaSpec } from "../types";

type GeometriaVisualizerProps = {
  spec: GeometriaSpec;
};

const typeLabel: Record<GeometriaSpec["figures"][number]["type"], string> = {
  triangulo: "Triángulo",
  circulo: "Círculo",
  poligono: "Polígono",
  otro: "Figura",
};

export default function GeometriaVisualizer({ spec }: GeometriaVisualizerProps) {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Geometría</p>
        <h3 className="text-lg font-semibold text-slate-900">{spec.title ?? "Formas y propiedades"}</h3>
        {spec.description && <p className="text-sm text-slate-600">{spec.description}</p>}
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {spec.figures.map((figure) => (
          <article key={figure.id} className="space-y-2 rounded-md border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-slate-900">{figure.name}</h4>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {typeLabel[figure.type]}
              </span>
            </div>
            {figure.formula && <p className="text-xs text-slate-500">Fórmula: {figure.formula}</p>}
            {figure.properties && figure.properties.length > 0 && (
              <ul className="space-y-1 text-xs text-slate-600">
                {figure.properties.map((property) => (
                  <li key={`${figure.id}-${property.label}`}>
                    <span className="font-semibold text-slate-800">{property.label}:</span> {property.value}
                  </li>
                ))}
              </ul>
            )}
            {figure.notes && <p className="text-xs text-slate-500">{figure.notes}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
