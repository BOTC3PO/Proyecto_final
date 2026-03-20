import type { GeometriaPlanaEspacialSpec } from "../types";

type GeometriaPlanaEspacialVisualizerProps = {
  spec: GeometriaPlanaEspacialSpec;
};

const dimensionLabels: Record<GeometriaPlanaEspacialSpec["figures"][number]["dimension"], string> = {
  plana: "Plana",
  espacial: "Espacial",
};

export default function GeometriaPlanaEspacialVisualizer({
  spec,
}: GeometriaPlanaEspacialVisualizerProps) {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Geometría plana y espacial
        </p>
        <h3 className="text-lg font-semibold text-slate-900">
          {spec.title ?? "Figuras y construcciones"}
        </h3>
        {spec.description && (
          <p className="text-sm text-slate-600">{spec.description}</p>
        )}
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {spec.figures.map((figure) => (
          <article
            key={figure.id}
            className="space-y-3 rounded-md border border-slate-100 bg-slate-50 p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-900">{figure.name}</h4>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                {dimensionLabels[figure.dimension]}
              </span>
            </div>
            <div className="space-y-1 text-xs text-slate-600">
              {figure.parameters.map((parameter) => (
                <p key={`${figure.id}-${parameter.label}`}>
                  <span className="font-semibold text-slate-800">
                    {parameter.label}:
                  </span>{" "}
                  {parameter.value}
                  {parameter.unit ? ` ${parameter.unit}` : ""}
                </p>
              ))}
            </div>
            {figure.angles && figure.angles.length > 0 && (
              <div className="rounded-md border border-dashed border-slate-200 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Ángulos
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  {figure.angles.map((angle) => (
                    <li key={angle.id}>
                      {angle.label ?? angle.vertex}: {angle.valueDeg}°
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {figure.properties && figure.properties.length > 0 && (
              <ul className="space-y-1 text-xs text-slate-600">
                {figure.properties.map((property) => (
                  <li key={`${figure.id}-${property.label}`}>
                    <span className="font-semibold text-slate-800">
                      {property.label}:
                    </span>{" "}
                    {property.value}
                  </li>
                ))}
              </ul>
            )}
            {figure.formula && (
              <p className="text-xs text-slate-500">Fórmula: {figure.formula}</p>
            )}
            {figure.notes && <p className="text-xs text-slate-500">{figure.notes}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
