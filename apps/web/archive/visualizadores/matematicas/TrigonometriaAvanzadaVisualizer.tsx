import type { TrigonometriaAvanzadaSpec } from "../types";

type TrigonometriaAvanzadaVisualizerProps = {
  spec: TrigonometriaAvanzadaSpec;
};

const functionLabels: Record<TrigonometriaAvanzadaSpec["functions"][number]["type"], string> = {
  seno: "Seno",
  coseno: "Coseno",
  tangente: "Tangente",
};

export default function TrigonometriaAvanzadaVisualizer({
  spec,
}: TrigonometriaAvanzadaVisualizerProps) {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Trigonometría avanzada
        </p>
        <h3 className="text-lg font-semibold text-slate-900">
          {spec.title ?? "Círculo unitario y funciones"}
        </h3>
        {spec.description && (
          <p className="text-sm text-slate-600">{spec.description}</p>
        )}
      </header>

      <div className="rounded-md border border-dashed border-slate-200 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Círculo unitario
        </p>
        <p className="mt-2 text-sm text-slate-700">Radio: {spec.unitCircle.radius}</p>
        <ul className="mt-3 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
          {spec.unitCircle.points.map((point) => (
            <li
              key={`${point.angleDeg}-${point.x}-${point.y}`}
              className="rounded-md bg-white px-3 py-2 shadow-sm"
            >
              {point.label ?? `${point.angleDeg}°`} → ({point.x}, {point.y})
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        {spec.functions.map((func) => (
          <article key={func.id} className="rounded-md border border-slate-100 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-900">
                {functionLabels[func.type]}
              </h4>
              {func.expression && (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                  {func.expression}
                </span>
              )}
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Amplitud: {func.amplitude ?? "-"} · Periodo: {func.period ?? "-"} · Fase: {func.phaseShift ?? "-"}
            </p>
            <ul className="mt-2 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
              {func.keyPoints.map((point, index) => (
                <li key={`${func.id}-kp-${index}`} className="rounded-md bg-white px-3 py-2 shadow-sm">
                  ({point.x}, {point.y})
                  {point.label && <span className="text-slate-500"> · {point.label}</span>}
                </li>
              ))}
            </ul>
            {func.notes && <p className="mt-2 text-xs text-slate-500">{func.notes}</p>}
          </article>
        ))}
      </div>

      {spec.angles && spec.angles.length > 0 && (
        <div className="rounded-md border border-dashed border-slate-200 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Ángulos destacados
          </p>
          <ul className="mt-2 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
            {spec.angles.map((angle) => (
              <li key={angle.id} className="rounded-md bg-white px-3 py-2 shadow-sm">
                {angle.label}: {angle.valueDeg}°
                {angle.valueRad && <span className="text-slate-500"> · {angle.valueRad}</span>}
                {angle.ratio && <span className="text-slate-500"> · {angle.ratio}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
